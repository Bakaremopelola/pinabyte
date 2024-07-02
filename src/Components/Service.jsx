import Group1387 from "./Assets/image/Group1387.png"
import { serviceCards } from "./Counter";
import Group1460 from "./Assets/image/Group1460.png"
import Group1521 from "./Assets/image/Group1521.png"
import Group1538 from "./Assets/image/Group1538.png"

const Service = () => {
  return (
    <>
      {/* Header Start */}
      <section className="header contact-header">
       

        {/* Header Banner Start */}
        <div className="container header-content ">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content ">
                <h2>Our <span className="highlight">Services</span></h2>
                <p>Home / Services</p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <div className="right-content">
                <img src={Group1387} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header End */}

      {/* Services Start */}
      <section className="services section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">We Provide a Platform To Easily<br /><span className="highlight">Build a Website</span></h2>
          </div>
        </div>

        <div className="container">
      <div className="row card-row-gap">
        {serviceCards.map(service => (
          <div key={service.id} className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
            <div className="card service-block-card" style={{ width: "18rem" }}>
              <img src={service.imgSrc} className="card-img-top" alt="service_image" />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <a href={service.link} className="">{service.linkText} <i className="fas fa-angel-right"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        
      </section> 
      {/* Services End */}

      {/* Why choose leadsbee */}
      <section className="service-type section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">Why Choose <span className="highlight">PinaByte</span></h2>
          </div>
        </div>

        <div className="container">
          <div className="row service-type-gap why-choose">
            {/* Analysis */}
            <div className="col-md-6">
              <img src={Group1460} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <h2>Analysis</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="row service-type-gap why-choose">
            {/* UI/UX Design */}
            <div className="col-md-6">
              <h2>UI/UX Design</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="col-md-6">
              <img src={Group1521} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row service-type-gap why-choose">
            {/* Development */}
            <div className="col-md-6">
              <img src={Group1538} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <h2>Development</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose leadsbee */}

      {/* Let's start */}
      <section className="lets-start section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-1">Are You Ready To <span className="highlight">Start A Business?</span></h2>
            <div className="text-center w-100 service-heading py-1" id="bottombutton">
              <h5>We will help you start your business from A to Z</h5>
              <button type="button" className="btn btn-warning">Let&apos Start</button>
            </div>
          </div>
        </div>
      </section>
      {/* Let's start */}

            {/* Best solutions for your business start */}
            <section className="best-solutions">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading py-5">Best Solutions For <span className="highlight">Your Business</span></h2>
          </div>
        </div>
        </section>


     

      
      

  
  </>
  )
}

export default Service;
