import { Rpc } from "../../../helpers";
import { MsgRegisterFeePayContract, MsgRegisterFeePayContractResponse, MsgUnregisterFeePayContract, MsgUnregisterFeePayContractResponse, MsgFundFeePayContract, MsgFundFeePayContractResponse, MsgUpdateFeePayContractWalletLimit, MsgUpdateFeePayContractWalletLimitResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
    /** RegisterFeeShare registers a new contract for receiving transaction fees */
    registerFeePayContract(request: MsgRegisterFeePayContract): Promise<MsgRegisterFeePayContractResponse>;
    /** UnregisterFeeShare unregisters a contract for receiving transaction fees */
    unregisterFeePayContract(request: MsgUnregisterFeePayContract): Promise<MsgUnregisterFeePayContractResponse>;
    /** Fund a fee pay contract */
    fundFeePayContract(request: MsgFundFeePayContract): Promise<MsgFundFeePayContractResponse>;
    /** Update a fee pay contract wallet limit */
    updateFeePayContractWalletLimit(request: MsgUpdateFeePayContractWalletLimit): Promise<MsgUpdateFeePayContractWalletLimitResponse>;
    /** Update the params of the module through gov v1 type. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerFeePayContract(request: MsgRegisterFeePayContract): Promise<MsgRegisterFeePayContractResponse>;
    unregisterFeePayContract(request: MsgUnregisterFeePayContract): Promise<MsgUnregisterFeePayContractResponse>;
    fundFeePayContract(request: MsgFundFeePayContract): Promise<MsgFundFeePayContractResponse>;
    updateFeePayContractWalletLimit(request: MsgUpdateFeePayContractWalletLimit): Promise<MsgUpdateFeePayContractWalletLimitResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
