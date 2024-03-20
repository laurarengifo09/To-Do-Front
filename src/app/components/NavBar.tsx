import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";

export const NavBar = () => {
  return (
    <div className=' bg-black h-full border-solid border-black'>
        <div className=' flex justify-center items-center my-8'>
            <div className=' flex items-center justify-center w-10 h-10  rounded-lg bg-blue-600 mx-4 '>
            <FaBookOpen style={{ color: 'white' }} size={30} />
            </div>
            <div>
            <p className='text-white text-3xl "'>Nuegas</p>
            </div>
        </div>
        <div>
            <nav>
                <div className=' flex items-center justify-center gap-3 mx-10 rounded-lg  hover:bg-slate-600  '>
                <TbCategory2 style={{ color: 'white' }} size={30}/>
                    <p className=' text-white'>Overview</p>
                </div>
            </nav>
        </div>

    </div>
  )
}
