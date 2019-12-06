import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import './style/Home.css'

function Home() {
    return(
        <div className='Home'>
        <Navbar />
            <div className='Text' > 
                i'm alec munguia
                    <div className='Subtext'>
                        a web developer
                    </div>
                </div>
            </div>
    )
}

export default Home