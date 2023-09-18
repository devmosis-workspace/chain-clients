import * as _0 from "./wasm/v1/genesis";
import * as _1 from "./wasm/v1/ibc";
import * as _2 from "./wasm/v1/proposal";
import * as _3 from "./wasm/v1/query";
import * as _4 from "./wasm/v1/tx";
import * as _5 from "./wasm/v1/types";
import * as _136 from "./wasm/v1/query.lcd";
import * as _137 from "./wasm/v1/query.rpc.Query";
import * as _138 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
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
            LCDQueryClient: typeof _136.LCDQueryClient;
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
                    toAmino: (message: _4.MsgStoreCode) => _4.MsgStoreCodeAmino;
                    fromAmino: (object: _4.MsgStoreCodeAmino) => _4.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _4.MsgInstantiateContract) => _4.MsgInstantiateContractAmino;
                    fromAmino: (object: _4.MsgInstantiateContractAmino) => _4.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _4.MsgInstantiateContract2) => _4.MsgInstantiateContract2Amino;
                    fromAmino: (object: _4.MsgInstantiateContract2Amino) => _4.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _4.MsgExecuteContract) => _4.MsgExecuteContractAmino;
                    fromAmino: (object: _4.MsgExecuteContractAmino) => _4.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _4.MsgMigrateContract) => _4.MsgMigrateContractAmino;
                    fromAmino: (object: _4.MsgMigrateContractAmino) => _4.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _4.MsgUpdateAdmin) => _4.MsgUpdateAdminAmino;
                    fromAmino: (object: _4.MsgUpdateAdminAmino) => _4.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _4.MsgClearAdmin) => _4.MsgClearAdminAmino;
                    fromAmino: (object: _4.MsgClearAdminAmino) => _4.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _5.AccessType;
            accessTypeToJSON(object: _5.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _5.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _5.ContractCodeHistoryOperationType): string;
            AccessType: typeof _5.AccessType;
            AccessTypeSDKType: typeof _5.AccessType;
            AccessTypeAmino: typeof _5.AccessType;
            ContractCodeHistoryOperationType: typeof _5.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _5.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _5.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _5.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AccessTypeParam;
                fromPartial(object: Partial<_5.AccessTypeParam>): _5.AccessTypeParam;
                fromAmino(object: _5.AccessTypeParamAmino): _5.AccessTypeParam;
                toAmino(message: _5.AccessTypeParam): _5.AccessTypeParamAmino;
                fromAminoMsg(object: _5.AccessTypeParamAminoMsg): _5.AccessTypeParam;
                toAminoMsg(message: _5.AccessTypeParam): _5.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _5.AccessTypeParamProtoMsg): _5.AccessTypeParam;
                toProto(message: _5.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _5.AccessTypeParam): _5.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _5.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AccessConfig;
                fromPartial(object: Partial<_5.AccessConfig>): _5.AccessConfig;
                fromAmino(object: _5.AccessConfigAmino): _5.AccessConfig;
                toAmino(message: _5.AccessConfig): _5.AccessConfigAmino;
                fromAminoMsg(object: _5.AccessConfigAminoMsg): _5.AccessConfig;
                toAminoMsg(message: _5.AccessConfig): _5.AccessConfigAminoMsg;
                fromProtoMsg(message: _5.AccessConfigProtoMsg): _5.AccessConfig;
                toProto(message: _5.AccessConfig): Uint8Array;
                toProtoMsg(message: _5.AccessConfig): _5.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _5.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Params;
                fromPartial(object: Partial<_5.Params>): _5.Params;
                fromAmino(object: _5.ParamsAmino): _5.Params;
                toAmino(message: _5.Params): _5.ParamsAmino;
                fromAminoMsg(object: _5.ParamsAminoMsg): _5.Params;
                toAminoMsg(message: _5.Params): _5.ParamsAminoMsg;
                fromProtoMsg(message: _5.ParamsProtoMsg): _5.Params;
                toProto(message: _5.Params): Uint8Array;
                toProtoMsg(message: _5.Params): _5.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _5.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.CodeInfo;
                fromPartial(object: Partial<_5.CodeInfo>): _5.CodeInfo;
                fromAmino(object: _5.CodeInfoAmino): _5.CodeInfo;
                toAmino(message: _5.CodeInfo): _5.CodeInfoAmino;
                fromAminoMsg(object: _5.CodeInfoAminoMsg): _5.CodeInfo;
                toAminoMsg(message: _5.CodeInfo): _5.CodeInfoAminoMsg;
                fromProtoMsg(message: _5.CodeInfoProtoMsg): _5.CodeInfo;
                toProto(message: _5.CodeInfo): Uint8Array;
                toProtoMsg(message: _5.CodeInfo): _5.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _5.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ContractInfo;
                fromPartial(object: Partial<_5.ContractInfo>): _5.ContractInfo;
                fromAmino(object: _5.ContractInfoAmino): _5.ContractInfo;
                toAmino(message: _5.ContractInfo): _5.ContractInfoAmino;
                fromAminoMsg(object: _5.ContractInfoAminoMsg): _5.ContractInfo;
                toAminoMsg(message: _5.ContractInfo): _5.ContractInfoAminoMsg;
                fromProtoMsg(message: _5.ContractInfoProtoMsg): _5.ContractInfo;
                toProto(message: _5.ContractInfo): Uint8Array;
                toProtoMsg(message: _5.ContractInfo): _5.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _5.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_5.ContractCodeHistoryEntry>): _5.ContractCodeHistoryEntry;
                fromAmino(object: _5.ContractCodeHistoryEntryAmino): _5.ContractCodeHistoryEntry;
                toAmino(message: _5.ContractCodeHistoryEntry): _5.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _5.ContractCodeHistoryEntryAminoMsg): _5.ContractCodeHistoryEntry;
                toAminoMsg(message: _5.ContractCodeHistoryEntry): _5.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _5.ContractCodeHistoryEntryProtoMsg): _5.ContractCodeHistoryEntry;
                toProto(message: _5.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _5.ContractCodeHistoryEntry): _5.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _5.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.AbsoluteTxPosition;
                fromPartial(object: Partial<_5.AbsoluteTxPosition>): _5.AbsoluteTxPosition;
                fromAmino(object: _5.AbsoluteTxPositionAmino): _5.AbsoluteTxPosition;
                toAmino(message: _5.AbsoluteTxPosition): _5.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _5.AbsoluteTxPositionAminoMsg): _5.AbsoluteTxPosition;
                toAminoMsg(message: _5.AbsoluteTxPosition): _5.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _5.AbsoluteTxPositionProtoMsg): _5.AbsoluteTxPosition;
                toProto(message: _5.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _5.AbsoluteTxPosition): _5.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _5.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.Model;
                fromPartial(object: Partial<_5.Model>): _5.Model;
                fromAmino(object: _5.ModelAmino): _5.Model;
                toAmino(message: _5.Model): _5.ModelAmino;
                fromAminoMsg(object: _5.ModelAminoMsg): _5.Model;
                toAminoMsg(message: _5.Model): _5.ModelAminoMsg;
                fromProtoMsg(message: _5.ModelProtoMsg): _5.Model;
                toProto(message: _5.Model): Uint8Array;
                toProtoMsg(message: _5.Model): _5.ModelProtoMsg;
            };
            ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _4.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgStoreCode;
                fromPartial(object: Partial<_4.MsgStoreCode>): _4.MsgStoreCode;
                fromAmino(object: _4.MsgStoreCodeAmino): _4.MsgStoreCode;
                toAmino(message: _4.MsgStoreCode): _4.MsgStoreCodeAmino;
                fromAminoMsg(object: _4.MsgStoreCodeAminoMsg): _4.MsgStoreCode;
                toAminoMsg(message: _4.MsgStoreCode): _4.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _4.MsgStoreCodeProtoMsg): _4.MsgStoreCode;
                toProto(message: _4.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _4.MsgStoreCode): _4.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _4.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgStoreCodeResponse;
                fromPartial(object: Partial<_4.MsgStoreCodeResponse>): _4.MsgStoreCodeResponse;
                fromAmino(object: _4.MsgStoreCodeResponseAmino): _4.MsgStoreCodeResponse;
                toAmino(message: _4.MsgStoreCodeResponse): _4.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _4.MsgStoreCodeResponseAminoMsg): _4.MsgStoreCodeResponse;
                toAminoMsg(message: _4.MsgStoreCodeResponse): _4.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _4.MsgStoreCodeResponseProtoMsg): _4.MsgStoreCodeResponse;
                toProto(message: _4.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _4.MsgStoreCodeResponse): _4.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _4.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgInstantiateContract;
                fromPartial(object: Partial<_4.MsgInstantiateContract>): _4.MsgInstantiateContract;
                fromAmino(object: _4.MsgInstantiateContractAmino): _4.MsgInstantiateContract;
                toAmino(message: _4.MsgInstantiateContract): _4.MsgInstantiateContractAmino;
                fromAminoMsg(object: _4.MsgInstantiateContractAminoMsg): _4.MsgInstantiateContract;
                toAminoMsg(message: _4.MsgInstantiateContract): _4.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _4.MsgInstantiateContractProtoMsg): _4.MsgInstantiateContract;
                toProto(message: _4.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _4.MsgInstantiateContract): _4.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _4.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgInstantiateContract2;
                fromPartial(object: Partial<_4.MsgInstantiateContract2>): _4.MsgInstantiateContract2;
                fromAmino(object: _4.MsgInstantiateContract2Amino): _4.MsgInstantiateContract2;
                toAmino(message: _4.MsgInstantiateContract2): _4.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _4.MsgInstantiateContract2AminoMsg): _4.MsgInstantiateContract2;
                toAminoMsg(message: _4.MsgInstantiateContract2): _4.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _4.MsgInstantiateContract2ProtoMsg): _4.MsgInstantiateContract2;
                toProto(message: _4.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _4.MsgInstantiateContract2): _4.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _4.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_4.MsgInstantiateContractResponse>): _4.MsgInstantiateContractResponse;
                fromAmino(object: _4.MsgInstantiateContractResponseAmino): _4.MsgInstantiateContractResponse;
                toAmino(message: _4.MsgInstantiateContractResponse): _4.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _4.MsgInstantiateContractResponseAminoMsg): _4.MsgInstantiateContractResponse;
                toAminoMsg(message: _4.MsgInstantiateContractResponse): _4.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _4.MsgInstantiateContractResponseProtoMsg): _4.MsgInstantiateContractResponse;
                toProto(message: _4.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _4.MsgInstantiateContractResponse): _4.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _4.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_4.MsgInstantiateContract2Response>): _4.MsgInstantiateContract2Response;
                fromAmino(object: _4.MsgInstantiateContract2ResponseAmino): _4.MsgInstantiateContract2Response;
                toAmino(message: _4.MsgInstantiateContract2Response): _4.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _4.MsgInstantiateContract2ResponseAminoMsg): _4.MsgInstantiateContract2Response;
                toAminoMsg(message: _4.MsgInstantiateContract2Response): _4.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _4.MsgInstantiateContract2ResponseProtoMsg): _4.MsgInstantiateContract2Response;
                toProto(message: _4.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _4.MsgInstantiateContract2Response): _4.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _4.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgExecuteContract;
                fromPartial(object: Partial<_4.MsgExecuteContract>): _4.MsgExecuteContract;
                fromAmino(object: _4.MsgExecuteContractAmino): _4.MsgExecuteContract;
                toAmino(message: _4.MsgExecuteContract): _4.MsgExecuteContractAmino;
                fromAminoMsg(object: _4.MsgExecuteContractAminoMsg): _4.MsgExecuteContract;
                toAminoMsg(message: _4.MsgExecuteContract): _4.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _4.MsgExecuteContractProtoMsg): _4.MsgExecuteContract;
                toProto(message: _4.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _4.MsgExecuteContract): _4.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _4.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgExecuteContractResponse;
                fromPartial(object: Partial<_4.MsgExecuteContractResponse>): _4.MsgExecuteContractResponse;
                fromAmino(object: _4.MsgExecuteContractResponseAmino): _4.MsgExecuteContractResponse;
                toAmino(message: _4.MsgExecuteContractResponse): _4.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _4.MsgExecuteContractResponseAminoMsg): _4.MsgExecuteContractResponse;
                toAminoMsg(message: _4.MsgExecuteContractResponse): _4.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _4.MsgExecuteContractResponseProtoMsg): _4.MsgExecuteContractResponse;
                toProto(message: _4.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _4.MsgExecuteContractResponse): _4.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _4.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgMigrateContract;
                fromPartial(object: Partial<_4.MsgMigrateContract>): _4.MsgMigrateContract;
                fromAmino(object: _4.MsgMigrateContractAmino): _4.MsgMigrateContract;
                toAmino(message: _4.MsgMigrateContract): _4.MsgMigrateContractAmino;
                fromAminoMsg(object: _4.MsgMigrateContractAminoMsg): _4.MsgMigrateContract;
                toAminoMsg(message: _4.MsgMigrateContract): _4.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _4.MsgMigrateContractProtoMsg): _4.MsgMigrateContract;
                toProto(message: _4.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _4.MsgMigrateContract): _4.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _4.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgMigrateContractResponse;
                fromPartial(object: Partial<_4.MsgMigrateContractResponse>): _4.MsgMigrateContractResponse;
                fromAmino(object: _4.MsgMigrateContractResponseAmino): _4.MsgMigrateContractResponse;
                toAmino(message: _4.MsgMigrateContractResponse): _4.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _4.MsgMigrateContractResponseAminoMsg): _4.MsgMigrateContractResponse;
                toAminoMsg(message: _4.MsgMigrateContractResponse): _4.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _4.MsgMigrateContractResponseProtoMsg): _4.MsgMigrateContractResponse;
                toProto(message: _4.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _4.MsgMigrateContractResponse): _4.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _4.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgUpdateAdmin;
                fromPartial(object: Partial<_4.MsgUpdateAdmin>): _4.MsgUpdateAdmin;
                fromAmino(object: _4.MsgUpdateAdminAmino): _4.MsgUpdateAdmin;
                toAmino(message: _4.MsgUpdateAdmin): _4.MsgUpdateAdminAmino;
                fromAminoMsg(object: _4.MsgUpdateAdminAminoMsg): _4.MsgUpdateAdmin;
                toAminoMsg(message: _4.MsgUpdateAdmin): _4.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _4.MsgUpdateAdminProtoMsg): _4.MsgUpdateAdmin;
                toProto(message: _4.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _4.MsgUpdateAdmin): _4.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _4.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_4.MsgUpdateAdminResponse>): _4.MsgUpdateAdminResponse;
                fromAmino(_: _4.MsgUpdateAdminResponseAmino): _4.MsgUpdateAdminResponse;
                toAmino(_: _4.MsgUpdateAdminResponse): _4.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _4.MsgUpdateAdminResponseAminoMsg): _4.MsgUpdateAdminResponse;
                toAminoMsg(message: _4.MsgUpdateAdminResponse): _4.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _4.MsgUpdateAdminResponseProtoMsg): _4.MsgUpdateAdminResponse;
                toProto(message: _4.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _4.MsgUpdateAdminResponse): _4.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _4.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.MsgClearAdmin;
                fromPartial(object: Partial<_4.MsgClearAdmin>): _4.MsgClearAdmin;
                fromAmino(object: _4.MsgClearAdminAmino): _4.MsgClearAdmin;
                toAmino(message: _4.MsgClearAdmin): _4.MsgClearAdminAmino;
                fromAminoMsg(object: _4.MsgClearAdminAminoMsg): _4.MsgClearAdmin;
                toAminoMsg(message: _4.MsgClearAdmin): _4.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _4.MsgClearAdminProtoMsg): _4.MsgClearAdmin;
                toProto(message: _4.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _4.MsgClearAdmin): _4.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _4.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _4.MsgClearAdminResponse;
                fromPartial(_: Partial<_4.MsgClearAdminResponse>): _4.MsgClearAdminResponse;
                fromAmino(_: _4.MsgClearAdminResponseAmino): _4.MsgClearAdminResponse;
                toAmino(_: _4.MsgClearAdminResponse): _4.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _4.MsgClearAdminResponseAminoMsg): _4.MsgClearAdminResponse;
                toAminoMsg(message: _4.MsgClearAdminResponse): _4.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _4.MsgClearAdminResponseProtoMsg): _4.MsgClearAdminResponse;
                toProto(message: _4.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _4.MsgClearAdminResponse): _4.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _3.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryContractInfoRequest;
                fromPartial(object: Partial<_3.QueryContractInfoRequest>): _3.QueryContractInfoRequest;
                fromAmino(object: _3.QueryContractInfoRequestAmino): _3.QueryContractInfoRequest;
                toAmino(message: _3.QueryContractInfoRequest): _3.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _3.QueryContractInfoRequestAminoMsg): _3.QueryContractInfoRequest;
                toAminoMsg(message: _3.QueryContractInfoRequest): _3.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _3.QueryContractInfoRequestProtoMsg): _3.QueryContractInfoRequest;
                toProto(message: _3.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _3.QueryContractInfoRequest): _3.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _3.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryContractInfoResponse;
                fromPartial(object: Partial<_3.QueryContractInfoResponse>): _3.QueryContractInfoResponse;
                fromAmino(object: _3.QueryContractInfoResponseAmino): _3.QueryContractInfoResponse;
                toAmino(message: _3.QueryContractInfoResponse): _3.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _3.QueryContractInfoResponseAminoMsg): _3.QueryContractInfoResponse;
                toAminoMsg(message: _3.QueryContractInfoResponse): _3.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _3.QueryContractInfoResponseProtoMsg): _3.QueryContractInfoResponse;
                toProto(message: _3.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _3.QueryContractInfoResponse): _3.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _3.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryContractHistoryRequest;
                fromPartial(object: Partial<_3.QueryContractHistoryRequest>): _3.QueryContractHistoryRequest;
                fromAmino(object: _3.QueryContractHistoryRequestAmino): _3.QueryContractHistoryRequest;
                toAmino(message: _3.QueryContractHistoryRequest): _3.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _3.QueryContractHistoryRequestAminoMsg): _3.QueryContractHistoryRequest;
                toAminoMsg(message: _3.QueryContractHistoryRequest): _3.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _3.QueryContractHistoryRequestProtoMsg): _3.QueryContractHistoryRequest;
                toProto(message: _3.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _3.QueryContractHistoryRequest): _3.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _3.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryContractHistoryResponse;
                fromPartial(object: Partial<_3.QueryContractHistoryResponse>): _3.QueryContractHistoryResponse;
                fromAmino(object: _3.QueryContractHistoryResponseAmino): _3.QueryContractHistoryResponse;
                toAmino(message: _3.QueryContractHistoryResponse): _3.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _3.QueryContractHistoryResponseAminoMsg): _3.QueryContractHistoryResponse;
                toAminoMsg(message: _3.QueryContractHistoryResponse): _3.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _3.QueryContractHistoryResponseProtoMsg): _3.QueryContractHistoryResponse;
                toProto(message: _3.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _3.QueryContractHistoryResponse): _3.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _3.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_3.QueryContractsByCodeRequest>): _3.QueryContractsByCodeRequest;
                fromAmino(object: _3.QueryContractsByCodeRequestAmino): _3.QueryContractsByCodeRequest;
                toAmino(message: _3.QueryContractsByCodeRequest): _3.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _3.QueryContractsByCodeRequestAminoMsg): _3.QueryContractsByCodeRequest;
                toAminoMsg(message: _3.QueryContractsByCodeRequest): _3.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _3.QueryContractsByCodeRequestProtoMsg): _3.QueryContractsByCodeRequest;
                toProto(message: _3.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _3.QueryContractsByCodeRequest): _3.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _3.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_3.QueryContractsByCodeResponse>): _3.QueryContractsByCodeResponse;
                fromAmino(object: _3.QueryContractsByCodeResponseAmino): _3.QueryContractsByCodeResponse;
                toAmino(message: _3.QueryContractsByCodeResponse): _3.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _3.QueryContractsByCodeResponseAminoMsg): _3.QueryContractsByCodeResponse;
                toAminoMsg(message: _3.QueryContractsByCodeResponse): _3.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _3.QueryContractsByCodeResponseProtoMsg): _3.QueryContractsByCodeResponse;
                toProto(message: _3.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _3.QueryContractsByCodeResponse): _3.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _3.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryAllContractStateRequest;
                fromPartial(object: Partial<_3.QueryAllContractStateRequest>): _3.QueryAllContractStateRequest;
                fromAmino(object: _3.QueryAllContractStateRequestAmino): _3.QueryAllContractStateRequest;
                toAmino(message: _3.QueryAllContractStateRequest): _3.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _3.QueryAllContractStateRequestAminoMsg): _3.QueryAllContractStateRequest;
                toAminoMsg(message: _3.QueryAllContractStateRequest): _3.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _3.QueryAllContractStateRequestProtoMsg): _3.QueryAllContractStateRequest;
                toProto(message: _3.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAllContractStateRequest): _3.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _3.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryAllContractStateResponse;
                fromPartial(object: Partial<_3.QueryAllContractStateResponse>): _3.QueryAllContractStateResponse;
                fromAmino(object: _3.QueryAllContractStateResponseAmino): _3.QueryAllContractStateResponse;
                toAmino(message: _3.QueryAllContractStateResponse): _3.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _3.QueryAllContractStateResponseAminoMsg): _3.QueryAllContractStateResponse;
                toAminoMsg(message: _3.QueryAllContractStateResponse): _3.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _3.QueryAllContractStateResponseProtoMsg): _3.QueryAllContractStateResponse;
                toProto(message: _3.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _3.QueryAllContractStateResponse): _3.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _3.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryRawContractStateRequest;
                fromPartial(object: Partial<_3.QueryRawContractStateRequest>): _3.QueryRawContractStateRequest;
                fromAmino(object: _3.QueryRawContractStateRequestAmino): _3.QueryRawContractStateRequest;
                toAmino(message: _3.QueryRawContractStateRequest): _3.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _3.QueryRawContractStateRequestAminoMsg): _3.QueryRawContractStateRequest;
                toAminoMsg(message: _3.QueryRawContractStateRequest): _3.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _3.QueryRawContractStateRequestProtoMsg): _3.QueryRawContractStateRequest;
                toProto(message: _3.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _3.QueryRawContractStateRequest): _3.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _3.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryRawContractStateResponse;
                fromPartial(object: Partial<_3.QueryRawContractStateResponse>): _3.QueryRawContractStateResponse;
                fromAmino(object: _3.QueryRawContractStateResponseAmino): _3.QueryRawContractStateResponse;
                toAmino(message: _3.QueryRawContractStateResponse): _3.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _3.QueryRawContractStateResponseAminoMsg): _3.QueryRawContractStateResponse;
                toAminoMsg(message: _3.QueryRawContractStateResponse): _3.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _3.QueryRawContractStateResponseProtoMsg): _3.QueryRawContractStateResponse;
                toProto(message: _3.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _3.QueryRawContractStateResponse): _3.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _3.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_3.QuerySmartContractStateRequest>): _3.QuerySmartContractStateRequest;
                fromAmino(object: _3.QuerySmartContractStateRequestAmino): _3.QuerySmartContractStateRequest;
                toAmino(message: _3.QuerySmartContractStateRequest): _3.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _3.QuerySmartContractStateRequestAminoMsg): _3.QuerySmartContractStateRequest;
                toAminoMsg(message: _3.QuerySmartContractStateRequest): _3.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _3.QuerySmartContractStateRequestProtoMsg): _3.QuerySmartContractStateRequest;
                toProto(message: _3.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _3.QuerySmartContractStateRequest): _3.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _3.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_3.QuerySmartContractStateResponse>): _3.QuerySmartContractStateResponse;
                fromAmino(object: _3.QuerySmartContractStateResponseAmino): _3.QuerySmartContractStateResponse;
                toAmino(message: _3.QuerySmartContractStateResponse): _3.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _3.QuerySmartContractStateResponseAminoMsg): _3.QuerySmartContractStateResponse;
                toAminoMsg(message: _3.QuerySmartContractStateResponse): _3.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _3.QuerySmartContractStateResponseProtoMsg): _3.QuerySmartContractStateResponse;
                toProto(message: _3.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _3.QuerySmartContractStateResponse): _3.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _3.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryCodeRequest;
                fromPartial(object: Partial<_3.QueryCodeRequest>): _3.QueryCodeRequest;
                fromAmino(object: _3.QueryCodeRequestAmino): _3.QueryCodeRequest;
                toAmino(message: _3.QueryCodeRequest): _3.QueryCodeRequestAmino;
                fromAminoMsg(object: _3.QueryCodeRequestAminoMsg): _3.QueryCodeRequest;
                toAminoMsg(message: _3.QueryCodeRequest): _3.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _3.QueryCodeRequestProtoMsg): _3.QueryCodeRequest;
                toProto(message: _3.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _3.QueryCodeRequest): _3.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _3.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.CodeInfoResponse;
                fromPartial(object: Partial<_3.CodeInfoResponse>): _3.CodeInfoResponse;
                fromAmino(object: _3.CodeInfoResponseAmino): _3.CodeInfoResponse;
                toAmino(message: _3.CodeInfoResponse): _3.CodeInfoResponseAmino;
                fromAminoMsg(object: _3.CodeInfoResponseAminoMsg): _3.CodeInfoResponse;
                toAminoMsg(message: _3.CodeInfoResponse): _3.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _3.CodeInfoResponseProtoMsg): _3.CodeInfoResponse;
                toProto(message: _3.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _3.CodeInfoResponse): _3.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _3.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryCodeResponse;
                fromPartial(object: Partial<_3.QueryCodeResponse>): _3.QueryCodeResponse;
                fromAmino(object: _3.QueryCodeResponseAmino): _3.QueryCodeResponse;
                toAmino(message: _3.QueryCodeResponse): _3.QueryCodeResponseAmino;
                fromAminoMsg(object: _3.QueryCodeResponseAminoMsg): _3.QueryCodeResponse;
                toAminoMsg(message: _3.QueryCodeResponse): _3.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _3.QueryCodeResponseProtoMsg): _3.QueryCodeResponse;
                toProto(message: _3.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _3.QueryCodeResponse): _3.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _3.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryCodesRequest;
                fromPartial(object: Partial<_3.QueryCodesRequest>): _3.QueryCodesRequest;
                fromAmino(object: _3.QueryCodesRequestAmino): _3.QueryCodesRequest;
                toAmino(message: _3.QueryCodesRequest): _3.QueryCodesRequestAmino;
                fromAminoMsg(object: _3.QueryCodesRequestAminoMsg): _3.QueryCodesRequest;
                toAminoMsg(message: _3.QueryCodesRequest): _3.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _3.QueryCodesRequestProtoMsg): _3.QueryCodesRequest;
                toProto(message: _3.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _3.QueryCodesRequest): _3.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _3.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryCodesResponse;
                fromPartial(object: Partial<_3.QueryCodesResponse>): _3.QueryCodesResponse;
                fromAmino(object: _3.QueryCodesResponseAmino): _3.QueryCodesResponse;
                toAmino(message: _3.QueryCodesResponse): _3.QueryCodesResponseAmino;
                fromAminoMsg(object: _3.QueryCodesResponseAminoMsg): _3.QueryCodesResponse;
                toAminoMsg(message: _3.QueryCodesResponse): _3.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _3.QueryCodesResponseProtoMsg): _3.QueryCodesResponse;
                toProto(message: _3.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _3.QueryCodesResponse): _3.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _3.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_3.QueryPinnedCodesRequest>): _3.QueryPinnedCodesRequest;
                fromAmino(object: _3.QueryPinnedCodesRequestAmino): _3.QueryPinnedCodesRequest;
                toAmino(message: _3.QueryPinnedCodesRequest): _3.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _3.QueryPinnedCodesRequestAminoMsg): _3.QueryPinnedCodesRequest;
                toAminoMsg(message: _3.QueryPinnedCodesRequest): _3.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _3.QueryPinnedCodesRequestProtoMsg): _3.QueryPinnedCodesRequest;
                toProto(message: _3.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _3.QueryPinnedCodesRequest): _3.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _3.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_3.QueryPinnedCodesResponse>): _3.QueryPinnedCodesResponse;
                fromAmino(object: _3.QueryPinnedCodesResponseAmino): _3.QueryPinnedCodesResponse;
                toAmino(message: _3.QueryPinnedCodesResponse): _3.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _3.QueryPinnedCodesResponseAminoMsg): _3.QueryPinnedCodesResponse;
                toAminoMsg(message: _3.QueryPinnedCodesResponse): _3.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _3.QueryPinnedCodesResponseProtoMsg): _3.QueryPinnedCodesResponse;
                toProto(message: _3.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _3.QueryPinnedCodesResponse): _3.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _3.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _3.QueryParamsRequest;
                fromPartial(_: Partial<_3.QueryParamsRequest>): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                toAminoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _3.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.QueryParamsResponse;
                fromPartial(object: Partial<_3.QueryParamsResponse>): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                toAminoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _2.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.StoreCodeProposal;
                fromPartial(object: Partial<_2.StoreCodeProposal>): _2.StoreCodeProposal;
                fromAmino(object: _2.StoreCodeProposalAmino): _2.StoreCodeProposal;
                toAmino(message: _2.StoreCodeProposal): _2.StoreCodeProposalAmino;
                fromAminoMsg(object: _2.StoreCodeProposalAminoMsg): _2.StoreCodeProposal;
                toAminoMsg(message: _2.StoreCodeProposal): _2.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _2.StoreCodeProposalProtoMsg): _2.StoreCodeProposal;
                toProto(message: _2.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _2.StoreCodeProposal): _2.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _2.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.InstantiateContractProposal;
                fromPartial(object: Partial<_2.InstantiateContractProposal>): _2.InstantiateContractProposal;
                fromAmino(object: _2.InstantiateContractProposalAmino): _2.InstantiateContractProposal;
                toAmino(message: _2.InstantiateContractProposal): _2.InstantiateContractProposalAmino;
                fromAminoMsg(object: _2.InstantiateContractProposalAminoMsg): _2.InstantiateContractProposal;
                toAminoMsg(message: _2.InstantiateContractProposal): _2.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _2.InstantiateContractProposalProtoMsg): _2.InstantiateContractProposal;
                toProto(message: _2.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _2.InstantiateContractProposal): _2.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _2.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.MigrateContractProposal;
                fromPartial(object: Partial<_2.MigrateContractProposal>): _2.MigrateContractProposal;
                fromAmino(object: _2.MigrateContractProposalAmino): _2.MigrateContractProposal;
                toAmino(message: _2.MigrateContractProposal): _2.MigrateContractProposalAmino;
                fromAminoMsg(object: _2.MigrateContractProposalAminoMsg): _2.MigrateContractProposal;
                toAminoMsg(message: _2.MigrateContractProposal): _2.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _2.MigrateContractProposalProtoMsg): _2.MigrateContractProposal;
                toProto(message: _2.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _2.MigrateContractProposal): _2.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _2.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.SudoContractProposal;
                fromPartial(object: Partial<_2.SudoContractProposal>): _2.SudoContractProposal;
                fromAmino(object: _2.SudoContractProposalAmino): _2.SudoContractProposal;
                toAmino(message: _2.SudoContractProposal): _2.SudoContractProposalAmino;
                fromAminoMsg(object: _2.SudoContractProposalAminoMsg): _2.SudoContractProposal;
                toAminoMsg(message: _2.SudoContractProposal): _2.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _2.SudoContractProposalProtoMsg): _2.SudoContractProposal;
                toProto(message: _2.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _2.SudoContractProposal): _2.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _2.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ExecuteContractProposal;
                fromPartial(object: Partial<_2.ExecuteContractProposal>): _2.ExecuteContractProposal;
                fromAmino(object: _2.ExecuteContractProposalAmino): _2.ExecuteContractProposal;
                toAmino(message: _2.ExecuteContractProposal): _2.ExecuteContractProposalAmino;
                fromAminoMsg(object: _2.ExecuteContractProposalAminoMsg): _2.ExecuteContractProposal;
                toAminoMsg(message: _2.ExecuteContractProposal): _2.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _2.ExecuteContractProposalProtoMsg): _2.ExecuteContractProposal;
                toProto(message: _2.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _2.ExecuteContractProposal): _2.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _2.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.UpdateAdminProposal;
                fromPartial(object: Partial<_2.UpdateAdminProposal>): _2.UpdateAdminProposal;
                fromAmino(object: _2.UpdateAdminProposalAmino): _2.UpdateAdminProposal;
                toAmino(message: _2.UpdateAdminProposal): _2.UpdateAdminProposalAmino;
                fromAminoMsg(object: _2.UpdateAdminProposalAminoMsg): _2.UpdateAdminProposal;
                toAminoMsg(message: _2.UpdateAdminProposal): _2.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _2.UpdateAdminProposalProtoMsg): _2.UpdateAdminProposal;
                toProto(message: _2.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _2.UpdateAdminProposal): _2.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _2.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.ClearAdminProposal;
                fromPartial(object: Partial<_2.ClearAdminProposal>): _2.ClearAdminProposal;
                fromAmino(object: _2.ClearAdminProposalAmino): _2.ClearAdminProposal;
                toAmino(message: _2.ClearAdminProposal): _2.ClearAdminProposalAmino;
                fromAminoMsg(object: _2.ClearAdminProposalAminoMsg): _2.ClearAdminProposal;
                toAminoMsg(message: _2.ClearAdminProposal): _2.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _2.ClearAdminProposalProtoMsg): _2.ClearAdminProposal;
                toProto(message: _2.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _2.ClearAdminProposal): _2.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _2.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.PinCodesProposal;
                fromPartial(object: Partial<_2.PinCodesProposal>): _2.PinCodesProposal;
                fromAmino(object: _2.PinCodesProposalAmino): _2.PinCodesProposal;
                toAmino(message: _2.PinCodesProposal): _2.PinCodesProposalAmino;
                fromAminoMsg(object: _2.PinCodesProposalAminoMsg): _2.PinCodesProposal;
                toAminoMsg(message: _2.PinCodesProposal): _2.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _2.PinCodesProposalProtoMsg): _2.PinCodesProposal;
                toProto(message: _2.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _2.PinCodesProposal): _2.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _2.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.UnpinCodesProposal;
                fromPartial(object: Partial<_2.UnpinCodesProposal>): _2.UnpinCodesProposal;
                fromAmino(object: _2.UnpinCodesProposalAmino): _2.UnpinCodesProposal;
                toAmino(message: _2.UnpinCodesProposal): _2.UnpinCodesProposalAmino;
                fromAminoMsg(object: _2.UnpinCodesProposalAminoMsg): _2.UnpinCodesProposal;
                toAminoMsg(message: _2.UnpinCodesProposal): _2.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _2.UnpinCodesProposalProtoMsg): _2.UnpinCodesProposal;
                toProto(message: _2.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _2.UnpinCodesProposal): _2.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _2.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.AccessConfigUpdate;
                fromPartial(object: Partial<_2.AccessConfigUpdate>): _2.AccessConfigUpdate;
                fromAmino(object: _2.AccessConfigUpdateAmino): _2.AccessConfigUpdate;
                toAmino(message: _2.AccessConfigUpdate): _2.AccessConfigUpdateAmino;
                fromAminoMsg(object: _2.AccessConfigUpdateAminoMsg): _2.AccessConfigUpdate;
                toAminoMsg(message: _2.AccessConfigUpdate): _2.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _2.AccessConfigUpdateProtoMsg): _2.AccessConfigUpdate;
                toProto(message: _2.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _2.AccessConfigUpdate): _2.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _2.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_2.UpdateInstantiateConfigProposal>): _2.UpdateInstantiateConfigProposal;
                fromAmino(object: _2.UpdateInstantiateConfigProposalAmino): _2.UpdateInstantiateConfigProposal;
                toAmino(message: _2.UpdateInstantiateConfigProposal): _2.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _2.UpdateInstantiateConfigProposalAminoMsg): _2.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _2.UpdateInstantiateConfigProposal): _2.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _2.UpdateInstantiateConfigProposalProtoMsg): _2.UpdateInstantiateConfigProposal;
                toProto(message: _2.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _2.UpdateInstantiateConfigProposal): _2.UpdateInstantiateConfigProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _1.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgIBCSend;
                fromPartial(object: Partial<_1.MsgIBCSend>): _1.MsgIBCSend;
                fromAmino(object: _1.MsgIBCSendAmino): _1.MsgIBCSend;
                toAmino(message: _1.MsgIBCSend): _1.MsgIBCSendAmino;
                fromAminoMsg(object: _1.MsgIBCSendAminoMsg): _1.MsgIBCSend;
                toAminoMsg(message: _1.MsgIBCSend): _1.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _1.MsgIBCSendProtoMsg): _1.MsgIBCSend;
                toProto(message: _1.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _1.MsgIBCSend): _1.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _1.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.MsgIBCCloseChannel;
                fromPartial(object: Partial<_1.MsgIBCCloseChannel>): _1.MsgIBCCloseChannel;
                fromAmino(object: _1.MsgIBCCloseChannelAmino): _1.MsgIBCCloseChannel;
                toAmino(message: _1.MsgIBCCloseChannel): _1.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _1.MsgIBCCloseChannelAminoMsg): _1.MsgIBCCloseChannel;
                toAminoMsg(message: _1.MsgIBCCloseChannel): _1.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _1.MsgIBCCloseChannelProtoMsg): _1.MsgIBCCloseChannel;
                toProto(message: _1.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _1.MsgIBCCloseChannel): _1.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _0.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GenesisState;
                fromPartial(object: Partial<_0.GenesisState>): _0.GenesisState;
                fromAmino(object: _0.GenesisStateAmino): _0.GenesisState;
                toAmino(message: _0.GenesisState): _0.GenesisStateAmino;
                fromAminoMsg(object: _0.GenesisStateAminoMsg): _0.GenesisState;
                toAminoMsg(message: _0.GenesisState): _0.GenesisStateAminoMsg;
                fromProtoMsg(message: _0.GenesisStateProtoMsg): _0.GenesisState;
                toProto(message: _0.GenesisState): Uint8Array;
                toProtoMsg(message: _0.GenesisState): _0.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _0.GenesisState_GenMsgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.GenesisState_GenMsgs;
                fromPartial(object: Partial<_0.GenesisState_GenMsgs>): _0.GenesisState_GenMsgs;
                fromAmino(object: _0.GenesisState_GenMsgsAmino): _0.GenesisState_GenMsgs;
                toAmino(message: _0.GenesisState_GenMsgs): _0.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _0.GenesisState_GenMsgsAminoMsg): _0.GenesisState_GenMsgs;
                toAminoMsg(message: _0.GenesisState_GenMsgs): _0.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _0.GenesisState_GenMsgsProtoMsg): _0.GenesisState_GenMsgs;
                toProto(message: _0.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _0.GenesisState_GenMsgs): _0.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _0.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Code;
                fromPartial(object: Partial<_0.Code>): _0.Code;
                fromAmino(object: _0.CodeAmino): _0.Code;
                toAmino(message: _0.Code): _0.CodeAmino;
                fromAminoMsg(object: _0.CodeAminoMsg): _0.Code;
                toAminoMsg(message: _0.Code): _0.CodeAminoMsg;
                fromProtoMsg(message: _0.CodeProtoMsg): _0.Code;
                toProto(message: _0.Code): Uint8Array;
                toProtoMsg(message: _0.Code): _0.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _0.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Contract;
                fromPartial(object: Partial<_0.Contract>): _0.Contract;
                fromAmino(object: _0.ContractAmino): _0.Contract;
                toAmino(message: _0.Contract): _0.ContractAmino;
                fromAminoMsg(object: _0.ContractAminoMsg): _0.Contract;
                toAminoMsg(message: _0.Contract): _0.ContractAminoMsg;
                fromProtoMsg(message: _0.ContractProtoMsg): _0.Contract;
                toProto(message: _0.Contract): Uint8Array;
                toProtoMsg(message: _0.Contract): _0.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _0.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Sequence;
                fromPartial(object: Partial<_0.Sequence>): _0.Sequence;
                fromAmino(object: _0.SequenceAmino): _0.Sequence;
                toAmino(message: _0.Sequence): _0.SequenceAmino;
                fromAminoMsg(object: _0.SequenceAminoMsg): _0.Sequence;
                toAminoMsg(message: _0.Sequence): _0.SequenceAminoMsg;
                fromProtoMsg(message: _0.SequenceProtoMsg): _0.Sequence;
                toProto(message: _0.Sequence): Uint8Array;
                toProtoMsg(message: _0.Sequence): _0.SequenceProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmwasm: {
                wasm: {
                    v1: _138.MsgClientImpl;
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
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmwasm: {
                wasm: {
                    v1: _136.LCDQueryClient;
                };
            };
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
        }>;
    };
}
