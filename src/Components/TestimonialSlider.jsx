
import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
import client1 from './Assets/image/client.png';
import client2 from './Assets/image/client2.png';
 import coma from './Assets/image/coma.svg';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Set the interval to 10 seconds
  };

  return (
    <section className="testimonial section-padding">
      <div className="container">
        <Slider {...settings}>
          <div className="card col-md-12 mt-2">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center">
                <div className="testimonial-description">
                  <h3>Clients’ Love To Work With Us</h3>
                  <div className="client-meta-data">
                    <h5>John Doe</h5>
                    <p>UI/UX Designer</p>
                    <p className="clients-feedback">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris, et congue magna pretium
                      n. Maecenas ac luctus odio, In ut fermentum lorem. In nulla velit, mauris, et congue magna
                      pretium magna pretium n.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="client-picture">
                  <img src={client1} alt="" className="img-fluid" />
                   <img src={coma} alt="" className="coma" /> 
                </div>
              </div>
            </div>
          </div>

          {/* Add more slides as needed */}
          <div className="card col-md-12 mt-2">
            <div className="row">
              <div className="col-md-7 d-flex flex-column justify-content-center">
                <div className="testimonial-description">
                  <h3>Clients’ Love To Work With Us</h3>
                  <div className="client-meta-data">
                    <h5>John Doe</h5>
                    <p>Web Designer</p>
                    <p className="clients-feedback">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris, et congue magna pretium
                      n. Maecenas ac luctus odio, In ut fermentum lorem. In nulla velit, mauris, et congue magna
                      pretium magna pretium n.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="client-picture">
                  <img src={client2} alt="" />
                   <img src={coma} alt="" className="coma" /> 
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
