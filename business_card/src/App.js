import { useState } from "react";
import styled from "styled-components";
import BusinessContentItem from "./components/BusinessContentItem";
import Input from "./components/Input";

const AppContainer = styled.div`
  padding: 40px;

  & > div {
    margin-bottom: 10px;
  }
`;

const BusinessCard = styled.div`
  margin-top: 40px;

  width: 382px;
  height: 212px;

  padding: 50px;

  background-color: #ffffff;
  box-shadow: 0px 4px 15px 2px rgba(0, 0, 0, 0.1);
`;

const BusinessCardUsername = styled.div`
  color: #000000;

  font-size: 20px;
  font-weight: 700;

  text-align: center;
`;

const BusinessCardIntroText = styled.div`
  color: #000000;

  font-size: 10px;
  text-align: center;
`;

const BusinessContentContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
  column-gap: 8px;

  margin-top: 20px;
`;

function App() {
  const [username, setUsername] = useState("123123");
  const [introtext, setIntroText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insta, setInsta] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  return (
    <AppContainer>
      <Input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="이름"
      ></Input>
      <Input
        value={introtext}
        onChange={(e) => {
          setIntroText(e.target.value);
        }}
        placeholder="소개"
      ></Input>
      <Input
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        placeholder="전화번호"
      ></Input>
      <Input
        value={insta}
        onChange={(e) => {
          setInsta(e.target.value);
        }}
        placeholder="인스타"
      ></Input>
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="이메일"
      ></Input>
      <Input
        value={github}
        onChange={(e) => {
          setGithub(e.target.value);
        }}
        placeholder="깃헙"
      ></Input>
      <BusinessCard>
        <BusinessCardUsername>{username}</BusinessCardUsername>
        <BusinessCardIntroText>{introtext}</BusinessCardIntroText>
        <BusinessContentContainer>
          <BusinessContentItem
            type="Tel"
            text={phoneNumber}
          ></BusinessContentItem>
          <BusinessContentItem type="Insta" text={insta}></BusinessContentItem>
          <BusinessContentItem type="Email" text={email}></BusinessContentItem>
          <BusinessContentItem
            type="Github"
            text={github}
          ></BusinessContentItem>
        </BusinessContentContainer>
      </BusinessCard>
    </AppContainer>
  );
}

export default App;
