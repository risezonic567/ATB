import React,{useState} from 'react'

export default function VisaServices() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (item)=>{
        setSelectedCard(item);
        setIsOpen(true);
    }

    const closeModal = () => {
        setSelectedCard(null);
        setIsOpen(false);
    }

    const card=[
        {
            title:"Online Visa Services",
            desc:"Our safe and practical online visa services allow you to apply for your visa now, from anywhere. We will help you prepare the required documents, guide you through the entire application process and keep you informed on the status of it. Responsive visa customer service, just a call or message away when you need professional assistance."
        },
        {
            title:"International Visa Services",
            desc:"Planning a trip abroad? We offer a full range of international visa services for many different destinations, whether you are travelling for tourism, business, to visit family or friends, medical reasons and more. We assist travelers to understand the visa requirements of each country, how to avoid mistakes, and do it confidently."
        },
        {
            title:"China travel visa agency",
            desc:"To travel to China you will need to be well documented and follow the visa rules. Our China travel visa service helps you get the necessary paperwork, fill out the application correctly and keeps you informed along the way. Our goal is to make your journey to China smooth, comforting and relaxing."
        },
        {
            title:"Student Visa Services",
            desc:"The first step to study abroad is to select the right visa. Our Student Visa Services can assist prospective students through every step of the way. We will help you to gather all the necessary documents for your application like financial and university documents so that you can submit a complete and correct application on time for your student visa."
        },
        {
            title:"Passport & Visa Services ",
            desc:"ATB your One Stop Solution for All Your Travel Needs with Trusted Passport & Visa Service. Passport & visa services ,document checking & emergency travel advice. Let our professional staff arrange your travel."
        }
    ]
  return (
    
    <div className="bg-gray-50 py-10 px-6">
        {isOpen && (
  <div
    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
    onClick={closeModal}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl"
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 cursor-pointer right-5 text-3xl text-gray-500 hover:text-red-500"
      >
        &times;
      </button>

      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        {selectedCard?.title}
      </h2>

      <p className="text-gray-600 leading-8">
        {selectedCard?.desc}
      </p>

      <button
        onClick={closeModal}
        className="mt-8 bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Close
      </button>
    </div>
  </div>
)}
  <div className="max-w-7xl mx-auto ">

   

    <h2 className="text-4xl md:text-4xl text-center font-bold text-gray-900 mt-4">
      Types of Visa Services We Offer
    </h2>

    <p className="max-w-4xl mx-auto mt-8 text-md text-center font-semibold text-gray-600 leading-9">
    Whether you are travelling for business, education, tourism,or family visits ATB offers fast and reliable visa services for education, business, tourism or visiting family travel. We make your journey easy. Our specialists will walk you through the process so you fill out the application correctly and submit it on time. Our dedicated customer service visa team is here to help you with document verification, application tracking and all the way.
    </p>

     <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-6">
  {card.map((item, index) => (
   <div
  key={index}
  className="group bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
>
  

  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition">
    {item.title}
  </h3>

  <p className="text-gray-600 leading-7 flex-grow">
    {item.desc.substring(0,120)}...
  </p>

  <button   onClick={() => openModal(item)}
  className=" text-blue-600 cursor-pointer font-semibold hover:gap-3 flex items-center gap-2 transition-all">
    Learn More →
  </button>
</div>
  ))}
</div>

  </div>
</div>
  )
}
