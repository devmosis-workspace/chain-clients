import * as _226 from "./wasm/v1/authz";
import * as _227 from "./wasm/v1/genesis";
import * as _228 from "./wasm/v1/ibc";
import * as _229 from "./wasm/v1/proposal_legacy";
import * as _230 from "./wasm/v1/query";
import * as _231 from "./wasm/v1/tx";
import * as _232 from "./wasm/v1/types";
import * as _412 from "./wasm/v1/query.lcd";
import * as _413 from "./wasm/v1/query.rpc.Query";
import * as _414 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _414.MsgClientImpl;
            QueryClientImpl: typeof _413.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _230.QueryContractInfoRequest): Promise<_230.QueryContractInfoResponse>;
                contractHistory(request: _230.QueryContractHistoryRequest): Promise<_230.QueryContractHistoryResponse>;
                contractsByCode(request: _230.QueryContractsByCodeRequest): Promise<_230.QueryContractsByCodeResponse>;
                allContractState(request: _230.QueryAllContractStateRequest): Promise<_230.QueryAllContractStateResponse>;
                rawContractState(request: _230.QueryRawContractStateRequest): Promise<_230.QueryRawContractStateResponse>;
                smartContractState(request: _230.QuerySmartContractStateRequest): Promise<_230.QuerySmartContractStateResponse>;
                code(request: _230.QueryCodeRequest): Promise<_230.QueryCodeResponse>;
                codes(request?: _230.QueryCodesRequest): Promise<_230.QueryCodesResponse>;
                pinnedCodes(request?: _230.QueryPinnedCodesRequest): Promise<_230.QueryPinnedCodesResponse>;
                params(request?: _230.QueryParamsRequest): Promise<_230.QueryParamsResponse>;
                contractsByCreator(request: _230.QueryContractsByCreatorRequest): Promise<_230.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _412.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _231.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _231.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _231.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _231.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _231.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _231.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _231.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _231.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _231.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _231.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _231.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _231.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _231.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _231.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _231.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _231.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _231.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _231.MsgStoreCode): {
                        typeUrl: string;
                        value: _231.MsgStoreCode;
                    };
                    instantiateContract(value: _231.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _231.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _231.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _231.MsgInstantiateContract2;
                    };
                    executeContract(value: _231.MsgExecuteContract): {
                        typeUrl: string;
                        value: _231.MsgExecuteContract;
                    };
                    migrateContract(value: _231.MsgMigrateContract): {
                        typeUrl: string;
                        value: _231.MsgMigrateContract;
                    };
                    updateAdmin(value: _231.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _231.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _231.MsgClearAdmin): {
                        typeUrl: string;
                        value: _231.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _231.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _231.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _231.MsgUpdateParams): {
                        typeUrl: string;
                        value: _231.MsgUpdateParams;
                    };
                    sudoContract(value: _231.MsgSudoContract): {
                        typeUrl: string;
                        value: _231.MsgSudoContract;
                    };
                    pinCodes(value: _231.MsgPinCodes): {
                        typeUrl: string;
                        value: _231.MsgPinCodes;
                    };
                    unpinCodes(value: _231.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _231.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _231.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _231.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _231.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _231.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _231.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _231.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _231.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _231.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _231.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _231.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _231.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _231.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _231.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _231.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _231.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _231.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _231.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _231.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _231.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _231.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _231.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _231.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _231.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _231.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _231.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _231.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _231.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _231.MsgStoreCode): {
                        typeUrl: string;
                        value: _231.MsgStoreCode;
                    };
                    instantiateContract(value: _231.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _231.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _231.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _231.MsgInstantiateContract2;
                    };
                    executeContract(value: _231.MsgExecuteContract): {
                        typeUrl: string;
                        value: _231.MsgExecuteContract;
                    };
                    migrateContract(value: _231.MsgMigrateContract): {
                        typeUrl: string;
                        value: _231.MsgMigrateContract;
                    };
                    updateAdmin(value: _231.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _231.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _231.MsgClearAdmin): {
                        typeUrl: string;
                        value: _231.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _231.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _231.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _231.MsgUpdateParams): {
                        typeUrl: string;
                        value: _231.MsgUpdateParams;
                    };
                    sudoContract(value: _231.MsgSudoContract): {
                        typeUrl: string;
                        value: _231.MsgSudoContract;
                    };
                    pinCodes(value: _231.MsgPinCodes): {
                        typeUrl: string;
                        value: _231.MsgPinCodes;
                    };
                    unpinCodes(value: _231.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _231.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _231.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _231.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _231.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _231.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _231.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _231.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _231.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _231.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _231.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _231.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _231.MsgStoreCode) => _231.MsgStoreCodeAmino;
                    fromAmino: (object: _231.MsgStoreCodeAmino) => _231.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _231.MsgInstantiateContract) => _231.MsgInstantiateContractAmino;
                    fromAmino: (object: _231.MsgInstantiateContractAmino) => _231.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _231.MsgInstantiateContract2) => _231.MsgInstantiateContract2Amino;
                    fromAmino: (object: _231.MsgInstantiateContract2Amino) => _231.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _231.MsgExecuteContract) => _231.MsgExecuteContractAmino;
                    fromAmino: (object: _231.MsgExecuteContractAmino) => _231.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _231.MsgMigrateContract) => _231.MsgMigrateContractAmino;
                    fromAmino: (object: _231.MsgMigrateContractAmino) => _231.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _231.MsgUpdateAdmin) => _231.MsgUpdateAdminAmino;
                    fromAmino: (object: _231.MsgUpdateAdminAmino) => _231.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _231.MsgClearAdmin) => _231.MsgClearAdminAmino;
                    fromAmino: (object: _231.MsgClearAdminAmino) => _231.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _231.MsgUpdateInstantiateConfig) => _231.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _231.MsgUpdateInstantiateConfigAmino) => _231.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _231.MsgUpdateParams) => _231.MsgUpdateParamsAmino;
                    fromAmino: (object: _231.MsgUpdateParamsAmino) => _231.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _231.MsgSudoContract) => _231.MsgSudoContractAmino;
                    fromAmino: (object: _231.MsgSudoContractAmino) => _231.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _231.MsgPinCodes) => _231.MsgPinCodesAmino;
                    fromAmino: (object: _231.MsgPinCodesAmino) => _231.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _231.MsgUnpinCodes) => _231.MsgUnpinCodesAmino;
                    fromAmino: (object: _231.MsgUnpinCodesAmino) => _231.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _231.MsgStoreAndInstantiateContract) => _231.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _231.MsgStoreAndInstantiateContractAmino) => _231.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _231.MsgRemoveCodeUploadParamsAddresses) => _231.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _231.MsgRemoveCodeUploadParamsAddressesAmino) => _231.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _231.MsgAddCodeUploadParamsAddresses) => _231.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _231.MsgAddCodeUploadParamsAddressesAmino) => _231.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _231.MsgStoreAndMigrateContract) => _231.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _231.MsgStoreAndMigrateContractAmino) => _231.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _231.MsgUpdateContractLabel) => _231.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _231.MsgUpdateContractLabelAmino) => _231.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _232.AccessType;
            accessTypeToJSON(object: _232.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _232.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _232.ContractCodeHistoryOperationType): string;
            AccessType: typeof _232.AccessType;
            AccessTypeSDKType: typeof _232.AccessType;
            AccessTypeAmino: typeof _232.AccessType;
            ContractCodeHistoryOperationType: typeof _232.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _232.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _232.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _232.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.AccessTypeParam;
                fromPartial(object: Partial<_232.AccessTypeParam>): _232.AccessTypeParam;
                fromAmino(object: _232.AccessTypeParamAmino): _232.AccessTypeParam;
                toAmino(message: _232.AccessTypeParam): _232.AccessTypeParamAmino;
                fromAminoMsg(object: _232.AccessTypeParamAminoMsg): _232.AccessTypeParam;
                toAminoMsg(message: _232.AccessTypeParam): _232.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _232.AccessTypeParamProtoMsg): _232.AccessTypeParam;
                toProto(message: _232.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _232.AccessTypeParam): _232.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _232.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.AccessConfig;
                fromPartial(object: Partial<_232.AccessConfig>): _232.AccessConfig;
                fromAmino(object: _232.AccessConfigAmino): _232.AccessConfig;
                toAmino(message: _232.AccessConfig): _232.AccessConfigAmino;
                fromAminoMsg(object: _232.AccessConfigAminoMsg): _232.AccessConfig;
                toAminoMsg(message: _232.AccessConfig): _232.AccessConfigAminoMsg;
                fromProtoMsg(message: _232.AccessConfigProtoMsg): _232.AccessConfig;
                toProto(message: _232.AccessConfig): Uint8Array;
                toProtoMsg(message: _232.AccessConfig): _232.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _232.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.Params;
                fromPartial(object: Partial<_232.Params>): _232.Params;
                fromAmino(object: _232.ParamsAmino): _232.Params;
                toAmino(message: _232.Params): _232.ParamsAmino;
                fromAminoMsg(object: _232.ParamsAminoMsg): _232.Params;
                toAminoMsg(message: _232.Params): _232.ParamsAminoMsg;
                fromProtoMsg(message: _232.ParamsProtoMsg): _232.Params;
                toProto(message: _232.Params): Uint8Array;
                toProtoMsg(message: _232.Params): _232.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _232.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.CodeInfo;
                fromPartial(object: Partial<_232.CodeInfo>): _232.CodeInfo;
                fromAmino(object: _232.CodeInfoAmino): _232.CodeInfo;
                toAmino(message: _232.CodeInfo): _232.CodeInfoAmino;
                fromAminoMsg(object: _232.CodeInfoAminoMsg): _232.CodeInfo;
                toAminoMsg(message: _232.CodeInfo): _232.CodeInfoAminoMsg;
                fromProtoMsg(message: _232.CodeInfoProtoMsg): _232.CodeInfo;
                toProto(message: _232.CodeInfo): Uint8Array;
                toProtoMsg(message: _232.CodeInfo): _232.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _232.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.ContractInfo;
                fromPartial(object: Partial<_232.ContractInfo>): _232.ContractInfo;
                fromAmino(object: _232.ContractInfoAmino): _232.ContractInfo;
                toAmino(message: _232.ContractInfo): _232.ContractInfoAmino;
                fromAminoMsg(object: _232.ContractInfoAminoMsg): _232.ContractInfo;
                toAminoMsg(message: _232.ContractInfo): _232.ContractInfoAminoMsg;
                fromProtoMsg(message: _232.ContractInfoProtoMsg): _232.ContractInfo;
                toProto(message: _232.ContractInfo): Uint8Array;
                toProtoMsg(message: _232.ContractInfo): _232.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _232.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_232.ContractCodeHistoryEntry>): _232.ContractCodeHistoryEntry;
                fromAmino(object: _232.ContractCodeHistoryEntryAmino): _232.ContractCodeHistoryEntry;
                toAmino(message: _232.ContractCodeHistoryEntry): _232.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _232.ContractCodeHistoryEntryAminoMsg): _232.ContractCodeHistoryEntry;
                toAminoMsg(message: _232.ContractCodeHistoryEntry): _232.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _232.ContractCodeHistoryEntryProtoMsg): _232.ContractCodeHistoryEntry;
                toProto(message: _232.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _232.ContractCodeHistoryEntry): _232.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _232.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.AbsoluteTxPosition;
                fromPartial(object: Partial<_232.AbsoluteTxPosition>): _232.AbsoluteTxPosition;
                fromAmino(object: _232.AbsoluteTxPositionAmino): _232.AbsoluteTxPosition;
                toAmino(message: _232.AbsoluteTxPosition): _232.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _232.AbsoluteTxPositionAminoMsg): _232.AbsoluteTxPosition;
                toAminoMsg(message: _232.AbsoluteTxPosition): _232.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _232.AbsoluteTxPositionProtoMsg): _232.AbsoluteTxPosition;
                toProto(message: _232.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _232.AbsoluteTxPosition): _232.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _232.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _232.Model;
                fromPartial(object: Partial<_232.Model>): _232.Model;
                fromAmino(object: _232.ModelAmino): _232.Model;
                toAmino(message: _232.Model): _232.ModelAmino;
                fromAminoMsg(object: _232.ModelAminoMsg): _232.Model;
                toAminoMsg(message: _232.Model): _232.ModelAminoMsg;
                fromProtoMsg(message: _232.ModelProtoMsg): _232.Model;
                toProto(message: _232.Model): Uint8Array;
                toProtoMsg(message: _232.Model): _232.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _231.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgStoreCode;
                fromPartial(object: Partial<_231.MsgStoreCode>): _231.MsgStoreCode;
                fromAmino(object: _231.MsgStoreCodeAmino): _231.MsgStoreCode;
                toAmino(message: _231.MsgStoreCode): _231.MsgStoreCodeAmino;
                fromAminoMsg(object: _231.MsgStoreCodeAminoMsg): _231.MsgStoreCode;
                toAminoMsg(message: _231.MsgStoreCode): _231.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _231.MsgStoreCodeProtoMsg): _231.MsgStoreCode;
                toProto(message: _231.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _231.MsgStoreCode): _231.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _231.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgStoreCodeResponse;
                fromPartial(object: Partial<_231.MsgStoreCodeResponse>): _231.MsgStoreCodeResponse;
                fromAmino(object: _231.MsgStoreCodeResponseAmino): _231.MsgStoreCodeResponse;
                toAmino(message: _231.MsgStoreCodeResponse): _231.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _231.MsgStoreCodeResponseAminoMsg): _231.MsgStoreCodeResponse;
                toAminoMsg(message: _231.MsgStoreCodeResponse): _231.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _231.MsgStoreCodeResponseProtoMsg): _231.MsgStoreCodeResponse;
                toProto(message: _231.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _231.MsgStoreCodeResponse): _231.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _231.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgInstantiateContract;
                fromPartial(object: Partial<_231.MsgInstantiateContract>): _231.MsgInstantiateContract;
                fromAmino(object: _231.MsgInstantiateContractAmino): _231.MsgInstantiateContract;
                toAmino(message: _231.MsgInstantiateContract): _231.MsgInstantiateContractAmino;
                fromAminoMsg(object: _231.MsgInstantiateContractAminoMsg): _231.MsgInstantiateContract;
                toAminoMsg(message: _231.MsgInstantiateContract): _231.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _231.MsgInstantiateContractProtoMsg): _231.MsgInstantiateContract;
                toProto(message: _231.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _231.MsgInstantiateContract): _231.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _231.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_231.MsgInstantiateContractResponse>): _231.MsgInstantiateContractResponse;
                fromAmino(object: _231.MsgInstantiateContractResponseAmino): _231.MsgInstantiateContractResponse;
                toAmino(message: _231.MsgInstantiateContractResponse): _231.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _231.MsgInstantiateContractResponseAminoMsg): _231.MsgInstantiateContractResponse;
                toAminoMsg(message: _231.MsgInstantiateContractResponse): _231.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _231.MsgInstantiateContractResponseProtoMsg): _231.MsgInstantiateContractResponse;
                toProto(message: _231.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _231.MsgInstantiateContractResponse): _231.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _231.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgInstantiateContract2;
                fromPartial(object: Partial<_231.MsgInstantiateContract2>): _231.MsgInstantiateContract2;
                fromAmino(object: _231.MsgInstantiateContract2Amino): _231.MsgInstantiateContract2;
                toAmino(message: _231.MsgInstantiateContract2): _231.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _231.MsgInstantiateContract2AminoMsg): _231.MsgInstantiateContract2;
                toAminoMsg(message: _231.MsgInstantiateContract2): _231.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _231.MsgInstantiateContract2ProtoMsg): _231.MsgInstantiateContract2;
                toProto(message: _231.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _231.MsgInstantiateContract2): _231.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _231.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_231.MsgInstantiateContract2Response>): _231.MsgInstantiateContract2Response;
                fromAmino(object: _231.MsgInstantiateContract2ResponseAmino): _231.MsgInstantiateContract2Response;
                toAmino(message: _231.MsgInstantiateContract2Response): _231.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _231.MsgInstantiateContract2ResponseAminoMsg): _231.MsgInstantiateContract2Response;
                toAminoMsg(message: _231.MsgInstantiateContract2Response): _231.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _231.MsgInstantiateContract2ResponseProtoMsg): _231.MsgInstantiateContract2Response;
                toProto(message: _231.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _231.MsgInstantiateContract2Response): _231.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _231.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgExecuteContract;
                fromPartial(object: Partial<_231.MsgExecuteContract>): _231.MsgExecuteContract;
                fromAmino(object: _231.MsgExecuteContractAmino): _231.MsgExecuteContract;
                toAmino(message: _231.MsgExecuteContract): _231.MsgExecuteContractAmino;
                fromAminoMsg(object: _231.MsgExecuteContractAminoMsg): _231.MsgExecuteContract;
                toAminoMsg(message: _231.MsgExecuteContract): _231.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _231.MsgExecuteContractProtoMsg): _231.MsgExecuteContract;
                toProto(message: _231.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _231.MsgExecuteContract): _231.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _231.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgExecuteContractResponse;
                fromPartial(object: Partial<_231.MsgExecuteContractResponse>): _231.MsgExecuteContractResponse;
                fromAmino(object: _231.MsgExecuteContractResponseAmino): _231.MsgExecuteContractResponse;
                toAmino(message: _231.MsgExecuteContractResponse): _231.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _231.MsgExecuteContractResponseAminoMsg): _231.MsgExecuteContractResponse;
                toAminoMsg(message: _231.MsgExecuteContractResponse): _231.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _231.MsgExecuteContractResponseProtoMsg): _231.MsgExecuteContractResponse;
                toProto(message: _231.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _231.MsgExecuteContractResponse): _231.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _231.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgMigrateContract;
                fromPartial(object: Partial<_231.MsgMigrateContract>): _231.MsgMigrateContract;
                fromAmino(object: _231.MsgMigrateContractAmino): _231.MsgMigrateContract;
                toAmino(message: _231.MsgMigrateContract): _231.MsgMigrateContractAmino;
                fromAminoMsg(object: _231.MsgMigrateContractAminoMsg): _231.MsgMigrateContract;
                toAminoMsg(message: _231.MsgMigrateContract): _231.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _231.MsgMigrateContractProtoMsg): _231.MsgMigrateContract;
                toProto(message: _231.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _231.MsgMigrateContract): _231.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _231.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgMigrateContractResponse;
                fromPartial(object: Partial<_231.MsgMigrateContractResponse>): _231.MsgMigrateContractResponse;
                fromAmino(object: _231.MsgMigrateContractResponseAmino): _231.MsgMigrateContractResponse;
                toAmino(message: _231.MsgMigrateContractResponse): _231.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _231.MsgMigrateContractResponseAminoMsg): _231.MsgMigrateContractResponse;
                toAminoMsg(message: _231.MsgMigrateContractResponse): _231.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _231.MsgMigrateContractResponseProtoMsg): _231.MsgMigrateContractResponse;
                toProto(message: _231.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _231.MsgMigrateContractResponse): _231.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _231.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgUpdateAdmin;
                fromPartial(object: Partial<_231.MsgUpdateAdmin>): _231.MsgUpdateAdmin;
                fromAmino(object: _231.MsgUpdateAdminAmino): _231.MsgUpdateAdmin;
                toAmino(message: _231.MsgUpdateAdmin): _231.MsgUpdateAdminAmino;
                fromAminoMsg(object: _231.MsgUpdateAdminAminoMsg): _231.MsgUpdateAdmin;
                toAminoMsg(message: _231.MsgUpdateAdmin): _231.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateAdminProtoMsg): _231.MsgUpdateAdmin;
                toProto(message: _231.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateAdmin): _231.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _231.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_231.MsgUpdateAdminResponse>): _231.MsgUpdateAdminResponse;
                fromAmino(_: _231.MsgUpdateAdminResponseAmino): _231.MsgUpdateAdminResponse;
                toAmino(_: _231.MsgUpdateAdminResponse): _231.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _231.MsgUpdateAdminResponseAminoMsg): _231.MsgUpdateAdminResponse;
                toAminoMsg(message: _231.MsgUpdateAdminResponse): _231.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateAdminResponseProtoMsg): _231.MsgUpdateAdminResponse;
                toProto(message: _231.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateAdminResponse): _231.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _231.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgClearAdmin;
                fromPartial(object: Partial<_231.MsgClearAdmin>): _231.MsgClearAdmin;
                fromAmino(object: _231.MsgClearAdminAmino): _231.MsgClearAdmin;
                toAmino(message: _231.MsgClearAdmin): _231.MsgClearAdminAmino;
                fromAminoMsg(object: _231.MsgClearAdminAminoMsg): _231.MsgClearAdmin;
                toAminoMsg(message: _231.MsgClearAdmin): _231.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _231.MsgClearAdminProtoMsg): _231.MsgClearAdmin;
                toProto(message: _231.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _231.MsgClearAdmin): _231.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _231.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgClearAdminResponse;
                fromPartial(_: Partial<_231.MsgClearAdminResponse>): _231.MsgClearAdminResponse;
                fromAmino(_: _231.MsgClearAdminResponseAmino): _231.MsgClearAdminResponse;
                toAmino(_: _231.MsgClearAdminResponse): _231.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _231.MsgClearAdminResponseAminoMsg): _231.MsgClearAdminResponse;
                toAminoMsg(message: _231.MsgClearAdminResponse): _231.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _231.MsgClearAdminResponseProtoMsg): _231.MsgClearAdminResponse;
                toProto(message: _231.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _231.MsgClearAdminResponse): _231.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _231.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_231.MsgUpdateInstantiateConfig>): _231.MsgUpdateInstantiateConfig;
                fromAmino(object: _231.MsgUpdateInstantiateConfigAmino): _231.MsgUpdateInstantiateConfig;
                toAmino(message: _231.MsgUpdateInstantiateConfig): _231.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _231.MsgUpdateInstantiateConfigAminoMsg): _231.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _231.MsgUpdateInstantiateConfig): _231.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateInstantiateConfigProtoMsg): _231.MsgUpdateInstantiateConfig;
                toProto(message: _231.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateInstantiateConfig): _231.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _231.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_231.MsgUpdateInstantiateConfigResponse>): _231.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _231.MsgUpdateInstantiateConfigResponseAmino): _231.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _231.MsgUpdateInstantiateConfigResponse): _231.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _231.MsgUpdateInstantiateConfigResponseAminoMsg): _231.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _231.MsgUpdateInstantiateConfigResponse): _231.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateInstantiateConfigResponseProtoMsg): _231.MsgUpdateInstantiateConfigResponse;
                toProto(message: _231.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateInstantiateConfigResponse): _231.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _231.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgUpdateParams;
                fromPartial(object: Partial<_231.MsgUpdateParams>): _231.MsgUpdateParams;
                fromAmino(object: _231.MsgUpdateParamsAmino): _231.MsgUpdateParams;
                toAmino(message: _231.MsgUpdateParams): _231.MsgUpdateParamsAmino;
                fromAminoMsg(object: _231.MsgUpdateParamsAminoMsg): _231.MsgUpdateParams;
                toAminoMsg(message: _231.MsgUpdateParams): _231.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateParamsProtoMsg): _231.MsgUpdateParams;
                toProto(message: _231.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateParams): _231.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _231.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_231.MsgUpdateParamsResponse>): _231.MsgUpdateParamsResponse;
                fromAmino(_: _231.MsgUpdateParamsResponseAmino): _231.MsgUpdateParamsResponse;
                toAmino(_: _231.MsgUpdateParamsResponse): _231.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _231.MsgUpdateParamsResponseAminoMsg): _231.MsgUpdateParamsResponse;
                toAminoMsg(message: _231.MsgUpdateParamsResponse): _231.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateParamsResponseProtoMsg): _231.MsgUpdateParamsResponse;
                toProto(message: _231.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateParamsResponse): _231.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _231.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgSudoContract;
                fromPartial(object: Partial<_231.MsgSudoContract>): _231.MsgSudoContract;
                fromAmino(object: _231.MsgSudoContractAmino): _231.MsgSudoContract;
                toAmino(message: _231.MsgSudoContract): _231.MsgSudoContractAmino;
                fromAminoMsg(object: _231.MsgSudoContractAminoMsg): _231.MsgSudoContract;
                toAminoMsg(message: _231.MsgSudoContract): _231.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _231.MsgSudoContractProtoMsg): _231.MsgSudoContract;
                toProto(message: _231.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _231.MsgSudoContract): _231.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _231.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgSudoContractResponse;
                fromPartial(object: Partial<_231.MsgSudoContractResponse>): _231.MsgSudoContractResponse;
                fromAmino(object: _231.MsgSudoContractResponseAmino): _231.MsgSudoContractResponse;
                toAmino(message: _231.MsgSudoContractResponse): _231.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _231.MsgSudoContractResponseAminoMsg): _231.MsgSudoContractResponse;
                toAminoMsg(message: _231.MsgSudoContractResponse): _231.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _231.MsgSudoContractResponseProtoMsg): _231.MsgSudoContractResponse;
                toProto(message: _231.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _231.MsgSudoContractResponse): _231.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _231.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgPinCodes;
                fromPartial(object: Partial<_231.MsgPinCodes>): _231.MsgPinCodes;
                fromAmino(object: _231.MsgPinCodesAmino): _231.MsgPinCodes;
                toAmino(message: _231.MsgPinCodes): _231.MsgPinCodesAmino;
                fromAminoMsg(object: _231.MsgPinCodesAminoMsg): _231.MsgPinCodes;
                toAminoMsg(message: _231.MsgPinCodes): _231.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _231.MsgPinCodesProtoMsg): _231.MsgPinCodes;
                toProto(message: _231.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _231.MsgPinCodes): _231.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _231.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgPinCodesResponse;
                fromPartial(_: Partial<_231.MsgPinCodesResponse>): _231.MsgPinCodesResponse;
                fromAmino(_: _231.MsgPinCodesResponseAmino): _231.MsgPinCodesResponse;
                toAmino(_: _231.MsgPinCodesResponse): _231.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _231.MsgPinCodesResponseAminoMsg): _231.MsgPinCodesResponse;
                toAminoMsg(message: _231.MsgPinCodesResponse): _231.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _231.MsgPinCodesResponseProtoMsg): _231.MsgPinCodesResponse;
                toProto(message: _231.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _231.MsgPinCodesResponse): _231.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _231.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgUnpinCodes;
                fromPartial(object: Partial<_231.MsgUnpinCodes>): _231.MsgUnpinCodes;
                fromAmino(object: _231.MsgUnpinCodesAmino): _231.MsgUnpinCodes;
                toAmino(message: _231.MsgUnpinCodes): _231.MsgUnpinCodesAmino;
                fromAminoMsg(object: _231.MsgUnpinCodesAminoMsg): _231.MsgUnpinCodes;
                toAminoMsg(message: _231.MsgUnpinCodes): _231.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _231.MsgUnpinCodesProtoMsg): _231.MsgUnpinCodes;
                toProto(message: _231.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _231.MsgUnpinCodes): _231.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _231.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_231.MsgUnpinCodesResponse>): _231.MsgUnpinCodesResponse;
                fromAmino(_: _231.MsgUnpinCodesResponseAmino): _231.MsgUnpinCodesResponse;
                toAmino(_: _231.MsgUnpinCodesResponse): _231.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _231.MsgUnpinCodesResponseAminoMsg): _231.MsgUnpinCodesResponse;
                toAminoMsg(message: _231.MsgUnpinCodesResponse): _231.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _231.MsgUnpinCodesResponseProtoMsg): _231.MsgUnpinCodesResponse;
                toProto(message: _231.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _231.MsgUnpinCodesResponse): _231.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _231.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_231.MsgStoreAndInstantiateContract>): _231.MsgStoreAndInstantiateContract;
                fromAmino(object: _231.MsgStoreAndInstantiateContractAmino): _231.MsgStoreAndInstantiateContract;
                toAmino(message: _231.MsgStoreAndInstantiateContract): _231.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _231.MsgStoreAndInstantiateContractAminoMsg): _231.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _231.MsgStoreAndInstantiateContract): _231.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _231.MsgStoreAndInstantiateContractProtoMsg): _231.MsgStoreAndInstantiateContract;
                toProto(message: _231.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _231.MsgStoreAndInstantiateContract): _231.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _231.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_231.MsgStoreAndInstantiateContractResponse>): _231.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _231.MsgStoreAndInstantiateContractResponseAmino): _231.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _231.MsgStoreAndInstantiateContractResponse): _231.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _231.MsgStoreAndInstantiateContractResponseAminoMsg): _231.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _231.MsgStoreAndInstantiateContractResponse): _231.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _231.MsgStoreAndInstantiateContractResponseProtoMsg): _231.MsgStoreAndInstantiateContractResponse;
                toProto(message: _231.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _231.MsgStoreAndInstantiateContractResponse): _231.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _231.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_231.MsgAddCodeUploadParamsAddresses>): _231.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _231.MsgAddCodeUploadParamsAddressesAmino): _231.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _231.MsgAddCodeUploadParamsAddresses): _231.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _231.MsgAddCodeUploadParamsAddressesAminoMsg): _231.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _231.MsgAddCodeUploadParamsAddresses): _231.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _231.MsgAddCodeUploadParamsAddressesProtoMsg): _231.MsgAddCodeUploadParamsAddresses;
                toProto(message: _231.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _231.MsgAddCodeUploadParamsAddresses): _231.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _231.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_231.MsgAddCodeUploadParamsAddressesResponse>): _231.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _231.MsgAddCodeUploadParamsAddressesResponseAmino): _231.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _231.MsgAddCodeUploadParamsAddressesResponse): _231.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _231.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _231.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _231.MsgAddCodeUploadParamsAddressesResponse): _231.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _231.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _231.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _231.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _231.MsgAddCodeUploadParamsAddressesResponse): _231.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _231.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_231.MsgRemoveCodeUploadParamsAddresses>): _231.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _231.MsgRemoveCodeUploadParamsAddressesAmino): _231.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _231.MsgRemoveCodeUploadParamsAddresses): _231.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _231.MsgRemoveCodeUploadParamsAddressesAminoMsg): _231.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _231.MsgRemoveCodeUploadParamsAddresses): _231.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _231.MsgRemoveCodeUploadParamsAddressesProtoMsg): _231.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _231.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _231.MsgRemoveCodeUploadParamsAddresses): _231.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _231.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_231.MsgRemoveCodeUploadParamsAddressesResponse>): _231.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _231.MsgRemoveCodeUploadParamsAddressesResponseAmino): _231.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _231.MsgRemoveCodeUploadParamsAddressesResponse): _231.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _231.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _231.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _231.MsgRemoveCodeUploadParamsAddressesResponse): _231.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _231.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _231.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _231.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _231.MsgRemoveCodeUploadParamsAddressesResponse): _231.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _231.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_231.MsgStoreAndMigrateContract>): _231.MsgStoreAndMigrateContract;
                fromAmino(object: _231.MsgStoreAndMigrateContractAmino): _231.MsgStoreAndMigrateContract;
                toAmino(message: _231.MsgStoreAndMigrateContract): _231.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _231.MsgStoreAndMigrateContractAminoMsg): _231.MsgStoreAndMigrateContract;
                toAminoMsg(message: _231.MsgStoreAndMigrateContract): _231.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _231.MsgStoreAndMigrateContractProtoMsg): _231.MsgStoreAndMigrateContract;
                toProto(message: _231.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _231.MsgStoreAndMigrateContract): _231.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _231.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_231.MsgStoreAndMigrateContractResponse>): _231.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _231.MsgStoreAndMigrateContractResponseAmino): _231.MsgStoreAndMigrateContractResponse;
                toAmino(message: _231.MsgStoreAndMigrateContractResponse): _231.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _231.MsgStoreAndMigrateContractResponseAminoMsg): _231.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _231.MsgStoreAndMigrateContractResponse): _231.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _231.MsgStoreAndMigrateContractResponseProtoMsg): _231.MsgStoreAndMigrateContractResponse;
                toProto(message: _231.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _231.MsgStoreAndMigrateContractResponse): _231.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _231.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _231.MsgUpdateContractLabel;
                fromPartial(object: Partial<_231.MsgUpdateContractLabel>): _231.MsgUpdateContractLabel;
                fromAmino(object: _231.MsgUpdateContractLabelAmino): _231.MsgUpdateContractLabel;
                toAmino(message: _231.MsgUpdateContractLabel): _231.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _231.MsgUpdateContractLabelAminoMsg): _231.MsgUpdateContractLabel;
                toAminoMsg(message: _231.MsgUpdateContractLabel): _231.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateContractLabelProtoMsg): _231.MsgUpdateContractLabel;
                toProto(message: _231.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateContractLabel): _231.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _231.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _231.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_231.MsgUpdateContractLabelResponse>): _231.MsgUpdateContractLabelResponse;
                fromAmino(_: _231.MsgUpdateContractLabelResponseAmino): _231.MsgUpdateContractLabelResponse;
                toAmino(_: _231.MsgUpdateContractLabelResponse): _231.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _231.MsgUpdateContractLabelResponseAminoMsg): _231.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _231.MsgUpdateContractLabelResponse): _231.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _231.MsgUpdateContractLabelResponseProtoMsg): _231.MsgUpdateContractLabelResponse;
                toProto(message: _231.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _231.MsgUpdateContractLabelResponse): _231.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _230.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractInfoRequest;
                fromPartial(object: Partial<_230.QueryContractInfoRequest>): _230.QueryContractInfoRequest;
                fromAmino(object: _230.QueryContractInfoRequestAmino): _230.QueryContractInfoRequest;
                toAmino(message: _230.QueryContractInfoRequest): _230.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _230.QueryContractInfoRequestAminoMsg): _230.QueryContractInfoRequest;
                toAminoMsg(message: _230.QueryContractInfoRequest): _230.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _230.QueryContractInfoRequestProtoMsg): _230.QueryContractInfoRequest;
                toProto(message: _230.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _230.QueryContractInfoRequest): _230.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _230.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractInfoResponse;
                fromPartial(object: Partial<_230.QueryContractInfoResponse>): _230.QueryContractInfoResponse;
                fromAmino(object: _230.QueryContractInfoResponseAmino): _230.QueryContractInfoResponse;
                toAmino(message: _230.QueryContractInfoResponse): _230.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _230.QueryContractInfoResponseAminoMsg): _230.QueryContractInfoResponse;
                toAminoMsg(message: _230.QueryContractInfoResponse): _230.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _230.QueryContractInfoResponseProtoMsg): _230.QueryContractInfoResponse;
                toProto(message: _230.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _230.QueryContractInfoResponse): _230.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _230.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractHistoryRequest;
                fromPartial(object: Partial<_230.QueryContractHistoryRequest>): _230.QueryContractHistoryRequest;
                fromAmino(object: _230.QueryContractHistoryRequestAmino): _230.QueryContractHistoryRequest;
                toAmino(message: _230.QueryContractHistoryRequest): _230.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _230.QueryContractHistoryRequestAminoMsg): _230.QueryContractHistoryRequest;
                toAminoMsg(message: _230.QueryContractHistoryRequest): _230.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _230.QueryContractHistoryRequestProtoMsg): _230.QueryContractHistoryRequest;
                toProto(message: _230.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _230.QueryContractHistoryRequest): _230.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _230.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractHistoryResponse;
                fromPartial(object: Partial<_230.QueryContractHistoryResponse>): _230.QueryContractHistoryResponse;
                fromAmino(object: _230.QueryContractHistoryResponseAmino): _230.QueryContractHistoryResponse;
                toAmino(message: _230.QueryContractHistoryResponse): _230.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _230.QueryContractHistoryResponseAminoMsg): _230.QueryContractHistoryResponse;
                toAminoMsg(message: _230.QueryContractHistoryResponse): _230.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _230.QueryContractHistoryResponseProtoMsg): _230.QueryContractHistoryResponse;
                toProto(message: _230.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _230.QueryContractHistoryResponse): _230.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _230.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_230.QueryContractsByCodeRequest>): _230.QueryContractsByCodeRequest;
                fromAmino(object: _230.QueryContractsByCodeRequestAmino): _230.QueryContractsByCodeRequest;
                toAmino(message: _230.QueryContractsByCodeRequest): _230.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _230.QueryContractsByCodeRequestAminoMsg): _230.QueryContractsByCodeRequest;
                toAminoMsg(message: _230.QueryContractsByCodeRequest): _230.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _230.QueryContractsByCodeRequestProtoMsg): _230.QueryContractsByCodeRequest;
                toProto(message: _230.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _230.QueryContractsByCodeRequest): _230.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _230.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_230.QueryContractsByCodeResponse>): _230.QueryContractsByCodeResponse;
                fromAmino(object: _230.QueryContractsByCodeResponseAmino): _230.QueryContractsByCodeResponse;
                toAmino(message: _230.QueryContractsByCodeResponse): _230.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _230.QueryContractsByCodeResponseAminoMsg): _230.QueryContractsByCodeResponse;
                toAminoMsg(message: _230.QueryContractsByCodeResponse): _230.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _230.QueryContractsByCodeResponseProtoMsg): _230.QueryContractsByCodeResponse;
                toProto(message: _230.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _230.QueryContractsByCodeResponse): _230.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _230.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryAllContractStateRequest;
                fromPartial(object: Partial<_230.QueryAllContractStateRequest>): _230.QueryAllContractStateRequest;
                fromAmino(object: _230.QueryAllContractStateRequestAmino): _230.QueryAllContractStateRequest;
                toAmino(message: _230.QueryAllContractStateRequest): _230.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _230.QueryAllContractStateRequestAminoMsg): _230.QueryAllContractStateRequest;
                toAminoMsg(message: _230.QueryAllContractStateRequest): _230.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _230.QueryAllContractStateRequestProtoMsg): _230.QueryAllContractStateRequest;
                toProto(message: _230.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _230.QueryAllContractStateRequest): _230.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _230.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryAllContractStateResponse;
                fromPartial(object: Partial<_230.QueryAllContractStateResponse>): _230.QueryAllContractStateResponse;
                fromAmino(object: _230.QueryAllContractStateResponseAmino): _230.QueryAllContractStateResponse;
                toAmino(message: _230.QueryAllContractStateResponse): _230.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _230.QueryAllContractStateResponseAminoMsg): _230.QueryAllContractStateResponse;
                toAminoMsg(message: _230.QueryAllContractStateResponse): _230.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _230.QueryAllContractStateResponseProtoMsg): _230.QueryAllContractStateResponse;
                toProto(message: _230.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _230.QueryAllContractStateResponse): _230.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _230.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryRawContractStateRequest;
                fromPartial(object: Partial<_230.QueryRawContractStateRequest>): _230.QueryRawContractStateRequest;
                fromAmino(object: _230.QueryRawContractStateRequestAmino): _230.QueryRawContractStateRequest;
                toAmino(message: _230.QueryRawContractStateRequest): _230.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _230.QueryRawContractStateRequestAminoMsg): _230.QueryRawContractStateRequest;
                toAminoMsg(message: _230.QueryRawContractStateRequest): _230.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _230.QueryRawContractStateRequestProtoMsg): _230.QueryRawContractStateRequest;
                toProto(message: _230.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _230.QueryRawContractStateRequest): _230.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _230.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryRawContractStateResponse;
                fromPartial(object: Partial<_230.QueryRawContractStateResponse>): _230.QueryRawContractStateResponse;
                fromAmino(object: _230.QueryRawContractStateResponseAmino): _230.QueryRawContractStateResponse;
                toAmino(message: _230.QueryRawContractStateResponse): _230.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _230.QueryRawContractStateResponseAminoMsg): _230.QueryRawContractStateResponse;
                toAminoMsg(message: _230.QueryRawContractStateResponse): _230.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _230.QueryRawContractStateResponseProtoMsg): _230.QueryRawContractStateResponse;
                toProto(message: _230.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _230.QueryRawContractStateResponse): _230.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _230.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_230.QuerySmartContractStateRequest>): _230.QuerySmartContractStateRequest;
                fromAmino(object: _230.QuerySmartContractStateRequestAmino): _230.QuerySmartContractStateRequest;
                toAmino(message: _230.QuerySmartContractStateRequest): _230.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _230.QuerySmartContractStateRequestAminoMsg): _230.QuerySmartContractStateRequest;
                toAminoMsg(message: _230.QuerySmartContractStateRequest): _230.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _230.QuerySmartContractStateRequestProtoMsg): _230.QuerySmartContractStateRequest;
                toProto(message: _230.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _230.QuerySmartContractStateRequest): _230.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _230.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_230.QuerySmartContractStateResponse>): _230.QuerySmartContractStateResponse;
                fromAmino(object: _230.QuerySmartContractStateResponseAmino): _230.QuerySmartContractStateResponse;
                toAmino(message: _230.QuerySmartContractStateResponse): _230.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _230.QuerySmartContractStateResponseAminoMsg): _230.QuerySmartContractStateResponse;
                toAminoMsg(message: _230.QuerySmartContractStateResponse): _230.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _230.QuerySmartContractStateResponseProtoMsg): _230.QuerySmartContractStateResponse;
                toProto(message: _230.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _230.QuerySmartContractStateResponse): _230.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _230.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryCodeRequest;
                fromPartial(object: Partial<_230.QueryCodeRequest>): _230.QueryCodeRequest;
                fromAmino(object: _230.QueryCodeRequestAmino): _230.QueryCodeRequest;
                toAmino(message: _230.QueryCodeRequest): _230.QueryCodeRequestAmino;
                fromAminoMsg(object: _230.QueryCodeRequestAminoMsg): _230.QueryCodeRequest;
                toAminoMsg(message: _230.QueryCodeRequest): _230.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _230.QueryCodeRequestProtoMsg): _230.QueryCodeRequest;
                toProto(message: _230.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _230.QueryCodeRequest): _230.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _230.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.CodeInfoResponse;
                fromPartial(object: Partial<_230.CodeInfoResponse>): _230.CodeInfoResponse;
                fromAmino(object: _230.CodeInfoResponseAmino): _230.CodeInfoResponse;
                toAmino(message: _230.CodeInfoResponse): _230.CodeInfoResponseAmino;
                fromAminoMsg(object: _230.CodeInfoResponseAminoMsg): _230.CodeInfoResponse;
                toAminoMsg(message: _230.CodeInfoResponse): _230.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _230.CodeInfoResponseProtoMsg): _230.CodeInfoResponse;
                toProto(message: _230.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _230.CodeInfoResponse): _230.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _230.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryCodeResponse;
                fromPartial(object: Partial<_230.QueryCodeResponse>): _230.QueryCodeResponse;
                fromAmino(object: _230.QueryCodeResponseAmino): _230.QueryCodeResponse;
                toAmino(message: _230.QueryCodeResponse): _230.QueryCodeResponseAmino;
                fromAminoMsg(object: _230.QueryCodeResponseAminoMsg): _230.QueryCodeResponse;
                toAminoMsg(message: _230.QueryCodeResponse): _230.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _230.QueryCodeResponseProtoMsg): _230.QueryCodeResponse;
                toProto(message: _230.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _230.QueryCodeResponse): _230.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _230.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryCodesRequest;
                fromPartial(object: Partial<_230.QueryCodesRequest>): _230.QueryCodesRequest;
                fromAmino(object: _230.QueryCodesRequestAmino): _230.QueryCodesRequest;
                toAmino(message: _230.QueryCodesRequest): _230.QueryCodesRequestAmino;
                fromAminoMsg(object: _230.QueryCodesRequestAminoMsg): _230.QueryCodesRequest;
                toAminoMsg(message: _230.QueryCodesRequest): _230.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _230.QueryCodesRequestProtoMsg): _230.QueryCodesRequest;
                toProto(message: _230.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _230.QueryCodesRequest): _230.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _230.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryCodesResponse;
                fromPartial(object: Partial<_230.QueryCodesResponse>): _230.QueryCodesResponse;
                fromAmino(object: _230.QueryCodesResponseAmino): _230.QueryCodesResponse;
                toAmino(message: _230.QueryCodesResponse): _230.QueryCodesResponseAmino;
                fromAminoMsg(object: _230.QueryCodesResponseAminoMsg): _230.QueryCodesResponse;
                toAminoMsg(message: _230.QueryCodesResponse): _230.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _230.QueryCodesResponseProtoMsg): _230.QueryCodesResponse;
                toProto(message: _230.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _230.QueryCodesResponse): _230.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _230.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_230.QueryPinnedCodesRequest>): _230.QueryPinnedCodesRequest;
                fromAmino(object: _230.QueryPinnedCodesRequestAmino): _230.QueryPinnedCodesRequest;
                toAmino(message: _230.QueryPinnedCodesRequest): _230.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _230.QueryPinnedCodesRequestAminoMsg): _230.QueryPinnedCodesRequest;
                toAminoMsg(message: _230.QueryPinnedCodesRequest): _230.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _230.QueryPinnedCodesRequestProtoMsg): _230.QueryPinnedCodesRequest;
                toProto(message: _230.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _230.QueryPinnedCodesRequest): _230.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _230.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_230.QueryPinnedCodesResponse>): _230.QueryPinnedCodesResponse;
                fromAmino(object: _230.QueryPinnedCodesResponseAmino): _230.QueryPinnedCodesResponse;
                toAmino(message: _230.QueryPinnedCodesResponse): _230.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _230.QueryPinnedCodesResponseAminoMsg): _230.QueryPinnedCodesResponse;
                toAminoMsg(message: _230.QueryPinnedCodesResponse): _230.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _230.QueryPinnedCodesResponseProtoMsg): _230.QueryPinnedCodesResponse;
                toProto(message: _230.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _230.QueryPinnedCodesResponse): _230.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _230.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _230.QueryParamsRequest;
                fromPartial(_: Partial<_230.QueryParamsRequest>): _230.QueryParamsRequest;
                fromAmino(_: _230.QueryParamsRequestAmino): _230.QueryParamsRequest;
                toAmino(_: _230.QueryParamsRequest): _230.QueryParamsRequestAmino;
                fromAminoMsg(object: _230.QueryParamsRequestAminoMsg): _230.QueryParamsRequest;
                toAminoMsg(message: _230.QueryParamsRequest): _230.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _230.QueryParamsRequestProtoMsg): _230.QueryParamsRequest;
                toProto(message: _230.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _230.QueryParamsRequest): _230.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _230.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryParamsResponse;
                fromPartial(object: Partial<_230.QueryParamsResponse>): _230.QueryParamsResponse;
                fromAmino(object: _230.QueryParamsResponseAmino): _230.QueryParamsResponse;
                toAmino(message: _230.QueryParamsResponse): _230.QueryParamsResponseAmino;
                fromAminoMsg(object: _230.QueryParamsResponseAminoMsg): _230.QueryParamsResponse;
                toAminoMsg(message: _230.QueryParamsResponse): _230.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _230.QueryParamsResponseProtoMsg): _230.QueryParamsResponse;
                toProto(message: _230.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _230.QueryParamsResponse): _230.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _230.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_230.QueryContractsByCreatorRequest>): _230.QueryContractsByCreatorRequest;
                fromAmino(object: _230.QueryContractsByCreatorRequestAmino): _230.QueryContractsByCreatorRequest;
                toAmino(message: _230.QueryContractsByCreatorRequest): _230.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _230.QueryContractsByCreatorRequestAminoMsg): _230.QueryContractsByCreatorRequest;
                toAminoMsg(message: _230.QueryContractsByCreatorRequest): _230.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _230.QueryContractsByCreatorRequestProtoMsg): _230.QueryContractsByCreatorRequest;
                toProto(message: _230.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _230.QueryContractsByCreatorRequest): _230.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _230.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _230.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_230.QueryContractsByCreatorResponse>): _230.QueryContractsByCreatorResponse;
                fromAmino(object: _230.QueryContractsByCreatorResponseAmino): _230.QueryContractsByCreatorResponse;
                toAmino(message: _230.QueryContractsByCreatorResponse): _230.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _230.QueryContractsByCreatorResponseAminoMsg): _230.QueryContractsByCreatorResponse;
                toAminoMsg(message: _230.QueryContractsByCreatorResponse): _230.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _230.QueryContractsByCreatorResponseProtoMsg): _230.QueryContractsByCreatorResponse;
                toProto(message: _230.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _230.QueryContractsByCreatorResponse): _230.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _229.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.StoreCodeProposal;
                fromPartial(object: Partial<_229.StoreCodeProposal>): _229.StoreCodeProposal;
                fromAmino(object: _229.StoreCodeProposalAmino): _229.StoreCodeProposal;
                toAmino(message: _229.StoreCodeProposal): _229.StoreCodeProposalAmino;
                fromAminoMsg(object: _229.StoreCodeProposalAminoMsg): _229.StoreCodeProposal;
                toAminoMsg(message: _229.StoreCodeProposal): _229.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _229.StoreCodeProposalProtoMsg): _229.StoreCodeProposal;
                toProto(message: _229.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _229.StoreCodeProposal): _229.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _229.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.InstantiateContractProposal;
                fromPartial(object: Partial<_229.InstantiateContractProposal>): _229.InstantiateContractProposal;
                fromAmino(object: _229.InstantiateContractProposalAmino): _229.InstantiateContractProposal;
                toAmino(message: _229.InstantiateContractProposal): _229.InstantiateContractProposalAmino;
                fromAminoMsg(object: _229.InstantiateContractProposalAminoMsg): _229.InstantiateContractProposal;
                toAminoMsg(message: _229.InstantiateContractProposal): _229.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _229.InstantiateContractProposalProtoMsg): _229.InstantiateContractProposal;
                toProto(message: _229.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _229.InstantiateContractProposal): _229.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _229.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.InstantiateContract2Proposal;
                fromPartial(object: Partial<_229.InstantiateContract2Proposal>): _229.InstantiateContract2Proposal;
                fromAmino(object: _229.InstantiateContract2ProposalAmino): _229.InstantiateContract2Proposal;
                toAmino(message: _229.InstantiateContract2Proposal): _229.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _229.InstantiateContract2ProposalAminoMsg): _229.InstantiateContract2Proposal;
                toAminoMsg(message: _229.InstantiateContract2Proposal): _229.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _229.InstantiateContract2ProposalProtoMsg): _229.InstantiateContract2Proposal;
                toProto(message: _229.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _229.InstantiateContract2Proposal): _229.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _229.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.MigrateContractProposal;
                fromPartial(object: Partial<_229.MigrateContractProposal>): _229.MigrateContractProposal;
                fromAmino(object: _229.MigrateContractProposalAmino): _229.MigrateContractProposal;
                toAmino(message: _229.MigrateContractProposal): _229.MigrateContractProposalAmino;
                fromAminoMsg(object: _229.MigrateContractProposalAminoMsg): _229.MigrateContractProposal;
                toAminoMsg(message: _229.MigrateContractProposal): _229.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _229.MigrateContractProposalProtoMsg): _229.MigrateContractProposal;
                toProto(message: _229.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _229.MigrateContractProposal): _229.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _229.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.SudoContractProposal;
                fromPartial(object: Partial<_229.SudoContractProposal>): _229.SudoContractProposal;
                fromAmino(object: _229.SudoContractProposalAmino): _229.SudoContractProposal;
                toAmino(message: _229.SudoContractProposal): _229.SudoContractProposalAmino;
                fromAminoMsg(object: _229.SudoContractProposalAminoMsg): _229.SudoContractProposal;
                toAminoMsg(message: _229.SudoContractProposal): _229.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _229.SudoContractProposalProtoMsg): _229.SudoContractProposal;
                toProto(message: _229.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _229.SudoContractProposal): _229.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _229.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.ExecuteContractProposal;
                fromPartial(object: Partial<_229.ExecuteContractProposal>): _229.ExecuteContractProposal;
                fromAmino(object: _229.ExecuteContractProposalAmino): _229.ExecuteContractProposal;
                toAmino(message: _229.ExecuteContractProposal): _229.ExecuteContractProposalAmino;
                fromAminoMsg(object: _229.ExecuteContractProposalAminoMsg): _229.ExecuteContractProposal;
                toAminoMsg(message: _229.ExecuteContractProposal): _229.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _229.ExecuteContractProposalProtoMsg): _229.ExecuteContractProposal;
                toProto(message: _229.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _229.ExecuteContractProposal): _229.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _229.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.UpdateAdminProposal;
                fromPartial(object: Partial<_229.UpdateAdminProposal>): _229.UpdateAdminProposal;
                fromAmino(object: _229.UpdateAdminProposalAmino): _229.UpdateAdminProposal;
                toAmino(message: _229.UpdateAdminProposal): _229.UpdateAdminProposalAmino;
                fromAminoMsg(object: _229.UpdateAdminProposalAminoMsg): _229.UpdateAdminProposal;
                toAminoMsg(message: _229.UpdateAdminProposal): _229.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _229.UpdateAdminProposalProtoMsg): _229.UpdateAdminProposal;
                toProto(message: _229.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _229.UpdateAdminProposal): _229.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _229.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.ClearAdminProposal;
                fromPartial(object: Partial<_229.ClearAdminProposal>): _229.ClearAdminProposal;
                fromAmino(object: _229.ClearAdminProposalAmino): _229.ClearAdminProposal;
                toAmino(message: _229.ClearAdminProposal): _229.ClearAdminProposalAmino;
                fromAminoMsg(object: _229.ClearAdminProposalAminoMsg): _229.ClearAdminProposal;
                toAminoMsg(message: _229.ClearAdminProposal): _229.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _229.ClearAdminProposalProtoMsg): _229.ClearAdminProposal;
                toProto(message: _229.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _229.ClearAdminProposal): _229.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _229.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.PinCodesProposal;
                fromPartial(object: Partial<_229.PinCodesProposal>): _229.PinCodesProposal;
                fromAmino(object: _229.PinCodesProposalAmino): _229.PinCodesProposal;
                toAmino(message: _229.PinCodesProposal): _229.PinCodesProposalAmino;
                fromAminoMsg(object: _229.PinCodesProposalAminoMsg): _229.PinCodesProposal;
                toAminoMsg(message: _229.PinCodesProposal): _229.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _229.PinCodesProposalProtoMsg): _229.PinCodesProposal;
                toProto(message: _229.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _229.PinCodesProposal): _229.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _229.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.UnpinCodesProposal;
                fromPartial(object: Partial<_229.UnpinCodesProposal>): _229.UnpinCodesProposal;
                fromAmino(object: _229.UnpinCodesProposalAmino): _229.UnpinCodesProposal;
                toAmino(message: _229.UnpinCodesProposal): _229.UnpinCodesProposalAmino;
                fromAminoMsg(object: _229.UnpinCodesProposalAminoMsg): _229.UnpinCodesProposal;
                toAminoMsg(message: _229.UnpinCodesProposal): _229.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _229.UnpinCodesProposalProtoMsg): _229.UnpinCodesProposal;
                toProto(message: _229.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _229.UnpinCodesProposal): _229.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _229.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.AccessConfigUpdate;
                fromPartial(object: Partial<_229.AccessConfigUpdate>): _229.AccessConfigUpdate;
                fromAmino(object: _229.AccessConfigUpdateAmino): _229.AccessConfigUpdate;
                toAmino(message: _229.AccessConfigUpdate): _229.AccessConfigUpdateAmino;
                fromAminoMsg(object: _229.AccessConfigUpdateAminoMsg): _229.AccessConfigUpdate;
                toAminoMsg(message: _229.AccessConfigUpdate): _229.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _229.AccessConfigUpdateProtoMsg): _229.AccessConfigUpdate;
                toProto(message: _229.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _229.AccessConfigUpdate): _229.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _229.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_229.UpdateInstantiateConfigProposal>): _229.UpdateInstantiateConfigProposal;
                fromAmino(object: _229.UpdateInstantiateConfigProposalAmino): _229.UpdateInstantiateConfigProposal;
                toAmino(message: _229.UpdateInstantiateConfigProposal): _229.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _229.UpdateInstantiateConfigProposalAminoMsg): _229.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _229.UpdateInstantiateConfigProposal): _229.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _229.UpdateInstantiateConfigProposalProtoMsg): _229.UpdateInstantiateConfigProposal;
                toProto(message: _229.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _229.UpdateInstantiateConfigProposal): _229.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _229.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _229.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_229.StoreAndInstantiateContractProposal>): _229.StoreAndInstantiateContractProposal;
                fromAmino(object: _229.StoreAndInstantiateContractProposalAmino): _229.StoreAndInstantiateContractProposal;
                toAmino(message: _229.StoreAndInstantiateContractProposal): _229.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _229.StoreAndInstantiateContractProposalAminoMsg): _229.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _229.StoreAndInstantiateContractProposal): _229.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _229.StoreAndInstantiateContractProposalProtoMsg): _229.StoreAndInstantiateContractProposal;
                toProto(message: _229.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _229.StoreAndInstantiateContractProposal): _229.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _228.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _228.MsgIBCSend;
                fromPartial(object: Partial<_228.MsgIBCSend>): _228.MsgIBCSend;
                fromAmino(object: _228.MsgIBCSendAmino): _228.MsgIBCSend;
                toAmino(message: _228.MsgIBCSend): _228.MsgIBCSendAmino;
                fromAminoMsg(object: _228.MsgIBCSendAminoMsg): _228.MsgIBCSend;
                toAminoMsg(message: _228.MsgIBCSend): _228.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _228.MsgIBCSendProtoMsg): _228.MsgIBCSend;
                toProto(message: _228.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _228.MsgIBCSend): _228.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _228.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _228.MsgIBCSendResponse;
                fromPartial(object: Partial<_228.MsgIBCSendResponse>): _228.MsgIBCSendResponse;
                fromAmino(object: _228.MsgIBCSendResponseAmino): _228.MsgIBCSendResponse;
                toAmino(message: _228.MsgIBCSendResponse): _228.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _228.MsgIBCSendResponseAminoMsg): _228.MsgIBCSendResponse;
                toAminoMsg(message: _228.MsgIBCSendResponse): _228.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _228.MsgIBCSendResponseProtoMsg): _228.MsgIBCSendResponse;
                toProto(message: _228.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _228.MsgIBCSendResponse): _228.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _228.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _228.MsgIBCCloseChannel;
                fromPartial(object: Partial<_228.MsgIBCCloseChannel>): _228.MsgIBCCloseChannel;
                fromAmino(object: _228.MsgIBCCloseChannelAmino): _228.MsgIBCCloseChannel;
                toAmino(message: _228.MsgIBCCloseChannel): _228.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _228.MsgIBCCloseChannelAminoMsg): _228.MsgIBCCloseChannel;
                toAminoMsg(message: _228.MsgIBCCloseChannel): _228.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _228.MsgIBCCloseChannelProtoMsg): _228.MsgIBCCloseChannel;
                toProto(message: _228.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _228.MsgIBCCloseChannel): _228.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _227.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _227.GenesisState;
                fromPartial(object: Partial<_227.GenesisState>): _227.GenesisState;
                fromAmino(object: _227.GenesisStateAmino): _227.GenesisState;
                toAmino(message: _227.GenesisState): _227.GenesisStateAmino;
                fromAminoMsg(object: _227.GenesisStateAminoMsg): _227.GenesisState;
                toAminoMsg(message: _227.GenesisState): _227.GenesisStateAminoMsg;
                fromProtoMsg(message: _227.GenesisStateProtoMsg): _227.GenesisState;
                toProto(message: _227.GenesisState): Uint8Array;
                toProtoMsg(message: _227.GenesisState): _227.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                typeUrl: string;
                encode(message: _227.GenesisState_GenMsgs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _227.GenesisState_GenMsgs;
                fromPartial(object: Partial<_227.GenesisState_GenMsgs>): _227.GenesisState_GenMsgs;
                fromAmino(object: _227.GenesisState_GenMsgsAmino): _227.GenesisState_GenMsgs;
                toAmino(message: _227.GenesisState_GenMsgs): _227.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _227.GenesisState_GenMsgsAminoMsg): _227.GenesisState_GenMsgs;
                toAminoMsg(message: _227.GenesisState_GenMsgs): _227.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _227.GenesisState_GenMsgsProtoMsg): _227.GenesisState_GenMsgs;
                toProto(message: _227.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _227.GenesisState_GenMsgs): _227.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _227.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _227.Code;
                fromPartial(object: Partial<_227.Code>): _227.Code;
                fromAmino(object: _227.CodeAmino): _227.Code;
                toAmino(message: _227.Code): _227.CodeAmino;
                fromAminoMsg(object: _227.CodeAminoMsg): _227.Code;
                toAminoMsg(message: _227.Code): _227.CodeAminoMsg;
                fromProtoMsg(message: _227.CodeProtoMsg): _227.Code;
                toProto(message: _227.Code): Uint8Array;
                toProtoMsg(message: _227.Code): _227.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _227.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _227.Contract;
                fromPartial(object: Partial<_227.Contract>): _227.Contract;
                fromAmino(object: _227.ContractAmino): _227.Contract;
                toAmino(message: _227.Contract): _227.ContractAmino;
                fromAminoMsg(object: _227.ContractAminoMsg): _227.Contract;
                toAminoMsg(message: _227.Contract): _227.ContractAminoMsg;
                fromProtoMsg(message: _227.ContractProtoMsg): _227.Contract;
                toProto(message: _227.Contract): Uint8Array;
                toProtoMsg(message: _227.Contract): _227.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _227.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _227.Sequence;
                fromPartial(object: Partial<_227.Sequence>): _227.Sequence;
                fromAmino(object: _227.SequenceAmino): _227.Sequence;
                toAmino(message: _227.Sequence): _227.SequenceAmino;
                fromAminoMsg(object: _227.SequenceAminoMsg): _227.Sequence;
                toAminoMsg(message: _227.Sequence): _227.SequenceAminoMsg;
                fromProtoMsg(message: _227.SequenceProtoMsg): _227.Sequence;
                toProto(message: _227.Sequence): Uint8Array;
                toProtoMsg(message: _227.Sequence): _227.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _226.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.StoreCodeAuthorization;
                fromPartial(object: Partial<_226.StoreCodeAuthorization>): _226.StoreCodeAuthorization;
                fromAmino(object: _226.StoreCodeAuthorizationAmino): _226.StoreCodeAuthorization;
                toAmino(message: _226.StoreCodeAuthorization): _226.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _226.StoreCodeAuthorizationAminoMsg): _226.StoreCodeAuthorization;
                toAminoMsg(message: _226.StoreCodeAuthorization): _226.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _226.StoreCodeAuthorizationProtoMsg): _226.StoreCodeAuthorization;
                toProto(message: _226.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _226.StoreCodeAuthorization): _226.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _226.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.ContractExecutionAuthorization;
                fromPartial(object: Partial<_226.ContractExecutionAuthorization>): _226.ContractExecutionAuthorization;
                fromAmino(object: _226.ContractExecutionAuthorizationAmino): _226.ContractExecutionAuthorization;
                toAmino(message: _226.ContractExecutionAuthorization): _226.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _226.ContractExecutionAuthorizationAminoMsg): _226.ContractExecutionAuthorization;
                toAminoMsg(message: _226.ContractExecutionAuthorization): _226.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _226.ContractExecutionAuthorizationProtoMsg): _226.ContractExecutionAuthorization;
                toProto(message: _226.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _226.ContractExecutionAuthorization): _226.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _226.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.ContractMigrationAuthorization;
                fromPartial(object: Partial<_226.ContractMigrationAuthorization>): _226.ContractMigrationAuthorization;
                fromAmino(object: _226.ContractMigrationAuthorizationAmino): _226.ContractMigrationAuthorization;
                toAmino(message: _226.ContractMigrationAuthorization): _226.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _226.ContractMigrationAuthorizationAminoMsg): _226.ContractMigrationAuthorization;
                toAminoMsg(message: _226.ContractMigrationAuthorization): _226.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _226.ContractMigrationAuthorizationProtoMsg): _226.ContractMigrationAuthorization;
                toProto(message: _226.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _226.ContractMigrationAuthorization): _226.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _226.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.CodeGrant;
                fromPartial(object: Partial<_226.CodeGrant>): _226.CodeGrant;
                fromAmino(object: _226.CodeGrantAmino): _226.CodeGrant;
                toAmino(message: _226.CodeGrant): _226.CodeGrantAmino;
                fromAminoMsg(object: _226.CodeGrantAminoMsg): _226.CodeGrant;
                toAminoMsg(message: _226.CodeGrant): _226.CodeGrantAminoMsg;
                fromProtoMsg(message: _226.CodeGrantProtoMsg): _226.CodeGrant;
                toProto(message: _226.CodeGrant): Uint8Array;
                toProtoMsg(message: _226.CodeGrant): _226.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _226.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.ContractGrant;
                fromPartial(object: Partial<_226.ContractGrant>): _226.ContractGrant;
                fromAmino(object: _226.ContractGrantAmino): _226.ContractGrant;
                toAmino(message: _226.ContractGrant): _226.ContractGrantAmino;
                fromAminoMsg(object: _226.ContractGrantAminoMsg): _226.ContractGrant;
                toAminoMsg(message: _226.ContractGrant): _226.ContractGrantAminoMsg;
                fromProtoMsg(message: _226.ContractGrantProtoMsg): _226.ContractGrant;
                toProto(message: _226.ContractGrant): Uint8Array;
                toProtoMsg(message: _226.ContractGrant): _226.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _226.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.MaxCallsLimit;
                fromPartial(object: Partial<_226.MaxCallsLimit>): _226.MaxCallsLimit;
                fromAmino(object: _226.MaxCallsLimitAmino): _226.MaxCallsLimit;
                toAmino(message: _226.MaxCallsLimit): _226.MaxCallsLimitAmino;
                fromAminoMsg(object: _226.MaxCallsLimitAminoMsg): _226.MaxCallsLimit;
                toAminoMsg(message: _226.MaxCallsLimit): _226.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _226.MaxCallsLimitProtoMsg): _226.MaxCallsLimit;
                toProto(message: _226.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _226.MaxCallsLimit): _226.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _226.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.MaxFundsLimit;
                fromPartial(object: Partial<_226.MaxFundsLimit>): _226.MaxFundsLimit;
                fromAmino(object: _226.MaxFundsLimitAmino): _226.MaxFundsLimit;
                toAmino(message: _226.MaxFundsLimit): _226.MaxFundsLimitAmino;
                fromAminoMsg(object: _226.MaxFundsLimitAminoMsg): _226.MaxFundsLimit;
                toAminoMsg(message: _226.MaxFundsLimit): _226.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _226.MaxFundsLimitProtoMsg): _226.MaxFundsLimit;
                toProto(message: _226.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _226.MaxFundsLimit): _226.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _226.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.CombinedLimit;
                fromPartial(object: Partial<_226.CombinedLimit>): _226.CombinedLimit;
                fromAmino(object: _226.CombinedLimitAmino): _226.CombinedLimit;
                toAmino(message: _226.CombinedLimit): _226.CombinedLimitAmino;
                fromAminoMsg(object: _226.CombinedLimitAminoMsg): _226.CombinedLimit;
                toAminoMsg(message: _226.CombinedLimit): _226.CombinedLimitAminoMsg;
                fromProtoMsg(message: _226.CombinedLimitProtoMsg): _226.CombinedLimit;
                toProto(message: _226.CombinedLimit): Uint8Array;
                toProtoMsg(message: _226.CombinedLimit): _226.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _226.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _226.AllowAllMessagesFilter;
                fromPartial(_: Partial<_226.AllowAllMessagesFilter>): _226.AllowAllMessagesFilter;
                fromAmino(_: _226.AllowAllMessagesFilterAmino): _226.AllowAllMessagesFilter;
                toAmino(_: _226.AllowAllMessagesFilter): _226.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _226.AllowAllMessagesFilterAminoMsg): _226.AllowAllMessagesFilter;
                toAminoMsg(message: _226.AllowAllMessagesFilter): _226.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _226.AllowAllMessagesFilterProtoMsg): _226.AllowAllMessagesFilter;
                toProto(message: _226.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _226.AllowAllMessagesFilter): _226.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _226.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_226.AcceptedMessageKeysFilter>): _226.AcceptedMessageKeysFilter;
                fromAmino(object: _226.AcceptedMessageKeysFilterAmino): _226.AcceptedMessageKeysFilter;
                toAmino(message: _226.AcceptedMessageKeysFilter): _226.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _226.AcceptedMessageKeysFilterAminoMsg): _226.AcceptedMessageKeysFilter;
                toAminoMsg(message: _226.AcceptedMessageKeysFilter): _226.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _226.AcceptedMessageKeysFilterProtoMsg): _226.AcceptedMessageKeysFilter;
                toProto(message: _226.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _226.AcceptedMessageKeysFilter): _226.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _226.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _226.AcceptedMessagesFilter;
                fromPartial(object: Partial<_226.AcceptedMessagesFilter>): _226.AcceptedMessagesFilter;
                fromAmino(object: _226.AcceptedMessagesFilterAmino): _226.AcceptedMessagesFilter;
                toAmino(message: _226.AcceptedMessagesFilter): _226.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _226.AcceptedMessagesFilterAminoMsg): _226.AcceptedMessagesFilter;
                toAminoMsg(message: _226.AcceptedMessagesFilter): _226.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _226.AcceptedMessagesFilterProtoMsg): _226.AcceptedMessagesFilter;
                toProto(message: _226.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _226.AcceptedMessagesFilter): _226.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _226.MaxCallsLimit | _226.MaxFundsLimit | _226.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _226.AllowAllMessagesFilter | _226.AcceptedMessageKeysFilter | _226.AcceptedMessagesFilter;
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
                    v1: _414.MsgClientImpl;
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
                        contractInfo(request: _230.QueryContractInfoRequest): Promise<_230.QueryContractInfoResponse>;
                        contractHistory(request: _230.QueryContractHistoryRequest): Promise<_230.QueryContractHistoryResponse>;
                        contractsByCode(request: _230.QueryContractsByCodeRequest): Promise<_230.QueryContractsByCodeResponse>;
                        allContractState(request: _230.QueryAllContractStateRequest): Promise<_230.QueryAllContractStateResponse>;
                        rawContractState(request: _230.QueryRawContractStateRequest): Promise<_230.QueryRawContractStateResponse>;
                        smartContractState(request: _230.QuerySmartContractStateRequest): Promise<_230.QuerySmartContractStateResponse>;
                        code(request: _230.QueryCodeRequest): Promise<_230.QueryCodeResponse>;
                        codes(request?: _230.QueryCodesRequest): Promise<_230.QueryCodesResponse>;
                        pinnedCodes(request?: _230.QueryPinnedCodesRequest): Promise<_230.QueryPinnedCodesResponse>;
                        params(request?: _230.QueryParamsRequest): Promise<_230.QueryParamsResponse>;
                        contractsByCreator(request: _230.QueryContractsByCreatorRequest): Promise<_230.QueryContractsByCreatorResponse>;
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
                    v1: _412.LCDQueryClient;
                };
            };
        }>;
    };
}
