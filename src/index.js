import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain='dev-bx6d31q4ecrdd7vf.us.auth0.com'
		clientId='yPkTwYkNGvMgvQawKzjvteqaw00UGjkp'
		redirectUri={window.location.origin}>
		<App />
	</Auth0Provider>
);
