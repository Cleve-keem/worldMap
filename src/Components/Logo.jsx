import React from "react";
import { Link } from "react-router-dom";

const logoStyle = {
  fontFamily: "system-ui",
  textDecoration: "none",
  fontSize: 20,
  fontWeight: "Bold",
  color: "#fff"
};

export default function Logo() {
  return (
    <Link to="/" style={logoStyle }>
      WorldMap
    </Link>
  );
}
