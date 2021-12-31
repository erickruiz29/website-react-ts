import { Fragment, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { createFrame } from '../../../redux/FramesSlice';
import { openCloseFrameTool } from '../../../redux/ToolbarSlice';
import { IDivProps, ILabelProps } from '../../../utils';
import { Button } from '../Buttons/Button';
import { IFrameProps } from '../Frame';
import { IExtendedInputProps } from '../Inputs/Input';
import { InputFormGroup } from '../Inputs/InputFormGroup';

import styles from './Toolbar.module.scss';

interface IFrameToolProps extends IDivProps {}

export const FrameTool = (props: IFrameToolProps) => {
  const resetFrameProps = {
    imgSrc: '',
    title: '',
    date: '',
    description: '',
    style: {
      gridRowEnd: '',
      gridRowStart: '',
      gridColumnEnd: '',
      gridColumnStart: '',
    },
    isBlockFrame: true,
  } as IFrameProps;

  const [isBlockFrame, setIsBlockFrame] = useState<boolean>(true);
  const [frame, setFrame] = useState<IFrameProps>(resetFrameProps);

  const resetFrame = () => {
    setIsBlockFrame(true);
    setFrame(resetFrameProps);
  };
  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        className={styles.toolOverlay}
        onClick={() => {
          dispatch(openCloseFrameTool(false));
        }}
      ></div>
      <div className={styles.frameTool}>
        <InputFormGroup
          formGroupClassName={'radioFormGroup'}
          labelProps={{ innertext: 'Block Frame' } as ILabelProps}
          inputProps={{
            type: 'radio',
            name: 'isBlockFrame',
            checked: isBlockFrame,
            onChange: (e) => {
              if (e.currentTarget.checked) {
                setIsBlockFrame(true);
                setFrame({ ...frame, isBlockFrame: true });
              }
            },
          }}
        />
        <InputFormGroup
          formGroupClassName={'radioFormGroup'}
          labelProps={{ innertext: 'Frame' } as ILabelProps}
          inputProps={{
            type: 'radio',
            name: 'isBlockFrame',
            checked: !isBlockFrame,
            onChange: (e) => {
              if (e.currentTarget.checked) {
                setIsBlockFrame(false);
                setFrame({ ...frame, isBlockFrame: false });
              }
            },
          }}
        />
        <InputFormGroup
          labelProps={{ innertext: 'Image Source' } as ILabelProps}
          inputProps={
            {
              type: 'text',
              placeholder: '',
              onChange: (e) => {
                setFrame({ ...frame, imgSrc: e.currentTarget.value });
              },
              value: frame.imgSrc,
            } as IExtendedInputProps
          }
        />
        {isBlockFrame && (
          <Fragment>
            <InputFormGroup
              labelProps={{ innertext: 'Start Column' } as ILabelProps}
              inputProps={
                {
                  type: 'number',
                  placeholder: '',
                  onChange: (e) => {
                    setFrame({
                      ...frame,
                      style: { ...frame.style, gridColumnStart: e.currentTarget.value },
                    });
                  },
                  value: frame.style?.gridColumnStart,
                } as IExtendedInputProps
              }
            />
            <InputFormGroup
              labelProps={{ innertext: 'End Column' } as ILabelProps}
              inputProps={
                {
                  type: 'number',
                  placeholder: '',
                  onChange: (e) => {
                    setFrame({
                      ...frame,
                      style: { ...frame.style, gridColumnEnd: e.currentTarget.value },
                    });
                  },
                  value: frame.style?.gridColumnEnd,
                } as IExtendedInputProps
              }
            />
            <InputFormGroup
              labelProps={{ innertext: 'Start Row' } as ILabelProps}
              inputProps={
                {
                  type: 'number',
                  placeholder: '',
                  onChange: (e) => {
                    setFrame({
                      ...frame,
                      style: { ...frame.style, gridRowStart: e.currentTarget.value },
                    });
                  },
                  value: frame.style?.gridRowStart,
                } as IExtendedInputProps
              }
            />
            <InputFormGroup
              labelProps={{ innertext: 'End Row' } as ILabelProps}
              inputProps={
                {
                  type: 'number',
                  placeholder: '',
                  onChange: (e) => {
                    setFrame({
                      ...frame,
                      style: { ...frame.style, gridRowEnd: e.currentTarget.value },
                    });
                  },
                  value: frame.style?.gridRowEnd,
                } as IExtendedInputProps
              }
            />
          </Fragment>
        )}
        {!isBlockFrame && (
          <Fragment>
            <InputFormGroup
              labelProps={{ innertext: 'Title' } as ILabelProps}
              inputProps={
                {
                  type: 'text',
                  placeholder: '',
                  onChange: (e) => {
                    setFrame({ ...frame, title: e.currentTarget.value });
                  },
                  value: frame.title,
                } as IExtendedInputProps
              }
            />

            <InputFormGroup
              labelProps={{ innertext: 'Date' } as ILabelProps}
              inputProps={
                {
                  type: 'text',
                  placeholder: '',
                  onChange: (e) => {
                    setFrame({ ...frame, date: e.currentTarget.value });
                  },
                  value: frame.date,
                } as IExtendedInputProps
              }
            />

            <InputFormGroup
              labelProps={{ innertext: 'Description' } as ILabelProps}
              inputProps={
                {
                  type: 'text',
                  placeholder: '',
                  onChange: (e) => {
                    setFrame({ ...frame, description: e.currentTarget.value });
                  },
                  value: frame.description,
                } as IExtendedInputProps
              }
            />
          </Fragment>
        )}
        <Button
          onClick={() => {
            dispatch(createFrame(frame));
            resetFrame();
          }}
        >
          Create Frame
        </Button>
      </div>
    </div>
  );
};
