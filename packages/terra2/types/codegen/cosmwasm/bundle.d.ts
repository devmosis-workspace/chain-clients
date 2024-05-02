import * as _151 from "./wasm/v1/authz";
import * as _152 from "./wasm/v1/genesis";
import * as _153 from "./wasm/v1/ibc";
import * as _154 from "./wasm/v1/proposal_legacy";
import * as _155 from "./wasm/v1/query";
import * as _156 from "./wasm/v1/tx";
import * as _157 from "./wasm/v1/types";
import * as _273 from "./wasm/v1/query.lcd";
import * as _274 from "./wasm/v1/query.rpc.Query";
import * as _275 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                contractInfo(request: _155.QueryContractInfoRequest): Promise<_155.QueryContractInfoResponse>;
                contractHistory(request: _155.QueryContractHistoryRequest): Promise<_155.QueryContractHistoryResponse>;
                contractsByCode(request: _155.QueryContractsByCodeRequest): Promise<_155.QueryContractsByCodeResponse>;
                allContractState(request: _155.QueryAllContractStateRequest): Promise<_155.QueryAllContractStateResponse>;
                rawContractState(request: _155.QueryRawContractStateRequest): Promise<_155.QueryRawContractStateResponse>;
                smartContractState(request: _155.QuerySmartContractStateRequest): Promise<_155.QuerySmartContractStateResponse>;
                code(request: _155.QueryCodeRequest): Promise<_155.QueryCodeResponse>;
                codes(request?: _155.QueryCodesRequest): Promise<_155.QueryCodesResponse>;
                pinnedCodes(request?: _155.QueryPinnedCodesRequest): Promise<_155.QueryPinnedCodesResponse>;
                params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                contractsByCreator(request: _155.QueryContractsByCreatorRequest): Promise<_155.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _273.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _156.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _156.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _156.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _156.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _156.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _156.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _156.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _156.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _156.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _156.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _156.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _156.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _156.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _156.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _156.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _156.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _156.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _156.MsgStoreCode): {
                        typeUrl: string;
                        value: _156.MsgStoreCode;
                    };
                    instantiateContract(value: _156.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _156.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract2;
                    };
                    executeContract(value: _156.MsgExecuteContract): {
                        typeUrl: string;
                        value: _156.MsgExecuteContract;
                    };
                    migrateContract(value: _156.MsgMigrateContract): {
                        typeUrl: string;
                        value: _156.MsgMigrateContract;
                    };
                    updateAdmin(value: _156.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _156.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _156.MsgClearAdmin): {
                        typeUrl: string;
                        value: _156.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _156.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _156.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _156.MsgUpdateParams): {
                        typeUrl: string;
                        value: _156.MsgUpdateParams;
                    };
                    sudoContract(value: _156.MsgSudoContract): {
                        typeUrl: string;
                        value: _156.MsgSudoContract;
                    };
                    pinCodes(value: _156.MsgPinCodes): {
                        typeUrl: string;
                        value: _156.MsgPinCodes;
                    };
                    unpinCodes(value: _156.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _156.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _156.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _156.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _156.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _156.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _156.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _156.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _156.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _156.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _156.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _156.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _156.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _156.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _156.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _156.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _156.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _156.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _156.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _156.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _156.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _156.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _156.MsgStoreCode): {
                        typeUrl: string;
                        value: _156.MsgStoreCode;
                    };
                    instantiateContract(value: _156.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _156.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract2;
                    };
                    executeContract(value: _156.MsgExecuteContract): {
                        typeUrl: string;
                        value: _156.MsgExecuteContract;
                    };
                    migrateContract(value: _156.MsgMigrateContract): {
                        typeUrl: string;
                        value: _156.MsgMigrateContract;
                    };
                    updateAdmin(value: _156.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _156.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _156.MsgClearAdmin): {
                        typeUrl: string;
                        value: _156.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _156.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _156.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _156.MsgUpdateParams): {
                        typeUrl: string;
                        value: _156.MsgUpdateParams;
                    };
                    sudoContract(value: _156.MsgSudoContract): {
                        typeUrl: string;
                        value: _156.MsgSudoContract;
                    };
                    pinCodes(value: _156.MsgPinCodes): {
                        typeUrl: string;
                        value: _156.MsgPinCodes;
                    };
                    unpinCodes(value: _156.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _156.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _156.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _156.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _156.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _156.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _156.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _156.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _156.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _156.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _156.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _156.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _156.MsgStoreCode) => _156.MsgStoreCodeAmino;
                    fromAmino: (object: _156.MsgStoreCodeAmino) => _156.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _156.MsgInstantiateContract) => _156.MsgInstantiateContractAmino;
                    fromAmino: (object: _156.MsgInstantiateContractAmino) => _156.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _156.MsgInstantiateContract2) => _156.MsgInstantiateContract2Amino;
                    fromAmino: (object: _156.MsgInstantiateContract2Amino) => _156.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _156.MsgExecuteContract) => _156.MsgExecuteContractAmino;
                    fromAmino: (object: _156.MsgExecuteContractAmino) => _156.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _156.MsgMigrateContract) => _156.MsgMigrateContractAmino;
                    fromAmino: (object: _156.MsgMigrateContractAmino) => _156.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _156.MsgUpdateAdmin) => _156.MsgUpdateAdminAmino;
                    fromAmino: (object: _156.MsgUpdateAdminAmino) => _156.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _156.MsgClearAdmin) => _156.MsgClearAdminAmino;
                    fromAmino: (object: _156.MsgClearAdminAmino) => _156.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _156.MsgUpdateInstantiateConfig) => _156.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _156.MsgUpdateInstantiateConfigAmino) => _156.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _156.MsgUpdateParams) => _156.MsgUpdateParamsAmino;
                    fromAmino: (object: _156.MsgUpdateParamsAmino) => _156.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _156.MsgSudoContract) => _156.MsgSudoContractAmino;
                    fromAmino: (object: _156.MsgSudoContractAmino) => _156.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _156.MsgPinCodes) => _156.MsgPinCodesAmino;
                    fromAmino: (object: _156.MsgPinCodesAmino) => _156.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _156.MsgUnpinCodes) => _156.MsgUnpinCodesAmino;
                    fromAmino: (object: _156.MsgUnpinCodesAmino) => _156.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _156.MsgStoreAndInstantiateContract) => _156.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _156.MsgStoreAndInstantiateContractAmino) => _156.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _156.MsgRemoveCodeUploadParamsAddresses) => _156.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _156.MsgRemoveCodeUploadParamsAddressesAmino) => _156.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _156.MsgAddCodeUploadParamsAddresses) => _156.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _156.MsgAddCodeUploadParamsAddressesAmino) => _156.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _156.MsgStoreAndMigrateContract) => _156.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _156.MsgStoreAndMigrateContractAmino) => _156.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _156.MsgUpdateContractLabel) => _156.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _156.MsgUpdateContractLabelAmino) => _156.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _157.AccessType;
            accessTypeToJSON(object: _157.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _157.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _157.ContractCodeHistoryOperationType): string;
            AccessType: typeof _157.AccessType;
            AccessTypeSDKType: typeof _157.AccessType;
            AccessTypeAmino: typeof _157.AccessType;
            ContractCodeHistoryOperationType: typeof _157.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _157.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _157.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _157.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.AccessTypeParam;
                fromPartial(object: Partial<_157.AccessTypeParam>): _157.AccessTypeParam;
                fromAmino(object: _157.AccessTypeParamAmino): _157.AccessTypeParam;
                toAmino(message: _157.AccessTypeParam): _157.AccessTypeParamAmino;
                fromAminoMsg(object: _157.AccessTypeParamAminoMsg): _157.AccessTypeParam;
                toAminoMsg(message: _157.AccessTypeParam): _157.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _157.AccessTypeParamProtoMsg): _157.AccessTypeParam;
                toProto(message: _157.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _157.AccessTypeParam): _157.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _157.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.AccessConfig;
                fromPartial(object: Partial<_157.AccessConfig>): _157.AccessConfig;
                fromAmino(object: _157.AccessConfigAmino): _157.AccessConfig;
                toAmino(message: _157.AccessConfig): _157.AccessConfigAmino;
                fromAminoMsg(object: _157.AccessConfigAminoMsg): _157.AccessConfig;
                toAminoMsg(message: _157.AccessConfig): _157.AccessConfigAminoMsg;
                fromProtoMsg(message: _157.AccessConfigProtoMsg): _157.AccessConfig;
                toProto(message: _157.AccessConfig): Uint8Array;
                toProtoMsg(message: _157.AccessConfig): _157.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _157.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Params;
                fromPartial(object: Partial<_157.Params>): _157.Params;
                fromAmino(object: _157.ParamsAmino): _157.Params;
                toAmino(message: _157.Params): _157.ParamsAmino;
                fromAminoMsg(object: _157.ParamsAminoMsg): _157.Params;
                toAminoMsg(message: _157.Params): _157.ParamsAminoMsg;
                fromProtoMsg(message: _157.ParamsProtoMsg): _157.Params;
                toProto(message: _157.Params): Uint8Array;
                toProtoMsg(message: _157.Params): _157.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _157.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.CodeInfo;
                fromPartial(object: Partial<_157.CodeInfo>): _157.CodeInfo;
                fromAmino(object: _157.CodeInfoAmino): _157.CodeInfo;
                toAmino(message: _157.CodeInfo): _157.CodeInfoAmino;
                fromAminoMsg(object: _157.CodeInfoAminoMsg): _157.CodeInfo;
                toAminoMsg(message: _157.CodeInfo): _157.CodeInfoAminoMsg;
                fromProtoMsg(message: _157.CodeInfoProtoMsg): _157.CodeInfo;
                toProto(message: _157.CodeInfo): Uint8Array;
                toProtoMsg(message: _157.CodeInfo): _157.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _157.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.ContractInfo;
                fromPartial(object: Partial<_157.ContractInfo>): _157.ContractInfo;
                fromAmino(object: _157.ContractInfoAmino): _157.ContractInfo;
                toAmino(message: _157.ContractInfo): _157.ContractInfoAmino;
                fromAminoMsg(object: _157.ContractInfoAminoMsg): _157.ContractInfo;
                toAminoMsg(message: _157.ContractInfo): _157.ContractInfoAminoMsg;
                fromProtoMsg(message: _157.ContractInfoProtoMsg): _157.ContractInfo;
                toProto(message: _157.ContractInfo): Uint8Array;
                toProtoMsg(message: _157.ContractInfo): _157.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _157.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_157.ContractCodeHistoryEntry>): _157.ContractCodeHistoryEntry;
                fromAmino(object: _157.ContractCodeHistoryEntryAmino): _157.ContractCodeHistoryEntry;
                toAmino(message: _157.ContractCodeHistoryEntry): _157.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _157.ContractCodeHistoryEntryAminoMsg): _157.ContractCodeHistoryEntry;
                toAminoMsg(message: _157.ContractCodeHistoryEntry): _157.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _157.ContractCodeHistoryEntryProtoMsg): _157.ContractCodeHistoryEntry;
                toProto(message: _157.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _157.ContractCodeHistoryEntry): _157.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _157.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.AbsoluteTxPosition;
                fromPartial(object: Partial<_157.AbsoluteTxPosition>): _157.AbsoluteTxPosition;
                fromAmino(object: _157.AbsoluteTxPositionAmino): _157.AbsoluteTxPosition;
                toAmino(message: _157.AbsoluteTxPosition): _157.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _157.AbsoluteTxPositionAminoMsg): _157.AbsoluteTxPosition;
                toAminoMsg(message: _157.AbsoluteTxPosition): _157.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _157.AbsoluteTxPositionProtoMsg): _157.AbsoluteTxPosition;
                toProto(message: _157.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _157.AbsoluteTxPosition): _157.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _157.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _157.Model;
                fromPartial(object: Partial<_157.Model>): _157.Model;
                fromAmino(object: _157.ModelAmino): _157.Model;
                toAmino(message: _157.Model): _157.ModelAmino;
                fromAminoMsg(object: _157.ModelAminoMsg): _157.Model;
                toAminoMsg(message: _157.Model): _157.ModelAminoMsg;
                fromProtoMsg(message: _157.ModelProtoMsg): _157.Model;
                toProto(message: _157.Model): Uint8Array;
                toProtoMsg(message: _157.Model): _157.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _156.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgStoreCode;
                fromPartial(object: Partial<_156.MsgStoreCode>): _156.MsgStoreCode;
                fromAmino(object: _156.MsgStoreCodeAmino): _156.MsgStoreCode;
                toAmino(message: _156.MsgStoreCode): _156.MsgStoreCodeAmino;
                fromAminoMsg(object: _156.MsgStoreCodeAminoMsg): _156.MsgStoreCode;
                toAminoMsg(message: _156.MsgStoreCode): _156.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _156.MsgStoreCodeProtoMsg): _156.MsgStoreCode;
                toProto(message: _156.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _156.MsgStoreCode): _156.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _156.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgStoreCodeResponse;
                fromPartial(object: Partial<_156.MsgStoreCodeResponse>): _156.MsgStoreCodeResponse;
                fromAmino(object: _156.MsgStoreCodeResponseAmino): _156.MsgStoreCodeResponse;
                toAmino(message: _156.MsgStoreCodeResponse): _156.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _156.MsgStoreCodeResponseAminoMsg): _156.MsgStoreCodeResponse;
                toAminoMsg(message: _156.MsgStoreCodeResponse): _156.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _156.MsgStoreCodeResponseProtoMsg): _156.MsgStoreCodeResponse;
                toProto(message: _156.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _156.MsgStoreCodeResponse): _156.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _156.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgInstantiateContract;
                fromPartial(object: Partial<_156.MsgInstantiateContract>): _156.MsgInstantiateContract;
                fromAmino(object: _156.MsgInstantiateContractAmino): _156.MsgInstantiateContract;
                toAmino(message: _156.MsgInstantiateContract): _156.MsgInstantiateContractAmino;
                fromAminoMsg(object: _156.MsgInstantiateContractAminoMsg): _156.MsgInstantiateContract;
                toAminoMsg(message: _156.MsgInstantiateContract): _156.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _156.MsgInstantiateContractProtoMsg): _156.MsgInstantiateContract;
                toProto(message: _156.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _156.MsgInstantiateContract): _156.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _156.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_156.MsgInstantiateContractResponse>): _156.MsgInstantiateContractResponse;
                fromAmino(object: _156.MsgInstantiateContractResponseAmino): _156.MsgInstantiateContractResponse;
                toAmino(message: _156.MsgInstantiateContractResponse): _156.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _156.MsgInstantiateContractResponseAminoMsg): _156.MsgInstantiateContractResponse;
                toAminoMsg(message: _156.MsgInstantiateContractResponse): _156.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _156.MsgInstantiateContractResponseProtoMsg): _156.MsgInstantiateContractResponse;
                toProto(message: _156.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _156.MsgInstantiateContractResponse): _156.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _156.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgInstantiateContract2;
                fromPartial(object: Partial<_156.MsgInstantiateContract2>): _156.MsgInstantiateContract2;
                fromAmino(object: _156.MsgInstantiateContract2Amino): _156.MsgInstantiateContract2;
                toAmino(message: _156.MsgInstantiateContract2): _156.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _156.MsgInstantiateContract2AminoMsg): _156.MsgInstantiateContract2;
                toAminoMsg(message: _156.MsgInstantiateContract2): _156.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _156.MsgInstantiateContract2ProtoMsg): _156.MsgInstantiateContract2;
                toProto(message: _156.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _156.MsgInstantiateContract2): _156.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _156.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_156.MsgInstantiateContract2Response>): _156.MsgInstantiateContract2Response;
                fromAmino(object: _156.MsgInstantiateContract2ResponseAmino): _156.MsgInstantiateContract2Response;
                toAmino(message: _156.MsgInstantiateContract2Response): _156.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _156.MsgInstantiateContract2ResponseAminoMsg): _156.MsgInstantiateContract2Response;
                toAminoMsg(message: _156.MsgInstantiateContract2Response): _156.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _156.MsgInstantiateContract2ResponseProtoMsg): _156.MsgInstantiateContract2Response;
                toProto(message: _156.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _156.MsgInstantiateContract2Response): _156.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _156.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgExecuteContract;
                fromPartial(object: Partial<_156.MsgExecuteContract>): _156.MsgExecuteContract;
                fromAmino(object: _156.MsgExecuteContractAmino): _156.MsgExecuteContract;
                toAmino(message: _156.MsgExecuteContract): _156.MsgExecuteContractAmino;
                fromAminoMsg(object: _156.MsgExecuteContractAminoMsg): _156.MsgExecuteContract;
                toAminoMsg(message: _156.MsgExecuteContract): _156.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _156.MsgExecuteContractProtoMsg): _156.MsgExecuteContract;
                toProto(message: _156.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _156.MsgExecuteContract): _156.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _156.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgExecuteContractResponse;
                fromPartial(object: Partial<_156.MsgExecuteContractResponse>): _156.MsgExecuteContractResponse;
                fromAmino(object: _156.MsgExecuteContractResponseAmino): _156.MsgExecuteContractResponse;
                toAmino(message: _156.MsgExecuteContractResponse): _156.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _156.MsgExecuteContractResponseAminoMsg): _156.MsgExecuteContractResponse;
                toAminoMsg(message: _156.MsgExecuteContractResponse): _156.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _156.MsgExecuteContractResponseProtoMsg): _156.MsgExecuteContractResponse;
                toProto(message: _156.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _156.MsgExecuteContractResponse): _156.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _156.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgMigrateContract;
                fromPartial(object: Partial<_156.MsgMigrateContract>): _156.MsgMigrateContract;
                fromAmino(object: _156.MsgMigrateContractAmino): _156.MsgMigrateContract;
                toAmino(message: _156.MsgMigrateContract): _156.MsgMigrateContractAmino;
                fromAminoMsg(object: _156.MsgMigrateContractAminoMsg): _156.MsgMigrateContract;
                toAminoMsg(message: _156.MsgMigrateContract): _156.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _156.MsgMigrateContractProtoMsg): _156.MsgMigrateContract;
                toProto(message: _156.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _156.MsgMigrateContract): _156.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _156.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgMigrateContractResponse;
                fromPartial(object: Partial<_156.MsgMigrateContractResponse>): _156.MsgMigrateContractResponse;
                fromAmino(object: _156.MsgMigrateContractResponseAmino): _156.MsgMigrateContractResponse;
                toAmino(message: _156.MsgMigrateContractResponse): _156.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _156.MsgMigrateContractResponseAminoMsg): _156.MsgMigrateContractResponse;
                toAminoMsg(message: _156.MsgMigrateContractResponse): _156.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _156.MsgMigrateContractResponseProtoMsg): _156.MsgMigrateContractResponse;
                toProto(message: _156.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _156.MsgMigrateContractResponse): _156.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _156.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgUpdateAdmin;
                fromPartial(object: Partial<_156.MsgUpdateAdmin>): _156.MsgUpdateAdmin;
                fromAmino(object: _156.MsgUpdateAdminAmino): _156.MsgUpdateAdmin;
                toAmino(message: _156.MsgUpdateAdmin): _156.MsgUpdateAdminAmino;
                fromAminoMsg(object: _156.MsgUpdateAdminAminoMsg): _156.MsgUpdateAdmin;
                toAminoMsg(message: _156.MsgUpdateAdmin): _156.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateAdminProtoMsg): _156.MsgUpdateAdmin;
                toProto(message: _156.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateAdmin): _156.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _156.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_156.MsgUpdateAdminResponse>): _156.MsgUpdateAdminResponse;
                fromAmino(_: _156.MsgUpdateAdminResponseAmino): _156.MsgUpdateAdminResponse;
                toAmino(_: _156.MsgUpdateAdminResponse): _156.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _156.MsgUpdateAdminResponseAminoMsg): _156.MsgUpdateAdminResponse;
                toAminoMsg(message: _156.MsgUpdateAdminResponse): _156.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateAdminResponseProtoMsg): _156.MsgUpdateAdminResponse;
                toProto(message: _156.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateAdminResponse): _156.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _156.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgClearAdmin;
                fromPartial(object: Partial<_156.MsgClearAdmin>): _156.MsgClearAdmin;
                fromAmino(object: _156.MsgClearAdminAmino): _156.MsgClearAdmin;
                toAmino(message: _156.MsgClearAdmin): _156.MsgClearAdminAmino;
                fromAminoMsg(object: _156.MsgClearAdminAminoMsg): _156.MsgClearAdmin;
                toAminoMsg(message: _156.MsgClearAdmin): _156.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _156.MsgClearAdminProtoMsg): _156.MsgClearAdmin;
                toProto(message: _156.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _156.MsgClearAdmin): _156.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _156.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgClearAdminResponse;
                fromPartial(_: Partial<_156.MsgClearAdminResponse>): _156.MsgClearAdminResponse;
                fromAmino(_: _156.MsgClearAdminResponseAmino): _156.MsgClearAdminResponse;
                toAmino(_: _156.MsgClearAdminResponse): _156.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _156.MsgClearAdminResponseAminoMsg): _156.MsgClearAdminResponse;
                toAminoMsg(message: _156.MsgClearAdminResponse): _156.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _156.MsgClearAdminResponseProtoMsg): _156.MsgClearAdminResponse;
                toProto(message: _156.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _156.MsgClearAdminResponse): _156.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _156.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_156.MsgUpdateInstantiateConfig>): _156.MsgUpdateInstantiateConfig;
                fromAmino(object: _156.MsgUpdateInstantiateConfigAmino): _156.MsgUpdateInstantiateConfig;
                toAmino(message: _156.MsgUpdateInstantiateConfig): _156.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _156.MsgUpdateInstantiateConfigAminoMsg): _156.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _156.MsgUpdateInstantiateConfig): _156.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateInstantiateConfigProtoMsg): _156.MsgUpdateInstantiateConfig;
                toProto(message: _156.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateInstantiateConfig): _156.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _156.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_156.MsgUpdateInstantiateConfigResponse>): _156.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _156.MsgUpdateInstantiateConfigResponseAmino): _156.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _156.MsgUpdateInstantiateConfigResponse): _156.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _156.MsgUpdateInstantiateConfigResponseAminoMsg): _156.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _156.MsgUpdateInstantiateConfigResponse): _156.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateInstantiateConfigResponseProtoMsg): _156.MsgUpdateInstantiateConfigResponse;
                toProto(message: _156.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateInstantiateConfigResponse): _156.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _156.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgUpdateParams;
                fromPartial(object: Partial<_156.MsgUpdateParams>): _156.MsgUpdateParams;
                fromAmino(object: _156.MsgUpdateParamsAmino): _156.MsgUpdateParams;
                toAmino(message: _156.MsgUpdateParams): _156.MsgUpdateParamsAmino;
                fromAminoMsg(object: _156.MsgUpdateParamsAminoMsg): _156.MsgUpdateParams;
                toAminoMsg(message: _156.MsgUpdateParams): _156.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateParamsProtoMsg): _156.MsgUpdateParams;
                toProto(message: _156.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateParams): _156.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _156.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_156.MsgUpdateParamsResponse>): _156.MsgUpdateParamsResponse;
                fromAmino(_: _156.MsgUpdateParamsResponseAmino): _156.MsgUpdateParamsResponse;
                toAmino(_: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _156.MsgUpdateParamsResponseAminoMsg): _156.MsgUpdateParamsResponse;
                toAminoMsg(message: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateParamsResponseProtoMsg): _156.MsgUpdateParamsResponse;
                toProto(message: _156.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _156.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgSudoContract;
                fromPartial(object: Partial<_156.MsgSudoContract>): _156.MsgSudoContract;
                fromAmino(object: _156.MsgSudoContractAmino): _156.MsgSudoContract;
                toAmino(message: _156.MsgSudoContract): _156.MsgSudoContractAmino;
                fromAminoMsg(object: _156.MsgSudoContractAminoMsg): _156.MsgSudoContract;
                toAminoMsg(message: _156.MsgSudoContract): _156.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _156.MsgSudoContractProtoMsg): _156.MsgSudoContract;
                toProto(message: _156.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _156.MsgSudoContract): _156.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _156.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgSudoContractResponse;
                fromPartial(object: Partial<_156.MsgSudoContractResponse>): _156.MsgSudoContractResponse;
                fromAmino(object: _156.MsgSudoContractResponseAmino): _156.MsgSudoContractResponse;
                toAmino(message: _156.MsgSudoContractResponse): _156.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _156.MsgSudoContractResponseAminoMsg): _156.MsgSudoContractResponse;
                toAminoMsg(message: _156.MsgSudoContractResponse): _156.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _156.MsgSudoContractResponseProtoMsg): _156.MsgSudoContractResponse;
                toProto(message: _156.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _156.MsgSudoContractResponse): _156.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _156.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgPinCodes;
                fromPartial(object: Partial<_156.MsgPinCodes>): _156.MsgPinCodes;
                fromAmino(object: _156.MsgPinCodesAmino): _156.MsgPinCodes;
                toAmino(message: _156.MsgPinCodes): _156.MsgPinCodesAmino;
                fromAminoMsg(object: _156.MsgPinCodesAminoMsg): _156.MsgPinCodes;
                toAminoMsg(message: _156.MsgPinCodes): _156.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _156.MsgPinCodesProtoMsg): _156.MsgPinCodes;
                toProto(message: _156.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _156.MsgPinCodes): _156.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _156.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgPinCodesResponse;
                fromPartial(_: Partial<_156.MsgPinCodesResponse>): _156.MsgPinCodesResponse;
                fromAmino(_: _156.MsgPinCodesResponseAmino): _156.MsgPinCodesResponse;
                toAmino(_: _156.MsgPinCodesResponse): _156.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _156.MsgPinCodesResponseAminoMsg): _156.MsgPinCodesResponse;
                toAminoMsg(message: _156.MsgPinCodesResponse): _156.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _156.MsgPinCodesResponseProtoMsg): _156.MsgPinCodesResponse;
                toProto(message: _156.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _156.MsgPinCodesResponse): _156.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _156.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgUnpinCodes;
                fromPartial(object: Partial<_156.MsgUnpinCodes>): _156.MsgUnpinCodes;
                fromAmino(object: _156.MsgUnpinCodesAmino): _156.MsgUnpinCodes;
                toAmino(message: _156.MsgUnpinCodes): _156.MsgUnpinCodesAmino;
                fromAminoMsg(object: _156.MsgUnpinCodesAminoMsg): _156.MsgUnpinCodes;
                toAminoMsg(message: _156.MsgUnpinCodes): _156.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _156.MsgUnpinCodesProtoMsg): _156.MsgUnpinCodes;
                toProto(message: _156.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _156.MsgUnpinCodes): _156.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _156.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_156.MsgUnpinCodesResponse>): _156.MsgUnpinCodesResponse;
                fromAmino(_: _156.MsgUnpinCodesResponseAmino): _156.MsgUnpinCodesResponse;
                toAmino(_: _156.MsgUnpinCodesResponse): _156.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _156.MsgUnpinCodesResponseAminoMsg): _156.MsgUnpinCodesResponse;
                toAminoMsg(message: _156.MsgUnpinCodesResponse): _156.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _156.MsgUnpinCodesResponseProtoMsg): _156.MsgUnpinCodesResponse;
                toProto(message: _156.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _156.MsgUnpinCodesResponse): _156.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _156.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_156.MsgStoreAndInstantiateContract>): _156.MsgStoreAndInstantiateContract;
                fromAmino(object: _156.MsgStoreAndInstantiateContractAmino): _156.MsgStoreAndInstantiateContract;
                toAmino(message: _156.MsgStoreAndInstantiateContract): _156.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _156.MsgStoreAndInstantiateContractAminoMsg): _156.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _156.MsgStoreAndInstantiateContract): _156.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _156.MsgStoreAndInstantiateContractProtoMsg): _156.MsgStoreAndInstantiateContract;
                toProto(message: _156.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _156.MsgStoreAndInstantiateContract): _156.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _156.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_156.MsgStoreAndInstantiateContractResponse>): _156.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _156.MsgStoreAndInstantiateContractResponseAmino): _156.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _156.MsgStoreAndInstantiateContractResponse): _156.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _156.MsgStoreAndInstantiateContractResponseAminoMsg): _156.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _156.MsgStoreAndInstantiateContractResponse): _156.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _156.MsgStoreAndInstantiateContractResponseProtoMsg): _156.MsgStoreAndInstantiateContractResponse;
                toProto(message: _156.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _156.MsgStoreAndInstantiateContractResponse): _156.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _156.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_156.MsgAddCodeUploadParamsAddresses>): _156.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _156.MsgAddCodeUploadParamsAddressesAmino): _156.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _156.MsgAddCodeUploadParamsAddresses): _156.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _156.MsgAddCodeUploadParamsAddressesAminoMsg): _156.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _156.MsgAddCodeUploadParamsAddresses): _156.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _156.MsgAddCodeUploadParamsAddressesProtoMsg): _156.MsgAddCodeUploadParamsAddresses;
                toProto(message: _156.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _156.MsgAddCodeUploadParamsAddresses): _156.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _156.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_156.MsgAddCodeUploadParamsAddressesResponse>): _156.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _156.MsgAddCodeUploadParamsAddressesResponseAmino): _156.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _156.MsgAddCodeUploadParamsAddressesResponse): _156.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _156.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _156.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _156.MsgAddCodeUploadParamsAddressesResponse): _156.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _156.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _156.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _156.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _156.MsgAddCodeUploadParamsAddressesResponse): _156.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _156.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_156.MsgRemoveCodeUploadParamsAddresses>): _156.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _156.MsgRemoveCodeUploadParamsAddressesAmino): _156.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _156.MsgRemoveCodeUploadParamsAddresses): _156.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _156.MsgRemoveCodeUploadParamsAddressesAminoMsg): _156.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _156.MsgRemoveCodeUploadParamsAddresses): _156.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _156.MsgRemoveCodeUploadParamsAddressesProtoMsg): _156.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _156.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _156.MsgRemoveCodeUploadParamsAddresses): _156.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _156.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_156.MsgRemoveCodeUploadParamsAddressesResponse>): _156.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _156.MsgRemoveCodeUploadParamsAddressesResponseAmino): _156.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _156.MsgRemoveCodeUploadParamsAddressesResponse): _156.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _156.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _156.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _156.MsgRemoveCodeUploadParamsAddressesResponse): _156.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _156.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _156.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _156.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _156.MsgRemoveCodeUploadParamsAddressesResponse): _156.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _156.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_156.MsgStoreAndMigrateContract>): _156.MsgStoreAndMigrateContract;
                fromAmino(object: _156.MsgStoreAndMigrateContractAmino): _156.MsgStoreAndMigrateContract;
                toAmino(message: _156.MsgStoreAndMigrateContract): _156.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _156.MsgStoreAndMigrateContractAminoMsg): _156.MsgStoreAndMigrateContract;
                toAminoMsg(message: _156.MsgStoreAndMigrateContract): _156.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _156.MsgStoreAndMigrateContractProtoMsg): _156.MsgStoreAndMigrateContract;
                toProto(message: _156.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _156.MsgStoreAndMigrateContract): _156.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _156.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_156.MsgStoreAndMigrateContractResponse>): _156.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _156.MsgStoreAndMigrateContractResponseAmino): _156.MsgStoreAndMigrateContractResponse;
                toAmino(message: _156.MsgStoreAndMigrateContractResponse): _156.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _156.MsgStoreAndMigrateContractResponseAminoMsg): _156.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _156.MsgStoreAndMigrateContractResponse): _156.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _156.MsgStoreAndMigrateContractResponseProtoMsg): _156.MsgStoreAndMigrateContractResponse;
                toProto(message: _156.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _156.MsgStoreAndMigrateContractResponse): _156.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _156.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.MsgUpdateContractLabel;
                fromPartial(object: Partial<_156.MsgUpdateContractLabel>): _156.MsgUpdateContractLabel;
                fromAmino(object: _156.MsgUpdateContractLabelAmino): _156.MsgUpdateContractLabel;
                toAmino(message: _156.MsgUpdateContractLabel): _156.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _156.MsgUpdateContractLabelAminoMsg): _156.MsgUpdateContractLabel;
                toAminoMsg(message: _156.MsgUpdateContractLabel): _156.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateContractLabelProtoMsg): _156.MsgUpdateContractLabel;
                toProto(message: _156.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateContractLabel): _156.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _156.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _156.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_156.MsgUpdateContractLabelResponse>): _156.MsgUpdateContractLabelResponse;
                fromAmino(_: _156.MsgUpdateContractLabelResponseAmino): _156.MsgUpdateContractLabelResponse;
                toAmino(_: _156.MsgUpdateContractLabelResponse): _156.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _156.MsgUpdateContractLabelResponseAminoMsg): _156.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _156.MsgUpdateContractLabelResponse): _156.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _156.MsgUpdateContractLabelResponseProtoMsg): _156.MsgUpdateContractLabelResponse;
                toProto(message: _156.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _156.MsgUpdateContractLabelResponse): _156.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _155.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractInfoRequest;
                fromPartial(object: Partial<_155.QueryContractInfoRequest>): _155.QueryContractInfoRequest;
                fromAmino(object: _155.QueryContractInfoRequestAmino): _155.QueryContractInfoRequest;
                toAmino(message: _155.QueryContractInfoRequest): _155.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _155.QueryContractInfoRequestAminoMsg): _155.QueryContractInfoRequest;
                toAminoMsg(message: _155.QueryContractInfoRequest): _155.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _155.QueryContractInfoRequestProtoMsg): _155.QueryContractInfoRequest;
                toProto(message: _155.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _155.QueryContractInfoRequest): _155.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _155.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractInfoResponse;
                fromPartial(object: Partial<_155.QueryContractInfoResponse>): _155.QueryContractInfoResponse;
                fromAmino(object: _155.QueryContractInfoResponseAmino): _155.QueryContractInfoResponse;
                toAmino(message: _155.QueryContractInfoResponse): _155.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _155.QueryContractInfoResponseAminoMsg): _155.QueryContractInfoResponse;
                toAminoMsg(message: _155.QueryContractInfoResponse): _155.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _155.QueryContractInfoResponseProtoMsg): _155.QueryContractInfoResponse;
                toProto(message: _155.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _155.QueryContractInfoResponse): _155.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _155.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractHistoryRequest;
                fromPartial(object: Partial<_155.QueryContractHistoryRequest>): _155.QueryContractHistoryRequest;
                fromAmino(object: _155.QueryContractHistoryRequestAmino): _155.QueryContractHistoryRequest;
                toAmino(message: _155.QueryContractHistoryRequest): _155.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _155.QueryContractHistoryRequestAminoMsg): _155.QueryContractHistoryRequest;
                toAminoMsg(message: _155.QueryContractHistoryRequest): _155.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _155.QueryContractHistoryRequestProtoMsg): _155.QueryContractHistoryRequest;
                toProto(message: _155.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _155.QueryContractHistoryRequest): _155.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _155.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractHistoryResponse;
                fromPartial(object: Partial<_155.QueryContractHistoryResponse>): _155.QueryContractHistoryResponse;
                fromAmino(object: _155.QueryContractHistoryResponseAmino): _155.QueryContractHistoryResponse;
                toAmino(message: _155.QueryContractHistoryResponse): _155.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _155.QueryContractHistoryResponseAminoMsg): _155.QueryContractHistoryResponse;
                toAminoMsg(message: _155.QueryContractHistoryResponse): _155.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _155.QueryContractHistoryResponseProtoMsg): _155.QueryContractHistoryResponse;
                toProto(message: _155.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _155.QueryContractHistoryResponse): _155.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _155.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_155.QueryContractsByCodeRequest>): _155.QueryContractsByCodeRequest;
                fromAmino(object: _155.QueryContractsByCodeRequestAmino): _155.QueryContractsByCodeRequest;
                toAmino(message: _155.QueryContractsByCodeRequest): _155.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _155.QueryContractsByCodeRequestAminoMsg): _155.QueryContractsByCodeRequest;
                toAminoMsg(message: _155.QueryContractsByCodeRequest): _155.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _155.QueryContractsByCodeRequestProtoMsg): _155.QueryContractsByCodeRequest;
                toProto(message: _155.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _155.QueryContractsByCodeRequest): _155.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _155.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_155.QueryContractsByCodeResponse>): _155.QueryContractsByCodeResponse;
                fromAmino(object: _155.QueryContractsByCodeResponseAmino): _155.QueryContractsByCodeResponse;
                toAmino(message: _155.QueryContractsByCodeResponse): _155.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _155.QueryContractsByCodeResponseAminoMsg): _155.QueryContractsByCodeResponse;
                toAminoMsg(message: _155.QueryContractsByCodeResponse): _155.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _155.QueryContractsByCodeResponseProtoMsg): _155.QueryContractsByCodeResponse;
                toProto(message: _155.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _155.QueryContractsByCodeResponse): _155.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _155.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryAllContractStateRequest;
                fromPartial(object: Partial<_155.QueryAllContractStateRequest>): _155.QueryAllContractStateRequest;
                fromAmino(object: _155.QueryAllContractStateRequestAmino): _155.QueryAllContractStateRequest;
                toAmino(message: _155.QueryAllContractStateRequest): _155.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _155.QueryAllContractStateRequestAminoMsg): _155.QueryAllContractStateRequest;
                toAminoMsg(message: _155.QueryAllContractStateRequest): _155.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _155.QueryAllContractStateRequestProtoMsg): _155.QueryAllContractStateRequest;
                toProto(message: _155.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _155.QueryAllContractStateRequest): _155.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _155.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryAllContractStateResponse;
                fromPartial(object: Partial<_155.QueryAllContractStateResponse>): _155.QueryAllContractStateResponse;
                fromAmino(object: _155.QueryAllContractStateResponseAmino): _155.QueryAllContractStateResponse;
                toAmino(message: _155.QueryAllContractStateResponse): _155.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _155.QueryAllContractStateResponseAminoMsg): _155.QueryAllContractStateResponse;
                toAminoMsg(message: _155.QueryAllContractStateResponse): _155.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _155.QueryAllContractStateResponseProtoMsg): _155.QueryAllContractStateResponse;
                toProto(message: _155.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _155.QueryAllContractStateResponse): _155.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _155.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryRawContractStateRequest;
                fromPartial(object: Partial<_155.QueryRawContractStateRequest>): _155.QueryRawContractStateRequest;
                fromAmino(object: _155.QueryRawContractStateRequestAmino): _155.QueryRawContractStateRequest;
                toAmino(message: _155.QueryRawContractStateRequest): _155.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _155.QueryRawContractStateRequestAminoMsg): _155.QueryRawContractStateRequest;
                toAminoMsg(message: _155.QueryRawContractStateRequest): _155.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _155.QueryRawContractStateRequestProtoMsg): _155.QueryRawContractStateRequest;
                toProto(message: _155.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _155.QueryRawContractStateRequest): _155.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _155.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryRawContractStateResponse;
                fromPartial(object: Partial<_155.QueryRawContractStateResponse>): _155.QueryRawContractStateResponse;
                fromAmino(object: _155.QueryRawContractStateResponseAmino): _155.QueryRawContractStateResponse;
                toAmino(message: _155.QueryRawContractStateResponse): _155.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _155.QueryRawContractStateResponseAminoMsg): _155.QueryRawContractStateResponse;
                toAminoMsg(message: _155.QueryRawContractStateResponse): _155.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _155.QueryRawContractStateResponseProtoMsg): _155.QueryRawContractStateResponse;
                toProto(message: _155.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _155.QueryRawContractStateResponse): _155.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _155.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_155.QuerySmartContractStateRequest>): _155.QuerySmartContractStateRequest;
                fromAmino(object: _155.QuerySmartContractStateRequestAmino): _155.QuerySmartContractStateRequest;
                toAmino(message: _155.QuerySmartContractStateRequest): _155.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _155.QuerySmartContractStateRequestAminoMsg): _155.QuerySmartContractStateRequest;
                toAminoMsg(message: _155.QuerySmartContractStateRequest): _155.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _155.QuerySmartContractStateRequestProtoMsg): _155.QuerySmartContractStateRequest;
                toProto(message: _155.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _155.QuerySmartContractStateRequest): _155.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _155.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_155.QuerySmartContractStateResponse>): _155.QuerySmartContractStateResponse;
                fromAmino(object: _155.QuerySmartContractStateResponseAmino): _155.QuerySmartContractStateResponse;
                toAmino(message: _155.QuerySmartContractStateResponse): _155.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _155.QuerySmartContractStateResponseAminoMsg): _155.QuerySmartContractStateResponse;
                toAminoMsg(message: _155.QuerySmartContractStateResponse): _155.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _155.QuerySmartContractStateResponseProtoMsg): _155.QuerySmartContractStateResponse;
                toProto(message: _155.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _155.QuerySmartContractStateResponse): _155.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _155.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryCodeRequest;
                fromPartial(object: Partial<_155.QueryCodeRequest>): _155.QueryCodeRequest;
                fromAmino(object: _155.QueryCodeRequestAmino): _155.QueryCodeRequest;
                toAmino(message: _155.QueryCodeRequest): _155.QueryCodeRequestAmino;
                fromAminoMsg(object: _155.QueryCodeRequestAminoMsg): _155.QueryCodeRequest;
                toAminoMsg(message: _155.QueryCodeRequest): _155.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _155.QueryCodeRequestProtoMsg): _155.QueryCodeRequest;
                toProto(message: _155.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _155.QueryCodeRequest): _155.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _155.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.CodeInfoResponse;
                fromPartial(object: Partial<_155.CodeInfoResponse>): _155.CodeInfoResponse;
                fromAmino(object: _155.CodeInfoResponseAmino): _155.CodeInfoResponse;
                toAmino(message: _155.CodeInfoResponse): _155.CodeInfoResponseAmino;
                fromAminoMsg(object: _155.CodeInfoResponseAminoMsg): _155.CodeInfoResponse;
                toAminoMsg(message: _155.CodeInfoResponse): _155.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _155.CodeInfoResponseProtoMsg): _155.CodeInfoResponse;
                toProto(message: _155.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _155.CodeInfoResponse): _155.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _155.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryCodeResponse;
                fromPartial(object: Partial<_155.QueryCodeResponse>): _155.QueryCodeResponse;
                fromAmino(object: _155.QueryCodeResponseAmino): _155.QueryCodeResponse;
                toAmino(message: _155.QueryCodeResponse): _155.QueryCodeResponseAmino;
                fromAminoMsg(object: _155.QueryCodeResponseAminoMsg): _155.QueryCodeResponse;
                toAminoMsg(message: _155.QueryCodeResponse): _155.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _155.QueryCodeResponseProtoMsg): _155.QueryCodeResponse;
                toProto(message: _155.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _155.QueryCodeResponse): _155.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _155.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryCodesRequest;
                fromPartial(object: Partial<_155.QueryCodesRequest>): _155.QueryCodesRequest;
                fromAmino(object: _155.QueryCodesRequestAmino): _155.QueryCodesRequest;
                toAmino(message: _155.QueryCodesRequest): _155.QueryCodesRequestAmino;
                fromAminoMsg(object: _155.QueryCodesRequestAminoMsg): _155.QueryCodesRequest;
                toAminoMsg(message: _155.QueryCodesRequest): _155.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _155.QueryCodesRequestProtoMsg): _155.QueryCodesRequest;
                toProto(message: _155.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _155.QueryCodesRequest): _155.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _155.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryCodesResponse;
                fromPartial(object: Partial<_155.QueryCodesResponse>): _155.QueryCodesResponse;
                fromAmino(object: _155.QueryCodesResponseAmino): _155.QueryCodesResponse;
                toAmino(message: _155.QueryCodesResponse): _155.QueryCodesResponseAmino;
                fromAminoMsg(object: _155.QueryCodesResponseAminoMsg): _155.QueryCodesResponse;
                toAminoMsg(message: _155.QueryCodesResponse): _155.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _155.QueryCodesResponseProtoMsg): _155.QueryCodesResponse;
                toProto(message: _155.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _155.QueryCodesResponse): _155.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _155.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_155.QueryPinnedCodesRequest>): _155.QueryPinnedCodesRequest;
                fromAmino(object: _155.QueryPinnedCodesRequestAmino): _155.QueryPinnedCodesRequest;
                toAmino(message: _155.QueryPinnedCodesRequest): _155.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _155.QueryPinnedCodesRequestAminoMsg): _155.QueryPinnedCodesRequest;
                toAminoMsg(message: _155.QueryPinnedCodesRequest): _155.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _155.QueryPinnedCodesRequestProtoMsg): _155.QueryPinnedCodesRequest;
                toProto(message: _155.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _155.QueryPinnedCodesRequest): _155.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _155.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_155.QueryPinnedCodesResponse>): _155.QueryPinnedCodesResponse;
                fromAmino(object: _155.QueryPinnedCodesResponseAmino): _155.QueryPinnedCodesResponse;
                toAmino(message: _155.QueryPinnedCodesResponse): _155.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _155.QueryPinnedCodesResponseAminoMsg): _155.QueryPinnedCodesResponse;
                toAminoMsg(message: _155.QueryPinnedCodesResponse): _155.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _155.QueryPinnedCodesResponseProtoMsg): _155.QueryPinnedCodesResponse;
                toProto(message: _155.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _155.QueryPinnedCodesResponse): _155.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _155.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.QueryParamsRequest;
                fromPartial(_: Partial<_155.QueryParamsRequest>): _155.QueryParamsRequest;
                fromAmino(_: _155.QueryParamsRequestAmino): _155.QueryParamsRequest;
                toAmino(_: _155.QueryParamsRequest): _155.QueryParamsRequestAmino;
                fromAminoMsg(object: _155.QueryParamsRequestAminoMsg): _155.QueryParamsRequest;
                toAminoMsg(message: _155.QueryParamsRequest): _155.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _155.QueryParamsRequestProtoMsg): _155.QueryParamsRequest;
                toProto(message: _155.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _155.QueryParamsRequest): _155.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _155.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryParamsResponse;
                fromPartial(object: Partial<_155.QueryParamsResponse>): _155.QueryParamsResponse;
                fromAmino(object: _155.QueryParamsResponseAmino): _155.QueryParamsResponse;
                toAmino(message: _155.QueryParamsResponse): _155.QueryParamsResponseAmino;
                fromAminoMsg(object: _155.QueryParamsResponseAminoMsg): _155.QueryParamsResponse;
                toAminoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _155.QueryParamsResponseProtoMsg): _155.QueryParamsResponse;
                toProto(message: _155.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _155.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_155.QueryContractsByCreatorRequest>): _155.QueryContractsByCreatorRequest;
                fromAmino(object: _155.QueryContractsByCreatorRequestAmino): _155.QueryContractsByCreatorRequest;
                toAmino(message: _155.QueryContractsByCreatorRequest): _155.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _155.QueryContractsByCreatorRequestAminoMsg): _155.QueryContractsByCreatorRequest;
                toAminoMsg(message: _155.QueryContractsByCreatorRequest): _155.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _155.QueryContractsByCreatorRequestProtoMsg): _155.QueryContractsByCreatorRequest;
                toProto(message: _155.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _155.QueryContractsByCreatorRequest): _155.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _155.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_155.QueryContractsByCreatorResponse>): _155.QueryContractsByCreatorResponse;
                fromAmino(object: _155.QueryContractsByCreatorResponseAmino): _155.QueryContractsByCreatorResponse;
                toAmino(message: _155.QueryContractsByCreatorResponse): _155.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _155.QueryContractsByCreatorResponseAminoMsg): _155.QueryContractsByCreatorResponse;
                toAminoMsg(message: _155.QueryContractsByCreatorResponse): _155.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _155.QueryContractsByCreatorResponseProtoMsg): _155.QueryContractsByCreatorResponse;
                toProto(message: _155.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _155.QueryContractsByCreatorResponse): _155.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _154.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.StoreCodeProposal;
                fromPartial(object: Partial<_154.StoreCodeProposal>): _154.StoreCodeProposal;
                fromAmino(object: _154.StoreCodeProposalAmino): _154.StoreCodeProposal;
                toAmino(message: _154.StoreCodeProposal): _154.StoreCodeProposalAmino;
                fromAminoMsg(object: _154.StoreCodeProposalAminoMsg): _154.StoreCodeProposal;
                toAminoMsg(message: _154.StoreCodeProposal): _154.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _154.StoreCodeProposalProtoMsg): _154.StoreCodeProposal;
                toProto(message: _154.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _154.StoreCodeProposal): _154.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _154.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.InstantiateContractProposal;
                fromPartial(object: Partial<_154.InstantiateContractProposal>): _154.InstantiateContractProposal;
                fromAmino(object: _154.InstantiateContractProposalAmino): _154.InstantiateContractProposal;
                toAmino(message: _154.InstantiateContractProposal): _154.InstantiateContractProposalAmino;
                fromAminoMsg(object: _154.InstantiateContractProposalAminoMsg): _154.InstantiateContractProposal;
                toAminoMsg(message: _154.InstantiateContractProposal): _154.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _154.InstantiateContractProposalProtoMsg): _154.InstantiateContractProposal;
                toProto(message: _154.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _154.InstantiateContractProposal): _154.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _154.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.InstantiateContract2Proposal;
                fromPartial(object: Partial<_154.InstantiateContract2Proposal>): _154.InstantiateContract2Proposal;
                fromAmino(object: _154.InstantiateContract2ProposalAmino): _154.InstantiateContract2Proposal;
                toAmino(message: _154.InstantiateContract2Proposal): _154.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _154.InstantiateContract2ProposalAminoMsg): _154.InstantiateContract2Proposal;
                toAminoMsg(message: _154.InstantiateContract2Proposal): _154.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _154.InstantiateContract2ProposalProtoMsg): _154.InstantiateContract2Proposal;
                toProto(message: _154.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _154.InstantiateContract2Proposal): _154.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _154.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.MigrateContractProposal;
                fromPartial(object: Partial<_154.MigrateContractProposal>): _154.MigrateContractProposal;
                fromAmino(object: _154.MigrateContractProposalAmino): _154.MigrateContractProposal;
                toAmino(message: _154.MigrateContractProposal): _154.MigrateContractProposalAmino;
                fromAminoMsg(object: _154.MigrateContractProposalAminoMsg): _154.MigrateContractProposal;
                toAminoMsg(message: _154.MigrateContractProposal): _154.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _154.MigrateContractProposalProtoMsg): _154.MigrateContractProposal;
                toProto(message: _154.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _154.MigrateContractProposal): _154.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _154.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.SudoContractProposal;
                fromPartial(object: Partial<_154.SudoContractProposal>): _154.SudoContractProposal;
                fromAmino(object: _154.SudoContractProposalAmino): _154.SudoContractProposal;
                toAmino(message: _154.SudoContractProposal): _154.SudoContractProposalAmino;
                fromAminoMsg(object: _154.SudoContractProposalAminoMsg): _154.SudoContractProposal;
                toAminoMsg(message: _154.SudoContractProposal): _154.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _154.SudoContractProposalProtoMsg): _154.SudoContractProposal;
                toProto(message: _154.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _154.SudoContractProposal): _154.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _154.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ExecuteContractProposal;
                fromPartial(object: Partial<_154.ExecuteContractProposal>): _154.ExecuteContractProposal;
                fromAmino(object: _154.ExecuteContractProposalAmino): _154.ExecuteContractProposal;
                toAmino(message: _154.ExecuteContractProposal): _154.ExecuteContractProposalAmino;
                fromAminoMsg(object: _154.ExecuteContractProposalAminoMsg): _154.ExecuteContractProposal;
                toAminoMsg(message: _154.ExecuteContractProposal): _154.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _154.ExecuteContractProposalProtoMsg): _154.ExecuteContractProposal;
                toProto(message: _154.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _154.ExecuteContractProposal): _154.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _154.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.UpdateAdminProposal;
                fromPartial(object: Partial<_154.UpdateAdminProposal>): _154.UpdateAdminProposal;
                fromAmino(object: _154.UpdateAdminProposalAmino): _154.UpdateAdminProposal;
                toAmino(message: _154.UpdateAdminProposal): _154.UpdateAdminProposalAmino;
                fromAminoMsg(object: _154.UpdateAdminProposalAminoMsg): _154.UpdateAdminProposal;
                toAminoMsg(message: _154.UpdateAdminProposal): _154.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _154.UpdateAdminProposalProtoMsg): _154.UpdateAdminProposal;
                toProto(message: _154.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _154.UpdateAdminProposal): _154.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _154.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.ClearAdminProposal;
                fromPartial(object: Partial<_154.ClearAdminProposal>): _154.ClearAdminProposal;
                fromAmino(object: _154.ClearAdminProposalAmino): _154.ClearAdminProposal;
                toAmino(message: _154.ClearAdminProposal): _154.ClearAdminProposalAmino;
                fromAminoMsg(object: _154.ClearAdminProposalAminoMsg): _154.ClearAdminProposal;
                toAminoMsg(message: _154.ClearAdminProposal): _154.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _154.ClearAdminProposalProtoMsg): _154.ClearAdminProposal;
                toProto(message: _154.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _154.ClearAdminProposal): _154.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _154.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.PinCodesProposal;
                fromPartial(object: Partial<_154.PinCodesProposal>): _154.PinCodesProposal;
                fromAmino(object: _154.PinCodesProposalAmino): _154.PinCodesProposal;
                toAmino(message: _154.PinCodesProposal): _154.PinCodesProposalAmino;
                fromAminoMsg(object: _154.PinCodesProposalAminoMsg): _154.PinCodesProposal;
                toAminoMsg(message: _154.PinCodesProposal): _154.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _154.PinCodesProposalProtoMsg): _154.PinCodesProposal;
                toProto(message: _154.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _154.PinCodesProposal): _154.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _154.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.UnpinCodesProposal;
                fromPartial(object: Partial<_154.UnpinCodesProposal>): _154.UnpinCodesProposal;
                fromAmino(object: _154.UnpinCodesProposalAmino): _154.UnpinCodesProposal;
                toAmino(message: _154.UnpinCodesProposal): _154.UnpinCodesProposalAmino;
                fromAminoMsg(object: _154.UnpinCodesProposalAminoMsg): _154.UnpinCodesProposal;
                toAminoMsg(message: _154.UnpinCodesProposal): _154.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _154.UnpinCodesProposalProtoMsg): _154.UnpinCodesProposal;
                toProto(message: _154.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _154.UnpinCodesProposal): _154.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _154.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.AccessConfigUpdate;
                fromPartial(object: Partial<_154.AccessConfigUpdate>): _154.AccessConfigUpdate;
                fromAmino(object: _154.AccessConfigUpdateAmino): _154.AccessConfigUpdate;
                toAmino(message: _154.AccessConfigUpdate): _154.AccessConfigUpdateAmino;
                fromAminoMsg(object: _154.AccessConfigUpdateAminoMsg): _154.AccessConfigUpdate;
                toAminoMsg(message: _154.AccessConfigUpdate): _154.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _154.AccessConfigUpdateProtoMsg): _154.AccessConfigUpdate;
                toProto(message: _154.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _154.AccessConfigUpdate): _154.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _154.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_154.UpdateInstantiateConfigProposal>): _154.UpdateInstantiateConfigProposal;
                fromAmino(object: _154.UpdateInstantiateConfigProposalAmino): _154.UpdateInstantiateConfigProposal;
                toAmino(message: _154.UpdateInstantiateConfigProposal): _154.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _154.UpdateInstantiateConfigProposalAminoMsg): _154.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _154.UpdateInstantiateConfigProposal): _154.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _154.UpdateInstantiateConfigProposalProtoMsg): _154.UpdateInstantiateConfigProposal;
                toProto(message: _154.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _154.UpdateInstantiateConfigProposal): _154.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _154.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_154.StoreAndInstantiateContractProposal>): _154.StoreAndInstantiateContractProposal;
                fromAmino(object: _154.StoreAndInstantiateContractProposalAmino): _154.StoreAndInstantiateContractProposal;
                toAmino(message: _154.StoreAndInstantiateContractProposal): _154.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _154.StoreAndInstantiateContractProposalAminoMsg): _154.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _154.StoreAndInstantiateContractProposal): _154.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _154.StoreAndInstantiateContractProposalProtoMsg): _154.StoreAndInstantiateContractProposal;
                toProto(message: _154.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _154.StoreAndInstantiateContractProposal): _154.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _153.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgIBCSend;
                fromPartial(object: Partial<_153.MsgIBCSend>): _153.MsgIBCSend;
                fromAmino(object: _153.MsgIBCSendAmino): _153.MsgIBCSend;
                toAmino(message: _153.MsgIBCSend): _153.MsgIBCSendAmino;
                fromAminoMsg(object: _153.MsgIBCSendAminoMsg): _153.MsgIBCSend;
                toAminoMsg(message: _153.MsgIBCSend): _153.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _153.MsgIBCSendProtoMsg): _153.MsgIBCSend;
                toProto(message: _153.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _153.MsgIBCSend): _153.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _153.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgIBCSendResponse;
                fromPartial(object: Partial<_153.MsgIBCSendResponse>): _153.MsgIBCSendResponse;
                fromAmino(object: _153.MsgIBCSendResponseAmino): _153.MsgIBCSendResponse;
                toAmino(message: _153.MsgIBCSendResponse): _153.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _153.MsgIBCSendResponseAminoMsg): _153.MsgIBCSendResponse;
                toAminoMsg(message: _153.MsgIBCSendResponse): _153.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _153.MsgIBCSendResponseProtoMsg): _153.MsgIBCSendResponse;
                toProto(message: _153.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _153.MsgIBCSendResponse): _153.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _153.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MsgIBCCloseChannel;
                fromPartial(object: Partial<_153.MsgIBCCloseChannel>): _153.MsgIBCCloseChannel;
                fromAmino(object: _153.MsgIBCCloseChannelAmino): _153.MsgIBCCloseChannel;
                toAmino(message: _153.MsgIBCCloseChannel): _153.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _153.MsgIBCCloseChannelAminoMsg): _153.MsgIBCCloseChannel;
                toAminoMsg(message: _153.MsgIBCCloseChannel): _153.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _153.MsgIBCCloseChannelProtoMsg): _153.MsgIBCCloseChannel;
                toProto(message: _153.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _153.MsgIBCCloseChannel): _153.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _152.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.GenesisState;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
                fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
                toAminoMsg(message: _152.GenesisState): _152.GenesisStateAminoMsg;
                fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
                toProto(message: _152.GenesisState): Uint8Array;
                toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _152.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.Code;
                fromPartial(object: Partial<_152.Code>): _152.Code;
                fromAmino(object: _152.CodeAmino): _152.Code;
                toAmino(message: _152.Code): _152.CodeAmino;
                fromAminoMsg(object: _152.CodeAminoMsg): _152.Code;
                toAminoMsg(message: _152.Code): _152.CodeAminoMsg;
                fromProtoMsg(message: _152.CodeProtoMsg): _152.Code;
                toProto(message: _152.Code): Uint8Array;
                toProtoMsg(message: _152.Code): _152.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _152.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.Contract;
                fromPartial(object: Partial<_152.Contract>): _152.Contract;
                fromAmino(object: _152.ContractAmino): _152.Contract;
                toAmino(message: _152.Contract): _152.ContractAmino;
                fromAminoMsg(object: _152.ContractAminoMsg): _152.Contract;
                toAminoMsg(message: _152.Contract): _152.ContractAminoMsg;
                fromProtoMsg(message: _152.ContractProtoMsg): _152.Contract;
                toProto(message: _152.Contract): Uint8Array;
                toProtoMsg(message: _152.Contract): _152.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _152.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.Sequence;
                fromPartial(object: Partial<_152.Sequence>): _152.Sequence;
                fromAmino(object: _152.SequenceAmino): _152.Sequence;
                toAmino(message: _152.Sequence): _152.SequenceAmino;
                fromAminoMsg(object: _152.SequenceAminoMsg): _152.Sequence;
                toAminoMsg(message: _152.Sequence): _152.SequenceAminoMsg;
                fromProtoMsg(message: _152.SequenceProtoMsg): _152.Sequence;
                toProto(message: _152.Sequence): Uint8Array;
                toProtoMsg(message: _152.Sequence): _152.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _151.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.StoreCodeAuthorization;
                fromPartial(object: Partial<_151.StoreCodeAuthorization>): _151.StoreCodeAuthorization;
                fromAmino(object: _151.StoreCodeAuthorizationAmino): _151.StoreCodeAuthorization;
                toAmino(message: _151.StoreCodeAuthorization): _151.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _151.StoreCodeAuthorizationAminoMsg): _151.StoreCodeAuthorization;
                toAminoMsg(message: _151.StoreCodeAuthorization): _151.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _151.StoreCodeAuthorizationProtoMsg): _151.StoreCodeAuthorization;
                toProto(message: _151.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _151.StoreCodeAuthorization): _151.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _151.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.ContractExecutionAuthorization;
                fromPartial(object: Partial<_151.ContractExecutionAuthorization>): _151.ContractExecutionAuthorization;
                fromAmino(object: _151.ContractExecutionAuthorizationAmino): _151.ContractExecutionAuthorization;
                toAmino(message: _151.ContractExecutionAuthorization): _151.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _151.ContractExecutionAuthorizationAminoMsg): _151.ContractExecutionAuthorization;
                toAminoMsg(message: _151.ContractExecutionAuthorization): _151.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _151.ContractExecutionAuthorizationProtoMsg): _151.ContractExecutionAuthorization;
                toProto(message: _151.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _151.ContractExecutionAuthorization): _151.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _151.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.ContractMigrationAuthorization;
                fromPartial(object: Partial<_151.ContractMigrationAuthorization>): _151.ContractMigrationAuthorization;
                fromAmino(object: _151.ContractMigrationAuthorizationAmino): _151.ContractMigrationAuthorization;
                toAmino(message: _151.ContractMigrationAuthorization): _151.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _151.ContractMigrationAuthorizationAminoMsg): _151.ContractMigrationAuthorization;
                toAminoMsg(message: _151.ContractMigrationAuthorization): _151.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _151.ContractMigrationAuthorizationProtoMsg): _151.ContractMigrationAuthorization;
                toProto(message: _151.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _151.ContractMigrationAuthorization): _151.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _151.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.CodeGrant;
                fromPartial(object: Partial<_151.CodeGrant>): _151.CodeGrant;
                fromAmino(object: _151.CodeGrantAmino): _151.CodeGrant;
                toAmino(message: _151.CodeGrant): _151.CodeGrantAmino;
                fromAminoMsg(object: _151.CodeGrantAminoMsg): _151.CodeGrant;
                toAminoMsg(message: _151.CodeGrant): _151.CodeGrantAminoMsg;
                fromProtoMsg(message: _151.CodeGrantProtoMsg): _151.CodeGrant;
                toProto(message: _151.CodeGrant): Uint8Array;
                toProtoMsg(message: _151.CodeGrant): _151.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _151.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.ContractGrant;
                fromPartial(object: Partial<_151.ContractGrant>): _151.ContractGrant;
                fromAmino(object: _151.ContractGrantAmino): _151.ContractGrant;
                toAmino(message: _151.ContractGrant): _151.ContractGrantAmino;
                fromAminoMsg(object: _151.ContractGrantAminoMsg): _151.ContractGrant;
                toAminoMsg(message: _151.ContractGrant): _151.ContractGrantAminoMsg;
                fromProtoMsg(message: _151.ContractGrantProtoMsg): _151.ContractGrant;
                toProto(message: _151.ContractGrant): Uint8Array;
                toProtoMsg(message: _151.ContractGrant): _151.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _151.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MaxCallsLimit;
                fromPartial(object: Partial<_151.MaxCallsLimit>): _151.MaxCallsLimit;
                fromAmino(object: _151.MaxCallsLimitAmino): _151.MaxCallsLimit;
                toAmino(message: _151.MaxCallsLimit): _151.MaxCallsLimitAmino;
                fromAminoMsg(object: _151.MaxCallsLimitAminoMsg): _151.MaxCallsLimit;
                toAminoMsg(message: _151.MaxCallsLimit): _151.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _151.MaxCallsLimitProtoMsg): _151.MaxCallsLimit;
                toProto(message: _151.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _151.MaxCallsLimit): _151.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _151.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.MaxFundsLimit;
                fromPartial(object: Partial<_151.MaxFundsLimit>): _151.MaxFundsLimit;
                fromAmino(object: _151.MaxFundsLimitAmino): _151.MaxFundsLimit;
                toAmino(message: _151.MaxFundsLimit): _151.MaxFundsLimitAmino;
                fromAminoMsg(object: _151.MaxFundsLimitAminoMsg): _151.MaxFundsLimit;
                toAminoMsg(message: _151.MaxFundsLimit): _151.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _151.MaxFundsLimitProtoMsg): _151.MaxFundsLimit;
                toProto(message: _151.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _151.MaxFundsLimit): _151.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _151.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.CombinedLimit;
                fromPartial(object: Partial<_151.CombinedLimit>): _151.CombinedLimit;
                fromAmino(object: _151.CombinedLimitAmino): _151.CombinedLimit;
                toAmino(message: _151.CombinedLimit): _151.CombinedLimitAmino;
                fromAminoMsg(object: _151.CombinedLimitAminoMsg): _151.CombinedLimit;
                toAminoMsg(message: _151.CombinedLimit): _151.CombinedLimitAminoMsg;
                fromProtoMsg(message: _151.CombinedLimitProtoMsg): _151.CombinedLimit;
                toProto(message: _151.CombinedLimit): Uint8Array;
                toProtoMsg(message: _151.CombinedLimit): _151.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _151.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _151.AllowAllMessagesFilter;
                fromPartial(_: Partial<_151.AllowAllMessagesFilter>): _151.AllowAllMessagesFilter;
                fromAmino(_: _151.AllowAllMessagesFilterAmino): _151.AllowAllMessagesFilter;
                toAmino(_: _151.AllowAllMessagesFilter): _151.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _151.AllowAllMessagesFilterAminoMsg): _151.AllowAllMessagesFilter;
                toAminoMsg(message: _151.AllowAllMessagesFilter): _151.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _151.AllowAllMessagesFilterProtoMsg): _151.AllowAllMessagesFilter;
                toProto(message: _151.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _151.AllowAllMessagesFilter): _151.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _151.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_151.AcceptedMessageKeysFilter>): _151.AcceptedMessageKeysFilter;
                fromAmino(object: _151.AcceptedMessageKeysFilterAmino): _151.AcceptedMessageKeysFilter;
                toAmino(message: _151.AcceptedMessageKeysFilter): _151.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _151.AcceptedMessageKeysFilterAminoMsg): _151.AcceptedMessageKeysFilter;
                toAminoMsg(message: _151.AcceptedMessageKeysFilter): _151.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _151.AcceptedMessageKeysFilterProtoMsg): _151.AcceptedMessageKeysFilter;
                toProto(message: _151.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _151.AcceptedMessageKeysFilter): _151.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _151.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.AcceptedMessagesFilter;
                fromPartial(object: Partial<_151.AcceptedMessagesFilter>): _151.AcceptedMessagesFilter;
                fromAmino(object: _151.AcceptedMessagesFilterAmino): _151.AcceptedMessagesFilter;
                toAmino(message: _151.AcceptedMessagesFilter): _151.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _151.AcceptedMessagesFilterAminoMsg): _151.AcceptedMessagesFilter;
                toAminoMsg(message: _151.AcceptedMessagesFilter): _151.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _151.AcceptedMessagesFilterProtoMsg): _151.AcceptedMessagesFilter;
                toProto(message: _151.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _151.AcceptedMessagesFilter): _151.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _151.MaxCallsLimit | _151.MaxFundsLimit | _151.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _151.AllowAllMessagesFilter | _151.AcceptedMessageKeysFilter | _151.AcceptedMessagesFilter;
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
                    v1: _275.MsgClientImpl;
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
                        contractInfo(request: _155.QueryContractInfoRequest): Promise<_155.QueryContractInfoResponse>;
                        contractHistory(request: _155.QueryContractHistoryRequest): Promise<_155.QueryContractHistoryResponse>;
                        contractsByCode(request: _155.QueryContractsByCodeRequest): Promise<_155.QueryContractsByCodeResponse>;
                        allContractState(request: _155.QueryAllContractStateRequest): Promise<_155.QueryAllContractStateResponse>;
                        rawContractState(request: _155.QueryRawContractStateRequest): Promise<_155.QueryRawContractStateResponse>;
                        smartContractState(request: _155.QuerySmartContractStateRequest): Promise<_155.QuerySmartContractStateResponse>;
                        code(request: _155.QueryCodeRequest): Promise<_155.QueryCodeResponse>;
                        codes(request?: _155.QueryCodesRequest): Promise<_155.QueryCodesResponse>;
                        pinnedCodes(request?: _155.QueryPinnedCodesRequest): Promise<_155.QueryPinnedCodesResponse>;
                        params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                        contractsByCreator(request: _155.QueryContractsByCreatorRequest): Promise<_155.QueryContractsByCreatorResponse>;
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
                    v1: _273.LCDQueryClient;
                };
            };
        }>;
    };
}
