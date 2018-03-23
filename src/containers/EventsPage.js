import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const EventsPage = (props) => {
    return (
        <div className="page-wrapper">
            <Container>
                <Header as="h1">近期教學活動</Header>
                <Container textAlign="center">
                    <div className="fb-page"
                        data-tabs="events"
                        data-href="https://www.facebook.com/nsintaiwan/"
                        data-width="500">
                    </div>
                </Container>
            </Container>
        </div>
    )
};

export default EventsPage;