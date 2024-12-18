import React from 'react'
import '../styles/initiatives.css';
import Section from './Section';
import Card1 from '../acm-assets-2/main1.png';
import Card2 from '../acm-assets-2/main2.png';
import Card3 from '../acm-assets-2/main3.png';
import Card4 from '../acm-assets-2/main4-2.webp';
import Card5 from '../acm-assets-2/main5.webp';
import Card6 from '../acm-assets-2/main6.png';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Button from './Button';
const Initiatives = () => {
  return (
    <Section>
     {/* <!-- Initiatives Section ( 6  Boxes ) --> */}
          <div class="card-container ">
            <h2 class="h2 section-text text-white">Our Initiatives</h2>
            <div class="card__container">
              {/* <!-- Code for Cause Card --> */}
               <article class="card__article">
                  <div class="card__scale-1"></div>
                  <div class="card__scale-2"></div>
      
                  <div class="card__data">
                    <img class="main1" src={Card1} alt=""/>
                     <h2 class="card__title">Code For Cause</h2>
                     
                     <p class="card__description">
                      Code for Cause unites tech and NGOs to tackle social issues.
                     </p>
   
                     {/* <a href="#" class="card__button">
                        Learn More 
                     </a> */}
                     <Button href="#" white>Learn More</Button>
                  </div>
               </article>

               {/* <!-- Code for Technology Card --> */}
               <article class="card__article card__orange">
                  <div class="card__scale-1"></div>
                  <div class="card__scale-2"></div>
   
                  <div class="card__data">
                    <img class="main2" src={Card2} alt=""/>
                     <h2 class="card__title">Code for Technology</h2>
   
                     <p class="card__description">
                      Code for Technology empowers coding for leading tech giants.
                     </p>
   
                     <Button href="#" white>Learn More</Button>
                  </div>
               </article>

               {/* <!-- Research & Innovation Card --> */}
               <article class="card__article card__green">
                  <div class="card__scale-1"></div>
                  <div class="card__scale-2"></div>
      
                  <div class="card__data">
                    <img class="main3" src={Card3} alt=""/>
                     <h2 class="card__title">Research on Tech </h2>
   
                     <p class="card__description">
                      Fostering research and innovation to drive technological progress.
                     </p>
   
                     <Button href="#" white>Learn More</Button>
                  </div>
               </article>

               {/* <!-- Talk with Techies Card --> */}

               <article class="card__article">
                <div class="card__scale-1"></div>
                <div class="card__scale-2"></div>
 
    
                <div class="card__data">
                  <img class="main4" src={Card4} alt=""/>
                   <h2 class="card__title">Talk with Techies</h2>
                   
                   <p class="card__description">
                    Engaging conversations with tech experts to inspire and inform.
                   </p>
 
                   <Button href="#" white>Learn More</Button>
                </div>
             </article>

             {/* <!-- Career Opportunities Card --> */}
             <article class="card__article card__orange">
              <div class="card__scale-1"></div>
              <div class="card__scale-2"></div>

              <div class="card__data">
                <img class="main5" src={Card5} alt=""/>
                 <h2 class="card__title">Career Pathways</h2>

                 <p class="card__description">
                  Exploring pathways to internships and career opportunities.
                 </p>

                 <Button href="#" white>Learn More</Button>
              </div>
           </article>

           {/* <!-- Healthy Bytes Card --> */}
               <article class="card__article card__green">
                <div class="card__scale-1"></div>
                <div class="card__scale-2"></div>
 
                <div class="card__data">
                  <img class="main6" src={Card6} alt=""/>
                   <h2 class="card__title">Healthy Byte</h2>
  
                   <p class="card__description">
                    Empowering you with essential skills for a healthier tomorrow.
                   </p>
  
                   <Button href="#" white>Learn More</Button>
                </div>
             </article>
            </div>
         </div>
     
    </Section>
  )
}

export default Initiatives