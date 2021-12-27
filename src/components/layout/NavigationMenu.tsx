import styles from './NavigationMenu.module.scss';

const clearActive = () => {
  const links = document.querySelectorAll(`.${styles.navLinks} a`);

  links.forEach((link) => {
    link.classList.remove(styles.active);
  });
};

export interface INavLinks {
  title: string;
  id: string;
}

export interface INavMenuProps {
  menuId: string;
  links: INavLinks[];
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function NavigationMenu(props: INavMenuProps) {
  return (
    <div id={props.menuId} className={styles.navigationMenu}>
      <div className={styles.navLinks}>
        {props.links.map((link, i) => {
          return (
            <a
              key={link.title}
              data-content-id={link.id}
              title={link.title}
              href={'/'}
              className={i === 0 ? styles.active : ''}
              onClick={props.onClick}
            >
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function ScrollableNavMenu(props: INavMenuProps) {
  return (
    <NavigationMenu
      {...{
        ...props,
        onClick: (e) => {
          e.preventDefault();
          const link = e.currentTarget;
          const menu = document.querySelector(`#${props.menuId}`);
          const content = document.querySelector(`#${link.getAttribute("data-content-id")}`);
          if (content !== null && menu !== null) {
            window.scrollTo({
              top:
              content.getBoundingClientRect().y +
                window.scrollY -
                menu.getBoundingClientRect().height,
              behavior: 'smooth',
            });
            clearActive();
            link.classList.add(styles.active);
          }
        },
      }}
    />
  );
}
