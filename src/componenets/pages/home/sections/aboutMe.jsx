import React from "react";
import imgPersonal from "../../../../assets/carlosterrero.jpg";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About() {
    return(
        <div className="content-wrapper">
            <div 
                className="left-wrapper" 
                style={{ 
                    backgroundImage: `url(${imgPersonal})`
                }}
            >
            </div>

            <div className="right-wrapper">
                <h1>Carlos Terrero</h1>

                <p>
                    Cuento con más de 3 años de experiencia como Desarrollador Full Stack, 
                    mi motor sigue siendo el mismo que el primer día: la curiosidad 
                    por entender cómo funcionan las cosas y el impacto de crear 
                    soluciones reales.
                </p>

                <p>
                    Me especializo en dar vida a aplicaciones, webs, herramientas 
                    que optimizan, automatizan y hacen crecer negocios.
                </p>

                <p>
                    Creo firmemente en el código limpio, legible y en las buenas 
                    prácticas como pilar de cualquier proyecto escalable. 
                    Soy un perfil autodidacta y versátil, cómodo tanto liderando 
                    retos en solitario como colaborando en equipos dinámicos para 
                    transformar ideas complejas en código eficiente.
                </p>

                <div className="container_btns">
                    <a href="https://www.linkedin.com/in/carlos-jos%C3%A9-terrero-mendez-junior-full-stack" target="_blank" rel="noopener noreferrer">
                       <LinkedInIcon
                            color="primary"
                            sx={{ fontSize: 25}}
                       /> LinkedIn
                    </a>

                    <a href="https://github.com/Carlo-Terrero" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon
                            sx={{color: "#26bfd4", fontSize: 25}}
                        /> GitHub
                    </a>
                </div>

            </div>
        </div>
    )
}
