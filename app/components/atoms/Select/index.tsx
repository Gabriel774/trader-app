import ReactSelect from "react-select";
import selectStyles from "./styles";
import { SetStateAction } from "react";

interface Props {
  sortOptions: {
    value: string;
    label: string;
  }[];
  setSortBy: (
    value: SetStateAction<"default" | "highestPrice" | "lowestPrice">
  ) => void;
  loading: boolean;
}

export default function Select({ loading, setSortBy, sortOptions }: Props) {
  return (
    <ReactSelect
      isSearchable={false}
      styles={selectStyles}
      options={sortOptions}
      placeholder="Ordenar por"
      isClearable={true}
      onChange={(option: any) => setSortBy(option ? option.value : "default")}
      isDisabled={loading}
    />
  );
}
