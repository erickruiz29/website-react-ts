import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavigationMenu() {
  return (
    <div className={'navigation-menu'}>
      <div className="nav-links">
        <NavLink to={'/'} title="ErickRuiz.net" exact>
          ErickRuiz.net
        </NavLink>
        <NavLink to={'/about-me'} title="About Me">
          About Me
        </NavLink>
      </div>
    </div>
  );
}
