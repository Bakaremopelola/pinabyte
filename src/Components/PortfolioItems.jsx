// Assuming you have some CSS to style the component
import portfolio1 from "./Assets/image/Portfolio1.svg"
import portfolio2 from "./Assets/image/Portfolio2.svg"
import portfolio3 from "./Assets/image/Portfolio3.svg"
import portfolio4 from "./Assets/image/Portfolio4.svg"
import portfolio5 from "./Assets/image/Portfolio5.svg"
import portfolio6 from "./Assets/image/Portfolio6.svg"

const portfolioItems = [
    {img:portfolio1},
    {img:portfolio2},
    {img:portfolio3},
    {img:portfolio4},
    {img:portfolio5},
    {img:portfolio6}
];

const Portfolios = () => {
  return (
    <section className="portfolio section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center portfolio-heading">
              My Company <span className="highlight">Work</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-buttons text-center">
              <button type="button" className="control" data-filter="all">All</button>
              <button type="button" className="control" data-filter=".design">Design</button>
              <button type="button" className="control" data-filter=".development">Development</button>
              <button type="button" className="control" data-filter=".case">Case Study</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container myMixCont text-center" data-ref="mixitup-container">
        <div className="row d-flex justify-content-center">
          {portfolioItems.map(({img}, index) => (
            <div key={index} className={`col-lg-3 col-md-3 col-sm-6 col-xs-6 portfolio-block ${img.category}`} data-ref="mixitup-target">
              <img src={img} alt={img.title} className="img-fluid" />
              <div className="portfolio-overlay">
                <a href="#">
                  <h3>{img.title}</h3>
                </a>
                <a href="#">
                  <p>Category: {img.category}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolios;
