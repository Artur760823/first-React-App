import React from 'react';
import { Route } from 'react-router-dom';
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Stopka</h2>
                <Route path="/" exact render={(props) => {
                    return (
                        <p>Jesteś na <span>stronie głównej</span></p>
                    )
                }} />
                <Route path="/:page" exact render={(props) => {
                    console.log(props);
                    return (
                        <p>Jesteś na <span>{props.match.params.page}</span></p>
                    )
                }} />
            </div>
        </footer>
    )
}

export default Footer;