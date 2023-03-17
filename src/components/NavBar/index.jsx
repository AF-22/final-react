import React from 'react';
import Cartwidge from '../Cartwidget'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav__brand">
                <NavLink className="nav__link" to='/'>Mi Marca</NavLink>
            </div>
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
        </nav>
    </div>
  )
}

export default NavBar;