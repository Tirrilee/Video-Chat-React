export default function Validations(name, value) {
	var message = null
	var show = false
	switch(name){
		case 'email':
      		var emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      		message = emailValid ? '' : 'email is not valid'
      		show = emailValid ? false : true
      		return {show, message}
      	case 'password2':
    	case 'password':
      		var passwordValid = value.length >= 6;
      		message = passwordValid ? '': 'password is too short';
      		show = passwordValid ? false : true
      		return {show, message}
    	default:
        	return {show, message}
	}
}
