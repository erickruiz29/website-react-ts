import { NavLink } from 'react-router-dom';

import styles from './NavigationMenu.module.scss';

export function NavigationMenu() {
  return (
    <div className={styles.navigationMenu}>
      <div className={styles.navLinks}>
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
