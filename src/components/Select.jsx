import React, {forwardRef, useRef} from 'react'

function Select({
    label,
    className=" ",
    ...props
}, ref) {
const id=useRef();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select {...props} id={id} ref ={ref} className={`px-3 py2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
        {options?.map((option)=>
        (
        <option key={option} value={option}>//option pani aafaimaa key ho
            {option}
        </option>
        ))}S
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
