import { useState } from "react";
import Navbar from '../../components/Navbar';
import './Tech.css'

const Tech = () => {
    const [selecionado, setSelecionado] = useState("first");
        
        const conteudo = {
            first: {
                title: "LAUNCH VEHICLE",
                text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                img: "first.jpg",
            },
            second: {
                title: "SPACEPORT",
                text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                img: "second.jpg",    
            },
            third: {
                title: "SPACE CAPSULE",
                text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                img: "third.jpg",
            },
            
            };

    return (
        <main className="tech">
            <nav className='navbar'>
            <Navbar />
            </nav>
            <div className='tech-container'>
                <div className="crew-title">
                    <span>03</span>
                    <h1>SPACE LAUNCH 101</h1>
                </div>
                <div className='tech-content'>
                    <nav className='tech-navbar'>
                    <ul>
                        <li>
                            <button
                                className={selecionado === "first" ? "selected" : ""}
                                onClick={() => setSelecionado("first")}
                            >
                            1
                            </button>
                        </li>
                        <li>
                            <button
                                className={selecionado === "second" ? "selected" : ""}
                                onClick={() => setSelecionado("second")}
                            >
                            2    
                            </button>
                        </li>
                        <li>
                            <button
                                className={selecionado === "third" ? "selected" : ""}
                                onClick={() => setSelecionado("third")}
                            >
                            3
                            </button>
                        </li>
                        </ul>
                    </nav>
                    <div className="tech-text">
                        <div>
                            <h2>THE TERMINOLOGY…</h2>
                            <h3>{conteudo[selecionado].title}</h3>
                        </div>
                        <p>{conteudo[selecionado].text}</p>
                    </div>
                    <img
                        src={`/assets/tech/${conteudo[selecionado].img}`}
                        alt={selecionado}
                        className="tech-image"
                    />
                </div>
            </div>
        </main>
    )
}

export default Tech;