import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


export const Header = props => {

    return (
        <>
            <Navbar bg="dark" variant="white">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="text-white">Home</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
};