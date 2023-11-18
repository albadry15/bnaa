import React from 'react'
import {logo} from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='nonee'><img src={logo} alt="" /></div>
      <div className='ul'>
        <h3>للتواصل معنا :</h3>
        <ul>
          <li><a target='_blank' href='https://x.com/Academyen9401A?t=GsVDIH5saI6iVd1g5QOmjg&s=09' className='fa-brands fa-twitter'>Twitter</a></li>
          <li><a target='_blank' href='https://wa.me/qr/H66ZAHWFXFL2G1' className='fa-brands fa-whatsapp'>WhatsApp</a></li>
          <li><a target='_blank' href='emailto:a.academyengineer@gmail.com' className='fa-brands fa-email'>Gmail</a></li>
        </ul>
      </div>
      <div className='ul'>
        <h3>أقسام مهمة :</h3>
        <ul>
          <li><Link to='/teachers' className='bold'>المعلمين</Link></li>
          <li><Link to='/' className='bold'>الصفحة الرئيسية</Link></li>
          <li><Link to='/contact' className='bold'>خدمة العملاء</Link></li>
          <li><Link to='/about' className='bold'>عنّا</Link></li>
          <li><Link to='/login' className='bold'>تسجيل الدخول</Link></li>
        </ul>
      </div>
      <div className='footer-about'>
        <h3>نبذة عنا :</h3>
        <p>منصة بناء تقدم لكم أفضل المحاضرين و المعلمين للتعلم من البيت بأفضل الأسعار , و تقدم خدمات هندسية عديدة منها...</p>
        <Link to='/about'>اقرأ المزيد</Link>
        <p style={{color:'gray',marginTop:'1rem'}}>Website Build By DCSS Team</p>
      </div>
    </footer>
  )
}

export default Footer