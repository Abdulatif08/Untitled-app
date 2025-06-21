import React from 'react'
import man1 from '../assets/man1.svg'
import man2 from '../assets/man2.svg'
import man3 from '../assets/man3.svg'
import man4 from '../assets/man4.svg'

const Course = () => {
  return (
    <section>
      <div className='container '>
        <h1 className='text-4xl font-bold text-center mt-30'>BU KURS SIZ UCHUN, AGAR:</h1>
        <ul className='flex justify-between items-center mt-18 '>
          <li className='text-center space-y-5'>
            <img src={man1} alt="man" className="mx-auto" />
            <p >Maoshi yuqori va qiziqarli ish <br /> topmoqchisiz. Eski ishingizdan <br /> charchagansiz va zerikkansiz</p>
          </li>
          <li className='text-center space-y-5'>
            <img src={man2} alt="man" className="mx-auto" />
            <p>Hozirda ishingiz ham diplomingiz <br /> ham yo’q, lekin yuqori maoshli <br /> ishda ishlamoqchisiz</p>
          </li>
          <li className='text-center space-y-5'>
            <img src={man3} alt="man" className="mx-auto" />
            <p>Ham o’qib ham ishlamoqchisiz, <br /> lekin shunga mos ish topa <br /> olmayapsiz</p>
          </li>
          <li className='text-center space-y-5'>
            <img src={man4} alt="man" className="mx-auto" />
            <p>Kelajakda biznesingizni <br /> ochmoqchisiz, ammo nimadan <br /> boshlashni bilmayapsiz</p>
          </li>
        </ul>
        <div className='text-center mt-15'>
          <button className='px-9 py-5 border bg-[#142978] text-white rounded-xl'>HA, BU KURS MEN UCHUN</button>
        </div>

        <h1 className='text-4xl font-bold text-center mt-20'>Sizda hozir <span className='text-[#142978]'> harakat qilish kerak </span> degan tushuncha mavjud, ammo aniq nima qilish kerakligini bilmaysiz</h1>
      </div>
    </section>
  )
}

export default Course
