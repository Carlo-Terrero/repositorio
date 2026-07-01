import React from "react";
// import { Link } from "react-router-dom";
import portfolio from "../../../../assets/portfolio.png";
import gestorImg from "../../../../assets/gestorImg.jpg";
import apiImg from "../../../../assets/api.webp";
import oxigen_shop from "../../../../assets/oxigen-shop.png"

const HomeItems = (props) => {

    const {list} = props;
    const listelement = [
        {id: 1, name: "Portfolio", img: portfolio, description: "Es mi actual carta de presentación, contiene varios de los proyecto que he hecho por cuenta propia. Al ser de mis primeros poryectos siempre esta en cambio continuo.", url: null},
        {id: 2, name: "Gesto de Imagenes", img: gestorImg, description: "Esta app se conecta con la API de imagenes unsplash, las imagenes que guardas se quedan en el local storage, las cuales puedes descargar, por elemplo.", url: "https://gestor-fotos-oxygen.vercel.app/"},
        {id: 3, name: "Api Hotel Miranda", img: apiImg, description: "Api creada en Node.js con BBDD NoSQL (MongoDB). Proporciona información desde endpoint publicos y privados. Estos ultimos utilizados por el dashboard.", url: "https://github.com/Carlo-Terrero/api-hotel-miranda"},
        {id: 4, name: "Oxygen Shop", img: oxigen_shop, description: "Maquetación de pagina web para tienda de productos informáticos. Desarrollada con el propósito de implementar las habilidades adquiridas hasta ese entonces.", url: "https://carlo-terrero.github.io/Oxygen-Shop/"},
    ]

    const handleLink = (pageDir) => {
        window.open(`${pageDir}`, '_blank');
    }
    
    return(
        
        <div className="proyects_container">

            <h2 className="subtitles_containers">
                Proyectos
            </h2>

            <div className="containers_cars">

            
                {listelement.map(element => (
                    <div key={element.id} className="cards_proyects">
                        <div className="card_img">
                            <img className="image-proyect" src={element.img}/>
                        </div>
                        
                        <div className="card_data">
                            <h2 className="card_title">{element.name}</h2>

                            <div className="card_subtitle">{element.description}</div>

                            {
                                element.url != null ?
                                <button className="btn btn-home" onClick={() => handleLink(element.url) }>Visitar web</button> :
                                false
                            }
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeItems;
