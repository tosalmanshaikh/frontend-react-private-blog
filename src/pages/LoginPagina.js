import React from 'react';
import {useHistory} from "react-router-dom";
import { useForm } from 'react-hook-form';
// import './App.css';



function LoginPagina({ toggleAuth, isAuth }){

        const { register, formState: { errors }, handleSubmit, watch } = useForm({
            mode: 'onChange',
        });

        const selectedFrequency = watch('delivery-frequency');

        function onFormSubmit(data) {
            console.log(data);
        }

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
            </div>

        <form className="form" onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="firstname-field">Voornaam:</label>
            <input
                type="text"
                id="firstname-field"
                {...register("firstname", {
                    required: "Voornaam is verplicht",
                })}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}

            <label htmlFor="lastname-field">Achternaam:</label>
            <input
                type="text"
                id="lastname-field"
                {...register("lastname", {
                    required: "Achternaam is verplicht",
                })}
            />
            {errors.lastname && <p>{errors.lastname.message}</p>}

            <label htmlFor="age-field">Leeftijd:</label>
            <input
                type="number"
                id="age-field"
                {...register("age", {
                    required: "Leeftijd is verplicht",
                    min: {
                        value: 18,
                        message: "Minimale leeftijd is 18",
                    }
                })}
            />
            {errors.age && <p>{errors.age.message}</p>}

            <label htmlFor="zipcode-field">Postcode:</label>
            <input
                type="text"
                {...register("zipcode", {
                    required: "Postcode is verplicht",
                    pattern: {
                        value: /^[0-9]{4}[a-zA-Z]{2}$/,
                        message: "Ongeldige postcode",
                    }
                })}
            />
            {errors.zipcode && <p>{errors.zipcode.message}</p>}

            <label htmlFor="frequency-field">hoe heb je ons gevonden?</label>
            <select {...register("delivery-frequency")}>
                <option value="week">google</option>
                <option value="two-week">vrienden</option>
                <option value="month">krant</option>
                <option value="other">geen idee</option>
            </select>
            {selectedFrequency === "other" &&
            <>
                <label htmlFor="other-field">Specificeer:</label>
                <input
                    type="text"
                    id="other-field"
                    {...register("other")}
                />
            </>
            }
            <label htmlFor="comments-field">Opmerkingen:</label>
            <textarea {...register("comments")} id="comments-field" cols="196" rows="10" placeholder="heb je iets te melden?"></textarea>

            <label htmlFor="terms-and-conditions-field">
                <input
                    type="checkbox"
                    id="terms-and-conditions-field"
                    {...register("terms-and-conditions")}
                />
                Ik ga akkoord met de algemene voorwaarden
            </label>

            <button type="button" onClick={signIn}>Klik hier om in te loggen</button>

        </form>




        </>
    );
}

export default LoginPagina;






// dit is de original kopie zonder de forms

// import React from 'react';
// import {useHistory} from "react-router-dom";
//
//
// function LoginPagina({ toggleAuth, isAuth }){
//
//     const history = useHistory()
//
//     function signIn (){
//         toggleAuth(true)
//         history.push('/blogposts')
//         console.log(isAuth)
//     }
//
//     return (
//         <>
//         <div id="login">
//             <h3>Login Pagina</h3>
//             <p>: Druk op de knop om je in te loggen </p>
//             <button type="button" onClick={signIn}>Inloggen</button>
//         </div>
//         </>
//
//     );
// }
//
// export default LoginPagina;



