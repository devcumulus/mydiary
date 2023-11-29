import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  const BotBar = styled.footer`
    display: flex;
    width: 912px;
    height: 80px;
    padding: 0px 16px 0px 4px;
    align-items: center;
    gap: 276px;
    flex-shrink: 0;
  `;

  return <BotBar>홍길동</BotBar>;
};

export default Footer;
