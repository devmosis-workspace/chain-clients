import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig;
    /** UnpinCode code on upload, optional */
    unpinCode: boolean;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
    title: string;
    description: string;
    run_as: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
    unpin_code: boolean;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
    title: string;
    description: string;
    run_as: string;
    admin: string;
    code_id: Long;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: Long;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
    title: string;
    description: string;
    contract: string;
    code_id: Long;
    msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
    title: string;
    description: string;
    contract: string;
    msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
    title: string;
    description: string;
    run_as: string;
    contract: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
    title: string;
    description: string;
    new_admin: string;
    contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
    title: string;
    description: string;
    contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    codeIds: Long[];
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
    title: string;
    description: string;
    code_ids: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    codeIds: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
    title: string;
    description: string;
    code_ids: Long[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
    /** CodeID is the reference to the stored WASM code to be updated */
    codeId: Long;
    /** InstantiatePermission to apply to the set of code ids */
    instantiatePermission?: AccessConfig;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateSDKType {
    code_id: Long;
    instantiate_permission?: AccessConfigSDKType;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /**
     * AccessConfigUpdate contains the list of code ids and the access config
     * to be applied.
     */
    accessConfigUpdates: AccessConfigUpdate[];
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposalSDKType {
    title: string;
    description: string;
    access_config_updates: AccessConfigUpdateSDKType[];
}
export declare const StoreCodeProposal: {
    encode(message: StoreCodeProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StoreCodeProposal;
    fromPartial(object: Partial<StoreCodeProposal>): StoreCodeProposal;
};
export declare const InstantiateContractProposal: {
    encode(message: InstantiateContractProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InstantiateContractProposal;
    fromPartial(object: Partial<InstantiateContractProposal>): InstantiateContractProposal;
};
export declare const MigrateContractProposal: {
    encode(message: MigrateContractProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MigrateContractProposal;
    fromPartial(object: Partial<MigrateContractProposal>): MigrateContractProposal;
};
export declare const SudoContractProposal: {
    encode(message: SudoContractProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SudoContractProposal;
    fromPartial(object: Partial<SudoContractProposal>): SudoContractProposal;
};
export declare const ExecuteContractProposal: {
    encode(message: ExecuteContractProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExecuteContractProposal;
    fromPartial(object: Partial<ExecuteContractProposal>): ExecuteContractProposal;
};
export declare const UpdateAdminProposal: {
    encode(message: UpdateAdminProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateAdminProposal;
    fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal;
};
export declare const ClearAdminProposal: {
    encode(message: ClearAdminProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClearAdminProposal;
    fromPartial(object: Partial<ClearAdminProposal>): ClearAdminProposal;
};
export declare const PinCodesProposal: {
    encode(message: PinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PinCodesProposal;
    fromPartial(object: Partial<PinCodesProposal>): PinCodesProposal;
};
export declare const UnpinCodesProposal: {
    encode(message: UnpinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UnpinCodesProposal;
    fromPartial(object: Partial<UnpinCodesProposal>): UnpinCodesProposal;
};
export declare const AccessConfigUpdate: {
    encode(message: AccessConfigUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AccessConfigUpdate;
    fromPartial(object: Partial<AccessConfigUpdate>): AccessConfigUpdate;
};
export declare const UpdateInstantiateConfigProposal: {
    encode(message: UpdateInstantiateConfigProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateInstantiateConfigProposal;
    fromPartial(object: Partial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal;
};
