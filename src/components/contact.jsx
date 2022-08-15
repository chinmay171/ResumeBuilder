import Preview from "./preview";
import "./contact.css";
// import { useSelector } from "react-redux";
import {useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { addContactCreator } from "../redux/action"

function Contact(){
    // const [contact,setContact] = useState({})

    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    // console.log(state);
    // let [contact,setContact] = useState({})
    let contact = state.contactReducer;
    console.log(contact);

    const onChange = (event)=>{
        let key = event.target.id;
        let value = event.target.value;
        // setContact({...contact,[key]:value})

        let newContact = {...contact,[key]:value};
        dispatch(addContactCreator(newContact))
    }

    const getFieldData = (key)=>{
        if(contact[key]){
            return contact[key];
        }
        return "";
    }

    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>
                        Personal Details
                    </h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" id="fname" value={getFieldData("fname")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" id="lname" value={getFieldData("lname")} onChange={onChange}></input>
                    </div>
                    <div className="input-group full">
                        <label htmlFor="">Summary</label>
                        <input type="text" id="summary" value={getFieldData("summary")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">E-main</label>
                        <input type="text" id="email" value={getFieldData("email")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Phone</label>
                        <input type="text" id="phone" value={getFieldData("phone")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Professional</label>
                        <input type="text" id="profession" value={getFieldData("profession")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Street</label>
                        <input type="text" id="street" value={getFieldData("street")} onChange={onChange}></input>
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
                        <label htmlFor="">Country</label>
                        <input type="text" id="country" value={getFieldData("country")} onChange={onChange}></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Pin Code</label>
                        <input type="text" id="pincode" value={getFieldData("pincode")} onChange={onChange}></input>
                    </div>

                    {/* <div className="next btn full">
                        <Link to="/template">Back</Link> */}
                        <div className="btn full btn-full">
                        <Link to="/education" className="back">Next</Link>
                   </div>
                        <div className="back-next btn-full
                    btn full">
                        <Link to="/template" className="back">Back</Link>
                   </div>
                   {/* <div className="back btn full">
                        <Link to="/education">Next</Link> */}
                        
                </div>
            </div>
            <div className="preview-form">
                <Preview></Preview>
            </div>
        </div>
    )
}

export default Contact;