

const WhyChooseus = () => {
  const status = [
    {
      value: "100",
      unit: "Ming",
      description: "Amerikadagi mavjud logistika kompaniyalari soni",
    },
    {
      value: "800",
      unit: "Milliard",
      description: "Logistika sohasidagi bir yillik pul aylanmasi hajmi",
    },
    {
      value: "3.5",
      unit: "Million",
      description: "Barcha yuk mashina haydovchilarining soni",
    },
    {
      value: "700",
      unit: "Ming",
      description: "Butun dunyodagi barcha truck dispatcherlarning soni",
    },
    {
      value: "70%",
      unit: "Yuklar",
      description: "Katta yuk mashinalari orqali tashiladi",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          NIMA UCHUN AYAN BU SOHA?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Amerika yuk tashish bozori dunyodagi eng katta bozor hisoblanadi.
          Bozor doimo yangi haydovchilarni, shuningdek, yangi dispetcherlarni
          talab qiladi
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {status.map((item, idx) => (
              <div key={idx} className="w-[287px] px-8 flex flex-col items-center text-center">
                <p className="text-4xl font-extrabold">{item.value}</p>
                <p className="text-lg font-semibold">{item.unit}</p>
                <p className="text-sm font-normal">{item.description}</p>
              </div>
            ))}
        </div>
        <button className="mt-12 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold">
          BEPUL KONSULTATSIYA
        </button>
      </div>
    </section>
  )
}

export default WhyChooseus
