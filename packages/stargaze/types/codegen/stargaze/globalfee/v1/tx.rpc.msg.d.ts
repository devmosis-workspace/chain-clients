import { Rpc } from "../../../helpers";
import { MsgSetCodeAuthorization, MsgSetCodeAuthorizationResponse, MsgRemoveCodeAuthorization, MsgRemoveCodeAuthorizationResponse, MsgSetContractAuthorization, MsgSetContractAuthorizationResponse, MsgRemoveContractAuthorization, MsgRemoveContractAuthorizationResponse } from "./tx";
/** Msg defines the alloc Msg service. */
export interface Msg {
    setCodeAuthorization(request: MsgSetCodeAuthorization): Promise<MsgSetCodeAuthorizationResponse>;
    removeCodeAuthorization(request: MsgRemoveCodeAuthorization): Promise<MsgRemoveCodeAuthorizationResponse>;
    setContractAuthorization(request: MsgSetContractAuthorization): Promise<MsgSetContractAuthorizationResponse>;
    removeContractAuthorization(request: MsgRemoveContractAuthorization): Promise<MsgRemoveContractAuthorizationResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setCodeAuthorization(request: MsgSetCodeAuthorization): Promise<MsgSetCodeAuthorizationResponse>;
    removeCodeAuthorization(request: MsgRemoveCodeAuthorization): Promise<MsgRemoveCodeAuthorizationResponse>;
    setContractAuthorization(request: MsgSetContractAuthorization): Promise<MsgSetContractAuthorizationResponse>;
    removeContractAuthorization(request: MsgRemoveContractAuthorization): Promise<MsgRemoveContractAuthorizationResponse>;
}
