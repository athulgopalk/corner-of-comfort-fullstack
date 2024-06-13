import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
   <section className='c-wrapper'>


<div className='paddings innerWidth flexCenter c-container'>
{/* leftside */}
    <div className='flexColStart c-left'>
      <span className='orangeText'>Connect with Us</span>
      <span className='primaryText'>Easy to Contact us</span>
      <span className='secondaryText'>
        Our expert team is ready to guide you through your real estate journey. <br />
        Whether buying or selling, we're here to help. Contact us for personalized assistance and start your journey today.
      </span>
  
 {/* contact 4 section */}
   {/* section1 */}

      <div className='flexStart contactModes row'>
        {/* firstrow */}
        <div className='flexStart row'>
          <div className='flexColCenter mode'>
            <div className='flexStart'>
              <div className='flexCenter icon'>
                <MdCall size={25} />
              </div>
              <div className='flexColStart detail'>
                <span className='primaryText'>Call</span>
                <span className='secondaryText'>8225 2255 2225</span>
              </div>
            </div>
               <div className='flexCenter button'> Call Now</div>
          </div>
        </div>
      
      
    {/* section2 */}   
       
     
        {/* firstrow */}
        <div className='flexColStart row'>
          <div className='flexColCenter mode'>
            <div className='flexStart'>
              <div className='flexCenter icon'>
                <BsFillChatDotsFill size={25} />
              </div>
              <div className='flexColStart detail'>
                <span className='primaryText'>Chat</span>
                <span className='secondaryText'>8225 2255 2225</span>
              </div>
            </div>
               <div className='flexCenter button'> Chat  Now</div>
          </div>
        </div>
      </div>

       {/* section3 */}

      <div className='flexStart contactModes row'>
        {/* firstrow */}
        <div className='flexColStart row'>
          <div className='flexColCenter mode'>
            <div className='flexStart'>
              <div className='flexCenter icon'>
                <BsFillChatDotsFill size={25} />
              </div>
              <div className='flexColStart detail'>
                <span className='primaryText'>Video Call</span>
                <span className='secondaryText'>8225 2255 2225</span>
              </div>
            </div>
               <div className='flexCenter button'>Video Call Now</div>
          </div>
        </div>
      
      
    {/* section4 */}   
       
      
        {/* firstrow */}
        <div className='flexColStart row'>
          <div className='flexColCenter mode'>
            <div className='flexStart'>
              <div className='flexCenter icon'>
                <HiChatBubbleBottomCenter size={25} />
              </div>
              <div className='flexColStart detail'>
                <span className='primaryText'>Message</span>
                <span className='secondaryText'>8225 2255 2225</span>
              </div>
            </div>
               <div className='flexCenter button'> Chat  Now</div>
          </div>
        </div>
      </div>  

    </div>



{/* rightside */}

        <div className='c-right'>

               <div className='image-container'>
                <img src='./contact.jpg' alt=""/>
               </div>

        </div>


</div>


   </section>
  )
}

export default Contact
