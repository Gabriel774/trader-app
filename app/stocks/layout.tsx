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

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <ChildrenWrapper>
          <ChildrenContainer>{children}</ChildrenContainer>
        </ChildrenWrapper>

        <BalanceContainer>
          <BalanceTitle>Saldo</BalanceTitle>
          <BalanceValue>R$ 10.000</BalanceValue>
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
