import { useState, useEffect } from 'react';

function ValidationForms(infoInitial, validate) {
    
    const [info, setInfo] = useState(infoInitial);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect ( () => {
        if(isSubmitting) {
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
        })
    };

    function handleBlur(event) {
        checkInput(event);
    }

    function handleInput(event) {
        checkInput(event);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //const validationErrors = validate(info);
        //setErrors(validationErrors);
        console.log('datos', info);
        setSubmitting(true);
        setInfo(infoInitial);
    };

    function checkInput(event){
        const { name } = event.target
        const validationErrors = validate(info, name, errors);
        setErrors(validationErrors);
    }

    return { handleSubmit, handleChange, handleBlur, handleInput, info, errors, isSubmitting };
}

export default ValidationForms;