
import './App.css';
import Cards from './LandingComponent/Cards';
import DoctorSection from './LandingComponent/DoctorSection';
import NavBar from './LandingComponent/NavBar';
import SwiperSection from './LandingComponent/SwiperSection';
import TestimonialSwiper from './LandingComponent/TestimonialSwiper';
import Testimonials from './LandingComponent/Testimonials';


function App() {
  return (
    <>


      <NavBar />

      <SwiperSection />

      <DoctorSection/>
      <div className="flex mt-9  gap-11  w-[90vw] m-auto ">
        <Cards doctorimage="DoctorCard1.jpg" doctorName="Dr.Veranda Tanumihardja" domain="Pulmonary" about="Veranda was born and raised in Jakarta, Indonesia. He graduated from the University" />
        <Cards doctorimage="DoctorCard2.jpg" doctorName="Dr. Kathryn Wood" domain="Pulmonary" about="Kathryn was born and raised in Indonesia, North Way Indonesia He graduated from the University..." />
        <Cards doctorimage="DoctorCard3.jpg" doctorName="Dr. Hooman Azmi" domain="Dental" about="Hooman was born and raised in Indonesia, North Way Indonesia He graduated from the University" />
        <Cards doctorimage="DoctorCard4.jpg" doctorName="Dr. Peter Parker" domain="Neurologist" about="Parker was born and raised in UK, North Way Australia He graduated from the University of..." />

      </div>

      <Testimonials Heading="TESTIMONIALS"/>

      <TestimonialSwiper/>

      <Testimonials Heading="OUR SERVICES"/>

      


    </>
  );
}

export default App;
