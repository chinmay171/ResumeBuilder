import Preview from "./preview";
import "./education.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import {addEducationCreator} from "../redux/action"


function Education(){

    // const [education,setEducation] = useState({})
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    let education = state.educationReducer;

    const onChange = (event)=>{
        let key = event.target.id;
        let value = event.target.value;
        // setEducation({...education,[key]:value})
        let newEducation = {...education,[key]:value}
        dispatch(addEducationCreator(newEducation))
    }

    const getFieldData = (key)=>{
        if(education[key]){
            return education[key];
        }
        return "";
    }


    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>
                        Education Details
                    </h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">College Name</label>
                        <input type="text" id="cname" value={getFieldData("cname")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Degree</label>
                        <input type="text" id="degree" value={getFieldData("degree")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">CGPA</label>
                        <input type="text" id="cgpa" value={getFieldData("cgpa")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">City</label>
                        <input type="text" id="city" value={getFieldData("city")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" id="state" value={getFieldData("state")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Graduation Month</label>
                        <input type="text" id="graduationMonth" value={getFieldData("graduationMonth")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Graduation Year</label>
                        <input type="text" id="graduationYear" value={getFieldData("graduationYear")} onChange={onChange}></input>
                    </div>

                    {/* <div className="back full">
                    <Link to="/contact">Back</Link> */}
                    <div className="btn full btn-full">
                        <Link to="/finalize" className="back">Next</Link>
                   </div>
                    {/* <div className="next btn full">
                        <Link to="/finalize">Next</Link> */}
                        <div className="back-next btn full btn-full">
                        <Link to="/contact" className="back">Back</Link>
                   </div>
                   

                </div>
            </div>
            <div className="preview-form">
                <Preview></Preview>
            </div>
        </div>
    )
}

export default Education;