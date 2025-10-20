import React from 'react'
import Container from '../Container'
import { FaCopyright } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={"bg-gray-700 py-10 text-center "}>
        <Container>
            <p className='text-white flex justify-center items-center gap-x-2'><FaCopyright />copyright</p>
        </Container>
    </div>
  )
}

export default Footer