import portfolio1 from "./Assets/image/Portfolio1.svg"
import portfolio2 from "./Assets/image/Portfolio2.svg"
import portfolio3 from "./Assets/image/Portfolio3.svg"
import portfolio4 from "./Assets/image/Portfolio4.svg"
import portfolio5 from "./Assets/image/Portfolio5.svg"
import portfolio6 from "./Assets/image/Portfolio6.svg"

const portfolioItems = [
    {
        id: 1,
        imageSrc: portfolio1,
        className: 'img-fluid design',
        filterClass: 'design',
        alt: 'Portfolio 1'
    },
    {
        id: 2,
        imageSrc: portfolio2,
        className: 'img-fluid development',
        filterClass: 'development',
        alt: 'Portfolio 3'
    },
    {
        id: 3,
        imageSrc: portfolio3,
        className: 'img-fluid brand',
        filterClass: 'brand',
        alt: 'Portfolio 4'
    },
    {
        id: 4,
        imageSrc: portfolio4,
        className: 'img-fluid photos',
        filterClass: 'photos',
        alt: 'Portfolio 5'
    },
    {
        id: 5,
        imageSrc: portfolio5,
        className: 'img-fluid development',
        filterClass: 'development',
        alt: 'Portfolio 2'
    },
    {
        id: 6,
        imageSrc: portfolio6,
        className: 'img-fluid seo',
        filterClass: 'seo',
        alt: 'Portfolio 6'
    }
];

const PortfolioSection = () => {
    return (
        <section className="portfolio section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center portfolio-heading">My Company <span className="highlight">Work</span></h2>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="portfolio-buttons text-center">
                            <button type="button" className="control" data-filter="all">All</button>
                            {portfolioItems.map(item => (
                                <button key={item.id} type="button" className="control" data-filter={`.${item.filterClass}`}>{item.filterClass}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {portfolioItems.map(item => (
                        <div key={item.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <a href="#"><img src={item.imageSrc} className={item.className} data-ref="mixitup-target" alt={item.alt} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;
