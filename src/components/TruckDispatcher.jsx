import React from 'react'
import company from '../assets/company.png'

const TruckDispatcher = () => {
  return (
    <section>
      <div className='container'>
        <h1 className='font-bold text-3xl text-center'>BU O'ZI QANDAY KASB?</h1>
          <div className='flex justify-center items-center mt-9 space-x-24 '>
            <div className='space-y-4'>
              <h2 className='font-bold text-2xl '>TRUCK DISPATCHER</h2>
              <p>Yuk dispetcheri (AQSh) - transport kompaniyasining <br /> moliyaviy natijasiga bevosita ta'sir ko'rsatadigan xodim.</p>
              <p className=''>Dispetcherlar yuklarni tanlaydi, haydovchilarni <br /> boshqaradi, marshrutlarni quradi va tovarlarni <br /> etkazib berishni nazorat qiladi.</p>
            </div>

            <div>
              <img src={company}alt="" />
            </div>
          </div>

        <ul className='grid grid-cols-3 mt-17  text-center'>
          <li className='rounded-xl ml-32 bg-gray-200 w-70 h-25 text-center flex justify-center items-center'>
            <p>Bu kasbda sizning maoshingizning <br /> chegarasi yo’q</p>
          </li>
          <li className='rounded-xl ml-17 bg-gray-200 w-70 h-25 text-center flex justify-center items-center'>
            <p>Ish jaryonida, ingliz tilida gaplashish, muammolarni hal qilishni o’rganasiz</p>
          </li>
          <li className='rounded-xl bg-gray-200 w-70 h-25 text-center flex justify-center items-center'>
            <p>AQSH’ning har qanday logistika kompaniyasida ishlash imkoniga ega bo’lasiz</p>
          </li>
        </ul>
      </div>
      
    </section>
  )
}

export default TruckDispatcher
