import * as _122 from "./wasm/v1/authz";
import * as _123 from "./wasm/v1/genesis";
import * as _124 from "./wasm/v1/ibc";
import * as _125 from "./wasm/v1/proposal";
import * as _126 from "./wasm/v1/query";
import * as _127 from "./wasm/v1/tx";
import * as _128 from "./wasm/v1/types";
import * as _211 from "./wasm/v1/query.lcd";
import * as _212 from "./wasm/v1/query.rpc.Query";
import * as _213 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                contractInfo(request: _126.QueryContractInfoRequest): Promise<_126.QueryContractInfoResponse>;
                contractHistory(request: _126.QueryContractHistoryRequest): Promise<_126.QueryContractHistoryResponse>;
                contractsByCode(request: _126.QueryContractsByCodeRequest): Promise<_126.QueryContractsByCodeResponse>;
                allContractState(request: _126.QueryAllContractStateRequest): Promise<_126.QueryAllContractStateResponse>;
                rawContractState(request: _126.QueryRawContractStateRequest): Promise<_126.QueryRawContractStateResponse>;
                smartContractState(request: _126.QuerySmartContractStateRequest): Promise<_126.QuerySmartContractStateResponse>;
                code(request: _126.QueryCodeRequest): Promise<_126.QueryCodeResponse>;
                codes(request?: _126.QueryCodesRequest): Promise<_126.QueryCodesResponse>;
                pinnedCodes(request?: _126.QueryPinnedCodesRequest): Promise<_126.QueryPinnedCodesResponse>;
                params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
                contractsByCreator(request: _126.QueryContractsByCreatorRequest): Promise<_126.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _211.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _127.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _127.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _127.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _127.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _127.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _127.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _127.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _127.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _127.MsgStoreCode): {
                        typeUrl: string;
                        value: _127.MsgStoreCode;
                    };
                    instantiateContract(value: _127.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _127.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _127.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _127.MsgInstantiateContract2;
                    };
                    executeContract(value: _127.MsgExecuteContract): {
                        typeUrl: string;
                        value: _127.MsgExecuteContract;
                    };
                    migrateContract(value: _127.MsgMigrateContract): {
                        typeUrl: string;
                        value: _127.MsgMigrateContract;
                    };
                    updateAdmin(value: _127.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _127.MsgClearAdmin): {
                        typeUrl: string;
                        value: _127.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _127.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _127.MsgUpdateInstantiateConfig;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _127.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _127.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _127.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _127.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _127.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _127.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _127.MsgUpdateInstantiateConfig;
                    };
                };
                fromPartial: {
                    storeCode(value: _127.MsgStoreCode): {
                        typeUrl: string;
                        value: _127.MsgStoreCode;
                    };
                    instantiateContract(value: _127.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _127.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _127.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _127.MsgInstantiateContract2;
                    };
                    executeContract(value: _127.MsgExecuteContract): {
                        typeUrl: string;
                        value: _127.MsgExecuteContract;
                    };
                    migrateContract(value: _127.MsgMigrateContract): {
                        typeUrl: string;
                        value: _127.MsgMigrateContract;
                    };
                    updateAdmin(value: _127.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _127.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _127.MsgClearAdmin): {
                        typeUrl: string;
                        value: _127.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _127.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _127.MsgUpdateInstantiateConfig;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _127.MsgStoreCode) => _127.MsgStoreCodeAmino;
                    fromAmino: (object: _127.MsgStoreCodeAmino) => _127.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _127.MsgInstantiateContract) => _127.MsgInstantiateContractAmino;
                    fromAmino: (object: _127.MsgInstantiateContractAmino) => _127.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _127.MsgInstantiateContract2) => _127.MsgInstantiateContract2Amino;
                    fromAmino: (object: _127.MsgInstantiateContract2Amino) => _127.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _127.MsgExecuteContract) => _127.MsgExecuteContractAmino;
                    fromAmino: (object: _127.MsgExecuteContractAmino) => _127.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _127.MsgMigrateContract) => _127.MsgMigrateContractAmino;
                    fromAmino: (object: _127.MsgMigrateContractAmino) => _127.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateAdmin) => _127.MsgUpdateAdminAmino;
                    fromAmino: (object: _127.MsgUpdateAdminAmino) => _127.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _127.MsgClearAdmin) => _127.MsgClearAdminAmino;
                    fromAmino: (object: _127.MsgClearAdminAmino) => _127.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _127.MsgUpdateInstantiateConfig) => _127.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _127.MsgUpdateInstantiateConfigAmino) => _127.MsgUpdateInstantiateConfig;
                };
            };
            accessTypeFromJSON(object: any): _128.AccessType;
            accessTypeToJSON(object: _128.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _128.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _128.ContractCodeHistoryOperationType): string;
            AccessType: typeof _128.AccessType;
            AccessTypeSDKType: typeof _128.AccessType;
            AccessTypeAmino: typeof _128.AccessType;
            ContractCodeHistoryOperationType: typeof _128.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _128.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _128.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _128.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.AccessTypeParam;
                fromPartial(object: Partial<_128.AccessTypeParam>): _128.AccessTypeParam;
                fromAmino(object: _128.AccessTypeParamAmino): _128.AccessTypeParam;
                toAmino(message: _128.AccessTypeParam): _128.AccessTypeParamAmino;
                fromAminoMsg(object: _128.AccessTypeParamAminoMsg): _128.AccessTypeParam;
                toAminoMsg(message: _128.AccessTypeParam): _128.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _128.AccessTypeParamProtoMsg): _128.AccessTypeParam;
                toProto(message: _128.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _128.AccessTypeParam): _128.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _128.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.AccessConfig;
                fromPartial(object: Partial<_128.AccessConfig>): _128.AccessConfig;
                fromAmino(object: _128.AccessConfigAmino): _128.AccessConfig;
                toAmino(message: _128.AccessConfig): _128.AccessConfigAmino;
                fromAminoMsg(object: _128.AccessConfigAminoMsg): _128.AccessConfig;
                toAminoMsg(message: _128.AccessConfig): _128.AccessConfigAminoMsg;
                fromProtoMsg(message: _128.AccessConfigProtoMsg): _128.AccessConfig;
                toProto(message: _128.AccessConfig): Uint8Array;
                toProtoMsg(message: _128.AccessConfig): _128.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _128.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Params;
                fromPartial(object: Partial<_128.Params>): _128.Params;
                fromAmino(object: _128.ParamsAmino): _128.Params;
                toAmino(message: _128.Params): _128.ParamsAmino;
                fromAminoMsg(object: _128.ParamsAminoMsg): _128.Params;
                toAminoMsg(message: _128.Params): _128.ParamsAminoMsg;
                fromProtoMsg(message: _128.ParamsProtoMsg): _128.Params;
                toProto(message: _128.Params): Uint8Array;
                toProtoMsg(message: _128.Params): _128.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _128.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.CodeInfo;
                fromPartial(object: Partial<_128.CodeInfo>): _128.CodeInfo;
                fromAmino(object: _128.CodeInfoAmino): _128.CodeInfo;
                toAmino(message: _128.CodeInfo): _128.CodeInfoAmino;
                fromAminoMsg(object: _128.CodeInfoAminoMsg): _128.CodeInfo;
                toAminoMsg(message: _128.CodeInfo): _128.CodeInfoAminoMsg;
                fromProtoMsg(message: _128.CodeInfoProtoMsg): _128.CodeInfo;
                toProto(message: _128.CodeInfo): Uint8Array;
                toProtoMsg(message: _128.CodeInfo): _128.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _128.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ContractInfo;
                fromPartial(object: Partial<_128.ContractInfo>): _128.ContractInfo;
                fromAmino(object: _128.ContractInfoAmino): _128.ContractInfo;
                toAmino(message: _128.ContractInfo): _128.ContractInfoAmino;
                fromAminoMsg(object: _128.ContractInfoAminoMsg): _128.ContractInfo;
                toAminoMsg(message: _128.ContractInfo): _128.ContractInfoAminoMsg;
                fromProtoMsg(message: _128.ContractInfoProtoMsg): _128.ContractInfo;
                toProto(message: _128.ContractInfo): Uint8Array;
                toProtoMsg(message: _128.ContractInfo): _128.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _128.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_128.ContractCodeHistoryEntry>): _128.ContractCodeHistoryEntry;
                fromAmino(object: _128.ContractCodeHistoryEntryAmino): _128.ContractCodeHistoryEntry;
                toAmino(message: _128.ContractCodeHistoryEntry): _128.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _128.ContractCodeHistoryEntryAminoMsg): _128.ContractCodeHistoryEntry;
                toAminoMsg(message: _128.ContractCodeHistoryEntry): _128.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _128.ContractCodeHistoryEntryProtoMsg): _128.ContractCodeHistoryEntry;
                toProto(message: _128.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _128.ContractCodeHistoryEntry): _128.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _128.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.AbsoluteTxPosition;
                fromPartial(object: Partial<_128.AbsoluteTxPosition>): _128.AbsoluteTxPosition;
                fromAmino(object: _128.AbsoluteTxPositionAmino): _128.AbsoluteTxPosition;
                toAmino(message: _128.AbsoluteTxPosition): _128.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _128.AbsoluteTxPositionAminoMsg): _128.AbsoluteTxPosition;
                toAminoMsg(message: _128.AbsoluteTxPosition): _128.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _128.AbsoluteTxPositionProtoMsg): _128.AbsoluteTxPosition;
                toProto(message: _128.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _128.AbsoluteTxPosition): _128.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _128.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Model;
                fromPartial(object: Partial<_128.Model>): _128.Model;
                fromAmino(object: _128.ModelAmino): _128.Model;
                toAmino(message: _128.Model): _128.ModelAmino;
                fromAminoMsg(object: _128.ModelAminoMsg): _128.Model;
                toAminoMsg(message: _128.Model): _128.ModelAminoMsg;
                fromProtoMsg(message: _128.ModelProtoMsg): _128.Model;
                toProto(message: _128.Model): Uint8Array;
                toProtoMsg(message: _128.Model): _128.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _127.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgStoreCode;
                fromPartial(object: Partial<_127.MsgStoreCode>): _127.MsgStoreCode;
                fromAmino(object: _127.MsgStoreCodeAmino): _127.MsgStoreCode;
                toAmino(message: _127.MsgStoreCode): _127.MsgStoreCodeAmino;
                fromAminoMsg(object: _127.MsgStoreCodeAminoMsg): _127.MsgStoreCode;
                toAminoMsg(message: _127.MsgStoreCode): _127.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _127.MsgStoreCodeProtoMsg): _127.MsgStoreCode;
                toProto(message: _127.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _127.MsgStoreCode): _127.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _127.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgStoreCodeResponse;
                fromPartial(object: Partial<_127.MsgStoreCodeResponse>): _127.MsgStoreCodeResponse;
                fromAmino(object: _127.MsgStoreCodeResponseAmino): _127.MsgStoreCodeResponse;
                toAmino(message: _127.MsgStoreCodeResponse): _127.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _127.MsgStoreCodeResponseAminoMsg): _127.MsgStoreCodeResponse;
                toAminoMsg(message: _127.MsgStoreCodeResponse): _127.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _127.MsgStoreCodeResponseProtoMsg): _127.MsgStoreCodeResponse;
                toProto(message: _127.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _127.MsgStoreCodeResponse): _127.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _127.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgInstantiateContract;
                fromPartial(object: Partial<_127.MsgInstantiateContract>): _127.MsgInstantiateContract;
                fromAmino(object: _127.MsgInstantiateContractAmino): _127.MsgInstantiateContract;
                toAmino(message: _127.MsgInstantiateContract): _127.MsgInstantiateContractAmino;
                fromAminoMsg(object: _127.MsgInstantiateContractAminoMsg): _127.MsgInstantiateContract;
                toAminoMsg(message: _127.MsgInstantiateContract): _127.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _127.MsgInstantiateContractProtoMsg): _127.MsgInstantiateContract;
                toProto(message: _127.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _127.MsgInstantiateContract): _127.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _127.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgInstantiateContract2;
                fromPartial(object: Partial<_127.MsgInstantiateContract2>): _127.MsgInstantiateContract2;
                fromAmino(object: _127.MsgInstantiateContract2Amino): _127.MsgInstantiateContract2;
                toAmino(message: _127.MsgInstantiateContract2): _127.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _127.MsgInstantiateContract2AminoMsg): _127.MsgInstantiateContract2;
                toAminoMsg(message: _127.MsgInstantiateContract2): _127.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _127.MsgInstantiateContract2ProtoMsg): _127.MsgInstantiateContract2;
                toProto(message: _127.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _127.MsgInstantiateContract2): _127.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _127.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_127.MsgInstantiateContractResponse>): _127.MsgInstantiateContractResponse;
                fromAmino(object: _127.MsgInstantiateContractResponseAmino): _127.MsgInstantiateContractResponse;
                toAmino(message: _127.MsgInstantiateContractResponse): _127.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _127.MsgInstantiateContractResponseAminoMsg): _127.MsgInstantiateContractResponse;
                toAminoMsg(message: _127.MsgInstantiateContractResponse): _127.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _127.MsgInstantiateContractResponseProtoMsg): _127.MsgInstantiateContractResponse;
                toProto(message: _127.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _127.MsgInstantiateContractResponse): _127.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _127.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_127.MsgInstantiateContract2Response>): _127.MsgInstantiateContract2Response;
                fromAmino(object: _127.MsgInstantiateContract2ResponseAmino): _127.MsgInstantiateContract2Response;
                toAmino(message: _127.MsgInstantiateContract2Response): _127.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _127.MsgInstantiateContract2ResponseAminoMsg): _127.MsgInstantiateContract2Response;
                toAminoMsg(message: _127.MsgInstantiateContract2Response): _127.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _127.MsgInstantiateContract2ResponseProtoMsg): _127.MsgInstantiateContract2Response;
                toProto(message: _127.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _127.MsgInstantiateContract2Response): _127.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _127.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgExecuteContract;
                fromPartial(object: Partial<_127.MsgExecuteContract>): _127.MsgExecuteContract;
                fromAmino(object: _127.MsgExecuteContractAmino): _127.MsgExecuteContract;
                toAmino(message: _127.MsgExecuteContract): _127.MsgExecuteContractAmino;
                fromAminoMsg(object: _127.MsgExecuteContractAminoMsg): _127.MsgExecuteContract;
                toAminoMsg(message: _127.MsgExecuteContract): _127.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _127.MsgExecuteContractProtoMsg): _127.MsgExecuteContract;
                toProto(message: _127.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _127.MsgExecuteContract): _127.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _127.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgExecuteContractResponse;
                fromPartial(object: Partial<_127.MsgExecuteContractResponse>): _127.MsgExecuteContractResponse;
                fromAmino(object: _127.MsgExecuteContractResponseAmino): _127.MsgExecuteContractResponse;
                toAmino(message: _127.MsgExecuteContractResponse): _127.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _127.MsgExecuteContractResponseAminoMsg): _127.MsgExecuteContractResponse;
                toAminoMsg(message: _127.MsgExecuteContractResponse): _127.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _127.MsgExecuteContractResponseProtoMsg): _127.MsgExecuteContractResponse;
                toProto(message: _127.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _127.MsgExecuteContractResponse): _127.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _127.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgMigrateContract;
                fromPartial(object: Partial<_127.MsgMigrateContract>): _127.MsgMigrateContract;
                fromAmino(object: _127.MsgMigrateContractAmino): _127.MsgMigrateContract;
                toAmino(message: _127.MsgMigrateContract): _127.MsgMigrateContractAmino;
                fromAminoMsg(object: _127.MsgMigrateContractAminoMsg): _127.MsgMigrateContract;
                toAminoMsg(message: _127.MsgMigrateContract): _127.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _127.MsgMigrateContractProtoMsg): _127.MsgMigrateContract;
                toProto(message: _127.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _127.MsgMigrateContract): _127.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _127.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgMigrateContractResponse;
                fromPartial(object: Partial<_127.MsgMigrateContractResponse>): _127.MsgMigrateContractResponse;
                fromAmino(object: _127.MsgMigrateContractResponseAmino): _127.MsgMigrateContractResponse;
                toAmino(message: _127.MsgMigrateContractResponse): _127.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _127.MsgMigrateContractResponseAminoMsg): _127.MsgMigrateContractResponse;
                toAminoMsg(message: _127.MsgMigrateContractResponse): _127.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _127.MsgMigrateContractResponseProtoMsg): _127.MsgMigrateContractResponse;
                toProto(message: _127.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _127.MsgMigrateContractResponse): _127.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _127.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateAdmin;
                fromPartial(object: Partial<_127.MsgUpdateAdmin>): _127.MsgUpdateAdmin;
                fromAmino(object: _127.MsgUpdateAdminAmino): _127.MsgUpdateAdmin;
                toAmino(message: _127.MsgUpdateAdmin): _127.MsgUpdateAdminAmino;
                fromAminoMsg(object: _127.MsgUpdateAdminAminoMsg): _127.MsgUpdateAdmin;
                toAminoMsg(message: _127.MsgUpdateAdmin): _127.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateAdminProtoMsg): _127.MsgUpdateAdmin;
                toProto(message: _127.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateAdmin): _127.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_127.MsgUpdateAdminResponse>): _127.MsgUpdateAdminResponse;
                fromAmino(_: _127.MsgUpdateAdminResponseAmino): _127.MsgUpdateAdminResponse;
                toAmino(_: _127.MsgUpdateAdminResponse): _127.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateAdminResponseAminoMsg): _127.MsgUpdateAdminResponse;
                toAminoMsg(message: _127.MsgUpdateAdminResponse): _127.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateAdminResponseProtoMsg): _127.MsgUpdateAdminResponse;
                toProto(message: _127.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateAdminResponse): _127.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _127.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgClearAdmin;
                fromPartial(object: Partial<_127.MsgClearAdmin>): _127.MsgClearAdmin;
                fromAmino(object: _127.MsgClearAdminAmino): _127.MsgClearAdmin;
                toAmino(message: _127.MsgClearAdmin): _127.MsgClearAdminAmino;
                fromAminoMsg(object: _127.MsgClearAdminAminoMsg): _127.MsgClearAdmin;
                toAminoMsg(message: _127.MsgClearAdmin): _127.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _127.MsgClearAdminProtoMsg): _127.MsgClearAdmin;
                toProto(message: _127.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _127.MsgClearAdmin): _127.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _127.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgClearAdminResponse;
                fromPartial(_: Partial<_127.MsgClearAdminResponse>): _127.MsgClearAdminResponse;
                fromAmino(_: _127.MsgClearAdminResponseAmino): _127.MsgClearAdminResponse;
                toAmino(_: _127.MsgClearAdminResponse): _127.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _127.MsgClearAdminResponseAminoMsg): _127.MsgClearAdminResponse;
                toAminoMsg(message: _127.MsgClearAdminResponse): _127.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _127.MsgClearAdminResponseProtoMsg): _127.MsgClearAdminResponse;
                toProto(message: _127.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _127.MsgClearAdminResponse): _127.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _127.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_127.MsgUpdateInstantiateConfig>): _127.MsgUpdateInstantiateConfig;
                fromAmino(object: _127.MsgUpdateInstantiateConfigAmino): _127.MsgUpdateInstantiateConfig;
                toAmino(message: _127.MsgUpdateInstantiateConfig): _127.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _127.MsgUpdateInstantiateConfigAminoMsg): _127.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _127.MsgUpdateInstantiateConfig): _127.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateInstantiateConfigProtoMsg): _127.MsgUpdateInstantiateConfig;
                toProto(message: _127.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateInstantiateConfig): _127.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _127.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_127.MsgUpdateInstantiateConfigResponse>): _127.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _127.MsgUpdateInstantiateConfigResponseAmino): _127.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _127.MsgUpdateInstantiateConfigResponse): _127.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _127.MsgUpdateInstantiateConfigResponseAminoMsg): _127.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _127.MsgUpdateInstantiateConfigResponse): _127.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _127.MsgUpdateInstantiateConfigResponseProtoMsg): _127.MsgUpdateInstantiateConfigResponse;
                toProto(message: _127.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _127.MsgUpdateInstantiateConfigResponse): _127.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _126.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractInfoRequest;
                fromPartial(object: Partial<_126.QueryContractInfoRequest>): _126.QueryContractInfoRequest;
                fromAmino(object: _126.QueryContractInfoRequestAmino): _126.QueryContractInfoRequest;
                toAmino(message: _126.QueryContractInfoRequest): _126.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _126.QueryContractInfoRequestAminoMsg): _126.QueryContractInfoRequest;
                toAminoMsg(message: _126.QueryContractInfoRequest): _126.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _126.QueryContractInfoRequestProtoMsg): _126.QueryContractInfoRequest;
                toProto(message: _126.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _126.QueryContractInfoRequest): _126.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _126.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractInfoResponse;
                fromPartial(object: Partial<_126.QueryContractInfoResponse>): _126.QueryContractInfoResponse;
                fromAmino(object: _126.QueryContractInfoResponseAmino): _126.QueryContractInfoResponse;
                toAmino(message: _126.QueryContractInfoResponse): _126.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _126.QueryContractInfoResponseAminoMsg): _126.QueryContractInfoResponse;
                toAminoMsg(message: _126.QueryContractInfoResponse): _126.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _126.QueryContractInfoResponseProtoMsg): _126.QueryContractInfoResponse;
                toProto(message: _126.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _126.QueryContractInfoResponse): _126.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _126.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractHistoryRequest;
                fromPartial(object: Partial<_126.QueryContractHistoryRequest>): _126.QueryContractHistoryRequest;
                fromAmino(object: _126.QueryContractHistoryRequestAmino): _126.QueryContractHistoryRequest;
                toAmino(message: _126.QueryContractHistoryRequest): _126.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _126.QueryContractHistoryRequestAminoMsg): _126.QueryContractHistoryRequest;
                toAminoMsg(message: _126.QueryContractHistoryRequest): _126.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _126.QueryContractHistoryRequestProtoMsg): _126.QueryContractHistoryRequest;
                toProto(message: _126.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _126.QueryContractHistoryRequest): _126.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _126.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractHistoryResponse;
                fromPartial(object: Partial<_126.QueryContractHistoryResponse>): _126.QueryContractHistoryResponse;
                fromAmino(object: _126.QueryContractHistoryResponseAmino): _126.QueryContractHistoryResponse;
                toAmino(message: _126.QueryContractHistoryResponse): _126.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _126.QueryContractHistoryResponseAminoMsg): _126.QueryContractHistoryResponse;
                toAminoMsg(message: _126.QueryContractHistoryResponse): _126.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _126.QueryContractHistoryResponseProtoMsg): _126.QueryContractHistoryResponse;
                toProto(message: _126.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _126.QueryContractHistoryResponse): _126.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _126.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_126.QueryContractsByCodeRequest>): _126.QueryContractsByCodeRequest;
                fromAmino(object: _126.QueryContractsByCodeRequestAmino): _126.QueryContractsByCodeRequest;
                toAmino(message: _126.QueryContractsByCodeRequest): _126.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _126.QueryContractsByCodeRequestAminoMsg): _126.QueryContractsByCodeRequest;
                toAminoMsg(message: _126.QueryContractsByCodeRequest): _126.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _126.QueryContractsByCodeRequestProtoMsg): _126.QueryContractsByCodeRequest;
                toProto(message: _126.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _126.QueryContractsByCodeRequest): _126.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _126.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_126.QueryContractsByCodeResponse>): _126.QueryContractsByCodeResponse;
                fromAmino(object: _126.QueryContractsByCodeResponseAmino): _126.QueryContractsByCodeResponse;
                toAmino(message: _126.QueryContractsByCodeResponse): _126.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _126.QueryContractsByCodeResponseAminoMsg): _126.QueryContractsByCodeResponse;
                toAminoMsg(message: _126.QueryContractsByCodeResponse): _126.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _126.QueryContractsByCodeResponseProtoMsg): _126.QueryContractsByCodeResponse;
                toProto(message: _126.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _126.QueryContractsByCodeResponse): _126.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _126.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryAllContractStateRequest;
                fromPartial(object: Partial<_126.QueryAllContractStateRequest>): _126.QueryAllContractStateRequest;
                fromAmino(object: _126.QueryAllContractStateRequestAmino): _126.QueryAllContractStateRequest;
                toAmino(message: _126.QueryAllContractStateRequest): _126.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _126.QueryAllContractStateRequestAminoMsg): _126.QueryAllContractStateRequest;
                toAminoMsg(message: _126.QueryAllContractStateRequest): _126.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _126.QueryAllContractStateRequestProtoMsg): _126.QueryAllContractStateRequest;
                toProto(message: _126.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _126.QueryAllContractStateRequest): _126.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _126.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryAllContractStateResponse;
                fromPartial(object: Partial<_126.QueryAllContractStateResponse>): _126.QueryAllContractStateResponse;
                fromAmino(object: _126.QueryAllContractStateResponseAmino): _126.QueryAllContractStateResponse;
                toAmino(message: _126.QueryAllContractStateResponse): _126.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _126.QueryAllContractStateResponseAminoMsg): _126.QueryAllContractStateResponse;
                toAminoMsg(message: _126.QueryAllContractStateResponse): _126.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _126.QueryAllContractStateResponseProtoMsg): _126.QueryAllContractStateResponse;
                toProto(message: _126.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _126.QueryAllContractStateResponse): _126.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _126.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryRawContractStateRequest;
                fromPartial(object: Partial<_126.QueryRawContractStateRequest>): _126.QueryRawContractStateRequest;
                fromAmino(object: _126.QueryRawContractStateRequestAmino): _126.QueryRawContractStateRequest;
                toAmino(message: _126.QueryRawContractStateRequest): _126.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _126.QueryRawContractStateRequestAminoMsg): _126.QueryRawContractStateRequest;
                toAminoMsg(message: _126.QueryRawContractStateRequest): _126.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _126.QueryRawContractStateRequestProtoMsg): _126.QueryRawContractStateRequest;
                toProto(message: _126.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _126.QueryRawContractStateRequest): _126.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _126.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryRawContractStateResponse;
                fromPartial(object: Partial<_126.QueryRawContractStateResponse>): _126.QueryRawContractStateResponse;
                fromAmino(object: _126.QueryRawContractStateResponseAmino): _126.QueryRawContractStateResponse;
                toAmino(message: _126.QueryRawContractStateResponse): _126.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _126.QueryRawContractStateResponseAminoMsg): _126.QueryRawContractStateResponse;
                toAminoMsg(message: _126.QueryRawContractStateResponse): _126.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _126.QueryRawContractStateResponseProtoMsg): _126.QueryRawContractStateResponse;
                toProto(message: _126.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _126.QueryRawContractStateResponse): _126.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _126.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_126.QuerySmartContractStateRequest>): _126.QuerySmartContractStateRequest;
                fromAmino(object: _126.QuerySmartContractStateRequestAmino): _126.QuerySmartContractStateRequest;
                toAmino(message: _126.QuerySmartContractStateRequest): _126.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _126.QuerySmartContractStateRequestAminoMsg): _126.QuerySmartContractStateRequest;
                toAminoMsg(message: _126.QuerySmartContractStateRequest): _126.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _126.QuerySmartContractStateRequestProtoMsg): _126.QuerySmartContractStateRequest;
                toProto(message: _126.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _126.QuerySmartContractStateRequest): _126.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _126.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_126.QuerySmartContractStateResponse>): _126.QuerySmartContractStateResponse;
                fromAmino(object: _126.QuerySmartContractStateResponseAmino): _126.QuerySmartContractStateResponse;
                toAmino(message: _126.QuerySmartContractStateResponse): _126.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _126.QuerySmartContractStateResponseAminoMsg): _126.QuerySmartContractStateResponse;
                toAminoMsg(message: _126.QuerySmartContractStateResponse): _126.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _126.QuerySmartContractStateResponseProtoMsg): _126.QuerySmartContractStateResponse;
                toProto(message: _126.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _126.QuerySmartContractStateResponse): _126.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _126.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryCodeRequest;
                fromPartial(object: Partial<_126.QueryCodeRequest>): _126.QueryCodeRequest;
                fromAmino(object: _126.QueryCodeRequestAmino): _126.QueryCodeRequest;
                toAmino(message: _126.QueryCodeRequest): _126.QueryCodeRequestAmino;
                fromAminoMsg(object: _126.QueryCodeRequestAminoMsg): _126.QueryCodeRequest;
                toAminoMsg(message: _126.QueryCodeRequest): _126.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _126.QueryCodeRequestProtoMsg): _126.QueryCodeRequest;
                toProto(message: _126.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _126.QueryCodeRequest): _126.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _126.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.CodeInfoResponse;
                fromPartial(object: Partial<_126.CodeInfoResponse>): _126.CodeInfoResponse;
                fromAmino(object: _126.CodeInfoResponseAmino): _126.CodeInfoResponse;
                toAmino(message: _126.CodeInfoResponse): _126.CodeInfoResponseAmino;
                fromAminoMsg(object: _126.CodeInfoResponseAminoMsg): _126.CodeInfoResponse;
                toAminoMsg(message: _126.CodeInfoResponse): _126.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _126.CodeInfoResponseProtoMsg): _126.CodeInfoResponse;
                toProto(message: _126.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _126.CodeInfoResponse): _126.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _126.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryCodeResponse;
                fromPartial(object: Partial<_126.QueryCodeResponse>): _126.QueryCodeResponse;
                fromAmino(object: _126.QueryCodeResponseAmino): _126.QueryCodeResponse;
                toAmino(message: _126.QueryCodeResponse): _126.QueryCodeResponseAmino;
                fromAminoMsg(object: _126.QueryCodeResponseAminoMsg): _126.QueryCodeResponse;
                toAminoMsg(message: _126.QueryCodeResponse): _126.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _126.QueryCodeResponseProtoMsg): _126.QueryCodeResponse;
                toProto(message: _126.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _126.QueryCodeResponse): _126.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _126.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryCodesRequest;
                fromPartial(object: Partial<_126.QueryCodesRequest>): _126.QueryCodesRequest;
                fromAmino(object: _126.QueryCodesRequestAmino): _126.QueryCodesRequest;
                toAmino(message: _126.QueryCodesRequest): _126.QueryCodesRequestAmino;
                fromAminoMsg(object: _126.QueryCodesRequestAminoMsg): _126.QueryCodesRequest;
                toAminoMsg(message: _126.QueryCodesRequest): _126.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _126.QueryCodesRequestProtoMsg): _126.QueryCodesRequest;
                toProto(message: _126.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _126.QueryCodesRequest): _126.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _126.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryCodesResponse;
                fromPartial(object: Partial<_126.QueryCodesResponse>): _126.QueryCodesResponse;
                fromAmino(object: _126.QueryCodesResponseAmino): _126.QueryCodesResponse;
                toAmino(message: _126.QueryCodesResponse): _126.QueryCodesResponseAmino;
                fromAminoMsg(object: _126.QueryCodesResponseAminoMsg): _126.QueryCodesResponse;
                toAminoMsg(message: _126.QueryCodesResponse): _126.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _126.QueryCodesResponseProtoMsg): _126.QueryCodesResponse;
                toProto(message: _126.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _126.QueryCodesResponse): _126.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _126.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_126.QueryPinnedCodesRequest>): _126.QueryPinnedCodesRequest;
                fromAmino(object: _126.QueryPinnedCodesRequestAmino): _126.QueryPinnedCodesRequest;
                toAmino(message: _126.QueryPinnedCodesRequest): _126.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _126.QueryPinnedCodesRequestAminoMsg): _126.QueryPinnedCodesRequest;
                toAminoMsg(message: _126.QueryPinnedCodesRequest): _126.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _126.QueryPinnedCodesRequestProtoMsg): _126.QueryPinnedCodesRequest;
                toProto(message: _126.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _126.QueryPinnedCodesRequest): _126.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _126.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_126.QueryPinnedCodesResponse>): _126.QueryPinnedCodesResponse;
                fromAmino(object: _126.QueryPinnedCodesResponseAmino): _126.QueryPinnedCodesResponse;
                toAmino(message: _126.QueryPinnedCodesResponse): _126.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _126.QueryPinnedCodesResponseAminoMsg): _126.QueryPinnedCodesResponse;
                toAminoMsg(message: _126.QueryPinnedCodesResponse): _126.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _126.QueryPinnedCodesResponseProtoMsg): _126.QueryPinnedCodesResponse;
                toProto(message: _126.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _126.QueryPinnedCodesResponse): _126.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _126.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _126.QueryParamsRequest;
                fromPartial(_: Partial<_126.QueryParamsRequest>): _126.QueryParamsRequest;
                fromAmino(_: _126.QueryParamsRequestAmino): _126.QueryParamsRequest;
                toAmino(_: _126.QueryParamsRequest): _126.QueryParamsRequestAmino;
                fromAminoMsg(object: _126.QueryParamsRequestAminoMsg): _126.QueryParamsRequest;
                toAminoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryParamsRequestProtoMsg): _126.QueryParamsRequest;
                toProto(message: _126.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _126.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryParamsResponse;
                fromPartial(object: Partial<_126.QueryParamsResponse>): _126.QueryParamsResponse;
                fromAmino(object: _126.QueryParamsResponseAmino): _126.QueryParamsResponse;
                toAmino(message: _126.QueryParamsResponse): _126.QueryParamsResponseAmino;
                fromAminoMsg(object: _126.QueryParamsResponseAminoMsg): _126.QueryParamsResponse;
                toAminoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryParamsResponseProtoMsg): _126.QueryParamsResponse;
                toProto(message: _126.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _126.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_126.QueryContractsByCreatorRequest>): _126.QueryContractsByCreatorRequest;
                fromAmino(object: _126.QueryContractsByCreatorRequestAmino): _126.QueryContractsByCreatorRequest;
                toAmino(message: _126.QueryContractsByCreatorRequest): _126.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _126.QueryContractsByCreatorRequestAminoMsg): _126.QueryContractsByCreatorRequest;
                toAminoMsg(message: _126.QueryContractsByCreatorRequest): _126.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _126.QueryContractsByCreatorRequestProtoMsg): _126.QueryContractsByCreatorRequest;
                toProto(message: _126.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _126.QueryContractsByCreatorRequest): _126.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _126.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _126.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_126.QueryContractsByCreatorResponse>): _126.QueryContractsByCreatorResponse;
                fromAmino(object: _126.QueryContractsByCreatorResponseAmino): _126.QueryContractsByCreatorResponse;
                toAmino(message: _126.QueryContractsByCreatorResponse): _126.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _126.QueryContractsByCreatorResponseAminoMsg): _126.QueryContractsByCreatorResponse;
                toAminoMsg(message: _126.QueryContractsByCreatorResponse): _126.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _126.QueryContractsByCreatorResponseProtoMsg): _126.QueryContractsByCreatorResponse;
                toProto(message: _126.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _126.QueryContractsByCreatorResponse): _126.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _125.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.StoreCodeProposal;
                fromPartial(object: Partial<_125.StoreCodeProposal>): _125.StoreCodeProposal;
                fromAmino(object: _125.StoreCodeProposalAmino): _125.StoreCodeProposal;
                toAmino(message: _125.StoreCodeProposal): _125.StoreCodeProposalAmino;
                fromAminoMsg(object: _125.StoreCodeProposalAminoMsg): _125.StoreCodeProposal;
                toAminoMsg(message: _125.StoreCodeProposal): _125.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _125.StoreCodeProposalProtoMsg): _125.StoreCodeProposal;
                toProto(message: _125.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _125.StoreCodeProposal): _125.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _125.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.InstantiateContractProposal;
                fromPartial(object: Partial<_125.InstantiateContractProposal>): _125.InstantiateContractProposal;
                fromAmino(object: _125.InstantiateContractProposalAmino): _125.InstantiateContractProposal;
                toAmino(message: _125.InstantiateContractProposal): _125.InstantiateContractProposalAmino;
                fromAminoMsg(object: _125.InstantiateContractProposalAminoMsg): _125.InstantiateContractProposal;
                toAminoMsg(message: _125.InstantiateContractProposal): _125.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _125.InstantiateContractProposalProtoMsg): _125.InstantiateContractProposal;
                toProto(message: _125.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _125.InstantiateContractProposal): _125.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _125.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.InstantiateContract2Proposal;
                fromPartial(object: Partial<_125.InstantiateContract2Proposal>): _125.InstantiateContract2Proposal;
                fromAmino(object: _125.InstantiateContract2ProposalAmino): _125.InstantiateContract2Proposal;
                toAmino(message: _125.InstantiateContract2Proposal): _125.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _125.InstantiateContract2ProposalAminoMsg): _125.InstantiateContract2Proposal;
                toAminoMsg(message: _125.InstantiateContract2Proposal): _125.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _125.InstantiateContract2ProposalProtoMsg): _125.InstantiateContract2Proposal;
                toProto(message: _125.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _125.InstantiateContract2Proposal): _125.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _125.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.MigrateContractProposal;
                fromPartial(object: Partial<_125.MigrateContractProposal>): _125.MigrateContractProposal;
                fromAmino(object: _125.MigrateContractProposalAmino): _125.MigrateContractProposal;
                toAmino(message: _125.MigrateContractProposal): _125.MigrateContractProposalAmino;
                fromAminoMsg(object: _125.MigrateContractProposalAminoMsg): _125.MigrateContractProposal;
                toAminoMsg(message: _125.MigrateContractProposal): _125.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _125.MigrateContractProposalProtoMsg): _125.MigrateContractProposal;
                toProto(message: _125.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _125.MigrateContractProposal): _125.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _125.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.SudoContractProposal;
                fromPartial(object: Partial<_125.SudoContractProposal>): _125.SudoContractProposal;
                fromAmino(object: _125.SudoContractProposalAmino): _125.SudoContractProposal;
                toAmino(message: _125.SudoContractProposal): _125.SudoContractProposalAmino;
                fromAminoMsg(object: _125.SudoContractProposalAminoMsg): _125.SudoContractProposal;
                toAminoMsg(message: _125.SudoContractProposal): _125.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _125.SudoContractProposalProtoMsg): _125.SudoContractProposal;
                toProto(message: _125.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _125.SudoContractProposal): _125.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _125.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.ExecuteContractProposal;
                fromPartial(object: Partial<_125.ExecuteContractProposal>): _125.ExecuteContractProposal;
                fromAmino(object: _125.ExecuteContractProposalAmino): _125.ExecuteContractProposal;
                toAmino(message: _125.ExecuteContractProposal): _125.ExecuteContractProposalAmino;
                fromAminoMsg(object: _125.ExecuteContractProposalAminoMsg): _125.ExecuteContractProposal;
                toAminoMsg(message: _125.ExecuteContractProposal): _125.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _125.ExecuteContractProposalProtoMsg): _125.ExecuteContractProposal;
                toProto(message: _125.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _125.ExecuteContractProposal): _125.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _125.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.UpdateAdminProposal;
                fromPartial(object: Partial<_125.UpdateAdminProposal>): _125.UpdateAdminProposal;
                fromAmino(object: _125.UpdateAdminProposalAmino): _125.UpdateAdminProposal;
                toAmino(message: _125.UpdateAdminProposal): _125.UpdateAdminProposalAmino;
                fromAminoMsg(object: _125.UpdateAdminProposalAminoMsg): _125.UpdateAdminProposal;
                toAminoMsg(message: _125.UpdateAdminProposal): _125.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _125.UpdateAdminProposalProtoMsg): _125.UpdateAdminProposal;
                toProto(message: _125.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _125.UpdateAdminProposal): _125.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _125.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.ClearAdminProposal;
                fromPartial(object: Partial<_125.ClearAdminProposal>): _125.ClearAdminProposal;
                fromAmino(object: _125.ClearAdminProposalAmino): _125.ClearAdminProposal;
                toAmino(message: _125.ClearAdminProposal): _125.ClearAdminProposalAmino;
                fromAminoMsg(object: _125.ClearAdminProposalAminoMsg): _125.ClearAdminProposal;
                toAminoMsg(message: _125.ClearAdminProposal): _125.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _125.ClearAdminProposalProtoMsg): _125.ClearAdminProposal;
                toProto(message: _125.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _125.ClearAdminProposal): _125.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _125.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.PinCodesProposal;
                fromPartial(object: Partial<_125.PinCodesProposal>): _125.PinCodesProposal;
                fromAmino(object: _125.PinCodesProposalAmino): _125.PinCodesProposal;
                toAmino(message: _125.PinCodesProposal): _125.PinCodesProposalAmino;
                fromAminoMsg(object: _125.PinCodesProposalAminoMsg): _125.PinCodesProposal;
                toAminoMsg(message: _125.PinCodesProposal): _125.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _125.PinCodesProposalProtoMsg): _125.PinCodesProposal;
                toProto(message: _125.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _125.PinCodesProposal): _125.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _125.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.UnpinCodesProposal;
                fromPartial(object: Partial<_125.UnpinCodesProposal>): _125.UnpinCodesProposal;
                fromAmino(object: _125.UnpinCodesProposalAmino): _125.UnpinCodesProposal;
                toAmino(message: _125.UnpinCodesProposal): _125.UnpinCodesProposalAmino;
                fromAminoMsg(object: _125.UnpinCodesProposalAminoMsg): _125.UnpinCodesProposal;
                toAminoMsg(message: _125.UnpinCodesProposal): _125.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _125.UnpinCodesProposalProtoMsg): _125.UnpinCodesProposal;
                toProto(message: _125.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _125.UnpinCodesProposal): _125.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _125.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.AccessConfigUpdate;
                fromPartial(object: Partial<_125.AccessConfigUpdate>): _125.AccessConfigUpdate;
                fromAmino(object: _125.AccessConfigUpdateAmino): _125.AccessConfigUpdate;
                toAmino(message: _125.AccessConfigUpdate): _125.AccessConfigUpdateAmino;
                fromAminoMsg(object: _125.AccessConfigUpdateAminoMsg): _125.AccessConfigUpdate;
                toAminoMsg(message: _125.AccessConfigUpdate): _125.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _125.AccessConfigUpdateProtoMsg): _125.AccessConfigUpdate;
                toProto(message: _125.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _125.AccessConfigUpdate): _125.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _125.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_125.UpdateInstantiateConfigProposal>): _125.UpdateInstantiateConfigProposal;
                fromAmino(object: _125.UpdateInstantiateConfigProposalAmino): _125.UpdateInstantiateConfigProposal;
                toAmino(message: _125.UpdateInstantiateConfigProposal): _125.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _125.UpdateInstantiateConfigProposalAminoMsg): _125.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _125.UpdateInstantiateConfigProposal): _125.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _125.UpdateInstantiateConfigProposalProtoMsg): _125.UpdateInstantiateConfigProposal;
                toProto(message: _125.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _125.UpdateInstantiateConfigProposal): _125.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _125.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _125.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_125.StoreAndInstantiateContractProposal>): _125.StoreAndInstantiateContractProposal;
                fromAmino(object: _125.StoreAndInstantiateContractProposalAmino): _125.StoreAndInstantiateContractProposal;
                toAmino(message: _125.StoreAndInstantiateContractProposal): _125.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _125.StoreAndInstantiateContractProposalAminoMsg): _125.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _125.StoreAndInstantiateContractProposal): _125.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _125.StoreAndInstantiateContractProposalProtoMsg): _125.StoreAndInstantiateContractProposal;
                toProto(message: _125.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _125.StoreAndInstantiateContractProposal): _125.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _124.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgIBCSend;
                fromPartial(object: Partial<_124.MsgIBCSend>): _124.MsgIBCSend;
                fromAmino(object: _124.MsgIBCSendAmino): _124.MsgIBCSend;
                toAmino(message: _124.MsgIBCSend): _124.MsgIBCSendAmino;
                fromAminoMsg(object: _124.MsgIBCSendAminoMsg): _124.MsgIBCSend;
                toAminoMsg(message: _124.MsgIBCSend): _124.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _124.MsgIBCSendProtoMsg): _124.MsgIBCSend;
                toProto(message: _124.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _124.MsgIBCSend): _124.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _124.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgIBCSendResponse;
                fromPartial(object: Partial<_124.MsgIBCSendResponse>): _124.MsgIBCSendResponse;
                fromAmino(object: _124.MsgIBCSendResponseAmino): _124.MsgIBCSendResponse;
                toAmino(message: _124.MsgIBCSendResponse): _124.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _124.MsgIBCSendResponseAminoMsg): _124.MsgIBCSendResponse;
                toAminoMsg(message: _124.MsgIBCSendResponse): _124.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _124.MsgIBCSendResponseProtoMsg): _124.MsgIBCSendResponse;
                toProto(message: _124.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _124.MsgIBCSendResponse): _124.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _124.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _124.MsgIBCCloseChannel;
                fromPartial(object: Partial<_124.MsgIBCCloseChannel>): _124.MsgIBCCloseChannel;
                fromAmino(object: _124.MsgIBCCloseChannelAmino): _124.MsgIBCCloseChannel;
                toAmino(message: _124.MsgIBCCloseChannel): _124.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _124.MsgIBCCloseChannelAminoMsg): _124.MsgIBCCloseChannel;
                toAminoMsg(message: _124.MsgIBCCloseChannel): _124.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _124.MsgIBCCloseChannelProtoMsg): _124.MsgIBCCloseChannel;
                toProto(message: _124.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _124.MsgIBCCloseChannel): _124.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _123.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.GenesisState;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                fromAmino(object: _123.GenesisStateAmino): _123.GenesisState;
                toAmino(message: _123.GenesisState): _123.GenesisStateAmino;
                fromAminoMsg(object: _123.GenesisStateAminoMsg): _123.GenesisState;
                toAminoMsg(message: _123.GenesisState): _123.GenesisStateAminoMsg;
                fromProtoMsg(message: _123.GenesisStateProtoMsg): _123.GenesisState;
                toProto(message: _123.GenesisState): Uint8Array;
                toProtoMsg(message: _123.GenesisState): _123.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _123.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Code;
                fromPartial(object: Partial<_123.Code>): _123.Code;
                fromAmino(object: _123.CodeAmino): _123.Code;
                toAmino(message: _123.Code): _123.CodeAmino;
                fromAminoMsg(object: _123.CodeAminoMsg): _123.Code;
                toAminoMsg(message: _123.Code): _123.CodeAminoMsg;
                fromProtoMsg(message: _123.CodeProtoMsg): _123.Code;
                toProto(message: _123.Code): Uint8Array;
                toProtoMsg(message: _123.Code): _123.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _123.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Contract;
                fromPartial(object: Partial<_123.Contract>): _123.Contract;
                fromAmino(object: _123.ContractAmino): _123.Contract;
                toAmino(message: _123.Contract): _123.ContractAmino;
                fromAminoMsg(object: _123.ContractAminoMsg): _123.Contract;
                toAminoMsg(message: _123.Contract): _123.ContractAminoMsg;
                fromProtoMsg(message: _123.ContractProtoMsg): _123.Contract;
                toProto(message: _123.Contract): Uint8Array;
                toProtoMsg(message: _123.Contract): _123.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _123.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _123.Sequence;
                fromPartial(object: Partial<_123.Sequence>): _123.Sequence;
                fromAmino(object: _123.SequenceAmino): _123.Sequence;
                toAmino(message: _123.Sequence): _123.SequenceAmino;
                fromAminoMsg(object: _123.SequenceAminoMsg): _123.Sequence;
                toAminoMsg(message: _123.Sequence): _123.SequenceAminoMsg;
                fromProtoMsg(message: _123.SequenceProtoMsg): _123.Sequence;
                toProto(message: _123.Sequence): Uint8Array;
                toProtoMsg(message: _123.Sequence): _123.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _122.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ContractExecutionAuthorization;
                fromPartial(object: Partial<_122.ContractExecutionAuthorization>): _122.ContractExecutionAuthorization;
                fromAmino(object: _122.ContractExecutionAuthorizationAmino): _122.ContractExecutionAuthorization;
                toAmino(message: _122.ContractExecutionAuthorization): _122.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _122.ContractExecutionAuthorizationAminoMsg): _122.ContractExecutionAuthorization;
                toAminoMsg(message: _122.ContractExecutionAuthorization): _122.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _122.ContractExecutionAuthorizationProtoMsg): _122.ContractExecutionAuthorization;
                toProto(message: _122.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _122.ContractExecutionAuthorization): _122.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _122.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ContractMigrationAuthorization;
                fromPartial(object: Partial<_122.ContractMigrationAuthorization>): _122.ContractMigrationAuthorization;
                fromAmino(object: _122.ContractMigrationAuthorizationAmino): _122.ContractMigrationAuthorization;
                toAmino(message: _122.ContractMigrationAuthorization): _122.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _122.ContractMigrationAuthorizationAminoMsg): _122.ContractMigrationAuthorization;
                toAminoMsg(message: _122.ContractMigrationAuthorization): _122.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _122.ContractMigrationAuthorizationProtoMsg): _122.ContractMigrationAuthorization;
                toProto(message: _122.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _122.ContractMigrationAuthorization): _122.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _122.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.ContractGrant;
                fromPartial(object: Partial<_122.ContractGrant>): _122.ContractGrant;
                fromAmino(object: _122.ContractGrantAmino): _122.ContractGrant;
                toAmino(message: _122.ContractGrant): _122.ContractGrantAmino;
                fromAminoMsg(object: _122.ContractGrantAminoMsg): _122.ContractGrant;
                toAminoMsg(message: _122.ContractGrant): _122.ContractGrantAminoMsg;
                fromProtoMsg(message: _122.ContractGrantProtoMsg): _122.ContractGrant;
                toProto(message: _122.ContractGrant): Uint8Array;
                toProtoMsg(message: _122.ContractGrant): _122.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _122.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MaxCallsLimit;
                fromPartial(object: Partial<_122.MaxCallsLimit>): _122.MaxCallsLimit;
                fromAmino(object: _122.MaxCallsLimitAmino): _122.MaxCallsLimit;
                toAmino(message: _122.MaxCallsLimit): _122.MaxCallsLimitAmino;
                fromAminoMsg(object: _122.MaxCallsLimitAminoMsg): _122.MaxCallsLimit;
                toAminoMsg(message: _122.MaxCallsLimit): _122.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _122.MaxCallsLimitProtoMsg): _122.MaxCallsLimit;
                toProto(message: _122.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _122.MaxCallsLimit): _122.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _122.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.MaxFundsLimit;
                fromPartial(object: Partial<_122.MaxFundsLimit>): _122.MaxFundsLimit;
                fromAmino(object: _122.MaxFundsLimitAmino): _122.MaxFundsLimit;
                toAmino(message: _122.MaxFundsLimit): _122.MaxFundsLimitAmino;
                fromAminoMsg(object: _122.MaxFundsLimitAminoMsg): _122.MaxFundsLimit;
                toAminoMsg(message: _122.MaxFundsLimit): _122.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _122.MaxFundsLimitProtoMsg): _122.MaxFundsLimit;
                toProto(message: _122.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _122.MaxFundsLimit): _122.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _122.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.CombinedLimit;
                fromPartial(object: Partial<_122.CombinedLimit>): _122.CombinedLimit;
                fromAmino(object: _122.CombinedLimitAmino): _122.CombinedLimit;
                toAmino(message: _122.CombinedLimit): _122.CombinedLimitAmino;
                fromAminoMsg(object: _122.CombinedLimitAminoMsg): _122.CombinedLimit;
                toAminoMsg(message: _122.CombinedLimit): _122.CombinedLimitAminoMsg;
                fromProtoMsg(message: _122.CombinedLimitProtoMsg): _122.CombinedLimit;
                toProto(message: _122.CombinedLimit): Uint8Array;
                toProtoMsg(message: _122.CombinedLimit): _122.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _122.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _122.AllowAllMessagesFilter;
                fromPartial(_: Partial<_122.AllowAllMessagesFilter>): _122.AllowAllMessagesFilter;
                fromAmino(_: _122.AllowAllMessagesFilterAmino): _122.AllowAllMessagesFilter;
                toAmino(_: _122.AllowAllMessagesFilter): _122.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _122.AllowAllMessagesFilterAminoMsg): _122.AllowAllMessagesFilter;
                toAminoMsg(message: _122.AllowAllMessagesFilter): _122.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _122.AllowAllMessagesFilterProtoMsg): _122.AllowAllMessagesFilter;
                toProto(message: _122.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _122.AllowAllMessagesFilter): _122.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _122.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_122.AcceptedMessageKeysFilter>): _122.AcceptedMessageKeysFilter;
                fromAmino(object: _122.AcceptedMessageKeysFilterAmino): _122.AcceptedMessageKeysFilter;
                toAmino(message: _122.AcceptedMessageKeysFilter): _122.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _122.AcceptedMessageKeysFilterAminoMsg): _122.AcceptedMessageKeysFilter;
                toAminoMsg(message: _122.AcceptedMessageKeysFilter): _122.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _122.AcceptedMessageKeysFilterProtoMsg): _122.AcceptedMessageKeysFilter;
                toProto(message: _122.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _122.AcceptedMessageKeysFilter): _122.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _122.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _122.AcceptedMessagesFilter;
                fromPartial(object: Partial<_122.AcceptedMessagesFilter>): _122.AcceptedMessagesFilter;
                fromAmino(object: _122.AcceptedMessagesFilterAmino): _122.AcceptedMessagesFilter;
                toAmino(message: _122.AcceptedMessagesFilter): _122.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _122.AcceptedMessagesFilterAminoMsg): _122.AcceptedMessagesFilter;
                toAminoMsg(message: _122.AcceptedMessagesFilter): _122.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _122.AcceptedMessagesFilterProtoMsg): _122.AcceptedMessagesFilter;
                toProto(message: _122.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _122.AcceptedMessagesFilter): _122.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _122.MaxCallsLimit | _122.MaxFundsLimit | _122.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _122.AllowAllMessagesFilter | _122.AcceptedMessageKeysFilter | _122.AcceptedMessagesFilter;
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
                    v1: _213.MsgClientImpl;
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
                        contractInfo(request: _126.QueryContractInfoRequest): Promise<_126.QueryContractInfoResponse>;
                        contractHistory(request: _126.QueryContractHistoryRequest): Promise<_126.QueryContractHistoryResponse>;
                        contractsByCode(request: _126.QueryContractsByCodeRequest): Promise<_126.QueryContractsByCodeResponse>;
                        allContractState(request: _126.QueryAllContractStateRequest): Promise<_126.QueryAllContractStateResponse>;
                        rawContractState(request: _126.QueryRawContractStateRequest): Promise<_126.QueryRawContractStateResponse>;
                        smartContractState(request: _126.QuerySmartContractStateRequest): Promise<_126.QuerySmartContractStateResponse>;
                        code(request: _126.QueryCodeRequest): Promise<_126.QueryCodeResponse>;
                        codes(request?: _126.QueryCodesRequest): Promise<_126.QueryCodesResponse>;
                        pinnedCodes(request?: _126.QueryPinnedCodesRequest): Promise<_126.QueryPinnedCodesResponse>;
                        params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
                        contractsByCreator(request: _126.QueryContractsByCreatorRequest): Promise<_126.QueryContractsByCreatorResponse>;
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
                    v1: _211.LCDQueryClient;
                };
            };
        }>;
    };
}
