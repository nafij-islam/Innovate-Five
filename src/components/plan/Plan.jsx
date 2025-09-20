import React from 'react'
import PlanCard from './PlanCard';

const Plan = () => {
  return (
   <section className='py-[80px]'>
       <div className='max-w-[1320px] mx-auto'>
              <div className='pb-[120px]'>
                <h2 className='text-center mx-auto pb-[30px] w-[650px] text-[56px] font-bold'>Build the right plan for your team.</h2>
                  <div className='flex items-center  justify-center  '>
                    <span className='pr-2 text-[28px]'>Monthly</span>
                    <div className='w-[60px] group pl-1 py-1 rounded-[10px] block bg-[#8454F5]'>
                          <div className='w-5 h-5 group-hover:translate-x-7 rounded-full bg-white'></div>
                    </div>
                    <span className='pl-2 text-[28px]'>Yearly</span>
                  </div>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                <PlanCard cardpera1="300GB" cardpera2="Not Avai." cardpera3="Unlimited" cardpera4="Not Avai." cardpera5="Not Avai." cardheading="Intro"/>
                <PlanCard cardpera1="700GB" cardpera2="Unlimited" cardpera3="Available" cardpera4="Included" cardpera5="Yesß" cardheading="Pro"/>
                <PlanCard cardpera1="900GB" cardpera2="Unlimited" cardpera3="Available" cardpera4="Available" cardpera5="Available" cardheading="Exclusive"/>
              </div>
       </div>
   </section>
  )
}

export default Plan