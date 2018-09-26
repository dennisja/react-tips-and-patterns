import React, { Component } from 'react';
import { PlayButton, PauseButton, SongContainer } from './common';

import raiseUp from '../assets/G-Eazy-Kehlani-Good-Life-CDQ.mp3';
// const raiseUpSrc =
//   'http://70clacks.co/wp-content/uploads/2017/03/G-Eazy-Kehlani-Good-Life-CDQ.mp3';
// import loveYourSelf from '../assets/Justin-Bieber-Love-Yourself-PURPOSE-The-Movement.mp3';

class Player extends Component {
  static Song = ({
    src,
    handlePlay,
    handleTimeUpdate,
    audioRef,
    handlePause,
  }) => (
    <SongContainer>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        {' '}
        Browser Deoesnt Support Audio
      </audio>
    </SongContainer>
  );

  static Play = ({ handlePlay }) => <PlayButton onClick={handlePlay} />;

  static Pause = ({ handlePause }) => <PauseButton onClick={handlePause} />;

  static PlayPause = ({ playing, handlePause, handlePlay }) =>
    playing ? (
      <PauseButton onClick={handlePause} />
    ) : (
      <PlayButton onClick={handlePlay} />
    );

  static Progress = ({ progress, handleForward }) => {
    return (
      <progress
        style={{ color: 'green' }}
        max="1"
        value={progress}
        onClick={handleForward}
      />
    );
  };

  state = {
    playing: false,
    loaded: false,
    progress: 0,
    src: raiseUp,
  };

  audioRef = React.createRef();

  play = () => {
    const audio = this.audioRef.current;
    if (audio) {
      audio.play();
      this.setState({ playing: true });
    }
  };

  pause = () => {
    const audio = this.audioRef.current;
    if (audio) {
      audio.pause();
      this.setState({ playing: false });
    }
  };

  handleTimeUpdate = ({ target: { currentTime, duration } }) => {
    const progress = currentTime / duration;
    this.setState({ progress });
  };

  handleForward = ({ target, clientX }) => {
    const { x, width } = target.getBoundingClientRect();
    const audio = this.audioRef.current;
    const forwardTo = (clientX - x) / width;
    const forwardedToTime = forwardTo * audio.duration;
    audio.currentTime = forwardedToTime;
    this.setState({ progress: forwardTo });
  };

  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        handlePlay: this.play,
        handleTimeUpdate: this.handleTimeUpdate,
        handlePause: this.pause,
        audioRef: this.audioRef,
        handleForward: this.handleForward,
        ...this.state,
      }),
    );
  }
}

export default Player;
