import React from "react"

export interface IDivProps extends React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> {}

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export interface ILabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    innertext?: string
}


export const optionalAttr = (attr: string[] | undefined): string[] => {
    if  (attr !== undefined) {
        return attr
    } else {
        return []
    }
}

export const randInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max-min)) + min
  }

export const getUUID = (): string => {
    const hex = [...Array(256).keys()]
    .map(index => (index).toString(16).padStart(2, '0'));

  const r = crypto.getRandomValues(new Uint8Array(16));

  r[6] = (r[6] & 0x0f) | 0x40;
  r[8] = (r[8] & 0x3f) | 0x80;
  
  return [...r.entries()]
    .map(([index, int]) => [4, 6, 8, 10].includes(index) ? `-${hex[int]}` : hex[int])
    .join('');
}