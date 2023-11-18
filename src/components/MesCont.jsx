import React from 'react'
import Message from './small/Message'

const MesCont = ({notSign}) => {
  return (
    <div className='mes-cont'>
        {notSign?<div className='must'><h2 className='subText'>عليك تسجيل الدخول للتواصل مع خدمة العملاء</h2></div>:
        <>
        <Message content={`انا رايح`} date='09:55pm' urs={false}/>
        <Message content={`ول اي ويد انا رايح`} date='09:55pm' urs={true}/>
        <Message content={`awfawfa`} date='09:55pm' urs={true}/>
        <Message content={` awfw wa  fea`} date='09:55pm' urs={false}/>
        <Message content={`lo`} date='09:55pm' urs={false}/>
        <Message content={``} date='09:55pm' urs={false}/>
        <Message content={``} date='09:55pm' urs={true}/>
        <Message content={``} date='09:55pm' urs={false}/>
        <Message content={``} date='09:55pm' urs={false}/>
        <Message content={``} date='09:55pm' urs={false}/>
        <Message content={``} date='09:55pm' urs={false}/>
        </>
        }
    </div>
  )
}

export default MesCont