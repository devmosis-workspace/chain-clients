import * as _159 from "./wasm/v1/authz";
import * as _160 from "./wasm/v1/genesis";
import * as _161 from "./wasm/v1/ibc";
import * as _162 from "./wasm/v1/proposal_legacy";
import * as _163 from "./wasm/v1/query";
import * as _164 from "./wasm/v1/tx";
import * as _165 from "./wasm/v1/types";
import * as _290 from "./wasm/v1/query.lcd";
import * as _291 from "./wasm/v1/query.rpc.Query";
import * as _292 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _291.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                contractInfo(request: _163.QueryContractInfoRequest): Promise<_163.QueryContractInfoResponse>;
                contractHistory(request: _163.QueryContractHistoryRequest): Promise<_163.QueryContractHistoryResponse>;
                contractsByCode(request: _163.QueryContractsByCodeRequest): Promise<_163.QueryContractsByCodeResponse>;
                allContractState(request: _163.QueryAllContractStateRequest): Promise<_163.QueryAllContractStateResponse>;
                rawContractState(request: _163.QueryRawContractStateRequest): Promise<_163.QueryRawContractStateResponse>;
                smartContractState(request: _163.QuerySmartContractStateRequest): Promise<_163.QuerySmartContractStateResponse>;
                code(request: _163.QueryCodeRequest): Promise<_163.QueryCodeResponse>;
                codes(request?: _163.QueryCodesRequest): Promise<_163.QueryCodesResponse>;
                pinnedCodes(request?: _163.QueryPinnedCodesRequest): Promise<_163.QueryPinnedCodesResponse>;
                params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                contractsByCreator(request: _163.QueryContractsByCreatorRequest): Promise<_163.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _290.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _164.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _164.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _164.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _164.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _164.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _164.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _164.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _164.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _164.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _164.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _164.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _164.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _164.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _164.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _164.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _164.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _164.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _164.MsgStoreCode): {
                        typeUrl: string;
                        value: _164.MsgStoreCode;
                    };
                    instantiateContract(value: _164.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _164.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _164.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _164.MsgInstantiateContract2;
                    };
                    executeContract(value: _164.MsgExecuteContract): {
                        typeUrl: string;
                        value: _164.MsgExecuteContract;
                    };
                    migrateContract(value: _164.MsgMigrateContract): {
                        typeUrl: string;
                        value: _164.MsgMigrateContract;
                    };
                    updateAdmin(value: _164.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _164.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _164.MsgClearAdmin): {
                        typeUrl: string;
                        value: _164.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _164.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _164.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _164.MsgUpdateParams): {
                        typeUrl: string;
                        value: _164.MsgUpdateParams;
                    };
                    sudoContract(value: _164.MsgSudoContract): {
                        typeUrl: string;
                        value: _164.MsgSudoContract;
                    };
                    pinCodes(value: _164.MsgPinCodes): {
                        typeUrl: string;
                        value: _164.MsgPinCodes;
                    };
                    unpinCodes(value: _164.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _164.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _164.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _164.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _164.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _164.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _164.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _164.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _164.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _164.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _164.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _164.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _164.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _164.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _164.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _164.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _164.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _164.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _164.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _164.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _164.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _164.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _164.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _164.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _164.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _164.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _164.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _164.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _164.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _164.MsgStoreCode): {
                        typeUrl: string;
                        value: _164.MsgStoreCode;
                    };
                    instantiateContract(value: _164.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _164.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _164.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _164.MsgInstantiateContract2;
                    };
                    executeContract(value: _164.MsgExecuteContract): {
                        typeUrl: string;
                        value: _164.MsgExecuteContract;
                    };
                    migrateContract(value: _164.MsgMigrateContract): {
                        typeUrl: string;
                        value: _164.MsgMigrateContract;
                    };
                    updateAdmin(value: _164.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _164.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _164.MsgClearAdmin): {
                        typeUrl: string;
                        value: _164.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _164.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _164.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _164.MsgUpdateParams): {
                        typeUrl: string;
                        value: _164.MsgUpdateParams;
                    };
                    sudoContract(value: _164.MsgSudoContract): {
                        typeUrl: string;
                        value: _164.MsgSudoContract;
                    };
                    pinCodes(value: _164.MsgPinCodes): {
                        typeUrl: string;
                        value: _164.MsgPinCodes;
                    };
                    unpinCodes(value: _164.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _164.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _164.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _164.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _164.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _164.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _164.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _164.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _164.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _164.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _164.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _164.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _164.MsgStoreCode) => _164.MsgStoreCodeAmino;
                    fromAmino: (object: _164.MsgStoreCodeAmino) => _164.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _164.MsgInstantiateContract) => _164.MsgInstantiateContractAmino;
                    fromAmino: (object: _164.MsgInstantiateContractAmino) => _164.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _164.MsgInstantiateContract2) => _164.MsgInstantiateContract2Amino;
                    fromAmino: (object: _164.MsgInstantiateContract2Amino) => _164.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _164.MsgExecuteContract) => _164.MsgExecuteContractAmino;
                    fromAmino: (object: _164.MsgExecuteContractAmino) => _164.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _164.MsgMigrateContract) => _164.MsgMigrateContractAmino;
                    fromAmino: (object: _164.MsgMigrateContractAmino) => _164.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _164.MsgUpdateAdmin) => _164.MsgUpdateAdminAmino;
                    fromAmino: (object: _164.MsgUpdateAdminAmino) => _164.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _164.MsgClearAdmin) => _164.MsgClearAdminAmino;
                    fromAmino: (object: _164.MsgClearAdminAmino) => _164.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _164.MsgUpdateInstantiateConfig) => _164.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _164.MsgUpdateInstantiateConfigAmino) => _164.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _164.MsgUpdateParams) => _164.MsgUpdateParamsAmino;
                    fromAmino: (object: _164.MsgUpdateParamsAmino) => _164.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _164.MsgSudoContract) => _164.MsgSudoContractAmino;
                    fromAmino: (object: _164.MsgSudoContractAmino) => _164.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _164.MsgPinCodes) => _164.MsgPinCodesAmino;
                    fromAmino: (object: _164.MsgPinCodesAmino) => _164.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _164.MsgUnpinCodes) => _164.MsgUnpinCodesAmino;
                    fromAmino: (object: _164.MsgUnpinCodesAmino) => _164.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _164.MsgStoreAndInstantiateContract) => _164.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _164.MsgStoreAndInstantiateContractAmino) => _164.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _164.MsgRemoveCodeUploadParamsAddresses) => _164.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _164.MsgRemoveCodeUploadParamsAddressesAmino) => _164.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _164.MsgAddCodeUploadParamsAddresses) => _164.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _164.MsgAddCodeUploadParamsAddressesAmino) => _164.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _164.MsgStoreAndMigrateContract) => _164.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _164.MsgStoreAndMigrateContractAmino) => _164.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _164.MsgUpdateContractLabel) => _164.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _164.MsgUpdateContractLabelAmino) => _164.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _165.AccessType;
            accessTypeToJSON(object: _165.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _165.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _165.ContractCodeHistoryOperationType): string;
            AccessType: typeof _165.AccessType;
            AccessTypeSDKType: typeof _165.AccessType;
            AccessTypeAmino: typeof _165.AccessType;
            ContractCodeHistoryOperationType: typeof _165.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _165.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _165.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _165.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.AccessTypeParam;
                fromPartial(object: Partial<_165.AccessTypeParam>): _165.AccessTypeParam;
                fromAmino(object: _165.AccessTypeParamAmino): _165.AccessTypeParam;
                toAmino(message: _165.AccessTypeParam): _165.AccessTypeParamAmino;
                fromAminoMsg(object: _165.AccessTypeParamAminoMsg): _165.AccessTypeParam;
                toAminoMsg(message: _165.AccessTypeParam): _165.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _165.AccessTypeParamProtoMsg): _165.AccessTypeParam;
                toProto(message: _165.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _165.AccessTypeParam): _165.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _165.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.AccessConfig;
                fromPartial(object: Partial<_165.AccessConfig>): _165.AccessConfig;
                fromAmino(object: _165.AccessConfigAmino): _165.AccessConfig;
                toAmino(message: _165.AccessConfig): _165.AccessConfigAmino;
                fromAminoMsg(object: _165.AccessConfigAminoMsg): _165.AccessConfig;
                toAminoMsg(message: _165.AccessConfig): _165.AccessConfigAminoMsg;
                fromProtoMsg(message: _165.AccessConfigProtoMsg): _165.AccessConfig;
                toProto(message: _165.AccessConfig): Uint8Array;
                toProtoMsg(message: _165.AccessConfig): _165.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _165.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Params;
                fromPartial(object: Partial<_165.Params>): _165.Params;
                fromAmino(object: _165.ParamsAmino): _165.Params;
                toAmino(message: _165.Params): _165.ParamsAmino;
                fromAminoMsg(object: _165.ParamsAminoMsg): _165.Params;
                toAminoMsg(message: _165.Params): _165.ParamsAminoMsg;
                fromProtoMsg(message: _165.ParamsProtoMsg): _165.Params;
                toProto(message: _165.Params): Uint8Array;
                toProtoMsg(message: _165.Params): _165.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _165.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.CodeInfo;
                fromPartial(object: Partial<_165.CodeInfo>): _165.CodeInfo;
                fromAmino(object: _165.CodeInfoAmino): _165.CodeInfo;
                toAmino(message: _165.CodeInfo): _165.CodeInfoAmino;
                fromAminoMsg(object: _165.CodeInfoAminoMsg): _165.CodeInfo;
                toAminoMsg(message: _165.CodeInfo): _165.CodeInfoAminoMsg;
                fromProtoMsg(message: _165.CodeInfoProtoMsg): _165.CodeInfo;
                toProto(message: _165.CodeInfo): Uint8Array;
                toProtoMsg(message: _165.CodeInfo): _165.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _165.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.ContractInfo;
                fromPartial(object: Partial<_165.ContractInfo>): _165.ContractInfo;
                fromAmino(object: _165.ContractInfoAmino): _165.ContractInfo;
                toAmino(message: _165.ContractInfo): _165.ContractInfoAmino;
                fromAminoMsg(object: _165.ContractInfoAminoMsg): _165.ContractInfo;
                toAminoMsg(message: _165.ContractInfo): _165.ContractInfoAminoMsg;
                fromProtoMsg(message: _165.ContractInfoProtoMsg): _165.ContractInfo;
                toProto(message: _165.ContractInfo): Uint8Array;
                toProtoMsg(message: _165.ContractInfo): _165.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _165.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_165.ContractCodeHistoryEntry>): _165.ContractCodeHistoryEntry;
                fromAmino(object: _165.ContractCodeHistoryEntryAmino): _165.ContractCodeHistoryEntry;
                toAmino(message: _165.ContractCodeHistoryEntry): _165.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _165.ContractCodeHistoryEntryAminoMsg): _165.ContractCodeHistoryEntry;
                toAminoMsg(message: _165.ContractCodeHistoryEntry): _165.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _165.ContractCodeHistoryEntryProtoMsg): _165.ContractCodeHistoryEntry;
                toProto(message: _165.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _165.ContractCodeHistoryEntry): _165.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _165.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.AbsoluteTxPosition;
                fromPartial(object: Partial<_165.AbsoluteTxPosition>): _165.AbsoluteTxPosition;
                fromAmino(object: _165.AbsoluteTxPositionAmino): _165.AbsoluteTxPosition;
                toAmino(message: _165.AbsoluteTxPosition): _165.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _165.AbsoluteTxPositionAminoMsg): _165.AbsoluteTxPosition;
                toAminoMsg(message: _165.AbsoluteTxPosition): _165.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _165.AbsoluteTxPositionProtoMsg): _165.AbsoluteTxPosition;
                toProto(message: _165.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _165.AbsoluteTxPosition): _165.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _165.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _165.Model;
                fromPartial(object: Partial<_165.Model>): _165.Model;
                fromAmino(object: _165.ModelAmino): _165.Model;
                toAmino(message: _165.Model): _165.ModelAmino;
                fromAminoMsg(object: _165.ModelAminoMsg): _165.Model;
                toAminoMsg(message: _165.Model): _165.ModelAminoMsg;
                fromProtoMsg(message: _165.ModelProtoMsg): _165.Model;
                toProto(message: _165.Model): Uint8Array;
                toProtoMsg(message: _165.Model): _165.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _164.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgStoreCode;
                fromPartial(object: Partial<_164.MsgStoreCode>): _164.MsgStoreCode;
                fromAmino(object: _164.MsgStoreCodeAmino): _164.MsgStoreCode;
                toAmino(message: _164.MsgStoreCode): _164.MsgStoreCodeAmino;
                fromAminoMsg(object: _164.MsgStoreCodeAminoMsg): _164.MsgStoreCode;
                toAminoMsg(message: _164.MsgStoreCode): _164.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _164.MsgStoreCodeProtoMsg): _164.MsgStoreCode;
                toProto(message: _164.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _164.MsgStoreCode): _164.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _164.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgStoreCodeResponse;
                fromPartial(object: Partial<_164.MsgStoreCodeResponse>): _164.MsgStoreCodeResponse;
                fromAmino(object: _164.MsgStoreCodeResponseAmino): _164.MsgStoreCodeResponse;
                toAmino(message: _164.MsgStoreCodeResponse): _164.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _164.MsgStoreCodeResponseAminoMsg): _164.MsgStoreCodeResponse;
                toAminoMsg(message: _164.MsgStoreCodeResponse): _164.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _164.MsgStoreCodeResponseProtoMsg): _164.MsgStoreCodeResponse;
                toProto(message: _164.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _164.MsgStoreCodeResponse): _164.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _164.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgInstantiateContract;
                fromPartial(object: Partial<_164.MsgInstantiateContract>): _164.MsgInstantiateContract;
                fromAmino(object: _164.MsgInstantiateContractAmino): _164.MsgInstantiateContract;
                toAmino(message: _164.MsgInstantiateContract): _164.MsgInstantiateContractAmino;
                fromAminoMsg(object: _164.MsgInstantiateContractAminoMsg): _164.MsgInstantiateContract;
                toAminoMsg(message: _164.MsgInstantiateContract): _164.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _164.MsgInstantiateContractProtoMsg): _164.MsgInstantiateContract;
                toProto(message: _164.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _164.MsgInstantiateContract): _164.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _164.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_164.MsgInstantiateContractResponse>): _164.MsgInstantiateContractResponse;
                fromAmino(object: _164.MsgInstantiateContractResponseAmino): _164.MsgInstantiateContractResponse;
                toAmino(message: _164.MsgInstantiateContractResponse): _164.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _164.MsgInstantiateContractResponseAminoMsg): _164.MsgInstantiateContractResponse;
                toAminoMsg(message: _164.MsgInstantiateContractResponse): _164.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _164.MsgInstantiateContractResponseProtoMsg): _164.MsgInstantiateContractResponse;
                toProto(message: _164.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _164.MsgInstantiateContractResponse): _164.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _164.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgInstantiateContract2;
                fromPartial(object: Partial<_164.MsgInstantiateContract2>): _164.MsgInstantiateContract2;
                fromAmino(object: _164.MsgInstantiateContract2Amino): _164.MsgInstantiateContract2;
                toAmino(message: _164.MsgInstantiateContract2): _164.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _164.MsgInstantiateContract2AminoMsg): _164.MsgInstantiateContract2;
                toAminoMsg(message: _164.MsgInstantiateContract2): _164.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _164.MsgInstantiateContract2ProtoMsg): _164.MsgInstantiateContract2;
                toProto(message: _164.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _164.MsgInstantiateContract2): _164.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _164.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_164.MsgInstantiateContract2Response>): _164.MsgInstantiateContract2Response;
                fromAmino(object: _164.MsgInstantiateContract2ResponseAmino): _164.MsgInstantiateContract2Response;
                toAmino(message: _164.MsgInstantiateContract2Response): _164.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _164.MsgInstantiateContract2ResponseAminoMsg): _164.MsgInstantiateContract2Response;
                toAminoMsg(message: _164.MsgInstantiateContract2Response): _164.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _164.MsgInstantiateContract2ResponseProtoMsg): _164.MsgInstantiateContract2Response;
                toProto(message: _164.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _164.MsgInstantiateContract2Response): _164.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _164.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgExecuteContract;
                fromPartial(object: Partial<_164.MsgExecuteContract>): _164.MsgExecuteContract;
                fromAmino(object: _164.MsgExecuteContractAmino): _164.MsgExecuteContract;
                toAmino(message: _164.MsgExecuteContract): _164.MsgExecuteContractAmino;
                fromAminoMsg(object: _164.MsgExecuteContractAminoMsg): _164.MsgExecuteContract;
                toAminoMsg(message: _164.MsgExecuteContract): _164.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _164.MsgExecuteContractProtoMsg): _164.MsgExecuteContract;
                toProto(message: _164.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _164.MsgExecuteContract): _164.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _164.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgExecuteContractResponse;
                fromPartial(object: Partial<_164.MsgExecuteContractResponse>): _164.MsgExecuteContractResponse;
                fromAmino(object: _164.MsgExecuteContractResponseAmino): _164.MsgExecuteContractResponse;
                toAmino(message: _164.MsgExecuteContractResponse): _164.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _164.MsgExecuteContractResponseAminoMsg): _164.MsgExecuteContractResponse;
                toAminoMsg(message: _164.MsgExecuteContractResponse): _164.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _164.MsgExecuteContractResponseProtoMsg): _164.MsgExecuteContractResponse;
                toProto(message: _164.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _164.MsgExecuteContractResponse): _164.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _164.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgMigrateContract;
                fromPartial(object: Partial<_164.MsgMigrateContract>): _164.MsgMigrateContract;
                fromAmino(object: _164.MsgMigrateContractAmino): _164.MsgMigrateContract;
                toAmino(message: _164.MsgMigrateContract): _164.MsgMigrateContractAmino;
                fromAminoMsg(object: _164.MsgMigrateContractAminoMsg): _164.MsgMigrateContract;
                toAminoMsg(message: _164.MsgMigrateContract): _164.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _164.MsgMigrateContractProtoMsg): _164.MsgMigrateContract;
                toProto(message: _164.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _164.MsgMigrateContract): _164.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _164.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgMigrateContractResponse;
                fromPartial(object: Partial<_164.MsgMigrateContractResponse>): _164.MsgMigrateContractResponse;
                fromAmino(object: _164.MsgMigrateContractResponseAmino): _164.MsgMigrateContractResponse;
                toAmino(message: _164.MsgMigrateContractResponse): _164.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _164.MsgMigrateContractResponseAminoMsg): _164.MsgMigrateContractResponse;
                toAminoMsg(message: _164.MsgMigrateContractResponse): _164.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _164.MsgMigrateContractResponseProtoMsg): _164.MsgMigrateContractResponse;
                toProto(message: _164.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _164.MsgMigrateContractResponse): _164.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _164.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgUpdateAdmin;
                fromPartial(object: Partial<_164.MsgUpdateAdmin>): _164.MsgUpdateAdmin;
                fromAmino(object: _164.MsgUpdateAdminAmino): _164.MsgUpdateAdmin;
                toAmino(message: _164.MsgUpdateAdmin): _164.MsgUpdateAdminAmino;
                fromAminoMsg(object: _164.MsgUpdateAdminAminoMsg): _164.MsgUpdateAdmin;
                toAminoMsg(message: _164.MsgUpdateAdmin): _164.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateAdminProtoMsg): _164.MsgUpdateAdmin;
                toProto(message: _164.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateAdmin): _164.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _164.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_164.MsgUpdateAdminResponse>): _164.MsgUpdateAdminResponse;
                fromAmino(_: _164.MsgUpdateAdminResponseAmino): _164.MsgUpdateAdminResponse;
                toAmino(_: _164.MsgUpdateAdminResponse): _164.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _164.MsgUpdateAdminResponseAminoMsg): _164.MsgUpdateAdminResponse;
                toAminoMsg(message: _164.MsgUpdateAdminResponse): _164.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateAdminResponseProtoMsg): _164.MsgUpdateAdminResponse;
                toProto(message: _164.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateAdminResponse): _164.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _164.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgClearAdmin;
                fromPartial(object: Partial<_164.MsgClearAdmin>): _164.MsgClearAdmin;
                fromAmino(object: _164.MsgClearAdminAmino): _164.MsgClearAdmin;
                toAmino(message: _164.MsgClearAdmin): _164.MsgClearAdminAmino;
                fromAminoMsg(object: _164.MsgClearAdminAminoMsg): _164.MsgClearAdmin;
                toAminoMsg(message: _164.MsgClearAdmin): _164.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _164.MsgClearAdminProtoMsg): _164.MsgClearAdmin;
                toProto(message: _164.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _164.MsgClearAdmin): _164.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _164.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgClearAdminResponse;
                fromPartial(_: Partial<_164.MsgClearAdminResponse>): _164.MsgClearAdminResponse;
                fromAmino(_: _164.MsgClearAdminResponseAmino): _164.MsgClearAdminResponse;
                toAmino(_: _164.MsgClearAdminResponse): _164.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _164.MsgClearAdminResponseAminoMsg): _164.MsgClearAdminResponse;
                toAminoMsg(message: _164.MsgClearAdminResponse): _164.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _164.MsgClearAdminResponseProtoMsg): _164.MsgClearAdminResponse;
                toProto(message: _164.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _164.MsgClearAdminResponse): _164.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _164.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_164.MsgUpdateInstantiateConfig>): _164.MsgUpdateInstantiateConfig;
                fromAmino(object: _164.MsgUpdateInstantiateConfigAmino): _164.MsgUpdateInstantiateConfig;
                toAmino(message: _164.MsgUpdateInstantiateConfig): _164.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _164.MsgUpdateInstantiateConfigAminoMsg): _164.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _164.MsgUpdateInstantiateConfig): _164.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateInstantiateConfigProtoMsg): _164.MsgUpdateInstantiateConfig;
                toProto(message: _164.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateInstantiateConfig): _164.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _164.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_164.MsgUpdateInstantiateConfigResponse>): _164.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _164.MsgUpdateInstantiateConfigResponseAmino): _164.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _164.MsgUpdateInstantiateConfigResponse): _164.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _164.MsgUpdateInstantiateConfigResponseAminoMsg): _164.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _164.MsgUpdateInstantiateConfigResponse): _164.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateInstantiateConfigResponseProtoMsg): _164.MsgUpdateInstantiateConfigResponse;
                toProto(message: _164.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateInstantiateConfigResponse): _164.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _164.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgUpdateParams;
                fromPartial(object: Partial<_164.MsgUpdateParams>): _164.MsgUpdateParams;
                fromAmino(object: _164.MsgUpdateParamsAmino): _164.MsgUpdateParams;
                toAmino(message: _164.MsgUpdateParams): _164.MsgUpdateParamsAmino;
                fromAminoMsg(object: _164.MsgUpdateParamsAminoMsg): _164.MsgUpdateParams;
                toAminoMsg(message: _164.MsgUpdateParams): _164.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateParamsProtoMsg): _164.MsgUpdateParams;
                toProto(message: _164.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateParams): _164.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _164.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_164.MsgUpdateParamsResponse>): _164.MsgUpdateParamsResponse;
                fromAmino(_: _164.MsgUpdateParamsResponseAmino): _164.MsgUpdateParamsResponse;
                toAmino(_: _164.MsgUpdateParamsResponse): _164.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _164.MsgUpdateParamsResponseAminoMsg): _164.MsgUpdateParamsResponse;
                toAminoMsg(message: _164.MsgUpdateParamsResponse): _164.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateParamsResponseProtoMsg): _164.MsgUpdateParamsResponse;
                toProto(message: _164.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateParamsResponse): _164.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _164.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgSudoContract;
                fromPartial(object: Partial<_164.MsgSudoContract>): _164.MsgSudoContract;
                fromAmino(object: _164.MsgSudoContractAmino): _164.MsgSudoContract;
                toAmino(message: _164.MsgSudoContract): _164.MsgSudoContractAmino;
                fromAminoMsg(object: _164.MsgSudoContractAminoMsg): _164.MsgSudoContract;
                toAminoMsg(message: _164.MsgSudoContract): _164.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _164.MsgSudoContractProtoMsg): _164.MsgSudoContract;
                toProto(message: _164.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _164.MsgSudoContract): _164.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _164.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgSudoContractResponse;
                fromPartial(object: Partial<_164.MsgSudoContractResponse>): _164.MsgSudoContractResponse;
                fromAmino(object: _164.MsgSudoContractResponseAmino): _164.MsgSudoContractResponse;
                toAmino(message: _164.MsgSudoContractResponse): _164.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _164.MsgSudoContractResponseAminoMsg): _164.MsgSudoContractResponse;
                toAminoMsg(message: _164.MsgSudoContractResponse): _164.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _164.MsgSudoContractResponseProtoMsg): _164.MsgSudoContractResponse;
                toProto(message: _164.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _164.MsgSudoContractResponse): _164.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _164.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgPinCodes;
                fromPartial(object: Partial<_164.MsgPinCodes>): _164.MsgPinCodes;
                fromAmino(object: _164.MsgPinCodesAmino): _164.MsgPinCodes;
                toAmino(message: _164.MsgPinCodes): _164.MsgPinCodesAmino;
                fromAminoMsg(object: _164.MsgPinCodesAminoMsg): _164.MsgPinCodes;
                toAminoMsg(message: _164.MsgPinCodes): _164.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _164.MsgPinCodesProtoMsg): _164.MsgPinCodes;
                toProto(message: _164.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _164.MsgPinCodes): _164.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _164.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgPinCodesResponse;
                fromPartial(_: Partial<_164.MsgPinCodesResponse>): _164.MsgPinCodesResponse;
                fromAmino(_: _164.MsgPinCodesResponseAmino): _164.MsgPinCodesResponse;
                toAmino(_: _164.MsgPinCodesResponse): _164.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _164.MsgPinCodesResponseAminoMsg): _164.MsgPinCodesResponse;
                toAminoMsg(message: _164.MsgPinCodesResponse): _164.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _164.MsgPinCodesResponseProtoMsg): _164.MsgPinCodesResponse;
                toProto(message: _164.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _164.MsgPinCodesResponse): _164.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _164.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgUnpinCodes;
                fromPartial(object: Partial<_164.MsgUnpinCodes>): _164.MsgUnpinCodes;
                fromAmino(object: _164.MsgUnpinCodesAmino): _164.MsgUnpinCodes;
                toAmino(message: _164.MsgUnpinCodes): _164.MsgUnpinCodesAmino;
                fromAminoMsg(object: _164.MsgUnpinCodesAminoMsg): _164.MsgUnpinCodes;
                toAminoMsg(message: _164.MsgUnpinCodes): _164.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _164.MsgUnpinCodesProtoMsg): _164.MsgUnpinCodes;
                toProto(message: _164.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _164.MsgUnpinCodes): _164.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _164.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_164.MsgUnpinCodesResponse>): _164.MsgUnpinCodesResponse;
                fromAmino(_: _164.MsgUnpinCodesResponseAmino): _164.MsgUnpinCodesResponse;
                toAmino(_: _164.MsgUnpinCodesResponse): _164.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _164.MsgUnpinCodesResponseAminoMsg): _164.MsgUnpinCodesResponse;
                toAminoMsg(message: _164.MsgUnpinCodesResponse): _164.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _164.MsgUnpinCodesResponseProtoMsg): _164.MsgUnpinCodesResponse;
                toProto(message: _164.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _164.MsgUnpinCodesResponse): _164.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _164.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_164.MsgStoreAndInstantiateContract>): _164.MsgStoreAndInstantiateContract;
                fromAmino(object: _164.MsgStoreAndInstantiateContractAmino): _164.MsgStoreAndInstantiateContract;
                toAmino(message: _164.MsgStoreAndInstantiateContract): _164.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _164.MsgStoreAndInstantiateContractAminoMsg): _164.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _164.MsgStoreAndInstantiateContract): _164.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _164.MsgStoreAndInstantiateContractProtoMsg): _164.MsgStoreAndInstantiateContract;
                toProto(message: _164.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _164.MsgStoreAndInstantiateContract): _164.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _164.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_164.MsgStoreAndInstantiateContractResponse>): _164.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _164.MsgStoreAndInstantiateContractResponseAmino): _164.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _164.MsgStoreAndInstantiateContractResponse): _164.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _164.MsgStoreAndInstantiateContractResponseAminoMsg): _164.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _164.MsgStoreAndInstantiateContractResponse): _164.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _164.MsgStoreAndInstantiateContractResponseProtoMsg): _164.MsgStoreAndInstantiateContractResponse;
                toProto(message: _164.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _164.MsgStoreAndInstantiateContractResponse): _164.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _164.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_164.MsgAddCodeUploadParamsAddresses>): _164.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _164.MsgAddCodeUploadParamsAddressesAmino): _164.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _164.MsgAddCodeUploadParamsAddresses): _164.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _164.MsgAddCodeUploadParamsAddressesAminoMsg): _164.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _164.MsgAddCodeUploadParamsAddresses): _164.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _164.MsgAddCodeUploadParamsAddressesProtoMsg): _164.MsgAddCodeUploadParamsAddresses;
                toProto(message: _164.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _164.MsgAddCodeUploadParamsAddresses): _164.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _164.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_164.MsgAddCodeUploadParamsAddressesResponse>): _164.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _164.MsgAddCodeUploadParamsAddressesResponseAmino): _164.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _164.MsgAddCodeUploadParamsAddressesResponse): _164.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _164.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _164.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _164.MsgAddCodeUploadParamsAddressesResponse): _164.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _164.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _164.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _164.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _164.MsgAddCodeUploadParamsAddressesResponse): _164.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _164.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_164.MsgRemoveCodeUploadParamsAddresses>): _164.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _164.MsgRemoveCodeUploadParamsAddressesAmino): _164.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _164.MsgRemoveCodeUploadParamsAddresses): _164.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _164.MsgRemoveCodeUploadParamsAddressesAminoMsg): _164.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _164.MsgRemoveCodeUploadParamsAddresses): _164.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _164.MsgRemoveCodeUploadParamsAddressesProtoMsg): _164.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _164.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _164.MsgRemoveCodeUploadParamsAddresses): _164.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _164.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_164.MsgRemoveCodeUploadParamsAddressesResponse>): _164.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _164.MsgRemoveCodeUploadParamsAddressesResponseAmino): _164.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _164.MsgRemoveCodeUploadParamsAddressesResponse): _164.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _164.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _164.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _164.MsgRemoveCodeUploadParamsAddressesResponse): _164.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _164.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _164.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _164.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _164.MsgRemoveCodeUploadParamsAddressesResponse): _164.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _164.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_164.MsgStoreAndMigrateContract>): _164.MsgStoreAndMigrateContract;
                fromAmino(object: _164.MsgStoreAndMigrateContractAmino): _164.MsgStoreAndMigrateContract;
                toAmino(message: _164.MsgStoreAndMigrateContract): _164.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _164.MsgStoreAndMigrateContractAminoMsg): _164.MsgStoreAndMigrateContract;
                toAminoMsg(message: _164.MsgStoreAndMigrateContract): _164.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _164.MsgStoreAndMigrateContractProtoMsg): _164.MsgStoreAndMigrateContract;
                toProto(message: _164.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _164.MsgStoreAndMigrateContract): _164.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _164.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_164.MsgStoreAndMigrateContractResponse>): _164.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _164.MsgStoreAndMigrateContractResponseAmino): _164.MsgStoreAndMigrateContractResponse;
                toAmino(message: _164.MsgStoreAndMigrateContractResponse): _164.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _164.MsgStoreAndMigrateContractResponseAminoMsg): _164.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _164.MsgStoreAndMigrateContractResponse): _164.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _164.MsgStoreAndMigrateContractResponseProtoMsg): _164.MsgStoreAndMigrateContractResponse;
                toProto(message: _164.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _164.MsgStoreAndMigrateContractResponse): _164.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _164.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _164.MsgUpdateContractLabel;
                fromPartial(object: Partial<_164.MsgUpdateContractLabel>): _164.MsgUpdateContractLabel;
                fromAmino(object: _164.MsgUpdateContractLabelAmino): _164.MsgUpdateContractLabel;
                toAmino(message: _164.MsgUpdateContractLabel): _164.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _164.MsgUpdateContractLabelAminoMsg): _164.MsgUpdateContractLabel;
                toAminoMsg(message: _164.MsgUpdateContractLabel): _164.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateContractLabelProtoMsg): _164.MsgUpdateContractLabel;
                toProto(message: _164.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateContractLabel): _164.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _164.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _164.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_164.MsgUpdateContractLabelResponse>): _164.MsgUpdateContractLabelResponse;
                fromAmino(_: _164.MsgUpdateContractLabelResponseAmino): _164.MsgUpdateContractLabelResponse;
                toAmino(_: _164.MsgUpdateContractLabelResponse): _164.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _164.MsgUpdateContractLabelResponseAminoMsg): _164.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _164.MsgUpdateContractLabelResponse): _164.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _164.MsgUpdateContractLabelResponseProtoMsg): _164.MsgUpdateContractLabelResponse;
                toProto(message: _164.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _164.MsgUpdateContractLabelResponse): _164.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _163.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractInfoRequest;
                fromPartial(object: Partial<_163.QueryContractInfoRequest>): _163.QueryContractInfoRequest;
                fromAmino(object: _163.QueryContractInfoRequestAmino): _163.QueryContractInfoRequest;
                toAmino(message: _163.QueryContractInfoRequest): _163.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _163.QueryContractInfoRequestAminoMsg): _163.QueryContractInfoRequest;
                toAminoMsg(message: _163.QueryContractInfoRequest): _163.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _163.QueryContractInfoRequestProtoMsg): _163.QueryContractInfoRequest;
                toProto(message: _163.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _163.QueryContractInfoRequest): _163.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _163.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractInfoResponse;
                fromPartial(object: Partial<_163.QueryContractInfoResponse>): _163.QueryContractInfoResponse;
                fromAmino(object: _163.QueryContractInfoResponseAmino): _163.QueryContractInfoResponse;
                toAmino(message: _163.QueryContractInfoResponse): _163.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _163.QueryContractInfoResponseAminoMsg): _163.QueryContractInfoResponse;
                toAminoMsg(message: _163.QueryContractInfoResponse): _163.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _163.QueryContractInfoResponseProtoMsg): _163.QueryContractInfoResponse;
                toProto(message: _163.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _163.QueryContractInfoResponse): _163.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _163.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractHistoryRequest;
                fromPartial(object: Partial<_163.QueryContractHistoryRequest>): _163.QueryContractHistoryRequest;
                fromAmino(object: _163.QueryContractHistoryRequestAmino): _163.QueryContractHistoryRequest;
                toAmino(message: _163.QueryContractHistoryRequest): _163.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _163.QueryContractHistoryRequestAminoMsg): _163.QueryContractHistoryRequest;
                toAminoMsg(message: _163.QueryContractHistoryRequest): _163.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _163.QueryContractHistoryRequestProtoMsg): _163.QueryContractHistoryRequest;
                toProto(message: _163.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _163.QueryContractHistoryRequest): _163.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _163.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractHistoryResponse;
                fromPartial(object: Partial<_163.QueryContractHistoryResponse>): _163.QueryContractHistoryResponse;
                fromAmino(object: _163.QueryContractHistoryResponseAmino): _163.QueryContractHistoryResponse;
                toAmino(message: _163.QueryContractHistoryResponse): _163.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _163.QueryContractHistoryResponseAminoMsg): _163.QueryContractHistoryResponse;
                toAminoMsg(message: _163.QueryContractHistoryResponse): _163.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _163.QueryContractHistoryResponseProtoMsg): _163.QueryContractHistoryResponse;
                toProto(message: _163.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _163.QueryContractHistoryResponse): _163.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _163.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_163.QueryContractsByCodeRequest>): _163.QueryContractsByCodeRequest;
                fromAmino(object: _163.QueryContractsByCodeRequestAmino): _163.QueryContractsByCodeRequest;
                toAmino(message: _163.QueryContractsByCodeRequest): _163.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _163.QueryContractsByCodeRequestAminoMsg): _163.QueryContractsByCodeRequest;
                toAminoMsg(message: _163.QueryContractsByCodeRequest): _163.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _163.QueryContractsByCodeRequestProtoMsg): _163.QueryContractsByCodeRequest;
                toProto(message: _163.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _163.QueryContractsByCodeRequest): _163.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _163.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_163.QueryContractsByCodeResponse>): _163.QueryContractsByCodeResponse;
                fromAmino(object: _163.QueryContractsByCodeResponseAmino): _163.QueryContractsByCodeResponse;
                toAmino(message: _163.QueryContractsByCodeResponse): _163.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _163.QueryContractsByCodeResponseAminoMsg): _163.QueryContractsByCodeResponse;
                toAminoMsg(message: _163.QueryContractsByCodeResponse): _163.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _163.QueryContractsByCodeResponseProtoMsg): _163.QueryContractsByCodeResponse;
                toProto(message: _163.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _163.QueryContractsByCodeResponse): _163.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _163.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryAllContractStateRequest;
                fromPartial(object: Partial<_163.QueryAllContractStateRequest>): _163.QueryAllContractStateRequest;
                fromAmino(object: _163.QueryAllContractStateRequestAmino): _163.QueryAllContractStateRequest;
                toAmino(message: _163.QueryAllContractStateRequest): _163.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _163.QueryAllContractStateRequestAminoMsg): _163.QueryAllContractStateRequest;
                toAminoMsg(message: _163.QueryAllContractStateRequest): _163.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _163.QueryAllContractStateRequestProtoMsg): _163.QueryAllContractStateRequest;
                toProto(message: _163.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _163.QueryAllContractStateRequest): _163.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _163.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryAllContractStateResponse;
                fromPartial(object: Partial<_163.QueryAllContractStateResponse>): _163.QueryAllContractStateResponse;
                fromAmino(object: _163.QueryAllContractStateResponseAmino): _163.QueryAllContractStateResponse;
                toAmino(message: _163.QueryAllContractStateResponse): _163.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _163.QueryAllContractStateResponseAminoMsg): _163.QueryAllContractStateResponse;
                toAminoMsg(message: _163.QueryAllContractStateResponse): _163.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _163.QueryAllContractStateResponseProtoMsg): _163.QueryAllContractStateResponse;
                toProto(message: _163.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _163.QueryAllContractStateResponse): _163.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _163.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryRawContractStateRequest;
                fromPartial(object: Partial<_163.QueryRawContractStateRequest>): _163.QueryRawContractStateRequest;
                fromAmino(object: _163.QueryRawContractStateRequestAmino): _163.QueryRawContractStateRequest;
                toAmino(message: _163.QueryRawContractStateRequest): _163.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _163.QueryRawContractStateRequestAminoMsg): _163.QueryRawContractStateRequest;
                toAminoMsg(message: _163.QueryRawContractStateRequest): _163.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _163.QueryRawContractStateRequestProtoMsg): _163.QueryRawContractStateRequest;
                toProto(message: _163.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _163.QueryRawContractStateRequest): _163.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _163.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryRawContractStateResponse;
                fromPartial(object: Partial<_163.QueryRawContractStateResponse>): _163.QueryRawContractStateResponse;
                fromAmino(object: _163.QueryRawContractStateResponseAmino): _163.QueryRawContractStateResponse;
                toAmino(message: _163.QueryRawContractStateResponse): _163.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _163.QueryRawContractStateResponseAminoMsg): _163.QueryRawContractStateResponse;
                toAminoMsg(message: _163.QueryRawContractStateResponse): _163.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _163.QueryRawContractStateResponseProtoMsg): _163.QueryRawContractStateResponse;
                toProto(message: _163.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _163.QueryRawContractStateResponse): _163.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _163.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_163.QuerySmartContractStateRequest>): _163.QuerySmartContractStateRequest;
                fromAmino(object: _163.QuerySmartContractStateRequestAmino): _163.QuerySmartContractStateRequest;
                toAmino(message: _163.QuerySmartContractStateRequest): _163.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _163.QuerySmartContractStateRequestAminoMsg): _163.QuerySmartContractStateRequest;
                toAminoMsg(message: _163.QuerySmartContractStateRequest): _163.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _163.QuerySmartContractStateRequestProtoMsg): _163.QuerySmartContractStateRequest;
                toProto(message: _163.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _163.QuerySmartContractStateRequest): _163.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _163.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_163.QuerySmartContractStateResponse>): _163.QuerySmartContractStateResponse;
                fromAmino(object: _163.QuerySmartContractStateResponseAmino): _163.QuerySmartContractStateResponse;
                toAmino(message: _163.QuerySmartContractStateResponse): _163.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _163.QuerySmartContractStateResponseAminoMsg): _163.QuerySmartContractStateResponse;
                toAminoMsg(message: _163.QuerySmartContractStateResponse): _163.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _163.QuerySmartContractStateResponseProtoMsg): _163.QuerySmartContractStateResponse;
                toProto(message: _163.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _163.QuerySmartContractStateResponse): _163.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _163.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryCodeRequest;
                fromPartial(object: Partial<_163.QueryCodeRequest>): _163.QueryCodeRequest;
                fromAmino(object: _163.QueryCodeRequestAmino): _163.QueryCodeRequest;
                toAmino(message: _163.QueryCodeRequest): _163.QueryCodeRequestAmino;
                fromAminoMsg(object: _163.QueryCodeRequestAminoMsg): _163.QueryCodeRequest;
                toAminoMsg(message: _163.QueryCodeRequest): _163.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _163.QueryCodeRequestProtoMsg): _163.QueryCodeRequest;
                toProto(message: _163.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _163.QueryCodeRequest): _163.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _163.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.CodeInfoResponse;
                fromPartial(object: Partial<_163.CodeInfoResponse>): _163.CodeInfoResponse;
                fromAmino(object: _163.CodeInfoResponseAmino): _163.CodeInfoResponse;
                toAmino(message: _163.CodeInfoResponse): _163.CodeInfoResponseAmino;
                fromAminoMsg(object: _163.CodeInfoResponseAminoMsg): _163.CodeInfoResponse;
                toAminoMsg(message: _163.CodeInfoResponse): _163.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _163.CodeInfoResponseProtoMsg): _163.CodeInfoResponse;
                toProto(message: _163.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _163.CodeInfoResponse): _163.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _163.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryCodeResponse;
                fromPartial(object: Partial<_163.QueryCodeResponse>): _163.QueryCodeResponse;
                fromAmino(object: _163.QueryCodeResponseAmino): _163.QueryCodeResponse;
                toAmino(message: _163.QueryCodeResponse): _163.QueryCodeResponseAmino;
                fromAminoMsg(object: _163.QueryCodeResponseAminoMsg): _163.QueryCodeResponse;
                toAminoMsg(message: _163.QueryCodeResponse): _163.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _163.QueryCodeResponseProtoMsg): _163.QueryCodeResponse;
                toProto(message: _163.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _163.QueryCodeResponse): _163.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _163.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryCodesRequest;
                fromPartial(object: Partial<_163.QueryCodesRequest>): _163.QueryCodesRequest;
                fromAmino(object: _163.QueryCodesRequestAmino): _163.QueryCodesRequest;
                toAmino(message: _163.QueryCodesRequest): _163.QueryCodesRequestAmino;
                fromAminoMsg(object: _163.QueryCodesRequestAminoMsg): _163.QueryCodesRequest;
                toAminoMsg(message: _163.QueryCodesRequest): _163.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _163.QueryCodesRequestProtoMsg): _163.QueryCodesRequest;
                toProto(message: _163.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _163.QueryCodesRequest): _163.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _163.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryCodesResponse;
                fromPartial(object: Partial<_163.QueryCodesResponse>): _163.QueryCodesResponse;
                fromAmino(object: _163.QueryCodesResponseAmino): _163.QueryCodesResponse;
                toAmino(message: _163.QueryCodesResponse): _163.QueryCodesResponseAmino;
                fromAminoMsg(object: _163.QueryCodesResponseAminoMsg): _163.QueryCodesResponse;
                toAminoMsg(message: _163.QueryCodesResponse): _163.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _163.QueryCodesResponseProtoMsg): _163.QueryCodesResponse;
                toProto(message: _163.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _163.QueryCodesResponse): _163.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _163.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_163.QueryPinnedCodesRequest>): _163.QueryPinnedCodesRequest;
                fromAmino(object: _163.QueryPinnedCodesRequestAmino): _163.QueryPinnedCodesRequest;
                toAmino(message: _163.QueryPinnedCodesRequest): _163.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _163.QueryPinnedCodesRequestAminoMsg): _163.QueryPinnedCodesRequest;
                toAminoMsg(message: _163.QueryPinnedCodesRequest): _163.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _163.QueryPinnedCodesRequestProtoMsg): _163.QueryPinnedCodesRequest;
                toProto(message: _163.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _163.QueryPinnedCodesRequest): _163.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _163.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_163.QueryPinnedCodesResponse>): _163.QueryPinnedCodesResponse;
                fromAmino(object: _163.QueryPinnedCodesResponseAmino): _163.QueryPinnedCodesResponse;
                toAmino(message: _163.QueryPinnedCodesResponse): _163.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _163.QueryPinnedCodesResponseAminoMsg): _163.QueryPinnedCodesResponse;
                toAminoMsg(message: _163.QueryPinnedCodesResponse): _163.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _163.QueryPinnedCodesResponseProtoMsg): _163.QueryPinnedCodesResponse;
                toProto(message: _163.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _163.QueryPinnedCodesResponse): _163.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _163.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _163.QueryParamsRequest;
                fromPartial(_: Partial<_163.QueryParamsRequest>): _163.QueryParamsRequest;
                fromAmino(_: _163.QueryParamsRequestAmino): _163.QueryParamsRequest;
                toAmino(_: _163.QueryParamsRequest): _163.QueryParamsRequestAmino;
                fromAminoMsg(object: _163.QueryParamsRequestAminoMsg): _163.QueryParamsRequest;
                toAminoMsg(message: _163.QueryParamsRequest): _163.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _163.QueryParamsRequestProtoMsg): _163.QueryParamsRequest;
                toProto(message: _163.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _163.QueryParamsRequest): _163.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _163.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryParamsResponse;
                fromPartial(object: Partial<_163.QueryParamsResponse>): _163.QueryParamsResponse;
                fromAmino(object: _163.QueryParamsResponseAmino): _163.QueryParamsResponse;
                toAmino(message: _163.QueryParamsResponse): _163.QueryParamsResponseAmino;
                fromAminoMsg(object: _163.QueryParamsResponseAminoMsg): _163.QueryParamsResponse;
                toAminoMsg(message: _163.QueryParamsResponse): _163.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _163.QueryParamsResponseProtoMsg): _163.QueryParamsResponse;
                toProto(message: _163.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _163.QueryParamsResponse): _163.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _163.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_163.QueryContractsByCreatorRequest>): _163.QueryContractsByCreatorRequest;
                fromAmino(object: _163.QueryContractsByCreatorRequestAmino): _163.QueryContractsByCreatorRequest;
                toAmino(message: _163.QueryContractsByCreatorRequest): _163.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _163.QueryContractsByCreatorRequestAminoMsg): _163.QueryContractsByCreatorRequest;
                toAminoMsg(message: _163.QueryContractsByCreatorRequest): _163.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _163.QueryContractsByCreatorRequestProtoMsg): _163.QueryContractsByCreatorRequest;
                toProto(message: _163.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _163.QueryContractsByCreatorRequest): _163.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _163.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _163.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_163.QueryContractsByCreatorResponse>): _163.QueryContractsByCreatorResponse;
                fromAmino(object: _163.QueryContractsByCreatorResponseAmino): _163.QueryContractsByCreatorResponse;
                toAmino(message: _163.QueryContractsByCreatorResponse): _163.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _163.QueryContractsByCreatorResponseAminoMsg): _163.QueryContractsByCreatorResponse;
                toAminoMsg(message: _163.QueryContractsByCreatorResponse): _163.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _163.QueryContractsByCreatorResponseProtoMsg): _163.QueryContractsByCreatorResponse;
                toProto(message: _163.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _163.QueryContractsByCreatorResponse): _163.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _162.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.StoreCodeProposal;
                fromPartial(object: Partial<_162.StoreCodeProposal>): _162.StoreCodeProposal;
                fromAmino(object: _162.StoreCodeProposalAmino): _162.StoreCodeProposal;
                toAmino(message: _162.StoreCodeProposal): _162.StoreCodeProposalAmino;
                fromAminoMsg(object: _162.StoreCodeProposalAminoMsg): _162.StoreCodeProposal;
                toAminoMsg(message: _162.StoreCodeProposal): _162.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _162.StoreCodeProposalProtoMsg): _162.StoreCodeProposal;
                toProto(message: _162.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _162.StoreCodeProposal): _162.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _162.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.InstantiateContractProposal;
                fromPartial(object: Partial<_162.InstantiateContractProposal>): _162.InstantiateContractProposal;
                fromAmino(object: _162.InstantiateContractProposalAmino): _162.InstantiateContractProposal;
                toAmino(message: _162.InstantiateContractProposal): _162.InstantiateContractProposalAmino;
                fromAminoMsg(object: _162.InstantiateContractProposalAminoMsg): _162.InstantiateContractProposal;
                toAminoMsg(message: _162.InstantiateContractProposal): _162.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _162.InstantiateContractProposalProtoMsg): _162.InstantiateContractProposal;
                toProto(message: _162.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _162.InstantiateContractProposal): _162.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _162.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.InstantiateContract2Proposal;
                fromPartial(object: Partial<_162.InstantiateContract2Proposal>): _162.InstantiateContract2Proposal;
                fromAmino(object: _162.InstantiateContract2ProposalAmino): _162.InstantiateContract2Proposal;
                toAmino(message: _162.InstantiateContract2Proposal): _162.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _162.InstantiateContract2ProposalAminoMsg): _162.InstantiateContract2Proposal;
                toAminoMsg(message: _162.InstantiateContract2Proposal): _162.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _162.InstantiateContract2ProposalProtoMsg): _162.InstantiateContract2Proposal;
                toProto(message: _162.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _162.InstantiateContract2Proposal): _162.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _162.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.MigrateContractProposal;
                fromPartial(object: Partial<_162.MigrateContractProposal>): _162.MigrateContractProposal;
                fromAmino(object: _162.MigrateContractProposalAmino): _162.MigrateContractProposal;
                toAmino(message: _162.MigrateContractProposal): _162.MigrateContractProposalAmino;
                fromAminoMsg(object: _162.MigrateContractProposalAminoMsg): _162.MigrateContractProposal;
                toAminoMsg(message: _162.MigrateContractProposal): _162.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _162.MigrateContractProposalProtoMsg): _162.MigrateContractProposal;
                toProto(message: _162.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _162.MigrateContractProposal): _162.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _162.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.SudoContractProposal;
                fromPartial(object: Partial<_162.SudoContractProposal>): _162.SudoContractProposal;
                fromAmino(object: _162.SudoContractProposalAmino): _162.SudoContractProposal;
                toAmino(message: _162.SudoContractProposal): _162.SudoContractProposalAmino;
                fromAminoMsg(object: _162.SudoContractProposalAminoMsg): _162.SudoContractProposal;
                toAminoMsg(message: _162.SudoContractProposal): _162.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _162.SudoContractProposalProtoMsg): _162.SudoContractProposal;
                toProto(message: _162.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _162.SudoContractProposal): _162.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _162.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ExecuteContractProposal;
                fromPartial(object: Partial<_162.ExecuteContractProposal>): _162.ExecuteContractProposal;
                fromAmino(object: _162.ExecuteContractProposalAmino): _162.ExecuteContractProposal;
                toAmino(message: _162.ExecuteContractProposal): _162.ExecuteContractProposalAmino;
                fromAminoMsg(object: _162.ExecuteContractProposalAminoMsg): _162.ExecuteContractProposal;
                toAminoMsg(message: _162.ExecuteContractProposal): _162.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _162.ExecuteContractProposalProtoMsg): _162.ExecuteContractProposal;
                toProto(message: _162.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _162.ExecuteContractProposal): _162.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _162.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.UpdateAdminProposal;
                fromPartial(object: Partial<_162.UpdateAdminProposal>): _162.UpdateAdminProposal;
                fromAmino(object: _162.UpdateAdminProposalAmino): _162.UpdateAdminProposal;
                toAmino(message: _162.UpdateAdminProposal): _162.UpdateAdminProposalAmino;
                fromAminoMsg(object: _162.UpdateAdminProposalAminoMsg): _162.UpdateAdminProposal;
                toAminoMsg(message: _162.UpdateAdminProposal): _162.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _162.UpdateAdminProposalProtoMsg): _162.UpdateAdminProposal;
                toProto(message: _162.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _162.UpdateAdminProposal): _162.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _162.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.ClearAdminProposal;
                fromPartial(object: Partial<_162.ClearAdminProposal>): _162.ClearAdminProposal;
                fromAmino(object: _162.ClearAdminProposalAmino): _162.ClearAdminProposal;
                toAmino(message: _162.ClearAdminProposal): _162.ClearAdminProposalAmino;
                fromAminoMsg(object: _162.ClearAdminProposalAminoMsg): _162.ClearAdminProposal;
                toAminoMsg(message: _162.ClearAdminProposal): _162.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _162.ClearAdminProposalProtoMsg): _162.ClearAdminProposal;
                toProto(message: _162.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _162.ClearAdminProposal): _162.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _162.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.PinCodesProposal;
                fromPartial(object: Partial<_162.PinCodesProposal>): _162.PinCodesProposal;
                fromAmino(object: _162.PinCodesProposalAmino): _162.PinCodesProposal;
                toAmino(message: _162.PinCodesProposal): _162.PinCodesProposalAmino;
                fromAminoMsg(object: _162.PinCodesProposalAminoMsg): _162.PinCodesProposal;
                toAminoMsg(message: _162.PinCodesProposal): _162.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _162.PinCodesProposalProtoMsg): _162.PinCodesProposal;
                toProto(message: _162.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _162.PinCodesProposal): _162.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _162.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.UnpinCodesProposal;
                fromPartial(object: Partial<_162.UnpinCodesProposal>): _162.UnpinCodesProposal;
                fromAmino(object: _162.UnpinCodesProposalAmino): _162.UnpinCodesProposal;
                toAmino(message: _162.UnpinCodesProposal): _162.UnpinCodesProposalAmino;
                fromAminoMsg(object: _162.UnpinCodesProposalAminoMsg): _162.UnpinCodesProposal;
                toAminoMsg(message: _162.UnpinCodesProposal): _162.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _162.UnpinCodesProposalProtoMsg): _162.UnpinCodesProposal;
                toProto(message: _162.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _162.UnpinCodesProposal): _162.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _162.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.AccessConfigUpdate;
                fromPartial(object: Partial<_162.AccessConfigUpdate>): _162.AccessConfigUpdate;
                fromAmino(object: _162.AccessConfigUpdateAmino): _162.AccessConfigUpdate;
                toAmino(message: _162.AccessConfigUpdate): _162.AccessConfigUpdateAmino;
                fromAminoMsg(object: _162.AccessConfigUpdateAminoMsg): _162.AccessConfigUpdate;
                toAminoMsg(message: _162.AccessConfigUpdate): _162.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _162.AccessConfigUpdateProtoMsg): _162.AccessConfigUpdate;
                toProto(message: _162.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _162.AccessConfigUpdate): _162.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _162.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_162.UpdateInstantiateConfigProposal>): _162.UpdateInstantiateConfigProposal;
                fromAmino(object: _162.UpdateInstantiateConfigProposalAmino): _162.UpdateInstantiateConfigProposal;
                toAmino(message: _162.UpdateInstantiateConfigProposal): _162.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _162.UpdateInstantiateConfigProposalAminoMsg): _162.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _162.UpdateInstantiateConfigProposal): _162.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _162.UpdateInstantiateConfigProposalProtoMsg): _162.UpdateInstantiateConfigProposal;
                toProto(message: _162.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _162.UpdateInstantiateConfigProposal): _162.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _162.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _162.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_162.StoreAndInstantiateContractProposal>): _162.StoreAndInstantiateContractProposal;
                fromAmino(object: _162.StoreAndInstantiateContractProposalAmino): _162.StoreAndInstantiateContractProposal;
                toAmino(message: _162.StoreAndInstantiateContractProposal): _162.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _162.StoreAndInstantiateContractProposalAminoMsg): _162.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _162.StoreAndInstantiateContractProposal): _162.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _162.StoreAndInstantiateContractProposalProtoMsg): _162.StoreAndInstantiateContractProposal;
                toProto(message: _162.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _162.StoreAndInstantiateContractProposal): _162.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _161.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.MsgIBCSend;
                fromPartial(object: Partial<_161.MsgIBCSend>): _161.MsgIBCSend;
                fromAmino(object: _161.MsgIBCSendAmino): _161.MsgIBCSend;
                toAmino(message: _161.MsgIBCSend): _161.MsgIBCSendAmino;
                fromAminoMsg(object: _161.MsgIBCSendAminoMsg): _161.MsgIBCSend;
                toAminoMsg(message: _161.MsgIBCSend): _161.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _161.MsgIBCSendProtoMsg): _161.MsgIBCSend;
                toProto(message: _161.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _161.MsgIBCSend): _161.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _161.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.MsgIBCSendResponse;
                fromPartial(object: Partial<_161.MsgIBCSendResponse>): _161.MsgIBCSendResponse;
                fromAmino(object: _161.MsgIBCSendResponseAmino): _161.MsgIBCSendResponse;
                toAmino(message: _161.MsgIBCSendResponse): _161.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _161.MsgIBCSendResponseAminoMsg): _161.MsgIBCSendResponse;
                toAminoMsg(message: _161.MsgIBCSendResponse): _161.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _161.MsgIBCSendResponseProtoMsg): _161.MsgIBCSendResponse;
                toProto(message: _161.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _161.MsgIBCSendResponse): _161.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _161.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _161.MsgIBCCloseChannel;
                fromPartial(object: Partial<_161.MsgIBCCloseChannel>): _161.MsgIBCCloseChannel;
                fromAmino(object: _161.MsgIBCCloseChannelAmino): _161.MsgIBCCloseChannel;
                toAmino(message: _161.MsgIBCCloseChannel): _161.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _161.MsgIBCCloseChannelAminoMsg): _161.MsgIBCCloseChannel;
                toAminoMsg(message: _161.MsgIBCCloseChannel): _161.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _161.MsgIBCCloseChannelProtoMsg): _161.MsgIBCCloseChannel;
                toProto(message: _161.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _161.MsgIBCCloseChannel): _161.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _160.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.GenesisState;
                fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
                fromAmino(object: _160.GenesisStateAmino): _160.GenesisState;
                toAmino(message: _160.GenesisState): _160.GenesisStateAmino;
                fromAminoMsg(object: _160.GenesisStateAminoMsg): _160.GenesisState;
                toAminoMsg(message: _160.GenesisState): _160.GenesisStateAminoMsg;
                fromProtoMsg(message: _160.GenesisStateProtoMsg): _160.GenesisState;
                toProto(message: _160.GenesisState): Uint8Array;
                toProtoMsg(message: _160.GenesisState): _160.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _160.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Code;
                fromPartial(object: Partial<_160.Code>): _160.Code;
                fromAmino(object: _160.CodeAmino): _160.Code;
                toAmino(message: _160.Code): _160.CodeAmino;
                fromAminoMsg(object: _160.CodeAminoMsg): _160.Code;
                toAminoMsg(message: _160.Code): _160.CodeAminoMsg;
                fromProtoMsg(message: _160.CodeProtoMsg): _160.Code;
                toProto(message: _160.Code): Uint8Array;
                toProtoMsg(message: _160.Code): _160.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _160.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Contract;
                fromPartial(object: Partial<_160.Contract>): _160.Contract;
                fromAmino(object: _160.ContractAmino): _160.Contract;
                toAmino(message: _160.Contract): _160.ContractAmino;
                fromAminoMsg(object: _160.ContractAminoMsg): _160.Contract;
                toAminoMsg(message: _160.Contract): _160.ContractAminoMsg;
                fromProtoMsg(message: _160.ContractProtoMsg): _160.Contract;
                toProto(message: _160.Contract): Uint8Array;
                toProtoMsg(message: _160.Contract): _160.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _160.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _160.Sequence;
                fromPartial(object: Partial<_160.Sequence>): _160.Sequence;
                fromAmino(object: _160.SequenceAmino): _160.Sequence;
                toAmino(message: _160.Sequence): _160.SequenceAmino;
                fromAminoMsg(object: _160.SequenceAminoMsg): _160.Sequence;
                toAminoMsg(message: _160.Sequence): _160.SequenceAminoMsg;
                fromProtoMsg(message: _160.SequenceProtoMsg): _160.Sequence;
                toProto(message: _160.Sequence): Uint8Array;
                toProtoMsg(message: _160.Sequence): _160.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _159.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.StoreCodeAuthorization;
                fromPartial(object: Partial<_159.StoreCodeAuthorization>): _159.StoreCodeAuthorization;
                fromAmino(object: _159.StoreCodeAuthorizationAmino): _159.StoreCodeAuthorization;
                toAmino(message: _159.StoreCodeAuthorization): _159.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _159.StoreCodeAuthorizationAminoMsg): _159.StoreCodeAuthorization;
                toAminoMsg(message: _159.StoreCodeAuthorization): _159.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _159.StoreCodeAuthorizationProtoMsg): _159.StoreCodeAuthorization;
                toProto(message: _159.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _159.StoreCodeAuthorization): _159.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _159.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.ContractExecutionAuthorization;
                fromPartial(object: Partial<_159.ContractExecutionAuthorization>): _159.ContractExecutionAuthorization;
                fromAmino(object: _159.ContractExecutionAuthorizationAmino): _159.ContractExecutionAuthorization;
                toAmino(message: _159.ContractExecutionAuthorization): _159.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _159.ContractExecutionAuthorizationAminoMsg): _159.ContractExecutionAuthorization;
                toAminoMsg(message: _159.ContractExecutionAuthorization): _159.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _159.ContractExecutionAuthorizationProtoMsg): _159.ContractExecutionAuthorization;
                toProto(message: _159.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _159.ContractExecutionAuthorization): _159.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _159.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.ContractMigrationAuthorization;
                fromPartial(object: Partial<_159.ContractMigrationAuthorization>): _159.ContractMigrationAuthorization;
                fromAmino(object: _159.ContractMigrationAuthorizationAmino): _159.ContractMigrationAuthorization;
                toAmino(message: _159.ContractMigrationAuthorization): _159.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _159.ContractMigrationAuthorizationAminoMsg): _159.ContractMigrationAuthorization;
                toAminoMsg(message: _159.ContractMigrationAuthorization): _159.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _159.ContractMigrationAuthorizationProtoMsg): _159.ContractMigrationAuthorization;
                toProto(message: _159.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _159.ContractMigrationAuthorization): _159.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _159.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.CodeGrant;
                fromPartial(object: Partial<_159.CodeGrant>): _159.CodeGrant;
                fromAmino(object: _159.CodeGrantAmino): _159.CodeGrant;
                toAmino(message: _159.CodeGrant): _159.CodeGrantAmino;
                fromAminoMsg(object: _159.CodeGrantAminoMsg): _159.CodeGrant;
                toAminoMsg(message: _159.CodeGrant): _159.CodeGrantAminoMsg;
                fromProtoMsg(message: _159.CodeGrantProtoMsg): _159.CodeGrant;
                toProto(message: _159.CodeGrant): Uint8Array;
                toProtoMsg(message: _159.CodeGrant): _159.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _159.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.ContractGrant;
                fromPartial(object: Partial<_159.ContractGrant>): _159.ContractGrant;
                fromAmino(object: _159.ContractGrantAmino): _159.ContractGrant;
                toAmino(message: _159.ContractGrant): _159.ContractGrantAmino;
                fromAminoMsg(object: _159.ContractGrantAminoMsg): _159.ContractGrant;
                toAminoMsg(message: _159.ContractGrant): _159.ContractGrantAminoMsg;
                fromProtoMsg(message: _159.ContractGrantProtoMsg): _159.ContractGrant;
                toProto(message: _159.ContractGrant): Uint8Array;
                toProtoMsg(message: _159.ContractGrant): _159.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _159.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.MaxCallsLimit;
                fromPartial(object: Partial<_159.MaxCallsLimit>): _159.MaxCallsLimit;
                fromAmino(object: _159.MaxCallsLimitAmino): _159.MaxCallsLimit;
                toAmino(message: _159.MaxCallsLimit): _159.MaxCallsLimitAmino;
                fromAminoMsg(object: _159.MaxCallsLimitAminoMsg): _159.MaxCallsLimit;
                toAminoMsg(message: _159.MaxCallsLimit): _159.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _159.MaxCallsLimitProtoMsg): _159.MaxCallsLimit;
                toProto(message: _159.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _159.MaxCallsLimit): _159.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _159.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.MaxFundsLimit;
                fromPartial(object: Partial<_159.MaxFundsLimit>): _159.MaxFundsLimit;
                fromAmino(object: _159.MaxFundsLimitAmino): _159.MaxFundsLimit;
                toAmino(message: _159.MaxFundsLimit): _159.MaxFundsLimitAmino;
                fromAminoMsg(object: _159.MaxFundsLimitAminoMsg): _159.MaxFundsLimit;
                toAminoMsg(message: _159.MaxFundsLimit): _159.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _159.MaxFundsLimitProtoMsg): _159.MaxFundsLimit;
                toProto(message: _159.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _159.MaxFundsLimit): _159.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _159.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.CombinedLimit;
                fromPartial(object: Partial<_159.CombinedLimit>): _159.CombinedLimit;
                fromAmino(object: _159.CombinedLimitAmino): _159.CombinedLimit;
                toAmino(message: _159.CombinedLimit): _159.CombinedLimitAmino;
                fromAminoMsg(object: _159.CombinedLimitAminoMsg): _159.CombinedLimit;
                toAminoMsg(message: _159.CombinedLimit): _159.CombinedLimitAminoMsg;
                fromProtoMsg(message: _159.CombinedLimitProtoMsg): _159.CombinedLimit;
                toProto(message: _159.CombinedLimit): Uint8Array;
                toProtoMsg(message: _159.CombinedLimit): _159.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _159.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _159.AllowAllMessagesFilter;
                fromPartial(_: Partial<_159.AllowAllMessagesFilter>): _159.AllowAllMessagesFilter;
                fromAmino(_: _159.AllowAllMessagesFilterAmino): _159.AllowAllMessagesFilter;
                toAmino(_: _159.AllowAllMessagesFilter): _159.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _159.AllowAllMessagesFilterAminoMsg): _159.AllowAllMessagesFilter;
                toAminoMsg(message: _159.AllowAllMessagesFilter): _159.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _159.AllowAllMessagesFilterProtoMsg): _159.AllowAllMessagesFilter;
                toProto(message: _159.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _159.AllowAllMessagesFilter): _159.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _159.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_159.AcceptedMessageKeysFilter>): _159.AcceptedMessageKeysFilter;
                fromAmino(object: _159.AcceptedMessageKeysFilterAmino): _159.AcceptedMessageKeysFilter;
                toAmino(message: _159.AcceptedMessageKeysFilter): _159.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _159.AcceptedMessageKeysFilterAminoMsg): _159.AcceptedMessageKeysFilter;
                toAminoMsg(message: _159.AcceptedMessageKeysFilter): _159.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _159.AcceptedMessageKeysFilterProtoMsg): _159.AcceptedMessageKeysFilter;
                toProto(message: _159.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _159.AcceptedMessageKeysFilter): _159.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _159.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _159.AcceptedMessagesFilter;
                fromPartial(object: Partial<_159.AcceptedMessagesFilter>): _159.AcceptedMessagesFilter;
                fromAmino(object: _159.AcceptedMessagesFilterAmino): _159.AcceptedMessagesFilter;
                toAmino(message: _159.AcceptedMessagesFilter): _159.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _159.AcceptedMessagesFilterAminoMsg): _159.AcceptedMessagesFilter;
                toAminoMsg(message: _159.AcceptedMessagesFilter): _159.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _159.AcceptedMessagesFilterProtoMsg): _159.AcceptedMessagesFilter;
                toProto(message: _159.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _159.AcceptedMessagesFilter): _159.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _159.MaxCallsLimit | _159.MaxFundsLimit | _159.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _159.AllowAllMessagesFilter | _159.AcceptedMessageKeysFilter | _159.AcceptedMessagesFilter;
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
                    v1: _292.MsgClientImpl;
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
                        contractInfo(request: _163.QueryContractInfoRequest): Promise<_163.QueryContractInfoResponse>;
                        contractHistory(request: _163.QueryContractHistoryRequest): Promise<_163.QueryContractHistoryResponse>;
                        contractsByCode(request: _163.QueryContractsByCodeRequest): Promise<_163.QueryContractsByCodeResponse>;
                        allContractState(request: _163.QueryAllContractStateRequest): Promise<_163.QueryAllContractStateResponse>;
                        rawContractState(request: _163.QueryRawContractStateRequest): Promise<_163.QueryRawContractStateResponse>;
                        smartContractState(request: _163.QuerySmartContractStateRequest): Promise<_163.QuerySmartContractStateResponse>;
                        code(request: _163.QueryCodeRequest): Promise<_163.QueryCodeResponse>;
                        codes(request?: _163.QueryCodesRequest): Promise<_163.QueryCodesResponse>;
                        pinnedCodes(request?: _163.QueryPinnedCodesRequest): Promise<_163.QueryPinnedCodesResponse>;
                        params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                        contractsByCreator(request: _163.QueryContractsByCreatorRequest): Promise<_163.QueryContractsByCreatorResponse>;
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
                    v1: _290.LCDQueryClient;
                };
            };
        }>;
    };
}
