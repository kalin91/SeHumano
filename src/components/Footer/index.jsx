import FooterStyled from "./style";
import { useSelector } from 'react-redux'


const Footer = (props) => {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return (
      <FooterStyled {...theme}>
          <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
      </FooterStyled>
  )
}

export default Footer;
