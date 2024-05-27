import {useSelector } from "react-redux"
import { useState} from 'react'

function Contact(){

    let currentMode = useSelector(state => state.mode)
    const [github,setHiddenGithub] = useState(false)
    const [youtube,setHiddenYoutube] = useState(false)
    const [medium,setHiddenMedium] = useState(false)
    const [codepen,setHiddenCodepen] = useState(false)
    const [instagram,setHiddenInstagram] = useState(false)
    const [linkedin,setHiddenLinkedin] = useState(false)

    return(
        <div className='component'>
        <div className="content-contact">
            <i className="fa-brands fa-github"
                style={currentMode.mode?(github?{color:'black'}:{color:'#e11d48'} ):(github?{color:'white'}:{color:'rgb(150, 65, 255)'})}
                onMouseEnter={() => setHiddenGithub(true)}
                onMouseLeave={() => setHiddenGithub(false)} ></i>
            <i className="fa-brands fa-codepen"
                style={currentMode.mode?(codepen?{color:'black'}:{color:'#e11d48'} ):(codepen?{color:'white'}:{color:'rgb(150, 65, 255)'})}
                onMouseEnter={() => setHiddenCodepen(true)}
                onMouseLeave={() => setHiddenCodepen(false)}></i>
            <i className="fa-brands fa-linkedin"
                style={currentMode.mode?(linkedin?{color:'black'}:{color:'#e11d48'} ):(linkedin?{color:'white'}:{color:'rgb(150, 65, 255)'})}
                onMouseEnter={() => setHiddenLinkedin(true)}
                onMouseLeave={() => setHiddenLinkedin(false)}></i>
            <i className="fa-brands fa-medium"
                style={currentMode.mode?(medium?{color:'black'}:{color:'#e11d48'} ):(medium?{color:'white'}:{color:'rgb(150, 65, 255)'})}
                onMouseEnter={() => setHiddenMedium(true)}
                onMouseLeave={() => setHiddenMedium(false)}></i>
            <i className="fa-brands fa-instagram"
                style={currentMode.mode?(instagram?{color:'black'}:{color:'#e11d48'} ):(instagram?{color:'white'}:{color:'rgb(150, 65, 255)'})}
                onMouseEnter={() => setHiddenInstagram(true)}
                onMouseLeave={() => setHiddenInstagram(false)}></i> 
            <i className="fa-brands fa-youtube"
                style={currentMode.mode?(youtube?{color:'black'}:{color:'#e11d48'} ):(youtube?{color:'white'}:{color:'rgb(150, 65, 255)'})}
                onMouseEnter={() => setHiddenYoutube(true)}
                onMouseLeave={() => setHiddenYoutube(false)}></i>       
        </div>
        </div>
    )
}

export default Contact