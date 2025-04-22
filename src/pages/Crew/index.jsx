import { useState } from "react";
import Navbar from '../../components/Navbar';
import './Crew.css'

const Crew = () => {
    const [selecionado, setSelecionado] = useState("hurley");
    
        const conteudo = {
            hurley: {
                rank: "COMMANDER",
                name: "DOUGLAS HURLEY",
                text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
                img: "hurley.svg",
            },
            mark: {
                rank: "MISSION SPECIALIST",
                name: "MARK SHUTTLEWORTH",
                text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
                img: "mark.png",    
            },
            glover: {
                rank: "PILOT",
                name: "VICTOR GLOVER",
                text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
                img: "glover.png",
            },
            ansari: {
                rank: "FLIGHT ENGINEER",
                name: "ANOUSHEH ANSARI",
                text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
                img: "ansari.png",
              }
          };

    return (
        <main className="crew">
            <nav className='navbar'>
            <Navbar />
            </nav>
            <div className='crew-container'>
                <div className="crew-title">
                    <span>02</span>
                    <h1>MEET YOUR CREW</h1>
                </div>
                <div className="crew-content">
                <div className='crew-text'>
                    <div className="crew-ran">
                        <h2>{conteudo[selecionado].rank}</h2>
                        <h3>{conteudo[selecionado].name}</h3>
                    </div>
                    <p>{conteudo[selecionado].text}</p>
                    <nav className='crew-navbar'>
                    <ul>
                        <li>
                            <button
                                className={selecionado === "hurley" ? "selected" : ""}
                                onClick={() => setSelecionado("hurley")}
                            >

                            </button>
                    </li>
                    <li>
                        <button
                            className={selecionado === "mark" ? "selected" : ""}
                            onClick={() => setSelecionado("mark")}
                        >
                            
                        </button>
                    </li>
                    <li>
                        <button
                            className={selecionado === "glover" ? "selected" : ""}
                            onClick={() => setSelecionado("glover")}
                        >

                        </button>
                    </li>
                    <li>
                        <button
                            className={selecionado === "ansari" ? "selected" : ""}
                            onClick={() => setSelecionado("ansari")}
                        >

                        </button>
                    </li>
                </ul>
                
                    </nav>
                </div>
                <img
                    src={`/assets/crew/${conteudo[selecionado].img}`}
                    alt={selecionado}
                    className="crew-image"
                    />
                </div>
            </div>
        </main>
    )
}

export default Crew;