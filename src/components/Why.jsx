import React from 'react'
import {pic2} from '../assets'

const Why = () => {
  return (
    <div className='why'>
      <h1 className='subText'>لماذا تختار <span>بِناء</span> ?</h1>
      <p className='bold'>تعلم و أنت في البيت بأقل الأسعار و في أي وقت</p>
      <div className='whydiv'>
        <div className='img'><img src={pic2} alt="" /></div>
        <div className='detailsw'>
          <div>معلمين و معلمات موثوقين</div>
          <div>أسعار جيدة و معقولة</div>
          <div>متابعة من المعلم للوصول للتميز</div>
        </div>
      </div>
    </div>
  )
}

export default Why