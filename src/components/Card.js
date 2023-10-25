import React from "react";
import star from "../images/red-star.png"

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`} className="card--image" />
      <div className="card--stars">
        <img src= {star} className="star--image"/>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span>  / person</p>
    </div>
  )
}