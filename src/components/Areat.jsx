import React from 'react'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Chooseteacher from './Chooseteacher';
import { i3dadi , high , univer1 , univer2 , univer3 } from '../media/data';

const Areat = () => {
    const Params = useParams();
    function choos(){

      /* هنا يتم وضع الأساتذة الخاصين بقسم الرياضيات للإعدادي و من باب التجربة وضعت بيانات من عندي و راح اكمل بقية الأساتذة بس انت بس تخلص احذف و زبط على كيفك */

      if(Params.teaName===':sm-math'){return <Chooseteacher areas={ i3dadi[0] }/>}
      else if(Params.teaName===':sm-fis'){return <Chooseteacher areas={ i3dadi[1] }/>}
      else if(Params.teaName===':sm-che'){return <Chooseteacher areas={ i3dadi[2] }/>}
      else if(Params.teaName===':sm-arab'){return <Chooseteacher areas={ i3dadi[3] }/>}
      else if(Params.teaName===':sm-ihsa'){return <Chooseteacher areas={ i3dadi[4] }/>}
      else if(Params.teaName===':sm-sci'){return <Chooseteacher areas={ i3dadi[5] }/>}
      else if(Params.teaName===':sm-liv'){return <Chooseteacher areas={ i3dadi[6] }/>}
      else if(Params.teaName===':sm-eng'){return <Chooseteacher areas={ i3dadi[7] }/>}
      else if(Params.teaName===':sm-hist'){return <Chooseteacher areas={ i3dadi[8] }/>}
      else if(Params.teaName===':sm-fal'){return <Chooseteacher areas={ i3dadi[9] }/>}
      else if(Params.teaName===':hi-math'){return <Chooseteacher areas={ high[0] }/>}
      else if(Params.teaName===':hi-fis'){return <Chooseteacher areas={ high[1] }/>}
      else if(Params.teaName===':hi-che'){return <Chooseteacher areas={ high[2] }/>}
      else if(Params.teaName===':hi-arab'){return <Chooseteacher areas={ high[3] }/>}
      else if(Params.teaName===':hi-ihsa'){return <Chooseteacher areas={ high[4] }/>}
      else if(Params.teaName===':hi-sci'){return <Chooseteacher areas={ high[5] }/>}
      else if(Params.teaName===':hi-liv'){return <Chooseteacher areas={ high[6] }/>}
      else if(Params.teaName===':hi-eng'){return <Chooseteacher areas={ high[7] }/>}
      else if(Params.teaName===':hi-hist'){return <Chooseteacher areas={ high[8] }/>}
      else if(Params.teaName===':hi-fal'){return <Chooseteacher areas={ high[9] }/>}
      else if(Params.teaName===':un-mad'){return <Chooseteacher areas={ univer1[0] }/>}
      else if(Params.teaName===':un-ama'){return <Chooseteacher areas={ univer1[1] }/>}
      else if(Params.teaName===':un-che'){return <Chooseteacher areas={ univer1[2] }/>}
      else if(Params.teaName===':un-ele'){return <Chooseteacher areas={ univer1[3] }/>}
      else if(Params.teaName===':un-mech'){return <Chooseteacher areas={ univer1[4] }/>}
      else if(Params.teaName===':un-comp'){return <Chooseteacher areas={ univer1[5] }/>}
      else if(Params.teaName===':un-micha'){return <Chooseteacher areas={ univer1[6] }/>}
      else if(Params.teaName===':un-power'){return <Chooseteacher areas={ univer1[7] }/>}
      else if(Params.teaName===':un-cars'){return <Chooseteacher areas={ univer1[8] }/>}
      else if(Params.teaName===':un-teba'){return <Chooseteacher areas={ univer1[9] }/>}
      else if(Params.teaName===':un-human'){return <Chooseteacher areas={ univer2[0] }/>}
      else if(Params.teaName===':un-phar'){return <Chooseteacher areas={ univer2[1] }/>}
      else if(Params.teaName===':un-nature'){return <Chooseteacher areas={ univer2[2] }/>}
      else if(Params.teaName===':un-phisics'){return <Chooseteacher areas={ univer3[0] }/>}
      else if(Params.teaName===':un-chemi'){return <Chooseteacher areas={ univer3[1] }/>}
      else if(Params.teaName===':un-maths'){return <Chooseteacher areas={ univer3[2] }/>}
    }
    function scroll(){window.scrollTo({top:'0'})}
  return (
    <>
      <Navbar/>
        {choos()}
        {scroll()}
      <Footer/>
    </>
  )
}

export default Areat