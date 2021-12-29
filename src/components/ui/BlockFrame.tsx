import { Frame, IFrameProps } from './Frame';

export interface IBlockFrameProps extends IFrameProps {
}

export function BlockFrame(props: IFrameProps) {
  return (
    <Frame {...{...props, isBlockFrame: true}}/>
  );
}
