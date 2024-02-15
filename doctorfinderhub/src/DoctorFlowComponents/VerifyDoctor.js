import React from 'react'
import { useState } from 'react'


function VerifyDoctor() {
    const [token, setToken] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setToken(value);
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://localhost:7224/api/DoctorAuth/DoctorVerify?Token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.status === 200) {
                console.log("Doctor Verified");
            } else {
                console.log("Doctor verification failed");
            }
        } catch (error) {
            console.log("Error occurred while verifying doctor:", error);
        }
    }
    return (
        <>
            <div className="flex justify-center items-center border border-black h-[100vh]">
                <div className="w-[30vw] h-[40vh] border border-gray shadow-xl shadow-gray-500 flex flex-col justify-center items-center gap-5 ">
                    <h2 className="text-gray-700 font-semibold text-center  text-2xl">Check Your E-Mail and Provide The Verification Token </h2>
                    <input type="text" name="Token" id="Token" className="border border-gray-400 rounded-md w-[90%] h-[5vh] focus:border-gray-500 focus:outline-none " onChange={handleInputChange} />
                    <button className="border border-gray-400 w-[90%] rounded-md text-lg font-semibold" onClick={handleSubmit}>Verify</button>
                </div>
            </div>

        </>
    )
}

export default VerifyDoctor
