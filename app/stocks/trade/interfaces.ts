export interface Stock {
  id: number;
  name: string;
  initial_value: number;
  company_logo: string;
  UserStocks: {
    id: number;
    quantity: number;
    stockId: number;
    userId: number;
    value: number;
  }[];
}

export interface TradeStockProps {
  userStockId: number;
  quantity: number;
  ownedQuantity: number;
  price: number;
  type: boolean;
}

export interface TransactionProps {
  data: {
    userStockId: number;
    quantity: number;
    ownedQuantity: number;
    price: number;
    type: boolean;
  };
  type: "buy" | "sell";
}

export interface CardProps {
  data: {
    id: number;
    name: string;
    initial_value: number;
    company_logo: string;
    UserStocks: {
      id: number;
      quantity: number;
      stockId: number;
      userId: number;
      value: number;
    }[];
  };
  tradeStock: ({
    userStockId,
    quantity,
    ownedQuantity,
    price,
    type,
  }: TradeStockProps) => Promise<boolean>;
  loading: boolean;
  balance: number;
}
