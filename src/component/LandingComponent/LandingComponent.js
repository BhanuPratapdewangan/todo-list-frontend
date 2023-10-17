
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LandingComponent/LandingComponent.css"

const LandingComponent = () => {
    let auth = localStorage.getItem('user')
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }
    return(
        <div>
            <img alt = "logo" className="logo" src="https://png.pngtree.com/png-vector/20210908/ourmid/pngtree-your-logo-poster-png-image_3911209.jpg" />
            { auth ? 
            
            <ul className="nav-bar">
                {/* <li><Link to='/update-product'>Update Product</Link></li> */}
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/signup' onClick={logout}>Logout ({auth.name})</Link></li>
                <li>Welcome {auth.name}  </li>
            </ul>

            :

            <ul className="nav-bar nav-left">
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/signin'>SignIn</Link></li>
            </ul>
        }
        </div>
    )
}

export default LandingComponent;