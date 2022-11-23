import React from 'react'

function Button({onClick,children}) {
  return (
    <button className='bg-blue-600 text-white py-2 px-6 my-10 rounded hover:bg-blue-700'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button