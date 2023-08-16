import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidgetComponent/CartWidget';

const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Tienda Gin Rada</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                    <NavDropdown title="Variedades" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Clásico</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Frutos Rojos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Higos y Almendras</NavDropdown.Item>
                    <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}

export default NavBarComponent