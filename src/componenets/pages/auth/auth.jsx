import React from "react";
import Login from "./login";
import loginImg from '../../../assets/login.jpg'

const Auth = ({changeState}) => {


    return(
        <>
            <div className="auth-page-wrapper">
                {/* para trabajar con imagenes se trebaja con div
                que tiene un cierre solo */}
                <div 
                    className="left-column"
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-column">
                    <Login changeState={changeState}/>
                </div>
            </div>
        </>
    )
}

export default Auth;