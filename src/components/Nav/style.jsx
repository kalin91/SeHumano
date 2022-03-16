import styled from "styled-components";

const NavStyled = styled.div`
  margin-right: auto !important;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  align-items: center;
  list-style: none;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const TextNoteStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .textNote {
    border-radius: 15%;
    padding-right: 0;
    padding-left: 0;
    display: block;
    padding: 0.5rem 1rem;
    color: ${(props) => props.color};
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    @media (min-width: 992px) {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
  }
  .parent {
      border-radius: 15%;
      border: 0.1125rem solid transparent;
  a {
    font-family:'Courgette';
    color: ${(props) => props.color};
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    white-space: nowrap;
  }
  :hover {
      border-color: ${(props) => props.color};
    }
  }
`;

const PageStyled = styled.div`
  a {
    border-radius: 15%;
    padding-right: 0;
    padding-left: 0;
    display: block;
    padding: 0.5rem 1rem;
    color: ${(props) => props.color};
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    @media (min-width: 992px) {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    :hover {
      background-color: ${(props) => props.color};
      color: ${(props) => props.backColor};
    }
  }
`;

const DropdownStyled = styled.div`
  position: relative;
  margin-left: vw;
  //padding-right:10vw;
  > a, .labelCanbe {
    border-radius: 15%;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    display: block;
    padding: 0.5rem 1rem;
    color: ${(props) => props.color};
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    white-space: nowrap;
    cursor: pointer;
    @media (min-width: 992px) {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    :hover {
      background-color: ${(props) => props.color};
      color: ${(props) => props.backColor};
    }
    ::after {
      display: inline-block;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
  }
  :hover {
    .down-menu {
      display: flex;
    }
  }
  .down-menu {
    position: absolute;
    display:flex;
    flex-direction:column;
    top: 100%;
    left: 0;
    margin-top: 0.125rem;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: ${(props) => props.backColor};
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    a {
      display: block;
      width: 100%;
      padding: 0.25rem 1rem;
      clear: both;
      font-weight: 400;
      color: ${(props) => props.color};
      text-align: inherit;
      text-decoration: none;
      white-space: nowrap;
      background-color: transparent;
      border: 0;
      :hover {
        background-color: ${(props) => props.color};
        color: ${(props) => props.backColor};
      }
    }
  }
`;

const DropItemStyled = styled.div`
  display: contents;
  a {
    padding-right: 0;
    padding-left: 0;
    display: block;
    padding: 0.5rem 1rem;
    color: ${(props) => props.color};
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    @media (min-width: 992px) {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    :hover {
      background-color: ${(props) => props.color};
      color: ${(props) => props.backColor};
    }
  }
`;
export {
  NavStyled,
  PageStyled,
  DropdownStyled,
  DropItemStyled,
  TextNoteStyled,
};
