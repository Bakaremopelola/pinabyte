// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Headervector from "./Assets/image/Headervector.svg"
import discussion from "./Assets/image/discussion.svg"
import web_design from "./Assets/image/web-design.svg"
import meeting from "./Assets/image/meeting.jpg"
// import { data } from './Counter';
// import { slider } from './Counter';
// import { BsArrowLeftCircleFill } from "react-icons/bs"
// import { BsArrowRightCircleFill } from "react-icons/bs"
// import { useState } from 'react';
// import { row } from './Counter';
// import { portfolio } from './Counter';
import ServiceCarousel from './ServiceCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonialSlider from './TestimonialSlider';
import PortfolioSection from './PortfolioSection';
import PartnersSection from './PartnerSection';




const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const handleNext = () => {
       
//     setCurrentSlide(currentSlide === slider.length - 1 ? 0 : currentSlide + 1)

// }
// const handlePrev = () => {

//   setCurrentSlide(currentSlide === 0 ? slider.length - 1 : currentSlide - 1)
  
// }

  return (
    <>
      {/* Header Start */}
      <section className="header ">
       
        {/* Header Banner Start */}
        <div className="container header-content ">
          <div className="row ">
            <div className="col-md-6 centralize">
              <div className="left-content ">
                <h2>Help Your <span className="highlight">Business</span> Growth
                  Up To <span className="highlight">High</span> Level
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo eros, sollicitudin
                  et fringilla id, volutpat id magna.
                </p>
                <div className="call-to-action">
                  <button>Work With Us<FaAngleRight/> </button>
                  <a href="#">View Our Portfolio <i className="fas fa-angle-right"></i></a>
                </div>  
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                 <img src={Headervector} /> 
              </div>
            </div>
          </div>
        </div>
        {/* Header Banner End */}
      </section>
      {/* Header End */}

      {/* Work Process Start */}
      <section className="work-process section-padding" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="process-block">
                <img src={discussion}  /> 
                <h3>Project Discussion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-block">
                 <img src={web_design}  /> 
                <h3>Design & Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-block">
                <img src={web_design}  />
                <h3>Final Delivery</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim.</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-5">
              <img src={meeting} alt="Client discussion" className="img img-fluid" />
            </div>
            <div className="col-md-7 centralize">
              <div className="project-discussion ">
                <h2>Let’s Talk About <span className="highlight">Your Project</span> </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam magna diam, ultricies ut ultricies eu, cursus quis libero.
                  Sed maximus ligula in purus bibendum viverra. Cras sed odio condimentum, finibus sem eu,
                  auctor nisi.
                  Fusce eget nunc tincidunt
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna diam, ultricies ut
                  ultricies eu, cursus quis libero. Sed maximus
                </p>
                <button>Let&apos Talk <i className="fas fa-angle-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process End */}

      {/* Services Start */}
      <section className="services section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading">We Provide a Platform To Easily
              <span className="highlight">Build a Website</span> </h2>
          </div>
        </div>


        <ServiceCarousel />

       

         <TestimonialSlider />

         <PortfolioSection />

         
      <PartnersSection/>


      </section>
    </>
  );
}

export default Home;



