import React from 'react'
import {logo} from '../assets'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className='sign-main'>
      <div className="sign-square">
        <img src={logo} alt="Benaa" />
        <p className='sign-p bold'>إنشاء حساب</p>
        <form className='form'>
          <input type="email" name="email" placeholder='الإيميل'/>
          <input type="password" name="password" placeholder='كلمة السر'/>
          <button className='sign' type='submit'>أنشئ حسابك</button>
        </form>
        <p className='sign-have'>تمتلك حساب ? <Link to="/login">تسجيل الدخول</Link></p>
      </div>
    </div>
  )
}

export default Signup