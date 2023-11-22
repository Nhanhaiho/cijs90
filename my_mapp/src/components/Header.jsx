import React from 'react'

const Header = (props) => {
    console.log(props.background)
    console.log(props.height)
  return (
      <div className='header'
      style={{backgroundColor:props.background}}
      >Header</div>
  )
}

export default Header