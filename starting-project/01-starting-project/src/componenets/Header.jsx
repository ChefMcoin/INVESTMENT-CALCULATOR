import React from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Investment logo" />
      <h1>Investment Calculator</h1>
      <p>Your best calculator to help with your investment</p>
    </header>
  );
}
