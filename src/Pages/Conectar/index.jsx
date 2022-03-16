import RegistrarStyled from "./style.jsx";
import { LINKS } from "../../helpers/constants";
import { LayOut, Content } from "../../components/LayOut";
import { useDispatch } from "react-redux";
import { setNavbarTheme, setNavbarContent, setLogStatus } from "../../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Registrar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setNavbarTheme(new LayOut("#FFF", "#915B51", "#A55D35", LINKS.conectar))
    );
    dispatch(setNavbarContent(new Content(null, null)));
  });
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
      dispatch(setLogStatus(true));
    let path = LINKS.home.uri; 
    navigate(path);
  }
  return (
    <RegistrarStyled>
      <form>
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
        <br />
        <button className="btn btn-primary" onClick={ev =>{routeChange()}}>
          Conectar
        </button>
      </form>
    </RegistrarStyled>
  );
};
export default Registrar;
