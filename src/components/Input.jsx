import React from 'react'

const Input = ({type,className,placeholder,value}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} className={`w-[700px] bg-gray-100 ${className}`} required="required"/>
  )
}

export default Input