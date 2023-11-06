import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const ContainerType = styled.div`
  background: #404040;

  border-radius: 2px;

  color: #ffffff;
  font-size: 10px;
  padding: 0px 4px;
`;
const ContainerText = styled.div`
  color: #404040;
  font-size: 10px;
  margin-left: 2px;
  margin-bottom: 1px;
`;

function BusinessContentItem({ type, text }) {
  return (
    <Container>
      <ContainerType>{type}</ContainerType>
      <ContainerText>{text}</ContainerText>
    </Container>
  );
}

export default BusinessContentItem;
