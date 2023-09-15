import React from "react";
// import { Link } from "react-router-dom";

const HomeItems = (props) => {

    const {list} = props;

    const handleLink = (pageDir) => {
        window.open(`${pageDir}`, '_blank');
    }
    
    return(
        
        <>
            {list.map(element => (
                // <Link key={element.id} to={`${element.url}`}>
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
                // </Link>
            ))}
        </>
    )
}

export default HomeItems;

// url => Link al sitio web
// log_url = link al repo