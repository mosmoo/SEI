import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      valid: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConfirmChange =
      this.handleConfirmChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleConfirmChange(event) {
    this.setState({ passwordConfirm: event.target.value });
  }

  render() {
    const { password, passwordConfirm, valid } = this.state;
    const passwordsMatch = password === passwordConfirm;
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={passwordConfirm}
          onChange={this.handleConfirmChange}
        />
        <button onClick={() => this.setState({ valid: passwordsMatch })}>
          Submit
        </button>
        {valid ? null : <p>Passwords do not match</p>}
      </div>
    );
  }
}

export default Validator;
