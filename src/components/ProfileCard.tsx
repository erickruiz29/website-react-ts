import {Card, CardProps} from "./ui/Card";
export interface ProfileCardProps extends CardProps {
    title: string
    subtitles: string[]
    imageSrc?: string
}

export function ProfileCard(props: ProfileCardProps) {
    const classes = ["profile-card"]
    if (props.onClick !== undefined) {
        classes.push("clickable")
    }
    return (
        <Card classes={classes} onClick={props.onClick}>
            {props.imageSrc && (
                <div className={"image"}>
                    <img src={props.imageSrc} alt={props.title}/>
                </div>
            )}
            <div className={"section"}>
                <div className={"title"}>{props.title}</div>
                {props.subtitles.map((subtitle, i) => <div key={`subtitle_${i}`} className={"subtitle"}>{subtitle}</div>)}
            </div>
        </Card>
    )
}
