import styled from "styled-components";

const PostsStyled = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backColor};
`;

export default PostsStyled;
