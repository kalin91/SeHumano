import SomosStyled from './style.jsx'
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
    <SomosStyled>
      <div>
        <h1>Mision</h1>
        <span>Difundir y compartir el conocimiento humano.</span>
      </div>
      <br />
      <div className='valores'>
        <h1>Valores</h1>
        <ul>
          <li>Amor</li>
          <li>Humanidad</li>
          <li>Integridad</li>
          <li>Ciencia</li>
          <li>Conciencia</li>
          <li>Conocimiento</li>
          <li>Solidaridad</li>
          <li>Cuidado del entorno</li>
          <li>Trascendencia</li>
        </ul>
      </div>
    </SomosStyled>
  );
};
export default Somos;
