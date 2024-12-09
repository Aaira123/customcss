import "../style/header.css";
import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            {/* left  */}
            <div><h1 className="logo">SANA.</h1></div>
            {/* right */}
            <div className="header-right-div">
                <ul className="header-links">
                    <li>
                        <Link className="header-nav-links" href={"/"}>Home</Link>
                         </li> 
                    <li>
                        <Link className="header-nav-links" href={"/about"}>About</Link> 
                        </li>
                    <li>
                        <Link className="header-nav-links" href={"/contact"}>Contact</Link> 
                        </li>
                    
                </ul>
            </div>
        </div>
    )
}