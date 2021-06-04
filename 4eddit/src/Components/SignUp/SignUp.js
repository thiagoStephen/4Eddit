import React from "react";
import { ContainerForm, ContainerSignUp } from "./signUp_styles";


export default function SignUp () {
   
    
    const handleInputChange = event => {
        const { name, value } = event.target
        onchange( name, value)
    }

    return (
        
        <ContainerSignUp>
            <ContainerForm>
                <h2>Cadastrar</h2>
                <input 
                    placeholder="Nome de usuário"
                    value={FormData.userName}
                    name="userName"
                    type="text"
                    required
                    onChange={handleInputChange}>
                </input>
                <input 
                    placeholder="Email"
                    value={FormData.userName}
                    name="email"
                    type="text"
                    required
                    onChange={handleInputChange}>
                </input>
                <input 
                    placeholder="senha"
                    value={FormData.userName}
                    name="password"
                    type="password"
                    required
                    onChange={handleInputChange}>
                </input>
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignUp>
    )
}