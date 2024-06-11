export default interface IPlayersBets {
    [playerId: string]: {
        bet: number;
    };
}