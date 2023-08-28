"use client";
import { ProfilePic } from "@/app/components/atoms";
import {
  Card,
  CardBalance,
  CardContainer,
  CardProfilePicWrapper,
  CardRank,
  CardTextContainer,
  CardUserInfo,
  CardUsername,
  Container,
  Title,
} from "./styles";
import { FaRankingStar } from "react-icons/fa6";
import userPlaceHolder from "@/public/user.png";
import { truncate } from "@/app/utils/truncate";
import { useEffect, useState } from "react";
import store from "@/app/store";
import { fetchRankData } from "@/app/fetchs/fetchRankData";
import { image_url_prefix } from "@/app/constants";
import Skeleton from "react-loading-skeleton";

interface DataProps {
  name: string;
  balance: number;
  profile_pic: null | string;
}

export default function Ranking() {
  const [data, setData] = useState<null | DataProps[]>(null);
  const state = store.getState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetchRankData(state.user.auth_token!);
    if (res) {
      setData(res.data);
    }
  };

  return (
    <Container>
      <Title>
        <FaRankingStar fontSize={35} />
        <span>Ranking de usuários com maior saldo</span>
      </Title>
      <CardContainer>
        {data ? (
          data.map((user, i) => {
            return (
              <Card $delay={(i + 1) / 10 + 0.39} key={i}>
                <CardRank>{i + 1}</CardRank>
                <CardUserInfo>
                  <CardProfilePicWrapper>
                    <ProfilePic
                      $image={
                        user.profile_pic
                          ? image_url_prefix + user.profile_pic
                          : userPlaceHolder.src
                      }
                      $size={70}
                    />
                  </CardProfilePicWrapper>
                  <CardTextContainer>
                    <CardUsername>{user.name}</CardUsername>
                    <CardBalance>
                      R$ {truncate(user.balance.toLocaleString(), 16)}
                    </CardBalance>
                  </CardTextContainer>
                </CardUserInfo>
              </Card>
            );
          })
        ) : (
          <>
            {Array(12)
              .fill(true)
              .map((_, i) => (
                <Skeleton key={i} height={100} />
              ))}
          </>
        )}
      </CardContainer>
    </Container>
  );
}
