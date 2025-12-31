import IPlayersCards from "./IPlayersCards";

export default interface IGameResultData {
    players: {
        playersCards: IPlayersCards,
      },
      game: {
        winnersPlayerId: string,
        winningPlayerChips: number,
        winningsPerPlayer: number,
        tableBets: number,
      },
  }