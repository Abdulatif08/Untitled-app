import HumanImg from '../assets/HumanImg.png'
import hat from '../assets/hat.png'
import money from '../assets/money.png'
import money2 from '../assets/money2.png'


const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#0f172a] to-[#111827] text-white py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="flex-1 space-y-10 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold day">
            TRUCK DISPATCHER SOHASINI{" "}
            <span className="text-blue-500">2 OY ICHIDA</span>{" "}
            O‘RGANIB OYIGA <span className="text-blue-400">600$</span> DAN BOSHLAB
            DAROMAD TOPISHNI BOSHLANG
          </h1>

          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-[#1e293b] p-5 flex items-center justify-center rounded-lg relative">
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#384c6d] w-10 h-10 mx-auto rounded-full border-2 border-blue-500 flex items-center justify-center">
                <img
                  src={hat}
                  alt="icon"
                  className="w-[69px] h-[37px] object-contain z-50"
                />
              </div>
              2000 dan ortiq o‘quvchilarimiz natijaga erishishgan
            </div>
            <div className="bg-[#1e293b] p-5 flex items-center justify-center rounded-lg relative">
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#384c6d] w-10 h-10 mx-auto rounded-full border-2 border-blue-500 flex items-center justify-center">
                <img
                  src={money}
                  alt="icon"
                  className="w-[69px] h-[37px] object-contain z-50"
                />
              </div>
              1.5 oy ichida kursni tugatib 400$ dan daromad topasiz
            </div>
            <div className="bg-[#1e293b] p-5 rounded-lg relative">
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-[#384c6d] w-10 h-10 mx-auto rounded-full border-2 border-blue-500 flex items-center justify-center">
                <img
                  src={money2}
                  alt="icon"
                  className="w-[69px] h-[37px] object-contain z-50"
                />
              </div>
              Oylik daromad faqat o‘zingizga bog‘liq bo‘ladi
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-6 rounded-md font-semibold">
            ARIZA QOLDIRISH
          </button>
        </div>

        <div className="hidden lg:block">
          <img
            src={HumanImg}
            alt="png"
            className="w-[490px] h-[606px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
