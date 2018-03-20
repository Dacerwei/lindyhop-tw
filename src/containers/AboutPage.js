import React from 'react'
import { Container, Header, Divider, Tab, List } from 'semantic-ui-react'
import _ from 'lodash'

import BrandSection from '../components/BrandSection'
import BRANDS_CONTENTS from '../contents/BrandContents'
import EXPERIENCE_CONTENTS from '../contents/ExperienceContents'

const panes = _.map(['2017', '2016', '2015'], (year) => {
    return {
        menuItem: year,
        render: () => {
            return (
                <Tab.Pane attached={false}>
                    <List>
                        {
                            _.map(_.filter(EXPERIENCE_CONTENTS, { year: year }), (exp) => {
                                return (
                                    <List.Item key={`exp-${year}-${exp.id}`}>
                                        <List.Content>
                                            <List.Description>{exp.month}</List.Description>
                                            <List.Header>{exp.title}</List.Header>
                                        </List.Content>
                                    </List.Item>
                                )
                            })
                        }
                    </List>
                </Tab.Pane>
            )
        }
    };
});

const AboutPage = (props) => {
    return (
        <div>
            <Container as="section">
                <Header as="h1">Introduction | 舞團介紹</Header>
                <p>Naughty Swing 搖擺舞團，於 2015 年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。擅長將不同元素融合至 Swing Dance 當中，呈現有別於以往的演出，為目前台灣新生代指標性 Swing 舞團。2016 年發起 I Charleston Taipei 影片拍攝計畫，在 2 周內突破 50 萬人次點閱率，並獲得 10 多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。</p>
                <Divider />
                <p>Naughty Swing is founded in 2015 by 6 talented Taiwanese dancers, each with over 10 years of experience in street dance. As one of the most iconic dance crews in Taiwan, Naughty Swing is keen to integrate elements from different dance styles and to give unprecedented performances. "I Charleston Taipei" is their first official dance film project launched in 2016, reaching over 500,000 views on YouTube within 2 weeks, and was reported on by over 10 media, including Taiwan Today, Apple Daily and TVBS.</p>
            </Container>
            <Container as="section">
                <Header as="h1">Experience | 經歷</Header>
                <Tab menu={{ secondary: true, pointing: true, aligned: 'center' }} panes={panes} />
            </Container>
            <Container as="section">
                <Header as="h1">Media Explosure | 媒體報導</Header>
                <p>自 2015 年成立起，Naughnty Swing 搖擺舞團透過不同的舞蹈演出與活動合作，陸續獲得不同媒體報導。2016 年 I Charleston Taipei 影片釋出後，更受到許多指標性媒體，含電視、報紙、雜誌，與網路等，的相關報導與露出。</p>
                <Divider />
                <p>Since founded in 2015, Naughty Swing has be reported by different media through performance and collaboration. The media exposure has reached to the peak after releasing "I Charleston Taipei" film project launched in 2016, which  was reported on by  benchmark media, including TV, newspaper. magazine, and online media.</p>
            </Container>
            <Container as="section">
                <Header as="h1">Coop Partners | 歷年合作夥伴</Header>
                <BrandSection src={BRANDS_CONTENTS} columns={5} />
            </Container>
        </div>
    )
};

export default AboutPage;