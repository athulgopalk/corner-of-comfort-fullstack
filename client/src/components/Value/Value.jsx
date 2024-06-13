import React from 'react'
import { Accordion,AccordionItem,AccordionItemHeading,
         AccordionItemButton ,
         AccordionItemState,
         AccordionItemPanel} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
     <section className='v-wrapper'>

       <div className='paddings innerWidth flexCenter v-container'>
            
{/* leftside */}
        <div className='v-left'>
                     <div className='image-container'>
                          <img src='./value.png' alt=""/>
                     </div>
        </div>

{/* rightside */}

        <div className='flexColStart v-right'>
        
        <span className='orangeText'>Our Value</span>
        <span className='primaryText'>Value We Give to You</span>
        <span className='secondaryText'>Real estate is more than just selling properties; it's about<br/>
         building lasting relationships based on trust and respect</span>

       <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[data[0].id]}>
  {
    data.map((item, i) => {
      return (
        <AccordionItem  className='accordionItem' key={i} uuid={i}>
                <AccordionItemHeading>
                         <AccordionItemButton className=' flexCenter accordionButton'>
                         

                            <div className='flexCenter icon'>{item.icon}</div>
                            <span className='primaryText'>{item.heading} </span>
                            <div className='flexCenter icon'>
                              <MdOutlineArrowDropDown size={20}/>
                            </div>
                         </AccordionItemButton>
                </AccordionItemHeading>    
            <AccordionItemPanel>
              <p className='secondaryText'>{item.detail}</p>
            </AccordionItemPanel>

                

        
        </AccordionItem>
      );
    })
  }
</Accordion>


        </div>     
              


       </div>

   </section>
  )
}

export default Value
