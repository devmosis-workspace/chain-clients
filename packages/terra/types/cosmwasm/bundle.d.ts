import * as _127 from "./wasm/v1/authz";
import * as _128 from "./wasm/v1/genesis";
import * as _129 from "./wasm/v1/ibc";
import * as _130 from "./wasm/v1/proposal";
import * as _131 from "./wasm/v1/query";
import * as _132 from "./wasm/v1/tx";
import * as _133 from "./wasm/v1/types";
import * as _241 from "./wasm/v1/query.lcd";
import * as _242 from "./wasm/v1/query.rpc.Query";
import * as _243 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _242.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                contractInfo(request: _131.QueryContractInfoRequest): Promise<_131.QueryContractInfoResponse>;
                contractHistory(request: _131.QueryContractHistoryRequest): Promise<_131.QueryContractHistoryResponse>;
                contractsByCode(request: _131.QueryContractsByCodeRequest): Promise<_131.QueryContractsByCodeResponse>;
                allContractState(request: _131.QueryAllContractStateRequest): Promise<_131.QueryAllContractStateResponse>;
                rawContractState(request: _131.QueryRawContractStateRequest): Promise<_131.QueryRawContractStateResponse>;
                smartContractState(request: _131.QuerySmartContractStateRequest): Promise<_131.QuerySmartContractStateResponse>;
                code(request: _131.QueryCodeRequest): Promise<_131.QueryCodeResponse>;
                codes(request?: _131.QueryCodesRequest): Promise<_131.QueryCodesResponse>;
                pinnedCodes(request?: _131.QueryPinnedCodesRequest): Promise<_131.QueryPinnedCodesResponse>;
                params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                contractsByCreator(request: _131.QueryContractsByCreatorRequest): Promise<_131.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _132.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _132.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _132.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _132.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _132.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _132.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _132.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _132.MsgStoreCode): {
                        typeUrl: string;
                        value: _132.MsgStoreCode;
                    };
                    instantiateContract(value: _132.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _132.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _132.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _132.MsgInstantiateContract2;
                    };
                    executeContract(value: _132.MsgExecuteContract): {
                        typeUrl: string;
                        value: _132.MsgExecuteContract;
                    };
                    migrateContract(value: _132.MsgMigrateContract): {
                        typeUrl: string;
                        value: _132.MsgMigrateContract;
                    };
                    updateAdmin(value: _132.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _132.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _132.MsgClearAdmin): {
                        typeUrl: string;
                        value: _132.MsgClearAdmin;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _132.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _132.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _132.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _132.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _132.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _132.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _132.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _132.MsgStoreCode): {
                        typeUrl: string;
                        value: _132.MsgStoreCode;
                    };
                    instantiateContract(value: _132.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _132.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _132.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _132.MsgInstantiateContract2;
                    };
                    executeContract(value: _132.MsgExecuteContract): {
                        typeUrl: string;
                        value: _132.MsgExecuteContract;
                    };
                    migrateContract(value: _132.MsgMigrateContract): {
                        typeUrl: string;
                        value: _132.MsgMigrateContract;
                    };
                    updateAdmin(value: _132.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _132.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _132.MsgClearAdmin): {
                        typeUrl: string;
                        value: _132.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _132.MsgStoreCode) => _132.MsgStoreCodeAmino;
                    fromAmino: (object: _132.MsgStoreCodeAmino) => _132.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _132.MsgInstantiateContract) => _132.MsgInstantiateContractAmino;
                    fromAmino: (object: _132.MsgInstantiateContractAmino) => _132.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _132.MsgInstantiateContract2) => _132.MsgInstantiateContract2Amino;
                    fromAmino: (object: _132.MsgInstantiateContract2Amino) => _132.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _132.MsgExecuteContract) => _132.MsgExecuteContractAmino;
                    fromAmino: (object: _132.MsgExecuteContractAmino) => _132.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _132.MsgMigrateContract) => _132.MsgMigrateContractAmino;
                    fromAmino: (object: _132.MsgMigrateContractAmino) => _132.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _132.MsgUpdateAdmin) => _132.MsgUpdateAdminAmino;
                    fromAmino: (object: _132.MsgUpdateAdminAmino) => _132.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _132.MsgClearAdmin) => _132.MsgClearAdminAmino;
                    fromAmino: (object: _132.MsgClearAdminAmino) => _132.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _133.AccessType;
            accessTypeToJSON(object: _133.AccessType): string;
            AccessType: typeof _133.AccessType;
            AccessTypeSDKType: typeof _133.AccessType;
            AccessTypeAmino: typeof _133.AccessType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _133.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.AccessTypeParam;
                fromPartial(object: Partial<_133.AccessTypeParam>): _133.AccessTypeParam;
                fromAmino(object: _133.AccessTypeParamAmino): _133.AccessTypeParam;
                toAmino(message: _133.AccessTypeParam): _133.AccessTypeParamAmino;
                fromAminoMsg(object: _133.AccessTypeParamAminoMsg): _133.AccessTypeParam;
                toAminoMsg(message: _133.AccessTypeParam): _133.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _133.AccessTypeParamProtoMsg): _133.AccessTypeParam;
                toProto(message: _133.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _133.AccessTypeParam): _133.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _133.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.AccessConfig;
                fromPartial(object: Partial<_133.AccessConfig>): _133.AccessConfig;
                fromAmino(object: _133.AccessConfigAmino): _133.AccessConfig;
                toAmino(message: _133.AccessConfig): _133.AccessConfigAmino;
                fromAminoMsg(object: _133.AccessConfigAminoMsg): _133.AccessConfig;
                toAminoMsg(message: _133.AccessConfig): _133.AccessConfigAminoMsg;
                fromProtoMsg(message: _133.AccessConfigProtoMsg): _133.AccessConfig;
                toProto(message: _133.AccessConfig): Uint8Array;
                toProtoMsg(message: _133.AccessConfig): _133.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Params;
                fromPartial(object: Partial<_133.Params>): _133.Params;
                fromAmino(object: _133.ParamsAmino): _133.Params;
                toAmino(message: _133.Params): _133.ParamsAmino;
                fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
                toAminoMsg(message: _133.Params): _133.ParamsAminoMsg;
                fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
                toProto(message: _133.Params): Uint8Array;
                toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _133.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.CodeInfo;
                fromPartial(object: Partial<_133.CodeInfo>): _133.CodeInfo;
                fromAmino(object: _133.CodeInfoAmino): _133.CodeInfo;
                toAmino(message: _133.CodeInfo): _133.CodeInfoAmino;
                fromAminoMsg(object: _133.CodeInfoAminoMsg): _133.CodeInfo;
                toAminoMsg(message: _133.CodeInfo): _133.CodeInfoAminoMsg;
                fromProtoMsg(message: _133.CodeInfoProtoMsg): _133.CodeInfo;
                toProto(message: _133.CodeInfo): Uint8Array;
                toProtoMsg(message: _133.CodeInfo): _133.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _133.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.ContractInfo;
                fromPartial(object: Partial<_133.ContractInfo>): _133.ContractInfo;
                fromAmino(object: _133.ContractInfoAmino): _133.ContractInfo;
                toAmino(message: _133.ContractInfo): _133.ContractInfoAmino;
                fromAminoMsg(object: _133.ContractInfoAminoMsg): _133.ContractInfo;
                toAminoMsg(message: _133.ContractInfo): _133.ContractInfoAminoMsg;
                fromProtoMsg(message: _133.ContractInfoProtoMsg): _133.ContractInfo;
                toProto(message: _133.ContractInfo): Uint8Array;
                toProtoMsg(message: _133.ContractInfo): _133.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _133.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_133.ContractCodeHistoryEntry>): _133.ContractCodeHistoryEntry;
                fromAmino(object: _133.ContractCodeHistoryEntryAmino): _133.ContractCodeHistoryEntry;
                toAmino(message: _133.ContractCodeHistoryEntry): _133.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _133.ContractCodeHistoryEntryAminoMsg): _133.ContractCodeHistoryEntry;
                toAminoMsg(message: _133.ContractCodeHistoryEntry): _133.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _133.ContractCodeHistoryEntryProtoMsg): _133.ContractCodeHistoryEntry;
                toProto(message: _133.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _133.ContractCodeHistoryEntry): _133.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _133.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.AbsoluteTxPosition;
                fromPartial(object: Partial<_133.AbsoluteTxPosition>): _133.AbsoluteTxPosition;
                fromAmino(object: _133.AbsoluteTxPositionAmino): _133.AbsoluteTxPosition;
                toAmino(message: _133.AbsoluteTxPosition): _133.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _133.AbsoluteTxPositionAminoMsg): _133.AbsoluteTxPosition;
                toAminoMsg(message: _133.AbsoluteTxPosition): _133.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _133.AbsoluteTxPositionProtoMsg): _133.AbsoluteTxPosition;
                toProto(message: _133.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _133.AbsoluteTxPosition): _133.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _133.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _133.Model;
                fromPartial(object: Partial<_133.Model>): _133.Model;
                fromAmino(object: _133.ModelAmino): _133.Model;
                toAmino(message: _133.Model): _133.ModelAmino;
                fromAminoMsg(object: _133.ModelAminoMsg): _133.Model;
                toAminoMsg(message: _133.Model): _133.ModelAminoMsg;
                fromProtoMsg(message: _133.ModelProtoMsg): _133.Model;
                toProto(message: _133.Model): Uint8Array;
                toProtoMsg(message: _133.Model): _133.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _132.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgStoreCode;
                fromPartial(object: Partial<_132.MsgStoreCode>): _132.MsgStoreCode;
                fromAmino(object: _132.MsgStoreCodeAmino): _132.MsgStoreCode;
                toAmino(message: _132.MsgStoreCode): _132.MsgStoreCodeAmino;
                fromAminoMsg(object: _132.MsgStoreCodeAminoMsg): _132.MsgStoreCode;
                toAminoMsg(message: _132.MsgStoreCode): _132.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _132.MsgStoreCodeProtoMsg): _132.MsgStoreCode;
                toProto(message: _132.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _132.MsgStoreCode): _132.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _132.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgStoreCodeResponse;
                fromPartial(object: Partial<_132.MsgStoreCodeResponse>): _132.MsgStoreCodeResponse;
                fromAmino(object: _132.MsgStoreCodeResponseAmino): _132.MsgStoreCodeResponse;
                toAmino(message: _132.MsgStoreCodeResponse): _132.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _132.MsgStoreCodeResponseAminoMsg): _132.MsgStoreCodeResponse;
                toAminoMsg(message: _132.MsgStoreCodeResponse): _132.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _132.MsgStoreCodeResponseProtoMsg): _132.MsgStoreCodeResponse;
                toProto(message: _132.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _132.MsgStoreCodeResponse): _132.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _132.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgInstantiateContract;
                fromPartial(object: Partial<_132.MsgInstantiateContract>): _132.MsgInstantiateContract;
                fromAmino(object: _132.MsgInstantiateContractAmino): _132.MsgInstantiateContract;
                toAmino(message: _132.MsgInstantiateContract): _132.MsgInstantiateContractAmino;
                fromAminoMsg(object: _132.MsgInstantiateContractAminoMsg): _132.MsgInstantiateContract;
                toAminoMsg(message: _132.MsgInstantiateContract): _132.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _132.MsgInstantiateContractProtoMsg): _132.MsgInstantiateContract;
                toProto(message: _132.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _132.MsgInstantiateContract): _132.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _132.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgInstantiateContract2;
                fromPartial(object: Partial<_132.MsgInstantiateContract2>): _132.MsgInstantiateContract2;
                fromAmino(object: _132.MsgInstantiateContract2Amino): _132.MsgInstantiateContract2;
                toAmino(message: _132.MsgInstantiateContract2): _132.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _132.MsgInstantiateContract2AminoMsg): _132.MsgInstantiateContract2;
                toAminoMsg(message: _132.MsgInstantiateContract2): _132.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _132.MsgInstantiateContract2ProtoMsg): _132.MsgInstantiateContract2;
                toProto(message: _132.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _132.MsgInstantiateContract2): _132.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _132.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_132.MsgInstantiateContractResponse>): _132.MsgInstantiateContractResponse;
                fromAmino(object: _132.MsgInstantiateContractResponseAmino): _132.MsgInstantiateContractResponse;
                toAmino(message: _132.MsgInstantiateContractResponse): _132.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _132.MsgInstantiateContractResponseAminoMsg): _132.MsgInstantiateContractResponse;
                toAminoMsg(message: _132.MsgInstantiateContractResponse): _132.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _132.MsgInstantiateContractResponseProtoMsg): _132.MsgInstantiateContractResponse;
                toProto(message: _132.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _132.MsgInstantiateContractResponse): _132.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _132.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_132.MsgInstantiateContract2Response>): _132.MsgInstantiateContract2Response;
                fromAmino(object: _132.MsgInstantiateContract2ResponseAmino): _132.MsgInstantiateContract2Response;
                toAmino(message: _132.MsgInstantiateContract2Response): _132.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _132.MsgInstantiateContract2ResponseAminoMsg): _132.MsgInstantiateContract2Response;
                toAminoMsg(message: _132.MsgInstantiateContract2Response): _132.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _132.MsgInstantiateContract2ResponseProtoMsg): _132.MsgInstantiateContract2Response;
                toProto(message: _132.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _132.MsgInstantiateContract2Response): _132.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _132.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgExecuteContract;
                fromPartial(object: Partial<_132.MsgExecuteContract>): _132.MsgExecuteContract;
                fromAmino(object: _132.MsgExecuteContractAmino): _132.MsgExecuteContract;
                toAmino(message: _132.MsgExecuteContract): _132.MsgExecuteContractAmino;
                fromAminoMsg(object: _132.MsgExecuteContractAminoMsg): _132.MsgExecuteContract;
                toAminoMsg(message: _132.MsgExecuteContract): _132.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _132.MsgExecuteContractProtoMsg): _132.MsgExecuteContract;
                toProto(message: _132.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _132.MsgExecuteContract): _132.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _132.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgExecuteContractResponse;
                fromPartial(object: Partial<_132.MsgExecuteContractResponse>): _132.MsgExecuteContractResponse;
                fromAmino(object: _132.MsgExecuteContractResponseAmino): _132.MsgExecuteContractResponse;
                toAmino(message: _132.MsgExecuteContractResponse): _132.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _132.MsgExecuteContractResponseAminoMsg): _132.MsgExecuteContractResponse;
                toAminoMsg(message: _132.MsgExecuteContractResponse): _132.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _132.MsgExecuteContractResponseProtoMsg): _132.MsgExecuteContractResponse;
                toProto(message: _132.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _132.MsgExecuteContractResponse): _132.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _132.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgMigrateContract;
                fromPartial(object: Partial<_132.MsgMigrateContract>): _132.MsgMigrateContract;
                fromAmino(object: _132.MsgMigrateContractAmino): _132.MsgMigrateContract;
                toAmino(message: _132.MsgMigrateContract): _132.MsgMigrateContractAmino;
                fromAminoMsg(object: _132.MsgMigrateContractAminoMsg): _132.MsgMigrateContract;
                toAminoMsg(message: _132.MsgMigrateContract): _132.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _132.MsgMigrateContractProtoMsg): _132.MsgMigrateContract;
                toProto(message: _132.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _132.MsgMigrateContract): _132.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _132.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgMigrateContractResponse;
                fromPartial(object: Partial<_132.MsgMigrateContractResponse>): _132.MsgMigrateContractResponse;
                fromAmino(object: _132.MsgMigrateContractResponseAmino): _132.MsgMigrateContractResponse;
                toAmino(message: _132.MsgMigrateContractResponse): _132.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _132.MsgMigrateContractResponseAminoMsg): _132.MsgMigrateContractResponse;
                toAminoMsg(message: _132.MsgMigrateContractResponse): _132.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _132.MsgMigrateContractResponseProtoMsg): _132.MsgMigrateContractResponse;
                toProto(message: _132.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _132.MsgMigrateContractResponse): _132.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _132.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgUpdateAdmin;
                fromPartial(object: Partial<_132.MsgUpdateAdmin>): _132.MsgUpdateAdmin;
                fromAmino(object: _132.MsgUpdateAdminAmino): _132.MsgUpdateAdmin;
                toAmino(message: _132.MsgUpdateAdmin): _132.MsgUpdateAdminAmino;
                fromAminoMsg(object: _132.MsgUpdateAdminAminoMsg): _132.MsgUpdateAdmin;
                toAminoMsg(message: _132.MsgUpdateAdmin): _132.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateAdminProtoMsg): _132.MsgUpdateAdmin;
                toProto(message: _132.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateAdmin): _132.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _132.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_132.MsgUpdateAdminResponse>): _132.MsgUpdateAdminResponse;
                fromAmino(_: _132.MsgUpdateAdminResponseAmino): _132.MsgUpdateAdminResponse;
                toAmino(_: _132.MsgUpdateAdminResponse): _132.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _132.MsgUpdateAdminResponseAminoMsg): _132.MsgUpdateAdminResponse;
                toAminoMsg(message: _132.MsgUpdateAdminResponse): _132.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _132.MsgUpdateAdminResponseProtoMsg): _132.MsgUpdateAdminResponse;
                toProto(message: _132.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _132.MsgUpdateAdminResponse): _132.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _132.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _132.MsgClearAdmin;
                fromPartial(object: Partial<_132.MsgClearAdmin>): _132.MsgClearAdmin;
                fromAmino(object: _132.MsgClearAdminAmino): _132.MsgClearAdmin;
                toAmino(message: _132.MsgClearAdmin): _132.MsgClearAdminAmino;
                fromAminoMsg(object: _132.MsgClearAdminAminoMsg): _132.MsgClearAdmin;
                toAminoMsg(message: _132.MsgClearAdmin): _132.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _132.MsgClearAdminProtoMsg): _132.MsgClearAdmin;
                toProto(message: _132.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _132.MsgClearAdmin): _132.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _132.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _132.MsgClearAdminResponse;
                fromPartial(_: Partial<_132.MsgClearAdminResponse>): _132.MsgClearAdminResponse;
                fromAmino(_: _132.MsgClearAdminResponseAmino): _132.MsgClearAdminResponse;
                toAmino(_: _132.MsgClearAdminResponse): _132.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _132.MsgClearAdminResponseAminoMsg): _132.MsgClearAdminResponse;
                toAminoMsg(message: _132.MsgClearAdminResponse): _132.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _132.MsgClearAdminResponseProtoMsg): _132.MsgClearAdminResponse;
                toProto(message: _132.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _132.MsgClearAdminResponse): _132.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _131.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractInfoRequest;
                fromPartial(object: Partial<_131.QueryContractInfoRequest>): _131.QueryContractInfoRequest;
                fromAmino(object: _131.QueryContractInfoRequestAmino): _131.QueryContractInfoRequest;
                toAmino(message: _131.QueryContractInfoRequest): _131.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _131.QueryContractInfoRequestAminoMsg): _131.QueryContractInfoRequest;
                toAminoMsg(message: _131.QueryContractInfoRequest): _131.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _131.QueryContractInfoRequestProtoMsg): _131.QueryContractInfoRequest;
                toProto(message: _131.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _131.QueryContractInfoRequest): _131.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _131.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractInfoResponse;
                fromPartial(object: Partial<_131.QueryContractInfoResponse>): _131.QueryContractInfoResponse;
                fromAmino(object: _131.QueryContractInfoResponseAmino): _131.QueryContractInfoResponse;
                toAmino(message: _131.QueryContractInfoResponse): _131.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _131.QueryContractInfoResponseAminoMsg): _131.QueryContractInfoResponse;
                toAminoMsg(message: _131.QueryContractInfoResponse): _131.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _131.QueryContractInfoResponseProtoMsg): _131.QueryContractInfoResponse;
                toProto(message: _131.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _131.QueryContractInfoResponse): _131.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _131.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractHistoryRequest;
                fromPartial(object: Partial<_131.QueryContractHistoryRequest>): _131.QueryContractHistoryRequest;
                fromAmino(object: _131.QueryContractHistoryRequestAmino): _131.QueryContractHistoryRequest;
                toAmino(message: _131.QueryContractHistoryRequest): _131.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _131.QueryContractHistoryRequestAminoMsg): _131.QueryContractHistoryRequest;
                toAminoMsg(message: _131.QueryContractHistoryRequest): _131.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _131.QueryContractHistoryRequestProtoMsg): _131.QueryContractHistoryRequest;
                toProto(message: _131.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _131.QueryContractHistoryRequest): _131.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _131.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractHistoryResponse;
                fromPartial(object: Partial<_131.QueryContractHistoryResponse>): _131.QueryContractHistoryResponse;
                fromAmino(object: _131.QueryContractHistoryResponseAmino): _131.QueryContractHistoryResponse;
                toAmino(message: _131.QueryContractHistoryResponse): _131.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _131.QueryContractHistoryResponseAminoMsg): _131.QueryContractHistoryResponse;
                toAminoMsg(message: _131.QueryContractHistoryResponse): _131.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _131.QueryContractHistoryResponseProtoMsg): _131.QueryContractHistoryResponse;
                toProto(message: _131.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _131.QueryContractHistoryResponse): _131.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _131.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_131.QueryContractsByCodeRequest>): _131.QueryContractsByCodeRequest;
                fromAmino(object: _131.QueryContractsByCodeRequestAmino): _131.QueryContractsByCodeRequest;
                toAmino(message: _131.QueryContractsByCodeRequest): _131.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _131.QueryContractsByCodeRequestAminoMsg): _131.QueryContractsByCodeRequest;
                toAminoMsg(message: _131.QueryContractsByCodeRequest): _131.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _131.QueryContractsByCodeRequestProtoMsg): _131.QueryContractsByCodeRequest;
                toProto(message: _131.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _131.QueryContractsByCodeRequest): _131.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _131.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_131.QueryContractsByCodeResponse>): _131.QueryContractsByCodeResponse;
                fromAmino(object: _131.QueryContractsByCodeResponseAmino): _131.QueryContractsByCodeResponse;
                toAmino(message: _131.QueryContractsByCodeResponse): _131.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _131.QueryContractsByCodeResponseAminoMsg): _131.QueryContractsByCodeResponse;
                toAminoMsg(message: _131.QueryContractsByCodeResponse): _131.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _131.QueryContractsByCodeResponseProtoMsg): _131.QueryContractsByCodeResponse;
                toProto(message: _131.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _131.QueryContractsByCodeResponse): _131.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _131.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryAllContractStateRequest;
                fromPartial(object: Partial<_131.QueryAllContractStateRequest>): _131.QueryAllContractStateRequest;
                fromAmino(object: _131.QueryAllContractStateRequestAmino): _131.QueryAllContractStateRequest;
                toAmino(message: _131.QueryAllContractStateRequest): _131.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _131.QueryAllContractStateRequestAminoMsg): _131.QueryAllContractStateRequest;
                toAminoMsg(message: _131.QueryAllContractStateRequest): _131.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _131.QueryAllContractStateRequestProtoMsg): _131.QueryAllContractStateRequest;
                toProto(message: _131.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _131.QueryAllContractStateRequest): _131.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _131.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryAllContractStateResponse;
                fromPartial(object: Partial<_131.QueryAllContractStateResponse>): _131.QueryAllContractStateResponse;
                fromAmino(object: _131.QueryAllContractStateResponseAmino): _131.QueryAllContractStateResponse;
                toAmino(message: _131.QueryAllContractStateResponse): _131.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _131.QueryAllContractStateResponseAminoMsg): _131.QueryAllContractStateResponse;
                toAminoMsg(message: _131.QueryAllContractStateResponse): _131.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _131.QueryAllContractStateResponseProtoMsg): _131.QueryAllContractStateResponse;
                toProto(message: _131.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _131.QueryAllContractStateResponse): _131.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _131.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryRawContractStateRequest;
                fromPartial(object: Partial<_131.QueryRawContractStateRequest>): _131.QueryRawContractStateRequest;
                fromAmino(object: _131.QueryRawContractStateRequestAmino): _131.QueryRawContractStateRequest;
                toAmino(message: _131.QueryRawContractStateRequest): _131.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _131.QueryRawContractStateRequestAminoMsg): _131.QueryRawContractStateRequest;
                toAminoMsg(message: _131.QueryRawContractStateRequest): _131.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _131.QueryRawContractStateRequestProtoMsg): _131.QueryRawContractStateRequest;
                toProto(message: _131.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _131.QueryRawContractStateRequest): _131.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _131.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryRawContractStateResponse;
                fromPartial(object: Partial<_131.QueryRawContractStateResponse>): _131.QueryRawContractStateResponse;
                fromAmino(object: _131.QueryRawContractStateResponseAmino): _131.QueryRawContractStateResponse;
                toAmino(message: _131.QueryRawContractStateResponse): _131.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _131.QueryRawContractStateResponseAminoMsg): _131.QueryRawContractStateResponse;
                toAminoMsg(message: _131.QueryRawContractStateResponse): _131.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _131.QueryRawContractStateResponseProtoMsg): _131.QueryRawContractStateResponse;
                toProto(message: _131.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _131.QueryRawContractStateResponse): _131.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _131.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_131.QuerySmartContractStateRequest>): _131.QuerySmartContractStateRequest;
                fromAmino(object: _131.QuerySmartContractStateRequestAmino): _131.QuerySmartContractStateRequest;
                toAmino(message: _131.QuerySmartContractStateRequest): _131.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _131.QuerySmartContractStateRequestAminoMsg): _131.QuerySmartContractStateRequest;
                toAminoMsg(message: _131.QuerySmartContractStateRequest): _131.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _131.QuerySmartContractStateRequestProtoMsg): _131.QuerySmartContractStateRequest;
                toProto(message: _131.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _131.QuerySmartContractStateRequest): _131.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _131.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_131.QuerySmartContractStateResponse>): _131.QuerySmartContractStateResponse;
                fromAmino(object: _131.QuerySmartContractStateResponseAmino): _131.QuerySmartContractStateResponse;
                toAmino(message: _131.QuerySmartContractStateResponse): _131.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _131.QuerySmartContractStateResponseAminoMsg): _131.QuerySmartContractStateResponse;
                toAminoMsg(message: _131.QuerySmartContractStateResponse): _131.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _131.QuerySmartContractStateResponseProtoMsg): _131.QuerySmartContractStateResponse;
                toProto(message: _131.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _131.QuerySmartContractStateResponse): _131.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _131.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryCodeRequest;
                fromPartial(object: Partial<_131.QueryCodeRequest>): _131.QueryCodeRequest;
                fromAmino(object: _131.QueryCodeRequestAmino): _131.QueryCodeRequest;
                toAmino(message: _131.QueryCodeRequest): _131.QueryCodeRequestAmino;
                fromAminoMsg(object: _131.QueryCodeRequestAminoMsg): _131.QueryCodeRequest;
                toAminoMsg(message: _131.QueryCodeRequest): _131.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _131.QueryCodeRequestProtoMsg): _131.QueryCodeRequest;
                toProto(message: _131.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _131.QueryCodeRequest): _131.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _131.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.CodeInfoResponse;
                fromPartial(object: Partial<_131.CodeInfoResponse>): _131.CodeInfoResponse;
                fromAmino(object: _131.CodeInfoResponseAmino): _131.CodeInfoResponse;
                toAmino(message: _131.CodeInfoResponse): _131.CodeInfoResponseAmino;
                fromAminoMsg(object: _131.CodeInfoResponseAminoMsg): _131.CodeInfoResponse;
                toAminoMsg(message: _131.CodeInfoResponse): _131.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _131.CodeInfoResponseProtoMsg): _131.CodeInfoResponse;
                toProto(message: _131.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _131.CodeInfoResponse): _131.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _131.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryCodeResponse;
                fromPartial(object: Partial<_131.QueryCodeResponse>): _131.QueryCodeResponse;
                fromAmino(object: _131.QueryCodeResponseAmino): _131.QueryCodeResponse;
                toAmino(message: _131.QueryCodeResponse): _131.QueryCodeResponseAmino;
                fromAminoMsg(object: _131.QueryCodeResponseAminoMsg): _131.QueryCodeResponse;
                toAminoMsg(message: _131.QueryCodeResponse): _131.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _131.QueryCodeResponseProtoMsg): _131.QueryCodeResponse;
                toProto(message: _131.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _131.QueryCodeResponse): _131.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _131.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryCodesRequest;
                fromPartial(object: Partial<_131.QueryCodesRequest>): _131.QueryCodesRequest;
                fromAmino(object: _131.QueryCodesRequestAmino): _131.QueryCodesRequest;
                toAmino(message: _131.QueryCodesRequest): _131.QueryCodesRequestAmino;
                fromAminoMsg(object: _131.QueryCodesRequestAminoMsg): _131.QueryCodesRequest;
                toAminoMsg(message: _131.QueryCodesRequest): _131.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _131.QueryCodesRequestProtoMsg): _131.QueryCodesRequest;
                toProto(message: _131.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _131.QueryCodesRequest): _131.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _131.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryCodesResponse;
                fromPartial(object: Partial<_131.QueryCodesResponse>): _131.QueryCodesResponse;
                fromAmino(object: _131.QueryCodesResponseAmino): _131.QueryCodesResponse;
                toAmino(message: _131.QueryCodesResponse): _131.QueryCodesResponseAmino;
                fromAminoMsg(object: _131.QueryCodesResponseAminoMsg): _131.QueryCodesResponse;
                toAminoMsg(message: _131.QueryCodesResponse): _131.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _131.QueryCodesResponseProtoMsg): _131.QueryCodesResponse;
                toProto(message: _131.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _131.QueryCodesResponse): _131.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _131.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_131.QueryPinnedCodesRequest>): _131.QueryPinnedCodesRequest;
                fromAmino(object: _131.QueryPinnedCodesRequestAmino): _131.QueryPinnedCodesRequest;
                toAmino(message: _131.QueryPinnedCodesRequest): _131.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _131.QueryPinnedCodesRequestAminoMsg): _131.QueryPinnedCodesRequest;
                toAminoMsg(message: _131.QueryPinnedCodesRequest): _131.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _131.QueryPinnedCodesRequestProtoMsg): _131.QueryPinnedCodesRequest;
                toProto(message: _131.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _131.QueryPinnedCodesRequest): _131.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _131.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_131.QueryPinnedCodesResponse>): _131.QueryPinnedCodesResponse;
                fromAmino(object: _131.QueryPinnedCodesResponseAmino): _131.QueryPinnedCodesResponse;
                toAmino(message: _131.QueryPinnedCodesResponse): _131.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _131.QueryPinnedCodesResponseAminoMsg): _131.QueryPinnedCodesResponse;
                toAminoMsg(message: _131.QueryPinnedCodesResponse): _131.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _131.QueryPinnedCodesResponseProtoMsg): _131.QueryPinnedCodesResponse;
                toProto(message: _131.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _131.QueryPinnedCodesResponse): _131.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _131.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _131.QueryParamsRequest;
                fromPartial(_: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
                fromAmino(_: _131.QueryParamsRequestAmino): _131.QueryParamsRequest;
                toAmino(_: _131.QueryParamsRequest): _131.QueryParamsRequestAmino;
                fromAminoMsg(object: _131.QueryParamsRequestAminoMsg): _131.QueryParamsRequest;
                toAminoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _131.QueryParamsRequestProtoMsg): _131.QueryParamsRequest;
                toProto(message: _131.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _131.QueryParamsRequest): _131.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _131.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryParamsResponse;
                fromPartial(object: Partial<_131.QueryParamsResponse>): _131.QueryParamsResponse;
                fromAmino(object: _131.QueryParamsResponseAmino): _131.QueryParamsResponse;
                toAmino(message: _131.QueryParamsResponse): _131.QueryParamsResponseAmino;
                fromAminoMsg(object: _131.QueryParamsResponseAminoMsg): _131.QueryParamsResponse;
                toAminoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _131.QueryParamsResponseProtoMsg): _131.QueryParamsResponse;
                toProto(message: _131.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _131.QueryParamsResponse): _131.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _131.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_131.QueryContractsByCreatorRequest>): _131.QueryContractsByCreatorRequest;
                fromAmino(object: _131.QueryContractsByCreatorRequestAmino): _131.QueryContractsByCreatorRequest;
                toAmino(message: _131.QueryContractsByCreatorRequest): _131.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _131.QueryContractsByCreatorRequestAminoMsg): _131.QueryContractsByCreatorRequest;
                toAminoMsg(message: _131.QueryContractsByCreatorRequest): _131.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _131.QueryContractsByCreatorRequestProtoMsg): _131.QueryContractsByCreatorRequest;
                toProto(message: _131.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _131.QueryContractsByCreatorRequest): _131.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _131.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _131.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_131.QueryContractsByCreatorResponse>): _131.QueryContractsByCreatorResponse;
                fromAmino(object: _131.QueryContractsByCreatorResponseAmino): _131.QueryContractsByCreatorResponse;
                toAmino(message: _131.QueryContractsByCreatorResponse): _131.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _131.QueryContractsByCreatorResponseAminoMsg): _131.QueryContractsByCreatorResponse;
                toAminoMsg(message: _131.QueryContractsByCreatorResponse): _131.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _131.QueryContractsByCreatorResponseProtoMsg): _131.QueryContractsByCreatorResponse;
                toProto(message: _131.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _131.QueryContractsByCreatorResponse): _131.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _130.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.StoreCodeProposal;
                fromPartial(object: Partial<_130.StoreCodeProposal>): _130.StoreCodeProposal;
                fromAmino(object: _130.StoreCodeProposalAmino): _130.StoreCodeProposal;
                toAmino(message: _130.StoreCodeProposal): _130.StoreCodeProposalAmino;
                fromAminoMsg(object: _130.StoreCodeProposalAminoMsg): _130.StoreCodeProposal;
                toAminoMsg(message: _130.StoreCodeProposal): _130.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _130.StoreCodeProposalProtoMsg): _130.StoreCodeProposal;
                toProto(message: _130.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _130.StoreCodeProposal): _130.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _130.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.InstantiateContractProposal;
                fromPartial(object: Partial<_130.InstantiateContractProposal>): _130.InstantiateContractProposal;
                fromAmino(object: _130.InstantiateContractProposalAmino): _130.InstantiateContractProposal;
                toAmino(message: _130.InstantiateContractProposal): _130.InstantiateContractProposalAmino;
                fromAminoMsg(object: _130.InstantiateContractProposalAminoMsg): _130.InstantiateContractProposal;
                toAminoMsg(message: _130.InstantiateContractProposal): _130.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _130.InstantiateContractProposalProtoMsg): _130.InstantiateContractProposal;
                toProto(message: _130.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _130.InstantiateContractProposal): _130.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _130.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.MigrateContractProposal;
                fromPartial(object: Partial<_130.MigrateContractProposal>): _130.MigrateContractProposal;
                fromAmino(object: _130.MigrateContractProposalAmino): _130.MigrateContractProposal;
                toAmino(message: _130.MigrateContractProposal): _130.MigrateContractProposalAmino;
                fromAminoMsg(object: _130.MigrateContractProposalAminoMsg): _130.MigrateContractProposal;
                toAminoMsg(message: _130.MigrateContractProposal): _130.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _130.MigrateContractProposalProtoMsg): _130.MigrateContractProposal;
                toProto(message: _130.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _130.MigrateContractProposal): _130.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _130.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.SudoContractProposal;
                fromPartial(object: Partial<_130.SudoContractProposal>): _130.SudoContractProposal;
                fromAmino(object: _130.SudoContractProposalAmino): _130.SudoContractProposal;
                toAmino(message: _130.SudoContractProposal): _130.SudoContractProposalAmino;
                fromAminoMsg(object: _130.SudoContractProposalAminoMsg): _130.SudoContractProposal;
                toAminoMsg(message: _130.SudoContractProposal): _130.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _130.SudoContractProposalProtoMsg): _130.SudoContractProposal;
                toProto(message: _130.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _130.SudoContractProposal): _130.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _130.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.ExecuteContractProposal;
                fromPartial(object: Partial<_130.ExecuteContractProposal>): _130.ExecuteContractProposal;
                fromAmino(object: _130.ExecuteContractProposalAmino): _130.ExecuteContractProposal;
                toAmino(message: _130.ExecuteContractProposal): _130.ExecuteContractProposalAmino;
                fromAminoMsg(object: _130.ExecuteContractProposalAminoMsg): _130.ExecuteContractProposal;
                toAminoMsg(message: _130.ExecuteContractProposal): _130.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _130.ExecuteContractProposalProtoMsg): _130.ExecuteContractProposal;
                toProto(message: _130.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _130.ExecuteContractProposal): _130.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _130.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.UpdateAdminProposal;
                fromPartial(object: Partial<_130.UpdateAdminProposal>): _130.UpdateAdminProposal;
                fromAmino(object: _130.UpdateAdminProposalAmino): _130.UpdateAdminProposal;
                toAmino(message: _130.UpdateAdminProposal): _130.UpdateAdminProposalAmino;
                fromAminoMsg(object: _130.UpdateAdminProposalAminoMsg): _130.UpdateAdminProposal;
                toAminoMsg(message: _130.UpdateAdminProposal): _130.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _130.UpdateAdminProposalProtoMsg): _130.UpdateAdminProposal;
                toProto(message: _130.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _130.UpdateAdminProposal): _130.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _130.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.ClearAdminProposal;
                fromPartial(object: Partial<_130.ClearAdminProposal>): _130.ClearAdminProposal;
                fromAmino(object: _130.ClearAdminProposalAmino): _130.ClearAdminProposal;
                toAmino(message: _130.ClearAdminProposal): _130.ClearAdminProposalAmino;
                fromAminoMsg(object: _130.ClearAdminProposalAminoMsg): _130.ClearAdminProposal;
                toAminoMsg(message: _130.ClearAdminProposal): _130.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _130.ClearAdminProposalProtoMsg): _130.ClearAdminProposal;
                toProto(message: _130.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _130.ClearAdminProposal): _130.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _130.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.PinCodesProposal;
                fromPartial(object: Partial<_130.PinCodesProposal>): _130.PinCodesProposal;
                fromAmino(object: _130.PinCodesProposalAmino): _130.PinCodesProposal;
                toAmino(message: _130.PinCodesProposal): _130.PinCodesProposalAmino;
                fromAminoMsg(object: _130.PinCodesProposalAminoMsg): _130.PinCodesProposal;
                toAminoMsg(message: _130.PinCodesProposal): _130.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _130.PinCodesProposalProtoMsg): _130.PinCodesProposal;
                toProto(message: _130.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _130.PinCodesProposal): _130.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _130.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.UnpinCodesProposal;
                fromPartial(object: Partial<_130.UnpinCodesProposal>): _130.UnpinCodesProposal;
                fromAmino(object: _130.UnpinCodesProposalAmino): _130.UnpinCodesProposal;
                toAmino(message: _130.UnpinCodesProposal): _130.UnpinCodesProposalAmino;
                fromAminoMsg(object: _130.UnpinCodesProposalAminoMsg): _130.UnpinCodesProposal;
                toAminoMsg(message: _130.UnpinCodesProposal): _130.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _130.UnpinCodesProposalProtoMsg): _130.UnpinCodesProposal;
                toProto(message: _130.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _130.UnpinCodesProposal): _130.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _130.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.AccessConfigUpdate;
                fromPartial(object: Partial<_130.AccessConfigUpdate>): _130.AccessConfigUpdate;
                fromAmino(object: _130.AccessConfigUpdateAmino): _130.AccessConfigUpdate;
                toAmino(message: _130.AccessConfigUpdate): _130.AccessConfigUpdateAmino;
                fromAminoMsg(object: _130.AccessConfigUpdateAminoMsg): _130.AccessConfigUpdate;
                toAminoMsg(message: _130.AccessConfigUpdate): _130.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _130.AccessConfigUpdateProtoMsg): _130.AccessConfigUpdate;
                toProto(message: _130.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _130.AccessConfigUpdate): _130.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _130.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_130.UpdateInstantiateConfigProposal>): _130.UpdateInstantiateConfigProposal;
                fromAmino(object: _130.UpdateInstantiateConfigProposalAmino): _130.UpdateInstantiateConfigProposal;
                toAmino(message: _130.UpdateInstantiateConfigProposal): _130.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _130.UpdateInstantiateConfigProposalAminoMsg): _130.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _130.UpdateInstantiateConfigProposal): _130.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _130.UpdateInstantiateConfigProposalProtoMsg): _130.UpdateInstantiateConfigProposal;
                toProto(message: _130.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _130.UpdateInstantiateConfigProposal): _130.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _130.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _130.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_130.StoreAndInstantiateContractProposal>): _130.StoreAndInstantiateContractProposal;
                fromAmino(object: _130.StoreAndInstantiateContractProposalAmino): _130.StoreAndInstantiateContractProposal;
                toAmino(message: _130.StoreAndInstantiateContractProposal): _130.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _130.StoreAndInstantiateContractProposalAminoMsg): _130.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _130.StoreAndInstantiateContractProposal): _130.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _130.StoreAndInstantiateContractProposalProtoMsg): _130.StoreAndInstantiateContractProposal;
                toProto(message: _130.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _130.StoreAndInstantiateContractProposal): _130.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _129.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgIBCSend;
                fromPartial(object: Partial<_129.MsgIBCSend>): _129.MsgIBCSend;
                fromAmino(object: _129.MsgIBCSendAmino): _129.MsgIBCSend;
                toAmino(message: _129.MsgIBCSend): _129.MsgIBCSendAmino;
                fromAminoMsg(object: _129.MsgIBCSendAminoMsg): _129.MsgIBCSend;
                toAminoMsg(message: _129.MsgIBCSend): _129.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _129.MsgIBCSendProtoMsg): _129.MsgIBCSend;
                toProto(message: _129.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _129.MsgIBCSend): _129.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _129.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _129.MsgIBCCloseChannel;
                fromPartial(object: Partial<_129.MsgIBCCloseChannel>): _129.MsgIBCCloseChannel;
                fromAmino(object: _129.MsgIBCCloseChannelAmino): _129.MsgIBCCloseChannel;
                toAmino(message: _129.MsgIBCCloseChannel): _129.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _129.MsgIBCCloseChannelAminoMsg): _129.MsgIBCCloseChannel;
                toAminoMsg(message: _129.MsgIBCCloseChannel): _129.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _129.MsgIBCCloseChannelProtoMsg): _129.MsgIBCCloseChannel;
                toProto(message: _129.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _129.MsgIBCCloseChannel): _129.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _128.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GenesisState;
                fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
                fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
                toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
                fromAminoMsg(object: _128.GenesisStateAminoMsg): _128.GenesisState;
                toAminoMsg(message: _128.GenesisState): _128.GenesisStateAminoMsg;
                fromProtoMsg(message: _128.GenesisStateProtoMsg): _128.GenesisState;
                toProto(message: _128.GenesisState): Uint8Array;
                toProtoMsg(message: _128.GenesisState): _128.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _128.GenesisState_GenMsgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.GenesisState_GenMsgs;
                fromPartial(object: Partial<_128.GenesisState_GenMsgs>): _128.GenesisState_GenMsgs;
                fromAmino(object: _128.GenesisState_GenMsgsAmino): _128.GenesisState_GenMsgs;
                toAmino(message: _128.GenesisState_GenMsgs): _128.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _128.GenesisState_GenMsgsAminoMsg): _128.GenesisState_GenMsgs;
                toAminoMsg(message: _128.GenesisState_GenMsgs): _128.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _128.GenesisState_GenMsgsProtoMsg): _128.GenesisState_GenMsgs;
                toProto(message: _128.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _128.GenesisState_GenMsgs): _128.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _128.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Code;
                fromPartial(object: Partial<_128.Code>): _128.Code;
                fromAmino(object: _128.CodeAmino): _128.Code;
                toAmino(message: _128.Code): _128.CodeAmino;
                fromAminoMsg(object: _128.CodeAminoMsg): _128.Code;
                toAminoMsg(message: _128.Code): _128.CodeAminoMsg;
                fromProtoMsg(message: _128.CodeProtoMsg): _128.Code;
                toProto(message: _128.Code): Uint8Array;
                toProtoMsg(message: _128.Code): _128.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _128.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Contract;
                fromPartial(object: Partial<_128.Contract>): _128.Contract;
                fromAmino(object: _128.ContractAmino): _128.Contract;
                toAmino(message: _128.Contract): _128.ContractAmino;
                fromAminoMsg(object: _128.ContractAminoMsg): _128.Contract;
                toAminoMsg(message: _128.Contract): _128.ContractAminoMsg;
                fromProtoMsg(message: _128.ContractProtoMsg): _128.Contract;
                toProto(message: _128.Contract): Uint8Array;
                toProtoMsg(message: _128.Contract): _128.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _128.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _128.Sequence;
                fromPartial(object: Partial<_128.Sequence>): _128.Sequence;
                fromAmino(object: _128.SequenceAmino): _128.Sequence;
                toAmino(message: _128.Sequence): _128.SequenceAmino;
                fromAminoMsg(object: _128.SequenceAminoMsg): _128.Sequence;
                toAminoMsg(message: _128.Sequence): _128.SequenceAminoMsg;
                fromProtoMsg(message: _128.SequenceProtoMsg): _128.Sequence;
                toProto(message: _128.Sequence): Uint8Array;
                toProtoMsg(message: _128.Sequence): _128.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _127.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ContractExecutionAuthorization;
                fromPartial(object: Partial<_127.ContractExecutionAuthorization>): _127.ContractExecutionAuthorization;
                fromAmino(object: _127.ContractExecutionAuthorizationAmino): _127.ContractExecutionAuthorization;
                toAmino(message: _127.ContractExecutionAuthorization): _127.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _127.ContractExecutionAuthorizationAminoMsg): _127.ContractExecutionAuthorization;
                toAminoMsg(message: _127.ContractExecutionAuthorization): _127.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _127.ContractExecutionAuthorizationProtoMsg): _127.ContractExecutionAuthorization;
                toProto(message: _127.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _127.ContractExecutionAuthorization): _127.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _127.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ContractMigrationAuthorization;
                fromPartial(object: Partial<_127.ContractMigrationAuthorization>): _127.ContractMigrationAuthorization;
                fromAmino(object: _127.ContractMigrationAuthorizationAmino): _127.ContractMigrationAuthorization;
                toAmino(message: _127.ContractMigrationAuthorization): _127.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _127.ContractMigrationAuthorizationAminoMsg): _127.ContractMigrationAuthorization;
                toAminoMsg(message: _127.ContractMigrationAuthorization): _127.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _127.ContractMigrationAuthorizationProtoMsg): _127.ContractMigrationAuthorization;
                toProto(message: _127.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _127.ContractMigrationAuthorization): _127.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _127.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.ContractGrant;
                fromPartial(object: Partial<_127.ContractGrant>): _127.ContractGrant;
                fromAmino(object: _127.ContractGrantAmino): _127.ContractGrant;
                toAmino(message: _127.ContractGrant): _127.ContractGrantAmino;
                fromAminoMsg(object: _127.ContractGrantAminoMsg): _127.ContractGrant;
                toAminoMsg(message: _127.ContractGrant): _127.ContractGrantAminoMsg;
                fromProtoMsg(message: _127.ContractGrantProtoMsg): _127.ContractGrant;
                toProto(message: _127.ContractGrant): Uint8Array;
                toProtoMsg(message: _127.ContractGrant): _127.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _127.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MaxCallsLimit;
                fromPartial(object: Partial<_127.MaxCallsLimit>): _127.MaxCallsLimit;
                fromAmino(object: _127.MaxCallsLimitAmino): _127.MaxCallsLimit;
                toAmino(message: _127.MaxCallsLimit): _127.MaxCallsLimitAmino;
                fromAminoMsg(object: _127.MaxCallsLimitAminoMsg): _127.MaxCallsLimit;
                toAminoMsg(message: _127.MaxCallsLimit): _127.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _127.MaxCallsLimitProtoMsg): _127.MaxCallsLimit;
                toProto(message: _127.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _127.MaxCallsLimit): _127.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _127.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.MaxFundsLimit;
                fromPartial(object: Partial<_127.MaxFundsLimit>): _127.MaxFundsLimit;
                fromAmino(object: _127.MaxFundsLimitAmino): _127.MaxFundsLimit;
                toAmino(message: _127.MaxFundsLimit): _127.MaxFundsLimitAmino;
                fromAminoMsg(object: _127.MaxFundsLimitAminoMsg): _127.MaxFundsLimit;
                toAminoMsg(message: _127.MaxFundsLimit): _127.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _127.MaxFundsLimitProtoMsg): _127.MaxFundsLimit;
                toProto(message: _127.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _127.MaxFundsLimit): _127.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _127.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.CombinedLimit;
                fromPartial(object: Partial<_127.CombinedLimit>): _127.CombinedLimit;
                fromAmino(object: _127.CombinedLimitAmino): _127.CombinedLimit;
                toAmino(message: _127.CombinedLimit): _127.CombinedLimitAmino;
                fromAminoMsg(object: _127.CombinedLimitAminoMsg): _127.CombinedLimit;
                toAminoMsg(message: _127.CombinedLimit): _127.CombinedLimitAminoMsg;
                fromProtoMsg(message: _127.CombinedLimitProtoMsg): _127.CombinedLimit;
                toProto(message: _127.CombinedLimit): Uint8Array;
                toProtoMsg(message: _127.CombinedLimit): _127.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _127.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _127.AllowAllMessagesFilter;
                fromPartial(_: Partial<_127.AllowAllMessagesFilter>): _127.AllowAllMessagesFilter;
                fromAmino(_: _127.AllowAllMessagesFilterAmino): _127.AllowAllMessagesFilter;
                toAmino(_: _127.AllowAllMessagesFilter): _127.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _127.AllowAllMessagesFilterAminoMsg): _127.AllowAllMessagesFilter;
                toAminoMsg(message: _127.AllowAllMessagesFilter): _127.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _127.AllowAllMessagesFilterProtoMsg): _127.AllowAllMessagesFilter;
                toProto(message: _127.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _127.AllowAllMessagesFilter): _127.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _127.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_127.AcceptedMessageKeysFilter>): _127.AcceptedMessageKeysFilter;
                fromAmino(object: _127.AcceptedMessageKeysFilterAmino): _127.AcceptedMessageKeysFilter;
                toAmino(message: _127.AcceptedMessageKeysFilter): _127.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _127.AcceptedMessageKeysFilterAminoMsg): _127.AcceptedMessageKeysFilter;
                toAminoMsg(message: _127.AcceptedMessageKeysFilter): _127.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _127.AcceptedMessageKeysFilterProtoMsg): _127.AcceptedMessageKeysFilter;
                toProto(message: _127.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _127.AcceptedMessageKeysFilter): _127.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _127.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _127.AcceptedMessagesFilter;
                fromPartial(object: Partial<_127.AcceptedMessagesFilter>): _127.AcceptedMessagesFilter;
                fromAmino(object: _127.AcceptedMessagesFilterAmino): _127.AcceptedMessagesFilter;
                toAmino(message: _127.AcceptedMessagesFilter): _127.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _127.AcceptedMessagesFilterAminoMsg): _127.AcceptedMessagesFilter;
                toAminoMsg(message: _127.AcceptedMessagesFilter): _127.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _127.AcceptedMessagesFilterProtoMsg): _127.AcceptedMessagesFilter;
                toProto(message: _127.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _127.AcceptedMessagesFilter): _127.AcceptedMessagesFilterProtoMsg;
            };
            ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _127.MaxCallsLimit | _127.MaxFundsLimit | _127.CombinedLimit;
            ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _127.AllowAllMessagesFilter | _127.AcceptedMessageKeysFilter | _127.AcceptedMessagesFilter;
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
                    v1: _243.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
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
                        contractInfo(request: _131.QueryContractInfoRequest): Promise<_131.QueryContractInfoResponse>;
                        contractHistory(request: _131.QueryContractHistoryRequest): Promise<_131.QueryContractHistoryResponse>;
                        contractsByCode(request: _131.QueryContractsByCodeRequest): Promise<_131.QueryContractsByCodeResponse>;
                        allContractState(request: _131.QueryAllContractStateRequest): Promise<_131.QueryAllContractStateResponse>;
                        rawContractState(request: _131.QueryRawContractStateRequest): Promise<_131.QueryRawContractStateResponse>;
                        smartContractState(request: _131.QuerySmartContractStateRequest): Promise<_131.QuerySmartContractStateResponse>;
                        code(request: _131.QueryCodeRequest): Promise<_131.QueryCodeResponse>;
                        codes(request?: _131.QueryCodesRequest): Promise<_131.QueryCodesResponse>;
                        pinnedCodes(request?: _131.QueryPinnedCodesRequest): Promise<_131.QueryPinnedCodesResponse>;
                        params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                        contractsByCreator(request: _131.QueryContractsByCreatorRequest): Promise<_131.QueryContractsByCreatorResponse>;
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
                    v1: _241.LCDQueryClient;
                };
            };
        }>;
    };
}
