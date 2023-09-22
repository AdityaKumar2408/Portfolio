import React, {useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import '../style/NavBar.css'
import ReorderIcon from "@material-ui/icons/Reorder";
const NavBar=()=>{
    const [expandNavBar, updatedExpandNavBar] = useState(false)

    const location = useLocation();

    useEffect(()=>{
        updatedExpandNavBar(false);

    }, [location])
    return(<>
        <div className='navbar' id={expandNavBar?"open":"close"}>
            <div className='toggleButton'>
                <button onClick={()=>{
                    updatedExpandNavBar((prev)=>!prev);
                }}><ReorderIcon/></button>
            </div>
            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
            </div>
        </div>
    </>)

}
export default NavBar