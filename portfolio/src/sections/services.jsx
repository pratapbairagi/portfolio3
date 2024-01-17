

const Services = () => {
    return (
        <section className="container services_container" id="services">
            <h2 className="heading">SERVICES</h2>
            <span className="subheading">SERVICES I OFFER</span>

            <div className="content grid services_grid">
                {/* <div className="title">
                <i className="ri-suitcase-line"></i>
                </div> */}
                <div className="data">
                    <div className="service_card">
                        <i className="ri-palette-line"></i>
                        <div className="card_title title">UI Design</div>
                        <p className="card_info info">Service that provides the best quality and at the request of the client, with professional work and customer support.</p>
                    </div>
                </div>

                <div className="data">
                    <div className="service_card">
                        <i className="ri-collage-line"></i>
                        <div className="card_title title">Backend with Database</div>
                        <p className="card_info info">Service that provides the best quality and at the request of the client, with professional work and customer support.</p>
                    </div>
                </div>

                <div className="data">
                    <div className="service_card">
                        <i className="ri-database-2-line"></i>
                        <div className="card_title title">Dynamic Frontend</div>
                        <p className="card_info info">Service that provides the best quality and at the request of the client, with professional work and customer support.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;