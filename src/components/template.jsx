import "./template.css"
import skin2 from "./static/image/skin2.svg";
import skin3 from "./static/image/skin3.svg";

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
                    <img src={skin2}></img>
                    <button className="template-btn">Use Template</button>
                </div>
                <div className="template">
                    <img src={skin3}></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Template;