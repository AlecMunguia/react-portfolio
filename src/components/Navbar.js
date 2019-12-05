import React from 'react'
import './style/Navbar.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Navbar() {
    return(
        <Router>
            <div className='Navbar'>
                <nav className='Table'>
                    <ul className='Links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='skills'>Skills</Link>
                        </li>
                        <li>
                            <Link to='/work'>Work</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </Router>
    )
}

export default Navbar