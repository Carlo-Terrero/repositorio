import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PortfolioListElement({listelement, edit}){

    return(
        <div className="portfolio-sidebar-list-wrapper"> 
            {listelement.map(element => (
                <div key={element.id} className="portfolio-item-thumb">
                    <div className="portfolio-thumb-img">
                        <img src={element.thumb_image_url}/>
                    </div>
                    
                    <div className="text-content">
                        <div className="title">{element.name}</div>

                        <div className="actions">
                            <a 
                                className="action-icon" 
                                onClick={() => edit(element)}
                            >
                                <EditIcon icon="edit"/>
                            </a>

                            <a 
                                className="action-icon" 
                                // onClick={() => delete(element)}
                            >
                                <DeleteIcon icon="trash"/>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}