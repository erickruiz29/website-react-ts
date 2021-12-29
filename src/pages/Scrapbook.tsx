import React, { Fragment, ReactElement, useState } from 'react';
import { ContentGrid } from '../components/layout/ContentGrid';
import { Layout } from '../components/layout/Layout';
import { Frame } from '../components/ui/Frame';

import styles from './Scrapbook.module.scss';
import imageSrc from './../assets/images/01.jpg';
import { FrameModal, IFrameModalProps } from '../components/ui/FrameModal';
import { BlockFrame } from '../components/ui/BlockFrame';

export function Scrapbook() {
  const [modalProps, setModalProps] = useState<IFrameModalProps | undefined>(
    undefined
  );

  const showImgModal = (src: string, desc: string, isBlockFrame = false) => {
    setModalProps({
      imgSrc: src,
      description: desc,
      isBlockFrame: isBlockFrame,
      overlayClick: () => {
        setModalProps(undefined);
      },
    });
  };

  let blocks: ReactElement[] = [];
  for (let i = 1; i <= 56; i += 1) {
    const desc = `grid item ${i}`;
    blocks.push(
      <Frame
        key={i}
        multiplier={i * 100}
        imgSrc={imageSrc}
        description={desc}
        randRotation={false}
        onClick={() => {
          showImgModal(imageSrc, desc);
        }}
      />
    );
  }
  return (
    <Layout navMenu={<Fragment />} contentGridSizing={true}>
      <ContentGrid classes={[styles.scrapbook]}>
        {blocks}
        <BlockFrame
          imgSrc={imageSrc}
          startCol={3}
          colLen={4}
          startRow={2}
          rowLen={2}
          onClick={() => {
            showImgModal(imageSrc, 'BLOCKFRAME', true)
          }}
        />
      </ContentGrid>
      {modalProps && <FrameModal {...modalProps} />}
    </Layout>
  );
}
