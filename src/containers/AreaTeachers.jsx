import React from 'react'
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import {i3dadi , high , univer1 , univer2 , univer3} from '../media/data'
import Chooseschool from '../components/Chooseschool';
import Footer from '../components/Footer';
const AreaTeachers = () => {
  const Params = useParams();
  function scroll(){window.scrollTo({top:'0'})}
  function choose(){
    if(Params.areaName===':small'){
      return <Chooseschool areas={i3dadi}/>
    }
    else if(Params.areaName===':high'){
      return <Chooseschool areas={high}/>
    }
    else if(Params.areaName===':univer'){
      return <div><Chooseschool areas={univer1} poo='هندسة'/><Chooseschool areas={univer2} poo='طب بشري'/><Chooseschool areas={univer3} poo='علوم أساسية'/></div>
    }
  }
  return (
    <>
        {scroll()}
        <Navbar/>
        {choose()}
        <Footer/>
    </>
  )
}

export default AreaTeachers