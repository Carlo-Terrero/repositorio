import React, {useEffect, useState} from "react";
import axios from "axios";
import EditPortfolio from "./editPortfolio/editPortfolio";
import PortfolioListElement from "./portfolioList/portfolioListElement";

export default function Portfolio() {

    const [portfolioElement, setPortfolioElement] = useState([]);
    const [portfolioEdit, setPortfolioEdit] = useState({});

    useEffect(() => {
       getPortfolioElement();
    }, [])

    function getPortfolioElement(){
        axios
            .get("https://carlosterrero.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",{
                withCredentials: true})
            .then(response => {
                setPortfolioElement(response.data.portfolio_items);
            })
            .catch(error => {
                console.log("error in getelements", error);
            }
        );
    }

    function handleEditClick(portfolioItem){
        // console.log('edit -> ', portfolioItem);

    }

    function handleDeleteClick(portfolioItem) {
        console.log('delete -> ', portfolioItem);
        // axios.delete(
        //     `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        //     { withCredentials: true}
        // )
        // .then(response => {
        //     this.setState({
        //         portfolioItems: this.state.portfolioItems.filter(item => {
        //             return item.id !== portfolioItem.id;
        //         })
        //     });

        //     return response.data;
        // })
        // .catch(error => {
        //     console.log("handleDeleteClick error", error)
        // })
    }

    return(
        <div className="portfolio-manager-wrapper">
            <div className="left-column">
                <EditPortfolio
                    refreshPortfolio={getPortfolioElement}
                    editElemnt={portfolioEdit}
                />
            </div>

            <div className="right-column">
                <PortfolioListElement
                    delete={handleDeleteClick}
                    edit={setPortfolioEdit}
                    listelement={portfolioElement}
                />    
            
            </div>
        </div>
    );
}
