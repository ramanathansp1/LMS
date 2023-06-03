import React from "react";
import { GlobalStyle, HeadTitle } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";

const Borrow = () => {
  return (
    <div>
      <GlobalStyle />
      <NavbarHead />
      <HeadTitle style={{ marginTop: "130px" }}>Your Books</HeadTitle>
      <FooterBottom />
    </div>
  );
};

export default Borrow;
