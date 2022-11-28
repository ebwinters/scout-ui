import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return (
			<>
				<Button className="btn btn-primary"
					onClick={() => logout({ returnTo: window.location.origin })}>
				Log Out
				</Button>
				<br />
			</>
		);
	}
};

export default LogoutButton;
