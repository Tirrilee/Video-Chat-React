import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import './style.css'

class FieldGroup extends Component {
	
  	render() {
  		// id, label, help를 제외한 값들은
  		// 스프레드 연산자를 통해 ...props에 저장 
  		var {id, label, help, ...props} = this.props
	    return (

	      	<FormGroup controlId={id}>
				<FormControl {...props} />
				{help && <HelpBlock>{help}</HelpBlock>}
	    	</FormGroup>
	    );
  	}
}

export default FieldGroup;