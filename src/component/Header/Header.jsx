import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/icon/exchange__logo.png';

import style from './Header.module.css';

const Header = () => {
    return (
       <div className={style.header__wrapper}>
           <div className={style.header__wrapper_item}>
               <div className={style.logo}>
                 <img src={ logo } alt="logo"/>
               </div>
                <h1>Currency Exchange</h1>
           </div>
           <div className={style.header__wrapper_item}>
               <ul className={style.menu}>
                   <li className={style.menu__item}>
                       <NavLink to="/converter" >Converter</NavLink>
                   </li>
                   <li className={style.menu__item}>
                        <NavLink to="/currentExchange">Current Exchange</NavLink>
                   </li>
               </ul>
           </div>
       </div>
    )
}

export default Header;