import React from 'react'
import chefLogo from '../assets/images/Chef Claude Icon.svg'
export default function Header(){
    return(
        <nav className="navbar">
            <img src={chefLogo} alt="chef-claude-logo" className='chef-claude-logo'/>
            <h1 className='header-title'>Chef Claude</h1>
        </nav>
    )
}