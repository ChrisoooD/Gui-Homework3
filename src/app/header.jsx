import { Navbar, Nav, Container } from "react-bootstrap";


export const Header = props => {

    return (
        <>
            <Navbar bg="dark" variant="white">
                <Container>
                    <Nav className="me-auto">
                    <h3><a href="/" class="text-white">Store</a></h3>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
};