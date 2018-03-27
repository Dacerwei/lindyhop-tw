import React from 'react'
import { Container, Item } from 'semantic-ui-react'
import _ from 'lodash'

import COOP_CONTENTS from '../contents/CoopContents'

const CoopPage = (props) => {
    return (
        <div className="page-wrapper">
            <Container as="section" className="coop-page-section">
                <p className="coop-page-introduction tw">Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                <p className="coop-page-introduction en">More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
            </Container>
            <Container as="section" className="coop-page-section">
                <Item.Group divided relaxed>
                    {
                        _.map(COOP_CONTENTS, (content) => {
                            return (
                                <Item key={`coop-page-content-${content.id}`}>
                                    <Item.Image size='large' src={content.mediaSrc} rounded />
                                    <Item.Content>
                                        <h2 className="item-header">{content.title}</h2>
                                        <Item.Description>
                                            <p className="item-content tw">{content.content.tw}</p>
                                            <p className="item-content en">{content.content.en}</p>
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