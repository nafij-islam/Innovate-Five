import React from 'react'
import taskimg1 from '../../assets/taskimg1.png'
import taskimg2 from '../../assets/taskimg2.png'

const Task = () => {
  return (
    <section className='py-[80px] relative'>
        <div className='absolute top-4 left-0'>
            <img src={taskimg2} alt="" />
        </div>
        <div className='max-w-[1320px] mx-auto'>
            <div className='flex'>
                <div className='w-[50%] pl-[50px]'>
                          <img src={taskimg1} alt="" />
                </div>
                <div className='w-[50%]'>
                    <div className='pt-[50px]'>
                        <h3 className='text-[48px] w-[520px] font-bold leading-[120%] pb-[24px]'>Join with any business tasks and any goals</h3>
                        <p className='leading-[180%] w-[470px] pb-[48px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                        <button className='py-[20px] px-[48px] text-white font-bold bg-[#8454F5] rounded-[18px]'>Sign up</button>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Task