import * as _167 from "./applications/interchain_accounts/controller/v1/controller";
import * as _168 from "./applications/interchain_accounts/controller/v1/query";
import * as _169 from "./applications/interchain_accounts/host/v1/host";
import * as _170 from "./applications/interchain_accounts/host/v1/query";
import * as _171 from "./applications/interchain_accounts/v1/account";
import * as _172 from "./applications/interchain_accounts/v1/genesis";
import * as _173 from "./applications/interchain_accounts/v1/metadata";
import * as _174 from "./applications/interchain_accounts/v1/packet";
import * as _175 from "./applications/transfer/v1/genesis";
import * as _176 from "./applications/transfer/v1/query";
import * as _177 from "./applications/transfer/v1/transfer";
import * as _178 from "./applications/transfer/v1/tx";
import * as _179 from "./applications/transfer/v2/packet";
import * as _180 from "./core/channel/v1/channel";
import * as _181 from "./core/channel/v1/genesis";
import * as _182 from "./core/channel/v1/query";
import * as _183 from "./core/channel/v1/tx";
import * as _184 from "./core/client/v1/client";
import * as _185 from "./core/client/v1/genesis";
import * as _186 from "./core/client/v1/query";
import * as _187 from "./core/client/v1/tx";
import * as _188 from "./core/commitment/v1/commitment";
import * as _189 from "./core/connection/v1/connection";
import * as _190 from "./core/connection/v1/genesis";
import * as _191 from "./core/connection/v1/query";
import * as _192 from "./core/connection/v1/tx";
import * as _193 from "./core/types/v1/genesis";
import * as _194 from "./lightclients/localhost/v1/localhost";
import * as _195 from "./lightclients/solomachine/v1/solomachine";
import * as _196 from "./lightclients/solomachine/v2/solomachine";
import * as _197 from "./lightclients/tendermint/v1/tendermint";
import * as _315 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _316 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _317 from "./applications/transfer/v1/query.lcd";
import * as _318 from "./core/channel/v1/query.lcd";
import * as _319 from "./core/client/v1/query.lcd";
import * as _320 from "./core/connection/v1/query.lcd";
import * as _321 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _322 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _323 from "./applications/transfer/v1/query.rpc.Query";
import * as _324 from "./core/channel/v1/query.rpc.Query";
import * as _325 from "./core/client/v1/query.rpc.Query";
import * as _326 from "./core/connection/v1/query.rpc.Query";
import * as _327 from "./applications/transfer/v1/tx.rpc.msg";
import * as _328 from "./core/channel/v1/tx.rpc.msg";
import * as _329 from "./core/client/v1/tx.rpc.msg";
import * as _330 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _321.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _315.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _168.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _168.QueryParamsRequest;
                        fromPartial(_: Partial<_168.QueryParamsRequest>): _168.QueryParamsRequest;
                        fromAmino(_: _168.QueryParamsRequestAmino): _168.QueryParamsRequest;
                        toAmino(_: _168.QueryParamsRequest): _168.QueryParamsRequestAmino;
                        fromAminoMsg(object: _168.QueryParamsRequestAminoMsg): _168.QueryParamsRequest;
                        toAminoMsg(message: _168.QueryParamsRequest): _168.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _168.QueryParamsRequestProtoMsg): _168.QueryParamsRequest;
                        toProto(message: _168.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _168.QueryParamsRequest): _168.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _168.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _168.QueryParamsResponse;
                        fromPartial(object: Partial<_168.QueryParamsResponse>): _168.QueryParamsResponse;
                        fromAmino(object: _168.QueryParamsResponseAmino): _168.QueryParamsResponse;
                        toAmino(message: _168.QueryParamsResponse): _168.QueryParamsResponseAmino;
                        fromAminoMsg(object: _168.QueryParamsResponseAminoMsg): _168.QueryParamsResponse;
                        toAminoMsg(message: _168.QueryParamsResponse): _168.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _168.QueryParamsResponseProtoMsg): _168.QueryParamsResponse;
                        toProto(message: _168.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _168.QueryParamsResponse): _168.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _167.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _167.Params;
                        fromPartial(object: Partial<_167.Params>): _167.Params;
                        fromAmino(object: _167.ParamsAmino): _167.Params;
                        toAmino(message: _167.Params): _167.ParamsAmino;
                        fromAminoMsg(object: _167.ParamsAminoMsg): _167.Params;
                        toAminoMsg(message: _167.Params): _167.ParamsAminoMsg;
                        fromProtoMsg(message: _167.ParamsProtoMsg): _167.Params;
                        toProto(message: _167.Params): Uint8Array;
                        toProtoMsg(message: _167.Params): _167.ParamsProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _322.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _316.LCDQueryClient;
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
                    Params: {
                        typeUrl: string;
                        encode(message: _169.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _169.Params;
                        fromPartial(object: Partial<_169.Params>): _169.Params;
                        fromAmino(object: _169.ParamsAmino): _169.Params;
                        toAmino(message: _169.Params): _169.ParamsAmino;
                        fromAminoMsg(object: _169.ParamsAminoMsg): _169.Params;
                        toAminoMsg(message: _169.Params): _169.ParamsAminoMsg;
                        fromProtoMsg(message: _169.ParamsProtoMsg): _169.Params;
                        toProto(message: _169.Params): Uint8Array;
                        toProtoMsg(message: _169.Params): _169.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _174.Type;
                typeToJSON(object: _174.Type): string;
                Type: typeof _174.Type;
                TypeSDKType: typeof _174.Type;
                TypeAmino: typeof _174.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _174.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _174.InterchainAccountPacketData;
                    fromPartial(object: Partial<_174.InterchainAccountPacketData>): _174.InterchainAccountPacketData;
                    fromAmino(object: _174.InterchainAccountPacketDataAmino): _174.InterchainAccountPacketData;
                    toAmino(message: _174.InterchainAccountPacketData): _174.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _174.InterchainAccountPacketDataAminoMsg): _174.InterchainAccountPacketData;
                    toAminoMsg(message: _174.InterchainAccountPacketData): _174.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _174.InterchainAccountPacketDataProtoMsg): _174.InterchainAccountPacketData;
                    toProto(message: _174.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _174.InterchainAccountPacketData): _174.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _174.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _174.CosmosTx;
                    fromPartial(object: Partial<_174.CosmosTx>): _174.CosmosTx;
                    fromAmino(object: _174.CosmosTxAmino): _174.CosmosTx;
                    toAmino(message: _174.CosmosTx): _174.CosmosTxAmino;
                    fromAminoMsg(object: _174.CosmosTxAminoMsg): _174.CosmosTx;
                    toAminoMsg(message: _174.CosmosTx): _174.CosmosTxAminoMsg;
                    fromProtoMsg(message: _174.CosmosTxProtoMsg): _174.CosmosTx;
                    toProto(message: _174.CosmosTx): Uint8Array;
                    toProtoMsg(message: _174.CosmosTx): _174.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _173.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.Metadata;
                    fromPartial(object: Partial<_173.Metadata>): _173.Metadata;
                    fromAmino(object: _173.MetadataAmino): _173.Metadata;
                    toAmino(message: _173.Metadata): _173.MetadataAmino;
                    fromAminoMsg(object: _173.MetadataAminoMsg): _173.Metadata;
                    toAminoMsg(message: _173.Metadata): _173.MetadataAminoMsg;
                    fromProtoMsg(message: _173.MetadataProtoMsg): _173.Metadata;
                    toProto(message: _173.Metadata): Uint8Array;
                    toProtoMsg(message: _173.Metadata): _173.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _172.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _172.GenesisState;
                    fromPartial(object: Partial<_172.GenesisState>): _172.GenesisState;
                    fromAmino(object: _172.GenesisStateAmino): _172.GenesisState;
                    toAmino(message: _172.GenesisState): _172.GenesisStateAmino;
                    fromAminoMsg(object: _172.GenesisStateAminoMsg): _172.GenesisState;
                    toAminoMsg(message: _172.GenesisState): _172.GenesisStateAminoMsg;
                    fromProtoMsg(message: _172.GenesisStateProtoMsg): _172.GenesisState;
                    toProto(message: _172.GenesisState): Uint8Array;
                    toProtoMsg(message: _172.GenesisState): _172.GenesisStateProtoMsg;
                };
                ControllerGenesisState: {
                    typeUrl: string;
                    encode(message: _172.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _172.ControllerGenesisState;
                    fromPartial(object: Partial<_172.ControllerGenesisState>): _172.ControllerGenesisState;
                    fromAmino(object: _172.ControllerGenesisStateAmino): _172.ControllerGenesisState;
                    toAmino(message: _172.ControllerGenesisState): _172.ControllerGenesisStateAmino;
                    fromAminoMsg(object: _172.ControllerGenesisStateAminoMsg): _172.ControllerGenesisState;
                    toAminoMsg(message: _172.ControllerGenesisState): _172.ControllerGenesisStateAminoMsg;
                    fromProtoMsg(message: _172.ControllerGenesisStateProtoMsg): _172.ControllerGenesisState;
                    toProto(message: _172.ControllerGenesisState): Uint8Array;
                    toProtoMsg(message: _172.ControllerGenesisState): _172.ControllerGenesisStateProtoMsg;
                };
                HostGenesisState: {
                    typeUrl: string;
                    encode(message: _172.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _172.HostGenesisState;
                    fromPartial(object: Partial<_172.HostGenesisState>): _172.HostGenesisState;
                    fromAmino(object: _172.HostGenesisStateAmino): _172.HostGenesisState;
                    toAmino(message: _172.HostGenesisState): _172.HostGenesisStateAmino;
                    fromAminoMsg(object: _172.HostGenesisStateAminoMsg): _172.HostGenesisState;
                    toAminoMsg(message: _172.HostGenesisState): _172.HostGenesisStateAminoMsg;
                    fromProtoMsg(message: _172.HostGenesisStateProtoMsg): _172.HostGenesisState;
                    toProto(message: _172.HostGenesisState): Uint8Array;
                    toProtoMsg(message: _172.HostGenesisState): _172.HostGenesisStateProtoMsg;
                };
                ActiveChannel: {
                    typeUrl: string;
                    encode(message: _172.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _172.ActiveChannel;
                    fromPartial(object: Partial<_172.ActiveChannel>): _172.ActiveChannel;
                    fromAmino(object: _172.ActiveChannelAmino): _172.ActiveChannel;
                    toAmino(message: _172.ActiveChannel): _172.ActiveChannelAmino;
                    fromAminoMsg(object: _172.ActiveChannelAminoMsg): _172.ActiveChannel;
                    toAminoMsg(message: _172.ActiveChannel): _172.ActiveChannelAminoMsg;
                    fromProtoMsg(message: _172.ActiveChannelProtoMsg): _172.ActiveChannel;
                    toProto(message: _172.ActiveChannel): Uint8Array;
                    toProtoMsg(message: _172.ActiveChannel): _172.ActiveChannelProtoMsg;
                };
                RegisteredInterchainAccount: {
                    typeUrl: string;
                    encode(message: _172.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _172.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_172.RegisteredInterchainAccount>): _172.RegisteredInterchainAccount;
                    fromAmino(object: _172.RegisteredInterchainAccountAmino): _172.RegisteredInterchainAccount;
                    toAmino(message: _172.RegisteredInterchainAccount): _172.RegisteredInterchainAccountAmino;
                    fromAminoMsg(object: _172.RegisteredInterchainAccountAminoMsg): _172.RegisteredInterchainAccount;
                    toAminoMsg(message: _172.RegisteredInterchainAccount): _172.RegisteredInterchainAccountAminoMsg;
                    fromProtoMsg(message: _172.RegisteredInterchainAccountProtoMsg): _172.RegisteredInterchainAccount;
                    toProto(message: _172.RegisteredInterchainAccount): Uint8Array;
                    toProtoMsg(message: _172.RegisteredInterchainAccount): _172.RegisteredInterchainAccountProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _171.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.InterchainAccount;
                    fromPartial(object: Partial<_171.InterchainAccount>): _171.InterchainAccount;
                    fromAmino(object: _171.InterchainAccountAmino): _171.InterchainAccount;
                    toAmino(message: _171.InterchainAccount): _171.InterchainAccountAmino;
                    fromAminoMsg(object: _171.InterchainAccountAminoMsg): _171.InterchainAccount;
                    toAminoMsg(message: _171.InterchainAccount): _171.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _171.InterchainAccountProtoMsg): _171.InterchainAccount;
                    toProto(message: _171.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _171.InterchainAccount): _171.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _327.MsgClientImpl;
                QueryClientImpl: typeof _323.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _176.QueryDenomTraceRequest): Promise<_176.QueryDenomTraceResponse>;
                    denomTraces(request?: _176.QueryDenomTracesRequest): Promise<_176.QueryDenomTracesResponse>;
                    params(request?: _176.QueryParamsRequest): Promise<_176.QueryParamsResponse>;
                    denomHash(request: _176.QueryDenomHashRequest): Promise<_176.QueryDenomHashResponse>;
                    escrowAddress(request: _176.QueryEscrowAddressRequest): Promise<_176.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _317.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _178.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _178.MsgTransfer): {
                            typeUrl: string;
                            value: _178.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _178.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _178.MsgTransfer): {
                            typeUrl: string;
                            value: _178.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _178.MsgTransfer) => _178.MsgTransferAmino;
                        fromAmino: (object: _178.MsgTransferAmino) => _178.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _178.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.MsgTransfer;
                    fromPartial(object: Partial<_178.MsgTransfer>): _178.MsgTransfer;
                    fromAmino(object: _178.MsgTransferAmino): _178.MsgTransfer;
                    toAmino(message: _178.MsgTransfer): _178.MsgTransferAmino;
                    fromAminoMsg(object: _178.MsgTransferAminoMsg): _178.MsgTransfer;
                    toAminoMsg(message: _178.MsgTransfer): _178.MsgTransferAminoMsg;
                    fromProtoMsg(message: _178.MsgTransferProtoMsg): _178.MsgTransfer;
                    toProto(message: _178.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _178.MsgTransfer): _178.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _178.MsgTransferResponse;
                    fromPartial(_: Partial<_178.MsgTransferResponse>): _178.MsgTransferResponse;
                    fromAmino(_: _178.MsgTransferResponseAmino): _178.MsgTransferResponse;
                    toAmino(_: _178.MsgTransferResponse): _178.MsgTransferResponseAmino;
                    fromAminoMsg(object: _178.MsgTransferResponseAminoMsg): _178.MsgTransferResponse;
                    toAminoMsg(message: _178.MsgTransferResponse): _178.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgTransferResponseProtoMsg): _178.MsgTransferResponse;
                    toProto(message: _178.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgTransferResponse): _178.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _177.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.DenomTrace;
                    fromPartial(object: Partial<_177.DenomTrace>): _177.DenomTrace;
                    fromAmino(object: _177.DenomTraceAmino): _177.DenomTrace;
                    toAmino(message: _177.DenomTrace): _177.DenomTraceAmino;
                    fromAminoMsg(object: _177.DenomTraceAminoMsg): _177.DenomTrace;
                    toAminoMsg(message: _177.DenomTrace): _177.DenomTraceAminoMsg;
                    fromProtoMsg(message: _177.DenomTraceProtoMsg): _177.DenomTrace;
                    toProto(message: _177.DenomTrace): Uint8Array;
                    toProtoMsg(message: _177.DenomTrace): _177.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _177.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.Params;
                    fromPartial(object: Partial<_177.Params>): _177.Params;
                    fromAmino(object: _177.ParamsAmino): _177.Params;
                    toAmino(message: _177.Params): _177.ParamsAmino;
                    fromAminoMsg(object: _177.ParamsAminoMsg): _177.Params;
                    toAminoMsg(message: _177.Params): _177.ParamsAminoMsg;
                    fromProtoMsg(message: _177.ParamsProtoMsg): _177.Params;
                    toProto(message: _177.Params): Uint8Array;
                    toProtoMsg(message: _177.Params): _177.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_176.QueryDenomTraceRequest>): _176.QueryDenomTraceRequest;
                    fromAmino(object: _176.QueryDenomTraceRequestAmino): _176.QueryDenomTraceRequest;
                    toAmino(message: _176.QueryDenomTraceRequest): _176.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _176.QueryDenomTraceRequestAminoMsg): _176.QueryDenomTraceRequest;
                    toAminoMsg(message: _176.QueryDenomTraceRequest): _176.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryDenomTraceRequestProtoMsg): _176.QueryDenomTraceRequest;
                    toProto(message: _176.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryDenomTraceRequest): _176.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_176.QueryDenomTraceResponse>): _176.QueryDenomTraceResponse;
                    fromAmino(object: _176.QueryDenomTraceResponseAmino): _176.QueryDenomTraceResponse;
                    toAmino(message: _176.QueryDenomTraceResponse): _176.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _176.QueryDenomTraceResponseAminoMsg): _176.QueryDenomTraceResponse;
                    toAminoMsg(message: _176.QueryDenomTraceResponse): _176.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryDenomTraceResponseProtoMsg): _176.QueryDenomTraceResponse;
                    toProto(message: _176.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryDenomTraceResponse): _176.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_176.QueryDenomTracesRequest>): _176.QueryDenomTracesRequest;
                    fromAmino(object: _176.QueryDenomTracesRequestAmino): _176.QueryDenomTracesRequest;
                    toAmino(message: _176.QueryDenomTracesRequest): _176.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _176.QueryDenomTracesRequestAminoMsg): _176.QueryDenomTracesRequest;
                    toAminoMsg(message: _176.QueryDenomTracesRequest): _176.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryDenomTracesRequestProtoMsg): _176.QueryDenomTracesRequest;
                    toProto(message: _176.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryDenomTracesRequest): _176.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_176.QueryDenomTracesResponse>): _176.QueryDenomTracesResponse;
                    fromAmino(object: _176.QueryDenomTracesResponseAmino): _176.QueryDenomTracesResponse;
                    toAmino(message: _176.QueryDenomTracesResponse): _176.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _176.QueryDenomTracesResponseAminoMsg): _176.QueryDenomTracesResponse;
                    toAminoMsg(message: _176.QueryDenomTracesResponse): _176.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryDenomTracesResponseProtoMsg): _176.QueryDenomTracesResponse;
                    toProto(message: _176.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryDenomTracesResponse): _176.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _176.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _176.QueryParamsRequest;
                    fromPartial(_: Partial<_176.QueryParamsRequest>): _176.QueryParamsRequest;
                    fromAmino(_: _176.QueryParamsRequestAmino): _176.QueryParamsRequest;
                    toAmino(_: _176.QueryParamsRequest): _176.QueryParamsRequestAmino;
                    fromAminoMsg(object: _176.QueryParamsRequestAminoMsg): _176.QueryParamsRequest;
                    toAminoMsg(message: _176.QueryParamsRequest): _176.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryParamsRequestProtoMsg): _176.QueryParamsRequest;
                    toProto(message: _176.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryParamsRequest): _176.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryParamsResponse;
                    fromPartial(object: Partial<_176.QueryParamsResponse>): _176.QueryParamsResponse;
                    fromAmino(object: _176.QueryParamsResponseAmino): _176.QueryParamsResponse;
                    toAmino(message: _176.QueryParamsResponse): _176.QueryParamsResponseAmino;
                    fromAminoMsg(object: _176.QueryParamsResponseAminoMsg): _176.QueryParamsResponse;
                    toAminoMsg(message: _176.QueryParamsResponse): _176.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryParamsResponseProtoMsg): _176.QueryParamsResponse;
                    toProto(message: _176.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryParamsResponse): _176.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryDenomHashRequest;
                    fromPartial(object: Partial<_176.QueryDenomHashRequest>): _176.QueryDenomHashRequest;
                    fromAmino(object: _176.QueryDenomHashRequestAmino): _176.QueryDenomHashRequest;
                    toAmino(message: _176.QueryDenomHashRequest): _176.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _176.QueryDenomHashRequestAminoMsg): _176.QueryDenomHashRequest;
                    toAminoMsg(message: _176.QueryDenomHashRequest): _176.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryDenomHashRequestProtoMsg): _176.QueryDenomHashRequest;
                    toProto(message: _176.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryDenomHashRequest): _176.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryDenomHashResponse;
                    fromPartial(object: Partial<_176.QueryDenomHashResponse>): _176.QueryDenomHashResponse;
                    fromAmino(object: _176.QueryDenomHashResponseAmino): _176.QueryDenomHashResponse;
                    toAmino(message: _176.QueryDenomHashResponse): _176.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _176.QueryDenomHashResponseAminoMsg): _176.QueryDenomHashResponse;
                    toAminoMsg(message: _176.QueryDenomHashResponse): _176.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryDenomHashResponseProtoMsg): _176.QueryDenomHashResponse;
                    toProto(message: _176.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryDenomHashResponse): _176.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_176.QueryEscrowAddressRequest>): _176.QueryEscrowAddressRequest;
                    fromAmino(object: _176.QueryEscrowAddressRequestAmino): _176.QueryEscrowAddressRequest;
                    toAmino(message: _176.QueryEscrowAddressRequest): _176.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _176.QueryEscrowAddressRequestAminoMsg): _176.QueryEscrowAddressRequest;
                    toAminoMsg(message: _176.QueryEscrowAddressRequest): _176.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryEscrowAddressRequestProtoMsg): _176.QueryEscrowAddressRequest;
                    toProto(message: _176.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryEscrowAddressRequest): _176.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_176.QueryEscrowAddressResponse>): _176.QueryEscrowAddressResponse;
                    fromAmino(object: _176.QueryEscrowAddressResponseAmino): _176.QueryEscrowAddressResponse;
                    toAmino(message: _176.QueryEscrowAddressResponse): _176.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _176.QueryEscrowAddressResponseAminoMsg): _176.QueryEscrowAddressResponse;
                    toAminoMsg(message: _176.QueryEscrowAddressResponse): _176.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryEscrowAddressResponseProtoMsg): _176.QueryEscrowAddressResponse;
                    toProto(message: _176.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryEscrowAddressResponse): _176.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _175.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _175.GenesisState;
                    fromPartial(object: Partial<_175.GenesisState>): _175.GenesisState;
                    fromAmino(object: _175.GenesisStateAmino): _175.GenesisState;
                    toAmino(message: _175.GenesisState): _175.GenesisStateAmino;
                    fromAminoMsg(object: _175.GenesisStateAminoMsg): _175.GenesisState;
                    toAminoMsg(message: _175.GenesisState): _175.GenesisStateAminoMsg;
                    fromProtoMsg(message: _175.GenesisStateProtoMsg): _175.GenesisState;
                    toProto(message: _175.GenesisState): Uint8Array;
                    toProtoMsg(message: _175.GenesisState): _175.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _179.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.FungibleTokenPacketData;
                    fromPartial(object: Partial<_179.FungibleTokenPacketData>): _179.FungibleTokenPacketData;
                    fromAmino(object: _179.FungibleTokenPacketDataAmino): _179.FungibleTokenPacketData;
                    toAmino(message: _179.FungibleTokenPacketData): _179.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _179.FungibleTokenPacketDataAminoMsg): _179.FungibleTokenPacketData;
                    toAminoMsg(message: _179.FungibleTokenPacketData): _179.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _179.FungibleTokenPacketDataProtoMsg): _179.FungibleTokenPacketData;
                    toProto(message: _179.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _179.FungibleTokenPacketData): _179.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _328.MsgClientImpl;
                QueryClientImpl: typeof _324.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _182.QueryChannelRequest): Promise<_182.QueryChannelResponse>;
                    channels(request?: _182.QueryChannelsRequest): Promise<_182.QueryChannelsResponse>;
                    connectionChannels(request: _182.QueryConnectionChannelsRequest): Promise<_182.QueryConnectionChannelsResponse>;
                    channelClientState(request: _182.QueryChannelClientStateRequest): Promise<_182.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _182.QueryChannelConsensusStateRequest): Promise<_182.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _182.QueryPacketCommitmentRequest): Promise<_182.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _182.QueryPacketCommitmentsRequest): Promise<_182.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _182.QueryPacketReceiptRequest): Promise<_182.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _182.QueryPacketAcknowledgementRequest): Promise<_182.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _182.QueryPacketAcknowledgementsRequest): Promise<_182.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _182.QueryUnreceivedPacketsRequest): Promise<_182.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _182.QueryUnreceivedAcksRequest): Promise<_182.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _182.QueryNextSequenceReceiveRequest): Promise<_182.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _318.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _183.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _183.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _183.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _183.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _183.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _183.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _183.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _183.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _183.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _183.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _183.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _183.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _183.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _183.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _183.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _183.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _183.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _183.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _183.MsgRecvPacket): {
                            typeUrl: string;
                            value: _183.MsgRecvPacket;
                        };
                        timeout(value: _183.MsgTimeout): {
                            typeUrl: string;
                            value: _183.MsgTimeout;
                        };
                        timeoutOnClose(value: _183.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _183.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _183.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _183.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _183.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _183.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _183.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _183.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _183.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _183.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _183.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _183.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _183.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _183.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _183.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _183.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _183.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _183.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _183.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _183.MsgRecvPacket): {
                            typeUrl: string;
                            value: _183.MsgRecvPacket;
                        };
                        timeout(value: _183.MsgTimeout): {
                            typeUrl: string;
                            value: _183.MsgTimeout;
                        };
                        timeoutOnClose(value: _183.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _183.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _183.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _183.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _183.MsgChannelOpenInit) => _183.MsgChannelOpenInitAmino;
                        fromAmino: (object: _183.MsgChannelOpenInitAmino) => _183.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _183.MsgChannelOpenTry) => _183.MsgChannelOpenTryAmino;
                        fromAmino: (object: _183.MsgChannelOpenTryAmino) => _183.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _183.MsgChannelOpenAck) => _183.MsgChannelOpenAckAmino;
                        fromAmino: (object: _183.MsgChannelOpenAckAmino) => _183.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _183.MsgChannelOpenConfirm) => _183.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _183.MsgChannelOpenConfirmAmino) => _183.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _183.MsgChannelCloseInit) => _183.MsgChannelCloseInitAmino;
                        fromAmino: (object: _183.MsgChannelCloseInitAmino) => _183.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _183.MsgChannelCloseConfirm) => _183.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _183.MsgChannelCloseConfirmAmino) => _183.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _183.MsgRecvPacket) => _183.MsgRecvPacketAmino;
                        fromAmino: (object: _183.MsgRecvPacketAmino) => _183.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _183.MsgTimeout) => _183.MsgTimeoutAmino;
                        fromAmino: (object: _183.MsgTimeoutAmino) => _183.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _183.MsgTimeoutOnClose) => _183.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _183.MsgTimeoutOnCloseAmino) => _183.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _183.MsgAcknowledgement) => _183.MsgAcknowledgementAmino;
                        fromAmino: (object: _183.MsgAcknowledgementAmino) => _183.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _183.ResponseResultType;
                responseResultTypeToJSON(object: _183.ResponseResultType): string;
                ResponseResultType: typeof _183.ResponseResultType;
                ResponseResultTypeSDKType: typeof _183.ResponseResultType;
                ResponseResultTypeAmino: typeof _183.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelOpenInit;
                    fromPartial(object: Partial<_183.MsgChannelOpenInit>): _183.MsgChannelOpenInit;
                    fromAmino(object: _183.MsgChannelOpenInitAmino): _183.MsgChannelOpenInit;
                    toAmino(message: _183.MsgChannelOpenInit): _183.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenInitAminoMsg): _183.MsgChannelOpenInit;
                    toAminoMsg(message: _183.MsgChannelOpenInit): _183.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenInitProtoMsg): _183.MsgChannelOpenInit;
                    toProto(message: _183.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenInit): _183.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_183.MsgChannelOpenInitResponse>): _183.MsgChannelOpenInitResponse;
                    fromAmino(object: _183.MsgChannelOpenInitResponseAmino): _183.MsgChannelOpenInitResponse;
                    toAmino(message: _183.MsgChannelOpenInitResponse): _183.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenInitResponseAminoMsg): _183.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _183.MsgChannelOpenInitResponse): _183.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenInitResponseProtoMsg): _183.MsgChannelOpenInitResponse;
                    toProto(message: _183.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenInitResponse): _183.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelOpenTry;
                    fromPartial(object: Partial<_183.MsgChannelOpenTry>): _183.MsgChannelOpenTry;
                    fromAmino(object: _183.MsgChannelOpenTryAmino): _183.MsgChannelOpenTry;
                    toAmino(message: _183.MsgChannelOpenTry): _183.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenTryAminoMsg): _183.MsgChannelOpenTry;
                    toAminoMsg(message: _183.MsgChannelOpenTry): _183.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenTryProtoMsg): _183.MsgChannelOpenTry;
                    toProto(message: _183.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenTry): _183.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_183.MsgChannelOpenTryResponse>): _183.MsgChannelOpenTryResponse;
                    fromAmino(object: _183.MsgChannelOpenTryResponseAmino): _183.MsgChannelOpenTryResponse;
                    toAmino(message: _183.MsgChannelOpenTryResponse): _183.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenTryResponseAminoMsg): _183.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _183.MsgChannelOpenTryResponse): _183.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenTryResponseProtoMsg): _183.MsgChannelOpenTryResponse;
                    toProto(message: _183.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenTryResponse): _183.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelOpenAck;
                    fromPartial(object: Partial<_183.MsgChannelOpenAck>): _183.MsgChannelOpenAck;
                    fromAmino(object: _183.MsgChannelOpenAckAmino): _183.MsgChannelOpenAck;
                    toAmino(message: _183.MsgChannelOpenAck): _183.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenAckAminoMsg): _183.MsgChannelOpenAck;
                    toAminoMsg(message: _183.MsgChannelOpenAck): _183.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenAckProtoMsg): _183.MsgChannelOpenAck;
                    toProto(message: _183.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenAck): _183.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _183.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_183.MsgChannelOpenAckResponse>): _183.MsgChannelOpenAckResponse;
                    fromAmino(_: _183.MsgChannelOpenAckResponseAmino): _183.MsgChannelOpenAckResponse;
                    toAmino(_: _183.MsgChannelOpenAckResponse): _183.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenAckResponseAminoMsg): _183.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _183.MsgChannelOpenAckResponse): _183.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenAckResponseProtoMsg): _183.MsgChannelOpenAckResponse;
                    toProto(message: _183.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenAckResponse): _183.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_183.MsgChannelOpenConfirm>): _183.MsgChannelOpenConfirm;
                    fromAmino(object: _183.MsgChannelOpenConfirmAmino): _183.MsgChannelOpenConfirm;
                    toAmino(message: _183.MsgChannelOpenConfirm): _183.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenConfirmAminoMsg): _183.MsgChannelOpenConfirm;
                    toAminoMsg(message: _183.MsgChannelOpenConfirm): _183.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenConfirmProtoMsg): _183.MsgChannelOpenConfirm;
                    toProto(message: _183.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenConfirm): _183.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _183.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_183.MsgChannelOpenConfirmResponse>): _183.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _183.MsgChannelOpenConfirmResponseAmino): _183.MsgChannelOpenConfirmResponse;
                    toAmino(_: _183.MsgChannelOpenConfirmResponse): _183.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _183.MsgChannelOpenConfirmResponseAminoMsg): _183.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _183.MsgChannelOpenConfirmResponse): _183.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelOpenConfirmResponseProtoMsg): _183.MsgChannelOpenConfirmResponse;
                    toProto(message: _183.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelOpenConfirmResponse): _183.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelCloseInit;
                    fromPartial(object: Partial<_183.MsgChannelCloseInit>): _183.MsgChannelCloseInit;
                    fromAmino(object: _183.MsgChannelCloseInitAmino): _183.MsgChannelCloseInit;
                    toAmino(message: _183.MsgChannelCloseInit): _183.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _183.MsgChannelCloseInitAminoMsg): _183.MsgChannelCloseInit;
                    toAminoMsg(message: _183.MsgChannelCloseInit): _183.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelCloseInitProtoMsg): _183.MsgChannelCloseInit;
                    toProto(message: _183.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelCloseInit): _183.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _183.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_183.MsgChannelCloseInitResponse>): _183.MsgChannelCloseInitResponse;
                    fromAmino(_: _183.MsgChannelCloseInitResponseAmino): _183.MsgChannelCloseInitResponse;
                    toAmino(_: _183.MsgChannelCloseInitResponse): _183.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _183.MsgChannelCloseInitResponseAminoMsg): _183.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _183.MsgChannelCloseInitResponse): _183.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelCloseInitResponseProtoMsg): _183.MsgChannelCloseInitResponse;
                    toProto(message: _183.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelCloseInitResponse): _183.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _183.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_183.MsgChannelCloseConfirm>): _183.MsgChannelCloseConfirm;
                    fromAmino(object: _183.MsgChannelCloseConfirmAmino): _183.MsgChannelCloseConfirm;
                    toAmino(message: _183.MsgChannelCloseConfirm): _183.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _183.MsgChannelCloseConfirmAminoMsg): _183.MsgChannelCloseConfirm;
                    toAminoMsg(message: _183.MsgChannelCloseConfirm): _183.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelCloseConfirmProtoMsg): _183.MsgChannelCloseConfirm;
                    toProto(message: _183.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelCloseConfirm): _183.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _183.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_183.MsgChannelCloseConfirmResponse>): _183.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _183.MsgChannelCloseConfirmResponseAmino): _183.MsgChannelCloseConfirmResponse;
                    toAmino(_: _183.MsgChannelCloseConfirmResponse): _183.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _183.MsgChannelCloseConfirmResponseAminoMsg): _183.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _183.MsgChannelCloseConfirmResponse): _183.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgChannelCloseConfirmResponseProtoMsg): _183.MsgChannelCloseConfirmResponse;
                    toProto(message: _183.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgChannelCloseConfirmResponse): _183.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _183.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgRecvPacket;
                    fromPartial(object: Partial<_183.MsgRecvPacket>): _183.MsgRecvPacket;
                    fromAmino(object: _183.MsgRecvPacketAmino): _183.MsgRecvPacket;
                    toAmino(message: _183.MsgRecvPacket): _183.MsgRecvPacketAmino;
                    fromAminoMsg(object: _183.MsgRecvPacketAminoMsg): _183.MsgRecvPacket;
                    toAminoMsg(message: _183.MsgRecvPacket): _183.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _183.MsgRecvPacketProtoMsg): _183.MsgRecvPacket;
                    toProto(message: _183.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _183.MsgRecvPacket): _183.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _183.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_183.MsgRecvPacketResponse>): _183.MsgRecvPacketResponse;
                    fromAmino(object: _183.MsgRecvPacketResponseAmino): _183.MsgRecvPacketResponse;
                    toAmino(message: _183.MsgRecvPacketResponse): _183.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _183.MsgRecvPacketResponseAminoMsg): _183.MsgRecvPacketResponse;
                    toAminoMsg(message: _183.MsgRecvPacketResponse): _183.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgRecvPacketResponseProtoMsg): _183.MsgRecvPacketResponse;
                    toProto(message: _183.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgRecvPacketResponse): _183.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _183.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgTimeout;
                    fromPartial(object: Partial<_183.MsgTimeout>): _183.MsgTimeout;
                    fromAmino(object: _183.MsgTimeoutAmino): _183.MsgTimeout;
                    toAmino(message: _183.MsgTimeout): _183.MsgTimeoutAmino;
                    fromAminoMsg(object: _183.MsgTimeoutAminoMsg): _183.MsgTimeout;
                    toAminoMsg(message: _183.MsgTimeout): _183.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _183.MsgTimeoutProtoMsg): _183.MsgTimeout;
                    toProto(message: _183.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _183.MsgTimeout): _183.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _183.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgTimeoutResponse;
                    fromPartial(object: Partial<_183.MsgTimeoutResponse>): _183.MsgTimeoutResponse;
                    fromAmino(object: _183.MsgTimeoutResponseAmino): _183.MsgTimeoutResponse;
                    toAmino(message: _183.MsgTimeoutResponse): _183.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _183.MsgTimeoutResponseAminoMsg): _183.MsgTimeoutResponse;
                    toAminoMsg(message: _183.MsgTimeoutResponse): _183.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgTimeoutResponseProtoMsg): _183.MsgTimeoutResponse;
                    toProto(message: _183.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgTimeoutResponse): _183.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _183.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_183.MsgTimeoutOnClose>): _183.MsgTimeoutOnClose;
                    fromAmino(object: _183.MsgTimeoutOnCloseAmino): _183.MsgTimeoutOnClose;
                    toAmino(message: _183.MsgTimeoutOnClose): _183.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _183.MsgTimeoutOnCloseAminoMsg): _183.MsgTimeoutOnClose;
                    toAminoMsg(message: _183.MsgTimeoutOnClose): _183.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _183.MsgTimeoutOnCloseProtoMsg): _183.MsgTimeoutOnClose;
                    toProto(message: _183.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _183.MsgTimeoutOnClose): _183.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _183.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_183.MsgTimeoutOnCloseResponse>): _183.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _183.MsgTimeoutOnCloseResponseAmino): _183.MsgTimeoutOnCloseResponse;
                    toAmino(message: _183.MsgTimeoutOnCloseResponse): _183.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _183.MsgTimeoutOnCloseResponseAminoMsg): _183.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _183.MsgTimeoutOnCloseResponse): _183.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgTimeoutOnCloseResponseProtoMsg): _183.MsgTimeoutOnCloseResponse;
                    toProto(message: _183.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgTimeoutOnCloseResponse): _183.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _183.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgAcknowledgement;
                    fromPartial(object: Partial<_183.MsgAcknowledgement>): _183.MsgAcknowledgement;
                    fromAmino(object: _183.MsgAcknowledgementAmino): _183.MsgAcknowledgement;
                    toAmino(message: _183.MsgAcknowledgement): _183.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _183.MsgAcknowledgementAminoMsg): _183.MsgAcknowledgement;
                    toAminoMsg(message: _183.MsgAcknowledgement): _183.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _183.MsgAcknowledgementProtoMsg): _183.MsgAcknowledgement;
                    toProto(message: _183.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _183.MsgAcknowledgement): _183.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _183.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _183.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_183.MsgAcknowledgementResponse>): _183.MsgAcknowledgementResponse;
                    fromAmino(object: _183.MsgAcknowledgementResponseAmino): _183.MsgAcknowledgementResponse;
                    toAmino(message: _183.MsgAcknowledgementResponse): _183.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _183.MsgAcknowledgementResponseAminoMsg): _183.MsgAcknowledgementResponse;
                    toAminoMsg(message: _183.MsgAcknowledgementResponse): _183.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgAcknowledgementResponseProtoMsg): _183.MsgAcknowledgementResponse;
                    toProto(message: _183.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgAcknowledgementResponse): _183.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelRequest;
                    fromPartial(object: Partial<_182.QueryChannelRequest>): _182.QueryChannelRequest;
                    fromAmino(object: _182.QueryChannelRequestAmino): _182.QueryChannelRequest;
                    toAmino(message: _182.QueryChannelRequest): _182.QueryChannelRequestAmino;
                    fromAminoMsg(object: _182.QueryChannelRequestAminoMsg): _182.QueryChannelRequest;
                    toAminoMsg(message: _182.QueryChannelRequest): _182.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelRequestProtoMsg): _182.QueryChannelRequest;
                    toProto(message: _182.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelRequest): _182.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelResponse;
                    fromPartial(object: Partial<_182.QueryChannelResponse>): _182.QueryChannelResponse;
                    fromAmino(object: _182.QueryChannelResponseAmino): _182.QueryChannelResponse;
                    toAmino(message: _182.QueryChannelResponse): _182.QueryChannelResponseAmino;
                    fromAminoMsg(object: _182.QueryChannelResponseAminoMsg): _182.QueryChannelResponse;
                    toAminoMsg(message: _182.QueryChannelResponse): _182.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelResponseProtoMsg): _182.QueryChannelResponse;
                    toProto(message: _182.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelResponse): _182.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelsRequest;
                    fromPartial(object: Partial<_182.QueryChannelsRequest>): _182.QueryChannelsRequest;
                    fromAmino(object: _182.QueryChannelsRequestAmino): _182.QueryChannelsRequest;
                    toAmino(message: _182.QueryChannelsRequest): _182.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _182.QueryChannelsRequestAminoMsg): _182.QueryChannelsRequest;
                    toAminoMsg(message: _182.QueryChannelsRequest): _182.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelsRequestProtoMsg): _182.QueryChannelsRequest;
                    toProto(message: _182.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelsRequest): _182.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelsResponse;
                    fromPartial(object: Partial<_182.QueryChannelsResponse>): _182.QueryChannelsResponse;
                    fromAmino(object: _182.QueryChannelsResponseAmino): _182.QueryChannelsResponse;
                    toAmino(message: _182.QueryChannelsResponse): _182.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _182.QueryChannelsResponseAminoMsg): _182.QueryChannelsResponse;
                    toAminoMsg(message: _182.QueryChannelsResponse): _182.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelsResponseProtoMsg): _182.QueryChannelsResponse;
                    toProto(message: _182.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelsResponse): _182.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_182.QueryConnectionChannelsRequest>): _182.QueryConnectionChannelsRequest;
                    fromAmino(object: _182.QueryConnectionChannelsRequestAmino): _182.QueryConnectionChannelsRequest;
                    toAmino(message: _182.QueryConnectionChannelsRequest): _182.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _182.QueryConnectionChannelsRequestAminoMsg): _182.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _182.QueryConnectionChannelsRequest): _182.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionChannelsRequestProtoMsg): _182.QueryConnectionChannelsRequest;
                    toProto(message: _182.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionChannelsRequest): _182.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_182.QueryConnectionChannelsResponse>): _182.QueryConnectionChannelsResponse;
                    fromAmino(object: _182.QueryConnectionChannelsResponseAmino): _182.QueryConnectionChannelsResponse;
                    toAmino(message: _182.QueryConnectionChannelsResponse): _182.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _182.QueryConnectionChannelsResponseAminoMsg): _182.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _182.QueryConnectionChannelsResponse): _182.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionChannelsResponseProtoMsg): _182.QueryConnectionChannelsResponse;
                    toProto(message: _182.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionChannelsResponse): _182.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_182.QueryChannelClientStateRequest>): _182.QueryChannelClientStateRequest;
                    fromAmino(object: _182.QueryChannelClientStateRequestAmino): _182.QueryChannelClientStateRequest;
                    toAmino(message: _182.QueryChannelClientStateRequest): _182.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _182.QueryChannelClientStateRequestAminoMsg): _182.QueryChannelClientStateRequest;
                    toAminoMsg(message: _182.QueryChannelClientStateRequest): _182.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelClientStateRequestProtoMsg): _182.QueryChannelClientStateRequest;
                    toProto(message: _182.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelClientStateRequest): _182.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_182.QueryChannelClientStateResponse>): _182.QueryChannelClientStateResponse;
                    fromAmino(object: _182.QueryChannelClientStateResponseAmino): _182.QueryChannelClientStateResponse;
                    toAmino(message: _182.QueryChannelClientStateResponse): _182.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _182.QueryChannelClientStateResponseAminoMsg): _182.QueryChannelClientStateResponse;
                    toAminoMsg(message: _182.QueryChannelClientStateResponse): _182.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelClientStateResponseProtoMsg): _182.QueryChannelClientStateResponse;
                    toProto(message: _182.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelClientStateResponse): _182.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_182.QueryChannelConsensusStateRequest>): _182.QueryChannelConsensusStateRequest;
                    fromAmino(object: _182.QueryChannelConsensusStateRequestAmino): _182.QueryChannelConsensusStateRequest;
                    toAmino(message: _182.QueryChannelConsensusStateRequest): _182.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _182.QueryChannelConsensusStateRequestAminoMsg): _182.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _182.QueryChannelConsensusStateRequest): _182.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelConsensusStateRequestProtoMsg): _182.QueryChannelConsensusStateRequest;
                    toProto(message: _182.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelConsensusStateRequest): _182.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_182.QueryChannelConsensusStateResponse>): _182.QueryChannelConsensusStateResponse;
                    fromAmino(object: _182.QueryChannelConsensusStateResponseAmino): _182.QueryChannelConsensusStateResponse;
                    toAmino(message: _182.QueryChannelConsensusStateResponse): _182.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _182.QueryChannelConsensusStateResponseAminoMsg): _182.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _182.QueryChannelConsensusStateResponse): _182.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryChannelConsensusStateResponseProtoMsg): _182.QueryChannelConsensusStateResponse;
                    toProto(message: _182.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryChannelConsensusStateResponse): _182.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_182.QueryPacketCommitmentRequest>): _182.QueryPacketCommitmentRequest;
                    fromAmino(object: _182.QueryPacketCommitmentRequestAmino): _182.QueryPacketCommitmentRequest;
                    toAmino(message: _182.QueryPacketCommitmentRequest): _182.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _182.QueryPacketCommitmentRequestAminoMsg): _182.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _182.QueryPacketCommitmentRequest): _182.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketCommitmentRequestProtoMsg): _182.QueryPacketCommitmentRequest;
                    toProto(message: _182.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketCommitmentRequest): _182.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_182.QueryPacketCommitmentResponse>): _182.QueryPacketCommitmentResponse;
                    fromAmino(object: _182.QueryPacketCommitmentResponseAmino): _182.QueryPacketCommitmentResponse;
                    toAmino(message: _182.QueryPacketCommitmentResponse): _182.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _182.QueryPacketCommitmentResponseAminoMsg): _182.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _182.QueryPacketCommitmentResponse): _182.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketCommitmentResponseProtoMsg): _182.QueryPacketCommitmentResponse;
                    toProto(message: _182.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketCommitmentResponse): _182.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_182.QueryPacketCommitmentsRequest>): _182.QueryPacketCommitmentsRequest;
                    fromAmino(object: _182.QueryPacketCommitmentsRequestAmino): _182.QueryPacketCommitmentsRequest;
                    toAmino(message: _182.QueryPacketCommitmentsRequest): _182.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _182.QueryPacketCommitmentsRequestAminoMsg): _182.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _182.QueryPacketCommitmentsRequest): _182.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketCommitmentsRequestProtoMsg): _182.QueryPacketCommitmentsRequest;
                    toProto(message: _182.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketCommitmentsRequest): _182.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_182.QueryPacketCommitmentsResponse>): _182.QueryPacketCommitmentsResponse;
                    fromAmino(object: _182.QueryPacketCommitmentsResponseAmino): _182.QueryPacketCommitmentsResponse;
                    toAmino(message: _182.QueryPacketCommitmentsResponse): _182.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _182.QueryPacketCommitmentsResponseAminoMsg): _182.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _182.QueryPacketCommitmentsResponse): _182.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketCommitmentsResponseProtoMsg): _182.QueryPacketCommitmentsResponse;
                    toProto(message: _182.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketCommitmentsResponse): _182.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_182.QueryPacketReceiptRequest>): _182.QueryPacketReceiptRequest;
                    fromAmino(object: _182.QueryPacketReceiptRequestAmino): _182.QueryPacketReceiptRequest;
                    toAmino(message: _182.QueryPacketReceiptRequest): _182.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _182.QueryPacketReceiptRequestAminoMsg): _182.QueryPacketReceiptRequest;
                    toAminoMsg(message: _182.QueryPacketReceiptRequest): _182.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketReceiptRequestProtoMsg): _182.QueryPacketReceiptRequest;
                    toProto(message: _182.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketReceiptRequest): _182.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_182.QueryPacketReceiptResponse>): _182.QueryPacketReceiptResponse;
                    fromAmino(object: _182.QueryPacketReceiptResponseAmino): _182.QueryPacketReceiptResponse;
                    toAmino(message: _182.QueryPacketReceiptResponse): _182.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _182.QueryPacketReceiptResponseAminoMsg): _182.QueryPacketReceiptResponse;
                    toAminoMsg(message: _182.QueryPacketReceiptResponse): _182.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketReceiptResponseProtoMsg): _182.QueryPacketReceiptResponse;
                    toProto(message: _182.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketReceiptResponse): _182.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_182.QueryPacketAcknowledgementRequest>): _182.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _182.QueryPacketAcknowledgementRequestAmino): _182.QueryPacketAcknowledgementRequest;
                    toAmino(message: _182.QueryPacketAcknowledgementRequest): _182.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _182.QueryPacketAcknowledgementRequestAminoMsg): _182.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _182.QueryPacketAcknowledgementRequest): _182.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketAcknowledgementRequestProtoMsg): _182.QueryPacketAcknowledgementRequest;
                    toProto(message: _182.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketAcknowledgementRequest): _182.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_182.QueryPacketAcknowledgementResponse>): _182.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _182.QueryPacketAcknowledgementResponseAmino): _182.QueryPacketAcknowledgementResponse;
                    toAmino(message: _182.QueryPacketAcknowledgementResponse): _182.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _182.QueryPacketAcknowledgementResponseAminoMsg): _182.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _182.QueryPacketAcknowledgementResponse): _182.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketAcknowledgementResponseProtoMsg): _182.QueryPacketAcknowledgementResponse;
                    toProto(message: _182.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketAcknowledgementResponse): _182.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_182.QueryPacketAcknowledgementsRequest>): _182.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _182.QueryPacketAcknowledgementsRequestAmino): _182.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _182.QueryPacketAcknowledgementsRequest): _182.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _182.QueryPacketAcknowledgementsRequestAminoMsg): _182.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _182.QueryPacketAcknowledgementsRequest): _182.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketAcknowledgementsRequestProtoMsg): _182.QueryPacketAcknowledgementsRequest;
                    toProto(message: _182.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketAcknowledgementsRequest): _182.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_182.QueryPacketAcknowledgementsResponse>): _182.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _182.QueryPacketAcknowledgementsResponseAmino): _182.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _182.QueryPacketAcknowledgementsResponse): _182.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _182.QueryPacketAcknowledgementsResponseAminoMsg): _182.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _182.QueryPacketAcknowledgementsResponse): _182.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryPacketAcknowledgementsResponseProtoMsg): _182.QueryPacketAcknowledgementsResponse;
                    toProto(message: _182.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryPacketAcknowledgementsResponse): _182.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_182.QueryUnreceivedPacketsRequest>): _182.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _182.QueryUnreceivedPacketsRequestAmino): _182.QueryUnreceivedPacketsRequest;
                    toAmino(message: _182.QueryUnreceivedPacketsRequest): _182.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _182.QueryUnreceivedPacketsRequestAminoMsg): _182.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _182.QueryUnreceivedPacketsRequest): _182.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryUnreceivedPacketsRequestProtoMsg): _182.QueryUnreceivedPacketsRequest;
                    toProto(message: _182.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryUnreceivedPacketsRequest): _182.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_182.QueryUnreceivedPacketsResponse>): _182.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _182.QueryUnreceivedPacketsResponseAmino): _182.QueryUnreceivedPacketsResponse;
                    toAmino(message: _182.QueryUnreceivedPacketsResponse): _182.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _182.QueryUnreceivedPacketsResponseAminoMsg): _182.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _182.QueryUnreceivedPacketsResponse): _182.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryUnreceivedPacketsResponseProtoMsg): _182.QueryUnreceivedPacketsResponse;
                    toProto(message: _182.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryUnreceivedPacketsResponse): _182.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_182.QueryUnreceivedAcksRequest>): _182.QueryUnreceivedAcksRequest;
                    fromAmino(object: _182.QueryUnreceivedAcksRequestAmino): _182.QueryUnreceivedAcksRequest;
                    toAmino(message: _182.QueryUnreceivedAcksRequest): _182.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _182.QueryUnreceivedAcksRequestAminoMsg): _182.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _182.QueryUnreceivedAcksRequest): _182.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryUnreceivedAcksRequestProtoMsg): _182.QueryUnreceivedAcksRequest;
                    toProto(message: _182.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryUnreceivedAcksRequest): _182.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_182.QueryUnreceivedAcksResponse>): _182.QueryUnreceivedAcksResponse;
                    fromAmino(object: _182.QueryUnreceivedAcksResponseAmino): _182.QueryUnreceivedAcksResponse;
                    toAmino(message: _182.QueryUnreceivedAcksResponse): _182.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _182.QueryUnreceivedAcksResponseAminoMsg): _182.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _182.QueryUnreceivedAcksResponse): _182.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryUnreceivedAcksResponseProtoMsg): _182.QueryUnreceivedAcksResponse;
                    toProto(message: _182.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryUnreceivedAcksResponse): _182.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_182.QueryNextSequenceReceiveRequest>): _182.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _182.QueryNextSequenceReceiveRequestAmino): _182.QueryNextSequenceReceiveRequest;
                    toAmino(message: _182.QueryNextSequenceReceiveRequest): _182.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _182.QueryNextSequenceReceiveRequestAminoMsg): _182.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _182.QueryNextSequenceReceiveRequest): _182.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryNextSequenceReceiveRequestProtoMsg): _182.QueryNextSequenceReceiveRequest;
                    toProto(message: _182.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryNextSequenceReceiveRequest): _182.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _182.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_182.QueryNextSequenceReceiveResponse>): _182.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _182.QueryNextSequenceReceiveResponseAmino): _182.QueryNextSequenceReceiveResponse;
                    toAmino(message: _182.QueryNextSequenceReceiveResponse): _182.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _182.QueryNextSequenceReceiveResponseAminoMsg): _182.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _182.QueryNextSequenceReceiveResponse): _182.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryNextSequenceReceiveResponseProtoMsg): _182.QueryNextSequenceReceiveResponse;
                    toProto(message: _182.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryNextSequenceReceiveResponse): _182.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _181.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.GenesisState;
                    fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
                    fromAmino(object: _181.GenesisStateAmino): _181.GenesisState;
                    toAmino(message: _181.GenesisState): _181.GenesisStateAmino;
                    fromAminoMsg(object: _181.GenesisStateAminoMsg): _181.GenesisState;
                    toAminoMsg(message: _181.GenesisState): _181.GenesisStateAminoMsg;
                    fromProtoMsg(message: _181.GenesisStateProtoMsg): _181.GenesisState;
                    toProto(message: _181.GenesisState): Uint8Array;
                    toProtoMsg(message: _181.GenesisState): _181.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _181.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _181.PacketSequence;
                    fromPartial(object: Partial<_181.PacketSequence>): _181.PacketSequence;
                    fromAmino(object: _181.PacketSequenceAmino): _181.PacketSequence;
                    toAmino(message: _181.PacketSequence): _181.PacketSequenceAmino;
                    fromAminoMsg(object: _181.PacketSequenceAminoMsg): _181.PacketSequence;
                    toAminoMsg(message: _181.PacketSequence): _181.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _181.PacketSequenceProtoMsg): _181.PacketSequence;
                    toProto(message: _181.PacketSequence): Uint8Array;
                    toProtoMsg(message: _181.PacketSequence): _181.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _180.State;
                stateToJSON(object: _180.State): string;
                orderFromJSON(object: any): _180.Order;
                orderToJSON(object: _180.Order): string;
                State: typeof _180.State;
                StateSDKType: typeof _180.State;
                StateAmino: typeof _180.State;
                Order: typeof _180.Order;
                OrderSDKType: typeof _180.Order;
                OrderAmino: typeof _180.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _180.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.Channel;
                    fromPartial(object: Partial<_180.Channel>): _180.Channel;
                    fromAmino(object: _180.ChannelAmino): _180.Channel;
                    toAmino(message: _180.Channel): _180.ChannelAmino;
                    fromAminoMsg(object: _180.ChannelAminoMsg): _180.Channel;
                    toAminoMsg(message: _180.Channel): _180.ChannelAminoMsg;
                    fromProtoMsg(message: _180.ChannelProtoMsg): _180.Channel;
                    toProto(message: _180.Channel): Uint8Array;
                    toProtoMsg(message: _180.Channel): _180.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _180.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.IdentifiedChannel;
                    fromPartial(object: Partial<_180.IdentifiedChannel>): _180.IdentifiedChannel;
                    fromAmino(object: _180.IdentifiedChannelAmino): _180.IdentifiedChannel;
                    toAmino(message: _180.IdentifiedChannel): _180.IdentifiedChannelAmino;
                    fromAminoMsg(object: _180.IdentifiedChannelAminoMsg): _180.IdentifiedChannel;
                    toAminoMsg(message: _180.IdentifiedChannel): _180.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _180.IdentifiedChannelProtoMsg): _180.IdentifiedChannel;
                    toProto(message: _180.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _180.IdentifiedChannel): _180.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _180.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.Counterparty;
                    fromPartial(object: Partial<_180.Counterparty>): _180.Counterparty;
                    fromAmino(object: _180.CounterpartyAmino): _180.Counterparty;
                    toAmino(message: _180.Counterparty): _180.CounterpartyAmino;
                    fromAminoMsg(object: _180.CounterpartyAminoMsg): _180.Counterparty;
                    toAminoMsg(message: _180.Counterparty): _180.CounterpartyAminoMsg;
                    fromProtoMsg(message: _180.CounterpartyProtoMsg): _180.Counterparty;
                    toProto(message: _180.Counterparty): Uint8Array;
                    toProtoMsg(message: _180.Counterparty): _180.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _180.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.Packet;
                    fromPartial(object: Partial<_180.Packet>): _180.Packet;
                    fromAmino(object: _180.PacketAmino): _180.Packet;
                    toAmino(message: _180.Packet): _180.PacketAmino;
                    fromAminoMsg(object: _180.PacketAminoMsg): _180.Packet;
                    toAminoMsg(message: _180.Packet): _180.PacketAminoMsg;
                    fromProtoMsg(message: _180.PacketProtoMsg): _180.Packet;
                    toProto(message: _180.Packet): Uint8Array;
                    toProtoMsg(message: _180.Packet): _180.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _180.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.PacketState;
                    fromPartial(object: Partial<_180.PacketState>): _180.PacketState;
                    fromAmino(object: _180.PacketStateAmino): _180.PacketState;
                    toAmino(message: _180.PacketState): _180.PacketStateAmino;
                    fromAminoMsg(object: _180.PacketStateAminoMsg): _180.PacketState;
                    toAminoMsg(message: _180.PacketState): _180.PacketStateAminoMsg;
                    fromProtoMsg(message: _180.PacketStateProtoMsg): _180.PacketState;
                    toProto(message: _180.PacketState): Uint8Array;
                    toProtoMsg(message: _180.PacketState): _180.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _180.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _180.Acknowledgement;
                    fromPartial(object: Partial<_180.Acknowledgement>): _180.Acknowledgement;
                    fromAmino(object: _180.AcknowledgementAmino): _180.Acknowledgement;
                    toAmino(message: _180.Acknowledgement): _180.AcknowledgementAmino;
                    fromAminoMsg(object: _180.AcknowledgementAminoMsg): _180.Acknowledgement;
                    toAminoMsg(message: _180.Acknowledgement): _180.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _180.AcknowledgementProtoMsg): _180.Acknowledgement;
                    toProto(message: _180.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _180.Acknowledgement): _180.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _329.MsgClientImpl;
                QueryClientImpl: typeof _325.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _186.QueryClientStateRequest): Promise<_186.QueryClientStateResponse>;
                    clientStates(request?: _186.QueryClientStatesRequest): Promise<_186.QueryClientStatesResponse>;
                    consensusState(request: _186.QueryConsensusStateRequest): Promise<_186.QueryConsensusStateResponse>;
                    consensusStates(request: _186.QueryConsensusStatesRequest): Promise<_186.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _186.QueryConsensusStateHeightsRequest): Promise<_186.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _186.QueryClientStatusRequest): Promise<_186.QueryClientStatusResponse>;
                    clientParams(request?: _186.QueryClientParamsRequest): Promise<_186.QueryClientParamsResponse>;
                    upgradedClientState(request?: _186.QueryUpgradedClientStateRequest): Promise<_186.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _186.QueryUpgradedConsensusStateRequest): Promise<_186.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _319.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _187.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _187.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _187.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _187.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _187.MsgCreateClient): {
                            typeUrl: string;
                            value: _187.MsgCreateClient;
                        };
                        updateClient(value: _187.MsgUpdateClient): {
                            typeUrl: string;
                            value: _187.MsgUpdateClient;
                        };
                        upgradeClient(value: _187.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _187.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _187.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _187.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _187.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _187.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _187.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _187.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _187.MsgCreateClient): {
                            typeUrl: string;
                            value: _187.MsgCreateClient;
                        };
                        updateClient(value: _187.MsgUpdateClient): {
                            typeUrl: string;
                            value: _187.MsgUpdateClient;
                        };
                        upgradeClient(value: _187.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _187.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _187.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _187.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _187.MsgCreateClient) => _187.MsgCreateClientAmino;
                        fromAmino: (object: _187.MsgCreateClientAmino) => _187.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _187.MsgUpdateClient) => _187.MsgUpdateClientAmino;
                        fromAmino: (object: _187.MsgUpdateClientAmino) => _187.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _187.MsgUpgradeClient) => _187.MsgUpgradeClientAmino;
                        fromAmino: (object: _187.MsgUpgradeClientAmino) => _187.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _187.MsgSubmitMisbehaviour) => _187.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _187.MsgSubmitMisbehaviourAmino) => _187.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _187.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgCreateClient;
                    fromPartial(object: Partial<_187.MsgCreateClient>): _187.MsgCreateClient;
                    fromAmino(object: _187.MsgCreateClientAmino): _187.MsgCreateClient;
                    toAmino(message: _187.MsgCreateClient): _187.MsgCreateClientAmino;
                    fromAminoMsg(object: _187.MsgCreateClientAminoMsg): _187.MsgCreateClient;
                    toAminoMsg(message: _187.MsgCreateClient): _187.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _187.MsgCreateClientProtoMsg): _187.MsgCreateClient;
                    toProto(message: _187.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _187.MsgCreateClient): _187.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgCreateClientResponse;
                    fromPartial(_: Partial<_187.MsgCreateClientResponse>): _187.MsgCreateClientResponse;
                    fromAmino(_: _187.MsgCreateClientResponseAmino): _187.MsgCreateClientResponse;
                    toAmino(_: _187.MsgCreateClientResponse): _187.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _187.MsgCreateClientResponseAminoMsg): _187.MsgCreateClientResponse;
                    toAminoMsg(message: _187.MsgCreateClientResponse): _187.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgCreateClientResponseProtoMsg): _187.MsgCreateClientResponse;
                    toProto(message: _187.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgCreateClientResponse): _187.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _187.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgUpdateClient;
                    fromPartial(object: Partial<_187.MsgUpdateClient>): _187.MsgUpdateClient;
                    fromAmino(object: _187.MsgUpdateClientAmino): _187.MsgUpdateClient;
                    toAmino(message: _187.MsgUpdateClient): _187.MsgUpdateClientAmino;
                    fromAminoMsg(object: _187.MsgUpdateClientAminoMsg): _187.MsgUpdateClient;
                    toAminoMsg(message: _187.MsgUpdateClient): _187.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _187.MsgUpdateClientProtoMsg): _187.MsgUpdateClient;
                    toProto(message: _187.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _187.MsgUpdateClient): _187.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_187.MsgUpdateClientResponse>): _187.MsgUpdateClientResponse;
                    fromAmino(_: _187.MsgUpdateClientResponseAmino): _187.MsgUpdateClientResponse;
                    toAmino(_: _187.MsgUpdateClientResponse): _187.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _187.MsgUpdateClientResponseAminoMsg): _187.MsgUpdateClientResponse;
                    toAminoMsg(message: _187.MsgUpdateClientResponse): _187.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgUpdateClientResponseProtoMsg): _187.MsgUpdateClientResponse;
                    toProto(message: _187.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgUpdateClientResponse): _187.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _187.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgUpgradeClient;
                    fromPartial(object: Partial<_187.MsgUpgradeClient>): _187.MsgUpgradeClient;
                    fromAmino(object: _187.MsgUpgradeClientAmino): _187.MsgUpgradeClient;
                    toAmino(message: _187.MsgUpgradeClient): _187.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _187.MsgUpgradeClientAminoMsg): _187.MsgUpgradeClient;
                    toAminoMsg(message: _187.MsgUpgradeClient): _187.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _187.MsgUpgradeClientProtoMsg): _187.MsgUpgradeClient;
                    toProto(message: _187.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _187.MsgUpgradeClient): _187.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_187.MsgUpgradeClientResponse>): _187.MsgUpgradeClientResponse;
                    fromAmino(_: _187.MsgUpgradeClientResponseAmino): _187.MsgUpgradeClientResponse;
                    toAmino(_: _187.MsgUpgradeClientResponse): _187.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _187.MsgUpgradeClientResponseAminoMsg): _187.MsgUpgradeClientResponse;
                    toAminoMsg(message: _187.MsgUpgradeClientResponse): _187.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgUpgradeClientResponseProtoMsg): _187.MsgUpgradeClientResponse;
                    toProto(message: _187.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgUpgradeClientResponse): _187.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _187.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _187.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_187.MsgSubmitMisbehaviour>): _187.MsgSubmitMisbehaviour;
                    fromAmino(object: _187.MsgSubmitMisbehaviourAmino): _187.MsgSubmitMisbehaviour;
                    toAmino(message: _187.MsgSubmitMisbehaviour): _187.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _187.MsgSubmitMisbehaviourAminoMsg): _187.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _187.MsgSubmitMisbehaviour): _187.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _187.MsgSubmitMisbehaviourProtoMsg): _187.MsgSubmitMisbehaviour;
                    toProto(message: _187.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _187.MsgSubmitMisbehaviour): _187.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _187.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _187.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_187.MsgSubmitMisbehaviourResponse>): _187.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _187.MsgSubmitMisbehaviourResponseAmino): _187.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _187.MsgSubmitMisbehaviourResponse): _187.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _187.MsgSubmitMisbehaviourResponseAminoMsg): _187.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _187.MsgSubmitMisbehaviourResponse): _187.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _187.MsgSubmitMisbehaviourResponseProtoMsg): _187.MsgSubmitMisbehaviourResponse;
                    toProto(message: _187.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _187.MsgSubmitMisbehaviourResponse): _187.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientStateRequest;
                    fromPartial(object: Partial<_186.QueryClientStateRequest>): _186.QueryClientStateRequest;
                    fromAmino(object: _186.QueryClientStateRequestAmino): _186.QueryClientStateRequest;
                    toAmino(message: _186.QueryClientStateRequest): _186.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _186.QueryClientStateRequestAminoMsg): _186.QueryClientStateRequest;
                    toAminoMsg(message: _186.QueryClientStateRequest): _186.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryClientStateRequestProtoMsg): _186.QueryClientStateRequest;
                    toProto(message: _186.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryClientStateRequest): _186.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientStateResponse;
                    fromPartial(object: Partial<_186.QueryClientStateResponse>): _186.QueryClientStateResponse;
                    fromAmino(object: _186.QueryClientStateResponseAmino): _186.QueryClientStateResponse;
                    toAmino(message: _186.QueryClientStateResponse): _186.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _186.QueryClientStateResponseAminoMsg): _186.QueryClientStateResponse;
                    toAminoMsg(message: _186.QueryClientStateResponse): _186.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryClientStateResponseProtoMsg): _186.QueryClientStateResponse;
                    toProto(message: _186.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryClientStateResponse): _186.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientStatesRequest;
                    fromPartial(object: Partial<_186.QueryClientStatesRequest>): _186.QueryClientStatesRequest;
                    fromAmino(object: _186.QueryClientStatesRequestAmino): _186.QueryClientStatesRequest;
                    toAmino(message: _186.QueryClientStatesRequest): _186.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _186.QueryClientStatesRequestAminoMsg): _186.QueryClientStatesRequest;
                    toAminoMsg(message: _186.QueryClientStatesRequest): _186.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryClientStatesRequestProtoMsg): _186.QueryClientStatesRequest;
                    toProto(message: _186.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryClientStatesRequest): _186.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientStatesResponse;
                    fromPartial(object: Partial<_186.QueryClientStatesResponse>): _186.QueryClientStatesResponse;
                    fromAmino(object: _186.QueryClientStatesResponseAmino): _186.QueryClientStatesResponse;
                    toAmino(message: _186.QueryClientStatesResponse): _186.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _186.QueryClientStatesResponseAminoMsg): _186.QueryClientStatesResponse;
                    toAminoMsg(message: _186.QueryClientStatesResponse): _186.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryClientStatesResponseProtoMsg): _186.QueryClientStatesResponse;
                    toProto(message: _186.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryClientStatesResponse): _186.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_186.QueryConsensusStateRequest>): _186.QueryConsensusStateRequest;
                    fromAmino(object: _186.QueryConsensusStateRequestAmino): _186.QueryConsensusStateRequest;
                    toAmino(message: _186.QueryConsensusStateRequest): _186.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _186.QueryConsensusStateRequestAminoMsg): _186.QueryConsensusStateRequest;
                    toAminoMsg(message: _186.QueryConsensusStateRequest): _186.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryConsensusStateRequestProtoMsg): _186.QueryConsensusStateRequest;
                    toProto(message: _186.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryConsensusStateRequest): _186.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_186.QueryConsensusStateResponse>): _186.QueryConsensusStateResponse;
                    fromAmino(object: _186.QueryConsensusStateResponseAmino): _186.QueryConsensusStateResponse;
                    toAmino(message: _186.QueryConsensusStateResponse): _186.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _186.QueryConsensusStateResponseAminoMsg): _186.QueryConsensusStateResponse;
                    toAminoMsg(message: _186.QueryConsensusStateResponse): _186.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryConsensusStateResponseProtoMsg): _186.QueryConsensusStateResponse;
                    toProto(message: _186.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryConsensusStateResponse): _186.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_186.QueryConsensusStatesRequest>): _186.QueryConsensusStatesRequest;
                    fromAmino(object: _186.QueryConsensusStatesRequestAmino): _186.QueryConsensusStatesRequest;
                    toAmino(message: _186.QueryConsensusStatesRequest): _186.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _186.QueryConsensusStatesRequestAminoMsg): _186.QueryConsensusStatesRequest;
                    toAminoMsg(message: _186.QueryConsensusStatesRequest): _186.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryConsensusStatesRequestProtoMsg): _186.QueryConsensusStatesRequest;
                    toProto(message: _186.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryConsensusStatesRequest): _186.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_186.QueryConsensusStatesResponse>): _186.QueryConsensusStatesResponse;
                    fromAmino(object: _186.QueryConsensusStatesResponseAmino): _186.QueryConsensusStatesResponse;
                    toAmino(message: _186.QueryConsensusStatesResponse): _186.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _186.QueryConsensusStatesResponseAminoMsg): _186.QueryConsensusStatesResponse;
                    toAminoMsg(message: _186.QueryConsensusStatesResponse): _186.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryConsensusStatesResponseProtoMsg): _186.QueryConsensusStatesResponse;
                    toProto(message: _186.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryConsensusStatesResponse): _186.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_186.QueryConsensusStateHeightsRequest>): _186.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _186.QueryConsensusStateHeightsRequestAmino): _186.QueryConsensusStateHeightsRequest;
                    toAmino(message: _186.QueryConsensusStateHeightsRequest): _186.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _186.QueryConsensusStateHeightsRequestAminoMsg): _186.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _186.QueryConsensusStateHeightsRequest): _186.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryConsensusStateHeightsRequestProtoMsg): _186.QueryConsensusStateHeightsRequest;
                    toProto(message: _186.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryConsensusStateHeightsRequest): _186.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_186.QueryConsensusStateHeightsResponse>): _186.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _186.QueryConsensusStateHeightsResponseAmino): _186.QueryConsensusStateHeightsResponse;
                    toAmino(message: _186.QueryConsensusStateHeightsResponse): _186.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _186.QueryConsensusStateHeightsResponseAminoMsg): _186.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _186.QueryConsensusStateHeightsResponse): _186.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryConsensusStateHeightsResponseProtoMsg): _186.QueryConsensusStateHeightsResponse;
                    toProto(message: _186.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryConsensusStateHeightsResponse): _186.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _186.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientStatusRequest;
                    fromPartial(object: Partial<_186.QueryClientStatusRequest>): _186.QueryClientStatusRequest;
                    fromAmino(object: _186.QueryClientStatusRequestAmino): _186.QueryClientStatusRequest;
                    toAmino(message: _186.QueryClientStatusRequest): _186.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _186.QueryClientStatusRequestAminoMsg): _186.QueryClientStatusRequest;
                    toAminoMsg(message: _186.QueryClientStatusRequest): _186.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryClientStatusRequestProtoMsg): _186.QueryClientStatusRequest;
                    toProto(message: _186.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryClientStatusRequest): _186.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientStatusResponse;
                    fromPartial(object: Partial<_186.QueryClientStatusResponse>): _186.QueryClientStatusResponse;
                    fromAmino(object: _186.QueryClientStatusResponseAmino): _186.QueryClientStatusResponse;
                    toAmino(message: _186.QueryClientStatusResponse): _186.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _186.QueryClientStatusResponseAminoMsg): _186.QueryClientStatusResponse;
                    toAminoMsg(message: _186.QueryClientStatusResponse): _186.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryClientStatusResponseProtoMsg): _186.QueryClientStatusResponse;
                    toProto(message: _186.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryClientStatusResponse): _186.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _186.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _186.QueryClientParamsRequest;
                    fromPartial(_: Partial<_186.QueryClientParamsRequest>): _186.QueryClientParamsRequest;
                    fromAmino(_: _186.QueryClientParamsRequestAmino): _186.QueryClientParamsRequest;
                    toAmino(_: _186.QueryClientParamsRequest): _186.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _186.QueryClientParamsRequestAminoMsg): _186.QueryClientParamsRequest;
                    toAminoMsg(message: _186.QueryClientParamsRequest): _186.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryClientParamsRequestProtoMsg): _186.QueryClientParamsRequest;
                    toProto(message: _186.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryClientParamsRequest): _186.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryClientParamsResponse;
                    fromPartial(object: Partial<_186.QueryClientParamsResponse>): _186.QueryClientParamsResponse;
                    fromAmino(object: _186.QueryClientParamsResponseAmino): _186.QueryClientParamsResponse;
                    toAmino(message: _186.QueryClientParamsResponse): _186.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _186.QueryClientParamsResponseAminoMsg): _186.QueryClientParamsResponse;
                    toAminoMsg(message: _186.QueryClientParamsResponse): _186.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryClientParamsResponseProtoMsg): _186.QueryClientParamsResponse;
                    toProto(message: _186.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryClientParamsResponse): _186.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _186.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _186.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_186.QueryUpgradedClientStateRequest>): _186.QueryUpgradedClientStateRequest;
                    fromAmino(_: _186.QueryUpgradedClientStateRequestAmino): _186.QueryUpgradedClientStateRequest;
                    toAmino(_: _186.QueryUpgradedClientStateRequest): _186.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _186.QueryUpgradedClientStateRequestAminoMsg): _186.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _186.QueryUpgradedClientStateRequest): _186.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryUpgradedClientStateRequestProtoMsg): _186.QueryUpgradedClientStateRequest;
                    toProto(message: _186.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryUpgradedClientStateRequest): _186.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_186.QueryUpgradedClientStateResponse>): _186.QueryUpgradedClientStateResponse;
                    fromAmino(object: _186.QueryUpgradedClientStateResponseAmino): _186.QueryUpgradedClientStateResponse;
                    toAmino(message: _186.QueryUpgradedClientStateResponse): _186.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _186.QueryUpgradedClientStateResponseAminoMsg): _186.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _186.QueryUpgradedClientStateResponse): _186.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryUpgradedClientStateResponseProtoMsg): _186.QueryUpgradedClientStateResponse;
                    toProto(message: _186.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryUpgradedClientStateResponse): _186.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _186.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _186.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_186.QueryUpgradedConsensusStateRequest>): _186.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _186.QueryUpgradedConsensusStateRequestAmino): _186.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _186.QueryUpgradedConsensusStateRequest): _186.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _186.QueryUpgradedConsensusStateRequestAminoMsg): _186.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _186.QueryUpgradedConsensusStateRequest): _186.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _186.QueryUpgradedConsensusStateRequestProtoMsg): _186.QueryUpgradedConsensusStateRequest;
                    toProto(message: _186.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _186.QueryUpgradedConsensusStateRequest): _186.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _186.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _186.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_186.QueryUpgradedConsensusStateResponse>): _186.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _186.QueryUpgradedConsensusStateResponseAmino): _186.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _186.QueryUpgradedConsensusStateResponse): _186.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _186.QueryUpgradedConsensusStateResponseAminoMsg): _186.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _186.QueryUpgradedConsensusStateResponse): _186.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _186.QueryUpgradedConsensusStateResponseProtoMsg): _186.QueryUpgradedConsensusStateResponse;
                    toProto(message: _186.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _186.QueryUpgradedConsensusStateResponse): _186.QueryUpgradedConsensusStateResponseProtoMsg;
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
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _185.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _185.GenesisMetadata;
                    fromPartial(object: Partial<_185.GenesisMetadata>): _185.GenesisMetadata;
                    fromAmino(object: _185.GenesisMetadataAmino): _185.GenesisMetadata;
                    toAmino(message: _185.GenesisMetadata): _185.GenesisMetadataAmino;
                    fromAminoMsg(object: _185.GenesisMetadataAminoMsg): _185.GenesisMetadata;
                    toAminoMsg(message: _185.GenesisMetadata): _185.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _185.GenesisMetadataProtoMsg): _185.GenesisMetadata;
                    toProto(message: _185.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _185.GenesisMetadata): _185.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _185.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _185.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_185.IdentifiedGenesisMetadata>): _185.IdentifiedGenesisMetadata;
                    fromAmino(object: _185.IdentifiedGenesisMetadataAmino): _185.IdentifiedGenesisMetadata;
                    toAmino(message: _185.IdentifiedGenesisMetadata): _185.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _185.IdentifiedGenesisMetadataAminoMsg): _185.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _185.IdentifiedGenesisMetadata): _185.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _185.IdentifiedGenesisMetadataProtoMsg): _185.IdentifiedGenesisMetadata;
                    toProto(message: _185.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _185.IdentifiedGenesisMetadata): _185.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _184.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.IdentifiedClientState;
                    fromPartial(object: Partial<_184.IdentifiedClientState>): _184.IdentifiedClientState;
                    fromAmino(object: _184.IdentifiedClientStateAmino): _184.IdentifiedClientState;
                    toAmino(message: _184.IdentifiedClientState): _184.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _184.IdentifiedClientStateAminoMsg): _184.IdentifiedClientState;
                    toAminoMsg(message: _184.IdentifiedClientState): _184.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _184.IdentifiedClientStateProtoMsg): _184.IdentifiedClientState;
                    toProto(message: _184.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _184.IdentifiedClientState): _184.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _184.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_184.ConsensusStateWithHeight>): _184.ConsensusStateWithHeight;
                    fromAmino(object: _184.ConsensusStateWithHeightAmino): _184.ConsensusStateWithHeight;
                    toAmino(message: _184.ConsensusStateWithHeight): _184.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _184.ConsensusStateWithHeightAminoMsg): _184.ConsensusStateWithHeight;
                    toAminoMsg(message: _184.ConsensusStateWithHeight): _184.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _184.ConsensusStateWithHeightProtoMsg): _184.ConsensusStateWithHeight;
                    toProto(message: _184.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _184.ConsensusStateWithHeight): _184.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _184.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.ClientConsensusStates;
                    fromPartial(object: Partial<_184.ClientConsensusStates>): _184.ClientConsensusStates;
                    fromAmino(object: _184.ClientConsensusStatesAmino): _184.ClientConsensusStates;
                    toAmino(message: _184.ClientConsensusStates): _184.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _184.ClientConsensusStatesAminoMsg): _184.ClientConsensusStates;
                    toAminoMsg(message: _184.ClientConsensusStates): _184.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _184.ClientConsensusStatesProtoMsg): _184.ClientConsensusStates;
                    toProto(message: _184.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _184.ClientConsensusStates): _184.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _184.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.ClientUpdateProposal;
                    fromPartial(object: Partial<_184.ClientUpdateProposal>): _184.ClientUpdateProposal;
                    fromAmino(object: _184.ClientUpdateProposalAmino): _184.ClientUpdateProposal;
                    toAmino(message: _184.ClientUpdateProposal): _184.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _184.ClientUpdateProposalAminoMsg): _184.ClientUpdateProposal;
                    toAminoMsg(message: _184.ClientUpdateProposal): _184.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _184.ClientUpdateProposalProtoMsg): _184.ClientUpdateProposal;
                    toProto(message: _184.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _184.ClientUpdateProposal): _184.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _184.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.UpgradeProposal;
                    fromPartial(object: Partial<_184.UpgradeProposal>): _184.UpgradeProposal;
                    fromAmino(object: _184.UpgradeProposalAmino): _184.UpgradeProposal;
                    toAmino(message: _184.UpgradeProposal): _184.UpgradeProposalAmino;
                    fromAminoMsg(object: _184.UpgradeProposalAminoMsg): _184.UpgradeProposal;
                    toAminoMsg(message: _184.UpgradeProposal): _184.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _184.UpgradeProposalProtoMsg): _184.UpgradeProposal;
                    toProto(message: _184.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _184.UpgradeProposal): _184.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _184.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _184.Height;
                    fromPartial(object: Partial<_184.Height>): _184.Height;
                    fromAmino(object: _184.HeightAmino): _184.Height;
                    toAmino(message: _184.Height): _184.HeightAmino;
                    fromAminoMsg(object: _184.HeightAminoMsg): _184.Height;
                    toAminoMsg(message: _184.Height): _184.HeightAminoMsg;
                    fromProtoMsg(message: _184.HeightProtoMsg): _184.Height;
                    toProto(message: _184.Height): Uint8Array;
                    toProtoMsg(message: _184.Height): _184.HeightProtoMsg;
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
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _188.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.MerkleRoot;
                    fromPartial(object: Partial<_188.MerkleRoot>): _188.MerkleRoot;
                    fromAmino(object: _188.MerkleRootAmino): _188.MerkleRoot;
                    toAmino(message: _188.MerkleRoot): _188.MerkleRootAmino;
                    fromAminoMsg(object: _188.MerkleRootAminoMsg): _188.MerkleRoot;
                    toAminoMsg(message: _188.MerkleRoot): _188.MerkleRootAminoMsg;
                    fromProtoMsg(message: _188.MerkleRootProtoMsg): _188.MerkleRoot;
                    toProto(message: _188.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _188.MerkleRoot): _188.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _188.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.MerklePrefix;
                    fromPartial(object: Partial<_188.MerklePrefix>): _188.MerklePrefix;
                    fromAmino(object: _188.MerklePrefixAmino): _188.MerklePrefix;
                    toAmino(message: _188.MerklePrefix): _188.MerklePrefixAmino;
                    fromAminoMsg(object: _188.MerklePrefixAminoMsg): _188.MerklePrefix;
                    toAminoMsg(message: _188.MerklePrefix): _188.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _188.MerklePrefixProtoMsg): _188.MerklePrefix;
                    toProto(message: _188.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _188.MerklePrefix): _188.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _188.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.MerklePath;
                    fromPartial(object: Partial<_188.MerklePath>): _188.MerklePath;
                    fromAmino(object: _188.MerklePathAmino): _188.MerklePath;
                    toAmino(message: _188.MerklePath): _188.MerklePathAmino;
                    fromAminoMsg(object: _188.MerklePathAminoMsg): _188.MerklePath;
                    toAminoMsg(message: _188.MerklePath): _188.MerklePathAminoMsg;
                    fromProtoMsg(message: _188.MerklePathProtoMsg): _188.MerklePath;
                    toProto(message: _188.MerklePath): Uint8Array;
                    toProtoMsg(message: _188.MerklePath): _188.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _188.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _188.MerkleProof;
                    fromPartial(object: Partial<_188.MerkleProof>): _188.MerkleProof;
                    fromAmino(object: _188.MerkleProofAmino): _188.MerkleProof;
                    toAmino(message: _188.MerkleProof): _188.MerkleProofAmino;
                    fromAminoMsg(object: _188.MerkleProofAminoMsg): _188.MerkleProof;
                    toAminoMsg(message: _188.MerkleProof): _188.MerkleProofAminoMsg;
                    fromProtoMsg(message: _188.MerkleProofProtoMsg): _188.MerkleProof;
                    toProto(message: _188.MerkleProof): Uint8Array;
                    toProtoMsg(message: _188.MerkleProof): _188.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _330.MsgClientImpl;
                QueryClientImpl: typeof _326.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _191.QueryConnectionRequest): Promise<_191.QueryConnectionResponse>;
                    connections(request?: _191.QueryConnectionsRequest): Promise<_191.QueryConnectionsResponse>;
                    clientConnections(request: _191.QueryClientConnectionsRequest): Promise<_191.QueryClientConnectionsResponse>;
                    connectionClientState(request: _191.QueryConnectionClientStateRequest): Promise<_191.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _191.QueryConnectionConsensusStateRequest): Promise<_191.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _320.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _192.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _192.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _192.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _192.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _192.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _192.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _192.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _192.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _192.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _192.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _192.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _192.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _192.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _192.MsgConnectionOpenInit) => _192.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _192.MsgConnectionOpenInitAmino) => _192.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _192.MsgConnectionOpenTry) => _192.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _192.MsgConnectionOpenTryAmino) => _192.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _192.MsgConnectionOpenAck) => _192.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _192.MsgConnectionOpenAckAmino) => _192.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _192.MsgConnectionOpenConfirm) => _192.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _192.MsgConnectionOpenConfirmAmino) => _192.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _192.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_192.MsgConnectionOpenInit>): _192.MsgConnectionOpenInit;
                    fromAmino(object: _192.MsgConnectionOpenInitAmino): _192.MsgConnectionOpenInit;
                    toAmino(message: _192.MsgConnectionOpenInit): _192.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenInitAminoMsg): _192.MsgConnectionOpenInit;
                    toAminoMsg(message: _192.MsgConnectionOpenInit): _192.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenInitProtoMsg): _192.MsgConnectionOpenInit;
                    toProto(message: _192.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenInit): _192.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_192.MsgConnectionOpenInitResponse>): _192.MsgConnectionOpenInitResponse;
                    fromAmino(_: _192.MsgConnectionOpenInitResponseAmino): _192.MsgConnectionOpenInitResponse;
                    toAmino(_: _192.MsgConnectionOpenInitResponse): _192.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenInitResponseAminoMsg): _192.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _192.MsgConnectionOpenInitResponse): _192.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenInitResponseProtoMsg): _192.MsgConnectionOpenInitResponse;
                    toProto(message: _192.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenInitResponse): _192.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _192.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_192.MsgConnectionOpenTry>): _192.MsgConnectionOpenTry;
                    fromAmino(object: _192.MsgConnectionOpenTryAmino): _192.MsgConnectionOpenTry;
                    toAmino(message: _192.MsgConnectionOpenTry): _192.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenTryAminoMsg): _192.MsgConnectionOpenTry;
                    toAminoMsg(message: _192.MsgConnectionOpenTry): _192.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenTryProtoMsg): _192.MsgConnectionOpenTry;
                    toProto(message: _192.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenTry): _192.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_192.MsgConnectionOpenTryResponse>): _192.MsgConnectionOpenTryResponse;
                    fromAmino(_: _192.MsgConnectionOpenTryResponseAmino): _192.MsgConnectionOpenTryResponse;
                    toAmino(_: _192.MsgConnectionOpenTryResponse): _192.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenTryResponseAminoMsg): _192.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _192.MsgConnectionOpenTryResponse): _192.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenTryResponseProtoMsg): _192.MsgConnectionOpenTryResponse;
                    toProto(message: _192.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenTryResponse): _192.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _192.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_192.MsgConnectionOpenAck>): _192.MsgConnectionOpenAck;
                    fromAmino(object: _192.MsgConnectionOpenAckAmino): _192.MsgConnectionOpenAck;
                    toAmino(message: _192.MsgConnectionOpenAck): _192.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenAckAminoMsg): _192.MsgConnectionOpenAck;
                    toAminoMsg(message: _192.MsgConnectionOpenAck): _192.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenAckProtoMsg): _192.MsgConnectionOpenAck;
                    toProto(message: _192.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenAck): _192.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_192.MsgConnectionOpenAckResponse>): _192.MsgConnectionOpenAckResponse;
                    fromAmino(_: _192.MsgConnectionOpenAckResponseAmino): _192.MsgConnectionOpenAckResponse;
                    toAmino(_: _192.MsgConnectionOpenAckResponse): _192.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenAckResponseAminoMsg): _192.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _192.MsgConnectionOpenAckResponse): _192.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenAckResponseProtoMsg): _192.MsgConnectionOpenAckResponse;
                    toProto(message: _192.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenAckResponse): _192.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _192.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _192.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_192.MsgConnectionOpenConfirm>): _192.MsgConnectionOpenConfirm;
                    fromAmino(object: _192.MsgConnectionOpenConfirmAmino): _192.MsgConnectionOpenConfirm;
                    toAmino(message: _192.MsgConnectionOpenConfirm): _192.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenConfirmAminoMsg): _192.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _192.MsgConnectionOpenConfirm): _192.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenConfirmProtoMsg): _192.MsgConnectionOpenConfirm;
                    toProto(message: _192.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenConfirm): _192.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _192.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _192.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_192.MsgConnectionOpenConfirmResponse>): _192.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _192.MsgConnectionOpenConfirmResponseAmino): _192.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _192.MsgConnectionOpenConfirmResponse): _192.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _192.MsgConnectionOpenConfirmResponseAminoMsg): _192.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _192.MsgConnectionOpenConfirmResponse): _192.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _192.MsgConnectionOpenConfirmResponseProtoMsg): _192.MsgConnectionOpenConfirmResponse;
                    toProto(message: _192.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _192.MsgConnectionOpenConfirmResponse): _192.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionRequest;
                    fromPartial(object: Partial<_191.QueryConnectionRequest>): _191.QueryConnectionRequest;
                    fromAmino(object: _191.QueryConnectionRequestAmino): _191.QueryConnectionRequest;
                    toAmino(message: _191.QueryConnectionRequest): _191.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _191.QueryConnectionRequestAminoMsg): _191.QueryConnectionRequest;
                    toAminoMsg(message: _191.QueryConnectionRequest): _191.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionRequestProtoMsg): _191.QueryConnectionRequest;
                    toProto(message: _191.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionRequest): _191.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionResponse;
                    fromPartial(object: Partial<_191.QueryConnectionResponse>): _191.QueryConnectionResponse;
                    fromAmino(object: _191.QueryConnectionResponseAmino): _191.QueryConnectionResponse;
                    toAmino(message: _191.QueryConnectionResponse): _191.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _191.QueryConnectionResponseAminoMsg): _191.QueryConnectionResponse;
                    toAminoMsg(message: _191.QueryConnectionResponse): _191.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionResponseProtoMsg): _191.QueryConnectionResponse;
                    toProto(message: _191.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionResponse): _191.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionsRequest;
                    fromPartial(object: Partial<_191.QueryConnectionsRequest>): _191.QueryConnectionsRequest;
                    fromAmino(object: _191.QueryConnectionsRequestAmino): _191.QueryConnectionsRequest;
                    toAmino(message: _191.QueryConnectionsRequest): _191.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _191.QueryConnectionsRequestAminoMsg): _191.QueryConnectionsRequest;
                    toAminoMsg(message: _191.QueryConnectionsRequest): _191.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionsRequestProtoMsg): _191.QueryConnectionsRequest;
                    toProto(message: _191.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionsRequest): _191.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionsResponse;
                    fromPartial(object: Partial<_191.QueryConnectionsResponse>): _191.QueryConnectionsResponse;
                    fromAmino(object: _191.QueryConnectionsResponseAmino): _191.QueryConnectionsResponse;
                    toAmino(message: _191.QueryConnectionsResponse): _191.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _191.QueryConnectionsResponseAminoMsg): _191.QueryConnectionsResponse;
                    toAminoMsg(message: _191.QueryConnectionsResponse): _191.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionsResponseProtoMsg): _191.QueryConnectionsResponse;
                    toProto(message: _191.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionsResponse): _191.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_191.QueryClientConnectionsRequest>): _191.QueryClientConnectionsRequest;
                    fromAmino(object: _191.QueryClientConnectionsRequestAmino): _191.QueryClientConnectionsRequest;
                    toAmino(message: _191.QueryClientConnectionsRequest): _191.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _191.QueryClientConnectionsRequestAminoMsg): _191.QueryClientConnectionsRequest;
                    toAminoMsg(message: _191.QueryClientConnectionsRequest): _191.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryClientConnectionsRequestProtoMsg): _191.QueryClientConnectionsRequest;
                    toProto(message: _191.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryClientConnectionsRequest): _191.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_191.QueryClientConnectionsResponse>): _191.QueryClientConnectionsResponse;
                    fromAmino(object: _191.QueryClientConnectionsResponseAmino): _191.QueryClientConnectionsResponse;
                    toAmino(message: _191.QueryClientConnectionsResponse): _191.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _191.QueryClientConnectionsResponseAminoMsg): _191.QueryClientConnectionsResponse;
                    toAminoMsg(message: _191.QueryClientConnectionsResponse): _191.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryClientConnectionsResponseProtoMsg): _191.QueryClientConnectionsResponse;
                    toProto(message: _191.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryClientConnectionsResponse): _191.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_191.QueryConnectionClientStateRequest>): _191.QueryConnectionClientStateRequest;
                    fromAmino(object: _191.QueryConnectionClientStateRequestAmino): _191.QueryConnectionClientStateRequest;
                    toAmino(message: _191.QueryConnectionClientStateRequest): _191.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _191.QueryConnectionClientStateRequestAminoMsg): _191.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _191.QueryConnectionClientStateRequest): _191.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionClientStateRequestProtoMsg): _191.QueryConnectionClientStateRequest;
                    toProto(message: _191.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionClientStateRequest): _191.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_191.QueryConnectionClientStateResponse>): _191.QueryConnectionClientStateResponse;
                    fromAmino(object: _191.QueryConnectionClientStateResponseAmino): _191.QueryConnectionClientStateResponse;
                    toAmino(message: _191.QueryConnectionClientStateResponse): _191.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _191.QueryConnectionClientStateResponseAminoMsg): _191.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _191.QueryConnectionClientStateResponse): _191.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionClientStateResponseProtoMsg): _191.QueryConnectionClientStateResponse;
                    toProto(message: _191.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionClientStateResponse): _191.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_191.QueryConnectionConsensusStateRequest>): _191.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _191.QueryConnectionConsensusStateRequestAmino): _191.QueryConnectionConsensusStateRequest;
                    toAmino(message: _191.QueryConnectionConsensusStateRequest): _191.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _191.QueryConnectionConsensusStateRequestAminoMsg): _191.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _191.QueryConnectionConsensusStateRequest): _191.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionConsensusStateRequestProtoMsg): _191.QueryConnectionConsensusStateRequest;
                    toProto(message: _191.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionConsensusStateRequest): _191.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _191.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _191.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_191.QueryConnectionConsensusStateResponse>): _191.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _191.QueryConnectionConsensusStateResponseAmino): _191.QueryConnectionConsensusStateResponse;
                    toAmino(message: _191.QueryConnectionConsensusStateResponse): _191.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _191.QueryConnectionConsensusStateResponseAminoMsg): _191.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _191.QueryConnectionConsensusStateResponse): _191.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _191.QueryConnectionConsensusStateResponseProtoMsg): _191.QueryConnectionConsensusStateResponse;
                    toProto(message: _191.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _191.QueryConnectionConsensusStateResponse): _191.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _190.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _190.GenesisState;
                    fromPartial(object: Partial<_190.GenesisState>): _190.GenesisState;
                    fromAmino(object: _190.GenesisStateAmino): _190.GenesisState;
                    toAmino(message: _190.GenesisState): _190.GenesisStateAmino;
                    fromAminoMsg(object: _190.GenesisStateAminoMsg): _190.GenesisState;
                    toAminoMsg(message: _190.GenesisState): _190.GenesisStateAminoMsg;
                    fromProtoMsg(message: _190.GenesisStateProtoMsg): _190.GenesisState;
                    toProto(message: _190.GenesisState): Uint8Array;
                    toProtoMsg(message: _190.GenesisState): _190.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _189.State;
                stateToJSON(object: _189.State): string;
                State: typeof _189.State;
                StateSDKType: typeof _189.State;
                StateAmino: typeof _189.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _189.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.ConnectionEnd;
                    fromPartial(object: Partial<_189.ConnectionEnd>): _189.ConnectionEnd;
                    fromAmino(object: _189.ConnectionEndAmino): _189.ConnectionEnd;
                    toAmino(message: _189.ConnectionEnd): _189.ConnectionEndAmino;
                    fromAminoMsg(object: _189.ConnectionEndAminoMsg): _189.ConnectionEnd;
                    toAminoMsg(message: _189.ConnectionEnd): _189.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _189.ConnectionEndProtoMsg): _189.ConnectionEnd;
                    toProto(message: _189.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _189.ConnectionEnd): _189.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _189.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.IdentifiedConnection;
                    fromPartial(object: Partial<_189.IdentifiedConnection>): _189.IdentifiedConnection;
                    fromAmino(object: _189.IdentifiedConnectionAmino): _189.IdentifiedConnection;
                    toAmino(message: _189.IdentifiedConnection): _189.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _189.IdentifiedConnectionAminoMsg): _189.IdentifiedConnection;
                    toAminoMsg(message: _189.IdentifiedConnection): _189.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _189.IdentifiedConnectionProtoMsg): _189.IdentifiedConnection;
                    toProto(message: _189.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _189.IdentifiedConnection): _189.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _189.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.Counterparty;
                    fromPartial(object: Partial<_189.Counterparty>): _189.Counterparty;
                    fromAmino(object: _189.CounterpartyAmino): _189.Counterparty;
                    toAmino(message: _189.Counterparty): _189.CounterpartyAmino;
                    fromAminoMsg(object: _189.CounterpartyAminoMsg): _189.Counterparty;
                    toAminoMsg(message: _189.Counterparty): _189.CounterpartyAminoMsg;
                    fromProtoMsg(message: _189.CounterpartyProtoMsg): _189.Counterparty;
                    toProto(message: _189.Counterparty): Uint8Array;
                    toProtoMsg(message: _189.Counterparty): _189.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _189.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.ClientPaths;
                    fromPartial(object: Partial<_189.ClientPaths>): _189.ClientPaths;
                    fromAmino(object: _189.ClientPathsAmino): _189.ClientPaths;
                    toAmino(message: _189.ClientPaths): _189.ClientPathsAmino;
                    fromAminoMsg(object: _189.ClientPathsAminoMsg): _189.ClientPaths;
                    toAminoMsg(message: _189.ClientPaths): _189.ClientPathsAminoMsg;
                    fromProtoMsg(message: _189.ClientPathsProtoMsg): _189.ClientPaths;
                    toProto(message: _189.ClientPaths): Uint8Array;
                    toProtoMsg(message: _189.ClientPaths): _189.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _189.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.ConnectionPaths;
                    fromPartial(object: Partial<_189.ConnectionPaths>): _189.ConnectionPaths;
                    fromAmino(object: _189.ConnectionPathsAmino): _189.ConnectionPaths;
                    toAmino(message: _189.ConnectionPaths): _189.ConnectionPathsAmino;
                    fromAminoMsg(object: _189.ConnectionPathsAminoMsg): _189.ConnectionPaths;
                    toAminoMsg(message: _189.ConnectionPaths): _189.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _189.ConnectionPathsProtoMsg): _189.ConnectionPaths;
                    toProto(message: _189.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _189.ConnectionPaths): _189.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _189.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.Version;
                    fromPartial(object: Partial<_189.Version>): _189.Version;
                    fromAmino(object: _189.VersionAmino): _189.Version;
                    toAmino(message: _189.Version): _189.VersionAmino;
                    fromAminoMsg(object: _189.VersionAminoMsg): _189.Version;
                    toAminoMsg(message: _189.Version): _189.VersionAminoMsg;
                    fromProtoMsg(message: _189.VersionProtoMsg): _189.Version;
                    toProto(message: _189.Version): Uint8Array;
                    toProtoMsg(message: _189.Version): _189.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _189.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _189.Params;
                    fromPartial(object: Partial<_189.Params>): _189.Params;
                    fromAmino(object: _189.ParamsAmino): _189.Params;
                    toAmino(message: _189.Params): _189.ParamsAmino;
                    fromAminoMsg(object: _189.ParamsAminoMsg): _189.Params;
                    toAminoMsg(message: _189.Params): _189.ParamsAminoMsg;
                    fromProtoMsg(message: _189.ParamsProtoMsg): _189.Params;
                    toProto(message: _189.Params): Uint8Array;
                    toProtoMsg(message: _189.Params): _189.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _193.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _193.GenesisState;
                    fromPartial(object: Partial<_193.GenesisState>): _193.GenesisState;
                    fromAmino(object: _193.GenesisStateAmino): _193.GenesisState;
                    toAmino(message: _193.GenesisState): _193.GenesisStateAmino;
                    fromAminoMsg(object: _193.GenesisStateAminoMsg): _193.GenesisState;
                    toAminoMsg(message: _193.GenesisState): _193.GenesisStateAminoMsg;
                    fromProtoMsg(message: _193.GenesisStateProtoMsg): _193.GenesisState;
                    toProto(message: _193.GenesisState): Uint8Array;
                    toProtoMsg(message: _193.GenesisState): _193.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _194.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _194.ClientState;
                    fromPartial(object: Partial<_194.ClientState>): _194.ClientState;
                    fromAmino(object: _194.ClientStateAmino): _194.ClientState;
                    toAmino(message: _194.ClientState): _194.ClientStateAmino;
                    fromAminoMsg(object: _194.ClientStateAminoMsg): _194.ClientState;
                    toAminoMsg(message: _194.ClientState): _194.ClientStateAminoMsg;
                    fromProtoMsg(message: _194.ClientStateProtoMsg): _194.ClientState;
                    toProto(message: _194.ClientState): Uint8Array;
                    toProtoMsg(message: _194.ClientState): _194.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _195.DataType;
                dataTypeToJSON(object: _195.DataType): string;
                DataType: typeof _195.DataType;
                DataTypeSDKType: typeof _195.DataType;
                DataTypeAmino: typeof _195.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _195.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.ClientState;
                    fromPartial(object: Partial<_195.ClientState>): _195.ClientState;
                    fromAmino(object: _195.ClientStateAmino): _195.ClientState;
                    toAmino(message: _195.ClientState): _195.ClientStateAmino;
                    fromAminoMsg(object: _195.ClientStateAminoMsg): _195.ClientState;
                    toAminoMsg(message: _195.ClientState): _195.ClientStateAminoMsg;
                    fromProtoMsg(message: _195.ClientStateProtoMsg): _195.ClientState;
                    toProto(message: _195.ClientState): Uint8Array;
                    toProtoMsg(message: _195.ClientState): _195.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _195.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.ConsensusState;
                    fromPartial(object: Partial<_195.ConsensusState>): _195.ConsensusState;
                    fromAmino(object: _195.ConsensusStateAmino): _195.ConsensusState;
                    toAmino(message: _195.ConsensusState): _195.ConsensusStateAmino;
                    fromAminoMsg(object: _195.ConsensusStateAminoMsg): _195.ConsensusState;
                    toAminoMsg(message: _195.ConsensusState): _195.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _195.ConsensusStateProtoMsg): _195.ConsensusState;
                    toProto(message: _195.ConsensusState): Uint8Array;
                    toProtoMsg(message: _195.ConsensusState): _195.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _195.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.Header;
                    fromPartial(object: Partial<_195.Header>): _195.Header;
                    fromAmino(object: _195.HeaderAmino): _195.Header;
                    toAmino(message: _195.Header): _195.HeaderAmino;
                    fromAminoMsg(object: _195.HeaderAminoMsg): _195.Header;
                    toAminoMsg(message: _195.Header): _195.HeaderAminoMsg;
                    fromProtoMsg(message: _195.HeaderProtoMsg): _195.Header;
                    toProto(message: _195.Header): Uint8Array;
                    toProtoMsg(message: _195.Header): _195.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _195.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.Misbehaviour;
                    fromPartial(object: Partial<_195.Misbehaviour>): _195.Misbehaviour;
                    fromAmino(object: _195.MisbehaviourAmino): _195.Misbehaviour;
                    toAmino(message: _195.Misbehaviour): _195.MisbehaviourAmino;
                    fromAminoMsg(object: _195.MisbehaviourAminoMsg): _195.Misbehaviour;
                    toAminoMsg(message: _195.Misbehaviour): _195.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _195.MisbehaviourProtoMsg): _195.Misbehaviour;
                    toProto(message: _195.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _195.Misbehaviour): _195.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _195.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.SignatureAndData;
                    fromPartial(object: Partial<_195.SignatureAndData>): _195.SignatureAndData;
                    fromAmino(object: _195.SignatureAndDataAmino): _195.SignatureAndData;
                    toAmino(message: _195.SignatureAndData): _195.SignatureAndDataAmino;
                    fromAminoMsg(object: _195.SignatureAndDataAminoMsg): _195.SignatureAndData;
                    toAminoMsg(message: _195.SignatureAndData): _195.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _195.SignatureAndDataProtoMsg): _195.SignatureAndData;
                    toProto(message: _195.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _195.SignatureAndData): _195.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _195.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.TimestampedSignatureData;
                    fromPartial(object: Partial<_195.TimestampedSignatureData>): _195.TimestampedSignatureData;
                    fromAmino(object: _195.TimestampedSignatureDataAmino): _195.TimestampedSignatureData;
                    toAmino(message: _195.TimestampedSignatureData): _195.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _195.TimestampedSignatureDataAminoMsg): _195.TimestampedSignatureData;
                    toAminoMsg(message: _195.TimestampedSignatureData): _195.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _195.TimestampedSignatureDataProtoMsg): _195.TimestampedSignatureData;
                    toProto(message: _195.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _195.TimestampedSignatureData): _195.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _195.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.SignBytes;
                    fromPartial(object: Partial<_195.SignBytes>): _195.SignBytes;
                    fromAmino(object: _195.SignBytesAmino): _195.SignBytes;
                    toAmino(message: _195.SignBytes): _195.SignBytesAmino;
                    fromAminoMsg(object: _195.SignBytesAminoMsg): _195.SignBytes;
                    toAminoMsg(message: _195.SignBytes): _195.SignBytesAminoMsg;
                    fromProtoMsg(message: _195.SignBytesProtoMsg): _195.SignBytes;
                    toProto(message: _195.SignBytes): Uint8Array;
                    toProtoMsg(message: _195.SignBytes): _195.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _195.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.HeaderData;
                    fromPartial(object: Partial<_195.HeaderData>): _195.HeaderData;
                    fromAmino(object: _195.HeaderDataAmino): _195.HeaderData;
                    toAmino(message: _195.HeaderData): _195.HeaderDataAmino;
                    fromAminoMsg(object: _195.HeaderDataAminoMsg): _195.HeaderData;
                    toAminoMsg(message: _195.HeaderData): _195.HeaderDataAminoMsg;
                    fromProtoMsg(message: _195.HeaderDataProtoMsg): _195.HeaderData;
                    toProto(message: _195.HeaderData): Uint8Array;
                    toProtoMsg(message: _195.HeaderData): _195.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _195.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.ClientStateData;
                    fromPartial(object: Partial<_195.ClientStateData>): _195.ClientStateData;
                    fromAmino(object: _195.ClientStateDataAmino): _195.ClientStateData;
                    toAmino(message: _195.ClientStateData): _195.ClientStateDataAmino;
                    fromAminoMsg(object: _195.ClientStateDataAminoMsg): _195.ClientStateData;
                    toAminoMsg(message: _195.ClientStateData): _195.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _195.ClientStateDataProtoMsg): _195.ClientStateData;
                    toProto(message: _195.ClientStateData): Uint8Array;
                    toProtoMsg(message: _195.ClientStateData): _195.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _195.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.ConsensusStateData;
                    fromPartial(object: Partial<_195.ConsensusStateData>): _195.ConsensusStateData;
                    fromAmino(object: _195.ConsensusStateDataAmino): _195.ConsensusStateData;
                    toAmino(message: _195.ConsensusStateData): _195.ConsensusStateDataAmino;
                    fromAminoMsg(object: _195.ConsensusStateDataAminoMsg): _195.ConsensusStateData;
                    toAminoMsg(message: _195.ConsensusStateData): _195.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _195.ConsensusStateDataProtoMsg): _195.ConsensusStateData;
                    toProto(message: _195.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _195.ConsensusStateData): _195.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _195.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.ConnectionStateData;
                    fromPartial(object: Partial<_195.ConnectionStateData>): _195.ConnectionStateData;
                    fromAmino(object: _195.ConnectionStateDataAmino): _195.ConnectionStateData;
                    toAmino(message: _195.ConnectionStateData): _195.ConnectionStateDataAmino;
                    fromAminoMsg(object: _195.ConnectionStateDataAminoMsg): _195.ConnectionStateData;
                    toAminoMsg(message: _195.ConnectionStateData): _195.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _195.ConnectionStateDataProtoMsg): _195.ConnectionStateData;
                    toProto(message: _195.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _195.ConnectionStateData): _195.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _195.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.ChannelStateData;
                    fromPartial(object: Partial<_195.ChannelStateData>): _195.ChannelStateData;
                    fromAmino(object: _195.ChannelStateDataAmino): _195.ChannelStateData;
                    toAmino(message: _195.ChannelStateData): _195.ChannelStateDataAmino;
                    fromAminoMsg(object: _195.ChannelStateDataAminoMsg): _195.ChannelStateData;
                    toAminoMsg(message: _195.ChannelStateData): _195.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _195.ChannelStateDataProtoMsg): _195.ChannelStateData;
                    toProto(message: _195.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _195.ChannelStateData): _195.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _195.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.PacketCommitmentData;
                    fromPartial(object: Partial<_195.PacketCommitmentData>): _195.PacketCommitmentData;
                    fromAmino(object: _195.PacketCommitmentDataAmino): _195.PacketCommitmentData;
                    toAmino(message: _195.PacketCommitmentData): _195.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _195.PacketCommitmentDataAminoMsg): _195.PacketCommitmentData;
                    toAminoMsg(message: _195.PacketCommitmentData): _195.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _195.PacketCommitmentDataProtoMsg): _195.PacketCommitmentData;
                    toProto(message: _195.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _195.PacketCommitmentData): _195.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _195.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.PacketAcknowledgementData;
                    fromPartial(object: Partial<_195.PacketAcknowledgementData>): _195.PacketAcknowledgementData;
                    fromAmino(object: _195.PacketAcknowledgementDataAmino): _195.PacketAcknowledgementData;
                    toAmino(message: _195.PacketAcknowledgementData): _195.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _195.PacketAcknowledgementDataAminoMsg): _195.PacketAcknowledgementData;
                    toAminoMsg(message: _195.PacketAcknowledgementData): _195.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _195.PacketAcknowledgementDataProtoMsg): _195.PacketAcknowledgementData;
                    toProto(message: _195.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _195.PacketAcknowledgementData): _195.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _195.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_195.PacketReceiptAbsenceData>): _195.PacketReceiptAbsenceData;
                    fromAmino(object: _195.PacketReceiptAbsenceDataAmino): _195.PacketReceiptAbsenceData;
                    toAmino(message: _195.PacketReceiptAbsenceData): _195.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _195.PacketReceiptAbsenceDataAminoMsg): _195.PacketReceiptAbsenceData;
                    toAminoMsg(message: _195.PacketReceiptAbsenceData): _195.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _195.PacketReceiptAbsenceDataProtoMsg): _195.PacketReceiptAbsenceData;
                    toProto(message: _195.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _195.PacketReceiptAbsenceData): _195.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _195.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _195.NextSequenceRecvData;
                    fromPartial(object: Partial<_195.NextSequenceRecvData>): _195.NextSequenceRecvData;
                    fromAmino(object: _195.NextSequenceRecvDataAmino): _195.NextSequenceRecvData;
                    toAmino(message: _195.NextSequenceRecvData): _195.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _195.NextSequenceRecvDataAminoMsg): _195.NextSequenceRecvData;
                    toAminoMsg(message: _195.NextSequenceRecvData): _195.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _195.NextSequenceRecvDataProtoMsg): _195.NextSequenceRecvData;
                    toProto(message: _195.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _195.NextSequenceRecvData): _195.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _196.DataType;
                dataTypeToJSON(object: _196.DataType): string;
                DataType: typeof _196.DataType;
                DataTypeSDKType: typeof _196.DataType;
                DataTypeAmino: typeof _196.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _196.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.ClientState;
                    fromPartial(object: Partial<_196.ClientState>): _196.ClientState;
                    fromAmino(object: _196.ClientStateAmino): _196.ClientState;
                    toAmino(message: _196.ClientState): _196.ClientStateAmino;
                    fromAminoMsg(object: _196.ClientStateAminoMsg): _196.ClientState;
                    toAminoMsg(message: _196.ClientState): _196.ClientStateAminoMsg;
                    fromProtoMsg(message: _196.ClientStateProtoMsg): _196.ClientState;
                    toProto(message: _196.ClientState): Uint8Array;
                    toProtoMsg(message: _196.ClientState): _196.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _196.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.ConsensusState;
                    fromPartial(object: Partial<_196.ConsensusState>): _196.ConsensusState;
                    fromAmino(object: _196.ConsensusStateAmino): _196.ConsensusState;
                    toAmino(message: _196.ConsensusState): _196.ConsensusStateAmino;
                    fromAminoMsg(object: _196.ConsensusStateAminoMsg): _196.ConsensusState;
                    toAminoMsg(message: _196.ConsensusState): _196.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _196.ConsensusStateProtoMsg): _196.ConsensusState;
                    toProto(message: _196.ConsensusState): Uint8Array;
                    toProtoMsg(message: _196.ConsensusState): _196.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _196.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.Header;
                    fromPartial(object: Partial<_196.Header>): _196.Header;
                    fromAmino(object: _196.HeaderAmino): _196.Header;
                    toAmino(message: _196.Header): _196.HeaderAmino;
                    fromAminoMsg(object: _196.HeaderAminoMsg): _196.Header;
                    toAminoMsg(message: _196.Header): _196.HeaderAminoMsg;
                    fromProtoMsg(message: _196.HeaderProtoMsg): _196.Header;
                    toProto(message: _196.Header): Uint8Array;
                    toProtoMsg(message: _196.Header): _196.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _196.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.Misbehaviour;
                    fromPartial(object: Partial<_196.Misbehaviour>): _196.Misbehaviour;
                    fromAmino(object: _196.MisbehaviourAmino): _196.Misbehaviour;
                    toAmino(message: _196.Misbehaviour): _196.MisbehaviourAmino;
                    fromAminoMsg(object: _196.MisbehaviourAminoMsg): _196.Misbehaviour;
                    toAminoMsg(message: _196.Misbehaviour): _196.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _196.MisbehaviourProtoMsg): _196.Misbehaviour;
                    toProto(message: _196.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _196.Misbehaviour): _196.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _196.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.SignatureAndData;
                    fromPartial(object: Partial<_196.SignatureAndData>): _196.SignatureAndData;
                    fromAmino(object: _196.SignatureAndDataAmino): _196.SignatureAndData;
                    toAmino(message: _196.SignatureAndData): _196.SignatureAndDataAmino;
                    fromAminoMsg(object: _196.SignatureAndDataAminoMsg): _196.SignatureAndData;
                    toAminoMsg(message: _196.SignatureAndData): _196.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _196.SignatureAndDataProtoMsg): _196.SignatureAndData;
                    toProto(message: _196.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _196.SignatureAndData): _196.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _196.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.TimestampedSignatureData;
                    fromPartial(object: Partial<_196.TimestampedSignatureData>): _196.TimestampedSignatureData;
                    fromAmino(object: _196.TimestampedSignatureDataAmino): _196.TimestampedSignatureData;
                    toAmino(message: _196.TimestampedSignatureData): _196.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _196.TimestampedSignatureDataAminoMsg): _196.TimestampedSignatureData;
                    toAminoMsg(message: _196.TimestampedSignatureData): _196.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _196.TimestampedSignatureDataProtoMsg): _196.TimestampedSignatureData;
                    toProto(message: _196.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _196.TimestampedSignatureData): _196.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _196.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.SignBytes;
                    fromPartial(object: Partial<_196.SignBytes>): _196.SignBytes;
                    fromAmino(object: _196.SignBytesAmino): _196.SignBytes;
                    toAmino(message: _196.SignBytes): _196.SignBytesAmino;
                    fromAminoMsg(object: _196.SignBytesAminoMsg): _196.SignBytes;
                    toAminoMsg(message: _196.SignBytes): _196.SignBytesAminoMsg;
                    fromProtoMsg(message: _196.SignBytesProtoMsg): _196.SignBytes;
                    toProto(message: _196.SignBytes): Uint8Array;
                    toProtoMsg(message: _196.SignBytes): _196.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _196.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.HeaderData;
                    fromPartial(object: Partial<_196.HeaderData>): _196.HeaderData;
                    fromAmino(object: _196.HeaderDataAmino): _196.HeaderData;
                    toAmino(message: _196.HeaderData): _196.HeaderDataAmino;
                    fromAminoMsg(object: _196.HeaderDataAminoMsg): _196.HeaderData;
                    toAminoMsg(message: _196.HeaderData): _196.HeaderDataAminoMsg;
                    fromProtoMsg(message: _196.HeaderDataProtoMsg): _196.HeaderData;
                    toProto(message: _196.HeaderData): Uint8Array;
                    toProtoMsg(message: _196.HeaderData): _196.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _196.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.ClientStateData;
                    fromPartial(object: Partial<_196.ClientStateData>): _196.ClientStateData;
                    fromAmino(object: _196.ClientStateDataAmino): _196.ClientStateData;
                    toAmino(message: _196.ClientStateData): _196.ClientStateDataAmino;
                    fromAminoMsg(object: _196.ClientStateDataAminoMsg): _196.ClientStateData;
                    toAminoMsg(message: _196.ClientStateData): _196.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _196.ClientStateDataProtoMsg): _196.ClientStateData;
                    toProto(message: _196.ClientStateData): Uint8Array;
                    toProtoMsg(message: _196.ClientStateData): _196.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _196.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.ConsensusStateData;
                    fromPartial(object: Partial<_196.ConsensusStateData>): _196.ConsensusStateData;
                    fromAmino(object: _196.ConsensusStateDataAmino): _196.ConsensusStateData;
                    toAmino(message: _196.ConsensusStateData): _196.ConsensusStateDataAmino;
                    fromAminoMsg(object: _196.ConsensusStateDataAminoMsg): _196.ConsensusStateData;
                    toAminoMsg(message: _196.ConsensusStateData): _196.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _196.ConsensusStateDataProtoMsg): _196.ConsensusStateData;
                    toProto(message: _196.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _196.ConsensusStateData): _196.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _196.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.ConnectionStateData;
                    fromPartial(object: Partial<_196.ConnectionStateData>): _196.ConnectionStateData;
                    fromAmino(object: _196.ConnectionStateDataAmino): _196.ConnectionStateData;
                    toAmino(message: _196.ConnectionStateData): _196.ConnectionStateDataAmino;
                    fromAminoMsg(object: _196.ConnectionStateDataAminoMsg): _196.ConnectionStateData;
                    toAminoMsg(message: _196.ConnectionStateData): _196.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _196.ConnectionStateDataProtoMsg): _196.ConnectionStateData;
                    toProto(message: _196.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _196.ConnectionStateData): _196.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _196.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.ChannelStateData;
                    fromPartial(object: Partial<_196.ChannelStateData>): _196.ChannelStateData;
                    fromAmino(object: _196.ChannelStateDataAmino): _196.ChannelStateData;
                    toAmino(message: _196.ChannelStateData): _196.ChannelStateDataAmino;
                    fromAminoMsg(object: _196.ChannelStateDataAminoMsg): _196.ChannelStateData;
                    toAminoMsg(message: _196.ChannelStateData): _196.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _196.ChannelStateDataProtoMsg): _196.ChannelStateData;
                    toProto(message: _196.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _196.ChannelStateData): _196.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _196.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.PacketCommitmentData;
                    fromPartial(object: Partial<_196.PacketCommitmentData>): _196.PacketCommitmentData;
                    fromAmino(object: _196.PacketCommitmentDataAmino): _196.PacketCommitmentData;
                    toAmino(message: _196.PacketCommitmentData): _196.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _196.PacketCommitmentDataAminoMsg): _196.PacketCommitmentData;
                    toAminoMsg(message: _196.PacketCommitmentData): _196.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _196.PacketCommitmentDataProtoMsg): _196.PacketCommitmentData;
                    toProto(message: _196.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _196.PacketCommitmentData): _196.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _196.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.PacketAcknowledgementData;
                    fromPartial(object: Partial<_196.PacketAcknowledgementData>): _196.PacketAcknowledgementData;
                    fromAmino(object: _196.PacketAcknowledgementDataAmino): _196.PacketAcknowledgementData;
                    toAmino(message: _196.PacketAcknowledgementData): _196.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _196.PacketAcknowledgementDataAminoMsg): _196.PacketAcknowledgementData;
                    toAminoMsg(message: _196.PacketAcknowledgementData): _196.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _196.PacketAcknowledgementDataProtoMsg): _196.PacketAcknowledgementData;
                    toProto(message: _196.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _196.PacketAcknowledgementData): _196.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _196.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_196.PacketReceiptAbsenceData>): _196.PacketReceiptAbsenceData;
                    fromAmino(object: _196.PacketReceiptAbsenceDataAmino): _196.PacketReceiptAbsenceData;
                    toAmino(message: _196.PacketReceiptAbsenceData): _196.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _196.PacketReceiptAbsenceDataAminoMsg): _196.PacketReceiptAbsenceData;
                    toAminoMsg(message: _196.PacketReceiptAbsenceData): _196.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _196.PacketReceiptAbsenceDataProtoMsg): _196.PacketReceiptAbsenceData;
                    toProto(message: _196.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _196.PacketReceiptAbsenceData): _196.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _196.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _196.NextSequenceRecvData;
                    fromPartial(object: Partial<_196.NextSequenceRecvData>): _196.NextSequenceRecvData;
                    fromAmino(object: _196.NextSequenceRecvDataAmino): _196.NextSequenceRecvData;
                    toAmino(message: _196.NextSequenceRecvData): _196.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _196.NextSequenceRecvDataAminoMsg): _196.NextSequenceRecvData;
                    toAminoMsg(message: _196.NextSequenceRecvData): _196.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _196.NextSequenceRecvDataProtoMsg): _196.NextSequenceRecvData;
                    toProto(message: _196.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _196.NextSequenceRecvData): _196.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _197.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _197.ClientState;
                    fromPartial(object: Partial<_197.ClientState>): _197.ClientState;
                    fromAmino(object: _197.ClientStateAmino): _197.ClientState;
                    toAmino(message: _197.ClientState): _197.ClientStateAmino;
                    fromAminoMsg(object: _197.ClientStateAminoMsg): _197.ClientState;
                    toAminoMsg(message: _197.ClientState): _197.ClientStateAminoMsg;
                    fromProtoMsg(message: _197.ClientStateProtoMsg): _197.ClientState;
                    toProto(message: _197.ClientState): Uint8Array;
                    toProtoMsg(message: _197.ClientState): _197.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _197.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _197.ConsensusState;
                    fromPartial(object: Partial<_197.ConsensusState>): _197.ConsensusState;
                    fromAmino(object: _197.ConsensusStateAmino): _197.ConsensusState;
                    toAmino(message: _197.ConsensusState): _197.ConsensusStateAmino;
                    fromAminoMsg(object: _197.ConsensusStateAminoMsg): _197.ConsensusState;
                    toAminoMsg(message: _197.ConsensusState): _197.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _197.ConsensusStateProtoMsg): _197.ConsensusState;
                    toProto(message: _197.ConsensusState): Uint8Array;
                    toProtoMsg(message: _197.ConsensusState): _197.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _197.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _197.Misbehaviour;
                    fromPartial(object: Partial<_197.Misbehaviour>): _197.Misbehaviour;
                    fromAmino(object: _197.MisbehaviourAmino): _197.Misbehaviour;
                    toAmino(message: _197.Misbehaviour): _197.MisbehaviourAmino;
                    fromAminoMsg(object: _197.MisbehaviourAminoMsg): _197.Misbehaviour;
                    toAminoMsg(message: _197.Misbehaviour): _197.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _197.MisbehaviourProtoMsg): _197.Misbehaviour;
                    toProto(message: _197.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _197.Misbehaviour): _197.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _197.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _197.Header;
                    fromPartial(object: Partial<_197.Header>): _197.Header;
                    fromAmino(object: _197.HeaderAmino): _197.Header;
                    toAmino(message: _197.Header): _197.HeaderAmino;
                    fromAminoMsg(object: _197.HeaderAminoMsg): _197.Header;
                    toAminoMsg(message: _197.Header): _197.HeaderAminoMsg;
                    fromProtoMsg(message: _197.HeaderProtoMsg): _197.Header;
                    toProto(message: _197.Header): Uint8Array;
                    toProtoMsg(message: _197.Header): _197.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _197.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _197.Fraction;
                    fromPartial(object: Partial<_197.Fraction>): _197.Fraction;
                    fromAmino(object: _197.FractionAmino): _197.Fraction;
                    toAmino(message: _197.Fraction): _197.FractionAmino;
                    fromAminoMsg(object: _197.FractionAminoMsg): _197.Fraction;
                    toAminoMsg(message: _197.Fraction): _197.FractionAminoMsg;
                    fromProtoMsg(message: _197.FractionProtoMsg): _197.Fraction;
                    toProto(message: _197.Fraction): Uint8Array;
                    toProtoMsg(message: _197.Fraction): _197.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _327.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _328.MsgClientImpl;
                    };
                    client: {
                        v1: _329.MsgClientImpl;
                    };
                    connection: {
                        v1: _330.MsgClientImpl;
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _170.QueryParamsRequest): Promise<_170.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _176.QueryDenomTraceRequest): Promise<_176.QueryDenomTraceResponse>;
                            denomTraces(request?: _176.QueryDenomTracesRequest): Promise<_176.QueryDenomTracesResponse>;
                            params(request?: _176.QueryParamsRequest): Promise<_176.QueryParamsResponse>;
                            denomHash(request: _176.QueryDenomHashRequest): Promise<_176.QueryDenomHashResponse>;
                            escrowAddress(request: _176.QueryEscrowAddressRequest): Promise<_176.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _182.QueryChannelRequest): Promise<_182.QueryChannelResponse>;
                            channels(request?: _182.QueryChannelsRequest): Promise<_182.QueryChannelsResponse>;
                            connectionChannels(request: _182.QueryConnectionChannelsRequest): Promise<_182.QueryConnectionChannelsResponse>;
                            channelClientState(request: _182.QueryChannelClientStateRequest): Promise<_182.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _182.QueryChannelConsensusStateRequest): Promise<_182.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _182.QueryPacketCommitmentRequest): Promise<_182.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _182.QueryPacketCommitmentsRequest): Promise<_182.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _182.QueryPacketReceiptRequest): Promise<_182.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _182.QueryPacketAcknowledgementRequest): Promise<_182.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _182.QueryPacketAcknowledgementsRequest): Promise<_182.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _182.QueryUnreceivedPacketsRequest): Promise<_182.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _182.QueryUnreceivedAcksRequest): Promise<_182.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _182.QueryNextSequenceReceiveRequest): Promise<_182.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _186.QueryClientStateRequest): Promise<_186.QueryClientStateResponse>;
                            clientStates(request?: _186.QueryClientStatesRequest): Promise<_186.QueryClientStatesResponse>;
                            consensusState(request: _186.QueryConsensusStateRequest): Promise<_186.QueryConsensusStateResponse>;
                            consensusStates(request: _186.QueryConsensusStatesRequest): Promise<_186.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _186.QueryConsensusStateHeightsRequest): Promise<_186.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _186.QueryClientStatusRequest): Promise<_186.QueryClientStatusResponse>;
                            clientParams(request?: _186.QueryClientParamsRequest): Promise<_186.QueryClientParamsResponse>;
                            upgradedClientState(request?: _186.QueryUpgradedClientStateRequest): Promise<_186.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _186.QueryUpgradedConsensusStateRequest): Promise<_186.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _191.QueryConnectionRequest): Promise<_191.QueryConnectionResponse>;
                            connections(request?: _191.QueryConnectionsRequest): Promise<_191.QueryConnectionsResponse>;
                            clientConnections(request: _191.QueryClientConnectionsRequest): Promise<_191.QueryClientConnectionsResponse>;
                            connectionClientState(request: _191.QueryConnectionClientStateRequest): Promise<_191.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _191.QueryConnectionConsensusStateRequest): Promise<_191.QueryConnectionConsensusStateResponse>;
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _315.LCDQueryClient;
                        };
                        host: {
                            v1: _316.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _317.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _318.LCDQueryClient;
                    };
                    client: {
                        v1: _319.LCDQueryClient;
                    };
                    connection: {
                        v1: _320.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
