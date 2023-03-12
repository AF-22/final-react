import React from 'react';
import Cartwidge from '../Cartwidget'

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav__brand">
                <a className="nav__link" href="#">Mi Marca</a>
            </div>
            <ul className='nav_list'>
                <li>
                <a className="nav__link" href="#">Categoria 1</a>
                </li>
                <li>
                <a className="nav__link" href="#">Categoria 1</a>
                </li>
                <li>
                <a className="nav__link" href="#"><Cartwidge/></a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;