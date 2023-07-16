import { Rpc } from "../helpers";
import { MsgRegisterInterchainQuery, MsgRegisterInterchainQueryResponse, MsgSubmitQueryResult, MsgSubmitQueryResultResponse, MsgRemoveInterchainQueryRequest, MsgRemoveInterchainQueryResponse, MsgUpdateInterchainQueryRequest, MsgUpdateInterchainQueryResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    registerInterchainQuery(request: MsgRegisterInterchainQuery): Promise<MsgRegisterInterchainQueryResponse>;
    submitQueryResult(request: MsgSubmitQueryResult): Promise<MsgSubmitQueryResultResponse>;
    removeInterchainQuery(request: MsgRemoveInterchainQueryRequest): Promise<MsgRemoveInterchainQueryResponse>;
    updateInterchainQuery(request: MsgUpdateInterchainQueryRequest): Promise<MsgUpdateInterchainQueryResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerInterchainQuery(request: MsgRegisterInterchainQuery): Promise<MsgRegisterInterchainQueryResponse>;
    submitQueryResult(request: MsgSubmitQueryResult): Promise<MsgSubmitQueryResultResponse>;
    removeInterchainQuery(request: MsgRemoveInterchainQueryRequest): Promise<MsgRemoveInterchainQueryResponse>;
    updateInterchainQuery(request: MsgUpdateInterchainQueryRequest): Promise<MsgUpdateInterchainQueryResponse>;
}
