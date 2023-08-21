import { image_url_prefix } from "@/app/constants";
import { UserService } from "@/app/services";
import store from "@/app/store";
import { UserStateProps } from "@/app/store/user";
import { setName, setProfilePic } from "@/app/store/user/actions";
import checkFileSize from "@/app/utils/checkFileSize";
import checkImage from "@/app/utils/checkImage";
import { toast } from "@/app/utils/toast";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";

export default function useUpdateInfoForm(
  state: UserStateProps,
  loading: boolean,
  setLoading: (value: boolean) => void
) {
  const profile_pic_url = state.profile_pic
    ? image_url_prefix + state.profile_pic
    : undefined;

  const [preview, setPreview] = useState<null | string>(
    profile_pic_url || null
  );

  const form = useFormik({
    initialValues: {
      name: state.name,
      password: "",
      password_confirm: "",
      profile_pic: null,
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Campo obrigatório")
        .min(3, "Nome de usuário muito curto")
        .max(16, "Nome de usuário muito grande"),
      password: yup
        .string()
        .nullable()
        .min(8, "A senha deve ter no mínimo 8 caracteres.")
        .max(30, "Senha muito longa"),
      password_confirm: yup
        .string()
        .nullable()
        .min(8, "A senha deve ter no mínimo 8 caracteres.")
        .max(30, "Senha muito longa")
        .test({
          name: "is-password-set",
          message: "Confirme a sua senha",
          params: {},
          test: (value, context) => {
            if (context.parent.password)
              return value !== undefined && context.parent.password;
            return true;
          },
        })
        .oneOf([yup.ref("password")], "Senhas não coincidem"),
      profile_pic: yup
        .mixed()
        .nullable()
        .test("is-correct-file", "Imagem inválida", (value) => {
          if (!value) return true;
          return checkImage(value);
        })
        .test("is-big-file", "Imagem muito grande", (value) => {
          if (!value) return true;
          return checkFileSize(value);
        }),
    }),
    onSubmit: async () => {
      if (loading) return;
      setLoading(true);
      const service = new UserService(state.auth_token);

      try {
        const res = await service.update(form.values);

        store.dispatch(setName(res.data.name));
        if (form.values.profile_pic)
          store.dispatch(setProfilePic(res.data.profile_pic));

        toast.success("Informações atualizadas com sucesso!");
      } catch (err: any) {
        if (err.response.status === 400) {
          toast.error("Oops, nome de usuário já existente");
        } else toast.error("Oops, houve um erro ao atualizar informações");
      }

      setLoading(false);
    },
  });

  useEffect(() => {
    if (checkImage(form.values.profile_pic)) {
      const imageUrl = URL.createObjectURL(form.values.profile_pic!);

      return setPreview(imageUrl);
    }

    if (form.values.profile_pic !== null) {
      form.setFieldTouched("profile_pic", true);
    }

    setPreview(profile_pic_url || null);
  }, [form.values.profile_pic]);

  return { form, preview };
}
