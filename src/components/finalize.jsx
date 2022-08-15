import "./finalize.css"
import Preview from "./preview"
import skin1 from "./static/image/skin1.svg";
import skin2 from "./static/image/skin2.svg";
import skin3 from "./static/image/skin3.svg";
import skin4 from "./static/image/skin4.svg";
import skin5 from "./static/image/skin5.svg";
import skin6 from "./static/image/skin6.svg";
import skin7 from "./static/image/skin7.svg";
import skin8 from "./static/image/skin8.svg";
import {useDispatch} from "react-redux"
import {setSkinCreator} from "../redux/action"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"


function Finalize(){
    let dispatch = useDispatch()
    const handleSkinSelect = (skinCode)=>{
        console.log(skinCode)
        dispatch(setSkinCreator(skinCode))
    }

    const downloadResume = ()=>{
        // html2canvas(document.body).then(function(canvas) {
        //     document.body.appendChild(canvas);
        // });
        const input = document.getElementById("resumePreview");
        html2canvas(input)
        .then((canvas)=>{
            // to url -> image -> 64 bit ke string
            const imgData = canvas.toDataURL('image/png');
            //dimension -> pdf -> a4
            //p -> portrait
            //unit -> mm
            const pdf = new jsPDF("p","mm","a4");
            //empty page width
            var width = pdf.internal.pageSize.getWidth();
            //empty page height
            var height = pdf.internal.pageSize.getHeight();
            // image -> add -> pdf
            pdf.addImage(imgData,"JPEG",0,0,width,height);
            pdf.save("resume.pdf");
        }).catch((function(error){
            console.log(error);
        }))
    }
    return(
        <div className="finalize">
            <div className="finalize-preview" id = "resumePreview">
                <Preview></Preview>
            </div>

            <div className="download-options">
                <div className="download-btn">
                    <button className="btn" onClick={downloadResume}>Download Resume as PDF</button>
                </div>
                <div className="save-btn">
                    <button className="btn">Save to Database</button>
                </div>
            </div>

            <div className="final-templates">
                <div className="template" >
                    <img src={skin1} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin1")}>USE TEMPLATE</button>
                </div>
                <div className="template">
                    <img src={skin2} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin2")}>USE TEMPLATE</button>

                </div>
                <div className="template">
                    <img src={skin3} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin3")}>USE TEMPLATE</button>
                </div>
                <div className="template">
                    <img src={skin4} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin4")}>USE TEMPLATE</button>
                </div>
                <div className="template">
                    <img src={skin5} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin5")}>USE TEMPLATE</button>
                </div>
                <div className="template">
                    <img src={skin6} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin6")}>USE TEMPLATE</button>
                </div>
                <div className="template">
                    <img src={skin7} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin7")}>USE TEMPLATE</button>
                </div>
                <div className="template">
                    <img src={skin8} alt="" />
                        <button class = "template-btn" onClick={()=>handleSkinSelect("skin8")}>USE TEMPLATE</button>
                </div>
            </div>
        </div>
    )
}

export default Finalize 