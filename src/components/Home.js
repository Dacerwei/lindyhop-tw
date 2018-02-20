import React, { Component } from 'react'
import { Segment, Grid, Image, Reveal, Container, Card } from 'semantic-ui-react'
import PORTFOLIO_CONTENTS from '../contents/PortfolioContents'
import COOP_CONTENTS from '../contents/CoopContents'
import videoProductionIcon from '../statics/image/icon_video_production.svg'
import performanceIcon from '../statics/image/icon_performance.svg'
import classesIcon from '../statics/image/icon_classes.svg'
import _ from 'lodash'


const coopIcons = {
    'video': videoProductionIcon,
    'performance': performanceIcon,
    'classes': classesIcon
};

export default class Home extends Component {
    render() {
        return (
            <div>
                <Segment vertical>main banner</Segment>
                <Segment vertical>intro banner</Segment>
                <Segment vertical>
                    <h2>CO-OP | 合作項目</h2>
                    <p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
                    <p>Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                    <Card.Group itemsPerRow={3}>
                        {
                            _.map(COOP_CONTENTS, (content, index) => (
                                <Card>
                                    <Image src={coopIcons[content.id]} />
                                    <Card.Content>
                                        <Card.Header>{content.title}</Card.Header>
                                        <Card.Description>{content.contentChinese}</Card.Description>
                                        <Card.Description>{content.contentEnglish}</Card.Description>
                                    </Card.Content>
                                </Card>
                            ))
                        }
                    </Card.Group>
                </Segment>
                <Segment vertical>
                    portfolio banner
                    <Grid>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            {
                                _.map(_.filter(PORTFOLIO_CONTENTS, (content, index) => (index % 4 === 0)), (content) => (
                                    <Container key={content.ID}>
                                        <Reveal animated='move'>
                                            <Reveal.Content visible>
                                                <Image src={content.src} size='large' />
                                            </Reveal.Content>
                                            <Reveal.Content hidden>
                                                <p>{content.title}</p>
                                            </Reveal.Content>
                                        </Reveal>
                                    </Container>
                                ))
                            }
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            {
                                _.map(_.filter(PORTFOLIO_CONTENTS, (content, index) => (index % 4 === 1)), (content) => (
                                    <Container key={content.ID}>
                                        <Reveal animated='move'>
                                            <Reveal.Content visible>
                                                <Image src={content.src} size='large' />
                                            </Reveal.Content>
                                            <Reveal.Content hidden>
                                                <p>{content.title}</p>
                                            </Reveal.Content>
                                        </Reveal>
                                    </Container>
                                ))
                            }
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            {
                                _.map(_.filter(PORTFOLIO_CONTENTS, (content, index) => (index % 4 === 2)), (content) => (
                                    <Container key={content.ID}>
                                        <Reveal animated='move'>
                                            <Reveal.Content visible>
                                                <Image src={content.src} size='large' />
                                            </Reveal.Content>
                                            <Reveal.Content hidden>
                                                <p>{content.title}</p>
                                            </Reveal.Content>
                                        </Reveal>
                                    </Container>
                                ))
                            }
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={4}>
                            {
                                _.map(_.filter(PORTFOLIO_CONTENTS, (content, index) => (index % 4 === 3)), (content) => (
                                    <Container key={content.ID}>
                                        <Reveal animated='move'>
                                            <Reveal.Content visible>
                                                <Image src={content.src} size='large' />
                                            </Reveal.Content>
                                            <Reveal.Content hidden>
                                                <p>{content.title}</p>
                                            </Reveal.Content>
                                        </Reveal>
                                    </Container>
                                ))
                            }
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment vertical>classes banner</Segment>
                <Segment vertical>Brands banner</Segment>
            </div>
        )
    }
}