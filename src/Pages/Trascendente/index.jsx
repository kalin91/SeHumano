import { useDispatch } from "react-redux";
import { setNavbarTheme, setNavbarContent } from "../../redux/actions";
import { LayOut, Content } from "../../components/LayOut";
import TrascendenteStyled from "./style";
import { LINKS } from "../../helpers/constants";
import { useEffect } from "react";
const Trascendente = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setNavbarTheme(
        new LayOut("#F0F8FF", "#00abe4", "#B0C4DE", LINKS.trascendente)
      )
    );
    dispatch(setNavbarContent(new Content(LINKS.home, null)));
  });
  return (
    <TrascendenteStyled>
      <div className="row align-content-lg-around">
        <div className="col-xl-7">
          <p>
            El ser-trascendente es una temática compleja, fundamentada desde lo
            teleológico, lo ontológico y lo axiológico de la naturaleza humana.
          </p>
          <p>
            La búsqueda de la trascendencia, es una necesidad natural del ser
            humano consciente en dejar un legado o unas huellas a ser seguidas.
          </p>
        </div>
        <div className="col-xl-5 text-center">
          <img src="http://paolabiodanza.weebly.com/uploads/4/2/8/1/42811139/screen-shot-2018-04-06-at-13-14-31_orig.png" alt="" />
        </div>
      </div>
      <p>
        El hombre sabe que es un ser finito en lo biológico, sin embargo,
        <span style={{ fontWeight: "bolder" }}>
          busca en su integralidad holística el ser trascendente.
        </span>
      </p>
      <p>
        Aquí tienes el espacio para que compartas todo el material que
        consideres que puede ayudar a alguien más en su busqueda de lograr la
        trascendencia de su humanidad.
      </p>
      <p className="sign">Sé Trascendente.</p>
    </TrascendenteStyled>
  );
};
export default Trascendente;
