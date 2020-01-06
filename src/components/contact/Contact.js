import React from 'react';

import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

  const useStyles = makeStyles({
    root: {
        width: '90%'
    }
  });

function Contact(props) {

    const classes = useStyles();

    const { handleSubmit, handleChange, handleBlur, info, errors } = ValidationForm(infoInitial,ValidateInputs);


    return (
        <div className="Contact">
            <h1>Contact</h1>
            <Paper classes={{root: classes.root}}>
                <form onSubmit={handleSubmit}>
                    <div className="flex-column">
                        {/* fila 1 */}
                        <div className="flex-row">
                            <div className="input-contact">
                                <TextField
                                    name="name"
                                    error={errors.name}
                                    required
                                    label="Nombre"
                                    placeholder="Nombre"
                                    variant="outlined"
                                    fullWidth
                                    value={info.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="input-contact">
                                <TextField
                                    name="surname"
                                    label="Apellidos"
                                    placeholder="Apellidos"
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
                                    name="mail"
                                    error={errors.mail}
                                    required
                                    label="Correo"
                                    placeholder="Correo"
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
                                    name="subject"
                                    error={errors.subject}
                                    required
                                    label="Título"
                                    placeholder="Título"
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
                                    name="message"
                                    error={errors.message}
                                    required
                                    multiline
                                    rows="4"
                                    label="Mensaje"
                                    placeholder="Mensaje"
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
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<SendIcon />}
                                        type="submit"
                                    >
                                        Enviar
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

export default Contact;