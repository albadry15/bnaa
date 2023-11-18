import React from 'react'
import {Link} from 'react-router-dom'
import {logo} from '../assets'
const Signup = () => {
  return (
    <div className='sign-main'>
      <div className="sign-square">
        <img src={logo} alt="Benaa" />
        <p className='sign-p bold'>تسجيل الدخول</p>
        <form className='form'>
          <input type="email" name="email" placeholder='الإيميل'/>
          <input type="password" name="password" placeholder='كلمة السر'/>
          <button className='sign' type='submit'>سجّل الدخول</button>
        </form>
        <p className='sign-have'>لا تملك حساب ? <Link to="/register">إنشاء حساب</Link></p>
      </div>
    </div>
  )
}

export default Signup