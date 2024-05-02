import { Rpc } from "../../../helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgMigrateCode, MsgMigrateCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateContractAdmin, MsgUpdateContractAdminResponse, MsgClearContractAdmin, MsgClearContractAdminResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /** MigrateCode to submit new version Wasm code to the system */
    migrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse>;
    /** Instantiate creates a new smart contract instance for the given code id. */
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /** Execute submits the given message data to a smart contract */
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    /** UpdateContractAdmin sets a new admin for a smart contract */
    updateContractAdmin(request: MsgUpdateContractAdmin): Promise<MsgUpdateContractAdminResponse>;
    /** ClearContractAdmin remove admin flag from a smart contract */
    clearContractAdmin(request: MsgClearContractAdmin): Promise<MsgClearContractAdminResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    migrateCode(request: MsgMigrateCode): Promise<MsgMigrateCodeResponse>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    updateContractAdmin(request: MsgUpdateContractAdmin): Promise<MsgUpdateContractAdminResponse>;
    clearContractAdmin(request: MsgClearContractAdmin): Promise<MsgClearContractAdminResponse>;
}
