import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Container, Modal, Header, Embed } from 'semantic-ui-react'

import _ from 'lodash'

const PorfolioItem = (props) => {
    const { portfolioContent } = props;
    return (
        <Modal
            key={portfolioContent.ID}
            trigger={
                <Container className="portfolio-item">
                    <Image className="portfolio-image" src={portfolioContent.src} size='huge' />
                    <p className="portfolio-title">{portfolioContent.title}</p>
                </Container>
            }
            dimmer={'blurring'}
            className="scrolling">
            <Modal.Content>
                <Modal.Description>
                    <Header as='h2'>{portfolioContent.title}</Header>
                    {
                        portfolioContent.youtubeVideoID &&
                        <Embed
                            id={portfolioContent.youtubeVideoID}
                            placeholder={portfolioContent.src}
                            source='youtube'
                        />
                    }
                    <p>{portfolioContent.chineseDescription}</p>
                    <p>{portfolioContent.englishDescription}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

export default class PorfolioSection extends Component {

    render() {
        const { src, columns } = this.props;
        return (
            <Grid textAlign='center'>
                {
                    _.map(_.range(columns), (column) => {
                        return (
                            <Grid.Column key={`portfolioColumn-${column}`} mobile={16} tablet={5} computer={5} textAlign='center' style={{ padding: 0 }}>
                                {
                                    _.map(_.filter(src, (content, index) => (index % columns === column)), (content) => (
                                        <PorfolioItem portfolioContent={content} key={content.ID} />
                                    ))
                                }
                            </Grid.Column>
                        )
                    })
                }
            </Grid>
        )
    }
}

PorfolioSection.protoTypes = {
    src: PropTypes.object,
    columns: PropTypes.number
};

PorfolioSection.defaultProps = {
    src: [],
    columns: 3
};

