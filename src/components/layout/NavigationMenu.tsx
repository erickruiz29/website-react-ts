import styles from './NavigationMenu.module.scss';

const links = [
  {
    title: 'ErickRuiz.net',
    id: 'content01',
  },
  {
    title: 'Work',
    id: 'content03',
  },
  {
    title: 'Fun',
    id: 'content05',
  },
  {
    title: 'Faith',
    id: 'content07',
  },
  {
    title: 'Contact',
    id: 'content09',
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
