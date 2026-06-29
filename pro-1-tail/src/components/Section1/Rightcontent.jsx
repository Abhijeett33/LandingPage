import React from 'react'
import Rightimage from './Rightimage'

const Rightcontent = (props) => {
  return (
   <div id="right" className='h-[78vh] w-2/3 p-3 px-3 flex flex-nowrap gap-10 overflow-x-auto '>
      {props.users?.map(function(elem,idx){
        return <Rightimage key={idx} id={idx} color={elem.color} info={elem.info} tag={elem.tag} img={elem.img}/>
      })}
   </div>
  )
}
 
export default Rightcontent
