import React from 'react'
import Area from './small/Area'
const Chooseteacher = ({areas}) => {
  return (
    <div className='choose teachers ba' style={{minHeight:'60vh'}}>
        <h1 className='subText'>{areas.name}</h1>
        <p className='bold'>أفضل معلمي و معلمات ال{areas.name}</p>
        <div>
        {areas.teachers.map((area , index)=> <Area classs="teacher" name={area.name} dis={area.dis} enname={area.enname} keey={'/pay'} key={area.keey + index + area.keey}/>)}
        </div>
    </div>
  )
}

export default Chooseteacher