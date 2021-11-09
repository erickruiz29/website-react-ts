import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavigationMenu() {
  return (
    <div className={'navigationMenu'}>
      <div className="erick-ruiz-link">
        <NavLink to={'/'}>Erick Ruiz</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to={'/'} exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/about-me'}>About Me</NavLink>
        </li>
      </ul>
    </div>
  );
}
