import React from 'react';

 

export default function Card(props) {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{props.text1} {props.text2}</p>
                <p className="card-text"> text 3 {props.text3}</p>
                <p className="card-text"> text 4 {props.text4}</p>
            </div>
        </div>
    )
}