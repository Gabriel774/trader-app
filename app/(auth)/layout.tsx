"use client";
import { ThemeProvider } from "styled-components";
import "../globals.css";
import { Banner, Container, SpaceFill } from "./layoutStyles";
import { theme } from "../theme";
import background from "@/public/login-background.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {children}
        <Banner $imgURL={background.src}>&nbsp;</Banner>
        <SpaceFill />
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
