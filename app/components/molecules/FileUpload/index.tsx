import { CSSProperties } from "react";
import { InputFile, Label } from "./styles";
import { BsUpload } from "react-icons/bs";

interface FileUploadProps {
  id: string;
  styles?: CSSProperties;
  onChange: Function;
}

export default function FileUpload({ id, styles, onChange }: FileUploadProps) {
  return (
    <>
      <Label htmlFor={id} style={styles}>
        Fazer upload de foto de perfil <BsUpload fontSize={20} />
      </Label>
      <InputFile
        id={id}
        name={id}
        onChange={(event) => {
          onChange("profile_pic", event.currentTarget.files![0]);
        }}
      />
    </>
  );
}
