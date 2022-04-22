import React from "react";
const Header=({handleDarkMode})=>{
    return(
        <div className="Toggle">
        <h1>Kia's Notes</h1>
        <button onClick={()=>handleDarkMode((previousDarkMode)=>!previousDarkMode)} 
        className="save">Switch mode</button>
        </div>
    )
}
export default Header;