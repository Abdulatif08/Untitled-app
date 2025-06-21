import React, { useState } from "react"; 
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
   { 
    question: "Kursda nimalar bo'ladi?",
    answer: "Ma'lumotlaringizni qoldiring siz bilan bog'lanib barcha savollaringizga javob beramiz. Amerika yoki tashqi bozori dunyodagi eng katta bozor hisoblanadi. Bozor doimo yangi haydovchilarni, ishchilarni, yangi dispatcherlarni talab qiladi." 
  }, 
  {
    question: "Kursda nimalar bo'ladi?", 
    answer: "Ma'lumotlaringizni qoldiring siz bilan bog'lanib barcha savollaringizga javob beramiz. Amerika yoki tashqi bozori dunyodagi eng katta bozor hisoblanadi. Bozor doimo yangi haydovchilarni, ishchilarni, yangi dispatcherlarni talab qiladi." 
  }, 
  { question: "Kursda nimalar bo'ladi?", 
    answer: "Ma'lumotlaringizni qoldiring siz bilan bog'lanib barcha savollaringizga javob beramiz. Amerika yoki tashqi bozori dunyodagi eng katta bozor hisoblanadi. Bozor doimo yangi haydovchilarni, ishchilarni, yangi dispatcherlarni talab qiladi." 
  }, 
  { question: "Kursda nimalar bo'ladi?", 
    answer: "Ma'lumotlaringizni qoldiring siz bilan bog'lanib barcha savollaringizga javob beramiz. Amerika yoki tashqi bozori dunyodagi eng katta bozor hisoblanadi. Bozor doimo yangi haydovchilarni, ishchilarni, yangi dispatcherlarni talab qiladi." 
  }, 
  { question: "Kursda nimalar bo'ladi?",
    answer: "Ma'lumotlaringizni qoldiring siz bilan bog'lanib barcha savollaringizga javob beramiz. Amerika yoki tashqi bozori dunyodagi eng katta bozor hisoblanadi. Bozor doimo yangi haydovchilarni, ishchilarni, yangi dispatcherlarni talab qiladi." 
  }, 
  { question: "Kursda nimalar bo'ladi?", 
    answer: "Ma'lumotlaringizni qoldiring siz bilan bog'lanib barcha savollaringizga javob beramiz. Amerika yoki tashqi bozori dunyodagi eng katta bozor hisoblanadi. Bozor doimo yangi haydovchilarni, ishchilarni, yangi dispatcherlarni talab qiladi." 
  } 
  ];

    export default function FAQ() { 
      const [openIndex, setOpenIndex] = useState(null);

      const toggleFAQ = (index) => {
         setOpenIndex(openIndex === index ? null : index); 
    };

return (
    <div className="max-w-2xl mx-auto p-4 mt-20 "> 
      <h2 className="text-4xl font-bold text-center mb-10 uppercase "> Ko'p beriladigan savollar </h2> 
      <div className="space-y-4"> 
        {faqData.map((faq, index) => (
           <div key={index} className="border rounded-lg overflow-hidden shadow"> 
           <button onClick={() => toggleFAQ(index)} 
           className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200 transition">
            <span className="font-semibold">{faq.question}</span> 
            {openIndex === index ? <ChevronUp /> : <ChevronDown />} 
            </button> 
            {openIndex === index && faq.answer && ( 
              <div className="p-4 text-gray-700 bg-white border-t"> 
              {faq.answer} 
              </div>
               )}
               </div> 
        ))} 
      </div> 
    </div> 
      ); 
    }

