import React from "react";
import star from "../images/red-star.png"

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  } else {
    badgeText = ""
  }

  return (
    <div className="card">
      <div className="card--badge">{badgeText}</div>
      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--stars">
        <img src= {star} className="star--image"/>
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span>  / person</p>
    </div>
  )
}