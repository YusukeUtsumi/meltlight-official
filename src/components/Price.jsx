// src/components/Price.jsx
import { useEffect } from "react";

export default function Price() {
    useEffect(() => {
        const el = document.querySelector(".price-section");
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
        <section id="price" className="section price-section">
            <div className="section-inner price-inner">
                <h2 className="price-title">PRICING</h2>
                <div className="price-divider"></div>

                <div className="price-table">
                    <div className="price-row">
                        <div className="price-category">Poetic Entry (Experience)</div>
                        <div className="price-value">€2,000 – €3,000</div>
                    </div>

                    <div className="price-row">
                        <div className="price-category">Short Poem (5–10 Lines)</div>
                        <div className="price-value">€4,000 – €7,000</div>
                    </div>

                    <div className="price-row">
                        <div className="price-category">Hero Poem + Paragraph</div>
                        <div className="price-value">€8,000 – €15,000</div>
                    </div>

                    <div className="price-row">
                        <div className="price-category">Exhibition Poem</div>
                        <div className="price-value">Upon Request</div>
                    </div>

                    <div className="price-row">
                        <div className="price-category">Narrative Architecture</div>
                        <div className="price-value">Upon Request</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
