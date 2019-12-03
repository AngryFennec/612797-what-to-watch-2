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
    const {film} = this.props;
    const previewImage = film.preview_image;
    const previewVideoLink = film.preview_video_link;

    return (
      <video
        ref={this._videoRef}
        poster={previewImage}
        src={previewVideoLink}
        width={280}
        height={175}
        muted
      />
    );
  }

  componentDidMount() {
    const {film} = this.props;
    const previewImage = film.preview_image;
    const previewVideoLink = film.preview_video_link;
    const video = this._videoRef.current;

    video.src = previewVideoLink;
    video.poster = previewImage;
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
    video.poster = ``;
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  film: PropTypes.object.isRequired
};

export default VideoPlayer;
