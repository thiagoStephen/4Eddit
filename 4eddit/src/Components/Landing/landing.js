import React from 'react';
import { Link, Router } from 'react-router-dom';
import { ContainerLanding, Section } from './landing_styles.js';
import ImageVector from "../../Global/image_vector/img-test-4.png"

export default function LandingComponent() {
    return (
        <ContainerLanding>
           <img className="ImageBackground" src={ImageVector} />
            <Router>
                <Link to="/login">
                    <button className="button-landing">Login</button>
                </Link>
                <Link to="/signup">
                    <button>Cadastrar</button>
                </Link>
            </Router>
        </ContainerLanding>
    );
}