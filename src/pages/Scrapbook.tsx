import React, { Fragment, ReactElement, useState } from 'react';
import { ContentGrid } from '../components/layout/ContentGrid';
import { Layout } from '../components/layout/Layout';
import { Frame } from '../components/ui/Frame';

import styles from './Scrapbook.module.scss';
import imageSrc from './../assets/images/01.jpg';
import { FrameModal, IFrameModalProps } from '../components/ui/FrameModal';

export function Scrapbook() {
  const [modalProps, setModalProps] = useState<IFrameModalProps | undefined>(
    undefined
  );
  let hasTriggered = false

  let blocks: ReactElement[] = [];
  for (let i = 1; i <= 24; i += 1) {
    blocks.push(
      <Frame
        key={i}
        multiplier={i * 100}
        imgSrc={imageSrc}
        description={`grid item ${i}`}
        randRotation={true}
        onClick={() => {
          setModalProps({
            imgSrc: imageSrc,
            description: `grid item ${i}`,
            overlayClick: () => {
              setModalProps(undefined);
            },
          });
        }}
      />
    );
  }
  return (
    <Layout navMenu={<Fragment />} contentGridSizing={true}>
      <ContentGrid classes={[styles.scrapbook]}>{blocks}</ContentGrid>
      {modalProps && <FrameModal {...modalProps} />}
    </Layout>
  );
}
