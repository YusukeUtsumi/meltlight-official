// src/components/Atelier.jsx
import { useEffect } from "react";

export default function Atelier() {
    useEffect(() => {
        const el = document.querySelector(".works-section");
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
        <section id="works" className="section works-section">
            <div className="section-inner atelier-inner">
                <h2 className="section-title">Atelier</h2>

                <div className="works-grid">
                    <article className="work-item">
                        <div className="work-thumb placeholder-thumb">
                            <span className="coming-soon">Coming soon</span>
                        </div>
                        <h3 className="work-title">Boundary</h3>
                        <p className="work-caption">
                            “Where memory meets the edge of itself.”
                        </p>
                    </article>

                    <article className="work-item">
                        <div className="work-thumb placeholder-thumb">
                            <span className="coming-soon">Coming soon</span>
                        </div>
                        <h3 className="work-title">Veil</h3>
                        <p className="work-caption">
                            “A question that never fully appears.”
                        </p>
                    </article>

                    <article className="work-item">
                        <div className="work-thumb placeholder-thumb">
                            <span className="coming-soon">Coming soon</span>
                        </div>
                        <h3 className="work-title">Loop</h3>
                        <p className="work-caption">
                            “Light returning to the same hesitation.”
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
