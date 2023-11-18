import React from 'react'
import {Link} from  'react-router-dom'

const Design = ({name , icon}) => {
  return (
    <Link to='pay'>
        <h2 className='subText'>{name}</h2>
        <i className={'fa-solid fa-2x ' + icon}></i>
    </Link>
  )
}

export default Design