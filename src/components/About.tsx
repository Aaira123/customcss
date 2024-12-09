
import Link from "next/link";
import "../style/about.css";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 

export default function About (){
    return(
        <div className="header-container">
            <div className="boxes">
                {/* left */}
                <div>
                 <Image src={"/images/photo2.jpg"} alt="Profile" width={150} height={150} className="hero-image"/>
                
                 <div className="social-icon">
                 <Link href={""}><FaYoutube className="a-icon1"/></Link>
                 <Link href={""}> <FaFacebook className="a-icon2"/></Link>
                 <Link href={""}><FaInstagram className="a-icon3"/></Link>
                 </div>
                
                </div>
                <div className="hero-right-div">
                    <h1 className="title-hero">About Me</h1>
                     <p className="hero-des"> I am a student at GIAIC, pursuing a course in Artificial Intelligence,
                         Web 3.0 & Metaverse.Passionate
                         about technology and constantly learing new skills to stay up-to-date
                          with the latest innovations.
                        </p>
                       
                </div>
                {/* right */}
            </div>
            </div>
            
    )
}