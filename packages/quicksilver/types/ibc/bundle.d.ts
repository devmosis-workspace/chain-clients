import * as _162 from "./applications/interchain_accounts/controller/v1/controller";
import * as _163 from "./applications/interchain_accounts/controller/v1/query";
import * as _164 from "./applications/interchain_accounts/host/v1/host";
import * as _165 from "./applications/interchain_accounts/host/v1/query";
import * as _166 from "./applications/interchain_accounts/v1/account";
import * as _167 from "./applications/interchain_accounts/v1/genesis";
import * as _168 from "./applications/interchain_accounts/v1/metadata";
import * as _169 from "./applications/interchain_accounts/v1/packet";
import * as _170 from "./applications/transfer/v1/genesis";
import * as _171 from "./applications/transfer/v1/query";
import * as _172 from "./applications/transfer/v1/transfer";
import * as _173 from "./applications/transfer/v1/tx";
import * as _174 from "./applications/transfer/v2/packet";
import * as _175 from "./core/channel/v1/channel";
import * as _176 from "./core/channel/v1/genesis";
import * as _177 from "./core/channel/v1/query";
import * as _178 from "./core/channel/v1/tx";
import * as _179 from "./core/client/v1/client";
import * as _180 from "./core/client/v1/genesis";
import * as _181 from "./core/client/v1/query";
import * as _182 from "./core/client/v1/tx";
import * as _183 from "./core/commitment/v1/commitment";
import * as _184 from "./core/connection/v1/connection";
import * as _185 from "./core/connection/v1/genesis";
import * as _186 from "./core/connection/v1/query";
import * as _187 from "./core/connection/v1/tx";
import * as _188 from "./core/types/v1/genesis";
import * as _189 from "./lightclients/localhost/v1/localhost";
import * as _190 from "./lightclients/solomachine/v1/solomachine";
import * as _191 from "./lightclients/solomachine/v2/solomachine";
import * as _192 from "./lightclients/tendermint/v1/tendermint";
import * as _316 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _317 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _318 from "./applications/transfer/v1/query.lcd";
import * as _319 from "./core/channel/v1/query.lcd";
import * as _320 from "./core/client/v1/query.lcd";
import * as _321 from "./core/connection/v1/query.lcd";
import * as _322 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _323 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _324 from "./applications/transfer/v1/query.rpc.Query";
import * as _325 from "./core/channel/v1/query.rpc.Query";
import * as _326 from "./core/client/v1/query.rpc.Query";
import * as _327 from "./core/connection/v1/query.rpc.Query";
import * as _328 from "./applications/transfer/v1/tx.rpc.msg";
import * as _329 from "./core/channel/v1/tx.rpc.msg";
import * as _330 from "./core/client/v1/tx.rpc.msg";
import * as _331 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _322.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _316.LCDQueryClient;
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
                    Params: {
                        typeUrl: string;
                        encode(message: _162.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _162.Params;
                        fromPartial(object: Partial<_162.Params>): _162.Params;
                        fromAmino(object: _162.ParamsAmino): _162.Params;
                        toAmino(message: _162.Params): _162.ParamsAmino;
                        fromAminoMsg(object: _162.ParamsAminoMsg): _162.Params;
                        toAminoMsg(message: _162.Params): _162.ParamsAminoMsg;
                        fromProtoMsg(message: _162.ParamsProtoMsg): _162.Params;
                        toProto(message: _162.Params): Uint8Array;
                        toProtoMsg(message: _162.Params): _162.ParamsProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _323.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _317.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _165.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _165.QueryParamsRequest;
                        fromPartial(_: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
                        fromAmino(_: _165.QueryParamsRequestAmino): _165.QueryParamsRequest;
                        toAmino(_: _165.QueryParamsRequest): _165.QueryParamsRequestAmino;
                        fromAminoMsg(object: _165.QueryParamsRequestAminoMsg): _165.QueryParamsRequest;
                        toAminoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _165.QueryParamsRequestProtoMsg): _165.QueryParamsRequest;
                        toProto(message: _165.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _165.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _165.QueryParamsResponse;
                        fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
                        fromAmino(object: _165.QueryParamsResponseAmino): _165.QueryParamsResponse;
                        toAmino(message: _165.QueryParamsResponse): _165.QueryParamsResponseAmino;
                        fromAminoMsg(object: _165.QueryParamsResponseAminoMsg): _165.QueryParamsResponse;
                        toAminoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _165.QueryParamsResponseProtoMsg): _165.QueryParamsResponse;
                        toProto(message: _165.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _164.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _164.Params;
                        fromPartial(object: Partial<_164.Params>): _164.Params;
                        fromAmino(object: _164.ParamsAmino): _164.Params;
                        toAmino(message: _164.Params): _164.ParamsAmino;
                        fromAminoMsg(object: _164.ParamsAminoMsg): _164.Params;
                        toAminoMsg(message: _164.Params): _164.ParamsAminoMsg;
                        fromProtoMsg(message: _164.ParamsProtoMsg): _164.Params;
                        toProto(message: _164.Params): Uint8Array;
                        toProtoMsg(message: _164.Params): _164.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _169.Type;
                typeToJSON(object: _169.Type): string;
                Type: typeof _169.Type;
                TypeSDKType: typeof _169.Type;
                TypeAmino: typeof _169.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _169.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.InterchainAccountPacketData;
                    fromPartial(object: Partial<_169.InterchainAccountPacketData>): _169.InterchainAccountPacketData;
                    fromAmino(object: _169.InterchainAccountPacketDataAmino): _169.InterchainAccountPacketData;
                    toAmino(message: _169.InterchainAccountPacketData): _169.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _169.InterchainAccountPacketDataAminoMsg): _169.InterchainAccountPacketData;
                    toAminoMsg(message: _169.InterchainAccountPacketData): _169.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _169.InterchainAccountPacketDataProtoMsg): _169.InterchainAccountPacketData;
                    toProto(message: _169.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _169.InterchainAccountPacketData): _169.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _169.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.CosmosTx;
                    fromPartial(object: Partial<_169.CosmosTx>): _169.CosmosTx;
                    fromAmino(object: _169.CosmosTxAmino): _169.CosmosTx;
                    toAmino(message: _169.CosmosTx): _169.CosmosTxAmino;
                    fromAminoMsg(object: _169.CosmosTxAminoMsg): _169.CosmosTx;
                    toAminoMsg(message: _169.CosmosTx): _169.CosmosTxAminoMsg;
                    fromProtoMsg(message: _169.CosmosTxProtoMsg): _169.CosmosTx;
                    toProto(message: _169.CosmosTx): Uint8Array;
                    toProtoMsg(message: _169.CosmosTx): _169.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _168.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.Metadata;
                    fromPartial(object: Partial<_168.Metadata>): _168.Metadata;
                    fromAmino(object: _168.MetadataAmino): _168.Metadata;
                    toAmino(message: _168.Metadata): _168.MetadataAmino;
                    fromAminoMsg(object: _168.MetadataAminoMsg): _168.Metadata;
                    toAminoMsg(message: _168.Metadata): _168.MetadataAminoMsg;
                    fromProtoMsg(message: _168.MetadataProtoMsg): _168.Metadata;
                    toProto(message: _168.Metadata): Uint8Array;
                    toProtoMsg(message: _168.Metadata): _168.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _167.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.GenesisState;
                    fromPartial(object: Partial<_167.GenesisState>): _167.GenesisState;
                    fromAmino(object: _167.GenesisStateAmino): _167.GenesisState;
                    toAmino(message: _167.GenesisState): _167.GenesisStateAmino;
                    fromAminoMsg(object: _167.GenesisStateAminoMsg): _167.GenesisState;
                    toAminoMsg(message: _167.GenesisState): _167.GenesisStateAminoMsg;
                    fromProtoMsg(message: _167.GenesisStateProtoMsg): _167.GenesisState;
                    toProto(message: _167.GenesisState): Uint8Array;
                    toProtoMsg(message: _167.GenesisState): _167.GenesisStateProtoMsg;
                };
                ControllerGenesisState: {
                    typeUrl: string;
                    encode(message: _167.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ControllerGenesisState;
                    fromPartial(object: Partial<_167.ControllerGenesisState>): _167.ControllerGenesisState;
                    fromAmino(object: _167.ControllerGenesisStateAmino): _167.ControllerGenesisState;
                    toAmino(message: _167.ControllerGenesisState): _167.ControllerGenesisStateAmino;
                    fromAminoMsg(object: _167.ControllerGenesisStateAminoMsg): _167.ControllerGenesisState;
                    toAminoMsg(message: _167.ControllerGenesisState): _167.ControllerGenesisStateAminoMsg;
                    fromProtoMsg(message: _167.ControllerGenesisStateProtoMsg): _167.ControllerGenesisState;
                    toProto(message: _167.ControllerGenesisState): Uint8Array;
                    toProtoMsg(message: _167.ControllerGenesisState): _167.ControllerGenesisStateProtoMsg;
                };
                HostGenesisState: {
                    typeUrl: string;
                    encode(message: _167.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.HostGenesisState;
                    fromPartial(object: Partial<_167.HostGenesisState>): _167.HostGenesisState;
                    fromAmino(object: _167.HostGenesisStateAmino): _167.HostGenesisState;
                    toAmino(message: _167.HostGenesisState): _167.HostGenesisStateAmino;
                    fromAminoMsg(object: _167.HostGenesisStateAminoMsg): _167.HostGenesisState;
                    toAminoMsg(message: _167.HostGenesisState): _167.HostGenesisStateAminoMsg;
                    fromProtoMsg(message: _167.HostGenesisStateProtoMsg): _167.HostGenesisState;
                    toProto(message: _167.HostGenesisState): Uint8Array;
                    toProtoMsg(message: _167.HostGenesisState): _167.HostGenesisStateProtoMsg;
                };
                ActiveChannel: {
                    typeUrl: string;
                    encode(message: _167.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ActiveChannel;
                    fromPartial(object: Partial<_167.ActiveChannel>): _167.ActiveChannel;
                    fromAmino(object: _167.ActiveChannelAmino): _167.ActiveChannel;
                    toAmino(message: _167.ActiveChannel): _167.ActiveChannelAmino;
                    fromAminoMsg(object: _167.ActiveChannelAminoMsg): _167.ActiveChannel;
                    toAminoMsg(message: _167.ActiveChannel): _167.ActiveChannelAminoMsg;
                    fromProtoMsg(message: _167.ActiveChannelProtoMsg): _167.ActiveChannel;
                    toProto(message: _167.ActiveChannel): Uint8Array;
                    toProtoMsg(message: _167.ActiveChannel): _167.ActiveChannelProtoMsg;
                };
                RegisteredInterchainAccount: {
                    typeUrl: string;
                    encode(message: _167.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_167.RegisteredInterchainAccount>): _167.RegisteredInterchainAccount;
                    fromAmino(object: _167.RegisteredInterchainAccountAmino): _167.RegisteredInterchainAccount;
                    toAmino(message: _167.RegisteredInterchainAccount): _167.RegisteredInterchainAccountAmino;
                    fromAminoMsg(object: _167.RegisteredInterchainAccountAminoMsg): _167.RegisteredInterchainAccount;
                    toAminoMsg(message: _167.RegisteredInterchainAccount): _167.RegisteredInterchainAccountAminoMsg;
                    fromProtoMsg(message: _167.RegisteredInterchainAccountProtoMsg): _167.RegisteredInterchainAccount;
                    toProto(message: _167.RegisteredInterchainAccount): Uint8Array;
                    toProtoMsg(message: _167.RegisteredInterchainAccount): _167.RegisteredInterchainAccountProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _166.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.InterchainAccount;
                    fromPartial(object: Partial<_166.InterchainAccount>): _166.InterchainAccount;
                    fromAmino(object: _166.InterchainAccountAmino): _166.InterchainAccount;
                    toAmino(message: _166.InterchainAccount): _166.InterchainAccountAmino;
                    fromAminoMsg(object: _166.InterchainAccountAminoMsg): _166.InterchainAccount;
                    toAminoMsg(message: _166.InterchainAccount): _166.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _166.InterchainAccountProtoMsg): _166.InterchainAccount;
                    toProto(message: _166.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _166.InterchainAccount): _166.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _328.MsgClientImpl;
                QueryClientImpl: typeof _324.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _171.QueryDenomTraceRequest): Promise<_171.QueryDenomTraceResponse>;
                    denomTraces(request?: _171.QueryDenomTracesRequest): Promise<_171.QueryDenomTracesResponse>;
                    params(request?: _171.QueryParamsRequest): Promise<_171.QueryParamsResponse>;
                    denomHash(request: _171.QueryDenomHashRequest): Promise<_171.QueryDenomHashResponse>;
                    escrowAddress(request: _171.QueryEscrowAddressRequest): Promise<_171.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _318.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _173.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _173.MsgTransfer): {
                            typeUrl: string;
                            value: _173.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _173.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _173.MsgTransfer): {
                            typeUrl: string;
                            value: _173.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _173.MsgTransfer) => _173.MsgTransferAmino;
                        fromAmino: (object: _173.MsgTransferAmino) => _173.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _173.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.MsgTransfer;
                    fromPartial(object: Partial<_173.MsgTransfer>): _173.MsgTransfer;
                    fromAmino(object: _173.MsgTransferAmino): _173.MsgTransfer;
                    toAmino(message: _173.MsgTransfer): _173.MsgTransferAmino;
                    fromAminoMsg(object: _173.MsgTransferAminoMsg): _173.MsgTransfer;
                    toAminoMsg(message: _173.MsgTransfer): _173.MsgTransferAminoMsg;
                    fromProtoMsg(message: _173.MsgTransferProtoMsg): _173.MsgTransfer;
                    toProto(message: _173.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _173.MsgTransfer): _173.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _173.MsgTransferResponse;
                    fromPartial(_: Partial<_173.MsgTransferResponse>): _173.MsgTransferResponse;
                    fromAmino(_: _173.MsgTransferResponseAmino): _173.MsgTransferResponse;
                    toAmino(_: _173.MsgTransferResponse): _173.MsgTransferResponseAmino;
                    fromAminoMsg(object: _173.MsgTransferResponseAminoMsg): _173.MsgTransferResponse;
                    toAminoMsg(message: _173.MsgTransferResponse): _173.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgTransferResponseProtoMsg): _173.MsgTransferResponse;
                    toProto(message: _173.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgTransferResponse): _173.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _172.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _172.DenomTrace;
                    fromPartial(object: Partial<_172.DenomTrace>): _172.DenomTrace;
                    fromAmino(object: _172.DenomTraceAmino): _172.DenomTrace;
                    toAmino(message: _172.DenomTrace): _172.DenomTraceAmino;
                    fromAminoMsg(object: _172.DenomTraceAminoMsg): _172.DenomTrace;
                    toAminoMsg(message: _172.DenomTrace): _172.DenomTraceAminoMsg;
                    fromProtoMsg(message: _172.DenomTraceProtoMsg): _172.DenomTrace;
                    toProto(message: _172.DenomTrace): Uint8Array;
                    toProtoMsg(message: _172.DenomTrace): _172.DenomTraceProtoMsg;
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
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_171.QueryDenomTraceRequest>): _171.QueryDenomTraceRequest;
                    fromAmino(object: _171.QueryDenomTraceRequestAmino): _171.QueryDenomTraceRequest;
                    toAmino(message: _171.QueryDenomTraceRequest): _171.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _171.QueryDenomTraceRequestAminoMsg): _171.QueryDenomTraceRequest;
                    toAminoMsg(message: _171.QueryDenomTraceRequest): _171.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryDenomTraceRequestProtoMsg): _171.QueryDenomTraceRequest;
                    toProto(message: _171.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryDenomTraceRequest): _171.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_171.QueryDenomTraceResponse>): _171.QueryDenomTraceResponse;
                    fromAmino(object: _171.QueryDenomTraceResponseAmino): _171.QueryDenomTraceResponse;
                    toAmino(message: _171.QueryDenomTraceResponse): _171.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _171.QueryDenomTraceResponseAminoMsg): _171.QueryDenomTraceResponse;
                    toAminoMsg(message: _171.QueryDenomTraceResponse): _171.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryDenomTraceResponseProtoMsg): _171.QueryDenomTraceResponse;
                    toProto(message: _171.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryDenomTraceResponse): _171.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_171.QueryDenomTracesRequest>): _171.QueryDenomTracesRequest;
                    fromAmino(object: _171.QueryDenomTracesRequestAmino): _171.QueryDenomTracesRequest;
                    toAmino(message: _171.QueryDenomTracesRequest): _171.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _171.QueryDenomTracesRequestAminoMsg): _171.QueryDenomTracesRequest;
                    toAminoMsg(message: _171.QueryDenomTracesRequest): _171.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryDenomTracesRequestProtoMsg): _171.QueryDenomTracesRequest;
                    toProto(message: _171.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryDenomTracesRequest): _171.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_171.QueryDenomTracesResponse>): _171.QueryDenomTracesResponse;
                    fromAmino(object: _171.QueryDenomTracesResponseAmino): _171.QueryDenomTracesResponse;
                    toAmino(message: _171.QueryDenomTracesResponse): _171.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _171.QueryDenomTracesResponseAminoMsg): _171.QueryDenomTracesResponse;
                    toAminoMsg(message: _171.QueryDenomTracesResponse): _171.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryDenomTracesResponseProtoMsg): _171.QueryDenomTracesResponse;
                    toProto(message: _171.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryDenomTracesResponse): _171.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _171.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _171.QueryParamsRequest;
                    fromPartial(_: Partial<_171.QueryParamsRequest>): _171.QueryParamsRequest;
                    fromAmino(_: _171.QueryParamsRequestAmino): _171.QueryParamsRequest;
                    toAmino(_: _171.QueryParamsRequest): _171.QueryParamsRequestAmino;
                    fromAminoMsg(object: _171.QueryParamsRequestAminoMsg): _171.QueryParamsRequest;
                    toAminoMsg(message: _171.QueryParamsRequest): _171.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryParamsRequestProtoMsg): _171.QueryParamsRequest;
                    toProto(message: _171.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryParamsRequest): _171.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryParamsResponse;
                    fromPartial(object: Partial<_171.QueryParamsResponse>): _171.QueryParamsResponse;
                    fromAmino(object: _171.QueryParamsResponseAmino): _171.QueryParamsResponse;
                    toAmino(message: _171.QueryParamsResponse): _171.QueryParamsResponseAmino;
                    fromAminoMsg(object: _171.QueryParamsResponseAminoMsg): _171.QueryParamsResponse;
                    toAminoMsg(message: _171.QueryParamsResponse): _171.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryParamsResponseProtoMsg): _171.QueryParamsResponse;
                    toProto(message: _171.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryParamsResponse): _171.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryDenomHashRequest;
                    fromPartial(object: Partial<_171.QueryDenomHashRequest>): _171.QueryDenomHashRequest;
                    fromAmino(object: _171.QueryDenomHashRequestAmino): _171.QueryDenomHashRequest;
                    toAmino(message: _171.QueryDenomHashRequest): _171.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _171.QueryDenomHashRequestAminoMsg): _171.QueryDenomHashRequest;
                    toAminoMsg(message: _171.QueryDenomHashRequest): _171.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryDenomHashRequestProtoMsg): _171.QueryDenomHashRequest;
                    toProto(message: _171.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryDenomHashRequest): _171.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryDenomHashResponse;
                    fromPartial(object: Partial<_171.QueryDenomHashResponse>): _171.QueryDenomHashResponse;
                    fromAmino(object: _171.QueryDenomHashResponseAmino): _171.QueryDenomHashResponse;
                    toAmino(message: _171.QueryDenomHashResponse): _171.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _171.QueryDenomHashResponseAminoMsg): _171.QueryDenomHashResponse;
                    toAminoMsg(message: _171.QueryDenomHashResponse): _171.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryDenomHashResponseProtoMsg): _171.QueryDenomHashResponse;
                    toProto(message: _171.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryDenomHashResponse): _171.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_171.QueryEscrowAddressRequest>): _171.QueryEscrowAddressRequest;
                    fromAmino(object: _171.QueryEscrowAddressRequestAmino): _171.QueryEscrowAddressRequest;
                    toAmino(message: _171.QueryEscrowAddressRequest): _171.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _171.QueryEscrowAddressRequestAminoMsg): _171.QueryEscrowAddressRequest;
                    toAminoMsg(message: _171.QueryEscrowAddressRequest): _171.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryEscrowAddressRequestProtoMsg): _171.QueryEscrowAddressRequest;
                    toProto(message: _171.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryEscrowAddressRequest): _171.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_171.QueryEscrowAddressResponse>): _171.QueryEscrowAddressResponse;
                    fromAmino(object: _171.QueryEscrowAddressResponseAmino): _171.QueryEscrowAddressResponse;
                    toAmino(message: _171.QueryEscrowAddressResponse): _171.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _171.QueryEscrowAddressResponseAminoMsg): _171.QueryEscrowAddressResponse;
                    toAminoMsg(message: _171.QueryEscrowAddressResponse): _171.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryEscrowAddressResponseProtoMsg): _171.QueryEscrowAddressResponse;
                    toProto(message: _171.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryEscrowAddressResponse): _171.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _170.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _170.GenesisState;
                    fromPartial(object: Partial<_170.GenesisState>): _170.GenesisState;
                    fromAmino(object: _170.GenesisStateAmino): _170.GenesisState;
                    toAmino(message: _170.GenesisState): _170.GenesisStateAmino;
                    fromAminoMsg(object: _170.GenesisStateAminoMsg): _170.GenesisState;
                    toAminoMsg(message: _170.GenesisState): _170.GenesisStateAminoMsg;
                    fromProtoMsg(message: _170.GenesisStateProtoMsg): _170.GenesisState;
                    toProto(message: _170.GenesisState): Uint8Array;
                    toProtoMsg(message: _170.GenesisState): _170.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _174.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _174.FungibleTokenPacketData;
                    fromPartial(object: Partial<_174.FungibleTokenPacketData>): _174.FungibleTokenPacketData;
                    fromAmino(object: _174.FungibleTokenPacketDataAmino): _174.FungibleTokenPacketData;
                    toAmino(message: _174.FungibleTokenPacketData): _174.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _174.FungibleTokenPacketDataAminoMsg): _174.FungibleTokenPacketData;
                    toAminoMsg(message: _174.FungibleTokenPacketData): _174.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _174.FungibleTokenPacketDataProtoMsg): _174.FungibleTokenPacketData;
                    toProto(message: _174.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _174.FungibleTokenPacketData): _174.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _329.MsgClientImpl;
                QueryClientImpl: typeof _325.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _177.QueryChannelRequest): Promise<_177.QueryChannelResponse>;
                    channels(request?: _177.QueryChannelsRequest): Promise<_177.QueryChannelsResponse>;
                    connectionChannels(request: _177.QueryConnectionChannelsRequest): Promise<_177.QueryConnectionChannelsResponse>;
                    channelClientState(request: _177.QueryChannelClientStateRequest): Promise<_177.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _177.QueryChannelConsensusStateRequest): Promise<_177.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _177.QueryPacketCommitmentRequest): Promise<_177.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _177.QueryPacketCommitmentsRequest): Promise<_177.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _177.QueryPacketReceiptRequest): Promise<_177.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _177.QueryPacketAcknowledgementRequest): Promise<_177.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _177.QueryPacketAcknowledgementsRequest): Promise<_177.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _177.QueryUnreceivedPacketsRequest): Promise<_177.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _177.QueryUnreceivedAcksRequest): Promise<_177.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _177.QueryNextSequenceReceiveRequest): Promise<_177.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _319.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _178.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _178.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _178.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _178.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _178.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _178.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _178.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _178.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _178.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _178.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _178.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _178.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _178.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _178.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _178.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _178.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _178.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _178.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _178.MsgRecvPacket): {
                            typeUrl: string;
                            value: _178.MsgRecvPacket;
                        };
                        timeout(value: _178.MsgTimeout): {
                            typeUrl: string;
                            value: _178.MsgTimeout;
                        };
                        timeoutOnClose(value: _178.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _178.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _178.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _178.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _178.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _178.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _178.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _178.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _178.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _178.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _178.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _178.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _178.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _178.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _178.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _178.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _178.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _178.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _178.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _178.MsgRecvPacket): {
                            typeUrl: string;
                            value: _178.MsgRecvPacket;
                        };
                        timeout(value: _178.MsgTimeout): {
                            typeUrl: string;
                            value: _178.MsgTimeout;
                        };
                        timeoutOnClose(value: _178.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _178.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _178.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _178.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _178.MsgChannelOpenInit) => _178.MsgChannelOpenInitAmino;
                        fromAmino: (object: _178.MsgChannelOpenInitAmino) => _178.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _178.MsgChannelOpenTry) => _178.MsgChannelOpenTryAmino;
                        fromAmino: (object: _178.MsgChannelOpenTryAmino) => _178.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _178.MsgChannelOpenAck) => _178.MsgChannelOpenAckAmino;
                        fromAmino: (object: _178.MsgChannelOpenAckAmino) => _178.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _178.MsgChannelOpenConfirm) => _178.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _178.MsgChannelOpenConfirmAmino) => _178.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _178.MsgChannelCloseInit) => _178.MsgChannelCloseInitAmino;
                        fromAmino: (object: _178.MsgChannelCloseInitAmino) => _178.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _178.MsgChannelCloseConfirm) => _178.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _178.MsgChannelCloseConfirmAmino) => _178.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _178.MsgRecvPacket) => _178.MsgRecvPacketAmino;
                        fromAmino: (object: _178.MsgRecvPacketAmino) => _178.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _178.MsgTimeout) => _178.MsgTimeoutAmino;
                        fromAmino: (object: _178.MsgTimeoutAmino) => _178.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _178.MsgTimeoutOnClose) => _178.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _178.MsgTimeoutOnCloseAmino) => _178.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _178.MsgAcknowledgement) => _178.MsgAcknowledgementAmino;
                        fromAmino: (object: _178.MsgAcknowledgementAmino) => _178.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _178.ResponseResultType;
                responseResultTypeToJSON(object: _178.ResponseResultType): string;
                ResponseResultType: typeof _178.ResponseResultType;
                ResponseResultTypeSDKType: typeof _178.ResponseResultType;
                ResponseResultTypeAmino: typeof _178.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelOpenInit;
                    fromPartial(object: Partial<_178.MsgChannelOpenInit>): _178.MsgChannelOpenInit;
                    fromAmino(object: _178.MsgChannelOpenInitAmino): _178.MsgChannelOpenInit;
                    toAmino(message: _178.MsgChannelOpenInit): _178.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenInitAminoMsg): _178.MsgChannelOpenInit;
                    toAminoMsg(message: _178.MsgChannelOpenInit): _178.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenInitProtoMsg): _178.MsgChannelOpenInit;
                    toProto(message: _178.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenInit): _178.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_178.MsgChannelOpenInitResponse>): _178.MsgChannelOpenInitResponse;
                    fromAmino(object: _178.MsgChannelOpenInitResponseAmino): _178.MsgChannelOpenInitResponse;
                    toAmino(message: _178.MsgChannelOpenInitResponse): _178.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenInitResponseAminoMsg): _178.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _178.MsgChannelOpenInitResponse): _178.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenInitResponseProtoMsg): _178.MsgChannelOpenInitResponse;
                    toProto(message: _178.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenInitResponse): _178.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelOpenTry;
                    fromPartial(object: Partial<_178.MsgChannelOpenTry>): _178.MsgChannelOpenTry;
                    fromAmino(object: _178.MsgChannelOpenTryAmino): _178.MsgChannelOpenTry;
                    toAmino(message: _178.MsgChannelOpenTry): _178.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenTryAminoMsg): _178.MsgChannelOpenTry;
                    toAminoMsg(message: _178.MsgChannelOpenTry): _178.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenTryProtoMsg): _178.MsgChannelOpenTry;
                    toProto(message: _178.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenTry): _178.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_178.MsgChannelOpenTryResponse>): _178.MsgChannelOpenTryResponse;
                    fromAmino(object: _178.MsgChannelOpenTryResponseAmino): _178.MsgChannelOpenTryResponse;
                    toAmino(message: _178.MsgChannelOpenTryResponse): _178.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenTryResponseAminoMsg): _178.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _178.MsgChannelOpenTryResponse): _178.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenTryResponseProtoMsg): _178.MsgChannelOpenTryResponse;
                    toProto(message: _178.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenTryResponse): _178.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelOpenAck;
                    fromPartial(object: Partial<_178.MsgChannelOpenAck>): _178.MsgChannelOpenAck;
                    fromAmino(object: _178.MsgChannelOpenAckAmino): _178.MsgChannelOpenAck;
                    toAmino(message: _178.MsgChannelOpenAck): _178.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenAckAminoMsg): _178.MsgChannelOpenAck;
                    toAminoMsg(message: _178.MsgChannelOpenAck): _178.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenAckProtoMsg): _178.MsgChannelOpenAck;
                    toProto(message: _178.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenAck): _178.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _178.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_178.MsgChannelOpenAckResponse>): _178.MsgChannelOpenAckResponse;
                    fromAmino(_: _178.MsgChannelOpenAckResponseAmino): _178.MsgChannelOpenAckResponse;
                    toAmino(_: _178.MsgChannelOpenAckResponse): _178.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenAckResponseAminoMsg): _178.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _178.MsgChannelOpenAckResponse): _178.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenAckResponseProtoMsg): _178.MsgChannelOpenAckResponse;
                    toProto(message: _178.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenAckResponse): _178.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_178.MsgChannelOpenConfirm>): _178.MsgChannelOpenConfirm;
                    fromAmino(object: _178.MsgChannelOpenConfirmAmino): _178.MsgChannelOpenConfirm;
                    toAmino(message: _178.MsgChannelOpenConfirm): _178.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenConfirmAminoMsg): _178.MsgChannelOpenConfirm;
                    toAminoMsg(message: _178.MsgChannelOpenConfirm): _178.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenConfirmProtoMsg): _178.MsgChannelOpenConfirm;
                    toProto(message: _178.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenConfirm): _178.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _178.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_178.MsgChannelOpenConfirmResponse>): _178.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _178.MsgChannelOpenConfirmResponseAmino): _178.MsgChannelOpenConfirmResponse;
                    toAmino(_: _178.MsgChannelOpenConfirmResponse): _178.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _178.MsgChannelOpenConfirmResponseAminoMsg): _178.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _178.MsgChannelOpenConfirmResponse): _178.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelOpenConfirmResponseProtoMsg): _178.MsgChannelOpenConfirmResponse;
                    toProto(message: _178.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelOpenConfirmResponse): _178.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelCloseInit;
                    fromPartial(object: Partial<_178.MsgChannelCloseInit>): _178.MsgChannelCloseInit;
                    fromAmino(object: _178.MsgChannelCloseInitAmino): _178.MsgChannelCloseInit;
                    toAmino(message: _178.MsgChannelCloseInit): _178.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _178.MsgChannelCloseInitAminoMsg): _178.MsgChannelCloseInit;
                    toAminoMsg(message: _178.MsgChannelCloseInit): _178.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelCloseInitProtoMsg): _178.MsgChannelCloseInit;
                    toProto(message: _178.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelCloseInit): _178.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _178.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_178.MsgChannelCloseInitResponse>): _178.MsgChannelCloseInitResponse;
                    fromAmino(_: _178.MsgChannelCloseInitResponseAmino): _178.MsgChannelCloseInitResponse;
                    toAmino(_: _178.MsgChannelCloseInitResponse): _178.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _178.MsgChannelCloseInitResponseAminoMsg): _178.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _178.MsgChannelCloseInitResponse): _178.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelCloseInitResponseProtoMsg): _178.MsgChannelCloseInitResponse;
                    toProto(message: _178.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelCloseInitResponse): _178.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _178.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_178.MsgChannelCloseConfirm>): _178.MsgChannelCloseConfirm;
                    fromAmino(object: _178.MsgChannelCloseConfirmAmino): _178.MsgChannelCloseConfirm;
                    toAmino(message: _178.MsgChannelCloseConfirm): _178.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _178.MsgChannelCloseConfirmAminoMsg): _178.MsgChannelCloseConfirm;
                    toAminoMsg(message: _178.MsgChannelCloseConfirm): _178.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelCloseConfirmProtoMsg): _178.MsgChannelCloseConfirm;
                    toProto(message: _178.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelCloseConfirm): _178.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _178.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_178.MsgChannelCloseConfirmResponse>): _178.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _178.MsgChannelCloseConfirmResponseAmino): _178.MsgChannelCloseConfirmResponse;
                    toAmino(_: _178.MsgChannelCloseConfirmResponse): _178.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _178.MsgChannelCloseConfirmResponseAminoMsg): _178.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _178.MsgChannelCloseConfirmResponse): _178.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgChannelCloseConfirmResponseProtoMsg): _178.MsgChannelCloseConfirmResponse;
                    toProto(message: _178.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgChannelCloseConfirmResponse): _178.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _178.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgRecvPacket;
                    fromPartial(object: Partial<_178.MsgRecvPacket>): _178.MsgRecvPacket;
                    fromAmino(object: _178.MsgRecvPacketAmino): _178.MsgRecvPacket;
                    toAmino(message: _178.MsgRecvPacket): _178.MsgRecvPacketAmino;
                    fromAminoMsg(object: _178.MsgRecvPacketAminoMsg): _178.MsgRecvPacket;
                    toAminoMsg(message: _178.MsgRecvPacket): _178.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _178.MsgRecvPacketProtoMsg): _178.MsgRecvPacket;
                    toProto(message: _178.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _178.MsgRecvPacket): _178.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _178.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_178.MsgRecvPacketResponse>): _178.MsgRecvPacketResponse;
                    fromAmino(object: _178.MsgRecvPacketResponseAmino): _178.MsgRecvPacketResponse;
                    toAmino(message: _178.MsgRecvPacketResponse): _178.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _178.MsgRecvPacketResponseAminoMsg): _178.MsgRecvPacketResponse;
                    toAminoMsg(message: _178.MsgRecvPacketResponse): _178.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgRecvPacketResponseProtoMsg): _178.MsgRecvPacketResponse;
                    toProto(message: _178.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgRecvPacketResponse): _178.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _178.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgTimeout;
                    fromPartial(object: Partial<_178.MsgTimeout>): _178.MsgTimeout;
                    fromAmino(object: _178.MsgTimeoutAmino): _178.MsgTimeout;
                    toAmino(message: _178.MsgTimeout): _178.MsgTimeoutAmino;
                    fromAminoMsg(object: _178.MsgTimeoutAminoMsg): _178.MsgTimeout;
                    toAminoMsg(message: _178.MsgTimeout): _178.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _178.MsgTimeoutProtoMsg): _178.MsgTimeout;
                    toProto(message: _178.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _178.MsgTimeout): _178.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _178.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgTimeoutResponse;
                    fromPartial(object: Partial<_178.MsgTimeoutResponse>): _178.MsgTimeoutResponse;
                    fromAmino(object: _178.MsgTimeoutResponseAmino): _178.MsgTimeoutResponse;
                    toAmino(message: _178.MsgTimeoutResponse): _178.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _178.MsgTimeoutResponseAminoMsg): _178.MsgTimeoutResponse;
                    toAminoMsg(message: _178.MsgTimeoutResponse): _178.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgTimeoutResponseProtoMsg): _178.MsgTimeoutResponse;
                    toProto(message: _178.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgTimeoutResponse): _178.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _178.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_178.MsgTimeoutOnClose>): _178.MsgTimeoutOnClose;
                    fromAmino(object: _178.MsgTimeoutOnCloseAmino): _178.MsgTimeoutOnClose;
                    toAmino(message: _178.MsgTimeoutOnClose): _178.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _178.MsgTimeoutOnCloseAminoMsg): _178.MsgTimeoutOnClose;
                    toAminoMsg(message: _178.MsgTimeoutOnClose): _178.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _178.MsgTimeoutOnCloseProtoMsg): _178.MsgTimeoutOnClose;
                    toProto(message: _178.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _178.MsgTimeoutOnClose): _178.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _178.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_178.MsgTimeoutOnCloseResponse>): _178.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _178.MsgTimeoutOnCloseResponseAmino): _178.MsgTimeoutOnCloseResponse;
                    toAmino(message: _178.MsgTimeoutOnCloseResponse): _178.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _178.MsgTimeoutOnCloseResponseAminoMsg): _178.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _178.MsgTimeoutOnCloseResponse): _178.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgTimeoutOnCloseResponseProtoMsg): _178.MsgTimeoutOnCloseResponse;
                    toProto(message: _178.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgTimeoutOnCloseResponse): _178.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _178.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgAcknowledgement;
                    fromPartial(object: Partial<_178.MsgAcknowledgement>): _178.MsgAcknowledgement;
                    fromAmino(object: _178.MsgAcknowledgementAmino): _178.MsgAcknowledgement;
                    toAmino(message: _178.MsgAcknowledgement): _178.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _178.MsgAcknowledgementAminoMsg): _178.MsgAcknowledgement;
                    toAminoMsg(message: _178.MsgAcknowledgement): _178.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _178.MsgAcknowledgementProtoMsg): _178.MsgAcknowledgement;
                    toProto(message: _178.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _178.MsgAcknowledgement): _178.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _178.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_178.MsgAcknowledgementResponse>): _178.MsgAcknowledgementResponse;
                    fromAmino(object: _178.MsgAcknowledgementResponseAmino): _178.MsgAcknowledgementResponse;
                    toAmino(message: _178.MsgAcknowledgementResponse): _178.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _178.MsgAcknowledgementResponseAminoMsg): _178.MsgAcknowledgementResponse;
                    toAminoMsg(message: _178.MsgAcknowledgementResponse): _178.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgAcknowledgementResponseProtoMsg): _178.MsgAcknowledgementResponse;
                    toProto(message: _178.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgAcknowledgementResponse): _178.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelRequest;
                    fromPartial(object: Partial<_177.QueryChannelRequest>): _177.QueryChannelRequest;
                    fromAmino(object: _177.QueryChannelRequestAmino): _177.QueryChannelRequest;
                    toAmino(message: _177.QueryChannelRequest): _177.QueryChannelRequestAmino;
                    fromAminoMsg(object: _177.QueryChannelRequestAminoMsg): _177.QueryChannelRequest;
                    toAminoMsg(message: _177.QueryChannelRequest): _177.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelRequestProtoMsg): _177.QueryChannelRequest;
                    toProto(message: _177.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelRequest): _177.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelResponse;
                    fromPartial(object: Partial<_177.QueryChannelResponse>): _177.QueryChannelResponse;
                    fromAmino(object: _177.QueryChannelResponseAmino): _177.QueryChannelResponse;
                    toAmino(message: _177.QueryChannelResponse): _177.QueryChannelResponseAmino;
                    fromAminoMsg(object: _177.QueryChannelResponseAminoMsg): _177.QueryChannelResponse;
                    toAminoMsg(message: _177.QueryChannelResponse): _177.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelResponseProtoMsg): _177.QueryChannelResponse;
                    toProto(message: _177.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelResponse): _177.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelsRequest;
                    fromPartial(object: Partial<_177.QueryChannelsRequest>): _177.QueryChannelsRequest;
                    fromAmino(object: _177.QueryChannelsRequestAmino): _177.QueryChannelsRequest;
                    toAmino(message: _177.QueryChannelsRequest): _177.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _177.QueryChannelsRequestAminoMsg): _177.QueryChannelsRequest;
                    toAminoMsg(message: _177.QueryChannelsRequest): _177.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelsRequestProtoMsg): _177.QueryChannelsRequest;
                    toProto(message: _177.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelsRequest): _177.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelsResponse;
                    fromPartial(object: Partial<_177.QueryChannelsResponse>): _177.QueryChannelsResponse;
                    fromAmino(object: _177.QueryChannelsResponseAmino): _177.QueryChannelsResponse;
                    toAmino(message: _177.QueryChannelsResponse): _177.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _177.QueryChannelsResponseAminoMsg): _177.QueryChannelsResponse;
                    toAminoMsg(message: _177.QueryChannelsResponse): _177.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelsResponseProtoMsg): _177.QueryChannelsResponse;
                    toProto(message: _177.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelsResponse): _177.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_177.QueryConnectionChannelsRequest>): _177.QueryConnectionChannelsRequest;
                    fromAmino(object: _177.QueryConnectionChannelsRequestAmino): _177.QueryConnectionChannelsRequest;
                    toAmino(message: _177.QueryConnectionChannelsRequest): _177.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _177.QueryConnectionChannelsRequestAminoMsg): _177.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _177.QueryConnectionChannelsRequest): _177.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryConnectionChannelsRequestProtoMsg): _177.QueryConnectionChannelsRequest;
                    toProto(message: _177.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryConnectionChannelsRequest): _177.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_177.QueryConnectionChannelsResponse>): _177.QueryConnectionChannelsResponse;
                    fromAmino(object: _177.QueryConnectionChannelsResponseAmino): _177.QueryConnectionChannelsResponse;
                    toAmino(message: _177.QueryConnectionChannelsResponse): _177.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _177.QueryConnectionChannelsResponseAminoMsg): _177.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _177.QueryConnectionChannelsResponse): _177.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryConnectionChannelsResponseProtoMsg): _177.QueryConnectionChannelsResponse;
                    toProto(message: _177.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryConnectionChannelsResponse): _177.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_177.QueryChannelClientStateRequest>): _177.QueryChannelClientStateRequest;
                    fromAmino(object: _177.QueryChannelClientStateRequestAmino): _177.QueryChannelClientStateRequest;
                    toAmino(message: _177.QueryChannelClientStateRequest): _177.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _177.QueryChannelClientStateRequestAminoMsg): _177.QueryChannelClientStateRequest;
                    toAminoMsg(message: _177.QueryChannelClientStateRequest): _177.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelClientStateRequestProtoMsg): _177.QueryChannelClientStateRequest;
                    toProto(message: _177.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelClientStateRequest): _177.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_177.QueryChannelClientStateResponse>): _177.QueryChannelClientStateResponse;
                    fromAmino(object: _177.QueryChannelClientStateResponseAmino): _177.QueryChannelClientStateResponse;
                    toAmino(message: _177.QueryChannelClientStateResponse): _177.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _177.QueryChannelClientStateResponseAminoMsg): _177.QueryChannelClientStateResponse;
                    toAminoMsg(message: _177.QueryChannelClientStateResponse): _177.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelClientStateResponseProtoMsg): _177.QueryChannelClientStateResponse;
                    toProto(message: _177.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelClientStateResponse): _177.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_177.QueryChannelConsensusStateRequest>): _177.QueryChannelConsensusStateRequest;
                    fromAmino(object: _177.QueryChannelConsensusStateRequestAmino): _177.QueryChannelConsensusStateRequest;
                    toAmino(message: _177.QueryChannelConsensusStateRequest): _177.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _177.QueryChannelConsensusStateRequestAminoMsg): _177.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _177.QueryChannelConsensusStateRequest): _177.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelConsensusStateRequestProtoMsg): _177.QueryChannelConsensusStateRequest;
                    toProto(message: _177.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelConsensusStateRequest): _177.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_177.QueryChannelConsensusStateResponse>): _177.QueryChannelConsensusStateResponse;
                    fromAmino(object: _177.QueryChannelConsensusStateResponseAmino): _177.QueryChannelConsensusStateResponse;
                    toAmino(message: _177.QueryChannelConsensusStateResponse): _177.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _177.QueryChannelConsensusStateResponseAminoMsg): _177.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _177.QueryChannelConsensusStateResponse): _177.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryChannelConsensusStateResponseProtoMsg): _177.QueryChannelConsensusStateResponse;
                    toProto(message: _177.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryChannelConsensusStateResponse): _177.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_177.QueryPacketCommitmentRequest>): _177.QueryPacketCommitmentRequest;
                    fromAmino(object: _177.QueryPacketCommitmentRequestAmino): _177.QueryPacketCommitmentRequest;
                    toAmino(message: _177.QueryPacketCommitmentRequest): _177.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _177.QueryPacketCommitmentRequestAminoMsg): _177.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _177.QueryPacketCommitmentRequest): _177.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketCommitmentRequestProtoMsg): _177.QueryPacketCommitmentRequest;
                    toProto(message: _177.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketCommitmentRequest): _177.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_177.QueryPacketCommitmentResponse>): _177.QueryPacketCommitmentResponse;
                    fromAmino(object: _177.QueryPacketCommitmentResponseAmino): _177.QueryPacketCommitmentResponse;
                    toAmino(message: _177.QueryPacketCommitmentResponse): _177.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _177.QueryPacketCommitmentResponseAminoMsg): _177.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _177.QueryPacketCommitmentResponse): _177.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketCommitmentResponseProtoMsg): _177.QueryPacketCommitmentResponse;
                    toProto(message: _177.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketCommitmentResponse): _177.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_177.QueryPacketCommitmentsRequest>): _177.QueryPacketCommitmentsRequest;
                    fromAmino(object: _177.QueryPacketCommitmentsRequestAmino): _177.QueryPacketCommitmentsRequest;
                    toAmino(message: _177.QueryPacketCommitmentsRequest): _177.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _177.QueryPacketCommitmentsRequestAminoMsg): _177.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _177.QueryPacketCommitmentsRequest): _177.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketCommitmentsRequestProtoMsg): _177.QueryPacketCommitmentsRequest;
                    toProto(message: _177.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketCommitmentsRequest): _177.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_177.QueryPacketCommitmentsResponse>): _177.QueryPacketCommitmentsResponse;
                    fromAmino(object: _177.QueryPacketCommitmentsResponseAmino): _177.QueryPacketCommitmentsResponse;
                    toAmino(message: _177.QueryPacketCommitmentsResponse): _177.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _177.QueryPacketCommitmentsResponseAminoMsg): _177.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _177.QueryPacketCommitmentsResponse): _177.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketCommitmentsResponseProtoMsg): _177.QueryPacketCommitmentsResponse;
                    toProto(message: _177.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketCommitmentsResponse): _177.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_177.QueryPacketReceiptRequest>): _177.QueryPacketReceiptRequest;
                    fromAmino(object: _177.QueryPacketReceiptRequestAmino): _177.QueryPacketReceiptRequest;
                    toAmino(message: _177.QueryPacketReceiptRequest): _177.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _177.QueryPacketReceiptRequestAminoMsg): _177.QueryPacketReceiptRequest;
                    toAminoMsg(message: _177.QueryPacketReceiptRequest): _177.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketReceiptRequestProtoMsg): _177.QueryPacketReceiptRequest;
                    toProto(message: _177.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketReceiptRequest): _177.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_177.QueryPacketReceiptResponse>): _177.QueryPacketReceiptResponse;
                    fromAmino(object: _177.QueryPacketReceiptResponseAmino): _177.QueryPacketReceiptResponse;
                    toAmino(message: _177.QueryPacketReceiptResponse): _177.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _177.QueryPacketReceiptResponseAminoMsg): _177.QueryPacketReceiptResponse;
                    toAminoMsg(message: _177.QueryPacketReceiptResponse): _177.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketReceiptResponseProtoMsg): _177.QueryPacketReceiptResponse;
                    toProto(message: _177.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketReceiptResponse): _177.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_177.QueryPacketAcknowledgementRequest>): _177.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _177.QueryPacketAcknowledgementRequestAmino): _177.QueryPacketAcknowledgementRequest;
                    toAmino(message: _177.QueryPacketAcknowledgementRequest): _177.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _177.QueryPacketAcknowledgementRequestAminoMsg): _177.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _177.QueryPacketAcknowledgementRequest): _177.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketAcknowledgementRequestProtoMsg): _177.QueryPacketAcknowledgementRequest;
                    toProto(message: _177.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketAcknowledgementRequest): _177.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_177.QueryPacketAcknowledgementResponse>): _177.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _177.QueryPacketAcknowledgementResponseAmino): _177.QueryPacketAcknowledgementResponse;
                    toAmino(message: _177.QueryPacketAcknowledgementResponse): _177.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _177.QueryPacketAcknowledgementResponseAminoMsg): _177.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _177.QueryPacketAcknowledgementResponse): _177.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketAcknowledgementResponseProtoMsg): _177.QueryPacketAcknowledgementResponse;
                    toProto(message: _177.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketAcknowledgementResponse): _177.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_177.QueryPacketAcknowledgementsRequest>): _177.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _177.QueryPacketAcknowledgementsRequestAmino): _177.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _177.QueryPacketAcknowledgementsRequest): _177.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _177.QueryPacketAcknowledgementsRequestAminoMsg): _177.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _177.QueryPacketAcknowledgementsRequest): _177.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketAcknowledgementsRequestProtoMsg): _177.QueryPacketAcknowledgementsRequest;
                    toProto(message: _177.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketAcknowledgementsRequest): _177.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_177.QueryPacketAcknowledgementsResponse>): _177.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _177.QueryPacketAcknowledgementsResponseAmino): _177.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _177.QueryPacketAcknowledgementsResponse): _177.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _177.QueryPacketAcknowledgementsResponseAminoMsg): _177.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _177.QueryPacketAcknowledgementsResponse): _177.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryPacketAcknowledgementsResponseProtoMsg): _177.QueryPacketAcknowledgementsResponse;
                    toProto(message: _177.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryPacketAcknowledgementsResponse): _177.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_177.QueryUnreceivedPacketsRequest>): _177.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _177.QueryUnreceivedPacketsRequestAmino): _177.QueryUnreceivedPacketsRequest;
                    toAmino(message: _177.QueryUnreceivedPacketsRequest): _177.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _177.QueryUnreceivedPacketsRequestAminoMsg): _177.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _177.QueryUnreceivedPacketsRequest): _177.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryUnreceivedPacketsRequestProtoMsg): _177.QueryUnreceivedPacketsRequest;
                    toProto(message: _177.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryUnreceivedPacketsRequest): _177.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_177.QueryUnreceivedPacketsResponse>): _177.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _177.QueryUnreceivedPacketsResponseAmino): _177.QueryUnreceivedPacketsResponse;
                    toAmino(message: _177.QueryUnreceivedPacketsResponse): _177.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _177.QueryUnreceivedPacketsResponseAminoMsg): _177.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _177.QueryUnreceivedPacketsResponse): _177.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryUnreceivedPacketsResponseProtoMsg): _177.QueryUnreceivedPacketsResponse;
                    toProto(message: _177.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryUnreceivedPacketsResponse): _177.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_177.QueryUnreceivedAcksRequest>): _177.QueryUnreceivedAcksRequest;
                    fromAmino(object: _177.QueryUnreceivedAcksRequestAmino): _177.QueryUnreceivedAcksRequest;
                    toAmino(message: _177.QueryUnreceivedAcksRequest): _177.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _177.QueryUnreceivedAcksRequestAminoMsg): _177.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _177.QueryUnreceivedAcksRequest): _177.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryUnreceivedAcksRequestProtoMsg): _177.QueryUnreceivedAcksRequest;
                    toProto(message: _177.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryUnreceivedAcksRequest): _177.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_177.QueryUnreceivedAcksResponse>): _177.QueryUnreceivedAcksResponse;
                    fromAmino(object: _177.QueryUnreceivedAcksResponseAmino): _177.QueryUnreceivedAcksResponse;
                    toAmino(message: _177.QueryUnreceivedAcksResponse): _177.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _177.QueryUnreceivedAcksResponseAminoMsg): _177.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _177.QueryUnreceivedAcksResponse): _177.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryUnreceivedAcksResponseProtoMsg): _177.QueryUnreceivedAcksResponse;
                    toProto(message: _177.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryUnreceivedAcksResponse): _177.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_177.QueryNextSequenceReceiveRequest>): _177.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _177.QueryNextSequenceReceiveRequestAmino): _177.QueryNextSequenceReceiveRequest;
                    toAmino(message: _177.QueryNextSequenceReceiveRequest): _177.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _177.QueryNextSequenceReceiveRequestAminoMsg): _177.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _177.QueryNextSequenceReceiveRequest): _177.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryNextSequenceReceiveRequestProtoMsg): _177.QueryNextSequenceReceiveRequest;
                    toProto(message: _177.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryNextSequenceReceiveRequest): _177.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_177.QueryNextSequenceReceiveResponse>): _177.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _177.QueryNextSequenceReceiveResponseAmino): _177.QueryNextSequenceReceiveResponse;
                    toAmino(message: _177.QueryNextSequenceReceiveResponse): _177.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _177.QueryNextSequenceReceiveResponseAminoMsg): _177.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _177.QueryNextSequenceReceiveResponse): _177.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryNextSequenceReceiveResponseProtoMsg): _177.QueryNextSequenceReceiveResponse;
                    toProto(message: _177.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryNextSequenceReceiveResponse): _177.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _176.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.GenesisState;
                    fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
                    fromAmino(object: _176.GenesisStateAmino): _176.GenesisState;
                    toAmino(message: _176.GenesisState): _176.GenesisStateAmino;
                    fromAminoMsg(object: _176.GenesisStateAminoMsg): _176.GenesisState;
                    toAminoMsg(message: _176.GenesisState): _176.GenesisStateAminoMsg;
                    fromProtoMsg(message: _176.GenesisStateProtoMsg): _176.GenesisState;
                    toProto(message: _176.GenesisState): Uint8Array;
                    toProtoMsg(message: _176.GenesisState): _176.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _176.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.PacketSequence;
                    fromPartial(object: Partial<_176.PacketSequence>): _176.PacketSequence;
                    fromAmino(object: _176.PacketSequenceAmino): _176.PacketSequence;
                    toAmino(message: _176.PacketSequence): _176.PacketSequenceAmino;
                    fromAminoMsg(object: _176.PacketSequenceAminoMsg): _176.PacketSequence;
                    toAminoMsg(message: _176.PacketSequence): _176.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _176.PacketSequenceProtoMsg): _176.PacketSequence;
                    toProto(message: _176.PacketSequence): Uint8Array;
                    toProtoMsg(message: _176.PacketSequence): _176.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _175.State;
                stateToJSON(object: _175.State): string;
                orderFromJSON(object: any): _175.Order;
                orderToJSON(object: _175.Order): string;
                State: typeof _175.State;
                StateSDKType: typeof _175.State;
                StateAmino: typeof _175.State;
                Order: typeof _175.Order;
                OrderSDKType: typeof _175.Order;
                OrderAmino: typeof _175.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _175.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _175.Channel;
                    fromPartial(object: Partial<_175.Channel>): _175.Channel;
                    fromAmino(object: _175.ChannelAmino): _175.Channel;
                    toAmino(message: _175.Channel): _175.ChannelAmino;
                    fromAminoMsg(object: _175.ChannelAminoMsg): _175.Channel;
                    toAminoMsg(message: _175.Channel): _175.ChannelAminoMsg;
                    fromProtoMsg(message: _175.ChannelProtoMsg): _175.Channel;
                    toProto(message: _175.Channel): Uint8Array;
                    toProtoMsg(message: _175.Channel): _175.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _175.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _175.IdentifiedChannel;
                    fromPartial(object: Partial<_175.IdentifiedChannel>): _175.IdentifiedChannel;
                    fromAmino(object: _175.IdentifiedChannelAmino): _175.IdentifiedChannel;
                    toAmino(message: _175.IdentifiedChannel): _175.IdentifiedChannelAmino;
                    fromAminoMsg(object: _175.IdentifiedChannelAminoMsg): _175.IdentifiedChannel;
                    toAminoMsg(message: _175.IdentifiedChannel): _175.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _175.IdentifiedChannelProtoMsg): _175.IdentifiedChannel;
                    toProto(message: _175.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _175.IdentifiedChannel): _175.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _175.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _175.Counterparty;
                    fromPartial(object: Partial<_175.Counterparty>): _175.Counterparty;
                    fromAmino(object: _175.CounterpartyAmino): _175.Counterparty;
                    toAmino(message: _175.Counterparty): _175.CounterpartyAmino;
                    fromAminoMsg(object: _175.CounterpartyAminoMsg): _175.Counterparty;
                    toAminoMsg(message: _175.Counterparty): _175.CounterpartyAminoMsg;
                    fromProtoMsg(message: _175.CounterpartyProtoMsg): _175.Counterparty;
                    toProto(message: _175.Counterparty): Uint8Array;
                    toProtoMsg(message: _175.Counterparty): _175.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _175.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _175.Packet;
                    fromPartial(object: Partial<_175.Packet>): _175.Packet;
                    fromAmino(object: _175.PacketAmino): _175.Packet;
                    toAmino(message: _175.Packet): _175.PacketAmino;
                    fromAminoMsg(object: _175.PacketAminoMsg): _175.Packet;
                    toAminoMsg(message: _175.Packet): _175.PacketAminoMsg;
                    fromProtoMsg(message: _175.PacketProtoMsg): _175.Packet;
                    toProto(message: _175.Packet): Uint8Array;
                    toProtoMsg(message: _175.Packet): _175.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _175.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _175.PacketState;
                    fromPartial(object: Partial<_175.PacketState>): _175.PacketState;
                    fromAmino(object: _175.PacketStateAmino): _175.PacketState;
                    toAmino(message: _175.PacketState): _175.PacketStateAmino;
                    fromAminoMsg(object: _175.PacketStateAminoMsg): _175.PacketState;
                    toAminoMsg(message: _175.PacketState): _175.PacketStateAminoMsg;
                    fromProtoMsg(message: _175.PacketStateProtoMsg): _175.PacketState;
                    toProto(message: _175.PacketState): Uint8Array;
                    toProtoMsg(message: _175.PacketState): _175.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _175.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _175.Acknowledgement;
                    fromPartial(object: Partial<_175.Acknowledgement>): _175.Acknowledgement;
                    fromAmino(object: _175.AcknowledgementAmino): _175.Acknowledgement;
                    toAmino(message: _175.Acknowledgement): _175.AcknowledgementAmino;
                    fromAminoMsg(object: _175.AcknowledgementAminoMsg): _175.Acknowledgement;
                    toAminoMsg(message: _175.Acknowledgement): _175.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _175.AcknowledgementProtoMsg): _175.Acknowledgement;
                    toProto(message: _175.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _175.Acknowledgement): _175.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _330.MsgClientImpl;
                QueryClientImpl: typeof _326.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _181.QueryClientStateRequest): Promise<_181.QueryClientStateResponse>;
                    clientStates(request?: _181.QueryClientStatesRequest): Promise<_181.QueryClientStatesResponse>;
                    consensusState(request: _181.QueryConsensusStateRequest): Promise<_181.QueryConsensusStateResponse>;
                    consensusStates(request: _181.QueryConsensusStatesRequest): Promise<_181.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _181.QueryConsensusStateHeightsRequest): Promise<_181.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _181.QueryClientStatusRequest): Promise<_181.QueryClientStatusResponse>;
                    clientParams(request?: _181.QueryClientParamsRequest): Promise<_181.QueryClientParamsResponse>;
                    upgradedClientState(request?: _181.QueryUpgradedClientStateRequest): Promise<_181.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _181.QueryUpgradedConsensusStateRequest): Promise<_181.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _320.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _182.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _182.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _182.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _182.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _182.MsgCreateClient): {
                            typeUrl: string;
                            value: _182.MsgCreateClient;
                        };
                        updateClient(value: _182.MsgUpdateClient): {
                            typeUrl: string;
                            value: _182.MsgUpdateClient;
                        };
                        upgradeClient(value: _182.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _182.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _182.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _182.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _182.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _182.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _182.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _182.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _182.MsgCreateClient): {
                            typeUrl: string;
                            value: _182.MsgCreateClient;
                        };
                        updateClient(value: _182.MsgUpdateClient): {
                            typeUrl: string;
                            value: _182.MsgUpdateClient;
                        };
                        upgradeClient(value: _182.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _182.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _182.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _182.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _182.MsgCreateClient) => _182.MsgCreateClientAmino;
                        fromAmino: (object: _182.MsgCreateClientAmino) => _182.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _182.MsgUpdateClient) => _182.MsgUpdateClientAmino;
                        fromAmino: (object: _182.MsgUpdateClientAmino) => _182.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _182.MsgUpgradeClient) => _182.MsgUpgradeClientAmino;
                        fromAmino: (object: _182.MsgUpgradeClientAmino) => _182.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _182.MsgSubmitMisbehaviour) => _182.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _182.MsgSubmitMisbehaviourAmino) => _182.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _182.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.MsgCreateClient;
                    fromPartial(object: Partial<_182.MsgCreateClient>): _182.MsgCreateClient;
                    fromAmino(object: _182.MsgCreateClientAmino): _182.MsgCreateClient;
                    toAmino(message: _182.MsgCreateClient): _182.MsgCreateClientAmino;
                    fromAminoMsg(object: _182.MsgCreateClientAminoMsg): _182.MsgCreateClient;
                    toAminoMsg(message: _182.MsgCreateClient): _182.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _182.MsgCreateClientProtoMsg): _182.MsgCreateClient;
                    toProto(message: _182.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _182.MsgCreateClient): _182.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _182.MsgCreateClientResponse;
                    fromPartial(_: Partial<_182.MsgCreateClientResponse>): _182.MsgCreateClientResponse;
                    fromAmino(_: _182.MsgCreateClientResponseAmino): _182.MsgCreateClientResponse;
                    toAmino(_: _182.MsgCreateClientResponse): _182.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _182.MsgCreateClientResponseAminoMsg): _182.MsgCreateClientResponse;
                    toAminoMsg(message: _182.MsgCreateClientResponse): _182.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgCreateClientResponseProtoMsg): _182.MsgCreateClientResponse;
                    toProto(message: _182.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgCreateClientResponse): _182.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _182.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.MsgUpdateClient;
                    fromPartial(object: Partial<_182.MsgUpdateClient>): _182.MsgUpdateClient;
                    fromAmino(object: _182.MsgUpdateClientAmino): _182.MsgUpdateClient;
                    toAmino(message: _182.MsgUpdateClient): _182.MsgUpdateClientAmino;
                    fromAminoMsg(object: _182.MsgUpdateClientAminoMsg): _182.MsgUpdateClient;
                    toAminoMsg(message: _182.MsgUpdateClient): _182.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _182.MsgUpdateClientProtoMsg): _182.MsgUpdateClient;
                    toProto(message: _182.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _182.MsgUpdateClient): _182.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _182.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_182.MsgUpdateClientResponse>): _182.MsgUpdateClientResponse;
                    fromAmino(_: _182.MsgUpdateClientResponseAmino): _182.MsgUpdateClientResponse;
                    toAmino(_: _182.MsgUpdateClientResponse): _182.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _182.MsgUpdateClientResponseAminoMsg): _182.MsgUpdateClientResponse;
                    toAminoMsg(message: _182.MsgUpdateClientResponse): _182.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgUpdateClientResponseProtoMsg): _182.MsgUpdateClientResponse;
                    toProto(message: _182.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgUpdateClientResponse): _182.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _182.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.MsgUpgradeClient;
                    fromPartial(object: Partial<_182.MsgUpgradeClient>): _182.MsgUpgradeClient;
                    fromAmino(object: _182.MsgUpgradeClientAmino): _182.MsgUpgradeClient;
                    toAmino(message: _182.MsgUpgradeClient): _182.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _182.MsgUpgradeClientAminoMsg): _182.MsgUpgradeClient;
                    toAminoMsg(message: _182.MsgUpgradeClient): _182.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _182.MsgUpgradeClientProtoMsg): _182.MsgUpgradeClient;
                    toProto(message: _182.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _182.MsgUpgradeClient): _182.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _182.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_182.MsgUpgradeClientResponse>): _182.MsgUpgradeClientResponse;
                    fromAmino(_: _182.MsgUpgradeClientResponseAmino): _182.MsgUpgradeClientResponse;
                    toAmino(_: _182.MsgUpgradeClientResponse): _182.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _182.MsgUpgradeClientResponseAminoMsg): _182.MsgUpgradeClientResponse;
                    toAminoMsg(message: _182.MsgUpgradeClientResponse): _182.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgUpgradeClientResponseProtoMsg): _182.MsgUpgradeClientResponse;
                    toProto(message: _182.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgUpgradeClientResponse): _182.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _182.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_182.MsgSubmitMisbehaviour>): _182.MsgSubmitMisbehaviour;
                    fromAmino(object: _182.MsgSubmitMisbehaviourAmino): _182.MsgSubmitMisbehaviour;
                    toAmino(message: _182.MsgSubmitMisbehaviour): _182.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _182.MsgSubmitMisbehaviourAminoMsg): _182.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _182.MsgSubmitMisbehaviour): _182.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _182.MsgSubmitMisbehaviourProtoMsg): _182.MsgSubmitMisbehaviour;
                    toProto(message: _182.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _182.MsgSubmitMisbehaviour): _182.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _182.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_182.MsgSubmitMisbehaviourResponse>): _182.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _182.MsgSubmitMisbehaviourResponseAmino): _182.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _182.MsgSubmitMisbehaviourResponse): _182.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _182.MsgSubmitMisbehaviourResponseAminoMsg): _182.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _182.MsgSubmitMisbehaviourResponse): _182.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgSubmitMisbehaviourResponseProtoMsg): _182.MsgSubmitMisbehaviourResponse;
                    toProto(message: _182.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgSubmitMisbehaviourResponse): _182.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryClientStateRequest;
                    fromPartial(object: Partial<_181.QueryClientStateRequest>): _181.QueryClientStateRequest;
                    fromAmino(object: _181.QueryClientStateRequestAmino): _181.QueryClientStateRequest;
                    toAmino(message: _181.QueryClientStateRequest): _181.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _181.QueryClientStateRequestAminoMsg): _181.QueryClientStateRequest;
                    toAminoMsg(message: _181.QueryClientStateRequest): _181.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryClientStateRequestProtoMsg): _181.QueryClientStateRequest;
                    toProto(message: _181.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryClientStateRequest): _181.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryClientStateResponse;
                    fromPartial(object: Partial<_181.QueryClientStateResponse>): _181.QueryClientStateResponse;
                    fromAmino(object: _181.QueryClientStateResponseAmino): _181.QueryClientStateResponse;
                    toAmino(message: _181.QueryClientStateResponse): _181.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _181.QueryClientStateResponseAminoMsg): _181.QueryClientStateResponse;
                    toAminoMsg(message: _181.QueryClientStateResponse): _181.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryClientStateResponseProtoMsg): _181.QueryClientStateResponse;
                    toProto(message: _181.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryClientStateResponse): _181.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryClientStatesRequest;
                    fromPartial(object: Partial<_181.QueryClientStatesRequest>): _181.QueryClientStatesRequest;
                    fromAmino(object: _181.QueryClientStatesRequestAmino): _181.QueryClientStatesRequest;
                    toAmino(message: _181.QueryClientStatesRequest): _181.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _181.QueryClientStatesRequestAminoMsg): _181.QueryClientStatesRequest;
                    toAminoMsg(message: _181.QueryClientStatesRequest): _181.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryClientStatesRequestProtoMsg): _181.QueryClientStatesRequest;
                    toProto(message: _181.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryClientStatesRequest): _181.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryClientStatesResponse;
                    fromPartial(object: Partial<_181.QueryClientStatesResponse>): _181.QueryClientStatesResponse;
                    fromAmino(object: _181.QueryClientStatesResponseAmino): _181.QueryClientStatesResponse;
                    toAmino(message: _181.QueryClientStatesResponse): _181.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _181.QueryClientStatesResponseAminoMsg): _181.QueryClientStatesResponse;
                    toAminoMsg(message: _181.QueryClientStatesResponse): _181.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryClientStatesResponseProtoMsg): _181.QueryClientStatesResponse;
                    toProto(message: _181.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryClientStatesResponse): _181.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_181.QueryConsensusStateRequest>): _181.QueryConsensusStateRequest;
                    fromAmino(object: _181.QueryConsensusStateRequestAmino): _181.QueryConsensusStateRequest;
                    toAmino(message: _181.QueryConsensusStateRequest): _181.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _181.QueryConsensusStateRequestAminoMsg): _181.QueryConsensusStateRequest;
                    toAminoMsg(message: _181.QueryConsensusStateRequest): _181.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConsensusStateRequestProtoMsg): _181.QueryConsensusStateRequest;
                    toProto(message: _181.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConsensusStateRequest): _181.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_181.QueryConsensusStateResponse>): _181.QueryConsensusStateResponse;
                    fromAmino(object: _181.QueryConsensusStateResponseAmino): _181.QueryConsensusStateResponse;
                    toAmino(message: _181.QueryConsensusStateResponse): _181.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _181.QueryConsensusStateResponseAminoMsg): _181.QueryConsensusStateResponse;
                    toAminoMsg(message: _181.QueryConsensusStateResponse): _181.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConsensusStateResponseProtoMsg): _181.QueryConsensusStateResponse;
                    toProto(message: _181.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConsensusStateResponse): _181.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_181.QueryConsensusStatesRequest>): _181.QueryConsensusStatesRequest;
                    fromAmino(object: _181.QueryConsensusStatesRequestAmino): _181.QueryConsensusStatesRequest;
                    toAmino(message: _181.QueryConsensusStatesRequest): _181.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _181.QueryConsensusStatesRequestAminoMsg): _181.QueryConsensusStatesRequest;
                    toAminoMsg(message: _181.QueryConsensusStatesRequest): _181.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConsensusStatesRequestProtoMsg): _181.QueryConsensusStatesRequest;
                    toProto(message: _181.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConsensusStatesRequest): _181.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_181.QueryConsensusStatesResponse>): _181.QueryConsensusStatesResponse;
                    fromAmino(object: _181.QueryConsensusStatesResponseAmino): _181.QueryConsensusStatesResponse;
                    toAmino(message: _181.QueryConsensusStatesResponse): _181.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _181.QueryConsensusStatesResponseAminoMsg): _181.QueryConsensusStatesResponse;
                    toAminoMsg(message: _181.QueryConsensusStatesResponse): _181.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConsensusStatesResponseProtoMsg): _181.QueryConsensusStatesResponse;
                    toProto(message: _181.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConsensusStatesResponse): _181.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_181.QueryConsensusStateHeightsRequest>): _181.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _181.QueryConsensusStateHeightsRequestAmino): _181.QueryConsensusStateHeightsRequest;
                    toAmino(message: _181.QueryConsensusStateHeightsRequest): _181.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _181.QueryConsensusStateHeightsRequestAminoMsg): _181.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _181.QueryConsensusStateHeightsRequest): _181.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConsensusStateHeightsRequestProtoMsg): _181.QueryConsensusStateHeightsRequest;
                    toProto(message: _181.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConsensusStateHeightsRequest): _181.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_181.QueryConsensusStateHeightsResponse>): _181.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _181.QueryConsensusStateHeightsResponseAmino): _181.QueryConsensusStateHeightsResponse;
                    toAmino(message: _181.QueryConsensusStateHeightsResponse): _181.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _181.QueryConsensusStateHeightsResponseAminoMsg): _181.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _181.QueryConsensusStateHeightsResponse): _181.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConsensusStateHeightsResponseProtoMsg): _181.QueryConsensusStateHeightsResponse;
                    toProto(message: _181.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConsensusStateHeightsResponse): _181.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryClientStatusRequest;
                    fromPartial(object: Partial<_181.QueryClientStatusRequest>): _181.QueryClientStatusRequest;
                    fromAmino(object: _181.QueryClientStatusRequestAmino): _181.QueryClientStatusRequest;
                    toAmino(message: _181.QueryClientStatusRequest): _181.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _181.QueryClientStatusRequestAminoMsg): _181.QueryClientStatusRequest;
                    toAminoMsg(message: _181.QueryClientStatusRequest): _181.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryClientStatusRequestProtoMsg): _181.QueryClientStatusRequest;
                    toProto(message: _181.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryClientStatusRequest): _181.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryClientStatusResponse;
                    fromPartial(object: Partial<_181.QueryClientStatusResponse>): _181.QueryClientStatusResponse;
                    fromAmino(object: _181.QueryClientStatusResponseAmino): _181.QueryClientStatusResponse;
                    toAmino(message: _181.QueryClientStatusResponse): _181.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _181.QueryClientStatusResponseAminoMsg): _181.QueryClientStatusResponse;
                    toAminoMsg(message: _181.QueryClientStatusResponse): _181.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryClientStatusResponseProtoMsg): _181.QueryClientStatusResponse;
                    toProto(message: _181.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryClientStatusResponse): _181.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _181.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _181.QueryClientParamsRequest;
                    fromPartial(_: Partial<_181.QueryClientParamsRequest>): _181.QueryClientParamsRequest;
                    fromAmino(_: _181.QueryClientParamsRequestAmino): _181.QueryClientParamsRequest;
                    toAmino(_: _181.QueryClientParamsRequest): _181.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _181.QueryClientParamsRequestAminoMsg): _181.QueryClientParamsRequest;
                    toAminoMsg(message: _181.QueryClientParamsRequest): _181.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryClientParamsRequestProtoMsg): _181.QueryClientParamsRequest;
                    toProto(message: _181.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryClientParamsRequest): _181.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryClientParamsResponse;
                    fromPartial(object: Partial<_181.QueryClientParamsResponse>): _181.QueryClientParamsResponse;
                    fromAmino(object: _181.QueryClientParamsResponseAmino): _181.QueryClientParamsResponse;
                    toAmino(message: _181.QueryClientParamsResponse): _181.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _181.QueryClientParamsResponseAminoMsg): _181.QueryClientParamsResponse;
                    toAminoMsg(message: _181.QueryClientParamsResponse): _181.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryClientParamsResponseProtoMsg): _181.QueryClientParamsResponse;
                    toProto(message: _181.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryClientParamsResponse): _181.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _181.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _181.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_181.QueryUpgradedClientStateRequest>): _181.QueryUpgradedClientStateRequest;
                    fromAmino(_: _181.QueryUpgradedClientStateRequestAmino): _181.QueryUpgradedClientStateRequest;
                    toAmino(_: _181.QueryUpgradedClientStateRequest): _181.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _181.QueryUpgradedClientStateRequestAminoMsg): _181.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _181.QueryUpgradedClientStateRequest): _181.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryUpgradedClientStateRequestProtoMsg): _181.QueryUpgradedClientStateRequest;
                    toProto(message: _181.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryUpgradedClientStateRequest): _181.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_181.QueryUpgradedClientStateResponse>): _181.QueryUpgradedClientStateResponse;
                    fromAmino(object: _181.QueryUpgradedClientStateResponseAmino): _181.QueryUpgradedClientStateResponse;
                    toAmino(message: _181.QueryUpgradedClientStateResponse): _181.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _181.QueryUpgradedClientStateResponseAminoMsg): _181.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _181.QueryUpgradedClientStateResponse): _181.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryUpgradedClientStateResponseProtoMsg): _181.QueryUpgradedClientStateResponse;
                    toProto(message: _181.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryUpgradedClientStateResponse): _181.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _181.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _181.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_181.QueryUpgradedConsensusStateRequest>): _181.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _181.QueryUpgradedConsensusStateRequestAmino): _181.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _181.QueryUpgradedConsensusStateRequest): _181.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _181.QueryUpgradedConsensusStateRequestAminoMsg): _181.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _181.QueryUpgradedConsensusStateRequest): _181.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryUpgradedConsensusStateRequestProtoMsg): _181.QueryUpgradedConsensusStateRequest;
                    toProto(message: _181.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryUpgradedConsensusStateRequest): _181.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_181.QueryUpgradedConsensusStateResponse>): _181.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _181.QueryUpgradedConsensusStateResponseAmino): _181.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _181.QueryUpgradedConsensusStateResponse): _181.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _181.QueryUpgradedConsensusStateResponseAminoMsg): _181.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _181.QueryUpgradedConsensusStateResponse): _181.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryUpgradedConsensusStateResponseProtoMsg): _181.QueryUpgradedConsensusStateResponse;
                    toProto(message: _181.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryUpgradedConsensusStateResponse): _181.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _180.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.GenesisState;
                    fromPartial(object: Partial<_180.GenesisState>): _180.GenesisState;
                    fromAmino(object: _180.GenesisStateAmino): _180.GenesisState;
                    toAmino(message: _180.GenesisState): _180.GenesisStateAmino;
                    fromAminoMsg(object: _180.GenesisStateAminoMsg): _180.GenesisState;
                    toAminoMsg(message: _180.GenesisState): _180.GenesisStateAminoMsg;
                    fromProtoMsg(message: _180.GenesisStateProtoMsg): _180.GenesisState;
                    toProto(message: _180.GenesisState): Uint8Array;
                    toProtoMsg(message: _180.GenesisState): _180.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _180.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.GenesisMetadata;
                    fromPartial(object: Partial<_180.GenesisMetadata>): _180.GenesisMetadata;
                    fromAmino(object: _180.GenesisMetadataAmino): _180.GenesisMetadata;
                    toAmino(message: _180.GenesisMetadata): _180.GenesisMetadataAmino;
                    fromAminoMsg(object: _180.GenesisMetadataAminoMsg): _180.GenesisMetadata;
                    toAminoMsg(message: _180.GenesisMetadata): _180.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _180.GenesisMetadataProtoMsg): _180.GenesisMetadata;
                    toProto(message: _180.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _180.GenesisMetadata): _180.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _180.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_180.IdentifiedGenesisMetadata>): _180.IdentifiedGenesisMetadata;
                    fromAmino(object: _180.IdentifiedGenesisMetadataAmino): _180.IdentifiedGenesisMetadata;
                    toAmino(message: _180.IdentifiedGenesisMetadata): _180.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _180.IdentifiedGenesisMetadataAminoMsg): _180.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _180.IdentifiedGenesisMetadata): _180.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _180.IdentifiedGenesisMetadataProtoMsg): _180.IdentifiedGenesisMetadata;
                    toProto(message: _180.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _180.IdentifiedGenesisMetadata): _180.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _179.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.IdentifiedClientState;
                    fromPartial(object: Partial<_179.IdentifiedClientState>): _179.IdentifiedClientState;
                    fromAmino(object: _179.IdentifiedClientStateAmino): _179.IdentifiedClientState;
                    toAmino(message: _179.IdentifiedClientState): _179.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _179.IdentifiedClientStateAminoMsg): _179.IdentifiedClientState;
                    toAminoMsg(message: _179.IdentifiedClientState): _179.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _179.IdentifiedClientStateProtoMsg): _179.IdentifiedClientState;
                    toProto(message: _179.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _179.IdentifiedClientState): _179.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _179.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_179.ConsensusStateWithHeight>): _179.ConsensusStateWithHeight;
                    fromAmino(object: _179.ConsensusStateWithHeightAmino): _179.ConsensusStateWithHeight;
                    toAmino(message: _179.ConsensusStateWithHeight): _179.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _179.ConsensusStateWithHeightAminoMsg): _179.ConsensusStateWithHeight;
                    toAminoMsg(message: _179.ConsensusStateWithHeight): _179.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _179.ConsensusStateWithHeightProtoMsg): _179.ConsensusStateWithHeight;
                    toProto(message: _179.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _179.ConsensusStateWithHeight): _179.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _179.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.ClientConsensusStates;
                    fromPartial(object: Partial<_179.ClientConsensusStates>): _179.ClientConsensusStates;
                    fromAmino(object: _179.ClientConsensusStatesAmino): _179.ClientConsensusStates;
                    toAmino(message: _179.ClientConsensusStates): _179.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _179.ClientConsensusStatesAminoMsg): _179.ClientConsensusStates;
                    toAminoMsg(message: _179.ClientConsensusStates): _179.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _179.ClientConsensusStatesProtoMsg): _179.ClientConsensusStates;
                    toProto(message: _179.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _179.ClientConsensusStates): _179.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _179.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.ClientUpdateProposal;
                    fromPartial(object: Partial<_179.ClientUpdateProposal>): _179.ClientUpdateProposal;
                    fromAmino(object: _179.ClientUpdateProposalAmino): _179.ClientUpdateProposal;
                    toAmino(message: _179.ClientUpdateProposal): _179.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _179.ClientUpdateProposalAminoMsg): _179.ClientUpdateProposal;
                    toAminoMsg(message: _179.ClientUpdateProposal): _179.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _179.ClientUpdateProposalProtoMsg): _179.ClientUpdateProposal;
                    toProto(message: _179.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _179.ClientUpdateProposal): _179.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _179.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.UpgradeProposal;
                    fromPartial(object: Partial<_179.UpgradeProposal>): _179.UpgradeProposal;
                    fromAmino(object: _179.UpgradeProposalAmino): _179.UpgradeProposal;
                    toAmino(message: _179.UpgradeProposal): _179.UpgradeProposalAmino;
                    fromAminoMsg(object: _179.UpgradeProposalAminoMsg): _179.UpgradeProposal;
                    toAminoMsg(message: _179.UpgradeProposal): _179.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _179.UpgradeProposalProtoMsg): _179.UpgradeProposal;
                    toProto(message: _179.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _179.UpgradeProposal): _179.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _179.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.Height;
                    fromPartial(object: Partial<_179.Height>): _179.Height;
                    fromAmino(object: _179.HeightAmino): _179.Height;
                    toAmino(message: _179.Height): _179.HeightAmino;
                    fromAminoMsg(object: _179.HeightAminoMsg): _179.Height;
                    toAminoMsg(message: _179.Height): _179.HeightAminoMsg;
                    fromProtoMsg(message: _179.HeightProtoMsg): _179.Height;
                    toProto(message: _179.Height): Uint8Array;
                    toProtoMsg(message: _179.Height): _179.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _179.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.Params;
                    fromPartial(object: Partial<_179.Params>): _179.Params;
                    fromAmino(object: _179.ParamsAmino): _179.Params;
                    toAmino(message: _179.Params): _179.ParamsAmino;
                    fromAminoMsg(object: _179.ParamsAminoMsg): _179.Params;
                    toAminoMsg(message: _179.Params): _179.ParamsAminoMsg;
                    fromProtoMsg(message: _179.ParamsProtoMsg): _179.Params;
                    toProto(message: _179.Params): Uint8Array;
                    toProtoMsg(message: _179.Params): _179.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _183.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MerkleRoot;
                    fromPartial(object: Partial<_183.MerkleRoot>): _183.MerkleRoot;
                    fromAmino(object: _183.MerkleRootAmino): _183.MerkleRoot;
                    toAmino(message: _183.MerkleRoot): _183.MerkleRootAmino;
                    fromAminoMsg(object: _183.MerkleRootAminoMsg): _183.MerkleRoot;
                    toAminoMsg(message: _183.MerkleRoot): _183.MerkleRootAminoMsg;
                    fromProtoMsg(message: _183.MerkleRootProtoMsg): _183.MerkleRoot;
                    toProto(message: _183.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _183.MerkleRoot): _183.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _183.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MerklePrefix;
                    fromPartial(object: Partial<_183.MerklePrefix>): _183.MerklePrefix;
                    fromAmino(object: _183.MerklePrefixAmino): _183.MerklePrefix;
                    toAmino(message: _183.MerklePrefix): _183.MerklePrefixAmino;
                    fromAminoMsg(object: _183.MerklePrefixAminoMsg): _183.MerklePrefix;
                    toAminoMsg(message: _183.MerklePrefix): _183.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _183.MerklePrefixProtoMsg): _183.MerklePrefix;
                    toProto(message: _183.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _183.MerklePrefix): _183.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _183.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MerklePath;
                    fromPartial(object: Partial<_183.MerklePath>): _183.MerklePath;
                    fromAmino(object: _183.MerklePathAmino): _183.MerklePath;
                    toAmino(message: _183.MerklePath): _183.MerklePathAmino;
                    fromAminoMsg(object: _183.MerklePathAminoMsg): _183.MerklePath;
                    toAminoMsg(message: _183.MerklePath): _183.MerklePathAminoMsg;
                    fromProtoMsg(message: _183.MerklePathProtoMsg): _183.MerklePath;
                    toProto(message: _183.MerklePath): Uint8Array;
                    toProtoMsg(message: _183.MerklePath): _183.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _183.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MerkleProof;
                    fromPartial(object: Partial<_183.MerkleProof>): _183.MerkleProof;
                    fromAmino(object: _183.MerkleProofAmino): _183.MerkleProof;
                    toAmino(message: _183.MerkleProof): _183.MerkleProofAmino;
                    fromAminoMsg(object: _183.MerkleProofAminoMsg): _183.MerkleProof;
                    toAminoMsg(message: _183.MerkleProof): _183.MerkleProofAminoMsg;
                    fromProtoMsg(message: _183.MerkleProofProtoMsg): _183.MerkleProof;
                    toProto(message: _183.MerkleProof): Uint8Array;
                    toProtoMsg(message: _183.MerkleProof): _183.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _331.MsgClientImpl;
                QueryClientImpl: typeof _327.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _186.QueryConnectionRequest): Promise<_186.QueryConnectionResponse>;
                    connections(request?: _186.QueryConnectionsRequest): Promise<_186.QueryConnectionsResponse>;
                    clientConnections(request: _186.QueryClientConnectionsRequest): Promise<_186.QueryClientConnectionsResponse>;
                    connectionClientState(request: _186.QueryConnectionClientStateRequest): Promise<_186.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _186.QueryConnectionConsensusStateRequest): Promise<_186.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _321.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _187.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _187.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _187.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _187.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _187.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _187.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _187.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _187.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _187.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _187.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _187.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _187.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _187.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _187.MsgConnectionOpenInit) => _187.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _187.MsgConnectionOpenInitAmino) => _187.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _187.MsgConnectionOpenTry) => _187.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _187.MsgConnectionOpenTryAmino) => _187.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _187.MsgConnectionOpenAck) => _187.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _187.MsgConnectionOpenAckAmino) => _187.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _187.MsgConnectionOpenConfirm) => _187.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _187.MsgConnectionOpenConfirmAmino) => _187.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _187.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_187.MsgConnectionOpenInit>): _187.MsgConnectionOpenInit;
                    fromAmino(object: _187.MsgConnectionOpenInitAmino): _187.MsgConnectionOpenInit;
                    toAmino(message: _187.MsgConnectionOpenInit): _187.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenInitAminoMsg): _187.MsgConnectionOpenInit;
                    toAminoMsg(message: _187.MsgConnectionOpenInit): _187.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenInitProtoMsg): _187.MsgConnectionOpenInit;
                    toProto(message: _187.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenInit): _187.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_187.MsgConnectionOpenInitResponse>): _187.MsgConnectionOpenInitResponse;
                    fromAmino(_: _187.MsgConnectionOpenInitResponseAmino): _187.MsgConnectionOpenInitResponse;
                    toAmino(_: _187.MsgConnectionOpenInitResponse): _187.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenInitResponseAminoMsg): _187.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _187.MsgConnectionOpenInitResponse): _187.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenInitResponseProtoMsg): _187.MsgConnectionOpenInitResponse;
                    toProto(message: _187.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenInitResponse): _187.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _187.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_187.MsgConnectionOpenTry>): _187.MsgConnectionOpenTry;
                    fromAmino(object: _187.MsgConnectionOpenTryAmino): _187.MsgConnectionOpenTry;
                    toAmino(message: _187.MsgConnectionOpenTry): _187.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenTryAminoMsg): _187.MsgConnectionOpenTry;
                    toAminoMsg(message: _187.MsgConnectionOpenTry): _187.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenTryProtoMsg): _187.MsgConnectionOpenTry;
                    toProto(message: _187.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenTry): _187.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_187.MsgConnectionOpenTryResponse>): _187.MsgConnectionOpenTryResponse;
                    fromAmino(_: _187.MsgConnectionOpenTryResponseAmino): _187.MsgConnectionOpenTryResponse;
                    toAmino(_: _187.MsgConnectionOpenTryResponse): _187.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenTryResponseAminoMsg): _187.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _187.MsgConnectionOpenTryResponse): _187.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenTryResponseProtoMsg): _187.MsgConnectionOpenTryResponse;
                    toProto(message: _187.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenTryResponse): _187.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _187.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_187.MsgConnectionOpenAck>): _187.MsgConnectionOpenAck;
                    fromAmino(object: _187.MsgConnectionOpenAckAmino): _187.MsgConnectionOpenAck;
                    toAmino(message: _187.MsgConnectionOpenAck): _187.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenAckAminoMsg): _187.MsgConnectionOpenAck;
                    toAminoMsg(message: _187.MsgConnectionOpenAck): _187.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenAckProtoMsg): _187.MsgConnectionOpenAck;
                    toProto(message: _187.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenAck): _187.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_187.MsgConnectionOpenAckResponse>): _187.MsgConnectionOpenAckResponse;
                    fromAmino(_: _187.MsgConnectionOpenAckResponseAmino): _187.MsgConnectionOpenAckResponse;
                    toAmino(_: _187.MsgConnectionOpenAckResponse): _187.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenAckResponseAminoMsg): _187.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _187.MsgConnectionOpenAckResponse): _187.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenAckResponseProtoMsg): _187.MsgConnectionOpenAckResponse;
                    toProto(message: _187.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenAckResponse): _187.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _187.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_187.MsgConnectionOpenConfirm>): _187.MsgConnectionOpenConfirm;
                    fromAmino(object: _187.MsgConnectionOpenConfirmAmino): _187.MsgConnectionOpenConfirm;
                    toAmino(message: _187.MsgConnectionOpenConfirm): _187.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenConfirmAminoMsg): _187.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _187.MsgConnectionOpenConfirm): _187.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenConfirmProtoMsg): _187.MsgConnectionOpenConfirm;
                    toProto(message: _187.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenConfirm): _187.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_187.MsgConnectionOpenConfirmResponse>): _187.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _187.MsgConnectionOpenConfirmResponseAmino): _187.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _187.MsgConnectionOpenConfirmResponse): _187.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _187.MsgConnectionOpenConfirmResponseAminoMsg): _187.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _187.MsgConnectionOpenConfirmResponse): _187.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgConnectionOpenConfirmResponseProtoMsg): _187.MsgConnectionOpenConfirmResponse;
                    toProto(message: _187.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgConnectionOpenConfirmResponse): _187.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionRequest;
                    fromPartial(object: Partial<_186.QueryConnectionRequest>): _186.QueryConnectionRequest;
                    fromAmino(object: _186.QueryConnectionRequestAmino): _186.QueryConnectionRequest;
                    toAmino(message: _186.QueryConnectionRequest): _186.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _186.QueryConnectionRequestAminoMsg): _186.QueryConnectionRequest;
                    toAminoMsg(message: _186.QueryConnectionRequest): _186.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionRequestProtoMsg): _186.QueryConnectionRequest;
                    toProto(message: _186.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionRequest): _186.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionResponse;
                    fromPartial(object: Partial<_186.QueryConnectionResponse>): _186.QueryConnectionResponse;
                    fromAmino(object: _186.QueryConnectionResponseAmino): _186.QueryConnectionResponse;
                    toAmino(message: _186.QueryConnectionResponse): _186.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _186.QueryConnectionResponseAminoMsg): _186.QueryConnectionResponse;
                    toAminoMsg(message: _186.QueryConnectionResponse): _186.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionResponseProtoMsg): _186.QueryConnectionResponse;
                    toProto(message: _186.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionResponse): _186.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionsRequest;
                    fromPartial(object: Partial<_186.QueryConnectionsRequest>): _186.QueryConnectionsRequest;
                    fromAmino(object: _186.QueryConnectionsRequestAmino): _186.QueryConnectionsRequest;
                    toAmino(message: _186.QueryConnectionsRequest): _186.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _186.QueryConnectionsRequestAminoMsg): _186.QueryConnectionsRequest;
                    toAminoMsg(message: _186.QueryConnectionsRequest): _186.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionsRequestProtoMsg): _186.QueryConnectionsRequest;
                    toProto(message: _186.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionsRequest): _186.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionsResponse;
                    fromPartial(object: Partial<_186.QueryConnectionsResponse>): _186.QueryConnectionsResponse;
                    fromAmino(object: _186.QueryConnectionsResponseAmino): _186.QueryConnectionsResponse;
                    toAmino(message: _186.QueryConnectionsResponse): _186.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _186.QueryConnectionsResponseAminoMsg): _186.QueryConnectionsResponse;
                    toAminoMsg(message: _186.QueryConnectionsResponse): _186.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionsResponseProtoMsg): _186.QueryConnectionsResponse;
                    toProto(message: _186.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionsResponse): _186.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_186.QueryClientConnectionsRequest>): _186.QueryClientConnectionsRequest;
                    fromAmino(object: _186.QueryClientConnectionsRequestAmino): _186.QueryClientConnectionsRequest;
                    toAmino(message: _186.QueryClientConnectionsRequest): _186.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _186.QueryClientConnectionsRequestAminoMsg): _186.QueryClientConnectionsRequest;
                    toAminoMsg(message: _186.QueryClientConnectionsRequest): _186.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryClientConnectionsRequestProtoMsg): _186.QueryClientConnectionsRequest;
                    toProto(message: _186.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryClientConnectionsRequest): _186.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_186.QueryClientConnectionsResponse>): _186.QueryClientConnectionsResponse;
                    fromAmino(object: _186.QueryClientConnectionsResponseAmino): _186.QueryClientConnectionsResponse;
                    toAmino(message: _186.QueryClientConnectionsResponse): _186.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _186.QueryClientConnectionsResponseAminoMsg): _186.QueryClientConnectionsResponse;
                    toAminoMsg(message: _186.QueryClientConnectionsResponse): _186.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryClientConnectionsResponseProtoMsg): _186.QueryClientConnectionsResponse;
                    toProto(message: _186.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryClientConnectionsResponse): _186.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_186.QueryConnectionClientStateRequest>): _186.QueryConnectionClientStateRequest;
                    fromAmino(object: _186.QueryConnectionClientStateRequestAmino): _186.QueryConnectionClientStateRequest;
                    toAmino(message: _186.QueryConnectionClientStateRequest): _186.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _186.QueryConnectionClientStateRequestAminoMsg): _186.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _186.QueryConnectionClientStateRequest): _186.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionClientStateRequestProtoMsg): _186.QueryConnectionClientStateRequest;
                    toProto(message: _186.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionClientStateRequest): _186.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_186.QueryConnectionClientStateResponse>): _186.QueryConnectionClientStateResponse;
                    fromAmino(object: _186.QueryConnectionClientStateResponseAmino): _186.QueryConnectionClientStateResponse;
                    toAmino(message: _186.QueryConnectionClientStateResponse): _186.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _186.QueryConnectionClientStateResponseAminoMsg): _186.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _186.QueryConnectionClientStateResponse): _186.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionClientStateResponseProtoMsg): _186.QueryConnectionClientStateResponse;
                    toProto(message: _186.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionClientStateResponse): _186.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_186.QueryConnectionConsensusStateRequest>): _186.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _186.QueryConnectionConsensusStateRequestAmino): _186.QueryConnectionConsensusStateRequest;
                    toAmino(message: _186.QueryConnectionConsensusStateRequest): _186.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _186.QueryConnectionConsensusStateRequestAminoMsg): _186.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _186.QueryConnectionConsensusStateRequest): _186.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionConsensusStateRequestProtoMsg): _186.QueryConnectionConsensusStateRequest;
                    toProto(message: _186.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionConsensusStateRequest): _186.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_186.QueryConnectionConsensusStateResponse>): _186.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _186.QueryConnectionConsensusStateResponseAmino): _186.QueryConnectionConsensusStateResponse;
                    toAmino(message: _186.QueryConnectionConsensusStateResponse): _186.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _186.QueryConnectionConsensusStateResponseAminoMsg): _186.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _186.QueryConnectionConsensusStateResponse): _186.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryConnectionConsensusStateResponseProtoMsg): _186.QueryConnectionConsensusStateResponse;
                    toProto(message: _186.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryConnectionConsensusStateResponse): _186.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _185.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _185.GenesisState;
                    fromPartial(object: Partial<_185.GenesisState>): _185.GenesisState;
                    fromAmino(object: _185.GenesisStateAmino): _185.GenesisState;
                    toAmino(message: _185.GenesisState): _185.GenesisStateAmino;
                    fromAminoMsg(object: _185.GenesisStateAminoMsg): _185.GenesisState;
                    toAminoMsg(message: _185.GenesisState): _185.GenesisStateAminoMsg;
                    fromProtoMsg(message: _185.GenesisStateProtoMsg): _185.GenesisState;
                    toProto(message: _185.GenesisState): Uint8Array;
                    toProtoMsg(message: _185.GenesisState): _185.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _184.State;
                stateToJSON(object: _184.State): string;
                State: typeof _184.State;
                StateSDKType: typeof _184.State;
                StateAmino: typeof _184.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _184.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.ConnectionEnd;
                    fromPartial(object: Partial<_184.ConnectionEnd>): _184.ConnectionEnd;
                    fromAmino(object: _184.ConnectionEndAmino): _184.ConnectionEnd;
                    toAmino(message: _184.ConnectionEnd): _184.ConnectionEndAmino;
                    fromAminoMsg(object: _184.ConnectionEndAminoMsg): _184.ConnectionEnd;
                    toAminoMsg(message: _184.ConnectionEnd): _184.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _184.ConnectionEndProtoMsg): _184.ConnectionEnd;
                    toProto(message: _184.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _184.ConnectionEnd): _184.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _184.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.IdentifiedConnection;
                    fromPartial(object: Partial<_184.IdentifiedConnection>): _184.IdentifiedConnection;
                    fromAmino(object: _184.IdentifiedConnectionAmino): _184.IdentifiedConnection;
                    toAmino(message: _184.IdentifiedConnection): _184.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _184.IdentifiedConnectionAminoMsg): _184.IdentifiedConnection;
                    toAminoMsg(message: _184.IdentifiedConnection): _184.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _184.IdentifiedConnectionProtoMsg): _184.IdentifiedConnection;
                    toProto(message: _184.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _184.IdentifiedConnection): _184.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _184.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.Counterparty;
                    fromPartial(object: Partial<_184.Counterparty>): _184.Counterparty;
                    fromAmino(object: _184.CounterpartyAmino): _184.Counterparty;
                    toAmino(message: _184.Counterparty): _184.CounterpartyAmino;
                    fromAminoMsg(object: _184.CounterpartyAminoMsg): _184.Counterparty;
                    toAminoMsg(message: _184.Counterparty): _184.CounterpartyAminoMsg;
                    fromProtoMsg(message: _184.CounterpartyProtoMsg): _184.Counterparty;
                    toProto(message: _184.Counterparty): Uint8Array;
                    toProtoMsg(message: _184.Counterparty): _184.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _184.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.ClientPaths;
                    fromPartial(object: Partial<_184.ClientPaths>): _184.ClientPaths;
                    fromAmino(object: _184.ClientPathsAmino): _184.ClientPaths;
                    toAmino(message: _184.ClientPaths): _184.ClientPathsAmino;
                    fromAminoMsg(object: _184.ClientPathsAminoMsg): _184.ClientPaths;
                    toAminoMsg(message: _184.ClientPaths): _184.ClientPathsAminoMsg;
                    fromProtoMsg(message: _184.ClientPathsProtoMsg): _184.ClientPaths;
                    toProto(message: _184.ClientPaths): Uint8Array;
                    toProtoMsg(message: _184.ClientPaths): _184.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _184.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.ConnectionPaths;
                    fromPartial(object: Partial<_184.ConnectionPaths>): _184.ConnectionPaths;
                    fromAmino(object: _184.ConnectionPathsAmino): _184.ConnectionPaths;
                    toAmino(message: _184.ConnectionPaths): _184.ConnectionPathsAmino;
                    fromAminoMsg(object: _184.ConnectionPathsAminoMsg): _184.ConnectionPaths;
                    toAminoMsg(message: _184.ConnectionPaths): _184.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _184.ConnectionPathsProtoMsg): _184.ConnectionPaths;
                    toProto(message: _184.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _184.ConnectionPaths): _184.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _184.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.Version;
                    fromPartial(object: Partial<_184.Version>): _184.Version;
                    fromAmino(object: _184.VersionAmino): _184.Version;
                    toAmino(message: _184.Version): _184.VersionAmino;
                    fromAminoMsg(object: _184.VersionAminoMsg): _184.Version;
                    toAminoMsg(message: _184.Version): _184.VersionAminoMsg;
                    fromProtoMsg(message: _184.VersionProtoMsg): _184.Version;
                    toProto(message: _184.Version): Uint8Array;
                    toProtoMsg(message: _184.Version): _184.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _184.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.Params;
                    fromPartial(object: Partial<_184.Params>): _184.Params;
                    fromAmino(object: _184.ParamsAmino): _184.Params;
                    toAmino(message: _184.Params): _184.ParamsAmino;
                    fromAminoMsg(object: _184.ParamsAminoMsg): _184.Params;
                    toAminoMsg(message: _184.Params): _184.ParamsAminoMsg;
                    fromProtoMsg(message: _184.ParamsProtoMsg): _184.Params;
                    toProto(message: _184.Params): Uint8Array;
                    toProtoMsg(message: _184.Params): _184.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _188.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.GenesisState;
                    fromPartial(object: Partial<_188.GenesisState>): _188.GenesisState;
                    fromAmino(object: _188.GenesisStateAmino): _188.GenesisState;
                    toAmino(message: _188.GenesisState): _188.GenesisStateAmino;
                    fromAminoMsg(object: _188.GenesisStateAminoMsg): _188.GenesisState;
                    toAminoMsg(message: _188.GenesisState): _188.GenesisStateAminoMsg;
                    fromProtoMsg(message: _188.GenesisStateProtoMsg): _188.GenesisState;
                    toProto(message: _188.GenesisState): Uint8Array;
                    toProtoMsg(message: _188.GenesisState): _188.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _189.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.ClientState;
                    fromPartial(object: Partial<_189.ClientState>): _189.ClientState;
                    fromAmino(object: _189.ClientStateAmino): _189.ClientState;
                    toAmino(message: _189.ClientState): _189.ClientStateAmino;
                    fromAminoMsg(object: _189.ClientStateAminoMsg): _189.ClientState;
                    toAminoMsg(message: _189.ClientState): _189.ClientStateAminoMsg;
                    fromProtoMsg(message: _189.ClientStateProtoMsg): _189.ClientState;
                    toProto(message: _189.ClientState): Uint8Array;
                    toProtoMsg(message: _189.ClientState): _189.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _190.DataType;
                dataTypeToJSON(object: _190.DataType): string;
                DataType: typeof _190.DataType;
                DataTypeSDKType: typeof _190.DataType;
                DataTypeAmino: typeof _190.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _190.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.ClientState;
                    fromPartial(object: Partial<_190.ClientState>): _190.ClientState;
                    fromAmino(object: _190.ClientStateAmino): _190.ClientState;
                    toAmino(message: _190.ClientState): _190.ClientStateAmino;
                    fromAminoMsg(object: _190.ClientStateAminoMsg): _190.ClientState;
                    toAminoMsg(message: _190.ClientState): _190.ClientStateAminoMsg;
                    fromProtoMsg(message: _190.ClientStateProtoMsg): _190.ClientState;
                    toProto(message: _190.ClientState): Uint8Array;
                    toProtoMsg(message: _190.ClientState): _190.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _190.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.ConsensusState;
                    fromPartial(object: Partial<_190.ConsensusState>): _190.ConsensusState;
                    fromAmino(object: _190.ConsensusStateAmino): _190.ConsensusState;
                    toAmino(message: _190.ConsensusState): _190.ConsensusStateAmino;
                    fromAminoMsg(object: _190.ConsensusStateAminoMsg): _190.ConsensusState;
                    toAminoMsg(message: _190.ConsensusState): _190.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _190.ConsensusStateProtoMsg): _190.ConsensusState;
                    toProto(message: _190.ConsensusState): Uint8Array;
                    toProtoMsg(message: _190.ConsensusState): _190.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _190.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.Header;
                    fromPartial(object: Partial<_190.Header>): _190.Header;
                    fromAmino(object: _190.HeaderAmino): _190.Header;
                    toAmino(message: _190.Header): _190.HeaderAmino;
                    fromAminoMsg(object: _190.HeaderAminoMsg): _190.Header;
                    toAminoMsg(message: _190.Header): _190.HeaderAminoMsg;
                    fromProtoMsg(message: _190.HeaderProtoMsg): _190.Header;
                    toProto(message: _190.Header): Uint8Array;
                    toProtoMsg(message: _190.Header): _190.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _190.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.Misbehaviour;
                    fromPartial(object: Partial<_190.Misbehaviour>): _190.Misbehaviour;
                    fromAmino(object: _190.MisbehaviourAmino): _190.Misbehaviour;
                    toAmino(message: _190.Misbehaviour): _190.MisbehaviourAmino;
                    fromAminoMsg(object: _190.MisbehaviourAminoMsg): _190.Misbehaviour;
                    toAminoMsg(message: _190.Misbehaviour): _190.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _190.MisbehaviourProtoMsg): _190.Misbehaviour;
                    toProto(message: _190.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _190.Misbehaviour): _190.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _190.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.SignatureAndData;
                    fromPartial(object: Partial<_190.SignatureAndData>): _190.SignatureAndData;
                    fromAmino(object: _190.SignatureAndDataAmino): _190.SignatureAndData;
                    toAmino(message: _190.SignatureAndData): _190.SignatureAndDataAmino;
                    fromAminoMsg(object: _190.SignatureAndDataAminoMsg): _190.SignatureAndData;
                    toAminoMsg(message: _190.SignatureAndData): _190.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _190.SignatureAndDataProtoMsg): _190.SignatureAndData;
                    toProto(message: _190.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _190.SignatureAndData): _190.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _190.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.TimestampedSignatureData;
                    fromPartial(object: Partial<_190.TimestampedSignatureData>): _190.TimestampedSignatureData;
                    fromAmino(object: _190.TimestampedSignatureDataAmino): _190.TimestampedSignatureData;
                    toAmino(message: _190.TimestampedSignatureData): _190.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _190.TimestampedSignatureDataAminoMsg): _190.TimestampedSignatureData;
                    toAminoMsg(message: _190.TimestampedSignatureData): _190.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _190.TimestampedSignatureDataProtoMsg): _190.TimestampedSignatureData;
                    toProto(message: _190.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _190.TimestampedSignatureData): _190.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _190.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.SignBytes;
                    fromPartial(object: Partial<_190.SignBytes>): _190.SignBytes;
                    fromAmino(object: _190.SignBytesAmino): _190.SignBytes;
                    toAmino(message: _190.SignBytes): _190.SignBytesAmino;
                    fromAminoMsg(object: _190.SignBytesAminoMsg): _190.SignBytes;
                    toAminoMsg(message: _190.SignBytes): _190.SignBytesAminoMsg;
                    fromProtoMsg(message: _190.SignBytesProtoMsg): _190.SignBytes;
                    toProto(message: _190.SignBytes): Uint8Array;
                    toProtoMsg(message: _190.SignBytes): _190.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _190.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.HeaderData;
                    fromPartial(object: Partial<_190.HeaderData>): _190.HeaderData;
                    fromAmino(object: _190.HeaderDataAmino): _190.HeaderData;
                    toAmino(message: _190.HeaderData): _190.HeaderDataAmino;
                    fromAminoMsg(object: _190.HeaderDataAminoMsg): _190.HeaderData;
                    toAminoMsg(message: _190.HeaderData): _190.HeaderDataAminoMsg;
                    fromProtoMsg(message: _190.HeaderDataProtoMsg): _190.HeaderData;
                    toProto(message: _190.HeaderData): Uint8Array;
                    toProtoMsg(message: _190.HeaderData): _190.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _190.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.ClientStateData;
                    fromPartial(object: Partial<_190.ClientStateData>): _190.ClientStateData;
                    fromAmino(object: _190.ClientStateDataAmino): _190.ClientStateData;
                    toAmino(message: _190.ClientStateData): _190.ClientStateDataAmino;
                    fromAminoMsg(object: _190.ClientStateDataAminoMsg): _190.ClientStateData;
                    toAminoMsg(message: _190.ClientStateData): _190.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _190.ClientStateDataProtoMsg): _190.ClientStateData;
                    toProto(message: _190.ClientStateData): Uint8Array;
                    toProtoMsg(message: _190.ClientStateData): _190.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _190.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.ConsensusStateData;
                    fromPartial(object: Partial<_190.ConsensusStateData>): _190.ConsensusStateData;
                    fromAmino(object: _190.ConsensusStateDataAmino): _190.ConsensusStateData;
                    toAmino(message: _190.ConsensusStateData): _190.ConsensusStateDataAmino;
                    fromAminoMsg(object: _190.ConsensusStateDataAminoMsg): _190.ConsensusStateData;
                    toAminoMsg(message: _190.ConsensusStateData): _190.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _190.ConsensusStateDataProtoMsg): _190.ConsensusStateData;
                    toProto(message: _190.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _190.ConsensusStateData): _190.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _190.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.ConnectionStateData;
                    fromPartial(object: Partial<_190.ConnectionStateData>): _190.ConnectionStateData;
                    fromAmino(object: _190.ConnectionStateDataAmino): _190.ConnectionStateData;
                    toAmino(message: _190.ConnectionStateData): _190.ConnectionStateDataAmino;
                    fromAminoMsg(object: _190.ConnectionStateDataAminoMsg): _190.ConnectionStateData;
                    toAminoMsg(message: _190.ConnectionStateData): _190.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _190.ConnectionStateDataProtoMsg): _190.ConnectionStateData;
                    toProto(message: _190.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _190.ConnectionStateData): _190.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _190.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.ChannelStateData;
                    fromPartial(object: Partial<_190.ChannelStateData>): _190.ChannelStateData;
                    fromAmino(object: _190.ChannelStateDataAmino): _190.ChannelStateData;
                    toAmino(message: _190.ChannelStateData): _190.ChannelStateDataAmino;
                    fromAminoMsg(object: _190.ChannelStateDataAminoMsg): _190.ChannelStateData;
                    toAminoMsg(message: _190.ChannelStateData): _190.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _190.ChannelStateDataProtoMsg): _190.ChannelStateData;
                    toProto(message: _190.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _190.ChannelStateData): _190.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _190.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.PacketCommitmentData;
                    fromPartial(object: Partial<_190.PacketCommitmentData>): _190.PacketCommitmentData;
                    fromAmino(object: _190.PacketCommitmentDataAmino): _190.PacketCommitmentData;
                    toAmino(message: _190.PacketCommitmentData): _190.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _190.PacketCommitmentDataAminoMsg): _190.PacketCommitmentData;
                    toAminoMsg(message: _190.PacketCommitmentData): _190.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _190.PacketCommitmentDataProtoMsg): _190.PacketCommitmentData;
                    toProto(message: _190.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _190.PacketCommitmentData): _190.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _190.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.PacketAcknowledgementData;
                    fromPartial(object: Partial<_190.PacketAcknowledgementData>): _190.PacketAcknowledgementData;
                    fromAmino(object: _190.PacketAcknowledgementDataAmino): _190.PacketAcknowledgementData;
                    toAmino(message: _190.PacketAcknowledgementData): _190.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _190.PacketAcknowledgementDataAminoMsg): _190.PacketAcknowledgementData;
                    toAminoMsg(message: _190.PacketAcknowledgementData): _190.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _190.PacketAcknowledgementDataProtoMsg): _190.PacketAcknowledgementData;
                    toProto(message: _190.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _190.PacketAcknowledgementData): _190.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _190.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_190.PacketReceiptAbsenceData>): _190.PacketReceiptAbsenceData;
                    fromAmino(object: _190.PacketReceiptAbsenceDataAmino): _190.PacketReceiptAbsenceData;
                    toAmino(message: _190.PacketReceiptAbsenceData): _190.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _190.PacketReceiptAbsenceDataAminoMsg): _190.PacketReceiptAbsenceData;
                    toAminoMsg(message: _190.PacketReceiptAbsenceData): _190.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _190.PacketReceiptAbsenceDataProtoMsg): _190.PacketReceiptAbsenceData;
                    toProto(message: _190.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _190.PacketReceiptAbsenceData): _190.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _190.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.NextSequenceRecvData;
                    fromPartial(object: Partial<_190.NextSequenceRecvData>): _190.NextSequenceRecvData;
                    fromAmino(object: _190.NextSequenceRecvDataAmino): _190.NextSequenceRecvData;
                    toAmino(message: _190.NextSequenceRecvData): _190.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _190.NextSequenceRecvDataAminoMsg): _190.NextSequenceRecvData;
                    toAminoMsg(message: _190.NextSequenceRecvData): _190.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _190.NextSequenceRecvDataProtoMsg): _190.NextSequenceRecvData;
                    toProto(message: _190.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _190.NextSequenceRecvData): _190.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _191.DataType;
                dataTypeToJSON(object: _191.DataType): string;
                DataType: typeof _191.DataType;
                DataTypeSDKType: typeof _191.DataType;
                DataTypeAmino: typeof _191.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _191.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.ClientState;
                    fromPartial(object: Partial<_191.ClientState>): _191.ClientState;
                    fromAmino(object: _191.ClientStateAmino): _191.ClientState;
                    toAmino(message: _191.ClientState): _191.ClientStateAmino;
                    fromAminoMsg(object: _191.ClientStateAminoMsg): _191.ClientState;
                    toAminoMsg(message: _191.ClientState): _191.ClientStateAminoMsg;
                    fromProtoMsg(message: _191.ClientStateProtoMsg): _191.ClientState;
                    toProto(message: _191.ClientState): Uint8Array;
                    toProtoMsg(message: _191.ClientState): _191.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _191.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.ConsensusState;
                    fromPartial(object: Partial<_191.ConsensusState>): _191.ConsensusState;
                    fromAmino(object: _191.ConsensusStateAmino): _191.ConsensusState;
                    toAmino(message: _191.ConsensusState): _191.ConsensusStateAmino;
                    fromAminoMsg(object: _191.ConsensusStateAminoMsg): _191.ConsensusState;
                    toAminoMsg(message: _191.ConsensusState): _191.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _191.ConsensusStateProtoMsg): _191.ConsensusState;
                    toProto(message: _191.ConsensusState): Uint8Array;
                    toProtoMsg(message: _191.ConsensusState): _191.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _191.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.Header;
                    fromPartial(object: Partial<_191.Header>): _191.Header;
                    fromAmino(object: _191.HeaderAmino): _191.Header;
                    toAmino(message: _191.Header): _191.HeaderAmino;
                    fromAminoMsg(object: _191.HeaderAminoMsg): _191.Header;
                    toAminoMsg(message: _191.Header): _191.HeaderAminoMsg;
                    fromProtoMsg(message: _191.HeaderProtoMsg): _191.Header;
                    toProto(message: _191.Header): Uint8Array;
                    toProtoMsg(message: _191.Header): _191.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _191.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.Misbehaviour;
                    fromPartial(object: Partial<_191.Misbehaviour>): _191.Misbehaviour;
                    fromAmino(object: _191.MisbehaviourAmino): _191.Misbehaviour;
                    toAmino(message: _191.Misbehaviour): _191.MisbehaviourAmino;
                    fromAminoMsg(object: _191.MisbehaviourAminoMsg): _191.Misbehaviour;
                    toAminoMsg(message: _191.Misbehaviour): _191.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _191.MisbehaviourProtoMsg): _191.Misbehaviour;
                    toProto(message: _191.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _191.Misbehaviour): _191.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _191.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.SignatureAndData;
                    fromPartial(object: Partial<_191.SignatureAndData>): _191.SignatureAndData;
                    fromAmino(object: _191.SignatureAndDataAmino): _191.SignatureAndData;
                    toAmino(message: _191.SignatureAndData): _191.SignatureAndDataAmino;
                    fromAminoMsg(object: _191.SignatureAndDataAminoMsg): _191.SignatureAndData;
                    toAminoMsg(message: _191.SignatureAndData): _191.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _191.SignatureAndDataProtoMsg): _191.SignatureAndData;
                    toProto(message: _191.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _191.SignatureAndData): _191.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _191.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.TimestampedSignatureData;
                    fromPartial(object: Partial<_191.TimestampedSignatureData>): _191.TimestampedSignatureData;
                    fromAmino(object: _191.TimestampedSignatureDataAmino): _191.TimestampedSignatureData;
                    toAmino(message: _191.TimestampedSignatureData): _191.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _191.TimestampedSignatureDataAminoMsg): _191.TimestampedSignatureData;
                    toAminoMsg(message: _191.TimestampedSignatureData): _191.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _191.TimestampedSignatureDataProtoMsg): _191.TimestampedSignatureData;
                    toProto(message: _191.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _191.TimestampedSignatureData): _191.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _191.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.SignBytes;
                    fromPartial(object: Partial<_191.SignBytes>): _191.SignBytes;
                    fromAmino(object: _191.SignBytesAmino): _191.SignBytes;
                    toAmino(message: _191.SignBytes): _191.SignBytesAmino;
                    fromAminoMsg(object: _191.SignBytesAminoMsg): _191.SignBytes;
                    toAminoMsg(message: _191.SignBytes): _191.SignBytesAminoMsg;
                    fromProtoMsg(message: _191.SignBytesProtoMsg): _191.SignBytes;
                    toProto(message: _191.SignBytes): Uint8Array;
                    toProtoMsg(message: _191.SignBytes): _191.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _191.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.HeaderData;
                    fromPartial(object: Partial<_191.HeaderData>): _191.HeaderData;
                    fromAmino(object: _191.HeaderDataAmino): _191.HeaderData;
                    toAmino(message: _191.HeaderData): _191.HeaderDataAmino;
                    fromAminoMsg(object: _191.HeaderDataAminoMsg): _191.HeaderData;
                    toAminoMsg(message: _191.HeaderData): _191.HeaderDataAminoMsg;
                    fromProtoMsg(message: _191.HeaderDataProtoMsg): _191.HeaderData;
                    toProto(message: _191.HeaderData): Uint8Array;
                    toProtoMsg(message: _191.HeaderData): _191.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _191.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.ClientStateData;
                    fromPartial(object: Partial<_191.ClientStateData>): _191.ClientStateData;
                    fromAmino(object: _191.ClientStateDataAmino): _191.ClientStateData;
                    toAmino(message: _191.ClientStateData): _191.ClientStateDataAmino;
                    fromAminoMsg(object: _191.ClientStateDataAminoMsg): _191.ClientStateData;
                    toAminoMsg(message: _191.ClientStateData): _191.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _191.ClientStateDataProtoMsg): _191.ClientStateData;
                    toProto(message: _191.ClientStateData): Uint8Array;
                    toProtoMsg(message: _191.ClientStateData): _191.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _191.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.ConsensusStateData;
                    fromPartial(object: Partial<_191.ConsensusStateData>): _191.ConsensusStateData;
                    fromAmino(object: _191.ConsensusStateDataAmino): _191.ConsensusStateData;
                    toAmino(message: _191.ConsensusStateData): _191.ConsensusStateDataAmino;
                    fromAminoMsg(object: _191.ConsensusStateDataAminoMsg): _191.ConsensusStateData;
                    toAminoMsg(message: _191.ConsensusStateData): _191.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _191.ConsensusStateDataProtoMsg): _191.ConsensusStateData;
                    toProto(message: _191.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _191.ConsensusStateData): _191.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _191.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.ConnectionStateData;
                    fromPartial(object: Partial<_191.ConnectionStateData>): _191.ConnectionStateData;
                    fromAmino(object: _191.ConnectionStateDataAmino): _191.ConnectionStateData;
                    toAmino(message: _191.ConnectionStateData): _191.ConnectionStateDataAmino;
                    fromAminoMsg(object: _191.ConnectionStateDataAminoMsg): _191.ConnectionStateData;
                    toAminoMsg(message: _191.ConnectionStateData): _191.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _191.ConnectionStateDataProtoMsg): _191.ConnectionStateData;
                    toProto(message: _191.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _191.ConnectionStateData): _191.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _191.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.ChannelStateData;
                    fromPartial(object: Partial<_191.ChannelStateData>): _191.ChannelStateData;
                    fromAmino(object: _191.ChannelStateDataAmino): _191.ChannelStateData;
                    toAmino(message: _191.ChannelStateData): _191.ChannelStateDataAmino;
                    fromAminoMsg(object: _191.ChannelStateDataAminoMsg): _191.ChannelStateData;
                    toAminoMsg(message: _191.ChannelStateData): _191.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _191.ChannelStateDataProtoMsg): _191.ChannelStateData;
                    toProto(message: _191.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _191.ChannelStateData): _191.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _191.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.PacketCommitmentData;
                    fromPartial(object: Partial<_191.PacketCommitmentData>): _191.PacketCommitmentData;
                    fromAmino(object: _191.PacketCommitmentDataAmino): _191.PacketCommitmentData;
                    toAmino(message: _191.PacketCommitmentData): _191.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _191.PacketCommitmentDataAminoMsg): _191.PacketCommitmentData;
                    toAminoMsg(message: _191.PacketCommitmentData): _191.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _191.PacketCommitmentDataProtoMsg): _191.PacketCommitmentData;
                    toProto(message: _191.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _191.PacketCommitmentData): _191.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _191.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.PacketAcknowledgementData;
                    fromPartial(object: Partial<_191.PacketAcknowledgementData>): _191.PacketAcknowledgementData;
                    fromAmino(object: _191.PacketAcknowledgementDataAmino): _191.PacketAcknowledgementData;
                    toAmino(message: _191.PacketAcknowledgementData): _191.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _191.PacketAcknowledgementDataAminoMsg): _191.PacketAcknowledgementData;
                    toAminoMsg(message: _191.PacketAcknowledgementData): _191.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _191.PacketAcknowledgementDataProtoMsg): _191.PacketAcknowledgementData;
                    toProto(message: _191.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _191.PacketAcknowledgementData): _191.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _191.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_191.PacketReceiptAbsenceData>): _191.PacketReceiptAbsenceData;
                    fromAmino(object: _191.PacketReceiptAbsenceDataAmino): _191.PacketReceiptAbsenceData;
                    toAmino(message: _191.PacketReceiptAbsenceData): _191.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _191.PacketReceiptAbsenceDataAminoMsg): _191.PacketReceiptAbsenceData;
                    toAminoMsg(message: _191.PacketReceiptAbsenceData): _191.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _191.PacketReceiptAbsenceDataProtoMsg): _191.PacketReceiptAbsenceData;
                    toProto(message: _191.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _191.PacketReceiptAbsenceData): _191.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _191.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.NextSequenceRecvData;
                    fromPartial(object: Partial<_191.NextSequenceRecvData>): _191.NextSequenceRecvData;
                    fromAmino(object: _191.NextSequenceRecvDataAmino): _191.NextSequenceRecvData;
                    toAmino(message: _191.NextSequenceRecvData): _191.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _191.NextSequenceRecvDataAminoMsg): _191.NextSequenceRecvData;
                    toAminoMsg(message: _191.NextSequenceRecvData): _191.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _191.NextSequenceRecvDataProtoMsg): _191.NextSequenceRecvData;
                    toProto(message: _191.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _191.NextSequenceRecvData): _191.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _192.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.ClientState;
                    fromPartial(object: Partial<_192.ClientState>): _192.ClientState;
                    fromAmino(object: _192.ClientStateAmino): _192.ClientState;
                    toAmino(message: _192.ClientState): _192.ClientStateAmino;
                    fromAminoMsg(object: _192.ClientStateAminoMsg): _192.ClientState;
                    toAminoMsg(message: _192.ClientState): _192.ClientStateAminoMsg;
                    fromProtoMsg(message: _192.ClientStateProtoMsg): _192.ClientState;
                    toProto(message: _192.ClientState): Uint8Array;
                    toProtoMsg(message: _192.ClientState): _192.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _192.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.ConsensusState;
                    fromPartial(object: Partial<_192.ConsensusState>): _192.ConsensusState;
                    fromAmino(object: _192.ConsensusStateAmino): _192.ConsensusState;
                    toAmino(message: _192.ConsensusState): _192.ConsensusStateAmino;
                    fromAminoMsg(object: _192.ConsensusStateAminoMsg): _192.ConsensusState;
                    toAminoMsg(message: _192.ConsensusState): _192.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _192.ConsensusStateProtoMsg): _192.ConsensusState;
                    toProto(message: _192.ConsensusState): Uint8Array;
                    toProtoMsg(message: _192.ConsensusState): _192.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _192.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.Misbehaviour;
                    fromPartial(object: Partial<_192.Misbehaviour>): _192.Misbehaviour;
                    fromAmino(object: _192.MisbehaviourAmino): _192.Misbehaviour;
                    toAmino(message: _192.Misbehaviour): _192.MisbehaviourAmino;
                    fromAminoMsg(object: _192.MisbehaviourAminoMsg): _192.Misbehaviour;
                    toAminoMsg(message: _192.Misbehaviour): _192.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _192.MisbehaviourProtoMsg): _192.Misbehaviour;
                    toProto(message: _192.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _192.Misbehaviour): _192.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _192.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.Header;
                    fromPartial(object: Partial<_192.Header>): _192.Header;
                    fromAmino(object: _192.HeaderAmino): _192.Header;
                    toAmino(message: _192.Header): _192.HeaderAmino;
                    fromAminoMsg(object: _192.HeaderAminoMsg): _192.Header;
                    toAminoMsg(message: _192.Header): _192.HeaderAminoMsg;
                    fromProtoMsg(message: _192.HeaderProtoMsg): _192.Header;
                    toProto(message: _192.Header): Uint8Array;
                    toProtoMsg(message: _192.Header): _192.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _192.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.Fraction;
                    fromPartial(object: Partial<_192.Fraction>): _192.Fraction;
                    fromAmino(object: _192.FractionAmino): _192.Fraction;
                    toAmino(message: _192.Fraction): _192.FractionAmino;
                    fromAminoMsg(object: _192.FractionAminoMsg): _192.Fraction;
                    toAminoMsg(message: _192.Fraction): _192.FractionAminoMsg;
                    fromProtoMsg(message: _192.FractionProtoMsg): _192.Fraction;
                    toProto(message: _192.Fraction): Uint8Array;
                    toProtoMsg(message: _192.Fraction): _192.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _328.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _329.MsgClientImpl;
                    };
                    client: {
                        v1: _330.MsgClientImpl;
                    };
                    connection: {
                        v1: _331.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _171.QueryDenomTraceRequest): Promise<_171.QueryDenomTraceResponse>;
                            denomTraces(request?: _171.QueryDenomTracesRequest): Promise<_171.QueryDenomTracesResponse>;
                            params(request?: _171.QueryParamsRequest): Promise<_171.QueryParamsResponse>;
                            denomHash(request: _171.QueryDenomHashRequest): Promise<_171.QueryDenomHashResponse>;
                            escrowAddress(request: _171.QueryEscrowAddressRequest): Promise<_171.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _177.QueryChannelRequest): Promise<_177.QueryChannelResponse>;
                            channels(request?: _177.QueryChannelsRequest): Promise<_177.QueryChannelsResponse>;
                            connectionChannels(request: _177.QueryConnectionChannelsRequest): Promise<_177.QueryConnectionChannelsResponse>;
                            channelClientState(request: _177.QueryChannelClientStateRequest): Promise<_177.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _177.QueryChannelConsensusStateRequest): Promise<_177.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _177.QueryPacketCommitmentRequest): Promise<_177.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _177.QueryPacketCommitmentsRequest): Promise<_177.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _177.QueryPacketReceiptRequest): Promise<_177.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _177.QueryPacketAcknowledgementRequest): Promise<_177.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _177.QueryPacketAcknowledgementsRequest): Promise<_177.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _177.QueryUnreceivedPacketsRequest): Promise<_177.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _177.QueryUnreceivedAcksRequest): Promise<_177.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _177.QueryNextSequenceReceiveRequest): Promise<_177.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _181.QueryClientStateRequest): Promise<_181.QueryClientStateResponse>;
                            clientStates(request?: _181.QueryClientStatesRequest): Promise<_181.QueryClientStatesResponse>;
                            consensusState(request: _181.QueryConsensusStateRequest): Promise<_181.QueryConsensusStateResponse>;
                            consensusStates(request: _181.QueryConsensusStatesRequest): Promise<_181.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _181.QueryConsensusStateHeightsRequest): Promise<_181.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _181.QueryClientStatusRequest): Promise<_181.QueryClientStatusResponse>;
                            clientParams(request?: _181.QueryClientParamsRequest): Promise<_181.QueryClientParamsResponse>;
                            upgradedClientState(request?: _181.QueryUpgradedClientStateRequest): Promise<_181.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _181.QueryUpgradedConsensusStateRequest): Promise<_181.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _186.QueryConnectionRequest): Promise<_186.QueryConnectionResponse>;
                            connections(request?: _186.QueryConnectionsRequest): Promise<_186.QueryConnectionsResponse>;
                            clientConnections(request: _186.QueryClientConnectionsRequest): Promise<_186.QueryClientConnectionsResponse>;
                            connectionClientState(request: _186.QueryConnectionClientStateRequest): Promise<_186.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _186.QueryConnectionConsensusStateRequest): Promise<_186.QueryConnectionConsensusStateResponse>;
                        };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _316.LCDQueryClient;
                        };
                        host: {
                            v1: _317.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _318.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _319.LCDQueryClient;
                    };
                    client: {
                        v1: _320.LCDQueryClient;
                    };
                    connection: {
                        v1: _321.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
