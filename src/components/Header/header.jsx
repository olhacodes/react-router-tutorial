import React from 'react';
import { NavLink } from "react-router-dom";
import '../../App.css';

function Header() {
  const links = [
    { path: '', text: 'Main' },
    { path: 'products', text: 'Products' },
    { path: 'basket', text: 'Basket' },
  ];

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className='react-router-example'>
      <ul>
        {links.map(link => (
          <li>
            <NavLink to={link.path}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header;