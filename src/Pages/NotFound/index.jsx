import NotFoundStyled from './style.jsx'
import { LINKS } from "../../helpers/constants";
import {LayOut, Content} from "../../components/LayOut";
import { useDispatch } from "react-redux";
import { setNavbarTheme, setNavbarContent } from '../../redux/actions'
import { useEffect } from "react";

const Somos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(setNavbarTheme(new LayOut("#FFF",'#915B51',"#A55D35",LINKS.home)))
  dispatch(setNavbarContent(new Content(null, null)));
});
  return (
    <NotFoundStyled>
      <div>
      <h1>404 - Not Found!</h1>
        <span>La página solicitada no fue encontrada.</span>
      </div>
    </NotFoundStyled>
  );
};
export default Somos;
