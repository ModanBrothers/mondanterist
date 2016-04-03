import React from 'react';
import LoginForm from './../../components/loginForm/loginForm';
import { Link } from 'react-router';

export default class LandingView extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to Modanterist</h1>
        <LoginForm />
        <Link to="/explore">
          <p className="text-muted" >Explore without Logging in</p>
        </Link>
      </div>
    );
  }
}
