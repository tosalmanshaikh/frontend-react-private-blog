import React from 'react';
import {useHistory} from "react-router-dom";


function LoginPagina({ toggleAuth, isAuth }){

    const history = useHistory()

    function signIn (){
        toggleAuth(true)
        history.push('/blogposts')
        console.log(isAuth)
    }

    return (
        <>
        <div id="login">
            <h3>Login Pagina</h3>
            <p>: Druk op de knop om je in te loggen </p>
            <button type="button" onClick={signIn}>Inloggen</button>
        </div>
        </>

    );
}

export default LoginPagina;