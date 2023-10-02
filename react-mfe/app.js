import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends React.Component {

  render() {
    // const reactVersion = require('./package.json').dependencies['react'];
    // const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
    return (
      //   [
      //     <h1 key='mfe'>
      //      <img style= {{marginRight: "10px"}} src={logoUrl} height="30"></img>
      //       React MFE
      //     </h1>,
      //     <p key='version'>
      //       React Version: {reactVersion}
      //     </p>,
      // ]
      <Form className="login-form">
        <div className="Welcome">
          <h5>
            <span className="font-weight-bold">React Login Page</span>
          </h5>
        </div>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="shubham@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </FormGroup>
        <div className="text-center">
        <Button className="btn-lg btn-dark btn-block">Login</Button>
        </div>
        <FormGroup>
          <div className="text-center">Or continue with your social account.</div>
          <FacebookLoginButton className="mt-3 mb-3" />
          <div className="text-center">
            <a href="/sign-up">Sign up</a>
            <span className="p-2">|</span>
            <a href="/forgot-password">Forgot password</a>
          </div>
        </FormGroup>
      </Form>
    )
  }
}
class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}
customElements.define('react-element', ReactMfe);