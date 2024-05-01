import * as _75 from "./wasm/v1/authz";
import * as _76 from "./wasm/v1/genesis";
import * as _77 from "./wasm/v1/ibc";
import * as _78 from "./wasm/v1/proposal";
import * as _79 from "./wasm/v1/query";
import * as _80 from "./wasm/v1/tx";
import * as _81 from "./wasm/v1/types";
import * as _168 from "./wasm/v1/query.lcd";
import * as _169 from "./wasm/v1/query.rpc.Query";
import * as _170 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _169.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _79.QueryContractInfoRequest): Promise<_79.QueryContractInfoResponse>;
                contractHistory(request: _79.QueryContractHistoryRequest): Promise<_79.QueryContractHistoryResponse>;
                contractsByCode(request: _79.QueryContractsByCodeRequest): Promise<_79.QueryContractsByCodeResponse>;
                allContractState(request: _79.QueryAllContractStateRequest): Promise<_79.QueryAllContractStateResponse>;
                rawContractState(request: _79.QueryRawContractStateRequest): Promise<_79.QueryRawContractStateResponse>;
                smartContractState(request: _79.QuerySmartContractStateRequest): Promise<_79.QuerySmartContractStateResponse>;
                code(request: _79.QueryCodeRequest): Promise<_79.QueryCodeResponse>;
                codes(request?: _79.QueryCodesRequest): Promise<_79.QueryCodesResponse>;
                pinnedCodes(request?: _79.QueryPinnedCodesRequest): Promise<_79.QueryPinnedCodesResponse>;
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                contractsByCreator(request: _79.QueryContractsByCreatorRequest): Promise<_79.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _80.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _80.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _80.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _80.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _80.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _80.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _80.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _80.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _80.MsgStoreCode): {
                        typeUrl: string;
                        value: _80.MsgStoreCode;
                    };
                    instantiateContract(value: _80.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _80.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _80.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _80.MsgInstantiateContract2;
                    };
                    executeContract(value: _80.MsgExecuteContract): {
                        typeUrl: string;
                        value: _80.MsgExecuteContract;
                    };
                    migrateContract(value: _80.MsgMigrateContract): {
                        typeUrl: string;
                        value: _80.MsgMigrateContract;
                    };
                    updateAdmin(value: _80.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _80.MsgClearAdmin): {
                        typeUrl: string;
                        value: _80.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _80.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _80.MsgUpdateInstantiateConfig;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _80.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _80.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _80.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _80.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _80.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _80.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _80.MsgUpdateInstantiateConfig;
                    };
                };
                fromPartial: {
                    storeCode(value: _80.MsgStoreCode): {
                        typeUrl: string;
                        value: _80.MsgStoreCode;
                    };
                    instantiateContract(value: _80.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _80.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _80.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _80.MsgInstantiateContract2;
                    };
                    executeContract(value: _80.MsgExecuteContract): {
                        typeUrl: string;
                        value: _80.MsgExecuteContract;
                    };
                    migrateContract(value: _80.MsgMigrateContract): {
                        typeUrl: string;
                        value: _80.MsgMigrateContract;
                    };
                    updateAdmin(value: _80.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _80.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _80.MsgClearAdmin): {
                        typeUrl: string;
                        value: _80.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _80.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _80.MsgUpdateInstantiateConfig;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _80.MsgStoreCode) => _80.MsgStoreCodeAmino;
                    fromAmino: (object: _80.MsgStoreCodeAmino) => _80.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _80.MsgInstantiateContract) => _80.MsgInstantiateContractAmino;
                    fromAmino: (object: _80.MsgInstantiateContractAmino) => _80.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _80.MsgInstantiateContract2) => _80.MsgInstantiateContract2Amino;
                    fromAmino: (object: _80.MsgInstantiateContract2Amino) => _80.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _80.MsgExecuteContract) => _80.MsgExecuteContractAmino;
                    fromAmino: (object: _80.MsgExecuteContractAmino) => _80.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _80.MsgMigrateContract) => _80.MsgMigrateContractAmino;
                    fromAmino: (object: _80.MsgMigrateContractAmino) => _80.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateAdmin) => _80.MsgUpdateAdminAmino;
                    fromAmino: (object: _80.MsgUpdateAdminAmino) => _80.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _80.MsgClearAdmin) => _80.MsgClearAdminAmino;
                    fromAmino: (object: _80.MsgClearAdminAmino) => _80.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUpdateInstantiateConfig) => _80.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _80.MsgUpdateInstantiateConfigAmino) => _80.MsgUpdateInstantiateConfig;
                };
            };
            accessTypeFromJSON(object: any): _81.AccessType;
            accessTypeToJSON(object: _81.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _81.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _81.ContractCodeHistoryOperationType): string;
            AccessType: typeof _81.AccessType;
            AccessTypeSDKType: typeof _81.AccessType;
            AccessTypeAmino: typeof _81.AccessType;
            ContractCodeHistoryOperationType: typeof _81.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _81.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _81.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _81.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.AccessTypeParam;
                fromPartial(object: Partial<_81.AccessTypeParam>): _81.AccessTypeParam;
                fromAmino(object: _81.AccessTypeParamAmino): _81.AccessTypeParam;
                toAmino(message: _81.AccessTypeParam): _81.AccessTypeParamAmino;
                fromAminoMsg(object: _81.AccessTypeParamAminoMsg): _81.AccessTypeParam;
                toAminoMsg(message: _81.AccessTypeParam): _81.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _81.AccessTypeParamProtoMsg): _81.AccessTypeParam;
                toProto(message: _81.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _81.AccessTypeParam): _81.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _81.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.AccessConfig;
                fromPartial(object: Partial<_81.AccessConfig>): _81.AccessConfig;
                fromAmino(object: _81.AccessConfigAmino): _81.AccessConfig;
                toAmino(message: _81.AccessConfig): _81.AccessConfigAmino;
                fromAminoMsg(object: _81.AccessConfigAminoMsg): _81.AccessConfig;
                toAminoMsg(message: _81.AccessConfig): _81.AccessConfigAminoMsg;
                fromProtoMsg(message: _81.AccessConfigProtoMsg): _81.AccessConfig;
                toProto(message: _81.AccessConfig): Uint8Array;
                toProtoMsg(message: _81.AccessConfig): _81.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _81.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Params;
                fromPartial(object: Partial<_81.Params>): _81.Params;
                fromAmino(object: _81.ParamsAmino): _81.Params;
                toAmino(message: _81.Params): _81.ParamsAmino;
                fromAminoMsg(object: _81.ParamsAminoMsg): _81.Params;
                toAminoMsg(message: _81.Params): _81.ParamsAminoMsg;
                fromProtoMsg(message: _81.ParamsProtoMsg): _81.Params;
                toProto(message: _81.Params): Uint8Array;
                toProtoMsg(message: _81.Params): _81.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _81.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.CodeInfo;
                fromPartial(object: Partial<_81.CodeInfo>): _81.CodeInfo;
                fromAmino(object: _81.CodeInfoAmino): _81.CodeInfo;
                toAmino(message: _81.CodeInfo): _81.CodeInfoAmino;
                fromAminoMsg(object: _81.CodeInfoAminoMsg): _81.CodeInfo;
                toAminoMsg(message: _81.CodeInfo): _81.CodeInfoAminoMsg;
                fromProtoMsg(message: _81.CodeInfoProtoMsg): _81.CodeInfo;
                toProto(message: _81.CodeInfo): Uint8Array;
                toProtoMsg(message: _81.CodeInfo): _81.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _81.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ContractInfo;
                fromPartial(object: Partial<_81.ContractInfo>): _81.ContractInfo;
                fromAmino(object: _81.ContractInfoAmino): _81.ContractInfo;
                toAmino(message: _81.ContractInfo): _81.ContractInfoAmino;
                fromAminoMsg(object: _81.ContractInfoAminoMsg): _81.ContractInfo;
                toAminoMsg(message: _81.ContractInfo): _81.ContractInfoAminoMsg;
                fromProtoMsg(message: _81.ContractInfoProtoMsg): _81.ContractInfo;
                toProto(message: _81.ContractInfo): Uint8Array;
                toProtoMsg(message: _81.ContractInfo): _81.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _81.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_81.ContractCodeHistoryEntry>): _81.ContractCodeHistoryEntry;
                fromAmino(object: _81.ContractCodeHistoryEntryAmino): _81.ContractCodeHistoryEntry;
                toAmino(message: _81.ContractCodeHistoryEntry): _81.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _81.ContractCodeHistoryEntryAminoMsg): _81.ContractCodeHistoryEntry;
                toAminoMsg(message: _81.ContractCodeHistoryEntry): _81.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _81.ContractCodeHistoryEntryProtoMsg): _81.ContractCodeHistoryEntry;
                toProto(message: _81.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _81.ContractCodeHistoryEntry): _81.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _81.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.AbsoluteTxPosition;
                fromPartial(object: Partial<_81.AbsoluteTxPosition>): _81.AbsoluteTxPosition;
                fromAmino(object: _81.AbsoluteTxPositionAmino): _81.AbsoluteTxPosition;
                toAmino(message: _81.AbsoluteTxPosition): _81.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _81.AbsoluteTxPositionAminoMsg): _81.AbsoluteTxPosition;
                toAminoMsg(message: _81.AbsoluteTxPosition): _81.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _81.AbsoluteTxPositionProtoMsg): _81.AbsoluteTxPosition;
                toProto(message: _81.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _81.AbsoluteTxPosition): _81.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _81.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _81.Model;
                fromPartial(object: Partial<_81.Model>): _81.Model;
                fromAmino(object: _81.ModelAmino): _81.Model;
                toAmino(message: _81.Model): _81.ModelAmino;
                fromAminoMsg(object: _81.ModelAminoMsg): _81.Model;
                toAminoMsg(message: _81.Model): _81.ModelAminoMsg;
                fromProtoMsg(message: _81.ModelProtoMsg): _81.Model;
                toProto(message: _81.Model): Uint8Array;
                toProtoMsg(message: _81.Model): _81.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _80.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgStoreCode;
                fromPartial(object: Partial<_80.MsgStoreCode>): _80.MsgStoreCode;
                fromAmino(object: _80.MsgStoreCodeAmino): _80.MsgStoreCode;
                toAmino(message: _80.MsgStoreCode): _80.MsgStoreCodeAmino;
                fromAminoMsg(object: _80.MsgStoreCodeAminoMsg): _80.MsgStoreCode;
                toAminoMsg(message: _80.MsgStoreCode): _80.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _80.MsgStoreCodeProtoMsg): _80.MsgStoreCode;
                toProto(message: _80.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _80.MsgStoreCode): _80.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _80.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgStoreCodeResponse;
                fromPartial(object: Partial<_80.MsgStoreCodeResponse>): _80.MsgStoreCodeResponse;
                fromAmino(object: _80.MsgStoreCodeResponseAmino): _80.MsgStoreCodeResponse;
                toAmino(message: _80.MsgStoreCodeResponse): _80.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _80.MsgStoreCodeResponseAminoMsg): _80.MsgStoreCodeResponse;
                toAminoMsg(message: _80.MsgStoreCodeResponse): _80.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _80.MsgStoreCodeResponseProtoMsg): _80.MsgStoreCodeResponse;
                toProto(message: _80.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _80.MsgStoreCodeResponse): _80.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _80.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgInstantiateContract;
                fromPartial(object: Partial<_80.MsgInstantiateContract>): _80.MsgInstantiateContract;
                fromAmino(object: _80.MsgInstantiateContractAmino): _80.MsgInstantiateContract;
                toAmino(message: _80.MsgInstantiateContract): _80.MsgInstantiateContractAmino;
                fromAminoMsg(object: _80.MsgInstantiateContractAminoMsg): _80.MsgInstantiateContract;
                toAminoMsg(message: _80.MsgInstantiateContract): _80.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _80.MsgInstantiateContractProtoMsg): _80.MsgInstantiateContract;
                toProto(message: _80.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _80.MsgInstantiateContract): _80.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _80.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgInstantiateContract2;
                fromPartial(object: Partial<_80.MsgInstantiateContract2>): _80.MsgInstantiateContract2;
                fromAmino(object: _80.MsgInstantiateContract2Amino): _80.MsgInstantiateContract2;
                toAmino(message: _80.MsgInstantiateContract2): _80.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _80.MsgInstantiateContract2AminoMsg): _80.MsgInstantiateContract2;
                toAminoMsg(message: _80.MsgInstantiateContract2): _80.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _80.MsgInstantiateContract2ProtoMsg): _80.MsgInstantiateContract2;
                toProto(message: _80.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _80.MsgInstantiateContract2): _80.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _80.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_80.MsgInstantiateContractResponse>): _80.MsgInstantiateContractResponse;
                fromAmino(object: _80.MsgInstantiateContractResponseAmino): _80.MsgInstantiateContractResponse;
                toAmino(message: _80.MsgInstantiateContractResponse): _80.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _80.MsgInstantiateContractResponseAminoMsg): _80.MsgInstantiateContractResponse;
                toAminoMsg(message: _80.MsgInstantiateContractResponse): _80.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _80.MsgInstantiateContractResponseProtoMsg): _80.MsgInstantiateContractResponse;
                toProto(message: _80.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _80.MsgInstantiateContractResponse): _80.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _80.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_80.MsgInstantiateContract2Response>): _80.MsgInstantiateContract2Response;
                fromAmino(object: _80.MsgInstantiateContract2ResponseAmino): _80.MsgInstantiateContract2Response;
                toAmino(message: _80.MsgInstantiateContract2Response): _80.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _80.MsgInstantiateContract2ResponseAminoMsg): _80.MsgInstantiateContract2Response;
                toAminoMsg(message: _80.MsgInstantiateContract2Response): _80.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _80.MsgInstantiateContract2ResponseProtoMsg): _80.MsgInstantiateContract2Response;
                toProto(message: _80.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _80.MsgInstantiateContract2Response): _80.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _80.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgExecuteContract;
                fromPartial(object: Partial<_80.MsgExecuteContract>): _80.MsgExecuteContract;
                fromAmino(object: _80.MsgExecuteContractAmino): _80.MsgExecuteContract;
                toAmino(message: _80.MsgExecuteContract): _80.MsgExecuteContractAmino;
                fromAminoMsg(object: _80.MsgExecuteContractAminoMsg): _80.MsgExecuteContract;
                toAminoMsg(message: _80.MsgExecuteContract): _80.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _80.MsgExecuteContractProtoMsg): _80.MsgExecuteContract;
                toProto(message: _80.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _80.MsgExecuteContract): _80.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _80.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgExecuteContractResponse;
                fromPartial(object: Partial<_80.MsgExecuteContractResponse>): _80.MsgExecuteContractResponse;
                fromAmino(object: _80.MsgExecuteContractResponseAmino): _80.MsgExecuteContractResponse;
                toAmino(message: _80.MsgExecuteContractResponse): _80.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _80.MsgExecuteContractResponseAminoMsg): _80.MsgExecuteContractResponse;
                toAminoMsg(message: _80.MsgExecuteContractResponse): _80.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _80.MsgExecuteContractResponseProtoMsg): _80.MsgExecuteContractResponse;
                toProto(message: _80.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _80.MsgExecuteContractResponse): _80.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _80.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgMigrateContract;
                fromPartial(object: Partial<_80.MsgMigrateContract>): _80.MsgMigrateContract;
                fromAmino(object: _80.MsgMigrateContractAmino): _80.MsgMigrateContract;
                toAmino(message: _80.MsgMigrateContract): _80.MsgMigrateContractAmino;
                fromAminoMsg(object: _80.MsgMigrateContractAminoMsg): _80.MsgMigrateContract;
                toAminoMsg(message: _80.MsgMigrateContract): _80.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _80.MsgMigrateContractProtoMsg): _80.MsgMigrateContract;
                toProto(message: _80.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _80.MsgMigrateContract): _80.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _80.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgMigrateContractResponse;
                fromPartial(object: Partial<_80.MsgMigrateContractResponse>): _80.MsgMigrateContractResponse;
                fromAmino(object: _80.MsgMigrateContractResponseAmino): _80.MsgMigrateContractResponse;
                toAmino(message: _80.MsgMigrateContractResponse): _80.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _80.MsgMigrateContractResponseAminoMsg): _80.MsgMigrateContractResponse;
                toAminoMsg(message: _80.MsgMigrateContractResponse): _80.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _80.MsgMigrateContractResponseProtoMsg): _80.MsgMigrateContractResponse;
                toProto(message: _80.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _80.MsgMigrateContractResponse): _80.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _80.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateAdmin;
                fromPartial(object: Partial<_80.MsgUpdateAdmin>): _80.MsgUpdateAdmin;
                fromAmino(object: _80.MsgUpdateAdminAmino): _80.MsgUpdateAdmin;
                toAmino(message: _80.MsgUpdateAdmin): _80.MsgUpdateAdminAmino;
                fromAminoMsg(object: _80.MsgUpdateAdminAminoMsg): _80.MsgUpdateAdmin;
                toAminoMsg(message: _80.MsgUpdateAdmin): _80.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateAdminProtoMsg): _80.MsgUpdateAdmin;
                toProto(message: _80.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateAdmin): _80.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_80.MsgUpdateAdminResponse>): _80.MsgUpdateAdminResponse;
                fromAmino(_: _80.MsgUpdateAdminResponseAmino): _80.MsgUpdateAdminResponse;
                toAmino(_: _80.MsgUpdateAdminResponse): _80.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateAdminResponseAminoMsg): _80.MsgUpdateAdminResponse;
                toAminoMsg(message: _80.MsgUpdateAdminResponse): _80.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateAdminResponseProtoMsg): _80.MsgUpdateAdminResponse;
                toProto(message: _80.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateAdminResponse): _80.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _80.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgClearAdmin;
                fromPartial(object: Partial<_80.MsgClearAdmin>): _80.MsgClearAdmin;
                fromAmino(object: _80.MsgClearAdminAmino): _80.MsgClearAdmin;
                toAmino(message: _80.MsgClearAdmin): _80.MsgClearAdminAmino;
                fromAminoMsg(object: _80.MsgClearAdminAminoMsg): _80.MsgClearAdmin;
                toAminoMsg(message: _80.MsgClearAdmin): _80.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _80.MsgClearAdminProtoMsg): _80.MsgClearAdmin;
                toProto(message: _80.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _80.MsgClearAdmin): _80.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _80.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgClearAdminResponse;
                fromPartial(_: Partial<_80.MsgClearAdminResponse>): _80.MsgClearAdminResponse;
                fromAmino(_: _80.MsgClearAdminResponseAmino): _80.MsgClearAdminResponse;
                toAmino(_: _80.MsgClearAdminResponse): _80.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _80.MsgClearAdminResponseAminoMsg): _80.MsgClearAdminResponse;
                toAminoMsg(message: _80.MsgClearAdminResponse): _80.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _80.MsgClearAdminResponseProtoMsg): _80.MsgClearAdminResponse;
                toProto(message: _80.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _80.MsgClearAdminResponse): _80.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _80.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _80.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_80.MsgUpdateInstantiateConfig>): _80.MsgUpdateInstantiateConfig;
                fromAmino(object: _80.MsgUpdateInstantiateConfigAmino): _80.MsgUpdateInstantiateConfig;
                toAmino(message: _80.MsgUpdateInstantiateConfig): _80.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _80.MsgUpdateInstantiateConfigAminoMsg): _80.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _80.MsgUpdateInstantiateConfig): _80.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateInstantiateConfigProtoMsg): _80.MsgUpdateInstantiateConfig;
                toProto(message: _80.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateInstantiateConfig): _80.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _80.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _80.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_80.MsgUpdateInstantiateConfigResponse>): _80.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _80.MsgUpdateInstantiateConfigResponseAmino): _80.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _80.MsgUpdateInstantiateConfigResponse): _80.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _80.MsgUpdateInstantiateConfigResponseAminoMsg): _80.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _80.MsgUpdateInstantiateConfigResponse): _80.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUpdateInstantiateConfigResponseProtoMsg): _80.MsgUpdateInstantiateConfigResponse;
                toProto(message: _80.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUpdateInstantiateConfigResponse): _80.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _79.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractInfoRequest;
                fromPartial(object: Partial<_79.QueryContractInfoRequest>): _79.QueryContractInfoRequest;
                fromAmino(object: _79.QueryContractInfoRequestAmino): _79.QueryContractInfoRequest;
                toAmino(message: _79.QueryContractInfoRequest): _79.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _79.QueryContractInfoRequestAminoMsg): _79.QueryContractInfoRequest;
                toAminoMsg(message: _79.QueryContractInfoRequest): _79.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _79.QueryContractInfoRequestProtoMsg): _79.QueryContractInfoRequest;
                toProto(message: _79.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _79.QueryContractInfoRequest): _79.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _79.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractInfoResponse;
                fromPartial(object: Partial<_79.QueryContractInfoResponse>): _79.QueryContractInfoResponse;
                fromAmino(object: _79.QueryContractInfoResponseAmino): _79.QueryContractInfoResponse;
                toAmino(message: _79.QueryContractInfoResponse): _79.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _79.QueryContractInfoResponseAminoMsg): _79.QueryContractInfoResponse;
                toAminoMsg(message: _79.QueryContractInfoResponse): _79.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _79.QueryContractInfoResponseProtoMsg): _79.QueryContractInfoResponse;
                toProto(message: _79.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _79.QueryContractInfoResponse): _79.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _79.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractHistoryRequest;
                fromPartial(object: Partial<_79.QueryContractHistoryRequest>): _79.QueryContractHistoryRequest;
                fromAmino(object: _79.QueryContractHistoryRequestAmino): _79.QueryContractHistoryRequest;
                toAmino(message: _79.QueryContractHistoryRequest): _79.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _79.QueryContractHistoryRequestAminoMsg): _79.QueryContractHistoryRequest;
                toAminoMsg(message: _79.QueryContractHistoryRequest): _79.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _79.QueryContractHistoryRequestProtoMsg): _79.QueryContractHistoryRequest;
                toProto(message: _79.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _79.QueryContractHistoryRequest): _79.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _79.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractHistoryResponse;
                fromPartial(object: Partial<_79.QueryContractHistoryResponse>): _79.QueryContractHistoryResponse;
                fromAmino(object: _79.QueryContractHistoryResponseAmino): _79.QueryContractHistoryResponse;
                toAmino(message: _79.QueryContractHistoryResponse): _79.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _79.QueryContractHistoryResponseAminoMsg): _79.QueryContractHistoryResponse;
                toAminoMsg(message: _79.QueryContractHistoryResponse): _79.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _79.QueryContractHistoryResponseProtoMsg): _79.QueryContractHistoryResponse;
                toProto(message: _79.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _79.QueryContractHistoryResponse): _79.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _79.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_79.QueryContractsByCodeRequest>): _79.QueryContractsByCodeRequest;
                fromAmino(object: _79.QueryContractsByCodeRequestAmino): _79.QueryContractsByCodeRequest;
                toAmino(message: _79.QueryContractsByCodeRequest): _79.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _79.QueryContractsByCodeRequestAminoMsg): _79.QueryContractsByCodeRequest;
                toAminoMsg(message: _79.QueryContractsByCodeRequest): _79.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _79.QueryContractsByCodeRequestProtoMsg): _79.QueryContractsByCodeRequest;
                toProto(message: _79.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _79.QueryContractsByCodeRequest): _79.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _79.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_79.QueryContractsByCodeResponse>): _79.QueryContractsByCodeResponse;
                fromAmino(object: _79.QueryContractsByCodeResponseAmino): _79.QueryContractsByCodeResponse;
                toAmino(message: _79.QueryContractsByCodeResponse): _79.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _79.QueryContractsByCodeResponseAminoMsg): _79.QueryContractsByCodeResponse;
                toAminoMsg(message: _79.QueryContractsByCodeResponse): _79.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _79.QueryContractsByCodeResponseProtoMsg): _79.QueryContractsByCodeResponse;
                toProto(message: _79.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _79.QueryContractsByCodeResponse): _79.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _79.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryAllContractStateRequest;
                fromPartial(object: Partial<_79.QueryAllContractStateRequest>): _79.QueryAllContractStateRequest;
                fromAmino(object: _79.QueryAllContractStateRequestAmino): _79.QueryAllContractStateRequest;
                toAmino(message: _79.QueryAllContractStateRequest): _79.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _79.QueryAllContractStateRequestAminoMsg): _79.QueryAllContractStateRequest;
                toAminoMsg(message: _79.QueryAllContractStateRequest): _79.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _79.QueryAllContractStateRequestProtoMsg): _79.QueryAllContractStateRequest;
                toProto(message: _79.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _79.QueryAllContractStateRequest): _79.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _79.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryAllContractStateResponse;
                fromPartial(object: Partial<_79.QueryAllContractStateResponse>): _79.QueryAllContractStateResponse;
                fromAmino(object: _79.QueryAllContractStateResponseAmino): _79.QueryAllContractStateResponse;
                toAmino(message: _79.QueryAllContractStateResponse): _79.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _79.QueryAllContractStateResponseAminoMsg): _79.QueryAllContractStateResponse;
                toAminoMsg(message: _79.QueryAllContractStateResponse): _79.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _79.QueryAllContractStateResponseProtoMsg): _79.QueryAllContractStateResponse;
                toProto(message: _79.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _79.QueryAllContractStateResponse): _79.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _79.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryRawContractStateRequest;
                fromPartial(object: Partial<_79.QueryRawContractStateRequest>): _79.QueryRawContractStateRequest;
                fromAmino(object: _79.QueryRawContractStateRequestAmino): _79.QueryRawContractStateRequest;
                toAmino(message: _79.QueryRawContractStateRequest): _79.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _79.QueryRawContractStateRequestAminoMsg): _79.QueryRawContractStateRequest;
                toAminoMsg(message: _79.QueryRawContractStateRequest): _79.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _79.QueryRawContractStateRequestProtoMsg): _79.QueryRawContractStateRequest;
                toProto(message: _79.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _79.QueryRawContractStateRequest): _79.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _79.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryRawContractStateResponse;
                fromPartial(object: Partial<_79.QueryRawContractStateResponse>): _79.QueryRawContractStateResponse;
                fromAmino(object: _79.QueryRawContractStateResponseAmino): _79.QueryRawContractStateResponse;
                toAmino(message: _79.QueryRawContractStateResponse): _79.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _79.QueryRawContractStateResponseAminoMsg): _79.QueryRawContractStateResponse;
                toAminoMsg(message: _79.QueryRawContractStateResponse): _79.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _79.QueryRawContractStateResponseProtoMsg): _79.QueryRawContractStateResponse;
                toProto(message: _79.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _79.QueryRawContractStateResponse): _79.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _79.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_79.QuerySmartContractStateRequest>): _79.QuerySmartContractStateRequest;
                fromAmino(object: _79.QuerySmartContractStateRequestAmino): _79.QuerySmartContractStateRequest;
                toAmino(message: _79.QuerySmartContractStateRequest): _79.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _79.QuerySmartContractStateRequestAminoMsg): _79.QuerySmartContractStateRequest;
                toAminoMsg(message: _79.QuerySmartContractStateRequest): _79.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySmartContractStateRequestProtoMsg): _79.QuerySmartContractStateRequest;
                toProto(message: _79.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySmartContractStateRequest): _79.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _79.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_79.QuerySmartContractStateResponse>): _79.QuerySmartContractStateResponse;
                fromAmino(object: _79.QuerySmartContractStateResponseAmino): _79.QuerySmartContractStateResponse;
                toAmino(message: _79.QuerySmartContractStateResponse): _79.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _79.QuerySmartContractStateResponseAminoMsg): _79.QuerySmartContractStateResponse;
                toAminoMsg(message: _79.QuerySmartContractStateResponse): _79.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySmartContractStateResponseProtoMsg): _79.QuerySmartContractStateResponse;
                toProto(message: _79.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySmartContractStateResponse): _79.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _79.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryCodeRequest;
                fromPartial(object: Partial<_79.QueryCodeRequest>): _79.QueryCodeRequest;
                fromAmino(object: _79.QueryCodeRequestAmino): _79.QueryCodeRequest;
                toAmino(message: _79.QueryCodeRequest): _79.QueryCodeRequestAmino;
                fromAminoMsg(object: _79.QueryCodeRequestAminoMsg): _79.QueryCodeRequest;
                toAminoMsg(message: _79.QueryCodeRequest): _79.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _79.QueryCodeRequestProtoMsg): _79.QueryCodeRequest;
                toProto(message: _79.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _79.QueryCodeRequest): _79.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _79.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.CodeInfoResponse;
                fromPartial(object: Partial<_79.CodeInfoResponse>): _79.CodeInfoResponse;
                fromAmino(object: _79.CodeInfoResponseAmino): _79.CodeInfoResponse;
                toAmino(message: _79.CodeInfoResponse): _79.CodeInfoResponseAmino;
                fromAminoMsg(object: _79.CodeInfoResponseAminoMsg): _79.CodeInfoResponse;
                toAminoMsg(message: _79.CodeInfoResponse): _79.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _79.CodeInfoResponseProtoMsg): _79.CodeInfoResponse;
                toProto(message: _79.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _79.CodeInfoResponse): _79.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _79.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryCodeResponse;
                fromPartial(object: Partial<_79.QueryCodeResponse>): _79.QueryCodeResponse;
                fromAmino(object: _79.QueryCodeResponseAmino): _79.QueryCodeResponse;
                toAmino(message: _79.QueryCodeResponse): _79.QueryCodeResponseAmino;
                fromAminoMsg(object: _79.QueryCodeResponseAminoMsg): _79.QueryCodeResponse;
                toAminoMsg(message: _79.QueryCodeResponse): _79.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _79.QueryCodeResponseProtoMsg): _79.QueryCodeResponse;
                toProto(message: _79.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _79.QueryCodeResponse): _79.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _79.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryCodesRequest;
                fromPartial(object: Partial<_79.QueryCodesRequest>): _79.QueryCodesRequest;
                fromAmino(object: _79.QueryCodesRequestAmino): _79.QueryCodesRequest;
                toAmino(message: _79.QueryCodesRequest): _79.QueryCodesRequestAmino;
                fromAminoMsg(object: _79.QueryCodesRequestAminoMsg): _79.QueryCodesRequest;
                toAminoMsg(message: _79.QueryCodesRequest): _79.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryCodesRequestProtoMsg): _79.QueryCodesRequest;
                toProto(message: _79.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryCodesRequest): _79.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _79.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryCodesResponse;
                fromPartial(object: Partial<_79.QueryCodesResponse>): _79.QueryCodesResponse;
                fromAmino(object: _79.QueryCodesResponseAmino): _79.QueryCodesResponse;
                toAmino(message: _79.QueryCodesResponse): _79.QueryCodesResponseAmino;
                fromAminoMsg(object: _79.QueryCodesResponseAminoMsg): _79.QueryCodesResponse;
                toAminoMsg(message: _79.QueryCodesResponse): _79.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryCodesResponseProtoMsg): _79.QueryCodesResponse;
                toProto(message: _79.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryCodesResponse): _79.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _79.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_79.QueryPinnedCodesRequest>): _79.QueryPinnedCodesRequest;
                fromAmino(object: _79.QueryPinnedCodesRequestAmino): _79.QueryPinnedCodesRequest;
                toAmino(message: _79.QueryPinnedCodesRequest): _79.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _79.QueryPinnedCodesRequestAminoMsg): _79.QueryPinnedCodesRequest;
                toAminoMsg(message: _79.QueryPinnedCodesRequest): _79.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryPinnedCodesRequestProtoMsg): _79.QueryPinnedCodesRequest;
                toProto(message: _79.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryPinnedCodesRequest): _79.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _79.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_79.QueryPinnedCodesResponse>): _79.QueryPinnedCodesResponse;
                fromAmino(object: _79.QueryPinnedCodesResponseAmino): _79.QueryPinnedCodesResponse;
                toAmino(message: _79.QueryPinnedCodesResponse): _79.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _79.QueryPinnedCodesResponseAminoMsg): _79.QueryPinnedCodesResponse;
                toAminoMsg(message: _79.QueryPinnedCodesResponse): _79.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryPinnedCodesResponseProtoMsg): _79.QueryPinnedCodesResponse;
                toProto(message: _79.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryPinnedCodesResponse): _79.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _79.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _79.QueryParamsRequest;
                fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
                fromAmino(_: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(_: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                toAminoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                toProto(message: _79.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _79.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryParamsResponse;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
                fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                toAminoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                toProto(message: _79.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _79.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_79.QueryContractsByCreatorRequest>): _79.QueryContractsByCreatorRequest;
                fromAmino(object: _79.QueryContractsByCreatorRequestAmino): _79.QueryContractsByCreatorRequest;
                toAmino(message: _79.QueryContractsByCreatorRequest): _79.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _79.QueryContractsByCreatorRequestAminoMsg): _79.QueryContractsByCreatorRequest;
                toAminoMsg(message: _79.QueryContractsByCreatorRequest): _79.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _79.QueryContractsByCreatorRequestProtoMsg): _79.QueryContractsByCreatorRequest;
                toProto(message: _79.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _79.QueryContractsByCreatorRequest): _79.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _79.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _79.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_79.QueryContractsByCreatorResponse>): _79.QueryContractsByCreatorResponse;
                fromAmino(object: _79.QueryContractsByCreatorResponseAmino): _79.QueryContractsByCreatorResponse;
                toAmino(message: _79.QueryContractsByCreatorResponse): _79.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _79.QueryContractsByCreatorResponseAminoMsg): _79.QueryContractsByCreatorResponse;
                toAminoMsg(message: _79.QueryContractsByCreatorResponse): _79.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _79.QueryContractsByCreatorResponseProtoMsg): _79.QueryContractsByCreatorResponse;
                toProto(message: _79.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _79.QueryContractsByCreatorResponse): _79.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _78.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.StoreCodeProposal;
                fromPartial(object: Partial<_78.StoreCodeProposal>): _78.StoreCodeProposal;
                fromAmino(object: _78.StoreCodeProposalAmino): _78.StoreCodeProposal;
                toAmino(message: _78.StoreCodeProposal): _78.StoreCodeProposalAmino;
                fromAminoMsg(object: _78.StoreCodeProposalAminoMsg): _78.StoreCodeProposal;
                toAminoMsg(message: _78.StoreCodeProposal): _78.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _78.StoreCodeProposalProtoMsg): _78.StoreCodeProposal;
                toProto(message: _78.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _78.StoreCodeProposal): _78.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _78.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.InstantiateContractProposal;
                fromPartial(object: Partial<_78.InstantiateContractProposal>): _78.InstantiateContractProposal;
                fromAmino(object: _78.InstantiateContractProposalAmino): _78.InstantiateContractProposal;
                toAmino(message: _78.InstantiateContractProposal): _78.InstantiateContractProposalAmino;
                fromAminoMsg(object: _78.InstantiateContractProposalAminoMsg): _78.InstantiateContractProposal;
                toAminoMsg(message: _78.InstantiateContractProposal): _78.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _78.InstantiateContractProposalProtoMsg): _78.InstantiateContractProposal;
                toProto(message: _78.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _78.InstantiateContractProposal): _78.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _78.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.InstantiateContract2Proposal;
                fromPartial(object: Partial<_78.InstantiateContract2Proposal>): _78.InstantiateContract2Proposal;
                fromAmino(object: _78.InstantiateContract2ProposalAmino): _78.InstantiateContract2Proposal;
                toAmino(message: _78.InstantiateContract2Proposal): _78.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _78.InstantiateContract2ProposalAminoMsg): _78.InstantiateContract2Proposal;
                toAminoMsg(message: _78.InstantiateContract2Proposal): _78.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _78.InstantiateContract2ProposalProtoMsg): _78.InstantiateContract2Proposal;
                toProto(message: _78.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _78.InstantiateContract2Proposal): _78.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _78.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.MigrateContractProposal;
                fromPartial(object: Partial<_78.MigrateContractProposal>): _78.MigrateContractProposal;
                fromAmino(object: _78.MigrateContractProposalAmino): _78.MigrateContractProposal;
                toAmino(message: _78.MigrateContractProposal): _78.MigrateContractProposalAmino;
                fromAminoMsg(object: _78.MigrateContractProposalAminoMsg): _78.MigrateContractProposal;
                toAminoMsg(message: _78.MigrateContractProposal): _78.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _78.MigrateContractProposalProtoMsg): _78.MigrateContractProposal;
                toProto(message: _78.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _78.MigrateContractProposal): _78.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _78.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.SudoContractProposal;
                fromPartial(object: Partial<_78.SudoContractProposal>): _78.SudoContractProposal;
                fromAmino(object: _78.SudoContractProposalAmino): _78.SudoContractProposal;
                toAmino(message: _78.SudoContractProposal): _78.SudoContractProposalAmino;
                fromAminoMsg(object: _78.SudoContractProposalAminoMsg): _78.SudoContractProposal;
                toAminoMsg(message: _78.SudoContractProposal): _78.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _78.SudoContractProposalProtoMsg): _78.SudoContractProposal;
                toProto(message: _78.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _78.SudoContractProposal): _78.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _78.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ExecuteContractProposal;
                fromPartial(object: Partial<_78.ExecuteContractProposal>): _78.ExecuteContractProposal;
                fromAmino(object: _78.ExecuteContractProposalAmino): _78.ExecuteContractProposal;
                toAmino(message: _78.ExecuteContractProposal): _78.ExecuteContractProposalAmino;
                fromAminoMsg(object: _78.ExecuteContractProposalAminoMsg): _78.ExecuteContractProposal;
                toAminoMsg(message: _78.ExecuteContractProposal): _78.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _78.ExecuteContractProposalProtoMsg): _78.ExecuteContractProposal;
                toProto(message: _78.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _78.ExecuteContractProposal): _78.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _78.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.UpdateAdminProposal;
                fromPartial(object: Partial<_78.UpdateAdminProposal>): _78.UpdateAdminProposal;
                fromAmino(object: _78.UpdateAdminProposalAmino): _78.UpdateAdminProposal;
                toAmino(message: _78.UpdateAdminProposal): _78.UpdateAdminProposalAmino;
                fromAminoMsg(object: _78.UpdateAdminProposalAminoMsg): _78.UpdateAdminProposal;
                toAminoMsg(message: _78.UpdateAdminProposal): _78.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _78.UpdateAdminProposalProtoMsg): _78.UpdateAdminProposal;
                toProto(message: _78.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _78.UpdateAdminProposal): _78.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _78.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.ClearAdminProposal;
                fromPartial(object: Partial<_78.ClearAdminProposal>): _78.ClearAdminProposal;
                fromAmino(object: _78.ClearAdminProposalAmino): _78.ClearAdminProposal;
                toAmino(message: _78.ClearAdminProposal): _78.ClearAdminProposalAmino;
                fromAminoMsg(object: _78.ClearAdminProposalAminoMsg): _78.ClearAdminProposal;
                toAminoMsg(message: _78.ClearAdminProposal): _78.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _78.ClearAdminProposalProtoMsg): _78.ClearAdminProposal;
                toProto(message: _78.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _78.ClearAdminProposal): _78.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _78.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.PinCodesProposal;
                fromPartial(object: Partial<_78.PinCodesProposal>): _78.PinCodesProposal;
                fromAmino(object: _78.PinCodesProposalAmino): _78.PinCodesProposal;
                toAmino(message: _78.PinCodesProposal): _78.PinCodesProposalAmino;
                fromAminoMsg(object: _78.PinCodesProposalAminoMsg): _78.PinCodesProposal;
                toAminoMsg(message: _78.PinCodesProposal): _78.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _78.PinCodesProposalProtoMsg): _78.PinCodesProposal;
                toProto(message: _78.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _78.PinCodesProposal): _78.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _78.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.UnpinCodesProposal;
                fromPartial(object: Partial<_78.UnpinCodesProposal>): _78.UnpinCodesProposal;
                fromAmino(object: _78.UnpinCodesProposalAmino): _78.UnpinCodesProposal;
                toAmino(message: _78.UnpinCodesProposal): _78.UnpinCodesProposalAmino;
                fromAminoMsg(object: _78.UnpinCodesProposalAminoMsg): _78.UnpinCodesProposal;
                toAminoMsg(message: _78.UnpinCodesProposal): _78.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _78.UnpinCodesProposalProtoMsg): _78.UnpinCodesProposal;
                toProto(message: _78.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _78.UnpinCodesProposal): _78.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _78.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.AccessConfigUpdate;
                fromPartial(object: Partial<_78.AccessConfigUpdate>): _78.AccessConfigUpdate;
                fromAmino(object: _78.AccessConfigUpdateAmino): _78.AccessConfigUpdate;
                toAmino(message: _78.AccessConfigUpdate): _78.AccessConfigUpdateAmino;
                fromAminoMsg(object: _78.AccessConfigUpdateAminoMsg): _78.AccessConfigUpdate;
                toAminoMsg(message: _78.AccessConfigUpdate): _78.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _78.AccessConfigUpdateProtoMsg): _78.AccessConfigUpdate;
                toProto(message: _78.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _78.AccessConfigUpdate): _78.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _78.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_78.UpdateInstantiateConfigProposal>): _78.UpdateInstantiateConfigProposal;
                fromAmino(object: _78.UpdateInstantiateConfigProposalAmino): _78.UpdateInstantiateConfigProposal;
                toAmino(message: _78.UpdateInstantiateConfigProposal): _78.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _78.UpdateInstantiateConfigProposalAminoMsg): _78.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _78.UpdateInstantiateConfigProposal): _78.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _78.UpdateInstantiateConfigProposalProtoMsg): _78.UpdateInstantiateConfigProposal;
                toProto(message: _78.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _78.UpdateInstantiateConfigProposal): _78.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _78.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _78.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_78.StoreAndInstantiateContractProposal>): _78.StoreAndInstantiateContractProposal;
                fromAmino(object: _78.StoreAndInstantiateContractProposalAmino): _78.StoreAndInstantiateContractProposal;
                toAmino(message: _78.StoreAndInstantiateContractProposal): _78.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _78.StoreAndInstantiateContractProposalAminoMsg): _78.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _78.StoreAndInstantiateContractProposal): _78.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _78.StoreAndInstantiateContractProposalProtoMsg): _78.StoreAndInstantiateContractProposal;
                toProto(message: _78.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _78.StoreAndInstantiateContractProposal): _78.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _77.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgIBCSend;
                fromPartial(object: Partial<_77.MsgIBCSend>): _77.MsgIBCSend;
                fromAmino(object: _77.MsgIBCSendAmino): _77.MsgIBCSend;
                toAmino(message: _77.MsgIBCSend): _77.MsgIBCSendAmino;
                fromAminoMsg(object: _77.MsgIBCSendAminoMsg): _77.MsgIBCSend;
                toAminoMsg(message: _77.MsgIBCSend): _77.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _77.MsgIBCSendProtoMsg): _77.MsgIBCSend;
                toProto(message: _77.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _77.MsgIBCSend): _77.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _77.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgIBCSendResponse;
                fromPartial(object: Partial<_77.MsgIBCSendResponse>): _77.MsgIBCSendResponse;
                fromAmino(object: _77.MsgIBCSendResponseAmino): _77.MsgIBCSendResponse;
                toAmino(message: _77.MsgIBCSendResponse): _77.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _77.MsgIBCSendResponseAminoMsg): _77.MsgIBCSendResponse;
                toAminoMsg(message: _77.MsgIBCSendResponse): _77.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _77.MsgIBCSendResponseProtoMsg): _77.MsgIBCSendResponse;
                toProto(message: _77.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _77.MsgIBCSendResponse): _77.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _77.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _77.MsgIBCCloseChannel;
                fromPartial(object: Partial<_77.MsgIBCCloseChannel>): _77.MsgIBCCloseChannel;
                fromAmino(object: _77.MsgIBCCloseChannelAmino): _77.MsgIBCCloseChannel;
                toAmino(message: _77.MsgIBCCloseChannel): _77.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _77.MsgIBCCloseChannelAminoMsg): _77.MsgIBCCloseChannel;
                toAminoMsg(message: _77.MsgIBCCloseChannel): _77.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _77.MsgIBCCloseChannelProtoMsg): _77.MsgIBCCloseChannel;
                toProto(message: _77.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _77.MsgIBCCloseChannel): _77.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _76.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.GenesisState;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                toAminoMsg(message: _76.GenesisState): _76.GenesisStateAminoMsg;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _76.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Code;
                fromPartial(object: Partial<_76.Code>): _76.Code;
                fromAmino(object: _76.CodeAmino): _76.Code;
                toAmino(message: _76.Code): _76.CodeAmino;
                fromAminoMsg(object: _76.CodeAminoMsg): _76.Code;
                toAminoMsg(message: _76.Code): _76.CodeAminoMsg;
                fromProtoMsg(message: _76.CodeProtoMsg): _76.Code;
                toProto(message: _76.Code): Uint8Array;
                toProtoMsg(message: _76.Code): _76.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _76.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Contract;
                fromPartial(object: Partial<_76.Contract>): _76.Contract;
                fromAmino(object: _76.ContractAmino): _76.Contract;
                toAmino(message: _76.Contract): _76.ContractAmino;
                fromAminoMsg(object: _76.ContractAminoMsg): _76.Contract;
                toAminoMsg(message: _76.Contract): _76.ContractAminoMsg;
                fromProtoMsg(message: _76.ContractProtoMsg): _76.Contract;
                toProto(message: _76.Contract): Uint8Array;
                toProtoMsg(message: _76.Contract): _76.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _76.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _76.Sequence;
                fromPartial(object: Partial<_76.Sequence>): _76.Sequence;
                fromAmino(object: _76.SequenceAmino): _76.Sequence;
                toAmino(message: _76.Sequence): _76.SequenceAmino;
                fromAminoMsg(object: _76.SequenceAminoMsg): _76.Sequence;
                toAminoMsg(message: _76.Sequence): _76.SequenceAminoMsg;
                fromProtoMsg(message: _76.SequenceProtoMsg): _76.Sequence;
                toProto(message: _76.Sequence): Uint8Array;
                toProtoMsg(message: _76.Sequence): _76.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _75.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ContractExecutionAuthorization;
                fromPartial(object: Partial<_75.ContractExecutionAuthorization>): _75.ContractExecutionAuthorization;
                fromAmino(object: _75.ContractExecutionAuthorizationAmino): _75.ContractExecutionAuthorization;
                toAmino(message: _75.ContractExecutionAuthorization): _75.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _75.ContractExecutionAuthorizationAminoMsg): _75.ContractExecutionAuthorization;
                toAminoMsg(message: _75.ContractExecutionAuthorization): _75.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _75.ContractExecutionAuthorizationProtoMsg): _75.ContractExecutionAuthorization;
                toProto(message: _75.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _75.ContractExecutionAuthorization): _75.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _75.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ContractMigrationAuthorization;
                fromPartial(object: Partial<_75.ContractMigrationAuthorization>): _75.ContractMigrationAuthorization;
                fromAmino(object: _75.ContractMigrationAuthorizationAmino): _75.ContractMigrationAuthorization;
                toAmino(message: _75.ContractMigrationAuthorization): _75.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _75.ContractMigrationAuthorizationAminoMsg): _75.ContractMigrationAuthorization;
                toAminoMsg(message: _75.ContractMigrationAuthorization): _75.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _75.ContractMigrationAuthorizationProtoMsg): _75.ContractMigrationAuthorization;
                toProto(message: _75.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _75.ContractMigrationAuthorization): _75.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _75.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.ContractGrant;
                fromPartial(object: Partial<_75.ContractGrant>): _75.ContractGrant;
                fromAmino(object: _75.ContractGrantAmino): _75.ContractGrant;
                toAmino(message: _75.ContractGrant): _75.ContractGrantAmino;
                fromAminoMsg(object: _75.ContractGrantAminoMsg): _75.ContractGrant;
                toAminoMsg(message: _75.ContractGrant): _75.ContractGrantAminoMsg;
                fromProtoMsg(message: _75.ContractGrantProtoMsg): _75.ContractGrant;
                toProto(message: _75.ContractGrant): Uint8Array;
                toProtoMsg(message: _75.ContractGrant): _75.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _75.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MaxCallsLimit;
                fromPartial(object: Partial<_75.MaxCallsLimit>): _75.MaxCallsLimit;
                fromAmino(object: _75.MaxCallsLimitAmino): _75.MaxCallsLimit;
                toAmino(message: _75.MaxCallsLimit): _75.MaxCallsLimitAmino;
                fromAminoMsg(object: _75.MaxCallsLimitAminoMsg): _75.MaxCallsLimit;
                toAminoMsg(message: _75.MaxCallsLimit): _75.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _75.MaxCallsLimitProtoMsg): _75.MaxCallsLimit;
                toProto(message: _75.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _75.MaxCallsLimit): _75.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _75.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.MaxFundsLimit;
                fromPartial(object: Partial<_75.MaxFundsLimit>): _75.MaxFundsLimit;
                fromAmino(object: _75.MaxFundsLimitAmino): _75.MaxFundsLimit;
                toAmino(message: _75.MaxFundsLimit): _75.MaxFundsLimitAmino;
                fromAminoMsg(object: _75.MaxFundsLimitAminoMsg): _75.MaxFundsLimit;
                toAminoMsg(message: _75.MaxFundsLimit): _75.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _75.MaxFundsLimitProtoMsg): _75.MaxFundsLimit;
                toProto(message: _75.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _75.MaxFundsLimit): _75.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _75.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.CombinedLimit;
                fromPartial(object: Partial<_75.CombinedLimit>): _75.CombinedLimit;
                fromAmino(object: _75.CombinedLimitAmino): _75.CombinedLimit;
                toAmino(message: _75.CombinedLimit): _75.CombinedLimitAmino;
                fromAminoMsg(object: _75.CombinedLimitAminoMsg): _75.CombinedLimit;
                toAminoMsg(message: _75.CombinedLimit): _75.CombinedLimitAminoMsg;
                fromProtoMsg(message: _75.CombinedLimitProtoMsg): _75.CombinedLimit;
                toProto(message: _75.CombinedLimit): Uint8Array;
                toProtoMsg(message: _75.CombinedLimit): _75.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _75.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _75.AllowAllMessagesFilter;
                fromPartial(_: Partial<_75.AllowAllMessagesFilter>): _75.AllowAllMessagesFilter;
                fromAmino(_: _75.AllowAllMessagesFilterAmino): _75.AllowAllMessagesFilter;
                toAmino(_: _75.AllowAllMessagesFilter): _75.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _75.AllowAllMessagesFilterAminoMsg): _75.AllowAllMessagesFilter;
                toAminoMsg(message: _75.AllowAllMessagesFilter): _75.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _75.AllowAllMessagesFilterProtoMsg): _75.AllowAllMessagesFilter;
                toProto(message: _75.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _75.AllowAllMessagesFilter): _75.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _75.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_75.AcceptedMessageKeysFilter>): _75.AcceptedMessageKeysFilter;
                fromAmino(object: _75.AcceptedMessageKeysFilterAmino): _75.AcceptedMessageKeysFilter;
                toAmino(message: _75.AcceptedMessageKeysFilter): _75.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _75.AcceptedMessageKeysFilterAminoMsg): _75.AcceptedMessageKeysFilter;
                toAminoMsg(message: _75.AcceptedMessageKeysFilter): _75.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _75.AcceptedMessageKeysFilterProtoMsg): _75.AcceptedMessageKeysFilter;
                toProto(message: _75.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _75.AcceptedMessageKeysFilter): _75.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _75.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _75.AcceptedMessagesFilter;
                fromPartial(object: Partial<_75.AcceptedMessagesFilter>): _75.AcceptedMessagesFilter;
                fromAmino(object: _75.AcceptedMessagesFilterAmino): _75.AcceptedMessagesFilter;
                toAmino(message: _75.AcceptedMessagesFilter): _75.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _75.AcceptedMessagesFilterAminoMsg): _75.AcceptedMessagesFilter;
                toAminoMsg(message: _75.AcceptedMessagesFilter): _75.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _75.AcceptedMessagesFilterProtoMsg): _75.AcceptedMessagesFilter;
                toProto(message: _75.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _75.AcceptedMessagesFilter): _75.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _75.MaxCallsLimit | _75.MaxFundsLimit | _75.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _75.AllowAllMessagesFilter | _75.AcceptedMessageKeysFilter | _75.AcceptedMessagesFilter;
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
                    v1: _170.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
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
                        contractInfo(request: _79.QueryContractInfoRequest): Promise<_79.QueryContractInfoResponse>;
                        contractHistory(request: _79.QueryContractHistoryRequest): Promise<_79.QueryContractHistoryResponse>;
                        contractsByCode(request: _79.QueryContractsByCodeRequest): Promise<_79.QueryContractsByCodeResponse>;
                        allContractState(request: _79.QueryAllContractStateRequest): Promise<_79.QueryAllContractStateResponse>;
                        rawContractState(request: _79.QueryRawContractStateRequest): Promise<_79.QueryRawContractStateResponse>;
                        smartContractState(request: _79.QuerySmartContractStateRequest): Promise<_79.QuerySmartContractStateResponse>;
                        code(request: _79.QueryCodeRequest): Promise<_79.QueryCodeResponse>;
                        codes(request?: _79.QueryCodesRequest): Promise<_79.QueryCodesResponse>;
                        pinnedCodes(request?: _79.QueryPinnedCodesRequest): Promise<_79.QueryPinnedCodesResponse>;
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        contractsByCreator(request: _79.QueryContractsByCreatorRequest): Promise<_79.QueryContractsByCreatorResponse>;
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
                    v1: _168.LCDQueryClient;
                };
            };
        }>;
    };
}
