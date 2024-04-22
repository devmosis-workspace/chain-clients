import * as _143 from "./wasm/v1/authz";
import * as _144 from "./wasm/v1/genesis";
import * as _145 from "./wasm/v1/ibc";
import * as _146 from "./wasm/v1/proposal";
import * as _147 from "./wasm/v1/query";
import * as _148 from "./wasm/v1/tx";
import * as _149 from "./wasm/v1/types";
import * as _259 from "./wasm/v1/query.lcd";
import * as _260 from "./wasm/v1/query.rpc.Query";
import * as _261 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _147.QueryContractInfoRequest): Promise<_147.QueryContractInfoResponse>;
                contractHistory(request: _147.QueryContractHistoryRequest): Promise<_147.QueryContractHistoryResponse>;
                contractsByCode(request: _147.QueryContractsByCodeRequest): Promise<_147.QueryContractsByCodeResponse>;
                allContractState(request: _147.QueryAllContractStateRequest): Promise<_147.QueryAllContractStateResponse>;
                rawContractState(request: _147.QueryRawContractStateRequest): Promise<_147.QueryRawContractStateResponse>;
                smartContractState(request: _147.QuerySmartContractStateRequest): Promise<_147.QuerySmartContractStateResponse>;
                code(request: _147.QueryCodeRequest): Promise<_147.QueryCodeResponse>;
                codes(request?: _147.QueryCodesRequest): Promise<_147.QueryCodesResponse>;
                pinnedCodes(request?: _147.QueryPinnedCodesRequest): Promise<_147.QueryPinnedCodesResponse>;
                params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                contractsByCreator(request: _147.QueryContractsByCreatorRequest): Promise<_147.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _148.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _148.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _148.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _148.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _148.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _148.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _148.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _148.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _148.MsgStoreCode): {
                        typeUrl: string;
                        value: _148.MsgStoreCode;
                    };
                    instantiateContract(value: _148.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _148.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _148.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _148.MsgInstantiateContract2;
                    };
                    executeContract(value: _148.MsgExecuteContract): {
                        typeUrl: string;
                        value: _148.MsgExecuteContract;
                    };
                    migrateContract(value: _148.MsgMigrateContract): {
                        typeUrl: string;
                        value: _148.MsgMigrateContract;
                    };
                    updateAdmin(value: _148.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _148.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _148.MsgClearAdmin): {
                        typeUrl: string;
                        value: _148.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _148.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _148.MsgUpdateInstantiateConfig;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _148.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _148.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _148.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _148.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _148.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _148.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _148.MsgUpdateInstantiateConfig;
                    };
                };
                fromPartial: {
                    storeCode(value: _148.MsgStoreCode): {
                        typeUrl: string;
                        value: _148.MsgStoreCode;
                    };
                    instantiateContract(value: _148.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _148.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _148.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _148.MsgInstantiateContract2;
                    };
                    executeContract(value: _148.MsgExecuteContract): {
                        typeUrl: string;
                        value: _148.MsgExecuteContract;
                    };
                    migrateContract(value: _148.MsgMigrateContract): {
                        typeUrl: string;
                        value: _148.MsgMigrateContract;
                    };
                    updateAdmin(value: _148.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _148.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _148.MsgClearAdmin): {
                        typeUrl: string;
                        value: _148.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _148.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _148.MsgUpdateInstantiateConfig;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _148.MsgStoreCode) => _148.MsgStoreCodeAmino;
                    fromAmino: (object: _148.MsgStoreCodeAmino) => _148.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _148.MsgInstantiateContract) => _148.MsgInstantiateContractAmino;
                    fromAmino: (object: _148.MsgInstantiateContractAmino) => _148.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _148.MsgInstantiateContract2) => _148.MsgInstantiateContract2Amino;
                    fromAmino: (object: _148.MsgInstantiateContract2Amino) => _148.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _148.MsgExecuteContract) => _148.MsgExecuteContractAmino;
                    fromAmino: (object: _148.MsgExecuteContractAmino) => _148.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _148.MsgMigrateContract) => _148.MsgMigrateContractAmino;
                    fromAmino: (object: _148.MsgMigrateContractAmino) => _148.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _148.MsgUpdateAdmin) => _148.MsgUpdateAdminAmino;
                    fromAmino: (object: _148.MsgUpdateAdminAmino) => _148.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _148.MsgClearAdmin) => _148.MsgClearAdminAmino;
                    fromAmino: (object: _148.MsgClearAdminAmino) => _148.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _148.MsgUpdateInstantiateConfig) => _148.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _148.MsgUpdateInstantiateConfigAmino) => _148.MsgUpdateInstantiateConfig;
                };
            };
            accessTypeFromJSON(object: any): _149.AccessType;
            accessTypeToJSON(object: _149.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _149.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _149.ContractCodeHistoryOperationType): string;
            AccessType: typeof _149.AccessType;
            AccessTypeSDKType: typeof _149.AccessType;
            AccessTypeAmino: typeof _149.AccessType;
            ContractCodeHistoryOperationType: typeof _149.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _149.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _149.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _149.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.AccessTypeParam;
                fromPartial(object: Partial<_149.AccessTypeParam>): _149.AccessTypeParam;
                fromAmino(object: _149.AccessTypeParamAmino): _149.AccessTypeParam;
                toAmino(message: _149.AccessTypeParam): _149.AccessTypeParamAmino;
                fromAminoMsg(object: _149.AccessTypeParamAminoMsg): _149.AccessTypeParam;
                toAminoMsg(message: _149.AccessTypeParam): _149.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _149.AccessTypeParamProtoMsg): _149.AccessTypeParam;
                toProto(message: _149.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _149.AccessTypeParam): _149.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _149.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.AccessConfig;
                fromPartial(object: Partial<_149.AccessConfig>): _149.AccessConfig;
                fromAmino(object: _149.AccessConfigAmino): _149.AccessConfig;
                toAmino(message: _149.AccessConfig): _149.AccessConfigAmino;
                fromAminoMsg(object: _149.AccessConfigAminoMsg): _149.AccessConfig;
                toAminoMsg(message: _149.AccessConfig): _149.AccessConfigAminoMsg;
                fromProtoMsg(message: _149.AccessConfigProtoMsg): _149.AccessConfig;
                toProto(message: _149.AccessConfig): Uint8Array;
                toProtoMsg(message: _149.AccessConfig): _149.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _149.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.Params;
                fromPartial(object: Partial<_149.Params>): _149.Params;
                fromAmino(object: _149.ParamsAmino): _149.Params;
                toAmino(message: _149.Params): _149.ParamsAmino;
                fromAminoMsg(object: _149.ParamsAminoMsg): _149.Params;
                toAminoMsg(message: _149.Params): _149.ParamsAminoMsg;
                fromProtoMsg(message: _149.ParamsProtoMsg): _149.Params;
                toProto(message: _149.Params): Uint8Array;
                toProtoMsg(message: _149.Params): _149.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _149.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.CodeInfo;
                fromPartial(object: Partial<_149.CodeInfo>): _149.CodeInfo;
                fromAmino(object: _149.CodeInfoAmino): _149.CodeInfo;
                toAmino(message: _149.CodeInfo): _149.CodeInfoAmino;
                fromAminoMsg(object: _149.CodeInfoAminoMsg): _149.CodeInfo;
                toAminoMsg(message: _149.CodeInfo): _149.CodeInfoAminoMsg;
                fromProtoMsg(message: _149.CodeInfoProtoMsg): _149.CodeInfo;
                toProto(message: _149.CodeInfo): Uint8Array;
                toProtoMsg(message: _149.CodeInfo): _149.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _149.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.ContractInfo;
                fromPartial(object: Partial<_149.ContractInfo>): _149.ContractInfo;
                fromAmino(object: _149.ContractInfoAmino): _149.ContractInfo;
                toAmino(message: _149.ContractInfo): _149.ContractInfoAmino;
                fromAminoMsg(object: _149.ContractInfoAminoMsg): _149.ContractInfo;
                toAminoMsg(message: _149.ContractInfo): _149.ContractInfoAminoMsg;
                fromProtoMsg(message: _149.ContractInfoProtoMsg): _149.ContractInfo;
                toProto(message: _149.ContractInfo): Uint8Array;
                toProtoMsg(message: _149.ContractInfo): _149.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _149.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_149.ContractCodeHistoryEntry>): _149.ContractCodeHistoryEntry;
                fromAmino(object: _149.ContractCodeHistoryEntryAmino): _149.ContractCodeHistoryEntry;
                toAmino(message: _149.ContractCodeHistoryEntry): _149.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _149.ContractCodeHistoryEntryAminoMsg): _149.ContractCodeHistoryEntry;
                toAminoMsg(message: _149.ContractCodeHistoryEntry): _149.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _149.ContractCodeHistoryEntryProtoMsg): _149.ContractCodeHistoryEntry;
                toProto(message: _149.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _149.ContractCodeHistoryEntry): _149.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _149.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.AbsoluteTxPosition;
                fromPartial(object: Partial<_149.AbsoluteTxPosition>): _149.AbsoluteTxPosition;
                fromAmino(object: _149.AbsoluteTxPositionAmino): _149.AbsoluteTxPosition;
                toAmino(message: _149.AbsoluteTxPosition): _149.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _149.AbsoluteTxPositionAminoMsg): _149.AbsoluteTxPosition;
                toAminoMsg(message: _149.AbsoluteTxPosition): _149.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _149.AbsoluteTxPositionProtoMsg): _149.AbsoluteTxPosition;
                toProto(message: _149.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _149.AbsoluteTxPosition): _149.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _149.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.Model;
                fromPartial(object: Partial<_149.Model>): _149.Model;
                fromAmino(object: _149.ModelAmino): _149.Model;
                toAmino(message: _149.Model): _149.ModelAmino;
                fromAminoMsg(object: _149.ModelAminoMsg): _149.Model;
                toAminoMsg(message: _149.Model): _149.ModelAminoMsg;
                fromProtoMsg(message: _149.ModelProtoMsg): _149.Model;
                toProto(message: _149.Model): Uint8Array;
                toProtoMsg(message: _149.Model): _149.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _148.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgStoreCode;
                fromPartial(object: Partial<_148.MsgStoreCode>): _148.MsgStoreCode;
                fromAmino(object: _148.MsgStoreCodeAmino): _148.MsgStoreCode;
                toAmino(message: _148.MsgStoreCode): _148.MsgStoreCodeAmino;
                fromAminoMsg(object: _148.MsgStoreCodeAminoMsg): _148.MsgStoreCode;
                toAminoMsg(message: _148.MsgStoreCode): _148.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _148.MsgStoreCodeProtoMsg): _148.MsgStoreCode;
                toProto(message: _148.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _148.MsgStoreCode): _148.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _148.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgStoreCodeResponse;
                fromPartial(object: Partial<_148.MsgStoreCodeResponse>): _148.MsgStoreCodeResponse;
                fromAmino(object: _148.MsgStoreCodeResponseAmino): _148.MsgStoreCodeResponse;
                toAmino(message: _148.MsgStoreCodeResponse): _148.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _148.MsgStoreCodeResponseAminoMsg): _148.MsgStoreCodeResponse;
                toAminoMsg(message: _148.MsgStoreCodeResponse): _148.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _148.MsgStoreCodeResponseProtoMsg): _148.MsgStoreCodeResponse;
                toProto(message: _148.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _148.MsgStoreCodeResponse): _148.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _148.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgInstantiateContract;
                fromPartial(object: Partial<_148.MsgInstantiateContract>): _148.MsgInstantiateContract;
                fromAmino(object: _148.MsgInstantiateContractAmino): _148.MsgInstantiateContract;
                toAmino(message: _148.MsgInstantiateContract): _148.MsgInstantiateContractAmino;
                fromAminoMsg(object: _148.MsgInstantiateContractAminoMsg): _148.MsgInstantiateContract;
                toAminoMsg(message: _148.MsgInstantiateContract): _148.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _148.MsgInstantiateContractProtoMsg): _148.MsgInstantiateContract;
                toProto(message: _148.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _148.MsgInstantiateContract): _148.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _148.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgInstantiateContract2;
                fromPartial(object: Partial<_148.MsgInstantiateContract2>): _148.MsgInstantiateContract2;
                fromAmino(object: _148.MsgInstantiateContract2Amino): _148.MsgInstantiateContract2;
                toAmino(message: _148.MsgInstantiateContract2): _148.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _148.MsgInstantiateContract2AminoMsg): _148.MsgInstantiateContract2;
                toAminoMsg(message: _148.MsgInstantiateContract2): _148.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _148.MsgInstantiateContract2ProtoMsg): _148.MsgInstantiateContract2;
                toProto(message: _148.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _148.MsgInstantiateContract2): _148.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _148.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_148.MsgInstantiateContractResponse>): _148.MsgInstantiateContractResponse;
                fromAmino(object: _148.MsgInstantiateContractResponseAmino): _148.MsgInstantiateContractResponse;
                toAmino(message: _148.MsgInstantiateContractResponse): _148.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _148.MsgInstantiateContractResponseAminoMsg): _148.MsgInstantiateContractResponse;
                toAminoMsg(message: _148.MsgInstantiateContractResponse): _148.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _148.MsgInstantiateContractResponseProtoMsg): _148.MsgInstantiateContractResponse;
                toProto(message: _148.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _148.MsgInstantiateContractResponse): _148.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _148.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_148.MsgInstantiateContract2Response>): _148.MsgInstantiateContract2Response;
                fromAmino(object: _148.MsgInstantiateContract2ResponseAmino): _148.MsgInstantiateContract2Response;
                toAmino(message: _148.MsgInstantiateContract2Response): _148.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _148.MsgInstantiateContract2ResponseAminoMsg): _148.MsgInstantiateContract2Response;
                toAminoMsg(message: _148.MsgInstantiateContract2Response): _148.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _148.MsgInstantiateContract2ResponseProtoMsg): _148.MsgInstantiateContract2Response;
                toProto(message: _148.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _148.MsgInstantiateContract2Response): _148.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _148.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgExecuteContract;
                fromPartial(object: Partial<_148.MsgExecuteContract>): _148.MsgExecuteContract;
                fromAmino(object: _148.MsgExecuteContractAmino): _148.MsgExecuteContract;
                toAmino(message: _148.MsgExecuteContract): _148.MsgExecuteContractAmino;
                fromAminoMsg(object: _148.MsgExecuteContractAminoMsg): _148.MsgExecuteContract;
                toAminoMsg(message: _148.MsgExecuteContract): _148.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _148.MsgExecuteContractProtoMsg): _148.MsgExecuteContract;
                toProto(message: _148.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _148.MsgExecuteContract): _148.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _148.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgExecuteContractResponse;
                fromPartial(object: Partial<_148.MsgExecuteContractResponse>): _148.MsgExecuteContractResponse;
                fromAmino(object: _148.MsgExecuteContractResponseAmino): _148.MsgExecuteContractResponse;
                toAmino(message: _148.MsgExecuteContractResponse): _148.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _148.MsgExecuteContractResponseAminoMsg): _148.MsgExecuteContractResponse;
                toAminoMsg(message: _148.MsgExecuteContractResponse): _148.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _148.MsgExecuteContractResponseProtoMsg): _148.MsgExecuteContractResponse;
                toProto(message: _148.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _148.MsgExecuteContractResponse): _148.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _148.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgMigrateContract;
                fromPartial(object: Partial<_148.MsgMigrateContract>): _148.MsgMigrateContract;
                fromAmino(object: _148.MsgMigrateContractAmino): _148.MsgMigrateContract;
                toAmino(message: _148.MsgMigrateContract): _148.MsgMigrateContractAmino;
                fromAminoMsg(object: _148.MsgMigrateContractAminoMsg): _148.MsgMigrateContract;
                toAminoMsg(message: _148.MsgMigrateContract): _148.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _148.MsgMigrateContractProtoMsg): _148.MsgMigrateContract;
                toProto(message: _148.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _148.MsgMigrateContract): _148.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _148.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgMigrateContractResponse;
                fromPartial(object: Partial<_148.MsgMigrateContractResponse>): _148.MsgMigrateContractResponse;
                fromAmino(object: _148.MsgMigrateContractResponseAmino): _148.MsgMigrateContractResponse;
                toAmino(message: _148.MsgMigrateContractResponse): _148.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _148.MsgMigrateContractResponseAminoMsg): _148.MsgMigrateContractResponse;
                toAminoMsg(message: _148.MsgMigrateContractResponse): _148.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _148.MsgMigrateContractResponseProtoMsg): _148.MsgMigrateContractResponse;
                toProto(message: _148.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _148.MsgMigrateContractResponse): _148.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _148.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgUpdateAdmin;
                fromPartial(object: Partial<_148.MsgUpdateAdmin>): _148.MsgUpdateAdmin;
                fromAmino(object: _148.MsgUpdateAdminAmino): _148.MsgUpdateAdmin;
                toAmino(message: _148.MsgUpdateAdmin): _148.MsgUpdateAdminAmino;
                fromAminoMsg(object: _148.MsgUpdateAdminAminoMsg): _148.MsgUpdateAdmin;
                toAminoMsg(message: _148.MsgUpdateAdmin): _148.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _148.MsgUpdateAdminProtoMsg): _148.MsgUpdateAdmin;
                toProto(message: _148.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _148.MsgUpdateAdmin): _148.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _148.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _148.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_148.MsgUpdateAdminResponse>): _148.MsgUpdateAdminResponse;
                fromAmino(_: _148.MsgUpdateAdminResponseAmino): _148.MsgUpdateAdminResponse;
                toAmino(_: _148.MsgUpdateAdminResponse): _148.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _148.MsgUpdateAdminResponseAminoMsg): _148.MsgUpdateAdminResponse;
                toAminoMsg(message: _148.MsgUpdateAdminResponse): _148.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _148.MsgUpdateAdminResponseProtoMsg): _148.MsgUpdateAdminResponse;
                toProto(message: _148.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _148.MsgUpdateAdminResponse): _148.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _148.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgClearAdmin;
                fromPartial(object: Partial<_148.MsgClearAdmin>): _148.MsgClearAdmin;
                fromAmino(object: _148.MsgClearAdminAmino): _148.MsgClearAdmin;
                toAmino(message: _148.MsgClearAdmin): _148.MsgClearAdminAmino;
                fromAminoMsg(object: _148.MsgClearAdminAminoMsg): _148.MsgClearAdmin;
                toAminoMsg(message: _148.MsgClearAdmin): _148.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _148.MsgClearAdminProtoMsg): _148.MsgClearAdmin;
                toProto(message: _148.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _148.MsgClearAdmin): _148.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _148.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _148.MsgClearAdminResponse;
                fromPartial(_: Partial<_148.MsgClearAdminResponse>): _148.MsgClearAdminResponse;
                fromAmino(_: _148.MsgClearAdminResponseAmino): _148.MsgClearAdminResponse;
                toAmino(_: _148.MsgClearAdminResponse): _148.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _148.MsgClearAdminResponseAminoMsg): _148.MsgClearAdminResponse;
                toAminoMsg(message: _148.MsgClearAdminResponse): _148.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _148.MsgClearAdminResponseProtoMsg): _148.MsgClearAdminResponse;
                toProto(message: _148.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _148.MsgClearAdminResponse): _148.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _148.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_148.MsgUpdateInstantiateConfig>): _148.MsgUpdateInstantiateConfig;
                fromAmino(object: _148.MsgUpdateInstantiateConfigAmino): _148.MsgUpdateInstantiateConfig;
                toAmino(message: _148.MsgUpdateInstantiateConfig): _148.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _148.MsgUpdateInstantiateConfigAminoMsg): _148.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _148.MsgUpdateInstantiateConfig): _148.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _148.MsgUpdateInstantiateConfigProtoMsg): _148.MsgUpdateInstantiateConfig;
                toProto(message: _148.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _148.MsgUpdateInstantiateConfig): _148.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _148.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _148.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_148.MsgUpdateInstantiateConfigResponse>): _148.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _148.MsgUpdateInstantiateConfigResponseAmino): _148.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _148.MsgUpdateInstantiateConfigResponse): _148.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _148.MsgUpdateInstantiateConfigResponseAminoMsg): _148.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _148.MsgUpdateInstantiateConfigResponse): _148.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _148.MsgUpdateInstantiateConfigResponseProtoMsg): _148.MsgUpdateInstantiateConfigResponse;
                toProto(message: _148.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _148.MsgUpdateInstantiateConfigResponse): _148.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _147.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractInfoRequest;
                fromPartial(object: Partial<_147.QueryContractInfoRequest>): _147.QueryContractInfoRequest;
                fromAmino(object: _147.QueryContractInfoRequestAmino): _147.QueryContractInfoRequest;
                toAmino(message: _147.QueryContractInfoRequest): _147.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _147.QueryContractInfoRequestAminoMsg): _147.QueryContractInfoRequest;
                toAminoMsg(message: _147.QueryContractInfoRequest): _147.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _147.QueryContractInfoRequestProtoMsg): _147.QueryContractInfoRequest;
                toProto(message: _147.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _147.QueryContractInfoRequest): _147.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _147.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractInfoResponse;
                fromPartial(object: Partial<_147.QueryContractInfoResponse>): _147.QueryContractInfoResponse;
                fromAmino(object: _147.QueryContractInfoResponseAmino): _147.QueryContractInfoResponse;
                toAmino(message: _147.QueryContractInfoResponse): _147.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _147.QueryContractInfoResponseAminoMsg): _147.QueryContractInfoResponse;
                toAminoMsg(message: _147.QueryContractInfoResponse): _147.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _147.QueryContractInfoResponseProtoMsg): _147.QueryContractInfoResponse;
                toProto(message: _147.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _147.QueryContractInfoResponse): _147.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _147.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractHistoryRequest;
                fromPartial(object: Partial<_147.QueryContractHistoryRequest>): _147.QueryContractHistoryRequest;
                fromAmino(object: _147.QueryContractHistoryRequestAmino): _147.QueryContractHistoryRequest;
                toAmino(message: _147.QueryContractHistoryRequest): _147.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _147.QueryContractHistoryRequestAminoMsg): _147.QueryContractHistoryRequest;
                toAminoMsg(message: _147.QueryContractHistoryRequest): _147.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _147.QueryContractHistoryRequestProtoMsg): _147.QueryContractHistoryRequest;
                toProto(message: _147.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _147.QueryContractHistoryRequest): _147.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _147.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractHistoryResponse;
                fromPartial(object: Partial<_147.QueryContractHistoryResponse>): _147.QueryContractHistoryResponse;
                fromAmino(object: _147.QueryContractHistoryResponseAmino): _147.QueryContractHistoryResponse;
                toAmino(message: _147.QueryContractHistoryResponse): _147.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _147.QueryContractHistoryResponseAminoMsg): _147.QueryContractHistoryResponse;
                toAminoMsg(message: _147.QueryContractHistoryResponse): _147.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _147.QueryContractHistoryResponseProtoMsg): _147.QueryContractHistoryResponse;
                toProto(message: _147.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _147.QueryContractHistoryResponse): _147.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _147.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_147.QueryContractsByCodeRequest>): _147.QueryContractsByCodeRequest;
                fromAmino(object: _147.QueryContractsByCodeRequestAmino): _147.QueryContractsByCodeRequest;
                toAmino(message: _147.QueryContractsByCodeRequest): _147.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _147.QueryContractsByCodeRequestAminoMsg): _147.QueryContractsByCodeRequest;
                toAminoMsg(message: _147.QueryContractsByCodeRequest): _147.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _147.QueryContractsByCodeRequestProtoMsg): _147.QueryContractsByCodeRequest;
                toProto(message: _147.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _147.QueryContractsByCodeRequest): _147.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _147.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_147.QueryContractsByCodeResponse>): _147.QueryContractsByCodeResponse;
                fromAmino(object: _147.QueryContractsByCodeResponseAmino): _147.QueryContractsByCodeResponse;
                toAmino(message: _147.QueryContractsByCodeResponse): _147.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _147.QueryContractsByCodeResponseAminoMsg): _147.QueryContractsByCodeResponse;
                toAminoMsg(message: _147.QueryContractsByCodeResponse): _147.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _147.QueryContractsByCodeResponseProtoMsg): _147.QueryContractsByCodeResponse;
                toProto(message: _147.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _147.QueryContractsByCodeResponse): _147.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _147.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryAllContractStateRequest;
                fromPartial(object: Partial<_147.QueryAllContractStateRequest>): _147.QueryAllContractStateRequest;
                fromAmino(object: _147.QueryAllContractStateRequestAmino): _147.QueryAllContractStateRequest;
                toAmino(message: _147.QueryAllContractStateRequest): _147.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _147.QueryAllContractStateRequestAminoMsg): _147.QueryAllContractStateRequest;
                toAminoMsg(message: _147.QueryAllContractStateRequest): _147.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _147.QueryAllContractStateRequestProtoMsg): _147.QueryAllContractStateRequest;
                toProto(message: _147.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _147.QueryAllContractStateRequest): _147.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _147.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryAllContractStateResponse;
                fromPartial(object: Partial<_147.QueryAllContractStateResponse>): _147.QueryAllContractStateResponse;
                fromAmino(object: _147.QueryAllContractStateResponseAmino): _147.QueryAllContractStateResponse;
                toAmino(message: _147.QueryAllContractStateResponse): _147.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _147.QueryAllContractStateResponseAminoMsg): _147.QueryAllContractStateResponse;
                toAminoMsg(message: _147.QueryAllContractStateResponse): _147.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _147.QueryAllContractStateResponseProtoMsg): _147.QueryAllContractStateResponse;
                toProto(message: _147.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _147.QueryAllContractStateResponse): _147.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _147.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryRawContractStateRequest;
                fromPartial(object: Partial<_147.QueryRawContractStateRequest>): _147.QueryRawContractStateRequest;
                fromAmino(object: _147.QueryRawContractStateRequestAmino): _147.QueryRawContractStateRequest;
                toAmino(message: _147.QueryRawContractStateRequest): _147.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _147.QueryRawContractStateRequestAminoMsg): _147.QueryRawContractStateRequest;
                toAminoMsg(message: _147.QueryRawContractStateRequest): _147.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _147.QueryRawContractStateRequestProtoMsg): _147.QueryRawContractStateRequest;
                toProto(message: _147.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _147.QueryRawContractStateRequest): _147.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _147.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryRawContractStateResponse;
                fromPartial(object: Partial<_147.QueryRawContractStateResponse>): _147.QueryRawContractStateResponse;
                fromAmino(object: _147.QueryRawContractStateResponseAmino): _147.QueryRawContractStateResponse;
                toAmino(message: _147.QueryRawContractStateResponse): _147.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _147.QueryRawContractStateResponseAminoMsg): _147.QueryRawContractStateResponse;
                toAminoMsg(message: _147.QueryRawContractStateResponse): _147.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _147.QueryRawContractStateResponseProtoMsg): _147.QueryRawContractStateResponse;
                toProto(message: _147.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _147.QueryRawContractStateResponse): _147.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _147.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_147.QuerySmartContractStateRequest>): _147.QuerySmartContractStateRequest;
                fromAmino(object: _147.QuerySmartContractStateRequestAmino): _147.QuerySmartContractStateRequest;
                toAmino(message: _147.QuerySmartContractStateRequest): _147.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _147.QuerySmartContractStateRequestAminoMsg): _147.QuerySmartContractStateRequest;
                toAminoMsg(message: _147.QuerySmartContractStateRequest): _147.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _147.QuerySmartContractStateRequestProtoMsg): _147.QuerySmartContractStateRequest;
                toProto(message: _147.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _147.QuerySmartContractStateRequest): _147.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _147.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_147.QuerySmartContractStateResponse>): _147.QuerySmartContractStateResponse;
                fromAmino(object: _147.QuerySmartContractStateResponseAmino): _147.QuerySmartContractStateResponse;
                toAmino(message: _147.QuerySmartContractStateResponse): _147.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _147.QuerySmartContractStateResponseAminoMsg): _147.QuerySmartContractStateResponse;
                toAminoMsg(message: _147.QuerySmartContractStateResponse): _147.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _147.QuerySmartContractStateResponseProtoMsg): _147.QuerySmartContractStateResponse;
                toProto(message: _147.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _147.QuerySmartContractStateResponse): _147.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _147.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryCodeRequest;
                fromPartial(object: Partial<_147.QueryCodeRequest>): _147.QueryCodeRequest;
                fromAmino(object: _147.QueryCodeRequestAmino): _147.QueryCodeRequest;
                toAmino(message: _147.QueryCodeRequest): _147.QueryCodeRequestAmino;
                fromAminoMsg(object: _147.QueryCodeRequestAminoMsg): _147.QueryCodeRequest;
                toAminoMsg(message: _147.QueryCodeRequest): _147.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _147.QueryCodeRequestProtoMsg): _147.QueryCodeRequest;
                toProto(message: _147.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _147.QueryCodeRequest): _147.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _147.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.CodeInfoResponse;
                fromPartial(object: Partial<_147.CodeInfoResponse>): _147.CodeInfoResponse;
                fromAmino(object: _147.CodeInfoResponseAmino): _147.CodeInfoResponse;
                toAmino(message: _147.CodeInfoResponse): _147.CodeInfoResponseAmino;
                fromAminoMsg(object: _147.CodeInfoResponseAminoMsg): _147.CodeInfoResponse;
                toAminoMsg(message: _147.CodeInfoResponse): _147.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _147.CodeInfoResponseProtoMsg): _147.CodeInfoResponse;
                toProto(message: _147.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _147.CodeInfoResponse): _147.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _147.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryCodeResponse;
                fromPartial(object: Partial<_147.QueryCodeResponse>): _147.QueryCodeResponse;
                fromAmino(object: _147.QueryCodeResponseAmino): _147.QueryCodeResponse;
                toAmino(message: _147.QueryCodeResponse): _147.QueryCodeResponseAmino;
                fromAminoMsg(object: _147.QueryCodeResponseAminoMsg): _147.QueryCodeResponse;
                toAminoMsg(message: _147.QueryCodeResponse): _147.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _147.QueryCodeResponseProtoMsg): _147.QueryCodeResponse;
                toProto(message: _147.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _147.QueryCodeResponse): _147.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _147.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryCodesRequest;
                fromPartial(object: Partial<_147.QueryCodesRequest>): _147.QueryCodesRequest;
                fromAmino(object: _147.QueryCodesRequestAmino): _147.QueryCodesRequest;
                toAmino(message: _147.QueryCodesRequest): _147.QueryCodesRequestAmino;
                fromAminoMsg(object: _147.QueryCodesRequestAminoMsg): _147.QueryCodesRequest;
                toAminoMsg(message: _147.QueryCodesRequest): _147.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _147.QueryCodesRequestProtoMsg): _147.QueryCodesRequest;
                toProto(message: _147.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _147.QueryCodesRequest): _147.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _147.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryCodesResponse;
                fromPartial(object: Partial<_147.QueryCodesResponse>): _147.QueryCodesResponse;
                fromAmino(object: _147.QueryCodesResponseAmino): _147.QueryCodesResponse;
                toAmino(message: _147.QueryCodesResponse): _147.QueryCodesResponseAmino;
                fromAminoMsg(object: _147.QueryCodesResponseAminoMsg): _147.QueryCodesResponse;
                toAminoMsg(message: _147.QueryCodesResponse): _147.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _147.QueryCodesResponseProtoMsg): _147.QueryCodesResponse;
                toProto(message: _147.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _147.QueryCodesResponse): _147.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _147.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_147.QueryPinnedCodesRequest>): _147.QueryPinnedCodesRequest;
                fromAmino(object: _147.QueryPinnedCodesRequestAmino): _147.QueryPinnedCodesRequest;
                toAmino(message: _147.QueryPinnedCodesRequest): _147.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _147.QueryPinnedCodesRequestAminoMsg): _147.QueryPinnedCodesRequest;
                toAminoMsg(message: _147.QueryPinnedCodesRequest): _147.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _147.QueryPinnedCodesRequestProtoMsg): _147.QueryPinnedCodesRequest;
                toProto(message: _147.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _147.QueryPinnedCodesRequest): _147.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _147.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_147.QueryPinnedCodesResponse>): _147.QueryPinnedCodesResponse;
                fromAmino(object: _147.QueryPinnedCodesResponseAmino): _147.QueryPinnedCodesResponse;
                toAmino(message: _147.QueryPinnedCodesResponse): _147.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _147.QueryPinnedCodesResponseAminoMsg): _147.QueryPinnedCodesResponse;
                toAminoMsg(message: _147.QueryPinnedCodesResponse): _147.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _147.QueryPinnedCodesResponseProtoMsg): _147.QueryPinnedCodesResponse;
                toProto(message: _147.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _147.QueryPinnedCodesResponse): _147.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _147.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _147.QueryParamsRequest;
                fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
                fromAmino(_: _147.QueryParamsRequestAmino): _147.QueryParamsRequest;
                toAmino(_: _147.QueryParamsRequest): _147.QueryParamsRequestAmino;
                fromAminoMsg(object: _147.QueryParamsRequestAminoMsg): _147.QueryParamsRequest;
                toAminoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _147.QueryParamsRequestProtoMsg): _147.QueryParamsRequest;
                toProto(message: _147.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _147.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryParamsResponse;
                fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
                fromAmino(object: _147.QueryParamsResponseAmino): _147.QueryParamsResponse;
                toAmino(message: _147.QueryParamsResponse): _147.QueryParamsResponseAmino;
                fromAminoMsg(object: _147.QueryParamsResponseAminoMsg): _147.QueryParamsResponse;
                toAminoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _147.QueryParamsResponseProtoMsg): _147.QueryParamsResponse;
                toProto(message: _147.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _147.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_147.QueryContractsByCreatorRequest>): _147.QueryContractsByCreatorRequest;
                fromAmino(object: _147.QueryContractsByCreatorRequestAmino): _147.QueryContractsByCreatorRequest;
                toAmino(message: _147.QueryContractsByCreatorRequest): _147.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _147.QueryContractsByCreatorRequestAminoMsg): _147.QueryContractsByCreatorRequest;
                toAminoMsg(message: _147.QueryContractsByCreatorRequest): _147.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _147.QueryContractsByCreatorRequestProtoMsg): _147.QueryContractsByCreatorRequest;
                toProto(message: _147.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _147.QueryContractsByCreatorRequest): _147.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _147.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_147.QueryContractsByCreatorResponse>): _147.QueryContractsByCreatorResponse;
                fromAmino(object: _147.QueryContractsByCreatorResponseAmino): _147.QueryContractsByCreatorResponse;
                toAmino(message: _147.QueryContractsByCreatorResponse): _147.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _147.QueryContractsByCreatorResponseAminoMsg): _147.QueryContractsByCreatorResponse;
                toAminoMsg(message: _147.QueryContractsByCreatorResponse): _147.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _147.QueryContractsByCreatorResponseProtoMsg): _147.QueryContractsByCreatorResponse;
                toProto(message: _147.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _147.QueryContractsByCreatorResponse): _147.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _146.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.StoreCodeProposal;
                fromPartial(object: Partial<_146.StoreCodeProposal>): _146.StoreCodeProposal;
                fromAmino(object: _146.StoreCodeProposalAmino): _146.StoreCodeProposal;
                toAmino(message: _146.StoreCodeProposal): _146.StoreCodeProposalAmino;
                fromAminoMsg(object: _146.StoreCodeProposalAminoMsg): _146.StoreCodeProposal;
                toAminoMsg(message: _146.StoreCodeProposal): _146.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _146.StoreCodeProposalProtoMsg): _146.StoreCodeProposal;
                toProto(message: _146.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _146.StoreCodeProposal): _146.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _146.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.InstantiateContractProposal;
                fromPartial(object: Partial<_146.InstantiateContractProposal>): _146.InstantiateContractProposal;
                fromAmino(object: _146.InstantiateContractProposalAmino): _146.InstantiateContractProposal;
                toAmino(message: _146.InstantiateContractProposal): _146.InstantiateContractProposalAmino;
                fromAminoMsg(object: _146.InstantiateContractProposalAminoMsg): _146.InstantiateContractProposal;
                toAminoMsg(message: _146.InstantiateContractProposal): _146.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _146.InstantiateContractProposalProtoMsg): _146.InstantiateContractProposal;
                toProto(message: _146.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _146.InstantiateContractProposal): _146.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _146.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.InstantiateContract2Proposal;
                fromPartial(object: Partial<_146.InstantiateContract2Proposal>): _146.InstantiateContract2Proposal;
                fromAmino(object: _146.InstantiateContract2ProposalAmino): _146.InstantiateContract2Proposal;
                toAmino(message: _146.InstantiateContract2Proposal): _146.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _146.InstantiateContract2ProposalAminoMsg): _146.InstantiateContract2Proposal;
                toAminoMsg(message: _146.InstantiateContract2Proposal): _146.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _146.InstantiateContract2ProposalProtoMsg): _146.InstantiateContract2Proposal;
                toProto(message: _146.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _146.InstantiateContract2Proposal): _146.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _146.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MigrateContractProposal;
                fromPartial(object: Partial<_146.MigrateContractProposal>): _146.MigrateContractProposal;
                fromAmino(object: _146.MigrateContractProposalAmino): _146.MigrateContractProposal;
                toAmino(message: _146.MigrateContractProposal): _146.MigrateContractProposalAmino;
                fromAminoMsg(object: _146.MigrateContractProposalAminoMsg): _146.MigrateContractProposal;
                toAminoMsg(message: _146.MigrateContractProposal): _146.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _146.MigrateContractProposalProtoMsg): _146.MigrateContractProposal;
                toProto(message: _146.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _146.MigrateContractProposal): _146.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _146.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.SudoContractProposal;
                fromPartial(object: Partial<_146.SudoContractProposal>): _146.SudoContractProposal;
                fromAmino(object: _146.SudoContractProposalAmino): _146.SudoContractProposal;
                toAmino(message: _146.SudoContractProposal): _146.SudoContractProposalAmino;
                fromAminoMsg(object: _146.SudoContractProposalAminoMsg): _146.SudoContractProposal;
                toAminoMsg(message: _146.SudoContractProposal): _146.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _146.SudoContractProposalProtoMsg): _146.SudoContractProposal;
                toProto(message: _146.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _146.SudoContractProposal): _146.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _146.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.ExecuteContractProposal;
                fromPartial(object: Partial<_146.ExecuteContractProposal>): _146.ExecuteContractProposal;
                fromAmino(object: _146.ExecuteContractProposalAmino): _146.ExecuteContractProposal;
                toAmino(message: _146.ExecuteContractProposal): _146.ExecuteContractProposalAmino;
                fromAminoMsg(object: _146.ExecuteContractProposalAminoMsg): _146.ExecuteContractProposal;
                toAminoMsg(message: _146.ExecuteContractProposal): _146.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _146.ExecuteContractProposalProtoMsg): _146.ExecuteContractProposal;
                toProto(message: _146.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _146.ExecuteContractProposal): _146.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _146.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.UpdateAdminProposal;
                fromPartial(object: Partial<_146.UpdateAdminProposal>): _146.UpdateAdminProposal;
                fromAmino(object: _146.UpdateAdminProposalAmino): _146.UpdateAdminProposal;
                toAmino(message: _146.UpdateAdminProposal): _146.UpdateAdminProposalAmino;
                fromAminoMsg(object: _146.UpdateAdminProposalAminoMsg): _146.UpdateAdminProposal;
                toAminoMsg(message: _146.UpdateAdminProposal): _146.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _146.UpdateAdminProposalProtoMsg): _146.UpdateAdminProposal;
                toProto(message: _146.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _146.UpdateAdminProposal): _146.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _146.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.ClearAdminProposal;
                fromPartial(object: Partial<_146.ClearAdminProposal>): _146.ClearAdminProposal;
                fromAmino(object: _146.ClearAdminProposalAmino): _146.ClearAdminProposal;
                toAmino(message: _146.ClearAdminProposal): _146.ClearAdminProposalAmino;
                fromAminoMsg(object: _146.ClearAdminProposalAminoMsg): _146.ClearAdminProposal;
                toAminoMsg(message: _146.ClearAdminProposal): _146.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _146.ClearAdminProposalProtoMsg): _146.ClearAdminProposal;
                toProto(message: _146.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _146.ClearAdminProposal): _146.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _146.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.PinCodesProposal;
                fromPartial(object: Partial<_146.PinCodesProposal>): _146.PinCodesProposal;
                fromAmino(object: _146.PinCodesProposalAmino): _146.PinCodesProposal;
                toAmino(message: _146.PinCodesProposal): _146.PinCodesProposalAmino;
                fromAminoMsg(object: _146.PinCodesProposalAminoMsg): _146.PinCodesProposal;
                toAminoMsg(message: _146.PinCodesProposal): _146.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _146.PinCodesProposalProtoMsg): _146.PinCodesProposal;
                toProto(message: _146.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _146.PinCodesProposal): _146.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _146.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.UnpinCodesProposal;
                fromPartial(object: Partial<_146.UnpinCodesProposal>): _146.UnpinCodesProposal;
                fromAmino(object: _146.UnpinCodesProposalAmino): _146.UnpinCodesProposal;
                toAmino(message: _146.UnpinCodesProposal): _146.UnpinCodesProposalAmino;
                fromAminoMsg(object: _146.UnpinCodesProposalAminoMsg): _146.UnpinCodesProposal;
                toAminoMsg(message: _146.UnpinCodesProposal): _146.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _146.UnpinCodesProposalProtoMsg): _146.UnpinCodesProposal;
                toProto(message: _146.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _146.UnpinCodesProposal): _146.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _146.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.AccessConfigUpdate;
                fromPartial(object: Partial<_146.AccessConfigUpdate>): _146.AccessConfigUpdate;
                fromAmino(object: _146.AccessConfigUpdateAmino): _146.AccessConfigUpdate;
                toAmino(message: _146.AccessConfigUpdate): _146.AccessConfigUpdateAmino;
                fromAminoMsg(object: _146.AccessConfigUpdateAminoMsg): _146.AccessConfigUpdate;
                toAminoMsg(message: _146.AccessConfigUpdate): _146.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _146.AccessConfigUpdateProtoMsg): _146.AccessConfigUpdate;
                toProto(message: _146.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _146.AccessConfigUpdate): _146.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _146.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_146.UpdateInstantiateConfigProposal>): _146.UpdateInstantiateConfigProposal;
                fromAmino(object: _146.UpdateInstantiateConfigProposalAmino): _146.UpdateInstantiateConfigProposal;
                toAmino(message: _146.UpdateInstantiateConfigProposal): _146.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _146.UpdateInstantiateConfigProposalAminoMsg): _146.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _146.UpdateInstantiateConfigProposal): _146.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _146.UpdateInstantiateConfigProposalProtoMsg): _146.UpdateInstantiateConfigProposal;
                toProto(message: _146.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _146.UpdateInstantiateConfigProposal): _146.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _146.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_146.StoreAndInstantiateContractProposal>): _146.StoreAndInstantiateContractProposal;
                fromAmino(object: _146.StoreAndInstantiateContractProposalAmino): _146.StoreAndInstantiateContractProposal;
                toAmino(message: _146.StoreAndInstantiateContractProposal): _146.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _146.StoreAndInstantiateContractProposalAminoMsg): _146.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _146.StoreAndInstantiateContractProposal): _146.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _146.StoreAndInstantiateContractProposalProtoMsg): _146.StoreAndInstantiateContractProposal;
                toProto(message: _146.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _146.StoreAndInstantiateContractProposal): _146.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _145.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgIBCSend;
                fromPartial(object: Partial<_145.MsgIBCSend>): _145.MsgIBCSend;
                fromAmino(object: _145.MsgIBCSendAmino): _145.MsgIBCSend;
                toAmino(message: _145.MsgIBCSend): _145.MsgIBCSendAmino;
                fromAminoMsg(object: _145.MsgIBCSendAminoMsg): _145.MsgIBCSend;
                toAminoMsg(message: _145.MsgIBCSend): _145.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _145.MsgIBCSendProtoMsg): _145.MsgIBCSend;
                toProto(message: _145.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _145.MsgIBCSend): _145.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _145.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgIBCSendResponse;
                fromPartial(object: Partial<_145.MsgIBCSendResponse>): _145.MsgIBCSendResponse;
                fromAmino(object: _145.MsgIBCSendResponseAmino): _145.MsgIBCSendResponse;
                toAmino(message: _145.MsgIBCSendResponse): _145.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _145.MsgIBCSendResponseAminoMsg): _145.MsgIBCSendResponse;
                toAminoMsg(message: _145.MsgIBCSendResponse): _145.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _145.MsgIBCSendResponseProtoMsg): _145.MsgIBCSendResponse;
                toProto(message: _145.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _145.MsgIBCSendResponse): _145.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _145.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.MsgIBCCloseChannel;
                fromPartial(object: Partial<_145.MsgIBCCloseChannel>): _145.MsgIBCCloseChannel;
                fromAmino(object: _145.MsgIBCCloseChannelAmino): _145.MsgIBCCloseChannel;
                toAmino(message: _145.MsgIBCCloseChannel): _145.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _145.MsgIBCCloseChannelAminoMsg): _145.MsgIBCCloseChannel;
                toAminoMsg(message: _145.MsgIBCCloseChannel): _145.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _145.MsgIBCCloseChannelProtoMsg): _145.MsgIBCCloseChannel;
                toProto(message: _145.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _145.MsgIBCCloseChannel): _145.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _144.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.GenesisState;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
                fromAmino(object: _144.GenesisStateAmino): _144.GenesisState;
                toAmino(message: _144.GenesisState): _144.GenesisStateAmino;
                fromAminoMsg(object: _144.GenesisStateAminoMsg): _144.GenesisState;
                toAminoMsg(message: _144.GenesisState): _144.GenesisStateAminoMsg;
                fromProtoMsg(message: _144.GenesisStateProtoMsg): _144.GenesisState;
                toProto(message: _144.GenesisState): Uint8Array;
                toProtoMsg(message: _144.GenesisState): _144.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _144.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.Code;
                fromPartial(object: Partial<_144.Code>): _144.Code;
                fromAmino(object: _144.CodeAmino): _144.Code;
                toAmino(message: _144.Code): _144.CodeAmino;
                fromAminoMsg(object: _144.CodeAminoMsg): _144.Code;
                toAminoMsg(message: _144.Code): _144.CodeAminoMsg;
                fromProtoMsg(message: _144.CodeProtoMsg): _144.Code;
                toProto(message: _144.Code): Uint8Array;
                toProtoMsg(message: _144.Code): _144.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _144.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.Contract;
                fromPartial(object: Partial<_144.Contract>): _144.Contract;
                fromAmino(object: _144.ContractAmino): _144.Contract;
                toAmino(message: _144.Contract): _144.ContractAmino;
                fromAminoMsg(object: _144.ContractAminoMsg): _144.Contract;
                toAminoMsg(message: _144.Contract): _144.ContractAminoMsg;
                fromProtoMsg(message: _144.ContractProtoMsg): _144.Contract;
                toProto(message: _144.Contract): Uint8Array;
                toProtoMsg(message: _144.Contract): _144.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _144.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.Sequence;
                fromPartial(object: Partial<_144.Sequence>): _144.Sequence;
                fromAmino(object: _144.SequenceAmino): _144.Sequence;
                toAmino(message: _144.Sequence): _144.SequenceAmino;
                fromAminoMsg(object: _144.SequenceAminoMsg): _144.Sequence;
                toAminoMsg(message: _144.Sequence): _144.SequenceAminoMsg;
                fromProtoMsg(message: _144.SequenceProtoMsg): _144.Sequence;
                toProto(message: _144.Sequence): Uint8Array;
                toProtoMsg(message: _144.Sequence): _144.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _143.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ContractExecutionAuthorization;
                fromPartial(object: Partial<_143.ContractExecutionAuthorization>): _143.ContractExecutionAuthorization;
                fromAmino(object: _143.ContractExecutionAuthorizationAmino): _143.ContractExecutionAuthorization;
                toAmino(message: _143.ContractExecutionAuthorization): _143.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _143.ContractExecutionAuthorizationAminoMsg): _143.ContractExecutionAuthorization;
                toAminoMsg(message: _143.ContractExecutionAuthorization): _143.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _143.ContractExecutionAuthorizationProtoMsg): _143.ContractExecutionAuthorization;
                toProto(message: _143.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _143.ContractExecutionAuthorization): _143.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _143.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ContractMigrationAuthorization;
                fromPartial(object: Partial<_143.ContractMigrationAuthorization>): _143.ContractMigrationAuthorization;
                fromAmino(object: _143.ContractMigrationAuthorizationAmino): _143.ContractMigrationAuthorization;
                toAmino(message: _143.ContractMigrationAuthorization): _143.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _143.ContractMigrationAuthorizationAminoMsg): _143.ContractMigrationAuthorization;
                toAminoMsg(message: _143.ContractMigrationAuthorization): _143.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _143.ContractMigrationAuthorizationProtoMsg): _143.ContractMigrationAuthorization;
                toProto(message: _143.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _143.ContractMigrationAuthorization): _143.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _143.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.ContractGrant;
                fromPartial(object: Partial<_143.ContractGrant>): _143.ContractGrant;
                fromAmino(object: _143.ContractGrantAmino): _143.ContractGrant;
                toAmino(message: _143.ContractGrant): _143.ContractGrantAmino;
                fromAminoMsg(object: _143.ContractGrantAminoMsg): _143.ContractGrant;
                toAminoMsg(message: _143.ContractGrant): _143.ContractGrantAminoMsg;
                fromProtoMsg(message: _143.ContractGrantProtoMsg): _143.ContractGrant;
                toProto(message: _143.ContractGrant): Uint8Array;
                toProtoMsg(message: _143.ContractGrant): _143.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _143.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MaxCallsLimit;
                fromPartial(object: Partial<_143.MaxCallsLimit>): _143.MaxCallsLimit;
                fromAmino(object: _143.MaxCallsLimitAmino): _143.MaxCallsLimit;
                toAmino(message: _143.MaxCallsLimit): _143.MaxCallsLimitAmino;
                fromAminoMsg(object: _143.MaxCallsLimitAminoMsg): _143.MaxCallsLimit;
                toAminoMsg(message: _143.MaxCallsLimit): _143.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _143.MaxCallsLimitProtoMsg): _143.MaxCallsLimit;
                toProto(message: _143.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _143.MaxCallsLimit): _143.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _143.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.MaxFundsLimit;
                fromPartial(object: Partial<_143.MaxFundsLimit>): _143.MaxFundsLimit;
                fromAmino(object: _143.MaxFundsLimitAmino): _143.MaxFundsLimit;
                toAmino(message: _143.MaxFundsLimit): _143.MaxFundsLimitAmino;
                fromAminoMsg(object: _143.MaxFundsLimitAminoMsg): _143.MaxFundsLimit;
                toAminoMsg(message: _143.MaxFundsLimit): _143.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _143.MaxFundsLimitProtoMsg): _143.MaxFundsLimit;
                toProto(message: _143.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _143.MaxFundsLimit): _143.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _143.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.CombinedLimit;
                fromPartial(object: Partial<_143.CombinedLimit>): _143.CombinedLimit;
                fromAmino(object: _143.CombinedLimitAmino): _143.CombinedLimit;
                toAmino(message: _143.CombinedLimit): _143.CombinedLimitAmino;
                fromAminoMsg(object: _143.CombinedLimitAminoMsg): _143.CombinedLimit;
                toAminoMsg(message: _143.CombinedLimit): _143.CombinedLimitAminoMsg;
                fromProtoMsg(message: _143.CombinedLimitProtoMsg): _143.CombinedLimit;
                toProto(message: _143.CombinedLimit): Uint8Array;
                toProtoMsg(message: _143.CombinedLimit): _143.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _143.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _143.AllowAllMessagesFilter;
                fromPartial(_: Partial<_143.AllowAllMessagesFilter>): _143.AllowAllMessagesFilter;
                fromAmino(_: _143.AllowAllMessagesFilterAmino): _143.AllowAllMessagesFilter;
                toAmino(_: _143.AllowAllMessagesFilter): _143.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _143.AllowAllMessagesFilterAminoMsg): _143.AllowAllMessagesFilter;
                toAminoMsg(message: _143.AllowAllMessagesFilter): _143.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _143.AllowAllMessagesFilterProtoMsg): _143.AllowAllMessagesFilter;
                toProto(message: _143.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _143.AllowAllMessagesFilter): _143.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _143.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_143.AcceptedMessageKeysFilter>): _143.AcceptedMessageKeysFilter;
                fromAmino(object: _143.AcceptedMessageKeysFilterAmino): _143.AcceptedMessageKeysFilter;
                toAmino(message: _143.AcceptedMessageKeysFilter): _143.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _143.AcceptedMessageKeysFilterAminoMsg): _143.AcceptedMessageKeysFilter;
                toAminoMsg(message: _143.AcceptedMessageKeysFilter): _143.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _143.AcceptedMessageKeysFilterProtoMsg): _143.AcceptedMessageKeysFilter;
                toProto(message: _143.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _143.AcceptedMessageKeysFilter): _143.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _143.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _143.AcceptedMessagesFilter;
                fromPartial(object: Partial<_143.AcceptedMessagesFilter>): _143.AcceptedMessagesFilter;
                fromAmino(object: _143.AcceptedMessagesFilterAmino): _143.AcceptedMessagesFilter;
                toAmino(message: _143.AcceptedMessagesFilter): _143.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _143.AcceptedMessagesFilterAminoMsg): _143.AcceptedMessagesFilter;
                toAminoMsg(message: _143.AcceptedMessagesFilter): _143.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _143.AcceptedMessagesFilterProtoMsg): _143.AcceptedMessagesFilter;
                toProto(message: _143.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _143.AcceptedMessagesFilter): _143.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _143.MaxCallsLimit | _143.MaxFundsLimit | _143.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _143.AllowAllMessagesFilter | _143.AcceptedMessageKeysFilter | _143.AcceptedMessagesFilter;
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
                    v1: _261.MsgClientImpl;
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
                        contractInfo(request: _147.QueryContractInfoRequest): Promise<_147.QueryContractInfoResponse>;
                        contractHistory(request: _147.QueryContractHistoryRequest): Promise<_147.QueryContractHistoryResponse>;
                        contractsByCode(request: _147.QueryContractsByCodeRequest): Promise<_147.QueryContractsByCodeResponse>;
                        allContractState(request: _147.QueryAllContractStateRequest): Promise<_147.QueryAllContractStateResponse>;
                        rawContractState(request: _147.QueryRawContractStateRequest): Promise<_147.QueryRawContractStateResponse>;
                        smartContractState(request: _147.QuerySmartContractStateRequest): Promise<_147.QuerySmartContractStateResponse>;
                        code(request: _147.QueryCodeRequest): Promise<_147.QueryCodeResponse>;
                        codes(request?: _147.QueryCodesRequest): Promise<_147.QueryCodesResponse>;
                        pinnedCodes(request?: _147.QueryPinnedCodesRequest): Promise<_147.QueryPinnedCodesResponse>;
                        params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                        contractsByCreator(request: _147.QueryContractsByCreatorRequest): Promise<_147.QueryContractsByCreatorResponse>;
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
                    v1: _259.LCDQueryClient;
                };
            };
        }>;
    };
}
