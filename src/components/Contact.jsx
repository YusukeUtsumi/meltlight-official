// src/components/Contact.jsx
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        const el = document.querySelector(".contact-section");
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
        <section id="contact" className="section contact-section">
            <div className="section-inner contact-inner">
                <h2 className="section-title">Contact</h2>
                <div className="contact-body">
                    <p className="contact-text">
                        For exhibitions, commissions, or conceptual collaborations,<br />
                        please use the form below.
                    </p>
                    <a
                        className="contact-button"
                        href="https://tally.so/r/mRXxjj"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
