import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="w-[98.8vw]   gap-5 bg-gray-700 flex  text-white">

                    <div className="w-[33.33%]   space-x-6 space-y-4">
                        {/* eslint-disable jsx-a11y/heading-has-content */}
                        <h1></h1>
                        <h1>CATEGORIES</h1>
                        <h2 class="flex items-center"><span class="material-symbols-outlined mr-2">folder</span> Blogs</h2>
                        <h2 class="flex items-center"><span class="material-symbols-outlined mr-2">folder</span> Counsiling</h2>

                        <h2 class="flex items-center"><span class="material-symbols-outlined mr-2">folder</span> Health</h2>

                        <h2 class="flex items-center"><span class="material-symbols-outlined mr-2">folder</span> Kids</h2>



                    </div>
                    <div className="w-[33.33%]  m-auto">
                        <h1 >TAGS</h1>
                        <div className=" flex w-[90%]  m-auto flex-wrap content-center  justify-center gap-5 " >

                            <button className=" rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Beach</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Health</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Holiday</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Information</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Kids</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Music</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Nature</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">RandomStuff</button>
                            <button className="rounded p-1 border border-gray-500 text-gray-400 h-[5vh]">Rock</button>
                        </div>



                    </div>
                    <div className="w-[33.33%]  flex flex-col justify-center items-center gap-14">
                           <h1>Recent Comments</h1>
                           <h5> Aziz Rahman on </h5>
                           <h6>My Kinda People,my kinda place</h6>
                        </div>



                </div>
            </footer>

        </>
    )
}
