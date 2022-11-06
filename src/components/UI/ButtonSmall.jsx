import React from 'react'

const ButtonSmall = ({ text, className, disable }) => {
   return (
      <button
         disabled={disable}
         className={`px-8 py-2 rounded-lg font-semibold ${className} ${disable ? 'bg-light-200 text-light-300 cursor-not-allowed' : 'bg-title text-white cursor-pointer'
            }`}>{text}</button>
   )
}

export default ButtonSmall