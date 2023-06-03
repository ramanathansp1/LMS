import React from "react";

import { FooterHeadContainer, FooterHeadText } from "./Styles";

const FooterBottom = () => {
  return (
    <FooterHeadContainer>
      <FooterHeadText>
        &copy; {new Date().getFullYear()} Copyright: Library Management System
      </FooterHeadText>
    </FooterHeadContainer>
  );
};

export default FooterBottom;
