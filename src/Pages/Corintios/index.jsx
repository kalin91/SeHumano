import { useDispatch } from "react-redux";
import { setNavbarTheme, setNavbarContent } from "../../redux/actions";
import { LayOut, Content } from "../../components/LayOut";
import AmorStyled from "./style";
import { LINKS } from "../../helpers/constants";
import { useEffect } from "react";
const Amor = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(
    setNavbarTheme(new LayOut("#fcd8d8", "#ff7c7c", "#ff7c7c", LINKS.amor))
  );
  dispatch(setNavbarContent(new Content(LINKS.home, null)));
});
  return (
    <AmorStyled>
      <div className="row align-content-lg-around">
        <div className="col-xl-7">
          <p>
            Este sitio es para personas interesadas en promover la educación
            pura y el crecimiento de la persona, lejos de dogmas, por el puro
            interés en compartir el conocimiento.
          </p>
          <p>
            El sitio nace de que creemos que los humanos estamos muy, demasiado
            divididos en toda clase de categorias, por sexo, color de piel,
            paises, religiones, creencias, etc, etc, etc...
          </p>
        </div>
        <div className="col-xl-5 text-center">
          <img src="https://estebanlopezgonzalez.files.wordpress.com/2011/01/apostolo-paulo.jpg" alt=""/>
        </div>
      </div>
      <p>
        Entonces este sitio es una invitación a que solo seamos Humanos en el
        más puro sentido, para que desde esa posición podamos ayudarnos a crecer
        mutuamente y por ende crezcamos como especie, avanzando en ese sentido y
        una vez concientizados empecemos a trabajar para cuidar los recursos del
        planeta, entendiendo que somos también una unidad con el mismo, de tal
        forma que lo que le afecta nos afecta directamente.
      </p>
      <p>
        Aquí tienes el espacio para que compartas todo el material que
        consideres que puede ayudar a alguien más en el crecimiento humano.
      </p>
      <p className="sign">Sé Humano.</p>
    </AmorStyled>
  );
};
export default Amor;
