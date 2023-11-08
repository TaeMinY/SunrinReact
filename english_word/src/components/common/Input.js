import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;

  border-radius: 8px;
  border: 1px solid #c9c4c4;

  padding: 12px 14px;

  ${(props) => props.$customStyle}
`;

const InputText = styled.input`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.12px;

  border: 0px;
  outline: none;

  ${(props) => props.$innerStyle}
`;

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  style,
  innerStyle,
}) {
  return (
    <InputContainer $customStyle={style}>
      <InputText
        $innerStyle={innerStyle}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></InputText>
    </InputContainer>
  );
}

export default Input;
