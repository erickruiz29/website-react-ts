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