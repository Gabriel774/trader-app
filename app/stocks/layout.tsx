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
import { Header } from "../components/organisms";
import store from "../store";
import { useEffect, useState } from "react";
import { fetchUserData } from "../helpers/fetchUserData";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<any>(store.getState());

  useEffect(() => {
    fetchUserData(state.user.auth_token!);
  }, []);

  store.subscribe(() => {
    setState(store.getState().user);
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header state={state} />
        <ChildrenWrapper>
          <ChildrenContainer>{children}</ChildrenContainer>
        </ChildrenWrapper>

        <BalanceContainer>
          <BalanceTitle>Saldo</BalanceTitle>
          <BalanceValue>R$ {state?.balance}</BalanceValue>
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
    </ThemeProvider>
  );
}
