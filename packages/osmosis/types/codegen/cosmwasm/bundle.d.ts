import * as _241 from "./wasm/v1/authz";
import * as _242 from "./wasm/v1/genesis";
import * as _243 from "./wasm/v1/ibc";
import * as _244 from "./wasm/v1/proposal_legacy";
import * as _245 from "./wasm/v1/query";
import * as _246 from "./wasm/v1/tx";
import * as _247 from "./wasm/v1/types";
import * as _426 from "./wasm/v1/query.lcd";
import * as _427 from "./wasm/v1/query.rpc.Query";
import * as _428 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _428.MsgClientImpl;
            QueryClientImpl: typeof _427.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _245.QueryContractInfoRequest): Promise<_245.QueryContractInfoResponse>;
                contractHistory(request: _245.QueryContractHistoryRequest): Promise<_245.QueryContractHistoryResponse>;
                contractsByCode(request: _245.QueryContractsByCodeRequest): Promise<_245.QueryContractsByCodeResponse>;
                allContractState(request: _245.QueryAllContractStateRequest): Promise<_245.QueryAllContractStateResponse>;
                rawContractState(request: _245.QueryRawContractStateRequest): Promise<_245.QueryRawContractStateResponse>;
                smartContractState(request: _245.QuerySmartContractStateRequest): Promise<_245.QuerySmartContractStateResponse>;
                code(request: _245.QueryCodeRequest): Promise<_245.QueryCodeResponse>;
                codes(request?: _245.QueryCodesRequest): Promise<_245.QueryCodesResponse>;
                pinnedCodes(request?: _245.QueryPinnedCodesRequest): Promise<_245.QueryPinnedCodesResponse>;
                params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                contractsByCreator(request: _245.QueryContractsByCreatorRequest): Promise<_245.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _426.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _246.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _246.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _246.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _246.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _246.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _246.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _246.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _246.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _246.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _246.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _246.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _246.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _246.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _246.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _246.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _246.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _246.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _246.MsgStoreCode): {
                        typeUrl: string;
                        value: _246.MsgStoreCode;
                    };
                    instantiateContract(value: _246.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _246.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _246.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _246.MsgInstantiateContract2;
                    };
                    executeContract(value: _246.MsgExecuteContract): {
                        typeUrl: string;
                        value: _246.MsgExecuteContract;
                    };
                    migrateContract(value: _246.MsgMigrateContract): {
                        typeUrl: string;
                        value: _246.MsgMigrateContract;
                    };
                    updateAdmin(value: _246.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _246.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _246.MsgClearAdmin): {
                        typeUrl: string;
                        value: _246.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _246.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _246.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _246.MsgUpdateParams): {
                        typeUrl: string;
                        value: _246.MsgUpdateParams;
                    };
                    sudoContract(value: _246.MsgSudoContract): {
                        typeUrl: string;
                        value: _246.MsgSudoContract;
                    };
                    pinCodes(value: _246.MsgPinCodes): {
                        typeUrl: string;
                        value: _246.MsgPinCodes;
                    };
                    unpinCodes(value: _246.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _246.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _246.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _246.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _246.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _246.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _246.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _246.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _246.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _246.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _246.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _246.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _246.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _246.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _246.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _246.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _246.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _246.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _246.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _246.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _246.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _246.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _246.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _246.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _246.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _246.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _246.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _246.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _246.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _246.MsgStoreCode): {
                        typeUrl: string;
                        value: _246.MsgStoreCode;
                    };
                    instantiateContract(value: _246.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _246.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _246.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _246.MsgInstantiateContract2;
                    };
                    executeContract(value: _246.MsgExecuteContract): {
                        typeUrl: string;
                        value: _246.MsgExecuteContract;
                    };
                    migrateContract(value: _246.MsgMigrateContract): {
                        typeUrl: string;
                        value: _246.MsgMigrateContract;
                    };
                    updateAdmin(value: _246.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _246.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _246.MsgClearAdmin): {
                        typeUrl: string;
                        value: _246.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _246.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _246.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _246.MsgUpdateParams): {
                        typeUrl: string;
                        value: _246.MsgUpdateParams;
                    };
                    sudoContract(value: _246.MsgSudoContract): {
                        typeUrl: string;
                        value: _246.MsgSudoContract;
                    };
                    pinCodes(value: _246.MsgPinCodes): {
                        typeUrl: string;
                        value: _246.MsgPinCodes;
                    };
                    unpinCodes(value: _246.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _246.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _246.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _246.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _246.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _246.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _246.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _246.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _246.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _246.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _246.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _246.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _246.MsgStoreCode) => _246.MsgStoreCodeAmino;
                    fromAmino: (object: _246.MsgStoreCodeAmino) => _246.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _246.MsgInstantiateContract) => _246.MsgInstantiateContractAmino;
                    fromAmino: (object: _246.MsgInstantiateContractAmino) => _246.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _246.MsgInstantiateContract2) => _246.MsgInstantiateContract2Amino;
                    fromAmino: (object: _246.MsgInstantiateContract2Amino) => _246.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _246.MsgExecuteContract) => _246.MsgExecuteContractAmino;
                    fromAmino: (object: _246.MsgExecuteContractAmino) => _246.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _246.MsgMigrateContract) => _246.MsgMigrateContractAmino;
                    fromAmino: (object: _246.MsgMigrateContractAmino) => _246.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _246.MsgUpdateAdmin) => _246.MsgUpdateAdminAmino;
                    fromAmino: (object: _246.MsgUpdateAdminAmino) => _246.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _246.MsgClearAdmin) => _246.MsgClearAdminAmino;
                    fromAmino: (object: _246.MsgClearAdminAmino) => _246.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _246.MsgUpdateInstantiateConfig) => _246.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _246.MsgUpdateInstantiateConfigAmino) => _246.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _246.MsgUpdateParams) => _246.MsgUpdateParamsAmino;
                    fromAmino: (object: _246.MsgUpdateParamsAmino) => _246.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _246.MsgSudoContract) => _246.MsgSudoContractAmino;
                    fromAmino: (object: _246.MsgSudoContractAmino) => _246.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _246.MsgPinCodes) => _246.MsgPinCodesAmino;
                    fromAmino: (object: _246.MsgPinCodesAmino) => _246.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _246.MsgUnpinCodes) => _246.MsgUnpinCodesAmino;
                    fromAmino: (object: _246.MsgUnpinCodesAmino) => _246.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _246.MsgStoreAndInstantiateContract) => _246.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _246.MsgStoreAndInstantiateContractAmino) => _246.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _246.MsgRemoveCodeUploadParamsAddresses) => _246.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _246.MsgRemoveCodeUploadParamsAddressesAmino) => _246.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _246.MsgAddCodeUploadParamsAddresses) => _246.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _246.MsgAddCodeUploadParamsAddressesAmino) => _246.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _246.MsgStoreAndMigrateContract) => _246.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _246.MsgStoreAndMigrateContractAmino) => _246.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _246.MsgUpdateContractLabel) => _246.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _246.MsgUpdateContractLabelAmino) => _246.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _247.AccessType;
            accessTypeToJSON(object: _247.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _247.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _247.ContractCodeHistoryOperationType): string;
            AccessType: typeof _247.AccessType;
            AccessTypeSDKType: typeof _247.AccessType;
            AccessTypeAmino: typeof _247.AccessType;
            ContractCodeHistoryOperationType: typeof _247.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _247.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _247.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _247.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.AccessTypeParam;
                fromPartial(object: Partial<_247.AccessTypeParam>): _247.AccessTypeParam;
                fromAmino(object: _247.AccessTypeParamAmino): _247.AccessTypeParam;
                toAmino(message: _247.AccessTypeParam): _247.AccessTypeParamAmino;
                fromAminoMsg(object: _247.AccessTypeParamAminoMsg): _247.AccessTypeParam;
                toAminoMsg(message: _247.AccessTypeParam): _247.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _247.AccessTypeParamProtoMsg): _247.AccessTypeParam;
                toProto(message: _247.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _247.AccessTypeParam): _247.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _247.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.AccessConfig;
                fromPartial(object: Partial<_247.AccessConfig>): _247.AccessConfig;
                fromAmino(object: _247.AccessConfigAmino): _247.AccessConfig;
                toAmino(message: _247.AccessConfig): _247.AccessConfigAmino;
                fromAminoMsg(object: _247.AccessConfigAminoMsg): _247.AccessConfig;
                toAminoMsg(message: _247.AccessConfig): _247.AccessConfigAminoMsg;
                fromProtoMsg(message: _247.AccessConfigProtoMsg): _247.AccessConfig;
                toProto(message: _247.AccessConfig): Uint8Array;
                toProtoMsg(message: _247.AccessConfig): _247.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _247.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.Params;
                fromPartial(object: Partial<_247.Params>): _247.Params;
                fromAmino(object: _247.ParamsAmino): _247.Params;
                toAmino(message: _247.Params): _247.ParamsAmino;
                fromAminoMsg(object: _247.ParamsAminoMsg): _247.Params;
                toAminoMsg(message: _247.Params): _247.ParamsAminoMsg;
                fromProtoMsg(message: _247.ParamsProtoMsg): _247.Params;
                toProto(message: _247.Params): Uint8Array;
                toProtoMsg(message: _247.Params): _247.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _247.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.CodeInfo;
                fromPartial(object: Partial<_247.CodeInfo>): _247.CodeInfo;
                fromAmino(object: _247.CodeInfoAmino): _247.CodeInfo;
                toAmino(message: _247.CodeInfo): _247.CodeInfoAmino;
                fromAminoMsg(object: _247.CodeInfoAminoMsg): _247.CodeInfo;
                toAminoMsg(message: _247.CodeInfo): _247.CodeInfoAminoMsg;
                fromProtoMsg(message: _247.CodeInfoProtoMsg): _247.CodeInfo;
                toProto(message: _247.CodeInfo): Uint8Array;
                toProtoMsg(message: _247.CodeInfo): _247.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _247.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.ContractInfo;
                fromPartial(object: Partial<_247.ContractInfo>): _247.ContractInfo;
                fromAmino(object: _247.ContractInfoAmino): _247.ContractInfo;
                toAmino(message: _247.ContractInfo): _247.ContractInfoAmino;
                fromAminoMsg(object: _247.ContractInfoAminoMsg): _247.ContractInfo;
                toAminoMsg(message: _247.ContractInfo): _247.ContractInfoAminoMsg;
                fromProtoMsg(message: _247.ContractInfoProtoMsg): _247.ContractInfo;
                toProto(message: _247.ContractInfo): Uint8Array;
                toProtoMsg(message: _247.ContractInfo): _247.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _247.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_247.ContractCodeHistoryEntry>): _247.ContractCodeHistoryEntry;
                fromAmino(object: _247.ContractCodeHistoryEntryAmino): _247.ContractCodeHistoryEntry;
                toAmino(message: _247.ContractCodeHistoryEntry): _247.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _247.ContractCodeHistoryEntryAminoMsg): _247.ContractCodeHistoryEntry;
                toAminoMsg(message: _247.ContractCodeHistoryEntry): _247.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _247.ContractCodeHistoryEntryProtoMsg): _247.ContractCodeHistoryEntry;
                toProto(message: _247.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _247.ContractCodeHistoryEntry): _247.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _247.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.AbsoluteTxPosition;
                fromPartial(object: Partial<_247.AbsoluteTxPosition>): _247.AbsoluteTxPosition;
                fromAmino(object: _247.AbsoluteTxPositionAmino): _247.AbsoluteTxPosition;
                toAmino(message: _247.AbsoluteTxPosition): _247.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _247.AbsoluteTxPositionAminoMsg): _247.AbsoluteTxPosition;
                toAminoMsg(message: _247.AbsoluteTxPosition): _247.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _247.AbsoluteTxPositionProtoMsg): _247.AbsoluteTxPosition;
                toProto(message: _247.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _247.AbsoluteTxPosition): _247.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _247.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _247.Model;
                fromPartial(object: Partial<_247.Model>): _247.Model;
                fromAmino(object: _247.ModelAmino): _247.Model;
                toAmino(message: _247.Model): _247.ModelAmino;
                fromAminoMsg(object: _247.ModelAminoMsg): _247.Model;
                toAminoMsg(message: _247.Model): _247.ModelAminoMsg;
                fromProtoMsg(message: _247.ModelProtoMsg): _247.Model;
                toProto(message: _247.Model): Uint8Array;
                toProtoMsg(message: _247.Model): _247.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _246.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgStoreCode;
                fromPartial(object: Partial<_246.MsgStoreCode>): _246.MsgStoreCode;
                fromAmino(object: _246.MsgStoreCodeAmino): _246.MsgStoreCode;
                toAmino(message: _246.MsgStoreCode): _246.MsgStoreCodeAmino;
                fromAminoMsg(object: _246.MsgStoreCodeAminoMsg): _246.MsgStoreCode;
                toAminoMsg(message: _246.MsgStoreCode): _246.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _246.MsgStoreCodeProtoMsg): _246.MsgStoreCode;
                toProto(message: _246.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _246.MsgStoreCode): _246.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _246.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgStoreCodeResponse;
                fromPartial(object: Partial<_246.MsgStoreCodeResponse>): _246.MsgStoreCodeResponse;
                fromAmino(object: _246.MsgStoreCodeResponseAmino): _246.MsgStoreCodeResponse;
                toAmino(message: _246.MsgStoreCodeResponse): _246.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _246.MsgStoreCodeResponseAminoMsg): _246.MsgStoreCodeResponse;
                toAminoMsg(message: _246.MsgStoreCodeResponse): _246.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _246.MsgStoreCodeResponseProtoMsg): _246.MsgStoreCodeResponse;
                toProto(message: _246.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _246.MsgStoreCodeResponse): _246.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _246.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgInstantiateContract;
                fromPartial(object: Partial<_246.MsgInstantiateContract>): _246.MsgInstantiateContract;
                fromAmino(object: _246.MsgInstantiateContractAmino): _246.MsgInstantiateContract;
                toAmino(message: _246.MsgInstantiateContract): _246.MsgInstantiateContractAmino;
                fromAminoMsg(object: _246.MsgInstantiateContractAminoMsg): _246.MsgInstantiateContract;
                toAminoMsg(message: _246.MsgInstantiateContract): _246.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _246.MsgInstantiateContractProtoMsg): _246.MsgInstantiateContract;
                toProto(message: _246.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _246.MsgInstantiateContract): _246.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _246.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_246.MsgInstantiateContractResponse>): _246.MsgInstantiateContractResponse;
                fromAmino(object: _246.MsgInstantiateContractResponseAmino): _246.MsgInstantiateContractResponse;
                toAmino(message: _246.MsgInstantiateContractResponse): _246.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _246.MsgInstantiateContractResponseAminoMsg): _246.MsgInstantiateContractResponse;
                toAminoMsg(message: _246.MsgInstantiateContractResponse): _246.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _246.MsgInstantiateContractResponseProtoMsg): _246.MsgInstantiateContractResponse;
                toProto(message: _246.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _246.MsgInstantiateContractResponse): _246.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _246.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgInstantiateContract2;
                fromPartial(object: Partial<_246.MsgInstantiateContract2>): _246.MsgInstantiateContract2;
                fromAmino(object: _246.MsgInstantiateContract2Amino): _246.MsgInstantiateContract2;
                toAmino(message: _246.MsgInstantiateContract2): _246.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _246.MsgInstantiateContract2AminoMsg): _246.MsgInstantiateContract2;
                toAminoMsg(message: _246.MsgInstantiateContract2): _246.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _246.MsgInstantiateContract2ProtoMsg): _246.MsgInstantiateContract2;
                toProto(message: _246.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _246.MsgInstantiateContract2): _246.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _246.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_246.MsgInstantiateContract2Response>): _246.MsgInstantiateContract2Response;
                fromAmino(object: _246.MsgInstantiateContract2ResponseAmino): _246.MsgInstantiateContract2Response;
                toAmino(message: _246.MsgInstantiateContract2Response): _246.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _246.MsgInstantiateContract2ResponseAminoMsg): _246.MsgInstantiateContract2Response;
                toAminoMsg(message: _246.MsgInstantiateContract2Response): _246.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _246.MsgInstantiateContract2ResponseProtoMsg): _246.MsgInstantiateContract2Response;
                toProto(message: _246.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _246.MsgInstantiateContract2Response): _246.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _246.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgExecuteContract;
                fromPartial(object: Partial<_246.MsgExecuteContract>): _246.MsgExecuteContract;
                fromAmino(object: _246.MsgExecuteContractAmino): _246.MsgExecuteContract;
                toAmino(message: _246.MsgExecuteContract): _246.MsgExecuteContractAmino;
                fromAminoMsg(object: _246.MsgExecuteContractAminoMsg): _246.MsgExecuteContract;
                toAminoMsg(message: _246.MsgExecuteContract): _246.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _246.MsgExecuteContractProtoMsg): _246.MsgExecuteContract;
                toProto(message: _246.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _246.MsgExecuteContract): _246.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _246.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgExecuteContractResponse;
                fromPartial(object: Partial<_246.MsgExecuteContractResponse>): _246.MsgExecuteContractResponse;
                fromAmino(object: _246.MsgExecuteContractResponseAmino): _246.MsgExecuteContractResponse;
                toAmino(message: _246.MsgExecuteContractResponse): _246.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _246.MsgExecuteContractResponseAminoMsg): _246.MsgExecuteContractResponse;
                toAminoMsg(message: _246.MsgExecuteContractResponse): _246.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _246.MsgExecuteContractResponseProtoMsg): _246.MsgExecuteContractResponse;
                toProto(message: _246.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _246.MsgExecuteContractResponse): _246.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _246.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgMigrateContract;
                fromPartial(object: Partial<_246.MsgMigrateContract>): _246.MsgMigrateContract;
                fromAmino(object: _246.MsgMigrateContractAmino): _246.MsgMigrateContract;
                toAmino(message: _246.MsgMigrateContract): _246.MsgMigrateContractAmino;
                fromAminoMsg(object: _246.MsgMigrateContractAminoMsg): _246.MsgMigrateContract;
                toAminoMsg(message: _246.MsgMigrateContract): _246.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _246.MsgMigrateContractProtoMsg): _246.MsgMigrateContract;
                toProto(message: _246.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _246.MsgMigrateContract): _246.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _246.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgMigrateContractResponse;
                fromPartial(object: Partial<_246.MsgMigrateContractResponse>): _246.MsgMigrateContractResponse;
                fromAmino(object: _246.MsgMigrateContractResponseAmino): _246.MsgMigrateContractResponse;
                toAmino(message: _246.MsgMigrateContractResponse): _246.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _246.MsgMigrateContractResponseAminoMsg): _246.MsgMigrateContractResponse;
                toAminoMsg(message: _246.MsgMigrateContractResponse): _246.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _246.MsgMigrateContractResponseProtoMsg): _246.MsgMigrateContractResponse;
                toProto(message: _246.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _246.MsgMigrateContractResponse): _246.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _246.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgUpdateAdmin;
                fromPartial(object: Partial<_246.MsgUpdateAdmin>): _246.MsgUpdateAdmin;
                fromAmino(object: _246.MsgUpdateAdminAmino): _246.MsgUpdateAdmin;
                toAmino(message: _246.MsgUpdateAdmin): _246.MsgUpdateAdminAmino;
                fromAminoMsg(object: _246.MsgUpdateAdminAminoMsg): _246.MsgUpdateAdmin;
                toAminoMsg(message: _246.MsgUpdateAdmin): _246.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateAdminProtoMsg): _246.MsgUpdateAdmin;
                toProto(message: _246.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateAdmin): _246.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _246.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_246.MsgUpdateAdminResponse>): _246.MsgUpdateAdminResponse;
                fromAmino(_: _246.MsgUpdateAdminResponseAmino): _246.MsgUpdateAdminResponse;
                toAmino(_: _246.MsgUpdateAdminResponse): _246.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _246.MsgUpdateAdminResponseAminoMsg): _246.MsgUpdateAdminResponse;
                toAminoMsg(message: _246.MsgUpdateAdminResponse): _246.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateAdminResponseProtoMsg): _246.MsgUpdateAdminResponse;
                toProto(message: _246.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateAdminResponse): _246.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _246.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgClearAdmin;
                fromPartial(object: Partial<_246.MsgClearAdmin>): _246.MsgClearAdmin;
                fromAmino(object: _246.MsgClearAdminAmino): _246.MsgClearAdmin;
                toAmino(message: _246.MsgClearAdmin): _246.MsgClearAdminAmino;
                fromAminoMsg(object: _246.MsgClearAdminAminoMsg): _246.MsgClearAdmin;
                toAminoMsg(message: _246.MsgClearAdmin): _246.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _246.MsgClearAdminProtoMsg): _246.MsgClearAdmin;
                toProto(message: _246.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _246.MsgClearAdmin): _246.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _246.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgClearAdminResponse;
                fromPartial(_: Partial<_246.MsgClearAdminResponse>): _246.MsgClearAdminResponse;
                fromAmino(_: _246.MsgClearAdminResponseAmino): _246.MsgClearAdminResponse;
                toAmino(_: _246.MsgClearAdminResponse): _246.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _246.MsgClearAdminResponseAminoMsg): _246.MsgClearAdminResponse;
                toAminoMsg(message: _246.MsgClearAdminResponse): _246.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _246.MsgClearAdminResponseProtoMsg): _246.MsgClearAdminResponse;
                toProto(message: _246.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _246.MsgClearAdminResponse): _246.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _246.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_246.MsgUpdateInstantiateConfig>): _246.MsgUpdateInstantiateConfig;
                fromAmino(object: _246.MsgUpdateInstantiateConfigAmino): _246.MsgUpdateInstantiateConfig;
                toAmino(message: _246.MsgUpdateInstantiateConfig): _246.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _246.MsgUpdateInstantiateConfigAminoMsg): _246.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _246.MsgUpdateInstantiateConfig): _246.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateInstantiateConfigProtoMsg): _246.MsgUpdateInstantiateConfig;
                toProto(message: _246.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateInstantiateConfig): _246.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _246.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_246.MsgUpdateInstantiateConfigResponse>): _246.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _246.MsgUpdateInstantiateConfigResponseAmino): _246.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _246.MsgUpdateInstantiateConfigResponse): _246.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _246.MsgUpdateInstantiateConfigResponseAminoMsg): _246.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _246.MsgUpdateInstantiateConfigResponse): _246.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateInstantiateConfigResponseProtoMsg): _246.MsgUpdateInstantiateConfigResponse;
                toProto(message: _246.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateInstantiateConfigResponse): _246.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _246.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgUpdateParams;
                fromPartial(object: Partial<_246.MsgUpdateParams>): _246.MsgUpdateParams;
                fromAmino(object: _246.MsgUpdateParamsAmino): _246.MsgUpdateParams;
                toAmino(message: _246.MsgUpdateParams): _246.MsgUpdateParamsAmino;
                fromAminoMsg(object: _246.MsgUpdateParamsAminoMsg): _246.MsgUpdateParams;
                toAminoMsg(message: _246.MsgUpdateParams): _246.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateParamsProtoMsg): _246.MsgUpdateParams;
                toProto(message: _246.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateParams): _246.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _246.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_246.MsgUpdateParamsResponse>): _246.MsgUpdateParamsResponse;
                fromAmino(_: _246.MsgUpdateParamsResponseAmino): _246.MsgUpdateParamsResponse;
                toAmino(_: _246.MsgUpdateParamsResponse): _246.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _246.MsgUpdateParamsResponseAminoMsg): _246.MsgUpdateParamsResponse;
                toAminoMsg(message: _246.MsgUpdateParamsResponse): _246.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateParamsResponseProtoMsg): _246.MsgUpdateParamsResponse;
                toProto(message: _246.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateParamsResponse): _246.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _246.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgSudoContract;
                fromPartial(object: Partial<_246.MsgSudoContract>): _246.MsgSudoContract;
                fromAmino(object: _246.MsgSudoContractAmino): _246.MsgSudoContract;
                toAmino(message: _246.MsgSudoContract): _246.MsgSudoContractAmino;
                fromAminoMsg(object: _246.MsgSudoContractAminoMsg): _246.MsgSudoContract;
                toAminoMsg(message: _246.MsgSudoContract): _246.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _246.MsgSudoContractProtoMsg): _246.MsgSudoContract;
                toProto(message: _246.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _246.MsgSudoContract): _246.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _246.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgSudoContractResponse;
                fromPartial(object: Partial<_246.MsgSudoContractResponse>): _246.MsgSudoContractResponse;
                fromAmino(object: _246.MsgSudoContractResponseAmino): _246.MsgSudoContractResponse;
                toAmino(message: _246.MsgSudoContractResponse): _246.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _246.MsgSudoContractResponseAminoMsg): _246.MsgSudoContractResponse;
                toAminoMsg(message: _246.MsgSudoContractResponse): _246.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _246.MsgSudoContractResponseProtoMsg): _246.MsgSudoContractResponse;
                toProto(message: _246.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _246.MsgSudoContractResponse): _246.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _246.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgPinCodes;
                fromPartial(object: Partial<_246.MsgPinCodes>): _246.MsgPinCodes;
                fromAmino(object: _246.MsgPinCodesAmino): _246.MsgPinCodes;
                toAmino(message: _246.MsgPinCodes): _246.MsgPinCodesAmino;
                fromAminoMsg(object: _246.MsgPinCodesAminoMsg): _246.MsgPinCodes;
                toAminoMsg(message: _246.MsgPinCodes): _246.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _246.MsgPinCodesProtoMsg): _246.MsgPinCodes;
                toProto(message: _246.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _246.MsgPinCodes): _246.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _246.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgPinCodesResponse;
                fromPartial(_: Partial<_246.MsgPinCodesResponse>): _246.MsgPinCodesResponse;
                fromAmino(_: _246.MsgPinCodesResponseAmino): _246.MsgPinCodesResponse;
                toAmino(_: _246.MsgPinCodesResponse): _246.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _246.MsgPinCodesResponseAminoMsg): _246.MsgPinCodesResponse;
                toAminoMsg(message: _246.MsgPinCodesResponse): _246.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _246.MsgPinCodesResponseProtoMsg): _246.MsgPinCodesResponse;
                toProto(message: _246.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _246.MsgPinCodesResponse): _246.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _246.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgUnpinCodes;
                fromPartial(object: Partial<_246.MsgUnpinCodes>): _246.MsgUnpinCodes;
                fromAmino(object: _246.MsgUnpinCodesAmino): _246.MsgUnpinCodes;
                toAmino(message: _246.MsgUnpinCodes): _246.MsgUnpinCodesAmino;
                fromAminoMsg(object: _246.MsgUnpinCodesAminoMsg): _246.MsgUnpinCodes;
                toAminoMsg(message: _246.MsgUnpinCodes): _246.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _246.MsgUnpinCodesProtoMsg): _246.MsgUnpinCodes;
                toProto(message: _246.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _246.MsgUnpinCodes): _246.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _246.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_246.MsgUnpinCodesResponse>): _246.MsgUnpinCodesResponse;
                fromAmino(_: _246.MsgUnpinCodesResponseAmino): _246.MsgUnpinCodesResponse;
                toAmino(_: _246.MsgUnpinCodesResponse): _246.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _246.MsgUnpinCodesResponseAminoMsg): _246.MsgUnpinCodesResponse;
                toAminoMsg(message: _246.MsgUnpinCodesResponse): _246.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _246.MsgUnpinCodesResponseProtoMsg): _246.MsgUnpinCodesResponse;
                toProto(message: _246.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _246.MsgUnpinCodesResponse): _246.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _246.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_246.MsgStoreAndInstantiateContract>): _246.MsgStoreAndInstantiateContract;
                fromAmino(object: _246.MsgStoreAndInstantiateContractAmino): _246.MsgStoreAndInstantiateContract;
                toAmino(message: _246.MsgStoreAndInstantiateContract): _246.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _246.MsgStoreAndInstantiateContractAminoMsg): _246.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _246.MsgStoreAndInstantiateContract): _246.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _246.MsgStoreAndInstantiateContractProtoMsg): _246.MsgStoreAndInstantiateContract;
                toProto(message: _246.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _246.MsgStoreAndInstantiateContract): _246.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _246.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_246.MsgStoreAndInstantiateContractResponse>): _246.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _246.MsgStoreAndInstantiateContractResponseAmino): _246.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _246.MsgStoreAndInstantiateContractResponse): _246.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _246.MsgStoreAndInstantiateContractResponseAminoMsg): _246.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _246.MsgStoreAndInstantiateContractResponse): _246.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _246.MsgStoreAndInstantiateContractResponseProtoMsg): _246.MsgStoreAndInstantiateContractResponse;
                toProto(message: _246.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _246.MsgStoreAndInstantiateContractResponse): _246.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _246.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_246.MsgAddCodeUploadParamsAddresses>): _246.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _246.MsgAddCodeUploadParamsAddressesAmino): _246.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _246.MsgAddCodeUploadParamsAddresses): _246.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _246.MsgAddCodeUploadParamsAddressesAminoMsg): _246.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _246.MsgAddCodeUploadParamsAddresses): _246.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _246.MsgAddCodeUploadParamsAddressesProtoMsg): _246.MsgAddCodeUploadParamsAddresses;
                toProto(message: _246.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _246.MsgAddCodeUploadParamsAddresses): _246.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _246.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_246.MsgAddCodeUploadParamsAddressesResponse>): _246.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _246.MsgAddCodeUploadParamsAddressesResponseAmino): _246.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _246.MsgAddCodeUploadParamsAddressesResponse): _246.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _246.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _246.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _246.MsgAddCodeUploadParamsAddressesResponse): _246.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _246.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _246.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _246.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _246.MsgAddCodeUploadParamsAddressesResponse): _246.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _246.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_246.MsgRemoveCodeUploadParamsAddresses>): _246.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _246.MsgRemoveCodeUploadParamsAddressesAmino): _246.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _246.MsgRemoveCodeUploadParamsAddresses): _246.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _246.MsgRemoveCodeUploadParamsAddressesAminoMsg): _246.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _246.MsgRemoveCodeUploadParamsAddresses): _246.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _246.MsgRemoveCodeUploadParamsAddressesProtoMsg): _246.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _246.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _246.MsgRemoveCodeUploadParamsAddresses): _246.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _246.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_246.MsgRemoveCodeUploadParamsAddressesResponse>): _246.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _246.MsgRemoveCodeUploadParamsAddressesResponseAmino): _246.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _246.MsgRemoveCodeUploadParamsAddressesResponse): _246.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _246.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _246.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _246.MsgRemoveCodeUploadParamsAddressesResponse): _246.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _246.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _246.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _246.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _246.MsgRemoveCodeUploadParamsAddressesResponse): _246.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _246.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_246.MsgStoreAndMigrateContract>): _246.MsgStoreAndMigrateContract;
                fromAmino(object: _246.MsgStoreAndMigrateContractAmino): _246.MsgStoreAndMigrateContract;
                toAmino(message: _246.MsgStoreAndMigrateContract): _246.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _246.MsgStoreAndMigrateContractAminoMsg): _246.MsgStoreAndMigrateContract;
                toAminoMsg(message: _246.MsgStoreAndMigrateContract): _246.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _246.MsgStoreAndMigrateContractProtoMsg): _246.MsgStoreAndMigrateContract;
                toProto(message: _246.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _246.MsgStoreAndMigrateContract): _246.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _246.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_246.MsgStoreAndMigrateContractResponse>): _246.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _246.MsgStoreAndMigrateContractResponseAmino): _246.MsgStoreAndMigrateContractResponse;
                toAmino(message: _246.MsgStoreAndMigrateContractResponse): _246.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _246.MsgStoreAndMigrateContractResponseAminoMsg): _246.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _246.MsgStoreAndMigrateContractResponse): _246.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _246.MsgStoreAndMigrateContractResponseProtoMsg): _246.MsgStoreAndMigrateContractResponse;
                toProto(message: _246.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _246.MsgStoreAndMigrateContractResponse): _246.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _246.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _246.MsgUpdateContractLabel;
                fromPartial(object: Partial<_246.MsgUpdateContractLabel>): _246.MsgUpdateContractLabel;
                fromAmino(object: _246.MsgUpdateContractLabelAmino): _246.MsgUpdateContractLabel;
                toAmino(message: _246.MsgUpdateContractLabel): _246.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _246.MsgUpdateContractLabelAminoMsg): _246.MsgUpdateContractLabel;
                toAminoMsg(message: _246.MsgUpdateContractLabel): _246.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateContractLabelProtoMsg): _246.MsgUpdateContractLabel;
                toProto(message: _246.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateContractLabel): _246.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _246.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _246.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_246.MsgUpdateContractLabelResponse>): _246.MsgUpdateContractLabelResponse;
                fromAmino(_: _246.MsgUpdateContractLabelResponseAmino): _246.MsgUpdateContractLabelResponse;
                toAmino(_: _246.MsgUpdateContractLabelResponse): _246.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _246.MsgUpdateContractLabelResponseAminoMsg): _246.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _246.MsgUpdateContractLabelResponse): _246.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _246.MsgUpdateContractLabelResponseProtoMsg): _246.MsgUpdateContractLabelResponse;
                toProto(message: _246.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _246.MsgUpdateContractLabelResponse): _246.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _245.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractInfoRequest;
                fromPartial(object: Partial<_245.QueryContractInfoRequest>): _245.QueryContractInfoRequest;
                fromAmino(object: _245.QueryContractInfoRequestAmino): _245.QueryContractInfoRequest;
                toAmino(message: _245.QueryContractInfoRequest): _245.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _245.QueryContractInfoRequestAminoMsg): _245.QueryContractInfoRequest;
                toAminoMsg(message: _245.QueryContractInfoRequest): _245.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _245.QueryContractInfoRequestProtoMsg): _245.QueryContractInfoRequest;
                toProto(message: _245.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _245.QueryContractInfoRequest): _245.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _245.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractInfoResponse;
                fromPartial(object: Partial<_245.QueryContractInfoResponse>): _245.QueryContractInfoResponse;
                fromAmino(object: _245.QueryContractInfoResponseAmino): _245.QueryContractInfoResponse;
                toAmino(message: _245.QueryContractInfoResponse): _245.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _245.QueryContractInfoResponseAminoMsg): _245.QueryContractInfoResponse;
                toAminoMsg(message: _245.QueryContractInfoResponse): _245.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _245.QueryContractInfoResponseProtoMsg): _245.QueryContractInfoResponse;
                toProto(message: _245.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _245.QueryContractInfoResponse): _245.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _245.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractHistoryRequest;
                fromPartial(object: Partial<_245.QueryContractHistoryRequest>): _245.QueryContractHistoryRequest;
                fromAmino(object: _245.QueryContractHistoryRequestAmino): _245.QueryContractHistoryRequest;
                toAmino(message: _245.QueryContractHistoryRequest): _245.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _245.QueryContractHistoryRequestAminoMsg): _245.QueryContractHistoryRequest;
                toAminoMsg(message: _245.QueryContractHistoryRequest): _245.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _245.QueryContractHistoryRequestProtoMsg): _245.QueryContractHistoryRequest;
                toProto(message: _245.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _245.QueryContractHistoryRequest): _245.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _245.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractHistoryResponse;
                fromPartial(object: Partial<_245.QueryContractHistoryResponse>): _245.QueryContractHistoryResponse;
                fromAmino(object: _245.QueryContractHistoryResponseAmino): _245.QueryContractHistoryResponse;
                toAmino(message: _245.QueryContractHistoryResponse): _245.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _245.QueryContractHistoryResponseAminoMsg): _245.QueryContractHistoryResponse;
                toAminoMsg(message: _245.QueryContractHistoryResponse): _245.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _245.QueryContractHistoryResponseProtoMsg): _245.QueryContractHistoryResponse;
                toProto(message: _245.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _245.QueryContractHistoryResponse): _245.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _245.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_245.QueryContractsByCodeRequest>): _245.QueryContractsByCodeRequest;
                fromAmino(object: _245.QueryContractsByCodeRequestAmino): _245.QueryContractsByCodeRequest;
                toAmino(message: _245.QueryContractsByCodeRequest): _245.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _245.QueryContractsByCodeRequestAminoMsg): _245.QueryContractsByCodeRequest;
                toAminoMsg(message: _245.QueryContractsByCodeRequest): _245.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _245.QueryContractsByCodeRequestProtoMsg): _245.QueryContractsByCodeRequest;
                toProto(message: _245.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _245.QueryContractsByCodeRequest): _245.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _245.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_245.QueryContractsByCodeResponse>): _245.QueryContractsByCodeResponse;
                fromAmino(object: _245.QueryContractsByCodeResponseAmino): _245.QueryContractsByCodeResponse;
                toAmino(message: _245.QueryContractsByCodeResponse): _245.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _245.QueryContractsByCodeResponseAminoMsg): _245.QueryContractsByCodeResponse;
                toAminoMsg(message: _245.QueryContractsByCodeResponse): _245.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _245.QueryContractsByCodeResponseProtoMsg): _245.QueryContractsByCodeResponse;
                toProto(message: _245.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _245.QueryContractsByCodeResponse): _245.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _245.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryAllContractStateRequest;
                fromPartial(object: Partial<_245.QueryAllContractStateRequest>): _245.QueryAllContractStateRequest;
                fromAmino(object: _245.QueryAllContractStateRequestAmino): _245.QueryAllContractStateRequest;
                toAmino(message: _245.QueryAllContractStateRequest): _245.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _245.QueryAllContractStateRequestAminoMsg): _245.QueryAllContractStateRequest;
                toAminoMsg(message: _245.QueryAllContractStateRequest): _245.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _245.QueryAllContractStateRequestProtoMsg): _245.QueryAllContractStateRequest;
                toProto(message: _245.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _245.QueryAllContractStateRequest): _245.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _245.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryAllContractStateResponse;
                fromPartial(object: Partial<_245.QueryAllContractStateResponse>): _245.QueryAllContractStateResponse;
                fromAmino(object: _245.QueryAllContractStateResponseAmino): _245.QueryAllContractStateResponse;
                toAmino(message: _245.QueryAllContractStateResponse): _245.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _245.QueryAllContractStateResponseAminoMsg): _245.QueryAllContractStateResponse;
                toAminoMsg(message: _245.QueryAllContractStateResponse): _245.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _245.QueryAllContractStateResponseProtoMsg): _245.QueryAllContractStateResponse;
                toProto(message: _245.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _245.QueryAllContractStateResponse): _245.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _245.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryRawContractStateRequest;
                fromPartial(object: Partial<_245.QueryRawContractStateRequest>): _245.QueryRawContractStateRequest;
                fromAmino(object: _245.QueryRawContractStateRequestAmino): _245.QueryRawContractStateRequest;
                toAmino(message: _245.QueryRawContractStateRequest): _245.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _245.QueryRawContractStateRequestAminoMsg): _245.QueryRawContractStateRequest;
                toAminoMsg(message: _245.QueryRawContractStateRequest): _245.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _245.QueryRawContractStateRequestProtoMsg): _245.QueryRawContractStateRequest;
                toProto(message: _245.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _245.QueryRawContractStateRequest): _245.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _245.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryRawContractStateResponse;
                fromPartial(object: Partial<_245.QueryRawContractStateResponse>): _245.QueryRawContractStateResponse;
                fromAmino(object: _245.QueryRawContractStateResponseAmino): _245.QueryRawContractStateResponse;
                toAmino(message: _245.QueryRawContractStateResponse): _245.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _245.QueryRawContractStateResponseAminoMsg): _245.QueryRawContractStateResponse;
                toAminoMsg(message: _245.QueryRawContractStateResponse): _245.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _245.QueryRawContractStateResponseProtoMsg): _245.QueryRawContractStateResponse;
                toProto(message: _245.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _245.QueryRawContractStateResponse): _245.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _245.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_245.QuerySmartContractStateRequest>): _245.QuerySmartContractStateRequest;
                fromAmino(object: _245.QuerySmartContractStateRequestAmino): _245.QuerySmartContractStateRequest;
                toAmino(message: _245.QuerySmartContractStateRequest): _245.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _245.QuerySmartContractStateRequestAminoMsg): _245.QuerySmartContractStateRequest;
                toAminoMsg(message: _245.QuerySmartContractStateRequest): _245.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _245.QuerySmartContractStateRequestProtoMsg): _245.QuerySmartContractStateRequest;
                toProto(message: _245.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _245.QuerySmartContractStateRequest): _245.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _245.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_245.QuerySmartContractStateResponse>): _245.QuerySmartContractStateResponse;
                fromAmino(object: _245.QuerySmartContractStateResponseAmino): _245.QuerySmartContractStateResponse;
                toAmino(message: _245.QuerySmartContractStateResponse): _245.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _245.QuerySmartContractStateResponseAminoMsg): _245.QuerySmartContractStateResponse;
                toAminoMsg(message: _245.QuerySmartContractStateResponse): _245.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _245.QuerySmartContractStateResponseProtoMsg): _245.QuerySmartContractStateResponse;
                toProto(message: _245.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _245.QuerySmartContractStateResponse): _245.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _245.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryCodeRequest;
                fromPartial(object: Partial<_245.QueryCodeRequest>): _245.QueryCodeRequest;
                fromAmino(object: _245.QueryCodeRequestAmino): _245.QueryCodeRequest;
                toAmino(message: _245.QueryCodeRequest): _245.QueryCodeRequestAmino;
                fromAminoMsg(object: _245.QueryCodeRequestAminoMsg): _245.QueryCodeRequest;
                toAminoMsg(message: _245.QueryCodeRequest): _245.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _245.QueryCodeRequestProtoMsg): _245.QueryCodeRequest;
                toProto(message: _245.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _245.QueryCodeRequest): _245.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _245.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.CodeInfoResponse;
                fromPartial(object: Partial<_245.CodeInfoResponse>): _245.CodeInfoResponse;
                fromAmino(object: _245.CodeInfoResponseAmino): _245.CodeInfoResponse;
                toAmino(message: _245.CodeInfoResponse): _245.CodeInfoResponseAmino;
                fromAminoMsg(object: _245.CodeInfoResponseAminoMsg): _245.CodeInfoResponse;
                toAminoMsg(message: _245.CodeInfoResponse): _245.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _245.CodeInfoResponseProtoMsg): _245.CodeInfoResponse;
                toProto(message: _245.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _245.CodeInfoResponse): _245.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _245.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryCodeResponse;
                fromPartial(object: Partial<_245.QueryCodeResponse>): _245.QueryCodeResponse;
                fromAmino(object: _245.QueryCodeResponseAmino): _245.QueryCodeResponse;
                toAmino(message: _245.QueryCodeResponse): _245.QueryCodeResponseAmino;
                fromAminoMsg(object: _245.QueryCodeResponseAminoMsg): _245.QueryCodeResponse;
                toAminoMsg(message: _245.QueryCodeResponse): _245.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _245.QueryCodeResponseProtoMsg): _245.QueryCodeResponse;
                toProto(message: _245.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _245.QueryCodeResponse): _245.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _245.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryCodesRequest;
                fromPartial(object: Partial<_245.QueryCodesRequest>): _245.QueryCodesRequest;
                fromAmino(object: _245.QueryCodesRequestAmino): _245.QueryCodesRequest;
                toAmino(message: _245.QueryCodesRequest): _245.QueryCodesRequestAmino;
                fromAminoMsg(object: _245.QueryCodesRequestAminoMsg): _245.QueryCodesRequest;
                toAminoMsg(message: _245.QueryCodesRequest): _245.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _245.QueryCodesRequestProtoMsg): _245.QueryCodesRequest;
                toProto(message: _245.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _245.QueryCodesRequest): _245.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _245.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryCodesResponse;
                fromPartial(object: Partial<_245.QueryCodesResponse>): _245.QueryCodesResponse;
                fromAmino(object: _245.QueryCodesResponseAmino): _245.QueryCodesResponse;
                toAmino(message: _245.QueryCodesResponse): _245.QueryCodesResponseAmino;
                fromAminoMsg(object: _245.QueryCodesResponseAminoMsg): _245.QueryCodesResponse;
                toAminoMsg(message: _245.QueryCodesResponse): _245.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _245.QueryCodesResponseProtoMsg): _245.QueryCodesResponse;
                toProto(message: _245.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _245.QueryCodesResponse): _245.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _245.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_245.QueryPinnedCodesRequest>): _245.QueryPinnedCodesRequest;
                fromAmino(object: _245.QueryPinnedCodesRequestAmino): _245.QueryPinnedCodesRequest;
                toAmino(message: _245.QueryPinnedCodesRequest): _245.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _245.QueryPinnedCodesRequestAminoMsg): _245.QueryPinnedCodesRequest;
                toAminoMsg(message: _245.QueryPinnedCodesRequest): _245.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _245.QueryPinnedCodesRequestProtoMsg): _245.QueryPinnedCodesRequest;
                toProto(message: _245.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _245.QueryPinnedCodesRequest): _245.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _245.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_245.QueryPinnedCodesResponse>): _245.QueryPinnedCodesResponse;
                fromAmino(object: _245.QueryPinnedCodesResponseAmino): _245.QueryPinnedCodesResponse;
                toAmino(message: _245.QueryPinnedCodesResponse): _245.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _245.QueryPinnedCodesResponseAminoMsg): _245.QueryPinnedCodesResponse;
                toAminoMsg(message: _245.QueryPinnedCodesResponse): _245.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _245.QueryPinnedCodesResponseProtoMsg): _245.QueryPinnedCodesResponse;
                toProto(message: _245.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _245.QueryPinnedCodesResponse): _245.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _245.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _245.QueryParamsRequest;
                fromPartial(_: Partial<_245.QueryParamsRequest>): _245.QueryParamsRequest;
                fromAmino(_: _245.QueryParamsRequestAmino): _245.QueryParamsRequest;
                toAmino(_: _245.QueryParamsRequest): _245.QueryParamsRequestAmino;
                fromAminoMsg(object: _245.QueryParamsRequestAminoMsg): _245.QueryParamsRequest;
                toAminoMsg(message: _245.QueryParamsRequest): _245.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _245.QueryParamsRequestProtoMsg): _245.QueryParamsRequest;
                toProto(message: _245.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _245.QueryParamsRequest): _245.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _245.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryParamsResponse;
                fromPartial(object: Partial<_245.QueryParamsResponse>): _245.QueryParamsResponse;
                fromAmino(object: _245.QueryParamsResponseAmino): _245.QueryParamsResponse;
                toAmino(message: _245.QueryParamsResponse): _245.QueryParamsResponseAmino;
                fromAminoMsg(object: _245.QueryParamsResponseAminoMsg): _245.QueryParamsResponse;
                toAminoMsg(message: _245.QueryParamsResponse): _245.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _245.QueryParamsResponseProtoMsg): _245.QueryParamsResponse;
                toProto(message: _245.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _245.QueryParamsResponse): _245.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _245.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_245.QueryContractsByCreatorRequest>): _245.QueryContractsByCreatorRequest;
                fromAmino(object: _245.QueryContractsByCreatorRequestAmino): _245.QueryContractsByCreatorRequest;
                toAmino(message: _245.QueryContractsByCreatorRequest): _245.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _245.QueryContractsByCreatorRequestAminoMsg): _245.QueryContractsByCreatorRequest;
                toAminoMsg(message: _245.QueryContractsByCreatorRequest): _245.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _245.QueryContractsByCreatorRequestProtoMsg): _245.QueryContractsByCreatorRequest;
                toProto(message: _245.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _245.QueryContractsByCreatorRequest): _245.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _245.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _245.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_245.QueryContractsByCreatorResponse>): _245.QueryContractsByCreatorResponse;
                fromAmino(object: _245.QueryContractsByCreatorResponseAmino): _245.QueryContractsByCreatorResponse;
                toAmino(message: _245.QueryContractsByCreatorResponse): _245.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _245.QueryContractsByCreatorResponseAminoMsg): _245.QueryContractsByCreatorResponse;
                toAminoMsg(message: _245.QueryContractsByCreatorResponse): _245.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _245.QueryContractsByCreatorResponseProtoMsg): _245.QueryContractsByCreatorResponse;
                toProto(message: _245.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _245.QueryContractsByCreatorResponse): _245.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _244.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.StoreCodeProposal;
                fromPartial(object: Partial<_244.StoreCodeProposal>): _244.StoreCodeProposal;
                fromAmino(object: _244.StoreCodeProposalAmino): _244.StoreCodeProposal;
                toAmino(message: _244.StoreCodeProposal): _244.StoreCodeProposalAmino;
                fromAminoMsg(object: _244.StoreCodeProposalAminoMsg): _244.StoreCodeProposal;
                toAminoMsg(message: _244.StoreCodeProposal): _244.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _244.StoreCodeProposalProtoMsg): _244.StoreCodeProposal;
                toProto(message: _244.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _244.StoreCodeProposal): _244.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _244.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.InstantiateContractProposal;
                fromPartial(object: Partial<_244.InstantiateContractProposal>): _244.InstantiateContractProposal;
                fromAmino(object: _244.InstantiateContractProposalAmino): _244.InstantiateContractProposal;
                toAmino(message: _244.InstantiateContractProposal): _244.InstantiateContractProposalAmino;
                fromAminoMsg(object: _244.InstantiateContractProposalAminoMsg): _244.InstantiateContractProposal;
                toAminoMsg(message: _244.InstantiateContractProposal): _244.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _244.InstantiateContractProposalProtoMsg): _244.InstantiateContractProposal;
                toProto(message: _244.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _244.InstantiateContractProposal): _244.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _244.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.InstantiateContract2Proposal;
                fromPartial(object: Partial<_244.InstantiateContract2Proposal>): _244.InstantiateContract2Proposal;
                fromAmino(object: _244.InstantiateContract2ProposalAmino): _244.InstantiateContract2Proposal;
                toAmino(message: _244.InstantiateContract2Proposal): _244.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _244.InstantiateContract2ProposalAminoMsg): _244.InstantiateContract2Proposal;
                toAminoMsg(message: _244.InstantiateContract2Proposal): _244.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _244.InstantiateContract2ProposalProtoMsg): _244.InstantiateContract2Proposal;
                toProto(message: _244.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _244.InstantiateContract2Proposal): _244.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _244.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.MigrateContractProposal;
                fromPartial(object: Partial<_244.MigrateContractProposal>): _244.MigrateContractProposal;
                fromAmino(object: _244.MigrateContractProposalAmino): _244.MigrateContractProposal;
                toAmino(message: _244.MigrateContractProposal): _244.MigrateContractProposalAmino;
                fromAminoMsg(object: _244.MigrateContractProposalAminoMsg): _244.MigrateContractProposal;
                toAminoMsg(message: _244.MigrateContractProposal): _244.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _244.MigrateContractProposalProtoMsg): _244.MigrateContractProposal;
                toProto(message: _244.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _244.MigrateContractProposal): _244.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _244.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.SudoContractProposal;
                fromPartial(object: Partial<_244.SudoContractProposal>): _244.SudoContractProposal;
                fromAmino(object: _244.SudoContractProposalAmino): _244.SudoContractProposal;
                toAmino(message: _244.SudoContractProposal): _244.SudoContractProposalAmino;
                fromAminoMsg(object: _244.SudoContractProposalAminoMsg): _244.SudoContractProposal;
                toAminoMsg(message: _244.SudoContractProposal): _244.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _244.SudoContractProposalProtoMsg): _244.SudoContractProposal;
                toProto(message: _244.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _244.SudoContractProposal): _244.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _244.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.ExecuteContractProposal;
                fromPartial(object: Partial<_244.ExecuteContractProposal>): _244.ExecuteContractProposal;
                fromAmino(object: _244.ExecuteContractProposalAmino): _244.ExecuteContractProposal;
                toAmino(message: _244.ExecuteContractProposal): _244.ExecuteContractProposalAmino;
                fromAminoMsg(object: _244.ExecuteContractProposalAminoMsg): _244.ExecuteContractProposal;
                toAminoMsg(message: _244.ExecuteContractProposal): _244.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _244.ExecuteContractProposalProtoMsg): _244.ExecuteContractProposal;
                toProto(message: _244.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _244.ExecuteContractProposal): _244.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _244.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.UpdateAdminProposal;
                fromPartial(object: Partial<_244.UpdateAdminProposal>): _244.UpdateAdminProposal;
                fromAmino(object: _244.UpdateAdminProposalAmino): _244.UpdateAdminProposal;
                toAmino(message: _244.UpdateAdminProposal): _244.UpdateAdminProposalAmino;
                fromAminoMsg(object: _244.UpdateAdminProposalAminoMsg): _244.UpdateAdminProposal;
                toAminoMsg(message: _244.UpdateAdminProposal): _244.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _244.UpdateAdminProposalProtoMsg): _244.UpdateAdminProposal;
                toProto(message: _244.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _244.UpdateAdminProposal): _244.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _244.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.ClearAdminProposal;
                fromPartial(object: Partial<_244.ClearAdminProposal>): _244.ClearAdminProposal;
                fromAmino(object: _244.ClearAdminProposalAmino): _244.ClearAdminProposal;
                toAmino(message: _244.ClearAdminProposal): _244.ClearAdminProposalAmino;
                fromAminoMsg(object: _244.ClearAdminProposalAminoMsg): _244.ClearAdminProposal;
                toAminoMsg(message: _244.ClearAdminProposal): _244.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _244.ClearAdminProposalProtoMsg): _244.ClearAdminProposal;
                toProto(message: _244.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _244.ClearAdminProposal): _244.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _244.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.PinCodesProposal;
                fromPartial(object: Partial<_244.PinCodesProposal>): _244.PinCodesProposal;
                fromAmino(object: _244.PinCodesProposalAmino): _244.PinCodesProposal;
                toAmino(message: _244.PinCodesProposal): _244.PinCodesProposalAmino;
                fromAminoMsg(object: _244.PinCodesProposalAminoMsg): _244.PinCodesProposal;
                toAminoMsg(message: _244.PinCodesProposal): _244.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _244.PinCodesProposalProtoMsg): _244.PinCodesProposal;
                toProto(message: _244.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _244.PinCodesProposal): _244.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _244.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.UnpinCodesProposal;
                fromPartial(object: Partial<_244.UnpinCodesProposal>): _244.UnpinCodesProposal;
                fromAmino(object: _244.UnpinCodesProposalAmino): _244.UnpinCodesProposal;
                toAmino(message: _244.UnpinCodesProposal): _244.UnpinCodesProposalAmino;
                fromAminoMsg(object: _244.UnpinCodesProposalAminoMsg): _244.UnpinCodesProposal;
                toAminoMsg(message: _244.UnpinCodesProposal): _244.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _244.UnpinCodesProposalProtoMsg): _244.UnpinCodesProposal;
                toProto(message: _244.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _244.UnpinCodesProposal): _244.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _244.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.AccessConfigUpdate;
                fromPartial(object: Partial<_244.AccessConfigUpdate>): _244.AccessConfigUpdate;
                fromAmino(object: _244.AccessConfigUpdateAmino): _244.AccessConfigUpdate;
                toAmino(message: _244.AccessConfigUpdate): _244.AccessConfigUpdateAmino;
                fromAminoMsg(object: _244.AccessConfigUpdateAminoMsg): _244.AccessConfigUpdate;
                toAminoMsg(message: _244.AccessConfigUpdate): _244.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _244.AccessConfigUpdateProtoMsg): _244.AccessConfigUpdate;
                toProto(message: _244.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _244.AccessConfigUpdate): _244.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _244.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_244.UpdateInstantiateConfigProposal>): _244.UpdateInstantiateConfigProposal;
                fromAmino(object: _244.UpdateInstantiateConfigProposalAmino): _244.UpdateInstantiateConfigProposal;
                toAmino(message: _244.UpdateInstantiateConfigProposal): _244.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _244.UpdateInstantiateConfigProposalAminoMsg): _244.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _244.UpdateInstantiateConfigProposal): _244.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _244.UpdateInstantiateConfigProposalProtoMsg): _244.UpdateInstantiateConfigProposal;
                toProto(message: _244.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _244.UpdateInstantiateConfigProposal): _244.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _244.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _244.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_244.StoreAndInstantiateContractProposal>): _244.StoreAndInstantiateContractProposal;
                fromAmino(object: _244.StoreAndInstantiateContractProposalAmino): _244.StoreAndInstantiateContractProposal;
                toAmino(message: _244.StoreAndInstantiateContractProposal): _244.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _244.StoreAndInstantiateContractProposalAminoMsg): _244.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _244.StoreAndInstantiateContractProposal): _244.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _244.StoreAndInstantiateContractProposalProtoMsg): _244.StoreAndInstantiateContractProposal;
                toProto(message: _244.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _244.StoreAndInstantiateContractProposal): _244.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _243.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _243.MsgIBCSend;
                fromPartial(object: Partial<_243.MsgIBCSend>): _243.MsgIBCSend;
                fromAmino(object: _243.MsgIBCSendAmino): _243.MsgIBCSend;
                toAmino(message: _243.MsgIBCSend): _243.MsgIBCSendAmino;
                fromAminoMsg(object: _243.MsgIBCSendAminoMsg): _243.MsgIBCSend;
                toAminoMsg(message: _243.MsgIBCSend): _243.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _243.MsgIBCSendProtoMsg): _243.MsgIBCSend;
                toProto(message: _243.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _243.MsgIBCSend): _243.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _243.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _243.MsgIBCSendResponse;
                fromPartial(object: Partial<_243.MsgIBCSendResponse>): _243.MsgIBCSendResponse;
                fromAmino(object: _243.MsgIBCSendResponseAmino): _243.MsgIBCSendResponse;
                toAmino(message: _243.MsgIBCSendResponse): _243.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _243.MsgIBCSendResponseAminoMsg): _243.MsgIBCSendResponse;
                toAminoMsg(message: _243.MsgIBCSendResponse): _243.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _243.MsgIBCSendResponseProtoMsg): _243.MsgIBCSendResponse;
                toProto(message: _243.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _243.MsgIBCSendResponse): _243.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _243.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _243.MsgIBCCloseChannel;
                fromPartial(object: Partial<_243.MsgIBCCloseChannel>): _243.MsgIBCCloseChannel;
                fromAmino(object: _243.MsgIBCCloseChannelAmino): _243.MsgIBCCloseChannel;
                toAmino(message: _243.MsgIBCCloseChannel): _243.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _243.MsgIBCCloseChannelAminoMsg): _243.MsgIBCCloseChannel;
                toAminoMsg(message: _243.MsgIBCCloseChannel): _243.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _243.MsgIBCCloseChannelProtoMsg): _243.MsgIBCCloseChannel;
                toProto(message: _243.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _243.MsgIBCCloseChannel): _243.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _242.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _242.GenesisState;
                fromPartial(object: Partial<_242.GenesisState>): _242.GenesisState;
                fromAmino(object: _242.GenesisStateAmino): _242.GenesisState;
                toAmino(message: _242.GenesisState): _242.GenesisStateAmino;
                fromAminoMsg(object: _242.GenesisStateAminoMsg): _242.GenesisState;
                toAminoMsg(message: _242.GenesisState): _242.GenesisStateAminoMsg;
                fromProtoMsg(message: _242.GenesisStateProtoMsg): _242.GenesisState;
                toProto(message: _242.GenesisState): Uint8Array;
                toProtoMsg(message: _242.GenesisState): _242.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _242.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _242.Code;
                fromPartial(object: Partial<_242.Code>): _242.Code;
                fromAmino(object: _242.CodeAmino): _242.Code;
                toAmino(message: _242.Code): _242.CodeAmino;
                fromAminoMsg(object: _242.CodeAminoMsg): _242.Code;
                toAminoMsg(message: _242.Code): _242.CodeAminoMsg;
                fromProtoMsg(message: _242.CodeProtoMsg): _242.Code;
                toProto(message: _242.Code): Uint8Array;
                toProtoMsg(message: _242.Code): _242.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _242.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _242.Contract;
                fromPartial(object: Partial<_242.Contract>): _242.Contract;
                fromAmino(object: _242.ContractAmino): _242.Contract;
                toAmino(message: _242.Contract): _242.ContractAmino;
                fromAminoMsg(object: _242.ContractAminoMsg): _242.Contract;
                toAminoMsg(message: _242.Contract): _242.ContractAminoMsg;
                fromProtoMsg(message: _242.ContractProtoMsg): _242.Contract;
                toProto(message: _242.Contract): Uint8Array;
                toProtoMsg(message: _242.Contract): _242.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _242.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _242.Sequence;
                fromPartial(object: Partial<_242.Sequence>): _242.Sequence;
                fromAmino(object: _242.SequenceAmino): _242.Sequence;
                toAmino(message: _242.Sequence): _242.SequenceAmino;
                fromAminoMsg(object: _242.SequenceAminoMsg): _242.Sequence;
                toAminoMsg(message: _242.Sequence): _242.SequenceAminoMsg;
                fromProtoMsg(message: _242.SequenceProtoMsg): _242.Sequence;
                toProto(message: _242.Sequence): Uint8Array;
                toProtoMsg(message: _242.Sequence): _242.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _241.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.StoreCodeAuthorization;
                fromPartial(object: Partial<_241.StoreCodeAuthorization>): _241.StoreCodeAuthorization;
                fromAmino(object: _241.StoreCodeAuthorizationAmino): _241.StoreCodeAuthorization;
                toAmino(message: _241.StoreCodeAuthorization): _241.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _241.StoreCodeAuthorizationAminoMsg): _241.StoreCodeAuthorization;
                toAminoMsg(message: _241.StoreCodeAuthorization): _241.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _241.StoreCodeAuthorizationProtoMsg): _241.StoreCodeAuthorization;
                toProto(message: _241.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _241.StoreCodeAuthorization): _241.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _241.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.ContractExecutionAuthorization;
                fromPartial(object: Partial<_241.ContractExecutionAuthorization>): _241.ContractExecutionAuthorization;
                fromAmino(object: _241.ContractExecutionAuthorizationAmino): _241.ContractExecutionAuthorization;
                toAmino(message: _241.ContractExecutionAuthorization): _241.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _241.ContractExecutionAuthorizationAminoMsg): _241.ContractExecutionAuthorization;
                toAminoMsg(message: _241.ContractExecutionAuthorization): _241.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _241.ContractExecutionAuthorizationProtoMsg): _241.ContractExecutionAuthorization;
                toProto(message: _241.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _241.ContractExecutionAuthorization): _241.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _241.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.ContractMigrationAuthorization;
                fromPartial(object: Partial<_241.ContractMigrationAuthorization>): _241.ContractMigrationAuthorization;
                fromAmino(object: _241.ContractMigrationAuthorizationAmino): _241.ContractMigrationAuthorization;
                toAmino(message: _241.ContractMigrationAuthorization): _241.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _241.ContractMigrationAuthorizationAminoMsg): _241.ContractMigrationAuthorization;
                toAminoMsg(message: _241.ContractMigrationAuthorization): _241.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _241.ContractMigrationAuthorizationProtoMsg): _241.ContractMigrationAuthorization;
                toProto(message: _241.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _241.ContractMigrationAuthorization): _241.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _241.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.CodeGrant;
                fromPartial(object: Partial<_241.CodeGrant>): _241.CodeGrant;
                fromAmino(object: _241.CodeGrantAmino): _241.CodeGrant;
                toAmino(message: _241.CodeGrant): _241.CodeGrantAmino;
                fromAminoMsg(object: _241.CodeGrantAminoMsg): _241.CodeGrant;
                toAminoMsg(message: _241.CodeGrant): _241.CodeGrantAminoMsg;
                fromProtoMsg(message: _241.CodeGrantProtoMsg): _241.CodeGrant;
                toProto(message: _241.CodeGrant): Uint8Array;
                toProtoMsg(message: _241.CodeGrant): _241.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _241.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.ContractGrant;
                fromPartial(object: Partial<_241.ContractGrant>): _241.ContractGrant;
                fromAmino(object: _241.ContractGrantAmino): _241.ContractGrant;
                toAmino(message: _241.ContractGrant): _241.ContractGrantAmino;
                fromAminoMsg(object: _241.ContractGrantAminoMsg): _241.ContractGrant;
                toAminoMsg(message: _241.ContractGrant): _241.ContractGrantAminoMsg;
                fromProtoMsg(message: _241.ContractGrantProtoMsg): _241.ContractGrant;
                toProto(message: _241.ContractGrant): Uint8Array;
                toProtoMsg(message: _241.ContractGrant): _241.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _241.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.MaxCallsLimit;
                fromPartial(object: Partial<_241.MaxCallsLimit>): _241.MaxCallsLimit;
                fromAmino(object: _241.MaxCallsLimitAmino): _241.MaxCallsLimit;
                toAmino(message: _241.MaxCallsLimit): _241.MaxCallsLimitAmino;
                fromAminoMsg(object: _241.MaxCallsLimitAminoMsg): _241.MaxCallsLimit;
                toAminoMsg(message: _241.MaxCallsLimit): _241.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _241.MaxCallsLimitProtoMsg): _241.MaxCallsLimit;
                toProto(message: _241.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _241.MaxCallsLimit): _241.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _241.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.MaxFundsLimit;
                fromPartial(object: Partial<_241.MaxFundsLimit>): _241.MaxFundsLimit;
                fromAmino(object: _241.MaxFundsLimitAmino): _241.MaxFundsLimit;
                toAmino(message: _241.MaxFundsLimit): _241.MaxFundsLimitAmino;
                fromAminoMsg(object: _241.MaxFundsLimitAminoMsg): _241.MaxFundsLimit;
                toAminoMsg(message: _241.MaxFundsLimit): _241.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _241.MaxFundsLimitProtoMsg): _241.MaxFundsLimit;
                toProto(message: _241.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _241.MaxFundsLimit): _241.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _241.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.CombinedLimit;
                fromPartial(object: Partial<_241.CombinedLimit>): _241.CombinedLimit;
                fromAmino(object: _241.CombinedLimitAmino): _241.CombinedLimit;
                toAmino(message: _241.CombinedLimit): _241.CombinedLimitAmino;
                fromAminoMsg(object: _241.CombinedLimitAminoMsg): _241.CombinedLimit;
                toAminoMsg(message: _241.CombinedLimit): _241.CombinedLimitAminoMsg;
                fromProtoMsg(message: _241.CombinedLimitProtoMsg): _241.CombinedLimit;
                toProto(message: _241.CombinedLimit): Uint8Array;
                toProtoMsg(message: _241.CombinedLimit): _241.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _241.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _241.AllowAllMessagesFilter;
                fromPartial(_: Partial<_241.AllowAllMessagesFilter>): _241.AllowAllMessagesFilter;
                fromAmino(_: _241.AllowAllMessagesFilterAmino): _241.AllowAllMessagesFilter;
                toAmino(_: _241.AllowAllMessagesFilter): _241.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _241.AllowAllMessagesFilterAminoMsg): _241.AllowAllMessagesFilter;
                toAminoMsg(message: _241.AllowAllMessagesFilter): _241.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _241.AllowAllMessagesFilterProtoMsg): _241.AllowAllMessagesFilter;
                toProto(message: _241.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _241.AllowAllMessagesFilter): _241.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _241.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_241.AcceptedMessageKeysFilter>): _241.AcceptedMessageKeysFilter;
                fromAmino(object: _241.AcceptedMessageKeysFilterAmino): _241.AcceptedMessageKeysFilter;
                toAmino(message: _241.AcceptedMessageKeysFilter): _241.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _241.AcceptedMessageKeysFilterAminoMsg): _241.AcceptedMessageKeysFilter;
                toAminoMsg(message: _241.AcceptedMessageKeysFilter): _241.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _241.AcceptedMessageKeysFilterProtoMsg): _241.AcceptedMessageKeysFilter;
                toProto(message: _241.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _241.AcceptedMessageKeysFilter): _241.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _241.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _241.AcceptedMessagesFilter;
                fromPartial(object: Partial<_241.AcceptedMessagesFilter>): _241.AcceptedMessagesFilter;
                fromAmino(object: _241.AcceptedMessagesFilterAmino): _241.AcceptedMessagesFilter;
                toAmino(message: _241.AcceptedMessagesFilter): _241.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _241.AcceptedMessagesFilterAminoMsg): _241.AcceptedMessagesFilter;
                toAminoMsg(message: _241.AcceptedMessagesFilter): _241.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _241.AcceptedMessagesFilterProtoMsg): _241.AcceptedMessagesFilter;
                toProto(message: _241.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _241.AcceptedMessagesFilter): _241.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _241.MaxCallsLimit | _241.MaxFundsLimit | _241.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _241.AllowAllMessagesFilter | _241.AcceptedMessageKeysFilter | _241.AcceptedMessagesFilter;
            Cosmwasm_wasmv1ContractAuthzFilterX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzFilterX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
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
                    v1: _428.MsgClientImpl;
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
                        totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
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
                        contractInfo(request: _245.QueryContractInfoRequest): Promise<_245.QueryContractInfoResponse>;
                        contractHistory(request: _245.QueryContractHistoryRequest): Promise<_245.QueryContractHistoryResponse>;
                        contractsByCode(request: _245.QueryContractsByCodeRequest): Promise<_245.QueryContractsByCodeResponse>;
                        allContractState(request: _245.QueryAllContractStateRequest): Promise<_245.QueryAllContractStateResponse>;
                        rawContractState(request: _245.QueryRawContractStateRequest): Promise<_245.QueryRawContractStateResponse>;
                        smartContractState(request: _245.QuerySmartContractStateRequest): Promise<_245.QuerySmartContractStateResponse>;
                        code(request: _245.QueryCodeRequest): Promise<_245.QueryCodeResponse>;
                        codes(request?: _245.QueryCodesRequest): Promise<_245.QueryCodesResponse>;
                        pinnedCodes(request?: _245.QueryPinnedCodesRequest): Promise<_245.QueryPinnedCodesResponse>;
                        params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                        contractsByCreator(request: _245.QueryContractsByCreatorRequest): Promise<_245.QueryContractsByCreatorResponse>;
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
                    v1: _426.LCDQueryClient;
                };
            };
        }>;
    };
}
