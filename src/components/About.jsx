import Img1 from '../assets/img1.svg'
import Img2 from '../assets/img2.svg'
import Img3 from '../assets/img3.svg'
import Img1Black from '../assets/img1-black.svg'
import Img2Black from '../assets/img2-black.svg'
import Img3Black from '../assets/img3-black.svg'
import {useSelector } from "react-redux"
import { useState} from 'react'

function About(){

    let currentMode = useSelector(state => state.mode)

    return(
        <div className='component'>
            <div className="title">
                Undraw Illustrations
            </div>
            <div className="content-about">
                <div 
                    className="card"
                    style={currentMode.mode?{backgroundColor:'white'}:{backgroundColor:'#121212'}}>
                    <span className="card-title">Web Innovation</span>
                    <img className='image' src={!currentMode.mode?Img3:Img3Black}/>
                </div>
                <div 
                    className="card"
                    style={currentMode.mode?{backgroundColor:'white'}:{backgroundColor:'#121212'}}>
                    <span className="card-title">Problem Solving</span>
                    <img className='image' src={!currentMode.mode?Img2:Img2Black}/>
                </div>
                <div 
                    className="card"
                    style={currentMode.mode?{backgroundColor:'white'}:{backgroundColor:'#121212'}}>
                    <span className="card-title">High Concept</span>
                    <img className='image' src={!currentMode.mode?Img1:Img1Black}/>
                </div>
            </div>
        </div>
    )
}

export default About