import * as _190 from "./wasm/v1/authz";
import * as _191 from "./wasm/v1/genesis";
import * as _192 from "./wasm/v1/ibc";
import * as _193 from "./wasm/v1/proposal";
import * as _194 from "./wasm/v1/query";
import * as _195 from "./wasm/v1/tx";
import * as _196 from "./wasm/v1/types";
import * as _338 from "./wasm/v1/query.lcd";
import * as _339 from "./wasm/v1/query.rpc.Query";
import * as _340 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _340.MsgClientImpl;
            QueryClientImpl: typeof _339.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _194.QueryContractInfoRequest): Promise<_194.QueryContractInfoResponse>;
                contractHistory(request: _194.QueryContractHistoryRequest): Promise<_194.QueryContractHistoryResponse>;
                contractsByCode(request: _194.QueryContractsByCodeRequest): Promise<_194.QueryContractsByCodeResponse>;
                allContractState(request: _194.QueryAllContractStateRequest): Promise<_194.QueryAllContractStateResponse>;
                rawContractState(request: _194.QueryRawContractStateRequest): Promise<_194.QueryRawContractStateResponse>;
                smartContractState(request: _194.QuerySmartContractStateRequest): Promise<_194.QuerySmartContractStateResponse>;
                code(request: _194.QueryCodeRequest): Promise<_194.QueryCodeResponse>;
                codes(request?: _194.QueryCodesRequest): Promise<_194.QueryCodesResponse>;
                pinnedCodes(request?: _194.QueryPinnedCodesRequest): Promise<_194.QueryPinnedCodesResponse>;
                params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                contractsByCreator(request: _194.QueryContractsByCreatorRequest): Promise<_194.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _338.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _195.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _195.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _195.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _195.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _195.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _195.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _195.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _195.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _195.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _195.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _195.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _195.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _195.MsgStoreCode): {
                        typeUrl: string;
                        value: _195.MsgStoreCode;
                    };
                    instantiateContract(value: _195.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _195.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract2;
                    };
                    executeContract(value: _195.MsgExecuteContract): {
                        typeUrl: string;
                        value: _195.MsgExecuteContract;
                    };
                    migrateContract(value: _195.MsgMigrateContract): {
                        typeUrl: string;
                        value: _195.MsgMigrateContract;
                    };
                    updateAdmin(value: _195.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _195.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _195.MsgClearAdmin): {
                        typeUrl: string;
                        value: _195.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _195.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _195.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                    sudoContract(value: _195.MsgSudoContract): {
                        typeUrl: string;
                        value: _195.MsgSudoContract;
                    };
                    pinCodes(value: _195.MsgPinCodes): {
                        typeUrl: string;
                        value: _195.MsgPinCodes;
                    };
                    unpinCodes(value: _195.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _195.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _195.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgStoreAndInstantiateContract;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _195.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _195.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _195.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _195.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _195.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _195.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _195.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _195.MsgStoreCode): {
                        typeUrl: string;
                        value: _195.MsgStoreCode;
                    };
                    instantiateContract(value: _195.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _195.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _195.MsgInstantiateContract2;
                    };
                    executeContract(value: _195.MsgExecuteContract): {
                        typeUrl: string;
                        value: _195.MsgExecuteContract;
                    };
                    migrateContract(value: _195.MsgMigrateContract): {
                        typeUrl: string;
                        value: _195.MsgMigrateContract;
                    };
                    updateAdmin(value: _195.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _195.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _195.MsgClearAdmin): {
                        typeUrl: string;
                        value: _195.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _195.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _195.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _195.MsgUpdateParams): {
                        typeUrl: string;
                        value: _195.MsgUpdateParams;
                    };
                    sudoContract(value: _195.MsgSudoContract): {
                        typeUrl: string;
                        value: _195.MsgSudoContract;
                    };
                    pinCodes(value: _195.MsgPinCodes): {
                        typeUrl: string;
                        value: _195.MsgPinCodes;
                    };
                    unpinCodes(value: _195.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _195.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _195.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _195.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _195.MsgStoreCode) => _195.MsgStoreCodeAmino;
                    fromAmino: (object: _195.MsgStoreCodeAmino) => _195.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _195.MsgInstantiateContract) => _195.MsgInstantiateContractAmino;
                    fromAmino: (object: _195.MsgInstantiateContractAmino) => _195.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _195.MsgInstantiateContract2) => _195.MsgInstantiateContract2Amino;
                    fromAmino: (object: _195.MsgInstantiateContract2Amino) => _195.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _195.MsgExecuteContract) => _195.MsgExecuteContractAmino;
                    fromAmino: (object: _195.MsgExecuteContractAmino) => _195.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _195.MsgMigrateContract) => _195.MsgMigrateContractAmino;
                    fromAmino: (object: _195.MsgMigrateContractAmino) => _195.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _195.MsgUpdateAdmin) => _195.MsgUpdateAdminAmino;
                    fromAmino: (object: _195.MsgUpdateAdminAmino) => _195.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _195.MsgClearAdmin) => _195.MsgClearAdminAmino;
                    fromAmino: (object: _195.MsgClearAdminAmino) => _195.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _195.MsgUpdateInstantiateConfig) => _195.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _195.MsgUpdateInstantiateConfigAmino) => _195.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _195.MsgUpdateParams) => _195.MsgUpdateParamsAmino;
                    fromAmino: (object: _195.MsgUpdateParamsAmino) => _195.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _195.MsgSudoContract) => _195.MsgSudoContractAmino;
                    fromAmino: (object: _195.MsgSudoContractAmino) => _195.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _195.MsgPinCodes) => _195.MsgPinCodesAmino;
                    fromAmino: (object: _195.MsgPinCodesAmino) => _195.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _195.MsgUnpinCodes) => _195.MsgUnpinCodesAmino;
                    fromAmino: (object: _195.MsgUnpinCodesAmino) => _195.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _195.MsgStoreAndInstantiateContract) => _195.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _195.MsgStoreAndInstantiateContractAmino) => _195.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _196.AccessType;
            accessTypeToJSON(object: _196.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _196.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _196.ContractCodeHistoryOperationType): string;
            AccessType: typeof _196.AccessType;
            AccessTypeSDKType: typeof _196.AccessType;
            AccessTypeAmino: typeof _196.AccessType;
            ContractCodeHistoryOperationType: typeof _196.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _196.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _196.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _196.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.AccessTypeParam;
                fromPartial(object: Partial<_196.AccessTypeParam>): _196.AccessTypeParam;
                fromAmino(object: _196.AccessTypeParamAmino): _196.AccessTypeParam;
                toAmino(message: _196.AccessTypeParam): _196.AccessTypeParamAmino;
                fromAminoMsg(object: _196.AccessTypeParamAminoMsg): _196.AccessTypeParam;
                toAminoMsg(message: _196.AccessTypeParam): _196.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _196.AccessTypeParamProtoMsg): _196.AccessTypeParam;
                toProto(message: _196.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _196.AccessTypeParam): _196.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _196.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.AccessConfig;
                fromPartial(object: Partial<_196.AccessConfig>): _196.AccessConfig;
                fromAmino(object: _196.AccessConfigAmino): _196.AccessConfig;
                toAmino(message: _196.AccessConfig): _196.AccessConfigAmino;
                fromAminoMsg(object: _196.AccessConfigAminoMsg): _196.AccessConfig;
                toAminoMsg(message: _196.AccessConfig): _196.AccessConfigAminoMsg;
                fromProtoMsg(message: _196.AccessConfigProtoMsg): _196.AccessConfig;
                toProto(message: _196.AccessConfig): Uint8Array;
                toProtoMsg(message: _196.AccessConfig): _196.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _196.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.Params;
                fromPartial(object: Partial<_196.Params>): _196.Params;
                fromAmino(object: _196.ParamsAmino): _196.Params;
                toAmino(message: _196.Params): _196.ParamsAmino;
                fromAminoMsg(object: _196.ParamsAminoMsg): _196.Params;
                toAminoMsg(message: _196.Params): _196.ParamsAminoMsg;
                fromProtoMsg(message: _196.ParamsProtoMsg): _196.Params;
                toProto(message: _196.Params): Uint8Array;
                toProtoMsg(message: _196.Params): _196.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _196.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.CodeInfo;
                fromPartial(object: Partial<_196.CodeInfo>): _196.CodeInfo;
                fromAmino(object: _196.CodeInfoAmino): _196.CodeInfo;
                toAmino(message: _196.CodeInfo): _196.CodeInfoAmino;
                fromAminoMsg(object: _196.CodeInfoAminoMsg): _196.CodeInfo;
                toAminoMsg(message: _196.CodeInfo): _196.CodeInfoAminoMsg;
                fromProtoMsg(message: _196.CodeInfoProtoMsg): _196.CodeInfo;
                toProto(message: _196.CodeInfo): Uint8Array;
                toProtoMsg(message: _196.CodeInfo): _196.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _196.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.ContractInfo;
                fromPartial(object: Partial<_196.ContractInfo>): _196.ContractInfo;
                fromAmino(object: _196.ContractInfoAmino): _196.ContractInfo;
                toAmino(message: _196.ContractInfo): _196.ContractInfoAmino;
                fromAminoMsg(object: _196.ContractInfoAminoMsg): _196.ContractInfo;
                toAminoMsg(message: _196.ContractInfo): _196.ContractInfoAminoMsg;
                fromProtoMsg(message: _196.ContractInfoProtoMsg): _196.ContractInfo;
                toProto(message: _196.ContractInfo): Uint8Array;
                toProtoMsg(message: _196.ContractInfo): _196.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _196.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_196.ContractCodeHistoryEntry>): _196.ContractCodeHistoryEntry;
                fromAmino(object: _196.ContractCodeHistoryEntryAmino): _196.ContractCodeHistoryEntry;
                toAmino(message: _196.ContractCodeHistoryEntry): _196.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _196.ContractCodeHistoryEntryAminoMsg): _196.ContractCodeHistoryEntry;
                toAminoMsg(message: _196.ContractCodeHistoryEntry): _196.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _196.ContractCodeHistoryEntryProtoMsg): _196.ContractCodeHistoryEntry;
                toProto(message: _196.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _196.ContractCodeHistoryEntry): _196.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _196.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.AbsoluteTxPosition;
                fromPartial(object: Partial<_196.AbsoluteTxPosition>): _196.AbsoluteTxPosition;
                fromAmino(object: _196.AbsoluteTxPositionAmino): _196.AbsoluteTxPosition;
                toAmino(message: _196.AbsoluteTxPosition): _196.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _196.AbsoluteTxPositionAminoMsg): _196.AbsoluteTxPosition;
                toAminoMsg(message: _196.AbsoluteTxPosition): _196.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _196.AbsoluteTxPositionProtoMsg): _196.AbsoluteTxPosition;
                toProto(message: _196.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _196.AbsoluteTxPosition): _196.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _196.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.Model;
                fromPartial(object: Partial<_196.Model>): _196.Model;
                fromAmino(object: _196.ModelAmino): _196.Model;
                toAmino(message: _196.Model): _196.ModelAmino;
                fromAminoMsg(object: _196.ModelAminoMsg): _196.Model;
                toAminoMsg(message: _196.Model): _196.ModelAminoMsg;
                fromProtoMsg(message: _196.ModelProtoMsg): _196.Model;
                toProto(message: _196.Model): Uint8Array;
                toProtoMsg(message: _196.Model): _196.ModelProtoMsg;
            };
            EventCodeStored: {
                typeUrl: string;
                encode(message: _196.EventCodeStored, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.EventCodeStored;
                fromPartial(object: Partial<_196.EventCodeStored>): _196.EventCodeStored;
                fromAmino(object: _196.EventCodeStoredAmino): _196.EventCodeStored;
                toAmino(message: _196.EventCodeStored): _196.EventCodeStoredAmino;
                fromAminoMsg(object: _196.EventCodeStoredAminoMsg): _196.EventCodeStored;
                toAminoMsg(message: _196.EventCodeStored): _196.EventCodeStoredAminoMsg;
                fromProtoMsg(message: _196.EventCodeStoredProtoMsg): _196.EventCodeStored;
                toProto(message: _196.EventCodeStored): Uint8Array;
                toProtoMsg(message: _196.EventCodeStored): _196.EventCodeStoredProtoMsg;
            };
            EventContractInstantiated: {
                typeUrl: string;
                encode(message: _196.EventContractInstantiated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.EventContractInstantiated;
                fromPartial(object: Partial<_196.EventContractInstantiated>): _196.EventContractInstantiated;
                fromAmino(object: _196.EventContractInstantiatedAmino): _196.EventContractInstantiated;
                toAmino(message: _196.EventContractInstantiated): _196.EventContractInstantiatedAmino;
                fromAminoMsg(object: _196.EventContractInstantiatedAminoMsg): _196.EventContractInstantiated;
                toAminoMsg(message: _196.EventContractInstantiated): _196.EventContractInstantiatedAminoMsg;
                fromProtoMsg(message: _196.EventContractInstantiatedProtoMsg): _196.EventContractInstantiated;
                toProto(message: _196.EventContractInstantiated): Uint8Array;
                toProtoMsg(message: _196.EventContractInstantiated): _196.EventContractInstantiatedProtoMsg;
            };
            EventContractMigrated: {
                typeUrl: string;
                encode(message: _196.EventContractMigrated, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.EventContractMigrated;
                fromPartial(object: Partial<_196.EventContractMigrated>): _196.EventContractMigrated;
                fromAmino(object: _196.EventContractMigratedAmino): _196.EventContractMigrated;
                toAmino(message: _196.EventContractMigrated): _196.EventContractMigratedAmino;
                fromAminoMsg(object: _196.EventContractMigratedAminoMsg): _196.EventContractMigrated;
                toAminoMsg(message: _196.EventContractMigrated): _196.EventContractMigratedAminoMsg;
                fromProtoMsg(message: _196.EventContractMigratedProtoMsg): _196.EventContractMigrated;
                toProto(message: _196.EventContractMigrated): Uint8Array;
                toProtoMsg(message: _196.EventContractMigrated): _196.EventContractMigratedProtoMsg;
            };
            EventContractAdminSet: {
                typeUrl: string;
                encode(message: _196.EventContractAdminSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _196.EventContractAdminSet;
                fromPartial(object: Partial<_196.EventContractAdminSet>): _196.EventContractAdminSet;
                fromAmino(object: _196.EventContractAdminSetAmino): _196.EventContractAdminSet;
                toAmino(message: _196.EventContractAdminSet): _196.EventContractAdminSetAmino;
                fromAminoMsg(object: _196.EventContractAdminSetAminoMsg): _196.EventContractAdminSet;
                toAminoMsg(message: _196.EventContractAdminSet): _196.EventContractAdminSetAminoMsg;
                fromProtoMsg(message: _196.EventContractAdminSetProtoMsg): _196.EventContractAdminSet;
                toProto(message: _196.EventContractAdminSet): Uint8Array;
                toProtoMsg(message: _196.EventContractAdminSet): _196.EventContractAdminSetProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _195.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgStoreCode;
                fromPartial(object: Partial<_195.MsgStoreCode>): _195.MsgStoreCode;
                fromAmino(object: _195.MsgStoreCodeAmino): _195.MsgStoreCode;
                toAmino(message: _195.MsgStoreCode): _195.MsgStoreCodeAmino;
                fromAminoMsg(object: _195.MsgStoreCodeAminoMsg): _195.MsgStoreCode;
                toAminoMsg(message: _195.MsgStoreCode): _195.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _195.MsgStoreCodeProtoMsg): _195.MsgStoreCode;
                toProto(message: _195.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _195.MsgStoreCode): _195.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _195.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgStoreCodeResponse;
                fromPartial(object: Partial<_195.MsgStoreCodeResponse>): _195.MsgStoreCodeResponse;
                fromAmino(object: _195.MsgStoreCodeResponseAmino): _195.MsgStoreCodeResponse;
                toAmino(message: _195.MsgStoreCodeResponse): _195.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _195.MsgStoreCodeResponseAminoMsg): _195.MsgStoreCodeResponse;
                toAminoMsg(message: _195.MsgStoreCodeResponse): _195.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _195.MsgStoreCodeResponseProtoMsg): _195.MsgStoreCodeResponse;
                toProto(message: _195.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _195.MsgStoreCodeResponse): _195.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _195.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgInstantiateContract;
                fromPartial(object: Partial<_195.MsgInstantiateContract>): _195.MsgInstantiateContract;
                fromAmino(object: _195.MsgInstantiateContractAmino): _195.MsgInstantiateContract;
                toAmino(message: _195.MsgInstantiateContract): _195.MsgInstantiateContractAmino;
                fromAminoMsg(object: _195.MsgInstantiateContractAminoMsg): _195.MsgInstantiateContract;
                toAminoMsg(message: _195.MsgInstantiateContract): _195.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _195.MsgInstantiateContractProtoMsg): _195.MsgInstantiateContract;
                toProto(message: _195.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _195.MsgInstantiateContract): _195.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _195.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_195.MsgInstantiateContractResponse>): _195.MsgInstantiateContractResponse;
                fromAmino(object: _195.MsgInstantiateContractResponseAmino): _195.MsgInstantiateContractResponse;
                toAmino(message: _195.MsgInstantiateContractResponse): _195.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _195.MsgInstantiateContractResponseAminoMsg): _195.MsgInstantiateContractResponse;
                toAminoMsg(message: _195.MsgInstantiateContractResponse): _195.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _195.MsgInstantiateContractResponseProtoMsg): _195.MsgInstantiateContractResponse;
                toProto(message: _195.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _195.MsgInstantiateContractResponse): _195.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _195.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgInstantiateContract2;
                fromPartial(object: Partial<_195.MsgInstantiateContract2>): _195.MsgInstantiateContract2;
                fromAmino(object: _195.MsgInstantiateContract2Amino): _195.MsgInstantiateContract2;
                toAmino(message: _195.MsgInstantiateContract2): _195.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _195.MsgInstantiateContract2AminoMsg): _195.MsgInstantiateContract2;
                toAminoMsg(message: _195.MsgInstantiateContract2): _195.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _195.MsgInstantiateContract2ProtoMsg): _195.MsgInstantiateContract2;
                toProto(message: _195.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _195.MsgInstantiateContract2): _195.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _195.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_195.MsgInstantiateContract2Response>): _195.MsgInstantiateContract2Response;
                fromAmino(object: _195.MsgInstantiateContract2ResponseAmino): _195.MsgInstantiateContract2Response;
                toAmino(message: _195.MsgInstantiateContract2Response): _195.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _195.MsgInstantiateContract2ResponseAminoMsg): _195.MsgInstantiateContract2Response;
                toAminoMsg(message: _195.MsgInstantiateContract2Response): _195.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _195.MsgInstantiateContract2ResponseProtoMsg): _195.MsgInstantiateContract2Response;
                toProto(message: _195.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _195.MsgInstantiateContract2Response): _195.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _195.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgExecuteContract;
                fromPartial(object: Partial<_195.MsgExecuteContract>): _195.MsgExecuteContract;
                fromAmino(object: _195.MsgExecuteContractAmino): _195.MsgExecuteContract;
                toAmino(message: _195.MsgExecuteContract): _195.MsgExecuteContractAmino;
                fromAminoMsg(object: _195.MsgExecuteContractAminoMsg): _195.MsgExecuteContract;
                toAminoMsg(message: _195.MsgExecuteContract): _195.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _195.MsgExecuteContractProtoMsg): _195.MsgExecuteContract;
                toProto(message: _195.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _195.MsgExecuteContract): _195.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _195.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgExecuteContractResponse;
                fromPartial(object: Partial<_195.MsgExecuteContractResponse>): _195.MsgExecuteContractResponse;
                fromAmino(object: _195.MsgExecuteContractResponseAmino): _195.MsgExecuteContractResponse;
                toAmino(message: _195.MsgExecuteContractResponse): _195.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _195.MsgExecuteContractResponseAminoMsg): _195.MsgExecuteContractResponse;
                toAminoMsg(message: _195.MsgExecuteContractResponse): _195.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _195.MsgExecuteContractResponseProtoMsg): _195.MsgExecuteContractResponse;
                toProto(message: _195.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _195.MsgExecuteContractResponse): _195.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _195.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgMigrateContract;
                fromPartial(object: Partial<_195.MsgMigrateContract>): _195.MsgMigrateContract;
                fromAmino(object: _195.MsgMigrateContractAmino): _195.MsgMigrateContract;
                toAmino(message: _195.MsgMigrateContract): _195.MsgMigrateContractAmino;
                fromAminoMsg(object: _195.MsgMigrateContractAminoMsg): _195.MsgMigrateContract;
                toAminoMsg(message: _195.MsgMigrateContract): _195.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _195.MsgMigrateContractProtoMsg): _195.MsgMigrateContract;
                toProto(message: _195.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _195.MsgMigrateContract): _195.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _195.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgMigrateContractResponse;
                fromPartial(object: Partial<_195.MsgMigrateContractResponse>): _195.MsgMigrateContractResponse;
                fromAmino(object: _195.MsgMigrateContractResponseAmino): _195.MsgMigrateContractResponse;
                toAmino(message: _195.MsgMigrateContractResponse): _195.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _195.MsgMigrateContractResponseAminoMsg): _195.MsgMigrateContractResponse;
                toAminoMsg(message: _195.MsgMigrateContractResponse): _195.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _195.MsgMigrateContractResponseProtoMsg): _195.MsgMigrateContractResponse;
                toProto(message: _195.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _195.MsgMigrateContractResponse): _195.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _195.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgUpdateAdmin;
                fromPartial(object: Partial<_195.MsgUpdateAdmin>): _195.MsgUpdateAdmin;
                fromAmino(object: _195.MsgUpdateAdminAmino): _195.MsgUpdateAdmin;
                toAmino(message: _195.MsgUpdateAdmin): _195.MsgUpdateAdminAmino;
                fromAminoMsg(object: _195.MsgUpdateAdminAminoMsg): _195.MsgUpdateAdmin;
                toAminoMsg(message: _195.MsgUpdateAdmin): _195.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateAdminProtoMsg): _195.MsgUpdateAdmin;
                toProto(message: _195.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateAdmin): _195.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _195.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _195.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_195.MsgUpdateAdminResponse>): _195.MsgUpdateAdminResponse;
                fromAmino(_: _195.MsgUpdateAdminResponseAmino): _195.MsgUpdateAdminResponse;
                toAmino(_: _195.MsgUpdateAdminResponse): _195.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _195.MsgUpdateAdminResponseAminoMsg): _195.MsgUpdateAdminResponse;
                toAminoMsg(message: _195.MsgUpdateAdminResponse): _195.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateAdminResponseProtoMsg): _195.MsgUpdateAdminResponse;
                toProto(message: _195.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateAdminResponse): _195.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _195.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgClearAdmin;
                fromPartial(object: Partial<_195.MsgClearAdmin>): _195.MsgClearAdmin;
                fromAmino(object: _195.MsgClearAdminAmino): _195.MsgClearAdmin;
                toAmino(message: _195.MsgClearAdmin): _195.MsgClearAdminAmino;
                fromAminoMsg(object: _195.MsgClearAdminAminoMsg): _195.MsgClearAdmin;
                toAminoMsg(message: _195.MsgClearAdmin): _195.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _195.MsgClearAdminProtoMsg): _195.MsgClearAdmin;
                toProto(message: _195.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _195.MsgClearAdmin): _195.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _195.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _195.MsgClearAdminResponse;
                fromPartial(_: Partial<_195.MsgClearAdminResponse>): _195.MsgClearAdminResponse;
                fromAmino(_: _195.MsgClearAdminResponseAmino): _195.MsgClearAdminResponse;
                toAmino(_: _195.MsgClearAdminResponse): _195.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _195.MsgClearAdminResponseAminoMsg): _195.MsgClearAdminResponse;
                toAminoMsg(message: _195.MsgClearAdminResponse): _195.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _195.MsgClearAdminResponseProtoMsg): _195.MsgClearAdminResponse;
                toProto(message: _195.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _195.MsgClearAdminResponse): _195.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _195.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_195.MsgUpdateInstantiateConfig>): _195.MsgUpdateInstantiateConfig;
                fromAmino(object: _195.MsgUpdateInstantiateConfigAmino): _195.MsgUpdateInstantiateConfig;
                toAmino(message: _195.MsgUpdateInstantiateConfig): _195.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _195.MsgUpdateInstantiateConfigAminoMsg): _195.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _195.MsgUpdateInstantiateConfig): _195.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateInstantiateConfigProtoMsg): _195.MsgUpdateInstantiateConfig;
                toProto(message: _195.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateInstantiateConfig): _195.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _195.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _195.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_195.MsgUpdateInstantiateConfigResponse>): _195.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _195.MsgUpdateInstantiateConfigResponseAmino): _195.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _195.MsgUpdateInstantiateConfigResponse): _195.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _195.MsgUpdateInstantiateConfigResponseAminoMsg): _195.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _195.MsgUpdateInstantiateConfigResponse): _195.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateInstantiateConfigResponseProtoMsg): _195.MsgUpdateInstantiateConfigResponse;
                toProto(message: _195.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateInstantiateConfigResponse): _195.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _195.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgUpdateParams;
                fromPartial(object: Partial<_195.MsgUpdateParams>): _195.MsgUpdateParams;
                fromAmino(object: _195.MsgUpdateParamsAmino): _195.MsgUpdateParams;
                toAmino(message: _195.MsgUpdateParams): _195.MsgUpdateParamsAmino;
                fromAminoMsg(object: _195.MsgUpdateParamsAminoMsg): _195.MsgUpdateParams;
                toAminoMsg(message: _195.MsgUpdateParams): _195.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateParamsProtoMsg): _195.MsgUpdateParams;
                toProto(message: _195.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateParams): _195.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _195.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _195.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_195.MsgUpdateParamsResponse>): _195.MsgUpdateParamsResponse;
                fromAmino(_: _195.MsgUpdateParamsResponseAmino): _195.MsgUpdateParamsResponse;
                toAmino(_: _195.MsgUpdateParamsResponse): _195.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _195.MsgUpdateParamsResponseAminoMsg): _195.MsgUpdateParamsResponse;
                toAminoMsg(message: _195.MsgUpdateParamsResponse): _195.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _195.MsgUpdateParamsResponseProtoMsg): _195.MsgUpdateParamsResponse;
                toProto(message: _195.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _195.MsgUpdateParamsResponse): _195.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _195.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgSudoContract;
                fromPartial(object: Partial<_195.MsgSudoContract>): _195.MsgSudoContract;
                fromAmino(object: _195.MsgSudoContractAmino): _195.MsgSudoContract;
                toAmino(message: _195.MsgSudoContract): _195.MsgSudoContractAmino;
                fromAminoMsg(object: _195.MsgSudoContractAminoMsg): _195.MsgSudoContract;
                toAminoMsg(message: _195.MsgSudoContract): _195.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _195.MsgSudoContractProtoMsg): _195.MsgSudoContract;
                toProto(message: _195.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _195.MsgSudoContract): _195.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _195.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgSudoContractResponse;
                fromPartial(object: Partial<_195.MsgSudoContractResponse>): _195.MsgSudoContractResponse;
                fromAmino(object: _195.MsgSudoContractResponseAmino): _195.MsgSudoContractResponse;
                toAmino(message: _195.MsgSudoContractResponse): _195.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _195.MsgSudoContractResponseAminoMsg): _195.MsgSudoContractResponse;
                toAminoMsg(message: _195.MsgSudoContractResponse): _195.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _195.MsgSudoContractResponseProtoMsg): _195.MsgSudoContractResponse;
                toProto(message: _195.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _195.MsgSudoContractResponse): _195.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _195.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgPinCodes;
                fromPartial(object: Partial<_195.MsgPinCodes>): _195.MsgPinCodes;
                fromAmino(object: _195.MsgPinCodesAmino): _195.MsgPinCodes;
                toAmino(message: _195.MsgPinCodes): _195.MsgPinCodesAmino;
                fromAminoMsg(object: _195.MsgPinCodesAminoMsg): _195.MsgPinCodes;
                toAminoMsg(message: _195.MsgPinCodes): _195.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _195.MsgPinCodesProtoMsg): _195.MsgPinCodes;
                toProto(message: _195.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _195.MsgPinCodes): _195.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _195.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _195.MsgPinCodesResponse;
                fromPartial(_: Partial<_195.MsgPinCodesResponse>): _195.MsgPinCodesResponse;
                fromAmino(_: _195.MsgPinCodesResponseAmino): _195.MsgPinCodesResponse;
                toAmino(_: _195.MsgPinCodesResponse): _195.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _195.MsgPinCodesResponseAminoMsg): _195.MsgPinCodesResponse;
                toAminoMsg(message: _195.MsgPinCodesResponse): _195.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _195.MsgPinCodesResponseProtoMsg): _195.MsgPinCodesResponse;
                toProto(message: _195.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _195.MsgPinCodesResponse): _195.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _195.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgUnpinCodes;
                fromPartial(object: Partial<_195.MsgUnpinCodes>): _195.MsgUnpinCodes;
                fromAmino(object: _195.MsgUnpinCodesAmino): _195.MsgUnpinCodes;
                toAmino(message: _195.MsgUnpinCodes): _195.MsgUnpinCodesAmino;
                fromAminoMsg(object: _195.MsgUnpinCodesAminoMsg): _195.MsgUnpinCodes;
                toAminoMsg(message: _195.MsgUnpinCodes): _195.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _195.MsgUnpinCodesProtoMsg): _195.MsgUnpinCodes;
                toProto(message: _195.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _195.MsgUnpinCodes): _195.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _195.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _195.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_195.MsgUnpinCodesResponse>): _195.MsgUnpinCodesResponse;
                fromAmino(_: _195.MsgUnpinCodesResponseAmino): _195.MsgUnpinCodesResponse;
                toAmino(_: _195.MsgUnpinCodesResponse): _195.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _195.MsgUnpinCodesResponseAminoMsg): _195.MsgUnpinCodesResponse;
                toAminoMsg(message: _195.MsgUnpinCodesResponse): _195.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _195.MsgUnpinCodesResponseProtoMsg): _195.MsgUnpinCodesResponse;
                toProto(message: _195.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _195.MsgUnpinCodesResponse): _195.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _195.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_195.MsgStoreAndInstantiateContract>): _195.MsgStoreAndInstantiateContract;
                fromAmino(object: _195.MsgStoreAndInstantiateContractAmino): _195.MsgStoreAndInstantiateContract;
                toAmino(message: _195.MsgStoreAndInstantiateContract): _195.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _195.MsgStoreAndInstantiateContractAminoMsg): _195.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _195.MsgStoreAndInstantiateContract): _195.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _195.MsgStoreAndInstantiateContractProtoMsg): _195.MsgStoreAndInstantiateContract;
                toProto(message: _195.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _195.MsgStoreAndInstantiateContract): _195.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _195.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _195.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_195.MsgStoreAndInstantiateContractResponse>): _195.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _195.MsgStoreAndInstantiateContractResponseAmino): _195.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _195.MsgStoreAndInstantiateContractResponse): _195.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _195.MsgStoreAndInstantiateContractResponseAminoMsg): _195.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _195.MsgStoreAndInstantiateContractResponse): _195.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _195.MsgStoreAndInstantiateContractResponseProtoMsg): _195.MsgStoreAndInstantiateContractResponse;
                toProto(message: _195.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _195.MsgStoreAndInstantiateContractResponse): _195.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _194.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractInfoRequest;
                fromPartial(object: Partial<_194.QueryContractInfoRequest>): _194.QueryContractInfoRequest;
                fromAmino(object: _194.QueryContractInfoRequestAmino): _194.QueryContractInfoRequest;
                toAmino(message: _194.QueryContractInfoRequest): _194.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _194.QueryContractInfoRequestAminoMsg): _194.QueryContractInfoRequest;
                toAminoMsg(message: _194.QueryContractInfoRequest): _194.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _194.QueryContractInfoRequestProtoMsg): _194.QueryContractInfoRequest;
                toProto(message: _194.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _194.QueryContractInfoRequest): _194.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _194.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractInfoResponse;
                fromPartial(object: Partial<_194.QueryContractInfoResponse>): _194.QueryContractInfoResponse;
                fromAmino(object: _194.QueryContractInfoResponseAmino): _194.QueryContractInfoResponse;
                toAmino(message: _194.QueryContractInfoResponse): _194.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _194.QueryContractInfoResponseAminoMsg): _194.QueryContractInfoResponse;
                toAminoMsg(message: _194.QueryContractInfoResponse): _194.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _194.QueryContractInfoResponseProtoMsg): _194.QueryContractInfoResponse;
                toProto(message: _194.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _194.QueryContractInfoResponse): _194.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _194.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractHistoryRequest;
                fromPartial(object: Partial<_194.QueryContractHistoryRequest>): _194.QueryContractHistoryRequest;
                fromAmino(object: _194.QueryContractHistoryRequestAmino): _194.QueryContractHistoryRequest;
                toAmino(message: _194.QueryContractHistoryRequest): _194.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _194.QueryContractHistoryRequestAminoMsg): _194.QueryContractHistoryRequest;
                toAminoMsg(message: _194.QueryContractHistoryRequest): _194.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _194.QueryContractHistoryRequestProtoMsg): _194.QueryContractHistoryRequest;
                toProto(message: _194.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _194.QueryContractHistoryRequest): _194.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _194.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractHistoryResponse;
                fromPartial(object: Partial<_194.QueryContractHistoryResponse>): _194.QueryContractHistoryResponse;
                fromAmino(object: _194.QueryContractHistoryResponseAmino): _194.QueryContractHistoryResponse;
                toAmino(message: _194.QueryContractHistoryResponse): _194.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _194.QueryContractHistoryResponseAminoMsg): _194.QueryContractHistoryResponse;
                toAminoMsg(message: _194.QueryContractHistoryResponse): _194.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _194.QueryContractHistoryResponseProtoMsg): _194.QueryContractHistoryResponse;
                toProto(message: _194.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _194.QueryContractHistoryResponse): _194.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _194.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_194.QueryContractsByCodeRequest>): _194.QueryContractsByCodeRequest;
                fromAmino(object: _194.QueryContractsByCodeRequestAmino): _194.QueryContractsByCodeRequest;
                toAmino(message: _194.QueryContractsByCodeRequest): _194.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _194.QueryContractsByCodeRequestAminoMsg): _194.QueryContractsByCodeRequest;
                toAminoMsg(message: _194.QueryContractsByCodeRequest): _194.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _194.QueryContractsByCodeRequestProtoMsg): _194.QueryContractsByCodeRequest;
                toProto(message: _194.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _194.QueryContractsByCodeRequest): _194.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _194.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_194.QueryContractsByCodeResponse>): _194.QueryContractsByCodeResponse;
                fromAmino(object: _194.QueryContractsByCodeResponseAmino): _194.QueryContractsByCodeResponse;
                toAmino(message: _194.QueryContractsByCodeResponse): _194.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _194.QueryContractsByCodeResponseAminoMsg): _194.QueryContractsByCodeResponse;
                toAminoMsg(message: _194.QueryContractsByCodeResponse): _194.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _194.QueryContractsByCodeResponseProtoMsg): _194.QueryContractsByCodeResponse;
                toProto(message: _194.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _194.QueryContractsByCodeResponse): _194.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _194.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryAllContractStateRequest;
                fromPartial(object: Partial<_194.QueryAllContractStateRequest>): _194.QueryAllContractStateRequest;
                fromAmino(object: _194.QueryAllContractStateRequestAmino): _194.QueryAllContractStateRequest;
                toAmino(message: _194.QueryAllContractStateRequest): _194.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _194.QueryAllContractStateRequestAminoMsg): _194.QueryAllContractStateRequest;
                toAminoMsg(message: _194.QueryAllContractStateRequest): _194.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _194.QueryAllContractStateRequestProtoMsg): _194.QueryAllContractStateRequest;
                toProto(message: _194.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _194.QueryAllContractStateRequest): _194.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _194.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryAllContractStateResponse;
                fromPartial(object: Partial<_194.QueryAllContractStateResponse>): _194.QueryAllContractStateResponse;
                fromAmino(object: _194.QueryAllContractStateResponseAmino): _194.QueryAllContractStateResponse;
                toAmino(message: _194.QueryAllContractStateResponse): _194.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _194.QueryAllContractStateResponseAminoMsg): _194.QueryAllContractStateResponse;
                toAminoMsg(message: _194.QueryAllContractStateResponse): _194.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _194.QueryAllContractStateResponseProtoMsg): _194.QueryAllContractStateResponse;
                toProto(message: _194.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _194.QueryAllContractStateResponse): _194.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _194.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryRawContractStateRequest;
                fromPartial(object: Partial<_194.QueryRawContractStateRequest>): _194.QueryRawContractStateRequest;
                fromAmino(object: _194.QueryRawContractStateRequestAmino): _194.QueryRawContractStateRequest;
                toAmino(message: _194.QueryRawContractStateRequest): _194.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _194.QueryRawContractStateRequestAminoMsg): _194.QueryRawContractStateRequest;
                toAminoMsg(message: _194.QueryRawContractStateRequest): _194.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _194.QueryRawContractStateRequestProtoMsg): _194.QueryRawContractStateRequest;
                toProto(message: _194.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _194.QueryRawContractStateRequest): _194.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _194.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryRawContractStateResponse;
                fromPartial(object: Partial<_194.QueryRawContractStateResponse>): _194.QueryRawContractStateResponse;
                fromAmino(object: _194.QueryRawContractStateResponseAmino): _194.QueryRawContractStateResponse;
                toAmino(message: _194.QueryRawContractStateResponse): _194.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _194.QueryRawContractStateResponseAminoMsg): _194.QueryRawContractStateResponse;
                toAminoMsg(message: _194.QueryRawContractStateResponse): _194.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _194.QueryRawContractStateResponseProtoMsg): _194.QueryRawContractStateResponse;
                toProto(message: _194.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _194.QueryRawContractStateResponse): _194.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _194.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_194.QuerySmartContractStateRequest>): _194.QuerySmartContractStateRequest;
                fromAmino(object: _194.QuerySmartContractStateRequestAmino): _194.QuerySmartContractStateRequest;
                toAmino(message: _194.QuerySmartContractStateRequest): _194.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _194.QuerySmartContractStateRequestAminoMsg): _194.QuerySmartContractStateRequest;
                toAminoMsg(message: _194.QuerySmartContractStateRequest): _194.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _194.QuerySmartContractStateRequestProtoMsg): _194.QuerySmartContractStateRequest;
                toProto(message: _194.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _194.QuerySmartContractStateRequest): _194.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _194.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_194.QuerySmartContractStateResponse>): _194.QuerySmartContractStateResponse;
                fromAmino(object: _194.QuerySmartContractStateResponseAmino): _194.QuerySmartContractStateResponse;
                toAmino(message: _194.QuerySmartContractStateResponse): _194.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _194.QuerySmartContractStateResponseAminoMsg): _194.QuerySmartContractStateResponse;
                toAminoMsg(message: _194.QuerySmartContractStateResponse): _194.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _194.QuerySmartContractStateResponseProtoMsg): _194.QuerySmartContractStateResponse;
                toProto(message: _194.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _194.QuerySmartContractStateResponse): _194.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _194.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryCodeRequest;
                fromPartial(object: Partial<_194.QueryCodeRequest>): _194.QueryCodeRequest;
                fromAmino(object: _194.QueryCodeRequestAmino): _194.QueryCodeRequest;
                toAmino(message: _194.QueryCodeRequest): _194.QueryCodeRequestAmino;
                fromAminoMsg(object: _194.QueryCodeRequestAminoMsg): _194.QueryCodeRequest;
                toAminoMsg(message: _194.QueryCodeRequest): _194.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _194.QueryCodeRequestProtoMsg): _194.QueryCodeRequest;
                toProto(message: _194.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _194.QueryCodeRequest): _194.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _194.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.CodeInfoResponse;
                fromPartial(object: Partial<_194.CodeInfoResponse>): _194.CodeInfoResponse;
                fromAmino(object: _194.CodeInfoResponseAmino): _194.CodeInfoResponse;
                toAmino(message: _194.CodeInfoResponse): _194.CodeInfoResponseAmino;
                fromAminoMsg(object: _194.CodeInfoResponseAminoMsg): _194.CodeInfoResponse;
                toAminoMsg(message: _194.CodeInfoResponse): _194.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _194.CodeInfoResponseProtoMsg): _194.CodeInfoResponse;
                toProto(message: _194.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _194.CodeInfoResponse): _194.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _194.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryCodeResponse;
                fromPartial(object: Partial<_194.QueryCodeResponse>): _194.QueryCodeResponse;
                fromAmino(object: _194.QueryCodeResponseAmino): _194.QueryCodeResponse;
                toAmino(message: _194.QueryCodeResponse): _194.QueryCodeResponseAmino;
                fromAminoMsg(object: _194.QueryCodeResponseAminoMsg): _194.QueryCodeResponse;
                toAminoMsg(message: _194.QueryCodeResponse): _194.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _194.QueryCodeResponseProtoMsg): _194.QueryCodeResponse;
                toProto(message: _194.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _194.QueryCodeResponse): _194.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _194.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryCodesRequest;
                fromPartial(object: Partial<_194.QueryCodesRequest>): _194.QueryCodesRequest;
                fromAmino(object: _194.QueryCodesRequestAmino): _194.QueryCodesRequest;
                toAmino(message: _194.QueryCodesRequest): _194.QueryCodesRequestAmino;
                fromAminoMsg(object: _194.QueryCodesRequestAminoMsg): _194.QueryCodesRequest;
                toAminoMsg(message: _194.QueryCodesRequest): _194.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _194.QueryCodesRequestProtoMsg): _194.QueryCodesRequest;
                toProto(message: _194.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _194.QueryCodesRequest): _194.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _194.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryCodesResponse;
                fromPartial(object: Partial<_194.QueryCodesResponse>): _194.QueryCodesResponse;
                fromAmino(object: _194.QueryCodesResponseAmino): _194.QueryCodesResponse;
                toAmino(message: _194.QueryCodesResponse): _194.QueryCodesResponseAmino;
                fromAminoMsg(object: _194.QueryCodesResponseAminoMsg): _194.QueryCodesResponse;
                toAminoMsg(message: _194.QueryCodesResponse): _194.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _194.QueryCodesResponseProtoMsg): _194.QueryCodesResponse;
                toProto(message: _194.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _194.QueryCodesResponse): _194.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _194.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_194.QueryPinnedCodesRequest>): _194.QueryPinnedCodesRequest;
                fromAmino(object: _194.QueryPinnedCodesRequestAmino): _194.QueryPinnedCodesRequest;
                toAmino(message: _194.QueryPinnedCodesRequest): _194.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _194.QueryPinnedCodesRequestAminoMsg): _194.QueryPinnedCodesRequest;
                toAminoMsg(message: _194.QueryPinnedCodesRequest): _194.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _194.QueryPinnedCodesRequestProtoMsg): _194.QueryPinnedCodesRequest;
                toProto(message: _194.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _194.QueryPinnedCodesRequest): _194.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _194.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_194.QueryPinnedCodesResponse>): _194.QueryPinnedCodesResponse;
                fromAmino(object: _194.QueryPinnedCodesResponseAmino): _194.QueryPinnedCodesResponse;
                toAmino(message: _194.QueryPinnedCodesResponse): _194.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _194.QueryPinnedCodesResponseAminoMsg): _194.QueryPinnedCodesResponse;
                toAminoMsg(message: _194.QueryPinnedCodesResponse): _194.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _194.QueryPinnedCodesResponseProtoMsg): _194.QueryPinnedCodesResponse;
                toProto(message: _194.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _194.QueryPinnedCodesResponse): _194.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _194.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _194.QueryParamsRequest;
                fromPartial(_: Partial<_194.QueryParamsRequest>): _194.QueryParamsRequest;
                fromAmino(_: _194.QueryParamsRequestAmino): _194.QueryParamsRequest;
                toAmino(_: _194.QueryParamsRequest): _194.QueryParamsRequestAmino;
                fromAminoMsg(object: _194.QueryParamsRequestAminoMsg): _194.QueryParamsRequest;
                toAminoMsg(message: _194.QueryParamsRequest): _194.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _194.QueryParamsRequestProtoMsg): _194.QueryParamsRequest;
                toProto(message: _194.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _194.QueryParamsRequest): _194.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _194.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryParamsResponse;
                fromPartial(object: Partial<_194.QueryParamsResponse>): _194.QueryParamsResponse;
                fromAmino(object: _194.QueryParamsResponseAmino): _194.QueryParamsResponse;
                toAmino(message: _194.QueryParamsResponse): _194.QueryParamsResponseAmino;
                fromAminoMsg(object: _194.QueryParamsResponseAminoMsg): _194.QueryParamsResponse;
                toAminoMsg(message: _194.QueryParamsResponse): _194.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _194.QueryParamsResponseProtoMsg): _194.QueryParamsResponse;
                toProto(message: _194.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _194.QueryParamsResponse): _194.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _194.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_194.QueryContractsByCreatorRequest>): _194.QueryContractsByCreatorRequest;
                fromAmino(object: _194.QueryContractsByCreatorRequestAmino): _194.QueryContractsByCreatorRequest;
                toAmino(message: _194.QueryContractsByCreatorRequest): _194.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _194.QueryContractsByCreatorRequestAminoMsg): _194.QueryContractsByCreatorRequest;
                toAminoMsg(message: _194.QueryContractsByCreatorRequest): _194.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _194.QueryContractsByCreatorRequestProtoMsg): _194.QueryContractsByCreatorRequest;
                toProto(message: _194.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _194.QueryContractsByCreatorRequest): _194.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _194.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _194.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_194.QueryContractsByCreatorResponse>): _194.QueryContractsByCreatorResponse;
                fromAmino(object: _194.QueryContractsByCreatorResponseAmino): _194.QueryContractsByCreatorResponse;
                toAmino(message: _194.QueryContractsByCreatorResponse): _194.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _194.QueryContractsByCreatorResponseAminoMsg): _194.QueryContractsByCreatorResponse;
                toAminoMsg(message: _194.QueryContractsByCreatorResponse): _194.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _194.QueryContractsByCreatorResponseProtoMsg): _194.QueryContractsByCreatorResponse;
                toProto(message: _194.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _194.QueryContractsByCreatorResponse): _194.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _193.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.StoreCodeProposal;
                fromPartial(object: Partial<_193.StoreCodeProposal>): _193.StoreCodeProposal;
                fromAmino(object: _193.StoreCodeProposalAmino): _193.StoreCodeProposal;
                toAmino(message: _193.StoreCodeProposal): _193.StoreCodeProposalAmino;
                fromAminoMsg(object: _193.StoreCodeProposalAminoMsg): _193.StoreCodeProposal;
                toAminoMsg(message: _193.StoreCodeProposal): _193.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _193.StoreCodeProposalProtoMsg): _193.StoreCodeProposal;
                toProto(message: _193.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _193.StoreCodeProposal): _193.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _193.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.InstantiateContractProposal;
                fromPartial(object: Partial<_193.InstantiateContractProposal>): _193.InstantiateContractProposal;
                fromAmino(object: _193.InstantiateContractProposalAmino): _193.InstantiateContractProposal;
                toAmino(message: _193.InstantiateContractProposal): _193.InstantiateContractProposalAmino;
                fromAminoMsg(object: _193.InstantiateContractProposalAminoMsg): _193.InstantiateContractProposal;
                toAminoMsg(message: _193.InstantiateContractProposal): _193.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _193.InstantiateContractProposalProtoMsg): _193.InstantiateContractProposal;
                toProto(message: _193.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _193.InstantiateContractProposal): _193.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _193.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.InstantiateContract2Proposal;
                fromPartial(object: Partial<_193.InstantiateContract2Proposal>): _193.InstantiateContract2Proposal;
                fromAmino(object: _193.InstantiateContract2ProposalAmino): _193.InstantiateContract2Proposal;
                toAmino(message: _193.InstantiateContract2Proposal): _193.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _193.InstantiateContract2ProposalAminoMsg): _193.InstantiateContract2Proposal;
                toAminoMsg(message: _193.InstantiateContract2Proposal): _193.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _193.InstantiateContract2ProposalProtoMsg): _193.InstantiateContract2Proposal;
                toProto(message: _193.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _193.InstantiateContract2Proposal): _193.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _193.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.MigrateContractProposal;
                fromPartial(object: Partial<_193.MigrateContractProposal>): _193.MigrateContractProposal;
                fromAmino(object: _193.MigrateContractProposalAmino): _193.MigrateContractProposal;
                toAmino(message: _193.MigrateContractProposal): _193.MigrateContractProposalAmino;
                fromAminoMsg(object: _193.MigrateContractProposalAminoMsg): _193.MigrateContractProposal;
                toAminoMsg(message: _193.MigrateContractProposal): _193.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _193.MigrateContractProposalProtoMsg): _193.MigrateContractProposal;
                toProto(message: _193.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _193.MigrateContractProposal): _193.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _193.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.SudoContractProposal;
                fromPartial(object: Partial<_193.SudoContractProposal>): _193.SudoContractProposal;
                fromAmino(object: _193.SudoContractProposalAmino): _193.SudoContractProposal;
                toAmino(message: _193.SudoContractProposal): _193.SudoContractProposalAmino;
                fromAminoMsg(object: _193.SudoContractProposalAminoMsg): _193.SudoContractProposal;
                toAminoMsg(message: _193.SudoContractProposal): _193.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _193.SudoContractProposalProtoMsg): _193.SudoContractProposal;
                toProto(message: _193.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _193.SudoContractProposal): _193.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _193.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.ExecuteContractProposal;
                fromPartial(object: Partial<_193.ExecuteContractProposal>): _193.ExecuteContractProposal;
                fromAmino(object: _193.ExecuteContractProposalAmino): _193.ExecuteContractProposal;
                toAmino(message: _193.ExecuteContractProposal): _193.ExecuteContractProposalAmino;
                fromAminoMsg(object: _193.ExecuteContractProposalAminoMsg): _193.ExecuteContractProposal;
                toAminoMsg(message: _193.ExecuteContractProposal): _193.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _193.ExecuteContractProposalProtoMsg): _193.ExecuteContractProposal;
                toProto(message: _193.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _193.ExecuteContractProposal): _193.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _193.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.UpdateAdminProposal;
                fromPartial(object: Partial<_193.UpdateAdminProposal>): _193.UpdateAdminProposal;
                fromAmino(object: _193.UpdateAdminProposalAmino): _193.UpdateAdminProposal;
                toAmino(message: _193.UpdateAdminProposal): _193.UpdateAdminProposalAmino;
                fromAminoMsg(object: _193.UpdateAdminProposalAminoMsg): _193.UpdateAdminProposal;
                toAminoMsg(message: _193.UpdateAdminProposal): _193.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _193.UpdateAdminProposalProtoMsg): _193.UpdateAdminProposal;
                toProto(message: _193.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _193.UpdateAdminProposal): _193.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _193.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.ClearAdminProposal;
                fromPartial(object: Partial<_193.ClearAdminProposal>): _193.ClearAdminProposal;
                fromAmino(object: _193.ClearAdminProposalAmino): _193.ClearAdminProposal;
                toAmino(message: _193.ClearAdminProposal): _193.ClearAdminProposalAmino;
                fromAminoMsg(object: _193.ClearAdminProposalAminoMsg): _193.ClearAdminProposal;
                toAminoMsg(message: _193.ClearAdminProposal): _193.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _193.ClearAdminProposalProtoMsg): _193.ClearAdminProposal;
                toProto(message: _193.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _193.ClearAdminProposal): _193.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _193.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.PinCodesProposal;
                fromPartial(object: Partial<_193.PinCodesProposal>): _193.PinCodesProposal;
                fromAmino(object: _193.PinCodesProposalAmino): _193.PinCodesProposal;
                toAmino(message: _193.PinCodesProposal): _193.PinCodesProposalAmino;
                fromAminoMsg(object: _193.PinCodesProposalAminoMsg): _193.PinCodesProposal;
                toAminoMsg(message: _193.PinCodesProposal): _193.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _193.PinCodesProposalProtoMsg): _193.PinCodesProposal;
                toProto(message: _193.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _193.PinCodesProposal): _193.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _193.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.UnpinCodesProposal;
                fromPartial(object: Partial<_193.UnpinCodesProposal>): _193.UnpinCodesProposal;
                fromAmino(object: _193.UnpinCodesProposalAmino): _193.UnpinCodesProposal;
                toAmino(message: _193.UnpinCodesProposal): _193.UnpinCodesProposalAmino;
                fromAminoMsg(object: _193.UnpinCodesProposalAminoMsg): _193.UnpinCodesProposal;
                toAminoMsg(message: _193.UnpinCodesProposal): _193.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _193.UnpinCodesProposalProtoMsg): _193.UnpinCodesProposal;
                toProto(message: _193.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _193.UnpinCodesProposal): _193.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _193.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.AccessConfigUpdate;
                fromPartial(object: Partial<_193.AccessConfigUpdate>): _193.AccessConfigUpdate;
                fromAmino(object: _193.AccessConfigUpdateAmino): _193.AccessConfigUpdate;
                toAmino(message: _193.AccessConfigUpdate): _193.AccessConfigUpdateAmino;
                fromAminoMsg(object: _193.AccessConfigUpdateAminoMsg): _193.AccessConfigUpdate;
                toAminoMsg(message: _193.AccessConfigUpdate): _193.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _193.AccessConfigUpdateProtoMsg): _193.AccessConfigUpdate;
                toProto(message: _193.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _193.AccessConfigUpdate): _193.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _193.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_193.UpdateInstantiateConfigProposal>): _193.UpdateInstantiateConfigProposal;
                fromAmino(object: _193.UpdateInstantiateConfigProposalAmino): _193.UpdateInstantiateConfigProposal;
                toAmino(message: _193.UpdateInstantiateConfigProposal): _193.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _193.UpdateInstantiateConfigProposalAminoMsg): _193.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _193.UpdateInstantiateConfigProposal): _193.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _193.UpdateInstantiateConfigProposalProtoMsg): _193.UpdateInstantiateConfigProposal;
                toProto(message: _193.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _193.UpdateInstantiateConfigProposal): _193.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _193.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _193.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_193.StoreAndInstantiateContractProposal>): _193.StoreAndInstantiateContractProposal;
                fromAmino(object: _193.StoreAndInstantiateContractProposalAmino): _193.StoreAndInstantiateContractProposal;
                toAmino(message: _193.StoreAndInstantiateContractProposal): _193.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _193.StoreAndInstantiateContractProposalAminoMsg): _193.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _193.StoreAndInstantiateContractProposal): _193.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _193.StoreAndInstantiateContractProposalProtoMsg): _193.StoreAndInstantiateContractProposal;
                toProto(message: _193.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _193.StoreAndInstantiateContractProposal): _193.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _192.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _192.MsgIBCSend;
                fromPartial(object: Partial<_192.MsgIBCSend>): _192.MsgIBCSend;
                fromAmino(object: _192.MsgIBCSendAmino): _192.MsgIBCSend;
                toAmino(message: _192.MsgIBCSend): _192.MsgIBCSendAmino;
                fromAminoMsg(object: _192.MsgIBCSendAminoMsg): _192.MsgIBCSend;
                toAminoMsg(message: _192.MsgIBCSend): _192.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _192.MsgIBCSendProtoMsg): _192.MsgIBCSend;
                toProto(message: _192.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _192.MsgIBCSend): _192.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _192.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _192.MsgIBCSendResponse;
                fromPartial(object: Partial<_192.MsgIBCSendResponse>): _192.MsgIBCSendResponse;
                fromAmino(object: _192.MsgIBCSendResponseAmino): _192.MsgIBCSendResponse;
                toAmino(message: _192.MsgIBCSendResponse): _192.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _192.MsgIBCSendResponseAminoMsg): _192.MsgIBCSendResponse;
                toAminoMsg(message: _192.MsgIBCSendResponse): _192.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _192.MsgIBCSendResponseProtoMsg): _192.MsgIBCSendResponse;
                toProto(message: _192.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _192.MsgIBCSendResponse): _192.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _192.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _192.MsgIBCCloseChannel;
                fromPartial(object: Partial<_192.MsgIBCCloseChannel>): _192.MsgIBCCloseChannel;
                fromAmino(object: _192.MsgIBCCloseChannelAmino): _192.MsgIBCCloseChannel;
                toAmino(message: _192.MsgIBCCloseChannel): _192.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _192.MsgIBCCloseChannelAminoMsg): _192.MsgIBCCloseChannel;
                toAminoMsg(message: _192.MsgIBCCloseChannel): _192.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _192.MsgIBCCloseChannelProtoMsg): _192.MsgIBCCloseChannel;
                toProto(message: _192.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _192.MsgIBCCloseChannel): _192.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _191.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.GenesisState;
                fromPartial(object: Partial<_191.GenesisState>): _191.GenesisState;
                fromAmino(object: _191.GenesisStateAmino): _191.GenesisState;
                toAmino(message: _191.GenesisState): _191.GenesisStateAmino;
                fromAminoMsg(object: _191.GenesisStateAminoMsg): _191.GenesisState;
                toAminoMsg(message: _191.GenesisState): _191.GenesisStateAminoMsg;
                fromProtoMsg(message: _191.GenesisStateProtoMsg): _191.GenesisState;
                toProto(message: _191.GenesisState): Uint8Array;
                toProtoMsg(message: _191.GenesisState): _191.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _191.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.Code;
                fromPartial(object: Partial<_191.Code>): _191.Code;
                fromAmino(object: _191.CodeAmino): _191.Code;
                toAmino(message: _191.Code): _191.CodeAmino;
                fromAminoMsg(object: _191.CodeAminoMsg): _191.Code;
                toAminoMsg(message: _191.Code): _191.CodeAminoMsg;
                fromProtoMsg(message: _191.CodeProtoMsg): _191.Code;
                toProto(message: _191.Code): Uint8Array;
                toProtoMsg(message: _191.Code): _191.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _191.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.Contract;
                fromPartial(object: Partial<_191.Contract>): _191.Contract;
                fromAmino(object: _191.ContractAmino): _191.Contract;
                toAmino(message: _191.Contract): _191.ContractAmino;
                fromAminoMsg(object: _191.ContractAminoMsg): _191.Contract;
                toAminoMsg(message: _191.Contract): _191.ContractAminoMsg;
                fromProtoMsg(message: _191.ContractProtoMsg): _191.Contract;
                toProto(message: _191.Contract): Uint8Array;
                toProtoMsg(message: _191.Contract): _191.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _191.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _191.Sequence;
                fromPartial(object: Partial<_191.Sequence>): _191.Sequence;
                fromAmino(object: _191.SequenceAmino): _191.Sequence;
                toAmino(message: _191.Sequence): _191.SequenceAmino;
                fromAminoMsg(object: _191.SequenceAminoMsg): _191.Sequence;
                toAminoMsg(message: _191.Sequence): _191.SequenceAminoMsg;
                fromProtoMsg(message: _191.SequenceProtoMsg): _191.Sequence;
                toProto(message: _191.Sequence): Uint8Array;
                toProtoMsg(message: _191.Sequence): _191.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _190.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.ContractExecutionAuthorization;
                fromPartial(object: Partial<_190.ContractExecutionAuthorization>): _190.ContractExecutionAuthorization;
                fromAmino(object: _190.ContractExecutionAuthorizationAmino): _190.ContractExecutionAuthorization;
                toAmino(message: _190.ContractExecutionAuthorization): _190.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _190.ContractExecutionAuthorizationAminoMsg): _190.ContractExecutionAuthorization;
                toAminoMsg(message: _190.ContractExecutionAuthorization): _190.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _190.ContractExecutionAuthorizationProtoMsg): _190.ContractExecutionAuthorization;
                toProto(message: _190.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _190.ContractExecutionAuthorization): _190.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _190.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.ContractMigrationAuthorization;
                fromPartial(object: Partial<_190.ContractMigrationAuthorization>): _190.ContractMigrationAuthorization;
                fromAmino(object: _190.ContractMigrationAuthorizationAmino): _190.ContractMigrationAuthorization;
                toAmino(message: _190.ContractMigrationAuthorization): _190.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _190.ContractMigrationAuthorizationAminoMsg): _190.ContractMigrationAuthorization;
                toAminoMsg(message: _190.ContractMigrationAuthorization): _190.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _190.ContractMigrationAuthorizationProtoMsg): _190.ContractMigrationAuthorization;
                toProto(message: _190.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _190.ContractMigrationAuthorization): _190.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _190.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.ContractGrant;
                fromPartial(object: Partial<_190.ContractGrant>): _190.ContractGrant;
                fromAmino(object: _190.ContractGrantAmino): _190.ContractGrant;
                toAmino(message: _190.ContractGrant): _190.ContractGrantAmino;
                fromAminoMsg(object: _190.ContractGrantAminoMsg): _190.ContractGrant;
                toAminoMsg(message: _190.ContractGrant): _190.ContractGrantAminoMsg;
                fromProtoMsg(message: _190.ContractGrantProtoMsg): _190.ContractGrant;
                toProto(message: _190.ContractGrant): Uint8Array;
                toProtoMsg(message: _190.ContractGrant): _190.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _190.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.MaxCallsLimit;
                fromPartial(object: Partial<_190.MaxCallsLimit>): _190.MaxCallsLimit;
                fromAmino(object: _190.MaxCallsLimitAmino): _190.MaxCallsLimit;
                toAmino(message: _190.MaxCallsLimit): _190.MaxCallsLimitAmino;
                fromAminoMsg(object: _190.MaxCallsLimitAminoMsg): _190.MaxCallsLimit;
                toAminoMsg(message: _190.MaxCallsLimit): _190.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _190.MaxCallsLimitProtoMsg): _190.MaxCallsLimit;
                toProto(message: _190.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _190.MaxCallsLimit): _190.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _190.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.MaxFundsLimit;
                fromPartial(object: Partial<_190.MaxFundsLimit>): _190.MaxFundsLimit;
                fromAmino(object: _190.MaxFundsLimitAmino): _190.MaxFundsLimit;
                toAmino(message: _190.MaxFundsLimit): _190.MaxFundsLimitAmino;
                fromAminoMsg(object: _190.MaxFundsLimitAminoMsg): _190.MaxFundsLimit;
                toAminoMsg(message: _190.MaxFundsLimit): _190.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _190.MaxFundsLimitProtoMsg): _190.MaxFundsLimit;
                toProto(message: _190.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _190.MaxFundsLimit): _190.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _190.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.CombinedLimit;
                fromPartial(object: Partial<_190.CombinedLimit>): _190.CombinedLimit;
                fromAmino(object: _190.CombinedLimitAmino): _190.CombinedLimit;
                toAmino(message: _190.CombinedLimit): _190.CombinedLimitAmino;
                fromAminoMsg(object: _190.CombinedLimitAminoMsg): _190.CombinedLimit;
                toAminoMsg(message: _190.CombinedLimit): _190.CombinedLimitAminoMsg;
                fromProtoMsg(message: _190.CombinedLimitProtoMsg): _190.CombinedLimit;
                toProto(message: _190.CombinedLimit): Uint8Array;
                toProtoMsg(message: _190.CombinedLimit): _190.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _190.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _190.AllowAllMessagesFilter;
                fromPartial(_: Partial<_190.AllowAllMessagesFilter>): _190.AllowAllMessagesFilter;
                fromAmino(_: _190.AllowAllMessagesFilterAmino): _190.AllowAllMessagesFilter;
                toAmino(_: _190.AllowAllMessagesFilter): _190.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _190.AllowAllMessagesFilterAminoMsg): _190.AllowAllMessagesFilter;
                toAminoMsg(message: _190.AllowAllMessagesFilter): _190.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _190.AllowAllMessagesFilterProtoMsg): _190.AllowAllMessagesFilter;
                toProto(message: _190.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _190.AllowAllMessagesFilter): _190.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _190.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_190.AcceptedMessageKeysFilter>): _190.AcceptedMessageKeysFilter;
                fromAmino(object: _190.AcceptedMessageKeysFilterAmino): _190.AcceptedMessageKeysFilter;
                toAmino(message: _190.AcceptedMessageKeysFilter): _190.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _190.AcceptedMessageKeysFilterAminoMsg): _190.AcceptedMessageKeysFilter;
                toAminoMsg(message: _190.AcceptedMessageKeysFilter): _190.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _190.AcceptedMessageKeysFilterProtoMsg): _190.AcceptedMessageKeysFilter;
                toProto(message: _190.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _190.AcceptedMessageKeysFilter): _190.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _190.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _190.AcceptedMessagesFilter;
                fromPartial(object: Partial<_190.AcceptedMessagesFilter>): _190.AcceptedMessagesFilter;
                fromAmino(object: _190.AcceptedMessagesFilterAmino): _190.AcceptedMessagesFilter;
                toAmino(message: _190.AcceptedMessagesFilter): _190.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _190.AcceptedMessagesFilterAminoMsg): _190.AcceptedMessagesFilter;
                toAminoMsg(message: _190.AcceptedMessagesFilter): _190.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _190.AcceptedMessagesFilterProtoMsg): _190.AcceptedMessagesFilter;
                toProto(message: _190.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _190.AcceptedMessagesFilter): _190.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _190.MaxCallsLimit | _190.MaxFundsLimit | _190.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _190.AllowAllMessagesFilter | _190.AcceptedMessageKeysFilter | _190.AcceptedMessagesFilter;
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
                    v1: _340.MsgClientImpl;
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
                        contractInfo(request: _194.QueryContractInfoRequest): Promise<_194.QueryContractInfoResponse>;
                        contractHistory(request: _194.QueryContractHistoryRequest): Promise<_194.QueryContractHistoryResponse>;
                        contractsByCode(request: _194.QueryContractsByCodeRequest): Promise<_194.QueryContractsByCodeResponse>;
                        allContractState(request: _194.QueryAllContractStateRequest): Promise<_194.QueryAllContractStateResponse>;
                        rawContractState(request: _194.QueryRawContractStateRequest): Promise<_194.QueryRawContractStateResponse>;
                        smartContractState(request: _194.QuerySmartContractStateRequest): Promise<_194.QuerySmartContractStateResponse>;
                        code(request: _194.QueryCodeRequest): Promise<_194.QueryCodeResponse>;
                        codes(request?: _194.QueryCodesRequest): Promise<_194.QueryCodesResponse>;
                        pinnedCodes(request?: _194.QueryPinnedCodesRequest): Promise<_194.QueryPinnedCodesResponse>;
                        params(request?: _194.QueryParamsRequest): Promise<_194.QueryParamsResponse>;
                        contractsByCreator(request: _194.QueryContractsByCreatorRequest): Promise<_194.QueryContractsByCreatorResponse>;
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
                    v1: _338.LCDQueryClient;
                };
            };
        }>;
    };
}
