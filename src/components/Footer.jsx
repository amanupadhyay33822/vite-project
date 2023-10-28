/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/NewLogo.png"
import {BsTwitter} from "react-icons/bs"
import m from "../assets/m.svg"
import {AiFillGithub} from "react-icons/ai"
import {ImTelegram} from "react-icons/im"
import {BsDiscord} from "react-icons/bs"
import {AiFillMediumCircle} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-white'>
        <hr className="border border-pure-greys-600 mt-16"></hr>
       <div  className='relative w-11/12 flex flex-col items-center mx-auto '>
        {/* for logo  */}<div className='flex items-center '>
        <img src={logo} width={100}></img><p className='relative right-6 text-2xl'>Romi.Finance</p>
        </div>
        {/* for logo */}
        <div className='flex gap-28 items-center text-pure-greys-600 transition-all duration-200'>
        <BsTwitter className='scale-175 hover:text-white'/>
        {/* <img src={m} className='text-pure-greys-600'></img> */}
        <AiFillMediumCircle className='scale-175 hover:text-white '/>
        <AiFillGithub className='scale-175 hover:text-white'/>
        <ImTelegram className='scale-175 hover:text-white'/>
        <BsDiscord className='scale-175 hover:text-white'/>
        </div>
        {/* for last bottom part */}
        <div className='flex gap-3 mt-8'>
            <Link>Terms and Conditions</Link>
            <Link>Referral Terms</Link>
            <Link>Media Kit</Link>
            <br></br>
            <br></br>
            
        </div>
       </div>

      
    </div>
  )
}

export default Footer