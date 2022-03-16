import { NavStyled, PageStyled, DropdownStyled, DropItemStyled, TextNoteStyled } from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return (
    <NavStyled {...theme}>
      {props.children}
    </NavStyled>
  );
}

function Page(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  const page = <Link to={props.uri}> {props.text} </Link>;
  return (
    <PageStyled {...theme} className="navLink">
      {page}
    </PageStyled>
  );
}

function TextNote(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  const page = <Link to={props.uri}> {props.text} </Link>;
  return (
    <TextNoteStyled {...theme}>
      <div className="textNote">Recuerda ser:</div>
      <div className="parent">{page}</div>
    </TextNoteStyled>
  );
}

function Dropdown(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  return ( 
    <DropdownStyled {...theme}>
      <div className="labelCanbe">
        puede ser:
      </div>
      <div aria-labelledby="basic-nav-dropdown" data-bs-popper="static" className="down-menu">
        {props.children}     
       </div>
    </DropdownStyled>
  )
}

function DropItem(props) {
  const theme = useSelector((store) => store.pageLayOut.getTheme());
  const page = <Link to={props.uri}> {props.text} </Link>;
  return (
    <DropItemStyled {...theme} className="dropItem">
      {page}
    </DropItemStyled>
  );
}

export default Object.assign(Nav, { Page, Dropdown, DropItem, TextNote });
