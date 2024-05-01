import * as _92 from "./wasm/v1/authz";
import * as _93 from "./wasm/v1/genesis";
import * as _94 from "./wasm/v1/ibc";
import * as _95 from "./wasm/v1/proposal";
import * as _96 from "./wasm/v1/query";
import * as _97 from "./wasm/v1/tx";
import * as _98 from "./wasm/v1/types";
import * as _204 from "./wasm/v1/query.lcd";
import * as _205 from "./wasm/v1/query.rpc.Query";
import * as _206 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _206.MsgClientImpl;
            QueryClientImpl: typeof _205.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                contractInfo(request: _96.QueryContractInfoRequest): Promise<_96.QueryContractInfoResponse>;
                contractHistory(request: _96.QueryContractHistoryRequest): Promise<_96.QueryContractHistoryResponse>;
                contractsByCode(request: _96.QueryContractsByCodeRequest): Promise<_96.QueryContractsByCodeResponse>;
                allContractState(request: _96.QueryAllContractStateRequest): Promise<_96.QueryAllContractStateResponse>;
                rawContractState(request: _96.QueryRawContractStateRequest): Promise<_96.QueryRawContractStateResponse>;
                smartContractState(request: _96.QuerySmartContractStateRequest): Promise<_96.QuerySmartContractStateResponse>;
                code(request: _96.QueryCodeRequest): Promise<_96.QueryCodeResponse>;
                codes(request?: _96.QueryCodesRequest): Promise<_96.QueryCodesResponse>;
                pinnedCodes(request?: _96.QueryPinnedCodesRequest): Promise<_96.QueryPinnedCodesResponse>;
                params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
                contractsByCreator(request: _96.QueryContractsByCreatorRequest): Promise<_96.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _97.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _97.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _97.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _97.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _97.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _97.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _97.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _97.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _97.MsgStoreCode): {
                        typeUrl: string;
                        value: _97.MsgStoreCode;
                    };
                    instantiateContract(value: _97.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _97.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract2;
                    };
                    executeContract(value: _97.MsgExecuteContract): {
                        typeUrl: string;
                        value: _97.MsgExecuteContract;
                    };
                    migrateContract(value: _97.MsgMigrateContract): {
                        typeUrl: string;
                        value: _97.MsgMigrateContract;
                    };
                    updateAdmin(value: _97.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _97.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _97.MsgClearAdmin): {
                        typeUrl: string;
                        value: _97.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _97.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _97.MsgUpdateInstantiateConfig;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _97.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _97.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _97.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _97.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _97.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _97.MsgUpdateInstantiateConfig;
                    };
                };
                fromPartial: {
                    storeCode(value: _97.MsgStoreCode): {
                        typeUrl: string;
                        value: _97.MsgStoreCode;
                    };
                    instantiateContract(value: _97.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _97.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract2;
                    };
                    executeContract(value: _97.MsgExecuteContract): {
                        typeUrl: string;
                        value: _97.MsgExecuteContract;
                    };
                    migrateContract(value: _97.MsgMigrateContract): {
                        typeUrl: string;
                        value: _97.MsgMigrateContract;
                    };
                    updateAdmin(value: _97.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _97.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _97.MsgClearAdmin): {
                        typeUrl: string;
                        value: _97.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _97.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _97.MsgUpdateInstantiateConfig;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _97.MsgStoreCode) => _97.MsgStoreCodeAmino;
                    fromAmino: (object: _97.MsgStoreCodeAmino) => _97.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _97.MsgInstantiateContract) => _97.MsgInstantiateContractAmino;
                    fromAmino: (object: _97.MsgInstantiateContractAmino) => _97.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _97.MsgInstantiateContract2) => _97.MsgInstantiateContract2Amino;
                    fromAmino: (object: _97.MsgInstantiateContract2Amino) => _97.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _97.MsgExecuteContract) => _97.MsgExecuteContractAmino;
                    fromAmino: (object: _97.MsgExecuteContractAmino) => _97.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _97.MsgMigrateContract) => _97.MsgMigrateContractAmino;
                    fromAmino: (object: _97.MsgMigrateContractAmino) => _97.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _97.MsgUpdateAdmin) => _97.MsgUpdateAdminAmino;
                    fromAmino: (object: _97.MsgUpdateAdminAmino) => _97.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _97.MsgClearAdmin) => _97.MsgClearAdminAmino;
                    fromAmino: (object: _97.MsgClearAdminAmino) => _97.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _97.MsgUpdateInstantiateConfig) => _97.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _97.MsgUpdateInstantiateConfigAmino) => _97.MsgUpdateInstantiateConfig;
                };
            };
            accessTypeFromJSON(object: any): _98.AccessType;
            accessTypeToJSON(object: _98.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _98.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _98.ContractCodeHistoryOperationType): string;
            AccessType: typeof _98.AccessType;
            AccessTypeSDKType: typeof _98.AccessType;
            AccessTypeAmino: typeof _98.AccessType;
            ContractCodeHistoryOperationType: typeof _98.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _98.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _98.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _98.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.AccessTypeParam;
                fromPartial(object: Partial<_98.AccessTypeParam>): _98.AccessTypeParam;
                fromAmino(object: _98.AccessTypeParamAmino): _98.AccessTypeParam;
                toAmino(message: _98.AccessTypeParam): _98.AccessTypeParamAmino;
                fromAminoMsg(object: _98.AccessTypeParamAminoMsg): _98.AccessTypeParam;
                toAminoMsg(message: _98.AccessTypeParam): _98.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _98.AccessTypeParamProtoMsg): _98.AccessTypeParam;
                toProto(message: _98.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _98.AccessTypeParam): _98.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _98.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.AccessConfig;
                fromPartial(object: Partial<_98.AccessConfig>): _98.AccessConfig;
                fromAmino(object: _98.AccessConfigAmino): _98.AccessConfig;
                toAmino(message: _98.AccessConfig): _98.AccessConfigAmino;
                fromAminoMsg(object: _98.AccessConfigAminoMsg): _98.AccessConfig;
                toAminoMsg(message: _98.AccessConfig): _98.AccessConfigAminoMsg;
                fromProtoMsg(message: _98.AccessConfigProtoMsg): _98.AccessConfig;
                toProto(message: _98.AccessConfig): Uint8Array;
                toProtoMsg(message: _98.AccessConfig): _98.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _98.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Params;
                fromPartial(object: Partial<_98.Params>): _98.Params;
                fromAmino(object: _98.ParamsAmino): _98.Params;
                toAmino(message: _98.Params): _98.ParamsAmino;
                fromAminoMsg(object: _98.ParamsAminoMsg): _98.Params;
                toAminoMsg(message: _98.Params): _98.ParamsAminoMsg;
                fromProtoMsg(message: _98.ParamsProtoMsg): _98.Params;
                toProto(message: _98.Params): Uint8Array;
                toProtoMsg(message: _98.Params): _98.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _98.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.CodeInfo;
                fromPartial(object: Partial<_98.CodeInfo>): _98.CodeInfo;
                fromAmino(object: _98.CodeInfoAmino): _98.CodeInfo;
                toAmino(message: _98.CodeInfo): _98.CodeInfoAmino;
                fromAminoMsg(object: _98.CodeInfoAminoMsg): _98.CodeInfo;
                toAminoMsg(message: _98.CodeInfo): _98.CodeInfoAminoMsg;
                fromProtoMsg(message: _98.CodeInfoProtoMsg): _98.CodeInfo;
                toProto(message: _98.CodeInfo): Uint8Array;
                toProtoMsg(message: _98.CodeInfo): _98.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _98.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.ContractInfo;
                fromPartial(object: Partial<_98.ContractInfo>): _98.ContractInfo;
                fromAmino(object: _98.ContractInfoAmino): _98.ContractInfo;
                toAmino(message: _98.ContractInfo): _98.ContractInfoAmino;
                fromAminoMsg(object: _98.ContractInfoAminoMsg): _98.ContractInfo;
                toAminoMsg(message: _98.ContractInfo): _98.ContractInfoAminoMsg;
                fromProtoMsg(message: _98.ContractInfoProtoMsg): _98.ContractInfo;
                toProto(message: _98.ContractInfo): Uint8Array;
                toProtoMsg(message: _98.ContractInfo): _98.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _98.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_98.ContractCodeHistoryEntry>): _98.ContractCodeHistoryEntry;
                fromAmino(object: _98.ContractCodeHistoryEntryAmino): _98.ContractCodeHistoryEntry;
                toAmino(message: _98.ContractCodeHistoryEntry): _98.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _98.ContractCodeHistoryEntryAminoMsg): _98.ContractCodeHistoryEntry;
                toAminoMsg(message: _98.ContractCodeHistoryEntry): _98.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _98.ContractCodeHistoryEntryProtoMsg): _98.ContractCodeHistoryEntry;
                toProto(message: _98.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _98.ContractCodeHistoryEntry): _98.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _98.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.AbsoluteTxPosition;
                fromPartial(object: Partial<_98.AbsoluteTxPosition>): _98.AbsoluteTxPosition;
                fromAmino(object: _98.AbsoluteTxPositionAmino): _98.AbsoluteTxPosition;
                toAmino(message: _98.AbsoluteTxPosition): _98.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _98.AbsoluteTxPositionAminoMsg): _98.AbsoluteTxPosition;
                toAminoMsg(message: _98.AbsoluteTxPosition): _98.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _98.AbsoluteTxPositionProtoMsg): _98.AbsoluteTxPosition;
                toProto(message: _98.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _98.AbsoluteTxPosition): _98.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _98.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _98.Model;
                fromPartial(object: Partial<_98.Model>): _98.Model;
                fromAmino(object: _98.ModelAmino): _98.Model;
                toAmino(message: _98.Model): _98.ModelAmino;
                fromAminoMsg(object: _98.ModelAminoMsg): _98.Model;
                toAminoMsg(message: _98.Model): _98.ModelAminoMsg;
                fromProtoMsg(message: _98.ModelProtoMsg): _98.Model;
                toProto(message: _98.Model): Uint8Array;
                toProtoMsg(message: _98.Model): _98.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _97.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgStoreCode;
                fromPartial(object: Partial<_97.MsgStoreCode>): _97.MsgStoreCode;
                fromAmino(object: _97.MsgStoreCodeAmino): _97.MsgStoreCode;
                toAmino(message: _97.MsgStoreCode): _97.MsgStoreCodeAmino;
                fromAminoMsg(object: _97.MsgStoreCodeAminoMsg): _97.MsgStoreCode;
                toAminoMsg(message: _97.MsgStoreCode): _97.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _97.MsgStoreCodeProtoMsg): _97.MsgStoreCode;
                toProto(message: _97.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _97.MsgStoreCode): _97.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _97.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgStoreCodeResponse;
                fromPartial(object: Partial<_97.MsgStoreCodeResponse>): _97.MsgStoreCodeResponse;
                fromAmino(object: _97.MsgStoreCodeResponseAmino): _97.MsgStoreCodeResponse;
                toAmino(message: _97.MsgStoreCodeResponse): _97.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _97.MsgStoreCodeResponseAminoMsg): _97.MsgStoreCodeResponse;
                toAminoMsg(message: _97.MsgStoreCodeResponse): _97.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _97.MsgStoreCodeResponseProtoMsg): _97.MsgStoreCodeResponse;
                toProto(message: _97.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _97.MsgStoreCodeResponse): _97.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _97.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgInstantiateContract;
                fromPartial(object: Partial<_97.MsgInstantiateContract>): _97.MsgInstantiateContract;
                fromAmino(object: _97.MsgInstantiateContractAmino): _97.MsgInstantiateContract;
                toAmino(message: _97.MsgInstantiateContract): _97.MsgInstantiateContractAmino;
                fromAminoMsg(object: _97.MsgInstantiateContractAminoMsg): _97.MsgInstantiateContract;
                toAminoMsg(message: _97.MsgInstantiateContract): _97.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _97.MsgInstantiateContractProtoMsg): _97.MsgInstantiateContract;
                toProto(message: _97.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _97.MsgInstantiateContract): _97.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _97.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgInstantiateContract2;
                fromPartial(object: Partial<_97.MsgInstantiateContract2>): _97.MsgInstantiateContract2;
                fromAmino(object: _97.MsgInstantiateContract2Amino): _97.MsgInstantiateContract2;
                toAmino(message: _97.MsgInstantiateContract2): _97.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _97.MsgInstantiateContract2AminoMsg): _97.MsgInstantiateContract2;
                toAminoMsg(message: _97.MsgInstantiateContract2): _97.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _97.MsgInstantiateContract2ProtoMsg): _97.MsgInstantiateContract2;
                toProto(message: _97.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _97.MsgInstantiateContract2): _97.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _97.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_97.MsgInstantiateContractResponse>): _97.MsgInstantiateContractResponse;
                fromAmino(object: _97.MsgInstantiateContractResponseAmino): _97.MsgInstantiateContractResponse;
                toAmino(message: _97.MsgInstantiateContractResponse): _97.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _97.MsgInstantiateContractResponseAminoMsg): _97.MsgInstantiateContractResponse;
                toAminoMsg(message: _97.MsgInstantiateContractResponse): _97.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _97.MsgInstantiateContractResponseProtoMsg): _97.MsgInstantiateContractResponse;
                toProto(message: _97.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _97.MsgInstantiateContractResponse): _97.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _97.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_97.MsgInstantiateContract2Response>): _97.MsgInstantiateContract2Response;
                fromAmino(object: _97.MsgInstantiateContract2ResponseAmino): _97.MsgInstantiateContract2Response;
                toAmino(message: _97.MsgInstantiateContract2Response): _97.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _97.MsgInstantiateContract2ResponseAminoMsg): _97.MsgInstantiateContract2Response;
                toAminoMsg(message: _97.MsgInstantiateContract2Response): _97.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _97.MsgInstantiateContract2ResponseProtoMsg): _97.MsgInstantiateContract2Response;
                toProto(message: _97.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _97.MsgInstantiateContract2Response): _97.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _97.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgExecuteContract;
                fromPartial(object: Partial<_97.MsgExecuteContract>): _97.MsgExecuteContract;
                fromAmino(object: _97.MsgExecuteContractAmino): _97.MsgExecuteContract;
                toAmino(message: _97.MsgExecuteContract): _97.MsgExecuteContractAmino;
                fromAminoMsg(object: _97.MsgExecuteContractAminoMsg): _97.MsgExecuteContract;
                toAminoMsg(message: _97.MsgExecuteContract): _97.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _97.MsgExecuteContractProtoMsg): _97.MsgExecuteContract;
                toProto(message: _97.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _97.MsgExecuteContract): _97.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _97.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgExecuteContractResponse;
                fromPartial(object: Partial<_97.MsgExecuteContractResponse>): _97.MsgExecuteContractResponse;
                fromAmino(object: _97.MsgExecuteContractResponseAmino): _97.MsgExecuteContractResponse;
                toAmino(message: _97.MsgExecuteContractResponse): _97.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _97.MsgExecuteContractResponseAminoMsg): _97.MsgExecuteContractResponse;
                toAminoMsg(message: _97.MsgExecuteContractResponse): _97.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _97.MsgExecuteContractResponseProtoMsg): _97.MsgExecuteContractResponse;
                toProto(message: _97.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _97.MsgExecuteContractResponse): _97.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _97.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgMigrateContract;
                fromPartial(object: Partial<_97.MsgMigrateContract>): _97.MsgMigrateContract;
                fromAmino(object: _97.MsgMigrateContractAmino): _97.MsgMigrateContract;
                toAmino(message: _97.MsgMigrateContract): _97.MsgMigrateContractAmino;
                fromAminoMsg(object: _97.MsgMigrateContractAminoMsg): _97.MsgMigrateContract;
                toAminoMsg(message: _97.MsgMigrateContract): _97.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _97.MsgMigrateContractProtoMsg): _97.MsgMigrateContract;
                toProto(message: _97.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _97.MsgMigrateContract): _97.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _97.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgMigrateContractResponse;
                fromPartial(object: Partial<_97.MsgMigrateContractResponse>): _97.MsgMigrateContractResponse;
                fromAmino(object: _97.MsgMigrateContractResponseAmino): _97.MsgMigrateContractResponse;
                toAmino(message: _97.MsgMigrateContractResponse): _97.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _97.MsgMigrateContractResponseAminoMsg): _97.MsgMigrateContractResponse;
                toAminoMsg(message: _97.MsgMigrateContractResponse): _97.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _97.MsgMigrateContractResponseProtoMsg): _97.MsgMigrateContractResponse;
                toProto(message: _97.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _97.MsgMigrateContractResponse): _97.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _97.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgUpdateAdmin;
                fromPartial(object: Partial<_97.MsgUpdateAdmin>): _97.MsgUpdateAdmin;
                fromAmino(object: _97.MsgUpdateAdminAmino): _97.MsgUpdateAdmin;
                toAmino(message: _97.MsgUpdateAdmin): _97.MsgUpdateAdminAmino;
                fromAminoMsg(object: _97.MsgUpdateAdminAminoMsg): _97.MsgUpdateAdmin;
                toAminoMsg(message: _97.MsgUpdateAdmin): _97.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _97.MsgUpdateAdminProtoMsg): _97.MsgUpdateAdmin;
                toProto(message: _97.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _97.MsgUpdateAdmin): _97.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _97.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_97.MsgUpdateAdminResponse>): _97.MsgUpdateAdminResponse;
                fromAmino(_: _97.MsgUpdateAdminResponseAmino): _97.MsgUpdateAdminResponse;
                toAmino(_: _97.MsgUpdateAdminResponse): _97.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _97.MsgUpdateAdminResponseAminoMsg): _97.MsgUpdateAdminResponse;
                toAminoMsg(message: _97.MsgUpdateAdminResponse): _97.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _97.MsgUpdateAdminResponseProtoMsg): _97.MsgUpdateAdminResponse;
                toProto(message: _97.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _97.MsgUpdateAdminResponse): _97.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _97.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgClearAdmin;
                fromPartial(object: Partial<_97.MsgClearAdmin>): _97.MsgClearAdmin;
                fromAmino(object: _97.MsgClearAdminAmino): _97.MsgClearAdmin;
                toAmino(message: _97.MsgClearAdmin): _97.MsgClearAdminAmino;
                fromAminoMsg(object: _97.MsgClearAdminAminoMsg): _97.MsgClearAdmin;
                toAminoMsg(message: _97.MsgClearAdmin): _97.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _97.MsgClearAdminProtoMsg): _97.MsgClearAdmin;
                toProto(message: _97.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _97.MsgClearAdmin): _97.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _97.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgClearAdminResponse;
                fromPartial(_: Partial<_97.MsgClearAdminResponse>): _97.MsgClearAdminResponse;
                fromAmino(_: _97.MsgClearAdminResponseAmino): _97.MsgClearAdminResponse;
                toAmino(_: _97.MsgClearAdminResponse): _97.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _97.MsgClearAdminResponseAminoMsg): _97.MsgClearAdminResponse;
                toAminoMsg(message: _97.MsgClearAdminResponse): _97.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _97.MsgClearAdminResponseProtoMsg): _97.MsgClearAdminResponse;
                toProto(message: _97.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _97.MsgClearAdminResponse): _97.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _97.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _97.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_97.MsgUpdateInstantiateConfig>): _97.MsgUpdateInstantiateConfig;
                fromAmino(object: _97.MsgUpdateInstantiateConfigAmino): _97.MsgUpdateInstantiateConfig;
                toAmino(message: _97.MsgUpdateInstantiateConfig): _97.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _97.MsgUpdateInstantiateConfigAminoMsg): _97.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _97.MsgUpdateInstantiateConfig): _97.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _97.MsgUpdateInstantiateConfigProtoMsg): _97.MsgUpdateInstantiateConfig;
                toProto(message: _97.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _97.MsgUpdateInstantiateConfig): _97.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _97.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _97.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_97.MsgUpdateInstantiateConfigResponse>): _97.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _97.MsgUpdateInstantiateConfigResponseAmino): _97.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _97.MsgUpdateInstantiateConfigResponse): _97.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _97.MsgUpdateInstantiateConfigResponseAminoMsg): _97.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _97.MsgUpdateInstantiateConfigResponse): _97.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _97.MsgUpdateInstantiateConfigResponseProtoMsg): _97.MsgUpdateInstantiateConfigResponse;
                toProto(message: _97.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _97.MsgUpdateInstantiateConfigResponse): _97.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _96.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractInfoRequest;
                fromPartial(object: Partial<_96.QueryContractInfoRequest>): _96.QueryContractInfoRequest;
                fromAmino(object: _96.QueryContractInfoRequestAmino): _96.QueryContractInfoRequest;
                toAmino(message: _96.QueryContractInfoRequest): _96.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _96.QueryContractInfoRequestAminoMsg): _96.QueryContractInfoRequest;
                toAminoMsg(message: _96.QueryContractInfoRequest): _96.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _96.QueryContractInfoRequestProtoMsg): _96.QueryContractInfoRequest;
                toProto(message: _96.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _96.QueryContractInfoRequest): _96.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _96.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractInfoResponse;
                fromPartial(object: Partial<_96.QueryContractInfoResponse>): _96.QueryContractInfoResponse;
                fromAmino(object: _96.QueryContractInfoResponseAmino): _96.QueryContractInfoResponse;
                toAmino(message: _96.QueryContractInfoResponse): _96.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _96.QueryContractInfoResponseAminoMsg): _96.QueryContractInfoResponse;
                toAminoMsg(message: _96.QueryContractInfoResponse): _96.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _96.QueryContractInfoResponseProtoMsg): _96.QueryContractInfoResponse;
                toProto(message: _96.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _96.QueryContractInfoResponse): _96.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _96.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractHistoryRequest;
                fromPartial(object: Partial<_96.QueryContractHistoryRequest>): _96.QueryContractHistoryRequest;
                fromAmino(object: _96.QueryContractHistoryRequestAmino): _96.QueryContractHistoryRequest;
                toAmino(message: _96.QueryContractHistoryRequest): _96.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _96.QueryContractHistoryRequestAminoMsg): _96.QueryContractHistoryRequest;
                toAminoMsg(message: _96.QueryContractHistoryRequest): _96.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _96.QueryContractHistoryRequestProtoMsg): _96.QueryContractHistoryRequest;
                toProto(message: _96.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _96.QueryContractHistoryRequest): _96.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _96.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractHistoryResponse;
                fromPartial(object: Partial<_96.QueryContractHistoryResponse>): _96.QueryContractHistoryResponse;
                fromAmino(object: _96.QueryContractHistoryResponseAmino): _96.QueryContractHistoryResponse;
                toAmino(message: _96.QueryContractHistoryResponse): _96.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _96.QueryContractHistoryResponseAminoMsg): _96.QueryContractHistoryResponse;
                toAminoMsg(message: _96.QueryContractHistoryResponse): _96.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _96.QueryContractHistoryResponseProtoMsg): _96.QueryContractHistoryResponse;
                toProto(message: _96.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _96.QueryContractHistoryResponse): _96.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _96.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_96.QueryContractsByCodeRequest>): _96.QueryContractsByCodeRequest;
                fromAmino(object: _96.QueryContractsByCodeRequestAmino): _96.QueryContractsByCodeRequest;
                toAmino(message: _96.QueryContractsByCodeRequest): _96.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _96.QueryContractsByCodeRequestAminoMsg): _96.QueryContractsByCodeRequest;
                toAminoMsg(message: _96.QueryContractsByCodeRequest): _96.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _96.QueryContractsByCodeRequestProtoMsg): _96.QueryContractsByCodeRequest;
                toProto(message: _96.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _96.QueryContractsByCodeRequest): _96.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _96.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_96.QueryContractsByCodeResponse>): _96.QueryContractsByCodeResponse;
                fromAmino(object: _96.QueryContractsByCodeResponseAmino): _96.QueryContractsByCodeResponse;
                toAmino(message: _96.QueryContractsByCodeResponse): _96.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _96.QueryContractsByCodeResponseAminoMsg): _96.QueryContractsByCodeResponse;
                toAminoMsg(message: _96.QueryContractsByCodeResponse): _96.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _96.QueryContractsByCodeResponseProtoMsg): _96.QueryContractsByCodeResponse;
                toProto(message: _96.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _96.QueryContractsByCodeResponse): _96.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _96.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllContractStateRequest;
                fromPartial(object: Partial<_96.QueryAllContractStateRequest>): _96.QueryAllContractStateRequest;
                fromAmino(object: _96.QueryAllContractStateRequestAmino): _96.QueryAllContractStateRequest;
                toAmino(message: _96.QueryAllContractStateRequest): _96.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _96.QueryAllContractStateRequestAminoMsg): _96.QueryAllContractStateRequest;
                toAminoMsg(message: _96.QueryAllContractStateRequest): _96.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllContractStateRequestProtoMsg): _96.QueryAllContractStateRequest;
                toProto(message: _96.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllContractStateRequest): _96.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _96.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryAllContractStateResponse;
                fromPartial(object: Partial<_96.QueryAllContractStateResponse>): _96.QueryAllContractStateResponse;
                fromAmino(object: _96.QueryAllContractStateResponseAmino): _96.QueryAllContractStateResponse;
                toAmino(message: _96.QueryAllContractStateResponse): _96.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _96.QueryAllContractStateResponseAminoMsg): _96.QueryAllContractStateResponse;
                toAminoMsg(message: _96.QueryAllContractStateResponse): _96.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllContractStateResponseProtoMsg): _96.QueryAllContractStateResponse;
                toProto(message: _96.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllContractStateResponse): _96.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _96.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryRawContractStateRequest;
                fromPartial(object: Partial<_96.QueryRawContractStateRequest>): _96.QueryRawContractStateRequest;
                fromAmino(object: _96.QueryRawContractStateRequestAmino): _96.QueryRawContractStateRequest;
                toAmino(message: _96.QueryRawContractStateRequest): _96.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _96.QueryRawContractStateRequestAminoMsg): _96.QueryRawContractStateRequest;
                toAminoMsg(message: _96.QueryRawContractStateRequest): _96.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _96.QueryRawContractStateRequestProtoMsg): _96.QueryRawContractStateRequest;
                toProto(message: _96.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _96.QueryRawContractStateRequest): _96.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _96.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryRawContractStateResponse;
                fromPartial(object: Partial<_96.QueryRawContractStateResponse>): _96.QueryRawContractStateResponse;
                fromAmino(object: _96.QueryRawContractStateResponseAmino): _96.QueryRawContractStateResponse;
                toAmino(message: _96.QueryRawContractStateResponse): _96.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _96.QueryRawContractStateResponseAminoMsg): _96.QueryRawContractStateResponse;
                toAminoMsg(message: _96.QueryRawContractStateResponse): _96.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _96.QueryRawContractStateResponseProtoMsg): _96.QueryRawContractStateResponse;
                toProto(message: _96.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _96.QueryRawContractStateResponse): _96.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _96.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_96.QuerySmartContractStateRequest>): _96.QuerySmartContractStateRequest;
                fromAmino(object: _96.QuerySmartContractStateRequestAmino): _96.QuerySmartContractStateRequest;
                toAmino(message: _96.QuerySmartContractStateRequest): _96.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _96.QuerySmartContractStateRequestAminoMsg): _96.QuerySmartContractStateRequest;
                toAminoMsg(message: _96.QuerySmartContractStateRequest): _96.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _96.QuerySmartContractStateRequestProtoMsg): _96.QuerySmartContractStateRequest;
                toProto(message: _96.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _96.QuerySmartContractStateRequest): _96.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _96.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_96.QuerySmartContractStateResponse>): _96.QuerySmartContractStateResponse;
                fromAmino(object: _96.QuerySmartContractStateResponseAmino): _96.QuerySmartContractStateResponse;
                toAmino(message: _96.QuerySmartContractStateResponse): _96.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _96.QuerySmartContractStateResponseAminoMsg): _96.QuerySmartContractStateResponse;
                toAminoMsg(message: _96.QuerySmartContractStateResponse): _96.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _96.QuerySmartContractStateResponseProtoMsg): _96.QuerySmartContractStateResponse;
                toProto(message: _96.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _96.QuerySmartContractStateResponse): _96.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _96.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryCodeRequest;
                fromPartial(object: Partial<_96.QueryCodeRequest>): _96.QueryCodeRequest;
                fromAmino(object: _96.QueryCodeRequestAmino): _96.QueryCodeRequest;
                toAmino(message: _96.QueryCodeRequest): _96.QueryCodeRequestAmino;
                fromAminoMsg(object: _96.QueryCodeRequestAminoMsg): _96.QueryCodeRequest;
                toAminoMsg(message: _96.QueryCodeRequest): _96.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _96.QueryCodeRequestProtoMsg): _96.QueryCodeRequest;
                toProto(message: _96.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _96.QueryCodeRequest): _96.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _96.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.CodeInfoResponse;
                fromPartial(object: Partial<_96.CodeInfoResponse>): _96.CodeInfoResponse;
                fromAmino(object: _96.CodeInfoResponseAmino): _96.CodeInfoResponse;
                toAmino(message: _96.CodeInfoResponse): _96.CodeInfoResponseAmino;
                fromAminoMsg(object: _96.CodeInfoResponseAminoMsg): _96.CodeInfoResponse;
                toAminoMsg(message: _96.CodeInfoResponse): _96.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _96.CodeInfoResponseProtoMsg): _96.CodeInfoResponse;
                toProto(message: _96.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _96.CodeInfoResponse): _96.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _96.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryCodeResponse;
                fromPartial(object: Partial<_96.QueryCodeResponse>): _96.QueryCodeResponse;
                fromAmino(object: _96.QueryCodeResponseAmino): _96.QueryCodeResponse;
                toAmino(message: _96.QueryCodeResponse): _96.QueryCodeResponseAmino;
                fromAminoMsg(object: _96.QueryCodeResponseAminoMsg): _96.QueryCodeResponse;
                toAminoMsg(message: _96.QueryCodeResponse): _96.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _96.QueryCodeResponseProtoMsg): _96.QueryCodeResponse;
                toProto(message: _96.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _96.QueryCodeResponse): _96.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _96.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryCodesRequest;
                fromPartial(object: Partial<_96.QueryCodesRequest>): _96.QueryCodesRequest;
                fromAmino(object: _96.QueryCodesRequestAmino): _96.QueryCodesRequest;
                toAmino(message: _96.QueryCodesRequest): _96.QueryCodesRequestAmino;
                fromAminoMsg(object: _96.QueryCodesRequestAminoMsg): _96.QueryCodesRequest;
                toAminoMsg(message: _96.QueryCodesRequest): _96.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _96.QueryCodesRequestProtoMsg): _96.QueryCodesRequest;
                toProto(message: _96.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryCodesRequest): _96.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _96.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryCodesResponse;
                fromPartial(object: Partial<_96.QueryCodesResponse>): _96.QueryCodesResponse;
                fromAmino(object: _96.QueryCodesResponseAmino): _96.QueryCodesResponse;
                toAmino(message: _96.QueryCodesResponse): _96.QueryCodesResponseAmino;
                fromAminoMsg(object: _96.QueryCodesResponseAminoMsg): _96.QueryCodesResponse;
                toAminoMsg(message: _96.QueryCodesResponse): _96.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _96.QueryCodesResponseProtoMsg): _96.QueryCodesResponse;
                toProto(message: _96.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryCodesResponse): _96.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _96.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_96.QueryPinnedCodesRequest>): _96.QueryPinnedCodesRequest;
                fromAmino(object: _96.QueryPinnedCodesRequestAmino): _96.QueryPinnedCodesRequest;
                toAmino(message: _96.QueryPinnedCodesRequest): _96.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _96.QueryPinnedCodesRequestAminoMsg): _96.QueryPinnedCodesRequest;
                toAminoMsg(message: _96.QueryPinnedCodesRequest): _96.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _96.QueryPinnedCodesRequestProtoMsg): _96.QueryPinnedCodesRequest;
                toProto(message: _96.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryPinnedCodesRequest): _96.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _96.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_96.QueryPinnedCodesResponse>): _96.QueryPinnedCodesResponse;
                fromAmino(object: _96.QueryPinnedCodesResponseAmino): _96.QueryPinnedCodesResponse;
                toAmino(message: _96.QueryPinnedCodesResponse): _96.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _96.QueryPinnedCodesResponseAminoMsg): _96.QueryPinnedCodesResponse;
                toAminoMsg(message: _96.QueryPinnedCodesResponse): _96.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _96.QueryPinnedCodesResponseProtoMsg): _96.QueryPinnedCodesResponse;
                toProto(message: _96.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryPinnedCodesResponse): _96.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _96.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _96.QueryParamsRequest;
                fromPartial(_: Partial<_96.QueryParamsRequest>): _96.QueryParamsRequest;
                fromAmino(_: _96.QueryParamsRequestAmino): _96.QueryParamsRequest;
                toAmino(_: _96.QueryParamsRequest): _96.QueryParamsRequestAmino;
                fromAminoMsg(object: _96.QueryParamsRequestAminoMsg): _96.QueryParamsRequest;
                toAminoMsg(message: _96.QueryParamsRequest): _96.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _96.QueryParamsRequestProtoMsg): _96.QueryParamsRequest;
                toProto(message: _96.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _96.QueryParamsRequest): _96.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _96.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryParamsResponse;
                fromPartial(object: Partial<_96.QueryParamsResponse>): _96.QueryParamsResponse;
                fromAmino(object: _96.QueryParamsResponseAmino): _96.QueryParamsResponse;
                toAmino(message: _96.QueryParamsResponse): _96.QueryParamsResponseAmino;
                fromAminoMsg(object: _96.QueryParamsResponseAminoMsg): _96.QueryParamsResponse;
                toAminoMsg(message: _96.QueryParamsResponse): _96.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _96.QueryParamsResponseProtoMsg): _96.QueryParamsResponse;
                toProto(message: _96.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _96.QueryParamsResponse): _96.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _96.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_96.QueryContractsByCreatorRequest>): _96.QueryContractsByCreatorRequest;
                fromAmino(object: _96.QueryContractsByCreatorRequestAmino): _96.QueryContractsByCreatorRequest;
                toAmino(message: _96.QueryContractsByCreatorRequest): _96.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _96.QueryContractsByCreatorRequestAminoMsg): _96.QueryContractsByCreatorRequest;
                toAminoMsg(message: _96.QueryContractsByCreatorRequest): _96.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _96.QueryContractsByCreatorRequestProtoMsg): _96.QueryContractsByCreatorRequest;
                toProto(message: _96.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _96.QueryContractsByCreatorRequest): _96.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _96.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _96.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_96.QueryContractsByCreatorResponse>): _96.QueryContractsByCreatorResponse;
                fromAmino(object: _96.QueryContractsByCreatorResponseAmino): _96.QueryContractsByCreatorResponse;
                toAmino(message: _96.QueryContractsByCreatorResponse): _96.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _96.QueryContractsByCreatorResponseAminoMsg): _96.QueryContractsByCreatorResponse;
                toAminoMsg(message: _96.QueryContractsByCreatorResponse): _96.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _96.QueryContractsByCreatorResponseProtoMsg): _96.QueryContractsByCreatorResponse;
                toProto(message: _96.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _96.QueryContractsByCreatorResponse): _96.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _95.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.StoreCodeProposal;
                fromPartial(object: Partial<_95.StoreCodeProposal>): _95.StoreCodeProposal;
                fromAmino(object: _95.StoreCodeProposalAmino): _95.StoreCodeProposal;
                toAmino(message: _95.StoreCodeProposal): _95.StoreCodeProposalAmino;
                fromAminoMsg(object: _95.StoreCodeProposalAminoMsg): _95.StoreCodeProposal;
                toAminoMsg(message: _95.StoreCodeProposal): _95.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _95.StoreCodeProposalProtoMsg): _95.StoreCodeProposal;
                toProto(message: _95.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _95.StoreCodeProposal): _95.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _95.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.InstantiateContractProposal;
                fromPartial(object: Partial<_95.InstantiateContractProposal>): _95.InstantiateContractProposal;
                fromAmino(object: _95.InstantiateContractProposalAmino): _95.InstantiateContractProposal;
                toAmino(message: _95.InstantiateContractProposal): _95.InstantiateContractProposalAmino;
                fromAminoMsg(object: _95.InstantiateContractProposalAminoMsg): _95.InstantiateContractProposal;
                toAminoMsg(message: _95.InstantiateContractProposal): _95.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _95.InstantiateContractProposalProtoMsg): _95.InstantiateContractProposal;
                toProto(message: _95.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _95.InstantiateContractProposal): _95.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _95.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.InstantiateContract2Proposal;
                fromPartial(object: Partial<_95.InstantiateContract2Proposal>): _95.InstantiateContract2Proposal;
                fromAmino(object: _95.InstantiateContract2ProposalAmino): _95.InstantiateContract2Proposal;
                toAmino(message: _95.InstantiateContract2Proposal): _95.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _95.InstantiateContract2ProposalAminoMsg): _95.InstantiateContract2Proposal;
                toAminoMsg(message: _95.InstantiateContract2Proposal): _95.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _95.InstantiateContract2ProposalProtoMsg): _95.InstantiateContract2Proposal;
                toProto(message: _95.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _95.InstantiateContract2Proposal): _95.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _95.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.MigrateContractProposal;
                fromPartial(object: Partial<_95.MigrateContractProposal>): _95.MigrateContractProposal;
                fromAmino(object: _95.MigrateContractProposalAmino): _95.MigrateContractProposal;
                toAmino(message: _95.MigrateContractProposal): _95.MigrateContractProposalAmino;
                fromAminoMsg(object: _95.MigrateContractProposalAminoMsg): _95.MigrateContractProposal;
                toAminoMsg(message: _95.MigrateContractProposal): _95.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _95.MigrateContractProposalProtoMsg): _95.MigrateContractProposal;
                toProto(message: _95.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _95.MigrateContractProposal): _95.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _95.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.SudoContractProposal;
                fromPartial(object: Partial<_95.SudoContractProposal>): _95.SudoContractProposal;
                fromAmino(object: _95.SudoContractProposalAmino): _95.SudoContractProposal;
                toAmino(message: _95.SudoContractProposal): _95.SudoContractProposalAmino;
                fromAminoMsg(object: _95.SudoContractProposalAminoMsg): _95.SudoContractProposal;
                toAminoMsg(message: _95.SudoContractProposal): _95.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _95.SudoContractProposalProtoMsg): _95.SudoContractProposal;
                toProto(message: _95.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _95.SudoContractProposal): _95.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _95.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ExecuteContractProposal;
                fromPartial(object: Partial<_95.ExecuteContractProposal>): _95.ExecuteContractProposal;
                fromAmino(object: _95.ExecuteContractProposalAmino): _95.ExecuteContractProposal;
                toAmino(message: _95.ExecuteContractProposal): _95.ExecuteContractProposalAmino;
                fromAminoMsg(object: _95.ExecuteContractProposalAminoMsg): _95.ExecuteContractProposal;
                toAminoMsg(message: _95.ExecuteContractProposal): _95.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _95.ExecuteContractProposalProtoMsg): _95.ExecuteContractProposal;
                toProto(message: _95.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _95.ExecuteContractProposal): _95.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _95.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.UpdateAdminProposal;
                fromPartial(object: Partial<_95.UpdateAdminProposal>): _95.UpdateAdminProposal;
                fromAmino(object: _95.UpdateAdminProposalAmino): _95.UpdateAdminProposal;
                toAmino(message: _95.UpdateAdminProposal): _95.UpdateAdminProposalAmino;
                fromAminoMsg(object: _95.UpdateAdminProposalAminoMsg): _95.UpdateAdminProposal;
                toAminoMsg(message: _95.UpdateAdminProposal): _95.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _95.UpdateAdminProposalProtoMsg): _95.UpdateAdminProposal;
                toProto(message: _95.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _95.UpdateAdminProposal): _95.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _95.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.ClearAdminProposal;
                fromPartial(object: Partial<_95.ClearAdminProposal>): _95.ClearAdminProposal;
                fromAmino(object: _95.ClearAdminProposalAmino): _95.ClearAdminProposal;
                toAmino(message: _95.ClearAdminProposal): _95.ClearAdminProposalAmino;
                fromAminoMsg(object: _95.ClearAdminProposalAminoMsg): _95.ClearAdminProposal;
                toAminoMsg(message: _95.ClearAdminProposal): _95.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _95.ClearAdminProposalProtoMsg): _95.ClearAdminProposal;
                toProto(message: _95.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _95.ClearAdminProposal): _95.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _95.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.PinCodesProposal;
                fromPartial(object: Partial<_95.PinCodesProposal>): _95.PinCodesProposal;
                fromAmino(object: _95.PinCodesProposalAmino): _95.PinCodesProposal;
                toAmino(message: _95.PinCodesProposal): _95.PinCodesProposalAmino;
                fromAminoMsg(object: _95.PinCodesProposalAminoMsg): _95.PinCodesProposal;
                toAminoMsg(message: _95.PinCodesProposal): _95.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _95.PinCodesProposalProtoMsg): _95.PinCodesProposal;
                toProto(message: _95.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _95.PinCodesProposal): _95.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _95.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.UnpinCodesProposal;
                fromPartial(object: Partial<_95.UnpinCodesProposal>): _95.UnpinCodesProposal;
                fromAmino(object: _95.UnpinCodesProposalAmino): _95.UnpinCodesProposal;
                toAmino(message: _95.UnpinCodesProposal): _95.UnpinCodesProposalAmino;
                fromAminoMsg(object: _95.UnpinCodesProposalAminoMsg): _95.UnpinCodesProposal;
                toAminoMsg(message: _95.UnpinCodesProposal): _95.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _95.UnpinCodesProposalProtoMsg): _95.UnpinCodesProposal;
                toProto(message: _95.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _95.UnpinCodesProposal): _95.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _95.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.AccessConfigUpdate;
                fromPartial(object: Partial<_95.AccessConfigUpdate>): _95.AccessConfigUpdate;
                fromAmino(object: _95.AccessConfigUpdateAmino): _95.AccessConfigUpdate;
                toAmino(message: _95.AccessConfigUpdate): _95.AccessConfigUpdateAmino;
                fromAminoMsg(object: _95.AccessConfigUpdateAminoMsg): _95.AccessConfigUpdate;
                toAminoMsg(message: _95.AccessConfigUpdate): _95.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _95.AccessConfigUpdateProtoMsg): _95.AccessConfigUpdate;
                toProto(message: _95.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _95.AccessConfigUpdate): _95.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _95.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_95.UpdateInstantiateConfigProposal>): _95.UpdateInstantiateConfigProposal;
                fromAmino(object: _95.UpdateInstantiateConfigProposalAmino): _95.UpdateInstantiateConfigProposal;
                toAmino(message: _95.UpdateInstantiateConfigProposal): _95.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _95.UpdateInstantiateConfigProposalAminoMsg): _95.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _95.UpdateInstantiateConfigProposal): _95.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _95.UpdateInstantiateConfigProposalProtoMsg): _95.UpdateInstantiateConfigProposal;
                toProto(message: _95.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _95.UpdateInstantiateConfigProposal): _95.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _95.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _95.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_95.StoreAndInstantiateContractProposal>): _95.StoreAndInstantiateContractProposal;
                fromAmino(object: _95.StoreAndInstantiateContractProposalAmino): _95.StoreAndInstantiateContractProposal;
                toAmino(message: _95.StoreAndInstantiateContractProposal): _95.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _95.StoreAndInstantiateContractProposalAminoMsg): _95.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _95.StoreAndInstantiateContractProposal): _95.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _95.StoreAndInstantiateContractProposalProtoMsg): _95.StoreAndInstantiateContractProposal;
                toProto(message: _95.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _95.StoreAndInstantiateContractProposal): _95.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _94.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgIBCSend;
                fromPartial(object: Partial<_94.MsgIBCSend>): _94.MsgIBCSend;
                fromAmino(object: _94.MsgIBCSendAmino): _94.MsgIBCSend;
                toAmino(message: _94.MsgIBCSend): _94.MsgIBCSendAmino;
                fromAminoMsg(object: _94.MsgIBCSendAminoMsg): _94.MsgIBCSend;
                toAminoMsg(message: _94.MsgIBCSend): _94.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _94.MsgIBCSendProtoMsg): _94.MsgIBCSend;
                toProto(message: _94.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _94.MsgIBCSend): _94.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _94.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgIBCSendResponse;
                fromPartial(object: Partial<_94.MsgIBCSendResponse>): _94.MsgIBCSendResponse;
                fromAmino(object: _94.MsgIBCSendResponseAmino): _94.MsgIBCSendResponse;
                toAmino(message: _94.MsgIBCSendResponse): _94.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _94.MsgIBCSendResponseAminoMsg): _94.MsgIBCSendResponse;
                toAminoMsg(message: _94.MsgIBCSendResponse): _94.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _94.MsgIBCSendResponseProtoMsg): _94.MsgIBCSendResponse;
                toProto(message: _94.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _94.MsgIBCSendResponse): _94.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _94.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _94.MsgIBCCloseChannel;
                fromPartial(object: Partial<_94.MsgIBCCloseChannel>): _94.MsgIBCCloseChannel;
                fromAmino(object: _94.MsgIBCCloseChannelAmino): _94.MsgIBCCloseChannel;
                toAmino(message: _94.MsgIBCCloseChannel): _94.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _94.MsgIBCCloseChannelAminoMsg): _94.MsgIBCCloseChannel;
                toAminoMsg(message: _94.MsgIBCCloseChannel): _94.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _94.MsgIBCCloseChannelProtoMsg): _94.MsgIBCCloseChannel;
                toProto(message: _94.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _94.MsgIBCCloseChannel): _94.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.GenesisState;
                fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                toProto(message: _93.GenesisState): Uint8Array;
                toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _93.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Code;
                fromPartial(object: Partial<_93.Code>): _93.Code;
                fromAmino(object: _93.CodeAmino): _93.Code;
                toAmino(message: _93.Code): _93.CodeAmino;
                fromAminoMsg(object: _93.CodeAminoMsg): _93.Code;
                toAminoMsg(message: _93.Code): _93.CodeAminoMsg;
                fromProtoMsg(message: _93.CodeProtoMsg): _93.Code;
                toProto(message: _93.Code): Uint8Array;
                toProtoMsg(message: _93.Code): _93.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _93.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Contract;
                fromPartial(object: Partial<_93.Contract>): _93.Contract;
                fromAmino(object: _93.ContractAmino): _93.Contract;
                toAmino(message: _93.Contract): _93.ContractAmino;
                fromAminoMsg(object: _93.ContractAminoMsg): _93.Contract;
                toAminoMsg(message: _93.Contract): _93.ContractAminoMsg;
                fromProtoMsg(message: _93.ContractProtoMsg): _93.Contract;
                toProto(message: _93.Contract): Uint8Array;
                toProtoMsg(message: _93.Contract): _93.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _93.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _93.Sequence;
                fromPartial(object: Partial<_93.Sequence>): _93.Sequence;
                fromAmino(object: _93.SequenceAmino): _93.Sequence;
                toAmino(message: _93.Sequence): _93.SequenceAmino;
                fromAminoMsg(object: _93.SequenceAminoMsg): _93.Sequence;
                toAminoMsg(message: _93.Sequence): _93.SequenceAminoMsg;
                fromProtoMsg(message: _93.SequenceProtoMsg): _93.Sequence;
                toProto(message: _93.Sequence): Uint8Array;
                toProtoMsg(message: _93.Sequence): _93.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _92.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.ContractExecutionAuthorization;
                fromPartial(object: Partial<_92.ContractExecutionAuthorization>): _92.ContractExecutionAuthorization;
                fromAmino(object: _92.ContractExecutionAuthorizationAmino): _92.ContractExecutionAuthorization;
                toAmino(message: _92.ContractExecutionAuthorization): _92.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _92.ContractExecutionAuthorizationAminoMsg): _92.ContractExecutionAuthorization;
                toAminoMsg(message: _92.ContractExecutionAuthorization): _92.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _92.ContractExecutionAuthorizationProtoMsg): _92.ContractExecutionAuthorization;
                toProto(message: _92.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _92.ContractExecutionAuthorization): _92.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _92.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.ContractMigrationAuthorization;
                fromPartial(object: Partial<_92.ContractMigrationAuthorization>): _92.ContractMigrationAuthorization;
                fromAmino(object: _92.ContractMigrationAuthorizationAmino): _92.ContractMigrationAuthorization;
                toAmino(message: _92.ContractMigrationAuthorization): _92.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _92.ContractMigrationAuthorizationAminoMsg): _92.ContractMigrationAuthorization;
                toAminoMsg(message: _92.ContractMigrationAuthorization): _92.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _92.ContractMigrationAuthorizationProtoMsg): _92.ContractMigrationAuthorization;
                toProto(message: _92.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _92.ContractMigrationAuthorization): _92.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _92.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.ContractGrant;
                fromPartial(object: Partial<_92.ContractGrant>): _92.ContractGrant;
                fromAmino(object: _92.ContractGrantAmino): _92.ContractGrant;
                toAmino(message: _92.ContractGrant): _92.ContractGrantAmino;
                fromAminoMsg(object: _92.ContractGrantAminoMsg): _92.ContractGrant;
                toAminoMsg(message: _92.ContractGrant): _92.ContractGrantAminoMsg;
                fromProtoMsg(message: _92.ContractGrantProtoMsg): _92.ContractGrant;
                toProto(message: _92.ContractGrant): Uint8Array;
                toProtoMsg(message: _92.ContractGrant): _92.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _92.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MaxCallsLimit;
                fromPartial(object: Partial<_92.MaxCallsLimit>): _92.MaxCallsLimit;
                fromAmino(object: _92.MaxCallsLimitAmino): _92.MaxCallsLimit;
                toAmino(message: _92.MaxCallsLimit): _92.MaxCallsLimitAmino;
                fromAminoMsg(object: _92.MaxCallsLimitAminoMsg): _92.MaxCallsLimit;
                toAminoMsg(message: _92.MaxCallsLimit): _92.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _92.MaxCallsLimitProtoMsg): _92.MaxCallsLimit;
                toProto(message: _92.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _92.MaxCallsLimit): _92.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _92.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.MaxFundsLimit;
                fromPartial(object: Partial<_92.MaxFundsLimit>): _92.MaxFundsLimit;
                fromAmino(object: _92.MaxFundsLimitAmino): _92.MaxFundsLimit;
                toAmino(message: _92.MaxFundsLimit): _92.MaxFundsLimitAmino;
                fromAminoMsg(object: _92.MaxFundsLimitAminoMsg): _92.MaxFundsLimit;
                toAminoMsg(message: _92.MaxFundsLimit): _92.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _92.MaxFundsLimitProtoMsg): _92.MaxFundsLimit;
                toProto(message: _92.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _92.MaxFundsLimit): _92.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _92.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.CombinedLimit;
                fromPartial(object: Partial<_92.CombinedLimit>): _92.CombinedLimit;
                fromAmino(object: _92.CombinedLimitAmino): _92.CombinedLimit;
                toAmino(message: _92.CombinedLimit): _92.CombinedLimitAmino;
                fromAminoMsg(object: _92.CombinedLimitAminoMsg): _92.CombinedLimit;
                toAminoMsg(message: _92.CombinedLimit): _92.CombinedLimitAminoMsg;
                fromProtoMsg(message: _92.CombinedLimitProtoMsg): _92.CombinedLimit;
                toProto(message: _92.CombinedLimit): Uint8Array;
                toProtoMsg(message: _92.CombinedLimit): _92.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _92.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _92.AllowAllMessagesFilter;
                fromPartial(_: Partial<_92.AllowAllMessagesFilter>): _92.AllowAllMessagesFilter;
                fromAmino(_: _92.AllowAllMessagesFilterAmino): _92.AllowAllMessagesFilter;
                toAmino(_: _92.AllowAllMessagesFilter): _92.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _92.AllowAllMessagesFilterAminoMsg): _92.AllowAllMessagesFilter;
                toAminoMsg(message: _92.AllowAllMessagesFilter): _92.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _92.AllowAllMessagesFilterProtoMsg): _92.AllowAllMessagesFilter;
                toProto(message: _92.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _92.AllowAllMessagesFilter): _92.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _92.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_92.AcceptedMessageKeysFilter>): _92.AcceptedMessageKeysFilter;
                fromAmino(object: _92.AcceptedMessageKeysFilterAmino): _92.AcceptedMessageKeysFilter;
                toAmino(message: _92.AcceptedMessageKeysFilter): _92.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _92.AcceptedMessageKeysFilterAminoMsg): _92.AcceptedMessageKeysFilter;
                toAminoMsg(message: _92.AcceptedMessageKeysFilter): _92.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _92.AcceptedMessageKeysFilterProtoMsg): _92.AcceptedMessageKeysFilter;
                toProto(message: _92.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _92.AcceptedMessageKeysFilter): _92.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _92.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _92.AcceptedMessagesFilter;
                fromPartial(object: Partial<_92.AcceptedMessagesFilter>): _92.AcceptedMessagesFilter;
                fromAmino(object: _92.AcceptedMessagesFilterAmino): _92.AcceptedMessagesFilter;
                toAmino(message: _92.AcceptedMessagesFilter): _92.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _92.AcceptedMessagesFilterAminoMsg): _92.AcceptedMessagesFilter;
                toAminoMsg(message: _92.AcceptedMessagesFilter): _92.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _92.AcceptedMessagesFilterProtoMsg): _92.AcceptedMessagesFilter;
                toProto(message: _92.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _92.AcceptedMessagesFilter): _92.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _92.MaxCallsLimit | _92.MaxFundsLimit | _92.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _92.AllowAllMessagesFilter | _92.AcceptedMessageKeysFilter | _92.AcceptedMessagesFilter;
            Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
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
            cosmwasm: {
                wasm: {
                    v1: _206.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _96.QueryContractInfoRequest): Promise<_96.QueryContractInfoResponse>;
                        contractHistory(request: _96.QueryContractHistoryRequest): Promise<_96.QueryContractHistoryResponse>;
                        contractsByCode(request: _96.QueryContractsByCodeRequest): Promise<_96.QueryContractsByCodeResponse>;
                        allContractState(request: _96.QueryAllContractStateRequest): Promise<_96.QueryAllContractStateResponse>;
                        rawContractState(request: _96.QueryRawContractStateRequest): Promise<_96.QueryRawContractStateResponse>;
                        smartContractState(request: _96.QuerySmartContractStateRequest): Promise<_96.QuerySmartContractStateResponse>;
                        code(request: _96.QueryCodeRequest): Promise<_96.QueryCodeResponse>;
                        codes(request?: _96.QueryCodesRequest): Promise<_96.QueryCodesResponse>;
                        pinnedCodes(request?: _96.QueryPinnedCodesRequest): Promise<_96.QueryPinnedCodesResponse>;
                        params(request?: _96.QueryParamsRequest): Promise<_96.QueryParamsResponse>;
                        contractsByCreator(request: _96.QueryContractsByCreatorRequest): Promise<_96.QueryContractsByCreatorResponse>;
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
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
                    v1: _204.LCDQueryClient;
                };
            };
        }>;
    };
}
