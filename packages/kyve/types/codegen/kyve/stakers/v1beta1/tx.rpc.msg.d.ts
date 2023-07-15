import { Rpc } from "../../../helpers";
import { MsgCreateStaker, MsgCreateStakerResponse, MsgUpdateMetadata, MsgUpdateMetadataResponse, MsgUpdateCommission, MsgUpdateCommissionResponse, MsgJoinPool, MsgJoinPoolResponse, MsgLeavePool, MsgLeavePoolResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** CreateStaker ... */
    createStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
    /** UpdateMetadata ... */
    updateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
    /** UpdateCommission ... */
    updateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse>;
    /** JoinPool ... */
    joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    /** LeavePool ... */
    leavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/stakers module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
    updateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
    updateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse>;
    joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
    leavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
