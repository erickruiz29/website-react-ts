export interface IProps {
    classes?: string[]
}

export interface IPropsWithChildren extends  React.PropsWithChildren<IProps> {}

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