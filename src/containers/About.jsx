import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { pic1, work1 , work2 , work3 , work4 , work5 } from '../assets'
const About = () => {
  function scroll(){window.scrollTo({top:'0'})}
  return (
    <div>
        <Navbar />
        {scroll()}
        <div className='header' style={{height:'70vh'}}>
          <div className="header-texts subText">
            <h2>تعريف</h2>
            <p style={{color:'#22223b'}}>منصة بناء التعليمية تقدم لكم العديد من المحاضرين و المعلمين المميزين لكي تستطيع الدراسة من البيت و بأفضل الأسعار ,<br/> و نقوم بتقديم خدمات هندسية عديدة مثل التصاميم المعمارية و الكهربائة و غيرها الكثير و الكثير <br/> علما أن تاريخ تأسيس المنصة كان عام 2013</p>
          </div>
          <div className="header-img">
            <img src={pic1} className='imggg' alt="img" />
          </div>
      </div>


        <div className='our-projects'>
          <h1 className='subText'>من أعمالنا الهندسية</h1>
          <img src={work1} alt="" />
          <img src={work2} alt="" />
          <img src={work3} alt="" />
          <img src={work4} alt="" />
          <img src={work5} alt="" />
        </div>


        <div className='managers'>
          <div className='mngr'>
            <h2 className='subText'>مهندس أحمد عبد اللطيف</h2>
            <p className='bold'>المدير المسؤول و صاحب المنصة<br/>مهندس كهرباء electrical and electronic engineer <br/>خبرة بالعمل الطلابي و المشاريع الهندسية و أعمال الإنشاءات لأكثر من 6 سنين</p>
            <a target='_blank' href="https://wa.me/qr/H66ZAHWFXFL2G1">تواصل معه</a>
          </div>
          <div className='mngr'>
            <h2 className='subText'>مهندسة آية عبد الرحيم</h2>
            <p className='bold'>المدير المسؤول شريك في المنصة<br/>مهندسة ميكانيكا mechanical engineer <br/>خبرة منذ 2012 في العمل الطلابي و المشاريع الهندسية و الإدارة و التخطيط</p>
            <a target='_blank' href="https://wa.me/qr/YKZWUKZLZ5TAB1">تواصل معه</a>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About