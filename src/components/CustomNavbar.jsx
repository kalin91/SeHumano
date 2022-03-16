import Navbar from "./Navbar";
import Nav from "./Nav";
import Container from "./Container";
import { LINKS } from "../helpers/constants";
import { useSelector } from "react-redux";
const somosLink = LINKS.somos;
const CustomNavbar = () => {
  const content = useSelector((store) => store.pageContent.getContent());
  let parent =
    content.parent == null ? null : (
      <Nav.TextNote {...content.parent}></Nav.TextNote>
    );
  let children =
    content.children == null ? null : (
      <Nav.Dropdown>
        {content.children.map((x) => (
          <Nav.DropItem {...x}></Nav.DropItem>
        ))}
      </Nav.Dropdown>
    );
  return (
    <Navbar>
      <Container>
        <Navbar.Brand />
        <Navbar.Collapse>
          <Nav>{children}</Nav>
          <Navbar.Identify>
            {parent}
            <Nav.Page {...somosLink}></Nav.Page>
          </Navbar.Identify>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
