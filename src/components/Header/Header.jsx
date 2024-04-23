import './Header.css';
import HeaderGithub from '../../assets/svg/Github_Header.svg';
import HeaderTwitter from '../../assets/svg/Twitter_Header.svg';
import HeaderLinkedin from '../../assets/svg/Linkedin_Header.svg';
import HeaderMediaMenu from '../../assets/svg/media-menu.svg';
import { NavLink } from 'react-router-dom';

function Header() {



    return (
        <header className="header">
            <div className="container">
                <div className="header_box">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_ZXpxxNGLGxy_9H9vyHQRzo8l5_TejkDKA&s' alt="logo" width={50} height={70} />
                    <div>
                        <ul className="header_list">
                            <li>
                                <NavLink to="/" className="header_link">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="header_link">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/the_stack" className="header_link">Tech Stack</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className="header_link">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="header_link">Contact</NavLink>
                            </li>
                        </ul>
                        <ul className="header_list-right">
                            <li className='header_item-right'>
                                <a href="https://github.com/abdulazizbek001" target='_blank' className="header_link-right">
                                    <img src={HeaderGithub} alt="github" width={30} height={30} />
                                </a>
                            </li>
                            <li className='header_item-right'>
                                <a href="https://vercel.com/abdulaziz1" target='_blank' className="header_link-right">
                                    <img src={HeaderTwitter} alt="twitter" width={32} height={32} />
                                </a>
                            </li>
                            <li className='header_item-right'>
                                <a href="https://www.linkedin.com/in/abdulaziz-olimjonov-3177b72a5/" target='_blank' className="header_link-right">
                                    <img src={HeaderLinkedin} alt="linkedin" width={30} height={30} />
                                </a>
                            </li>
                            <li>
                                <button className='header_btn'>
                                    <img src={HeaderMediaMenu} alt="media-menu" width={16} height={16} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header