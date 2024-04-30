import * as _115 from "./wasm/v1/authz";
import * as _116 from "./wasm/v1/genesis";
import * as _117 from "./wasm/v1/ibc";
import * as _118 from "./wasm/v1/proposal";
import * as _119 from "./wasm/v1/query";
import * as _120 from "./wasm/v1/tx";
import * as _121 from "./wasm/v1/types";
import * as _220 from "./wasm/v1/query.lcd";
import * as _221 from "./wasm/v1/query.rpc.Query";
import * as _222 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _119.QueryContractInfoRequest): Promise<_119.QueryContractInfoResponse>;
                contractHistory(request: _119.QueryContractHistoryRequest): Promise<_119.QueryContractHistoryResponse>;
                contractsByCode(request: _119.QueryContractsByCodeRequest): Promise<_119.QueryContractsByCodeResponse>;
                allContractState(request: _119.QueryAllContractStateRequest): Promise<_119.QueryAllContractStateResponse>;
                rawContractState(request: _119.QueryRawContractStateRequest): Promise<_119.QueryRawContractStateResponse>;
                smartContractState(request: _119.QuerySmartContractStateRequest): Promise<_119.QuerySmartContractStateResponse>;
                code(request: _119.QueryCodeRequest): Promise<_119.QueryCodeResponse>;
                codes(request?: _119.QueryCodesRequest): Promise<_119.QueryCodesResponse>;
                pinnedCodes(request?: _119.QueryPinnedCodesRequest): Promise<_119.QueryPinnedCodesResponse>;
                params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                contractsByCreator(request: _119.QueryContractsByCreatorRequest): Promise<_119.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _220.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _120.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _120.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _120.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _120.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _120.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _120.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _120.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _120.MsgStoreCode): {
                        typeUrl: string;
                        value: _120.MsgStoreCode;
                    };
                    instantiateContract(value: _120.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _120.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _120.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _120.MsgInstantiateContract2;
                    };
                    executeContract(value: _120.MsgExecuteContract): {
                        typeUrl: string;
                        value: _120.MsgExecuteContract;
                    };
                    migrateContract(value: _120.MsgMigrateContract): {
                        typeUrl: string;
                        value: _120.MsgMigrateContract;
                    };
                    updateAdmin(value: _120.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _120.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _120.MsgClearAdmin): {
                        typeUrl: string;
                        value: _120.MsgClearAdmin;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _120.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _120.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _120.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _120.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _120.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _120.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _120.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _120.MsgStoreCode): {
                        typeUrl: string;
                        value: _120.MsgStoreCode;
                    };
                    instantiateContract(value: _120.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _120.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _120.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _120.MsgInstantiateContract2;
                    };
                    executeContract(value: _120.MsgExecuteContract): {
                        typeUrl: string;
                        value: _120.MsgExecuteContract;
                    };
                    migrateContract(value: _120.MsgMigrateContract): {
                        typeUrl: string;
                        value: _120.MsgMigrateContract;
                    };
                    updateAdmin(value: _120.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _120.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _120.MsgClearAdmin): {
                        typeUrl: string;
                        value: _120.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _120.MsgStoreCode) => _120.MsgStoreCodeAmino;
                    fromAmino: (object: _120.MsgStoreCodeAmino) => _120.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _120.MsgInstantiateContract) => _120.MsgInstantiateContractAmino;
                    fromAmino: (object: _120.MsgInstantiateContractAmino) => _120.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _120.MsgInstantiateContract2) => _120.MsgInstantiateContract2Amino;
                    fromAmino: (object: _120.MsgInstantiateContract2Amino) => _120.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _120.MsgExecuteContract) => _120.MsgExecuteContractAmino;
                    fromAmino: (object: _120.MsgExecuteContractAmino) => _120.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _120.MsgMigrateContract) => _120.MsgMigrateContractAmino;
                    fromAmino: (object: _120.MsgMigrateContractAmino) => _120.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _120.MsgUpdateAdmin) => _120.MsgUpdateAdminAmino;
                    fromAmino: (object: _120.MsgUpdateAdminAmino) => _120.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _120.MsgClearAdmin) => _120.MsgClearAdminAmino;
                    fromAmino: (object: _120.MsgClearAdminAmino) => _120.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _121.AccessType;
            accessTypeToJSON(object: _121.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _121.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _121.ContractCodeHistoryOperationType): string;
            AccessType: typeof _121.AccessType;
            AccessTypeSDKType: typeof _121.AccessType;
            AccessTypeAmino: typeof _121.AccessType;
            ContractCodeHistoryOperationType: typeof _121.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _121.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _121.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _121.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.AccessTypeParam;
                fromPartial(object: Partial<_121.AccessTypeParam>): _121.AccessTypeParam;
                fromAmino(object: _121.AccessTypeParamAmino): _121.AccessTypeParam;
                toAmino(message: _121.AccessTypeParam): _121.AccessTypeParamAmino;
                fromAminoMsg(object: _121.AccessTypeParamAminoMsg): _121.AccessTypeParam;
                toAminoMsg(message: _121.AccessTypeParam): _121.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _121.AccessTypeParamProtoMsg): _121.AccessTypeParam;
                toProto(message: _121.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _121.AccessTypeParam): _121.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _121.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.AccessConfig;
                fromPartial(object: Partial<_121.AccessConfig>): _121.AccessConfig;
                fromAmino(object: _121.AccessConfigAmino): _121.AccessConfig;
                toAmino(message: _121.AccessConfig): _121.AccessConfigAmino;
                fromAminoMsg(object: _121.AccessConfigAminoMsg): _121.AccessConfig;
                toAminoMsg(message: _121.AccessConfig): _121.AccessConfigAminoMsg;
                fromProtoMsg(message: _121.AccessConfigProtoMsg): _121.AccessConfig;
                toProto(message: _121.AccessConfig): Uint8Array;
                toProtoMsg(message: _121.AccessConfig): _121.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _121.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Params;
                fromPartial(object: Partial<_121.Params>): _121.Params;
                fromAmino(object: _121.ParamsAmino): _121.Params;
                toAmino(message: _121.Params): _121.ParamsAmino;
                fromAminoMsg(object: _121.ParamsAminoMsg): _121.Params;
                toAminoMsg(message: _121.Params): _121.ParamsAminoMsg;
                fromProtoMsg(message: _121.ParamsProtoMsg): _121.Params;
                toProto(message: _121.Params): Uint8Array;
                toProtoMsg(message: _121.Params): _121.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _121.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.CodeInfo;
                fromPartial(object: Partial<_121.CodeInfo>): _121.CodeInfo;
                fromAmino(object: _121.CodeInfoAmino): _121.CodeInfo;
                toAmino(message: _121.CodeInfo): _121.CodeInfoAmino;
                fromAminoMsg(object: _121.CodeInfoAminoMsg): _121.CodeInfo;
                toAminoMsg(message: _121.CodeInfo): _121.CodeInfoAminoMsg;
                fromProtoMsg(message: _121.CodeInfoProtoMsg): _121.CodeInfo;
                toProto(message: _121.CodeInfo): Uint8Array;
                toProtoMsg(message: _121.CodeInfo): _121.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _121.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ContractInfo;
                fromPartial(object: Partial<_121.ContractInfo>): _121.ContractInfo;
                fromAmino(object: _121.ContractInfoAmino): _121.ContractInfo;
                toAmino(message: _121.ContractInfo): _121.ContractInfoAmino;
                fromAminoMsg(object: _121.ContractInfoAminoMsg): _121.ContractInfo;
                toAminoMsg(message: _121.ContractInfo): _121.ContractInfoAminoMsg;
                fromProtoMsg(message: _121.ContractInfoProtoMsg): _121.ContractInfo;
                toProto(message: _121.ContractInfo): Uint8Array;
                toProtoMsg(message: _121.ContractInfo): _121.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _121.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_121.ContractCodeHistoryEntry>): _121.ContractCodeHistoryEntry;
                fromAmino(object: _121.ContractCodeHistoryEntryAmino): _121.ContractCodeHistoryEntry;
                toAmino(message: _121.ContractCodeHistoryEntry): _121.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _121.ContractCodeHistoryEntryAminoMsg): _121.ContractCodeHistoryEntry;
                toAminoMsg(message: _121.ContractCodeHistoryEntry): _121.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _121.ContractCodeHistoryEntryProtoMsg): _121.ContractCodeHistoryEntry;
                toProto(message: _121.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _121.ContractCodeHistoryEntry): _121.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _121.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.AbsoluteTxPosition;
                fromPartial(object: Partial<_121.AbsoluteTxPosition>): _121.AbsoluteTxPosition;
                fromAmino(object: _121.AbsoluteTxPositionAmino): _121.AbsoluteTxPosition;
                toAmino(message: _121.AbsoluteTxPosition): _121.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _121.AbsoluteTxPositionAminoMsg): _121.AbsoluteTxPosition;
                toAminoMsg(message: _121.AbsoluteTxPosition): _121.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _121.AbsoluteTxPositionProtoMsg): _121.AbsoluteTxPosition;
                toProto(message: _121.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _121.AbsoluteTxPosition): _121.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _121.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _121.Model;
                fromPartial(object: Partial<_121.Model>): _121.Model;
                fromAmino(object: _121.ModelAmino): _121.Model;
                toAmino(message: _121.Model): _121.ModelAmino;
                fromAminoMsg(object: _121.ModelAminoMsg): _121.Model;
                toAminoMsg(message: _121.Model): _121.ModelAminoMsg;
                fromProtoMsg(message: _121.ModelProtoMsg): _121.Model;
                toProto(message: _121.Model): Uint8Array;
                toProtoMsg(message: _121.Model): _121.ModelProtoMsg;
            };
            ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _120.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgStoreCode;
                fromPartial(object: Partial<_120.MsgStoreCode>): _120.MsgStoreCode;
                fromAmino(object: _120.MsgStoreCodeAmino): _120.MsgStoreCode;
                toAmino(message: _120.MsgStoreCode): _120.MsgStoreCodeAmino;
                fromAminoMsg(object: _120.MsgStoreCodeAminoMsg): _120.MsgStoreCode;
                toAminoMsg(message: _120.MsgStoreCode): _120.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _120.MsgStoreCodeProtoMsg): _120.MsgStoreCode;
                toProto(message: _120.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _120.MsgStoreCode): _120.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _120.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgStoreCodeResponse;
                fromPartial(object: Partial<_120.MsgStoreCodeResponse>): _120.MsgStoreCodeResponse;
                fromAmino(object: _120.MsgStoreCodeResponseAmino): _120.MsgStoreCodeResponse;
                toAmino(message: _120.MsgStoreCodeResponse): _120.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _120.MsgStoreCodeResponseAminoMsg): _120.MsgStoreCodeResponse;
                toAminoMsg(message: _120.MsgStoreCodeResponse): _120.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _120.MsgStoreCodeResponseProtoMsg): _120.MsgStoreCodeResponse;
                toProto(message: _120.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _120.MsgStoreCodeResponse): _120.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _120.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgInstantiateContract;
                fromPartial(object: Partial<_120.MsgInstantiateContract>): _120.MsgInstantiateContract;
                fromAmino(object: _120.MsgInstantiateContractAmino): _120.MsgInstantiateContract;
                toAmino(message: _120.MsgInstantiateContract): _120.MsgInstantiateContractAmino;
                fromAminoMsg(object: _120.MsgInstantiateContractAminoMsg): _120.MsgInstantiateContract;
                toAminoMsg(message: _120.MsgInstantiateContract): _120.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _120.MsgInstantiateContractProtoMsg): _120.MsgInstantiateContract;
                toProto(message: _120.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _120.MsgInstantiateContract): _120.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _120.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgInstantiateContract2;
                fromPartial(object: Partial<_120.MsgInstantiateContract2>): _120.MsgInstantiateContract2;
                fromAmino(object: _120.MsgInstantiateContract2Amino): _120.MsgInstantiateContract2;
                toAmino(message: _120.MsgInstantiateContract2): _120.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _120.MsgInstantiateContract2AminoMsg): _120.MsgInstantiateContract2;
                toAminoMsg(message: _120.MsgInstantiateContract2): _120.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _120.MsgInstantiateContract2ProtoMsg): _120.MsgInstantiateContract2;
                toProto(message: _120.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _120.MsgInstantiateContract2): _120.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _120.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_120.MsgInstantiateContractResponse>): _120.MsgInstantiateContractResponse;
                fromAmino(object: _120.MsgInstantiateContractResponseAmino): _120.MsgInstantiateContractResponse;
                toAmino(message: _120.MsgInstantiateContractResponse): _120.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _120.MsgInstantiateContractResponseAminoMsg): _120.MsgInstantiateContractResponse;
                toAminoMsg(message: _120.MsgInstantiateContractResponse): _120.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _120.MsgInstantiateContractResponseProtoMsg): _120.MsgInstantiateContractResponse;
                toProto(message: _120.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _120.MsgInstantiateContractResponse): _120.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _120.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_120.MsgInstantiateContract2Response>): _120.MsgInstantiateContract2Response;
                fromAmino(object: _120.MsgInstantiateContract2ResponseAmino): _120.MsgInstantiateContract2Response;
                toAmino(message: _120.MsgInstantiateContract2Response): _120.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _120.MsgInstantiateContract2ResponseAminoMsg): _120.MsgInstantiateContract2Response;
                toAminoMsg(message: _120.MsgInstantiateContract2Response): _120.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _120.MsgInstantiateContract2ResponseProtoMsg): _120.MsgInstantiateContract2Response;
                toProto(message: _120.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _120.MsgInstantiateContract2Response): _120.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _120.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgExecuteContract;
                fromPartial(object: Partial<_120.MsgExecuteContract>): _120.MsgExecuteContract;
                fromAmino(object: _120.MsgExecuteContractAmino): _120.MsgExecuteContract;
                toAmino(message: _120.MsgExecuteContract): _120.MsgExecuteContractAmino;
                fromAminoMsg(object: _120.MsgExecuteContractAminoMsg): _120.MsgExecuteContract;
                toAminoMsg(message: _120.MsgExecuteContract): _120.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _120.MsgExecuteContractProtoMsg): _120.MsgExecuteContract;
                toProto(message: _120.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _120.MsgExecuteContract): _120.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _120.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgExecuteContractResponse;
                fromPartial(object: Partial<_120.MsgExecuteContractResponse>): _120.MsgExecuteContractResponse;
                fromAmino(object: _120.MsgExecuteContractResponseAmino): _120.MsgExecuteContractResponse;
                toAmino(message: _120.MsgExecuteContractResponse): _120.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _120.MsgExecuteContractResponseAminoMsg): _120.MsgExecuteContractResponse;
                toAminoMsg(message: _120.MsgExecuteContractResponse): _120.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _120.MsgExecuteContractResponseProtoMsg): _120.MsgExecuteContractResponse;
                toProto(message: _120.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _120.MsgExecuteContractResponse): _120.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _120.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgMigrateContract;
                fromPartial(object: Partial<_120.MsgMigrateContract>): _120.MsgMigrateContract;
                fromAmino(object: _120.MsgMigrateContractAmino): _120.MsgMigrateContract;
                toAmino(message: _120.MsgMigrateContract): _120.MsgMigrateContractAmino;
                fromAminoMsg(object: _120.MsgMigrateContractAminoMsg): _120.MsgMigrateContract;
                toAminoMsg(message: _120.MsgMigrateContract): _120.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _120.MsgMigrateContractProtoMsg): _120.MsgMigrateContract;
                toProto(message: _120.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _120.MsgMigrateContract): _120.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _120.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgMigrateContractResponse;
                fromPartial(object: Partial<_120.MsgMigrateContractResponse>): _120.MsgMigrateContractResponse;
                fromAmino(object: _120.MsgMigrateContractResponseAmino): _120.MsgMigrateContractResponse;
                toAmino(message: _120.MsgMigrateContractResponse): _120.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _120.MsgMigrateContractResponseAminoMsg): _120.MsgMigrateContractResponse;
                toAminoMsg(message: _120.MsgMigrateContractResponse): _120.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _120.MsgMigrateContractResponseProtoMsg): _120.MsgMigrateContractResponse;
                toProto(message: _120.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _120.MsgMigrateContractResponse): _120.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _120.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgUpdateAdmin;
                fromPartial(object: Partial<_120.MsgUpdateAdmin>): _120.MsgUpdateAdmin;
                fromAmino(object: _120.MsgUpdateAdminAmino): _120.MsgUpdateAdmin;
                toAmino(message: _120.MsgUpdateAdmin): _120.MsgUpdateAdminAmino;
                fromAminoMsg(object: _120.MsgUpdateAdminAminoMsg): _120.MsgUpdateAdmin;
                toAminoMsg(message: _120.MsgUpdateAdmin): _120.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _120.MsgUpdateAdminProtoMsg): _120.MsgUpdateAdmin;
                toProto(message: _120.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _120.MsgUpdateAdmin): _120.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _120.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_120.MsgUpdateAdminResponse>): _120.MsgUpdateAdminResponse;
                fromAmino(_: _120.MsgUpdateAdminResponseAmino): _120.MsgUpdateAdminResponse;
                toAmino(_: _120.MsgUpdateAdminResponse): _120.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _120.MsgUpdateAdminResponseAminoMsg): _120.MsgUpdateAdminResponse;
                toAminoMsg(message: _120.MsgUpdateAdminResponse): _120.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _120.MsgUpdateAdminResponseProtoMsg): _120.MsgUpdateAdminResponse;
                toProto(message: _120.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _120.MsgUpdateAdminResponse): _120.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _120.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _120.MsgClearAdmin;
                fromPartial(object: Partial<_120.MsgClearAdmin>): _120.MsgClearAdmin;
                fromAmino(object: _120.MsgClearAdminAmino): _120.MsgClearAdmin;
                toAmino(message: _120.MsgClearAdmin): _120.MsgClearAdminAmino;
                fromAminoMsg(object: _120.MsgClearAdminAminoMsg): _120.MsgClearAdmin;
                toAminoMsg(message: _120.MsgClearAdmin): _120.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _120.MsgClearAdminProtoMsg): _120.MsgClearAdmin;
                toProto(message: _120.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _120.MsgClearAdmin): _120.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _120.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _120.MsgClearAdminResponse;
                fromPartial(_: Partial<_120.MsgClearAdminResponse>): _120.MsgClearAdminResponse;
                fromAmino(_: _120.MsgClearAdminResponseAmino): _120.MsgClearAdminResponse;
                toAmino(_: _120.MsgClearAdminResponse): _120.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _120.MsgClearAdminResponseAminoMsg): _120.MsgClearAdminResponse;
                toAminoMsg(message: _120.MsgClearAdminResponse): _120.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _120.MsgClearAdminResponseProtoMsg): _120.MsgClearAdminResponse;
                toProto(message: _120.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _120.MsgClearAdminResponse): _120.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _119.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractInfoRequest;
                fromPartial(object: Partial<_119.QueryContractInfoRequest>): _119.QueryContractInfoRequest;
                fromAmino(object: _119.QueryContractInfoRequestAmino): _119.QueryContractInfoRequest;
                toAmino(message: _119.QueryContractInfoRequest): _119.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _119.QueryContractInfoRequestAminoMsg): _119.QueryContractInfoRequest;
                toAminoMsg(message: _119.QueryContractInfoRequest): _119.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _119.QueryContractInfoRequestProtoMsg): _119.QueryContractInfoRequest;
                toProto(message: _119.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _119.QueryContractInfoRequest): _119.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _119.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractInfoResponse;
                fromPartial(object: Partial<_119.QueryContractInfoResponse>): _119.QueryContractInfoResponse;
                fromAmino(object: _119.QueryContractInfoResponseAmino): _119.QueryContractInfoResponse;
                toAmino(message: _119.QueryContractInfoResponse): _119.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _119.QueryContractInfoResponseAminoMsg): _119.QueryContractInfoResponse;
                toAminoMsg(message: _119.QueryContractInfoResponse): _119.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _119.QueryContractInfoResponseProtoMsg): _119.QueryContractInfoResponse;
                toProto(message: _119.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _119.QueryContractInfoResponse): _119.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _119.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractHistoryRequest;
                fromPartial(object: Partial<_119.QueryContractHistoryRequest>): _119.QueryContractHistoryRequest;
                fromAmino(object: _119.QueryContractHistoryRequestAmino): _119.QueryContractHistoryRequest;
                toAmino(message: _119.QueryContractHistoryRequest): _119.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _119.QueryContractHistoryRequestAminoMsg): _119.QueryContractHistoryRequest;
                toAminoMsg(message: _119.QueryContractHistoryRequest): _119.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _119.QueryContractHistoryRequestProtoMsg): _119.QueryContractHistoryRequest;
                toProto(message: _119.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _119.QueryContractHistoryRequest): _119.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _119.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractHistoryResponse;
                fromPartial(object: Partial<_119.QueryContractHistoryResponse>): _119.QueryContractHistoryResponse;
                fromAmino(object: _119.QueryContractHistoryResponseAmino): _119.QueryContractHistoryResponse;
                toAmino(message: _119.QueryContractHistoryResponse): _119.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _119.QueryContractHistoryResponseAminoMsg): _119.QueryContractHistoryResponse;
                toAminoMsg(message: _119.QueryContractHistoryResponse): _119.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _119.QueryContractHistoryResponseProtoMsg): _119.QueryContractHistoryResponse;
                toProto(message: _119.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _119.QueryContractHistoryResponse): _119.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _119.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_119.QueryContractsByCodeRequest>): _119.QueryContractsByCodeRequest;
                fromAmino(object: _119.QueryContractsByCodeRequestAmino): _119.QueryContractsByCodeRequest;
                toAmino(message: _119.QueryContractsByCodeRequest): _119.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _119.QueryContractsByCodeRequestAminoMsg): _119.QueryContractsByCodeRequest;
                toAminoMsg(message: _119.QueryContractsByCodeRequest): _119.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _119.QueryContractsByCodeRequestProtoMsg): _119.QueryContractsByCodeRequest;
                toProto(message: _119.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _119.QueryContractsByCodeRequest): _119.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _119.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_119.QueryContractsByCodeResponse>): _119.QueryContractsByCodeResponse;
                fromAmino(object: _119.QueryContractsByCodeResponseAmino): _119.QueryContractsByCodeResponse;
                toAmino(message: _119.QueryContractsByCodeResponse): _119.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _119.QueryContractsByCodeResponseAminoMsg): _119.QueryContractsByCodeResponse;
                toAminoMsg(message: _119.QueryContractsByCodeResponse): _119.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _119.QueryContractsByCodeResponseProtoMsg): _119.QueryContractsByCodeResponse;
                toProto(message: _119.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _119.QueryContractsByCodeResponse): _119.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _119.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryAllContractStateRequest;
                fromPartial(object: Partial<_119.QueryAllContractStateRequest>): _119.QueryAllContractStateRequest;
                fromAmino(object: _119.QueryAllContractStateRequestAmino): _119.QueryAllContractStateRequest;
                toAmino(message: _119.QueryAllContractStateRequest): _119.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _119.QueryAllContractStateRequestAminoMsg): _119.QueryAllContractStateRequest;
                toAminoMsg(message: _119.QueryAllContractStateRequest): _119.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _119.QueryAllContractStateRequestProtoMsg): _119.QueryAllContractStateRequest;
                toProto(message: _119.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _119.QueryAllContractStateRequest): _119.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _119.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryAllContractStateResponse;
                fromPartial(object: Partial<_119.QueryAllContractStateResponse>): _119.QueryAllContractStateResponse;
                fromAmino(object: _119.QueryAllContractStateResponseAmino): _119.QueryAllContractStateResponse;
                toAmino(message: _119.QueryAllContractStateResponse): _119.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _119.QueryAllContractStateResponseAminoMsg): _119.QueryAllContractStateResponse;
                toAminoMsg(message: _119.QueryAllContractStateResponse): _119.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _119.QueryAllContractStateResponseProtoMsg): _119.QueryAllContractStateResponse;
                toProto(message: _119.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _119.QueryAllContractStateResponse): _119.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _119.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryRawContractStateRequest;
                fromPartial(object: Partial<_119.QueryRawContractStateRequest>): _119.QueryRawContractStateRequest;
                fromAmino(object: _119.QueryRawContractStateRequestAmino): _119.QueryRawContractStateRequest;
                toAmino(message: _119.QueryRawContractStateRequest): _119.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _119.QueryRawContractStateRequestAminoMsg): _119.QueryRawContractStateRequest;
                toAminoMsg(message: _119.QueryRawContractStateRequest): _119.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _119.QueryRawContractStateRequestProtoMsg): _119.QueryRawContractStateRequest;
                toProto(message: _119.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _119.QueryRawContractStateRequest): _119.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _119.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryRawContractStateResponse;
                fromPartial(object: Partial<_119.QueryRawContractStateResponse>): _119.QueryRawContractStateResponse;
                fromAmino(object: _119.QueryRawContractStateResponseAmino): _119.QueryRawContractStateResponse;
                toAmino(message: _119.QueryRawContractStateResponse): _119.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _119.QueryRawContractStateResponseAminoMsg): _119.QueryRawContractStateResponse;
                toAminoMsg(message: _119.QueryRawContractStateResponse): _119.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _119.QueryRawContractStateResponseProtoMsg): _119.QueryRawContractStateResponse;
                toProto(message: _119.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _119.QueryRawContractStateResponse): _119.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _119.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_119.QuerySmartContractStateRequest>): _119.QuerySmartContractStateRequest;
                fromAmino(object: _119.QuerySmartContractStateRequestAmino): _119.QuerySmartContractStateRequest;
                toAmino(message: _119.QuerySmartContractStateRequest): _119.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _119.QuerySmartContractStateRequestAminoMsg): _119.QuerySmartContractStateRequest;
                toAminoMsg(message: _119.QuerySmartContractStateRequest): _119.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _119.QuerySmartContractStateRequestProtoMsg): _119.QuerySmartContractStateRequest;
                toProto(message: _119.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _119.QuerySmartContractStateRequest): _119.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _119.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_119.QuerySmartContractStateResponse>): _119.QuerySmartContractStateResponse;
                fromAmino(object: _119.QuerySmartContractStateResponseAmino): _119.QuerySmartContractStateResponse;
                toAmino(message: _119.QuerySmartContractStateResponse): _119.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _119.QuerySmartContractStateResponseAminoMsg): _119.QuerySmartContractStateResponse;
                toAminoMsg(message: _119.QuerySmartContractStateResponse): _119.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _119.QuerySmartContractStateResponseProtoMsg): _119.QuerySmartContractStateResponse;
                toProto(message: _119.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _119.QuerySmartContractStateResponse): _119.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _119.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryCodeRequest;
                fromPartial(object: Partial<_119.QueryCodeRequest>): _119.QueryCodeRequest;
                fromAmino(object: _119.QueryCodeRequestAmino): _119.QueryCodeRequest;
                toAmino(message: _119.QueryCodeRequest): _119.QueryCodeRequestAmino;
                fromAminoMsg(object: _119.QueryCodeRequestAminoMsg): _119.QueryCodeRequest;
                toAminoMsg(message: _119.QueryCodeRequest): _119.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _119.QueryCodeRequestProtoMsg): _119.QueryCodeRequest;
                toProto(message: _119.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _119.QueryCodeRequest): _119.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _119.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.CodeInfoResponse;
                fromPartial(object: Partial<_119.CodeInfoResponse>): _119.CodeInfoResponse;
                fromAmino(object: _119.CodeInfoResponseAmino): _119.CodeInfoResponse;
                toAmino(message: _119.CodeInfoResponse): _119.CodeInfoResponseAmino;
                fromAminoMsg(object: _119.CodeInfoResponseAminoMsg): _119.CodeInfoResponse;
                toAminoMsg(message: _119.CodeInfoResponse): _119.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _119.CodeInfoResponseProtoMsg): _119.CodeInfoResponse;
                toProto(message: _119.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _119.CodeInfoResponse): _119.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _119.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryCodeResponse;
                fromPartial(object: Partial<_119.QueryCodeResponse>): _119.QueryCodeResponse;
                fromAmino(object: _119.QueryCodeResponseAmino): _119.QueryCodeResponse;
                toAmino(message: _119.QueryCodeResponse): _119.QueryCodeResponseAmino;
                fromAminoMsg(object: _119.QueryCodeResponseAminoMsg): _119.QueryCodeResponse;
                toAminoMsg(message: _119.QueryCodeResponse): _119.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _119.QueryCodeResponseProtoMsg): _119.QueryCodeResponse;
                toProto(message: _119.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _119.QueryCodeResponse): _119.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _119.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryCodesRequest;
                fromPartial(object: Partial<_119.QueryCodesRequest>): _119.QueryCodesRequest;
                fromAmino(object: _119.QueryCodesRequestAmino): _119.QueryCodesRequest;
                toAmino(message: _119.QueryCodesRequest): _119.QueryCodesRequestAmino;
                fromAminoMsg(object: _119.QueryCodesRequestAminoMsg): _119.QueryCodesRequest;
                toAminoMsg(message: _119.QueryCodesRequest): _119.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryCodesRequestProtoMsg): _119.QueryCodesRequest;
                toProto(message: _119.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryCodesRequest): _119.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _119.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryCodesResponse;
                fromPartial(object: Partial<_119.QueryCodesResponse>): _119.QueryCodesResponse;
                fromAmino(object: _119.QueryCodesResponseAmino): _119.QueryCodesResponse;
                toAmino(message: _119.QueryCodesResponse): _119.QueryCodesResponseAmino;
                fromAminoMsg(object: _119.QueryCodesResponseAminoMsg): _119.QueryCodesResponse;
                toAminoMsg(message: _119.QueryCodesResponse): _119.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryCodesResponseProtoMsg): _119.QueryCodesResponse;
                toProto(message: _119.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryCodesResponse): _119.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _119.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_119.QueryPinnedCodesRequest>): _119.QueryPinnedCodesRequest;
                fromAmino(object: _119.QueryPinnedCodesRequestAmino): _119.QueryPinnedCodesRequest;
                toAmino(message: _119.QueryPinnedCodesRequest): _119.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _119.QueryPinnedCodesRequestAminoMsg): _119.QueryPinnedCodesRequest;
                toAminoMsg(message: _119.QueryPinnedCodesRequest): _119.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _119.QueryPinnedCodesRequestProtoMsg): _119.QueryPinnedCodesRequest;
                toProto(message: _119.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _119.QueryPinnedCodesRequest): _119.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _119.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_119.QueryPinnedCodesResponse>): _119.QueryPinnedCodesResponse;
                fromAmino(object: _119.QueryPinnedCodesResponseAmino): _119.QueryPinnedCodesResponse;
                toAmino(message: _119.QueryPinnedCodesResponse): _119.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _119.QueryPinnedCodesResponseAminoMsg): _119.QueryPinnedCodesResponse;
                toAminoMsg(message: _119.QueryPinnedCodesResponse): _119.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _119.QueryPinnedCodesResponseProtoMsg): _119.QueryPinnedCodesResponse;
                toProto(message: _119.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _119.QueryPinnedCodesResponse): _119.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _119.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _119.QueryParamsRequest;
                fromPartial(_: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
                fromAmino(_: _119.QueryParamsRequestAmino): _119.QueryParamsRequest;
                toAmino(_: _119.QueryParamsRequest): _119.QueryParamsRequestAmino;
                fromAminoMsg(object: _119.QueryParamsRequestAminoMsg): _119.QueryParamsRequest;
                toAminoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryParamsRequestProtoMsg): _119.QueryParamsRequest;
                toProto(message: _119.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _119.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryParamsResponse;
                fromPartial(object: Partial<_119.QueryParamsResponse>): _119.QueryParamsResponse;
                fromAmino(object: _119.QueryParamsResponseAmino): _119.QueryParamsResponse;
                toAmino(message: _119.QueryParamsResponse): _119.QueryParamsResponseAmino;
                fromAminoMsg(object: _119.QueryParamsResponseAminoMsg): _119.QueryParamsResponse;
                toAminoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryParamsResponseProtoMsg): _119.QueryParamsResponse;
                toProto(message: _119.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _119.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_119.QueryContractsByCreatorRequest>): _119.QueryContractsByCreatorRequest;
                fromAmino(object: _119.QueryContractsByCreatorRequestAmino): _119.QueryContractsByCreatorRequest;
                toAmino(message: _119.QueryContractsByCreatorRequest): _119.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _119.QueryContractsByCreatorRequestAminoMsg): _119.QueryContractsByCreatorRequest;
                toAminoMsg(message: _119.QueryContractsByCreatorRequest): _119.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _119.QueryContractsByCreatorRequestProtoMsg): _119.QueryContractsByCreatorRequest;
                toProto(message: _119.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _119.QueryContractsByCreatorRequest): _119.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _119.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _119.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_119.QueryContractsByCreatorResponse>): _119.QueryContractsByCreatorResponse;
                fromAmino(object: _119.QueryContractsByCreatorResponseAmino): _119.QueryContractsByCreatorResponse;
                toAmino(message: _119.QueryContractsByCreatorResponse): _119.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _119.QueryContractsByCreatorResponseAminoMsg): _119.QueryContractsByCreatorResponse;
                toAminoMsg(message: _119.QueryContractsByCreatorResponse): _119.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _119.QueryContractsByCreatorResponseProtoMsg): _119.QueryContractsByCreatorResponse;
                toProto(message: _119.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _119.QueryContractsByCreatorResponse): _119.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _118.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.StoreCodeProposal;
                fromPartial(object: Partial<_118.StoreCodeProposal>): _118.StoreCodeProposal;
                fromAmino(object: _118.StoreCodeProposalAmino): _118.StoreCodeProposal;
                toAmino(message: _118.StoreCodeProposal): _118.StoreCodeProposalAmino;
                fromAminoMsg(object: _118.StoreCodeProposalAminoMsg): _118.StoreCodeProposal;
                toAminoMsg(message: _118.StoreCodeProposal): _118.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _118.StoreCodeProposalProtoMsg): _118.StoreCodeProposal;
                toProto(message: _118.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _118.StoreCodeProposal): _118.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _118.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.InstantiateContractProposal;
                fromPartial(object: Partial<_118.InstantiateContractProposal>): _118.InstantiateContractProposal;
                fromAmino(object: _118.InstantiateContractProposalAmino): _118.InstantiateContractProposal;
                toAmino(message: _118.InstantiateContractProposal): _118.InstantiateContractProposalAmino;
                fromAminoMsg(object: _118.InstantiateContractProposalAminoMsg): _118.InstantiateContractProposal;
                toAminoMsg(message: _118.InstantiateContractProposal): _118.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _118.InstantiateContractProposalProtoMsg): _118.InstantiateContractProposal;
                toProto(message: _118.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _118.InstantiateContractProposal): _118.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _118.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.MigrateContractProposal;
                fromPartial(object: Partial<_118.MigrateContractProposal>): _118.MigrateContractProposal;
                fromAmino(object: _118.MigrateContractProposalAmino): _118.MigrateContractProposal;
                toAmino(message: _118.MigrateContractProposal): _118.MigrateContractProposalAmino;
                fromAminoMsg(object: _118.MigrateContractProposalAminoMsg): _118.MigrateContractProposal;
                toAminoMsg(message: _118.MigrateContractProposal): _118.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _118.MigrateContractProposalProtoMsg): _118.MigrateContractProposal;
                toProto(message: _118.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _118.MigrateContractProposal): _118.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _118.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.SudoContractProposal;
                fromPartial(object: Partial<_118.SudoContractProposal>): _118.SudoContractProposal;
                fromAmino(object: _118.SudoContractProposalAmino): _118.SudoContractProposal;
                toAmino(message: _118.SudoContractProposal): _118.SudoContractProposalAmino;
                fromAminoMsg(object: _118.SudoContractProposalAminoMsg): _118.SudoContractProposal;
                toAminoMsg(message: _118.SudoContractProposal): _118.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _118.SudoContractProposalProtoMsg): _118.SudoContractProposal;
                toProto(message: _118.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _118.SudoContractProposal): _118.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _118.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ExecuteContractProposal;
                fromPartial(object: Partial<_118.ExecuteContractProposal>): _118.ExecuteContractProposal;
                fromAmino(object: _118.ExecuteContractProposalAmino): _118.ExecuteContractProposal;
                toAmino(message: _118.ExecuteContractProposal): _118.ExecuteContractProposalAmino;
                fromAminoMsg(object: _118.ExecuteContractProposalAminoMsg): _118.ExecuteContractProposal;
                toAminoMsg(message: _118.ExecuteContractProposal): _118.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _118.ExecuteContractProposalProtoMsg): _118.ExecuteContractProposal;
                toProto(message: _118.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _118.ExecuteContractProposal): _118.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _118.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.UpdateAdminProposal;
                fromPartial(object: Partial<_118.UpdateAdminProposal>): _118.UpdateAdminProposal;
                fromAmino(object: _118.UpdateAdminProposalAmino): _118.UpdateAdminProposal;
                toAmino(message: _118.UpdateAdminProposal): _118.UpdateAdminProposalAmino;
                fromAminoMsg(object: _118.UpdateAdminProposalAminoMsg): _118.UpdateAdminProposal;
                toAminoMsg(message: _118.UpdateAdminProposal): _118.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _118.UpdateAdminProposalProtoMsg): _118.UpdateAdminProposal;
                toProto(message: _118.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _118.UpdateAdminProposal): _118.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _118.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.ClearAdminProposal;
                fromPartial(object: Partial<_118.ClearAdminProposal>): _118.ClearAdminProposal;
                fromAmino(object: _118.ClearAdminProposalAmino): _118.ClearAdminProposal;
                toAmino(message: _118.ClearAdminProposal): _118.ClearAdminProposalAmino;
                fromAminoMsg(object: _118.ClearAdminProposalAminoMsg): _118.ClearAdminProposal;
                toAminoMsg(message: _118.ClearAdminProposal): _118.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _118.ClearAdminProposalProtoMsg): _118.ClearAdminProposal;
                toProto(message: _118.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _118.ClearAdminProposal): _118.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _118.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.PinCodesProposal;
                fromPartial(object: Partial<_118.PinCodesProposal>): _118.PinCodesProposal;
                fromAmino(object: _118.PinCodesProposalAmino): _118.PinCodesProposal;
                toAmino(message: _118.PinCodesProposal): _118.PinCodesProposalAmino;
                fromAminoMsg(object: _118.PinCodesProposalAminoMsg): _118.PinCodesProposal;
                toAminoMsg(message: _118.PinCodesProposal): _118.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _118.PinCodesProposalProtoMsg): _118.PinCodesProposal;
                toProto(message: _118.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _118.PinCodesProposal): _118.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _118.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.UnpinCodesProposal;
                fromPartial(object: Partial<_118.UnpinCodesProposal>): _118.UnpinCodesProposal;
                fromAmino(object: _118.UnpinCodesProposalAmino): _118.UnpinCodesProposal;
                toAmino(message: _118.UnpinCodesProposal): _118.UnpinCodesProposalAmino;
                fromAminoMsg(object: _118.UnpinCodesProposalAminoMsg): _118.UnpinCodesProposal;
                toAminoMsg(message: _118.UnpinCodesProposal): _118.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _118.UnpinCodesProposalProtoMsg): _118.UnpinCodesProposal;
                toProto(message: _118.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _118.UnpinCodesProposal): _118.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _118.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.AccessConfigUpdate;
                fromPartial(object: Partial<_118.AccessConfigUpdate>): _118.AccessConfigUpdate;
                fromAmino(object: _118.AccessConfigUpdateAmino): _118.AccessConfigUpdate;
                toAmino(message: _118.AccessConfigUpdate): _118.AccessConfigUpdateAmino;
                fromAminoMsg(object: _118.AccessConfigUpdateAminoMsg): _118.AccessConfigUpdate;
                toAminoMsg(message: _118.AccessConfigUpdate): _118.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _118.AccessConfigUpdateProtoMsg): _118.AccessConfigUpdate;
                toProto(message: _118.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _118.AccessConfigUpdate): _118.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _118.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_118.UpdateInstantiateConfigProposal>): _118.UpdateInstantiateConfigProposal;
                fromAmino(object: _118.UpdateInstantiateConfigProposalAmino): _118.UpdateInstantiateConfigProposal;
                toAmino(message: _118.UpdateInstantiateConfigProposal): _118.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _118.UpdateInstantiateConfigProposalAminoMsg): _118.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _118.UpdateInstantiateConfigProposal): _118.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _118.UpdateInstantiateConfigProposalProtoMsg): _118.UpdateInstantiateConfigProposal;
                toProto(message: _118.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _118.UpdateInstantiateConfigProposal): _118.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _118.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _118.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_118.StoreAndInstantiateContractProposal>): _118.StoreAndInstantiateContractProposal;
                fromAmino(object: _118.StoreAndInstantiateContractProposalAmino): _118.StoreAndInstantiateContractProposal;
                toAmino(message: _118.StoreAndInstantiateContractProposal): _118.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _118.StoreAndInstantiateContractProposalAminoMsg): _118.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _118.StoreAndInstantiateContractProposal): _118.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _118.StoreAndInstantiateContractProposalProtoMsg): _118.StoreAndInstantiateContractProposal;
                toProto(message: _118.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _118.StoreAndInstantiateContractProposal): _118.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _117.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgIBCSend;
                fromPartial(object: Partial<_117.MsgIBCSend>): _117.MsgIBCSend;
                fromAmino(object: _117.MsgIBCSendAmino): _117.MsgIBCSend;
                toAmino(message: _117.MsgIBCSend): _117.MsgIBCSendAmino;
                fromAminoMsg(object: _117.MsgIBCSendAminoMsg): _117.MsgIBCSend;
                toAminoMsg(message: _117.MsgIBCSend): _117.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _117.MsgIBCSendProtoMsg): _117.MsgIBCSend;
                toProto(message: _117.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _117.MsgIBCSend): _117.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _117.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _117.MsgIBCCloseChannel;
                fromPartial(object: Partial<_117.MsgIBCCloseChannel>): _117.MsgIBCCloseChannel;
                fromAmino(object: _117.MsgIBCCloseChannelAmino): _117.MsgIBCCloseChannel;
                toAmino(message: _117.MsgIBCCloseChannel): _117.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _117.MsgIBCCloseChannelAminoMsg): _117.MsgIBCCloseChannel;
                toAminoMsg(message: _117.MsgIBCCloseChannel): _117.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _117.MsgIBCCloseChannelProtoMsg): _117.MsgIBCCloseChannel;
                toProto(message: _117.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _117.MsgIBCCloseChannel): _117.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _116.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GenesisState;
                fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                toAminoMsg(message: _116.GenesisState): _116.GenesisStateAminoMsg;
                fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                toProto(message: _116.GenesisState): Uint8Array;
                toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _116.GenesisState_GenMsgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.GenesisState_GenMsgs;
                fromPartial(object: Partial<_116.GenesisState_GenMsgs>): _116.GenesisState_GenMsgs;
                fromAmino(object: _116.GenesisState_GenMsgsAmino): _116.GenesisState_GenMsgs;
                toAmino(message: _116.GenesisState_GenMsgs): _116.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _116.GenesisState_GenMsgsAminoMsg): _116.GenesisState_GenMsgs;
                toAminoMsg(message: _116.GenesisState_GenMsgs): _116.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _116.GenesisState_GenMsgsProtoMsg): _116.GenesisState_GenMsgs;
                toProto(message: _116.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _116.GenesisState_GenMsgs): _116.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _116.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Code;
                fromPartial(object: Partial<_116.Code>): _116.Code;
                fromAmino(object: _116.CodeAmino): _116.Code;
                toAmino(message: _116.Code): _116.CodeAmino;
                fromAminoMsg(object: _116.CodeAminoMsg): _116.Code;
                toAminoMsg(message: _116.Code): _116.CodeAminoMsg;
                fromProtoMsg(message: _116.CodeProtoMsg): _116.Code;
                toProto(message: _116.Code): Uint8Array;
                toProtoMsg(message: _116.Code): _116.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _116.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Contract;
                fromPartial(object: Partial<_116.Contract>): _116.Contract;
                fromAmino(object: _116.ContractAmino): _116.Contract;
                toAmino(message: _116.Contract): _116.ContractAmino;
                fromAminoMsg(object: _116.ContractAminoMsg): _116.Contract;
                toAminoMsg(message: _116.Contract): _116.ContractAminoMsg;
                fromProtoMsg(message: _116.ContractProtoMsg): _116.Contract;
                toProto(message: _116.Contract): Uint8Array;
                toProtoMsg(message: _116.Contract): _116.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _116.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _116.Sequence;
                fromPartial(object: Partial<_116.Sequence>): _116.Sequence;
                fromAmino(object: _116.SequenceAmino): _116.Sequence;
                toAmino(message: _116.Sequence): _116.SequenceAmino;
                fromAminoMsg(object: _116.SequenceAminoMsg): _116.Sequence;
                toAminoMsg(message: _116.Sequence): _116.SequenceAminoMsg;
                fromProtoMsg(message: _116.SequenceProtoMsg): _116.Sequence;
                toProto(message: _116.Sequence): Uint8Array;
                toProtoMsg(message: _116.Sequence): _116.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _115.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.ContractExecutionAuthorization;
                fromPartial(object: Partial<_115.ContractExecutionAuthorization>): _115.ContractExecutionAuthorization;
                fromAmino(object: _115.ContractExecutionAuthorizationAmino): _115.ContractExecutionAuthorization;
                toAmino(message: _115.ContractExecutionAuthorization): _115.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _115.ContractExecutionAuthorizationAminoMsg): _115.ContractExecutionAuthorization;
                toAminoMsg(message: _115.ContractExecutionAuthorization): _115.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _115.ContractExecutionAuthorizationProtoMsg): _115.ContractExecutionAuthorization;
                toProto(message: _115.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _115.ContractExecutionAuthorization): _115.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _115.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.ContractMigrationAuthorization;
                fromPartial(object: Partial<_115.ContractMigrationAuthorization>): _115.ContractMigrationAuthorization;
                fromAmino(object: _115.ContractMigrationAuthorizationAmino): _115.ContractMigrationAuthorization;
                toAmino(message: _115.ContractMigrationAuthorization): _115.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _115.ContractMigrationAuthorizationAminoMsg): _115.ContractMigrationAuthorization;
                toAminoMsg(message: _115.ContractMigrationAuthorization): _115.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _115.ContractMigrationAuthorizationProtoMsg): _115.ContractMigrationAuthorization;
                toProto(message: _115.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _115.ContractMigrationAuthorization): _115.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _115.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.ContractGrant;
                fromPartial(object: Partial<_115.ContractGrant>): _115.ContractGrant;
                fromAmino(object: _115.ContractGrantAmino): _115.ContractGrant;
                toAmino(message: _115.ContractGrant): _115.ContractGrantAmino;
                fromAminoMsg(object: _115.ContractGrantAminoMsg): _115.ContractGrant;
                toAminoMsg(message: _115.ContractGrant): _115.ContractGrantAminoMsg;
                fromProtoMsg(message: _115.ContractGrantProtoMsg): _115.ContractGrant;
                toProto(message: _115.ContractGrant): Uint8Array;
                toProtoMsg(message: _115.ContractGrant): _115.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _115.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MaxCallsLimit;
                fromPartial(object: Partial<_115.MaxCallsLimit>): _115.MaxCallsLimit;
                fromAmino(object: _115.MaxCallsLimitAmino): _115.MaxCallsLimit;
                toAmino(message: _115.MaxCallsLimit): _115.MaxCallsLimitAmino;
                fromAminoMsg(object: _115.MaxCallsLimitAminoMsg): _115.MaxCallsLimit;
                toAminoMsg(message: _115.MaxCallsLimit): _115.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _115.MaxCallsLimitProtoMsg): _115.MaxCallsLimit;
                toProto(message: _115.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _115.MaxCallsLimit): _115.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _115.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.MaxFundsLimit;
                fromPartial(object: Partial<_115.MaxFundsLimit>): _115.MaxFundsLimit;
                fromAmino(object: _115.MaxFundsLimitAmino): _115.MaxFundsLimit;
                toAmino(message: _115.MaxFundsLimit): _115.MaxFundsLimitAmino;
                fromAminoMsg(object: _115.MaxFundsLimitAminoMsg): _115.MaxFundsLimit;
                toAminoMsg(message: _115.MaxFundsLimit): _115.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _115.MaxFundsLimitProtoMsg): _115.MaxFundsLimit;
                toProto(message: _115.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _115.MaxFundsLimit): _115.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _115.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.CombinedLimit;
                fromPartial(object: Partial<_115.CombinedLimit>): _115.CombinedLimit;
                fromAmino(object: _115.CombinedLimitAmino): _115.CombinedLimit;
                toAmino(message: _115.CombinedLimit): _115.CombinedLimitAmino;
                fromAminoMsg(object: _115.CombinedLimitAminoMsg): _115.CombinedLimit;
                toAminoMsg(message: _115.CombinedLimit): _115.CombinedLimitAminoMsg;
                fromProtoMsg(message: _115.CombinedLimitProtoMsg): _115.CombinedLimit;
                toProto(message: _115.CombinedLimit): Uint8Array;
                toProtoMsg(message: _115.CombinedLimit): _115.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _115.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _115.AllowAllMessagesFilter;
                fromPartial(_: Partial<_115.AllowAllMessagesFilter>): _115.AllowAllMessagesFilter;
                fromAmino(_: _115.AllowAllMessagesFilterAmino): _115.AllowAllMessagesFilter;
                toAmino(_: _115.AllowAllMessagesFilter): _115.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _115.AllowAllMessagesFilterAminoMsg): _115.AllowAllMessagesFilter;
                toAminoMsg(message: _115.AllowAllMessagesFilter): _115.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _115.AllowAllMessagesFilterProtoMsg): _115.AllowAllMessagesFilter;
                toProto(message: _115.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _115.AllowAllMessagesFilter): _115.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _115.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_115.AcceptedMessageKeysFilter>): _115.AcceptedMessageKeysFilter;
                fromAmino(object: _115.AcceptedMessageKeysFilterAmino): _115.AcceptedMessageKeysFilter;
                toAmino(message: _115.AcceptedMessageKeysFilter): _115.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _115.AcceptedMessageKeysFilterAminoMsg): _115.AcceptedMessageKeysFilter;
                toAminoMsg(message: _115.AcceptedMessageKeysFilter): _115.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _115.AcceptedMessageKeysFilterProtoMsg): _115.AcceptedMessageKeysFilter;
                toProto(message: _115.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _115.AcceptedMessageKeysFilter): _115.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _115.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _115.AcceptedMessagesFilter;
                fromPartial(object: Partial<_115.AcceptedMessagesFilter>): _115.AcceptedMessagesFilter;
                fromAmino(object: _115.AcceptedMessagesFilterAmino): _115.AcceptedMessagesFilter;
                toAmino(message: _115.AcceptedMessagesFilter): _115.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _115.AcceptedMessagesFilterAminoMsg): _115.AcceptedMessagesFilter;
                toAminoMsg(message: _115.AcceptedMessagesFilter): _115.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _115.AcceptedMessagesFilterProtoMsg): _115.AcceptedMessagesFilter;
                toProto(message: _115.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _115.AcceptedMessagesFilter): _115.AcceptedMessagesFilterProtoMsg;
            };
            ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _115.MaxCallsLimit | _115.MaxFundsLimit | _115.CombinedLimit;
            ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _115.AllowAllMessagesFilter | _115.AcceptedMessageKeysFilter | _115.AcceptedMessagesFilter;
            ContractAuthzFilterX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractAuthzFilterX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
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
                    v1: _222.MsgClientImpl;
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
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
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
                        contractInfo(request: _119.QueryContractInfoRequest): Promise<_119.QueryContractInfoResponse>;
                        contractHistory(request: _119.QueryContractHistoryRequest): Promise<_119.QueryContractHistoryResponse>;
                        contractsByCode(request: _119.QueryContractsByCodeRequest): Promise<_119.QueryContractsByCodeResponse>;
                        allContractState(request: _119.QueryAllContractStateRequest): Promise<_119.QueryAllContractStateResponse>;
                        rawContractState(request: _119.QueryRawContractStateRequest): Promise<_119.QueryRawContractStateResponse>;
                        smartContractState(request: _119.QuerySmartContractStateRequest): Promise<_119.QuerySmartContractStateResponse>;
                        code(request: _119.QueryCodeRequest): Promise<_119.QueryCodeResponse>;
                        codes(request?: _119.QueryCodesRequest): Promise<_119.QueryCodesResponse>;
                        pinnedCodes(request?: _119.QueryPinnedCodesRequest): Promise<_119.QueryPinnedCodesResponse>;
                        params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        contractsByCreator(request: _119.QueryContractsByCreatorRequest): Promise<_119.QueryContractsByCreatorResponse>;
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
                    v1: _220.LCDQueryClient;
                };
            };
        }>;
    };
}
