import React from 'react';
import Button from './Button';

function Footer(){

    return(
    <div className="footer-container">

        <section className="footer-subscription">
               <p className="footer-subscription-heading">
                   Join the Adventure newsletter to receive our best vacation default
               </p>

             
             <p className="footer-subscription-text">
                  If you wish to unsubscibe, click below
             </p>

             <div className="input areas">
                 <input type="email" name="email" placeholder="Your Email" className="footer-input">

                   <Button buttonStyle='btn-outline'> Subscribe</Button>  
                 </input>
             </div>

        </section>
    </div>
    )

}

export default Footer