import React, {useId} from 'react'


const InputBox=React.forwardRef(function InputBox({
    label,
    type="text",
    className='',
    ...props //additional properties use garyo vane tyo pani add garchha

}, ref){
    const id=useId()
    return (
        <div classNama='w-full'>
            {label && 
                <label 
                    className='inline-block mb-1 pl-1'
                    htmlFor={id} //accessibility purpose ko lagi 
                > {label}
                </label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full
             ${className}`}  //userle pass gareko className + hamro aafno classes haru
             ref={ref} //user bata liyeko ref,as a prop-  yeha pass vayeko chha, so it will give the reference to the parent component, because of useForward useNavigate
             // ....component farak vaye panu utaa bata pass pani hunchha, ani yeha bata state ko access pani laijanchha!!!(j paye tei)
            {...props}
            id={id} />
             </div>
    ) 
})

export default InputBox
