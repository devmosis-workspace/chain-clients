import { Rpc } from "../../../helpers";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSubmitTx, MsgSubmitTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    registerInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse>;
    submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse>;
    submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
