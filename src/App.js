import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const awsmobile = {
  "aws_project_region": "ca-central-1",
  "aws_cognito_identity_pool_id": "ca-central-1:1ceef8f8-b6ed-4178-a483-be0edcff76e7",
  "aws_cognito_region": "ca-central-1",
  "aws_user_pools_id": "ca-central-1_5mg8qywhU",
  "aws_user_pools_web_client_id": "6e1rd9d695539v3rrqruegirop",
  "oauth": {}
};


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
