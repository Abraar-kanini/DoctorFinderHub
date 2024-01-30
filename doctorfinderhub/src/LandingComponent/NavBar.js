import React from 'react'

export default function NavBar() {

    let toggleOpen=()=>{
        const nav = document.getElementById("nav");
        let isTrue = nav.classList.contains("hidden");
        if (isTrue) {
          nav.classList.remove("hidden");
          nav.classList.add("none");
        } else {
          nav.classList.remove("none");
          nav.classList.add("hidden");
        }
    }

  return (
    <>
  <nav className="sticky">
      <div
        class="w-[100vw] h-[10vh] flex justify-between items-center sm:w-[100vw] sm:h-[10vh] sm:flex sm:justify-evenly sm:items-center"
      >
         <h1 className="inline-flex font-bold">DoctorFinderHub <span class="material-symbols-outlined">add_circle</span></h1>

        <ul
          class="hidden sm:flex sm:space-x-9 sm:justify-center sm:items-center font-semibold"
        >
          
          <li><a href="#about">Home</a></li>
          <li><a href="#skills">Doctors</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#project">Book Appointment</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
        <ul class="sm:hidden">
          <li onClick={toggleOpen}>
            <span class="material-symbols-outlined"> menu </span>
          </li>
        </ul>
      </div>
      <div class="w-[100vw] hidden sm:hidden" id="nav">
        <ul class="flex flex-col">
          <li></li>
          
          <li class="text-center"><a href="#about">Home</a></li>
          <li class="text-center"><a href="#skills">Doctors</a></li>
          <li class="text-center"><a href="#service">Services</a></li>
          <li class="text-center"><a href="#project">Book Appointment</a></li>
          <li class="text-center"><a href="#contactus">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}
