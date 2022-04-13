import React from 'react'
import portphoto1 from '../assets/spacedout.png'
import portphoto2 from '../assets/imagesmash.png'
import portphoto3 from '../assets/portfolio-old.png'
import portphoto4 from '../assets/code-quiz-screenshot.png'

export default function PortfolioPage (){
    return (<div>
        <h3>Portfolio</h3>
        <div className="row-gapper">
        <div className="portfolio-parent">
        <div className="caption">
                    <p>Spaced Out</p>
                    <p>Fullstack Journal</p>
                </div>

            <div className="portfolio-child port1">
           <a href="https://spaced-problems.herokuapp.com/" target="_blank">

            <img src={portphoto1} className="portphoto" alt="Spaced Out" />
            </a>

            </div>
            <div className="portfolio-child port2">
            <a href="https://tinastouch.github.io/Group-Project/" target="_blank">
            <img src={portphoto2} className="portphoto" alt="ImageSmash" />
            </a>
                
            </div>
            <div className="caption">
                    <p>ImageSmash</p>
                    <p>Meme Generator</p>
                </div>
            </div>
            <div className="portfolio-parent">
            <div className="caption">
                    <p>Previous</p>
                    <p>Portfolio</p>
                </div>
            <div className="portfolio-child port3">
            <a href=" https://tinastouch.github.io/Tina-s-professional-Portfolio/" target="_blank">
            <img src={portphoto3} className="portphoto" alt="Old Portfolio" />
            </a>
                
            </div>
            <div className="portfolio-child port4">
            <a href="https://tinastouch.github.io/Code-quiz-new/" target="_blank">
            <img src={portphoto4} className="portphoto" alt="Codequiz" />
            </a>
          
                
            </div>  <div className="caption">
                    <p>Javascript</p>
                    <p>Code Quiz</p>
                </div>
        </div></div>
    </div>)
      
    
};