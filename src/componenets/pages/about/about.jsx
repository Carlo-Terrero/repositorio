import React from "react";
import imgPersonal from "../../../assets/carlosterrero.jpg"

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
                <h1>Sobre mí</h1>

                <p>
                    Empecé en el mundo del desarrollo por la inquietud de conocer qué hay detrás 
                    de la creación de un programa informático y descubrí que es algo con lo que 
                    de verdad disfruto y a lo que me encantaría dedicarme profesionalmente. 

                </p>

                <p>
                    Crear apps, webs y herramientas funcionales para mejorar, automatizar o poner 
                    en marcha un ecommerce es como un sueño cumplido. 
                </p>

                <p>
                    Me gustan los retos, trabajar en equipo, aunque también disfruto de afrontar 
                    desafíos en solitario y ver como logro mis objetivos.
                    
                </p>
                
                {/* <p>
                    ; soy persistente, carismático y
                </p> */}

            </div>
        </div>
    )
}
