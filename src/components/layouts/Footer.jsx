import React from 'react'
import Container from '../Container'
import { FaCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={"bg-transparent py-10 text-center "} >
        <Container>
            <p className='text-[#232323] flex justify-center items-center gap-x-2'><FaCopyright />copyright</p>
        </Container>
    </div>
  )
}

export default Footer