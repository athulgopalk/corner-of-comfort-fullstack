import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container'>

{/* leftside */}

    <div className='flexColstart f-left'>
       <img src='./logo.png' alt="" width={120}></img><br/>
       <span className='secondaryText'>Building Trust, Creating Comfort, Finding Home</span>

     </div>

    <div className='flexColstart f-right'>
     <span className='primaryText'>Information</span> <br/>
     <span className='secondaryText'>1234 Elm Street, Anytown, USA</span>

     <div className='flexCenter f-menu'>
             <span>Property</span>  
             <span>Services</span> 
             <span>Product</span>
              <span>About Us</span> 
     
        
     </div>
 
    </div>


      </div>

    </section>
  )
}

export default Footer
