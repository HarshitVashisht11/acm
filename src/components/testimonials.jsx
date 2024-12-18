import { useState } from "react";
import Section from "./Section";

const Testimonials = () =>{
  const testimonials_data = [
    {
      img: image , 
      content_text:"Demo Text",
      testimonial_name:'Person 1',
      text_block:'Project Manager',
    },
    {
      img: image , 
      content_text:"Demo Text",
      testimonial_name:'Person 1',
      text_block:'Project Manager',
    },
    {
      img: image , 
      content_text:"Demo Text",
      testimonial_name:'Person 1',
      text_block:'Project Manager',
    },
  ]

  const [current , setCurrent] = useState(0);

  return (
    <Section>
      <section className="flex h-[100vh] my-auto ">
      <div>{
        testimonials_data.map((item,index)=> index === current && <div key={index}>
          <div>
            <h2 className="text-purple-400">{item.content_text}</h2>
          </div>
          <div>
            <img src={item.img} alt="" />
          </div>
          <div>
            <h6 className="text-white">{item.testimonial_name}</h6>
            <span className="text-white">{item.text_block}</span>
          </div>
          </div>
        )
        }
      </div>
      </section>
    </Section>
  )
}

