import styled, { css } from "styled-components";

const InputContainer = styled.div`
  width: 100%;

  border-radius: 8px;
  border: 1px solid #c9c4c4;

  padding: 12px 14px;

  ${(props) => props.$customStyle}
  ${(props) => props.$inputStyle}
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
const getInputStyle = (type) => {
  if (type === "bottom-line") {
    return css`
      border: 0px;
      border-bottom: 1px solid #eaeaea;
      border-radius: 0px;
      padding: 7px 5px;
    `;
  } else {
    css``;
  }
};

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  style,
  innerStyle,
}) {
  return (
    <InputContainer $customStyle={style} $inputStyle={getInputStyle(type)}>
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
