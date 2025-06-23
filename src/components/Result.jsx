import React from 'react'

const Result = () => {
  return (
    <div className="container">
      <div className="result-section">
        <div className='topic'>
          <h1>kursda nimalar bo’ladi?</h1>
        </div>
        <div className='cards'>
          <div className='card'>
            <span>1</span>
            <h2>Amaliy darslar</h2>
            <p>
              18 ta amaliy va nazariy darslar<br />
              CV yozish haqidagi dars<br />
              JOB interview ga ega bo’lasiz
            </p>
          </div>
          <div className='card'>
            <span>2</span>
            <h2>Ingliz tili</h2>
            <p>
              O‘qish davomida siz o’zingizning ingliz tili darajangizni ham oshirish imkoniyatiga ega bo’lasiz
            </p>
          </div>
          <div className='card'>
            <span>3</span>
            <h2>Amalyiot</h2>
            <p>
              Tajribali ustozlar, kursdan olgan bilimlaringizni amaliyotda qo’llashga yordam berishadi
            </p>
          </div>
          <div className='card'>
            <span>4</span>
            <h2>Doimiy qo’llav quvatlash</h2>
            <p>
              Kurs jarayonida va kursdan so’ng ham sizni doimiy ravishda qo’llab-quvvatlab turuvchi “SUPPORT” jamoamiz bor
            </p>
          </div>
          <div className='card'>
            <span>5</span>
            <h2>Sertifikat</h2>
            <p>
              Kurs so’ngida sizga maxsus sertifikat taqdim etiladi. Ushbu hujjat ish topishingizda yordam beradi
            </p>
          </div>
          <div className='card'>
            <span>6</span>
            <h2>Ish bilan ta’minlash</h2>
            <p>
              Kursni muvaffaqiyatli yakunlagan o’quvchilarni ishga kirishiga bizning jamoa yordam beradi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
