import React, { Fragment, ReactElement } from 'react';
import { ContentGrid } from '../components/layout/ContentGrid';
import { Layout } from '../components/layout/Layout';

// import styles from './Scrapbook.module.scss';

export function Scrapbook() {
  let blocks: ReactElement[] = []
  for(let i = 0; i < 24; i += 1) {
    blocks.push(<div key={`gridItem_${i}`}>{`gridItem_${i + 1}`}</div>)
  }
  return (
    <Layout navMenu={<Fragment/>} contentGridSizing={true}>
      <ContentGrid>
        {
          blocks
        }
      </ContentGrid>
    </Layout>
  );
}
