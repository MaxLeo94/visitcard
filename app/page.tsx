"use client";

import Image from "next/image";
import styles from "./page.module.css";
import CompanyBanner from "./CompanyBanner";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#about">Über mich</a>
          </li>
          <li>
            <a href="#projects">Projekte</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        {/* Über mich */}
        <section id="about" className={styles.section}>
          <h2>Über mich</h2>
          <p>
            Hier kannst du dich kurz vorstellen. Zum Beispiel: Name, Beruf,
            Interessen.
          </p>
        </section>
        {/* Firmen-Banner */}
        <CompanyBanner />
        {/* Projekte als einfache Liste */}
        <section id="projects" className={styles.section}>
          <h2>Projekte</h2>
          <ul>
            <li>Projekt 1 – Kurze Beschreibung</li>
            <li>Projekt 2 – Kurze Beschreibung</li>
            <li>Projekt 3 – Kurze Beschreibung</li>
          </ul>
        </section>
        {/* Kontakt */}
        <section id="contact" className={styles.section}>
          <h2>Kontakt</h2>
          <form
            className={styles.contactForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              Name:
              <input type="text" name="name" required className="form-control" />
            </label>
            <label>
              E-Mail:
              <input
                type="email"
                name="email"
                required
                className="form-control"
              />
            </label>
            <label>
              Nachricht:
              <textarea
                name="message"
                required
                className="form-control"
              />
            </label>
            <button type="submit" className="btn btn-primary mt-2">
              Absenden
            </button>
          </form>
        </section>
      </main>
      {/* Footer mit Impressum und Social Icons */}
      <footer className={styles.footer + " mt-5"}>
        <div style={{ fontSize: "0.9em" }}>
          <a href="#impressum">Impressum</a>
        </div>
        <div className="ms-auto d-flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            title="Facebook"
          >
            <i
              className="bi bi-facebook"
              style={{ fontSize: "1.5em" }}
            ></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            title="Instagram"
          >
            <i
              className="bi bi-instagram"
              style={{ fontSize: "1.5em" }}
            ></i>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener"
            title="TikTok"
          >
            <i
              className="bi bi-tiktok"
              style={{ fontSize: "1.5em" }}
            ></i>
          </a>
          {/* Weitere Social-Links nach Bedarf */}
        </div>
      </footer>
      {/* Optional: Impressum-Abschnitt */}
      <section
        id="impressum"
        className={styles.section}
        style={{ fontSize: "0.9em", marginTop: 32 }}
      >
        <h3>Impressum</h3>
        <p>Hier steht dein Impressum (z.B. Name, Adresse, Kontakt).</p>
      </section>
    </div>
  );
}
