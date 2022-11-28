import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from './components/LogoutButton';

function App() {
	return (
		<>
			<nav className="navbar bg-dark">
				<div className="container-fluid">
					<span className="appName">
						React User Authentication</span>
				</div>
			</nav>
			<LoginButton />
      <LogoutButton />
		</>
	);
}

export default App;
