import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
// import Auth from 'aws-amplify/auth';
import awsconfig from './aws-exports';
// import AmplifySignOut from '@aws-amplify/ui-react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import HomePage from './HomePage';

Amplify.configure(awsconfig);
// Auth.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <AmplifySignOut /> */}
        <h2>My App</h2>
        <HomePage />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
