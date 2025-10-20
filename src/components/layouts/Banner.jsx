import React from 'react'
import Heading from '../Heading'
import Container from '../Container'

const Banner = () => {
  return (
    <>
    <div className="bg-[url(/src/assets/banner.png)]  bg-no-repeat bg-cover bg-center ">
    <div className=" bg-black py-[340px] opacity-50 ">
      <Container className="grid justify-center ">
        <Heading className="text-[#fafafa] font-bold text-[140px] " text="Web Developer" as="h2" />
        <Heading className="text-[#fafafa] text-[18px] text-center" text='"Development is not about how it looks,it is about how it performs"' as="h5" />
      </Container>
    </div>
    </div>
    </>
  )
}

export default Banner