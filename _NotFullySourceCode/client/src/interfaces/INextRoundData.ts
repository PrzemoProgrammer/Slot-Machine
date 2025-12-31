import ICardData from "./ICardData";
import IPlayerTurnData from "./IPlayerTurnData";

export default interface INextRoundData {
    game: {
        tableBets: number,
        tableCards: ICardData[],
        playerTurnData: IPlayerTurnData
      },
  }

