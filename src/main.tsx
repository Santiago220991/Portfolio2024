import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.tsx";
import styled from "styled-components";
import Introduction from "./components/Introduction.tsx";

const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainContainer>
      <Header />
      <Introduction />
    </MainContainer>
  </StrictMode>
);
