import styles from './NavigationMenu.module.scss';

const links = [
  {
    title: 'ErickRuiz.net',
    id: 'content01',
  },
  {
    title: 'About',
    id: 'content02',
  },
  {
    title: 'Volume.com',
    id: 'content03',
  },
  {
    title: 'UCLA',
    id: 'content04',
  },
  {
    title: 'California',
    id: 'content05',
  },
  {
    title: 'Faith',
    id: 'content06',
  },
  {
    title: 'Contact',
    id: 'content07',
  },
  {
    title: 'Hire me',
    id: 'content08',
  },
];

const clearActive = () => {
  const links = document.querySelectorAll(`.${styles.navLinks} a`);

  links.forEach((link) => {
    link.classList.remove(styles.active)
  })
}

export function NavigationMenu() {
  let menu: HTMLElement
  return (
     <div ref={(instance: HTMLDivElement) => {menu = instance}} className={styles.navigationMenu}>
      <div className={styles.navLinks}>
        {links.map((link, i) => {
          return <a
          key={link.title}
          aria-current="page"
          title="About"
          href={'/'}
          className={i === 0 ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector(`#${link.id}`)
            const clickedItem = e.currentTarget;
            if (el !== null) {
              window.scrollTo({top: el.getBoundingClientRect().y + window.scrollY - menu.getBoundingClientRect().height, behavior: "smooth"});
              clearActive();
              clickedItem.classList.add(styles.active)
            }
          }}
        >
          {link.title}
        </a>
        })}
      </div>
    </div>
  );
}
