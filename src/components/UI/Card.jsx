import React from 'react';

const Card = ({children, className}) => {
  return (
    <div className={`px-4 py-6 rounded-lg ${className}`}>
      {children}
    </div>
  )
}

export default Card