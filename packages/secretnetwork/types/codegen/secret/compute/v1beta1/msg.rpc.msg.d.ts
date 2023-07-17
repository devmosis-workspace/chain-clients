import { Rpc } from "../../../helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse } from "./msg";
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /** Instantiate creates a new smart contract instance for the given code id. */
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /** Execute submits the given message data to a smart contract */
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
}
