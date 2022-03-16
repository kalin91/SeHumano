import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backColor};
  position: fixed;
  bottom: 0;
`;

export default FooterStyled;
