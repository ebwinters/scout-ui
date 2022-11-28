import './App.css';
import LoginButton from './components/LoginButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from './components/LogoutButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Scout from './components/Scout';
import NewScout from './components/NewScout';
import { useState } from 'react';

function App() {
	const [currentTab, setCurrentTab] = useState('scouts');
	var currentContent = <Scout />;
	if (currentTab === 'scouts') currentContent = <Scout />;
	if (currentTab === 'new') currentContent = <NewScout />;
	return (
		<>
			<Navbar >
        		<Container>
					<Navbar.Brand>Scout</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Item><LogoutButton></LogoutButton></Nav.Item>
						<Nav.Item><LoginButton></LoginButton></Nav.Item>
						<Nav.Item onClick={()=> setCurrentTab('scouts')}><Button className="btn btn-primary">View Scouts</Button></Nav.Item>
						<Nav.Item onClick={()=> setCurrentTab('new')}><Button className="btn btn-primary">New Scout</Button></Nav.Item>
          			</Nav>
        		</Container>
      		</Navbar>
			{currentContent}
			
		</>
	);
}

export default App;
