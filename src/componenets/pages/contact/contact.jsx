import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import contactImg from "../../../assets/login.jpg";

export default function Contact(){

    return(
        <div className="content-wrapper">
            <div 
                className="left-wrapper" 
                style={{ 
                    backgroundImage: `url(${contactImg})`
                }}
            >
            </div>

            <div className="right-wrapper">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon"> 
                            <PhoneAndroidIcon/>
                        </div>

                        <div className="text"> + 34 629 22 86 54</div>

                        {/* phone number here */}
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon"> 
                            {/* <FontAwesomeIcon icon="envelope"/>  */}
                            <EmailIcon/>
                        </div>

                        <div className="text">carlosjose2111@gmail.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon"> 
                            {/* <FontAwesomeIcon icon="map-marked-alt"/>  */}
                            <WhereToVoteIcon/>
                        </div>

                        <div className="text">Madrid, Spain</div>
                    </div>

                    <div className="bullet-point-group">
                    <a href="https://www.linkedin.com/in/carlos-jos%C3%A9-terrero-mendez-088462111/" target="_blank">
                        <div className="icon"> 
                            {/* <FontAwesomeIcon icon={["fab", "linkedin"]}/>    */}
                            <LinkedInIcon/>
                        </div>
                        <div className="text">Linked In</div>
                     {/* <FontAwesomeIcon icon={["fab", "linkedin"]}/> */}
                    </a>
                    </div>

                    <div className="bullet-point-group">
                        <a href="https://github.com/Carlo-Terrero?tab=repositories" target="_blank">
                            <div className="icon"> 
                                {/* <FontAwesomeIcon icon={["fab", "github"]}/>    */}
                                <GitHubIcon/>
                            </div>
                        
                            <div className="text">GitHub</div>
                        </a>
                </div>
                </div>                                
            </div>
        </div>
    )
}
