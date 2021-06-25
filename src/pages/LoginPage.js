import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Podaj login: <input type="text" /></label>
            <br />
            <label htmlFor="">Podaj hasło: <input type="password" /></label>
            <br />
            <button>Zaloguj się</button>
        </div >
    )
}

export default LoginPage;