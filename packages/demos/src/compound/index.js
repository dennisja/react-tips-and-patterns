import React from 'react';

import ContextPlayer from './AudioPlayerContext';
import CleanContextPlayer, {
  Song,
  Play,
  Progress,
  PlayPause,
  Pause,
} from './AudioPlayerContextCleanState';
import Player from './AudioPlayer';
import { PlayerWrapper, SongTitle } from './common';

export default class CompoundDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Player> */}
        {/* Discuss this as a caveat */}
        {/* <div>Goodlife - Geazy ft Khelani</div> */}
        {/* <Player.Song />
          <Player.Progress />
          <Player.PlayPause /> */}
        {/* <Player.Play />
          <Player.Pause /> */}
        {/* </Player> */}

        {/* use this to demo flexible compound components */}
        {/* <ContextPlayer>
          <div>Goodlife - Geazy ft Khelani</div>
          <ContextPlayer.PlayPause />
          <ContextPlayer.Song />
          <ContextPlayer.Progress />
        </ContextPlayer> */}

        {/* Use this to demo clean context compound components */}
        <CleanContextPlayer>
          <PlayerWrapper>
            <Song />
            {/* <Pause />
            <Play /> */}
            <Progress />
            <PlayPause />
          </PlayerWrapper>
        </CleanContextPlayer>
      </React.Fragment>
    );
  }
}
