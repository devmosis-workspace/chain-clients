import * as _144 from "./wasm/v1/authz";
import * as _145 from "./wasm/v1/genesis";
import * as _146 from "./wasm/v1/ibc";
import * as _147 from "./wasm/v1/proposal_legacy";
import * as _148 from "./wasm/v1/query";
import * as _149 from "./wasm/v1/tx";
import * as _150 from "./wasm/v1/types";
import * as _305 from "./wasm/v1/query.lcd";
import * as _306 from "./wasm/v1/query.rpc.Query";
import * as _307 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _307.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _148.QueryContractInfoRequest): Promise<_148.QueryContractInfoResponse>;
                contractHistory(request: _148.QueryContractHistoryRequest): Promise<_148.QueryContractHistoryResponse>;
                contractsByCode(request: _148.QueryContractsByCodeRequest): Promise<_148.QueryContractsByCodeResponse>;
                allContractState(request: _148.QueryAllContractStateRequest): Promise<_148.QueryAllContractStateResponse>;
                rawContractState(request: _148.QueryRawContractStateRequest): Promise<_148.QueryRawContractStateResponse>;
                smartContractState(request: _148.QuerySmartContractStateRequest): Promise<_148.QuerySmartContractStateResponse>;
                code(request: _148.QueryCodeRequest): Promise<_148.QueryCodeResponse>;
                codes(request?: _148.QueryCodesRequest): Promise<_148.QueryCodesResponse>;
                pinnedCodes(request?: _148.QueryPinnedCodesRequest): Promise<_148.QueryPinnedCodesResponse>;
                params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                contractsByCreator(request: _148.QueryContractsByCreatorRequest): Promise<_148.QueryContractsByCreatorResponse>;
                buildAddress(request: _148.QueryBuildAddressRequest): Promise<_148.QueryBuildAddressResponse>;
            };
            LCDQueryClient: typeof _305.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _149.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _149.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _149.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _149.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _149.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _149.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _149.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _149.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _149.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _149.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _149.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _149.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _149.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _149.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _149.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _149.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _149.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _149.MsgStoreCode): {
                        typeUrl: string;
                        value: _149.MsgStoreCode;
                    };
                    instantiateContract(value: _149.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _149.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _149.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _149.MsgInstantiateContract2;
                    };
                    executeContract(value: _149.MsgExecuteContract): {
                        typeUrl: string;
                        value: _149.MsgExecuteContract;
                    };
                    migrateContract(value: _149.MsgMigrateContract): {
                        typeUrl: string;
                        value: _149.MsgMigrateContract;
                    };
                    updateAdmin(value: _149.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _149.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _149.MsgClearAdmin): {
                        typeUrl: string;
                        value: _149.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _149.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _149.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _149.MsgUpdateParams): {
                        typeUrl: string;
                        value: _149.MsgUpdateParams;
                    };
                    sudoContract(value: _149.MsgSudoContract): {
                        typeUrl: string;
                        value: _149.MsgSudoContract;
                    };
                    pinCodes(value: _149.MsgPinCodes): {
                        typeUrl: string;
                        value: _149.MsgPinCodes;
                    };
                    unpinCodes(value: _149.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _149.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _149.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _149.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _149.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _149.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _149.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _149.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _149.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _149.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _149.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _149.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _149.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _149.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _149.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _149.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _149.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _149.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _149.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _149.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _149.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _149.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _149.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _149.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _149.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _149.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _149.MsgStoreCode): {
                        typeUrl: string;
                        value: _149.MsgStoreCode;
                    };
                    instantiateContract(value: _149.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _149.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _149.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _149.MsgInstantiateContract2;
                    };
                    executeContract(value: _149.MsgExecuteContract): {
                        typeUrl: string;
                        value: _149.MsgExecuteContract;
                    };
                    migrateContract(value: _149.MsgMigrateContract): {
                        typeUrl: string;
                        value: _149.MsgMigrateContract;
                    };
                    updateAdmin(value: _149.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _149.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _149.MsgClearAdmin): {
                        typeUrl: string;
                        value: _149.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _149.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _149.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _149.MsgUpdateParams): {
                        typeUrl: string;
                        value: _149.MsgUpdateParams;
                    };
                    sudoContract(value: _149.MsgSudoContract): {
                        typeUrl: string;
                        value: _149.MsgSudoContract;
                    };
                    pinCodes(value: _149.MsgPinCodes): {
                        typeUrl: string;
                        value: _149.MsgPinCodes;
                    };
                    unpinCodes(value: _149.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _149.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _149.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _149.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _149.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _149.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _149.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _149.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _149.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _149.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _149.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _149.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _149.MsgStoreCode) => _149.MsgStoreCodeAmino;
                    fromAmino: (object: _149.MsgStoreCodeAmino) => _149.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _149.MsgInstantiateContract) => _149.MsgInstantiateContractAmino;
                    fromAmino: (object: _149.MsgInstantiateContractAmino) => _149.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _149.MsgInstantiateContract2) => _149.MsgInstantiateContract2Amino;
                    fromAmino: (object: _149.MsgInstantiateContract2Amino) => _149.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _149.MsgExecuteContract) => _149.MsgExecuteContractAmino;
                    fromAmino: (object: _149.MsgExecuteContractAmino) => _149.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _149.MsgMigrateContract) => _149.MsgMigrateContractAmino;
                    fromAmino: (object: _149.MsgMigrateContractAmino) => _149.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateAdmin) => _149.MsgUpdateAdminAmino;
                    fromAmino: (object: _149.MsgUpdateAdminAmino) => _149.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _149.MsgClearAdmin) => _149.MsgClearAdminAmino;
                    fromAmino: (object: _149.MsgClearAdminAmino) => _149.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateInstantiateConfig) => _149.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _149.MsgUpdateInstantiateConfigAmino) => _149.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateParams) => _149.MsgUpdateParamsAmino;
                    fromAmino: (object: _149.MsgUpdateParamsAmino) => _149.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _149.MsgSudoContract) => _149.MsgSudoContractAmino;
                    fromAmino: (object: _149.MsgSudoContractAmino) => _149.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _149.MsgPinCodes) => _149.MsgPinCodesAmino;
                    fromAmino: (object: _149.MsgPinCodesAmino) => _149.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUnpinCodes) => _149.MsgUnpinCodesAmino;
                    fromAmino: (object: _149.MsgUnpinCodesAmino) => _149.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _149.MsgStoreAndInstantiateContract) => _149.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _149.MsgStoreAndInstantiateContractAmino) => _149.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _149.MsgRemoveCodeUploadParamsAddresses) => _149.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _149.MsgRemoveCodeUploadParamsAddressesAmino) => _149.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _149.MsgAddCodeUploadParamsAddresses) => _149.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _149.MsgAddCodeUploadParamsAddressesAmino) => _149.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _149.MsgStoreAndMigrateContract) => _149.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _149.MsgStoreAndMigrateContractAmino) => _149.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _149.MsgUpdateContractLabel) => _149.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _149.MsgUpdateContractLabelAmino) => _149.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _150.AccessType;
            accessTypeToJSON(object: _150.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _150.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _150.ContractCodeHistoryOperationType): string;
            AccessType: typeof _150.AccessType;
            AccessTypeSDKType: typeof _150.AccessType;
            AccessTypeAmino: typeof _150.AccessType;
            ContractCodeHistoryOperationType: typeof _150.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _150.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _150.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _150.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.AccessTypeParam;
                fromPartial(object: Partial<_150.AccessTypeParam>): _150.AccessTypeParam;
                fromAmino(object: _150.AccessTypeParamAmino): _150.AccessTypeParam;
                toAmino(message: _150.AccessTypeParam): _150.AccessTypeParamAmino;
                fromAminoMsg(object: _150.AccessTypeParamAminoMsg): _150.AccessTypeParam;
                toAminoMsg(message: _150.AccessTypeParam): _150.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _150.AccessTypeParamProtoMsg): _150.AccessTypeParam;
                toProto(message: _150.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _150.AccessTypeParam): _150.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _150.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.AccessConfig;
                fromPartial(object: Partial<_150.AccessConfig>): _150.AccessConfig;
                fromAmino(object: _150.AccessConfigAmino): _150.AccessConfig;
                toAmino(message: _150.AccessConfig): _150.AccessConfigAmino;
                fromAminoMsg(object: _150.AccessConfigAminoMsg): _150.AccessConfig;
                toAminoMsg(message: _150.AccessConfig): _150.AccessConfigAminoMsg;
                fromProtoMsg(message: _150.AccessConfigProtoMsg): _150.AccessConfig;
                toProto(message: _150.AccessConfig): Uint8Array;
                toProtoMsg(message: _150.AccessConfig): _150.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _150.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Params;
                fromPartial(object: Partial<_150.Params>): _150.Params;
                fromAmino(object: _150.ParamsAmino): _150.Params;
                toAmino(message: _150.Params): _150.ParamsAmino;
                fromAminoMsg(object: _150.ParamsAminoMsg): _150.Params;
                toAminoMsg(message: _150.Params): _150.ParamsAminoMsg;
                fromProtoMsg(message: _150.ParamsProtoMsg): _150.Params;
                toProto(message: _150.Params): Uint8Array;
                toProtoMsg(message: _150.Params): _150.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _150.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.CodeInfo;
                fromPartial(object: Partial<_150.CodeInfo>): _150.CodeInfo;
                fromAmino(object: _150.CodeInfoAmino): _150.CodeInfo;
                toAmino(message: _150.CodeInfo): _150.CodeInfoAmino;
                fromAminoMsg(object: _150.CodeInfoAminoMsg): _150.CodeInfo;
                toAminoMsg(message: _150.CodeInfo): _150.CodeInfoAminoMsg;
                fromProtoMsg(message: _150.CodeInfoProtoMsg): _150.CodeInfo;
                toProto(message: _150.CodeInfo): Uint8Array;
                toProtoMsg(message: _150.CodeInfo): _150.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _150.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ContractInfo;
                fromPartial(object: Partial<_150.ContractInfo>): _150.ContractInfo;
                fromAmino(object: _150.ContractInfoAmino): _150.ContractInfo;
                toAmino(message: _150.ContractInfo): _150.ContractInfoAmino;
                fromAminoMsg(object: _150.ContractInfoAminoMsg): _150.ContractInfo;
                toAminoMsg(message: _150.ContractInfo): _150.ContractInfoAminoMsg;
                fromProtoMsg(message: _150.ContractInfoProtoMsg): _150.ContractInfo;
                toProto(message: _150.ContractInfo): Uint8Array;
                toProtoMsg(message: _150.ContractInfo): _150.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _150.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_150.ContractCodeHistoryEntry>): _150.ContractCodeHistoryEntry;
                fromAmino(object: _150.ContractCodeHistoryEntryAmino): _150.ContractCodeHistoryEntry;
                toAmino(message: _150.ContractCodeHistoryEntry): _150.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _150.ContractCodeHistoryEntryAminoMsg): _150.ContractCodeHistoryEntry;
                toAminoMsg(message: _150.ContractCodeHistoryEntry): _150.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _150.ContractCodeHistoryEntryProtoMsg): _150.ContractCodeHistoryEntry;
                toProto(message: _150.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _150.ContractCodeHistoryEntry): _150.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _150.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.AbsoluteTxPosition;
                fromPartial(object: Partial<_150.AbsoluteTxPosition>): _150.AbsoluteTxPosition;
                fromAmino(object: _150.AbsoluteTxPositionAmino): _150.AbsoluteTxPosition;
                toAmino(message: _150.AbsoluteTxPosition): _150.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _150.AbsoluteTxPositionAminoMsg): _150.AbsoluteTxPosition;
                toAminoMsg(message: _150.AbsoluteTxPosition): _150.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _150.AbsoluteTxPositionProtoMsg): _150.AbsoluteTxPosition;
                toProto(message: _150.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _150.AbsoluteTxPosition): _150.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _150.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _150.Model;
                fromPartial(object: Partial<_150.Model>): _150.Model;
                fromAmino(object: _150.ModelAmino): _150.Model;
                toAmino(message: _150.Model): _150.ModelAmino;
                fromAminoMsg(object: _150.ModelAminoMsg): _150.Model;
                toAminoMsg(message: _150.Model): _150.ModelAminoMsg;
                fromProtoMsg(message: _150.ModelProtoMsg): _150.Model;
                toProto(message: _150.Model): Uint8Array;
                toProtoMsg(message: _150.Model): _150.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _149.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgStoreCode;
                fromPartial(object: Partial<_149.MsgStoreCode>): _149.MsgStoreCode;
                fromAmino(object: _149.MsgStoreCodeAmino): _149.MsgStoreCode;
                toAmino(message: _149.MsgStoreCode): _149.MsgStoreCodeAmino;
                fromAminoMsg(object: _149.MsgStoreCodeAminoMsg): _149.MsgStoreCode;
                toAminoMsg(message: _149.MsgStoreCode): _149.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _149.MsgStoreCodeProtoMsg): _149.MsgStoreCode;
                toProto(message: _149.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _149.MsgStoreCode): _149.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _149.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgStoreCodeResponse;
                fromPartial(object: Partial<_149.MsgStoreCodeResponse>): _149.MsgStoreCodeResponse;
                fromAmino(object: _149.MsgStoreCodeResponseAmino): _149.MsgStoreCodeResponse;
                toAmino(message: _149.MsgStoreCodeResponse): _149.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _149.MsgStoreCodeResponseAminoMsg): _149.MsgStoreCodeResponse;
                toAminoMsg(message: _149.MsgStoreCodeResponse): _149.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _149.MsgStoreCodeResponseProtoMsg): _149.MsgStoreCodeResponse;
                toProto(message: _149.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _149.MsgStoreCodeResponse): _149.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _149.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgInstantiateContract;
                fromPartial(object: Partial<_149.MsgInstantiateContract>): _149.MsgInstantiateContract;
                fromAmino(object: _149.MsgInstantiateContractAmino): _149.MsgInstantiateContract;
                toAmino(message: _149.MsgInstantiateContract): _149.MsgInstantiateContractAmino;
                fromAminoMsg(object: _149.MsgInstantiateContractAminoMsg): _149.MsgInstantiateContract;
                toAminoMsg(message: _149.MsgInstantiateContract): _149.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _149.MsgInstantiateContractProtoMsg): _149.MsgInstantiateContract;
                toProto(message: _149.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _149.MsgInstantiateContract): _149.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _149.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_149.MsgInstantiateContractResponse>): _149.MsgInstantiateContractResponse;
                fromAmino(object: _149.MsgInstantiateContractResponseAmino): _149.MsgInstantiateContractResponse;
                toAmino(message: _149.MsgInstantiateContractResponse): _149.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _149.MsgInstantiateContractResponseAminoMsg): _149.MsgInstantiateContractResponse;
                toAminoMsg(message: _149.MsgInstantiateContractResponse): _149.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _149.MsgInstantiateContractResponseProtoMsg): _149.MsgInstantiateContractResponse;
                toProto(message: _149.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _149.MsgInstantiateContractResponse): _149.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _149.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgInstantiateContract2;
                fromPartial(object: Partial<_149.MsgInstantiateContract2>): _149.MsgInstantiateContract2;
                fromAmino(object: _149.MsgInstantiateContract2Amino): _149.MsgInstantiateContract2;
                toAmino(message: _149.MsgInstantiateContract2): _149.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _149.MsgInstantiateContract2AminoMsg): _149.MsgInstantiateContract2;
                toAminoMsg(message: _149.MsgInstantiateContract2): _149.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _149.MsgInstantiateContract2ProtoMsg): _149.MsgInstantiateContract2;
                toProto(message: _149.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _149.MsgInstantiateContract2): _149.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _149.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_149.MsgInstantiateContract2Response>): _149.MsgInstantiateContract2Response;
                fromAmino(object: _149.MsgInstantiateContract2ResponseAmino): _149.MsgInstantiateContract2Response;
                toAmino(message: _149.MsgInstantiateContract2Response): _149.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _149.MsgInstantiateContract2ResponseAminoMsg): _149.MsgInstantiateContract2Response;
                toAminoMsg(message: _149.MsgInstantiateContract2Response): _149.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _149.MsgInstantiateContract2ResponseProtoMsg): _149.MsgInstantiateContract2Response;
                toProto(message: _149.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _149.MsgInstantiateContract2Response): _149.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _149.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgExecuteContract;
                fromPartial(object: Partial<_149.MsgExecuteContract>): _149.MsgExecuteContract;
                fromAmino(object: _149.MsgExecuteContractAmino): _149.MsgExecuteContract;
                toAmino(message: _149.MsgExecuteContract): _149.MsgExecuteContractAmino;
                fromAminoMsg(object: _149.MsgExecuteContractAminoMsg): _149.MsgExecuteContract;
                toAminoMsg(message: _149.MsgExecuteContract): _149.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _149.MsgExecuteContractProtoMsg): _149.MsgExecuteContract;
                toProto(message: _149.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _149.MsgExecuteContract): _149.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _149.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgExecuteContractResponse;
                fromPartial(object: Partial<_149.MsgExecuteContractResponse>): _149.MsgExecuteContractResponse;
                fromAmino(object: _149.MsgExecuteContractResponseAmino): _149.MsgExecuteContractResponse;
                toAmino(message: _149.MsgExecuteContractResponse): _149.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _149.MsgExecuteContractResponseAminoMsg): _149.MsgExecuteContractResponse;
                toAminoMsg(message: _149.MsgExecuteContractResponse): _149.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _149.MsgExecuteContractResponseProtoMsg): _149.MsgExecuteContractResponse;
                toProto(message: _149.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _149.MsgExecuteContractResponse): _149.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _149.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgMigrateContract;
                fromPartial(object: Partial<_149.MsgMigrateContract>): _149.MsgMigrateContract;
                fromAmino(object: _149.MsgMigrateContractAmino): _149.MsgMigrateContract;
                toAmino(message: _149.MsgMigrateContract): _149.MsgMigrateContractAmino;
                fromAminoMsg(object: _149.MsgMigrateContractAminoMsg): _149.MsgMigrateContract;
                toAminoMsg(message: _149.MsgMigrateContract): _149.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _149.MsgMigrateContractProtoMsg): _149.MsgMigrateContract;
                toProto(message: _149.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _149.MsgMigrateContract): _149.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _149.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgMigrateContractResponse;
                fromPartial(object: Partial<_149.MsgMigrateContractResponse>): _149.MsgMigrateContractResponse;
                fromAmino(object: _149.MsgMigrateContractResponseAmino): _149.MsgMigrateContractResponse;
                toAmino(message: _149.MsgMigrateContractResponse): _149.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _149.MsgMigrateContractResponseAminoMsg): _149.MsgMigrateContractResponse;
                toAminoMsg(message: _149.MsgMigrateContractResponse): _149.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _149.MsgMigrateContractResponseProtoMsg): _149.MsgMigrateContractResponse;
                toProto(message: _149.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _149.MsgMigrateContractResponse): _149.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _149.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateAdmin;
                fromPartial(object: Partial<_149.MsgUpdateAdmin>): _149.MsgUpdateAdmin;
                fromAmino(object: _149.MsgUpdateAdminAmino): _149.MsgUpdateAdmin;
                toAmino(message: _149.MsgUpdateAdmin): _149.MsgUpdateAdminAmino;
                fromAminoMsg(object: _149.MsgUpdateAdminAminoMsg): _149.MsgUpdateAdmin;
                toAminoMsg(message: _149.MsgUpdateAdmin): _149.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateAdminProtoMsg): _149.MsgUpdateAdmin;
                toProto(message: _149.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateAdmin): _149.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_149.MsgUpdateAdminResponse>): _149.MsgUpdateAdminResponse;
                fromAmino(_: _149.MsgUpdateAdminResponseAmino): _149.MsgUpdateAdminResponse;
                toAmino(_: _149.MsgUpdateAdminResponse): _149.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateAdminResponseAminoMsg): _149.MsgUpdateAdminResponse;
                toAminoMsg(message: _149.MsgUpdateAdminResponse): _149.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateAdminResponseProtoMsg): _149.MsgUpdateAdminResponse;
                toProto(message: _149.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateAdminResponse): _149.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _149.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgClearAdmin;
                fromPartial(object: Partial<_149.MsgClearAdmin>): _149.MsgClearAdmin;
                fromAmino(object: _149.MsgClearAdminAmino): _149.MsgClearAdmin;
                toAmino(message: _149.MsgClearAdmin): _149.MsgClearAdminAmino;
                fromAminoMsg(object: _149.MsgClearAdminAminoMsg): _149.MsgClearAdmin;
                toAminoMsg(message: _149.MsgClearAdmin): _149.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _149.MsgClearAdminProtoMsg): _149.MsgClearAdmin;
                toProto(message: _149.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _149.MsgClearAdmin): _149.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _149.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgClearAdminResponse;
                fromPartial(_: Partial<_149.MsgClearAdminResponse>): _149.MsgClearAdminResponse;
                fromAmino(_: _149.MsgClearAdminResponseAmino): _149.MsgClearAdminResponse;
                toAmino(_: _149.MsgClearAdminResponse): _149.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _149.MsgClearAdminResponseAminoMsg): _149.MsgClearAdminResponse;
                toAminoMsg(message: _149.MsgClearAdminResponse): _149.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _149.MsgClearAdminResponseProtoMsg): _149.MsgClearAdminResponse;
                toProto(message: _149.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _149.MsgClearAdminResponse): _149.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _149.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_149.MsgUpdateInstantiateConfig>): _149.MsgUpdateInstantiateConfig;
                fromAmino(object: _149.MsgUpdateInstantiateConfigAmino): _149.MsgUpdateInstantiateConfig;
                toAmino(message: _149.MsgUpdateInstantiateConfig): _149.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _149.MsgUpdateInstantiateConfigAminoMsg): _149.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _149.MsgUpdateInstantiateConfig): _149.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateInstantiateConfigProtoMsg): _149.MsgUpdateInstantiateConfig;
                toProto(message: _149.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateInstantiateConfig): _149.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_149.MsgUpdateInstantiateConfigResponse>): _149.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _149.MsgUpdateInstantiateConfigResponseAmino): _149.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _149.MsgUpdateInstantiateConfigResponse): _149.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateInstantiateConfigResponseAminoMsg): _149.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _149.MsgUpdateInstantiateConfigResponse): _149.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateInstantiateConfigResponseProtoMsg): _149.MsgUpdateInstantiateConfigResponse;
                toProto(message: _149.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateInstantiateConfigResponse): _149.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _149.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateParams;
                fromPartial(object: Partial<_149.MsgUpdateParams>): _149.MsgUpdateParams;
                fromAmino(object: _149.MsgUpdateParamsAmino): _149.MsgUpdateParams;
                toAmino(message: _149.MsgUpdateParams): _149.MsgUpdateParamsAmino;
                fromAminoMsg(object: _149.MsgUpdateParamsAminoMsg): _149.MsgUpdateParams;
                toAminoMsg(message: _149.MsgUpdateParams): _149.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateParamsProtoMsg): _149.MsgUpdateParams;
                toProto(message: _149.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateParams): _149.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_149.MsgUpdateParamsResponse>): _149.MsgUpdateParamsResponse;
                fromAmino(_: _149.MsgUpdateParamsResponseAmino): _149.MsgUpdateParamsResponse;
                toAmino(_: _149.MsgUpdateParamsResponse): _149.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateParamsResponseAminoMsg): _149.MsgUpdateParamsResponse;
                toAminoMsg(message: _149.MsgUpdateParamsResponse): _149.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateParamsResponseProtoMsg): _149.MsgUpdateParamsResponse;
                toProto(message: _149.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateParamsResponse): _149.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _149.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgSudoContract;
                fromPartial(object: Partial<_149.MsgSudoContract>): _149.MsgSudoContract;
                fromAmino(object: _149.MsgSudoContractAmino): _149.MsgSudoContract;
                toAmino(message: _149.MsgSudoContract): _149.MsgSudoContractAmino;
                fromAminoMsg(object: _149.MsgSudoContractAminoMsg): _149.MsgSudoContract;
                toAminoMsg(message: _149.MsgSudoContract): _149.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _149.MsgSudoContractProtoMsg): _149.MsgSudoContract;
                toProto(message: _149.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _149.MsgSudoContract): _149.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _149.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgSudoContractResponse;
                fromPartial(object: Partial<_149.MsgSudoContractResponse>): _149.MsgSudoContractResponse;
                fromAmino(object: _149.MsgSudoContractResponseAmino): _149.MsgSudoContractResponse;
                toAmino(message: _149.MsgSudoContractResponse): _149.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _149.MsgSudoContractResponseAminoMsg): _149.MsgSudoContractResponse;
                toAminoMsg(message: _149.MsgSudoContractResponse): _149.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _149.MsgSudoContractResponseProtoMsg): _149.MsgSudoContractResponse;
                toProto(message: _149.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _149.MsgSudoContractResponse): _149.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _149.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgPinCodes;
                fromPartial(object: Partial<_149.MsgPinCodes>): _149.MsgPinCodes;
                fromAmino(object: _149.MsgPinCodesAmino): _149.MsgPinCodes;
                toAmino(message: _149.MsgPinCodes): _149.MsgPinCodesAmino;
                fromAminoMsg(object: _149.MsgPinCodesAminoMsg): _149.MsgPinCodes;
                toAminoMsg(message: _149.MsgPinCodes): _149.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _149.MsgPinCodesProtoMsg): _149.MsgPinCodes;
                toProto(message: _149.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _149.MsgPinCodes): _149.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _149.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgPinCodesResponse;
                fromPartial(_: Partial<_149.MsgPinCodesResponse>): _149.MsgPinCodesResponse;
                fromAmino(_: _149.MsgPinCodesResponseAmino): _149.MsgPinCodesResponse;
                toAmino(_: _149.MsgPinCodesResponse): _149.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _149.MsgPinCodesResponseAminoMsg): _149.MsgPinCodesResponse;
                toAminoMsg(message: _149.MsgPinCodesResponse): _149.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _149.MsgPinCodesResponseProtoMsg): _149.MsgPinCodesResponse;
                toProto(message: _149.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _149.MsgPinCodesResponse): _149.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _149.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUnpinCodes;
                fromPartial(object: Partial<_149.MsgUnpinCodes>): _149.MsgUnpinCodes;
                fromAmino(object: _149.MsgUnpinCodesAmino): _149.MsgUnpinCodes;
                toAmino(message: _149.MsgUnpinCodes): _149.MsgUnpinCodesAmino;
                fromAminoMsg(object: _149.MsgUnpinCodesAminoMsg): _149.MsgUnpinCodes;
                toAminoMsg(message: _149.MsgUnpinCodes): _149.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _149.MsgUnpinCodesProtoMsg): _149.MsgUnpinCodes;
                toProto(message: _149.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _149.MsgUnpinCodes): _149.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _149.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_149.MsgUnpinCodesResponse>): _149.MsgUnpinCodesResponse;
                fromAmino(_: _149.MsgUnpinCodesResponseAmino): _149.MsgUnpinCodesResponse;
                toAmino(_: _149.MsgUnpinCodesResponse): _149.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _149.MsgUnpinCodesResponseAminoMsg): _149.MsgUnpinCodesResponse;
                toAminoMsg(message: _149.MsgUnpinCodesResponse): _149.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUnpinCodesResponseProtoMsg): _149.MsgUnpinCodesResponse;
                toProto(message: _149.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUnpinCodesResponse): _149.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _149.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_149.MsgStoreAndInstantiateContract>): _149.MsgStoreAndInstantiateContract;
                fromAmino(object: _149.MsgStoreAndInstantiateContractAmino): _149.MsgStoreAndInstantiateContract;
                toAmino(message: _149.MsgStoreAndInstantiateContract): _149.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _149.MsgStoreAndInstantiateContractAminoMsg): _149.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _149.MsgStoreAndInstantiateContract): _149.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _149.MsgStoreAndInstantiateContractProtoMsg): _149.MsgStoreAndInstantiateContract;
                toProto(message: _149.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _149.MsgStoreAndInstantiateContract): _149.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _149.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_149.MsgStoreAndInstantiateContractResponse>): _149.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _149.MsgStoreAndInstantiateContractResponseAmino): _149.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _149.MsgStoreAndInstantiateContractResponse): _149.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _149.MsgStoreAndInstantiateContractResponseAminoMsg): _149.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _149.MsgStoreAndInstantiateContractResponse): _149.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _149.MsgStoreAndInstantiateContractResponseProtoMsg): _149.MsgStoreAndInstantiateContractResponse;
                toProto(message: _149.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _149.MsgStoreAndInstantiateContractResponse): _149.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _149.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_149.MsgAddCodeUploadParamsAddresses>): _149.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _149.MsgAddCodeUploadParamsAddressesAmino): _149.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _149.MsgAddCodeUploadParamsAddresses): _149.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _149.MsgAddCodeUploadParamsAddressesAminoMsg): _149.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _149.MsgAddCodeUploadParamsAddresses): _149.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _149.MsgAddCodeUploadParamsAddressesProtoMsg): _149.MsgAddCodeUploadParamsAddresses;
                toProto(message: _149.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _149.MsgAddCodeUploadParamsAddresses): _149.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _149.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_149.MsgAddCodeUploadParamsAddressesResponse>): _149.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _149.MsgAddCodeUploadParamsAddressesResponseAmino): _149.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _149.MsgAddCodeUploadParamsAddressesResponse): _149.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _149.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _149.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _149.MsgAddCodeUploadParamsAddressesResponse): _149.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _149.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _149.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _149.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _149.MsgAddCodeUploadParamsAddressesResponse): _149.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _149.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_149.MsgRemoveCodeUploadParamsAddresses>): _149.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _149.MsgRemoveCodeUploadParamsAddressesAmino): _149.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _149.MsgRemoveCodeUploadParamsAddresses): _149.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _149.MsgRemoveCodeUploadParamsAddressesAminoMsg): _149.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _149.MsgRemoveCodeUploadParamsAddresses): _149.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _149.MsgRemoveCodeUploadParamsAddressesProtoMsg): _149.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _149.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _149.MsgRemoveCodeUploadParamsAddresses): _149.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _149.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_149.MsgRemoveCodeUploadParamsAddressesResponse>): _149.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _149.MsgRemoveCodeUploadParamsAddressesResponseAmino): _149.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _149.MsgRemoveCodeUploadParamsAddressesResponse): _149.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _149.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _149.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _149.MsgRemoveCodeUploadParamsAddressesResponse): _149.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _149.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _149.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _149.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _149.MsgRemoveCodeUploadParamsAddressesResponse): _149.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _149.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_149.MsgStoreAndMigrateContract>): _149.MsgStoreAndMigrateContract;
                fromAmino(object: _149.MsgStoreAndMigrateContractAmino): _149.MsgStoreAndMigrateContract;
                toAmino(message: _149.MsgStoreAndMigrateContract): _149.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _149.MsgStoreAndMigrateContractAminoMsg): _149.MsgStoreAndMigrateContract;
                toAminoMsg(message: _149.MsgStoreAndMigrateContract): _149.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _149.MsgStoreAndMigrateContractProtoMsg): _149.MsgStoreAndMigrateContract;
                toProto(message: _149.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _149.MsgStoreAndMigrateContract): _149.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _149.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_149.MsgStoreAndMigrateContractResponse>): _149.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _149.MsgStoreAndMigrateContractResponseAmino): _149.MsgStoreAndMigrateContractResponse;
                toAmino(message: _149.MsgStoreAndMigrateContractResponse): _149.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _149.MsgStoreAndMigrateContractResponseAminoMsg): _149.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _149.MsgStoreAndMigrateContractResponse): _149.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _149.MsgStoreAndMigrateContractResponseProtoMsg): _149.MsgStoreAndMigrateContractResponse;
                toProto(message: _149.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _149.MsgStoreAndMigrateContractResponse): _149.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _149.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _149.MsgUpdateContractLabel;
                fromPartial(object: Partial<_149.MsgUpdateContractLabel>): _149.MsgUpdateContractLabel;
                fromAmino(object: _149.MsgUpdateContractLabelAmino): _149.MsgUpdateContractLabel;
                toAmino(message: _149.MsgUpdateContractLabel): _149.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _149.MsgUpdateContractLabelAminoMsg): _149.MsgUpdateContractLabel;
                toAminoMsg(message: _149.MsgUpdateContractLabel): _149.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateContractLabelProtoMsg): _149.MsgUpdateContractLabel;
                toProto(message: _149.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateContractLabel): _149.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _149.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _149.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_149.MsgUpdateContractLabelResponse>): _149.MsgUpdateContractLabelResponse;
                fromAmino(_: _149.MsgUpdateContractLabelResponseAmino): _149.MsgUpdateContractLabelResponse;
                toAmino(_: _149.MsgUpdateContractLabelResponse): _149.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _149.MsgUpdateContractLabelResponseAminoMsg): _149.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _149.MsgUpdateContractLabelResponse): _149.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _149.MsgUpdateContractLabelResponseProtoMsg): _149.MsgUpdateContractLabelResponse;
                toProto(message: _149.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _149.MsgUpdateContractLabelResponse): _149.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _148.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractInfoRequest;
                fromPartial(object: Partial<_148.QueryContractInfoRequest>): _148.QueryContractInfoRequest;
                fromAmino(object: _148.QueryContractInfoRequestAmino): _148.QueryContractInfoRequest;
                toAmino(message: _148.QueryContractInfoRequest): _148.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _148.QueryContractInfoRequestAminoMsg): _148.QueryContractInfoRequest;
                toAminoMsg(message: _148.QueryContractInfoRequest): _148.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _148.QueryContractInfoRequestProtoMsg): _148.QueryContractInfoRequest;
                toProto(message: _148.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _148.QueryContractInfoRequest): _148.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _148.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractInfoResponse;
                fromPartial(object: Partial<_148.QueryContractInfoResponse>): _148.QueryContractInfoResponse;
                fromAmino(object: _148.QueryContractInfoResponseAmino): _148.QueryContractInfoResponse;
                toAmino(message: _148.QueryContractInfoResponse): _148.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _148.QueryContractInfoResponseAminoMsg): _148.QueryContractInfoResponse;
                toAminoMsg(message: _148.QueryContractInfoResponse): _148.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _148.QueryContractInfoResponseProtoMsg): _148.QueryContractInfoResponse;
                toProto(message: _148.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _148.QueryContractInfoResponse): _148.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _148.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractHistoryRequest;
                fromPartial(object: Partial<_148.QueryContractHistoryRequest>): _148.QueryContractHistoryRequest;
                fromAmino(object: _148.QueryContractHistoryRequestAmino): _148.QueryContractHistoryRequest;
                toAmino(message: _148.QueryContractHistoryRequest): _148.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _148.QueryContractHistoryRequestAminoMsg): _148.QueryContractHistoryRequest;
                toAminoMsg(message: _148.QueryContractHistoryRequest): _148.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _148.QueryContractHistoryRequestProtoMsg): _148.QueryContractHistoryRequest;
                toProto(message: _148.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _148.QueryContractHistoryRequest): _148.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _148.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractHistoryResponse;
                fromPartial(object: Partial<_148.QueryContractHistoryResponse>): _148.QueryContractHistoryResponse;
                fromAmino(object: _148.QueryContractHistoryResponseAmino): _148.QueryContractHistoryResponse;
                toAmino(message: _148.QueryContractHistoryResponse): _148.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _148.QueryContractHistoryResponseAminoMsg): _148.QueryContractHistoryResponse;
                toAminoMsg(message: _148.QueryContractHistoryResponse): _148.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _148.QueryContractHistoryResponseProtoMsg): _148.QueryContractHistoryResponse;
                toProto(message: _148.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _148.QueryContractHistoryResponse): _148.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _148.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_148.QueryContractsByCodeRequest>): _148.QueryContractsByCodeRequest;
                fromAmino(object: _148.QueryContractsByCodeRequestAmino): _148.QueryContractsByCodeRequest;
                toAmino(message: _148.QueryContractsByCodeRequest): _148.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _148.QueryContractsByCodeRequestAminoMsg): _148.QueryContractsByCodeRequest;
                toAminoMsg(message: _148.QueryContractsByCodeRequest): _148.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _148.QueryContractsByCodeRequestProtoMsg): _148.QueryContractsByCodeRequest;
                toProto(message: _148.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _148.QueryContractsByCodeRequest): _148.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _148.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_148.QueryContractsByCodeResponse>): _148.QueryContractsByCodeResponse;
                fromAmino(object: _148.QueryContractsByCodeResponseAmino): _148.QueryContractsByCodeResponse;
                toAmino(message: _148.QueryContractsByCodeResponse): _148.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _148.QueryContractsByCodeResponseAminoMsg): _148.QueryContractsByCodeResponse;
                toAminoMsg(message: _148.QueryContractsByCodeResponse): _148.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _148.QueryContractsByCodeResponseProtoMsg): _148.QueryContractsByCodeResponse;
                toProto(message: _148.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _148.QueryContractsByCodeResponse): _148.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _148.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryAllContractStateRequest;
                fromPartial(object: Partial<_148.QueryAllContractStateRequest>): _148.QueryAllContractStateRequest;
                fromAmino(object: _148.QueryAllContractStateRequestAmino): _148.QueryAllContractStateRequest;
                toAmino(message: _148.QueryAllContractStateRequest): _148.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _148.QueryAllContractStateRequestAminoMsg): _148.QueryAllContractStateRequest;
                toAminoMsg(message: _148.QueryAllContractStateRequest): _148.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _148.QueryAllContractStateRequestProtoMsg): _148.QueryAllContractStateRequest;
                toProto(message: _148.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _148.QueryAllContractStateRequest): _148.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _148.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryAllContractStateResponse;
                fromPartial(object: Partial<_148.QueryAllContractStateResponse>): _148.QueryAllContractStateResponse;
                fromAmino(object: _148.QueryAllContractStateResponseAmino): _148.QueryAllContractStateResponse;
                toAmino(message: _148.QueryAllContractStateResponse): _148.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _148.QueryAllContractStateResponseAminoMsg): _148.QueryAllContractStateResponse;
                toAminoMsg(message: _148.QueryAllContractStateResponse): _148.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _148.QueryAllContractStateResponseProtoMsg): _148.QueryAllContractStateResponse;
                toProto(message: _148.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _148.QueryAllContractStateResponse): _148.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _148.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryRawContractStateRequest;
                fromPartial(object: Partial<_148.QueryRawContractStateRequest>): _148.QueryRawContractStateRequest;
                fromAmino(object: _148.QueryRawContractStateRequestAmino): _148.QueryRawContractStateRequest;
                toAmino(message: _148.QueryRawContractStateRequest): _148.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _148.QueryRawContractStateRequestAminoMsg): _148.QueryRawContractStateRequest;
                toAminoMsg(message: _148.QueryRawContractStateRequest): _148.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _148.QueryRawContractStateRequestProtoMsg): _148.QueryRawContractStateRequest;
                toProto(message: _148.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _148.QueryRawContractStateRequest): _148.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _148.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryRawContractStateResponse;
                fromPartial(object: Partial<_148.QueryRawContractStateResponse>): _148.QueryRawContractStateResponse;
                fromAmino(object: _148.QueryRawContractStateResponseAmino): _148.QueryRawContractStateResponse;
                toAmino(message: _148.QueryRawContractStateResponse): _148.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _148.QueryRawContractStateResponseAminoMsg): _148.QueryRawContractStateResponse;
                toAminoMsg(message: _148.QueryRawContractStateResponse): _148.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _148.QueryRawContractStateResponseProtoMsg): _148.QueryRawContractStateResponse;
                toProto(message: _148.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _148.QueryRawContractStateResponse): _148.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _148.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_148.QuerySmartContractStateRequest>): _148.QuerySmartContractStateRequest;
                fromAmino(object: _148.QuerySmartContractStateRequestAmino): _148.QuerySmartContractStateRequest;
                toAmino(message: _148.QuerySmartContractStateRequest): _148.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _148.QuerySmartContractStateRequestAminoMsg): _148.QuerySmartContractStateRequest;
                toAminoMsg(message: _148.QuerySmartContractStateRequest): _148.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _148.QuerySmartContractStateRequestProtoMsg): _148.QuerySmartContractStateRequest;
                toProto(message: _148.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _148.QuerySmartContractStateRequest): _148.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _148.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_148.QuerySmartContractStateResponse>): _148.QuerySmartContractStateResponse;
                fromAmino(object: _148.QuerySmartContractStateResponseAmino): _148.QuerySmartContractStateResponse;
                toAmino(message: _148.QuerySmartContractStateResponse): _148.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _148.QuerySmartContractStateResponseAminoMsg): _148.QuerySmartContractStateResponse;
                toAminoMsg(message: _148.QuerySmartContractStateResponse): _148.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _148.QuerySmartContractStateResponseProtoMsg): _148.QuerySmartContractStateResponse;
                toProto(message: _148.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _148.QuerySmartContractStateResponse): _148.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _148.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryCodeRequest;
                fromPartial(object: Partial<_148.QueryCodeRequest>): _148.QueryCodeRequest;
                fromAmino(object: _148.QueryCodeRequestAmino): _148.QueryCodeRequest;
                toAmino(message: _148.QueryCodeRequest): _148.QueryCodeRequestAmino;
                fromAminoMsg(object: _148.QueryCodeRequestAminoMsg): _148.QueryCodeRequest;
                toAminoMsg(message: _148.QueryCodeRequest): _148.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _148.QueryCodeRequestProtoMsg): _148.QueryCodeRequest;
                toProto(message: _148.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _148.QueryCodeRequest): _148.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _148.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.CodeInfoResponse;
                fromPartial(object: Partial<_148.CodeInfoResponse>): _148.CodeInfoResponse;
                fromAmino(object: _148.CodeInfoResponseAmino): _148.CodeInfoResponse;
                toAmino(message: _148.CodeInfoResponse): _148.CodeInfoResponseAmino;
                fromAminoMsg(object: _148.CodeInfoResponseAminoMsg): _148.CodeInfoResponse;
                toAminoMsg(message: _148.CodeInfoResponse): _148.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _148.CodeInfoResponseProtoMsg): _148.CodeInfoResponse;
                toProto(message: _148.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _148.CodeInfoResponse): _148.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _148.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryCodeResponse;
                fromPartial(object: Partial<_148.QueryCodeResponse>): _148.QueryCodeResponse;
                fromAmino(object: _148.QueryCodeResponseAmino): _148.QueryCodeResponse;
                toAmino(message: _148.QueryCodeResponse): _148.QueryCodeResponseAmino;
                fromAminoMsg(object: _148.QueryCodeResponseAminoMsg): _148.QueryCodeResponse;
                toAminoMsg(message: _148.QueryCodeResponse): _148.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _148.QueryCodeResponseProtoMsg): _148.QueryCodeResponse;
                toProto(message: _148.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _148.QueryCodeResponse): _148.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _148.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryCodesRequest;
                fromPartial(object: Partial<_148.QueryCodesRequest>): _148.QueryCodesRequest;
                fromAmino(object: _148.QueryCodesRequestAmino): _148.QueryCodesRequest;
                toAmino(message: _148.QueryCodesRequest): _148.QueryCodesRequestAmino;
                fromAminoMsg(object: _148.QueryCodesRequestAminoMsg): _148.QueryCodesRequest;
                toAminoMsg(message: _148.QueryCodesRequest): _148.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _148.QueryCodesRequestProtoMsg): _148.QueryCodesRequest;
                toProto(message: _148.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _148.QueryCodesRequest): _148.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _148.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryCodesResponse;
                fromPartial(object: Partial<_148.QueryCodesResponse>): _148.QueryCodesResponse;
                fromAmino(object: _148.QueryCodesResponseAmino): _148.QueryCodesResponse;
                toAmino(message: _148.QueryCodesResponse): _148.QueryCodesResponseAmino;
                fromAminoMsg(object: _148.QueryCodesResponseAminoMsg): _148.QueryCodesResponse;
                toAminoMsg(message: _148.QueryCodesResponse): _148.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _148.QueryCodesResponseProtoMsg): _148.QueryCodesResponse;
                toProto(message: _148.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _148.QueryCodesResponse): _148.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _148.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_148.QueryPinnedCodesRequest>): _148.QueryPinnedCodesRequest;
                fromAmino(object: _148.QueryPinnedCodesRequestAmino): _148.QueryPinnedCodesRequest;
                toAmino(message: _148.QueryPinnedCodesRequest): _148.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _148.QueryPinnedCodesRequestAminoMsg): _148.QueryPinnedCodesRequest;
                toAminoMsg(message: _148.QueryPinnedCodesRequest): _148.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _148.QueryPinnedCodesRequestProtoMsg): _148.QueryPinnedCodesRequest;
                toProto(message: _148.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _148.QueryPinnedCodesRequest): _148.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _148.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_148.QueryPinnedCodesResponse>): _148.QueryPinnedCodesResponse;
                fromAmino(object: _148.QueryPinnedCodesResponseAmino): _148.QueryPinnedCodesResponse;
                toAmino(message: _148.QueryPinnedCodesResponse): _148.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _148.QueryPinnedCodesResponseAminoMsg): _148.QueryPinnedCodesResponse;
                toAminoMsg(message: _148.QueryPinnedCodesResponse): _148.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _148.QueryPinnedCodesResponseProtoMsg): _148.QueryPinnedCodesResponse;
                toProto(message: _148.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _148.QueryPinnedCodesResponse): _148.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _148.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _148.QueryParamsRequest;
                fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
                fromAmino(_: _148.QueryParamsRequestAmino): _148.QueryParamsRequest;
                toAmino(_: _148.QueryParamsRequest): _148.QueryParamsRequestAmino;
                fromAminoMsg(object: _148.QueryParamsRequestAminoMsg): _148.QueryParamsRequest;
                toAminoMsg(message: _148.QueryParamsRequest): _148.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _148.QueryParamsRequestProtoMsg): _148.QueryParamsRequest;
                toProto(message: _148.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _148.QueryParamsRequest): _148.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _148.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryParamsResponse;
                fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
                fromAmino(object: _148.QueryParamsResponseAmino): _148.QueryParamsResponse;
                toAmino(message: _148.QueryParamsResponse): _148.QueryParamsResponseAmino;
                fromAminoMsg(object: _148.QueryParamsResponseAminoMsg): _148.QueryParamsResponse;
                toAminoMsg(message: _148.QueryParamsResponse): _148.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _148.QueryParamsResponseProtoMsg): _148.QueryParamsResponse;
                toProto(message: _148.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _148.QueryParamsResponse): _148.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _148.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_148.QueryContractsByCreatorRequest>): _148.QueryContractsByCreatorRequest;
                fromAmino(object: _148.QueryContractsByCreatorRequestAmino): _148.QueryContractsByCreatorRequest;
                toAmino(message: _148.QueryContractsByCreatorRequest): _148.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _148.QueryContractsByCreatorRequestAminoMsg): _148.QueryContractsByCreatorRequest;
                toAminoMsg(message: _148.QueryContractsByCreatorRequest): _148.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _148.QueryContractsByCreatorRequestProtoMsg): _148.QueryContractsByCreatorRequest;
                toProto(message: _148.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _148.QueryContractsByCreatorRequest): _148.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _148.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_148.QueryContractsByCreatorResponse>): _148.QueryContractsByCreatorResponse;
                fromAmino(object: _148.QueryContractsByCreatorResponseAmino): _148.QueryContractsByCreatorResponse;
                toAmino(message: _148.QueryContractsByCreatorResponse): _148.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _148.QueryContractsByCreatorResponseAminoMsg): _148.QueryContractsByCreatorResponse;
                toAminoMsg(message: _148.QueryContractsByCreatorResponse): _148.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _148.QueryContractsByCreatorResponseProtoMsg): _148.QueryContractsByCreatorResponse;
                toProto(message: _148.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _148.QueryContractsByCreatorResponse): _148.QueryContractsByCreatorResponseProtoMsg;
            };
            QueryBuildAddressRequest: {
                typeUrl: string;
                encode(message: _148.QueryBuildAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryBuildAddressRequest;
                fromPartial(object: Partial<_148.QueryBuildAddressRequest>): _148.QueryBuildAddressRequest;
                fromAmino(object: _148.QueryBuildAddressRequestAmino): _148.QueryBuildAddressRequest;
                toAmino(message: _148.QueryBuildAddressRequest): _148.QueryBuildAddressRequestAmino;
                fromAminoMsg(object: _148.QueryBuildAddressRequestAminoMsg): _148.QueryBuildAddressRequest;
                toAminoMsg(message: _148.QueryBuildAddressRequest): _148.QueryBuildAddressRequestAminoMsg;
                fromProtoMsg(message: _148.QueryBuildAddressRequestProtoMsg): _148.QueryBuildAddressRequest;
                toProto(message: _148.QueryBuildAddressRequest): Uint8Array;
                toProtoMsg(message: _148.QueryBuildAddressRequest): _148.QueryBuildAddressRequestProtoMsg;
            };
            QueryBuildAddressResponse: {
                typeUrl: string;
                encode(message: _148.QueryBuildAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _148.QueryBuildAddressResponse;
                fromPartial(object: Partial<_148.QueryBuildAddressResponse>): _148.QueryBuildAddressResponse;
                fromAmino(object: _148.QueryBuildAddressResponseAmino): _148.QueryBuildAddressResponse;
                toAmino(message: _148.QueryBuildAddressResponse): _148.QueryBuildAddressResponseAmino;
                fromAminoMsg(object: _148.QueryBuildAddressResponseAminoMsg): _148.QueryBuildAddressResponse;
                toAminoMsg(message: _148.QueryBuildAddressResponse): _148.QueryBuildAddressResponseAminoMsg;
                fromProtoMsg(message: _148.QueryBuildAddressResponseProtoMsg): _148.QueryBuildAddressResponse;
                toProto(message: _148.QueryBuildAddressResponse): Uint8Array;
                toProtoMsg(message: _148.QueryBuildAddressResponse): _148.QueryBuildAddressResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _147.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.StoreCodeProposal;
                fromPartial(object: Partial<_147.StoreCodeProposal>): _147.StoreCodeProposal;
                fromAmino(object: _147.StoreCodeProposalAmino): _147.StoreCodeProposal;
                toAmino(message: _147.StoreCodeProposal): _147.StoreCodeProposalAmino;
                fromAminoMsg(object: _147.StoreCodeProposalAminoMsg): _147.StoreCodeProposal;
                toAminoMsg(message: _147.StoreCodeProposal): _147.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _147.StoreCodeProposalProtoMsg): _147.StoreCodeProposal;
                toProto(message: _147.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _147.StoreCodeProposal): _147.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _147.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.InstantiateContractProposal;
                fromPartial(object: Partial<_147.InstantiateContractProposal>): _147.InstantiateContractProposal;
                fromAmino(object: _147.InstantiateContractProposalAmino): _147.InstantiateContractProposal;
                toAmino(message: _147.InstantiateContractProposal): _147.InstantiateContractProposalAmino;
                fromAminoMsg(object: _147.InstantiateContractProposalAminoMsg): _147.InstantiateContractProposal;
                toAminoMsg(message: _147.InstantiateContractProposal): _147.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _147.InstantiateContractProposalProtoMsg): _147.InstantiateContractProposal;
                toProto(message: _147.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _147.InstantiateContractProposal): _147.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _147.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.InstantiateContract2Proposal;
                fromPartial(object: Partial<_147.InstantiateContract2Proposal>): _147.InstantiateContract2Proposal;
                fromAmino(object: _147.InstantiateContract2ProposalAmino): _147.InstantiateContract2Proposal;
                toAmino(message: _147.InstantiateContract2Proposal): _147.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _147.InstantiateContract2ProposalAminoMsg): _147.InstantiateContract2Proposal;
                toAminoMsg(message: _147.InstantiateContract2Proposal): _147.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _147.InstantiateContract2ProposalProtoMsg): _147.InstantiateContract2Proposal;
                toProto(message: _147.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _147.InstantiateContract2Proposal): _147.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _147.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.MigrateContractProposal;
                fromPartial(object: Partial<_147.MigrateContractProposal>): _147.MigrateContractProposal;
                fromAmino(object: _147.MigrateContractProposalAmino): _147.MigrateContractProposal;
                toAmino(message: _147.MigrateContractProposal): _147.MigrateContractProposalAmino;
                fromAminoMsg(object: _147.MigrateContractProposalAminoMsg): _147.MigrateContractProposal;
                toAminoMsg(message: _147.MigrateContractProposal): _147.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _147.MigrateContractProposalProtoMsg): _147.MigrateContractProposal;
                toProto(message: _147.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _147.MigrateContractProposal): _147.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _147.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.SudoContractProposal;
                fromPartial(object: Partial<_147.SudoContractProposal>): _147.SudoContractProposal;
                fromAmino(object: _147.SudoContractProposalAmino): _147.SudoContractProposal;
                toAmino(message: _147.SudoContractProposal): _147.SudoContractProposalAmino;
                fromAminoMsg(object: _147.SudoContractProposalAminoMsg): _147.SudoContractProposal;
                toAminoMsg(message: _147.SudoContractProposal): _147.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _147.SudoContractProposalProtoMsg): _147.SudoContractProposal;
                toProto(message: _147.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _147.SudoContractProposal): _147.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _147.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ExecuteContractProposal;
                fromPartial(object: Partial<_147.ExecuteContractProposal>): _147.ExecuteContractProposal;
                fromAmino(object: _147.ExecuteContractProposalAmino): _147.ExecuteContractProposal;
                toAmino(message: _147.ExecuteContractProposal): _147.ExecuteContractProposalAmino;
                fromAminoMsg(object: _147.ExecuteContractProposalAminoMsg): _147.ExecuteContractProposal;
                toAminoMsg(message: _147.ExecuteContractProposal): _147.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _147.ExecuteContractProposalProtoMsg): _147.ExecuteContractProposal;
                toProto(message: _147.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _147.ExecuteContractProposal): _147.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _147.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.UpdateAdminProposal;
                fromPartial(object: Partial<_147.UpdateAdminProposal>): _147.UpdateAdminProposal;
                fromAmino(object: _147.UpdateAdminProposalAmino): _147.UpdateAdminProposal;
                toAmino(message: _147.UpdateAdminProposal): _147.UpdateAdminProposalAmino;
                fromAminoMsg(object: _147.UpdateAdminProposalAminoMsg): _147.UpdateAdminProposal;
                toAminoMsg(message: _147.UpdateAdminProposal): _147.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _147.UpdateAdminProposalProtoMsg): _147.UpdateAdminProposal;
                toProto(message: _147.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _147.UpdateAdminProposal): _147.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _147.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.ClearAdminProposal;
                fromPartial(object: Partial<_147.ClearAdminProposal>): _147.ClearAdminProposal;
                fromAmino(object: _147.ClearAdminProposalAmino): _147.ClearAdminProposal;
                toAmino(message: _147.ClearAdminProposal): _147.ClearAdminProposalAmino;
                fromAminoMsg(object: _147.ClearAdminProposalAminoMsg): _147.ClearAdminProposal;
                toAminoMsg(message: _147.ClearAdminProposal): _147.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _147.ClearAdminProposalProtoMsg): _147.ClearAdminProposal;
                toProto(message: _147.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _147.ClearAdminProposal): _147.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _147.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.PinCodesProposal;
                fromPartial(object: Partial<_147.PinCodesProposal>): _147.PinCodesProposal;
                fromAmino(object: _147.PinCodesProposalAmino): _147.PinCodesProposal;
                toAmino(message: _147.PinCodesProposal): _147.PinCodesProposalAmino;
                fromAminoMsg(object: _147.PinCodesProposalAminoMsg): _147.PinCodesProposal;
                toAminoMsg(message: _147.PinCodesProposal): _147.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _147.PinCodesProposalProtoMsg): _147.PinCodesProposal;
                toProto(message: _147.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _147.PinCodesProposal): _147.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _147.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.UnpinCodesProposal;
                fromPartial(object: Partial<_147.UnpinCodesProposal>): _147.UnpinCodesProposal;
                fromAmino(object: _147.UnpinCodesProposalAmino): _147.UnpinCodesProposal;
                toAmino(message: _147.UnpinCodesProposal): _147.UnpinCodesProposalAmino;
                fromAminoMsg(object: _147.UnpinCodesProposalAminoMsg): _147.UnpinCodesProposal;
                toAminoMsg(message: _147.UnpinCodesProposal): _147.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _147.UnpinCodesProposalProtoMsg): _147.UnpinCodesProposal;
                toProto(message: _147.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _147.UnpinCodesProposal): _147.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _147.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.AccessConfigUpdate;
                fromPartial(object: Partial<_147.AccessConfigUpdate>): _147.AccessConfigUpdate;
                fromAmino(object: _147.AccessConfigUpdateAmino): _147.AccessConfigUpdate;
                toAmino(message: _147.AccessConfigUpdate): _147.AccessConfigUpdateAmino;
                fromAminoMsg(object: _147.AccessConfigUpdateAminoMsg): _147.AccessConfigUpdate;
                toAminoMsg(message: _147.AccessConfigUpdate): _147.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _147.AccessConfigUpdateProtoMsg): _147.AccessConfigUpdate;
                toProto(message: _147.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _147.AccessConfigUpdate): _147.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _147.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_147.UpdateInstantiateConfigProposal>): _147.UpdateInstantiateConfigProposal;
                fromAmino(object: _147.UpdateInstantiateConfigProposalAmino): _147.UpdateInstantiateConfigProposal;
                toAmino(message: _147.UpdateInstantiateConfigProposal): _147.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _147.UpdateInstantiateConfigProposalAminoMsg): _147.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _147.UpdateInstantiateConfigProposal): _147.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _147.UpdateInstantiateConfigProposalProtoMsg): _147.UpdateInstantiateConfigProposal;
                toProto(message: _147.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _147.UpdateInstantiateConfigProposal): _147.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _147.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _147.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_147.StoreAndInstantiateContractProposal>): _147.StoreAndInstantiateContractProposal;
                fromAmino(object: _147.StoreAndInstantiateContractProposalAmino): _147.StoreAndInstantiateContractProposal;
                toAmino(message: _147.StoreAndInstantiateContractProposal): _147.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _147.StoreAndInstantiateContractProposalAminoMsg): _147.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _147.StoreAndInstantiateContractProposal): _147.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _147.StoreAndInstantiateContractProposalProtoMsg): _147.StoreAndInstantiateContractProposal;
                toProto(message: _147.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _147.StoreAndInstantiateContractProposal): _147.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _146.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgIBCSend;
                fromPartial(object: Partial<_146.MsgIBCSend>): _146.MsgIBCSend;
                fromAmino(object: _146.MsgIBCSendAmino): _146.MsgIBCSend;
                toAmino(message: _146.MsgIBCSend): _146.MsgIBCSendAmino;
                fromAminoMsg(object: _146.MsgIBCSendAminoMsg): _146.MsgIBCSend;
                toAminoMsg(message: _146.MsgIBCSend): _146.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _146.MsgIBCSendProtoMsg): _146.MsgIBCSend;
                toProto(message: _146.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _146.MsgIBCSend): _146.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _146.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgIBCSendResponse;
                fromPartial(object: Partial<_146.MsgIBCSendResponse>): _146.MsgIBCSendResponse;
                fromAmino(object: _146.MsgIBCSendResponseAmino): _146.MsgIBCSendResponse;
                toAmino(message: _146.MsgIBCSendResponse): _146.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _146.MsgIBCSendResponseAminoMsg): _146.MsgIBCSendResponse;
                toAminoMsg(message: _146.MsgIBCSendResponse): _146.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _146.MsgIBCSendResponseProtoMsg): _146.MsgIBCSendResponse;
                toProto(message: _146.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _146.MsgIBCSendResponse): _146.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _146.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _146.MsgIBCCloseChannel;
                fromPartial(object: Partial<_146.MsgIBCCloseChannel>): _146.MsgIBCCloseChannel;
                fromAmino(object: _146.MsgIBCCloseChannelAmino): _146.MsgIBCCloseChannel;
                toAmino(message: _146.MsgIBCCloseChannel): _146.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _146.MsgIBCCloseChannelAminoMsg): _146.MsgIBCCloseChannel;
                toAminoMsg(message: _146.MsgIBCCloseChannel): _146.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _146.MsgIBCCloseChannelProtoMsg): _146.MsgIBCCloseChannel;
                toProto(message: _146.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _146.MsgIBCCloseChannel): _146.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _145.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.GenesisState;
                fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
                fromAmino(object: _145.GenesisStateAmino): _145.GenesisState;
                toAmino(message: _145.GenesisState): _145.GenesisStateAmino;
                fromAminoMsg(object: _145.GenesisStateAminoMsg): _145.GenesisState;
                toAminoMsg(message: _145.GenesisState): _145.GenesisStateAminoMsg;
                fromProtoMsg(message: _145.GenesisStateProtoMsg): _145.GenesisState;
                toProto(message: _145.GenesisState): Uint8Array;
                toProtoMsg(message: _145.GenesisState): _145.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _145.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.Code;
                fromPartial(object: Partial<_145.Code>): _145.Code;
                fromAmino(object: _145.CodeAmino): _145.Code;
                toAmino(message: _145.Code): _145.CodeAmino;
                fromAminoMsg(object: _145.CodeAminoMsg): _145.Code;
                toAminoMsg(message: _145.Code): _145.CodeAminoMsg;
                fromProtoMsg(message: _145.CodeProtoMsg): _145.Code;
                toProto(message: _145.Code): Uint8Array;
                toProtoMsg(message: _145.Code): _145.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _145.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.Contract;
                fromPartial(object: Partial<_145.Contract>): _145.Contract;
                fromAmino(object: _145.ContractAmino): _145.Contract;
                toAmino(message: _145.Contract): _145.ContractAmino;
                fromAminoMsg(object: _145.ContractAminoMsg): _145.Contract;
                toAminoMsg(message: _145.Contract): _145.ContractAminoMsg;
                fromProtoMsg(message: _145.ContractProtoMsg): _145.Contract;
                toProto(message: _145.Contract): Uint8Array;
                toProtoMsg(message: _145.Contract): _145.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _145.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _145.Sequence;
                fromPartial(object: Partial<_145.Sequence>): _145.Sequence;
                fromAmino(object: _145.SequenceAmino): _145.Sequence;
                toAmino(message: _145.Sequence): _145.SequenceAmino;
                fromAminoMsg(object: _145.SequenceAminoMsg): _145.Sequence;
                toAminoMsg(message: _145.Sequence): _145.SequenceAminoMsg;
                fromProtoMsg(message: _145.SequenceProtoMsg): _145.Sequence;
                toProto(message: _145.Sequence): Uint8Array;
                toProtoMsg(message: _145.Sequence): _145.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _144.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.StoreCodeAuthorization;
                fromPartial(object: Partial<_144.StoreCodeAuthorization>): _144.StoreCodeAuthorization;
                fromAmino(object: _144.StoreCodeAuthorizationAmino): _144.StoreCodeAuthorization;
                toAmino(message: _144.StoreCodeAuthorization): _144.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _144.StoreCodeAuthorizationAminoMsg): _144.StoreCodeAuthorization;
                toAminoMsg(message: _144.StoreCodeAuthorization): _144.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _144.StoreCodeAuthorizationProtoMsg): _144.StoreCodeAuthorization;
                toProto(message: _144.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _144.StoreCodeAuthorization): _144.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _144.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.ContractExecutionAuthorization;
                fromPartial(object: Partial<_144.ContractExecutionAuthorization>): _144.ContractExecutionAuthorization;
                fromAmino(object: _144.ContractExecutionAuthorizationAmino): _144.ContractExecutionAuthorization;
                toAmino(message: _144.ContractExecutionAuthorization): _144.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _144.ContractExecutionAuthorizationAminoMsg): _144.ContractExecutionAuthorization;
                toAminoMsg(message: _144.ContractExecutionAuthorization): _144.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _144.ContractExecutionAuthorizationProtoMsg): _144.ContractExecutionAuthorization;
                toProto(message: _144.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _144.ContractExecutionAuthorization): _144.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _144.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.ContractMigrationAuthorization;
                fromPartial(object: Partial<_144.ContractMigrationAuthorization>): _144.ContractMigrationAuthorization;
                fromAmino(object: _144.ContractMigrationAuthorizationAmino): _144.ContractMigrationAuthorization;
                toAmino(message: _144.ContractMigrationAuthorization): _144.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _144.ContractMigrationAuthorizationAminoMsg): _144.ContractMigrationAuthorization;
                toAminoMsg(message: _144.ContractMigrationAuthorization): _144.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _144.ContractMigrationAuthorizationProtoMsg): _144.ContractMigrationAuthorization;
                toProto(message: _144.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _144.ContractMigrationAuthorization): _144.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _144.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.CodeGrant;
                fromPartial(object: Partial<_144.CodeGrant>): _144.CodeGrant;
                fromAmino(object: _144.CodeGrantAmino): _144.CodeGrant;
                toAmino(message: _144.CodeGrant): _144.CodeGrantAmino;
                fromAminoMsg(object: _144.CodeGrantAminoMsg): _144.CodeGrant;
                toAminoMsg(message: _144.CodeGrant): _144.CodeGrantAminoMsg;
                fromProtoMsg(message: _144.CodeGrantProtoMsg): _144.CodeGrant;
                toProto(message: _144.CodeGrant): Uint8Array;
                toProtoMsg(message: _144.CodeGrant): _144.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _144.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.ContractGrant;
                fromPartial(object: Partial<_144.ContractGrant>): _144.ContractGrant;
                fromAmino(object: _144.ContractGrantAmino): _144.ContractGrant;
                toAmino(message: _144.ContractGrant): _144.ContractGrantAmino;
                fromAminoMsg(object: _144.ContractGrantAminoMsg): _144.ContractGrant;
                toAminoMsg(message: _144.ContractGrant): _144.ContractGrantAminoMsg;
                fromProtoMsg(message: _144.ContractGrantProtoMsg): _144.ContractGrant;
                toProto(message: _144.ContractGrant): Uint8Array;
                toProtoMsg(message: _144.ContractGrant): _144.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _144.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MaxCallsLimit;
                fromPartial(object: Partial<_144.MaxCallsLimit>): _144.MaxCallsLimit;
                fromAmino(object: _144.MaxCallsLimitAmino): _144.MaxCallsLimit;
                toAmino(message: _144.MaxCallsLimit): _144.MaxCallsLimitAmino;
                fromAminoMsg(object: _144.MaxCallsLimitAminoMsg): _144.MaxCallsLimit;
                toAminoMsg(message: _144.MaxCallsLimit): _144.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _144.MaxCallsLimitProtoMsg): _144.MaxCallsLimit;
                toProto(message: _144.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _144.MaxCallsLimit): _144.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _144.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.MaxFundsLimit;
                fromPartial(object: Partial<_144.MaxFundsLimit>): _144.MaxFundsLimit;
                fromAmino(object: _144.MaxFundsLimitAmino): _144.MaxFundsLimit;
                toAmino(message: _144.MaxFundsLimit): _144.MaxFundsLimitAmino;
                fromAminoMsg(object: _144.MaxFundsLimitAminoMsg): _144.MaxFundsLimit;
                toAminoMsg(message: _144.MaxFundsLimit): _144.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _144.MaxFundsLimitProtoMsg): _144.MaxFundsLimit;
                toProto(message: _144.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _144.MaxFundsLimit): _144.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _144.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.CombinedLimit;
                fromPartial(object: Partial<_144.CombinedLimit>): _144.CombinedLimit;
                fromAmino(object: _144.CombinedLimitAmino): _144.CombinedLimit;
                toAmino(message: _144.CombinedLimit): _144.CombinedLimitAmino;
                fromAminoMsg(object: _144.CombinedLimitAminoMsg): _144.CombinedLimit;
                toAminoMsg(message: _144.CombinedLimit): _144.CombinedLimitAminoMsg;
                fromProtoMsg(message: _144.CombinedLimitProtoMsg): _144.CombinedLimit;
                toProto(message: _144.CombinedLimit): Uint8Array;
                toProtoMsg(message: _144.CombinedLimit): _144.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _144.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _144.AllowAllMessagesFilter;
                fromPartial(_: Partial<_144.AllowAllMessagesFilter>): _144.AllowAllMessagesFilter;
                fromAmino(_: _144.AllowAllMessagesFilterAmino): _144.AllowAllMessagesFilter;
                toAmino(_: _144.AllowAllMessagesFilter): _144.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _144.AllowAllMessagesFilterAminoMsg): _144.AllowAllMessagesFilter;
                toAminoMsg(message: _144.AllowAllMessagesFilter): _144.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _144.AllowAllMessagesFilterProtoMsg): _144.AllowAllMessagesFilter;
                toProto(message: _144.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _144.AllowAllMessagesFilter): _144.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _144.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_144.AcceptedMessageKeysFilter>): _144.AcceptedMessageKeysFilter;
                fromAmino(object: _144.AcceptedMessageKeysFilterAmino): _144.AcceptedMessageKeysFilter;
                toAmino(message: _144.AcceptedMessageKeysFilter): _144.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _144.AcceptedMessageKeysFilterAminoMsg): _144.AcceptedMessageKeysFilter;
                toAminoMsg(message: _144.AcceptedMessageKeysFilter): _144.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _144.AcceptedMessageKeysFilterProtoMsg): _144.AcceptedMessageKeysFilter;
                toProto(message: _144.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _144.AcceptedMessageKeysFilter): _144.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _144.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _144.AcceptedMessagesFilter;
                fromPartial(object: Partial<_144.AcceptedMessagesFilter>): _144.AcceptedMessagesFilter;
                fromAmino(object: _144.AcceptedMessagesFilterAmino): _144.AcceptedMessagesFilter;
                toAmino(message: _144.AcceptedMessagesFilter): _144.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _144.AcceptedMessagesFilterAminoMsg): _144.AcceptedMessagesFilter;
                toAminoMsg(message: _144.AcceptedMessagesFilter): _144.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _144.AcceptedMessagesFilterProtoMsg): _144.AcceptedMessagesFilter;
                toProto(message: _144.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _144.AcceptedMessagesFilter): _144.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _144.MaxCallsLimit | _144.MaxFundsLimit | _144.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _144.AllowAllMessagesFilter | _144.AcceptedMessageKeysFilter | _144.AcceptedMessagesFilter;
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
                    v1: _307.MsgClientImpl;
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
                        contractInfo(request: _148.QueryContractInfoRequest): Promise<_148.QueryContractInfoResponse>;
                        contractHistory(request: _148.QueryContractHistoryRequest): Promise<_148.QueryContractHistoryResponse>;
                        contractsByCode(request: _148.QueryContractsByCodeRequest): Promise<_148.QueryContractsByCodeResponse>;
                        allContractState(request: _148.QueryAllContractStateRequest): Promise<_148.QueryAllContractStateResponse>;
                        rawContractState(request: _148.QueryRawContractStateRequest): Promise<_148.QueryRawContractStateResponse>;
                        smartContractState(request: _148.QuerySmartContractStateRequest): Promise<_148.QuerySmartContractStateResponse>;
                        code(request: _148.QueryCodeRequest): Promise<_148.QueryCodeResponse>;
                        codes(request?: _148.QueryCodesRequest): Promise<_148.QueryCodesResponse>;
                        pinnedCodes(request?: _148.QueryPinnedCodesRequest): Promise<_148.QueryPinnedCodesResponse>;
                        params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                        contractsByCreator(request: _148.QueryContractsByCreatorRequest): Promise<_148.QueryContractsByCreatorResponse>;
                        buildAddress(request: _148.QueryBuildAddressRequest): Promise<_148.QueryBuildAddressResponse>;
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
                    v1: _305.LCDQueryClient;
                };
            };
        }>;
    };
}
