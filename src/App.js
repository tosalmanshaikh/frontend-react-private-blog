import React, {useState} from 'react';
import './App.css';
import {Route, Switch, NavLink, Redirect,} from "react-router-dom";
import HomePagina from "./pages/HomePagina";
import LoginPagina from "./pages/LoginPagina";
import BlogOverzichtPagina from "./pages/BlogOverzichtPagina";
import BlogPostPagina from "./pages/BlogPostPagina";
import {useHistory} from "react-router-dom";


function App() {

    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    // toggleIsAuthenticated(true)

    const history = useHistory();

    function signOut() {
        toggleIsAuthenticated(false);
        history.push("/")
    }

    return (
        <div>
            {/*Maak hier jouw prachtige blog-applicatie!*/}
            <nav>
                <ul className="nav-container">
                    <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
                    {isAuthenticated ? <>
                            <li><NavLink to="/blogposts" activeClassname="active-link">Blogpost</NavLink></li>
                            <button type="button" onClick={signOut}>Uitloggen</button>
                        </>
                        : <Redirect to=""/>}
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <HomePagina/>
                </Route>

                <Route path="/login">
                    <LoginPagina isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
                </Route>

                <Route exact path="/blogposts/">
                    <BlogPostPagina/>
                </Route>

                <Route path="/blogposts/:blogId">
                    <BlogOverzichtPagina/>
                </Route>

            </Switch>
        </div>

    );
}

export default App;



{/*{!isAuthenticated ? <LoginPagina isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/> : <Redirect to="/"/>}*/}

// STAPPENPLAN PAGINA COMPONENT MAKEN
// [x] directory genaamd "pages"
// [x] JavaScript bestandje maken voor iedere pagina (met Hoofdletter!)
// [x] Supertip: typ in ieder bestand rsc (tab) om een boilerplate component te maken
// [x] Test je pagina componenten door ze allemaal in App.js te importeren en onder elkaar weer te geven
// STAPPENPLAN ROUTING IMPLEMENTEREN
// [x] npm install react-router-dom@5.1.2
// [x] BrowserRouter as Router importeren uit react-router-dom (index.js) - SAM: deze lukt nog niet, en waarom doen we dit?
// Implementeren:
// [x] 1. Routing "bedenken" door het Switch en Route component te gebruiken in App.js
// [x] 2. Maak een navigatiebalk met de links naar de paginas (netjes om ul te gebruiken!) Zorg dat deze op iedere pagina te zien is. Gebruik hiervoor het NavLink component en zoek op hoe het ookalweer werkte met die actieve CSS class
// [x]. Maak op de Login pagina een knop "Inloggen". Wanneer de gebruiker daarop klikt, gebruik je useHistory om de gebruiker door te sturen naar BlogOverzichtPagina
// BLOGPOST OVERZICHT PAGINA MAKEN:
// [x] 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op? Maak ook alvast een Link-component, etc. )
// [x] 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// [x] 3. CHECK YOURSELF BEFORE YOU WRECK YOURSELF! Console log de data en bekijk wat het is? Array? Object? Object met Arrays of andersom?
// [x] 4. Is er een handige manier om al die data niet handmatig uit te hoeven schrijven?
// [x] 5. Zorg ervoor dat er een link en titel voor iedere post wordt gegenereerd

//opdracht 2
//[x] 1. Zorg ervoor dat wanneer een gebruiker op de "Inlog"-knop op de Login pagina klikt, de isAuthenticated state van true naar false
//getoggled wordt. Je zult de waarde en setter-functie (callback prop) dus vanaf App.js moeten doorgeven aan de pagina of component
// die deze waardes nodig heeft.
// [x] 2. Wanneer de bezoeker niet ingelogd is, zijn zowel de blogposts als de Blog Overzichtpagina niet te bezoeken
// Dit zijn dus private routes!

