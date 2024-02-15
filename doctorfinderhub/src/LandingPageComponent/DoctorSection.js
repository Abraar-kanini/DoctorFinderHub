import React from 'react'

export default function DoctorSection(props) {
  return (
    <>
    
    <div className=" w-[50vw] h-[20vh] m-auto flex flex-col justify-center items-center mt-3 space-y-4">
          

          <h1 className="font-bold text-xl ">{props.DoctorHeading}</h1>
          <p className="text-[#aaa]">{props.AboutDoctors}</p>

          <div className="w-[10vw] border border-red-500"></div>
    </div>
    
    
    
    </>
  )
}
