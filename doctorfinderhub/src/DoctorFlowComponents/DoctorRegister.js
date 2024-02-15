import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function DoctorRegister() {
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        doctorName: "",
        email: "",
        doctorSpecialist: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPostData({
            ...postData,
            [name]: value
        });
    }

    const HandleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('doctorName', postData.doctorName);
        formData.append('email', postData.email);
        formData.append('doctorSpecialist', postData.doctorSpecialist);
        formData.append('password', postData.password);
        formData.append('confirmPassword', postData.confirmPassword);
        try {
            const response = await fetch('https://localhost:7224/api/DoctorAuth/DoctorRegister', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            console.log("Form Submitted");
            console.log(response.status);
            console.log(response.statusText);
            if (response.status === 200) {
                // Redirect to VerifyComponent upon successful response
                navigate("/verify");
            }
        }
        catch (error) {

            console.log(error)

        }


    }

    console.log(postData);

    return (
        <>
            <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center  ">

                <h1 className="text-center text-2xl font-semibold mt-20 ">Doctor Sign Up Form</h1>
                <div className="w-[25vw] h-[70vh] border border-y-white shadow-2xl m-auto flex flex-col gap-12 flex-wrap justify-center items-center  ">
                    <div className="inputs w-[100%]   ">

                        <form action="" className="flex flex-col gap-8 justify-center items-center flex-wrap">
                            <input className="border border-gray-400 rounded-md h-[5vh] w-[90%] focus:border-gray-500 focus:outline-none" type="text" name="doctorName" id="doctorName" placeholder="DOCTOR NAME" onChange={handleInputChange} />
                            <input className="border border-gray-400 rounded-md w-[90%] h-[5vh] focus:border-gray-500 focus:outline-none" type="email" name="email" id="email" placeholder="DOCTOR E-MAIL" onChange={handleInputChange} />
                            <input className="border border-gray-400 rounded-md w-[90%] h-[5vh] focus:border-gray-500 focus:outline-none" type="text" name="doctorSpecialist" id="doctorSpecialist" placeholder='DOCTOR SPECIALIST' onChange={handleInputChange} />
                            <input className="border border-gray-400 rounded-md w-[90%] h-[5vh] focus:border-gray-500 focus:outline-none" type="password" name="password" id="password" placeholder='PASSWORD' onChange={handleInputChange} />
                            <input className="border border-gray-400 rounded-md w-[90%] h-[5vh] focus:border-gray-500 focus:outline-none" type="password" name="confirmPassword" id="confirmPassword" placeholder="CONFIRM PASSWORD" onChange={handleInputChange} />
                            <span><input className="border border-gray-400" type="checkbox" name="" id="" /> I Agree To The Terms And The Conditions</span>
                            <button className="border border-gray-400 w-[90%] rounded-md text-lg font-semibold" onClick={HandleSubmit}> Sign Up</button>
                            <h1>Dont Have An Account? Login Now!</h1>
                        </form>


                    </div>
                </div>


            </div>
        </>
    )
}

export default DoctorRegister
