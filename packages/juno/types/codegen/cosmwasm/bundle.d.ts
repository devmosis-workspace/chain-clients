import * as _168 from "./wasm/v1/authz";
import * as _169 from "./wasm/v1/genesis";
import * as _170 from "./wasm/v1/ibc";
import * as _171 from "./wasm/v1/proposal_legacy";
import * as _172 from "./wasm/v1/query";
import * as _173 from "./wasm/v1/tx";
import * as _174 from "./wasm/v1/types";
import * as _316 from "./wasm/v1/query.lcd";
import * as _317 from "./wasm/v1/query.rpc.Query";
import * as _318 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _317.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _172.QueryContractInfoRequest): Promise<_172.QueryContractInfoResponse>;
                contractHistory(request: _172.QueryContractHistoryRequest): Promise<_172.QueryContractHistoryResponse>;
                contractsByCode(request: _172.QueryContractsByCodeRequest): Promise<_172.QueryContractsByCodeResponse>;
                allContractState(request: _172.QueryAllContractStateRequest): Promise<_172.QueryAllContractStateResponse>;
                rawContractState(request: _172.QueryRawContractStateRequest): Promise<_172.QueryRawContractStateResponse>;
                smartContractState(request: _172.QuerySmartContractStateRequest): Promise<_172.QuerySmartContractStateResponse>;
                code(request: _172.QueryCodeRequest): Promise<_172.QueryCodeResponse>;
                codes(request?: _172.QueryCodesRequest): Promise<_172.QueryCodesResponse>;
                pinnedCodes(request?: _172.QueryPinnedCodesRequest): Promise<_172.QueryPinnedCodesResponse>;
                params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                contractsByCreator(request: _172.QueryContractsByCreatorRequest): Promise<_172.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _316.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _173.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _173.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _173.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _173.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _173.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _173.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _173.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _173.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _173.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _173.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _173.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _173.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _173.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _173.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _173.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndMigrateContract(value: _173.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateContractLabel(value: _173.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _173.MsgStoreCode): {
                        typeUrl: string;
                        value: _173.MsgStoreCode;
                    };
                    instantiateContract(value: _173.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _173.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _173.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _173.MsgInstantiateContract2;
                    };
                    executeContract(value: _173.MsgExecuteContract): {
                        typeUrl: string;
                        value: _173.MsgExecuteContract;
                    };
                    migrateContract(value: _173.MsgMigrateContract): {
                        typeUrl: string;
                        value: _173.MsgMigrateContract;
                    };
                    updateAdmin(value: _173.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _173.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _173.MsgClearAdmin): {
                        typeUrl: string;
                        value: _173.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _173.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _173.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _173.MsgUpdateParams): {
                        typeUrl: string;
                        value: _173.MsgUpdateParams;
                    };
                    sudoContract(value: _173.MsgSudoContract): {
                        typeUrl: string;
                        value: _173.MsgSudoContract;
                    };
                    pinCodes(value: _173.MsgPinCodes): {
                        typeUrl: string;
                        value: _173.MsgPinCodes;
                    };
                    unpinCodes(value: _173.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _173.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _173.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _173.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _173.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _173.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _173.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _173.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _173.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _173.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _173.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _173.MsgUpdateContractLabel;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _173.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _173.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _173.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _173.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _173.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _173.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _173.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _173.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _173.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _173.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _173.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _173.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _173.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _173.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _173.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: any): {
                        typeUrl: string;
                        value: _173.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: any): {
                        typeUrl: string;
                        value: _173.MsgUpdateContractLabel;
                    };
                };
                fromPartial: {
                    storeCode(value: _173.MsgStoreCode): {
                        typeUrl: string;
                        value: _173.MsgStoreCode;
                    };
                    instantiateContract(value: _173.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _173.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _173.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _173.MsgInstantiateContract2;
                    };
                    executeContract(value: _173.MsgExecuteContract): {
                        typeUrl: string;
                        value: _173.MsgExecuteContract;
                    };
                    migrateContract(value: _173.MsgMigrateContract): {
                        typeUrl: string;
                        value: _173.MsgMigrateContract;
                    };
                    updateAdmin(value: _173.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _173.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _173.MsgClearAdmin): {
                        typeUrl: string;
                        value: _173.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _173.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _173.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _173.MsgUpdateParams): {
                        typeUrl: string;
                        value: _173.MsgUpdateParams;
                    };
                    sudoContract(value: _173.MsgSudoContract): {
                        typeUrl: string;
                        value: _173.MsgSudoContract;
                    };
                    pinCodes(value: _173.MsgPinCodes): {
                        typeUrl: string;
                        value: _173.MsgPinCodes;
                    };
                    unpinCodes(value: _173.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _173.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _173.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _173.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _173.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _173.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _173.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _173.MsgAddCodeUploadParamsAddresses;
                    };
                    storeAndMigrateContract(value: _173.MsgStoreAndMigrateContract): {
                        typeUrl: string;
                        value: _173.MsgStoreAndMigrateContract;
                    };
                    updateContractLabel(value: _173.MsgUpdateContractLabel): {
                        typeUrl: string;
                        value: _173.MsgUpdateContractLabel;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _173.MsgStoreCode) => _173.MsgStoreCodeAmino;
                    fromAmino: (object: _173.MsgStoreCodeAmino) => _173.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _173.MsgInstantiateContract) => _173.MsgInstantiateContractAmino;
                    fromAmino: (object: _173.MsgInstantiateContractAmino) => _173.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _173.MsgInstantiateContract2) => _173.MsgInstantiateContract2Amino;
                    fromAmino: (object: _173.MsgInstantiateContract2Amino) => _173.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _173.MsgExecuteContract) => _173.MsgExecuteContractAmino;
                    fromAmino: (object: _173.MsgExecuteContractAmino) => _173.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _173.MsgMigrateContract) => _173.MsgMigrateContractAmino;
                    fromAmino: (object: _173.MsgMigrateContractAmino) => _173.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _173.MsgUpdateAdmin) => _173.MsgUpdateAdminAmino;
                    fromAmino: (object: _173.MsgUpdateAdminAmino) => _173.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _173.MsgClearAdmin) => _173.MsgClearAdminAmino;
                    fromAmino: (object: _173.MsgClearAdminAmino) => _173.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _173.MsgUpdateInstantiateConfig) => _173.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _173.MsgUpdateInstantiateConfigAmino) => _173.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _173.MsgUpdateParams) => _173.MsgUpdateParamsAmino;
                    fromAmino: (object: _173.MsgUpdateParamsAmino) => _173.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _173.MsgSudoContract) => _173.MsgSudoContractAmino;
                    fromAmino: (object: _173.MsgSudoContractAmino) => _173.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _173.MsgPinCodes) => _173.MsgPinCodesAmino;
                    fromAmino: (object: _173.MsgPinCodesAmino) => _173.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _173.MsgUnpinCodes) => _173.MsgUnpinCodesAmino;
                    fromAmino: (object: _173.MsgUnpinCodesAmino) => _173.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _173.MsgStoreAndInstantiateContract) => _173.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _173.MsgStoreAndInstantiateContractAmino) => _173.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _173.MsgRemoveCodeUploadParamsAddresses) => _173.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _173.MsgRemoveCodeUploadParamsAddressesAmino) => _173.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _173.MsgAddCodeUploadParamsAddresses) => _173.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _173.MsgAddCodeUploadParamsAddressesAmino) => _173.MsgAddCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _173.MsgStoreAndMigrateContract) => _173.MsgStoreAndMigrateContractAmino;
                    fromAmino: (object: _173.MsgStoreAndMigrateContractAmino) => _173.MsgStoreAndMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
                    aminoType: string;
                    toAmino: (message: _173.MsgUpdateContractLabel) => _173.MsgUpdateContractLabelAmino;
                    fromAmino: (object: _173.MsgUpdateContractLabelAmino) => _173.MsgUpdateContractLabel;
                };
            };
            accessTypeFromJSON(object: any): _174.AccessType;
            accessTypeToJSON(object: _174.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _174.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _174.ContractCodeHistoryOperationType): string;
            AccessType: typeof _174.AccessType;
            AccessTypeSDKType: typeof _174.AccessType;
            AccessTypeAmino: typeof _174.AccessType;
            ContractCodeHistoryOperationType: typeof _174.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _174.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _174.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _174.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.AccessTypeParam;
                fromPartial(object: Partial<_174.AccessTypeParam>): _174.AccessTypeParam;
                fromAmino(object: _174.AccessTypeParamAmino): _174.AccessTypeParam;
                toAmino(message: _174.AccessTypeParam): _174.AccessTypeParamAmino;
                fromAminoMsg(object: _174.AccessTypeParamAminoMsg): _174.AccessTypeParam;
                toAminoMsg(message: _174.AccessTypeParam): _174.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _174.AccessTypeParamProtoMsg): _174.AccessTypeParam;
                toProto(message: _174.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _174.AccessTypeParam): _174.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _174.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.AccessConfig;
                fromPartial(object: Partial<_174.AccessConfig>): _174.AccessConfig;
                fromAmino(object: _174.AccessConfigAmino): _174.AccessConfig;
                toAmino(message: _174.AccessConfig): _174.AccessConfigAmino;
                fromAminoMsg(object: _174.AccessConfigAminoMsg): _174.AccessConfig;
                toAminoMsg(message: _174.AccessConfig): _174.AccessConfigAminoMsg;
                fromProtoMsg(message: _174.AccessConfigProtoMsg): _174.AccessConfig;
                toProto(message: _174.AccessConfig): Uint8Array;
                toProtoMsg(message: _174.AccessConfig): _174.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _174.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.Params;
                fromPartial(object: Partial<_174.Params>): _174.Params;
                fromAmino(object: _174.ParamsAmino): _174.Params;
                toAmino(message: _174.Params): _174.ParamsAmino;
                fromAminoMsg(object: _174.ParamsAminoMsg): _174.Params;
                toAminoMsg(message: _174.Params): _174.ParamsAminoMsg;
                fromProtoMsg(message: _174.ParamsProtoMsg): _174.Params;
                toProto(message: _174.Params): Uint8Array;
                toProtoMsg(message: _174.Params): _174.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _174.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.CodeInfo;
                fromPartial(object: Partial<_174.CodeInfo>): _174.CodeInfo;
                fromAmino(object: _174.CodeInfoAmino): _174.CodeInfo;
                toAmino(message: _174.CodeInfo): _174.CodeInfoAmino;
                fromAminoMsg(object: _174.CodeInfoAminoMsg): _174.CodeInfo;
                toAminoMsg(message: _174.CodeInfo): _174.CodeInfoAminoMsg;
                fromProtoMsg(message: _174.CodeInfoProtoMsg): _174.CodeInfo;
                toProto(message: _174.CodeInfo): Uint8Array;
                toProtoMsg(message: _174.CodeInfo): _174.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _174.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.ContractInfo;
                fromPartial(object: Partial<_174.ContractInfo>): _174.ContractInfo;
                fromAmino(object: _174.ContractInfoAmino): _174.ContractInfo;
                toAmino(message: _174.ContractInfo): _174.ContractInfoAmino;
                fromAminoMsg(object: _174.ContractInfoAminoMsg): _174.ContractInfo;
                toAminoMsg(message: _174.ContractInfo): _174.ContractInfoAminoMsg;
                fromProtoMsg(message: _174.ContractInfoProtoMsg): _174.ContractInfo;
                toProto(message: _174.ContractInfo): Uint8Array;
                toProtoMsg(message: _174.ContractInfo): _174.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _174.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.ContractCodeHistoryEntry;
                fromPartial(object: Partial<_174.ContractCodeHistoryEntry>): _174.ContractCodeHistoryEntry;
                fromAmino(object: _174.ContractCodeHistoryEntryAmino): _174.ContractCodeHistoryEntry;
                toAmino(message: _174.ContractCodeHistoryEntry): _174.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _174.ContractCodeHistoryEntryAminoMsg): _174.ContractCodeHistoryEntry;
                toAminoMsg(message: _174.ContractCodeHistoryEntry): _174.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _174.ContractCodeHistoryEntryProtoMsg): _174.ContractCodeHistoryEntry;
                toProto(message: _174.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _174.ContractCodeHistoryEntry): _174.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _174.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.AbsoluteTxPosition;
                fromPartial(object: Partial<_174.AbsoluteTxPosition>): _174.AbsoluteTxPosition;
                fromAmino(object: _174.AbsoluteTxPositionAmino): _174.AbsoluteTxPosition;
                toAmino(message: _174.AbsoluteTxPosition): _174.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _174.AbsoluteTxPositionAminoMsg): _174.AbsoluteTxPosition;
                toAminoMsg(message: _174.AbsoluteTxPosition): _174.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _174.AbsoluteTxPositionProtoMsg): _174.AbsoluteTxPosition;
                toProto(message: _174.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _174.AbsoluteTxPosition): _174.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _174.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _174.Model;
                fromPartial(object: Partial<_174.Model>): _174.Model;
                fromAmino(object: _174.ModelAmino): _174.Model;
                toAmino(message: _174.Model): _174.ModelAmino;
                fromAminoMsg(object: _174.ModelAminoMsg): _174.Model;
                toAminoMsg(message: _174.Model): _174.ModelAminoMsg;
                fromProtoMsg(message: _174.ModelProtoMsg): _174.Model;
                toProto(message: _174.Model): Uint8Array;
                toProtoMsg(message: _174.Model): _174.ModelProtoMsg;
            };
            Cosmwasm_wasmv1ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _173.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgStoreCode;
                fromPartial(object: Partial<_173.MsgStoreCode>): _173.MsgStoreCode;
                fromAmino(object: _173.MsgStoreCodeAmino): _173.MsgStoreCode;
                toAmino(message: _173.MsgStoreCode): _173.MsgStoreCodeAmino;
                fromAminoMsg(object: _173.MsgStoreCodeAminoMsg): _173.MsgStoreCode;
                toAminoMsg(message: _173.MsgStoreCode): _173.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _173.MsgStoreCodeProtoMsg): _173.MsgStoreCode;
                toProto(message: _173.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _173.MsgStoreCode): _173.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _173.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgStoreCodeResponse;
                fromPartial(object: Partial<_173.MsgStoreCodeResponse>): _173.MsgStoreCodeResponse;
                fromAmino(object: _173.MsgStoreCodeResponseAmino): _173.MsgStoreCodeResponse;
                toAmino(message: _173.MsgStoreCodeResponse): _173.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _173.MsgStoreCodeResponseAminoMsg): _173.MsgStoreCodeResponse;
                toAminoMsg(message: _173.MsgStoreCodeResponse): _173.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _173.MsgStoreCodeResponseProtoMsg): _173.MsgStoreCodeResponse;
                toProto(message: _173.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _173.MsgStoreCodeResponse): _173.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _173.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgInstantiateContract;
                fromPartial(object: Partial<_173.MsgInstantiateContract>): _173.MsgInstantiateContract;
                fromAmino(object: _173.MsgInstantiateContractAmino): _173.MsgInstantiateContract;
                toAmino(message: _173.MsgInstantiateContract): _173.MsgInstantiateContractAmino;
                fromAminoMsg(object: _173.MsgInstantiateContractAminoMsg): _173.MsgInstantiateContract;
                toAminoMsg(message: _173.MsgInstantiateContract): _173.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _173.MsgInstantiateContractProtoMsg): _173.MsgInstantiateContract;
                toProto(message: _173.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _173.MsgInstantiateContract): _173.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _173.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgInstantiateContractResponse;
                fromPartial(object: Partial<_173.MsgInstantiateContractResponse>): _173.MsgInstantiateContractResponse;
                fromAmino(object: _173.MsgInstantiateContractResponseAmino): _173.MsgInstantiateContractResponse;
                toAmino(message: _173.MsgInstantiateContractResponse): _173.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _173.MsgInstantiateContractResponseAminoMsg): _173.MsgInstantiateContractResponse;
                toAminoMsg(message: _173.MsgInstantiateContractResponse): _173.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _173.MsgInstantiateContractResponseProtoMsg): _173.MsgInstantiateContractResponse;
                toProto(message: _173.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _173.MsgInstantiateContractResponse): _173.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _173.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgInstantiateContract2;
                fromPartial(object: Partial<_173.MsgInstantiateContract2>): _173.MsgInstantiateContract2;
                fromAmino(object: _173.MsgInstantiateContract2Amino): _173.MsgInstantiateContract2;
                toAmino(message: _173.MsgInstantiateContract2): _173.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _173.MsgInstantiateContract2AminoMsg): _173.MsgInstantiateContract2;
                toAminoMsg(message: _173.MsgInstantiateContract2): _173.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _173.MsgInstantiateContract2ProtoMsg): _173.MsgInstantiateContract2;
                toProto(message: _173.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _173.MsgInstantiateContract2): _173.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _173.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgInstantiateContract2Response;
                fromPartial(object: Partial<_173.MsgInstantiateContract2Response>): _173.MsgInstantiateContract2Response;
                fromAmino(object: _173.MsgInstantiateContract2ResponseAmino): _173.MsgInstantiateContract2Response;
                toAmino(message: _173.MsgInstantiateContract2Response): _173.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _173.MsgInstantiateContract2ResponseAminoMsg): _173.MsgInstantiateContract2Response;
                toAminoMsg(message: _173.MsgInstantiateContract2Response): _173.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _173.MsgInstantiateContract2ResponseProtoMsg): _173.MsgInstantiateContract2Response;
                toProto(message: _173.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _173.MsgInstantiateContract2Response): _173.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _173.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgExecuteContract;
                fromPartial(object: Partial<_173.MsgExecuteContract>): _173.MsgExecuteContract;
                fromAmino(object: _173.MsgExecuteContractAmino): _173.MsgExecuteContract;
                toAmino(message: _173.MsgExecuteContract): _173.MsgExecuteContractAmino;
                fromAminoMsg(object: _173.MsgExecuteContractAminoMsg): _173.MsgExecuteContract;
                toAminoMsg(message: _173.MsgExecuteContract): _173.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _173.MsgExecuteContractProtoMsg): _173.MsgExecuteContract;
                toProto(message: _173.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _173.MsgExecuteContract): _173.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _173.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgExecuteContractResponse;
                fromPartial(object: Partial<_173.MsgExecuteContractResponse>): _173.MsgExecuteContractResponse;
                fromAmino(object: _173.MsgExecuteContractResponseAmino): _173.MsgExecuteContractResponse;
                toAmino(message: _173.MsgExecuteContractResponse): _173.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _173.MsgExecuteContractResponseAminoMsg): _173.MsgExecuteContractResponse;
                toAminoMsg(message: _173.MsgExecuteContractResponse): _173.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _173.MsgExecuteContractResponseProtoMsg): _173.MsgExecuteContractResponse;
                toProto(message: _173.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _173.MsgExecuteContractResponse): _173.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _173.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgMigrateContract;
                fromPartial(object: Partial<_173.MsgMigrateContract>): _173.MsgMigrateContract;
                fromAmino(object: _173.MsgMigrateContractAmino): _173.MsgMigrateContract;
                toAmino(message: _173.MsgMigrateContract): _173.MsgMigrateContractAmino;
                fromAminoMsg(object: _173.MsgMigrateContractAminoMsg): _173.MsgMigrateContract;
                toAminoMsg(message: _173.MsgMigrateContract): _173.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _173.MsgMigrateContractProtoMsg): _173.MsgMigrateContract;
                toProto(message: _173.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _173.MsgMigrateContract): _173.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _173.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgMigrateContractResponse;
                fromPartial(object: Partial<_173.MsgMigrateContractResponse>): _173.MsgMigrateContractResponse;
                fromAmino(object: _173.MsgMigrateContractResponseAmino): _173.MsgMigrateContractResponse;
                toAmino(message: _173.MsgMigrateContractResponse): _173.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _173.MsgMigrateContractResponseAminoMsg): _173.MsgMigrateContractResponse;
                toAminoMsg(message: _173.MsgMigrateContractResponse): _173.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _173.MsgMigrateContractResponseProtoMsg): _173.MsgMigrateContractResponse;
                toProto(message: _173.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _173.MsgMigrateContractResponse): _173.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _173.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgUpdateAdmin;
                fromPartial(object: Partial<_173.MsgUpdateAdmin>): _173.MsgUpdateAdmin;
                fromAmino(object: _173.MsgUpdateAdminAmino): _173.MsgUpdateAdmin;
                toAmino(message: _173.MsgUpdateAdmin): _173.MsgUpdateAdminAmino;
                fromAminoMsg(object: _173.MsgUpdateAdminAminoMsg): _173.MsgUpdateAdmin;
                toAminoMsg(message: _173.MsgUpdateAdmin): _173.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateAdminProtoMsg): _173.MsgUpdateAdmin;
                toProto(message: _173.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateAdmin): _173.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _173.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgUpdateAdminResponse;
                fromPartial(_: Partial<_173.MsgUpdateAdminResponse>): _173.MsgUpdateAdminResponse;
                fromAmino(_: _173.MsgUpdateAdminResponseAmino): _173.MsgUpdateAdminResponse;
                toAmino(_: _173.MsgUpdateAdminResponse): _173.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _173.MsgUpdateAdminResponseAminoMsg): _173.MsgUpdateAdminResponse;
                toAminoMsg(message: _173.MsgUpdateAdminResponse): _173.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateAdminResponseProtoMsg): _173.MsgUpdateAdminResponse;
                toProto(message: _173.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateAdminResponse): _173.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _173.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgClearAdmin;
                fromPartial(object: Partial<_173.MsgClearAdmin>): _173.MsgClearAdmin;
                fromAmino(object: _173.MsgClearAdminAmino): _173.MsgClearAdmin;
                toAmino(message: _173.MsgClearAdmin): _173.MsgClearAdminAmino;
                fromAminoMsg(object: _173.MsgClearAdminAminoMsg): _173.MsgClearAdmin;
                toAminoMsg(message: _173.MsgClearAdmin): _173.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _173.MsgClearAdminProtoMsg): _173.MsgClearAdmin;
                toProto(message: _173.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _173.MsgClearAdmin): _173.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _173.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgClearAdminResponse;
                fromPartial(_: Partial<_173.MsgClearAdminResponse>): _173.MsgClearAdminResponse;
                fromAmino(_: _173.MsgClearAdminResponseAmino): _173.MsgClearAdminResponse;
                toAmino(_: _173.MsgClearAdminResponse): _173.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _173.MsgClearAdminResponseAminoMsg): _173.MsgClearAdminResponse;
                toAminoMsg(message: _173.MsgClearAdminResponse): _173.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _173.MsgClearAdminResponseProtoMsg): _173.MsgClearAdminResponse;
                toProto(message: _173.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _173.MsgClearAdminResponse): _173.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _173.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgUpdateInstantiateConfig;
                fromPartial(object: Partial<_173.MsgUpdateInstantiateConfig>): _173.MsgUpdateInstantiateConfig;
                fromAmino(object: _173.MsgUpdateInstantiateConfigAmino): _173.MsgUpdateInstantiateConfig;
                toAmino(message: _173.MsgUpdateInstantiateConfig): _173.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _173.MsgUpdateInstantiateConfigAminoMsg): _173.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _173.MsgUpdateInstantiateConfig): _173.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateInstantiateConfigProtoMsg): _173.MsgUpdateInstantiateConfig;
                toProto(message: _173.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateInstantiateConfig): _173.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _173.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgUpdateInstantiateConfigResponse;
                fromPartial(_: Partial<_173.MsgUpdateInstantiateConfigResponse>): _173.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _173.MsgUpdateInstantiateConfigResponseAmino): _173.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _173.MsgUpdateInstantiateConfigResponse): _173.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _173.MsgUpdateInstantiateConfigResponseAminoMsg): _173.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _173.MsgUpdateInstantiateConfigResponse): _173.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateInstantiateConfigResponseProtoMsg): _173.MsgUpdateInstantiateConfigResponse;
                toProto(message: _173.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateInstantiateConfigResponse): _173.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _173.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgUpdateParams;
                fromPartial(object: Partial<_173.MsgUpdateParams>): _173.MsgUpdateParams;
                fromAmino(object: _173.MsgUpdateParamsAmino): _173.MsgUpdateParams;
                toAmino(message: _173.MsgUpdateParams): _173.MsgUpdateParamsAmino;
                fromAminoMsg(object: _173.MsgUpdateParamsAminoMsg): _173.MsgUpdateParams;
                toAminoMsg(message: _173.MsgUpdateParams): _173.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateParamsProtoMsg): _173.MsgUpdateParams;
                toProto(message: _173.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateParams): _173.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _173.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_173.MsgUpdateParamsResponse>): _173.MsgUpdateParamsResponse;
                fromAmino(_: _173.MsgUpdateParamsResponseAmino): _173.MsgUpdateParamsResponse;
                toAmino(_: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _173.MsgUpdateParamsResponseAminoMsg): _173.MsgUpdateParamsResponse;
                toAminoMsg(message: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateParamsResponseProtoMsg): _173.MsgUpdateParamsResponse;
                toProto(message: _173.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _173.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgSudoContract;
                fromPartial(object: Partial<_173.MsgSudoContract>): _173.MsgSudoContract;
                fromAmino(object: _173.MsgSudoContractAmino): _173.MsgSudoContract;
                toAmino(message: _173.MsgSudoContract): _173.MsgSudoContractAmino;
                fromAminoMsg(object: _173.MsgSudoContractAminoMsg): _173.MsgSudoContract;
                toAminoMsg(message: _173.MsgSudoContract): _173.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _173.MsgSudoContractProtoMsg): _173.MsgSudoContract;
                toProto(message: _173.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _173.MsgSudoContract): _173.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _173.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgSudoContractResponse;
                fromPartial(object: Partial<_173.MsgSudoContractResponse>): _173.MsgSudoContractResponse;
                fromAmino(object: _173.MsgSudoContractResponseAmino): _173.MsgSudoContractResponse;
                toAmino(message: _173.MsgSudoContractResponse): _173.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _173.MsgSudoContractResponseAminoMsg): _173.MsgSudoContractResponse;
                toAminoMsg(message: _173.MsgSudoContractResponse): _173.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _173.MsgSudoContractResponseProtoMsg): _173.MsgSudoContractResponse;
                toProto(message: _173.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _173.MsgSudoContractResponse): _173.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _173.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgPinCodes;
                fromPartial(object: Partial<_173.MsgPinCodes>): _173.MsgPinCodes;
                fromAmino(object: _173.MsgPinCodesAmino): _173.MsgPinCodes;
                toAmino(message: _173.MsgPinCodes): _173.MsgPinCodesAmino;
                fromAminoMsg(object: _173.MsgPinCodesAminoMsg): _173.MsgPinCodes;
                toAminoMsg(message: _173.MsgPinCodes): _173.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _173.MsgPinCodesProtoMsg): _173.MsgPinCodes;
                toProto(message: _173.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _173.MsgPinCodes): _173.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _173.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgPinCodesResponse;
                fromPartial(_: Partial<_173.MsgPinCodesResponse>): _173.MsgPinCodesResponse;
                fromAmino(_: _173.MsgPinCodesResponseAmino): _173.MsgPinCodesResponse;
                toAmino(_: _173.MsgPinCodesResponse): _173.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _173.MsgPinCodesResponseAminoMsg): _173.MsgPinCodesResponse;
                toAminoMsg(message: _173.MsgPinCodesResponse): _173.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _173.MsgPinCodesResponseProtoMsg): _173.MsgPinCodesResponse;
                toProto(message: _173.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _173.MsgPinCodesResponse): _173.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _173.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgUnpinCodes;
                fromPartial(object: Partial<_173.MsgUnpinCodes>): _173.MsgUnpinCodes;
                fromAmino(object: _173.MsgUnpinCodesAmino): _173.MsgUnpinCodes;
                toAmino(message: _173.MsgUnpinCodes): _173.MsgUnpinCodesAmino;
                fromAminoMsg(object: _173.MsgUnpinCodesAminoMsg): _173.MsgUnpinCodes;
                toAminoMsg(message: _173.MsgUnpinCodes): _173.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _173.MsgUnpinCodesProtoMsg): _173.MsgUnpinCodes;
                toProto(message: _173.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _173.MsgUnpinCodes): _173.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _173.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgUnpinCodesResponse;
                fromPartial(_: Partial<_173.MsgUnpinCodesResponse>): _173.MsgUnpinCodesResponse;
                fromAmino(_: _173.MsgUnpinCodesResponseAmino): _173.MsgUnpinCodesResponse;
                toAmino(_: _173.MsgUnpinCodesResponse): _173.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _173.MsgUnpinCodesResponseAminoMsg): _173.MsgUnpinCodesResponse;
                toAminoMsg(message: _173.MsgUnpinCodesResponse): _173.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _173.MsgUnpinCodesResponseProtoMsg): _173.MsgUnpinCodesResponse;
                toProto(message: _173.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _173.MsgUnpinCodesResponse): _173.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _173.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgStoreAndInstantiateContract;
                fromPartial(object: Partial<_173.MsgStoreAndInstantiateContract>): _173.MsgStoreAndInstantiateContract;
                fromAmino(object: _173.MsgStoreAndInstantiateContractAmino): _173.MsgStoreAndInstantiateContract;
                toAmino(message: _173.MsgStoreAndInstantiateContract): _173.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _173.MsgStoreAndInstantiateContractAminoMsg): _173.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _173.MsgStoreAndInstantiateContract): _173.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _173.MsgStoreAndInstantiateContractProtoMsg): _173.MsgStoreAndInstantiateContract;
                toProto(message: _173.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _173.MsgStoreAndInstantiateContract): _173.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _173.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgStoreAndInstantiateContractResponse;
                fromPartial(object: Partial<_173.MsgStoreAndInstantiateContractResponse>): _173.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _173.MsgStoreAndInstantiateContractResponseAmino): _173.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _173.MsgStoreAndInstantiateContractResponse): _173.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _173.MsgStoreAndInstantiateContractResponseAminoMsg): _173.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _173.MsgStoreAndInstantiateContractResponse): _173.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _173.MsgStoreAndInstantiateContractResponseProtoMsg): _173.MsgStoreAndInstantiateContractResponse;
                toProto(message: _173.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _173.MsgStoreAndInstantiateContractResponse): _173.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _173.MsgAddCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgAddCodeUploadParamsAddresses;
                fromPartial(object: Partial<_173.MsgAddCodeUploadParamsAddresses>): _173.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _173.MsgAddCodeUploadParamsAddressesAmino): _173.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _173.MsgAddCodeUploadParamsAddresses): _173.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _173.MsgAddCodeUploadParamsAddressesAminoMsg): _173.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _173.MsgAddCodeUploadParamsAddresses): _173.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _173.MsgAddCodeUploadParamsAddressesProtoMsg): _173.MsgAddCodeUploadParamsAddresses;
                toProto(message: _173.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _173.MsgAddCodeUploadParamsAddresses): _173.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _173.MsgAddCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgAddCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_173.MsgAddCodeUploadParamsAddressesResponse>): _173.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _173.MsgAddCodeUploadParamsAddressesResponseAmino): _173.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _173.MsgAddCodeUploadParamsAddressesResponse): _173.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _173.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _173.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _173.MsgAddCodeUploadParamsAddressesResponse): _173.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _173.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _173.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _173.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _173.MsgAddCodeUploadParamsAddressesResponse): _173.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _173.MsgRemoveCodeUploadParamsAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgRemoveCodeUploadParamsAddresses;
                fromPartial(object: Partial<_173.MsgRemoveCodeUploadParamsAddresses>): _173.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _173.MsgRemoveCodeUploadParamsAddressesAmino): _173.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _173.MsgRemoveCodeUploadParamsAddresses): _173.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _173.MsgRemoveCodeUploadParamsAddressesAminoMsg): _173.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _173.MsgRemoveCodeUploadParamsAddresses): _173.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _173.MsgRemoveCodeUploadParamsAddressesProtoMsg): _173.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _173.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _173.MsgRemoveCodeUploadParamsAddresses): _173.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _173.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgRemoveCodeUploadParamsAddressesResponse;
                fromPartial(_: Partial<_173.MsgRemoveCodeUploadParamsAddressesResponse>): _173.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _173.MsgRemoveCodeUploadParamsAddressesResponseAmino): _173.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _173.MsgRemoveCodeUploadParamsAddressesResponse): _173.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _173.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _173.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _173.MsgRemoveCodeUploadParamsAddressesResponse): _173.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _173.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _173.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _173.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _173.MsgRemoveCodeUploadParamsAddressesResponse): _173.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgStoreAndMigrateContract: {
                typeUrl: string;
                encode(message: _173.MsgStoreAndMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgStoreAndMigrateContract;
                fromPartial(object: Partial<_173.MsgStoreAndMigrateContract>): _173.MsgStoreAndMigrateContract;
                fromAmino(object: _173.MsgStoreAndMigrateContractAmino): _173.MsgStoreAndMigrateContract;
                toAmino(message: _173.MsgStoreAndMigrateContract): _173.MsgStoreAndMigrateContractAmino;
                fromAminoMsg(object: _173.MsgStoreAndMigrateContractAminoMsg): _173.MsgStoreAndMigrateContract;
                toAminoMsg(message: _173.MsgStoreAndMigrateContract): _173.MsgStoreAndMigrateContractAminoMsg;
                fromProtoMsg(message: _173.MsgStoreAndMigrateContractProtoMsg): _173.MsgStoreAndMigrateContract;
                toProto(message: _173.MsgStoreAndMigrateContract): Uint8Array;
                toProtoMsg(message: _173.MsgStoreAndMigrateContract): _173.MsgStoreAndMigrateContractProtoMsg;
            };
            MsgStoreAndMigrateContractResponse: {
                typeUrl: string;
                encode(message: _173.MsgStoreAndMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgStoreAndMigrateContractResponse;
                fromPartial(object: Partial<_173.MsgStoreAndMigrateContractResponse>): _173.MsgStoreAndMigrateContractResponse;
                fromAmino(object: _173.MsgStoreAndMigrateContractResponseAmino): _173.MsgStoreAndMigrateContractResponse;
                toAmino(message: _173.MsgStoreAndMigrateContractResponse): _173.MsgStoreAndMigrateContractResponseAmino;
                fromAminoMsg(object: _173.MsgStoreAndMigrateContractResponseAminoMsg): _173.MsgStoreAndMigrateContractResponse;
                toAminoMsg(message: _173.MsgStoreAndMigrateContractResponse): _173.MsgStoreAndMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _173.MsgStoreAndMigrateContractResponseProtoMsg): _173.MsgStoreAndMigrateContractResponse;
                toProto(message: _173.MsgStoreAndMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _173.MsgStoreAndMigrateContractResponse): _173.MsgStoreAndMigrateContractResponseProtoMsg;
            };
            MsgUpdateContractLabel: {
                typeUrl: string;
                encode(message: _173.MsgUpdateContractLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _173.MsgUpdateContractLabel;
                fromPartial(object: Partial<_173.MsgUpdateContractLabel>): _173.MsgUpdateContractLabel;
                fromAmino(object: _173.MsgUpdateContractLabelAmino): _173.MsgUpdateContractLabel;
                toAmino(message: _173.MsgUpdateContractLabel): _173.MsgUpdateContractLabelAmino;
                fromAminoMsg(object: _173.MsgUpdateContractLabelAminoMsg): _173.MsgUpdateContractLabel;
                toAminoMsg(message: _173.MsgUpdateContractLabel): _173.MsgUpdateContractLabelAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateContractLabelProtoMsg): _173.MsgUpdateContractLabel;
                toProto(message: _173.MsgUpdateContractLabel): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateContractLabel): _173.MsgUpdateContractLabelProtoMsg;
            };
            MsgUpdateContractLabelResponse: {
                typeUrl: string;
                encode(_: _173.MsgUpdateContractLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _173.MsgUpdateContractLabelResponse;
                fromPartial(_: Partial<_173.MsgUpdateContractLabelResponse>): _173.MsgUpdateContractLabelResponse;
                fromAmino(_: _173.MsgUpdateContractLabelResponseAmino): _173.MsgUpdateContractLabelResponse;
                toAmino(_: _173.MsgUpdateContractLabelResponse): _173.MsgUpdateContractLabelResponseAmino;
                fromAminoMsg(object: _173.MsgUpdateContractLabelResponseAminoMsg): _173.MsgUpdateContractLabelResponse;
                toAminoMsg(message: _173.MsgUpdateContractLabelResponse): _173.MsgUpdateContractLabelResponseAminoMsg;
                fromProtoMsg(message: _173.MsgUpdateContractLabelResponseProtoMsg): _173.MsgUpdateContractLabelResponse;
                toProto(message: _173.MsgUpdateContractLabelResponse): Uint8Array;
                toProtoMsg(message: _173.MsgUpdateContractLabelResponse): _173.MsgUpdateContractLabelResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _172.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractInfoRequest;
                fromPartial(object: Partial<_172.QueryContractInfoRequest>): _172.QueryContractInfoRequest;
                fromAmino(object: _172.QueryContractInfoRequestAmino): _172.QueryContractInfoRequest;
                toAmino(message: _172.QueryContractInfoRequest): _172.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _172.QueryContractInfoRequestAminoMsg): _172.QueryContractInfoRequest;
                toAminoMsg(message: _172.QueryContractInfoRequest): _172.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _172.QueryContractInfoRequestProtoMsg): _172.QueryContractInfoRequest;
                toProto(message: _172.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _172.QueryContractInfoRequest): _172.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _172.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractInfoResponse;
                fromPartial(object: Partial<_172.QueryContractInfoResponse>): _172.QueryContractInfoResponse;
                fromAmino(object: _172.QueryContractInfoResponseAmino): _172.QueryContractInfoResponse;
                toAmino(message: _172.QueryContractInfoResponse): _172.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _172.QueryContractInfoResponseAminoMsg): _172.QueryContractInfoResponse;
                toAminoMsg(message: _172.QueryContractInfoResponse): _172.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _172.QueryContractInfoResponseProtoMsg): _172.QueryContractInfoResponse;
                toProto(message: _172.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _172.QueryContractInfoResponse): _172.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _172.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractHistoryRequest;
                fromPartial(object: Partial<_172.QueryContractHistoryRequest>): _172.QueryContractHistoryRequest;
                fromAmino(object: _172.QueryContractHistoryRequestAmino): _172.QueryContractHistoryRequest;
                toAmino(message: _172.QueryContractHistoryRequest): _172.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _172.QueryContractHistoryRequestAminoMsg): _172.QueryContractHistoryRequest;
                toAminoMsg(message: _172.QueryContractHistoryRequest): _172.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _172.QueryContractHistoryRequestProtoMsg): _172.QueryContractHistoryRequest;
                toProto(message: _172.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _172.QueryContractHistoryRequest): _172.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _172.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractHistoryResponse;
                fromPartial(object: Partial<_172.QueryContractHistoryResponse>): _172.QueryContractHistoryResponse;
                fromAmino(object: _172.QueryContractHistoryResponseAmino): _172.QueryContractHistoryResponse;
                toAmino(message: _172.QueryContractHistoryResponse): _172.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _172.QueryContractHistoryResponseAminoMsg): _172.QueryContractHistoryResponse;
                toAminoMsg(message: _172.QueryContractHistoryResponse): _172.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _172.QueryContractHistoryResponseProtoMsg): _172.QueryContractHistoryResponse;
                toProto(message: _172.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _172.QueryContractHistoryResponse): _172.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _172.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractsByCodeRequest;
                fromPartial(object: Partial<_172.QueryContractsByCodeRequest>): _172.QueryContractsByCodeRequest;
                fromAmino(object: _172.QueryContractsByCodeRequestAmino): _172.QueryContractsByCodeRequest;
                toAmino(message: _172.QueryContractsByCodeRequest): _172.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _172.QueryContractsByCodeRequestAminoMsg): _172.QueryContractsByCodeRequest;
                toAminoMsg(message: _172.QueryContractsByCodeRequest): _172.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _172.QueryContractsByCodeRequestProtoMsg): _172.QueryContractsByCodeRequest;
                toProto(message: _172.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _172.QueryContractsByCodeRequest): _172.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _172.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractsByCodeResponse;
                fromPartial(object: Partial<_172.QueryContractsByCodeResponse>): _172.QueryContractsByCodeResponse;
                fromAmino(object: _172.QueryContractsByCodeResponseAmino): _172.QueryContractsByCodeResponse;
                toAmino(message: _172.QueryContractsByCodeResponse): _172.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _172.QueryContractsByCodeResponseAminoMsg): _172.QueryContractsByCodeResponse;
                toAminoMsg(message: _172.QueryContractsByCodeResponse): _172.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _172.QueryContractsByCodeResponseProtoMsg): _172.QueryContractsByCodeResponse;
                toProto(message: _172.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _172.QueryContractsByCodeResponse): _172.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _172.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryAllContractStateRequest;
                fromPartial(object: Partial<_172.QueryAllContractStateRequest>): _172.QueryAllContractStateRequest;
                fromAmino(object: _172.QueryAllContractStateRequestAmino): _172.QueryAllContractStateRequest;
                toAmino(message: _172.QueryAllContractStateRequest): _172.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _172.QueryAllContractStateRequestAminoMsg): _172.QueryAllContractStateRequest;
                toAminoMsg(message: _172.QueryAllContractStateRequest): _172.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _172.QueryAllContractStateRequestProtoMsg): _172.QueryAllContractStateRequest;
                toProto(message: _172.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _172.QueryAllContractStateRequest): _172.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _172.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryAllContractStateResponse;
                fromPartial(object: Partial<_172.QueryAllContractStateResponse>): _172.QueryAllContractStateResponse;
                fromAmino(object: _172.QueryAllContractStateResponseAmino): _172.QueryAllContractStateResponse;
                toAmino(message: _172.QueryAllContractStateResponse): _172.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _172.QueryAllContractStateResponseAminoMsg): _172.QueryAllContractStateResponse;
                toAminoMsg(message: _172.QueryAllContractStateResponse): _172.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _172.QueryAllContractStateResponseProtoMsg): _172.QueryAllContractStateResponse;
                toProto(message: _172.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _172.QueryAllContractStateResponse): _172.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _172.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryRawContractStateRequest;
                fromPartial(object: Partial<_172.QueryRawContractStateRequest>): _172.QueryRawContractStateRequest;
                fromAmino(object: _172.QueryRawContractStateRequestAmino): _172.QueryRawContractStateRequest;
                toAmino(message: _172.QueryRawContractStateRequest): _172.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _172.QueryRawContractStateRequestAminoMsg): _172.QueryRawContractStateRequest;
                toAminoMsg(message: _172.QueryRawContractStateRequest): _172.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _172.QueryRawContractStateRequestProtoMsg): _172.QueryRawContractStateRequest;
                toProto(message: _172.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _172.QueryRawContractStateRequest): _172.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _172.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryRawContractStateResponse;
                fromPartial(object: Partial<_172.QueryRawContractStateResponse>): _172.QueryRawContractStateResponse;
                fromAmino(object: _172.QueryRawContractStateResponseAmino): _172.QueryRawContractStateResponse;
                toAmino(message: _172.QueryRawContractStateResponse): _172.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _172.QueryRawContractStateResponseAminoMsg): _172.QueryRawContractStateResponse;
                toAminoMsg(message: _172.QueryRawContractStateResponse): _172.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _172.QueryRawContractStateResponseProtoMsg): _172.QueryRawContractStateResponse;
                toProto(message: _172.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _172.QueryRawContractStateResponse): _172.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _172.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QuerySmartContractStateRequest;
                fromPartial(object: Partial<_172.QuerySmartContractStateRequest>): _172.QuerySmartContractStateRequest;
                fromAmino(object: _172.QuerySmartContractStateRequestAmino): _172.QuerySmartContractStateRequest;
                toAmino(message: _172.QuerySmartContractStateRequest): _172.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _172.QuerySmartContractStateRequestAminoMsg): _172.QuerySmartContractStateRequest;
                toAminoMsg(message: _172.QuerySmartContractStateRequest): _172.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _172.QuerySmartContractStateRequestProtoMsg): _172.QuerySmartContractStateRequest;
                toProto(message: _172.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _172.QuerySmartContractStateRequest): _172.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _172.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QuerySmartContractStateResponse;
                fromPartial(object: Partial<_172.QuerySmartContractStateResponse>): _172.QuerySmartContractStateResponse;
                fromAmino(object: _172.QuerySmartContractStateResponseAmino): _172.QuerySmartContractStateResponse;
                toAmino(message: _172.QuerySmartContractStateResponse): _172.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _172.QuerySmartContractStateResponseAminoMsg): _172.QuerySmartContractStateResponse;
                toAminoMsg(message: _172.QuerySmartContractStateResponse): _172.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _172.QuerySmartContractStateResponseProtoMsg): _172.QuerySmartContractStateResponse;
                toProto(message: _172.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _172.QuerySmartContractStateResponse): _172.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _172.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryCodeRequest;
                fromPartial(object: Partial<_172.QueryCodeRequest>): _172.QueryCodeRequest;
                fromAmino(object: _172.QueryCodeRequestAmino): _172.QueryCodeRequest;
                toAmino(message: _172.QueryCodeRequest): _172.QueryCodeRequestAmino;
                fromAminoMsg(object: _172.QueryCodeRequestAminoMsg): _172.QueryCodeRequest;
                toAminoMsg(message: _172.QueryCodeRequest): _172.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _172.QueryCodeRequestProtoMsg): _172.QueryCodeRequest;
                toProto(message: _172.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _172.QueryCodeRequest): _172.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _172.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.CodeInfoResponse;
                fromPartial(object: Partial<_172.CodeInfoResponse>): _172.CodeInfoResponse;
                fromAmino(object: _172.CodeInfoResponseAmino): _172.CodeInfoResponse;
                toAmino(message: _172.CodeInfoResponse): _172.CodeInfoResponseAmino;
                fromAminoMsg(object: _172.CodeInfoResponseAminoMsg): _172.CodeInfoResponse;
                toAminoMsg(message: _172.CodeInfoResponse): _172.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _172.CodeInfoResponseProtoMsg): _172.CodeInfoResponse;
                toProto(message: _172.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _172.CodeInfoResponse): _172.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _172.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryCodeResponse;
                fromPartial(object: Partial<_172.QueryCodeResponse>): _172.QueryCodeResponse;
                fromAmino(object: _172.QueryCodeResponseAmino): _172.QueryCodeResponse;
                toAmino(message: _172.QueryCodeResponse): _172.QueryCodeResponseAmino;
                fromAminoMsg(object: _172.QueryCodeResponseAminoMsg): _172.QueryCodeResponse;
                toAminoMsg(message: _172.QueryCodeResponse): _172.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _172.QueryCodeResponseProtoMsg): _172.QueryCodeResponse;
                toProto(message: _172.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _172.QueryCodeResponse): _172.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _172.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryCodesRequest;
                fromPartial(object: Partial<_172.QueryCodesRequest>): _172.QueryCodesRequest;
                fromAmino(object: _172.QueryCodesRequestAmino): _172.QueryCodesRequest;
                toAmino(message: _172.QueryCodesRequest): _172.QueryCodesRequestAmino;
                fromAminoMsg(object: _172.QueryCodesRequestAminoMsg): _172.QueryCodesRequest;
                toAminoMsg(message: _172.QueryCodesRequest): _172.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _172.QueryCodesRequestProtoMsg): _172.QueryCodesRequest;
                toProto(message: _172.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryCodesRequest): _172.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _172.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryCodesResponse;
                fromPartial(object: Partial<_172.QueryCodesResponse>): _172.QueryCodesResponse;
                fromAmino(object: _172.QueryCodesResponseAmino): _172.QueryCodesResponse;
                toAmino(message: _172.QueryCodesResponse): _172.QueryCodesResponseAmino;
                fromAminoMsg(object: _172.QueryCodesResponseAminoMsg): _172.QueryCodesResponse;
                toAminoMsg(message: _172.QueryCodesResponse): _172.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _172.QueryCodesResponseProtoMsg): _172.QueryCodesResponse;
                toProto(message: _172.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _172.QueryCodesResponse): _172.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _172.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryPinnedCodesRequest;
                fromPartial(object: Partial<_172.QueryPinnedCodesRequest>): _172.QueryPinnedCodesRequest;
                fromAmino(object: _172.QueryPinnedCodesRequestAmino): _172.QueryPinnedCodesRequest;
                toAmino(message: _172.QueryPinnedCodesRequest): _172.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _172.QueryPinnedCodesRequestAminoMsg): _172.QueryPinnedCodesRequest;
                toAminoMsg(message: _172.QueryPinnedCodesRequest): _172.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _172.QueryPinnedCodesRequestProtoMsg): _172.QueryPinnedCodesRequest;
                toProto(message: _172.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryPinnedCodesRequest): _172.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _172.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryPinnedCodesResponse;
                fromPartial(object: Partial<_172.QueryPinnedCodesResponse>): _172.QueryPinnedCodesResponse;
                fromAmino(object: _172.QueryPinnedCodesResponseAmino): _172.QueryPinnedCodesResponse;
                toAmino(message: _172.QueryPinnedCodesResponse): _172.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _172.QueryPinnedCodesResponseAminoMsg): _172.QueryPinnedCodesResponse;
                toAminoMsg(message: _172.QueryPinnedCodesResponse): _172.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _172.QueryPinnedCodesResponseProtoMsg): _172.QueryPinnedCodesResponse;
                toProto(message: _172.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _172.QueryPinnedCodesResponse): _172.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _172.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _172.QueryParamsRequest;
                fromPartial(_: Partial<_172.QueryParamsRequest>): _172.QueryParamsRequest;
                fromAmino(_: _172.QueryParamsRequestAmino): _172.QueryParamsRequest;
                toAmino(_: _172.QueryParamsRequest): _172.QueryParamsRequestAmino;
                fromAminoMsg(object: _172.QueryParamsRequestAminoMsg): _172.QueryParamsRequest;
                toAminoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _172.QueryParamsRequestProtoMsg): _172.QueryParamsRequest;
                toProto(message: _172.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _172.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryParamsResponse;
                fromPartial(object: Partial<_172.QueryParamsResponse>): _172.QueryParamsResponse;
                fromAmino(object: _172.QueryParamsResponseAmino): _172.QueryParamsResponse;
                toAmino(message: _172.QueryParamsResponse): _172.QueryParamsResponseAmino;
                fromAminoMsg(object: _172.QueryParamsResponseAminoMsg): _172.QueryParamsResponse;
                toAminoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _172.QueryParamsResponseProtoMsg): _172.QueryParamsResponse;
                toProto(message: _172.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _172.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractsByCreatorRequest;
                fromPartial(object: Partial<_172.QueryContractsByCreatorRequest>): _172.QueryContractsByCreatorRequest;
                fromAmino(object: _172.QueryContractsByCreatorRequestAmino): _172.QueryContractsByCreatorRequest;
                toAmino(message: _172.QueryContractsByCreatorRequest): _172.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _172.QueryContractsByCreatorRequestAminoMsg): _172.QueryContractsByCreatorRequest;
                toAminoMsg(message: _172.QueryContractsByCreatorRequest): _172.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _172.QueryContractsByCreatorRequestProtoMsg): _172.QueryContractsByCreatorRequest;
                toProto(message: _172.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _172.QueryContractsByCreatorRequest): _172.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _172.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _172.QueryContractsByCreatorResponse;
                fromPartial(object: Partial<_172.QueryContractsByCreatorResponse>): _172.QueryContractsByCreatorResponse;
                fromAmino(object: _172.QueryContractsByCreatorResponseAmino): _172.QueryContractsByCreatorResponse;
                toAmino(message: _172.QueryContractsByCreatorResponse): _172.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _172.QueryContractsByCreatorResponseAminoMsg): _172.QueryContractsByCreatorResponse;
                toAminoMsg(message: _172.QueryContractsByCreatorResponse): _172.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _172.QueryContractsByCreatorResponseProtoMsg): _172.QueryContractsByCreatorResponse;
                toProto(message: _172.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _172.QueryContractsByCreatorResponse): _172.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _171.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.StoreCodeProposal;
                fromPartial(object: Partial<_171.StoreCodeProposal>): _171.StoreCodeProposal;
                fromAmino(object: _171.StoreCodeProposalAmino): _171.StoreCodeProposal;
                toAmino(message: _171.StoreCodeProposal): _171.StoreCodeProposalAmino;
                fromAminoMsg(object: _171.StoreCodeProposalAminoMsg): _171.StoreCodeProposal;
                toAminoMsg(message: _171.StoreCodeProposal): _171.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _171.StoreCodeProposalProtoMsg): _171.StoreCodeProposal;
                toProto(message: _171.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _171.StoreCodeProposal): _171.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _171.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.InstantiateContractProposal;
                fromPartial(object: Partial<_171.InstantiateContractProposal>): _171.InstantiateContractProposal;
                fromAmino(object: _171.InstantiateContractProposalAmino): _171.InstantiateContractProposal;
                toAmino(message: _171.InstantiateContractProposal): _171.InstantiateContractProposalAmino;
                fromAminoMsg(object: _171.InstantiateContractProposalAminoMsg): _171.InstantiateContractProposal;
                toAminoMsg(message: _171.InstantiateContractProposal): _171.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _171.InstantiateContractProposalProtoMsg): _171.InstantiateContractProposal;
                toProto(message: _171.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _171.InstantiateContractProposal): _171.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _171.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.InstantiateContract2Proposal;
                fromPartial(object: Partial<_171.InstantiateContract2Proposal>): _171.InstantiateContract2Proposal;
                fromAmino(object: _171.InstantiateContract2ProposalAmino): _171.InstantiateContract2Proposal;
                toAmino(message: _171.InstantiateContract2Proposal): _171.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _171.InstantiateContract2ProposalAminoMsg): _171.InstantiateContract2Proposal;
                toAminoMsg(message: _171.InstantiateContract2Proposal): _171.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _171.InstantiateContract2ProposalProtoMsg): _171.InstantiateContract2Proposal;
                toProto(message: _171.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _171.InstantiateContract2Proposal): _171.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _171.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.MigrateContractProposal;
                fromPartial(object: Partial<_171.MigrateContractProposal>): _171.MigrateContractProposal;
                fromAmino(object: _171.MigrateContractProposalAmino): _171.MigrateContractProposal;
                toAmino(message: _171.MigrateContractProposal): _171.MigrateContractProposalAmino;
                fromAminoMsg(object: _171.MigrateContractProposalAminoMsg): _171.MigrateContractProposal;
                toAminoMsg(message: _171.MigrateContractProposal): _171.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _171.MigrateContractProposalProtoMsg): _171.MigrateContractProposal;
                toProto(message: _171.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _171.MigrateContractProposal): _171.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _171.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.SudoContractProposal;
                fromPartial(object: Partial<_171.SudoContractProposal>): _171.SudoContractProposal;
                fromAmino(object: _171.SudoContractProposalAmino): _171.SudoContractProposal;
                toAmino(message: _171.SudoContractProposal): _171.SudoContractProposalAmino;
                fromAminoMsg(object: _171.SudoContractProposalAminoMsg): _171.SudoContractProposal;
                toAminoMsg(message: _171.SudoContractProposal): _171.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _171.SudoContractProposalProtoMsg): _171.SudoContractProposal;
                toProto(message: _171.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _171.SudoContractProposal): _171.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _171.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.ExecuteContractProposal;
                fromPartial(object: Partial<_171.ExecuteContractProposal>): _171.ExecuteContractProposal;
                fromAmino(object: _171.ExecuteContractProposalAmino): _171.ExecuteContractProposal;
                toAmino(message: _171.ExecuteContractProposal): _171.ExecuteContractProposalAmino;
                fromAminoMsg(object: _171.ExecuteContractProposalAminoMsg): _171.ExecuteContractProposal;
                toAminoMsg(message: _171.ExecuteContractProposal): _171.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _171.ExecuteContractProposalProtoMsg): _171.ExecuteContractProposal;
                toProto(message: _171.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _171.ExecuteContractProposal): _171.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _171.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.UpdateAdminProposal;
                fromPartial(object: Partial<_171.UpdateAdminProposal>): _171.UpdateAdminProposal;
                fromAmino(object: _171.UpdateAdminProposalAmino): _171.UpdateAdminProposal;
                toAmino(message: _171.UpdateAdminProposal): _171.UpdateAdminProposalAmino;
                fromAminoMsg(object: _171.UpdateAdminProposalAminoMsg): _171.UpdateAdminProposal;
                toAminoMsg(message: _171.UpdateAdminProposal): _171.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _171.UpdateAdminProposalProtoMsg): _171.UpdateAdminProposal;
                toProto(message: _171.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _171.UpdateAdminProposal): _171.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _171.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.ClearAdminProposal;
                fromPartial(object: Partial<_171.ClearAdminProposal>): _171.ClearAdminProposal;
                fromAmino(object: _171.ClearAdminProposalAmino): _171.ClearAdminProposal;
                toAmino(message: _171.ClearAdminProposal): _171.ClearAdminProposalAmino;
                fromAminoMsg(object: _171.ClearAdminProposalAminoMsg): _171.ClearAdminProposal;
                toAminoMsg(message: _171.ClearAdminProposal): _171.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _171.ClearAdminProposalProtoMsg): _171.ClearAdminProposal;
                toProto(message: _171.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _171.ClearAdminProposal): _171.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _171.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.PinCodesProposal;
                fromPartial(object: Partial<_171.PinCodesProposal>): _171.PinCodesProposal;
                fromAmino(object: _171.PinCodesProposalAmino): _171.PinCodesProposal;
                toAmino(message: _171.PinCodesProposal): _171.PinCodesProposalAmino;
                fromAminoMsg(object: _171.PinCodesProposalAminoMsg): _171.PinCodesProposal;
                toAminoMsg(message: _171.PinCodesProposal): _171.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _171.PinCodesProposalProtoMsg): _171.PinCodesProposal;
                toProto(message: _171.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _171.PinCodesProposal): _171.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _171.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.UnpinCodesProposal;
                fromPartial(object: Partial<_171.UnpinCodesProposal>): _171.UnpinCodesProposal;
                fromAmino(object: _171.UnpinCodesProposalAmino): _171.UnpinCodesProposal;
                toAmino(message: _171.UnpinCodesProposal): _171.UnpinCodesProposalAmino;
                fromAminoMsg(object: _171.UnpinCodesProposalAminoMsg): _171.UnpinCodesProposal;
                toAminoMsg(message: _171.UnpinCodesProposal): _171.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _171.UnpinCodesProposalProtoMsg): _171.UnpinCodesProposal;
                toProto(message: _171.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _171.UnpinCodesProposal): _171.UnpinCodesProposalProtoMsg;
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
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _171.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.UpdateInstantiateConfigProposal;
                fromPartial(object: Partial<_171.UpdateInstantiateConfigProposal>): _171.UpdateInstantiateConfigProposal;
                fromAmino(object: _171.UpdateInstantiateConfigProposalAmino): _171.UpdateInstantiateConfigProposal;
                toAmino(message: _171.UpdateInstantiateConfigProposal): _171.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _171.UpdateInstantiateConfigProposalAminoMsg): _171.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _171.UpdateInstantiateConfigProposal): _171.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _171.UpdateInstantiateConfigProposalProtoMsg): _171.UpdateInstantiateConfigProposal;
                toProto(message: _171.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _171.UpdateInstantiateConfigProposal): _171.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _171.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _171.StoreAndInstantiateContractProposal;
                fromPartial(object: Partial<_171.StoreAndInstantiateContractProposal>): _171.StoreAndInstantiateContractProposal;
                fromAmino(object: _171.StoreAndInstantiateContractProposalAmino): _171.StoreAndInstantiateContractProposal;
                toAmino(message: _171.StoreAndInstantiateContractProposal): _171.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _171.StoreAndInstantiateContractProposalAminoMsg): _171.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _171.StoreAndInstantiateContractProposal): _171.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _171.StoreAndInstantiateContractProposalProtoMsg): _171.StoreAndInstantiateContractProposal;
                toProto(message: _171.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _171.StoreAndInstantiateContractProposal): _171.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _170.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.MsgIBCSend;
                fromPartial(object: Partial<_170.MsgIBCSend>): _170.MsgIBCSend;
                fromAmino(object: _170.MsgIBCSendAmino): _170.MsgIBCSend;
                toAmino(message: _170.MsgIBCSend): _170.MsgIBCSendAmino;
                fromAminoMsg(object: _170.MsgIBCSendAminoMsg): _170.MsgIBCSend;
                toAminoMsg(message: _170.MsgIBCSend): _170.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _170.MsgIBCSendProtoMsg): _170.MsgIBCSend;
                toProto(message: _170.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _170.MsgIBCSend): _170.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _170.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.MsgIBCSendResponse;
                fromPartial(object: Partial<_170.MsgIBCSendResponse>): _170.MsgIBCSendResponse;
                fromAmino(object: _170.MsgIBCSendResponseAmino): _170.MsgIBCSendResponse;
                toAmino(message: _170.MsgIBCSendResponse): _170.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _170.MsgIBCSendResponseAminoMsg): _170.MsgIBCSendResponse;
                toAminoMsg(message: _170.MsgIBCSendResponse): _170.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _170.MsgIBCSendResponseProtoMsg): _170.MsgIBCSendResponse;
                toProto(message: _170.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _170.MsgIBCSendResponse): _170.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _170.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _170.MsgIBCCloseChannel;
                fromPartial(object: Partial<_170.MsgIBCCloseChannel>): _170.MsgIBCCloseChannel;
                fromAmino(object: _170.MsgIBCCloseChannelAmino): _170.MsgIBCCloseChannel;
                toAmino(message: _170.MsgIBCCloseChannel): _170.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _170.MsgIBCCloseChannelAminoMsg): _170.MsgIBCCloseChannel;
                toAminoMsg(message: _170.MsgIBCCloseChannel): _170.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _170.MsgIBCCloseChannelProtoMsg): _170.MsgIBCCloseChannel;
                toProto(message: _170.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _170.MsgIBCCloseChannel): _170.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _169.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.GenesisState;
                fromPartial(object: Partial<_169.GenesisState>): _169.GenesisState;
                fromAmino(object: _169.GenesisStateAmino): _169.GenesisState;
                toAmino(message: _169.GenesisState): _169.GenesisStateAmino;
                fromAminoMsg(object: _169.GenesisStateAminoMsg): _169.GenesisState;
                toAminoMsg(message: _169.GenesisState): _169.GenesisStateAminoMsg;
                fromProtoMsg(message: _169.GenesisStateProtoMsg): _169.GenesisState;
                toProto(message: _169.GenesisState): Uint8Array;
                toProtoMsg(message: _169.GenesisState): _169.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _169.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.Code;
                fromPartial(object: Partial<_169.Code>): _169.Code;
                fromAmino(object: _169.CodeAmino): _169.Code;
                toAmino(message: _169.Code): _169.CodeAmino;
                fromAminoMsg(object: _169.CodeAminoMsg): _169.Code;
                toAminoMsg(message: _169.Code): _169.CodeAminoMsg;
                fromProtoMsg(message: _169.CodeProtoMsg): _169.Code;
                toProto(message: _169.Code): Uint8Array;
                toProtoMsg(message: _169.Code): _169.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _169.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.Contract;
                fromPartial(object: Partial<_169.Contract>): _169.Contract;
                fromAmino(object: _169.ContractAmino): _169.Contract;
                toAmino(message: _169.Contract): _169.ContractAmino;
                fromAminoMsg(object: _169.ContractAminoMsg): _169.Contract;
                toAminoMsg(message: _169.Contract): _169.ContractAminoMsg;
                fromProtoMsg(message: _169.ContractProtoMsg): _169.Contract;
                toProto(message: _169.Contract): Uint8Array;
                toProtoMsg(message: _169.Contract): _169.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _169.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _169.Sequence;
                fromPartial(object: Partial<_169.Sequence>): _169.Sequence;
                fromAmino(object: _169.SequenceAmino): _169.Sequence;
                toAmino(message: _169.Sequence): _169.SequenceAmino;
                fromAminoMsg(object: _169.SequenceAminoMsg): _169.Sequence;
                toAminoMsg(message: _169.Sequence): _169.SequenceAminoMsg;
                fromProtoMsg(message: _169.SequenceProtoMsg): _169.Sequence;
                toProto(message: _169.Sequence): Uint8Array;
                toProtoMsg(message: _169.Sequence): _169.SequenceProtoMsg;
            };
            StoreCodeAuthorization: {
                typeUrl: string;
                encode(message: _168.StoreCodeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.StoreCodeAuthorization;
                fromPartial(object: Partial<_168.StoreCodeAuthorization>): _168.StoreCodeAuthorization;
                fromAmino(object: _168.StoreCodeAuthorizationAmino): _168.StoreCodeAuthorization;
                toAmino(message: _168.StoreCodeAuthorization): _168.StoreCodeAuthorizationAmino;
                fromAminoMsg(object: _168.StoreCodeAuthorizationAminoMsg): _168.StoreCodeAuthorization;
                toAminoMsg(message: _168.StoreCodeAuthorization): _168.StoreCodeAuthorizationAminoMsg;
                fromProtoMsg(message: _168.StoreCodeAuthorizationProtoMsg): _168.StoreCodeAuthorization;
                toProto(message: _168.StoreCodeAuthorization): Uint8Array;
                toProtoMsg(message: _168.StoreCodeAuthorization): _168.StoreCodeAuthorizationProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _168.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.ContractExecutionAuthorization;
                fromPartial(object: Partial<_168.ContractExecutionAuthorization>): _168.ContractExecutionAuthorization;
                fromAmino(object: _168.ContractExecutionAuthorizationAmino): _168.ContractExecutionAuthorization;
                toAmino(message: _168.ContractExecutionAuthorization): _168.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _168.ContractExecutionAuthorizationAminoMsg): _168.ContractExecutionAuthorization;
                toAminoMsg(message: _168.ContractExecutionAuthorization): _168.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _168.ContractExecutionAuthorizationProtoMsg): _168.ContractExecutionAuthorization;
                toProto(message: _168.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _168.ContractExecutionAuthorization): _168.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _168.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.ContractMigrationAuthorization;
                fromPartial(object: Partial<_168.ContractMigrationAuthorization>): _168.ContractMigrationAuthorization;
                fromAmino(object: _168.ContractMigrationAuthorizationAmino): _168.ContractMigrationAuthorization;
                toAmino(message: _168.ContractMigrationAuthorization): _168.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _168.ContractMigrationAuthorizationAminoMsg): _168.ContractMigrationAuthorization;
                toAminoMsg(message: _168.ContractMigrationAuthorization): _168.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _168.ContractMigrationAuthorizationProtoMsg): _168.ContractMigrationAuthorization;
                toProto(message: _168.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _168.ContractMigrationAuthorization): _168.ContractMigrationAuthorizationProtoMsg;
            };
            CodeGrant: {
                typeUrl: string;
                encode(message: _168.CodeGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.CodeGrant;
                fromPartial(object: Partial<_168.CodeGrant>): _168.CodeGrant;
                fromAmino(object: _168.CodeGrantAmino): _168.CodeGrant;
                toAmino(message: _168.CodeGrant): _168.CodeGrantAmino;
                fromAminoMsg(object: _168.CodeGrantAminoMsg): _168.CodeGrant;
                toAminoMsg(message: _168.CodeGrant): _168.CodeGrantAminoMsg;
                fromProtoMsg(message: _168.CodeGrantProtoMsg): _168.CodeGrant;
                toProto(message: _168.CodeGrant): Uint8Array;
                toProtoMsg(message: _168.CodeGrant): _168.CodeGrantProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _168.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.ContractGrant;
                fromPartial(object: Partial<_168.ContractGrant>): _168.ContractGrant;
                fromAmino(object: _168.ContractGrantAmino): _168.ContractGrant;
                toAmino(message: _168.ContractGrant): _168.ContractGrantAmino;
                fromAminoMsg(object: _168.ContractGrantAminoMsg): _168.ContractGrant;
                toAminoMsg(message: _168.ContractGrant): _168.ContractGrantAminoMsg;
                fromProtoMsg(message: _168.ContractGrantProtoMsg): _168.ContractGrant;
                toProto(message: _168.ContractGrant): Uint8Array;
                toProtoMsg(message: _168.ContractGrant): _168.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _168.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.MaxCallsLimit;
                fromPartial(object: Partial<_168.MaxCallsLimit>): _168.MaxCallsLimit;
                fromAmino(object: _168.MaxCallsLimitAmino): _168.MaxCallsLimit;
                toAmino(message: _168.MaxCallsLimit): _168.MaxCallsLimitAmino;
                fromAminoMsg(object: _168.MaxCallsLimitAminoMsg): _168.MaxCallsLimit;
                toAminoMsg(message: _168.MaxCallsLimit): _168.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _168.MaxCallsLimitProtoMsg): _168.MaxCallsLimit;
                toProto(message: _168.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _168.MaxCallsLimit): _168.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _168.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.MaxFundsLimit;
                fromPartial(object: Partial<_168.MaxFundsLimit>): _168.MaxFundsLimit;
                fromAmino(object: _168.MaxFundsLimitAmino): _168.MaxFundsLimit;
                toAmino(message: _168.MaxFundsLimit): _168.MaxFundsLimitAmino;
                fromAminoMsg(object: _168.MaxFundsLimitAminoMsg): _168.MaxFundsLimit;
                toAminoMsg(message: _168.MaxFundsLimit): _168.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _168.MaxFundsLimitProtoMsg): _168.MaxFundsLimit;
                toProto(message: _168.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _168.MaxFundsLimit): _168.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _168.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.CombinedLimit;
                fromPartial(object: Partial<_168.CombinedLimit>): _168.CombinedLimit;
                fromAmino(object: _168.CombinedLimitAmino): _168.CombinedLimit;
                toAmino(message: _168.CombinedLimit): _168.CombinedLimitAmino;
                fromAminoMsg(object: _168.CombinedLimitAminoMsg): _168.CombinedLimit;
                toAminoMsg(message: _168.CombinedLimit): _168.CombinedLimitAminoMsg;
                fromProtoMsg(message: _168.CombinedLimitProtoMsg): _168.CombinedLimit;
                toProto(message: _168.CombinedLimit): Uint8Array;
                toProtoMsg(message: _168.CombinedLimit): _168.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _168.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _168.AllowAllMessagesFilter;
                fromPartial(_: Partial<_168.AllowAllMessagesFilter>): _168.AllowAllMessagesFilter;
                fromAmino(_: _168.AllowAllMessagesFilterAmino): _168.AllowAllMessagesFilter;
                toAmino(_: _168.AllowAllMessagesFilter): _168.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _168.AllowAllMessagesFilterAminoMsg): _168.AllowAllMessagesFilter;
                toAminoMsg(message: _168.AllowAllMessagesFilter): _168.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _168.AllowAllMessagesFilterProtoMsg): _168.AllowAllMessagesFilter;
                toProto(message: _168.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _168.AllowAllMessagesFilter): _168.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _168.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.AcceptedMessageKeysFilter;
                fromPartial(object: Partial<_168.AcceptedMessageKeysFilter>): _168.AcceptedMessageKeysFilter;
                fromAmino(object: _168.AcceptedMessageKeysFilterAmino): _168.AcceptedMessageKeysFilter;
                toAmino(message: _168.AcceptedMessageKeysFilter): _168.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _168.AcceptedMessageKeysFilterAminoMsg): _168.AcceptedMessageKeysFilter;
                toAminoMsg(message: _168.AcceptedMessageKeysFilter): _168.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _168.AcceptedMessageKeysFilterProtoMsg): _168.AcceptedMessageKeysFilter;
                toProto(message: _168.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _168.AcceptedMessageKeysFilter): _168.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _168.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _168.AcceptedMessagesFilter;
                fromPartial(object: Partial<_168.AcceptedMessagesFilter>): _168.AcceptedMessagesFilter;
                fromAmino(object: _168.AcceptedMessagesFilterAmino): _168.AcceptedMessagesFilter;
                toAmino(message: _168.AcceptedMessagesFilter): _168.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _168.AcceptedMessagesFilterAminoMsg): _168.AcceptedMessagesFilter;
                toAminoMsg(message: _168.AcceptedMessagesFilter): _168.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _168.AcceptedMessagesFilterProtoMsg): _168.AcceptedMessagesFilter;
                toProto(message: _168.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _168.AcceptedMessagesFilter): _168.AcceptedMessagesFilterProtoMsg;
            };
            Cosmwasm_wasmv1ContractAuthzLimitX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _168.MaxCallsLimit | _168.MaxFundsLimit | _168.CombinedLimit;
            Cosmwasm_wasmv1ContractAuthzLimitX_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmwasm_wasmv1ContractAuthzLimitX_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmwasm_wasmv1ContractAuthzFilterX_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _168.AllowAllMessagesFilter | _168.AcceptedMessageKeysFilter | _168.AcceptedMessagesFilter;
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
                    v1: _318.MsgClientImpl;
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
                        contractInfo(request: _172.QueryContractInfoRequest): Promise<_172.QueryContractInfoResponse>;
                        contractHistory(request: _172.QueryContractHistoryRequest): Promise<_172.QueryContractHistoryResponse>;
                        contractsByCode(request: _172.QueryContractsByCodeRequest): Promise<_172.QueryContractsByCodeResponse>;
                        allContractState(request: _172.QueryAllContractStateRequest): Promise<_172.QueryAllContractStateResponse>;
                        rawContractState(request: _172.QueryRawContractStateRequest): Promise<_172.QueryRawContractStateResponse>;
                        smartContractState(request: _172.QuerySmartContractStateRequest): Promise<_172.QuerySmartContractStateResponse>;
                        code(request: _172.QueryCodeRequest): Promise<_172.QueryCodeResponse>;
                        codes(request?: _172.QueryCodesRequest): Promise<_172.QueryCodesResponse>;
                        pinnedCodes(request?: _172.QueryPinnedCodesRequest): Promise<_172.QueryPinnedCodesResponse>;
                        params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                        contractsByCreator(request: _172.QueryContractsByCreatorRequest): Promise<_172.QueryContractsByCreatorResponse>;
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
                    v1: _316.LCDQueryClient;
                };
            };
        }>;
    };
}
