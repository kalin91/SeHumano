import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 1320px;
  }
`;
export default ContainerStyled;
