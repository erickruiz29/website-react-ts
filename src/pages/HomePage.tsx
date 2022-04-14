import React from 'react';
import { Content } from '../components/layout/Content';
import { Layout } from '../components/layout/Layout';
import { ScrollableNavMenu } from '../components/layout/NavigationMenu';

import styles from './HomePage.module.scss';

const links = [
  {
    title: 'ErickRuiz.net',
    id: 'content01',
  },
  {
    title: 'Projects',
    id: 'content03',
  },
  /*{
    title: 'Fun',
    id: 'content05',
  },*/
  /*{
    title: 'Faith',
    id: 'content07',
  },*/
  {
    title: 'Contact',
    id: 'content05',
  },
];

export function HomePage() {
  return (
    <Layout
      navMenu={<ScrollableNavMenu menuId="homeNav" links={links} />}
      fixedHeader={true}
    >
      <div className={styles.parallaxContainer}>
        <div
          id="content01"
          className={[styles.parallax, styles.content01].join(' ')}
        >
          <Content preserveNewlines={true}>
            {<div className={styles.title}>Erick Ruiz</div>}
          </Content>
          <Content preserveNewlines={true}>
            <div className={styles.emphasisBig}>{`W`}</div>
            <span>{`elcome to my personal website. A space to showcase myself, my interests and work. Feel free to look around.`}</span>
          </Content>
          <Content
            preserveNewlines={true}
          >{`I am a frontend software engineer`}</Content>
        </div>
        <div
          id="content02"
          className={[styles.parallax, styles.content02].join(' ')}
        />
        <div
          id="content03"
          className={[styles.parallax, styles.content03].join(' ')}
        >
          <Content preserveNewlines={true}>
            <div className={styles.columnContainer}>
              <a className={styles.titleLink} href={'/scrapbook'}>
                Scrapbook project
              </a>
              <div className="">{`Project inspired by my brother Bryan Ruiz's project. (link coming soon). This project tries to tackle generating new images and block areas dynamically by a user rather than programmatically.`}</div>
            </div>
          </Content>
          <Content preserveNewlines={true}>
            <div className={styles.columnContainer}>
              <a
                className={styles.titleLink}
                href={'https://victory-lock-control.herokuapp.com'}
                rel={"noreferrer"}
                target={"_blank"}
              >
                Victory Lock Control - business website
              </a>
              <div className="">{`Designed and implemented business website in NextJS over the course of two weeks. (still in progress)`}</div>
            </div>
          </Content>
        </div>
        <div
          id="content04"
          className={[styles.parallax, styles.content04].join(' ')}
        />
        <div
          id="content05"
          className={[styles.parallax, styles.content05].join(' ')}
        />
        {/*<div
          id="content06"
          className={[styles.parallax, styles.content06].join(' ')}
        />
        <div
          id="content07"
          className={[styles.parallax, styles.content07].join(' ')}
        />*/}
        {/*<div
          id="content08"
          className={[styles.parallax, styles.content08].join(' ')}
        />
        <div
          id="content09"
          className={[styles.parallax, styles.content09].join(' ')}
        />{*/}
      </div>
    </Layout>
  );
}
