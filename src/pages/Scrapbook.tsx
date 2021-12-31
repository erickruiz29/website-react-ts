import React, { ReactElement, useState } from 'react';
import { ContentGrid } from '../components/layout/ContentGrid';
import { Layout } from '../components/layout/Layout';
import { Frame } from '../components/ui/Frame';

import styles from './Scrapbook.module.scss';
import imageSrc from './../assets/images/01.jpg';
import { FrameModal, IFrameModalProps } from '../components/ui/FrameModal';
import { BlockFrame } from '../components/ui/BlockFrame';
import { getUUID, randInt } from '../utils';
import { Toolbar } from '../components/ui/Tools/Toolbar';
import { useAppSelector } from '../app/hooks';
import { selectIsFrameToolOpen } from '../redux/ToolbarSlice';
import { FrameTool } from '../components/ui/Tools/FrameTool';
import { selectFrames } from '../redux/FramesSlice';

export function Scrapbook() {
  const [modalProps, setModalProps] = useState<IFrameModalProps | undefined>(
    undefined
  );

  const isFrameToolOpen = useAppSelector(selectIsFrameToolOpen);
  const frames = useAppSelector(selectFrames);

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
    const rgbaTop = `rgba(${i * (randInt(0, 255) / 56)}, ${
      i * (randInt(0, 255) / 56)
    }, ${i * (randInt(0, 255) / 56)}, 1)`;
    const rgbaBottom = `rgba(${(56 - i) * (randInt(0, 255) / 56)}, ${
      (56 - i) * (randInt(0, 255) / 56)
    }, ${(56 - i) * (randInt(0, 255) / 56)}, 1)`;
    const rotation = `rotate(${randInt(-6, 6)}deg)`;
    blocks.push(
      <Frame
        key={i}
        imgSrc={imageSrc}
        description={desc}
        title={desc}
        date={dateStr}
        style={
          {
            background: `linear-gradient(${rgbaTop}, ${rgbaBottom})`,
            transform: rotation,
          } as React.CSSProperties
        }
        onClick={() => {
          showImgModal({
            imgSrc: imageSrc,
            description: desc,
            title: desc,
            date: dateStr,
            isModal: true,
            styles: {
              background: `linear-gradient(${rgbaTop}, ${rgbaBottom})`,
            } as React.CSSProperties,
          } as IFrameModalProps);
        }}
      />
    );
  }
  return (
    <Layout navMenu={<Toolbar />} contentGridSizing={true}>
      <ContentGrid className={styles.scrapbook}>
        {frames.map((frameProps) =>
          frameProps.isBlockFrame ? (
            <BlockFrame
              key={getUUID()}
              {...{
                ...frameProps,
                onClick: () => {
                  showImgModal(frameProps);
                },
              }}
            />
          ) : (
            <Frame
              key={getUUID()}
              {...{
                ...frameProps,
                onClick: () => {
                  showImgModal(frameProps);
                },
              }}
            />
          )
        )}
      </ContentGrid>
      {modalProps && <FrameModal {...modalProps} />}
      {isFrameToolOpen && <FrameTool />}
    </Layout>
  );
}
