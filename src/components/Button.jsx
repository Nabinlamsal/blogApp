import React from 'react'

function Button({
    children, //parameters 
    type="button",
    bgColor="text-white",
    className='',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded lg  ${bgColor} ${textColor} ...props`}>
        {children} //children maaa jun text pass hunchha, tei aauchha
    </button>
  )
}

export default Button
