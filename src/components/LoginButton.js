import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	if (!isAuthenticated) {
		return <Button className="btn btn-primary"
			onClick={() => loginWithRedirect()}>
		Log In</Button>;
	}
};

export default LoginButton;
