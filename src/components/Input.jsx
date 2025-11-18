import React from 'react'

const Input = ({type,className,placeholder,value}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} className={`w-full bg-gray-100 rounded-md ${className}`} required="required"/>
  )
}

export default Input