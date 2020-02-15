function ValidateInputs(info, input = 'all', errors = {}) {
	let valError = { ...errors };
	const { name, mail, subject, message } = info;

	switch (input) {
		case 'name':
			validateInputText(name, input, valError);
			break;
		case 'subject':
			validateInputText(subject, input, valError);
			break;
		case 'message':
			validateInputText(message, input, valError);
			break;
		case 'mail':
			validateMail(mail, valError);
			break;
		default:
			validateInputText(name, valError);
			validateInputText(subject, input, valError);
			validateInputText(message, input, valError);
			validateMail(mail, valError);
			break;
	}
	return valError;
}

function validateInputText(value, input, errors) {
	errors[input] = false;
	if (!value) {
		errors[input] = true;
	} else if (value.trim() === '') {
		errors[input] = true;
	}
}

function validateMail(mail, errors) {
	errors.mail = false;
	if (!mail) {
		errors.mail = true;
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mail)) {
		errors.mail = true;
	}
}

export default ValidateInputs;
