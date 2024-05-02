import { Rpc } from "../../../helpers";
import { MsgAddAccount, MsgAddAccountResponse, MsgRemoveAccount, MsgRemoveAccountResponse, MsgSetParams, MsgSetParamsResponse } from "./tx";
export interface Msg {
    addAccount(request: MsgAddAccount): Promise<MsgAddAccountResponse>;
    removeAccount(request: MsgRemoveAccount): Promise<MsgRemoveAccountResponse>;
    setParams(request: MsgSetParams): Promise<MsgSetParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addAccount(request: MsgAddAccount): Promise<MsgAddAccountResponse>;
    removeAccount(request: MsgRemoveAccount): Promise<MsgRemoveAccountResponse>;
    setParams(request: MsgSetParams): Promise<MsgSetParamsResponse>;
}
