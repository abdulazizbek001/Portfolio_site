import './About.css';
import AboutListImgHome from '../../assets/svg/about_list-img-home.svg';
import AboutLocation from '../../assets/svg/about_location.svg';
import AboutData from '../../assets/svg/about_list-data.svg';

function About() {
    return (
        <>
            <div className="container">
                <section className="about">
                    <h2 className="about_title">About Me</h2>
                    <p className="about_text">The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
                    <h2 className="about_title2">Work Experience</h2>
                    <ul className="about_list">
                        <li className="about_item">
                            <div className="about_item-wrap">
                                <h4 className="about_list-title">Junior Web Developer</h4>
                                <div className="about_wrap-box">
                                    <div className="about-box_link">
                                        <img src={AboutListImgHome} alt="img-home" width={16} height={10} />
                                        <a className='about_link' href="https://www.google.com/maps/place/IT+station/@40.7533204,72.3576725,17z/data=!4m6!3m5!1s0x38bcedf11d3d9fb7:0x5196d5bd31d3704b!8m2!3d40.7535805!4d72.3578817!16s%2Fg%2F11s7c6n4lm?authuser=0&entry=ttu" target='_blank'>IT Station</a>
                                    </div>
                                    <div className="about-box_link">
                                        <img src={AboutLocation} alt="img-about" width={16} height={10} />
                                        <a className='about_link' href="https://www.google.com/maps/place/%D0%90%D0%BD%D0%B4%D0%B8%D0%B6%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.7545475,71.7025562,9z/data=!3m1!4b1!4m6!3m5!1s0x38bc939c2cc9f571:0xf677ebc7b76654c8!8m2!3d40.7685941!4d72.236379!16zL20vMDY4OHc2?authuser=0&entry=ttu" target='_blank'>Andijon</a>
                                    </div>
                                </div>
                            </div>
                            <div className="about_demo">
                                <p className="about_list-text">Full Time</p>
                                <div className="about-wrapper">
                                    <img src={AboutData} alt="about-img" width={16} height={12} />
                                    <p className="about_wrapper-text">Apl 2023 - Dec 2023</p>
                                </div>
                            </div>
                        </li>
                        <li className="about_item">
                            <div className="about_item-wrap">
                                <h4 className="about_list-title">Web Development Intern</h4>
                                <div className="about_wrap-box">
                                    <div className="about-box_link">
                                        <img src={AboutListImgHome} alt="img-home" width={16} height={10} />
                                        <a className='about_link' href="#">IonPixelz Web Solutions</a>
                                    </div>
                                    <div className="about-box_link">
                                        <img src={AboutLocation} alt="img-home" width={16}
                                            height={10} />
                                        <a className='about_link' href="#">Bengaluru</a>
                                    </div>
                                </div>
                            </div>
                            <div className="about_demo">
                                <p className="about_list-text">Internship</p>
                                <div className="about-wrapper">
                                    <img src={AboutData} alt="about-img" width={16} height={12} />
                                    <p className="about_wrapper-text">Sep 2021 - Dec 2021</p>
                                </div>
                            </div>
                        </li>
                        <li className="about_item">
                            <div className="about_item-wrap">
                                <h4 className="about_list-title">SEO / SEM Specialist</h4>
                                <div className="about_wrap-box">
                                    <div className="about-box_link">
                                        <img src={AboutListImgHome} alt="img-home" width={16} height={10} />
                                        <a className='about_link' href="#">HAAPS</a>
                                    </div>
                                    <div className="about-box_link">
                                        <img src={AboutLocation} alt="img-home" width={16} height={10} />
                                        <a className='about_link' href="#">Bengaluru</a>
                                    </div>
                                </div>
                            </div>
                            <div className="about_demo">
                                <p className="about_list-text">Internship</p>
                                <div className="about-wrapper">
                                    <img src={AboutData} alt="about-img" width={16} height={12} />
                                    <p className="about_wrapper-text">Sep 2021 - Dec 2021</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2 className="about_title2">Education</h2>
                    <div className="about_item about_item2">
                        <div className="about_item-wrap">
                            <h4 className="about_list-title">Bachelor in Electronics & Communication</h4>
                            <div className="about_wrap-box">
                                <div className="about-box_link">
                                    <img src={AboutListImgHome} alt="img-home" width={16} height={10} />
                                    <a className='about_link' href="#">Bangalore Instutute of Technology</a>
                                </div>
                            </div>
                        </div>
                        <div className="about_demo">
                            <p className="about_list-text">Full Time</p>
                            <div className="about-wrapper">
                                <img src={AboutData} alt="about-img" width={16} height={12} />
                                <p className="about_wrapper-text">Sep 2021 - Dec 2020</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;