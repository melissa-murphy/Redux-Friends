import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Input } from 'reactstrap';

class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

render() {
    return (
        <Form onSubmit={this.login}>
            <FormGroup>
                <Input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </FormGroup>
            <Button>Log In</Button>
        </Form>
    )
}

}

export default LoginPage;