import { Rpc } from "../../../helpers";
import { MsgUpdateContract, MsgUpdateContractResponse, MsgActivateContract, MsgActivateContractResponse, MsgDeactivateContract, MsgDeactivateContractResponse, MsgExecuteContractCompat, MsgExecuteContractCompatResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgRegisterContract, MsgRegisterContractResponse } from "./tx";
/** Msg defines the wasmx Msg service. */
export interface Msg {
    updateRegistryContractParams(request: MsgUpdateContract): Promise<MsgUpdateContractResponse>;
    activateRegistryContract(request: MsgActivateContract): Promise<MsgActivateContractResponse>;
    deactivateRegistryContract(request: MsgDeactivateContract): Promise<MsgDeactivateContractResponse>;
    executeContractCompat(request: MsgExecuteContractCompat): Promise<MsgExecuteContractCompatResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateRegistryContractParams(request: MsgUpdateContract): Promise<MsgUpdateContractResponse>;
    activateRegistryContract(request: MsgActivateContract): Promise<MsgActivateContractResponse>;
    deactivateRegistryContract(request: MsgDeactivateContract): Promise<MsgDeactivateContractResponse>;
    executeContractCompat(request: MsgExecuteContractCompat): Promise<MsgExecuteContractCompatResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
