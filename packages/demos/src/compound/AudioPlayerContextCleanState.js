import React, { Component } from 'react';

import {
  PlayButton,
  PauseButton,
  SongContainer,
  StyledProgressBar,
  PlayerWrapper,
} from './common';
// import raiseUp from '../assets/G-Eazy-Kehlani-Good-Life-CDQ.mp3';
const raiseUp =
  'http://70clacks.co/wp-content/uploads/2017/03/G-Eazy-Kehlani-Good-Life-CDQ.mp3';

const defaultPlayerContextValue = {
  handlePlay: () => {},
  handleTimeUpdate: () => {},
  handlePause: () => {},
  audioRef: null,
  handleForward: () => {},
  playing: false,
  loaded: false,
  progress: 0,
  src: raiseUp,
};

const PlayerContext = React.createContext(defaultPlayerContextValue);

export const Song = () => (
  <PlayerContext.Consumer>
    {({ src, handlePlay, handleTimeUpdate, audioRef, handlePause }) => (
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
    )}
  </PlayerContext.Consumer>
);

export const Play = () => (
  <PlayerContext.Consumer>
    {({ handlePlay }) => <PlayButton onClick={handlePlay} />}
  </PlayerContext.Consumer>
);

export const Pause = () => (
  <PlayerContext.Consumer>
    {({ handlePause }) => <PauseButton onClick={handlePause} />}
  </PlayerContext.Consumer>
);

export const PlayPause = () => (
  <PlayerContext.Consumer>
    {({ playing, handlePause, handlePlay }) =>
      playing ? (
        <PauseButton onClick={handlePause} />
      ) : (
        <PlayButton onClick={handlePlay} />
      )
    }
  </PlayerContext.Consumer>
);

export const Progress = () => (
  <PlayerContext.Consumer>
    {({ progress, handleForward }) => {
      return (
        <StyledProgressBar max="1" value={progress} onClick={handleForward} />
      );
    }}
  </PlayerContext.Consumer>
);

class Player extends Component {
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

  state = {
    playing: false,
    loaded: false,
    progress: 0,
    src: raiseUp,
    handlePlay: this.play,
    handleTimeUpdate: this.handleTimeUpdate,
    handlePause: this.pause,
    audioRef: this.audioRef,
    handleForward: this.handleForward,
  };
  render() {
    return (
      <PlayerContext.Provider value={this.state}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

export default Player;
