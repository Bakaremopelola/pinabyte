
import Group1387 from "./Assets/image/Group1387.png"
import meeting from "./Assets/image/meeting.jpg"

const Blog = () => {
  return (
    <div>


      {/* Header Section */}
      <section className="header contact-header">
        <div className="container header-nav">
          <div className="row">
            <div className="col-md-12">
              {/* Navbar is already included above */}
            </div>
          </div>
        </div>
        <div className="container header-content">
          <div className="row h-100">
            <div className="col-md-6 centralize">
              <div className="left-content">
                <h2>Our <span className="highlight">Blog</span></h2>
                <p>Home / Blog</p>
              </div>
            </div>
            <div className="col-md-6 centralize">
              <div className="right-content">
                <img src={Group1387}alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="latest-blog section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center w-100 service-heading">Latest: <span className="highlight">Blog</span></h2>
          </div>
        </div>
        <div className="container mt-5 blog-container">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="row mt-4" key={index}>
              <div className="col-md-4 centralize">
                <img src={meeting} alt="" className="img-fluid" />
              </div>
              <div className="col-md-8 centralize">
                <div className="blog-post">
                  <div className="blog-category">
                    <p>Web Design</p>
                  </div>
                  <div className="blog-content">
                    <a href="./service_details.html"><h2 className="blog-title">Business contents insurance is a type of business.</h2></a>
                    <p className="blog-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus cursus fringilla. Duis non viverra arcu. Maecenas accumsan bibendum dui nec feugiat. Quisque faucibus fringilla euismod.</p>
                  </div>
                  <div className="blog-meta">
                    <h3>Donald Barnhart</h3>
                    <p className="date">22, November 2020</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row mt-5 justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="pagination">
                <ul>
                  <li className="previous"><a href="#"><i className="fas fa-angle-left"></i></a></li>
                  <li><a href="#">01</a></li>
                  <li><a href="#">02</a></li>
                  <li><a href="#">03</a></li>
                  <li className="next"><a href="#"><i className="fas fa-angle-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="container mt-5">
        <div className="row">
          <h2 className="text-center w-100 service-heading">Are You Ready To <span className="highlight">Start A Business?</span></h2>
          <p className="sub-heading text-center w-100">We Will Help You To Your Business From A to Z.</p>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <form action="" method="" id="newsletter-form">
              <div className="form-group d-flex justify-content-center">
                <label htmlFor="client-mail"></label>
                <input type="email" className="form-control" id="client-mail" name="client-mail" placeholder="Enter Your Email" required />
                <button type="submit">Get Started</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div> 
  );
};

export default Blog;



