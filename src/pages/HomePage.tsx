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

export function HomePage() {
  return (
    <Layout navMenu={<ScrollableNavMenu menuId='homeNav' links={links} />} fixedHeader={true}>
      <div className={styles.parallaxContainer}>
        <div id="content01" className={[styles.parallax, styles.content01].join(" ")}>
            <Content preserveNewlines={true}>{
           `I am a frontend software engineer`
            }</Content>
        </div>
        <div id="content02" className={[styles.parallax, styles.content02].join(" ")} />
        <div id="content03" className={[styles.parallax, styles.content03].join(" ")} />
        <div id="content04" className={[styles.parallax, styles.content04].join(" ")} />
        <div id="content05" className={[styles.parallax, styles.content05].join(" ")} />
        <div id="content06" className={[styles.parallax, styles.content06].join(" ")} />
        <div id="content07" className={[styles.parallax, styles.content07].join(" ")} />
        <div id="content08" className={[styles.parallax, styles.content08].join(" ")} />
        <div id="content09" className={[styles.parallax, styles.content09].join(" ")} />
        </div>
    </Layout>
  );
}
