import React from 'react'
import myphoto from '../assets/myphoto.png'

export default function MainMenu (props){
    return (<div>
        <h3>About Me</h3>
        <div className="parent fullwidth center"> 
        <div className="iconwing">
            <p>REACT</p>
            <p>MONGO</p>
            <p>HTML</p>
            <p>CSS</p>
        </div>

        <img src={myphoto} className="my-photo" alt="Me" />

        <div className="iconwing">
            <p>NODE</p>
            <p>MYSQL</p>
            <p>JS</p>
            <p>REST</p>

        </div>
        </div>
        <div className="bottombar">
            <div><p className="bold">U of T</p>
                  <p>Web Dev</p>

            </div>
            <div>
                <p className="bold">OCAD</p>
                <p>BFA Fine Arts</p>
                
            </div>
            <div>
                <p className="bold">Shaw Academy</p>
                <p>Graphic Design</p>

            </div>
        
        </div> 
        {/* <button className= "more" onClick={() => props.setCurrentPage("MoreInfo")}>More</button> */}
    </div>) 
      
    
};