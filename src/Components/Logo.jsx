import React from "react";

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="50"
      viewBox="0 0 200 50"
    >
      <circle cx="25" cy="25" r="20" fill="#4CAF50" />
      <path
        d="M25 5a20 20 0 0 1 0 40M25 5a20 20 0 0 0 0 40"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
      />
      <line x1="5" y1="25" x2="45" y2="25" stroke="#ffffff" strokeWidth="2" />
      <line x1="25" y1="5" x2="25" y2="45" stroke="#ffffff" strokeWidth="2" />

      <text
        x="60"
        y="32"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fill="#000000"
      >
        WorldMap
      </text>
    </svg>

  );
}
