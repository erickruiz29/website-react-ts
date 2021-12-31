import React, { Fragment, ReactElement, useState } from 'react';
import { ContentGrid } from '../components/layout/ContentGrid';
import { Layout } from '../components/layout/Layout';
import { Frame, IFrameProps } from '../components/ui/Frame';

import styles from './Scrapbook.module.scss';
import imageSrc from './../assets/images/01.jpg';
import { FrameModal, IFrameModalProps } from '../components/ui/FrameModal';
import { BlockFrame } from '../components/ui/BlockFrame';
import { randInt } from '../utils';

export function Scrapbook() {
  const [modalProps, setModalProps] = useState<IFrameModalProps | undefined>(
    undefined
  );

  const showImgModal = (props: IFrameModalProps) => {
    setModalProps({
      ...props,
      overlayClick: () => {
        setModalProps(undefined);
      },
    });
  };

  let blocks: ReactElement[] = [];
  for (let i = 1; i <= 56; i += 1) {
    const desc = `grid item ${i}`;
    const dateStr = new Date().toLocaleDateString();
    const rgbaTop = `rgba(${i * (randInt(0, 255) / 56)}, ${i * (randInt(0, 255) / 56)}, ${i * (randInt(0, 255) / 56)}, 1)`
    const rgbaBottom = `rgba(${(56 - i) * (randInt(0, 255) / 56)}, ${(56 - i) * (randInt(0, 255) / 56)}, ${(56 - i) * (randInt(0, 255) / 56)}, 1)`
    blocks.push(
      <Frame
        key={i}
        imgSrc={imageSrc}
        description={desc}
        randRotation={true}
        title={desc}
        date={dateStr}
        styles={{background: `linear-gradient(${rgbaTop}, ${rgbaBottom})`} as React.CSSProperties}
        onClick={() => {
          showImgModal({
            imgSrc: imageSrc,
            description: desc,
            title: desc,
            date: dateStr,
            isModal: true,
            styles: {background: `linear-gradient(${rgbaTop}, ${rgbaBottom})`} as React.CSSProperties
          } as IFrameModalProps);
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
          styles={{gridRow: `2 / 4`, gridColumn: `3 / 7`} as React.CSSProperties}
          onClick={() => {
            showImgModal({
              imgSrc: imageSrc,
              isBlockFrame: true
            } as IFrameModalProps);
          }}
        />
      </ContentGrid>
      {modalProps && <FrameModal {...modalProps} />}
    </Layout>
  );
}
