import Header from "./Header"
import Home from "./Home"
import Project from "./Project"
import Contact from "./Contact"
import About from "./About"

function GlobalComponent(){

    return(
        <>
            <div className="content-global">
                <Header/>
                <div className="content-body" id="home">
                    <Home/>  
                </div>
                <div className="content-body" id="about" >
                    <About/> 
                </div>
                <div className="content-body" id="project">
                    <Project/> 
                </div>
                <div className="content-body" id="contact">
                    <Contact/> 
                </div>
            </div>
        </>
    )
}

export default GlobalComponent