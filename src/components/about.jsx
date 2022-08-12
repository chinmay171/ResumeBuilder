import "./about.css";
import about from "./static/image/aboutus.jpg";

let About = () =>{
    return(
        <>
        <div className="about">
            <div className="left-about">
                <p>Do you have any questions?</p>
                <h2>contact@pepcoding.com</h2>
                <p>we are here to answer any questions</p>
            </div>
            <div className="right-about">
                <img src={about} alt=""></img>
            </div>
        </div>
        </>
    )
}

export default About;