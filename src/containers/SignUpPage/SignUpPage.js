import React, { Component } from 'react';

import FieldGroup from '../../components/FieldGroup'
import { Button } from 'react-bootstrap'

import logo from '../../images/favicon.png';
import './style.css'

class SignUpPage extends Component {
	// state 설정
	constructor(){
	    super()
	    
	    this.state = {
	      // 이메일, 비밀번호
	      email: null,
	      password: null,
	      password2:null
	    }
	    this.onChange = this.onChange.bind(this)
	    this.SignUpsubmit = this.SignUpsubmit.bind(this)
  	}
	// 회원가입 구현!
	SignUpsubmit(e){
		alert(`
ID : ${this.state.email}
PW : ${this.state.password}
PW2 : ${this.state.password2}
TODO : 회원가입 기능 구현
TODO : 회원가입 후 로그인 페이지로 이동`)
		e.preventDefault()
	}

	// 로그인 페이지로 이동
	toSignin(){
		this.props.history.push('/signin')
	}

	// Input Text 입력시
	onChange(e){
		// console.log(e.target.id)
		// console.log(this)
		// ID 값을 기준으로 State 변경
		if (e.target.id==='EmailInput') {
			this.setState({ email : e.target.value})
		}
		else if (e.target.id==='PasswordInput') {
			this.setState({ password : e.target.value})
		}
		else if (e.target.id==='PasswordInput2') {
			this.setState({ password2 : e.target.value})
		}
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
						onChange={this.onChange}
					/>
					<FieldGroup
						id="PasswordInput"
						type="password"
						placeholder="Password"
						onChange={this.onChange}
					/>
					<FieldGroup
						id="PasswordInput2"
						type="password"
						placeholder="Password Confirm"
						onChange={this.onChange}
					/>
					<Button bsStyle="default" onClick={() => this.toSignin()}>
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
