import React from "react";
// import { Link } from "react-router-dom";
import portfolio from "../../../../assets/portfolio.png";
import gestorImg from "../../../../assets/gestorImg.jpg";

const HomeItems = (props) => {

    const {list} = props;
    const listelement = [
        {id: 1, name: "Portfolio", img: portfolio, description: "Es mi actual carta de presentación, contiene varios de los proyecto que he hecho por cuenta propia. Al ser de mis primeros poryectos siempre esta en cambio continuo.", url: null},
        {id: 2, name: "Gesto de Imagenes", img: gestorImg, description: "Esta app se conecta con la API de imagenes unsplash, las imagenes que guardas se quedan en el local storage, las cuales puedes descargar, por elemplo.", url: "https://gestor-fotos-oxygen-git-main-carlo-terrero.vercel.app/"},
    ]

    const handleLink = (pageDir) => {
        window.open(`${pageDir}`, '_blank');
    }
    
    return(
        
        <>
            {/* {list.map(element => (
                <div key={element.id} className="auth-page-wrapper home-page-wrapper">
                    <div 
                        className="left-column back-img"
                        style={{
                            backgroundImage: `url(${element.thumb_image_url})`
                        }}
                    />

                    <div className="right-column right-column-home">
                        <h2>{element.name}</h2>

                        <div className="subtitle">{element.description}</div>

                        {
                            element.name != "Portfolio" ?
                            <button className="btn btn-home" onClick={() => handleLink(element.url) }>visit website</button> :
                            false
                        }
                    </div>

                </div>
            ))} */}

            {listelement.map(element => (
                <div key={element.id} className="auth-page-wrapper home-page-wrapper">
                    <div 
                        className="left-column back-img"
                        style={{
                            backgroundImage: `url(${element.img})`
                        }}
                    />

                    <div className="right-column right-column-home">
                        <h2>{element.name}</h2>

                        <div className="subtitle">{element.description}</div>

                        {
                            element.url != null ?
                            <button className="btn btn-home" onClick={() => handleLink(element.url) }>visit website</button> :
                            false
                        }
                    </div>

                    {/* <a href={`${element.thumb_image_url}`}>Descargar</a> */}
                </div>
            ))}
        </>
    )
}

export default HomeItems;
