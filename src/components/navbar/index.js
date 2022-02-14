import './index.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
const NavBar = () => {
    const history = useHistory();
	return (
		<>
			<Navbar bg="success" variant="dark">
				<Container>
					<Navbar.Brand><h1 style={{cursor: 'pointer'}} onClick={() => {history.push('/')}}>Equilibrium</h1></Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link><h5 onClick={() => {history.push('/signup')}}>Sign Up</h5></Nav.Link>
                        <Nav.Link><h5 onClick={() => {history.push('/login')}}>Log In</h5></Nav.Link>
                        <Nav.Link><h5 onClick={() => {history.push('/demo')}}>Demo</h5></Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
