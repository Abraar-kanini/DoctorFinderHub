
import './App.css';
import Cards from './LandingComponent/Cards';
import DoctorSection from './LandingComponent/DoctorSection';
import Footer from './LandingComponent/Footer';
import HospitalDepartment from './LandingComponent/HospitalDepartment';
import LatestNewsSection from './LandingComponent/LatestNewsSection';
import NavBar from './LandingComponent/NavBar';
import Service from './LandingComponent/Service';
import SwiperSection from './LandingComponent/SwiperSection';
import TestimonialSwiper from './LandingComponent/TestimonialSwiper';
import Testimonials from './LandingComponent/Testimonials';


function App() {
  return (
    <>


      <NavBar />

      <SwiperSection />

      <DoctorSection DoctorHeading="OUR DOCTORS" AboutDoctors="Our doctors are specialized in their field and have more than 10 years of experiences." />


      <div className="flex mt-9  gap-11  w-[90vw] m-auto ">
        <Cards doctorimage="DoctorCard1.jpg" doctorName="Dr.Veranda Tanumihardja" domain="Pulmonary" about="Veranda was born and raised in Jakarta, Indonesia. He graduated from the University" />
        <Cards doctorimage="DoctorCard2.jpg" doctorName="Dr. Kathryn Wood" domain="Pulmonary" about="Kathryn was born and raised in Indonesia, North Way Indonesia He graduated from the University..." />
        <Cards doctorimage="DoctorCard3.jpg" doctorName="Dr. Hooman Azmi" domain="Dental" about="Hooman was born and raised in Indonesia, North Way Indonesia He graduated from the University" />
        <Cards doctorimage="DoctorCard4.jpg" doctorName="Dr. Peter Parker" domain="Neurologist" about="Parker was born and raised in UK, North Way Australia He graduated from the University of..." />

      </div>

      <Testimonials Heading="TESTIMONIALS" />

      <TestimonialSwiper />

      <Testimonials Heading="OUR SERVICES" />


      <div className=" w-[85vw] m-auto flex  gap-10">


        <Service ServiceImage="ServiceImage.jpg" ServiceName="Nephrologist Care" AboutService="Tell me why, I love you like I do. Tell me who, could stop my..." />
        <Service ServiceImage="ServiceImage2.jpg" ServiceName="Eye Care" AboutService="Well we're movin' on up, to the east side. To a deluxe apartment in the..." />
        <Service ServiceImage="ServiceImage3.jpg" ServiceName="Pediatrician Clinic" AboutService="My kinda people, my kinda place. There's something special about this place. Got no reason..." />
        <Service ServiceImage="ServiceImage4.jpg" ServiceName="Prenatal Care" AboutService="In an age when nature and magic rule the world, there is an extraordinary legend:..." />


      </div>


      <DoctorSection DoctorHeading="LATEST NEWS" AboutDoctors="Latest up-to-date information from our public relation department." />



      <div className=" w-[85vw] m-auto flex  gap-10">


        <LatestNewsSection NewsImage="NewsImage1.jpg" NewsName="Together we can do so much" AboutNews="Chosen from among all others by the Immortal Elders - Solomon, Hercules, Atlas, Zeus, Achilles, Mercury..." Date="Apr 8, 2016" />
        <LatestNewsSection NewsImage="NewsImage2.jpg" NewsName="The Three Musketeers Surgical Team" AboutNews="One thousand years ago, superstition and the sword ruled. It was a time of darkness. It.." Date="Apr 8, 2016" />
        <LatestNewsSection NewsImage="NewsImage3.jpg" NewsName="Accredited surgical facility" AboutNews="Since the dawn of time, there has been a process to developing web presentations - you..." Date="Apr 8, 2016" />
        <LatestNewsSection NewsImage="NewsImage4.jpg" NewsName="Health checks for babies" AboutNews="Somewhere out in space live The Herculoids! Zok, the laser-ray dragon! Igoo, the giant rock ape!..." Date="Apr 8, 2016" />


      </div>

      <Testimonials Heading="HOSPITAL DEPARTMENTS" />

      <div className="w-[90vw]   m-auto flex flex-wrap gap-9 mb-7">

        <HospitalDepartment DepartmentImage="Cardiology.jpg" DepartmentName="Cardiology" AboutDepartment="Here's the story of a lovely lady, who was bringing up three very lovely..." />

        <HospitalDepartment DepartmentImage="Dental.jpg" DepartmentName="Dental" AboutDepartment="We never thought of findin' a place where we belong. Don't have to stand..." />


        <HospitalDepartment DepartmentImage="Neurologist.jpg" DepartmentName="Neurologist" AboutDepartment="You unlock this door with the key of imagination. Beyond it is another dimension:...  " />


        <HospitalDepartment DepartmentImage="Pediatric.jpg" DepartmentName="Pediatric" AboutDepartment="One thousand years ago, superstition and the sword ruled. It was a time of..." />

        <HospitalDepartment DepartmentImage="Pulmonary.jpg" DepartmentName="Pulmonary" AboutDepartment="Life is like a hurricane here in Duckburg. Race cars, lasers, aeroplanes - it's..." />

        <HospitalDepartment DepartmentImage="Traumatology.jpg" DepartmentName="Traumatology" AboutDepartment="Your tread must be light and sure, as though your path were upon rice..." />

        <HospitalDepartment DepartmentImage="Urology.jpg" DepartmentName="Urology" AboutDepartment="They're creepy and they're kooky, mysterious and spooky. They're all together ooky, the Addams..." />


        <HospitalDepartment DepartmentImage="Xray.jpg" DepartmentName="Xray" AboutDepartment="I bet we been together for a million years, And I bet we'll be..." />

      </div>


      <Footer  />


    </>
  );
}

export default App;
