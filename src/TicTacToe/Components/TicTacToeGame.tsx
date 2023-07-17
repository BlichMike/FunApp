/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGame } from '../hooks/game.service.hook';
import { Board } from './Board';
import { Box, Card } from '@mui/material';
import { Score } from './Score';
import { PlayerProps } from '../../classes/Player';
import { BoardResizer } from './BoardResizer';

const players: Array<PlayerProps> = [
  { name: 'Mike', playingCharacter: 'X' },
  { name: 'Stav', playingCharacter: 'O' },
];

export const TicTacToeGame = () => {
  const {
    players: playersData,
    initGame,
    hasStarted,
    endGame,
    boardSize,
  } = useGame();

  useEffect(() => {
    if (!hasStarted) initGame(players);
  }, [playersData]);

  useEffect(() => {
    return () => {
      endGame();
    };
  }, []);

  return (
    <Card variant="elevation" elevation={2} sx={{ p: 2, position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          position: 'relative',
        }}
      >
        <BoardResizer />
        <Score players={playersData}></Score>
        <Board boardSize={boardSize} />
      </Box>
    </Card>
  );
};
