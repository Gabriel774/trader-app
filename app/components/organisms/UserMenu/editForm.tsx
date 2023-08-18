import { UserStateProps } from "@/app/store/user";
import { Input } from "../../molecules";
import { Button, Loading, ProfilePic } from "../../atoms";
import { AiOutlineEdit } from "react-icons/ai";
import { ErrorMessage, Form } from "./styles";
import useUpdateInfoForm from "./forms/useUpdateInfoForm";
import userPlaceHolder from "@/public/user.png";
import FileUpload from "../../molecules/FileUpload";
import { Dispatch, SetStateAction } from "react";

interface EditFormProps {
  state: UserStateProps;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function EditForm({
  state,
  loading,
  setLoading,
}: EditFormProps) {
  const { form, preview } = useUpdateInfoForm(state, loading, setLoading);

  return (
    <Form onSubmit={form.handleSubmit}>
      <ProfilePic
        style={{ alignSelf: "center", marginTop: 20 }}
        $size={150}
        $image={preview ? preview : userPlaceHolder.src}
      />

      <FileUpload
        id="profile_pic"
        styles={{ marginTop: 20 }}
        onChange={form.setFieldValue}
        disabled={loading}
      />
      {form.errors.profile_pic && form.touched.profile_pic && (
        <ErrorMessage>{form.errors.profile_pic}</ErrorMessage>
      )}

      <Input
        label="Nome de usuário"
        id="name"
        value={form.values.name}
        setValue={form.handleChange}
        labelBackground="backgroundColor250"
        containerStyles={{ width: "100%", marginTop: 15 }}
        onBlur={form.handleBlur}
        disabled={loading}
      />
      {form.errors.name && form.touched.name && (
        <ErrorMessage>{form.errors.name}</ErrorMessage>
      )}

      <Input
        id="password"
        value={form.values.password}
        setValue={form.handleChange}
        label="Senha"
        labelBackground="backgroundColor250"
        containerStyles={{ width: "100%", marginTop: 15 }}
        password={true}
        showReveal={true}
        onBlur={form.handleBlur}
        disabled={loading}
      />
      {form.errors.password && form.touched.password && (
        <ErrorMessage>{form.errors.password}</ErrorMessage>
      )}

      <Input
        id="password_confirm"
        value={form.values.password_confirm}
        setValue={form.handleChange}
        label="Confirmar senha"
        labelBackground="backgroundColor250"
        containerStyles={{ width: "100%", marginTop: 5 }}
        password={true}
        onBlur={form.handleBlur}
        disabled={loading}
      />
      {form.errors.password_confirm && form.touched.password_confirm && (
        <ErrorMessage>{form.errors.password_confirm}</ErrorMessage>
      )}

      <Button
        style={{ width: "100%", marginTop: 15 }}
        $background="primaryColor100"
        $text="secondaryColor400"
      >
        {loading ? (
          <>
            <span>Carregando</span>
            <Loading size={20} color="secondaryColor400" />
          </>
        ) : (
          <>
            <span>Salvar alterações</span>
            <AiOutlineEdit style={{ fontSize: 20 }} />
          </>
        )}
      </Button>
    </Form>
  );
}
