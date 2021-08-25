import React, { useEffect, useState } from 'react'
import './Nav.css';
import {Search} from '@material-ui/icons'

function Nav() {

    const [show,handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100 ){
            handleShow(true)
        }
        else{
            handleShow(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar);
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <p style={{color:"white",fontFamily:"fantasy"}}>WOOKIE Movies</p>
            <Search style={{float:"right",color:"white",marginLeft:"1030px"}}/>
            <input type="search" style={{display:"flex",float:"left",background:"white",border:"none",marginRight:"180px"}} placeholder="Search movies..." />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="gone" className="nav__avatar"/>
            </div>
        </div>
    )
}

export default Nav;
