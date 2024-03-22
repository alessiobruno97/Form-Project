import React from 'react';
import { useLocation } from 'react-router-dom';
import './Summary.css'



function Summary() {
    const location = useLocation();
    const state = location.state || {}; //Si utilizza l'operatore || per impostare state a un oggetto vuoto nel caso in cui non ci siano dati presenti nel campo state.

    const { name, lastName, email } = state;

    return (
        <div className='container-summary' >
            <div className='summary'>
                <h3>Summary</h3>

            </div>
            <div className='form'>
                <p>Name: {name}</p>
                <p>Lastname: {lastName}</p>
                <p>Email: {email}</p>
            </div>

        </div>
    );
}

export default Summary;
