import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/quizz">Quizz</Nav.Link>
            <Nav.Link href="/create">Créer</Nav.Link>
            <Nav.Link href="/read">Lire</Nav.Link>
            <Nav.Link href="/update">Modifier</Nav.Link>
            <Nav.Link href="/delete">Supprimer</Nav.Link>
            {/* <Nav.Link href="/register">Inscription</Nav.Link>
            <Nav.Link href="/login">Connexion</Nav.Link> */}
            
          </Nav>
          {/* <NavDropdown title="CRUD" id="basic-nav-dropdown">
            <NavDropdown.Item href="/create">Créer</NavDropdown.Item>
            <NavDropdown.Item href="/read">
              Lire
            </NavDropdown.Item>
            <NavDropdown.Item href="/update">Modifier</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/delete">
              Supprimer
            </NavDropdown.Item>
          </NavDropdown> */}

        
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;