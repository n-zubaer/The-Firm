import React from 'react'

const Button = ({btnContent,btnstyle}) => {
  return (
    <button className={btnstyle }>{btnContent || "Nothing"}</button>
  )
}

export default Button