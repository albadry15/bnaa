import React from 'react'
import Navbar from '../components/Navbar'
import MesCont from '../components/MesCont'

const contact = () => {
  return (
    <>
        <Navbar/>
        <div className='contact'>
          <MesCont notSign={true}/>
          <form action="" className='Minput'>
            <input type="text" name='massageContent' required placeholder='اكتب هنا...'/>
            <button>أرسل</button>
          </form>
        </div>
    </>
  )
}

export default contact