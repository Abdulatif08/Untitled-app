import React from 'react'
import Teacher from '../imges/teacher1.svg'
import Phone from '../imges/iphone.png'
import { FaCheck } from "react-icons/fa";



const CourseFeatures = () => {

  const features = [
    "Birinchi logistika o’quv markazi",
    "Lucid Academy bitiruvchilarining soni 2000 dan ziyod",
    "Talabalarimizning 70% ish bilan taminlangan ",
    "4 yildan ortiq tajribaga ega ustozlar",
    "HuntMe HR platformasi",
    "CV yozish darsi hamda “Job Interview” Imitatsiyasi",
    "1,5 oy ichida zamonaviy kasbga ega bo’lish imkoniyati",
  ];
  return (
    <div className='container bg-color  '>
      <div>
        <div>
           <h1 className='textsize pt-20 text-center'>birinchi va o’rta osiyodagi eng
            <br />  yirik logistika akademiyasimiz</h1>
            <p className='minTextsize text-center pt-5'>Bozorda 5 yilda beri ishlab kelamiz. Faoliyatimiz davomida <br /> o’zimizning HR va Konsalting platformamizni yaratdik</p>
        </div>
        <div className='px-28 mt-24 flex snap-center gap-20 '>
         <div class="relative size-52 bg-color text-white p-4 rounded-xl text-center ">
          <img  src={Teacher}  alt="mr Ali"  class="absolute -top-10 left-1/2 transform -translate-x-1/2  w-28 h-28 shadow-lg bg-blue-900 rounded-full "/>
       <div class="mt-16"> 
          <h1 class="mt-6 font-bold text-xl">mr. Ali:</h1>
           <p class="text-sm mt-1">6+ yillik tajriba,300 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher</p>
         </div>
         </div>
          <div class="relative size-52 bg-color text-white p-4 rounded-xl text-center ">
          <img  src={Teacher}  alt="mr Ali"  class="absolute -top-10 left-1/2 transform -translate-x-1/2  w-28 h-28 shadow-lg bg-blue-900 rounded-full "/>
          <div class="mt-16"> 
          <h1 class="mt-6 font-bold text-xl">mr. CJ: </h1>
           <p class="text-sm mt-1">4+ yillik tajriba,100 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher</p>
          </div>
          </div>
                <div class="relative size-52 bg-color text-white p-4 rounded-xl text-center ">
                 <img  src={Teacher}  alt="mr Ali"  class="absolute -top-10 left-1/2 transform -translate-x-1/2  w-28 h-28 shadow-lg bg-blue-900 rounded-full "/>
                <div class="mt-16"> 
                   <h1 class="mt-6 font-bold text-xl">mr. Paul:</h1>
               <p class="text-sm mt-1">6+ yillik tajriba,300 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher</p>
              </div>
                 </div>
                   <div class="relative size-52 bg-color text-white p-4 rounded-xl text-center ">
                    <img  src={Teacher}  alt="mr Ali"  class="absolute -top-10 left-1/2 transform -translate-x-1/2  w-28 h-28 shadow-lg bg-blue-900 rounded-full "/>
                    <div class="mt-16"> 
                     <h1 class="mt-6 font-bold text-xl">mr. Steve: </h1>
                     <p class="text-sm mt-1">8+ yillik tajriba,400 dan ziyod o’quvchi, AQSh’ning  logististika kompaniyasida dispetcher</p>
                 </div>
             </div>
        </div>
      </div>
      <div className='items-center justify-between flex px-18 pt-20 bg-color'>
        <div className='w-[50%] '>
            <div>
                 <h3 className='text-3xl text-blue-700'>LUCID LOGISTICS</h3>
                 <h1 className='textsize'>akademiyasining <br />
                   7 ta kuchli tomoni</h1>
            </div>
           <div className='mt-6'>
              {features.map((text, index) => (
            <div key={index} className='flex gap-2 space-y-3 '>
              <button className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center border-2 border-blue-500 hover:scale-110 transition">
                <FaCheck className="text-white text-sm" />
              </button>
              <p className='text-[18px] text-white mt-1'>{text}</p>
            </div>
          ))}
           </div>
        </div>
       <div className='w-[60%]  bg-[#1E1E20] mt-5 '>
              <img className='w-full h-auto' src={Phone} alt="Phone" />
           </div>

      </div>
    </div>
  )
}

export default CourseFeatures
