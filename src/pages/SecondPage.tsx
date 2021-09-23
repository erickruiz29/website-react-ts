import {Layout} from "../components/layout/Layout";
import {TextCard} from "../components/TextCard";
import {Content} from "../components/layout/Content";
import React from "react";

export function SecondPage() {
    return (
        <Layout>
            <Content className={"center"}>
                <TextCard>
                    {`This page is intentionally left blank.
                    
                    
                    for now....`}
                </TextCard>
            </Content>
        </Layout>
    )
}
