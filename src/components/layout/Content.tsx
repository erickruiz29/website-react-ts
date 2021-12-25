import { IPropsWithChildren } from '../../utils/util';
export interface ContentProps extends IPropsWithChildren {}

export function Content(props: ContentProps) {
  return (
    <div className={['content', props.classes].join(' ')}>{props.children}</div>
  );
}
