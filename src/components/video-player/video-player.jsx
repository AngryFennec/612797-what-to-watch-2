import React from "react";
import PropTypes from 'prop-types';


class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);


    this._videoRef = React.createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
    };

  }

  render() {
    const {img, src} = this.props;

    return (
        <video
            ref={this._videoRef}
            poster={img}
            src={src}
            width={200}
            height={175}
            muted
          />
    );
  }

  componentDidMount() {
    const {src, img} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = img;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;
    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.src = ``;
    video.img = ``;
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default VideoPlayer;
