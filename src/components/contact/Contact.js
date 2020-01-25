import React from 'react';

import { Paper, TextField, Button} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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

function Contact(props) {

    const { handleSubmit, handleChange, handleBlur, info, errors, isSubmitting } = ValidationForm(infoInitial,ValidateInputs);

    return (
        <div className="Contact">
            <h1>Contacto</h1>
            {isSubmitting? <h2> Gracias por contactar</h2> : null}
            <Paper className="papper">
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
                                        className="width-button"
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