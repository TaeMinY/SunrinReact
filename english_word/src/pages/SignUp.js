import { useState } from "react";
import styled, { css } from "styled-components";
import IntroImage from "../assets/images/intro.svg";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

import { useNavigate } from "react-router-dom";

const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0px 20px;
`;

const SignUpTitle = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
`;

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [username, setUsername] = useState("");

  const naviagte = useNavigate();

  return (
    <SignUpContainer>
      <img src={IntroImage} alt="로그인" />
      <SignUpTitle>회원가입</SignUpTitle>
      <Input
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="아이디"
        style={css`
          margin-top: 24px;
          margin-bottom: 8px;
        `}
      ></Input>
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호"
        style={css`
          margin-bottom: 8px;
        `}
      ></Input>
      <Input
        type="password"
        value={checkPassword}
        onChange={(e) => {
          setCheckPassword(e.target.value);
        }}
        placeholder="비밀번호 확인"
        style={css`
          margin-bottom: 8px;
        `}
      ></Input>
      <Input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="유저이름"
        style={css`
          margin-bottom: 24px;
        `}
      ></Input>
      <Button
        type="main"
        onClick={() => {
          naviagte("/");
        }}
        style={css`
          margin-bottom: 8px;
        `}
      >
        회원가입
      </Button>
      <Button
        type="main-reversal"
        onClick={() => {
          naviagte("/signin");
        }}
      >
        뒤로가기
      </Button>
    </SignUpContainer>
  );
}
export default SignUp;
