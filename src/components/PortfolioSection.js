import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Container, Modal, Header, Embed } from 'semantic-ui-react'

import _ from 'lodash'

export default class PorfolioSection extends Component {

    render() {
        const { src, columns } = this.props;
        return (
            <Grid textAlign='center'>
                {
                    _.map(_.range(columns), (column) => {
                        return (
                            <Grid.Column key={`portfolioColumn-${column}`} mobile={16} tablet={5} computer={5} textAlign='center'>
                                {
                                    _.map(_.filter(src, (content, index) => (index % columns === column)), (content) => (
                                        <Modal
                                            key={content.ID}
                                            trigger={
                                                <Container>
                                                    <Image src={content.src} size='huge' />
                                                    <p>{content.title}</p>
                                                </Container>
                                            }
                                            dimmer={'blurring'}
                                            className="scrolling">
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

