import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation = ({state, changeState}) => {

    const navigationArray = [
        {state: true, path:"/contact", name:"Contact"},
        {state: true, path:"/about-me", name:"About me"},
        {state: state, path:"/blog", name:"Blog"},
        {state: state, path:"/portfolio", name:"Portfolio"},
        {state: state, path:"/auth", name:"Auth"},
    ]

    const navigate = useNavigate();

    function logOut(){
        changeState(false);
        navigate('/');
    }
    
    return(
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact="true" to ="/" className="nav-link-active">Home</NavLink>
                </div>

                {
                    navigationArray.map(element => (
                        element.state == true?
                            <div key={element.name} className="nav-link-wrapper">
                                <NavLink to ={element.path} className="nav-link-active">{element.name}</NavLink>
                            </div> 
                            : false
                    ))
                }

            </div> 

            <div className="right-side ">
                CARLOS JOSÉ TERRERO MÉNDEZ
            
                {
                    state ? <div className="icon" > 
                                <LogoutIcon onClick={() => logOut()} />  
                            </div> 
                          : false
                }

            </div>

        </div>
    )
}

export default Navigation;