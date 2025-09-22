import React from 'react'
import { useEffect } from "react"
import TollCard from './TollCard';
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import card5 from '../../assets/card5.png'
import card6 from '../../assets/card6.png'
import AOS from "aos"
import 'aos/dist/aos.css'

const Tolls = () => {

    useEffect(()=> {
         AOS.init({ duration:2000 })
    },[])

  return (
    <section  className='py-[80px] px-2 bg-linear-to-br from-[#8551ff3c] via-[#b19f633d] to-[#E2E2E9]'>
        <div data-aos="fade-left" className='max-w-[1320px] mx-auto'>
            <div  className='flex items-center'>
                <div className='w-[50%]'>
                    <h3 className='text-[56px] font-sans font-bold w-[490px]'>The best solutions in one tool</h3>

                </div>
                <div className='w-[50%]'>
                    <p className='w-[580px] leading-[200%] border-l-5 border-[#FFC556] pl-[20px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                </div>
            </div>
            <div className='pt-[80px]'>
                <div className='grid gap-[30px] md:grid-cols-2  lg:grid-cols-3'>
                    <TollCard src={card1} btntext="Read More" cardpera="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." cardheading="Set Daily Alarms"/>
                    <TollCard src={card2} btntext="Read More" cardpera="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." cardheading="Advanced Search"/>
                    <TollCard src={card3} btntext="Read More" cardpera="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." cardheading="Share Blog Posts"/>
                    <TollCard src={card4} btntext="Read More" cardpera="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." cardheading="Archive Content"/>
                    <TollCard src={card5} btntext="Read More" cardpera="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." cardheading="Secure Checkout"/>
                    <TollCard src={card6} btntext="Read More" cardpera="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere." cardheading="Faster Response Time"/>
                   
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Tolls