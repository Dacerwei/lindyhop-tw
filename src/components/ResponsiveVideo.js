import React, { Component } from 'react'

export default class ResponsiveVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoWidth: this.props.defaultWidth,
            videoHeight: this.props.defaultHeight,
        };

        this.handleResize = this.handleResize.bind(this);
    }

    getInitialState() {
        return { windowWidth: window.innerWidth };
    }

    componentDidMount() {
        // window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // window.removeEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        const { videoWidth, videoHeight } = this.state;
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let windowAspectRatio = windowHeight / windowWidth;
        let videoAspectRatio = videoHeight / videoWidth;
        console.log('window', windowHeight, windowWidth);
        console.log('video', videoHeight, videoWidth);
        if (videoAspectRatio > windowAspectRatio) {
            this.setState({
                videoWidth: windowWidth,
                videoHeight: videoWidth * videoAspectRatio
            });
        } else {
            this.setState({
                videoHeight: windowHeight,
                videoWidth: videoWidth / videoAspectRatio
            });
        }
    }
    render() {
        const { src } = this.props;
        const { videoHeight, videoWidth } = this.state;
        console.log(this.state);
        return (
            <div className="video-container">
                <video autoPlay muted>
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        );
    }
}