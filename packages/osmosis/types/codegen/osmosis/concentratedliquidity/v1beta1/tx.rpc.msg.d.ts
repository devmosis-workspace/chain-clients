import { Rpc } from "../../../helpers";
import { MsgCreatePosition, MsgCreatePositionResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse, MsgAddToPosition, MsgAddToPositionResponse, MsgCollectSpreadRewards, MsgCollectSpreadRewardsResponse, MsgCollectIncentives, MsgCollectIncentivesResponse, MsgTransferPositions, MsgTransferPositionsResponse } from "./tx";
export interface Msg {
    createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
    withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
    /**
     * AddToPosition attempts to add amount0 and amount1 to a position
     * with the given position id.
     * To maintain backwards-compatibility with future implementations of
     * charging, this function deletes the old position and creates a new one with
     * the resulting amount after addition.
     */
    addToPosition(request: MsgAddToPosition): Promise<MsgAddToPositionResponse>;
    collectSpreadRewards(request: MsgCollectSpreadRewards): Promise<MsgCollectSpreadRewardsResponse>;
    collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
    /**
     * TransferPositions transfers ownership of a set of one or more positions
     * from a sender to a recipient.
     */
    transferPositions(request: MsgTransferPositions): Promise<MsgTransferPositionsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
    withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
    addToPosition(request: MsgAddToPosition): Promise<MsgAddToPositionResponse>;
    collectSpreadRewards(request: MsgCollectSpreadRewards): Promise<MsgCollectSpreadRewardsResponse>;
    collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
    transferPositions(request: MsgTransferPositions): Promise<MsgTransferPositionsResponse>;
}
