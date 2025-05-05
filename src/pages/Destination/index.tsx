import { useState } from "react";
import Navbar from "../../components/Navbar";
import './Destination.css';
import React from "react";

type Destino = {
  imagem: string;
  title: string;
  texto: string;
  distance: string;
  travel: string;
};

type Destinos = {
  moon: Destino;
  mars: Destino;
  europa: Destino;
  titan: Destino;
};

const Destination: React.FC = () => {
  const [selecionado, setSelecionado] = useState<keyof Destinos>("moon");

  const conteudo: Destinos = {
    moon: {
      imagem: "Moon.png",
      title: "MOON",
      texto:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travel: "3 DAYS",
    },
    mars: {
      imagem: "Mars.png",
      title: "MARS",
      texto:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!.",
      distance: "225 MIL. KM",
      travel: "9 MONTHS",
    },
    europa: {
      imagem: "Europa.png",
      title: "EUROPA",
      texto:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travel: "3 YEARS",
    },
    titan: {
      imagem: "Titan.png",
      title: "TITAN",
      texto:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travel: "7 YEARS",
    },
  };

  return (
    <main className="destination">
      <nav className="navbar">
        <Navbar />
      </nav>
      <div className="destination-container">
        <div className="destination-title">
          <span>01</span>
          <h1>PICK YOUR DESTINATION</h1>
        </div>
        <div className="destination-content">
          <img
            src={`/assets/destination/${conteudo[selecionado].imagem}`}
            alt={selecionado}
            className="destination-image"
          />
          <div className="destination-text">
            <nav className="destination-navbar">
              <ul>
                {(["moon", "mars", "europa", "titan"] as (keyof Destinos)[]).map((dest) => (
                  <li key={dest}>
                    <button
                      className={selecionado === dest ? "selected" : ""}
                      onClick={() => setSelecionado(dest)}
                    >
                      {conteudo[dest].title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <h2>{conteudo[selecionado].title}</h2>
            <p>{conteudo[selecionado].texto}</p>
            <img src="/assets/destination/Line.png" alt="Separator" />
            <div className="destination-statistics">
              <div className="destination-distance">
                <h3>AVG. DISTANCE</h3>
                <span>{conteudo[selecionado].distance}</span>
              </div>
              <div className="destination-travel">
                <h3>EST. TRAVEL TIME</h3>
                <span>{conteudo[selecionado].travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
