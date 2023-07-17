import { Rpc } from "../../../helpers";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse } from "./tx";
/** Msg defines the ica-authentication Msg service. */
export interface Msg {
    /** Register defines a rpc handler for MsgRegisterAccount */
    registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
