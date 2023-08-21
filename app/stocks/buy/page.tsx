"use client";
import { Container } from "./styles";

import { useState } from "react";
import Header from "./Header";

export default function BuyStock() {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
    </Container>
  );
}
