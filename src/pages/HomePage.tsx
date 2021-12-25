import React from 'react';
import { Content } from '../components/layout/Content';
import { Layout } from '../components/layout/Layout';

import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <Layout>
      <div className={styles.parallaxContainer}>
        <div className={[styles.parallax, styles.content01].join(" ")}>
            <Content>{`Some More text
            
            Some more text
            
            
            all more text`}</Content>
        </div>
        <div className={[styles.parallax, styles.content02].join(" ")} />
        <div className={[styles.parallax, styles.content03].join(" ")} />
        <div className={[styles.parallax, styles.content04].join(" ")} />
        <div className={[styles.parallax, styles.content05].join(" ")} />
        <div className={[styles.parallax, styles.content06].join(" ")} />
        <div className={[styles.parallax, styles.content07].join(" ")} />
        <div className={[styles.parallax, styles.content08].join(" ")} />
        <div className={[styles.parallax, styles.content09].join(" ")} />
        </div>
    </Layout>
  );
}
