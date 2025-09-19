import React from 'react'
import mssyimg from '../../assets/messyimg.png'


const Messy = () => {
  return (
   <section className='py-[80px]'>
       <div className='max-w-[1320px] mx-auto'>
           <div className='py-[15px] bg-[#dbccfc3c] rounded-[15px]'>
                <div className='flex justify-between'>
                    <button className='py-[26px] px-[63px] text-white font-semibold duration-300 bg-[#8454F5] rounded-[15px]'>Artificial Intelligence</button>
                    <button className='py-[26px] px-[63px] hover:text-white font-semibold duration-300 hover:bg-[#8454F5] rounded-[15px]'>Header Builder</button>
                    <button className='py-[26px] px-[63px] hover:text-white font-semibold duration-300 hover:bg-[#8454F5] rounded-[15px]'>Safe and Private</button>
                    <button className='py-[26px] px-[63px] hover:text-white font-semibold duration-300 hover:bg-[#8454F5] rounded-[15px]'>Mobility Solutions</button>
                </div>
           </div>

           <div className='pt-[120px] flex'>
               <div className='w-[50%] pl-[20px]'>
                <img src={mssyimg} alt="" />
               </div>
               <div className='w-[50%]'>
                <h3 className='text-[56px] font-bold leading-[140%] pb-[24px]'>No more messy distribution lists.</h3>
                <p className='leading-[180%] w-[470px] pb-[48px]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.</p>
                <button className='py-[20px] rounded-[15px] px-[48px] text-white bg-[#8454F5]'>Get started</button>
               </div>
           </div>
       </div>
   </section>
  )
}

export default Messy