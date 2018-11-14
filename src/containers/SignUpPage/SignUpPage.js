import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FieldGroup from '../../components/FieldGroup'
import { Button } from 'react-bootstrap'

import logo from '../../images/favicon.png';
import './style.css'

class SignUpPage extends Component {
	
	// 회원가입 구현!
	SignUpsubmit(e){
		alert(`
			TODO : 회원가입 기능 구현
			TODO : 회원가입 후 로그인 페이지로 이동`)
		e.preventDefault()
	}

	// 로그인 페이지로 이동
	toSignin(){
		this.props.history.push('/signin')
	}
  	render() {
    	return (
      		<div className="SignUpPage">
      			<img src={logo} className="App-logo" alt="logo" />
	      		<h3>Please sign in</h3>
		        <form onSubmit={this.SignUpsubmit}>
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
					<FieldGroup
						id="PasswordInput2"
						type="password"
						placeholder="Password Confirm"
					/>
					<Button bsStyle="secondary" onClick={() => this.toSignin()}>
						Go Back to Sign in
					</Button>
					<Button type="submit" bsStyle="primary">
						Sign up
					</Button>
				</form>
      		</div>
    );
  }
}

export default SignUpPage;
