import * as _150 from "./wasm/v1/authz";
import * as _151 from "./wasm/v1/genesis";
import * as _152 from "./wasm/v1/ibc";
import * as _153 from "./wasm/v1/proposal_legacy";
import * as _154 from "./wasm/v1/query";
import * as _155 from "./wasm/v1/tx";
import * as _156 from "./wasm/v1/types";
import * as _304 from "./wasm/v1/query.lcd";
import * as _305 from "./wasm/v1/query.rpc.Query";
import * as _306 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _306.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _154.QueryContractInfoRequest): Promise<_154.QueryContractInfoResponse>;
                contractHistory(request: _154.QueryContractHistoryRequest): Promise<_154.QueryContractHistoryResponse>;
                contractsByCode(request: _154.QueryContractsByCodeRequest): Promise<_154.QueryContractsByCodeResponse>;
                allContractState(request: _154.QueryAllContractStateRequest): Promise<_154.QueryAllContractStateResponse>;
                rawContractState(request: _154.QueryRawContractStateRequest): Promise<_154.QueryRawContractStateResponse>;
                smartContractState(request: _154.QuerySmartContractStateRequest): Promise<_154.QuerySmartContractStateResponse>;
                code(request: _154.QueryCodeRequest): Promise<_154.QueryCodeResponse>;
                codes(request?: _154.QueryCodesRequest): Promise<_154.QueryCodesResponse>;
                pinnedCodes(request?: _154.QueryPinnedCodesRequest): Promise<_154.QueryPinnedCodesResponse>;
                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                contractsByCreator(request: _154.QueryContractsByCreatorRequest): Promise<_154.QueryContractsByCreatorResponse>;
                buildAddress(request: _154.QueryBuildAddressRequest): Promise<_154.QueryBuildAddressResponse>;
            };
            LCDQueryClient: typeof _304.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _155.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _155.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _155.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _155.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _155.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _155.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _155.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _155.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _155.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _155.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _155.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _155.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _155.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _155.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _155.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _155.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _155.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _155.MsgStoreCode): {
                        typeUrl: string;
                        value: _155.MsgStoreCode;
                    };
                    instantiateContract(value: _155.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _155.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _155.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _155.MsgInstantiateContract2;
                    };
                    executeContract(value: _155.MsgExecuteContract): {
                        typeUrl: string;
                        value: _155.MsgExecuteContract;
                    };
                    migrateContract(value: _155.MsgMigrateContract): {
                        typeUrl: string;
                        value: _155.MsgMigrateContract;
                    };
                    updateAdmin(value: _155.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _155.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _155.MsgClearAdmin): {
                        typeUrl: string;
                        value: _155.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _155.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _155.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _155.MsgUpdateParams): {
                        typeUrl: string;
                        value: _155.MsgUpdateParams;
                    };
                    sudoContract(value: _155.MsgSudoContract): {
                        typeUrl: string;
                        value: _155.MsgSudoContract;
                    };
                    pinCodes(value: _155.MsgPinCodes): {
                        typeUrl: string;
                        value: _155.MsgPinCodes;
                    };
                    unpinCodes(value: _155.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _155.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _155.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _155.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _155.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _155.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _155.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _155.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _155.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _155.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _155.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _155.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _155.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _155.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _155.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _155.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _155.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _155.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _155.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _155.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _155.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _155.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _155.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _155.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _155.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _155.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _155.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _155.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _155.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _155.MsgStoreCode): {
                        typeUrl: string;
                        value: _155.MsgStoreCode;
                    };
                    instantiateContract(value: _155.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _155.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _155.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _155.MsgInstantiateContract2;
                    };
                    executeContract(value: _155.MsgExecuteContract): {
                        typeUrl: string;
                        value: _155.MsgExecuteContract;
                    };
                    migrateContract(value: _155.MsgMigrateContract): {
                        typeUrl: string;
                        value: _155.MsgMigrateContract;
                    };
                    updateAdmin(value: _155.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _155.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _155.MsgClearAdmin): {
                        typeUrl: string;
                        value: _155.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _155.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _155.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _155.MsgUpdateParams): {
                        typeUrl: string;
                        value: _155.MsgUpdateParams;
                    };
                    sudoContract(value: _155.MsgSudoContract): {
                        typeUrl: string;
                        value: _155.MsgSudoContract;
                    };
                    pinCodes(value: _155.MsgPinCodes): {
                        typeUrl: string;
                        value: _155.MsgPinCodes;
                    };
                    unpinCodes(value: _155.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _155.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _155.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _155.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _155.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _155.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _155.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _155.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _155.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _155.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _155.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _155.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _155.MsgStoreCode) => _155.MsgStoreCodeAmino;
                    fromAmino: (object: _155.MsgStoreCodeAmino) => _155.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _155.MsgInstantiateContract) => _155.MsgInstantiateContractAmino;
                    fromAmino: (object: _155.MsgInstantiateContractAmino) => _155.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _155.MsgInstantiateContract2) => _155.MsgInstantiateContract2Amino;
                    fromAmino: (object: _155.MsgInstantiateContract2Amino) => _155.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _155.MsgExecuteContract) => _155.MsgExecuteContractAmino;
                    fromAmino: (object: _155.MsgExecuteContractAmino) => _155.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _155.MsgMigrateContract) => _155.MsgMigrateContractAmino;
                    fromAmino: (object: _155.MsgMigrateContractAmino) => _155.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _155.MsgUpdateAdmin) => _155.MsgUpdateAdminAmino;
                    fromAmino: (object: _155.MsgUpdateAdminAmino) => _155.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _155.MsgClearAdmin) => _155.MsgClearAdminAmino;
                    fromAmino: (object: _155.MsgClearAdminAmino) => _155.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _155.MsgUpdateInstantiateConfig) => _155.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _155.MsgUpdateInstantiateConfigAmino) => _155.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _155.MsgUpdateParams) => _155.MsgUpdateParamsAmino;
                    fromAmino: (object: _155.MsgUpdateParamsAmino) => _155.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _155.MsgSudoContract) => _155.MsgSudoContractAmino;
                    fromAmino: (object: _155.MsgSudoContractAmino) => _155.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _155.MsgPinCodes) => _155.MsgPinCodesAmino;
                    fromAmino: (object: _155.MsgPinCodesAmino) => _155.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _155.MsgUnpinCodes) => _155.MsgUnpinCodesAmino;
                    fromAmino: (object: _155.MsgUnpinCodesAmino) => _155.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _155.MsgStoreAndInstantiateContract) => _155.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _155.MsgStoreAndInstantiateContractAmino) => _155.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _155.MsgRemoveCodeUploadParamsAddresses) => _155.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _155.MsgRemoveCodeUploadParamsAddressesAmino) => _155.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _155.MsgAddCodeUploadParamsAddresses) => _155.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _155.MsgAddCodeUploadParamsAddressesAmino) => _155.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _155.MsgStoreAndMigrateContract) => _155.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _155.MsgStoreAndMigrateContractAmino) => _155.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _155.MsgUpdateContractLabel) => _155.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _155.MsgUpdateContractLabelAmino) => _155.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _156.AccessType;
            accessTypeToJSON(object: _156.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _156.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _156.ContractCodeHistoryOperationType): string;
            AccessType: typeof _156.AccessType;
            AccessTypeSDKType: typeof _156.AccessType;
            AccessTypeAmino: typeof _156.AccessType;
            ContractCodeHistoryOperationType: typeof _156.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _156.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _156.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _156.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.AccessTypeParam;
                fromPartial(object: Partial<_156.AccessTypeParam>): _156.AccessTypeParam;
                fromAmino(object: _156.AccessTypeParamAmino): _156.AccessTypeParam;
                toAmino(message: _156.AccessTypeParam): _156.AccessTypeParamAmino;
                fromAminoMsg(object: _156.AccessTypeParamAminoMsg): _156.AccessTypeParam;
                toAminoMsg(message: _156.AccessTypeParam): _156.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _156.AccessTypeParamProtoMsg): _156.AccessTypeParam;
                toProto(message: _156.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _156.AccessTypeParam): _156.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _156.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.AccessConfig;
                fromPartial(object: Partial<_156.AccessConfig>): _156.AccessConfig;
                fromAmino(object: _156.AccessConfigAmino): _156.AccessConfig;
                toAmino(message: _156.AccessConfig): _156.AccessConfigAmino;
                fromAminoMsg(object: _156.AccessConfigAminoMsg): _156.AccessConfig;
                toAminoMsg(message: _156.AccessConfig): _156.AccessConfigAminoMsg;
                fromProtoMsg(message: _156.AccessConfigProtoMsg): _156.AccessConfig;
                toProto(message: _156.AccessConfig): Uint8Array;
                toProtoMsg(message: _156.AccessConfig): _156.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _156.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.Params;
                fromPartial(object: Partial<_156.Params>): _156.Params;
                fromAmino(object: _156.ParamsAmino): _156.Params;
                toAmino(message: _156.Params): _156.ParamsAmino;
                fromAminoMsg(object: _156.ParamsAminoMsg): _156.Params;
                toAminoMsg(message: _156.Params): _156.ParamsAminoMsg;
                fromProtoMsg(message: _156.ParamsProtoMsg): _156.Params;
                toProto(message: _156.Params): Uint8Array;
                toProtoMsg(message: _156.Params): _156.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _156.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.CodeInfo;
                fromPartial(object: Partial<_156.CodeInfo>): _156.CodeInfo;
                fromAmino(object: _156.CodeInfoAmino): _156.CodeInfo;
                toAmino(message: _156.CodeInfo): _156.CodeInfoAmino;
                fromAminoMsg(object: _156.CodeInfoAminoMsg): _156.CodeInfo;
                toAminoMsg(message: _156.CodeInfo): _156.CodeInfoAminoMsg;
                fromProtoMsg(message: _156.CodeInfoProtoMsg): _156.CodeInfo;
                toProto(message: _156.CodeInfo): Uint8Array;
                toProtoMsg(message: _156.CodeInfo): _156.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _156.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.ContractInfo;
                fromPartial(object: Partial<_156.ContractInfo>): _156.ContractInfo;
                fromAmino(object: _156.ContractInfoAmino): _156.ContractInfo;
                toAmino(message: _156.ContractInfo): _156.ContractInfoAmino;
                fromAminoMsg(object: _156.ContractInfoAminoMsg): _156.ContractInfo;
                toAminoMsg(message: _156.ContractInfo): _156.ContractInfoAminoMsg;
                fromProtoMsg(message: _156.ContractInfoProtoMsg): _156.ContractInfo;
                toProto(message: _156.ContractInfo): Uint8Array;
                toProtoMsg(message: _156.ContractInfo): _156.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _156.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_156.ContractCodeHistoryEntry>): _156.ContractCodeHistoryEntry;
                fromAmino(object: _156.ContractCodeHistoryEntryAmino): _156.ContractCodeHistoryEntry;
                toAmino(message: _156.ContractCodeHistoryEntry): _156.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _156.ContractCodeHistoryEntryAminoMsg): _156.ContractCodeHistoryEntry;
                toAminoMsg(message: _156.ContractCodeHistoryEntry): _156.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _156.ContractCodeHistoryEntryProtoMsg): _156.ContractCodeHistoryEntry;
                toProto(message: _156.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _156.ContractCodeHistoryEntry): _156.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _156.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.AbsoluteTxPosition;
                fromPartial(object: Partial<_156.AbsoluteTxPosition>): _156.AbsoluteTxPosition;
                fromAmino(object: _156.AbsoluteTxPositionAmino): _156.AbsoluteTxPosition;
                toAmino(message: _156.AbsoluteTxPosition): _156.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _156.AbsoluteTxPositionAminoMsg): _156.AbsoluteTxPosition;
                toAminoMsg(message: _156.AbsoluteTxPosition): _156.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _156.AbsoluteTxPositionProtoMsg): _156.AbsoluteTxPosition;
                toProto(message: _156.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _156.AbsoluteTxPosition): _156.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _156.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _156.Model;
                fromPartial(object: Partial<_156.Model>): _156.Model;
                fromAmino(object: _156.ModelAmino): _156.Model;
                toAmino(message: _156.Model): _156.ModelAmino;
                fromAminoMsg(object: _156.ModelAminoMsg): _156.Model;
                toAminoMsg(message: _156.Model): _156.ModelAminoMsg;
                fromProtoMsg(message: _156.ModelProtoMsg): _156.Model;
                toProto(message: _156.Model): Uint8Array;
                toProtoMsg(message: _156.Model): _156.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _155.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgStoreCode;
                fromPartial(object: Partial<_155.MsgStoreCode>): _155.MsgStoreCode;
                fromAmino(object: _155.MsgStoreCodeAmino): _155.MsgStoreCode;
                toAmino(message: _155.MsgStoreCode): _155.MsgStoreCodeAmino;
                fromAminoMsg(object: _155.MsgStoreCodeAminoMsg): _155.MsgStoreCode;
                toAminoMsg(message: _155.MsgStoreCode): _155.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _155.MsgStoreCodeProtoMsg): _155.MsgStoreCode;
                toProto(message: _155.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _155.MsgStoreCode): _155.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _155.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgStoreCodeResponse;
                fromPartial(object: Partial<_155.MsgStoreCodeResponse>): _155.MsgStoreCodeResponse;
                fromAmino(object: _155.MsgStoreCodeResponseAmino): _155.MsgStoreCodeResponse;
                toAmino(message: _155.MsgStoreCodeResponse): _155.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _155.MsgStoreCodeResponseAminoMsg): _155.MsgStoreCodeResponse;
                toAminoMsg(message: _155.MsgStoreCodeResponse): _155.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _155.MsgStoreCodeResponseProtoMsg): _155.MsgStoreCodeResponse;
                toProto(message: _155.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _155.MsgStoreCodeResponse): _155.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _155.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgInstantiateContract;
                fromPartial(object: Partial<_155.MsgInstantiateContract>): _155.MsgInstantiateContract;
                fromAmino(object: _155.MsgInstantiateContractAmino): _155.MsgInstantiateContract;
                toAmino(message: _155.MsgInstantiateContract): _155.MsgInstantiateContractAmino;
                fromAminoMsg(object: _155.MsgInstantiateContractAminoMsg): _155.MsgInstantiateContract;
                toAminoMsg(message: _155.MsgInstantiateContract): _155.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _155.MsgInstantiateContractProtoMsg): _155.MsgInstantiateContract;
                toProto(message: _155.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _155.MsgInstantiateContract): _155.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _155.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_155.MsgInstantiateContractResponse>): _155.MsgInstantiateContractResponse;
                fromAmino(object: _155.MsgInstantiateContractResponseAmino): _155.MsgInstantiateContractResponse;
                toAmino(message: _155.MsgInstantiateContractResponse): _155.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _155.MsgInstantiateContractResponseAminoMsg): _155.MsgInstantiateContractResponse;
                toAminoMsg(message: _155.MsgInstantiateContractResponse): _155.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _155.MsgInstantiateContractResponseProtoMsg): _155.MsgInstantiateContractResponse;
                toProto(message: _155.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _155.MsgInstantiateContractResponse): _155.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _155.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgInstantiateContract2;
                fromPartial(object: Partial<_155.MsgInstantiateContract2>): _155.MsgInstantiateContract2;
                fromAmino(object: _155.MsgInstantiateContract2Amino): _155.MsgInstantiateContract2;
                toAmino(message: _155.MsgInstantiateContract2): _155.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _155.MsgInstantiateContract2AminoMsg): _155.MsgInstantiateContract2;
                toAminoMsg(message: _155.MsgInstantiateContract2): _155.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _155.MsgInstantiateContract2ProtoMsg): _155.MsgInstantiateContract2;
                toProto(message: _155.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _155.MsgInstantiateContract2): _155.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _155.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_155.MsgInstantiateContract2Response>): _155.MsgInstantiateContract2Response;
                fromAmino(object: _155.MsgInstantiateContract2ResponseAmino): _155.MsgInstantiateContract2Response;
                toAmino(message: _155.MsgInstantiateContract2Response): _155.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _155.MsgInstantiateContract2ResponseAminoMsg): _155.MsgInstantiateContract2Response;
                toAminoMsg(message: _155.MsgInstantiateContract2Response): _155.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _155.MsgInstantiateContract2ResponseProtoMsg): _155.MsgInstantiateContract2Response;
                toProto(message: _155.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _155.MsgInstantiateContract2Response): _155.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _155.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgExecuteContract;
                fromPartial(object: Partial<_155.MsgExecuteContract>): _155.MsgExecuteContract;
                fromAmino(object: _155.MsgExecuteContractAmino): _155.MsgExecuteContract;
                toAmino(message: _155.MsgExecuteContract): _155.MsgExecuteContractAmino;
                fromAminoMsg(object: _155.MsgExecuteContractAminoMsg): _155.MsgExecuteContract;
                toAminoMsg(message: _155.MsgExecuteContract): _155.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _155.MsgExecuteContractProtoMsg): _155.MsgExecuteContract;
                toProto(message: _155.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _155.MsgExecuteContract): _155.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _155.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgExecuteContractResponse;
                fromPartial(object: Partial<_155.MsgExecuteContractResponse>): _155.MsgExecuteContractResponse;
                fromAmino(object: _155.MsgExecuteContractResponseAmino): _155.MsgExecuteContractResponse;
                toAmino(message: _155.MsgExecuteContractResponse): _155.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _155.MsgExecuteContractResponseAminoMsg): _155.MsgExecuteContractResponse;
                toAminoMsg(message: _155.MsgExecuteContractResponse): _155.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _155.MsgExecuteContractResponseProtoMsg): _155.MsgExecuteContractResponse;
                toProto(message: _155.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _155.MsgExecuteContractResponse): _155.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _155.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgMigrateContract;
                fromPartial(object: Partial<_155.MsgMigrateContract>): _155.MsgMigrateContract;
                fromAmino(object: _155.MsgMigrateContractAmino): _155.MsgMigrateContract;
                toAmino(message: _155.MsgMigrateContract): _155.MsgMigrateContractAmino;
                fromAminoMsg(object: _155.MsgMigrateContractAminoMsg): _155.MsgMigrateContract;
                toAminoMsg(message: _155.MsgMigrateContract): _155.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _155.MsgMigrateContractProtoMsg): _155.MsgMigrateContract;
                toProto(message: _155.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _155.MsgMigrateContract): _155.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _155.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgMigrateContractResponse;
                fromPartial(object: Partial<_155.MsgMigrateContractResponse>): _155.MsgMigrateContractResponse;
                fromAmino(object: _155.MsgMigrateContractResponseAmino): _155.MsgMigrateContractResponse;
                toAmino(message: _155.MsgMigrateContractResponse): _155.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _155.MsgMigrateContractResponseAminoMsg): _155.MsgMigrateContractResponse;
                toAminoMsg(message: _155.MsgMigrateContractResponse): _155.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _155.MsgMigrateContractResponseProtoMsg): _155.MsgMigrateContractResponse;
                toProto(message: _155.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _155.MsgMigrateContractResponse): _155.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _155.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgUpdateAdmin;
                fromPartial(object: Partial<_155.MsgUpdateAdmin>): _155.MsgUpdateAdmin;
                fromAmino(object: _155.MsgUpdateAdminAmino): _155.MsgUpdateAdmin;
                toAmino(message: _155.MsgUpdateAdmin): _155.MsgUpdateAdminAmino;
                fromAminoMsg(object: _155.MsgUpdateAdminAminoMsg): _155.MsgUpdateAdmin;
                toAminoMsg(message: _155.MsgUpdateAdmin): _155.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateAdminProtoMsg): _155.MsgUpdateAdmin;
                toProto(message: _155.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateAdmin): _155.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _155.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_155.MsgUpdateAdminResponse>): _155.MsgUpdateAdminResponse;
                fromAmino(_: _155.MsgUpdateAdminResponseAmino): _155.MsgUpdateAdminResponse;
                toAmino(_: _155.MsgUpdateAdminResponse): _155.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _155.MsgUpdateAdminResponseAminoMsg): _155.MsgUpdateAdminResponse;
                toAminoMsg(message: _155.MsgUpdateAdminResponse): _155.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateAdminResponseProtoMsg): _155.MsgUpdateAdminResponse;
                toProto(message: _155.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateAdminResponse): _155.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _155.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgClearAdmin;
                fromPartial(object: Partial<_155.MsgClearAdmin>): _155.MsgClearAdmin;
                fromAmino(object: _155.MsgClearAdminAmino): _155.MsgClearAdmin;
                toAmino(message: _155.MsgClearAdmin): _155.MsgClearAdminAmino;
                fromAminoMsg(object: _155.MsgClearAdminAminoMsg): _155.MsgClearAdmin;
                toAminoMsg(message: _155.MsgClearAdmin): _155.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _155.MsgClearAdminProtoMsg): _155.MsgClearAdmin;
                toProto(message: _155.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _155.MsgClearAdmin): _155.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _155.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgClearAdminResponse;
                fromPartial(_: Partial<_155.MsgClearAdminResponse>): _155.MsgClearAdminResponse;
                fromAmino(_: _155.MsgClearAdminResponseAmino): _155.MsgClearAdminResponse;
                toAmino(_: _155.MsgClearAdminResponse): _155.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _155.MsgClearAdminResponseAminoMsg): _155.MsgClearAdminResponse;
                toAminoMsg(message: _155.MsgClearAdminResponse): _155.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _155.MsgClearAdminResponseProtoMsg): _155.MsgClearAdminResponse;
                toProto(message: _155.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _155.MsgClearAdminResponse): _155.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _155.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_155.MsgUpdateInstantiateConfig>): _155.MsgUpdateInstantiateConfig;
                fromAmino(object: _155.MsgUpdateInstantiateConfigAmino): _155.MsgUpdateInstantiateConfig;
                toAmino(message: _155.MsgUpdateInstantiateConfig): _155.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _155.MsgUpdateInstantiateConfigAminoMsg): _155.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _155.MsgUpdateInstantiateConfig): _155.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateInstantiateConfigProtoMsg): _155.MsgUpdateInstantiateConfig;
                toProto(message: _155.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateInstantiateConfig): _155.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _155.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_155.MsgUpdateInstantiateConfigResponse>): _155.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _155.MsgUpdateInstantiateConfigResponseAmino): _155.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _155.MsgUpdateInstantiateConfigResponse): _155.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _155.MsgUpdateInstantiateConfigResponseAminoMsg): _155.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _155.MsgUpdateInstantiateConfigResponse): _155.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateInstantiateConfigResponseProtoMsg): _155.MsgUpdateInstantiateConfigResponse;
                toProto(message: _155.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateInstantiateConfigResponse): _155.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _155.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgUpdateParams;
                fromPartial(object: Partial<_155.MsgUpdateParams>): _155.MsgUpdateParams;
                fromAmino(object: _155.MsgUpdateParamsAmino): _155.MsgUpdateParams;
                toAmino(message: _155.MsgUpdateParams): _155.MsgUpdateParamsAmino;
                fromAminoMsg(object: _155.MsgUpdateParamsAminoMsg): _155.MsgUpdateParams;
                toAminoMsg(message: _155.MsgUpdateParams): _155.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateParamsProtoMsg): _155.MsgUpdateParams;
                toProto(message: _155.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateParams): _155.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _155.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_155.MsgUpdateParamsResponse>): _155.MsgUpdateParamsResponse;
                fromAmino(_: _155.MsgUpdateParamsResponseAmino): _155.MsgUpdateParamsResponse;
                toAmino(_: _155.MsgUpdateParamsResponse): _155.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _155.MsgUpdateParamsResponseAminoMsg): _155.MsgUpdateParamsResponse;
                toAminoMsg(message: _155.MsgUpdateParamsResponse): _155.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateParamsResponseProtoMsg): _155.MsgUpdateParamsResponse;
                toProto(message: _155.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateParamsResponse): _155.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _155.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgSudoContract;
                fromPartial(object: Partial<_155.MsgSudoContract>): _155.MsgSudoContract;
                fromAmino(object: _155.MsgSudoContractAmino): _155.MsgSudoContract;
                toAmino(message: _155.MsgSudoContract): _155.MsgSudoContractAmino;
                fromAminoMsg(object: _155.MsgSudoContractAminoMsg): _155.MsgSudoContract;
                toAminoMsg(message: _155.MsgSudoContract): _155.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _155.MsgSudoContractProtoMsg): _155.MsgSudoContract;
                toProto(message: _155.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _155.MsgSudoContract): _155.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _155.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgSudoContractResponse;
                fromPartial(object: Partial<_155.MsgSudoContractResponse>): _155.MsgSudoContractResponse;
                fromAmino(object: _155.MsgSudoContractResponseAmino): _155.MsgSudoContractResponse;
                toAmino(message: _155.MsgSudoContractResponse): _155.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _155.MsgSudoContractResponseAminoMsg): _155.MsgSudoContractResponse;
                toAminoMsg(message: _155.MsgSudoContractResponse): _155.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _155.MsgSudoContractResponseProtoMsg): _155.MsgSudoContractResponse;
                toProto(message: _155.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _155.MsgSudoContractResponse): _155.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _155.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgPinCodes;
                fromPartial(object: Partial<_155.MsgPinCodes>): _155.MsgPinCodes;
                fromAmino(object: _155.MsgPinCodesAmino): _155.MsgPinCodes;
                toAmino(message: _155.MsgPinCodes): _155.MsgPinCodesAmino;
                fromAminoMsg(object: _155.MsgPinCodesAminoMsg): _155.MsgPinCodes;
                toAminoMsg(message: _155.MsgPinCodes): _155.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _155.MsgPinCodesProtoMsg): _155.MsgPinCodes;
                toProto(message: _155.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _155.MsgPinCodes): _155.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _155.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgPinCodesResponse;
                fromPartial(_: Partial<_155.MsgPinCodesResponse>): _155.MsgPinCodesResponse;
                fromAmino(_: _155.MsgPinCodesResponseAmino): _155.MsgPinCodesResponse;
                toAmino(_: _155.MsgPinCodesResponse): _155.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _155.MsgPinCodesResponseAminoMsg): _155.MsgPinCodesResponse;
                toAminoMsg(message: _155.MsgPinCodesResponse): _155.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _155.MsgPinCodesResponseProtoMsg): _155.MsgPinCodesResponse;
                toProto(message: _155.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _155.MsgPinCodesResponse): _155.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _155.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgUnpinCodes;
                fromPartial(object: Partial<_155.MsgUnpinCodes>): _155.MsgUnpinCodes;
                fromAmino(object: _155.MsgUnpinCodesAmino): _155.MsgUnpinCodes;
                toAmino(message: _155.MsgUnpinCodes): _155.MsgUnpinCodesAmino;
                fromAminoMsg(object: _155.MsgUnpinCodesAminoMsg): _155.MsgUnpinCodes;
                toAminoMsg(message: _155.MsgUnpinCodes): _155.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _155.MsgUnpinCodesProtoMsg): _155.MsgUnpinCodes;
                toProto(message: _155.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _155.MsgUnpinCodes): _155.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _155.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_155.MsgUnpinCodesResponse>): _155.MsgUnpinCodesResponse;
                fromAmino(_: _155.MsgUnpinCodesResponseAmino): _155.MsgUnpinCodesResponse;
                toAmino(_: _155.MsgUnpinCodesResponse): _155.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _155.MsgUnpinCodesResponseAminoMsg): _155.MsgUnpinCodesResponse;
                toAminoMsg(message: _155.MsgUnpinCodesResponse): _155.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _155.MsgUnpinCodesResponseProtoMsg): _155.MsgUnpinCodesResponse;
                toProto(message: _155.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _155.MsgUnpinCodesResponse): _155.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _155.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_155.MsgStoreAndInstantiateContract>): _155.MsgStoreAndInstantiateContract;
                fromAmino(object: _155.MsgStoreAndInstantiateContractAmino): _155.MsgStoreAndInstantiateContract;
                toAmino(message: _155.MsgStoreAndInstantiateContract): _155.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _155.MsgStoreAndInstantiateContractAminoMsg): _155.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _155.MsgStoreAndInstantiateContract): _155.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _155.MsgStoreAndInstantiateContractProtoMsg): _155.MsgStoreAndInstantiateContract;
                toProto(message: _155.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _155.MsgStoreAndInstantiateContract): _155.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _155.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_155.MsgStoreAndInstantiateContractResponse>): _155.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _155.MsgStoreAndInstantiateContractResponseAmino): _155.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _155.MsgStoreAndInstantiateContractResponse): _155.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _155.MsgStoreAndInstantiateContractResponseAminoMsg): _155.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _155.MsgStoreAndInstantiateContractResponse): _155.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _155.MsgStoreAndInstantiateContractResponseProtoMsg): _155.MsgStoreAndInstantiateContractResponse;
                toProto(message: _155.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _155.MsgStoreAndInstantiateContractResponse): _155.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _155.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_155.MsgAddCodeUploadParamsAddresses>): _155.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _155.MsgAddCodeUploadParamsAddressesAmino): _155.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _155.MsgAddCodeUploadParamsAddresses): _155.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _155.MsgAddCodeUploadParamsAddressesAminoMsg): _155.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _155.MsgAddCodeUploadParamsAddresses): _155.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _155.MsgAddCodeUploadParamsAddressesProtoMsg): _155.MsgAddCodeUploadParamsAddresses;
                toProto(message: _155.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _155.MsgAddCodeUploadParamsAddresses): _155.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _155.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_155.MsgAddCodeUploadParamsAddressesResponse>): _155.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _155.MsgAddCodeUploadParamsAddressesResponseAmino): _155.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _155.MsgAddCodeUploadParamsAddressesResponse): _155.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _155.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _155.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _155.MsgAddCodeUploadParamsAddressesResponse): _155.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _155.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _155.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _155.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _155.MsgAddCodeUploadParamsAddressesResponse): _155.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _155.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_155.MsgRemoveCodeUploadParamsAddresses>): _155.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _155.MsgRemoveCodeUploadParamsAddressesAmino): _155.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _155.MsgRemoveCodeUploadParamsAddresses): _155.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _155.MsgRemoveCodeUploadParamsAddressesAminoMsg): _155.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _155.MsgRemoveCodeUploadParamsAddresses): _155.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _155.MsgRemoveCodeUploadParamsAddressesProtoMsg): _155.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _155.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _155.MsgRemoveCodeUploadParamsAddresses): _155.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _155.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_155.MsgRemoveCodeUploadParamsAddressesResponse>): _155.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _155.MsgRemoveCodeUploadParamsAddressesResponseAmino): _155.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _155.MsgRemoveCodeUploadParamsAddressesResponse): _155.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _155.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _155.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _155.MsgRemoveCodeUploadParamsAddressesResponse): _155.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _155.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _155.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _155.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _155.MsgRemoveCodeUploadParamsAddressesResponse): _155.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _155.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_155.MsgStoreAndMigrateContract>): _155.MsgStoreAndMigrateContract;
                fromAmino(object: _155.MsgStoreAndMigrateContractAmino): _155.MsgStoreAndMigrateContract;
                toAmino(message: _155.MsgStoreAndMigrateContract): _155.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _155.MsgStoreAndMigrateContractAminoMsg): _155.MsgStoreAndMigrateContract;
                toAminoMsg(message: _155.MsgStoreAndMigrateContract): _155.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _155.MsgStoreAndMigrateContractProtoMsg): _155.MsgStoreAndMigrateContract;
                toProto(message: _155.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _155.MsgStoreAndMigrateContract): _155.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _155.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_155.MsgStoreAndMigrateContractResponse>): _155.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _155.MsgStoreAndMigrateContractResponseAmino): _155.MsgStoreAndMigrateContractResponse;
                toAmino(message: _155.MsgStoreAndMigrateContractResponse): _155.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _155.MsgStoreAndMigrateContractResponseAminoMsg): _155.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _155.MsgStoreAndMigrateContractResponse): _155.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _155.MsgStoreAndMigrateContractResponseProtoMsg): _155.MsgStoreAndMigrateContractResponse;
                toProto(message: _155.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _155.MsgStoreAndMigrateContractResponse): _155.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _155.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _155.MsgUpdateContractLabel;
                fromPartial(object: Partial<_155.MsgUpdateContractLabel>): _155.MsgUpdateContractLabel;
                fromAmino(object: _155.MsgUpdateContractLabelAmino): _155.MsgUpdateContractLabel;
                toAmino(message: _155.MsgUpdateContractLabel): _155.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _155.MsgUpdateContractLabelAminoMsg): _155.MsgUpdateContractLabel;
                toAminoMsg(message: _155.MsgUpdateContractLabel): _155.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateContractLabelProtoMsg): _155.MsgUpdateContractLabel;
                toProto(message: _155.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateContractLabel): _155.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _155.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _155.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_155.MsgUpdateContractLabelResponse>): _155.MsgUpdateContractLabelResponse;
                fromAmino(_: _155.MsgUpdateContractLabelResponseAmino): _155.MsgUpdateContractLabelResponse;
                toAmino(_: _155.MsgUpdateContractLabelResponse): _155.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _155.MsgUpdateContractLabelResponseAminoMsg): _155.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _155.MsgUpdateContractLabelResponse): _155.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _155.MsgUpdateContractLabelResponseProtoMsg): _155.MsgUpdateContractLabelResponse;
                toProto(message: _155.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _155.MsgUpdateContractLabelResponse): _155.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _154.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractInfoRequest;
                fromPartial(object: Partial<_154.QueryContractInfoRequest>): _154.QueryContractInfoRequest;
                fromAmino(object: _154.QueryContractInfoRequestAmino): _154.QueryContractInfoRequest;
                toAmino(message: _154.QueryContractInfoRequest): _154.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _154.QueryContractInfoRequestAminoMsg): _154.QueryContractInfoRequest;
                toAminoMsg(message: _154.QueryContractInfoRequest): _154.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _154.QueryContractInfoRequestProtoMsg): _154.QueryContractInfoRequest;
                toProto(message: _154.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _154.QueryContractInfoRequest): _154.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _154.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractInfoResponse;
                fromPartial(object: Partial<_154.QueryContractInfoResponse>): _154.QueryContractInfoResponse;
                fromAmino(object: _154.QueryContractInfoResponseAmino): _154.QueryContractInfoResponse;
                toAmino(message: _154.QueryContractInfoResponse): _154.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _154.QueryContractInfoResponseAminoMsg): _154.QueryContractInfoResponse;
                toAminoMsg(message: _154.QueryContractInfoResponse): _154.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _154.QueryContractInfoResponseProtoMsg): _154.QueryContractInfoResponse;
                toProto(message: _154.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _154.QueryContractInfoResponse): _154.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _154.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractHistoryRequest;
                fromPartial(object: Partial<_154.QueryContractHistoryRequest>): _154.QueryContractHistoryRequest;
                fromAmino(object: _154.QueryContractHistoryRequestAmino): _154.QueryContractHistoryRequest;
                toAmino(message: _154.QueryContractHistoryRequest): _154.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _154.QueryContractHistoryRequestAminoMsg): _154.QueryContractHistoryRequest;
                toAminoMsg(message: _154.QueryContractHistoryRequest): _154.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _154.QueryContractHistoryRequestProtoMsg): _154.QueryContractHistoryRequest;
                toProto(message: _154.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _154.QueryContractHistoryRequest): _154.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _154.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractHistoryResponse;
                fromPartial(object: Partial<_154.QueryContractHistoryResponse>): _154.QueryContractHistoryResponse;
                fromAmino(object: _154.QueryContractHistoryResponseAmino): _154.QueryContractHistoryResponse;
                toAmino(message: _154.QueryContractHistoryResponse): _154.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _154.QueryContractHistoryResponseAminoMsg): _154.QueryContractHistoryResponse;
                toAminoMsg(message: _154.QueryContractHistoryResponse): _154.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _154.QueryContractHistoryResponseProtoMsg): _154.QueryContractHistoryResponse;
                toProto(message: _154.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _154.QueryContractHistoryResponse): _154.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _154.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_154.QueryContractsByCodeRequest>): _154.QueryContractsByCodeRequest;
                fromAmino(object: _154.QueryContractsByCodeRequestAmino): _154.QueryContractsByCodeRequest;
                toAmino(message: _154.QueryContractsByCodeRequest): _154.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _154.QueryContractsByCodeRequestAminoMsg): _154.QueryContractsByCodeRequest;
                toAminoMsg(message: _154.QueryContractsByCodeRequest): _154.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _154.QueryContractsByCodeRequestProtoMsg): _154.QueryContractsByCodeRequest;
                toProto(message: _154.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _154.QueryContractsByCodeRequest): _154.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _154.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_154.QueryContractsByCodeResponse>): _154.QueryContractsByCodeResponse;
                fromAmino(object: _154.QueryContractsByCodeResponseAmino): _154.QueryContractsByCodeResponse;
                toAmino(message: _154.QueryContractsByCodeResponse): _154.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _154.QueryContractsByCodeResponseAminoMsg): _154.QueryContractsByCodeResponse;
                toAminoMsg(message: _154.QueryContractsByCodeResponse): _154.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _154.QueryContractsByCodeResponseProtoMsg): _154.QueryContractsByCodeResponse;
                toProto(message: _154.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _154.QueryContractsByCodeResponse): _154.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _154.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllContractStateRequest;
                fromPartial(object: Partial<_154.QueryAllContractStateRequest>): _154.QueryAllContractStateRequest;
                fromAmino(object: _154.QueryAllContractStateRequestAmino): _154.QueryAllContractStateRequest;
                toAmino(message: _154.QueryAllContractStateRequest): _154.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _154.QueryAllContractStateRequestAminoMsg): _154.QueryAllContractStateRequest;
                toAminoMsg(message: _154.QueryAllContractStateRequest): _154.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _154.QueryAllContractStateRequestProtoMsg): _154.QueryAllContractStateRequest;
                toProto(message: _154.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _154.QueryAllContractStateRequest): _154.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _154.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryAllContractStateResponse;
                fromPartial(object: Partial<_154.QueryAllContractStateResponse>): _154.QueryAllContractStateResponse;
                fromAmino(object: _154.QueryAllContractStateResponseAmino): _154.QueryAllContractStateResponse;
                toAmino(message: _154.QueryAllContractStateResponse): _154.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _154.QueryAllContractStateResponseAminoMsg): _154.QueryAllContractStateResponse;
                toAminoMsg(message: _154.QueryAllContractStateResponse): _154.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _154.QueryAllContractStateResponseProtoMsg): _154.QueryAllContractStateResponse;
                toProto(message: _154.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _154.QueryAllContractStateResponse): _154.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _154.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryRawContractStateRequest;
                fromPartial(object: Partial<_154.QueryRawContractStateRequest>): _154.QueryRawContractStateRequest;
                fromAmino(object: _154.QueryRawContractStateRequestAmino): _154.QueryRawContractStateRequest;
                toAmino(message: _154.QueryRawContractStateRequest): _154.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _154.QueryRawContractStateRequestAminoMsg): _154.QueryRawContractStateRequest;
                toAminoMsg(message: _154.QueryRawContractStateRequest): _154.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _154.QueryRawContractStateRequestProtoMsg): _154.QueryRawContractStateRequest;
                toProto(message: _154.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _154.QueryRawContractStateRequest): _154.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _154.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryRawContractStateResponse;
                fromPartial(object: Partial<_154.QueryRawContractStateResponse>): _154.QueryRawContractStateResponse;
                fromAmino(object: _154.QueryRawContractStateResponseAmino): _154.QueryRawContractStateResponse;
                toAmino(message: _154.QueryRawContractStateResponse): _154.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _154.QueryRawContractStateResponseAminoMsg): _154.QueryRawContractStateResponse;
                toAminoMsg(message: _154.QueryRawContractStateResponse): _154.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _154.QueryRawContractStateResponseProtoMsg): _154.QueryRawContractStateResponse;
                toProto(message: _154.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _154.QueryRawContractStateResponse): _154.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _154.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_154.QuerySmartContractStateRequest>): _154.QuerySmartContractStateRequest;
                fromAmino(object: _154.QuerySmartContractStateRequestAmino): _154.QuerySmartContractStateRequest;
                toAmino(message: _154.QuerySmartContractStateRequest): _154.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _154.QuerySmartContractStateRequestAminoMsg): _154.QuerySmartContractStateRequest;
                toAminoMsg(message: _154.QuerySmartContractStateRequest): _154.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _154.QuerySmartContractStateRequestProtoMsg): _154.QuerySmartContractStateRequest;
                toProto(message: _154.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _154.QuerySmartContractStateRequest): _154.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _154.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_154.QuerySmartContractStateResponse>): _154.QuerySmartContractStateResponse;
                fromAmino(object: _154.QuerySmartContractStateResponseAmino): _154.QuerySmartContractStateResponse;
                toAmino(message: _154.QuerySmartContractStateResponse): _154.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _154.QuerySmartContractStateResponseAminoMsg): _154.QuerySmartContractStateResponse;
                toAminoMsg(message: _154.QuerySmartContractStateResponse): _154.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _154.QuerySmartContractStateResponseProtoMsg): _154.QuerySmartContractStateResponse;
                toProto(message: _154.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _154.QuerySmartContractStateResponse): _154.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _154.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryCodeRequest;
                fromPartial(object: Partial<_154.QueryCodeRequest>): _154.QueryCodeRequest;
                fromAmino(object: _154.QueryCodeRequestAmino): _154.QueryCodeRequest;
                toAmino(message: _154.QueryCodeRequest): _154.QueryCodeRequestAmino;
                fromAminoMsg(object: _154.QueryCodeRequestAminoMsg): _154.QueryCodeRequest;
                toAminoMsg(message: _154.QueryCodeRequest): _154.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _154.QueryCodeRequestProtoMsg): _154.QueryCodeRequest;
                toProto(message: _154.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _154.QueryCodeRequest): _154.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _154.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.CodeInfoResponse;
                fromPartial(object: Partial<_154.CodeInfoResponse>): _154.CodeInfoResponse;
                fromAmino(object: _154.CodeInfoResponseAmino): _154.CodeInfoResponse;
                toAmino(message: _154.CodeInfoResponse): _154.CodeInfoResponseAmino;
                fromAminoMsg(object: _154.CodeInfoResponseAminoMsg): _154.CodeInfoResponse;
                toAminoMsg(message: _154.CodeInfoResponse): _154.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _154.CodeInfoResponseProtoMsg): _154.CodeInfoResponse;
                toProto(message: _154.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _154.CodeInfoResponse): _154.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _154.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryCodeResponse;
                fromPartial(object: Partial<_154.QueryCodeResponse>): _154.QueryCodeResponse;
                fromAmino(object: _154.QueryCodeResponseAmino): _154.QueryCodeResponse;
                toAmino(message: _154.QueryCodeResponse): _154.QueryCodeResponseAmino;
                fromAminoMsg(object: _154.QueryCodeResponseAminoMsg): _154.QueryCodeResponse;
                toAminoMsg(message: _154.QueryCodeResponse): _154.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _154.QueryCodeResponseProtoMsg): _154.QueryCodeResponse;
                toProto(message: _154.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _154.QueryCodeResponse): _154.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _154.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryCodesRequest;
                fromPartial(object: Partial<_154.QueryCodesRequest>): _154.QueryCodesRequest;
                fromAmino(object: _154.QueryCodesRequestAmino): _154.QueryCodesRequest;
                toAmino(message: _154.QueryCodesRequest): _154.QueryCodesRequestAmino;
                fromAminoMsg(object: _154.QueryCodesRequestAminoMsg): _154.QueryCodesRequest;
                toAminoMsg(message: _154.QueryCodesRequest): _154.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _154.QueryCodesRequestProtoMsg): _154.QueryCodesRequest;
                toProto(message: _154.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _154.QueryCodesRequest): _154.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _154.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryCodesResponse;
                fromPartial(object: Partial<_154.QueryCodesResponse>): _154.QueryCodesResponse;
                fromAmino(object: _154.QueryCodesResponseAmino): _154.QueryCodesResponse;
                toAmino(message: _154.QueryCodesResponse): _154.QueryCodesResponseAmino;
                fromAminoMsg(object: _154.QueryCodesResponseAminoMsg): _154.QueryCodesResponse;
                toAminoMsg(message: _154.QueryCodesResponse): _154.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _154.QueryCodesResponseProtoMsg): _154.QueryCodesResponse;
                toProto(message: _154.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _154.QueryCodesResponse): _154.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _154.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_154.QueryPinnedCodesRequest>): _154.QueryPinnedCodesRequest;
                fromAmino(object: _154.QueryPinnedCodesRequestAmino): _154.QueryPinnedCodesRequest;
                toAmino(message: _154.QueryPinnedCodesRequest): _154.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _154.QueryPinnedCodesRequestAminoMsg): _154.QueryPinnedCodesRequest;
                toAminoMsg(message: _154.QueryPinnedCodesRequest): _154.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _154.QueryPinnedCodesRequestProtoMsg): _154.QueryPinnedCodesRequest;
                toProto(message: _154.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _154.QueryPinnedCodesRequest): _154.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _154.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_154.QueryPinnedCodesResponse>): _154.QueryPinnedCodesResponse;
                fromAmino(object: _154.QueryPinnedCodesResponseAmino): _154.QueryPinnedCodesResponse;
                toAmino(message: _154.QueryPinnedCodesResponse): _154.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _154.QueryPinnedCodesResponseAminoMsg): _154.QueryPinnedCodesResponse;
                toAminoMsg(message: _154.QueryPinnedCodesResponse): _154.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _154.QueryPinnedCodesResponseProtoMsg): _154.QueryPinnedCodesResponse;
                toProto(message: _154.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _154.QueryPinnedCodesResponse): _154.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _154.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _154.QueryParamsRequest;
                fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
                fromAmino(_: _154.QueryParamsRequestAmino): _154.QueryParamsRequest;
                toAmino(_: _154.QueryParamsRequest): _154.QueryParamsRequestAmino;
                fromAminoMsg(object: _154.QueryParamsRequestAminoMsg): _154.QueryParamsRequest;
                toAminoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _154.QueryParamsRequestProtoMsg): _154.QueryParamsRequest;
                toProto(message: _154.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _154.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryParamsResponse;
                fromPartial(object: Partial<_154.QueryParamsResponse>): _154.QueryParamsResponse;
                fromAmino(object: _154.QueryParamsResponseAmino): _154.QueryParamsResponse;
                toAmino(message: _154.QueryParamsResponse): _154.QueryParamsResponseAmino;
                fromAminoMsg(object: _154.QueryParamsResponseAminoMsg): _154.QueryParamsResponse;
                toAminoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _154.QueryParamsResponseProtoMsg): _154.QueryParamsResponse;
                toProto(message: _154.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _154.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_154.QueryContractsByCreatorRequest>): _154.QueryContractsByCreatorRequest;
                fromAmino(object: _154.QueryContractsByCreatorRequestAmino): _154.QueryContractsByCreatorRequest;
                toAmino(message: _154.QueryContractsByCreatorRequest): _154.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _154.QueryContractsByCreatorRequestAminoMsg): _154.QueryContractsByCreatorRequest;
                toAminoMsg(message: _154.QueryContractsByCreatorRequest): _154.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _154.QueryContractsByCreatorRequestProtoMsg): _154.QueryContractsByCreatorRequest;
                toProto(message: _154.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _154.QueryContractsByCreatorRequest): _154.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _154.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_154.QueryContractsByCreatorResponse>): _154.QueryContractsByCreatorResponse;
                fromAmino(object: _154.QueryContractsByCreatorResponseAmino): _154.QueryContractsByCreatorResponse;
                toAmino(message: _154.QueryContractsByCreatorResponse): _154.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _154.QueryContractsByCreatorResponseAminoMsg): _154.QueryContractsByCreatorResponse;
                toAminoMsg(message: _154.QueryContractsByCreatorResponse): _154.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _154.QueryContractsByCreatorResponseProtoMsg): _154.QueryContractsByCreatorResponse;
                toProto(message: _154.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _154.QueryContractsByCreatorResponse): _154.QueryContractsByCreatorResponseProtoMsg;
            };
            QueryBuildAddressRequest: {
                typeUrl: string;
                encode(message: _154.QueryBuildAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryBuildAddressRequest;
                fromPartial(object: Partial<_154.QueryBuildAddressRequest>): _154.QueryBuildAddressRequest;
                fromAmino(object: _154.QueryBuildAddressRequestAmino): _154.QueryBuildAddressRequest;
                toAmino(message: _154.QueryBuildAddressRequest): _154.QueryBuildAddressRequestAmino;
                fromAminoMsg(object: _154.QueryBuildAddressRequestAminoMsg): _154.QueryBuildAddressRequest;
                toAminoMsg(message: _154.QueryBuildAddressRequest): _154.QueryBuildAddressRequestAminoMsg;
                fromProtoMsg(message: _154.QueryBuildAddressRequestProtoMsg): _154.QueryBuildAddressRequest;
                toProto(message: _154.QueryBuildAddressRequest): Uint8Array;
                toProtoMsg(message: _154.QueryBuildAddressRequest): _154.QueryBuildAddressRequestProtoMsg;
            };
            QueryBuildAddressResponse: {
                typeUrl: string;
                encode(message: _154.QueryBuildAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _154.QueryBuildAddressResponse;
                fromPartial(object: Partial<_154.QueryBuildAddressResponse>): _154.QueryBuildAddressResponse;
                fromAmino(object: _154.QueryBuildAddressResponseAmino): _154.QueryBuildAddressResponse;
                toAmino(message: _154.QueryBuildAddressResponse): _154.QueryBuildAddressResponseAmino;
                fromAminoMsg(object: _154.QueryBuildAddressResponseAminoMsg): _154.QueryBuildAddressResponse;
                toAminoMsg(message: _154.QueryBuildAddressResponse): _154.QueryBuildAddressResponseAminoMsg;
                fromProtoMsg(message: _154.QueryBuildAddressResponseProtoMsg): _154.QueryBuildAddressResponse;
                toProto(message: _154.QueryBuildAddressResponse): Uint8Array;
                toProtoMsg(message: _154.QueryBuildAddressResponse): _154.QueryBuildAddressResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _153.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.StoreCodeProposal;
                fromPartial(object: Partial<_153.StoreCodeProposal>): _153.StoreCodeProposal;
                fromAmino(object: _153.StoreCodeProposalAmino): _153.StoreCodeProposal;
                toAmino(message: _153.StoreCodeProposal): _153.StoreCodeProposalAmino;
                fromAminoMsg(object: _153.StoreCodeProposalAminoMsg): _153.StoreCodeProposal;
                toAminoMsg(message: _153.StoreCodeProposal): _153.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _153.StoreCodeProposalProtoMsg): _153.StoreCodeProposal;
                toProto(message: _153.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _153.StoreCodeProposal): _153.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _153.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.InstantiateContractProposal;
                fromPartial(object: Partial<_153.InstantiateContractProposal>): _153.InstantiateContractProposal;
                fromAmino(object: _153.InstantiateContractProposalAmino): _153.InstantiateContractProposal;
                toAmino(message: _153.InstantiateContractProposal): _153.InstantiateContractProposalAmino;
                fromAminoMsg(object: _153.InstantiateContractProposalAminoMsg): _153.InstantiateContractProposal;
                toAminoMsg(message: _153.InstantiateContractProposal): _153.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _153.InstantiateContractProposalProtoMsg): _153.InstantiateContractProposal;
                toProto(message: _153.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _153.InstantiateContractProposal): _153.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _153.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.InstantiateContract2Proposal;
                fromPartial(object: Partial<_153.InstantiateContract2Proposal>): _153.InstantiateContract2Proposal;
                fromAmino(object: _153.InstantiateContract2ProposalAmino): _153.InstantiateContract2Proposal;
                toAmino(message: _153.InstantiateContract2Proposal): _153.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _153.InstantiateContract2ProposalAminoMsg): _153.InstantiateContract2Proposal;
                toAminoMsg(message: _153.InstantiateContract2Proposal): _153.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _153.InstantiateContract2ProposalProtoMsg): _153.InstantiateContract2Proposal;
                toProto(message: _153.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _153.InstantiateContract2Proposal): _153.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _153.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.MigrateContractProposal;
                fromPartial(object: Partial<_153.MigrateContractProposal>): _153.MigrateContractProposal;
                fromAmino(object: _153.MigrateContractProposalAmino): _153.MigrateContractProposal;
                toAmino(message: _153.MigrateContractProposal): _153.MigrateContractProposalAmino;
                fromAminoMsg(object: _153.MigrateContractProposalAminoMsg): _153.MigrateContractProposal;
                toAminoMsg(message: _153.MigrateContractProposal): _153.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _153.MigrateContractProposalProtoMsg): _153.MigrateContractProposal;
                toProto(message: _153.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _153.MigrateContractProposal): _153.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _153.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.SudoContractProposal;
                fromPartial(object: Partial<_153.SudoContractProposal>): _153.SudoContractProposal;
                fromAmino(object: _153.SudoContractProposalAmino): _153.SudoContractProposal;
                toAmino(message: _153.SudoContractProposal): _153.SudoContractProposalAmino;
                fromAminoMsg(object: _153.SudoContractProposalAminoMsg): _153.SudoContractProposal;
                toAminoMsg(message: _153.SudoContractProposal): _153.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _153.SudoContractProposalProtoMsg): _153.SudoContractProposal;
                toProto(message: _153.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _153.SudoContractProposal): _153.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _153.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.ExecuteContractProposal;
                fromPartial(object: Partial<_153.ExecuteContractProposal>): _153.ExecuteContractProposal;
                fromAmino(object: _153.ExecuteContractProposalAmino): _153.ExecuteContractProposal;
                toAmino(message: _153.ExecuteContractProposal): _153.ExecuteContractProposalAmino;
                fromAminoMsg(object: _153.ExecuteContractProposalAminoMsg): _153.ExecuteContractProposal;
                toAminoMsg(message: _153.ExecuteContractProposal): _153.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _153.ExecuteContractProposalProtoMsg): _153.ExecuteContractProposal;
                toProto(message: _153.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _153.ExecuteContractProposal): _153.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _153.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.UpdateAdminProposal;
                fromPartial(object: Partial<_153.UpdateAdminProposal>): _153.UpdateAdminProposal;
                fromAmino(object: _153.UpdateAdminProposalAmino): _153.UpdateAdminProposal;
                toAmino(message: _153.UpdateAdminProposal): _153.UpdateAdminProposalAmino;
                fromAminoMsg(object: _153.UpdateAdminProposalAminoMsg): _153.UpdateAdminProposal;
                toAminoMsg(message: _153.UpdateAdminProposal): _153.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _153.UpdateAdminProposalProtoMsg): _153.UpdateAdminProposal;
                toProto(message: _153.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _153.UpdateAdminProposal): _153.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _153.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.ClearAdminProposal;
                fromPartial(object: Partial<_153.ClearAdminProposal>): _153.ClearAdminProposal;
                fromAmino(object: _153.ClearAdminProposalAmino): _153.ClearAdminProposal;
                toAmino(message: _153.ClearAdminProposal): _153.ClearAdminProposalAmino;
                fromAminoMsg(object: _153.ClearAdminProposalAminoMsg): _153.ClearAdminProposal;
                toAminoMsg(message: _153.ClearAdminProposal): _153.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _153.ClearAdminProposalProtoMsg): _153.ClearAdminProposal;
                toProto(message: _153.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _153.ClearAdminProposal): _153.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _153.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.PinCodesProposal;
                fromPartial(object: Partial<_153.PinCodesProposal>): _153.PinCodesProposal;
                fromAmino(object: _153.PinCodesProposalAmino): _153.PinCodesProposal;
                toAmino(message: _153.PinCodesProposal): _153.PinCodesProposalAmino;
                fromAminoMsg(object: _153.PinCodesProposalAminoMsg): _153.PinCodesProposal;
                toAminoMsg(message: _153.PinCodesProposal): _153.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _153.PinCodesProposalProtoMsg): _153.PinCodesProposal;
                toProto(message: _153.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _153.PinCodesProposal): _153.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _153.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.UnpinCodesProposal;
                fromPartial(object: Partial<_153.UnpinCodesProposal>): _153.UnpinCodesProposal;
                fromAmino(object: _153.UnpinCodesProposalAmino): _153.UnpinCodesProposal;
                toAmino(message: _153.UnpinCodesProposal): _153.UnpinCodesProposalAmino;
                fromAminoMsg(object: _153.UnpinCodesProposalAminoMsg): _153.UnpinCodesProposal;
                toAminoMsg(message: _153.UnpinCodesProposal): _153.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _153.UnpinCodesProposalProtoMsg): _153.UnpinCodesProposal;
                toProto(message: _153.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _153.UnpinCodesProposal): _153.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _153.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.AccessConfigUpdate;
                fromPartial(object: Partial<_153.AccessConfigUpdate>): _153.AccessConfigUpdate;
                fromAmino(object: _153.AccessConfigUpdateAmino): _153.AccessConfigUpdate;
                toAmino(message: _153.AccessConfigUpdate): _153.AccessConfigUpdateAmino;
                fromAminoMsg(object: _153.AccessConfigUpdateAminoMsg): _153.AccessConfigUpdate;
                toAminoMsg(message: _153.AccessConfigUpdate): _153.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _153.AccessConfigUpdateProtoMsg): _153.AccessConfigUpdate;
                toProto(message: _153.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _153.AccessConfigUpdate): _153.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _153.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_153.UpdateInstantiateConfigProposal>): _153.UpdateInstantiateConfigProposal;
                fromAmino(object: _153.UpdateInstantiateConfigProposalAmino): _153.UpdateInstantiateConfigProposal;
                toAmino(message: _153.UpdateInstantiateConfigProposal): _153.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _153.UpdateInstantiateConfigProposalAminoMsg): _153.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _153.UpdateInstantiateConfigProposal): _153.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _153.UpdateInstantiateConfigProposalProtoMsg): _153.UpdateInstantiateConfigProposal;
                toProto(message: _153.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _153.UpdateInstantiateConfigProposal): _153.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _153.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _153.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_153.StoreAndInstantiateContractProposal>): _153.StoreAndInstantiateContractProposal;
                fromAmino(object: _153.StoreAndInstantiateContractProposalAmino): _153.StoreAndInstantiateContractProposal;
                toAmino(message: _153.StoreAndInstantiateContractProposal): _153.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _153.StoreAndInstantiateContractProposalAminoMsg): _153.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _153.StoreAndInstantiateContractProposal): _153.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _153.StoreAndInstantiateContractProposalProtoMsg): _153.StoreAndInstantiateContractProposal;
                toProto(message: _153.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _153.StoreAndInstantiateContractProposal): _153.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _152.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.MsgIBCSend;
                fromPartial(object: Partial<_152.MsgIBCSend>): _152.MsgIBCSend;
                fromAmino(object: _152.MsgIBCSendAmino): _152.MsgIBCSend;
                toAmino(message: _152.MsgIBCSend): _152.MsgIBCSendAmino;
                fromAminoMsg(object: _152.MsgIBCSendAminoMsg): _152.MsgIBCSend;
                toAminoMsg(message: _152.MsgIBCSend): _152.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _152.MsgIBCSendProtoMsg): _152.MsgIBCSend;
                toProto(message: _152.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _152.MsgIBCSend): _152.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _152.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.MsgIBCSendResponse;
                fromPartial(object: Partial<_152.MsgIBCSendResponse>): _152.MsgIBCSendResponse;
                fromAmino(object: _152.MsgIBCSendResponseAmino): _152.MsgIBCSendResponse;
                toAmino(message: _152.MsgIBCSendResponse): _152.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _152.MsgIBCSendResponseAminoMsg): _152.MsgIBCSendResponse;
                toAminoMsg(message: _152.MsgIBCSendResponse): _152.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _152.MsgIBCSendResponseProtoMsg): _152.MsgIBCSendResponse;
                toProto(message: _152.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _152.MsgIBCSendResponse): _152.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _152.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _152.MsgIBCCloseChannel;
                fromPartial(object: Partial<_152.MsgIBCCloseChannel>): _152.MsgIBCCloseChannel;
                fromAmino(object: _152.MsgIBCCloseChannelAmino): _152.MsgIBCCloseChannel;
                toAmino(message: _152.MsgIBCCloseChannel): _152.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _152.MsgIBCCloseChannelAminoMsg): _152.MsgIBCCloseChannel;
                toAminoMsg(message: _152.MsgIBCCloseChannel): _152.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _152.MsgIBCCloseChannelProtoMsg): _152.MsgIBCCloseChannel;
                toProto(message: _152.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _152.MsgIBCCloseChannel): _152.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _151.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.GenesisState;
                fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
                fromAmino(object: _151.GenesisStateAmino): _151.GenesisState;
                toAmino(message: _151.GenesisState): _151.GenesisStateAmino;
                fromAminoMsg(object: _151.GenesisStateAminoMsg): _151.GenesisState;
                toAminoMsg(message: _151.GenesisState): _151.GenesisStateAminoMsg;
                fromProtoMsg(message: _151.GenesisStateProtoMsg): _151.GenesisState;
                toProto(message: _151.GenesisState): Uint8Array;
                toProtoMsg(message: _151.GenesisState): _151.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _151.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.Code;
                fromPartial(object: Partial<_151.Code>): _151.Code;
                fromAmino(object: _151.CodeAmino): _151.Code;
                toAmino(message: _151.Code): _151.CodeAmino;
                fromAminoMsg(object: _151.CodeAminoMsg): _151.Code;
                toAminoMsg(message: _151.Code): _151.CodeAminoMsg;
                fromProtoMsg(message: _151.CodeProtoMsg): _151.Code;
                toProto(message: _151.Code): Uint8Array;
                toProtoMsg(message: _151.Code): _151.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _151.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.Contract;
                fromPartial(object: Partial<_151.Contract>): _151.Contract;
                fromAmino(object: _151.ContractAmino): _151.Contract;
                toAmino(message: _151.Contract): _151.ContractAmino;
                fromAminoMsg(object: _151.ContractAminoMsg): _151.Contract;
                toAminoMsg(message: _151.Contract): _151.ContractAminoMsg;
                fromProtoMsg(message: _151.ContractProtoMsg): _151.Contract;
                toProto(message: _151.Contract): Uint8Array;
                toProtoMsg(message: _151.Contract): _151.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _151.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _151.Sequence;
                fromPartial(object: Partial<_151.Sequence>): _151.Sequence;
                fromAmino(object: _151.SequenceAmino): _151.Sequence;
                toAmino(message: _151.Sequence): _151.SequenceAmino;
                fromAminoMsg(object: _151.SequenceAminoMsg): _151.Sequence;
                toAminoMsg(message: _151.Sequence): _151.SequenceAminoMsg;
                fromProtoMsg(message: _151.SequenceProtoMsg): _151.Sequence;
                toProto(message: _151.Sequence): Uint8Array;
                toProtoMsg(message: _151.Sequence): _151.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _150.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.StoreCodeAuthorization;
                fromPartial(object: Partial<_150.StoreCodeAuthorization>): _150.StoreCodeAuthorization;
                fromAmino(object: _150.StoreCodeAuthorizationAmino): _150.StoreCodeAuthorization;
                toAmino(message: _150.StoreCodeAuthorization): _150.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _150.StoreCodeAuthorizationAminoMsg): _150.StoreCodeAuthorization;
                toAminoMsg(message: _150.StoreCodeAuthorization): _150.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _150.StoreCodeAuthorizationProtoMsg): _150.StoreCodeAuthorization;
                toProto(message: _150.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _150.StoreCodeAuthorization): _150.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _150.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ContractExecutionAuthorization;
                fromPartial(object: Partial<_150.ContractExecutionAuthorization>): _150.ContractExecutionAuthorization;
                fromAmino(object: _150.ContractExecutionAuthorizationAmino): _150.ContractExecutionAuthorization;
                toAmino(message: _150.ContractExecutionAuthorization): _150.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _150.ContractExecutionAuthorizationAminoMsg): _150.ContractExecutionAuthorization;
                toAminoMsg(message: _150.ContractExecutionAuthorization): _150.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _150.ContractExecutionAuthorizationProtoMsg): _150.ContractExecutionAuthorization;
                toProto(message: _150.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _150.ContractExecutionAuthorization): _150.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _150.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ContractMigrationAuthorization;
                fromPartial(object: Partial<_150.ContractMigrationAuthorization>): _150.ContractMigrationAuthorization;
                fromAmino(object: _150.ContractMigrationAuthorizationAmino): _150.ContractMigrationAuthorization;
                toAmino(message: _150.ContractMigrationAuthorization): _150.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _150.ContractMigrationAuthorizationAminoMsg): _150.ContractMigrationAuthorization;
                toAminoMsg(message: _150.ContractMigrationAuthorization): _150.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _150.ContractMigrationAuthorizationProtoMsg): _150.ContractMigrationAuthorization;
                toProto(message: _150.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _150.ContractMigrationAuthorization): _150.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _150.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.CodeGrant;
                fromPartial(object: Partial<_150.CodeGrant>): _150.CodeGrant;
                fromAmino(object: _150.CodeGrantAmino): _150.CodeGrant;
                toAmino(message: _150.CodeGrant): _150.CodeGrantAmino;
                fromAminoMsg(object: _150.CodeGrantAminoMsg): _150.CodeGrant;
                toAminoMsg(message: _150.CodeGrant): _150.CodeGrantAminoMsg;
                fromProtoMsg(message: _150.CodeGrantProtoMsg): _150.CodeGrant;
                toProto(message: _150.CodeGrant): Uint8Array;
                toProtoMsg(message: _150.CodeGrant): _150.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _150.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ContractGrant;
                fromPartial(object: Partial<_150.ContractGrant>): _150.ContractGrant;
                fromAmino(object: _150.ContractGrantAmino): _150.ContractGrant;
                toAmino(message: _150.ContractGrant): _150.ContractGrantAmino;
                fromAminoMsg(object: _150.ContractGrantAminoMsg): _150.ContractGrant;
                toAminoMsg(message: _150.ContractGrant): _150.ContractGrantAminoMsg;
                fromProtoMsg(message: _150.ContractGrantProtoMsg): _150.ContractGrant;
                toProto(message: _150.ContractGrant): Uint8Array;
                toProtoMsg(message: _150.ContractGrant): _150.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _150.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.MaxCallsLimit;
                fromPartial(object: Partial<_150.MaxCallsLimit>): _150.MaxCallsLimit;
                fromAmino(object: _150.MaxCallsLimitAmino): _150.MaxCallsLimit;
                toAmino(message: _150.MaxCallsLimit): _150.MaxCallsLimitAmino;
                fromAminoMsg(object: _150.MaxCallsLimitAminoMsg): _150.MaxCallsLimit;
                toAminoMsg(message: _150.MaxCallsLimit): _150.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _150.MaxCallsLimitProtoMsg): _150.MaxCallsLimit;
                toProto(message: _150.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _150.MaxCallsLimit): _150.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _150.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.MaxFundsLimit;
                fromPartial(object: Partial<_150.MaxFundsLimit>): _150.MaxFundsLimit;
                fromAmino(object: _150.MaxFundsLimitAmino): _150.MaxFundsLimit;
                toAmino(message: _150.MaxFundsLimit): _150.MaxFundsLimitAmino;
                fromAminoMsg(object: _150.MaxFundsLimitAminoMsg): _150.MaxFundsLimit;
                toAminoMsg(message: _150.MaxFundsLimit): _150.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _150.MaxFundsLimitProtoMsg): _150.MaxFundsLimit;
                toProto(message: _150.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _150.MaxFundsLimit): _150.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _150.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.CombinedLimit;
                fromPartial(object: Partial<_150.CombinedLimit>): _150.CombinedLimit;
                fromAmino(object: _150.CombinedLimitAmino): _150.CombinedLimit;
                toAmino(message: _150.CombinedLimit): _150.CombinedLimitAmino;
                fromAminoMsg(object: _150.CombinedLimitAminoMsg): _150.CombinedLimit;
                toAminoMsg(message: _150.CombinedLimit): _150.CombinedLimitAminoMsg;
                fromProtoMsg(message: _150.CombinedLimitProtoMsg): _150.CombinedLimit;
                toProto(message: _150.CombinedLimit): Uint8Array;
                toProtoMsg(message: _150.CombinedLimit): _150.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _150.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _150.AllowAllMessagesFilter;
                fromPartial(_: Partial<_150.AllowAllMessagesFilter>): _150.AllowAllMessagesFilter;
                fromAmino(_: _150.AllowAllMessagesFilterAmino): _150.AllowAllMessagesFilter;
                toAmino(_: _150.AllowAllMessagesFilter): _150.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _150.AllowAllMessagesFilterAminoMsg): _150.AllowAllMessagesFilter;
                toAminoMsg(message: _150.AllowAllMessagesFilter): _150.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _150.AllowAllMessagesFilterProtoMsg): _150.AllowAllMessagesFilter;
                toProto(message: _150.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _150.AllowAllMessagesFilter): _150.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _150.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_150.AcceptedMessageKeysFilter>): _150.AcceptedMessageKeysFilter;
                fromAmino(object: _150.AcceptedMessageKeysFilterAmino): _150.AcceptedMessageKeysFilter;
                toAmino(message: _150.AcceptedMessageKeysFilter): _150.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _150.AcceptedMessageKeysFilterAminoMsg): _150.AcceptedMessageKeysFilter;
                toAminoMsg(message: _150.AcceptedMessageKeysFilter): _150.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _150.AcceptedMessageKeysFilterProtoMsg): _150.AcceptedMessageKeysFilter;
                toProto(message: _150.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _150.AcceptedMessageKeysFilter): _150.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _150.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.AcceptedMessagesFilter;
                fromPartial(object: Partial<_150.AcceptedMessagesFilter>): _150.AcceptedMessagesFilter;
                fromAmino(object: _150.AcceptedMessagesFilterAmino): _150.AcceptedMessagesFilter;
                toAmino(message: _150.AcceptedMessagesFilter): _150.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _150.AcceptedMessagesFilterAminoMsg): _150.AcceptedMessagesFilter;
                toAminoMsg(message: _150.AcceptedMessagesFilter): _150.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _150.AcceptedMessagesFilterProtoMsg): _150.AcceptedMessagesFilter;
                toProto(message: _150.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _150.AcceptedMessagesFilter): _150.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _150.MaxCallsLimit | _150.MaxFundsLimit | _150.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _150.AllowAllMessagesFilter | _150.AcceptedMessageKeysFilter | _150.AcceptedMessagesFilter;
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
                    v1: _306.MsgClientImpl;
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
                        tokenizeShareRecordReward(request: import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryTokenizeShareRecordRewardResponse>;
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
                        tokenizeShareRecordById(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByIdResponse>;
                        tokenizeShareRecordByDenom(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordByDenomResponse>;
                        tokenizeShareRecordsOwned(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareRecordsOwnedResponse>;
                        allTokenizeShareRecords(request?: import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryAllTokenizeShareRecordsResponse>;
                        lastTokenizeShareRecordId(request?: import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryLastTokenizeShareRecordIdResponse>;
                        totalTokenizeSharedAssets(request?: import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalTokenizeSharedAssetsResponse>;
                        totalLiquidStaked(request?: import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStaked): Promise<import("../cosmos/staking/v1beta1/query").QueryTotalLiquidStakedResponse>;
                        tokenizeShareLockInfo(request: import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfo): Promise<import("../cosmos/staking/v1beta1/query").QueryTokenizeShareLockInfoResponse>;
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
                        contractInfo(request: _154.QueryContractInfoRequest): Promise<_154.QueryContractInfoResponse>;
                        contractHistory(request: _154.QueryContractHistoryRequest): Promise<_154.QueryContractHistoryResponse>;
                        contractsByCode(request: _154.QueryContractsByCodeRequest): Promise<_154.QueryContractsByCodeResponse>;
                        allContractState(request: _154.QueryAllContractStateRequest): Promise<_154.QueryAllContractStateResponse>;
                        rawContractState(request: _154.QueryRawContractStateRequest): Promise<_154.QueryRawContractStateResponse>;
                        smartContractState(request: _154.QuerySmartContractStateRequest): Promise<_154.QuerySmartContractStateResponse>;
                        code(request: _154.QueryCodeRequest): Promise<_154.QueryCodeResponse>;
                        codes(request?: _154.QueryCodesRequest): Promise<_154.QueryCodesResponse>;
                        pinnedCodes(request?: _154.QueryPinnedCodesRequest): Promise<_154.QueryPinnedCodesResponse>;
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                        contractsByCreator(request: _154.QueryContractsByCreatorRequest): Promise<_154.QueryContractsByCreatorResponse>;
                        buildAddress(request: _154.QueryBuildAddressRequest): Promise<_154.QueryBuildAddressResponse>;
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
                    v1: _304.LCDQueryClient;
                };
            };
        }>;
    };
}
