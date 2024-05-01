import * as _167 from "./wasm/v1/authz";
import * as _168 from "./wasm/v1/genesis";
import * as _169 from "./wasm/v1/ibc";
import * as _170 from "./wasm/v1/query";
import * as _171 from "./wasm/v1/tx";
import * as _172 from "./wasm/v1/types";
import * as _305 from "./wasm/v1/query.lcd";
import * as _306 from "./wasm/v1/query.rpc.Query";
import * as _307 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _307.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                contractInfo(request: _170.QueryContractInfoRequest): Promise<_170.QueryContractInfoResponse>;
                contractHistory(request: _170.QueryContractHistoryRequest): Promise<_170.QueryContractHistoryResponse>;
                contractsByCode(request: _170.QueryContractsByCodeRequest): Promise<_170.QueryContractsByCodeResponse>;
                allContractState(request: _170.QueryAllContractStateRequest): Promise<_170.QueryAllContractStateResponse>;
                rawContractState(request: _170.QueryRawContractStateRequest): Promise<_170.QueryRawContractStateResponse>;
                smartContractState(request: _170.QuerySmartContractStateRequest): Promise<_170.QuerySmartContractStateResponse>;
                code(request: _170.QueryCodeRequest): Promise<_170.QueryCodeResponse>;
                codes(request?: _170.QueryCodesRequest): Promise<_170.QueryCodesResponse>;
                pinnedCodes(request?: _170.QueryPinnedCodesRequest): Promise<_170.QueryPinnedCodesResponse>;
                params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
                contractsByCreator(request: _170.QueryContractsByCreatorRequest): Promise<_170.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _305.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _171.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _171.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _171.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _171.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _171.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _171.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _171.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _171.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _171.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _171.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _171.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _171.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _171.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _171.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _171.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _171.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _171.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _171.MsgStoreCode): {
                        typeUrl: string;
                        value: _171.MsgStoreCode;
                    };
                    instantiateContract(value: _171.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _171.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _171.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _171.MsgInstantiateContract2;
                    };
                    executeContract(value: _171.MsgExecuteContract): {
                        typeUrl: string;
                        value: _171.MsgExecuteContract;
                    };
                    migrateContract(value: _171.MsgMigrateContract): {
                        typeUrl: string;
                        value: _171.MsgMigrateContract;
                    };
                    updateAdmin(value: _171.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _171.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _171.MsgClearAdmin): {
                        typeUrl: string;
                        value: _171.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _171.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _171.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _171.MsgUpdateParams): {
                        typeUrl: string;
                        value: _171.MsgUpdateParams;
                    };
                    sudoContract(value: _171.MsgSudoContract): {
                        typeUrl: string;
                        value: _171.MsgSudoContract;
                    };
                    pinCodes(value: _171.MsgPinCodes): {
                        typeUrl: string;
                        value: _171.MsgPinCodes;
                    };
                    unpinCodes(value: _171.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _171.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _171.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _171.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _171.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _171.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _171.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _171.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _171.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _171.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _171.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _171.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _171.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _171.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _171.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _171.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _171.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _171.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _171.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _171.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _171.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _171.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _171.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _171.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _171.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _171.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _171.MsgStoreCode): {
                        typeUrl: string;
                        value: _171.MsgStoreCode;
                    };
                    instantiateContract(value: _171.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _171.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _171.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _171.MsgInstantiateContract2;
                    };
                    executeContract(value: _171.MsgExecuteContract): {
                        typeUrl: string;
                        value: _171.MsgExecuteContract;
                    };
                    migrateContract(value: _171.MsgMigrateContract): {
                        typeUrl: string;
                        value: _171.MsgMigrateContract;
                    };
                    updateAdmin(value: _171.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _171.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _171.MsgClearAdmin): {
                        typeUrl: string;
                        value: _171.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _171.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _171.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _171.MsgUpdateParams): {
                        typeUrl: string;
                        value: _171.MsgUpdateParams;
                    };
                    sudoContract(value: _171.MsgSudoContract): {
                        typeUrl: string;
                        value: _171.MsgSudoContract;
                    };
                    pinCodes(value: _171.MsgPinCodes): {
                        typeUrl: string;
                        value: _171.MsgPinCodes;
                    };
                    unpinCodes(value: _171.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _171.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _171.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _171.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _171.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _171.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _171.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _171.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _171.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _171.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _171.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _171.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _171.MsgStoreCode) => _171.MsgStoreCodeAmino;
                    fromAmino: (object: _171.MsgStoreCodeAmino) => _171.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _171.MsgInstantiateContract) => _171.MsgInstantiateContractAmino;
                    fromAmino: (object: _171.MsgInstantiateContractAmino) => _171.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _171.MsgInstantiateContract2) => _171.MsgInstantiateContract2Amino;
                    fromAmino: (object: _171.MsgInstantiateContract2Amino) => _171.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _171.MsgExecuteContract) => _171.MsgExecuteContractAmino;
                    fromAmino: (object: _171.MsgExecuteContractAmino) => _171.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _171.MsgMigrateContract) => _171.MsgMigrateContractAmino;
                    fromAmino: (object: _171.MsgMigrateContractAmino) => _171.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateAdmin) => _171.MsgUpdateAdminAmino;
                    fromAmino: (object: _171.MsgUpdateAdminAmino) => _171.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _171.MsgClearAdmin) => _171.MsgClearAdminAmino;
                    fromAmino: (object: _171.MsgClearAdminAmino) => _171.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateInstantiateConfig) => _171.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _171.MsgUpdateInstantiateConfigAmino) => _171.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateParams) => _171.MsgUpdateParamsAmino;
                    fromAmino: (object: _171.MsgUpdateParamsAmino) => _171.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _171.MsgSudoContract) => _171.MsgSudoContractAmino;
                    fromAmino: (object: _171.MsgSudoContractAmino) => _171.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _171.MsgPinCodes) => _171.MsgPinCodesAmino;
                    fromAmino: (object: _171.MsgPinCodesAmino) => _171.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUnpinCodes) => _171.MsgUnpinCodesAmino;
                    fromAmino: (object: _171.MsgUnpinCodesAmino) => _171.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _171.MsgStoreAndInstantiateContract) => _171.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _171.MsgStoreAndInstantiateContractAmino) => _171.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _171.MsgRemoveCodeUploadParamsAddresses) => _171.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _171.MsgRemoveCodeUploadParamsAddressesAmino) => _171.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _171.MsgAddCodeUploadParamsAddresses) => _171.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _171.MsgAddCodeUploadParamsAddressesAmino) => _171.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _171.MsgStoreAndMigrateContract) => _171.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _171.MsgStoreAndMigrateContractAmino) => _171.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _171.MsgUpdateContractLabel) => _171.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _171.MsgUpdateContractLabelAmino) => _171.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _172.AccessType;
            accessTypeToJSON(object: _172.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _172.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _172.ContractCodeHistoryOperationType): string;
            AccessType: typeof _172.AccessType;
            AccessTypeSDKType: typeof _172.AccessType;
            AccessTypeAmino: typeof _172.AccessType;
            ContractCodeHistoryOperationType: typeof _172.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _172.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _172.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _172.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.AccessTypeParam;
                fromPartial(object: Partial<_172.AccessTypeParam>): _172.AccessTypeParam;
                fromAmino(object: _172.AccessTypeParamAmino): _172.AccessTypeParam;
                toAmino(message: _172.AccessTypeParam): _172.AccessTypeParamAmino;
                fromAminoMsg(object: _172.AccessTypeParamAminoMsg): _172.AccessTypeParam;
                toAminoMsg(message: _172.AccessTypeParam): _172.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _172.AccessTypeParamProtoMsg): _172.AccessTypeParam;
                toProto(message: _172.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _172.AccessTypeParam): _172.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _172.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.AccessConfig;
                fromPartial(object: Partial<_172.AccessConfig>): _172.AccessConfig;
                fromAmino(object: _172.AccessConfigAmino): _172.AccessConfig;
                toAmino(message: _172.AccessConfig): _172.AccessConfigAmino;
                fromAminoMsg(object: _172.AccessConfigAminoMsg): _172.AccessConfig;
                toAminoMsg(message: _172.AccessConfig): _172.AccessConfigAminoMsg;
                fromProtoMsg(message: _172.AccessConfigProtoMsg): _172.AccessConfig;
                toProto(message: _172.AccessConfig): Uint8Array;
                toProtoMsg(message: _172.AccessConfig): _172.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _172.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.Params;
                fromPartial(object: Partial<_172.Params>): _172.Params;
                fromAmino(object: _172.ParamsAmino): _172.Params;
                toAmino(message: _172.Params): _172.ParamsAmino;
                fromAminoMsg(object: _172.ParamsAminoMsg): _172.Params;
                toAminoMsg(message: _172.Params): _172.ParamsAminoMsg;
                fromProtoMsg(message: _172.ParamsProtoMsg): _172.Params;
                toProto(message: _172.Params): Uint8Array;
                toProtoMsg(message: _172.Params): _172.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _172.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.CodeInfo;
                fromPartial(object: Partial<_172.CodeInfo>): _172.CodeInfo;
                fromAmino(object: _172.CodeInfoAmino): _172.CodeInfo;
                toAmino(message: _172.CodeInfo): _172.CodeInfoAmino;
                fromAminoMsg(object: _172.CodeInfoAminoMsg): _172.CodeInfo;
                toAminoMsg(message: _172.CodeInfo): _172.CodeInfoAminoMsg;
                fromProtoMsg(message: _172.CodeInfoProtoMsg): _172.CodeInfo;
                toProto(message: _172.CodeInfo): Uint8Array;
                toProtoMsg(message: _172.CodeInfo): _172.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _172.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.ContractInfo;
                fromPartial(object: Partial<_172.ContractInfo>): _172.ContractInfo;
                fromAmino(object: _172.ContractInfoAmino): _172.ContractInfo;
                toAmino(message: _172.ContractInfo): _172.ContractInfoAmino;
                fromAminoMsg(object: _172.ContractInfoAminoMsg): _172.ContractInfo;
                toAminoMsg(message: _172.ContractInfo): _172.ContractInfoAminoMsg;
                fromProtoMsg(message: _172.ContractInfoProtoMsg): _172.ContractInfo;
                toProto(message: _172.ContractInfo): Uint8Array;
                toProtoMsg(message: _172.ContractInfo): _172.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _172.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_172.ContractCodeHistoryEntry>): _172.ContractCodeHistoryEntry;
                fromAmino(object: _172.ContractCodeHistoryEntryAmino): _172.ContractCodeHistoryEntry;
                toAmino(message: _172.ContractCodeHistoryEntry): _172.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _172.ContractCodeHistoryEntryAminoMsg): _172.ContractCodeHistoryEntry;
                toAminoMsg(message: _172.ContractCodeHistoryEntry): _172.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _172.ContractCodeHistoryEntryProtoMsg): _172.ContractCodeHistoryEntry;
                toProto(message: _172.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _172.ContractCodeHistoryEntry): _172.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _172.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.AbsoluteTxPosition;
                fromPartial(object: Partial<_172.AbsoluteTxPosition>): _172.AbsoluteTxPosition;
                fromAmino(object: _172.AbsoluteTxPositionAmino): _172.AbsoluteTxPosition;
                toAmino(message: _172.AbsoluteTxPosition): _172.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _172.AbsoluteTxPositionAminoMsg): _172.AbsoluteTxPosition;
                toAminoMsg(message: _172.AbsoluteTxPosition): _172.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _172.AbsoluteTxPositionProtoMsg): _172.AbsoluteTxPosition;
                toProto(message: _172.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _172.AbsoluteTxPosition): _172.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _172.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.Model;
                fromPartial(object: Partial<_172.Model>): _172.Model;
                fromAmino(object: _172.ModelAmino): _172.Model;
                toAmino(message: _172.Model): _172.ModelAmino;
                fromAminoMsg(object: _172.ModelAminoMsg): _172.Model;
                toAminoMsg(message: _172.Model): _172.ModelAminoMsg;
                fromProtoMsg(message: _172.ModelProtoMsg): _172.Model;
                toProto(message: _172.Model): Uint8Array;
                toProtoMsg(message: _172.Model): _172.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _171.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgStoreCode;
                fromPartial(object: Partial<_171.MsgStoreCode>): _171.MsgStoreCode;
                fromAmino(object: _171.MsgStoreCodeAmino): _171.MsgStoreCode;
                toAmino(message: _171.MsgStoreCode): _171.MsgStoreCodeAmino;
                fromAminoMsg(object: _171.MsgStoreCodeAminoMsg): _171.MsgStoreCode;
                toAminoMsg(message: _171.MsgStoreCode): _171.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _171.MsgStoreCodeProtoMsg): _171.MsgStoreCode;
                toProto(message: _171.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _171.MsgStoreCode): _171.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _171.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgStoreCodeResponse;
                fromPartial(object: Partial<_171.MsgStoreCodeResponse>): _171.MsgStoreCodeResponse;
                fromAmino(object: _171.MsgStoreCodeResponseAmino): _171.MsgStoreCodeResponse;
                toAmino(message: _171.MsgStoreCodeResponse): _171.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _171.MsgStoreCodeResponseAminoMsg): _171.MsgStoreCodeResponse;
                toAminoMsg(message: _171.MsgStoreCodeResponse): _171.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _171.MsgStoreCodeResponseProtoMsg): _171.MsgStoreCodeResponse;
                toProto(message: _171.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _171.MsgStoreCodeResponse): _171.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _171.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgInstantiateContract;
                fromPartial(object: Partial<_171.MsgInstantiateContract>): _171.MsgInstantiateContract;
                fromAmino(object: _171.MsgInstantiateContractAmino): _171.MsgInstantiateContract;
                toAmino(message: _171.MsgInstantiateContract): _171.MsgInstantiateContractAmino;
                fromAminoMsg(object: _171.MsgInstantiateContractAminoMsg): _171.MsgInstantiateContract;
                toAminoMsg(message: _171.MsgInstantiateContract): _171.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _171.MsgInstantiateContractProtoMsg): _171.MsgInstantiateContract;
                toProto(message: _171.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _171.MsgInstantiateContract): _171.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _171.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_171.MsgInstantiateContractResponse>): _171.MsgInstantiateContractResponse;
                fromAmino(object: _171.MsgInstantiateContractResponseAmino): _171.MsgInstantiateContractResponse;
                toAmino(message: _171.MsgInstantiateContractResponse): _171.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _171.MsgInstantiateContractResponseAminoMsg): _171.MsgInstantiateContractResponse;
                toAminoMsg(message: _171.MsgInstantiateContractResponse): _171.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _171.MsgInstantiateContractResponseProtoMsg): _171.MsgInstantiateContractResponse;
                toProto(message: _171.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _171.MsgInstantiateContractResponse): _171.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _171.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgInstantiateContract2;
                fromPartial(object: Partial<_171.MsgInstantiateContract2>): _171.MsgInstantiateContract2;
                fromAmino(object: _171.MsgInstantiateContract2Amino): _171.MsgInstantiateContract2;
                toAmino(message: _171.MsgInstantiateContract2): _171.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _171.MsgInstantiateContract2AminoMsg): _171.MsgInstantiateContract2;
                toAminoMsg(message: _171.MsgInstantiateContract2): _171.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _171.MsgInstantiateContract2ProtoMsg): _171.MsgInstantiateContract2;
                toProto(message: _171.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _171.MsgInstantiateContract2): _171.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _171.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_171.MsgInstantiateContract2Response>): _171.MsgInstantiateContract2Response;
                fromAmino(object: _171.MsgInstantiateContract2ResponseAmino): _171.MsgInstantiateContract2Response;
                toAmino(message: _171.MsgInstantiateContract2Response): _171.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _171.MsgInstantiateContract2ResponseAminoMsg): _171.MsgInstantiateContract2Response;
                toAminoMsg(message: _171.MsgInstantiateContract2Response): _171.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _171.MsgInstantiateContract2ResponseProtoMsg): _171.MsgInstantiateContract2Response;
                toProto(message: _171.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _171.MsgInstantiateContract2Response): _171.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _171.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgExecuteContract;
                fromPartial(object: Partial<_171.MsgExecuteContract>): _171.MsgExecuteContract;
                fromAmino(object: _171.MsgExecuteContractAmino): _171.MsgExecuteContract;
                toAmino(message: _171.MsgExecuteContract): _171.MsgExecuteContractAmino;
                fromAminoMsg(object: _171.MsgExecuteContractAminoMsg): _171.MsgExecuteContract;
                toAminoMsg(message: _171.MsgExecuteContract): _171.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _171.MsgExecuteContractProtoMsg): _171.MsgExecuteContract;
                toProto(message: _171.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _171.MsgExecuteContract): _171.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _171.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgExecuteContractResponse;
                fromPartial(object: Partial<_171.MsgExecuteContractResponse>): _171.MsgExecuteContractResponse;
                fromAmino(object: _171.MsgExecuteContractResponseAmino): _171.MsgExecuteContractResponse;
                toAmino(message: _171.MsgExecuteContractResponse): _171.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _171.MsgExecuteContractResponseAminoMsg): _171.MsgExecuteContractResponse;
                toAminoMsg(message: _171.MsgExecuteContractResponse): _171.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _171.MsgExecuteContractResponseProtoMsg): _171.MsgExecuteContractResponse;
                toProto(message: _171.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _171.MsgExecuteContractResponse): _171.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _171.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgMigrateContract;
                fromPartial(object: Partial<_171.MsgMigrateContract>): _171.MsgMigrateContract;
                fromAmino(object: _171.MsgMigrateContractAmino): _171.MsgMigrateContract;
                toAmino(message: _171.MsgMigrateContract): _171.MsgMigrateContractAmino;
                fromAminoMsg(object: _171.MsgMigrateContractAminoMsg): _171.MsgMigrateContract;
                toAminoMsg(message: _171.MsgMigrateContract): _171.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _171.MsgMigrateContractProtoMsg): _171.MsgMigrateContract;
                toProto(message: _171.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _171.MsgMigrateContract): _171.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _171.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgMigrateContractResponse;
                fromPartial(object: Partial<_171.MsgMigrateContractResponse>): _171.MsgMigrateContractResponse;
                fromAmino(object: _171.MsgMigrateContractResponseAmino): _171.MsgMigrateContractResponse;
                toAmino(message: _171.MsgMigrateContractResponse): _171.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _171.MsgMigrateContractResponseAminoMsg): _171.MsgMigrateContractResponse;
                toAminoMsg(message: _171.MsgMigrateContractResponse): _171.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _171.MsgMigrateContractResponseProtoMsg): _171.MsgMigrateContractResponse;
                toProto(message: _171.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _171.MsgMigrateContractResponse): _171.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _171.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateAdmin;
                fromPartial(object: Partial<_171.MsgUpdateAdmin>): _171.MsgUpdateAdmin;
                fromAmino(object: _171.MsgUpdateAdminAmino): _171.MsgUpdateAdmin;
                toAmino(message: _171.MsgUpdateAdmin): _171.MsgUpdateAdminAmino;
                fromAminoMsg(object: _171.MsgUpdateAdminAminoMsg): _171.MsgUpdateAdmin;
                toAminoMsg(message: _171.MsgUpdateAdmin): _171.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateAdminProtoMsg): _171.MsgUpdateAdmin;
                toProto(message: _171.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateAdmin): _171.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_171.MsgUpdateAdminResponse>): _171.MsgUpdateAdminResponse;
                fromAmino(_: _171.MsgUpdateAdminResponseAmino): _171.MsgUpdateAdminResponse;
                toAmino(_: _171.MsgUpdateAdminResponse): _171.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateAdminResponseAminoMsg): _171.MsgUpdateAdminResponse;
                toAminoMsg(message: _171.MsgUpdateAdminResponse): _171.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateAdminResponseProtoMsg): _171.MsgUpdateAdminResponse;
                toProto(message: _171.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateAdminResponse): _171.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _171.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgClearAdmin;
                fromPartial(object: Partial<_171.MsgClearAdmin>): _171.MsgClearAdmin;
                fromAmino(object: _171.MsgClearAdminAmino): _171.MsgClearAdmin;
                toAmino(message: _171.MsgClearAdmin): _171.MsgClearAdminAmino;
                fromAminoMsg(object: _171.MsgClearAdminAminoMsg): _171.MsgClearAdmin;
                toAminoMsg(message: _171.MsgClearAdmin): _171.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _171.MsgClearAdminProtoMsg): _171.MsgClearAdmin;
                toProto(message: _171.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _171.MsgClearAdmin): _171.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _171.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgClearAdminResponse;
                fromPartial(_: Partial<_171.MsgClearAdminResponse>): _171.MsgClearAdminResponse;
                fromAmino(_: _171.MsgClearAdminResponseAmino): _171.MsgClearAdminResponse;
                toAmino(_: _171.MsgClearAdminResponse): _171.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _171.MsgClearAdminResponseAminoMsg): _171.MsgClearAdminResponse;
                toAminoMsg(message: _171.MsgClearAdminResponse): _171.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _171.MsgClearAdminResponseProtoMsg): _171.MsgClearAdminResponse;
                toProto(message: _171.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _171.MsgClearAdminResponse): _171.MsgClearAdminResponseProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _171.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.AccessConfigUpdate;
                fromPartial(object: Partial<_171.AccessConfigUpdate>): _171.AccessConfigUpdate;
                fromAmino(object: _171.AccessConfigUpdateAmino): _171.AccessConfigUpdate;
                toAmino(message: _171.AccessConfigUpdate): _171.AccessConfigUpdateAmino;
                fromAminoMsg(object: _171.AccessConfigUpdateAminoMsg): _171.AccessConfigUpdate;
                toAminoMsg(message: _171.AccessConfigUpdate): _171.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _171.AccessConfigUpdateProtoMsg): _171.AccessConfigUpdate;
                toProto(message: _171.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _171.AccessConfigUpdate): _171.AccessConfigUpdateProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _171.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_171.MsgUpdateInstantiateConfig>): _171.MsgUpdateInstantiateConfig;
                fromAmino(object: _171.MsgUpdateInstantiateConfigAmino): _171.MsgUpdateInstantiateConfig;
                toAmino(message: _171.MsgUpdateInstantiateConfig): _171.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _171.MsgUpdateInstantiateConfigAminoMsg): _171.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _171.MsgUpdateInstantiateConfig): _171.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateInstantiateConfigProtoMsg): _171.MsgUpdateInstantiateConfig;
                toProto(message: _171.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateInstantiateConfig): _171.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_171.MsgUpdateInstantiateConfigResponse>): _171.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _171.MsgUpdateInstantiateConfigResponseAmino): _171.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _171.MsgUpdateInstantiateConfigResponse): _171.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateInstantiateConfigResponseAminoMsg): _171.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _171.MsgUpdateInstantiateConfigResponse): _171.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateInstantiateConfigResponseProtoMsg): _171.MsgUpdateInstantiateConfigResponse;
                toProto(message: _171.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateInstantiateConfigResponse): _171.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _171.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateParams;
                fromPartial(object: Partial<_171.MsgUpdateParams>): _171.MsgUpdateParams;
                fromAmino(object: _171.MsgUpdateParamsAmino): _171.MsgUpdateParams;
                toAmino(message: _171.MsgUpdateParams): _171.MsgUpdateParamsAmino;
                fromAminoMsg(object: _171.MsgUpdateParamsAminoMsg): _171.MsgUpdateParams;
                toAminoMsg(message: _171.MsgUpdateParams): _171.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateParamsProtoMsg): _171.MsgUpdateParams;
                toProto(message: _171.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateParams): _171.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_171.MsgUpdateParamsResponse>): _171.MsgUpdateParamsResponse;
                fromAmino(_: _171.MsgUpdateParamsResponseAmino): _171.MsgUpdateParamsResponse;
                toAmino(_: _171.MsgUpdateParamsResponse): _171.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateParamsResponseAminoMsg): _171.MsgUpdateParamsResponse;
                toAminoMsg(message: _171.MsgUpdateParamsResponse): _171.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateParamsResponseProtoMsg): _171.MsgUpdateParamsResponse;
                toProto(message: _171.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateParamsResponse): _171.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _171.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgSudoContract;
                fromPartial(object: Partial<_171.MsgSudoContract>): _171.MsgSudoContract;
                fromAmino(object: _171.MsgSudoContractAmino): _171.MsgSudoContract;
                toAmino(message: _171.MsgSudoContract): _171.MsgSudoContractAmino;
                fromAminoMsg(object: _171.MsgSudoContractAminoMsg): _171.MsgSudoContract;
                toAminoMsg(message: _171.MsgSudoContract): _171.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _171.MsgSudoContractProtoMsg): _171.MsgSudoContract;
                toProto(message: _171.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _171.MsgSudoContract): _171.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _171.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgSudoContractResponse;
                fromPartial(object: Partial<_171.MsgSudoContractResponse>): _171.MsgSudoContractResponse;
                fromAmino(object: _171.MsgSudoContractResponseAmino): _171.MsgSudoContractResponse;
                toAmino(message: _171.MsgSudoContractResponse): _171.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _171.MsgSudoContractResponseAminoMsg): _171.MsgSudoContractResponse;
                toAminoMsg(message: _171.MsgSudoContractResponse): _171.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _171.MsgSudoContractResponseProtoMsg): _171.MsgSudoContractResponse;
                toProto(message: _171.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _171.MsgSudoContractResponse): _171.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _171.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgPinCodes;
                fromPartial(object: Partial<_171.MsgPinCodes>): _171.MsgPinCodes;
                fromAmino(object: _171.MsgPinCodesAmino): _171.MsgPinCodes;
                toAmino(message: _171.MsgPinCodes): _171.MsgPinCodesAmino;
                fromAminoMsg(object: _171.MsgPinCodesAminoMsg): _171.MsgPinCodes;
                toAminoMsg(message: _171.MsgPinCodes): _171.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _171.MsgPinCodesProtoMsg): _171.MsgPinCodes;
                toProto(message: _171.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _171.MsgPinCodes): _171.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _171.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgPinCodesResponse;
                fromPartial(_: Partial<_171.MsgPinCodesResponse>): _171.MsgPinCodesResponse;
                fromAmino(_: _171.MsgPinCodesResponseAmino): _171.MsgPinCodesResponse;
                toAmino(_: _171.MsgPinCodesResponse): _171.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _171.MsgPinCodesResponseAminoMsg): _171.MsgPinCodesResponse;
                toAminoMsg(message: _171.MsgPinCodesResponse): _171.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _171.MsgPinCodesResponseProtoMsg): _171.MsgPinCodesResponse;
                toProto(message: _171.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _171.MsgPinCodesResponse): _171.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _171.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUnpinCodes;
                fromPartial(object: Partial<_171.MsgUnpinCodes>): _171.MsgUnpinCodes;
                fromAmino(object: _171.MsgUnpinCodesAmino): _171.MsgUnpinCodes;
                toAmino(message: _171.MsgUnpinCodes): _171.MsgUnpinCodesAmino;
                fromAminoMsg(object: _171.MsgUnpinCodesAminoMsg): _171.MsgUnpinCodes;
                toAminoMsg(message: _171.MsgUnpinCodes): _171.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _171.MsgUnpinCodesProtoMsg): _171.MsgUnpinCodes;
                toProto(message: _171.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _171.MsgUnpinCodes): _171.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _171.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_171.MsgUnpinCodesResponse>): _171.MsgUnpinCodesResponse;
                fromAmino(_: _171.MsgUnpinCodesResponseAmino): _171.MsgUnpinCodesResponse;
                toAmino(_: _171.MsgUnpinCodesResponse): _171.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _171.MsgUnpinCodesResponseAminoMsg): _171.MsgUnpinCodesResponse;
                toAminoMsg(message: _171.MsgUnpinCodesResponse): _171.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUnpinCodesResponseProtoMsg): _171.MsgUnpinCodesResponse;
                toProto(message: _171.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUnpinCodesResponse): _171.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _171.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_171.MsgStoreAndInstantiateContract>): _171.MsgStoreAndInstantiateContract;
                fromAmino(object: _171.MsgStoreAndInstantiateContractAmino): _171.MsgStoreAndInstantiateContract;
                toAmino(message: _171.MsgStoreAndInstantiateContract): _171.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _171.MsgStoreAndInstantiateContractAminoMsg): _171.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _171.MsgStoreAndInstantiateContract): _171.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _171.MsgStoreAndInstantiateContractProtoMsg): _171.MsgStoreAndInstantiateContract;
                toProto(message: _171.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _171.MsgStoreAndInstantiateContract): _171.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _171.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_171.MsgStoreAndInstantiateContractResponse>): _171.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _171.MsgStoreAndInstantiateContractResponseAmino): _171.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _171.MsgStoreAndInstantiateContractResponse): _171.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _171.MsgStoreAndInstantiateContractResponseAminoMsg): _171.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _171.MsgStoreAndInstantiateContractResponse): _171.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _171.MsgStoreAndInstantiateContractResponseProtoMsg): _171.MsgStoreAndInstantiateContractResponse;
                toProto(message: _171.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _171.MsgStoreAndInstantiateContractResponse): _171.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _171.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_171.MsgAddCodeUploadParamsAddresses>): _171.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _171.MsgAddCodeUploadParamsAddressesAmino): _171.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _171.MsgAddCodeUploadParamsAddresses): _171.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _171.MsgAddCodeUploadParamsAddressesAminoMsg): _171.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _171.MsgAddCodeUploadParamsAddresses): _171.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _171.MsgAddCodeUploadParamsAddressesProtoMsg): _171.MsgAddCodeUploadParamsAddresses;
                toProto(message: _171.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _171.MsgAddCodeUploadParamsAddresses): _171.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _171.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_171.MsgAddCodeUploadParamsAddressesResponse>): _171.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _171.MsgAddCodeUploadParamsAddressesResponseAmino): _171.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _171.MsgAddCodeUploadParamsAddressesResponse): _171.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _171.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _171.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _171.MsgAddCodeUploadParamsAddressesResponse): _171.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _171.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _171.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _171.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _171.MsgAddCodeUploadParamsAddressesResponse): _171.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _171.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_171.MsgRemoveCodeUploadParamsAddresses>): _171.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _171.MsgRemoveCodeUploadParamsAddressesAmino): _171.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _171.MsgRemoveCodeUploadParamsAddresses): _171.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _171.MsgRemoveCodeUploadParamsAddressesAminoMsg): _171.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _171.MsgRemoveCodeUploadParamsAddresses): _171.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _171.MsgRemoveCodeUploadParamsAddressesProtoMsg): _171.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _171.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _171.MsgRemoveCodeUploadParamsAddresses): _171.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _171.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_171.MsgRemoveCodeUploadParamsAddressesResponse>): _171.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _171.MsgRemoveCodeUploadParamsAddressesResponseAmino): _171.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _171.MsgRemoveCodeUploadParamsAddressesResponse): _171.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _171.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _171.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _171.MsgRemoveCodeUploadParamsAddressesResponse): _171.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _171.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _171.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _171.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _171.MsgRemoveCodeUploadParamsAddressesResponse): _171.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _171.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_171.MsgStoreAndMigrateContract>): _171.MsgStoreAndMigrateContract;
                fromAmino(object: _171.MsgStoreAndMigrateContractAmino): _171.MsgStoreAndMigrateContract;
                toAmino(message: _171.MsgStoreAndMigrateContract): _171.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _171.MsgStoreAndMigrateContractAminoMsg): _171.MsgStoreAndMigrateContract;
                toAminoMsg(message: _171.MsgStoreAndMigrateContract): _171.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _171.MsgStoreAndMigrateContractProtoMsg): _171.MsgStoreAndMigrateContract;
                toProto(message: _171.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _171.MsgStoreAndMigrateContract): _171.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _171.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_171.MsgStoreAndMigrateContractResponse>): _171.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _171.MsgStoreAndMigrateContractResponseAmino): _171.MsgStoreAndMigrateContractResponse;
                toAmino(message: _171.MsgStoreAndMigrateContractResponse): _171.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _171.MsgStoreAndMigrateContractResponseAminoMsg): _171.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _171.MsgStoreAndMigrateContractResponse): _171.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _171.MsgStoreAndMigrateContractResponseProtoMsg): _171.MsgStoreAndMigrateContractResponse;
                toProto(message: _171.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _171.MsgStoreAndMigrateContractResponse): _171.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _171.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MsgUpdateContractLabel;
                fromPartial(object: Partial<_171.MsgUpdateContractLabel>): _171.MsgUpdateContractLabel;
                fromAmino(object: _171.MsgUpdateContractLabelAmino): _171.MsgUpdateContractLabel;
                toAmino(message: _171.MsgUpdateContractLabel): _171.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _171.MsgUpdateContractLabelAminoMsg): _171.MsgUpdateContractLabel;
                toAminoMsg(message: _171.MsgUpdateContractLabel): _171.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateContractLabelProtoMsg): _171.MsgUpdateContractLabel;
                toProto(message: _171.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateContractLabel): _171.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _171.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _171.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_171.MsgUpdateContractLabelResponse>): _171.MsgUpdateContractLabelResponse;
                fromAmino(_: _171.MsgUpdateContractLabelResponseAmino): _171.MsgUpdateContractLabelResponse;
                toAmino(_: _171.MsgUpdateContractLabelResponse): _171.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _171.MsgUpdateContractLabelResponseAminoMsg): _171.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _171.MsgUpdateContractLabelResponse): _171.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _171.MsgUpdateContractLabelResponseProtoMsg): _171.MsgUpdateContractLabelResponse;
                toProto(message: _171.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _171.MsgUpdateContractLabelResponse): _171.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _170.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractInfoRequest;
                fromPartial(object: Partial<_170.QueryContractInfoRequest>): _170.QueryContractInfoRequest;
                fromAmino(object: _170.QueryContractInfoRequestAmino): _170.QueryContractInfoRequest;
                toAmino(message: _170.QueryContractInfoRequest): _170.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _170.QueryContractInfoRequestAminoMsg): _170.QueryContractInfoRequest;
                toAminoMsg(message: _170.QueryContractInfoRequest): _170.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _170.QueryContractInfoRequestProtoMsg): _170.QueryContractInfoRequest;
                toProto(message: _170.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _170.QueryContractInfoRequest): _170.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _170.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractInfoResponse;
                fromPartial(object: Partial<_170.QueryContractInfoResponse>): _170.QueryContractInfoResponse;
                fromAmino(object: _170.QueryContractInfoResponseAmino): _170.QueryContractInfoResponse;
                toAmino(message: _170.QueryContractInfoResponse): _170.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _170.QueryContractInfoResponseAminoMsg): _170.QueryContractInfoResponse;
                toAminoMsg(message: _170.QueryContractInfoResponse): _170.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _170.QueryContractInfoResponseProtoMsg): _170.QueryContractInfoResponse;
                toProto(message: _170.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _170.QueryContractInfoResponse): _170.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _170.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractHistoryRequest;
                fromPartial(object: Partial<_170.QueryContractHistoryRequest>): _170.QueryContractHistoryRequest;
                fromAmino(object: _170.QueryContractHistoryRequestAmino): _170.QueryContractHistoryRequest;
                toAmino(message: _170.QueryContractHistoryRequest): _170.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _170.QueryContractHistoryRequestAminoMsg): _170.QueryContractHistoryRequest;
                toAminoMsg(message: _170.QueryContractHistoryRequest): _170.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _170.QueryContractHistoryRequestProtoMsg): _170.QueryContractHistoryRequest;
                toProto(message: _170.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _170.QueryContractHistoryRequest): _170.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _170.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractHistoryResponse;
                fromPartial(object: Partial<_170.QueryContractHistoryResponse>): _170.QueryContractHistoryResponse;
                fromAmino(object: _170.QueryContractHistoryResponseAmino): _170.QueryContractHistoryResponse;
                toAmino(message: _170.QueryContractHistoryResponse): _170.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _170.QueryContractHistoryResponseAminoMsg): _170.QueryContractHistoryResponse;
                toAminoMsg(message: _170.QueryContractHistoryResponse): _170.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _170.QueryContractHistoryResponseProtoMsg): _170.QueryContractHistoryResponse;
                toProto(message: _170.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _170.QueryContractHistoryResponse): _170.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _170.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_170.QueryContractsByCodeRequest>): _170.QueryContractsByCodeRequest;
                fromAmino(object: _170.QueryContractsByCodeRequestAmino): _170.QueryContractsByCodeRequest;
                toAmino(message: _170.QueryContractsByCodeRequest): _170.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _170.QueryContractsByCodeRequestAminoMsg): _170.QueryContractsByCodeRequest;
                toAminoMsg(message: _170.QueryContractsByCodeRequest): _170.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _170.QueryContractsByCodeRequestProtoMsg): _170.QueryContractsByCodeRequest;
                toProto(message: _170.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _170.QueryContractsByCodeRequest): _170.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _170.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_170.QueryContractsByCodeResponse>): _170.QueryContractsByCodeResponse;
                fromAmino(object: _170.QueryContractsByCodeResponseAmino): _170.QueryContractsByCodeResponse;
                toAmino(message: _170.QueryContractsByCodeResponse): _170.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _170.QueryContractsByCodeResponseAminoMsg): _170.QueryContractsByCodeResponse;
                toAminoMsg(message: _170.QueryContractsByCodeResponse): _170.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _170.QueryContractsByCodeResponseProtoMsg): _170.QueryContractsByCodeResponse;
                toProto(message: _170.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _170.QueryContractsByCodeResponse): _170.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _170.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryAllContractStateRequest;
                fromPartial(object: Partial<_170.QueryAllContractStateRequest>): _170.QueryAllContractStateRequest;
                fromAmino(object: _170.QueryAllContractStateRequestAmino): _170.QueryAllContractStateRequest;
                toAmino(message: _170.QueryAllContractStateRequest): _170.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _170.QueryAllContractStateRequestAminoMsg): _170.QueryAllContractStateRequest;
                toAminoMsg(message: _170.QueryAllContractStateRequest): _170.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _170.QueryAllContractStateRequestProtoMsg): _170.QueryAllContractStateRequest;
                toProto(message: _170.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _170.QueryAllContractStateRequest): _170.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _170.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryAllContractStateResponse;
                fromPartial(object: Partial<_170.QueryAllContractStateResponse>): _170.QueryAllContractStateResponse;
                fromAmino(object: _170.QueryAllContractStateResponseAmino): _170.QueryAllContractStateResponse;
                toAmino(message: _170.QueryAllContractStateResponse): _170.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _170.QueryAllContractStateResponseAminoMsg): _170.QueryAllContractStateResponse;
                toAminoMsg(message: _170.QueryAllContractStateResponse): _170.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _170.QueryAllContractStateResponseProtoMsg): _170.QueryAllContractStateResponse;
                toProto(message: _170.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _170.QueryAllContractStateResponse): _170.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _170.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryRawContractStateRequest;
                fromPartial(object: Partial<_170.QueryRawContractStateRequest>): _170.QueryRawContractStateRequest;
                fromAmino(object: _170.QueryRawContractStateRequestAmino): _170.QueryRawContractStateRequest;
                toAmino(message: _170.QueryRawContractStateRequest): _170.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _170.QueryRawContractStateRequestAminoMsg): _170.QueryRawContractStateRequest;
                toAminoMsg(message: _170.QueryRawContractStateRequest): _170.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _170.QueryRawContractStateRequestProtoMsg): _170.QueryRawContractStateRequest;
                toProto(message: _170.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _170.QueryRawContractStateRequest): _170.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _170.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryRawContractStateResponse;
                fromPartial(object: Partial<_170.QueryRawContractStateResponse>): _170.QueryRawContractStateResponse;
                fromAmino(object: _170.QueryRawContractStateResponseAmino): _170.QueryRawContractStateResponse;
                toAmino(message: _170.QueryRawContractStateResponse): _170.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _170.QueryRawContractStateResponseAminoMsg): _170.QueryRawContractStateResponse;
                toAminoMsg(message: _170.QueryRawContractStateResponse): _170.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _170.QueryRawContractStateResponseProtoMsg): _170.QueryRawContractStateResponse;
                toProto(message: _170.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _170.QueryRawContractStateResponse): _170.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _170.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_170.QuerySmartContractStateRequest>): _170.QuerySmartContractStateRequest;
                fromAmino(object: _170.QuerySmartContractStateRequestAmino): _170.QuerySmartContractStateRequest;
                toAmino(message: _170.QuerySmartContractStateRequest): _170.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _170.QuerySmartContractStateRequestAminoMsg): _170.QuerySmartContractStateRequest;
                toAminoMsg(message: _170.QuerySmartContractStateRequest): _170.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _170.QuerySmartContractStateRequestProtoMsg): _170.QuerySmartContractStateRequest;
                toProto(message: _170.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _170.QuerySmartContractStateRequest): _170.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _170.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_170.QuerySmartContractStateResponse>): _170.QuerySmartContractStateResponse;
                fromAmino(object: _170.QuerySmartContractStateResponseAmino): _170.QuerySmartContractStateResponse;
                toAmino(message: _170.QuerySmartContractStateResponse): _170.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _170.QuerySmartContractStateResponseAminoMsg): _170.QuerySmartContractStateResponse;
                toAminoMsg(message: _170.QuerySmartContractStateResponse): _170.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _170.QuerySmartContractStateResponseProtoMsg): _170.QuerySmartContractStateResponse;
                toProto(message: _170.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _170.QuerySmartContractStateResponse): _170.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _170.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryCodeRequest;
                fromPartial(object: Partial<_170.QueryCodeRequest>): _170.QueryCodeRequest;
                fromAmino(object: _170.QueryCodeRequestAmino): _170.QueryCodeRequest;
                toAmino(message: _170.QueryCodeRequest): _170.QueryCodeRequestAmino;
                fromAminoMsg(object: _170.QueryCodeRequestAminoMsg): _170.QueryCodeRequest;
                toAminoMsg(message: _170.QueryCodeRequest): _170.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _170.QueryCodeRequestProtoMsg): _170.QueryCodeRequest;
                toProto(message: _170.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _170.QueryCodeRequest): _170.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _170.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.CodeInfoResponse;
                fromPartial(object: Partial<_170.CodeInfoResponse>): _170.CodeInfoResponse;
                fromAmino(object: _170.CodeInfoResponseAmino): _170.CodeInfoResponse;
                toAmino(message: _170.CodeInfoResponse): _170.CodeInfoResponseAmino;
                fromAminoMsg(object: _170.CodeInfoResponseAminoMsg): _170.CodeInfoResponse;
                toAminoMsg(message: _170.CodeInfoResponse): _170.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _170.CodeInfoResponseProtoMsg): _170.CodeInfoResponse;
                toProto(message: _170.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _170.CodeInfoResponse): _170.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _170.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryCodeResponse;
                fromPartial(object: Partial<_170.QueryCodeResponse>): _170.QueryCodeResponse;
                fromAmino(object: _170.QueryCodeResponseAmino): _170.QueryCodeResponse;
                toAmino(message: _170.QueryCodeResponse): _170.QueryCodeResponseAmino;
                fromAminoMsg(object: _170.QueryCodeResponseAminoMsg): _170.QueryCodeResponse;
                toAminoMsg(message: _170.QueryCodeResponse): _170.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _170.QueryCodeResponseProtoMsg): _170.QueryCodeResponse;
                toProto(message: _170.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _170.QueryCodeResponse): _170.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _170.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryCodesRequest;
                fromPartial(object: Partial<_170.QueryCodesRequest>): _170.QueryCodesRequest;
                fromAmino(object: _170.QueryCodesRequestAmino): _170.QueryCodesRequest;
                toAmino(message: _170.QueryCodesRequest): _170.QueryCodesRequestAmino;
                fromAminoMsg(object: _170.QueryCodesRequestAminoMsg): _170.QueryCodesRequest;
                toAminoMsg(message: _170.QueryCodesRequest): _170.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _170.QueryCodesRequestProtoMsg): _170.QueryCodesRequest;
                toProto(message: _170.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _170.QueryCodesRequest): _170.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _170.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryCodesResponse;
                fromPartial(object: Partial<_170.QueryCodesResponse>): _170.QueryCodesResponse;
                fromAmino(object: _170.QueryCodesResponseAmino): _170.QueryCodesResponse;
                toAmino(message: _170.QueryCodesResponse): _170.QueryCodesResponseAmino;
                fromAminoMsg(object: _170.QueryCodesResponseAminoMsg): _170.QueryCodesResponse;
                toAminoMsg(message: _170.QueryCodesResponse): _170.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _170.QueryCodesResponseProtoMsg): _170.QueryCodesResponse;
                toProto(message: _170.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _170.QueryCodesResponse): _170.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _170.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_170.QueryPinnedCodesRequest>): _170.QueryPinnedCodesRequest;
                fromAmino(object: _170.QueryPinnedCodesRequestAmino): _170.QueryPinnedCodesRequest;
                toAmino(message: _170.QueryPinnedCodesRequest): _170.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _170.QueryPinnedCodesRequestAminoMsg): _170.QueryPinnedCodesRequest;
                toAminoMsg(message: _170.QueryPinnedCodesRequest): _170.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _170.QueryPinnedCodesRequestProtoMsg): _170.QueryPinnedCodesRequest;
                toProto(message: _170.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _170.QueryPinnedCodesRequest): _170.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _170.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_170.QueryPinnedCodesResponse>): _170.QueryPinnedCodesResponse;
                fromAmino(object: _170.QueryPinnedCodesResponseAmino): _170.QueryPinnedCodesResponse;
                toAmino(message: _170.QueryPinnedCodesResponse): _170.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _170.QueryPinnedCodesResponseAminoMsg): _170.QueryPinnedCodesResponse;
                toAminoMsg(message: _170.QueryPinnedCodesResponse): _170.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _170.QueryPinnedCodesResponseProtoMsg): _170.QueryPinnedCodesResponse;
                toProto(message: _170.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _170.QueryPinnedCodesResponse): _170.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _170.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _170.QueryParamsRequest;
                fromPartial(_: Partial<_170.QueryParamsRequest>): _170.QueryParamsRequest;
                fromAmino(_: _170.QueryParamsRequestAmino): _170.QueryParamsRequest;
                toAmino(_: _170.QueryParamsRequest): _170.QueryParamsRequestAmino;
                fromAminoMsg(object: _170.QueryParamsRequestAminoMsg): _170.QueryParamsRequest;
                toAminoMsg(message: _170.QueryParamsRequest): _170.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryParamsRequestProtoMsg): _170.QueryParamsRequest;
                toProto(message: _170.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryParamsRequest): _170.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _170.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryParamsResponse;
                fromPartial(object: Partial<_170.QueryParamsResponse>): _170.QueryParamsResponse;
                fromAmino(object: _170.QueryParamsResponseAmino): _170.QueryParamsResponse;
                toAmino(message: _170.QueryParamsResponse): _170.QueryParamsResponseAmino;
                fromAminoMsg(object: _170.QueryParamsResponseAminoMsg): _170.QueryParamsResponse;
                toAminoMsg(message: _170.QueryParamsResponse): _170.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryParamsResponseProtoMsg): _170.QueryParamsResponse;
                toProto(message: _170.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryParamsResponse): _170.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _170.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_170.QueryContractsByCreatorRequest>): _170.QueryContractsByCreatorRequest;
                fromAmino(object: _170.QueryContractsByCreatorRequestAmino): _170.QueryContractsByCreatorRequest;
                toAmino(message: _170.QueryContractsByCreatorRequest): _170.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _170.QueryContractsByCreatorRequestAminoMsg): _170.QueryContractsByCreatorRequest;
                toAminoMsg(message: _170.QueryContractsByCreatorRequest): _170.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _170.QueryContractsByCreatorRequestProtoMsg): _170.QueryContractsByCreatorRequest;
                toProto(message: _170.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _170.QueryContractsByCreatorRequest): _170.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _170.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_170.QueryContractsByCreatorResponse>): _170.QueryContractsByCreatorResponse;
                fromAmino(object: _170.QueryContractsByCreatorResponseAmino): _170.QueryContractsByCreatorResponse;
                toAmino(message: _170.QueryContractsByCreatorResponse): _170.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _170.QueryContractsByCreatorResponseAminoMsg): _170.QueryContractsByCreatorResponse;
                toAminoMsg(message: _170.QueryContractsByCreatorResponse): _170.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _170.QueryContractsByCreatorResponseProtoMsg): _170.QueryContractsByCreatorResponse;
                toProto(message: _170.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _170.QueryContractsByCreatorResponse): _170.QueryContractsByCreatorResponseProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _169.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.MsgIBCSend;
                fromPartial(object: Partial<_169.MsgIBCSend>): _169.MsgIBCSend;
                fromAmino(object: _169.MsgIBCSendAmino): _169.MsgIBCSend;
                toAmino(message: _169.MsgIBCSend): _169.MsgIBCSendAmino;
                fromAminoMsg(object: _169.MsgIBCSendAminoMsg): _169.MsgIBCSend;
                toAminoMsg(message: _169.MsgIBCSend): _169.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _169.MsgIBCSendProtoMsg): _169.MsgIBCSend;
                toProto(message: _169.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _169.MsgIBCSend): _169.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _169.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.MsgIBCSendResponse;
                fromPartial(object: Partial<_169.MsgIBCSendResponse>): _169.MsgIBCSendResponse;
                fromAmino(object: _169.MsgIBCSendResponseAmino): _169.MsgIBCSendResponse;
                toAmino(message: _169.MsgIBCSendResponse): _169.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _169.MsgIBCSendResponseAminoMsg): _169.MsgIBCSendResponse;
                toAminoMsg(message: _169.MsgIBCSendResponse): _169.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _169.MsgIBCSendResponseProtoMsg): _169.MsgIBCSendResponse;
                toProto(message: _169.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _169.MsgIBCSendResponse): _169.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _169.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.MsgIBCCloseChannel;
                fromPartial(object: Partial<_169.MsgIBCCloseChannel>): _169.MsgIBCCloseChannel;
                fromAmino(object: _169.MsgIBCCloseChannelAmino): _169.MsgIBCCloseChannel;
                toAmino(message: _169.MsgIBCCloseChannel): _169.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _169.MsgIBCCloseChannelAminoMsg): _169.MsgIBCCloseChannel;
                toAminoMsg(message: _169.MsgIBCCloseChannel): _169.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _169.MsgIBCCloseChannelProtoMsg): _169.MsgIBCCloseChannel;
                toProto(message: _169.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _169.MsgIBCCloseChannel): _169.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _168.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.GenesisState;
                fromPartial(object: Partial<_168.GenesisState>): _168.GenesisState;
                fromAmino(object: _168.GenesisStateAmino): _168.GenesisState;
                toAmino(message: _168.GenesisState): _168.GenesisStateAmino;
                fromAminoMsg(object: _168.GenesisStateAminoMsg): _168.GenesisState;
                toAminoMsg(message: _168.GenesisState): _168.GenesisStateAminoMsg;
                fromProtoMsg(message: _168.GenesisStateProtoMsg): _168.GenesisState;
                toProto(message: _168.GenesisState): Uint8Array;
                toProtoMsg(message: _168.GenesisState): _168.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _168.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.Code;
                fromPartial(object: Partial<_168.Code>): _168.Code;
                fromAmino(object: _168.CodeAmino): _168.Code;
                toAmino(message: _168.Code): _168.CodeAmino;
                fromAminoMsg(object: _168.CodeAminoMsg): _168.Code;
                toAminoMsg(message: _168.Code): _168.CodeAminoMsg;
                fromProtoMsg(message: _168.CodeProtoMsg): _168.Code;
                toProto(message: _168.Code): Uint8Array;
                toProtoMsg(message: _168.Code): _168.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _168.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.Contract;
                fromPartial(object: Partial<_168.Contract>): _168.Contract;
                fromAmino(object: _168.ContractAmino): _168.Contract;
                toAmino(message: _168.Contract): _168.ContractAmino;
                fromAminoMsg(object: _168.ContractAminoMsg): _168.Contract;
                toAminoMsg(message: _168.Contract): _168.ContractAminoMsg;
                fromProtoMsg(message: _168.ContractProtoMsg): _168.Contract;
                toProto(message: _168.Contract): Uint8Array;
                toProtoMsg(message: _168.Contract): _168.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _168.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.Sequence;
                fromPartial(object: Partial<_168.Sequence>): _168.Sequence;
                fromAmino(object: _168.SequenceAmino): _168.Sequence;
                toAmino(message: _168.Sequence): _168.SequenceAmino;
                fromAminoMsg(object: _168.SequenceAminoMsg): _168.Sequence;
                toAminoMsg(message: _168.Sequence): _168.SequenceAminoMsg;
                fromProtoMsg(message: _168.SequenceProtoMsg): _168.Sequence;
                toProto(message: _168.Sequence): Uint8Array;
                toProtoMsg(message: _168.Sequence): _168.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _167.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.StoreCodeAuthorization;
                fromPartial(object: Partial<_167.StoreCodeAuthorization>): _167.StoreCodeAuthorization;
                fromAmino(object: _167.StoreCodeAuthorizationAmino): _167.StoreCodeAuthorization;
                toAmino(message: _167.StoreCodeAuthorization): _167.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _167.StoreCodeAuthorizationAminoMsg): _167.StoreCodeAuthorization;
                toAminoMsg(message: _167.StoreCodeAuthorization): _167.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _167.StoreCodeAuthorizationProtoMsg): _167.StoreCodeAuthorization;
                toProto(message: _167.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _167.StoreCodeAuthorization): _167.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _167.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.ContractExecutionAuthorization;
                fromPartial(object: Partial<_167.ContractExecutionAuthorization>): _167.ContractExecutionAuthorization;
                fromAmino(object: _167.ContractExecutionAuthorizationAmino): _167.ContractExecutionAuthorization;
                toAmino(message: _167.ContractExecutionAuthorization): _167.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _167.ContractExecutionAuthorizationAminoMsg): _167.ContractExecutionAuthorization;
                toAminoMsg(message: _167.ContractExecutionAuthorization): _167.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _167.ContractExecutionAuthorizationProtoMsg): _167.ContractExecutionAuthorization;
                toProto(message: _167.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _167.ContractExecutionAuthorization): _167.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _167.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.ContractMigrationAuthorization;
                fromPartial(object: Partial<_167.ContractMigrationAuthorization>): _167.ContractMigrationAuthorization;
                fromAmino(object: _167.ContractMigrationAuthorizationAmino): _167.ContractMigrationAuthorization;
                toAmino(message: _167.ContractMigrationAuthorization): _167.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _167.ContractMigrationAuthorizationAminoMsg): _167.ContractMigrationAuthorization;
                toAminoMsg(message: _167.ContractMigrationAuthorization): _167.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _167.ContractMigrationAuthorizationProtoMsg): _167.ContractMigrationAuthorization;
                toProto(message: _167.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _167.ContractMigrationAuthorization): _167.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _167.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.CodeGrant;
                fromPartial(object: Partial<_167.CodeGrant>): _167.CodeGrant;
                fromAmino(object: _167.CodeGrantAmino): _167.CodeGrant;
                toAmino(message: _167.CodeGrant): _167.CodeGrantAmino;
                fromAminoMsg(object: _167.CodeGrantAminoMsg): _167.CodeGrant;
                toAminoMsg(message: _167.CodeGrant): _167.CodeGrantAminoMsg;
                fromProtoMsg(message: _167.CodeGrantProtoMsg): _167.CodeGrant;
                toProto(message: _167.CodeGrant): Uint8Array;
                toProtoMsg(message: _167.CodeGrant): _167.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _167.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.ContractGrant;
                fromPartial(object: Partial<_167.ContractGrant>): _167.ContractGrant;
                fromAmino(object: _167.ContractGrantAmino): _167.ContractGrant;
                toAmino(message: _167.ContractGrant): _167.ContractGrantAmino;
                fromAminoMsg(object: _167.ContractGrantAminoMsg): _167.ContractGrant;
                toAminoMsg(message: _167.ContractGrant): _167.ContractGrantAminoMsg;
                fromProtoMsg(message: _167.ContractGrantProtoMsg): _167.ContractGrant;
                toProto(message: _167.ContractGrant): Uint8Array;
                toProtoMsg(message: _167.ContractGrant): _167.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _167.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.MaxCallsLimit;
                fromPartial(object: Partial<_167.MaxCallsLimit>): _167.MaxCallsLimit;
                fromAmino(object: _167.MaxCallsLimitAmino): _167.MaxCallsLimit;
                toAmino(message: _167.MaxCallsLimit): _167.MaxCallsLimitAmino;
                fromAminoMsg(object: _167.MaxCallsLimitAminoMsg): _167.MaxCallsLimit;
                toAminoMsg(message: _167.MaxCallsLimit): _167.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _167.MaxCallsLimitProtoMsg): _167.MaxCallsLimit;
                toProto(message: _167.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _167.MaxCallsLimit): _167.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _167.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.MaxFundsLimit;
                fromPartial(object: Partial<_167.MaxFundsLimit>): _167.MaxFundsLimit;
                fromAmino(object: _167.MaxFundsLimitAmino): _167.MaxFundsLimit;
                toAmino(message: _167.MaxFundsLimit): _167.MaxFundsLimitAmino;
                fromAminoMsg(object: _167.MaxFundsLimitAminoMsg): _167.MaxFundsLimit;
                toAminoMsg(message: _167.MaxFundsLimit): _167.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _167.MaxFundsLimitProtoMsg): _167.MaxFundsLimit;
                toProto(message: _167.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _167.MaxFundsLimit): _167.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _167.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.CombinedLimit;
                fromPartial(object: Partial<_167.CombinedLimit>): _167.CombinedLimit;
                fromAmino(object: _167.CombinedLimitAmino): _167.CombinedLimit;
                toAmino(message: _167.CombinedLimit): _167.CombinedLimitAmino;
                fromAminoMsg(object: _167.CombinedLimitAminoMsg): _167.CombinedLimit;
                toAminoMsg(message: _167.CombinedLimit): _167.CombinedLimitAminoMsg;
                fromProtoMsg(message: _167.CombinedLimitProtoMsg): _167.CombinedLimit;
                toProto(message: _167.CombinedLimit): Uint8Array;
                toProtoMsg(message: _167.CombinedLimit): _167.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _167.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _167.AllowAllMessagesFilter;
                fromPartial(_: Partial<_167.AllowAllMessagesFilter>): _167.AllowAllMessagesFilter;
                fromAmino(_: _167.AllowAllMessagesFilterAmino): _167.AllowAllMessagesFilter;
                toAmino(_: _167.AllowAllMessagesFilter): _167.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _167.AllowAllMessagesFilterAminoMsg): _167.AllowAllMessagesFilter;
                toAminoMsg(message: _167.AllowAllMessagesFilter): _167.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _167.AllowAllMessagesFilterProtoMsg): _167.AllowAllMessagesFilter;
                toProto(message: _167.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _167.AllowAllMessagesFilter): _167.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _167.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_167.AcceptedMessageKeysFilter>): _167.AcceptedMessageKeysFilter;
                fromAmino(object: _167.AcceptedMessageKeysFilterAmino): _167.AcceptedMessageKeysFilter;
                toAmino(message: _167.AcceptedMessageKeysFilter): _167.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _167.AcceptedMessageKeysFilterAminoMsg): _167.AcceptedMessageKeysFilter;
                toAminoMsg(message: _167.AcceptedMessageKeysFilter): _167.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _167.AcceptedMessageKeysFilterProtoMsg): _167.AcceptedMessageKeysFilter;
                toProto(message: _167.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _167.AcceptedMessageKeysFilter): _167.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _167.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _167.AcceptedMessagesFilter;
                fromPartial(object: Partial<_167.AcceptedMessagesFilter>): _167.AcceptedMessagesFilter;
                fromAmino(object: _167.AcceptedMessagesFilterAmino): _167.AcceptedMessagesFilter;
                toAmino(message: _167.AcceptedMessagesFilter): _167.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _167.AcceptedMessagesFilterAminoMsg): _167.AcceptedMessagesFilter;
                toAminoMsg(message: _167.AcceptedMessagesFilter): _167.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _167.AcceptedMessagesFilterProtoMsg): _167.AcceptedMessagesFilter;
                toProto(message: _167.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _167.AcceptedMessagesFilter): _167.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _167.MaxCallsLimit | _167.MaxFundsLimit | _167.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _167.AllowAllMessagesFilter | _167.AcceptedMessageKeysFilter | _167.AcceptedMessagesFilter;
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
                    v1: _307.MsgClientImpl;
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
                        contractInfo(request: _170.QueryContractInfoRequest): Promise<_170.QueryContractInfoResponse>;
                        contractHistory(request: _170.QueryContractHistoryRequest): Promise<_170.QueryContractHistoryResponse>;
                        contractsByCode(request: _170.QueryContractsByCodeRequest): Promise<_170.QueryContractsByCodeResponse>;
                        allContractState(request: _170.QueryAllContractStateRequest): Promise<_170.QueryAllContractStateResponse>;
                        rawContractState(request: _170.QueryRawContractStateRequest): Promise<_170.QueryRawContractStateResponse>;
                        smartContractState(request: _170.QuerySmartContractStateRequest): Promise<_170.QuerySmartContractStateResponse>;
                        code(request: _170.QueryCodeRequest): Promise<_170.QueryCodeResponse>;
                        codes(request?: _170.QueryCodesRequest): Promise<_170.QueryCodesResponse>;
                        pinnedCodes(request?: _170.QueryPinnedCodesRequest): Promise<_170.QueryPinnedCodesResponse>;
                        params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
                        contractsByCreator(request: _170.QueryContractsByCreatorRequest): Promise<_170.QueryContractsByCreatorResponse>;
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
                    v1: _305.LCDQueryClient;
                };
            };
        }>;
    };
}
