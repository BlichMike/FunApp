import { ITicTacToe } from "../TicTacToe/types";

export type PlayerProps = {
    name: string;
    playingCharacter: string;
}
export class Player {
    name: string;
    wins: number;
    loses: number;
    id: number;
    playingCharacter: ITicTacToe | string;
    static id = 0;

    constructor({name, playingCharacter}: PlayerProps) {
        this.name = name;
        this.wins = 0;
        this.loses = 0;
        this.id = Player.id;
        this.playingCharacter = playingCharacter;
        Player.id++;
      }
}