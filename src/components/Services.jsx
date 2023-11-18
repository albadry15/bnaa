import React from 'react'
import Design from './Design'
import {pic1} from '../assets'
import {Link} from 'react-router-dom'

const services = () => {
  return (
    <div className='choose schools' id='design'>
      <h2 className='subText'>خدمات التصاميم الهندسية</h2>
      <p className='bold'>تصميم اوتوكاد و شوب دروينج و ريفيت إنشائية للأنظمة الميكانيكية الخاصة بالمباني</p><br/>
      <p className='bold'>{`جميع أعمال المكتب الفني (حصر و تسعير)`}</p>
      <div>
        <Design name='تصاميم معمارية' icon='fa-building'/>
        <Design name='تصاميم كهربائية' icon='fa-lightbulb'/>
        <Design name='تصاميم إنشائية' icon='fa-pen'/>
        <Design name='تصاميم ميكانيكية' icon='fa-gear'/>
      </div>
      <section className='main-sec'>
        <section className='f-sec'><h2 className='subText'>البرامج المستخدمة :</h2>
          <ul>
            <li>3D max</li>
            <li>Autocad</li>
            <li>Primavera</li>
            <li>Rivet</li>
            <li>Sketch Up</li>
          </ul>
        </section>
        <section className='s-sec'>
          <img src={pic1} alt="" />
          <Link to='about'>اضغط لرؤية أعمالنا</Link>
        </section>
      </section>
    </div>
  )
}

export default services