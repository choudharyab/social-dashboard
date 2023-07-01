import React, { useState } from 'react'
import {ToggleState} from '../constants/ToggleState';
const Header = () => {
  const  [theme , setTheme] = useState(ToggleState.toggleState.DARK);

  const togglehandler = (e) => {
    theme === ToggleState.toggleState.LIGHT ? setTheme(ToggleState.DARK) : setTheme(ToggleState.toggleState.LIGHT);
    theme  === ToggleState.toggleState.LIGHT ? setLightMode() : setDarkMode();
   
  }

  const setDarkMode = () => {
    document.querySelector('body').classList = ToggleState.toggleState.DARK;
  };
  
  const setLightMode = () => {
    document.querySelector('body').classList = ToggleState.toggleState.LIGHT;
  };
  
  return (
    <header className='header container'>
        <div className='header__title'>
            <h1>Media Dashboard 🔥🔥🔥🔥🔥</h1>
            <span className='header__subtitle'>Total Followers: 23,004</span>
        </div>

        <fieldset 
            className='header__toggle toggle'
            aria-label='theme toggle'
            role ="radiogroup">
                <label htmlFor="dark">Dark<span className='visually-hidden'>on</span></label>
                <div className="toggle__wrapper">
                  <input type="radio" name="theme" id={ToggleState.toggleState.DARK} onClick={togglehandler}/>
                  <input type="radio" name="theme" id={ToggleState.toggleState.LIGHT} onClick = {togglehandler}/>
                  <span aria-hidden="true" className="toggle__background"></span>
                  <span aria-hidden="true" className="toggle__button"></span>
                </div>
        <label htmlFor="light" className="visually-hidden">Dark Mode Off</label>

        </fieldset>
    </header>
  )
}

export default Header;