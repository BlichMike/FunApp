import { Player, PlayerProps } from "../../classes/Player";
import { Observable } from "../../observable/observable.state.service";
import { ITicTacToe } from "../types";

class GameStateService {
    readonly hasStarted = new Observable<boolean>(false);
    readonly players = new Observable<Array<Player>>([]);
    readonly playingNow = new Observable<Player | null>(null);
    readonly boardSize = new Observable<number>(3);

    initGame = (players:  Array<PlayerProps>) => {
        this.players.set(players.map(p => new Player(p)));
        this.playingNow.set(this.players.get()[0]);
        this.hasStarted.set(true);
    }

    resetGame = () => {
        this.playingNow.set(this.players.get()[0]);
    }

    gameWon = (player: Player) => {
        player.wins++;
    }

    endTurn = () => {
        const playingNow = this.playingNow.get();
        const players = this.players.get();
        const currentIndex = players.findIndex((player) => playingNow?.id === player.id);
        const nextPlayerIndex = currentIndex === players.length - 1 ? 0 : currentIndex + 1
        this.playingNow.set(players[nextPlayerIndex]);
    }

    endGame = () => {
        this.playingNow.set(null);
        this.players.set([]);
        this.hasStarted.set(false);
    }

    getPlayerByCharacter = (playingCharacter: ITicTacToe) => this.players.get().find(player => player.playingCharacter === playingCharacter) || null

    setBoardSize = (boardSize: number) => {
        this.boardSize.set(boardSize);
    }
}

export const gameStateService = new GameStateService();