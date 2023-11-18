import React from 'react'
import {logo} from '../assets';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  return (
    <nav id='nav'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='links'>
        <ul>
          <Link to='/'>الصفحة الرئيسية</Link>
          <Link to='/about'>عنّا</Link>
          <a href='/#design'>الخدمات الهندسية</a>
          <Link to='/admin'>أدمن</Link>
        </ul>
        <div className='div'>
          <Link className='nav-reg' to='/register'>إنشاء حساب</Link>
          <Link className='nav-log' to='/login'>تسجيل الدخول</Link>
        </div>
      </div>
      <div className='toggle'>
        <i color='#fff' className='menuu fa-solid fa-list fa-2x' fontSize={27} onClick={()=> setToggleMenu(true)}></i>
        {toggleMenu && (
          <div className="nav-overlay flex__center slide-bottom">
            <i fontSize={27} className='overlay-close fa-solid fa-x' onClick={()=>setToggleMenu(false)}></i>
            <ul className="nav-links-ss">
              <li><Link to="/" onClick={()=>setToggleMenu(false)}>الصفحة الرئيسية</Link></li>
              <li><Link to="/about" onClick={()=>setToggleMenu(false)}>عنّا</Link></li>
              <li><a href="/#design" onClick={()=>setToggleMenu(false)}>الخدمات الهندسية</a></li>
              <li><Link to="/admin" onClick={()=>setToggleMenu(false)}>أدمن</Link></li>
            </ul>
          </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar