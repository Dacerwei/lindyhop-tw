import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const EventsPage = (props) => {
    return (
        <div className="page-wrapper">
            <Container>
                <Header as="h1" textAlign="center">近期教學活動</Header>
                <Container textAlign="center">
                    <iframe
                        title={'fbEvents'}
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnsintaiwan%2F&tabs=events&width=340&height=245&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=757696621076512"
                        width={340}
                        height={245}
                        style={{
                            border: 'none',
                            overflow: 'hidden'
                        }}
                        scrolling="no"
                        rameborder="0"></iframe>
                </Container>
            </Container>
        </div>
    )
};

export default EventsPage;