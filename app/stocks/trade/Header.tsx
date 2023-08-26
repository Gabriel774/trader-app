import { Button, Loading } from "@/app/components/atoms";
import { HeaderContainer, HeaderRow } from "./styles";
import { Input } from "@/app/components/molecules";
import Select from "react-select";
import { AiOutlineSearch } from "react-icons/ai";
import { Dispatch, SetStateAction, useState } from "react";
import selectStyles from "@/app/utils/selectStyles";

const sortOptions = [
  { value: "highestPrice", label: "Maior valor" },
  { value: "lowestPrice", label: "Menor valor" },
];

interface HeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sortBy: "highestPrice" | "lowestPrice" | "default";
  setSortBy: Dispatch<
    SetStateAction<"highestPrice" | "lowestPrice" | "default">
  >;
  loading: boolean;
  updateStocksValue: () => Promise<void>;
}

export default function Header({
  search,
  setSearch,
  setSortBy,
  sortBy,
  loading,
  updateStocksValue,
}: HeaderProps) {
  const [updateStockLoading, setUpdateStockLoading] = useState(false);

  const changeLoading = async () => {
    setUpdateStockLoading(true);

    await updateStocksValue();

    setUpdateStockLoading(false);
  };

  return (
    <HeaderContainer>
      <Input
        label="Pesquisar"
        setValue={(e) => setSearch(e.currentTarget.value)}
        containerStyles={{ margin: 0, flex: 1 }}
        value={search}
        Icon={AiOutlineSearch}
        disabled={loading}
      />

      <HeaderRow>
        <Select
          isSearchable={false}
          styles={selectStyles}
          options={sortOptions}
          placeholder="Ordenar por"
          isClearable={true}
          onChange={(option: any) =>
            setSortBy(option ? option.value : "default")
          }
          isDisabled={loading}
        />

        <Button
          $background="primaryColor100"
          $hover="primaryColor200"
          $text="secondaryColor500"
          style={{ fontSize: 18, minWidth: 200 }}
          onClick={() => changeLoading()}
        >
          {updateStockLoading ? (
            <>
              <span>Carregando</span>
              <Loading size={20} color="secondaryColor400" />
            </>
          ) : (
            <span>Finalizar dia</span>
          )}
        </Button>
      </HeaderRow>
    </HeaderContainer>
  );
}
