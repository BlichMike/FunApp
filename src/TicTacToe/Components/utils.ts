import { Player } from '../../classes/Player';
import { gameStateService } from '../services/game.state.service';
import { ITicTacToe, IPlayer, IBoard } from '../types';

type Option = { x: number; y: number };
type WinningOption = Array<Option>;
type WinningOptions = Array<WinningOption>;

export const playingCharacter = ['X', 'O']
export const dataToPlayer: Record<ITicTacToe, IPlayer> = {
    X: 'player1',
    O: 'player2',
  };

export const buildWinningOptions = (board: IBoard) => {
    const acrossOptions: WinningOptions = [];
    const rowOptions: WinningOptions = [];
    const colOptions: WinningOptions = [];
  
    // row options
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const rowOption: WinningOption = [];
      for (let colIndex = 0; colIndex < board.length; colIndex++) {
        rowOption.push({
          x: rowIndex,
          y: colIndex,
        });
      }
      rowOptions.push(rowOption);
    }
  
    // col options
    for (let colIndex = 0; colIndex < board.length; colIndex++) {
      const colOption: WinningOption = [];
      for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        colOption.push({
          x: rowIndex,
          y: colIndex,
        });
      }
      colOptions.push(colOption);
    }
  
    // top left diagonal
    const leftDiagonalOption: WinningOption = [];
    for (let i = 0; i < board.length; i++) {
      leftDiagonalOption.push({
        x: i,
        y: i,
      });
    }
    acrossOptions.push(leftDiagonalOption);
  
    // top right diagonal
    const rightDiagonalOption: WinningOption = [];
  
    for (let i = 0; i < board.length; i++) {
      rightDiagonalOption.push({
        x: i,
        y: board.length - 1 - i,
      });
    }
    acrossOptions.push(rightDiagonalOption);
  
    return [...rowOptions, ...colOptions, ...acrossOptions];
  };

export const checkWinner = (
    board: IBoard,
    winningOptions: WinningOptions
  ): Player | null => {
    const equalOptions = winningOptions.find((optionsToCheck) =>
      optionsToCheck.every(
        (res) =>
          board[res.x][res.y] ===
            board[optionsToCheck[0].x][optionsToCheck[0].y] &&
          board[optionsToCheck[0].x][optionsToCheck[0].y] != null
      )
    );
  
    if (!equalOptions || equalOptions.length === 0) return null;
    const winningVal = board[equalOptions[0].x][equalOptions[0].y];
  
    return winningVal && gameStateService.getPlayerByCharacter(winningVal)
    ;
  };

export const getEmptyBoard = (n: number): IBoard => {
  
  return new Array(n).fill(undefined).map(() => Array(n).fill(null) as IBoard[number]) as IBoard;
}
