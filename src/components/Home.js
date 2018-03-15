import React, { Component } from 'react'
import { Segment, Grid, Image, Container, Card, Modal, Header, Embed, Button } from 'semantic-ui-react'
import _ from 'lodash'

import PORTFOLIO_CONTENTS from '../contents/PortfolioContents'
import COOP_CONTENTS from '../contents/CoopContents'
import BRANDS_CONTENTS from '../contents/BrandContents'
import CLASS_CONTENTS from '../contents/ClassContents'

import videoProductionIcon from '../statics/image/icon_video_production.svg'
import performanceIcon from '../statics/image/icon_performance.svg'
import classesIcon from '../statics/image/icon_classes.svg'

import mainImage from '../statics/image/main.jpg'

const coopIcons = {
    'video': videoProductionIcon,
    'performance': performanceIcon,
    'classes': classesIcon
};

export default class Home extends Component {
    render() {
        return (
            <div>
                <Segment vertical style={{
                    height: '100vh',
                    width: '100%',
                    backgroundImage: `url(${mainImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <Container style={{ color: 'white' }}>
                        <Header
                            as='h1'
                            inverted
                            style={{
                                fontSize: '6em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '2.5em',
                                textAlign: 'center',
                                textShadow: '0 0 20px rgba(0, 0, 0, 0.8)'

                            }}
                        >
                            We're <strong style={{ color: 'orange' }}>Naughty</strong> <br />So We <strong style={{ color: 'orange' }}>Swing</strong>
                        </Header>
                    </Container>
                </Segment>
                <Segment vertical>
                    <Header as='h1' textAlign="center">Introduction | 舞團介紹</Header>
                    <p>Naughty Swing 搖擺舞團，於 2015 年成立，由6位平均舞齡 10 年、擁有不同街舞背景的舞者所組成。擅長將不同元素融合至 Swing Dance 當中，呈現有別於以往的演出，為目前台灣新生代指標性 Swing 舞團。2016 年發起 I Charleston Taipei 影片拍攝計畫，在 2 周內突破 50 萬人次點閱率，並獲得 10 多家媒體報導，包涵今日台灣、蘋果日報以及TVBS。</p>
                    <p>Naughty Swing is founded in 2015 by 6 talented Taiwanese dancers, each with over 10 years of experience in street dance. As one of the most iconic dance crews in Taiwan, Naughty Swing is keen to integrate elements from different dance styles and to give unprecedented performances. "I Charleston Taipei" is their first official dance film project launched in 2016, reaching over 500,000 views on YouTube within 2 weeks, and was reported on by over 10 media, including Taiwan Today, Apple Daily and TVBS.</p>
                </Segment>
                <Segment vertical>
                    <Header as='h1' textAlign="center">CO-OP | 合作項目</Header>
                    <p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
                    <p>Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                    <Grid centered>
                        {
                            _.map(COOP_CONTENTS, (content, index) => (
                                <Grid.Column key={`coopcontent-${index}`} mobile={16} tablet={5} computer={5} textAlign='center'>
                                    <Card key={content.id} centered>
                                        <Image src={coopIcons[content.id]} />
                                        <Card.Content>
                                            <Card.Header>{content.title}</Card.Header>
                                            <Card.Description>{content.contentChinese}</Card.Description>
                                            <Card.Description>{content.contentEnglish}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            ))
                        }
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Header as='h1' textAlign="center">Portfolio | 作品集</Header>
                    <Grid textAlign='center'>
                        {
                            _.map([0, 1, 2], (column) => {
                                return (
                                    <Grid.Column key={`portfolioColumn-${column}`} mobile={16} tablet={5} computer={5} textAlign='center'>
                                        {
                                            _.map(_.filter(PORTFOLIO_CONTENTS, (content, index) => (index % 3 === column)), (content) => (
                                                <Modal
                                                    key={content.ID}
                                                    trigger={
                                                        <Container>
                                                            <Image src={content.src} size='huge' />
                                                            <p>{content.title}</p>
                                                        </Container>
                                                    }
                                                    dimmer={'blurring'}>
                                                    <Modal.Content>
                                                        <Modal.Description>
                                                            <Header as='h2'>{content.title}</Header>
                                                            {
                                                                content.youtubeVideoID &&
                                                                <Embed
                                                                    id={content.youtubeVideoID}
                                                                    placeholder={content.src}
                                                                    source='youtube'
                                                                />
                                                            }
                                                            <p>{content.chineseDescription}</p>
                                                            <p>{content.englishDescription}</p>
                                                        </Modal.Description>
                                                    </Modal.Content>
                                                </Modal>
                                            ))
                                        }
                                    </Grid.Column>
                                )
                            })
                        }
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Header as='h1' textAlign="center">Classes | 課程</Header>
                    <Header sub textAlign="center">Dance with Naughty Swing!!</Header>
                    <Grid centered>
                        {
                            _.map(['lindyhop', 'charleston', 'solojazz'], (style) => {
                                return (
                                    <Grid.Column key={`class-style-${style}`} mobile={16} tablet={5} computer={5}>
                                        {
                                            _.map(_.filter(CLASS_CONTENTS, { 'style': style }), (theClass) => {
                                                return (
                                                    <Card key={`class-id-${theClass.id}`} centered>
                                                        <Card.Content>
                                                            <Card.Header>
                                                                {theClass.titleEn} <br /> {theClass.titleTw}
                                                            </Card.Header>
                                                            <Card.Meta>
                                                                {theClass.levelName}
                                                            </Card.Meta>
                                                            <Card.Description>
                                                                {theClass.description}
                                                            </Card.Description>
                                                        </Card.Content>
                                                        <Card.Content extra>
                                                            {theClass.state}
                                                        </Card.Content>
                                                    </Card>
                                                )
                                            })
                                        }
                                    </Grid.Column>
                                )
                            })
                        }
                    </Grid>
                </Segment>
                <Segment vertical>
                    <Grid doubling columns={5} textAlign='center'>
                        {
                            _.map(BRANDS_CONTENTS, (brand) => (
                                <Image key={brand.name} src={brand.src} />
                            ))
                        }
                    </Grid>
                </Segment>
            </div>
        )
    }
}