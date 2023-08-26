import { StockService } from "@/app/services";
import store from "@/app/store";
import { toast } from "@/app/utils/toast";
import { useEffect, useState } from "react";
import { Stock, TradeStockProps } from "./interfaces";
import { setBalance } from "@/app/store/user/actions";

export default function useTradeState() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<null | Stock[]>(null);
  const [sortBy, setSortBy] = useState<
    "highestPrice" | "lowestPrice" | "default"
  >("default");
  const state = store.getState();
  const isUserSet = state.user.name;
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const service = new StockService(state.user.auth_token);
    const res = await service.getStocks();
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const validateTradeStock = (
    quantity: number,
    price: number,
    ownedQuantity: number,
    type: boolean
  ) => {
    if (quantity < 1) {
      toast.error("Valor inválido");
      return false;
    }

    if (quantity * price > Number(state.user.balance) && type === true) {
      toast.error("Saldo insuficiente");
      return false;
    }

    if (quantity > ownedQuantity && type === false) {
      toast.error("Ações insuficientes para venda");
      return false;
    }

    return true;
  };

  const tradeStock = async ({
    userStockId,
    quantity,
    ownedQuantity,
    price,
    type,
  }: TradeStockProps) => {
    if (!validateTradeStock(quantity, price, ownedQuantity, type)) return;

    const service = new StockService(state.user.auth_token);

    const res = await service.updateQuantity({
      quantity,
      stock_id: userStockId,
      type,
    });

    const newData = [...data!];

    newData.map((stock) => {
      if (stock.UserStocks[0].id === res.data.id) {
        stock.UserStocks[0].quantity = res.data.new_quantity;
      }
    });

    store.dispatch(setBalance(res.data.new_balance));

    console.log(res);
  };

  const updateStocksValue = async () => {
    setLoading(true);
    const service = new StockService(state.user.auth_token);

    const res = await service.updateValues();

    setData(res.data);

    setLoading(false);
  };

  const sortedData = () => {
    if (sortBy === "default")
      return data?.sort((a, b) => a.name.localeCompare(b.name));

    if (sortBy === "highestPrice") {
      return data?.sort((p1, p2) =>
        p1.UserStocks[0].value < p2.UserStocks[0].value
          ? 1
          : p1.UserStocks[0].value > p2.UserStocks[0].value
          ? -1
          : 0
      );
    }

    return data?.sort((p1, p2) =>
      p1.UserStocks[0].value > p2.UserStocks[0].value
        ? 1
        : p1.UserStocks[0].value < p2.UserStocks[0].value
        ? -1
        : 0
    );
  };

  return {
    data: sortedData,
    tradeStock,
    search,
    setSearch,
    sortBy,
    setSortBy,
    loading,
    updateStocksValue,
    isUserSet,
  };
}
