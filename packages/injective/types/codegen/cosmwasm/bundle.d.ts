import * as _190 from "./wasm/v1/authz";
import * as _191 from "./wasm/v1/genesis";
import * as _192 from "./wasm/v1/ibc";
import * as _193 from "./wasm/v1/proposal";
import * as _194 from "./wasm/v1/query";
import * as _195 from "./wasm/v1/tx";
import * as _196 from "./wasm/v1/types";
import * as _337 from "./wasm/v1/query.lcd";
import * as _338 from "./wasm/v1/query.rpc.Query";
import * as _339 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _339.MsgClientImpl;
            QueryClientImpl: typeof _338.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _194.QueryContractInfoRequest): Promise<_194.QueryContractInfoResponse>;
                contractHistory(request: _194.QueryContractHistoryRequest): Promise<_194.QueryContractHistoryResponse>;
                contractsByCode(request: _194.QueryContractsByCodeRequest): Promise<_194.QueryContractsByCodeResponse>;
                allContractState(request: _194.QueryAllContractStateRequest): Promise<_194.QueryAllContractStateResponse>;
                rawContractState(request: _194.QueryRawContractStateRequest): Promise<_194.QueryRawContractStateResponse>;
                smartContractState(request: _194.QuerySmartContractStateRequest): Promise<_194.QuerySmartContractStateResponse>;
                code(request: _194.QueryCodeRequest): Promise<_194.QueryCodeResponse>;
                codes(request?: _194.QueryCodesRequest): Promise<_194.QueryCodesResponse>;
                pinnedCodes(request?: _194.QueryPinnedCodesRequest): Promise<_194.QueryPinnedCodesResponse>;
                params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                contractsByCreator(request: _194.QueryContractsByCreatorRequest): Promise<_194.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _337.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _195.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _195.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _195.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _195.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _195.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _195.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _195.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _195.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _195.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _195.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _195.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _195.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _195.MsgStoreCode): {
                        typeUrl: string;
                        value: _195.MsgStoreCode;
                    };
                    instantiateContract(value: _195.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _195.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract2;
                    };
                    executeContract(value: _195.MsgExecuteContract): {
                        typeUrl: string;
                        value: _195.MsgExecuteContract;
                    };
                    migrateContract(value: _195.MsgMigrateContract): {
                        typeUrl: string;
                        value: _195.MsgMigrateContract;
                    };
                    updateAdmin(value: _195.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _195.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _195.MsgClearAdmin): {
                        typeUrl: string;
                        value: _195.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _195.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _195.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                    sudoContract(value: _195.MsgSudoContract): {
                        typeUrl: string;
                        value: _195.MsgSudoContract;
                    };
                    pinCodes(value: _195.MsgPinCodes): {
                        typeUrl: string;
                        value: _195.MsgPinCodes;
                    };
                    unpinCodes(value: _195.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _195.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _195.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgStoreAndInstantiateContract;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _195.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _195.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _195.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _195.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _195.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _195.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _195.MsgStoreCode): {
                        typeUrl: string;
                        value: _195.MsgStoreCode;
                    };
                    instantiateContract(value: _195.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _195.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract2;
                    };
                    executeContract(value: _195.MsgExecuteContract): {
                        typeUrl: string;
                        value: _195.MsgExecuteContract;
                    };
                    migrateContract(value: _195.MsgMigrateContract): {
                        typeUrl: string;
                        value: _195.MsgMigrateContract;
                    };
                    updateAdmin(value: _195.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _195.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _195.MsgClearAdmin): {
                        typeUrl: string;
                        value: _195.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _195.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _195.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                    sudoContract(value: _195.MsgSudoContract): {
                        typeUrl: string;
                        value: _195.MsgSudoContract;
                    };
                    pinCodes(value: _195.MsgPinCodes): {
                        typeUrl: string;
                        value: _195.MsgPinCodes;
                    };
                    unpinCodes(value: _195.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _195.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _195.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _195.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _195.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _195.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _195.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _195.MsgInstantiateContract2) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _195.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _195.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _195.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _195.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _195.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _195.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _195.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _195.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _195.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, newInstantiatePermission }: _195.MsgUpdateInstantiateConfig) => {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, code_id, new_instantiate_permission }: {
                        sender: string;
                        code_id: string;
                        new_instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _195.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _195.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            code_upload_access: {
                                permission: number;
                                address: string;
                                addresses: string[];
                            };
                            instantiate_default_permission: number;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            code_upload_access: {
                                permission: number;
                                address: string;
                                addresses: string[];
                            };
                            instantiate_default_permission: number;
                        };
                    }) => _195.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: ({ authority, contract, msg }: _195.MsgSudoContract) => {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ authority, contract, msg }: {
                        authority: string;
                        contract: string;
                        msg: Uint8Array;
                    }) => _195.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, codeIds }: _195.MsgPinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _195.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: ({ authority, codeIds }: _195.MsgUnpinCodes) => {
                        authority: string;
                        code_ids: string[];
                    };
                    fromAmino: ({ authority, code_ids }: {
                        authority: string;
                        code_ids: string[];
                    }) => _195.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ authority, wasmByteCode, instantiatePermission, unpinCode, admin, label, msg, funds, source, builder, codeHash }: _195.MsgStoreAndInstantiateContract) => {
                        authority: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                        unpin_code: boolean;
                        admin: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        source: string;
                        builder: string;
                        code_hash: Uint8Array;
                    };
                    fromAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash }: {
                        authority: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                        unpin_code: boolean;
                        admin: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        source: string;
                        builder: string;
                        code_hash: Uint8Array;
                    }) => _195.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _196.AccessType;
            accessTypeToJSON(object: _196.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _196.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _196.ContractCodeHistoryOperationType): string;
            AccessType: typeof _196.AccessType;
            AccessTypeSDKType: typeof _196.AccessType;
            ContractCodeHistoryOperationType: typeof _196.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _196.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _196.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.AccessTypeParam;
                fromPartial(object: Partial<_196.AccessTypeParam>): _196.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _196.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.AccessConfig;
                fromPartial(object: Partial<_196.AccessConfig>): _196.AccessConfig;
            };
            Params: {
                encode(message: _196.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.Params;
                fromPartial(object: Partial<_196.Params>): _196.Params;
            };
            CodeInfo: {
                encode(message: _196.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.CodeInfo;
                fromPartial(object: Partial<_196.CodeInfo>): _196.CodeInfo;
            };
            ContractInfo: {
                encode(message: _196.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.ContractInfo;
                fromPartial(object: Partial<_196.ContractInfo>): _196.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _196.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_196.ContractCodeHistoryEntry>): _196.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _196.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.AbsoluteTxPosition;
                fromPartial(object: Partial<_196.AbsoluteTxPosition>): _196.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _196.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.Model;
                fromPartial(object: Partial<_196.Model>): _196.Model;
            };
            EventCodeStored: {
                encode(message: _196.EventCodeStored, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.EventCodeStored;
                fromPartial(object: Partial<_196.EventCodeStored>): _196.EventCodeStored;
            };
            EventContractInstantiated: {
                encode(message: _196.EventContractInstantiated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.EventContractInstantiated;
                fromPartial(object: Partial<_196.EventContractInstantiated>): _196.EventContractInstantiated;
            };
            EventContractMigrated: {
                encode(message: _196.EventContractMigrated, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.EventContractMigrated;
                fromPartial(object: Partial<_196.EventContractMigrated>): _196.EventContractMigrated;
            };
            EventContractAdminSet: {
                encode(message: _196.EventContractAdminSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _196.EventContractAdminSet;
                fromPartial(object: Partial<_196.EventContractAdminSet>): _196.EventContractAdminSet;
            };
            MsgStoreCode: {
                encode(message: _195.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgStoreCode;
                fromPartial(object: Partial<_195.MsgStoreCode>): _195.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _195.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgStoreCodeResponse;
                fromPartial(object: Partial<_195.MsgStoreCodeResponse>): _195.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _195.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgInstantiateContract;
                fromPartial(object: Partial<_195.MsgInstantiateContract>): _195.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _195.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_195.MsgInstantiateContractResponse>): _195.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2: {
                encode(message: _195.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgInstantiateContract2;
                fromPartial(object: Partial<_195.MsgInstantiateContract2>): _195.MsgInstantiateContract2;
            };
            MsgInstantiateContract2Response: {
                encode(message: _195.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_195.MsgInstantiateContract2Response>): _195.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _195.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgExecuteContract;
                fromPartial(object: Partial<_195.MsgExecuteContract>): _195.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _195.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgExecuteContractResponse;
                fromPartial(object: Partial<_195.MsgExecuteContractResponse>): _195.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _195.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgMigrateContract;
                fromPartial(object: Partial<_195.MsgMigrateContract>): _195.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _195.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgMigrateContractResponse;
                fromPartial(object: Partial<_195.MsgMigrateContractResponse>): _195.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _195.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgUpdateAdmin;
                fromPartial(object: Partial<_195.MsgUpdateAdmin>): _195.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _195.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _195.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_195.MsgUpdateAdminResponse>): _195.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _195.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgClearAdmin;
                fromPartial(object: Partial<_195.MsgClearAdmin>): _195.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _195.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _195.MsgClearAdminResponse;
                fromPartial(_: Partial<_195.MsgClearAdminResponse>): _195.MsgClearAdminResponse;
            };
            MsgUpdateInstantiateConfig: {
                encode(message: _195.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_195.MsgUpdateInstantiateConfig>): _195.MsgUpdateInstantiateConfig;
            };
            MsgUpdateInstantiateConfigResponse: {
                encode(_: _195.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _195.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_195.MsgUpdateInstantiateConfigResponse>): _195.MsgUpdateInstantiateConfigResponse;
            };
            MsgUpdateParams: {
                encode(message: _195.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgUpdateParams;
                fromPartial(object: Partial<_195.MsgUpdateParams>): _195.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _195.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _195.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_195.MsgUpdateParamsResponse>): _195.MsgUpdateParamsResponse;
            };
            MsgSudoContract: {
                encode(message: _195.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgSudoContract;
                fromPartial(object: Partial<_195.MsgSudoContract>): _195.MsgSudoContract;
            };
            MsgSudoContractResponse: {
                encode(message: _195.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgSudoContractResponse;
                fromPartial(object: Partial<_195.MsgSudoContractResponse>): _195.MsgSudoContractResponse;
            };
            MsgPinCodes: {
                encode(message: _195.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgPinCodes;
                fromPartial(object: Partial<_195.MsgPinCodes>): _195.MsgPinCodes;
            };
            MsgPinCodesResponse: {
                encode(_: _195.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _195.MsgPinCodesResponse;
                fromPartial(_: Partial<_195.MsgPinCodesResponse>): _195.MsgPinCodesResponse;
            };
            MsgUnpinCodes: {
                encode(message: _195.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgUnpinCodes;
                fromPartial(object: Partial<_195.MsgUnpinCodes>): _195.MsgUnpinCodes;
            };
            MsgUnpinCodesResponse: {
                encode(_: _195.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _195.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_195.MsgUnpinCodesResponse>): _195.MsgUnpinCodesResponse;
            };
            MsgStoreAndInstantiateContract: {
                encode(message: _195.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_195.MsgStoreAndInstantiateContract>): _195.MsgStoreAndInstantiateContract;
            };
            MsgStoreAndInstantiateContractResponse: {
                encode(message: _195.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _195.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_195.MsgStoreAndInstantiateContractResponse>): _195.MsgStoreAndInstantiateContractResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _194.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractInfoRequest;
                fromPartial(object: Partial<_194.QueryContractInfoRequest>): _194.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _194.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractInfoResponse;
                fromPartial(object: Partial<_194.QueryContractInfoResponse>): _194.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _194.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractHistoryRequest;
                fromPartial(object: Partial<_194.QueryContractHistoryRequest>): _194.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _194.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractHistoryResponse;
                fromPartial(object: Partial<_194.QueryContractHistoryResponse>): _194.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _194.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_194.QueryContractsByCodeRequest>): _194.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _194.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_194.QueryContractsByCodeResponse>): _194.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _194.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryAllContractStateRequest;
                fromPartial(object: Partial<_194.QueryAllContractStateRequest>): _194.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _194.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryAllContractStateResponse;
                fromPartial(object: Partial<_194.QueryAllContractStateResponse>): _194.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _194.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryRawContractStateRequest;
                fromPartial(object: Partial<_194.QueryRawContractStateRequest>): _194.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _194.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryRawContractStateResponse;
                fromPartial(object: Partial<_194.QueryRawContractStateResponse>): _194.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _194.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_194.QuerySmartContractStateRequest>): _194.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _194.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_194.QuerySmartContractStateResponse>): _194.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _194.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryCodeRequest;
                fromPartial(object: Partial<_194.QueryCodeRequest>): _194.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _194.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.CodeInfoResponse;
                fromPartial(object: Partial<_194.CodeInfoResponse>): _194.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _194.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryCodeResponse;
                fromPartial(object: Partial<_194.QueryCodeResponse>): _194.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _194.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryCodesRequest;
                fromPartial(object: Partial<_194.QueryCodesRequest>): _194.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _194.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryCodesResponse;
                fromPartial(object: Partial<_194.QueryCodesResponse>): _194.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _194.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_194.QueryPinnedCodesRequest>): _194.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _194.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_194.QueryPinnedCodesResponse>): _194.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _194.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _194.QueryParamsRequest;
                fromPartial(_: Partial<_194.QueryParamsRequest>): _194.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _194.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryParamsResponse;
                fromPartial(object: Partial<_194.QueryParamsResponse>): _194.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _194.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_194.QueryContractsByCreatorRequest>): _194.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _194.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _194.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_194.QueryContractsByCreatorResponse>): _194.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _193.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.StoreCodeProposal;
                fromPartial(object: Partial<_193.StoreCodeProposal>): _193.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _193.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.InstantiateContractProposal;
                fromPartial(object: Partial<_193.InstantiateContractProposal>): _193.InstantiateContractProposal;
            };
            InstantiateContract2Proposal: {
                encode(message: _193.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.InstantiateContract2Proposal;
                fromPartial(object: Partial<_193.InstantiateContract2Proposal>): _193.InstantiateContract2Proposal;
            };
            MigrateContractProposal: {
                encode(message: _193.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.MigrateContractProposal;
                fromPartial(object: Partial<_193.MigrateContractProposal>): _193.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _193.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.SudoContractProposal;
                fromPartial(object: Partial<_193.SudoContractProposal>): _193.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _193.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.ExecuteContractProposal;
                fromPartial(object: Partial<_193.ExecuteContractProposal>): _193.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _193.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.UpdateAdminProposal;
                fromPartial(object: Partial<_193.UpdateAdminProposal>): _193.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _193.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.ClearAdminProposal;
                fromPartial(object: Partial<_193.ClearAdminProposal>): _193.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _193.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.PinCodesProposal;
                fromPartial(object: Partial<_193.PinCodesProposal>): _193.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _193.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.UnpinCodesProposal;
                fromPartial(object: Partial<_193.UnpinCodesProposal>): _193.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _193.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.AccessConfigUpdate;
                fromPartial(object: Partial<_193.AccessConfigUpdate>): _193.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _193.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_193.UpdateInstantiateConfigProposal>): _193.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _193.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _193.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_193.StoreAndInstantiateContractProposal>): _193.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _192.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _192.MsgIBCSend;
                fromPartial(object: Partial<_192.MsgIBCSend>): _192.MsgIBCSend;
            };
            MsgIBCSendResponse: {
                encode(message: _192.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _192.MsgIBCSendResponse;
                fromPartial(object: Partial<_192.MsgIBCSendResponse>): _192.MsgIBCSendResponse;
            };
            MsgIBCCloseChannel: {
                encode(message: _192.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _192.MsgIBCCloseChannel;
                fromPartial(object: Partial<_192.MsgIBCCloseChannel>): _192.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _191.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _191.GenesisState;
                fromPartial(object: Partial<_191.GenesisState>): _191.GenesisState;
            };
            Code: {
                encode(message: _191.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _191.Code;
                fromPartial(object: Partial<_191.Code>): _191.Code;
            };
            Contract: {
                encode(message: _191.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _191.Contract;
                fromPartial(object: Partial<_191.Contract>): _191.Contract;
            };
            Sequence: {
                encode(message: _191.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _191.Sequence;
                fromPartial(object: Partial<_191.Sequence>): _191.Sequence;
            };
            ContractExecutionAuthorization: {
                encode(message: _190.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.ContractExecutionAuthorization;
                fromPartial(object: Partial<_190.ContractExecutionAuthorization>): _190.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _190.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.ContractMigrationAuthorization;
                fromPartial(object: Partial<_190.ContractMigrationAuthorization>): _190.ContractMigrationAuthorization;
            };
            ContractGrant: {
                encode(message: _190.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.ContractGrant;
                fromPartial(object: Partial<_190.ContractGrant>): _190.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _190.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.MaxCallsLimit;
                fromPartial(object: Partial<_190.MaxCallsLimit>): _190.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _190.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.MaxFundsLimit;
                fromPartial(object: Partial<_190.MaxFundsLimit>): _190.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _190.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.CombinedLimit;
                fromPartial(object: Partial<_190.CombinedLimit>): _190.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _190.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _190.AllowAllMessagesFilter;
                fromPartial(_: Partial<_190.AllowAllMessagesFilter>): _190.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _190.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_190.AcceptedMessageKeysFilter>): _190.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _190.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _190.AcceptedMessagesFilter;
                fromPartial(object: Partial<_190.AcceptedMessagesFilter>): _190.AcceptedMessagesFilter;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _339.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _194.QueryContractInfoRequest): Promise<_194.QueryContractInfoResponse>;
                        contractHistory(request: _194.QueryContractHistoryRequest): Promise<_194.QueryContractHistoryResponse>;
                        contractsByCode(request: _194.QueryContractsByCodeRequest): Promise<_194.QueryContractsByCodeResponse>;
                        allContractState(request: _194.QueryAllContractStateRequest): Promise<_194.QueryAllContractStateResponse>;
                        rawContractState(request: _194.QueryRawContractStateRequest): Promise<_194.QueryRawContractStateResponse>;
                        smartContractState(request: _194.QuerySmartContractStateRequest): Promise<_194.QuerySmartContractStateResponse>;
                        code(request: _194.QueryCodeRequest): Promise<_194.QueryCodeResponse>;
                        codes(request?: _194.QueryCodesRequest): Promise<_194.QueryCodesResponse>;
                        pinnedCodes(request?: _194.QueryPinnedCodesRequest): Promise<_194.QueryPinnedCodesResponse>;
                        params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                        contractsByCreator(request: _194.QueryContractsByCreatorRequest): Promise<_194.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _337.LCDQueryClient;
                };
            };
        }>;
    };
}
