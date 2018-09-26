import React, { Component } from 'react';

import {
  PlayButton,
  PauseButton,
  SongContainer,
  StyledProgressBar,
} from './common';
import raiseUp from '../assets/G-Eazy-Kehlani-Good-Life-CDQ.mp3';

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

class Player extends Component {
  static Song = () => (
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

  static Play = () => (
    <PlayerContext.Consumer>
      {({ handlePlay }) => <PlayButton onClick={handlePlay} />}
    </PlayerContext.Consumer>
  );

  static Pause = () => (
    <PlayerContext.Consumer>
      {({ handlePause }) => <PauseButton onClick={handlePause} />}
    </PlayerContext.Consumer>
  );

  static PlayPause = () => (
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
  static Progress = () => (
    <PlayerContext.Consumer>
      {({ progress, handleForward }) => {
        return (
          <StyledProgressBar max="1" value={progress} onClick={handleForward} />
        );
      }}
    </PlayerContext.Consumer>
  );

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
    return (
      <PlayerContext.Provider
        value={{
          handlePlay: this.play,
          handleTimeUpdate: this.handleTimeUpdate,
          handlePause: this.pause,
          audioRef: this.audioRef,
          handleForward: this.handleForward,
          ...this.state,
        }}
      >
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}

export default Player;
