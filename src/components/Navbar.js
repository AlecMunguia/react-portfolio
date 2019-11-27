import React from 'react'
import '../App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Navbar() {
    return(
        <Router ClassName="Navbar">
            <div>
                <nav>
                    <ul>
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