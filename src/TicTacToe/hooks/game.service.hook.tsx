import { gameStateService } from '../services/game.state.service';
import { useObservable } from '../../observable/observable.state.hook';

export const useGame = () => {
  return {
    hasStarted: useObservable(gameStateService.hasStarted),
    playingNow: useObservable(gameStateService.playingNow),
    players: useObservable(gameStateService.players),
    boardSize: useObservable(gameStateService.boardSize),
    initGame: gameStateService.initGame,
    endTurn: gameStateService.endTurn,
    resetGame: gameStateService.resetGame,
    endGame: gameStateService.endGame,
    gameWon: gameStateService.gameWon,
    getPlayerByCharacter: gameStateService.getPlayerByCharacter,
    setBoardSize: gameStateService.setBoardSize,
  };
};
