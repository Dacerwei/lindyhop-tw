import React from 'react'
import { Container, Item } from 'semantic-ui-react'
import _ from 'lodash'

import COOP_CONTENTS from '../contents/CoopContents'

const CoopPage = (props) => {
    return (
        <div className="page-wrapper">
            <Container as="section">
                <p>Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                <p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
            </Container>
            <Container as="section">
                <Item.Group divided>
                    {
                        _.map(COOP_CONTENTS, (content) => {
                            return (
                                <Item key={`coop-page-content-${content.id}`}>
                                    <Item.Image size='large' src={content.mediaSrc} />
                                    <Item.Content>
                                        <Item.Header as="h1">{content.title}</Item.Header>
                                        <Item.Description>
                                            <p>{content.contentChinese}</p>
                                            <p>{content.contentEnglish}</p>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            );
                        })
                    }
                </Item.Group>
            </Container>
        </div>
    )
};

export default CoopPage;