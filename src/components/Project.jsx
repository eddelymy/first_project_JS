import {useSelector } from "react-redux"
import { useState} from 'react'

function Project(){

    let currentMode = useSelector(state => state.mode)

    const [btn1,setHiddenBtn1] = useState(false)
    const [btn2,setHiddenBtn2] = useState(false)
    const [btn3,setHiddenBtn3] = useState(false)
    const [btn4,setHiddenBtn4] = useState(false)
    const [btn5,setHiddenBtn5] = useState(false)
    const [btn6,setHiddenBtn6] = useState(false)

    return(
        <div className='component'>
        <div className="title">Buttons</div>
        <div className="content-project">
            <button 
                style={currentMode.mode?(btn1?{backgroundColor:'white', borderColor: '#e11d48',color:'black'}:{backgroundColor:'#e11d48',borderColor: '#e11d48',color:'white'} ):(btn1?{backgroundColor:'black',borderColor: 'solid 2px rgb(150, 65, 255)',color:'white'}:{backgroundColor:'rgb(150, 65, 255)',borderColor: 'rgb(150, 65, 255)',color:'white'})}
                onMouseEnter={() => setHiddenBtn1(true)}
                onMouseLeave={() => setHiddenBtn1(false)}
                >
                    Primary
            </button>
            <button 
                style={currentMode.mode?(btn2?{backgroundColor:'white', borderColor: '#10b981',color:'black'}:{backgroundColor:'#10b981',borderColor: '#10b981',color:'white'} ):(btn2?{backgroundColor:'black',border: 'solid 2px #03dac5',color:'white'}:{backgroundColor:'#03dac5',borderColor: '#03dac5',color:'white'})}
                onMouseEnter={() => setHiddenBtn2(true)}
                onMouseLeave={() => setHiddenBtn2(false)}>
                    Secondary
            </button>
            <button 
                style={currentMode.mode?(btn3?{backgroundColor:'white', borderColor: '#fca5a5',color:'black'}:{backgroundColor:'#fca5a5',borderColor: '#fca5a5',color:'white'} ):(btn3?{backgroundColor:'black',border: 'solid 2px #6b21a8',color:'white'}:{backgroundColor:'#6b21a8',borderColor: '#6b21a8',color:'white'})}
                onMouseEnter={() => setHiddenBtn3(true)}
                onMouseLeave={() => setHiddenBtn3(false)}>
                    Disabled
            </button>
            <button 
                style={currentMode.mode?(!btn4?{backgroundColor:'white', borderColor: '#e11d48',color:'black'}:{backgroundColor:'#e11d48',borderColor: '#e11d48',color:'white'} ):(!btn4?{backgroundColor:'black',border: 'solid 2px rgb(150, 65, 255)',color:'white'}:{backgroundColor:'rgb(150, 65, 255)',borderColor: 'rgb(150, 65, 255)',color:'white'})}                onMouseEnter={() => setHiddenBtn4(true)}
                onMouseLeave={() => setHiddenBtn4(false)}>
                    Outline
            </button>
            <button 
                style={currentMode.mode?(!btn5?{backgroundColor:'white', borderColor: '#10b981',color:'black'}:{backgroundColor:'#10b981',borderColor: '#10b981',color:'white'} ):(!btn5?{backgroundColor:'black',border: 'solid 2px #03dac5',color:'white'}:{backgroundColor:'#03dac5',borderColor: '#03dac5',color:'white'})}
                onMouseEnter={() => setHiddenBtn5(true)}
                onMouseLeave={() => setHiddenBtn5(false)}>
                    Alt Outline
            </button>
            <button 
                style={currentMode.mode?(!btn6?{backgroundColor:'white', borderColor: '#fca5a5',color:'black'}:{backgroundColor:'#fca5a5',borderColor: '#fca5a5',color:'white'} ):(!btn6?{backgroundColor:'black',border: 'solid 2px #6b21a8',color:'white'}:{backgroundColor:'#6b21a8',borderColor: '#6b21a8',color:'white'})}
                onMouseEnter={() => setHiddenBtn6(true)}
                onMouseLeave={() => setHiddenBtn6(false)}>
                    Disabled
            </button>
        </div>
        <div 
            className="text-project"
            style={currentMode.mode?{backgroundColor: 'rgb(0 0 0 / 50%)',color:'white'}:{backgroundColor: 'rgba(255, 255, 255, 0.5)',color:'black'}}>
            <p>Lorem ipsum dolor amet consectetur adipisicing elit.
            Voluptatibus magnam sit alias eos ducimus expedita quam, 
            corporis, blanditiis vel facilis, animi adipisci? Nemo enim quisquam
            maiores minima, qui omnis. Accusamus! Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Dolorem magnam accusamus qui, ab voluptates 
            reprehenderit rerum quo mollitia libero asperiores doloremque 
            dolores, nihil repellat doloribus perspiciatis magni dolore dolorum 
            ipsam!</p>
        </div>
        </div>
    )
}

export default Project