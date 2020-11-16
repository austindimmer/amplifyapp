import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test de login cognito
        </p>
      </header>
  <div>
    <AmplifySignOut />
  </div>
    </div>
    
  );
}

export default withAuthenticator(App);
