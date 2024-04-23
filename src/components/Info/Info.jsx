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
                        <li>
                            <img src={Html} alt="html" width={120} height={120} />

                        </li>
                        <li>
                            <img src={Css} alt="css" width={120} height={120} />

                        </li>
                        <li>
                            <img src={Js} alt="js" width={120} height={120} />

                        </li>
                        <li>

                            <img src={React} alt="react" width={113} height={101} />

                        </li>
                        <li>
                            <img src={Bootstrap} alt="bootstrap" width={88} height={87} />

                        </li>
                        <li>
                            <img src={TawliandCss} alt="tawliand_css" width={131} height={131} />

                        </li>
                        <li>
                            <img src={Scss} alt="scss" width={117} height={87} />

                        </li>
                        <li>
                            <img src={Git} alt="git" width={105} height={105} />

                        </li>
                        <li>

                            <img src={Vscode} alt="vscode" width={112} height={112} />

                        </li>
                        <li>
                            <img src={Github} alt="github" width={88} height={88} />

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Info