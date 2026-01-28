import React from "react";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>

      {/* HERO SECTION */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", letterSpacing: "2px" }}>
          ECHELON INTERIORS
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#d4af37" }}>
          Luxury Interior Design & Fit-Out Company
        </p>
        <p style={{ marginTop: "1rem", maxWidth: "600px", marginInline: "auto", color: "#ccc" }}>
          We design and deliver sophisticated living and working spaces for clients who value elegance, quality and timeless beauty.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/254797844697?text=Hello%20Echelon%20Interiors,%20I%20would%20like%20a%20quotation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#d4af37",
              color: "#000",
              padding: "0.9rem 1.8rem",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Request Quotation
          </a>

          <a
            href="#portfolio"
            style={{
              border: "1px solid #d4af37",
              color: "#d4af37",
              padding: "0.9rem 1.8rem",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "3rem 1.5rem", backgroundColor: "#0b0b0b" }}>
        <h2 style={{ textAlign: "center", color: "#d4af37", fontSize: "2rem" }}>Our Services</h2>

        <div style={{ display: "grid", gap: "1.5rem", maxWidth: "900px", margin: "2rem auto" }}>
          {[
            "Luxury Interior Design",
            "Residential & Commercial Fit-Out",
            "Kitchen & Wardrobe Design",
            "Space Planning & Renovations",
            "Custom Furniture & Finishes",
            "Project Management"
          ].map((service, i) => (
            <div key={i} style={{ backgroundColor: "#000", padding: "1.2rem", border: "1px solid #1f1f1f", borderRadius: "12px" }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37", fontSize: "2rem" }}>About Echelon</h2>
        <p style={{ maxWidth: "750px", margin: "1.5rem auto", color: "#ccc" }}>
          Echelon Interiors is a premium interior design and fit-out company delivering refined, functional and elegant spaces.
          We blend creativity with craftsmanship to produce interiors that reflect status, comfort and excellence.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "3rem 1.5rem", backgroundColor: "#0b0b0b" }}>
        <h2 style={{ textAlign: "center", color: "#d4af37", fontSize: "2rem" }}>Our Portfolio</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", maxWidth: "1000px", margin: "2rem auto" }}>
          {["Luxury Living Room", "Modern Kitchen", "Executive Office", "Master Bedroom", "Reception Area", "Dining Space"].map((project, i) => (
            <div key={i} style={{ backgroundColor: "#000", padding: "2rem", borderRadius: "15px", border: "1px solid #1f1f1f", textAlign: "center" }}>
              {project}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ color: "#d4af37", fontSize: "2rem" }}>Contact Us</h2>

        <p style={{ marginTop: "1rem", color: "#ccc" }}>
          📍 Nairobi, Kenya  
          <br />
          📞 +254 797 844 697  
          <br />
          📧 echeloninteriors@gmail.com
        </p>

        <a
          href="https://wa.me/254797844697?text=Hello%20Echelon%20Interiors,%20I%20would%20like%20a%20quotation"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            backgroundColor: "#d4af37",
            color: "#000",
            padding: "1rem 2rem",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "1.5rem", backgroundColor: "#000", textAlign: "center", color: "#777", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Echelon Interiors. All rights reserved.
      </footer>

    </div>
  );
}
