import React from 'react'
import Teacher from './small/Teacher'
import {Link} from 'react-router-dom'
const Teachers = () => {
  return (
    <div className='teachers choose'>
        <h1 className='subText'>معلمين و معلمات <span>بِناء</span></h1>
        <p className='bold'>ذوي الكفاءة و الخبرة و الشهادات العليا</p>
        <div>
            <Teacher name='م.أحمد محسن' area='هندسة معلوماتية'/>
            <Teacher name='م.أحمد محسن' area='هندسة معلوماتية'/>
            <Teacher name='م.أحمد محسن' area='هندسة معلوماتية'/>
        </div>
        <Link className='showmore bold' to="teachers">عرض المزيد</Link>
    </div>
  )
}

export default Teachers