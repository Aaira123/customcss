import "../style/hero.css";
import Image from "next/image";

export default function Hero(){
    return(
        <div className="header-container">
            <div className="boxes">
                {/* left */}
                <div>
                 <Image src={"/images/photo2.jpg"} alt="Profile" width={150} height={150} className="hero-image"/>
                </div>
                <div className="hero-right-div">
                    <h1 className="title-hero">Im Sana Arif
                     Front-end Developer</h1>
                     <p className="hero-des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laborum aspernatur quam impedit, 
                        accusantium placeat consequatur nobis corporis perferendis cumque!
                        </p>
                        <button className="hero-button">HIRE ME</button>
                </div>
                {/* right */}
            </div>
            </div>
    )
}