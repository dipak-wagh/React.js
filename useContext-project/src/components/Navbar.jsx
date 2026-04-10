import React from 'react'
import Component1 from './Component1'
import Button from './Button'

const Navbar = ({count}) => {
  return (
    <>
    <div>
      <button> <span><Component1/></span>I am a button </button>
    </div>
    <Button count={count} />
    </>
  )
}

export default Navbar
