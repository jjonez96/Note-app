import * as React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Note-app</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
