import { Rpc } from "../../../helpers";
import { MsgSubmitClaim, MsgSubmitClaimResponse } from "./messages";
import { MsgGovRemoveProtocolData, MsgGovRemoveProtocolDataResponse } from "./proposals";
/** Msg defines the participationrewards Msg service. */
export interface Msg {
    submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
    /**
     * SignalIntent defines a method for signalling voting intent for one or more
     * validators.
     */
    govRemoveProtocolData(request: MsgGovRemoveProtocolData): Promise<MsgGovRemoveProtocolDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
    govRemoveProtocolData(request: MsgGovRemoveProtocolData): Promise<MsgGovRemoveProtocolDataResponse>;
}
