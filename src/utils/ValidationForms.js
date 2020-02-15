import { useState, useEffect } from 'react';
import axios from './../axios/axiosConfig';

function ValidationForms(infoInitial, validate) {
	const [info, setInfo] = useState(infoInitial);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setSubmitting] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;

			setSubmitting(noErrors);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errors]);

	function handleChange(event) {
		const { name, value } = event.target;

		setInfo({
			...info,
			[name]: value
		});
	}

	function handleBlur(event) {
		checkInput(event);
	}

	function handleInput(event) {
		checkInput(event);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		const params = {
			mailTo: info.mail,
			name: info.name,
			surname: info.surname,
			subject: info.subject,
			text: info.message
		};

		axios
			.post('/email/send', params)
			.then(data => {
				console.log('OK:', data);
				setSubmitting(true);
				setIsError(false);
			})
			.catch(error => {
				setIsError(true);
				console.log('KO', error);
			})
			.then(() => {
				console.log('finally');
				setIsLoading(false);
				setInfo(infoInitial);
			});
	}

	function checkInput(event) {
		const { name } = event.target;
		const validationErrors = validate(info, name, errors);
		setErrors(validationErrors);
	}

	return { handleSubmit, handleChange, handleBlur, handleInput, info, errors, isSubmitting, isError, isLoading };
}

export default ValidationForms;
