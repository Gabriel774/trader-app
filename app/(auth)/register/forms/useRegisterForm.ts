import { UserService } from "@/app/services";
import store from "@/app/store";
import { setAuthToken } from "@/app/store/user/actions";
import checkFileSize from "@/app/utils/checkFileSize";
import checkImage from "@/app/utils/checkImage";
import { toast } from "@/app/utils/toast";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/app/fetchs/fetchUserData";

export default function useRegisterForm() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<null | string>(null);
  const { push } = useRouter();

  const form = useFormik({
    initialValues: {
      name: "",
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
        .required("Campo obrigatório")
        .min(8, "A senha deve ter no mínimo 8 caracteres.")
        .max(30, "Senha muito longa"),
      password_confirm: yup
        .string()
        .required("Campo obrigatório")
        .min(8, "A senha deve ter no mínimo 8 caracteres.")
        .max(30, "Senha muito longa")
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
      const service = new UserService();

      try {
        await service.register(form.values);
        toast.success("Registrado com sucesso!");

        try {
          const login = await service.login(form.values);
          Cookies.set("auth_token", login.data.access_token, { expires: 2 });
          store.dispatch(setAuthToken(login.data.access_token));

          await fetchUserData(login.data.access_token);

          push("/stocks/tutorial");
        } catch (err: any) {
          push("/");
          toast.error("Erro ao fazer login");
        }
      } catch (err: any) {
        if (err.response.status == 409 || err.response.status == 400) {
          return toast.error("Oops, nome de usuário já existe");
        }
        toast.error("Oops, houve um erro no cadastro");
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

    setPreview(null);
  }, [form.values.profile_pic]);

  return { form, loading, preview };
}
