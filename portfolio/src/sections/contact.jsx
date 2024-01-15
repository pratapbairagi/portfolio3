


const Contact = () => {
    return (
        <div className="container contact_container">
            <h2 className="heading">CONTACT</h2>
            <span className="subheading">CONNECT WITH ME</span>

            <div className="content grid contact_grid">
                <div className="data">
                    <div className="title contatc_title">Talk to me</div>

                    <ul className="list">
                        <li>
                            <span>Email</span>
                            <p>pratapbairagi4cgshop@gmail.com</p>
                            <a href=""> Write me <i className="ri-arrow-right-line"></i> </a>
                        </li>

                        <li>
                            <span>Whatsapp</span>
                            <p>+91 8287889123</p>
                            <a href=""> Write me <i className="ri-arrow-right-line"></i> </a>
                        </li>

                        <li>
                            <span>Facebook</span>
                            <p>https://facebook.com/pratap</p>
                            <a href=""> Write me <i className="ri-arrow-right-line"></i> </a>
                        </li>
                       
                    </ul>
                    
                </div>
                
                <div className="data">
                    <div className="title contatc_title">Write your Project</div>

                    <ul className="list">
                        <li>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" placeholder="Enter your name..." id="name" />
                        </li>
                        <li>
                            <label htmlFor="emial">Email</label>
                            <input type="email" placeholder="Enter your email..." />
                        </li>
                        <li>
                            <label htmlFor="contact">Contact no.</label>
                            <input type="tel" placeholder="Enter your contact no." />
                        </li>
                        <li>
                            <label htmlFor="project">Projects</label>
                            <textarea type="text" placeholder="Enter your projects..." ></textarea>
                        </li>
                        <li>
                            <button> Send </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Contact;