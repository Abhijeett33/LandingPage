import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'


const PageContent = (props) => {
  return (
    <div className=' h-[90vh] flex gap-10 px-4'>
     <Leftcontent/>
     <Rightcontent users={props.users}/>
    </div>
  )
}

export default PageContent
