// src/components/AboutMe.jsx
import { useEffect } from "react";

export default function AboutMe() {
    useEffect(() => {
        const el = document.querySelector(".about-section");
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section about-section">
            <div className="section-inner about-inner">
                <h2 className="section-title">About</h2>
                <div className="section-body">
                    <p className="about-role">
                        Yusuke Utsumi<br/>
                        AI Concept Artist / Conceptual Engineer<br/>
                        TopDesignKing jury member
                    </p>
                    <h3 className="about-subtitle">Selected Recognitions</h3>
                    <ul className="about-awards">
                        <li>Web Guru Awards — Guru of the day</li>
                        <li>TopDesignKing — Nominee</li>
                        <li>BestCSS — Gallery Featured</li>
                        <li>CSSLight — Gallery Featured</li>
                    </ul>
                    <a
                        className="about-portfolio-button"
                        href="https://meltlight.art/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Enter Portfolio Archive
                    </a>
                </div>
            </div>
        </section>
    );
}
