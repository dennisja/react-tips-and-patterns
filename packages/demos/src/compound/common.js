import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 15px;

  border-color: transparent transparent transparent green;
  transition: 100ms all ease;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    border-color: transparent transparent transparent #c8e6c9;
  }

  &:focus {
    outline: none;
  }
`;

export const PlayButton = styled(Button)`
  border-style: solid;
  border-width: 9.3px 0 9.3px 15px;
`;

export const PauseButton = styled(Button)`
  border-style: double;
  border-width: 0px 0 0px 15px;
`;

export const SongContainer = styled.audio`
  display: block;
  width: 50%;
`;

export const StyledProgressBar = styled.progress`
  background-color: green;

  ::-webkit-progress-bar {
    background-color: white;
    border: 1px solid green;
  }
`;

export const PlayerWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 30%;
  width: 30%;
  border: 1px solid green;
  padding: 15px;
`;

export const SongTitle = styled.div`
  background-color: green;
  color: white;
  margin: 5px;
  padding: 5px;
`;
