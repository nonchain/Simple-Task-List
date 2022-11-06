import React from 'react';
import ButtonSmall from './ButtonSmall'

const Card = ({children, className}) => {
  return (
    <div className={`px-4 py-6 rounded-lg ${className}`}>
      {children}
    </div>
  )
}

export default Card