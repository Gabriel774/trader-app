"use client";
import { ThemeProvider } from "styled-components";
import "../globals.css";
import { theme } from "../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BalanceContainer,
  BalanceTitle,
  BalanceValue,
  ChildrenContainer,
  ChildrenWrapper,
  Container,
} from "./layoutStyles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Header, UserMenu } from "../components/organisms";
import store from "../store";
import { useEffect, useState } from "react";
import { fetchUserData } from "../fetchs/fetchUserData";
import "react-loading-skeleton/dist/skeleton.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<any>(store.getState());
  const [userMenuActive, setUserMenuActive] = useState(false);

  const changeUserMenuActive = (value: boolean) => {
    if (state.user.name) setUserMenuActive(value);
  };

  useEffect(() => {
    fetchUserData(state.user.auth_token!);
  }, []);

  store.subscribe(() => {
    setState(store.getState());
  });

  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        baseColor={theme.secondaryColor200}
        highlightColor={theme.secondaryColor600}
      >
        <Container>
          <Header setModalActive={changeUserMenuActive} state={state.user} />
          <ChildrenWrapper>
            <ChildrenContainer>{children}</ChildrenContainer>
          </ChildrenWrapper>

          <BalanceContainer>
            <BalanceTitle>Saldo</BalanceTitle>
            <BalanceValue>
              R$ {state?.user.balance || <Skeleton width={55} height={15} />}
            </BalanceValue>
          </BalanceContainer>

          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Container>
        <UserMenu
          state={state.user}
          active={userMenuActive}
          setActive={setUserMenuActive}
        />
      </SkeletonTheme>
    </ThemeProvider>
  );
}
