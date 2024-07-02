

const Footer = () => {
  return (
    <div>
       
      {/* Footer Start */}
      <section className="footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget-1">
                <img src="./asset/image/Logo.png" alt="" />
                <p>
                  Lorem ipsum dolor sit, consectet dignissim.consectet adipiscing Cras dignissim.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-2">
                <h3>Work</h3>
                <ul>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Dribble</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-3">
                <h3>Company</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Article</a></li>
                  <li><a href="#">Testimonial</a></li>
                  <li><a href="#">FAQ&apos</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget-4">
                <h3>contact Us</h3>
                <p>
                  info@PinaByte.com <br /> 07/409 Jiangxi China
                </p>
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" style={{ borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            <div className="col-md-10">
              <div className="copyright-text">
                <p>
                  Copyright © 2020 PinaByte Design Company, All Rights Reserved.
                  </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="messenger">
                <i className="fab fa-facebook-messenger"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer End */}
      
    </div>
  )
}

export default Footer
