// src/components/HeroVeil.jsx

import React from "react";

function HeroVeil() {
    return (
        <div className="hero-veil-root">
            {/* MeltLightロゴ（超薄い象徴レイヤー） */}
            <div className="hero-symbol">
                <img
                    src="/favicon.svg"
                    alt="MeltLight symbol"
                    className="hero-symbol-img"
                />
            </div>

            {/* ローズゴールドの静かなベール */}
            <div className="hero-veil-layer" />

            {/* 中央詩 */}
            <div className="hero-veil-content">
                <p className="hero-veil-lines">
                    <span className="hero-veil-line hero-veil-line-main">
                        The interface is only a pause in that breath,<br/>
                        a brief shimmer where presence dissolves into trace.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default HeroVeil;
