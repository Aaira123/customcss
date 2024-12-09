
import "../style/contact.css"
export default function Contact(){
    return(
        <main className="Contact-main">
            <div className="contact-div">
                <h1 className="contact-title">Contact us</h1>
            <form action="" className="form">
                <input type="text" placeholder="Enter your Name" className="input"/>
                <input type="email" placeholder="abc@gmail.com"  className="input"/>
                <input type="tel" placeholder="Enter your Phone Number"  className="input"/>
                <input type="text" placeholder=" yourMessage"  className="msg"/>
               <div className="button"><button className="submit">Submit</button></div>
            </form>
            </div>
        </main>
    )
}