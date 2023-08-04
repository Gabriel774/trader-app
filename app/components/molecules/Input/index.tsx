"use client";
import {
  CSSProperties,
  ChangeEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  CheckBox,
  CheckBoxContainer,
  CheckBoxLabel,
  IconContainer,
  InputContainer,
  InputStyled,
  Label,
} from "./styles";
import { IconType } from "react-icons";

interface InputProps {
  label: string;
  value: string;
  setValue: (e: ChangeEvent<any>) => void;
  styles?: CSSProperties;
  Icon?: IconType;
  password?: boolean;
  showReveal?: boolean;
  id?: string;
  onBlur?: (e: FocusEvent<any, Element>) => void;
}

export default function Input({
  label,
  value,
  setValue,
  styles,
  Icon,
  password,
  showReveal,
  id,
  onBlur,
}: InputProps) {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputPassword, setInputPassword] = useState(password ? true : false);

  const checkText = () => (value === "" ? setActive(false) : setActive(true));

  useEffect(() => {
    checkText();
  }, [value]);

  return (
    <InputContainer>
      <InputStyled
        type={inputPassword ? "password" : "text"}
        ref={inputRef}
        name={id}
        id={id}
        style={styles}
        $paddingRight={Icon ? 45 : 14}
        value={value}
        onInput={setValue}
        onFocus={() => setActive(true)}
        onBlur={(e) => {
          if (onBlur) onBlur(e);
          checkText();
        }}
      />
      <Label $active={active} onClick={() => inputRef.current!.focus()}>
        {label}
      </Label>
      {Icon && (
        <IconContainer
          $active={active}
          onClick={() => inputRef.current!.focus()}
        >
          <Icon fontSize={18} />
        </IconContainer>
      )}
      {password && showReveal && (
        <CheckBoxContainer onClick={() => setInputPassword(!inputPassword)}>
          <CheckBox readOnly checked={!inputPassword} type="checkbox" />
          <CheckBoxLabel>Mostrar senha</CheckBoxLabel>
        </CheckBoxContainer>
      )}
    </InputContainer>
  );
}
