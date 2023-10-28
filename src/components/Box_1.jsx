/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Box_1 = ({heading,src,para,value}) => {
  return (
    <div className='flex flex-col mx-28 mt-36 border  min-w-[500px] border-pure-greys-500 p-7 rounded-md'>
        {/* for image and heading */}
        <div className='flex  items-center gap-3'>
            <img src={src} width={45}></img>
            <p className='text-2xl'>{heading}</p>
        </div>
        <p className='mt-3 text-[18px] max-w-[520px]'>{para}</p>
        <p className='mt-3 text-pure-greys-50'>Ethereum APR: {value}</p>
        <div className='flex items-center gap-4 mt-2'>
            <button className='text-white  bg-green px-[16px] text-center h-[40px] rounded-md'>Buy</button>
            <button className='border border-white p-2 min-w-[120px] rounded-md'   >Read more</button>
        </div>
    </div>
  )
}

export default Box_1