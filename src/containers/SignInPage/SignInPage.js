import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FieldGroup from '../../components/FieldGroup'
import { Button } from 'react-bootstrap'

import logo from '../../images/favicon.png';
import './style.css'

class SignInPage extends Component {

	// 로그인 구현!
	SignInsubmit(e){
		alert(`
			TODO : 로그인 기능 구현
			TODO : 로그인 후 홈 페이지로 이동`)
		e.preventDefault()
	}

  	render() {
    	return (
      		<div className="SignInPage">
      			<img src={logo} className="App-logo" alt="logo" />
	      		<h3>Please sign in</h3>
		        <form onSubmit={this.SignInsubmit}>
					<FieldGroup
						id="EmailInput"
						type="text"
						placeholder="Email address"
					/>
					<FieldGroup
						id="PasswordInput"
						type="password"
						placeholder="Password"
					/>
					<p>you want <Link to="/signup">create account?</Link></p>
					<Button type="submit" bsStyle="primary">
						Sign in
					</Button>
				</form>
      		</div>
    );
  }
}

export default SignInPage;
