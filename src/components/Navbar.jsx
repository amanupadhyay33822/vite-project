/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/NewLogo.png"
import {BsThreeDotsVertical} from "react-icons/bs"
import {PiWallet} from "react-icons/pi"
import arrow from "../assets/icon.svg"

const Navbar = () => {
  return (
    <div className='text-richblue-5 mt-2 flex h-14 items-center justify-center border-b-[1px]
    border-b-richblack-700'>
     <div className='flex w-11/12 items-center justify-between'>
        <Link className='flex items-center pr-7'>
        <img src={logo} height={42}  width={70}></img><p className='relative right-4'>Romi.Finance</p>
        </Link>

        <nav>
            <ul className='flex gap-x-9 text-richblack-1 font-medium text-lg transition-all duration-200 '>
            <li><a href="default.asp" className='hover:text-white'>Home</a></li>
            <li><a href="default.asp"  className='hover:text-white'>Dashboard</a></li>
            <li><a href="default.asp"  className='hover:text-white'>NFT</a></li>
            <li><a href="default.asp"  className='hover:text-white'>Earn</a></li>
            <li><a href="default.asp"  className='hover:text-white'>Buy</a></li>
            <li><a href="default.asp"  className='hover:text-white'>Referrals</a></li>
            <li><a href="default.asp"  className='hover:text-white'>Ecosystem</a></li>
            <li><a href="default.asp"  className='hover:text-white'>About</a></li>
            </ul>

        </nav>
        <div className='flex gap-6'>
        <div className='flex gap-x-5'>
        <button className='text-white  bg-green px-[16px] text-center h-[40px] rounded-md'>Trade</button>
        <button className='flex text-center items-center border px-4 gap-x-3 rounded-md
       border-pure-greys-500 ' >
        
            <PiWallet  className='scale-150'/>
            Connect Wallet</button>
        </div>
        <div className='flex h-10 cursor-pointer'>
            <div className='flex  border rounded-md   items-center gap-x-2 px-3 py-1 border-pure-greys-500'>
            <button className=''>
                 <img src={arrow}></img>
            </button>
            {/* separator */}
            <div className='h-3 border-l-4 border-richblack-50 '></div>
           <button className='font-bold'> <BsThreeDotsVertical/></button>
            </div>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar