import changeMode from '../store/action/changeMode'
import { useState } from "react"
import {useDispatch} from 'react-redux'

function Header(){

    const [currentMode,setCurrentMode]=useState(true)

    const [hiddenHome,setHiddenHome] = useState(false)
    const [hiddenAbout,setHiddenAbout] = useState(false)
    const [hiddenProject,setHiddenProject] = useState(false)
    const [hiddenContact,setHiddenContact] = useState(false)


    const dispatch = useDispatch()

    function changeBackground(mode){
        if(mode){
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
        else{
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        }
        
    }
    function change(){
        const mode =  !currentMode
        dispatch(changeMode(mode))
        changeBackground(mode)  
        setCurrentMode(!currentMode)
        
    }

    return(
        <>
            <div className="header-content" style={currentMode?{backgroundColor:'rgba(255, 255, 255, 0.5)'}:{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                <div className="menu">
                    <a 
                        href="#home" 
                        style={currentMode?(hiddenHome?{color:'black',borderBottom: '3px solid black'}:{color:'#e11d48'} ):(hiddenHome?{color:'white',borderBottom: '3px solid white'}:{color:'rgb(150, 65, 255)'})}
                        onMouseEnter={() => setHiddenHome(true)}
                        onMouseLeave={() => setHiddenHome(false)}>
                            Home
                    </a>
                    <a 
                        href="#about" 
                        style={currentMode?(hiddenAbout?{color:'black',borderBottom: '3px solid black'}:{color:'#e11d48'} ):(hiddenAbout?{color:'white',borderBottom: '3px solid white'}:{color:'rgb(150, 65, 255)'})}
                        onMouseEnter={() => setHiddenAbout(true)}
                        onMouseLeave={() => setHiddenAbout(false)}>
                            About
                    </a>
                    <a 
                        href="#project" 
                        style={currentMode?(hiddenProject?{color:'black',borderBottom: '3px solid black'}:{color:'#e11d48'} ):(hiddenProject?{color:'white',borderBottom: '3px solid white'}:{color:'rgb(150, 65, 255)'})}
                        onMouseEnter={() => setHiddenProject(true)}
                        onMouseLeave={() => setHiddenProject(false)}>
                            Project
                    </a>
                    <a 
                        href="#contact" 
                        style={currentMode?(hiddenContact?{color:'black',borderBottom: '3px solid black'}:{color:'#e11d48'} ):(hiddenContact?{color:'white',borderBottom: '3px solid white'}:{color:'rgb(150, 65, 255)'})}
                        onMouseEnter={() => setHiddenContact(true)}
                        onMouseLeave={() => setHiddenContact(false)}>
                            Contact
                    </a>
                </div>
                <div className="header-right">
                    <span>{currentMode ? 'Light Mode':'Dark Mode'}</span>
                    <i className={!currentMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
                    <label className="toggle">
                        <input 
                            className="toggle-checkbox" 
                            type="checkbox" 
                            onChange={()=>{
                                change()
                            }}/>
                        <div className="toggle-switch"></div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Header