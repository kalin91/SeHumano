import RegistrarStyled from "./style.jsx";
import { LINKS } from "../../helpers/constants";
import { LayOut, Content } from "../../components/LayOut";
import { useDispatch } from "react-redux";
import {
  setNavbarTheme,
  setNavbarContent,
  setLogStatus,
} from "../../redux/actions";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Registrar = () => {
  let [checkBox, setCheckBox] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setNavbarTheme(new LayOut("#FFF", "#915B51", "#A55D35", LINKS.registrar))
    );
    dispatch(setNavbarContent(new Content(null, null)));
  });
  let navigate = useNavigate();
  const routeChange = () => {
    if (checkBox) dispatch(setLogStatus(true));
    let path = LINKS.home.uri;
    navigate(path);
  };
  return (
    <RegistrarStyled>
      <form>
        <div className="form-group">
          <label htmlFor="InputNombre">Nombre(s)</label>
          <input
            type="text"
            className="form-control"
            id="InputNombre"
            aria-describedby="emailHelp"
            placeholder="¿Cual es tu Nombre?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Apellido(s)</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="¿Y tus apellidos son?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="¿Cual es tu correo electronico?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="No la compartas con nadie"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={(e) => setCheckBox(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Conectame
          </label>
        </div>
        <button
          className="btn btn-primary"
          onClick={(ev) => {
            routeChange();
          }}
        >
          Registrar
        </button>
      </form>
      <div className="signup-flow-disclaimer" data-qa="signin-link-footnote">
        <p>
          Ya tienes una cuenta?
          <Link className="fw-bold" to={LINKS.conectar.uri}>
            Conectate
          </Link>
        </p>
        <small id="emailHelp" className="form-text text-muted">
          Nunca compartiremos tu información con terceros.
        </small>
      </div>
    </RegistrarStyled>
  );
};
export default Registrar;
