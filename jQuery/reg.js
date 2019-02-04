$(document).ready(()=>{

	$('#register').click((e)=>{

		const validateName = (name)=>{
		if(name=='')
		{
			$('#err').text('Name cannot be empty');
			return false;
		}
		else
		{
			if(name.length<4)
				$('#err').text('Name should be more than 4 characters');
			else
				return true;
		}
	}
	const validatePass = (pass)=>{
		if(pass=='')
		{
			$('#err').text('Password cannot be empty');
			return false;
		}
		else
		{
			let regularExpression = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
		    let valid = regularExpression.test(pass);
		    if(valid)
		    	return true;
		    else
		    {
		    	$('#err').text('Password should be alpha numeric and atleast 6 characters');
		    	return false;
		    }
		}
	}
	const validateEmail = (email)=>{
		if(email=='')
		{
			$('#err').text('Email cannot be empty');
			return false;
		}
		else
		{
			let emailRegex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			let valid=emailRegex.test(email);
			if(valid)
				return true;
			else
			{
				$('#err').text('Not a proper email address');
				return false;
			}
		}
	}
	const validateAll = ()=>{
		let name=$('#name').val();
		let pass=$('#pass').val();
		let email=$('#email').val();
		$('err').text('');

		if(validateName(name))
		{
			if(validatePass(pass))
			{
				if(validateEmail(email))
				{
					return true;
				}
				else
					e.preventDefault();
			}
			else
				e.preventDefault();
		}
		else
			e.preventDefault();
		$('#err').css("color","red");
	}
	validateAll();
	});
});