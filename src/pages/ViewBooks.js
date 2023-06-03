import React from "react";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
} from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import Books from "../components/Books";

const ViewBooks = () => {
  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>Books Library</HeadTitle>
          <Books />
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default ViewBooks;
