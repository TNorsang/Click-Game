import React from "react"

function Navbar() {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo main-logo">Clicky Game</a>
                <a href="/" className="brand-logo">Example</a>
                <a href="/" className="brand-logo">Score: | Top Score: </a>
            </div>
        </nav>
    ); 
};

export default Navbar;