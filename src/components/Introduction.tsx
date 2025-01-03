import React from "react";
import styled from "styled-components";
import MediaIcons from "./MediaIcons";

const IntroductionContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #344563;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  text-align: center;
  color: lightgreen;
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  width: 90%;
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
      <Title>Hey there. I&apos;m Santiago Cárdenas</Title>
      <Subtitle>I&apos;m a software developer</Subtitle>
      <Paragraph>
        I can help you build a product, feature, or website. Look through some
        of my work and experience! If you like what you see and have a project
        you need to code, don&apos;t hesitate to contact me.
      </Paragraph>
      <MediaIcons />
    </IntroductionContainer>
  );
};

export default Introduction;
