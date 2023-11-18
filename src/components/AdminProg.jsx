import React from 'react'

const AdminProg = ({one,two,twoo,three}) => {
  return (
    <tr>
        <td>{one}</td>
        <td>{two}<br/>{twoo}</td>
        <td>{three}</td>
        <td><button style={{border:'none'}}><i style={{color:'red',cursor:'pointer'}} className='fa-solid fa-remove'></i></button></td>
    </tr>
  )
}

export default AdminProg



/*
            <optgroup label='إعدادي'>
              <option value="sm-maths">رياضيات</option>
              <option value="sm-arabic">عربي</option>
              <option value="sm-phisics">فيزياء</option>
              <option value="sm-chemical">كيمياء</option>
              <option value="sm-english">إنجليزي</option>
              <option value="sm-lives">أحياء</option>
              <option value="sm-scince">علوم</option>
              <option value="sm-iihsaa">إحصاء</option>
              <option value="sm-history">تاريخ و جغرافيا</option>
              <option value="sm-phelosofy">فلسفة</option>
            </optgroup>
            <optgroup label='ثانوي'>
              <option value="hi-maths">رياضيات</option>
              <option value="hi-arabic">عربي</option>
              <option value="hi-phisics">فيزياء</option>
              <option value="hi-chemical">كيمياء</option>
              <option value="hi-english">إنجليزي</option>
              <option value="hi-lives">أحياء</option>
              <option value="hi-scince">علوم</option>
              <option value="hi-iihsaa">إحصاء</option>
              <option value="hi-history">تاريخ و جغرافيا</option>
              <option value="hi-phelosofy">فلسفة</option>
            </optgroup>
            <optgroup label='جامعي'>
              <option value="madani">هندسة مدنية</option>
              <option value="build">هندسة عمارة</option>
              <option value="chemical">هندسة كيمياء</option>
              <option value="electronic">هندسة كهرباء</option>
              <option value="mechanical">هندسة ميكانيكا</option>
              <option value="power">هندسة طاقة</option>
              <option value="carschem">هندسة ميكانيكا سيارات</option>
              <option value="medical">هندسة طبية</option>
              <option value="mechatronics">ميكاترونيكس</option>
              <option value="cs">علوم الحاسب</option>
              <option value="doctor">طب بشري</option>
              <option value="pharmecy">صيدلة</option>
              <option value="nature">علاج طبيعي</option>
              <option value="maths">رياضيات</option>
              <option value="phisics">فيزياء</option>
              <option value="chemical">كيمياء</option>
*/