import A1 from "./Assets/image/A(1).png"
import A2 from "./Assets/image/A(2).png"
import A3 from "./Assets/image/A(3).png"
import A4 from "./Assets/image/A(4).png"

const partnerImages = [
    {img: A1},
    {img: A2},
    {img: A3},
    {img: A4}
];

const PartnersSection = () => {
    return (
        <section className="partners section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center partner-heading">
                            Business Partner Trusted <span className="highlight">By The World's</span>
                        </h2>
                    </div>
                </div>
                <div className="row mt-5">
                    {partnerImages.map(({img}, index) => (
                        <div key={index} className="col-lg-3 col-md-6 d-flex justify-content-center mb-4">
                            <div className="partner">
                                <img src={img}  className="img-fluid" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PartnersSection;
