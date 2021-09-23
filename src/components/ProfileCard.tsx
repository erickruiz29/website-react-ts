import {Card, CardProps} from "./ui/Card";

import "./ProfileCard.scss"

export interface ProfileCardProps extends CardProps {
    title: string
    subtitles: string[]
    imageSrc?: string
}

export function ProfileCard(props: ProfileCardProps) {
    return (
        <Card className={`profileCard ${props.onClick ? 'clickable' : ""}`} onClick={props.onClick}>
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
