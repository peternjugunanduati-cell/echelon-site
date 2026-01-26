import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Echelon Interiors</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#555" }}>
        Luxury Interior Design & Fit-Out Company in Nairobi
      </p>
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <a
          href="https://wa.me/254797844697?text=Hello%20Echelon%20Interiors,%20I%20would%20like%20a%20quotation"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "0.8rem 1.5rem",
            borderRadius: "1rem",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Request Quotation
        </a>
        <a
          href="#portfolio"
          style={{
            border: "2px solid #000",
            padding: "0.8rem 1.5rem",
            borderRadius: "1rem",
            textDecoration: "none",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
            }
