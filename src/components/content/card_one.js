import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/cardOne.css'

const CardOne = (props) => {


    return(
        <Link to={"/" + props.card.id}>
            <article id={props.card.id}>
                <h4>{props.card.name}</h4>
                    <div className="typeRace">
                        <p className="type">{props.card.type}</p>
                        <p className="race">{props.card.race}</p>
                    </div>
                <img src={props.card.imageSmall} alt={props.card.name} />

            </article>
        </Link>
        
    )
}

export default CardOne;