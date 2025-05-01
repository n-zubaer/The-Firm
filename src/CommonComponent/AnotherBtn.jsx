import React from 'react'

const AnotherBtn = ({btnContent , design}) => {
  return (
    <button className={design}>{btnContent}</button>
  )
}

export default AnotherBtn