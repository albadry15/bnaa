import React from 'react'
import Area from './small/Area'
import { useParams } from 'react-router-dom'
const Chooseschool = ({areas , poo}) => {
  const Params = useParams();
  function hhh(){
    if(Params.areaName === ':small'){return 'الإعدادي'}
    else if(Params.areaName === ':high'){return 'الثانوي'}
    else if(Params.areaName === ':univer'){return 'تخصص ' + poo}
  }
  return (
    <div className='choose ba'>
        <h1 className='subText'>{hhh()}</h1>
        <p className='bold'>أفضل المعلمين و المحاضرين ل{hhh()}</p>
        <div>
        {areas.map((area , index)=> <Area name={area.name} icon={area.icon} keey={area.keey} key={area.keey + index + area.name}/>)}
        </div>
    </div>
  )
}

export default Chooseschool