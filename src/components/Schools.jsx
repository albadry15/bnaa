import React from 'react'
import School from './small/School'

const Schools = () => {
  return (
    <div className='schools choose'>
        <h1 className='subText'>اختر و ابدأ !</h1>
        <div>
        <School name="التعليم الإعدادي" icon='fa-school' index='areas/:small'/>
        <School name="التعليم الثانوي" icon='fa-school' index='areas/:high'/>
        <School name="التعليم الجامعي" icon='fa-school' index='areas/:univer'/>
        <School name="مشاريع تخرج" icon='fa-building' index='pay'/>
        <School name="رسائل ماجستير و دكتوراه" icon='fa-message' index='pay'/>
        </div>
    </div>
  )
}

export default Schools