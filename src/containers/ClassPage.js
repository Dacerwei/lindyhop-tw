import React from 'react'
import { Container, Item, Card, Button, Grid, Header } from 'semantic-ui-react'
import _ from 'lodash'

import CLASS_CONTENTS, { LEVEL_DEFINITIONS } from '../contents/ClassContents'

const ClassPage = (props) => {
    return (
        <div>
            <Container as="section">
                <Item.Group divided>
                    {
                        _.map(LEVEL_DEFINITIONS, (level) => {
                            return (
                                <Item key={`class-level-${level.id}`}>
                                    <Item.Image size='small' src={level.mediaSrc} />
                                    <Item.Content>
                                        <Item.Header as="h1">{level.title}</Item.Header>
                                        <Item.Meta>
                                            <span>{level.levelName}</span>
                                        </Item.Meta>
                                        <Item.Description>
                                            <p>{level.description.en}</p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            )
                        })
                    }
                </Item.Group>
            </Container>
            <Container>
                <Header as='h1' textAlign="center">Classes | 課程總覽</Header>
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
                                                    <Card.Content extra textAlign="center">
                                                        {
                                                            theClass.state && <Button primary>Sign Up</Button>
                                                        }
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
            </Container>
        </div>
    )
};

export default ClassPage;