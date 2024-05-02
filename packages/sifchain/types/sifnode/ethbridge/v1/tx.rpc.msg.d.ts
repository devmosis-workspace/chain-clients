import { Rpc } from "../../../helpers";
import { MsgLock, MsgLockResponse, MsgBurn, MsgBurnResponse, MsgCreateEthBridgeClaim, MsgCreateEthBridgeClaimResponse, MsgUpdateWhiteListValidator, MsgUpdateWhiteListValidatorResponse, MsgUpdateCethReceiverAccount, MsgUpdateCethReceiverAccountResponse, MsgRescueCeth, MsgRescueCethResponse, MsgSetBlacklist, MsgSetBlacklistResponse, MsgPause, MsgPauseResponse } from "./tx";
/** Msg service for messages */
export interface Msg {
    lock(request: MsgLock): Promise<MsgLockResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    createEthBridgeClaim(request: MsgCreateEthBridgeClaim): Promise<MsgCreateEthBridgeClaimResponse>;
    updateWhiteListValidator(request: MsgUpdateWhiteListValidator): Promise<MsgUpdateWhiteListValidatorResponse>;
    updateCethReceiverAccount(request: MsgUpdateCethReceiverAccount): Promise<MsgUpdateCethReceiverAccountResponse>;
    rescueCeth(request: MsgRescueCeth): Promise<MsgRescueCethResponse>;
    setBlacklist(request: MsgSetBlacklist): Promise<MsgSetBlacklistResponse>;
    setPause(request: MsgPause): Promise<MsgPauseResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    lock(request: MsgLock): Promise<MsgLockResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    createEthBridgeClaim(request: MsgCreateEthBridgeClaim): Promise<MsgCreateEthBridgeClaimResponse>;
    updateWhiteListValidator(request: MsgUpdateWhiteListValidator): Promise<MsgUpdateWhiteListValidatorResponse>;
    updateCethReceiverAccount(request: MsgUpdateCethReceiverAccount): Promise<MsgUpdateCethReceiverAccountResponse>;
    rescueCeth(request: MsgRescueCeth): Promise<MsgRescueCethResponse>;
    setBlacklist(request: MsgSetBlacklist): Promise<MsgSetBlacklistResponse>;
    setPause(request: MsgPause): Promise<MsgPauseResponse>;
}
