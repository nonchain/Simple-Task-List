import React from 'react';
import ButtonSmall from './ButtonSmall'

const Card = ({children, title, className}) => {
  return (
    <div className={`px-4 py-6 rounded-lg ${className}`}>
      <div className="mb-8 flex items-center justify-between">
          <h2 className='text-title font-medium text-3xl'>{title}</h2>
          <ButtonSmall text='Add' disable={true}/>
        </div>
      {children}
    </div>
  )
}

export default Card