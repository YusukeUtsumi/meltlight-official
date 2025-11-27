// src/components/Philosophy.jsx
import { useEffect } from "react";

export default function Philosophy() {
    useEffect(() => {
        const el = document.querySelector(".philosophy-section");
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
        <section id="philosophy" className="section philosophy-section">
            <div className="section-inner philosophy-inner">
                <h2 className="philosophy-title">PHILOSOPHY</h2>
                <div className="philosophy-divider"></div>
                <p className="philosophy-text">
                    My work explores the thin membrane between clarity and mystery.<br />
                    A visual echo of questions that precede language.<br />
                    An invitation to see systems not as mechanisms,<br />
                    but as places where something quietly awakens.
                </p>
            </div>
        </section>
    );
}
