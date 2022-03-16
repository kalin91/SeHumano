import { useDispatch } from "react-redux";
import { setNavbarTheme, setNavbarContent } from "../../redux/actions";
import { LayOut, Content } from "../../components/LayOut";
import logo from "../../img/Documentacion-El-amor-humano.jpg";
import AmorStyled from "./style";
import { LINKS } from "../../helpers/constants";
import { useEffect } from "react";
const Amor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setNavbarTheme(new LayOut("#fcd8d8", "#e46f6f", "#ff7c7c", LINKS.amor))
    );
    dispatch(setNavbarContent(new Content(LINKS.home, null)));
  });
  return (
    <AmorStyled>
      <div className="row align-content-lg-around">
        <div className="col-xl-7">
          <p>
            El amor es la suprema expresión de la voluntad. Consiste en querer
            el bien para alguien, como dijo acertadamente Aristóteles.
          </p>
          <p style={{ fontSize: "1.5em" }}>
            Conviene distinguir muy bien el amor que es propio de la voluntad
            –que es un querer– del amor propio de la afectividad, el sentimiento
            amoroso –que es un sentir–.
          </p>
        </div>
        <div className="col-xl-5 text-center">
          <img src={logo} alt="" />
        </div>
      </div>
      <p>
        El amor de voluntad, en cambio, es el querer que se dirige libremente
        hacia un bien que se comprende que es bueno. Es fruto de una decisión
        cuyo origen es la determinación del sujeto, que quiere algo o a alguien.
        En cierto modo, todo querer es amor, pero <span style={{fontWeight: "bolder"}}>no es lo mismo amar una cosa
        que amar a una persona.</span>
      </p>
      <p>
        Aquí tienes el espacio para que compartas todo el material que
        consideres que puede ayudar a alguien más en el entendimiento sensible del amor.
      </p>
      <p className="sign">Sé Amor.</p>
    </AmorStyled>
  );
};
export default Amor;
