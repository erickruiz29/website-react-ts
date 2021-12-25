import {Card, CardProps} from "./ui/Card";

import styles from "./ProfileCard.module.scss";

export interface ProfileCardProps extends CardProps {
    title: string
    subtitles: string[]
    imageSrc?: string
}

export function ProfileCard(props: ProfileCardProps) {
    const classes = [styles.profileCard]
    if (props.onClick !== undefined) {
        classes.push(styles.clickable)
    }
    return (
        <Card classes={classes} onClick={props.onClick}>
            {props.imageSrc && (
                <div className={styles.image}>
                    <img src={props.imageSrc} alt={props.title}/>
                </div>
            )}
            <div className={styles.section}>
                <div className={styles.title}>{props.title}</div>
                {props.subtitles.map((subtitle, i) => <div key={`subtitle_${i}`} className={styles.subtitle}>{subtitle}</div>)}
            </div>
        </Card>
    )
}
