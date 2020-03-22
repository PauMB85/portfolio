import React from 'react';

import {
	Paper,
	TextField,
	Button,
	LinearProgress,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	DialogActions
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import ValidationForm from './../../utils/ValidationForms';
import ValidateInputs from './../../utils/ValidateInputs';

import './Contact.scss';

const infoInitial = {
	name: '',
	surname: '',
	mail: '',
	subject: '',
	message: ''
};

const useStyles = makeStyles(theme => ({
	root: {
		width: '90%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}));

function Contact(props) {
	const { handleSubmit, handleChange, handleBlur, info, errors, isSubmitting, isError, isLoading } = ValidationForm(infoInitial, ValidateInputs);
	const classes = useStyles();

	return (
		<div className="Contact">
			<h1>Contact</h1>
			{isSubmitting && !isError && !isLoading ? <ThankYou /> : null}
			{isLoading ? (
				<div className={classes.root}>
					<LinearProgress color="secondary" />
				</div>
			) : null}

			<Paper className="papper">
				<form onSubmit={handleSubmit} >
					<div className="flex-column">
						{/* fila 1 */}
						<div className="flex-row">
							<div className="input-contact">
								<TextField
									id="name"
									name="name"
									error={errors.name}
									required
									label="Name"
									placeholder="Name"
									variant="outlined"
									fullWidth
									value={info.name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
							<div className="input-contact">
								<TextField
									id="surname"
									name="surname"
									label="Surname"
									placeholder="Surname"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									value={info.surname}
								/>
							</div>
						</div>
						<div className="flex-row">
							<div className="input-contact">
								<TextField
									id="mail"
									name="mail"
									error={errors.mail}
									required
									label="Mail"
									placeholder="Mail"
									type="email"
									variant="outlined"
									fullWidth
									value={info.mail}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
						</div>
						<div className="flex-row">
							<div className="input-contact">
								<TextField
									id="subject"
									name="subject"
									error={errors.subject}
									required
									label="Title"
									placeholder="Title"
									variant="outlined"
									fullWidth
									value={info.subject}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
						</div>
						<div className="flex-row">
							<div className="input-contact">
								<TextField
									id="message"
									name="message"
									error={errors.message}
									required
									multiline
									rows="4"
									label="Message"
									placeholder="Message"
									variant="outlined"
									fullWidth
									value={info.message}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
						</div>
						<div className="flex-row">
							<div className="input-contact">
								<div className="flex-end">
									<Button variant="contained" color="secondary" startIcon={<SendIcon />} type="submit" className="width-button">
										Send
									</Button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</Paper>
		</div>
	);
}

function ThankYou() {
	const isError = false;
	const [open, setOpen] = React.useState(true);

	const titulo = isError ? 'Oops!' : 'Thank you';
	const body = isError ? 'Something was wrong! Try it again.' : 'I will respond as soon as possible';

	const handleClick = () => setOpen(false);

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Slide}
				keepMounted
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{titulo}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">{body}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClick} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Contact;
