import React from 'react'
import './bar.css'
import NavbarList from './NavBarList'

function Header() {
    return (
        <div className="header">
            <NavbarList/>
            <div className="intro">
                <p>looking for a job !</p>
                <h1> <span>Buy </span>and<span> Sell</span> Properties</h1>
                <p className="details">
                    dfdfsdddddddddd fdsssssssssssss dfssssssssssssssssssssss
                </p>
                <a href="#" className="header-btn">Details</a>
          
            </div>
        </div>
    )
}

export default Header
