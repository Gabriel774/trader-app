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
  value: string | number;
  setValue: (e: ChangeEvent<any>) => void;
  styles?: CSSProperties;
  containerStyles?: CSSProperties;
  labelStyles?: CSSProperties;
  Icon?: IconType;
  password?: boolean;
  showReveal?: boolean;
  id?: string;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  labelBackground?: string;
  disabled?: boolean;
  type?: string;
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
  labelBackground,
  containerStyles,
  labelStyles,
  disabled,
  type,
}: InputProps) {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputPassword, setInputPassword] = useState(password ? true : false);

  const checkText = () => (value === "" ? setActive(false) : setActive(true));

  useEffect(() => {
    checkText();
  }, [value]);

  return (
    <InputContainer style={containerStyles}>
      <InputStyled
        type={type ? type : inputPassword ? "password" : "text"}
        ref={inputRef}
        disabled={disabled}
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
      <Label
        $background={labelBackground}
        style={labelStyles}
        $active={active}
        onClick={() => inputRef.current!.focus()}
      >
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
