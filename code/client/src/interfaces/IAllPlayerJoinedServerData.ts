import IPlayersCards from "./IPlayersCards";
import IPlayersBets from "./IPlayersBets";
import IPlayersMoney from "./IPlayersMoney";
import IPlayerTurnData from "./IPlayerTurnData";
import IPlayerGamePositions from "../game/interface/IPlayerGamePositions";

export default interface IServerGameUpdateOnStart {
    players: {
        playersGamePositions: IPlayerGamePositions;
        playersBets: IPlayersBets;
        playersChips: IPlayersMoney
        drawCards: IPlayersCards
    },
    game: {
        playerTurnData: IPlayerTurnData
    }
}