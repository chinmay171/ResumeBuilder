import "./header.css";
import { Link } from "react-router-dom";
import logo from "./static/image/logoheader.png";
import { useSelector } from "react-redux"

let Header = () =>{
    let state = useSelector((state)=>state);
    let auth = state.authReducer;
    console.log(auth);
    return(
        <>
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src={logo} alt=""></img></Link>
            </div>
            <div className="header-links">
            {auth.isAuth?<ul>
                    <li><Link to="/template">Resume Templates</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/">Log out</Link></li>
                </ul>:
                <ul>
                    <li><Link to="/template">Resume Template</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/register"><button className="btn">Register</button></Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>}
            </div>
        </div>
        </>
    )
}

export default Header;