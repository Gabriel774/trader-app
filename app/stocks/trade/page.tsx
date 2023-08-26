"use client";
import { CardContainer, Container } from "./styles";
import Header from "./Header";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";
import useTradeState from "./useTradeState";

export default function TradeStock() {
  const {
    data,
    search,
    setSearch,
    tradeStock,
    setSortBy,
    sortBy,
    loading,
    updateStocksValue,
    isUserSet,
  } = useTradeState();

  return (
    <Container>
      <Header
        sortBy={sortBy}
        setSortBy={setSortBy}
        search={search}
        setSearch={setSearch}
        loading={loading}
        updateStocksValue={updateStocksValue}
      />

      <CardContainer>
        {data() && isUserSet ? (
          data()!
            .filter((stock) =>
              stock.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((stock) => (
              <Card
                data={stock}
                loading={loading}
                tradeStock={tradeStock}
                key={stock.id}
              />
            ))
        ) : (
          <>
            {Array(12)
              .fill(true)
              .map((_, i) => (
                <Skeleton key={i} height={250} />
              ))}
          </>
        )}
      </CardContainer>
    </Container>
  );
}
