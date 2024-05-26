import React from "react";
import "./Card.css";
export default function Card(props) {
  console.log("Card");
  return (
    <div className="card">
      <img
        id="employee-image"
        src={process.env.PUBLIC_URL + "/rakesh_sharma.png"}
        alt="employee"
      />
      <h3 className="card-heading">Employee of the Month</h3>
      <div>{props.name}</div>
      <div>{props.designation}</div>
      <img
        id="card-image"
        src={process.env.PUBLIC_URL + "/Employee-of-the-Month.png"}
        alt="special-employee"
      />
    </div>
  );
}
