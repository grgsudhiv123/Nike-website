import React from 'react'

const Buttons = ({labels, iconurl}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 bg-coral-red font-montserrat leading-none  rounded-full text-white'>
        {labels}
        <img src={iconurl} alt="arrow-icon" className='ml-2 rounded-full bg-slate-500 w-5 h-5'/>
    </button>
  )
}

export default Buttons;