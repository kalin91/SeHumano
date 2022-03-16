import { useDispatch } from "react-redux";
import { setNavbarTheme, setNavbarContent } from "../../redux/actions";
import { LayOut, Content } from "../../components/LayOut";
import CuriosoStyled from "./style";
import { LINKS } from "../../helpers/constants";
import { useEffect } from "react";
const Curioso = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setNavbarTheme(new LayOut("#FEDC6D", "#000000", "#89D2D2", LINKS.curioso))
    );
    dispatch(setNavbarContent(new Content(LINKS.home, null)));
  });
  return (
    <CuriosoStyled>
      <div className="row align-content-lg-around">
        <div className="col-xl-7">
          <p>
            La curiosidad se manifiesta en el ser humano desde pequeño. Ya
            cuando nace y comienza a moverse por si mismo, el bebé empieza a
            manipular todo lo que se encuentra a su alcance. Es importante que
            una vez que el niño puede jugar, se le den juguetes con diferentes
            formas para que explote su curiosidad al máximo.
          </p>
        </div>
        <div className="col-xl-5 text-center">
          <img
            src="https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/en-exclusiva/programados/en-busca-de-la-curiosidad/5592180-9-esl-MX/En-busca-de-la-curiosidad.jpg"
            alt=""
          />
        </div>
      </div>
      <p>
        Ser curioso es algo que ya viene en la genética de los seres vivos, es
        decir, desde su nacimiento. Las personas son curiosas por naturaleza,
        forma parte de su instinto el querer saber como funcionan las cosas a su
        alrededor.
      </p>
      <p>
        La curiosidad es una guía para llegar a la creación y el conocimiento.
      </p>
      <p>
        Cuando un artista es curioso puede llegar a crear grandes obras de arte,
        así como canciones o escritos.
      </p>
      <p>
        La curiosidad es el motor de la ciencia que impulsa al conocimiento
        humano a comprender la vida y el universo.
      </p>
      <p>
        Aquí tienes el espacio para que compartas todo el material que
        consideres que puede ayudar a alguien en desarrollar a su ser curioso.
      </p>
      <p className="sign">Sé Curioso.</p>
    </CuriosoStyled>
  );
};
export default Curioso;
