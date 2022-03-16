import ContainerStyled from "./style";

function Container(props) {
  return (
    <ContainerStyled>{props.children}</ContainerStyled>
  );
}

export default Container;
