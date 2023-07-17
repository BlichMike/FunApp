import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Square } from './Box';
import { IBoard, ISquareData, ITicTacToe } from '../types';
import { buildWinningOptions, checkWinner, getEmptyBoard } from './utils';
import { WinnerConfetti } from '../../Components/WinnerConfetti';
import {
  Avatar,
  Button,
  Skeleton,
  Box,
  Typography,
  Stack,
} from '@mui/material';
import { useGame } from '../hooks/game.service.hook';
import { Player } from '../../classes/Player';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const StyledBoard = styled.div<{ $boardSize?: number }>`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-color: #34495e;
  color: #fff;
  border: 6px solid #2c3e50;
  border-radius: 10px;
  display: grid;
  grid-template: ${({ $boardSize = 3 }) =>
    `repeat(${$boardSize}, 1fr) / repeat(${$boardSize}, 1fr)`};
`;

export const Board: React.FC<{ boardSize?: number }> = ({ boardSize = 3 }) => {
  const [board, setBoard] = useState<IBoard>(getEmptyBoard(boardSize));
  const [winner, setWinner] = useState<Player | null>(null);
  const { playingNow, hasStarted, endTurn, resetGame, gameWon } = useGame();

  const winningOptions = buildWinningOptions(board);

  const handleSquareClick = (x: number, y: number, square: ISquareData) => {
    endTurn();
    const newBoard = [...board];
    newBoard[x][y] = square;
    setBoard(newBoard);
    const newWinner = checkWinner(board, winningOptions);
    if (newWinner) gameWon(newWinner);
    setWinner(newWinner);
  };

  const handleBoardReset = () => {
    setBoard(getEmptyBoard(boardSize));
    setWinner(null);
    resetGame();
  };

  useEffect(() => {
    setBoard(getEmptyBoard(boardSize));
  }, [boardSize]);

  if (!hasStarted)
    return <Skeleton variant="rectangular" width={210} height={118} />;

  return (
    <>
      {!winner && (
        <Button onClick={handleBoardReset} sx={{ position: 'absolute' }}>
          <RestartAltIcon titleAccess="Restart"></RestartAltIcon>
        </Button>
      )}
      {winner && (
        <Box sx={{ p: 1 }}>
          <Typography variant="h6">
            <Stack direction="row" alignItems={'center'} gap={1.5}>
              <Avatar title={playingNow!.name}>{playingNow!.name[0]}</Avatar>
              {winner.name} won this game! wohooo
              <Button
                size="medium"
                onClick={handleBoardReset}
                sx={{ alignSelf: 'end' }}
              >
                <Typography variant="body1">Again?</Typography>
              </Button>
            </Stack>
          </Typography>

          <WinnerConfetti></WinnerConfetti>
        </Box>
      )}
      {!winner && (
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', p: 1 }}>
          <Avatar title={playingNow!.name}>{playingNow!.name[0]}</Avatar>
          <Typography variant="body1">is playing now...</Typography>
        </Box>
      )}
      <StyledBoard $boardSize={boardSize}>
        {board.map((row, x) =>
          row.map((square: ISquareData, y) => (
            <Square
              key={`${x}-${y}`}
              data={square}
              onClick={() =>
                handleSquareClick(
                  x,
                  y,
                  playingNow!.playingCharacter as ITicTacToe
                )
              }
            ></Square>
          ))
        )}
      </StyledBoard>
    </>
  );
};
