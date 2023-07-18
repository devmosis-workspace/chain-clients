import { Rpc } from "../../../helpers";
import { MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
/** Msg defines the community Msg service. */
export interface Msg {
    /** FundCommunityPool defines a method to allow an account to directly fund the community module account. */
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
}
