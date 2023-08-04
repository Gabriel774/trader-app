import { UserService } from "@/app/services";
import store from "@/app/store";
import { setAuthToken } from "@/app/store/user/actions";
import { toast } from "@/app/utils/toast";
import { useFormik } from "formik";
import { useState } from "react";
import Cookies from "js-cookie";
import * as yup from "yup";

export default function useLoginForm() {
  const [loading, setLoading] = useState(false);

  const form = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Campo obrigatório")
        .min(3, "Nome de usuário muito curto")
        .max(50, "Nome de usuário muito grande"),
      password: yup
        .string()
        .required("Campo obrigatório")
        .min(8, "A senha deve ter no mínimo 8 caracteres.")
        .max(30, "Senha muito longa"),
    }),
    onSubmit: async () => {
      setLoading(true);
      const service = new UserService();

      try {
        const res = await service.login(form.values);

        Cookies.set("auth_token", res.data.access_token, { expires: 2 });
        store.dispatch(setAuthToken(res.data.access_token));

        toast.success("Logado com sucesso!");
      } catch (err: any) {
        console.log(err);
        toast.error("Oops, Credenciais inválidas");
      }

      setLoading(false);
    },
  });

  return { form, loading };
}
