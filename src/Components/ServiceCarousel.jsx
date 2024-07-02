
import { Carousel } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import webdesign1 from "./Assets/image/web-design-concepts-with-blurred-background.jpg"
import webdesign2 from "./Assets/image/website-design-content-layout-graphic.png"
import webdesign3 from "./Assets/image/website-template-design-laptop-screen.png"

const ServiceCarousel = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row mx-auto my-auto">
        <Carousel className="w-100">
          <Carousel.Item>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mx-auto">
              <div className="card service-card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src={webdesign1}
                  alt="UI/UX"
                />
                <div className="card-body bg-white">
                  <h5 className="card-title">UI/UX</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectet adipiscing dignissim. Consectet.</p>
                  <a href="#" className="service-link">
                    Learn More <FaAngleRight />
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mx-auto">
              <div className="card service-card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src={webdesign2}
                  alt="Website Optimization"
                />
                <div className="card-body bg-white">
                  <h5 className="card-title">Website Optimization</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectet adipiscing dignissim. Consectet.</p>
                  <a href="#" className="service-link">
                    Learn More <FaAngleRight />
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mx-auto">
              <div className="card service-card" style={{ width: '18rem' }}>
                <img
                  className="card-img-top"
                  src={webdesign3}
                  alt="Social Media Marketing"
                />
                <div className="card-body bg-white">
                  <h5 className="card-title">Social Media Marketing</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectet adipiscing dignissim. Consectet.</p>
                  <a href="#" className="service-link">
                    Learn More <FaAngleRight />
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceCarousel;
