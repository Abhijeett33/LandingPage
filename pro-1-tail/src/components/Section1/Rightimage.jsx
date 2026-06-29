import React from 'react'
import Rightinfo from './Rightinfo'

const Rightimage = (props) => {
  return (
    <div className='h-full w-1/3  rounded-3xl relative shrink-0 overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.img}></img>
        <Rightinfo id={props.id} info={props.info} tag={props.tag} color={props.color}/>
        </div>
  )
}

export default Rightimage
