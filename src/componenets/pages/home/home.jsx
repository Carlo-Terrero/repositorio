import React, { useEffect, useState } from "react";
import axios from "axios";

import HomeItems from "./sections/proyects";
import About from "./sections/aboutMe";
import Contact from "../contact/contact";

const Home = () => {

    const [ portfolioList, setPortfolioList] = useState([])

        // Esto se encargara de cogerlo del back
        // useEffect(()=>{
        //     axios.get("https://carlosterrero.devcamp.space/portfolio/portfolio_items")
        //         .then(response => {
        //             setPortfolioList(response.data.portfolio_items)
        //         })
        //         .catch(
        //             error => console.log('error -> ', error)
        //         );
        // },[])

    return(
        <>
            <About />
              
            <HomeItems list={portfolioList} />

            {/* <Contact /> */}
        </>
    );
}

export default Home;