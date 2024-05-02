import { Rpc } from "../../../helpers";
import { MsgCreateDistribution, MsgCreateDistributionResponse, MsgCreateUserClaim, MsgCreateClaimResponse, MsgRunDistribution, MsgRunDistributionResponse } from "./tx";
export interface Msg {
    createDistribution(request: MsgCreateDistribution): Promise<MsgCreateDistributionResponse>;
    createUserClaim(request: MsgCreateUserClaim): Promise<MsgCreateClaimResponse>;
    runDistribution(request: MsgRunDistribution): Promise<MsgRunDistributionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createDistribution(request: MsgCreateDistribution): Promise<MsgCreateDistributionResponse>;
    createUserClaim(request: MsgCreateUserClaim): Promise<MsgCreateClaimResponse>;
    runDistribution(request: MsgRunDistribution): Promise<MsgRunDistributionResponse>;
}
