import React from "react";
import "./Header.css";

export default function Header() {
  const dateTime = new Date();
  const date = dateTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <header className="header">
      <div className="header-container">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="Logo"
          className="logo"
        />
        <h2 className="main-heading">Employees Activity Dashboard</h2>
      </div>
      <div className="dateAndTime">
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </header>
  );
}
