
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function InputReact() { //definisco il componente InputReact come una funzione react



    // usa lo stato locale tramite useState per gestire i tre valori di input e un messaggio di errore
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => { //all'evento di click per inviare il form submit.. avvia la funzione 
        event.preventDefault();        //impedisce il comportamento di default di event.preventDefault()

        if (name.trim() !== '' && lastName.trim() !== '' && email.trim() !== '') { //controlla se tutti e tre gli input sono vuoti o meno, anche considerando il trim per togliere gli spazi
            /*  setMessage(`Benvenuto ${name} ${lastName}. La tua email è: ${email}.`);  */
            navigate('/summary', { state: { name, lastName, email } }); // Utilizza navigate per navigare a '/summary' con i dati dello stato
        } else {
            setMessage('Riempi tutti i campi prima di procedere.');
        }
    }


    let navigate = useNavigate();
    const routeChange = () => {
        let path = `newPath`;
        navigate(path);
    }

    const handleReset = () => {
        setName('');
        setLastName('');
        setEmail('');
        setMessage('');
    }



    const handleFocus = (event) => {
        event.target.placeholder = ''; // quando un campo di input riceve il focus, la funione handleFocus imposta il placeholder in una stringa vuota
    }

    const handleBlur = (event, placeholder) => {
        event.target.placeholder = placeholder;
    }


    /* 
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" type={'email'} label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        ); */
    return (


        <div className="Container">
            <div className="App">
                <div className='top-bar'>
                    {/*   <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                    <input type="text"
                        className="nameInput"
                        placeholder='Insert your name'
                        onFocus={handleFocus} // si attiva quando l'input è in focus (click del mouse) e attiva la funzione descritta sopra
                        onBlur={(event) => handleBlur(event, 'Insert your name')} //si attiva quando l'input perde il focus e attiva la funzione descritta sopra
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>

                <div className='top-bar'>
                    <input type="text"
                        className="surnameInput"
                        placeholder='Insert your surname'
                        onFocus={handleFocus}
                        onBlur={(event) => handleBlur(event, 'Insert your surname')}
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div className='top-bar'>
                    <input type="text"
                        className="emailInput"
                        placeholder='Insert your email'
                        onFocus={handleFocus}
                        onBlur={(event) => handleBlur(event, 'Insert your email')}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className='button-bar'>
                    <button className='button' onClick={handleReset}>Reset</button>
                    <button className='button' onClick={handleSubmit}>Submit</button>
                    {/*                     <button onClick={routeChange}> Submit 2</button>
 */}                </div>
                <div className="message">{message && <p>{message}</p>}</div>

            </div>

        </div>
    );







}