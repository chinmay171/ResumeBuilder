import "./template.css"
import skin1 from "./static/image/skin1.svg";
import skin2 from "./static/image/skin2.svg";
import skin3 from "./static/image/skin3.svg";
import skin4 from "./static/image/skin4.svg";
import skin5 from "./static/image/skin5.svg";
import skin6 from "./static/image/skin6.svg";
import skin7 from "./static/image/skin7.svg";
import skin8 from "./static/image/skin8.svg";

let Template = () =>{
    return(
        <>
        <div className="templates">
            <div className="templates-intro">
                <h1>Select a Resume Template</h1>
                <p1>You can edit and change it later</p1>
            </div>

            <div className="template-styles">
                <div className="template">
                    <img src={skin1}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin2}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin3}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin4}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin5}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin6}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin7}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin8}></img>
                    <button className="template-btn">Use Template</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default Template;