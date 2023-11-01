import { useState } from "react";
import styled from "styled-components";
import Input from "./components/Input";

const AppContainer = styled.div`
  padding: 40px;

  & > div {
    margin-bottom: 10px;
  }
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
      이름: {username} <br />
      소개 : {introtext}
      <br />
      전화번호 : {phoneNumber}
      <br />
      인스타: {insta}
      <br />
      이메일 : {email}
      <br />
      깃헙 : {github}
      <br />
    </AppContainer>
  );
}

export default App;
