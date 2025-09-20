import React from 'react'
import { CiSquareCheck } from "react-icons/ci";


const PlanCard = ({cardheading,cardpera1,cardpera2,cardpera3,cardpera4,cardpera5}) => {
  return (
    <div className='hover:bg-[#181059] border-1 bg-[#19105917] hover:-translate-y-15 duration-300 ease-in-out rounded-[15px] p-[48px] group'>
        <h3 className='pb-[48px] font-bold text-[48px]  group-hover:text-white '>{cardheading}</h3>
          <div className='flex justify-between'>
        <ul className='flex flex-col gap-[28px]'>
            <li className='flex group-hover:text-white  items-center text-[20px] font-normal gap-2'><CiSquareCheck />Hosting Space</li>
            <li className='flex group-hover:text-white  items-center text-[20px] font-normal gap-2'><CiSquareCheck />Emails</li>
            <li className='flex group-hover:text-white items-center text-[20px] font-normal gap-2'><CiSquareCheck />Pricing Feature</li>
            <li className='flex group-hover:text-white  items-center text-[20px] font-normal gap-2'><CiSquareCheck />Bonus Plugins</li>
            <li className='flex pb-[48px] group-hover:text-white  items-center text-[20px] font-normal gap-2'><CiSquareCheck />Exclusive Support</li>
        </ul>
                <ul className='flex flex-col gap-[28px]'>
            <li className='flex group-hover:text-white text-[#8454F5] text-end text-[20px] font-normal gap-2'>{cardpera1}</li>
            <li className='flex group-hover:text-white text-[#8454F5] text-end text-[20px] font-normal gap-2'>{cardpera2}</li>
            <li className='flex group-hover:text-white text-[#8454F5] text-end text-[20px] font-normal gap-2'>{cardpera3}</li>
            <li className='flex group-hover:text-white text-[#8454F5] text-end text-[20px] font-normal gap-2'>{cardpera4}</li>
            <li className='flex pb-[48px] group-hover:text-white text-[#8454F5] text-end text-[20px] font-normal gap-2'>{cardpera5}</li>
        </ul>
          </div>
        <div>
            <button className='py-[20px] text-white px-[48px] bg-[#8454F5] rounded-[15px]'>Get started</button>
        </div>
    </div>
  )
}

export default PlanCard