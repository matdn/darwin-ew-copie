import logo from '../assets/webfactory.svg';
import '../style/style.css';
import { useEffect } from 'react';
import { useState } from 'react';
function Nav() {
    
    const [darkMode, setDarkMode] = useState('DarkMode');

    function handleClick(){
        setDarkMode(darkMode === "DarkMode" ? "LightMode" : "DarkMode");
    }
    return (
        <div className="Nav panel">
            <div className="navFlex">
                <nav className='navStarter'>
                    <img src={logo} className="logo" alt="logo-darwin" />
                    {/* <ul>
                        <li>Qui sommes nous ?</li>
                        <li>Nos propositions</li>
                        <li>Notre travail</li>
                        <div className="NavSeparator"></div>
                        <li>Le shop</li>
                    </ul>
                    <ul>
                        <li>Nous rencontrer</li>
                    </ul> */}
                    
                    {/* <select>
                        <option value="fr">fr</option>
                        <div className="NavSeparatorLanguages"></div>
                        <option value="en">en</option>
                    </select> */}

                    <div className="darkMode">
                        <h3>{darkMode}</h3>
                        <div className="selectorDarkMode" onClick={handleClick}>
                            <div className={darkMode}></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Nav;
