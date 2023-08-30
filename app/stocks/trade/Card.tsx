import { Button, Loading, ProfilePic } from "@/app/components/atoms";
import {
  CardActionsContainer,
  CardBody,
  CardCompanyContainer,
  CardHeader,
  CardPriceRow,
  CardPriceText,
  CardQuantityRow,
  CardTitle,
  CompanyPic,
  CompanyStockPrice,
  Card as Container,
} from "./styles";
import { Input } from "@/app/components/molecules";
import { FocusEvent, useState } from "react";
import { image_url_prefix } from "@/app/constants";
import Skeleton from "react-loading-skeleton";
import { CardProps, TransactionProps } from "./interfaces";

export default function Card({ data, tradeStock, loading }: CardProps) {
  const [quantity, setQuantity] = useState<string | number>("");
  const [loadingTransaction, setLoadingTransaction] = useState<
    "sell" | "buy" | null
  >(null);

  const changeQuantity = (value: number) => {
    if (loading || loadingTransaction) return;
    if (value < 0) return setQuantity(0);
    setQuantity(value.toString().replace(/[^0-9]/g, ""));
  };

  const blur = (e: FocusEvent<any, Element>) =>
    e.target.value < 1 && setQuantity("");

  const transaction = async ({ data, type }: TransactionProps) => {
    if (loading || loadingTransaction) return;
    setLoadingTransaction(type);

    const res = await tradeStock(data);

    if (res) setQuantity("");

    setLoadingTransaction(null);
  };

  return (
    <Container>
      <CardHeader>
        <CardCompanyContainer>
          <CompanyPic>
            <ProfilePic
              $image={image_url_prefix + data.company_logo}
              $size={35}
            />
          </CompanyPic>

          <CardTitle>{data.name}</CardTitle>
        </CardCompanyContainer>

        <CompanyStockPrice>
          R${" "}
          {!loading ? (
            data.UserStocks[0].value.toLocaleString()
          ) : (
            <Skeleton height={18} width={40} />
          )}
        </CompanyStockPrice>
      </CardHeader>

      <CardBody>
        <CardPriceRow>
          <CardPriceText>Estoque</CardPriceText>

          <CardPriceText>
            {!loadingTransaction ? (
              data.UserStocks[0].quantity.toLocaleString()
            ) : (
              <Skeleton height={18} width={35} />
            )}
          </CardPriceText>
        </CardPriceRow>

        <CardQuantityRow>
          <Input
            label="Quantidade"
            setValue={(e) => changeQuantity(e.currentTarget.value)}
            value={quantity}
            containerStyles={{ marginTop: 0, width: "100%" }}
            styles={{ fontSize: 15 }}
            labelStyles={{ fontSize: 15 }}
            labelBackground="backgroundColor250"
            onBlur={(e) => blur(e)}
            disabled={loading}
          />

          <Button
            $background="secondaryColor500"
            $text="backgroundColor350"
            style={{
              width: 35,
              height: 35,
              borderRadius: "100%",
              fontSize: 25,
            }}
            onClick={() => changeQuantity(Number(quantity) - 1)}
          >
            -
          </Button>

          <Button
            $background="primaryColor100"
            $text="secondaryColor500"
            style={{
              width: 35,
              height: 35,
              borderRadius: "100%",
              fontSize: 25,
            }}
            onClick={() => changeQuantity(Number(quantity) + 1)}
          >
            +
          </Button>
        </CardQuantityRow>

        <CardActionsContainer>
          <Button
            $background="secondaryColor500"
            $text="backgroundColor300"
            style={{
              fontSize: 15,
              flex: 1,
            }}
            onClick={() =>
              transaction({
                data: {
                  userStockId: data.UserStocks[0].id,
                  quantity: Number(quantity),
                  ownedQuantity: data.UserStocks[0].quantity,
                  price: data.UserStocks[0].value,
                  type: false,
                },
                type: "sell",
              })
            }
          >
            {loadingTransaction === "sell" ? (
              <>
                <span>Carregando</span>
                <Loading size={20} color="backgroundColor300" />
              </>
            ) : (
              "Vender"
            )}
          </Button>

          <Button
            $background="primaryColor100"
            $text="secondaryColor500"
            style={{
              fontSize: 15,
              flex: 1,
            }}
            onClick={() => {
              transaction({
                data: {
                  userStockId: data.UserStocks[0].id,
                  quantity: Number(quantity),
                  ownedQuantity: data.UserStocks[0].quantity,
                  price: data.UserStocks[0].value,
                  type: true,
                },
                type: "buy",
              });
            }}
          >
            {loadingTransaction === "buy" ? (
              <>
                <span>Carregando</span>
                <Loading size={20} color="secondaryColor400" />
              </>
            ) : (
              "Comprar"
            )}
          </Button>
        </CardActionsContainer>
      </CardBody>
    </Container>
  );
}
