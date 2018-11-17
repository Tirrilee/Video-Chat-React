import React, { Component } from 'react';
import { Alert } from 'react-bootstrap'
import './style.css'

class FormError extends Component {
	
  	render() {
  		// id, label, help를 제외한 값들은
  		// 스프레드 연산자를 통해 ...props에 저장 
  		var {show, message, ...props} = this.props
      console.log(this)
  		if (show) {
  			return (
		    	<Alert bsStyle="danger">
		          {message}
	     	 	</Alert>
		    )
  		}
  		return null
  	}
}

export default FormError;