import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";



export default function Services (){
    return(
        <main className="main">
            <div className="ser-container">
                {/* top div */}
                <div className="top-div-services">
                    <h2 className="title-ser">My Services</h2>
                    <p className="des-ser">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Explicabo optio molestias fuga error cumque cupiditate eaque fugit asperiores.</p>
                </div>
                {/* bottom div */}
                <div className="boxes-con">
                    <div className="box"><FaLaptopCode className="ser-icon"/>
                    <h3>web Development</h3>
                    <span>Blog, E-commerce</span>
                    </div>
                   
                    <div className="box"><FaLaptopCode className="ser-icon"/>
                    <h3>UI/UX Design</h3>
                    <span>Mobile App,Website Design</span>
                    </div>

                    <div className="box"><MdOutlineKeyboardVoice className="ser-icon"/>
                    <h3>Sound Design</h3>
                    <span>Voice Over,Beat Making</span>
                    </div>

                    <div className="box"><FaLaptopCode className="ser-icon"/>
                    <h3>Game Design</h3>
                    <span>Character Design,Props & Objects</span>
                    </div>

                    <div className="box"><FaLaptopCode className="ser-icon"/>
                    <h3>Photography</h3>
                    <span>Portrait,Product Photography</span>
                    </div>

                    <div className="box">
                    <h3>Advertising</h3>
                    <p className="ser-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, impedit.</p>
                    <button>ORDER NOW</button>
                    </div>
                </div>
            </div>
        </main>
    )
}