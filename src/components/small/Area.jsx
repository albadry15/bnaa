import React from 'react'
import { Link } from 'react-router-dom'

const Area = ({name , keey , icon , enname , classs , dis}) => {
  return (
    <Link to={keey} className={'area subText ' + classs}>{name} <br/> {enname}<p className='bold'>{dis}</p><i className={icon}></i></Link>
  )
}

export default Area