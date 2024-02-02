import React from 'react'

export default function Testimonials(props) {
  return (
    <>
    
    <div className=" w-[50vw] h-[20vh] m-auto flex flex-col justify-center items-center mt-3 space-y-4">
          

          <h1 className="font-bold text-xl ">{props.Heading}</h1>
         

          <div className="w-[10vw] border border-red-500"></div>
    </div>
    
    </>
  )
}
