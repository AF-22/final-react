import React, {useState} from 'react';
import Cartwidge from '../Cartwidget'
import '../NavBar/navbar.css'

import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import Logo from '../../images/logo.svg';
import {Link, NavLink} from 'react-router-dom';
import {links} from '../../data'


export const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
          <div className="container nav__container">
            <div className="nav__brand">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
                </Link>
            </div>
                <NavLink className="nav__link" to='/'>INICIO</NavLink>
            <ul className='nav_list'>
                <li>
                <NavLink className="nav__link" to='/categoria/films'>Películas</NavLink>
                </li>
                <li>
                <NavLink className="nav__link" to='/categoria/series'>Series</NavLink>
                </li>
                <li>
                <NavLink className="nav__link" to='/cart'><Cartwidge/></NavLink>
                </li>
                  </ul>

                  <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }

            </ul>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                   isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                }
            </button>
    </div>
        </nav>
  )
}

export default NavBar;