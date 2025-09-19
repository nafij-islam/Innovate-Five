import React from 'react'

const TollCard = ({src,cardheading,cardpera,btntext}) => {
  return (
    <div className='pt-[24px] pr-[20px] pl-[24px] pb-[48px] duration-600 ease-in-out border-1 border-[#8454F5] rounded-[30px] group hover:bg-[#8454F5]'>
        <div className='flex items-center  gap-[14px]'>
            <img src={src} alt="" />
            <h3 className='text-[28px] group-hover:text-white font-bold'>{cardheading}</h3>
        </div>
        <p className='pt-[16px] text-[#29313D] w-auto group-hover:text-[#FCFCFE] text-[18px] leading-[180%] pb-[24px] '>{cardpera}</p>
        <button className='group-hover:text-white'>{btntext}</button>
    </div>
  )
}

export default TollCard