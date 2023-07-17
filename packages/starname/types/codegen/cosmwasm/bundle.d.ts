import * as _0 from "./wasm/v1/genesis";
import * as _1 from "./wasm/v1/ibc";
import * as _2 from "./wasm/v1/proposal";
import * as _3 from "./wasm/v1/query";
import * as _4 from "./wasm/v1/tx";
import * as _5 from "./wasm/v1/types";
import * as _136 from "./wasm/v1/query.rpc.Query";
import * as _137 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _3.QueryContractInfoRequest): Promise<_3.QueryContractInfoResponse>;
                contractHistory(request: _3.QueryContractHistoryRequest): Promise<_3.QueryContractHistoryResponse>;
                contractsByCode(request: _3.QueryContractsByCodeRequest): Promise<_3.QueryContractsByCodeResponse>;
                allContractState(request: _3.QueryAllContractStateRequest): Promise<_3.QueryAllContractStateResponse>;
                rawContractState(request: _3.QueryRawContractStateRequest): Promise<_3.QueryRawContractStateResponse>;
                smartContractState(request: _3.QuerySmartContractStateRequest): Promise<_3.QuerySmartContractStateResponse>;
                code(request: _3.QueryCodeRequest): Promise<_3.QueryCodeResponse>;
                codes(request?: _3.QueryCodesRequest): Promise<_3.QueryCodesResponse>;
                pinnedCodes(request?: _3.QueryPinnedCodesRequest): Promise<_3.QueryPinnedCodesResponse>;
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _4.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _4.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _4.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _4.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _4.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _4.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _4.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _4.MsgStoreCode): {
                        typeUrl: string;
                        value: _4.MsgStoreCode;
                    };
                    instantiateContract(value: _4.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _4.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _4.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _4.MsgInstantiateContract2;
                    };
                    executeContract(value: _4.MsgExecuteContract): {
                        typeUrl: string;
                        value: _4.MsgExecuteContract;
                    };
                    migrateContract(value: _4.MsgMigrateContract): {
                        typeUrl: string;
                        value: _4.MsgMigrateContract;
                    };
                    updateAdmin(value: _4.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _4.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _4.MsgClearAdmin): {
                        typeUrl: string;
                        value: _4.MsgClearAdmin;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _4.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _4.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _4.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _4.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _4.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _4.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _4.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _4.MsgStoreCode): {
                        typeUrl: string;
                        value: _4.MsgStoreCode;
                    };
                    instantiateContract(value: _4.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _4.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _4.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _4.MsgInstantiateContract2;
                    };
                    executeContract(value: _4.MsgExecuteContract): {
                        typeUrl: string;
                        value: _4.MsgExecuteContract;
                    };
                    migrateContract(value: _4.MsgMigrateContract): {
                        typeUrl: string;
                        value: _4.MsgMigrateContract;
                    };
                    updateAdmin(value: _4.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _4.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _4.MsgClearAdmin): {
                        typeUrl: string;
                        value: _4.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _4.MsgStoreCode) => {
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
                    }) => _4.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _4.MsgInstantiateContract) => {
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
                    }) => _4.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _4.MsgInstantiateContract2) => {
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
                    }) => _4.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _4.MsgExecuteContract) => {
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
                    }) => _4.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _4.MsgMigrateContract) => {
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
                    }) => _4.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _4.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _4.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _4.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _4.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _5.AccessType;
            accessTypeToJSON(object: _5.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _5.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _5.ContractCodeHistoryOperationType): string;
            AccessType: typeof _5.AccessType;
            AccessTypeSDKType: typeof _5.AccessType;
            ContractCodeHistoryOperationType: typeof _5.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _5.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _5.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.AccessTypeParam;
                fromPartial(object: Partial<_5.AccessTypeParam>): _5.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _5.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.AccessConfig;
                fromPartial(object: Partial<_5.AccessConfig>): _5.AccessConfig;
            };
            Params: {
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Params;
                fromPartial(object: Partial<_5.Params>): _5.Params;
            };
            CodeInfo: {
                encode(message: _5.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.CodeInfo;
                fromPartial(object: Partial<_5.CodeInfo>): _5.CodeInfo;
            };
            ContractInfo: {
                encode(message: _5.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.ContractInfo;
                fromPartial(object: Partial<_5.ContractInfo>): _5.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _5.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_5.ContractCodeHistoryEntry>): _5.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _5.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.AbsoluteTxPosition;
                fromPartial(object: Partial<_5.AbsoluteTxPosition>): _5.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _5.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _5.Model;
                fromPartial(object: Partial<_5.Model>): _5.Model;
            };
            MsgStoreCode: {
                encode(message: _4.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgStoreCode;
                fromPartial(object: Partial<_4.MsgStoreCode>): _4.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _4.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgStoreCodeResponse;
                fromPartial(object: Partial<_4.MsgStoreCodeResponse>): _4.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _4.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgInstantiateContract;
                fromPartial(object: Partial<_4.MsgInstantiateContract>): _4.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _4.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgInstantiateContract2;
                fromPartial(object: Partial<_4.MsgInstantiateContract2>): _4.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _4.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_4.MsgInstantiateContractResponse>): _4.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _4.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_4.MsgInstantiateContract2Response>): _4.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _4.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgExecuteContract;
                fromPartial(object: Partial<_4.MsgExecuteContract>): _4.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _4.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgExecuteContractResponse;
                fromPartial(object: Partial<_4.MsgExecuteContractResponse>): _4.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _4.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgMigrateContract;
                fromPartial(object: Partial<_4.MsgMigrateContract>): _4.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _4.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgMigrateContractResponse;
                fromPartial(object: Partial<_4.MsgMigrateContractResponse>): _4.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _4.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgUpdateAdmin;
                fromPartial(object: Partial<_4.MsgUpdateAdmin>): _4.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _4.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _4.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_4.MsgUpdateAdminResponse>): _4.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _4.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _4.MsgClearAdmin;
                fromPartial(object: Partial<_4.MsgClearAdmin>): _4.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _4.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _4.MsgClearAdminResponse;
                fromPartial(_: Partial<_4.MsgClearAdminResponse>): _4.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _3.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryContractInfoRequest;
                fromPartial(object: Partial<_3.QueryContractInfoRequest>): _3.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _3.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryContractInfoResponse;
                fromPartial(object: Partial<_3.QueryContractInfoResponse>): _3.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _3.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryContractHistoryRequest;
                fromPartial(object: Partial<_3.QueryContractHistoryRequest>): _3.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _3.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryContractHistoryResponse;
                fromPartial(object: Partial<_3.QueryContractHistoryResponse>): _3.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _3.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_3.QueryContractsByCodeRequest>): _3.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _3.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_3.QueryContractsByCodeResponse>): _3.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _3.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryAllContractStateRequest;
                fromPartial(object: Partial<_3.QueryAllContractStateRequest>): _3.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _3.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryAllContractStateResponse;
                fromPartial(object: Partial<_3.QueryAllContractStateResponse>): _3.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _3.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryRawContractStateRequest;
                fromPartial(object: Partial<_3.QueryRawContractStateRequest>): _3.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _3.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryRawContractStateResponse;
                fromPartial(object: Partial<_3.QueryRawContractStateResponse>): _3.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _3.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_3.QuerySmartContractStateRequest>): _3.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _3.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_3.QuerySmartContractStateResponse>): _3.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _3.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryCodeRequest;
                fromPartial(object: Partial<_3.QueryCodeRequest>): _3.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _3.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.CodeInfoResponse;
                fromPartial(object: Partial<_3.CodeInfoResponse>): _3.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _3.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryCodeResponse;
                fromPartial(object: Partial<_3.QueryCodeResponse>): _3.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _3.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryCodesRequest;
                fromPartial(object: Partial<_3.QueryCodesRequest>): _3.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _3.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryCodesResponse;
                fromPartial(object: Partial<_3.QueryCodesResponse>): _3.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _3.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_3.QueryPinnedCodesRequest>): _3.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _3.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_3.QueryPinnedCodesResponse>): _3.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(_: any): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
            };
            StoreCodeProposal: {
                encode(message: _2.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.StoreCodeProposal;
                fromPartial(object: Partial<_2.StoreCodeProposal>): _2.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _2.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.InstantiateContractProposal;
                fromPartial(object: Partial<_2.InstantiateContractProposal>): _2.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _2.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.MigrateContractProposal;
                fromPartial(object: Partial<_2.MigrateContractProposal>): _2.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _2.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.SudoContractProposal;
                fromPartial(object: Partial<_2.SudoContractProposal>): _2.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _2.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.ExecuteContractProposal;
                fromPartial(object: Partial<_2.ExecuteContractProposal>): _2.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _2.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.UpdateAdminProposal;
                fromPartial(object: Partial<_2.UpdateAdminProposal>): _2.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _2.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.ClearAdminProposal;
                fromPartial(object: Partial<_2.ClearAdminProposal>): _2.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _2.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.PinCodesProposal;
                fromPartial(object: Partial<_2.PinCodesProposal>): _2.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _2.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.UnpinCodesProposal;
                fromPartial(object: Partial<_2.UnpinCodesProposal>): _2.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _2.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.AccessConfigUpdate;
                fromPartial(object: Partial<_2.AccessConfigUpdate>): _2.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _2.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _2.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_2.UpdateInstantiateConfigProposal>): _2.UpdateInstantiateConfigProposal;
            };
            MsgIBCSend: {
                encode(message: _1.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgIBCSend;
                fromPartial(object: Partial<_1.MsgIBCSend>): _1.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _1.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _1.MsgIBCCloseChannel;
                fromPartial(object: Partial<_1.MsgIBCCloseChannel>): _1.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _0.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _0.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.GenesisState_GenMsgs;
                fromPartial(object: Partial<_0.GenesisState_GenMsgs>): _0.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _0.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Code;
                fromPartial(object: Partial<_0.Code>): _0.Code;
            };
            Contract: {
                encode(message: _0.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Contract;
                fromPartial(object: Partial<_0.Contract>): _0.Contract;
            };
            Sequence: {
                encode(message: _0.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                fromJSON(object: any): _0.Sequence;
                fromPartial(object: Partial<_0.Sequence>): _0.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmwasm: {
                wasm: {
                    v1: _137.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _3.QueryContractInfoRequest): Promise<_3.QueryContractInfoResponse>;
                        contractHistory(request: _3.QueryContractHistoryRequest): Promise<_3.QueryContractHistoryResponse>;
                        contractsByCode(request: _3.QueryContractsByCodeRequest): Promise<_3.QueryContractsByCodeResponse>;
                        allContractState(request: _3.QueryAllContractStateRequest): Promise<_3.QueryAllContractStateResponse>;
                        rawContractState(request: _3.QueryRawContractStateRequest): Promise<_3.QueryRawContractStateResponse>;
                        smartContractState(request: _3.QuerySmartContractStateRequest): Promise<_3.QuerySmartContractStateResponse>;
                        code(request: _3.QueryCodeRequest): Promise<_3.QueryCodeResponse>;
                        codes(request?: _3.QueryCodesRequest): Promise<_3.QueryCodesResponse>;
                        pinnedCodes(request?: _3.QueryPinnedCodesRequest): Promise<_3.QueryPinnedCodesResponse>;
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
