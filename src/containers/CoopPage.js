import React from 'react'
import { Container, Item } from 'semantic-ui-react'

const CoopPage = (props) => {
    return (
        <div>
            <Container as="section">
                <p>Naughty Swing 搖擺舞團專攻搖擺舞蹈編排、舞蹈教學、影片拍攝、舞蹈演出等！如果你也熱愛爵士樂，並且深深被 Swing Dance 搖擺舞的歡樂所吸引，就快來看看可以怎麼與我們合作吧！</p>
                <p>More than just a dance crew - Naughty Swing specializes in Swing Dance choreography, teaching and performance as well as video filming and editing. If you're amazed by the beauty of Swing Dance, why not pick some options below and work with us now!</p>
            </Container>
            <Container as="section">
                <Item.Group divided>
                    <Item>
                        <Item.Image size='large' src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/coop%2Fcoop_01_performance_mini.jpg?alt=media&token=abf5550f-ffa4-424e-81d2-f9ca7783dfa6" />
                        <Item.Content>
                            <Item.Header>Performance | 表演</Item.Header>
                            <Item.Description>
                                <p>好的舞蹈表演永遠不嫌少！透過搖擺舞、爵士樂，與 Naughty Swing 專業的演出能力，為你的記者會、舞會等活動增添美麗與歡樂的色彩！</p>
                                <p>There's never too much of a good performance, especially when it comes to social dance! Want to add some elements which entertain your audience, invigorate your event and give you all a total enjoyment with profession and passion? We ARE just the one you're looking for!</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image size='large' src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/coop%2Fcoop_02_videoproduction_mini.jpg?alt=media&token=a1b13952-3191-4d6c-af0e-706c15b05093" />
                        <Item.Content>
                            <Item.Header>Video Production | 影片</Item.Header>
                            <Item.Description>
                                <p>影片所能傳遞的訊息勝過千言萬語，更遑論透過搖擺舞的影片拍攝，將肢體語言的豐富情感傳達至舞蹈影片中，帶領觀眾一同進步故事裡！</p>
                                <p>'A picture says a thousand words.' - while a video shows a thousand images, and nothing's more contagious than a Swing Dance film! We tell stories through jazz music and dance moves. Happen to have something to be promoted through a good story? Tell us now!</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image size='large' src="https://firebasestorage.googleapis.com/v0/b/naughty-swing-official-website.appspot.com/o/coop%2Fcoop_03_lesson_mini.jpg?alt=media&token=b92a9fb9-f67e-4e14-9d02-41f049202e60" />
                        <Item.Content>
                            <Item.Header>Swing Dance Lessons | 搖擺舞專業教學</Item.Header>
                            <Item.Description>
                                <p>想要學習雙人社交舞蹈卻又不知該從何下手？快來參加我們的常態搖擺舞課程或是體驗課程，讓擁有專業舞蹈教學經歷的 Naughty Swing，帶你進入搖擺舞的新世界！</p>
                                <p>Not sure when and how to step out of your comfort zone and onto the dance floor? Now is the time! With our 10-year experience in dancing and diversified exposure to different dance styles, we will lead you into swing dance world in an interesting and easily understood way!</p>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Container>
        </div>
    )
};

export default CoopPage;