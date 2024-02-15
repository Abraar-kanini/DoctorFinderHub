import React from 'react'
import { Link } from 'react-router-dom';

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
        className="w-[90vw] h-[10vh] flex justify-between items-center sm:w-[90vw] sm:h-[10vh] sm:flex sm:justify-evenly sm:items-center"
      >
         <h1 className="inline-flex font-bold">DoctorFinderHub <span className="material-symbols-outlined">add_circle</span></h1>

        <ul
          className="hidden sm:flex sm:space-x-9 sm:justify-center sm:items-center font-semibold"
        >
          
          <li><Link to="/Register">Home</Link></li>
          <li><Link to="/Register">Doctors</Link></li>
          <li><Link to="/Register">Services</Link></li>
          <li><Link to="/Register">Book Appointment</Link></li>
          <li><Link to="/Register">Contact Us</Link></li>
        </ul>
        <ul className="sm:hidden">
          <li onClick={toggleOpen}>
            <span className="material-symbols-outlined"> menu </span>
          </li>
        </ul>
      </div>
      <div className="w-[100vw] hidden sm:hidden" id="nav">
        <ul className="flex flex-col">
          <li></li>
          
          <li className="text-center"><Link to="/Register">Home</Link></li>
          <li className="text-center"><Link to="/Register">Doctors</Link></li>
          <li className="text-center"><Link to="/Register">Services</Link></li>
          <li className="text-center"><Link to="/Register">Book Appointment</Link></li>
          <li className="text-center"><Link to="/Register">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}
