
import './App.css';
import NavBar from './LandingPageComponent/NavBar';
import DoctorRegister from './DoctorFlowComponents/DoctorRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './LandingPageComponent/LandingPage';
import VerifyDoctor from './DoctorFlowComponents/VerifyDoctor';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar/><LandingPage/></>,
    },
    {
      path: "/Register",
      element: <><DoctorRegister/></>,
    },
    {
      path: "/verify",
      element: <><VerifyDoctor/></>,
    }
  ]);
  return (
    <>


      {/* <NavBar /> */}
      <RouterProvider router={router} />


    </>
  );
}

export default App;
