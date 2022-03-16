import PostsStyled from "./style";
import { useSelector } from 'react-redux'


const Posts = (props) => {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return (
      <PostsStyled {...theme}>
          <div>POSTS</div>
      </PostsStyled>
  )
}

export default Posts;
