import React from 'react'

const Rightinfo = (props) => {
  return (
    <div className='absolute top-0 left-0 flex flex-col h-full justify-between py-8 px-8'>
                <h2 className='h-12 w-12  rounded-full bg-fuchsia-50 flex items-center justify-center font-semibold text-2xl'>{props.id+1}</h2>
            <div className='font-semibold text-lg text-white'>
                {props.info}
            </div>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className='h-10 w-30  rounded-2xl font-bold text-white'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='h-10 w-10 rounded-2xl font-bold text-white'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
  )
}

export default Rightinfo
