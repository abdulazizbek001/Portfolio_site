import './Info.css';
import Html from '../../assets/svg/html.svg';
import Css from '../../assets/svg/css.svg';
import Js from '../../assets/svg/js.svg';
import React from '../../assets/svg/react.svg';
import Bootstrap from '../../assets/svg/bootstrap.svg';
import TawliandCss from '../../assets/svg/tawlind_css.svg';
import Scss from '../../assets/svg/scss.svg';
import Git from '../../assets/svg/git.svg';
import Vscode from '../../assets/svg/vscode.svg';
import Github from '../../assets/svg/github.svg';

function Info() {
    return (
        <>
            <div className="container">
                <div className="info">
                    <h2 className="info_title">My Tech Stack</h2>
                    <p className="info_text"> Technologies I’ve been working with recently</p>
                    <ul className="info_list">
                        <li className='info_item'>
                            <img src={Html} alt="html" width={120} height={120} />
                            <h3>- HTML</h3>
                        </li>
                        <li><hr /></li>
                        <li className='info_item'>
                            <img src={Css} alt="css" width={120} height={120} />
                            <h3>- CSS</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={Js} alt="js" width={120} height={120} />
                            <h3>- JAVASCRIPT</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={React} alt="react" width={120} height={120} />
                            <h3>- REACT</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={Bootstrap} alt="bootstrap" width={120} height={120} />
                            <h3>- BOOTSTRAP</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={TawliandCss} alt="tawliand_css" width={120} height={120} />
                            <h3>- TAWLIAND CSS</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={Scss} alt="scss" width={120} height={120} />
                            <h3>- SCSS/SASS</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={Git} alt="git" width={120} height={120} />
                            <h3>- GIT</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={Vscode} alt="vscode" width={120} height={120} />
                            <h3>- VISUAL STUDIO CODE</h3>
                        </li>
                        <li><hr /></li>

                        <li className='info_item'>
                            <img src={Github} alt="github" width={120} height={120} />
                            <h3>-  GITHUB</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Info