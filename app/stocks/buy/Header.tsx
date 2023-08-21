import { Button } from "@/app/components/atoms";
import { HeaderContainer, HeaderRow } from "./styles";
import { Input } from "@/app/components/molecules";
import Select from "react-select";
import { theme } from "@/app/theme";
import { AiOutlineSearch } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

const sortOptions = [
  { value: { prop: "name", order: "ASC" }, label: "A-Z" },
  { value: { prop: "value", order: "ASC" }, label: "Maior valor" },
  { value: { prop: "value", order: "DESC" }, label: "Menor valor" },
];

interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Header({ search, setSearch }: HeaderProps) {
  return (
    <HeaderContainer>
      <Input
        label="Pesquisar"
        setValue={(e) => setSearch(e.currentTarget.value)}
        containerStyles={{ margin: 0, flex: 1 }}
        value={search}
        Icon={AiOutlineSearch}
      />

      <HeaderRow>
        <Select
          isSearchable={false}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "transparent",
              height: "100%",
              borderColor: theme.secondaryColor100,
              boxShadow: `0`,
              outline: "none",
              ":hover": { borderColor: theme.secondaryColor200 },
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: theme.secondaryColor100,
            }),
            container: (baseStyles, props) => ({
              ...baseStyles,
              color: theme.backgroundColor300,
              minWidth: 250,
            }),
            singleValue: (baseStyles, props) => ({
              ...baseStyles,
              color: theme.secondaryColor500,
            }),
            option: (baseStyles, props) => ({
              ...baseStyles,
              backgroundColor: props.isFocused
                ? theme.primaryColor100
                : theme.secondaryColor500,

              color: props.isFocused
                ? theme.secondaryColor500
                : theme.backgroundColor100,
              ":active": {
                backgroundColor: theme.primaryColor200,
              },
            }),
          }}
          options={sortOptions}
          placeholder="Ordenar por"
          isClearable={true}
        />
        <Button
          $background="primaryColor100"
          $hover="primaryColor200"
          $text="secondaryColor500"
          style={{ fontSize: 18, minWidth: 200 }}
        >
          Finalizar dia
        </Button>
      </HeaderRow>
    </HeaderContainer>
  );
}
