"use client";
import logo from "../../../public/logo.png";
import { Input } from "../../components/molecules";
import { BiSolidUser, BiSolidLock, BiLogIn } from "react-icons/bi";
import {
  RegisterMessage,
  RegisterLink,
  Container,
  Logo,
  ErrorMessage,
} from "./styles";
import { Button, Loading, ProfilePic } from "../../components/atoms";
import useRegisterForm from "./forms/useRegisterForm";
import FileUpload from "@/app/components/molecules/FileUpload";
import userPlaceHolder from "@/public/user.png";

export default function Register() {
  const { form, loading, preview } = useRegisterForm();

  return (
    <Container onSubmit={form.handleSubmit}>
      <Logo src={logo} alt="TRADER" priority />
      <Input
        label="Nome de usuário"
        id="name"
        value={form.values.name}
        setValue={form.handleChange}
        styles={{ width: "100%" }}
        Icon={BiSolidUser}
        onBlur={form.handleBlur}
        disabled={loading}
      />
      {form.touched.name && form.errors.name && (
        <ErrorMessage>{form.errors.name}</ErrorMessage>
      )}

      <Input
        label="Senha"
        id="password"
        value={form.values.password}
        setValue={form.handleChange}
        styles={{ width: "100%" }}
        password={true}
        Icon={BiSolidLock}
        showReveal={true}
        onBlur={form.handleBlur}
        disabled={loading}
      />
      {form.touched.password && form.errors.password && (
        <ErrorMessage>{form.errors.password}</ErrorMessage>
      )}

      <Input
        label="Confirmar senha"
        id="password_confirm"
        value={form.values.password_confirm}
        setValue={form.handleChange}
        styles={{ width: "100%" }}
        password={true}
        Icon={BiSolidLock}
        onBlur={form.handleBlur}
        disabled={loading}
      />
      {form.touched.password_confirm && form.errors.password_confirm && (
        <ErrorMessage>{form.errors.password_confirm}</ErrorMessage>
      )}

      <FileUpload
        id="profile_pic"
        styles={{ marginTop: 20 }}
        onChange={form.setFieldValue}
        disabled={loading}
      />
      {form.errors.profile_pic && form.touched.profile_pic && (
        <ErrorMessage>{form.errors.profile_pic}</ErrorMessage>
      )}

      <ProfilePic
        style={{ alignSelf: "center", marginTop: 20 }}
        $size={200}
        $image={preview ? preview : userPlaceHolder.src}
      />

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
            <h3>Registrar-se</h3>
            <BiLogIn fontSize={20} />
          </>
        )}
      </Button>

      <RegisterMessage>
        Já possui uma conta? <RegisterLink href={"/"}>Fazer Login</RegisterLink>
      </RegisterMessage>
    </Container>
  );
}
