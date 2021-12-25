import React from "react";
import {Layout} from "../components/layout/Layout";
import {ProfileCard} from "../components/ProfileCard";
import {Content} from "../components/layout/Content";
import {TextCard} from "../components/TextCard";

import erickRuiz01 from "./../assets/images/erick-ruiz-01.jpg"

export function About() {
    const erickProfileCardProps = {
        imageSrc: erickRuiz01,
        title: "Erick Ruiz",
        subtitles: ["Software Engineer", "Fullerton, CA"],
        onClick: undefined,
    }
    return (
        <Layout>
            <Content classes={["center"]}>
                <ProfileCard {...erickProfileCardProps} />
                <TextCard>
                    {`Hi, my name is Erick Ruiz. I am a programmer from Southern California, particularly
                    Orange County. I have been programming since the 10th grade and studied Computer Science at
                    UCLA a few years back. I decided to create this space for myself to share work I've done and
                    also as a way to keep up my coding skills.

                    I also wanted to make a place for me to share my thoughts on matters relating to self-help, healing,
                    and spirituality. I'm a practicing Roman Catholic and have been working on integrating God in my
                    life as much as I can.
                    
                    Aside from programming and religion, I enjoy listening to electronic music, and the arts such as 
                    photography, graphic design, and pottery. I aspire to one day showcase some art in some art gallery
                    or perhaps perform music.`}
                </TextCard>
            </Content>
        </Layout>
    )
}
