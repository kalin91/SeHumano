import {
  NavbarStyled,
  BrandStyled,
  CollapseStyled,
  ToggleStyled,
  IdentifyStyled,
  RegisterStyled,
} from "./style";
import { ReactComponent as RegisterIcon } from "../../img/SignUp.svg";
import { ReactComponent as ConnectIcon } from "../../img/LogIn.svg";
import { ReactComponent as DisconnectIcon } from "../../img/LogOut.svg";
import { ReactComponent as ProfileIcon } from "../../img/Profile.svg";
import { useSelector, useDispatch } from "react-redux";
import { setLogStatus } from '../../redux/actions'
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../helpers/constants";

function Navbar(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return <NavbarStyled {...theme}>{props.children}</NavbarStyled>;
}

const Brand = () => {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  let brand = <BrandStyled {...theme}>{theme.brand}</BrandStyled>;
  return brand;
};

function Collapse(props) {
  return <CollapseStyled>{props.children}</CollapseStyled>;
}

function Toggle(props) {
  return <ToggleStyled>{props.children}</ToggleStyled>;
}

function Identify(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  const logStatus = useSelector((store) => store.logged);
  if (!logStatus) {
    return (
      <IdentifyStyled>
        {props.children}
        <Register {...theme}>Registrate</Register>
        <Connect {...theme}>Conectate</Connect>
      </IdentifyStyled>
    );
  } else {
    return (
      <IdentifyStyled>
        {props.children}
        <Disconnect {...theme}>Salir</Disconnect>
        <Profile {...theme}>Perfil</Profile>
      </IdentifyStyled>
    );
  }
}

function Register(props) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = LINKS.registrar.uri; 
    navigate(path);
  }
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return (
    <RegisterStyled {...theme} onClick={() => routeChange()}>
      <RegisterIcon className="cred-icon" />
      {props.children}
    </RegisterStyled>
  );
}
function Connect(props) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = LINKS.conectar.uri; 
    navigate(path);
  }  
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return (
    <RegisterStyled {...theme} onClick={() => routeChange()}>
      <ConnectIcon className="cred-icon" />
      {props.children}
    </RegisterStyled>
  );
}
function Disconnect(props) {
  const dispatch = useDispatch();
  const logOut = () => dispatch(setLogStatus(false));
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return (
    <RegisterStyled {...theme} onClick={(ev) => logOut()}>
      <DisconnectIcon className="cred-icon" />
      {props.children}
    </RegisterStyled>
  );
}
function Profile(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return (
    <RegisterStyled {...theme}>
      <ProfileIcon className="cred-icon" />
      {props.children}
    </RegisterStyled>
  );
}
export default Object.assign(Navbar, { Brand, Collapse, Toggle, Identify });
//export {Navbar, Brand, Collapse};
