// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testimonial = () => {
    return (
        <section className="container testimonial_container" id='testimonial'>
            <h2 className="heading">TESTIMONIAL</h2>
            <span className="subheading">RECIEVED FEEDBACKS</span>

            <div className="content grid ">
                <Swiper
                    className="content grid testimonial_flex mySwiper"
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    // mousewheel={true}
                    // keyboard={true}
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <div>
                            <p className="info testimonial_info">Working with Pratap is to give a good impression, I carry out my projects at a good cost, with excellent quality and attention. Great service and recommended.</p>
                            <div className="title stars testimonial_stars"></div>
                            <span className="name">Rohan</span>
                            <span className="client">Client</span>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <p className="info testimonial_info">Working with Pratap is to give a good impression, I carry out my projects at a good cost, with excellent quality and attention. Great service and recommended.</p>
                            <div className="title stars testimonial_stars"></div>
                            <span className="name">Rohan</span>
                            <span className="client">Client</span>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <p className="info testimonial_info">Working with Pratap is to give a good impression, I carry out my projects at a good cost, with excellent quality and attention. Great service and recommended.</p>
                            <div className="title stars testimonial_stars"></div>
                            <span className="name">Rohan</span>
                            <span className="client">Client</span>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
};

export default Testimonial;