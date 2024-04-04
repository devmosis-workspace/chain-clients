import * as _196 from "./wasm/v1/authz";
import * as _197 from "./wasm/v1/genesis";
import * as _198 from "./wasm/v1/ibc";
import * as _199 from "./wasm/v1/proposal_legacy";
import * as _200 from "./wasm/v1/query";
import * as _201 from "./wasm/v1/tx";
import * as _202 from "./wasm/v1/types";
import * as _342 from "./wasm/v1/query.lcd";
import * as _343 from "./wasm/v1/query.rpc.Query";
import * as _344 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _344.MsgClientImpl;
            QueryClientImpl: typeof _343.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _200.QueryContractInfoRequest): Promise<_200.QueryContractInfoResponse>;
                contractHistory(request: _200.QueryContractHistoryRequest): Promise<_200.QueryContractHistoryResponse>;
                contractsByCode(request: _200.QueryContractsByCodeRequest): Promise<_200.QueryContractsByCodeResponse>;
                allContractState(request: _200.QueryAllContractStateRequest): Promise<_200.QueryAllContractStateResponse>;
                rawContractState(request: _200.QueryRawContractStateRequest): Promise<_200.QueryRawContractStateResponse>;
                smartContractState(request: _200.QuerySmartContractStateRequest): Promise<_200.QuerySmartContractStateResponse>;
                code(request: _200.QueryCodeRequest): Promise<_200.QueryCodeResponse>;
                codes(request?: _200.QueryCodesRequest): Promise<_200.QueryCodesResponse>;
                pinnedCodes(request?: _200.QueryPinnedCodesRequest): Promise<_200.QueryPinnedCodesResponse>;
                params(request?: _200.QueryParamsRequest): Promise<_200.QueryParamsResponse>;
                contractsByCreator(request: _200.QueryContractsByCreatorRequest): Promise<_200.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _342.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _201.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _201.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _201.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _201.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _201.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _201.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _201.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _201.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _201.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _201.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _201.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _201.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _201.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _201.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _201.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _201.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _201.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _201.MsgStoreCode): {
                        typeUrl: string;
                        value: _201.MsgStoreCode;
                    };
                    instantiateContract(value: _201.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _201.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _201.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _201.MsgInstantiateContract2;
                    };
                    executeContract(value: _201.MsgExecuteContract): {
                        typeUrl: string;
                        value: _201.MsgExecuteContract;
                    };
                    migrateContract(value: _201.MsgMigrateContract): {
                        typeUrl: string;
                        value: _201.MsgMigrateContract;
                    };
                    updateAdmin(value: _201.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _201.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _201.MsgClearAdmin): {
                        typeUrl: string;
                        value: _201.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _201.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _201.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _201.MsgUpdateParams): {
                        typeUrl: string;
                        value: _201.MsgUpdateParams;
                    };
                    sudoContract(value: _201.MsgSudoContract): {
                        typeUrl: string;
                        value: _201.MsgSudoContract;
                    };
                    pinCodes(value: _201.MsgPinCodes): {
                        typeUrl: string;
                        value: _201.MsgPinCodes;
                    };
                    unpinCodes(value: _201.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _201.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _201.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _201.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _201.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _201.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _201.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _201.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _201.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _201.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _201.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _201.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _201.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _201.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _201.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _201.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _201.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _201.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _201.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _201.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _201.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _201.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _201.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _201.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _201.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _201.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _201.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _201.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _201.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _201.MsgStoreCode): {
                        typeUrl: string;
                        value: _201.MsgStoreCode;
                    };
                    instantiateContract(value: _201.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _201.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _201.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _201.MsgInstantiateContract2;
                    };
                    executeContract(value: _201.MsgExecuteContract): {
                        typeUrl: string;
                        value: _201.MsgExecuteContract;
                    };
                    migrateContract(value: _201.MsgMigrateContract): {
                        typeUrl: string;
                        value: _201.MsgMigrateContract;
                    };
                    updateAdmin(value: _201.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _201.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _201.MsgClearAdmin): {
                        typeUrl: string;
                        value: _201.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _201.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _201.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _201.MsgUpdateParams): {
                        typeUrl: string;
                        value: _201.MsgUpdateParams;
                    };
                    sudoContract(value: _201.MsgSudoContract): {
                        typeUrl: string;
                        value: _201.MsgSudoContract;
                    };
                    pinCodes(value: _201.MsgPinCodes): {
                        typeUrl: string;
                        value: _201.MsgPinCodes;
                    };
                    unpinCodes(value: _201.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _201.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _201.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _201.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _201.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _201.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _201.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _201.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _201.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _201.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _201.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _201.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _201.MsgStoreCode) => _201.MsgStoreCodeAmino;
                    fromAmino: (object: _201.MsgStoreCodeAmino) => _201.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _201.MsgInstantiateContract) => _201.MsgInstantiateContractAmino;
                    fromAmino: (object: _201.MsgInstantiateContractAmino) => _201.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _201.MsgInstantiateContract2) => _201.MsgInstantiateContract2Amino;
                    fromAmino: (object: _201.MsgInstantiateContract2Amino) => _201.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _201.MsgExecuteContract) => _201.MsgExecuteContractAmino;
                    fromAmino: (object: _201.MsgExecuteContractAmino) => _201.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _201.MsgMigrateContract) => _201.MsgMigrateContractAmino;
                    fromAmino: (object: _201.MsgMigrateContractAmino) => _201.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _201.MsgUpdateAdmin) => _201.MsgUpdateAdminAmino;
                    fromAmino: (object: _201.MsgUpdateAdminAmino) => _201.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _201.MsgClearAdmin) => _201.MsgClearAdminAmino;
                    fromAmino: (object: _201.MsgClearAdminAmino) => _201.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _201.MsgUpdateInstantiateConfig) => _201.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _201.MsgUpdateInstantiateConfigAmino) => _201.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _201.MsgUpdateParams) => _201.MsgUpdateParamsAmino;
                    fromAmino: (object: _201.MsgUpdateParamsAmino) => _201.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _201.MsgSudoContract) => _201.MsgSudoContractAmino;
                    fromAmino: (object: _201.MsgSudoContractAmino) => _201.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _201.MsgPinCodes) => _201.MsgPinCodesAmino;
                    fromAmino: (object: _201.MsgPinCodesAmino) => _201.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _201.MsgUnpinCodes) => _201.MsgUnpinCodesAmino;
                    fromAmino: (object: _201.MsgUnpinCodesAmino) => _201.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _201.MsgStoreAndInstantiateContract) => _201.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _201.MsgStoreAndInstantiateContractAmino) => _201.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _201.MsgRemoveCodeUploadParamsAddresses) => _201.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _201.MsgRemoveCodeUploadParamsAddressesAmino) => _201.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _201.MsgAddCodeUploadParamsAddresses) => _201.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _201.MsgAddCodeUploadParamsAddressesAmino) => _201.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _201.MsgStoreAndMigrateContract) => _201.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _201.MsgStoreAndMigrateContractAmino) => _201.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _201.MsgUpdateContractLabel) => _201.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _201.MsgUpdateContractLabelAmino) => _201.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _202.AccessType;
            accessTypeToJSON(object: _202.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _202.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _202.ContractCodeHistoryOperationType): string;
            AccessType: typeof _202.AccessType;
            AccessTypeSDKType: typeof _202.AccessType;
            AccessTypeAmino: typeof _202.AccessType;
            ContractCodeHistoryOperationType: typeof _202.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _202.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _202.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _202.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.AccessTypeParam;
                fromPartial(object: Partial<_202.AccessTypeParam>): _202.AccessTypeParam;
                fromAmino(object: _202.AccessTypeParamAmino): _202.AccessTypeParam;
                toAmino(message: _202.AccessTypeParam): _202.AccessTypeParamAmino;
                fromAminoMsg(object: _202.AccessTypeParamAminoMsg): _202.AccessTypeParam;
                toAminoMsg(message: _202.AccessTypeParam): _202.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _202.AccessTypeParamProtoMsg): _202.AccessTypeParam;
                toProto(message: _202.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _202.AccessTypeParam): _202.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _202.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.AccessConfig;
                fromPartial(object: Partial<_202.AccessConfig>): _202.AccessConfig;
                fromAmino(object: _202.AccessConfigAmino): _202.AccessConfig;
                toAmino(message: _202.AccessConfig): _202.AccessConfigAmino;
                fromAminoMsg(object: _202.AccessConfigAminoMsg): _202.AccessConfig;
                toAminoMsg(message: _202.AccessConfig): _202.AccessConfigAminoMsg;
                fromProtoMsg(message: _202.AccessConfigProtoMsg): _202.AccessConfig;
                toProto(message: _202.AccessConfig): Uint8Array;
                toProtoMsg(message: _202.AccessConfig): _202.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _202.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.Params;
                fromPartial(object: Partial<_202.Params>): _202.Params;
                fromAmino(object: _202.ParamsAmino): _202.Params;
                toAmino(message: _202.Params): _202.ParamsAmino;
                fromAminoMsg(object: _202.ParamsAminoMsg): _202.Params;
                toAminoMsg(message: _202.Params): _202.ParamsAminoMsg;
                fromProtoMsg(message: _202.ParamsProtoMsg): _202.Params;
                toProto(message: _202.Params): Uint8Array;
                toProtoMsg(message: _202.Params): _202.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _202.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.CodeInfo;
                fromPartial(object: Partial<_202.CodeInfo>): _202.CodeInfo;
                fromAmino(object: _202.CodeInfoAmino): _202.CodeInfo;
                toAmino(message: _202.CodeInfo): _202.CodeInfoAmino;
                fromAminoMsg(object: _202.CodeInfoAminoMsg): _202.CodeInfo;
                toAminoMsg(message: _202.CodeInfo): _202.CodeInfoAminoMsg;
                fromProtoMsg(message: _202.CodeInfoProtoMsg): _202.CodeInfo;
                toProto(message: _202.CodeInfo): Uint8Array;
                toProtoMsg(message: _202.CodeInfo): _202.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _202.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.ContractInfo;
                fromPartial(object: Partial<_202.ContractInfo>): _202.ContractInfo;
                fromAmino(object: _202.ContractInfoAmino): _202.ContractInfo;
                toAmino(message: _202.ContractInfo): _202.ContractInfoAmino;
                fromAminoMsg(object: _202.ContractInfoAminoMsg): _202.ContractInfo;
                toAminoMsg(message: _202.ContractInfo): _202.ContractInfoAminoMsg;
                fromProtoMsg(message: _202.ContractInfoProtoMsg): _202.ContractInfo;
                toProto(message: _202.ContractInfo): Uint8Array;
                toProtoMsg(message: _202.ContractInfo): _202.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _202.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_202.ContractCodeHistoryEntry>): _202.ContractCodeHistoryEntry;
                fromAmino(object: _202.ContractCodeHistoryEntryAmino): _202.ContractCodeHistoryEntry;
                toAmino(message: _202.ContractCodeHistoryEntry): _202.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _202.ContractCodeHistoryEntryAminoMsg): _202.ContractCodeHistoryEntry;
                toAminoMsg(message: _202.ContractCodeHistoryEntry): _202.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _202.ContractCodeHistoryEntryProtoMsg): _202.ContractCodeHistoryEntry;
                toProto(message: _202.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _202.ContractCodeHistoryEntry): _202.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _202.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.AbsoluteTxPosition;
                fromPartial(object: Partial<_202.AbsoluteTxPosition>): _202.AbsoluteTxPosition;
                fromAmino(object: _202.AbsoluteTxPositionAmino): _202.AbsoluteTxPosition;
                toAmino(message: _202.AbsoluteTxPosition): _202.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _202.AbsoluteTxPositionAminoMsg): _202.AbsoluteTxPosition;
                toAminoMsg(message: _202.AbsoluteTxPosition): _202.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _202.AbsoluteTxPositionProtoMsg): _202.AbsoluteTxPosition;
                toProto(message: _202.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _202.AbsoluteTxPosition): _202.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _202.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _202.Model;
                fromPartial(object: Partial<_202.Model>): _202.Model;
                fromAmino(object: _202.ModelAmino): _202.Model;
                toAmino(message: _202.Model): _202.ModelAmino;
                fromAminoMsg(object: _202.ModelAminoMsg): _202.Model;
                toAminoMsg(message: _202.Model): _202.ModelAminoMsg;
                fromProtoMsg(message: _202.ModelProtoMsg): _202.Model;
                toProto(message: _202.Model): Uint8Array;
                toProtoMsg(message: _202.Model): _202.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _201.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgStoreCode;
                fromPartial(object: Partial<_201.MsgStoreCode>): _201.MsgStoreCode;
                fromAmino(object: _201.MsgStoreCodeAmino): _201.MsgStoreCode;
                toAmino(message: _201.MsgStoreCode): _201.MsgStoreCodeAmino;
                fromAminoMsg(object: _201.MsgStoreCodeAminoMsg): _201.MsgStoreCode;
                toAminoMsg(message: _201.MsgStoreCode): _201.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _201.MsgStoreCodeProtoMsg): _201.MsgStoreCode;
                toProto(message: _201.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _201.MsgStoreCode): _201.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _201.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgStoreCodeResponse;
                fromPartial(object: Partial<_201.MsgStoreCodeResponse>): _201.MsgStoreCodeResponse;
                fromAmino(object: _201.MsgStoreCodeResponseAmino): _201.MsgStoreCodeResponse;
                toAmino(message: _201.MsgStoreCodeResponse): _201.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _201.MsgStoreCodeResponseAminoMsg): _201.MsgStoreCodeResponse;
                toAminoMsg(message: _201.MsgStoreCodeResponse): _201.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _201.MsgStoreCodeResponseProtoMsg): _201.MsgStoreCodeResponse;
                toProto(message: _201.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _201.MsgStoreCodeResponse): _201.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _201.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgInstantiateContract;
                fromPartial(object: Partial<_201.MsgInstantiateContract>): _201.MsgInstantiateContract;
                fromAmino(object: _201.MsgInstantiateContractAmino): _201.MsgInstantiateContract;
                toAmino(message: _201.MsgInstantiateContract): _201.MsgInstantiateContractAmino;
                fromAminoMsg(object: _201.MsgInstantiateContractAminoMsg): _201.MsgInstantiateContract;
                toAminoMsg(message: _201.MsgInstantiateContract): _201.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _201.MsgInstantiateContractProtoMsg): _201.MsgInstantiateContract;
                toProto(message: _201.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _201.MsgInstantiateContract): _201.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _201.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_201.MsgInstantiateContractResponse>): _201.MsgInstantiateContractResponse;
                fromAmino(object: _201.MsgInstantiateContractResponseAmino): _201.MsgInstantiateContractResponse;
                toAmino(message: _201.MsgInstantiateContractResponse): _201.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _201.MsgInstantiateContractResponseAminoMsg): _201.MsgInstantiateContractResponse;
                toAminoMsg(message: _201.MsgInstantiateContractResponse): _201.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _201.MsgInstantiateContractResponseProtoMsg): _201.MsgInstantiateContractResponse;
                toProto(message: _201.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _201.MsgInstantiateContractResponse): _201.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _201.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgInstantiateContract2;
                fromPartial(object: Partial<_201.MsgInstantiateContract2>): _201.MsgInstantiateContract2;
                fromAmino(object: _201.MsgInstantiateContract2Amino): _201.MsgInstantiateContract2;
                toAmino(message: _201.MsgInstantiateContract2): _201.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _201.MsgInstantiateContract2AminoMsg): _201.MsgInstantiateContract2;
                toAminoMsg(message: _201.MsgInstantiateContract2): _201.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _201.MsgInstantiateContract2ProtoMsg): _201.MsgInstantiateContract2;
                toProto(message: _201.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _201.MsgInstantiateContract2): _201.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _201.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_201.MsgInstantiateContract2Response>): _201.MsgInstantiateContract2Response;
                fromAmino(object: _201.MsgInstantiateContract2ResponseAmino): _201.MsgInstantiateContract2Response;
                toAmino(message: _201.MsgInstantiateContract2Response): _201.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _201.MsgInstantiateContract2ResponseAminoMsg): _201.MsgInstantiateContract2Response;
                toAminoMsg(message: _201.MsgInstantiateContract2Response): _201.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _201.MsgInstantiateContract2ResponseProtoMsg): _201.MsgInstantiateContract2Response;
                toProto(message: _201.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _201.MsgInstantiateContract2Response): _201.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _201.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgExecuteContract;
                fromPartial(object: Partial<_201.MsgExecuteContract>): _201.MsgExecuteContract;
                fromAmino(object: _201.MsgExecuteContractAmino): _201.MsgExecuteContract;
                toAmino(message: _201.MsgExecuteContract): _201.MsgExecuteContractAmino;
                fromAminoMsg(object: _201.MsgExecuteContractAminoMsg): _201.MsgExecuteContract;
                toAminoMsg(message: _201.MsgExecuteContract): _201.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _201.MsgExecuteContractProtoMsg): _201.MsgExecuteContract;
                toProto(message: _201.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _201.MsgExecuteContract): _201.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _201.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgExecuteContractResponse;
                fromPartial(object: Partial<_201.MsgExecuteContractResponse>): _201.MsgExecuteContractResponse;
                fromAmino(object: _201.MsgExecuteContractResponseAmino): _201.MsgExecuteContractResponse;
                toAmino(message: _201.MsgExecuteContractResponse): _201.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _201.MsgExecuteContractResponseAminoMsg): _201.MsgExecuteContractResponse;
                toAminoMsg(message: _201.MsgExecuteContractResponse): _201.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _201.MsgExecuteContractResponseProtoMsg): _201.MsgExecuteContractResponse;
                toProto(message: _201.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _201.MsgExecuteContractResponse): _201.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _201.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgMigrateContract;
                fromPartial(object: Partial<_201.MsgMigrateContract>): _201.MsgMigrateContract;
                fromAmino(object: _201.MsgMigrateContractAmino): _201.MsgMigrateContract;
                toAmino(message: _201.MsgMigrateContract): _201.MsgMigrateContractAmino;
                fromAminoMsg(object: _201.MsgMigrateContractAminoMsg): _201.MsgMigrateContract;
                toAminoMsg(message: _201.MsgMigrateContract): _201.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _201.MsgMigrateContractProtoMsg): _201.MsgMigrateContract;
                toProto(message: _201.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _201.MsgMigrateContract): _201.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _201.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgMigrateContractResponse;
                fromPartial(object: Partial<_201.MsgMigrateContractResponse>): _201.MsgMigrateContractResponse;
                fromAmino(object: _201.MsgMigrateContractResponseAmino): _201.MsgMigrateContractResponse;
                toAmino(message: _201.MsgMigrateContractResponse): _201.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _201.MsgMigrateContractResponseAminoMsg): _201.MsgMigrateContractResponse;
                toAminoMsg(message: _201.MsgMigrateContractResponse): _201.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _201.MsgMigrateContractResponseProtoMsg): _201.MsgMigrateContractResponse;
                toProto(message: _201.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _201.MsgMigrateContractResponse): _201.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _201.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgUpdateAdmin;
                fromPartial(object: Partial<_201.MsgUpdateAdmin>): _201.MsgUpdateAdmin;
                fromAmino(object: _201.MsgUpdateAdminAmino): _201.MsgUpdateAdmin;
                toAmino(message: _201.MsgUpdateAdmin): _201.MsgUpdateAdminAmino;
                fromAminoMsg(object: _201.MsgUpdateAdminAminoMsg): _201.MsgUpdateAdmin;
                toAminoMsg(message: _201.MsgUpdateAdmin): _201.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateAdminProtoMsg): _201.MsgUpdateAdmin;
                toProto(message: _201.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateAdmin): _201.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _201.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_201.MsgUpdateAdminResponse>): _201.MsgUpdateAdminResponse;
                fromAmino(_: _201.MsgUpdateAdminResponseAmino): _201.MsgUpdateAdminResponse;
                toAmino(_: _201.MsgUpdateAdminResponse): _201.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _201.MsgUpdateAdminResponseAminoMsg): _201.MsgUpdateAdminResponse;
                toAminoMsg(message: _201.MsgUpdateAdminResponse): _201.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateAdminResponseProtoMsg): _201.MsgUpdateAdminResponse;
                toProto(message: _201.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateAdminResponse): _201.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _201.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgClearAdmin;
                fromPartial(object: Partial<_201.MsgClearAdmin>): _201.MsgClearAdmin;
                fromAmino(object: _201.MsgClearAdminAmino): _201.MsgClearAdmin;
                toAmino(message: _201.MsgClearAdmin): _201.MsgClearAdminAmino;
                fromAminoMsg(object: _201.MsgClearAdminAminoMsg): _201.MsgClearAdmin;
                toAminoMsg(message: _201.MsgClearAdmin): _201.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _201.MsgClearAdminProtoMsg): _201.MsgClearAdmin;
                toProto(message: _201.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _201.MsgClearAdmin): _201.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _201.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgClearAdminResponse;
                fromPartial(_: Partial<_201.MsgClearAdminResponse>): _201.MsgClearAdminResponse;
                fromAmino(_: _201.MsgClearAdminResponseAmino): _201.MsgClearAdminResponse;
                toAmino(_: _201.MsgClearAdminResponse): _201.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _201.MsgClearAdminResponseAminoMsg): _201.MsgClearAdminResponse;
                toAminoMsg(message: _201.MsgClearAdminResponse): _201.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _201.MsgClearAdminResponseProtoMsg): _201.MsgClearAdminResponse;
                toProto(message: _201.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _201.MsgClearAdminResponse): _201.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _201.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_201.MsgUpdateInstantiateConfig>): _201.MsgUpdateInstantiateConfig;
                fromAmino(object: _201.MsgUpdateInstantiateConfigAmino): _201.MsgUpdateInstantiateConfig;
                toAmino(message: _201.MsgUpdateInstantiateConfig): _201.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _201.MsgUpdateInstantiateConfigAminoMsg): _201.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _201.MsgUpdateInstantiateConfig): _201.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateInstantiateConfigProtoMsg): _201.MsgUpdateInstantiateConfig;
                toProto(message: _201.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateInstantiateConfig): _201.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _201.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_201.MsgUpdateInstantiateConfigResponse>): _201.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _201.MsgUpdateInstantiateConfigResponseAmino): _201.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _201.MsgUpdateInstantiateConfigResponse): _201.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _201.MsgUpdateInstantiateConfigResponseAminoMsg): _201.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _201.MsgUpdateInstantiateConfigResponse): _201.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateInstantiateConfigResponseProtoMsg): _201.MsgUpdateInstantiateConfigResponse;
                toProto(message: _201.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateInstantiateConfigResponse): _201.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _201.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgUpdateParams;
                fromPartial(object: Partial<_201.MsgUpdateParams>): _201.MsgUpdateParams;
                fromAmino(object: _201.MsgUpdateParamsAmino): _201.MsgUpdateParams;
                toAmino(message: _201.MsgUpdateParams): _201.MsgUpdateParamsAmino;
                fromAminoMsg(object: _201.MsgUpdateParamsAminoMsg): _201.MsgUpdateParams;
                toAminoMsg(message: _201.MsgUpdateParams): _201.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateParamsProtoMsg): _201.MsgUpdateParams;
                toProto(message: _201.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateParams): _201.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _201.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_201.MsgUpdateParamsResponse>): _201.MsgUpdateParamsResponse;
                fromAmino(_: _201.MsgUpdateParamsResponseAmino): _201.MsgUpdateParamsResponse;
                toAmino(_: _201.MsgUpdateParamsResponse): _201.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _201.MsgUpdateParamsResponseAminoMsg): _201.MsgUpdateParamsResponse;
                toAminoMsg(message: _201.MsgUpdateParamsResponse): _201.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateParamsResponseProtoMsg): _201.MsgUpdateParamsResponse;
                toProto(message: _201.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateParamsResponse): _201.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _201.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgSudoContract;
                fromPartial(object: Partial<_201.MsgSudoContract>): _201.MsgSudoContract;
                fromAmino(object: _201.MsgSudoContractAmino): _201.MsgSudoContract;
                toAmino(message: _201.MsgSudoContract): _201.MsgSudoContractAmino;
                fromAminoMsg(object: _201.MsgSudoContractAminoMsg): _201.MsgSudoContract;
                toAminoMsg(message: _201.MsgSudoContract): _201.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _201.MsgSudoContractProtoMsg): _201.MsgSudoContract;
                toProto(message: _201.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _201.MsgSudoContract): _201.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _201.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgSudoContractResponse;
                fromPartial(object: Partial<_201.MsgSudoContractResponse>): _201.MsgSudoContractResponse;
                fromAmino(object: _201.MsgSudoContractResponseAmino): _201.MsgSudoContractResponse;
                toAmino(message: _201.MsgSudoContractResponse): _201.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _201.MsgSudoContractResponseAminoMsg): _201.MsgSudoContractResponse;
                toAminoMsg(message: _201.MsgSudoContractResponse): _201.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _201.MsgSudoContractResponseProtoMsg): _201.MsgSudoContractResponse;
                toProto(message: _201.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _201.MsgSudoContractResponse): _201.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _201.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgPinCodes;
                fromPartial(object: Partial<_201.MsgPinCodes>): _201.MsgPinCodes;
                fromAmino(object: _201.MsgPinCodesAmino): _201.MsgPinCodes;
                toAmino(message: _201.MsgPinCodes): _201.MsgPinCodesAmino;
                fromAminoMsg(object: _201.MsgPinCodesAminoMsg): _201.MsgPinCodes;
                toAminoMsg(message: _201.MsgPinCodes): _201.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _201.MsgPinCodesProtoMsg): _201.MsgPinCodes;
                toProto(message: _201.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _201.MsgPinCodes): _201.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _201.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgPinCodesResponse;
                fromPartial(_: Partial<_201.MsgPinCodesResponse>): _201.MsgPinCodesResponse;
                fromAmino(_: _201.MsgPinCodesResponseAmino): _201.MsgPinCodesResponse;
                toAmino(_: _201.MsgPinCodesResponse): _201.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _201.MsgPinCodesResponseAminoMsg): _201.MsgPinCodesResponse;
                toAminoMsg(message: _201.MsgPinCodesResponse): _201.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _201.MsgPinCodesResponseProtoMsg): _201.MsgPinCodesResponse;
                toProto(message: _201.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _201.MsgPinCodesResponse): _201.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _201.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgUnpinCodes;
                fromPartial(object: Partial<_201.MsgUnpinCodes>): _201.MsgUnpinCodes;
                fromAmino(object: _201.MsgUnpinCodesAmino): _201.MsgUnpinCodes;
                toAmino(message: _201.MsgUnpinCodes): _201.MsgUnpinCodesAmino;
                fromAminoMsg(object: _201.MsgUnpinCodesAminoMsg): _201.MsgUnpinCodes;
                toAminoMsg(message: _201.MsgUnpinCodes): _201.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _201.MsgUnpinCodesProtoMsg): _201.MsgUnpinCodes;
                toProto(message: _201.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _201.MsgUnpinCodes): _201.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _201.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_201.MsgUnpinCodesResponse>): _201.MsgUnpinCodesResponse;
                fromAmino(_: _201.MsgUnpinCodesResponseAmino): _201.MsgUnpinCodesResponse;
                toAmino(_: _201.MsgUnpinCodesResponse): _201.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _201.MsgUnpinCodesResponseAminoMsg): _201.MsgUnpinCodesResponse;
                toAminoMsg(message: _201.MsgUnpinCodesResponse): _201.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _201.MsgUnpinCodesResponseProtoMsg): _201.MsgUnpinCodesResponse;
                toProto(message: _201.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _201.MsgUnpinCodesResponse): _201.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _201.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_201.MsgStoreAndInstantiateContract>): _201.MsgStoreAndInstantiateContract;
                fromAmino(object: _201.MsgStoreAndInstantiateContractAmino): _201.MsgStoreAndInstantiateContract;
                toAmino(message: _201.MsgStoreAndInstantiateContract): _201.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _201.MsgStoreAndInstantiateContractAminoMsg): _201.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _201.MsgStoreAndInstantiateContract): _201.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _201.MsgStoreAndInstantiateContractProtoMsg): _201.MsgStoreAndInstantiateContract;
                toProto(message: _201.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _201.MsgStoreAndInstantiateContract): _201.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _201.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_201.MsgStoreAndInstantiateContractResponse>): _201.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _201.MsgStoreAndInstantiateContractResponseAmino): _201.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _201.MsgStoreAndInstantiateContractResponse): _201.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _201.MsgStoreAndInstantiateContractResponseAminoMsg): _201.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _201.MsgStoreAndInstantiateContractResponse): _201.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _201.MsgStoreAndInstantiateContractResponseProtoMsg): _201.MsgStoreAndInstantiateContractResponse;
                toProto(message: _201.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _201.MsgStoreAndInstantiateContractResponse): _201.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _201.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_201.MsgAddCodeUploadParamsAddresses>): _201.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _201.MsgAddCodeUploadParamsAddressesAmino): _201.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _201.MsgAddCodeUploadParamsAddresses): _201.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _201.MsgAddCodeUploadParamsAddressesAminoMsg): _201.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _201.MsgAddCodeUploadParamsAddresses): _201.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _201.MsgAddCodeUploadParamsAddressesProtoMsg): _201.MsgAddCodeUploadParamsAddresses;
                toProto(message: _201.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _201.MsgAddCodeUploadParamsAddresses): _201.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _201.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_201.MsgAddCodeUploadParamsAddressesResponse>): _201.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _201.MsgAddCodeUploadParamsAddressesResponseAmino): _201.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _201.MsgAddCodeUploadParamsAddressesResponse): _201.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _201.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _201.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _201.MsgAddCodeUploadParamsAddressesResponse): _201.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _201.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _201.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _201.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _201.MsgAddCodeUploadParamsAddressesResponse): _201.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _201.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_201.MsgRemoveCodeUploadParamsAddresses>): _201.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _201.MsgRemoveCodeUploadParamsAddressesAmino): _201.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _201.MsgRemoveCodeUploadParamsAddresses): _201.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _201.MsgRemoveCodeUploadParamsAddressesAminoMsg): _201.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _201.MsgRemoveCodeUploadParamsAddresses): _201.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _201.MsgRemoveCodeUploadParamsAddressesProtoMsg): _201.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _201.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _201.MsgRemoveCodeUploadParamsAddresses): _201.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _201.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_201.MsgRemoveCodeUploadParamsAddressesResponse>): _201.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _201.MsgRemoveCodeUploadParamsAddressesResponseAmino): _201.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _201.MsgRemoveCodeUploadParamsAddressesResponse): _201.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _201.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _201.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _201.MsgRemoveCodeUploadParamsAddressesResponse): _201.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _201.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _201.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _201.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _201.MsgRemoveCodeUploadParamsAddressesResponse): _201.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _201.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_201.MsgStoreAndMigrateContract>): _201.MsgStoreAndMigrateContract;
                fromAmino(object: _201.MsgStoreAndMigrateContractAmino): _201.MsgStoreAndMigrateContract;
                toAmino(message: _201.MsgStoreAndMigrateContract): _201.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _201.MsgStoreAndMigrateContractAminoMsg): _201.MsgStoreAndMigrateContract;
                toAminoMsg(message: _201.MsgStoreAndMigrateContract): _201.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _201.MsgStoreAndMigrateContractProtoMsg): _201.MsgStoreAndMigrateContract;
                toProto(message: _201.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _201.MsgStoreAndMigrateContract): _201.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _201.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_201.MsgStoreAndMigrateContractResponse>): _201.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _201.MsgStoreAndMigrateContractResponseAmino): _201.MsgStoreAndMigrateContractResponse;
                toAmino(message: _201.MsgStoreAndMigrateContractResponse): _201.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _201.MsgStoreAndMigrateContractResponseAminoMsg): _201.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _201.MsgStoreAndMigrateContractResponse): _201.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _201.MsgStoreAndMigrateContractResponseProtoMsg): _201.MsgStoreAndMigrateContractResponse;
                toProto(message: _201.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _201.MsgStoreAndMigrateContractResponse): _201.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _201.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _201.MsgUpdateContractLabel;
                fromPartial(object: Partial<_201.MsgUpdateContractLabel>): _201.MsgUpdateContractLabel;
                fromAmino(object: _201.MsgUpdateContractLabelAmino): _201.MsgUpdateContractLabel;
                toAmino(message: _201.MsgUpdateContractLabel): _201.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _201.MsgUpdateContractLabelAminoMsg): _201.MsgUpdateContractLabel;
                toAminoMsg(message: _201.MsgUpdateContractLabel): _201.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateContractLabelProtoMsg): _201.MsgUpdateContractLabel;
                toProto(message: _201.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateContractLabel): _201.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _201.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _201.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_201.MsgUpdateContractLabelResponse>): _201.MsgUpdateContractLabelResponse;
                fromAmino(_: _201.MsgUpdateContractLabelResponseAmino): _201.MsgUpdateContractLabelResponse;
                toAmino(_: _201.MsgUpdateContractLabelResponse): _201.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _201.MsgUpdateContractLabelResponseAminoMsg): _201.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _201.MsgUpdateContractLabelResponse): _201.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _201.MsgUpdateContractLabelResponseProtoMsg): _201.MsgUpdateContractLabelResponse;
                toProto(message: _201.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _201.MsgUpdateContractLabelResponse): _201.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _200.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractInfoRequest;
                fromPartial(object: Partial<_200.QueryContractInfoRequest>): _200.QueryContractInfoRequest;
                fromAmino(object: _200.QueryContractInfoRequestAmino): _200.QueryContractInfoRequest;
                toAmino(message: _200.QueryContractInfoRequest): _200.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _200.QueryContractInfoRequestAminoMsg): _200.QueryContractInfoRequest;
                toAminoMsg(message: _200.QueryContractInfoRequest): _200.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _200.QueryContractInfoRequestProtoMsg): _200.QueryContractInfoRequest;
                toProto(message: _200.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _200.QueryContractInfoRequest): _200.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _200.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractInfoResponse;
                fromPartial(object: Partial<_200.QueryContractInfoResponse>): _200.QueryContractInfoResponse;
                fromAmino(object: _200.QueryContractInfoResponseAmino): _200.QueryContractInfoResponse;
                toAmino(message: _200.QueryContractInfoResponse): _200.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _200.QueryContractInfoResponseAminoMsg): _200.QueryContractInfoResponse;
                toAminoMsg(message: _200.QueryContractInfoResponse): _200.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _200.QueryContractInfoResponseProtoMsg): _200.QueryContractInfoResponse;
                toProto(message: _200.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _200.QueryContractInfoResponse): _200.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _200.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractHistoryRequest;
                fromPartial(object: Partial<_200.QueryContractHistoryRequest>): _200.QueryContractHistoryRequest;
                fromAmino(object: _200.QueryContractHistoryRequestAmino): _200.QueryContractHistoryRequest;
                toAmino(message: _200.QueryContractHistoryRequest): _200.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _200.QueryContractHistoryRequestAminoMsg): _200.QueryContractHistoryRequest;
                toAminoMsg(message: _200.QueryContractHistoryRequest): _200.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _200.QueryContractHistoryRequestProtoMsg): _200.QueryContractHistoryRequest;
                toProto(message: _200.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _200.QueryContractHistoryRequest): _200.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _200.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractHistoryResponse;
                fromPartial(object: Partial<_200.QueryContractHistoryResponse>): _200.QueryContractHistoryResponse;
                fromAmino(object: _200.QueryContractHistoryResponseAmino): _200.QueryContractHistoryResponse;
                toAmino(message: _200.QueryContractHistoryResponse): _200.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _200.QueryContractHistoryResponseAminoMsg): _200.QueryContractHistoryResponse;
                toAminoMsg(message: _200.QueryContractHistoryResponse): _200.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _200.QueryContractHistoryResponseProtoMsg): _200.QueryContractHistoryResponse;
                toProto(message: _200.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _200.QueryContractHistoryResponse): _200.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _200.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_200.QueryContractsByCodeRequest>): _200.QueryContractsByCodeRequest;
                fromAmino(object: _200.QueryContractsByCodeRequestAmino): _200.QueryContractsByCodeRequest;
                toAmino(message: _200.QueryContractsByCodeRequest): _200.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _200.QueryContractsByCodeRequestAminoMsg): _200.QueryContractsByCodeRequest;
                toAminoMsg(message: _200.QueryContractsByCodeRequest): _200.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _200.QueryContractsByCodeRequestProtoMsg): _200.QueryContractsByCodeRequest;
                toProto(message: _200.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _200.QueryContractsByCodeRequest): _200.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _200.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_200.QueryContractsByCodeResponse>): _200.QueryContractsByCodeResponse;
                fromAmino(object: _200.QueryContractsByCodeResponseAmino): _200.QueryContractsByCodeResponse;
                toAmino(message: _200.QueryContractsByCodeResponse): _200.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _200.QueryContractsByCodeResponseAminoMsg): _200.QueryContractsByCodeResponse;
                toAminoMsg(message: _200.QueryContractsByCodeResponse): _200.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _200.QueryContractsByCodeResponseProtoMsg): _200.QueryContractsByCodeResponse;
                toProto(message: _200.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _200.QueryContractsByCodeResponse): _200.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _200.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryAllContractStateRequest;
                fromPartial(object: Partial<_200.QueryAllContractStateRequest>): _200.QueryAllContractStateRequest;
                fromAmino(object: _200.QueryAllContractStateRequestAmino): _200.QueryAllContractStateRequest;
                toAmino(message: _200.QueryAllContractStateRequest): _200.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _200.QueryAllContractStateRequestAminoMsg): _200.QueryAllContractStateRequest;
                toAminoMsg(message: _200.QueryAllContractStateRequest): _200.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _200.QueryAllContractStateRequestProtoMsg): _200.QueryAllContractStateRequest;
                toProto(message: _200.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _200.QueryAllContractStateRequest): _200.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _200.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryAllContractStateResponse;
                fromPartial(object: Partial<_200.QueryAllContractStateResponse>): _200.QueryAllContractStateResponse;
                fromAmino(object: _200.QueryAllContractStateResponseAmino): _200.QueryAllContractStateResponse;
                toAmino(message: _200.QueryAllContractStateResponse): _200.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _200.QueryAllContractStateResponseAminoMsg): _200.QueryAllContractStateResponse;
                toAminoMsg(message: _200.QueryAllContractStateResponse): _200.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _200.QueryAllContractStateResponseProtoMsg): _200.QueryAllContractStateResponse;
                toProto(message: _200.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _200.QueryAllContractStateResponse): _200.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _200.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryRawContractStateRequest;
                fromPartial(object: Partial<_200.QueryRawContractStateRequest>): _200.QueryRawContractStateRequest;
                fromAmino(object: _200.QueryRawContractStateRequestAmino): _200.QueryRawContractStateRequest;
                toAmino(message: _200.QueryRawContractStateRequest): _200.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _200.QueryRawContractStateRequestAminoMsg): _200.QueryRawContractStateRequest;
                toAminoMsg(message: _200.QueryRawContractStateRequest): _200.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _200.QueryRawContractStateRequestProtoMsg): _200.QueryRawContractStateRequest;
                toProto(message: _200.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _200.QueryRawContractStateRequest): _200.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _200.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryRawContractStateResponse;
                fromPartial(object: Partial<_200.QueryRawContractStateResponse>): _200.QueryRawContractStateResponse;
                fromAmino(object: _200.QueryRawContractStateResponseAmino): _200.QueryRawContractStateResponse;
                toAmino(message: _200.QueryRawContractStateResponse): _200.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _200.QueryRawContractStateResponseAminoMsg): _200.QueryRawContractStateResponse;
                toAminoMsg(message: _200.QueryRawContractStateResponse): _200.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _200.QueryRawContractStateResponseProtoMsg): _200.QueryRawContractStateResponse;
                toProto(message: _200.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _200.QueryRawContractStateResponse): _200.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _200.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_200.QuerySmartContractStateRequest>): _200.QuerySmartContractStateRequest;
                fromAmino(object: _200.QuerySmartContractStateRequestAmino): _200.QuerySmartContractStateRequest;
                toAmino(message: _200.QuerySmartContractStateRequest): _200.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _200.QuerySmartContractStateRequestAminoMsg): _200.QuerySmartContractStateRequest;
                toAminoMsg(message: _200.QuerySmartContractStateRequest): _200.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _200.QuerySmartContractStateRequestProtoMsg): _200.QuerySmartContractStateRequest;
                toProto(message: _200.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _200.QuerySmartContractStateRequest): _200.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _200.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_200.QuerySmartContractStateResponse>): _200.QuerySmartContractStateResponse;
                fromAmino(object: _200.QuerySmartContractStateResponseAmino): _200.QuerySmartContractStateResponse;
                toAmino(message: _200.QuerySmartContractStateResponse): _200.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _200.QuerySmartContractStateResponseAminoMsg): _200.QuerySmartContractStateResponse;
                toAminoMsg(message: _200.QuerySmartContractStateResponse): _200.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _200.QuerySmartContractStateResponseProtoMsg): _200.QuerySmartContractStateResponse;
                toProto(message: _200.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _200.QuerySmartContractStateResponse): _200.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _200.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryCodeRequest;
                fromPartial(object: Partial<_200.QueryCodeRequest>): _200.QueryCodeRequest;
                fromAmino(object: _200.QueryCodeRequestAmino): _200.QueryCodeRequest;
                toAmino(message: _200.QueryCodeRequest): _200.QueryCodeRequestAmino;
                fromAminoMsg(object: _200.QueryCodeRequestAminoMsg): _200.QueryCodeRequest;
                toAminoMsg(message: _200.QueryCodeRequest): _200.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _200.QueryCodeRequestProtoMsg): _200.QueryCodeRequest;
                toProto(message: _200.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _200.QueryCodeRequest): _200.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _200.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.CodeInfoResponse;
                fromPartial(object: Partial<_200.CodeInfoResponse>): _200.CodeInfoResponse;
                fromAmino(object: _200.CodeInfoResponseAmino): _200.CodeInfoResponse;
                toAmino(message: _200.CodeInfoResponse): _200.CodeInfoResponseAmino;
                fromAminoMsg(object: _200.CodeInfoResponseAminoMsg): _200.CodeInfoResponse;
                toAminoMsg(message: _200.CodeInfoResponse): _200.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _200.CodeInfoResponseProtoMsg): _200.CodeInfoResponse;
                toProto(message: _200.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _200.CodeInfoResponse): _200.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _200.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryCodeResponse;
                fromPartial(object: Partial<_200.QueryCodeResponse>): _200.QueryCodeResponse;
                fromAmino(object: _200.QueryCodeResponseAmino): _200.QueryCodeResponse;
                toAmino(message: _200.QueryCodeResponse): _200.QueryCodeResponseAmino;
                fromAminoMsg(object: _200.QueryCodeResponseAminoMsg): _200.QueryCodeResponse;
                toAminoMsg(message: _200.QueryCodeResponse): _200.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _200.QueryCodeResponseProtoMsg): _200.QueryCodeResponse;
                toProto(message: _200.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _200.QueryCodeResponse): _200.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _200.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryCodesRequest;
                fromPartial(object: Partial<_200.QueryCodesRequest>): _200.QueryCodesRequest;
                fromAmino(object: _200.QueryCodesRequestAmino): _200.QueryCodesRequest;
                toAmino(message: _200.QueryCodesRequest): _200.QueryCodesRequestAmino;
                fromAminoMsg(object: _200.QueryCodesRequestAminoMsg): _200.QueryCodesRequest;
                toAminoMsg(message: _200.QueryCodesRequest): _200.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _200.QueryCodesRequestProtoMsg): _200.QueryCodesRequest;
                toProto(message: _200.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _200.QueryCodesRequest): _200.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _200.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryCodesResponse;
                fromPartial(object: Partial<_200.QueryCodesResponse>): _200.QueryCodesResponse;
                fromAmino(object: _200.QueryCodesResponseAmino): _200.QueryCodesResponse;
                toAmino(message: _200.QueryCodesResponse): _200.QueryCodesResponseAmino;
                fromAminoMsg(object: _200.QueryCodesResponseAminoMsg): _200.QueryCodesResponse;
                toAminoMsg(message: _200.QueryCodesResponse): _200.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _200.QueryCodesResponseProtoMsg): _200.QueryCodesResponse;
                toProto(message: _200.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _200.QueryCodesResponse): _200.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _200.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_200.QueryPinnedCodesRequest>): _200.QueryPinnedCodesRequest;
                fromAmino(object: _200.QueryPinnedCodesRequestAmino): _200.QueryPinnedCodesRequest;
                toAmino(message: _200.QueryPinnedCodesRequest): _200.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _200.QueryPinnedCodesRequestAminoMsg): _200.QueryPinnedCodesRequest;
                toAminoMsg(message: _200.QueryPinnedCodesRequest): _200.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _200.QueryPinnedCodesRequestProtoMsg): _200.QueryPinnedCodesRequest;
                toProto(message: _200.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _200.QueryPinnedCodesRequest): _200.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _200.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_200.QueryPinnedCodesResponse>): _200.QueryPinnedCodesResponse;
                fromAmino(object: _200.QueryPinnedCodesResponseAmino): _200.QueryPinnedCodesResponse;
                toAmino(message: _200.QueryPinnedCodesResponse): _200.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _200.QueryPinnedCodesResponseAminoMsg): _200.QueryPinnedCodesResponse;
                toAminoMsg(message: _200.QueryPinnedCodesResponse): _200.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _200.QueryPinnedCodesResponseProtoMsg): _200.QueryPinnedCodesResponse;
                toProto(message: _200.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _200.QueryPinnedCodesResponse): _200.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _200.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _200.QueryParamsRequest;
                fromPartial(_: Partial<_200.QueryParamsRequest>): _200.QueryParamsRequest;
                fromAmino(_: _200.QueryParamsRequestAmino): _200.QueryParamsRequest;
                toAmino(_: _200.QueryParamsRequest): _200.QueryParamsRequestAmino;
                fromAminoMsg(object: _200.QueryParamsRequestAminoMsg): _200.QueryParamsRequest;
                toAminoMsg(message: _200.QueryParamsRequest): _200.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _200.QueryParamsRequestProtoMsg): _200.QueryParamsRequest;
                toProto(message: _200.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _200.QueryParamsRequest): _200.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _200.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryParamsResponse;
                fromPartial(object: Partial<_200.QueryParamsResponse>): _200.QueryParamsResponse;
                fromAmino(object: _200.QueryParamsResponseAmino): _200.QueryParamsResponse;
                toAmino(message: _200.QueryParamsResponse): _200.QueryParamsResponseAmino;
                fromAminoMsg(object: _200.QueryParamsResponseAminoMsg): _200.QueryParamsResponse;
                toAminoMsg(message: _200.QueryParamsResponse): _200.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _200.QueryParamsResponseProtoMsg): _200.QueryParamsResponse;
                toProto(message: _200.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _200.QueryParamsResponse): _200.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _200.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_200.QueryContractsByCreatorRequest>): _200.QueryContractsByCreatorRequest;
                fromAmino(object: _200.QueryContractsByCreatorRequestAmino): _200.QueryContractsByCreatorRequest;
                toAmino(message: _200.QueryContractsByCreatorRequest): _200.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _200.QueryContractsByCreatorRequestAminoMsg): _200.QueryContractsByCreatorRequest;
                toAminoMsg(message: _200.QueryContractsByCreatorRequest): _200.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _200.QueryContractsByCreatorRequestProtoMsg): _200.QueryContractsByCreatorRequest;
                toProto(message: _200.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _200.QueryContractsByCreatorRequest): _200.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _200.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _200.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_200.QueryContractsByCreatorResponse>): _200.QueryContractsByCreatorResponse;
                fromAmino(object: _200.QueryContractsByCreatorResponseAmino): _200.QueryContractsByCreatorResponse;
                toAmino(message: _200.QueryContractsByCreatorResponse): _200.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _200.QueryContractsByCreatorResponseAminoMsg): _200.QueryContractsByCreatorResponse;
                toAminoMsg(message: _200.QueryContractsByCreatorResponse): _200.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _200.QueryContractsByCreatorResponseProtoMsg): _200.QueryContractsByCreatorResponse;
                toProto(message: _200.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _200.QueryContractsByCreatorResponse): _200.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _199.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.StoreCodeProposal;
                fromPartial(object: Partial<_199.StoreCodeProposal>): _199.StoreCodeProposal;
                fromAmino(object: _199.StoreCodeProposalAmino): _199.StoreCodeProposal;
                toAmino(message: _199.StoreCodeProposal): _199.StoreCodeProposalAmino;
                fromAminoMsg(object: _199.StoreCodeProposalAminoMsg): _199.StoreCodeProposal;
                toAminoMsg(message: _199.StoreCodeProposal): _199.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _199.StoreCodeProposalProtoMsg): _199.StoreCodeProposal;
                toProto(message: _199.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _199.StoreCodeProposal): _199.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _199.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.InstantiateContractProposal;
                fromPartial(object: Partial<_199.InstantiateContractProposal>): _199.InstantiateContractProposal;
                fromAmino(object: _199.InstantiateContractProposalAmino): _199.InstantiateContractProposal;
                toAmino(message: _199.InstantiateContractProposal): _199.InstantiateContractProposalAmino;
                fromAminoMsg(object: _199.InstantiateContractProposalAminoMsg): _199.InstantiateContractProposal;
                toAminoMsg(message: _199.InstantiateContractProposal): _199.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _199.InstantiateContractProposalProtoMsg): _199.InstantiateContractProposal;
                toProto(message: _199.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _199.InstantiateContractProposal): _199.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _199.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.InstantiateContract2Proposal;
                fromPartial(object: Partial<_199.InstantiateContract2Proposal>): _199.InstantiateContract2Proposal;
                fromAmino(object: _199.InstantiateContract2ProposalAmino): _199.InstantiateContract2Proposal;
                toAmino(message: _199.InstantiateContract2Proposal): _199.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _199.InstantiateContract2ProposalAminoMsg): _199.InstantiateContract2Proposal;
                toAminoMsg(message: _199.InstantiateContract2Proposal): _199.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _199.InstantiateContract2ProposalProtoMsg): _199.InstantiateContract2Proposal;
                toProto(message: _199.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _199.InstantiateContract2Proposal): _199.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _199.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.MigrateContractProposal;
                fromPartial(object: Partial<_199.MigrateContractProposal>): _199.MigrateContractProposal;
                fromAmino(object: _199.MigrateContractProposalAmino): _199.MigrateContractProposal;
                toAmino(message: _199.MigrateContractProposal): _199.MigrateContractProposalAmino;
                fromAminoMsg(object: _199.MigrateContractProposalAminoMsg): _199.MigrateContractProposal;
                toAminoMsg(message: _199.MigrateContractProposal): _199.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _199.MigrateContractProposalProtoMsg): _199.MigrateContractProposal;
                toProto(message: _199.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _199.MigrateContractProposal): _199.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _199.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.SudoContractProposal;
                fromPartial(object: Partial<_199.SudoContractProposal>): _199.SudoContractProposal;
                fromAmino(object: _199.SudoContractProposalAmino): _199.SudoContractProposal;
                toAmino(message: _199.SudoContractProposal): _199.SudoContractProposalAmino;
                fromAminoMsg(object: _199.SudoContractProposalAminoMsg): _199.SudoContractProposal;
                toAminoMsg(message: _199.SudoContractProposal): _199.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _199.SudoContractProposalProtoMsg): _199.SudoContractProposal;
                toProto(message: _199.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _199.SudoContractProposal): _199.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _199.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.ExecuteContractProposal;
                fromPartial(object: Partial<_199.ExecuteContractProposal>): _199.ExecuteContractProposal;
                fromAmino(object: _199.ExecuteContractProposalAmino): _199.ExecuteContractProposal;
                toAmino(message: _199.ExecuteContractProposal): _199.ExecuteContractProposalAmino;
                fromAminoMsg(object: _199.ExecuteContractProposalAminoMsg): _199.ExecuteContractProposal;
                toAminoMsg(message: _199.ExecuteContractProposal): _199.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _199.ExecuteContractProposalProtoMsg): _199.ExecuteContractProposal;
                toProto(message: _199.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _199.ExecuteContractProposal): _199.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _199.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.UpdateAdminProposal;
                fromPartial(object: Partial<_199.UpdateAdminProposal>): _199.UpdateAdminProposal;
                fromAmino(object: _199.UpdateAdminProposalAmino): _199.UpdateAdminProposal;
                toAmino(message: _199.UpdateAdminProposal): _199.UpdateAdminProposalAmino;
                fromAminoMsg(object: _199.UpdateAdminProposalAminoMsg): _199.UpdateAdminProposal;
                toAminoMsg(message: _199.UpdateAdminProposal): _199.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _199.UpdateAdminProposalProtoMsg): _199.UpdateAdminProposal;
                toProto(message: _199.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _199.UpdateAdminProposal): _199.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _199.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.ClearAdminProposal;
                fromPartial(object: Partial<_199.ClearAdminProposal>): _199.ClearAdminProposal;
                fromAmino(object: _199.ClearAdminProposalAmino): _199.ClearAdminProposal;
                toAmino(message: _199.ClearAdminProposal): _199.ClearAdminProposalAmino;
                fromAminoMsg(object: _199.ClearAdminProposalAminoMsg): _199.ClearAdminProposal;
                toAminoMsg(message: _199.ClearAdminProposal): _199.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _199.ClearAdminProposalProtoMsg): _199.ClearAdminProposal;
                toProto(message: _199.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _199.ClearAdminProposal): _199.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _199.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.PinCodesProposal;
                fromPartial(object: Partial<_199.PinCodesProposal>): _199.PinCodesProposal;
                fromAmino(object: _199.PinCodesProposalAmino): _199.PinCodesProposal;
                toAmino(message: _199.PinCodesProposal): _199.PinCodesProposalAmino;
                fromAminoMsg(object: _199.PinCodesProposalAminoMsg): _199.PinCodesProposal;
                toAminoMsg(message: _199.PinCodesProposal): _199.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _199.PinCodesProposalProtoMsg): _199.PinCodesProposal;
                toProto(message: _199.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _199.PinCodesProposal): _199.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _199.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.UnpinCodesProposal;
                fromPartial(object: Partial<_199.UnpinCodesProposal>): _199.UnpinCodesProposal;
                fromAmino(object: _199.UnpinCodesProposalAmino): _199.UnpinCodesProposal;
                toAmino(message: _199.UnpinCodesProposal): _199.UnpinCodesProposalAmino;
                fromAminoMsg(object: _199.UnpinCodesProposalAminoMsg): _199.UnpinCodesProposal;
                toAminoMsg(message: _199.UnpinCodesProposal): _199.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _199.UnpinCodesProposalProtoMsg): _199.UnpinCodesProposal;
                toProto(message: _199.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _199.UnpinCodesProposal): _199.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _199.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.AccessConfigUpdate;
                fromPartial(object: Partial<_199.AccessConfigUpdate>): _199.AccessConfigUpdate;
                fromAmino(object: _199.AccessConfigUpdateAmino): _199.AccessConfigUpdate;
                toAmino(message: _199.AccessConfigUpdate): _199.AccessConfigUpdateAmino;
                fromAminoMsg(object: _199.AccessConfigUpdateAminoMsg): _199.AccessConfigUpdate;
                toAminoMsg(message: _199.AccessConfigUpdate): _199.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _199.AccessConfigUpdateProtoMsg): _199.AccessConfigUpdate;
                toProto(message: _199.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _199.AccessConfigUpdate): _199.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _199.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_199.UpdateInstantiateConfigProposal>): _199.UpdateInstantiateConfigProposal;
                fromAmino(object: _199.UpdateInstantiateConfigProposalAmino): _199.UpdateInstantiateConfigProposal;
                toAmino(message: _199.UpdateInstantiateConfigProposal): _199.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _199.UpdateInstantiateConfigProposalAminoMsg): _199.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _199.UpdateInstantiateConfigProposal): _199.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _199.UpdateInstantiateConfigProposalProtoMsg): _199.UpdateInstantiateConfigProposal;
                toProto(message: _199.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _199.UpdateInstantiateConfigProposal): _199.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _199.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _199.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_199.StoreAndInstantiateContractProposal>): _199.StoreAndInstantiateContractProposal;
                fromAmino(object: _199.StoreAndInstantiateContractProposalAmino): _199.StoreAndInstantiateContractProposal;
                toAmino(message: _199.StoreAndInstantiateContractProposal): _199.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _199.StoreAndInstantiateContractProposalAminoMsg): _199.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _199.StoreAndInstantiateContractProposal): _199.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _199.StoreAndInstantiateContractProposalProtoMsg): _199.StoreAndInstantiateContractProposal;
                toProto(message: _199.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _199.StoreAndInstantiateContractProposal): _199.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _198.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _198.MsgIBCSend;
                fromPartial(object: Partial<_198.MsgIBCSend>): _198.MsgIBCSend;
                fromAmino(object: _198.MsgIBCSendAmino): _198.MsgIBCSend;
                toAmino(message: _198.MsgIBCSend): _198.MsgIBCSendAmino;
                fromAminoMsg(object: _198.MsgIBCSendAminoMsg): _198.MsgIBCSend;
                toAminoMsg(message: _198.MsgIBCSend): _198.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _198.MsgIBCSendProtoMsg): _198.MsgIBCSend;
                toProto(message: _198.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _198.MsgIBCSend): _198.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _198.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _198.MsgIBCSendResponse;
                fromPartial(object: Partial<_198.MsgIBCSendResponse>): _198.MsgIBCSendResponse;
                fromAmino(object: _198.MsgIBCSendResponseAmino): _198.MsgIBCSendResponse;
                toAmino(message: _198.MsgIBCSendResponse): _198.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _198.MsgIBCSendResponseAminoMsg): _198.MsgIBCSendResponse;
                toAminoMsg(message: _198.MsgIBCSendResponse): _198.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _198.MsgIBCSendResponseProtoMsg): _198.MsgIBCSendResponse;
                toProto(message: _198.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _198.MsgIBCSendResponse): _198.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _198.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _198.MsgIBCCloseChannel;
                fromPartial(object: Partial<_198.MsgIBCCloseChannel>): _198.MsgIBCCloseChannel;
                fromAmino(object: _198.MsgIBCCloseChannelAmino): _198.MsgIBCCloseChannel;
                toAmino(message: _198.MsgIBCCloseChannel): _198.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _198.MsgIBCCloseChannelAminoMsg): _198.MsgIBCCloseChannel;
                toAminoMsg(message: _198.MsgIBCCloseChannel): _198.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _198.MsgIBCCloseChannelProtoMsg): _198.MsgIBCCloseChannel;
                toProto(message: _198.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _198.MsgIBCCloseChannel): _198.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _197.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _197.GenesisState;
                fromPartial(object: Partial<_197.GenesisState>): _197.GenesisState;
                fromAmino(object: _197.GenesisStateAmino): _197.GenesisState;
                toAmino(message: _197.GenesisState): _197.GenesisStateAmino;
                fromAminoMsg(object: _197.GenesisStateAminoMsg): _197.GenesisState;
                toAminoMsg(message: _197.GenesisState): _197.GenesisStateAminoMsg;
                fromProtoMsg(message: _197.GenesisStateProtoMsg): _197.GenesisState;
                toProto(message: _197.GenesisState): Uint8Array;
                toProtoMsg(message: _197.GenesisState): _197.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _197.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _197.Code;
                fromPartial(object: Partial<_197.Code>): _197.Code;
                fromAmino(object: _197.CodeAmino): _197.Code;
                toAmino(message: _197.Code): _197.CodeAmino;
                fromAminoMsg(object: _197.CodeAminoMsg): _197.Code;
                toAminoMsg(message: _197.Code): _197.CodeAminoMsg;
                fromProtoMsg(message: _197.CodeProtoMsg): _197.Code;
                toProto(message: _197.Code): Uint8Array;
                toProtoMsg(message: _197.Code): _197.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _197.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _197.Contract;
                fromPartial(object: Partial<_197.Contract>): _197.Contract;
                fromAmino(object: _197.ContractAmino): _197.Contract;
                toAmino(message: _197.Contract): _197.ContractAmino;
                fromAminoMsg(object: _197.ContractAminoMsg): _197.Contract;
                toAminoMsg(message: _197.Contract): _197.ContractAminoMsg;
                fromProtoMsg(message: _197.ContractProtoMsg): _197.Contract;
                toProto(message: _197.Contract): Uint8Array;
                toProtoMsg(message: _197.Contract): _197.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _197.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _197.Sequence;
                fromPartial(object: Partial<_197.Sequence>): _197.Sequence;
                fromAmino(object: _197.SequenceAmino): _197.Sequence;
                toAmino(message: _197.Sequence): _197.SequenceAmino;
                fromAminoMsg(object: _197.SequenceAminoMsg): _197.Sequence;
                toAminoMsg(message: _197.Sequence): _197.SequenceAminoMsg;
                fromProtoMsg(message: _197.SequenceProtoMsg): _197.Sequence;
                toProto(message: _197.Sequence): Uint8Array;
                toProtoMsg(message: _197.Sequence): _197.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _196.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.StoreCodeAuthorization;
                fromPartial(object: Partial<_196.StoreCodeAuthorization>): _196.StoreCodeAuthorization;
                fromAmino(object: _196.StoreCodeAuthorizationAmino): _196.StoreCodeAuthorization;
                toAmino(message: _196.StoreCodeAuthorization): _196.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _196.StoreCodeAuthorizationAminoMsg): _196.StoreCodeAuthorization;
                toAminoMsg(message: _196.StoreCodeAuthorization): _196.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _196.StoreCodeAuthorizationProtoMsg): _196.StoreCodeAuthorization;
                toProto(message: _196.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _196.StoreCodeAuthorization): _196.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _196.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.ContractExecutionAuthorization;
                fromPartial(object: Partial<_196.ContractExecutionAuthorization>): _196.ContractExecutionAuthorization;
                fromAmino(object: _196.ContractExecutionAuthorizationAmino): _196.ContractExecutionAuthorization;
                toAmino(message: _196.ContractExecutionAuthorization): _196.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _196.ContractExecutionAuthorizationAminoMsg): _196.ContractExecutionAuthorization;
                toAminoMsg(message: _196.ContractExecutionAuthorization): _196.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _196.ContractExecutionAuthorizationProtoMsg): _196.ContractExecutionAuthorization;
                toProto(message: _196.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _196.ContractExecutionAuthorization): _196.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _196.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.ContractMigrationAuthorization;
                fromPartial(object: Partial<_196.ContractMigrationAuthorization>): _196.ContractMigrationAuthorization;
                fromAmino(object: _196.ContractMigrationAuthorizationAmino): _196.ContractMigrationAuthorization;
                toAmino(message: _196.ContractMigrationAuthorization): _196.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _196.ContractMigrationAuthorizationAminoMsg): _196.ContractMigrationAuthorization;
                toAminoMsg(message: _196.ContractMigrationAuthorization): _196.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _196.ContractMigrationAuthorizationProtoMsg): _196.ContractMigrationAuthorization;
                toProto(message: _196.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _196.ContractMigrationAuthorization): _196.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _196.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.CodeGrant;
                fromPartial(object: Partial<_196.CodeGrant>): _196.CodeGrant;
                fromAmino(object: _196.CodeGrantAmino): _196.CodeGrant;
                toAmino(message: _196.CodeGrant): _196.CodeGrantAmino;
                fromAminoMsg(object: _196.CodeGrantAminoMsg): _196.CodeGrant;
                toAminoMsg(message: _196.CodeGrant): _196.CodeGrantAminoMsg;
                fromProtoMsg(message: _196.CodeGrantProtoMsg): _196.CodeGrant;
                toProto(message: _196.CodeGrant): Uint8Array;
                toProtoMsg(message: _196.CodeGrant): _196.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _196.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.ContractGrant;
                fromPartial(object: Partial<_196.ContractGrant>): _196.ContractGrant;
                fromAmino(object: _196.ContractGrantAmino): _196.ContractGrant;
                toAmino(message: _196.ContractGrant): _196.ContractGrantAmino;
                fromAminoMsg(object: _196.ContractGrantAminoMsg): _196.ContractGrant;
                toAminoMsg(message: _196.ContractGrant): _196.ContractGrantAminoMsg;
                fromProtoMsg(message: _196.ContractGrantProtoMsg): _196.ContractGrant;
                toProto(message: _196.ContractGrant): Uint8Array;
                toProtoMsg(message: _196.ContractGrant): _196.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _196.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.MaxCallsLimit;
                fromPartial(object: Partial<_196.MaxCallsLimit>): _196.MaxCallsLimit;
                fromAmino(object: _196.MaxCallsLimitAmino): _196.MaxCallsLimit;
                toAmino(message: _196.MaxCallsLimit): _196.MaxCallsLimitAmino;
                fromAminoMsg(object: _196.MaxCallsLimitAminoMsg): _196.MaxCallsLimit;
                toAminoMsg(message: _196.MaxCallsLimit): _196.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _196.MaxCallsLimitProtoMsg): _196.MaxCallsLimit;
                toProto(message: _196.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _196.MaxCallsLimit): _196.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _196.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.MaxFundsLimit;
                fromPartial(object: Partial<_196.MaxFundsLimit>): _196.MaxFundsLimit;
                fromAmino(object: _196.MaxFundsLimitAmino): _196.MaxFundsLimit;
                toAmino(message: _196.MaxFundsLimit): _196.MaxFundsLimitAmino;
                fromAminoMsg(object: _196.MaxFundsLimitAminoMsg): _196.MaxFundsLimit;
                toAminoMsg(message: _196.MaxFundsLimit): _196.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _196.MaxFundsLimitProtoMsg): _196.MaxFundsLimit;
                toProto(message: _196.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _196.MaxFundsLimit): _196.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _196.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.CombinedLimit;
                fromPartial(object: Partial<_196.CombinedLimit>): _196.CombinedLimit;
                fromAmino(object: _196.CombinedLimitAmino): _196.CombinedLimit;
                toAmino(message: _196.CombinedLimit): _196.CombinedLimitAmino;
                fromAminoMsg(object: _196.CombinedLimitAminoMsg): _196.CombinedLimit;
                toAminoMsg(message: _196.CombinedLimit): _196.CombinedLimitAminoMsg;
                fromProtoMsg(message: _196.CombinedLimitProtoMsg): _196.CombinedLimit;
                toProto(message: _196.CombinedLimit): Uint8Array;
                toProtoMsg(message: _196.CombinedLimit): _196.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _196.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _196.AllowAllMessagesFilter;
                fromPartial(_: Partial<_196.AllowAllMessagesFilter>): _196.AllowAllMessagesFilter;
                fromAmino(_: _196.AllowAllMessagesFilterAmino): _196.AllowAllMessagesFilter;
                toAmino(_: _196.AllowAllMessagesFilter): _196.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _196.AllowAllMessagesFilterAminoMsg): _196.AllowAllMessagesFilter;
                toAminoMsg(message: _196.AllowAllMessagesFilter): _196.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _196.AllowAllMessagesFilterProtoMsg): _196.AllowAllMessagesFilter;
                toProto(message: _196.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _196.AllowAllMessagesFilter): _196.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _196.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_196.AcceptedMessageKeysFilter>): _196.AcceptedMessageKeysFilter;
                fromAmino(object: _196.AcceptedMessageKeysFilterAmino): _196.AcceptedMessageKeysFilter;
                toAmino(message: _196.AcceptedMessageKeysFilter): _196.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _196.AcceptedMessageKeysFilterAminoMsg): _196.AcceptedMessageKeysFilter;
                toAminoMsg(message: _196.AcceptedMessageKeysFilter): _196.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _196.AcceptedMessageKeysFilterProtoMsg): _196.AcceptedMessageKeysFilter;
                toProto(message: _196.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _196.AcceptedMessageKeysFilter): _196.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _196.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.AcceptedMessagesFilter;
                fromPartial(object: Partial<_196.AcceptedMessagesFilter>): _196.AcceptedMessagesFilter;
                fromAmino(object: _196.AcceptedMessagesFilterAmino): _196.AcceptedMessagesFilter;
                toAmino(message: _196.AcceptedMessagesFilter): _196.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _196.AcceptedMessagesFilterAminoMsg): _196.AcceptedMessagesFilter;
                toAminoMsg(message: _196.AcceptedMessagesFilter): _196.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _196.AcceptedMessagesFilterProtoMsg): _196.AcceptedMessagesFilter;
                toProto(message: _196.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _196.AcceptedMessagesFilter): _196.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _196.MaxCallsLimit | _196.MaxFundsLimit | _196.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _196.AllowAllMessagesFilter | _196.AcceptedMessageKeysFilter | _196.AcceptedMessagesFilter;
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
                    v1: _344.MsgClientImpl;
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
                        contractInfo(request: _200.QueryContractInfoRequest): Promise<_200.QueryContractInfoResponse>;
                        contractHistory(request: _200.QueryContractHistoryRequest): Promise<_200.QueryContractHistoryResponse>;
                        contractsByCode(request: _200.QueryContractsByCodeRequest): Promise<_200.QueryContractsByCodeResponse>;
                        allContractState(request: _200.QueryAllContractStateRequest): Promise<_200.QueryAllContractStateResponse>;
                        rawContractState(request: _200.QueryRawContractStateRequest): Promise<_200.QueryRawContractStateResponse>;
                        smartContractState(request: _200.QuerySmartContractStateRequest): Promise<_200.QuerySmartContractStateResponse>;
                        code(request: _200.QueryCodeRequest): Promise<_200.QueryCodeResponse>;
                        codes(request?: _200.QueryCodesRequest): Promise<_200.QueryCodesResponse>;
                        pinnedCodes(request?: _200.QueryPinnedCodesRequest): Promise<_200.QueryPinnedCodesResponse>;
                        params(request?: _200.QueryParamsRequest): Promise<_200.QueryParamsResponse>;
                        contractsByCreator(request: _200.QueryContractsByCreatorRequest): Promise<_200.QueryContractsByCreatorResponse>;
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
                    v1: _342.LCDQueryClient;
                };
            };
        }>;
    };
}
