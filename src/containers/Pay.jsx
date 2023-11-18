import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Pay = () => {
  function scroll(){window.scrollTo({top:'0'})}
  return (
    <>
      <Navbar/>
      {scroll()}
      <form className='pay' action='' method=''>
        <h1 className='subText'>تقديم طلب</h1>
        <input type="text" name='name' placeholder='الاسم الكامل'/>
        <input type="text" name='phoneNumber' placeholder='رقم هاتف للتواصل'/>
        <input type="email" name='email' placeholder='ايميل للتواصل'/>
        <input type="text" name='order' placeholder='الطلب الذي تود تقديمه ( مثلا أستاذ ترغب بالتسجيل عنده أو تصميم هندسي )'/>
        <button className='bott' style={{margin:'1rem',marginBottom:'2rem'}}>تقديم</button>
        <p className='bold'>بعد تقديم الطلب اضغط هنا للتواصل مع صاحب الموقع</p>
        <a target='_blank' href='https://wa.me/qr/H66ZAHWFXFL2G1' className='bott'>اضغط هنا للتواصل مع صاحب الموقع</a>
      </form>
      <Footer/>
    </>
  )
}

export default Pay