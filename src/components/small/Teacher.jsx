import React from 'react'
import {Link} from 'react-router-dom'
const Teacher = ({name , area}) => {
  return (
    <Link to='pay' className='teacher'>
      <h3 className='subText'>{name}</h3>
      <p className='bold'>{area}</p>
    </Link>
  )
}

export default Teacher