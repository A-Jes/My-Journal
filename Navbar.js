import React from "react"
 function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
          ...prevMeme,
            [name]: value,
        }));
    }
export default function Navbar (){
    https://github.com/A-Jes/My-Journal.git
    return(
        <nav className="navbar" >
            <img src="../images/logo.png" alt="" className="navbar-img" />
            <span><h4 className="Navbar-h4">My Travel Journal.</h4></span>
        </nav>
    )
}
