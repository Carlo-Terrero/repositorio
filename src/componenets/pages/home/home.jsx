import React, { useEffect, useState } from "react";
import axios from "axios";

import HomeItems from "./homeItems/homeItems";

const Home = () => {

    const [ portfolioList, setPortfolioList] = useState([])

        useEffect(()=>{
            axios.get("https://carlosterrero.devcamp.space/portfolio/portfolio_items")
                .then(response => {
                    // console.log(response.data.portfolio_items)
                    setPortfolioList(response.data.portfolio_items)
                })
                .catch(
                    error => console.log('error -> ', error)
                );
        },[])


    return(
        <HomeItems list={portfolioList} />
    );
}

export default Home;