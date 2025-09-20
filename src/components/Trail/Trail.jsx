import React from 'react'

const Trail = () => {
  return (
    <section className='py-[60px]'>
      <div className='max-w-[1320px] mx-auto'>
          <div>
              <h2 className='text-[56px] font-bold text-center w-[750px] pb-[28px] mx-auto'>Ready to get started? Start your free trial.</h2>
              <div className='flex gap-5 justify-center'>
                <p className='text-[18px] border-r-2 pr-[15px]'>Free 30 days trial</p>
                <p className='text-[18px] border-r-2 pr-[15px]'>Exclusive Support</p>
                <p className='text-[18px]'>No Fees</p>
              </div>
              <div className='flex justify-center gap-3 pt-[20px]'>
                <input className='bg-[#F3EEFE] rounded-[10px] py-[24px] pl-[24px] pr-[270px] focus:outline-0' type="text" placeholder='Enter your email' />
                <button className='py-[20px] text-white font-bold rounded-[10px] px-[48px] bg-[#8454F5]'>Try for free</button>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Trail