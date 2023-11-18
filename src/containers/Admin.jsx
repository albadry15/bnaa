import React from 'react'
import Navbar from '../components/Navbar'
import AdminProg from '../components/AdminProg'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <>
        <Navbar/>
        <form className='pay' style={{marginTop:'3rem'}} action='' method=''>
          <h1 className='subText'>إضافة أستاذ</h1>
          <input type="text" name='name' placeholder='الاسم بالعربي' required/>
          <input type="text" name='engishName' placeholder='الاسم بالانجليزي'/>
          <select className='select' name="subject" required>
            <optgroup label='إعدادي'>
              <option value="إعدادي رياضيات">رياضيات</option>
              <option value="إعدادي عربي">عربي</option>
              <option value="إعدادي فيزياء">فيزياء</option>
              <option value="إعدادي كيمياء">كيمياء</option>
              <option value="إعدادي إنجليزي">إنجليزي</option>
              <option value="إعدادي أحياء">أحياء</option>
              <option value="إعدادي علوم">علوم</option>
              <option value="إعدادي إحصاء">إحصاء</option>
              <option value="إعدادي تاريخ و جغرافيا">تاريخ و جغرافيا</option>
              <option value="إعدادي فلسفة">فلسفة</option>
            </optgroup>
            <optgroup label='ثانوي'>
              <option value="ثانوي رياضيات">رياضيات</option>
              <option value="ثانوي عربي">عربي</option>
              <option value="ثانوي فيزياء">فيزياء</option>
              <option value="ثانوي كيمياء">كيمياء</option>
              <option value="ثانوي إنجليزي">إنجليزي</option>
              <option value="ثانوي أحياء">أحياء</option>
              <option value="ثانوي علوم">علوم</option>
              <option value="ثانوي إحصاء">إحصاء</option>
              <option value="ثانوي تاريخ و جغرافيا">تاريخ و جغرافيا</option>
              <option value="ثانوي فلسفة">فلسفة</option>
            </optgroup>
            <optgroup label='جامعي'>
              <option value="هندسة مدنية">هندسة مدنية</option>
              <option value="هندسة عمارة">هندسة عمارة</option>
              <option value="هندسة كيمياء">هندسة كيمياء</option>
              <option value="هندسة كهرباء">هندسة كهرباء</option>
              <option value="هندسة ميكانيكا">هندسة ميكانيكا</option>
              <option value="هندسة طاقة">هندسة طاقة</option>
              <option value="هندسة ميكانيكا سيارات">هندسة ميكانيكا سيارات</option>
              <option value="هندسة طبية">هندسة طبية</option>
              <option value="ميكاترونيكس">ميكاترونيكس</option>
              <option value="علوم الحاسب">علوم الحاسب</option>
              <option value="طب بشري">طب بشري</option>
              <option value="صيدلة">صيدلة</option>
              <option value="علاج طبيعي">علاج طبيعي</option>
              <option value="رياضيات">رياضيات</option>
              <option value="فيزياء">فيزياء</option>
              <option value="كيمياء">كيمياء</option>
            </optgroup>
          </select>
          <button className='bott' style={{margin:'1rem',marginBottom:'2rem'}}>إضافة</button>
        </form>

        <h1 className='subText' style={{width:'90% !important',textAlign:'center'}}>قائمة الأساتذة</h1>
        <table className='teaTable'>
          <thead>
            <tr>
              <th>الاسم بالعربي</th>
              <th>الاسم بالانجليزي</th>
              <th>الفئة</th>
            </tr>
          </thead>
          <tbody>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='احمد محسن' two='ahmad muhsen' three='رياضيات إعدادي'/>
            <AdminProg one='' two='ahmad muhsen' three=''/>
          </tbody>
        </table>
        <h1 className='subText' style={{width:'90% !important',textAlign:'center'}}>قائمة الطلبات</h1>
        <table className='teaTable' style={{width:'90%'}}>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>رقم الهاتف و الإيميل</th>
              <th>الطلب</th>
            </tr>
          </thead>
          <tbody>

          <AdminProg one='عبدالرحمن حبيب كلبي' two='0997203291' twoo='abodesalm45@gmail.com' three='التسجيل عند الأستاذ علاوي حبيب كلبي مدرس الرياضيات للإعدادي'/>
          <AdminProg one='عبدالرحمن حبيب كلبي' two='0997203291' twoo='abodesalm45@gmail.com' three='>التسجيل عند الأستاذ علاوي حبيب كلبي مدرس الرياضيات للإعدادي و برضو حاب استفسر عن السعر و المدة الزمنية اللي ممكن يطول فيها الكورس و هل هو اصلا كورس ولا مساعدة تعليم'/>

          </tbody>
        </table>
        <div className='chatAdm'>
          <div className='a'><Link  to='/contact'>عميل 1</Link><i style={{color:'red',cursor:'pointer'}} className='fa-solid fa-remove'></i></div>
        </div>
    </>
  )
}

export default Admin