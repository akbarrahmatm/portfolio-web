import {Container, Navbar, Nav} from "react-bootstrap"


const NavigationBar = () =>{
    return(
        <div>
            <Container>
            <Navbar variant="dark justify-content-end">
            
                <Nav>
                    <Nav.Link href="#project" className="mx-2 navbarLink">PROJECT</Nav.Link>
                    <Nav.Link href="#skills" className="mx-2 navbarLink">SKILL</Nav.Link>
                    <Nav.Link href="#about" className="mx-2 navbarLink">ABOUT</Nav.Link>
                    <Nav.Link href="#contact" className="mx-2 navbarLink">CONTACT</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
        </div>
    )
}

export default NavigationBar

