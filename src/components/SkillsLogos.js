import React from 'react';
import './style/Skills.css';
import Javascript from '../assets/logos/javascript.svg';


function SkillsLogos() {
    return (
        <div className='Slideshow-Container'>
            <div className='Slides'>
                <img src={Javascript} />
            </div>
        </div>
    )
}

export default SkillsLogos