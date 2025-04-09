import React, { useState } from 'react';

const TrafficLight = () => {

    const [selectedLight, setSelectedLight] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const togglePurpleDiv = () => {
        setIsVisible(!isVisible); // Alterna la visibilidad del div morado
    };
    return (
        <div id="root">
            <div id="trafficTop"></div>
            <div id="container">
                <div
                    className={`red ${selectedLight === "red" ? "selected" : ""}`}
                    onClick={() => setSelectedLight("red")}
                ></div>
                <div
                    className={`yellow ${selectedLight === "yellow" ? "selected" : ""}`}
                    onClick={() => setSelectedLight("yellow")}
                ></div>
                <div
                    className={`green ${selectedLight === "green" ? "selected" : ""}`}
                    onClick={() => setSelectedLight("green")}
                ></div>

                {isVisible && <div className="purple"></div>}


            </div>
            <div className="mt-4">
                <button className="btn btn-light" onClick={togglePurpleDiv}>
                    {isVisible ? "Ocultar" : "Mostrar"} Div Morado
                </button>
            </div>
        </div>
    );
};

export default TrafficLight