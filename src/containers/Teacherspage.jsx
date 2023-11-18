import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Area from '../components/small/Area'
import { univer1, univer2, univer3 } from '../media/data'

const Teacherspage = () => {
  function scroll(){window.scrollTo({top:'0'})}
  return (
    <div>
        <Navbar/>
        {scroll()}
        <div className='choose ba'>
          <h1 className='subText' style={{textAlign:'center'}}>جميع المعلمين و المحاضرين</h1>
          <p className='bold'>أفضل المعلمين و المحاضرين لجميع الفئات و التخصصات</p>
          <div>
          {univer1.map((area , index)=> <Area classs="teacher" name={area.teachers[index].name} dis={area.teachers[index].dis} enname={area.teachers[index].enname} keey={'/pay'} key={area.keey + index + area.keey}/>)}
          {univer2.map((area , index)=> <Area classs="teacher" name={area.teachers[index].name} dis={area.teachers[index].dis} enname={area.teachers[index].enname} keey={'/pay'} key={area.keey + index + area.keey}/>)}
          {univer3.map((area , index)=> <Area classs="teacher" name={area.teachers[index].name} dis={area.teachers[index].dis} enname={area.teachers[index].enname} keey={'/pay'} key={area.keey + index + area.keey}/>)}
          </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Teacherspage