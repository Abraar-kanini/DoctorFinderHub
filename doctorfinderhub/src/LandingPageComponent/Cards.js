import React from 'react'

export default function Cards(props) {
  return (
    <>
      
      <div className=" w-[20vw]  border border-white shadow-lg shadow-gray-500/50">
        <div class="border border-white w-full  flex justify-center items-center">
          <img src={props.doctorimage} alt="DoctorCard" class="w-full h-full object-cover" />
        </div>
        <div className="space-x-3 space-y-2">
          {/* eslint-disable jsx-a11y/heading-has-content */}
          <h1></h1>
          <h1 className="text-[#01579b]">{props.doctorName}</h1>
          <h6 className="text-[#aaa]">{props.domain}</h6>
          <p>{props.about}</p>
        </div>


      </div>

    </>
  )
}
