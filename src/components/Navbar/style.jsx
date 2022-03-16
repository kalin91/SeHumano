import styled from "styled-components";

const NavbarStyled = styled.nav`
  height:55;
width:100%;
  background-color: ${(props) =>
    props.backColor}; //rgb(181, 198, 233); //RGB(248, 249, 251);
  position: fixed;
  z-index:1; /*Add this*/
  top:0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --bs-bg-opacity: 1;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const BrandStyled = styled.div`
      border-radius: 15%;
      border: 0.1125rem solid transparent;
  a {
    font-family:'Courgette';
    color: ${(props) => props.color};
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    margin-left: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    white-space: nowrap;
  }
  :hover {
      border-color: ${(props) => props.color};
    }
`;

const CollapseStyled = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  @media (min-width: 992px) {
    display: flex !important;
    flex-basis: auto;
  }
  :not(.show) {
    display: none;
  }
`;

const ToggleStyled = styled.button`
  color: ${(props) => props.color};
  border-color: ${(props) => props.borderColor};
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

const IdentifyStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const RegisterStyled = styled.button`
  color: ${(props) => props.color};
  display: inline-block;
  //display: flex;
  flex-direction: row;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor};
  padding: 0rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-width: 2px;
  border-style: outset;
  box-sizing: border-box;
  :not(:disabled) {
    cursor: pointer;
  }
  -webkit-appearance: button;
  margin: 0;
  font-family: inherit;
  select {
    text-transform: none;
  }
  @media (min-width: 576px) {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .cred-icon {
    width: 18px;
    height: 30px;
    fill: ${(props) => props.color};
  }
  :hover {
    color: ${(props) => props.backColor};
    border-color: transparent;
    background-color: ${(props) => props.color};
  }
  :hover .cred-icon {
    fill: ${(props) => props.backColor};
  }
`;
export {
  NavbarStyled,
  BrandStyled,
  CollapseStyled,
  ToggleStyled,
  IdentifyStyled,
  RegisterStyled,
};
