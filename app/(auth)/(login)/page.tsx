"use client";
import logo from "../../../public/logo.png";
import { Input } from "../../components/molecules";
import { BiSolidUser, BiSolidLock, BiLogIn } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  RegisterMessage,
  RegisterLink,
  Container,
  Logo,
  ErrorMessage,
} from "./styles";
import { Button, Loading } from "../../components/atoms";
import useLoginForm from "./forms/useLoginForm";

export default function Login() {
  const { form, loading } = useLoginForm();

  return (
    <Container onSubmit={form.handleSubmit}>
      <Logo src={logo} alt="TRADER" priority />
      <Input
        id={"name"}
        label="Nome de usuário"
        value={form.values.name}
        setValue={form.handleChange}
        styles={{ width: "100%" }}
        onBlur={form.handleBlur}
        Icon={BiSolidUser}
      />
      {form.touched.name && form.errors.name && (
        <ErrorMessage>{form.errors.name}</ErrorMessage>
      )}

      <Input
        id={"password"}
        label="Senha"
        value={form.values.password}
        setValue={form.handleChange}
        styles={{ width: "100%" }}
        password={true}
        onBlur={form.handleBlur}
        Icon={BiSolidLock}
        showReveal={true}
      />
      {form.touched.password && form.errors.password && (
        <ErrorMessage>{form.errors.password}</ErrorMessage>
      )}

      <Button
        $background="primaryColor100"
        $text="backgroundColor600"
        $hover="primaryColor200"
        style={{ width: "100%", marginTop: 25 }}
        type="submit"
      >
        {loading ? (
          <>
            <h3>Carregando</h3>
            <Loading size={20} color="secondaryColor400" />
          </>
        ) : (
          <>
            <h3>Fazer Login</h3>
            <BiLogIn fontSize={20} />
          </>
        )}
      </Button>

      <RegisterMessage>
        Não possui uma conta?{" "}
        <RegisterLink href={"/register"}>Registrar-se</RegisterLink>{" "}
      </RegisterMessage>
    </Container>
  );
}
