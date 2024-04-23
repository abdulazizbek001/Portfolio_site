import './Hero.css';
import HeroImg from '../../assets/img/image_gihub.png';

function Hero() {
    return (
        <>
            <div className="container">
                <div className="hero">
                    <h1 className="hero_title">Hi 👋, <br /> My name is <br /> <span>Abdulaziz</span> <br /> I'm web developer</h1>
                    <div className='hero_box'>
                        <img className='hero_img' src={HeroImg} alt="img_hero" width={365} height={367} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero