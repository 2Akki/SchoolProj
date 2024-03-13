import React from 'react'
import "../styles/about.css"
export default function About() {
  return (
    <>
        <h1 className='title'>About us</h1>
          <div className='box'>
          
          <p className='maintext'>Denne hjemmeside er blevet lavet som et skole project</p>
           
            <div className='images'>      
                 <div> 
                    <img className='image' src='https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'></img>
                    <h3 className='animate-charcter'> Akki</h3>
                    <p className='desc'>Backend, main programer, styler</p>
                  </div>
                
                  <div> 
                    <img className='image' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F0gtXmQLOGWM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=08a56b809a1eb5c9553925465faa626b992c81b60278f0967cd1b4d43f25e879&ipo=images'></img>
                    <h3 className='animate-charcter'> Hookey</h3>
                    <p className='desc'>Main styler/designer, gay</p>
            </div>
                  
            <p className='sectext'>  Vi lavede hjemmesiden som et consept for en web app hvor man kan købe både prudukter og servicer</p>
            
            
            
          </div>
         </div>
    </>
  )
}
