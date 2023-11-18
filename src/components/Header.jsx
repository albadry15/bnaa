import React from 'react'
import {pic3} from '../assets'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header' id='header'>
        <div className="header-texts subText">
          <h2>أفضل المحاضرين في جميع الفئات الدراسية يقدمون أفضل الكورسات بطريقة رائعة</h2>
          <p style={{color:'#22223b'}}>منصة بناء التعليمية ؟ تعلم و أنت في البيت بأقل الأسعار</p>
          <Link className='bold' to='about'>اقرأ عنا !</Link>
        </div>
        <div className="header-img">
          <img src={pic3} alt="img" />
        </div>
    </div>
  )
}

export default Header