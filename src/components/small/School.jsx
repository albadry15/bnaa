import React from 'react'
import {Link} from 'react-router-dom'
const School = ({name , icon , index}) => {
  return (
    <Link to={index}>
        <h2>{name}</h2>
        <i className={'fa-solid fa-2x ' + icon}></i>
    </Link>
  )
}

export default School