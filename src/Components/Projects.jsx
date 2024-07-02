
import Group1387 from "./Assets/image/Group1387.png"
// import { project } from './Counter';
import TestimonialSlider from "./TestimonialSlider";
import Portfolios from "./PortfolioItems";

const Projects = () => {
  return (
    <>
      {/* Header Start */}
      <section className="header contact-header">
       
        {/* Header Banner Start */}
        <div className="container header-content ">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content ">
                <h2>Our <span className="highlight">Project</span>
                </h2>
                <p>
                  Home / Project
                </p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <div className="right-content">
                <img src={Group1387} />
              </div>
            </div>
          </div>
        </div>
        {/* Header Banner End */}
      </section>
      {/* Header End */}

      {/* Portfolio Start */}
         <Portfolios />
      {/* Portfolio End */}

      {/* Portfolio Call to Action Start */}
      <section className="section-padding portfolio-call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Any Consultation For Made Creative <br />
                <span className="highlight">Web Design & Development</span>
              </h2>
              <button className="project-button-1">Let&apos Talk <i className="fas fa-angle-right"></i></button>
              <button className="project-button-2">Explore More <i className="fas fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Call to Action End */}
        <TestimonialSlider />

    </>
  );
};

export default Projects;

