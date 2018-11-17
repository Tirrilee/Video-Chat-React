import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FieldGroup from '../../components/FieldGroup'
import FormError from '../../components/FormError'
import { Button } from 'react-bootstrap'

import logo from '../../images/favicon.png'
import './style.css'

class SignInPage extends Component {
	// state 설정
	constructor(){
	    super()
	    
	    this.state = {
	      // 이메일, 비밀번호
	      email: null,
	      password: null,
	      show:'true',
	      message:'error message',
	    }
	    this.onChange = this.onChange.bind(this)
	    this.SignInsubmit = this.SignInsubmit.bind(this)
  	}
	// 로그인 구현!
	SignInsubmit(e){
		alert(`
ID : ${this.state.email}
PW : ${this.state.password}
TODO : 로그인 기능 구현
TODO : 로그인 후 홈 페이지로 이동`)
		e.preventDefault()
	}
	// Input Text 입력시
	onChange(e){
		// name을 기준으로 State 변경
		const name = e.target.name
		const value = e.target.value
		this.setState({[name]: value})
	}

  	render() {
    	return (
      		<div className="SignInPage">
      			<img src={logo} className="App-logo" alt="logo" />
	      		<h3>Please sign in</h3>
		        <form onSubmit={this.SignInsubmit}>
		        	<FormError
		        		show={this.state.show}
		        		message={this.state.message}
		        	/>
					<FieldGroup
						id="EmailInput"
						name="email"
						type="text"
						placeholder="Email address"
						onChange={this.onChange}
					/>
					<FieldGroup
						id="PasswordInput"
						name="password"
						type="password"
						placeholder="Password"
						onChange={this.onChange}
					/>
					<p>you want <Link to="/signup">create account?</Link></p>
					<Button type="submit" bsStyle="primary">
						Sign in
					</Button>
				</form>
      		</div>
    )
  }
}

/*
SignInPage.propTypes = {
  email: PropTypes.string.isRequired,
  password : PropTypes.string.isRequired
}
*/

export default SignInPage;
