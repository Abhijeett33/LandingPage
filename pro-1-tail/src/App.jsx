import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const users = [
    { img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',color:'lightseagreen', info: 'The cloud is just somebody else computer running in a massive, air-conditioned warehouse.', tag: 'Satisfied' },
    { img: 'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',color:'blue', info: 'Cybersecurity is a relentless game of cat-and-mouse between hackers and digital fortresses.', tag: 'Unstatisfied' },
    { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',color:'black', info: 'Artificial intelligence is npt replacing human intelligence; it is rapidly augmenting our problem-solving capabilities.', tag: 'InReview' }
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
