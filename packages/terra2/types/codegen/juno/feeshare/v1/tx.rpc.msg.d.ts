import { Rpc } from "../../../helpers";
import { MsgRegisterFeeShare, MsgRegisterFeeShareResponse, MsgUpdateFeeShare, MsgUpdateFeeShareResponse, MsgCancelFeeShare, MsgCancelFeeShareResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
    /** RegisterFeeShare registers a new contract for receiving transaction fees */
    registerFeeShare(request: MsgRegisterFeeShare): Promise<MsgRegisterFeeShareResponse>;
    /** UpdateFeeShare updates the withdrawer address of a FeeShare */
    updateFeeShare(request: MsgUpdateFeeShare): Promise<MsgUpdateFeeShareResponse>;
    /**
     * CancelFeeShare cancels a contract's fee registration and further receival
     * of transaction fees
     */
    cancelFeeShare(request: MsgCancelFeeShare): Promise<MsgCancelFeeShareResponse>;
    /** Update the params of the module through gov v1 type. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerFeeShare(request: MsgRegisterFeeShare): Promise<MsgRegisterFeeShareResponse>;
    updateFeeShare(request: MsgUpdateFeeShare): Promise<MsgUpdateFeeShareResponse>;
    cancelFeeShare(request: MsgCancelFeeShare): Promise<MsgCancelFeeShareResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
