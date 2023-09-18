import * as _89 from "./applications/interchain_accounts/controller/v1/controller";
import * as _90 from "./applications/interchain_accounts/controller/v1/query";
import * as _91 from "./applications/interchain_accounts/host/v1/host";
import * as _92 from "./applications/interchain_accounts/host/v1/query";
import * as _93 from "./applications/interchain_accounts/v1/account";
import * as _94 from "./applications/interchain_accounts/v1/genesis";
import * as _95 from "./applications/interchain_accounts/v1/metadata";
import * as _96 from "./applications/interchain_accounts/v1/packet";
import * as _97 from "./applications/transfer/v1/genesis";
import * as _98 from "./applications/transfer/v1/query";
import * as _99 from "./applications/transfer/v1/transfer";
import * as _100 from "./applications/transfer/v1/tx";
import * as _101 from "./applications/transfer/v2/packet";
import * as _102 from "./core/channel/v1/channel";
import * as _103 from "./core/channel/v1/genesis";
import * as _104 from "./core/channel/v1/query";
import * as _105 from "./core/channel/v1/tx";
import * as _106 from "./core/client/v1/client";
import * as _107 from "./core/client/v1/genesis";
import * as _108 from "./core/client/v1/query";
import * as _109 from "./core/client/v1/tx";
import * as _110 from "./core/commitment/v1/commitment";
import * as _111 from "./core/connection/v1/connection";
import * as _112 from "./core/connection/v1/genesis";
import * as _113 from "./core/connection/v1/query";
import * as _114 from "./core/connection/v1/tx";
import * as _115 from "./core/types/v1/genesis";
import * as _116 from "./lightclients/localhost/v1/localhost";
import * as _117 from "./lightclients/solomachine/v1/solomachine";
import * as _118 from "./lightclients/solomachine/v2/solomachine";
import * as _119 from "./lightclients/tendermint/v1/tendermint";
import * as _206 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _207 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _208 from "./applications/transfer/v1/query.lcd";
import * as _209 from "./core/channel/v1/query.lcd";
import * as _210 from "./core/client/v1/query.lcd";
import * as _211 from "./core/connection/v1/query.lcd";
import * as _212 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _213 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _214 from "./applications/transfer/v1/query.rpc.Query";
import * as _215 from "./core/channel/v1/query.rpc.Query";
import * as _216 from "./core/client/v1/query.rpc.Query";
import * as _217 from "./core/connection/v1/query.rpc.Query";
import * as _218 from "./applications/transfer/v1/tx.rpc.msg";
import * as _219 from "./core/channel/v1/tx.rpc.msg";
import * as _220 from "./core/client/v1/tx.rpc.msg";
import * as _221 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _212.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _90.QueryInterchainAccountRequest): Promise<_90.QueryInterchainAccountResponse>;
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _206.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _90.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _90.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_90.QueryInterchainAccountRequest>): _90.QueryInterchainAccountRequest;
                        fromAmino(object: _90.QueryInterchainAccountRequestAmino): _90.QueryInterchainAccountRequest;
                        toAmino(message: _90.QueryInterchainAccountRequest): _90.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _90.QueryInterchainAccountRequestAminoMsg): _90.QueryInterchainAccountRequest;
                        toAminoMsg(message: _90.QueryInterchainAccountRequest): _90.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _90.QueryInterchainAccountRequestProtoMsg): _90.QueryInterchainAccountRequest;
                        toProto(message: _90.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _90.QueryInterchainAccountRequest): _90.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _90.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _90.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_90.QueryInterchainAccountResponse>): _90.QueryInterchainAccountResponse;
                        fromAmino(object: _90.QueryInterchainAccountResponseAmino): _90.QueryInterchainAccountResponse;
                        toAmino(message: _90.QueryInterchainAccountResponse): _90.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _90.QueryInterchainAccountResponseAminoMsg): _90.QueryInterchainAccountResponse;
                        toAminoMsg(message: _90.QueryInterchainAccountResponse): _90.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _90.QueryInterchainAccountResponseProtoMsg): _90.QueryInterchainAccountResponse;
                        toProto(message: _90.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _90.QueryInterchainAccountResponse): _90.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _90.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _90.QueryParamsRequest;
                        fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
                        fromAmino(_: _90.QueryParamsRequestAmino): _90.QueryParamsRequest;
                        toAmino(_: _90.QueryParamsRequest): _90.QueryParamsRequestAmino;
                        fromAminoMsg(object: _90.QueryParamsRequestAminoMsg): _90.QueryParamsRequest;
                        toAminoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _90.QueryParamsRequestProtoMsg): _90.QueryParamsRequest;
                        toProto(message: _90.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _90.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _90.QueryParamsResponse;
                        fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
                        fromAmino(object: _90.QueryParamsResponseAmino): _90.QueryParamsResponse;
                        toAmino(message: _90.QueryParamsResponse): _90.QueryParamsResponseAmino;
                        fromAminoMsg(object: _90.QueryParamsResponseAminoMsg): _90.QueryParamsResponse;
                        toAminoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _90.QueryParamsResponseProtoMsg): _90.QueryParamsResponse;
                        toProto(message: _90.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _89.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _89.Params;
                        fromPartial(object: Partial<_89.Params>): _89.Params;
                        fromAmino(object: _89.ParamsAmino): _89.Params;
                        toAmino(message: _89.Params): _89.ParamsAmino;
                        fromAminoMsg(object: _89.ParamsAminoMsg): _89.Params;
                        toAminoMsg(message: _89.Params): _89.ParamsAminoMsg;
                        fromProtoMsg(message: _89.ParamsProtoMsg): _89.Params;
                        toProto(message: _89.Params): Uint8Array;
                        toProtoMsg(message: _89.Params): _89.ParamsProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _213.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _207.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _92.QueryParamsRequest;
                        fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                        fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                        toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                        fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                        toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                        toProto(message: _92.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _92.QueryParamsResponse;
                        fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                        fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                        toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                        fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                        toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                        toProto(message: _92.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _91.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _91.Params;
                        fromPartial(object: Partial<_91.Params>): _91.Params;
                        fromAmino(object: _91.ParamsAmino): _91.Params;
                        toAmino(message: _91.Params): _91.ParamsAmino;
                        fromAminoMsg(object: _91.ParamsAminoMsg): _91.Params;
                        toAminoMsg(message: _91.Params): _91.ParamsAminoMsg;
                        fromProtoMsg(message: _91.ParamsProtoMsg): _91.Params;
                        toProto(message: _91.Params): Uint8Array;
                        toProtoMsg(message: _91.Params): _91.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _96.Type;
                typeToJSON(object: _96.Type): string;
                Type: typeof _96.Type;
                TypeSDKType: typeof _96.Type;
                TypeAmino: typeof _96.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _96.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.InterchainAccountPacketData;
                    fromPartial(object: Partial<_96.InterchainAccountPacketData>): _96.InterchainAccountPacketData;
                    fromAmino(object: _96.InterchainAccountPacketDataAmino): _96.InterchainAccountPacketData;
                    toAmino(message: _96.InterchainAccountPacketData): _96.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _96.InterchainAccountPacketDataAminoMsg): _96.InterchainAccountPacketData;
                    toAminoMsg(message: _96.InterchainAccountPacketData): _96.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _96.InterchainAccountPacketDataProtoMsg): _96.InterchainAccountPacketData;
                    toProto(message: _96.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _96.InterchainAccountPacketData): _96.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _96.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.CosmosTx;
                    fromPartial(object: Partial<_96.CosmosTx>): _96.CosmosTx;
                    fromAmino(object: _96.CosmosTxAmino): _96.CosmosTx;
                    toAmino(message: _96.CosmosTx): _96.CosmosTxAmino;
                    fromAminoMsg(object: _96.CosmosTxAminoMsg): _96.CosmosTx;
                    toAminoMsg(message: _96.CosmosTx): _96.CosmosTxAminoMsg;
                    fromProtoMsg(message: _96.CosmosTxProtoMsg): _96.CosmosTx;
                    toProto(message: _96.CosmosTx): Uint8Array;
                    toProtoMsg(message: _96.CosmosTx): _96.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _95.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.Metadata;
                    fromPartial(object: Partial<_95.Metadata>): _95.Metadata;
                    fromAmino(object: _95.MetadataAmino): _95.Metadata;
                    toAmino(message: _95.Metadata): _95.MetadataAmino;
                    fromAminoMsg(object: _95.MetadataAminoMsg): _95.Metadata;
                    toAminoMsg(message: _95.Metadata): _95.MetadataAminoMsg;
                    fromProtoMsg(message: _95.MetadataProtoMsg): _95.Metadata;
                    toProto(message: _95.Metadata): Uint8Array;
                    toProtoMsg(message: _95.Metadata): _95.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _94.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.GenesisState;
                    fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
                    fromAmino(object: _94.GenesisStateAmino): _94.GenesisState;
                    toAmino(message: _94.GenesisState): _94.GenesisStateAmino;
                    fromAminoMsg(object: _94.GenesisStateAminoMsg): _94.GenesisState;
                    toAminoMsg(message: _94.GenesisState): _94.GenesisStateAminoMsg;
                    fromProtoMsg(message: _94.GenesisStateProtoMsg): _94.GenesisState;
                    toProto(message: _94.GenesisState): Uint8Array;
                    toProtoMsg(message: _94.GenesisState): _94.GenesisStateProtoMsg;
                };
                ControllerGenesisState: {
                    typeUrl: string;
                    encode(message: _94.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.ControllerGenesisState;
                    fromPartial(object: Partial<_94.ControllerGenesisState>): _94.ControllerGenesisState;
                    fromAmino(object: _94.ControllerGenesisStateAmino): _94.ControllerGenesisState;
                    toAmino(message: _94.ControllerGenesisState): _94.ControllerGenesisStateAmino;
                    fromAminoMsg(object: _94.ControllerGenesisStateAminoMsg): _94.ControllerGenesisState;
                    toAminoMsg(message: _94.ControllerGenesisState): _94.ControllerGenesisStateAminoMsg;
                    fromProtoMsg(message: _94.ControllerGenesisStateProtoMsg): _94.ControllerGenesisState;
                    toProto(message: _94.ControllerGenesisState): Uint8Array;
                    toProtoMsg(message: _94.ControllerGenesisState): _94.ControllerGenesisStateProtoMsg;
                };
                HostGenesisState: {
                    typeUrl: string;
                    encode(message: _94.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.HostGenesisState;
                    fromPartial(object: Partial<_94.HostGenesisState>): _94.HostGenesisState;
                    fromAmino(object: _94.HostGenesisStateAmino): _94.HostGenesisState;
                    toAmino(message: _94.HostGenesisState): _94.HostGenesisStateAmino;
                    fromAminoMsg(object: _94.HostGenesisStateAminoMsg): _94.HostGenesisState;
                    toAminoMsg(message: _94.HostGenesisState): _94.HostGenesisStateAminoMsg;
                    fromProtoMsg(message: _94.HostGenesisStateProtoMsg): _94.HostGenesisState;
                    toProto(message: _94.HostGenesisState): Uint8Array;
                    toProtoMsg(message: _94.HostGenesisState): _94.HostGenesisStateProtoMsg;
                };
                ActiveChannel: {
                    typeUrl: string;
                    encode(message: _94.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.ActiveChannel;
                    fromPartial(object: Partial<_94.ActiveChannel>): _94.ActiveChannel;
                    fromAmino(object: _94.ActiveChannelAmino): _94.ActiveChannel;
                    toAmino(message: _94.ActiveChannel): _94.ActiveChannelAmino;
                    fromAminoMsg(object: _94.ActiveChannelAminoMsg): _94.ActiveChannel;
                    toAminoMsg(message: _94.ActiveChannel): _94.ActiveChannelAminoMsg;
                    fromProtoMsg(message: _94.ActiveChannelProtoMsg): _94.ActiveChannel;
                    toProto(message: _94.ActiveChannel): Uint8Array;
                    toProtoMsg(message: _94.ActiveChannel): _94.ActiveChannelProtoMsg;
                };
                RegisteredInterchainAccount: {
                    typeUrl: string;
                    encode(message: _94.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_94.RegisteredInterchainAccount>): _94.RegisteredInterchainAccount;
                    fromAmino(object: _94.RegisteredInterchainAccountAmino): _94.RegisteredInterchainAccount;
                    toAmino(message: _94.RegisteredInterchainAccount): _94.RegisteredInterchainAccountAmino;
                    fromAminoMsg(object: _94.RegisteredInterchainAccountAminoMsg): _94.RegisteredInterchainAccount;
                    toAminoMsg(message: _94.RegisteredInterchainAccount): _94.RegisteredInterchainAccountAminoMsg;
                    fromProtoMsg(message: _94.RegisteredInterchainAccountProtoMsg): _94.RegisteredInterchainAccount;
                    toProto(message: _94.RegisteredInterchainAccount): Uint8Array;
                    toProtoMsg(message: _94.RegisteredInterchainAccount): _94.RegisteredInterchainAccountProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _93.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.InterchainAccount;
                    fromPartial(object: Partial<_93.InterchainAccount>): _93.InterchainAccount;
                    fromAmino(object: _93.InterchainAccountAmino): _93.InterchainAccount;
                    toAmino(message: _93.InterchainAccount): _93.InterchainAccountAmino;
                    fromAminoMsg(object: _93.InterchainAccountAminoMsg): _93.InterchainAccount;
                    toAminoMsg(message: _93.InterchainAccount): _93.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _93.InterchainAccountProtoMsg): _93.InterchainAccount;
                    toProto(message: _93.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _93.InterchainAccount): _93.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _218.MsgClientImpl;
                QueryClientImpl: typeof _214.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _98.QueryDenomTraceRequest): Promise<_98.QueryDenomTraceResponse>;
                    denomTraces(request?: _98.QueryDenomTracesRequest): Promise<_98.QueryDenomTracesResponse>;
                    params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                    denomHash(request: _98.QueryDenomHashRequest): Promise<_98.QueryDenomHashResponse>;
                    escrowAddress(request: _98.QueryEscrowAddressRequest): Promise<_98.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _208.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _100.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _100.MsgTransfer): {
                            typeUrl: string;
                            value: _100.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _100.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _100.MsgTransfer): {
                            typeUrl: string;
                            value: _100.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _100.MsgTransfer) => _100.MsgTransferAmino;
                        fromAmino: (object: _100.MsgTransferAmino) => _100.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _100.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.MsgTransfer;
                    fromPartial(object: Partial<_100.MsgTransfer>): _100.MsgTransfer;
                    fromAmino(object: _100.MsgTransferAmino): _100.MsgTransfer;
                    toAmino(message: _100.MsgTransfer): _100.MsgTransferAmino;
                    fromAminoMsg(object: _100.MsgTransferAminoMsg): _100.MsgTransfer;
                    toAminoMsg(message: _100.MsgTransfer): _100.MsgTransferAminoMsg;
                    fromProtoMsg(message: _100.MsgTransferProtoMsg): _100.MsgTransfer;
                    toProto(message: _100.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _100.MsgTransfer): _100.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _100.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.MsgTransferResponse;
                    fromPartial(object: Partial<_100.MsgTransferResponse>): _100.MsgTransferResponse;
                    fromAmino(object: _100.MsgTransferResponseAmino): _100.MsgTransferResponse;
                    toAmino(message: _100.MsgTransferResponse): _100.MsgTransferResponseAmino;
                    fromAminoMsg(object: _100.MsgTransferResponseAminoMsg): _100.MsgTransferResponse;
                    toAminoMsg(message: _100.MsgTransferResponse): _100.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _100.MsgTransferResponseProtoMsg): _100.MsgTransferResponse;
                    toProto(message: _100.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _100.MsgTransferResponse): _100.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _99.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.DenomTrace;
                    fromPartial(object: Partial<_99.DenomTrace>): _99.DenomTrace;
                    fromAmino(object: _99.DenomTraceAmino): _99.DenomTrace;
                    toAmino(message: _99.DenomTrace): _99.DenomTraceAmino;
                    fromAminoMsg(object: _99.DenomTraceAminoMsg): _99.DenomTrace;
                    toAminoMsg(message: _99.DenomTrace): _99.DenomTraceAminoMsg;
                    fromProtoMsg(message: _99.DenomTraceProtoMsg): _99.DenomTrace;
                    toProto(message: _99.DenomTrace): Uint8Array;
                    toProtoMsg(message: _99.DenomTrace): _99.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _99.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.Params;
                    fromPartial(object: Partial<_99.Params>): _99.Params;
                    fromAmino(object: _99.ParamsAmino): _99.Params;
                    toAmino(message: _99.Params): _99.ParamsAmino;
                    fromAminoMsg(object: _99.ParamsAminoMsg): _99.Params;
                    toAminoMsg(message: _99.Params): _99.ParamsAminoMsg;
                    fromProtoMsg(message: _99.ParamsProtoMsg): _99.Params;
                    toProto(message: _99.Params): Uint8Array;
                    toProtoMsg(message: _99.Params): _99.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _98.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_98.QueryDenomTraceRequest>): _98.QueryDenomTraceRequest;
                    fromAmino(object: _98.QueryDenomTraceRequestAmino): _98.QueryDenomTraceRequest;
                    toAmino(message: _98.QueryDenomTraceRequest): _98.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _98.QueryDenomTraceRequestAminoMsg): _98.QueryDenomTraceRequest;
                    toAminoMsg(message: _98.QueryDenomTraceRequest): _98.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _98.QueryDenomTraceRequestProtoMsg): _98.QueryDenomTraceRequest;
                    toProto(message: _98.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _98.QueryDenomTraceRequest): _98.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _98.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_98.QueryDenomTraceResponse>): _98.QueryDenomTraceResponse;
                    fromAmino(object: _98.QueryDenomTraceResponseAmino): _98.QueryDenomTraceResponse;
                    toAmino(message: _98.QueryDenomTraceResponse): _98.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _98.QueryDenomTraceResponseAminoMsg): _98.QueryDenomTraceResponse;
                    toAminoMsg(message: _98.QueryDenomTraceResponse): _98.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _98.QueryDenomTraceResponseProtoMsg): _98.QueryDenomTraceResponse;
                    toProto(message: _98.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _98.QueryDenomTraceResponse): _98.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _98.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_98.QueryDenomTracesRequest>): _98.QueryDenomTracesRequest;
                    fromAmino(object: _98.QueryDenomTracesRequestAmino): _98.QueryDenomTracesRequest;
                    toAmino(message: _98.QueryDenomTracesRequest): _98.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _98.QueryDenomTracesRequestAminoMsg): _98.QueryDenomTracesRequest;
                    toAminoMsg(message: _98.QueryDenomTracesRequest): _98.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _98.QueryDenomTracesRequestProtoMsg): _98.QueryDenomTracesRequest;
                    toProto(message: _98.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _98.QueryDenomTracesRequest): _98.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _98.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_98.QueryDenomTracesResponse>): _98.QueryDenomTracesResponse;
                    fromAmino(object: _98.QueryDenomTracesResponseAmino): _98.QueryDenomTracesResponse;
                    toAmino(message: _98.QueryDenomTracesResponse): _98.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _98.QueryDenomTracesResponseAminoMsg): _98.QueryDenomTracesResponse;
                    toAminoMsg(message: _98.QueryDenomTracesResponse): _98.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _98.QueryDenomTracesResponseProtoMsg): _98.QueryDenomTracesResponse;
                    toProto(message: _98.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _98.QueryDenomTracesResponse): _98.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _98.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _98.QueryParamsRequest;
                    fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                    fromAmino(_: _98.QueryParamsRequestAmino): _98.QueryParamsRequest;
                    toAmino(_: _98.QueryParamsRequest): _98.QueryParamsRequestAmino;
                    fromAminoMsg(object: _98.QueryParamsRequestAminoMsg): _98.QueryParamsRequest;
                    toAminoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _98.QueryParamsRequestProtoMsg): _98.QueryParamsRequest;
                    toProto(message: _98.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _98.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryParamsResponse;
                    fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
                    fromAmino(object: _98.QueryParamsResponseAmino): _98.QueryParamsResponse;
                    toAmino(message: _98.QueryParamsResponse): _98.QueryParamsResponseAmino;
                    fromAminoMsg(object: _98.QueryParamsResponseAminoMsg): _98.QueryParamsResponse;
                    toAminoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _98.QueryParamsResponseProtoMsg): _98.QueryParamsResponse;
                    toProto(message: _98.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _98.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryDenomHashRequest;
                    fromPartial(object: Partial<_98.QueryDenomHashRequest>): _98.QueryDenomHashRequest;
                    fromAmino(object: _98.QueryDenomHashRequestAmino): _98.QueryDenomHashRequest;
                    toAmino(message: _98.QueryDenomHashRequest): _98.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _98.QueryDenomHashRequestAminoMsg): _98.QueryDenomHashRequest;
                    toAminoMsg(message: _98.QueryDenomHashRequest): _98.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _98.QueryDenomHashRequestProtoMsg): _98.QueryDenomHashRequest;
                    toProto(message: _98.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _98.QueryDenomHashRequest): _98.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _98.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryDenomHashResponse;
                    fromPartial(object: Partial<_98.QueryDenomHashResponse>): _98.QueryDenomHashResponse;
                    fromAmino(object: _98.QueryDenomHashResponseAmino): _98.QueryDenomHashResponse;
                    toAmino(message: _98.QueryDenomHashResponse): _98.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _98.QueryDenomHashResponseAminoMsg): _98.QueryDenomHashResponse;
                    toAminoMsg(message: _98.QueryDenomHashResponse): _98.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _98.QueryDenomHashResponseProtoMsg): _98.QueryDenomHashResponse;
                    toProto(message: _98.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _98.QueryDenomHashResponse): _98.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _98.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_98.QueryEscrowAddressRequest>): _98.QueryEscrowAddressRequest;
                    fromAmino(object: _98.QueryEscrowAddressRequestAmino): _98.QueryEscrowAddressRequest;
                    toAmino(message: _98.QueryEscrowAddressRequest): _98.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _98.QueryEscrowAddressRequestAminoMsg): _98.QueryEscrowAddressRequest;
                    toAminoMsg(message: _98.QueryEscrowAddressRequest): _98.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _98.QueryEscrowAddressRequestProtoMsg): _98.QueryEscrowAddressRequest;
                    toProto(message: _98.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _98.QueryEscrowAddressRequest): _98.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _98.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_98.QueryEscrowAddressResponse>): _98.QueryEscrowAddressResponse;
                    fromAmino(object: _98.QueryEscrowAddressResponseAmino): _98.QueryEscrowAddressResponse;
                    toAmino(message: _98.QueryEscrowAddressResponse): _98.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _98.QueryEscrowAddressResponseAminoMsg): _98.QueryEscrowAddressResponse;
                    toAminoMsg(message: _98.QueryEscrowAddressResponse): _98.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _98.QueryEscrowAddressResponseProtoMsg): _98.QueryEscrowAddressResponse;
                    toProto(message: _98.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _98.QueryEscrowAddressResponse): _98.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.GenesisState;
                    fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                    fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                    toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                    fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                    toAminoMsg(message: _97.GenesisState): _97.GenesisStateAminoMsg;
                    fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                    toProto(message: _97.GenesisState): Uint8Array;
                    toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _101.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.FungibleTokenPacketData;
                    fromPartial(object: Partial<_101.FungibleTokenPacketData>): _101.FungibleTokenPacketData;
                    fromAmino(object: _101.FungibleTokenPacketDataAmino): _101.FungibleTokenPacketData;
                    toAmino(message: _101.FungibleTokenPacketData): _101.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _101.FungibleTokenPacketDataAminoMsg): _101.FungibleTokenPacketData;
                    toAminoMsg(message: _101.FungibleTokenPacketData): _101.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _101.FungibleTokenPacketDataProtoMsg): _101.FungibleTokenPacketData;
                    toProto(message: _101.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _101.FungibleTokenPacketData): _101.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _219.MsgClientImpl;
                QueryClientImpl: typeof _215.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _104.QueryChannelRequest): Promise<_104.QueryChannelResponse>;
                    channels(request?: _104.QueryChannelsRequest): Promise<_104.QueryChannelsResponse>;
                    connectionChannels(request: _104.QueryConnectionChannelsRequest): Promise<_104.QueryConnectionChannelsResponse>;
                    channelClientState(request: _104.QueryChannelClientStateRequest): Promise<_104.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _104.QueryChannelConsensusStateRequest): Promise<_104.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _104.QueryPacketCommitmentRequest): Promise<_104.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _104.QueryPacketCommitmentsRequest): Promise<_104.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _104.QueryPacketReceiptRequest): Promise<_104.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _104.QueryPacketAcknowledgementRequest): Promise<_104.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _104.QueryPacketAcknowledgementsRequest): Promise<_104.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _104.QueryUnreceivedPacketsRequest): Promise<_104.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _104.QueryUnreceivedAcksRequest): Promise<_104.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _104.QueryNextSequenceReceiveRequest): Promise<_104.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _209.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _105.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _105.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _105.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _105.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _105.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _105.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _105.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _105.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _105.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _105.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _105.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _105.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _105.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _105.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _105.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _105.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _105.MsgRecvPacket): {
                            typeUrl: string;
                            value: _105.MsgRecvPacket;
                        };
                        timeout(value: _105.MsgTimeout): {
                            typeUrl: string;
                            value: _105.MsgTimeout;
                        };
                        timeoutOnClose(value: _105.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _105.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _105.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _105.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _105.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _105.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _105.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _105.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _105.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _105.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _105.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _105.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _105.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _105.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _105.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _105.MsgRecvPacket): {
                            typeUrl: string;
                            value: _105.MsgRecvPacket;
                        };
                        timeout(value: _105.MsgTimeout): {
                            typeUrl: string;
                            value: _105.MsgTimeout;
                        };
                        timeoutOnClose(value: _105.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _105.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _105.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _105.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _105.MsgChannelOpenInit) => _105.MsgChannelOpenInitAmino;
                        fromAmino: (object: _105.MsgChannelOpenInitAmino) => _105.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _105.MsgChannelOpenTry) => _105.MsgChannelOpenTryAmino;
                        fromAmino: (object: _105.MsgChannelOpenTryAmino) => _105.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _105.MsgChannelOpenAck) => _105.MsgChannelOpenAckAmino;
                        fromAmino: (object: _105.MsgChannelOpenAckAmino) => _105.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _105.MsgChannelOpenConfirm) => _105.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _105.MsgChannelOpenConfirmAmino) => _105.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _105.MsgChannelCloseInit) => _105.MsgChannelCloseInitAmino;
                        fromAmino: (object: _105.MsgChannelCloseInitAmino) => _105.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _105.MsgChannelCloseConfirm) => _105.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _105.MsgChannelCloseConfirmAmino) => _105.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _105.MsgRecvPacket) => _105.MsgRecvPacketAmino;
                        fromAmino: (object: _105.MsgRecvPacketAmino) => _105.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _105.MsgTimeout) => _105.MsgTimeoutAmino;
                        fromAmino: (object: _105.MsgTimeoutAmino) => _105.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _105.MsgTimeoutOnClose) => _105.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _105.MsgTimeoutOnCloseAmino) => _105.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _105.MsgAcknowledgement) => _105.MsgAcknowledgementAmino;
                        fromAmino: (object: _105.MsgAcknowledgementAmino) => _105.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _105.ResponseResultType;
                responseResultTypeToJSON(object: _105.ResponseResultType): string;
                ResponseResultType: typeof _105.ResponseResultType;
                ResponseResultTypeSDKType: typeof _105.ResponseResultType;
                ResponseResultTypeAmino: typeof _105.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelOpenInit;
                    fromPartial(object: Partial<_105.MsgChannelOpenInit>): _105.MsgChannelOpenInit;
                    fromAmino(object: _105.MsgChannelOpenInitAmino): _105.MsgChannelOpenInit;
                    toAmino(message: _105.MsgChannelOpenInit): _105.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenInitAminoMsg): _105.MsgChannelOpenInit;
                    toAminoMsg(message: _105.MsgChannelOpenInit): _105.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenInitProtoMsg): _105.MsgChannelOpenInit;
                    toProto(message: _105.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenInit): _105.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_105.MsgChannelOpenInitResponse>): _105.MsgChannelOpenInitResponse;
                    fromAmino(object: _105.MsgChannelOpenInitResponseAmino): _105.MsgChannelOpenInitResponse;
                    toAmino(message: _105.MsgChannelOpenInitResponse): _105.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenInitResponseAminoMsg): _105.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _105.MsgChannelOpenInitResponse): _105.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenInitResponseProtoMsg): _105.MsgChannelOpenInitResponse;
                    toProto(message: _105.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenInitResponse): _105.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelOpenTry;
                    fromPartial(object: Partial<_105.MsgChannelOpenTry>): _105.MsgChannelOpenTry;
                    fromAmino(object: _105.MsgChannelOpenTryAmino): _105.MsgChannelOpenTry;
                    toAmino(message: _105.MsgChannelOpenTry): _105.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenTryAminoMsg): _105.MsgChannelOpenTry;
                    toAminoMsg(message: _105.MsgChannelOpenTry): _105.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenTryProtoMsg): _105.MsgChannelOpenTry;
                    toProto(message: _105.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenTry): _105.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_105.MsgChannelOpenTryResponse>): _105.MsgChannelOpenTryResponse;
                    fromAmino(object: _105.MsgChannelOpenTryResponseAmino): _105.MsgChannelOpenTryResponse;
                    toAmino(message: _105.MsgChannelOpenTryResponse): _105.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenTryResponseAminoMsg): _105.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _105.MsgChannelOpenTryResponse): _105.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenTryResponseProtoMsg): _105.MsgChannelOpenTryResponse;
                    toProto(message: _105.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenTryResponse): _105.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelOpenAck;
                    fromPartial(object: Partial<_105.MsgChannelOpenAck>): _105.MsgChannelOpenAck;
                    fromAmino(object: _105.MsgChannelOpenAckAmino): _105.MsgChannelOpenAck;
                    toAmino(message: _105.MsgChannelOpenAck): _105.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenAckAminoMsg): _105.MsgChannelOpenAck;
                    toAminoMsg(message: _105.MsgChannelOpenAck): _105.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenAckProtoMsg): _105.MsgChannelOpenAck;
                    toProto(message: _105.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenAck): _105.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_105.MsgChannelOpenAckResponse>): _105.MsgChannelOpenAckResponse;
                    fromAmino(_: _105.MsgChannelOpenAckResponseAmino): _105.MsgChannelOpenAckResponse;
                    toAmino(_: _105.MsgChannelOpenAckResponse): _105.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenAckResponseAminoMsg): _105.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _105.MsgChannelOpenAckResponse): _105.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenAckResponseProtoMsg): _105.MsgChannelOpenAckResponse;
                    toProto(message: _105.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenAckResponse): _105.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_105.MsgChannelOpenConfirm>): _105.MsgChannelOpenConfirm;
                    fromAmino(object: _105.MsgChannelOpenConfirmAmino): _105.MsgChannelOpenConfirm;
                    toAmino(message: _105.MsgChannelOpenConfirm): _105.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenConfirmAminoMsg): _105.MsgChannelOpenConfirm;
                    toAminoMsg(message: _105.MsgChannelOpenConfirm): _105.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenConfirmProtoMsg): _105.MsgChannelOpenConfirm;
                    toProto(message: _105.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenConfirm): _105.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_105.MsgChannelOpenConfirmResponse>): _105.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _105.MsgChannelOpenConfirmResponseAmino): _105.MsgChannelOpenConfirmResponse;
                    toAmino(_: _105.MsgChannelOpenConfirmResponse): _105.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _105.MsgChannelOpenConfirmResponseAminoMsg): _105.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _105.MsgChannelOpenConfirmResponse): _105.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelOpenConfirmResponseProtoMsg): _105.MsgChannelOpenConfirmResponse;
                    toProto(message: _105.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelOpenConfirmResponse): _105.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelCloseInit;
                    fromPartial(object: Partial<_105.MsgChannelCloseInit>): _105.MsgChannelCloseInit;
                    fromAmino(object: _105.MsgChannelCloseInitAmino): _105.MsgChannelCloseInit;
                    toAmino(message: _105.MsgChannelCloseInit): _105.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _105.MsgChannelCloseInitAminoMsg): _105.MsgChannelCloseInit;
                    toAminoMsg(message: _105.MsgChannelCloseInit): _105.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelCloseInitProtoMsg): _105.MsgChannelCloseInit;
                    toProto(message: _105.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelCloseInit): _105.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_105.MsgChannelCloseInitResponse>): _105.MsgChannelCloseInitResponse;
                    fromAmino(_: _105.MsgChannelCloseInitResponseAmino): _105.MsgChannelCloseInitResponse;
                    toAmino(_: _105.MsgChannelCloseInitResponse): _105.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _105.MsgChannelCloseInitResponseAminoMsg): _105.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _105.MsgChannelCloseInitResponse): _105.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelCloseInitResponseProtoMsg): _105.MsgChannelCloseInitResponse;
                    toProto(message: _105.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelCloseInitResponse): _105.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _105.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_105.MsgChannelCloseConfirm>): _105.MsgChannelCloseConfirm;
                    fromAmino(object: _105.MsgChannelCloseConfirmAmino): _105.MsgChannelCloseConfirm;
                    toAmino(message: _105.MsgChannelCloseConfirm): _105.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _105.MsgChannelCloseConfirmAminoMsg): _105.MsgChannelCloseConfirm;
                    toAminoMsg(message: _105.MsgChannelCloseConfirm): _105.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelCloseConfirmProtoMsg): _105.MsgChannelCloseConfirm;
                    toProto(message: _105.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelCloseConfirm): _105.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_105.MsgChannelCloseConfirmResponse>): _105.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _105.MsgChannelCloseConfirmResponseAmino): _105.MsgChannelCloseConfirmResponse;
                    toAmino(_: _105.MsgChannelCloseConfirmResponse): _105.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _105.MsgChannelCloseConfirmResponseAminoMsg): _105.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _105.MsgChannelCloseConfirmResponse): _105.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgChannelCloseConfirmResponseProtoMsg): _105.MsgChannelCloseConfirmResponse;
                    toProto(message: _105.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgChannelCloseConfirmResponse): _105.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _105.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgRecvPacket;
                    fromPartial(object: Partial<_105.MsgRecvPacket>): _105.MsgRecvPacket;
                    fromAmino(object: _105.MsgRecvPacketAmino): _105.MsgRecvPacket;
                    toAmino(message: _105.MsgRecvPacket): _105.MsgRecvPacketAmino;
                    fromAminoMsg(object: _105.MsgRecvPacketAminoMsg): _105.MsgRecvPacket;
                    toAminoMsg(message: _105.MsgRecvPacket): _105.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _105.MsgRecvPacketProtoMsg): _105.MsgRecvPacket;
                    toProto(message: _105.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _105.MsgRecvPacket): _105.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _105.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_105.MsgRecvPacketResponse>): _105.MsgRecvPacketResponse;
                    fromAmino(object: _105.MsgRecvPacketResponseAmino): _105.MsgRecvPacketResponse;
                    toAmino(message: _105.MsgRecvPacketResponse): _105.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _105.MsgRecvPacketResponseAminoMsg): _105.MsgRecvPacketResponse;
                    toAminoMsg(message: _105.MsgRecvPacketResponse): _105.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgRecvPacketResponseProtoMsg): _105.MsgRecvPacketResponse;
                    toProto(message: _105.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgRecvPacketResponse): _105.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _105.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgTimeout;
                    fromPartial(object: Partial<_105.MsgTimeout>): _105.MsgTimeout;
                    fromAmino(object: _105.MsgTimeoutAmino): _105.MsgTimeout;
                    toAmino(message: _105.MsgTimeout): _105.MsgTimeoutAmino;
                    fromAminoMsg(object: _105.MsgTimeoutAminoMsg): _105.MsgTimeout;
                    toAminoMsg(message: _105.MsgTimeout): _105.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _105.MsgTimeoutProtoMsg): _105.MsgTimeout;
                    toProto(message: _105.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _105.MsgTimeout): _105.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _105.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgTimeoutResponse;
                    fromPartial(object: Partial<_105.MsgTimeoutResponse>): _105.MsgTimeoutResponse;
                    fromAmino(object: _105.MsgTimeoutResponseAmino): _105.MsgTimeoutResponse;
                    toAmino(message: _105.MsgTimeoutResponse): _105.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _105.MsgTimeoutResponseAminoMsg): _105.MsgTimeoutResponse;
                    toAminoMsg(message: _105.MsgTimeoutResponse): _105.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgTimeoutResponseProtoMsg): _105.MsgTimeoutResponse;
                    toProto(message: _105.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgTimeoutResponse): _105.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _105.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_105.MsgTimeoutOnClose>): _105.MsgTimeoutOnClose;
                    fromAmino(object: _105.MsgTimeoutOnCloseAmino): _105.MsgTimeoutOnClose;
                    toAmino(message: _105.MsgTimeoutOnClose): _105.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _105.MsgTimeoutOnCloseAminoMsg): _105.MsgTimeoutOnClose;
                    toAminoMsg(message: _105.MsgTimeoutOnClose): _105.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _105.MsgTimeoutOnCloseProtoMsg): _105.MsgTimeoutOnClose;
                    toProto(message: _105.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _105.MsgTimeoutOnClose): _105.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _105.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_105.MsgTimeoutOnCloseResponse>): _105.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _105.MsgTimeoutOnCloseResponseAmino): _105.MsgTimeoutOnCloseResponse;
                    toAmino(message: _105.MsgTimeoutOnCloseResponse): _105.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _105.MsgTimeoutOnCloseResponseAminoMsg): _105.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _105.MsgTimeoutOnCloseResponse): _105.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgTimeoutOnCloseResponseProtoMsg): _105.MsgTimeoutOnCloseResponse;
                    toProto(message: _105.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgTimeoutOnCloseResponse): _105.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _105.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgAcknowledgement;
                    fromPartial(object: Partial<_105.MsgAcknowledgement>): _105.MsgAcknowledgement;
                    fromAmino(object: _105.MsgAcknowledgementAmino): _105.MsgAcknowledgement;
                    toAmino(message: _105.MsgAcknowledgement): _105.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _105.MsgAcknowledgementAminoMsg): _105.MsgAcknowledgement;
                    toAminoMsg(message: _105.MsgAcknowledgement): _105.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _105.MsgAcknowledgementProtoMsg): _105.MsgAcknowledgement;
                    toProto(message: _105.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _105.MsgAcknowledgement): _105.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _105.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_105.MsgAcknowledgementResponse>): _105.MsgAcknowledgementResponse;
                    fromAmino(object: _105.MsgAcknowledgementResponseAmino): _105.MsgAcknowledgementResponse;
                    toAmino(message: _105.MsgAcknowledgementResponse): _105.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _105.MsgAcknowledgementResponseAminoMsg): _105.MsgAcknowledgementResponse;
                    toAminoMsg(message: _105.MsgAcknowledgementResponse): _105.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgAcknowledgementResponseProtoMsg): _105.MsgAcknowledgementResponse;
                    toProto(message: _105.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgAcknowledgementResponse): _105.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelRequest;
                    fromPartial(object: Partial<_104.QueryChannelRequest>): _104.QueryChannelRequest;
                    fromAmino(object: _104.QueryChannelRequestAmino): _104.QueryChannelRequest;
                    toAmino(message: _104.QueryChannelRequest): _104.QueryChannelRequestAmino;
                    fromAminoMsg(object: _104.QueryChannelRequestAminoMsg): _104.QueryChannelRequest;
                    toAminoMsg(message: _104.QueryChannelRequest): _104.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelRequestProtoMsg): _104.QueryChannelRequest;
                    toProto(message: _104.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelRequest): _104.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelResponse;
                    fromPartial(object: Partial<_104.QueryChannelResponse>): _104.QueryChannelResponse;
                    fromAmino(object: _104.QueryChannelResponseAmino): _104.QueryChannelResponse;
                    toAmino(message: _104.QueryChannelResponse): _104.QueryChannelResponseAmino;
                    fromAminoMsg(object: _104.QueryChannelResponseAminoMsg): _104.QueryChannelResponse;
                    toAminoMsg(message: _104.QueryChannelResponse): _104.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelResponseProtoMsg): _104.QueryChannelResponse;
                    toProto(message: _104.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelResponse): _104.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelsRequest;
                    fromPartial(object: Partial<_104.QueryChannelsRequest>): _104.QueryChannelsRequest;
                    fromAmino(object: _104.QueryChannelsRequestAmino): _104.QueryChannelsRequest;
                    toAmino(message: _104.QueryChannelsRequest): _104.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _104.QueryChannelsRequestAminoMsg): _104.QueryChannelsRequest;
                    toAminoMsg(message: _104.QueryChannelsRequest): _104.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelsRequestProtoMsg): _104.QueryChannelsRequest;
                    toProto(message: _104.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelsRequest): _104.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelsResponse;
                    fromPartial(object: Partial<_104.QueryChannelsResponse>): _104.QueryChannelsResponse;
                    fromAmino(object: _104.QueryChannelsResponseAmino): _104.QueryChannelsResponse;
                    toAmino(message: _104.QueryChannelsResponse): _104.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _104.QueryChannelsResponseAminoMsg): _104.QueryChannelsResponse;
                    toAminoMsg(message: _104.QueryChannelsResponse): _104.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelsResponseProtoMsg): _104.QueryChannelsResponse;
                    toProto(message: _104.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelsResponse): _104.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_104.QueryConnectionChannelsRequest>): _104.QueryConnectionChannelsRequest;
                    fromAmino(object: _104.QueryConnectionChannelsRequestAmino): _104.QueryConnectionChannelsRequest;
                    toAmino(message: _104.QueryConnectionChannelsRequest): _104.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _104.QueryConnectionChannelsRequestAminoMsg): _104.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _104.QueryConnectionChannelsRequest): _104.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryConnectionChannelsRequestProtoMsg): _104.QueryConnectionChannelsRequest;
                    toProto(message: _104.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryConnectionChannelsRequest): _104.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_104.QueryConnectionChannelsResponse>): _104.QueryConnectionChannelsResponse;
                    fromAmino(object: _104.QueryConnectionChannelsResponseAmino): _104.QueryConnectionChannelsResponse;
                    toAmino(message: _104.QueryConnectionChannelsResponse): _104.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _104.QueryConnectionChannelsResponseAminoMsg): _104.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _104.QueryConnectionChannelsResponse): _104.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryConnectionChannelsResponseProtoMsg): _104.QueryConnectionChannelsResponse;
                    toProto(message: _104.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryConnectionChannelsResponse): _104.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_104.QueryChannelClientStateRequest>): _104.QueryChannelClientStateRequest;
                    fromAmino(object: _104.QueryChannelClientStateRequestAmino): _104.QueryChannelClientStateRequest;
                    toAmino(message: _104.QueryChannelClientStateRequest): _104.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _104.QueryChannelClientStateRequestAminoMsg): _104.QueryChannelClientStateRequest;
                    toAminoMsg(message: _104.QueryChannelClientStateRequest): _104.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelClientStateRequestProtoMsg): _104.QueryChannelClientStateRequest;
                    toProto(message: _104.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelClientStateRequest): _104.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_104.QueryChannelClientStateResponse>): _104.QueryChannelClientStateResponse;
                    fromAmino(object: _104.QueryChannelClientStateResponseAmino): _104.QueryChannelClientStateResponse;
                    toAmino(message: _104.QueryChannelClientStateResponse): _104.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _104.QueryChannelClientStateResponseAminoMsg): _104.QueryChannelClientStateResponse;
                    toAminoMsg(message: _104.QueryChannelClientStateResponse): _104.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelClientStateResponseProtoMsg): _104.QueryChannelClientStateResponse;
                    toProto(message: _104.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelClientStateResponse): _104.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_104.QueryChannelConsensusStateRequest>): _104.QueryChannelConsensusStateRequest;
                    fromAmino(object: _104.QueryChannelConsensusStateRequestAmino): _104.QueryChannelConsensusStateRequest;
                    toAmino(message: _104.QueryChannelConsensusStateRequest): _104.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _104.QueryChannelConsensusStateRequestAminoMsg): _104.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _104.QueryChannelConsensusStateRequest): _104.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelConsensusStateRequestProtoMsg): _104.QueryChannelConsensusStateRequest;
                    toProto(message: _104.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelConsensusStateRequest): _104.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_104.QueryChannelConsensusStateResponse>): _104.QueryChannelConsensusStateResponse;
                    fromAmino(object: _104.QueryChannelConsensusStateResponseAmino): _104.QueryChannelConsensusStateResponse;
                    toAmino(message: _104.QueryChannelConsensusStateResponse): _104.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _104.QueryChannelConsensusStateResponseAminoMsg): _104.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _104.QueryChannelConsensusStateResponse): _104.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryChannelConsensusStateResponseProtoMsg): _104.QueryChannelConsensusStateResponse;
                    toProto(message: _104.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryChannelConsensusStateResponse): _104.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentRequest>): _104.QueryPacketCommitmentRequest;
                    fromAmino(object: _104.QueryPacketCommitmentRequestAmino): _104.QueryPacketCommitmentRequest;
                    toAmino(message: _104.QueryPacketCommitmentRequest): _104.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _104.QueryPacketCommitmentRequestAminoMsg): _104.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _104.QueryPacketCommitmentRequest): _104.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketCommitmentRequestProtoMsg): _104.QueryPacketCommitmentRequest;
                    toProto(message: _104.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketCommitmentRequest): _104.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentResponse>): _104.QueryPacketCommitmentResponse;
                    fromAmino(object: _104.QueryPacketCommitmentResponseAmino): _104.QueryPacketCommitmentResponse;
                    toAmino(message: _104.QueryPacketCommitmentResponse): _104.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _104.QueryPacketCommitmentResponseAminoMsg): _104.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _104.QueryPacketCommitmentResponse): _104.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketCommitmentResponseProtoMsg): _104.QueryPacketCommitmentResponse;
                    toProto(message: _104.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketCommitmentResponse): _104.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentsRequest>): _104.QueryPacketCommitmentsRequest;
                    fromAmino(object: _104.QueryPacketCommitmentsRequestAmino): _104.QueryPacketCommitmentsRequest;
                    toAmino(message: _104.QueryPacketCommitmentsRequest): _104.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _104.QueryPacketCommitmentsRequestAminoMsg): _104.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _104.QueryPacketCommitmentsRequest): _104.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketCommitmentsRequestProtoMsg): _104.QueryPacketCommitmentsRequest;
                    toProto(message: _104.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketCommitmentsRequest): _104.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_104.QueryPacketCommitmentsResponse>): _104.QueryPacketCommitmentsResponse;
                    fromAmino(object: _104.QueryPacketCommitmentsResponseAmino): _104.QueryPacketCommitmentsResponse;
                    toAmino(message: _104.QueryPacketCommitmentsResponse): _104.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _104.QueryPacketCommitmentsResponseAminoMsg): _104.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _104.QueryPacketCommitmentsResponse): _104.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketCommitmentsResponseProtoMsg): _104.QueryPacketCommitmentsResponse;
                    toProto(message: _104.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketCommitmentsResponse): _104.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_104.QueryPacketReceiptRequest>): _104.QueryPacketReceiptRequest;
                    fromAmino(object: _104.QueryPacketReceiptRequestAmino): _104.QueryPacketReceiptRequest;
                    toAmino(message: _104.QueryPacketReceiptRequest): _104.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _104.QueryPacketReceiptRequestAminoMsg): _104.QueryPacketReceiptRequest;
                    toAminoMsg(message: _104.QueryPacketReceiptRequest): _104.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketReceiptRequestProtoMsg): _104.QueryPacketReceiptRequest;
                    toProto(message: _104.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketReceiptRequest): _104.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_104.QueryPacketReceiptResponse>): _104.QueryPacketReceiptResponse;
                    fromAmino(object: _104.QueryPacketReceiptResponseAmino): _104.QueryPacketReceiptResponse;
                    toAmino(message: _104.QueryPacketReceiptResponse): _104.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _104.QueryPacketReceiptResponseAminoMsg): _104.QueryPacketReceiptResponse;
                    toAminoMsg(message: _104.QueryPacketReceiptResponse): _104.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketReceiptResponseProtoMsg): _104.QueryPacketReceiptResponse;
                    toProto(message: _104.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketReceiptResponse): _104.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementRequest>): _104.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _104.QueryPacketAcknowledgementRequestAmino): _104.QueryPacketAcknowledgementRequest;
                    toAmino(message: _104.QueryPacketAcknowledgementRequest): _104.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _104.QueryPacketAcknowledgementRequestAminoMsg): _104.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _104.QueryPacketAcknowledgementRequest): _104.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketAcknowledgementRequestProtoMsg): _104.QueryPacketAcknowledgementRequest;
                    toProto(message: _104.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketAcknowledgementRequest): _104.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementResponse>): _104.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _104.QueryPacketAcknowledgementResponseAmino): _104.QueryPacketAcknowledgementResponse;
                    toAmino(message: _104.QueryPacketAcknowledgementResponse): _104.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _104.QueryPacketAcknowledgementResponseAminoMsg): _104.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _104.QueryPacketAcknowledgementResponse): _104.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketAcknowledgementResponseProtoMsg): _104.QueryPacketAcknowledgementResponse;
                    toProto(message: _104.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketAcknowledgementResponse): _104.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementsRequest>): _104.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _104.QueryPacketAcknowledgementsRequestAmino): _104.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _104.QueryPacketAcknowledgementsRequest): _104.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _104.QueryPacketAcknowledgementsRequestAminoMsg): _104.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _104.QueryPacketAcknowledgementsRequest): _104.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketAcknowledgementsRequestProtoMsg): _104.QueryPacketAcknowledgementsRequest;
                    toProto(message: _104.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketAcknowledgementsRequest): _104.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_104.QueryPacketAcknowledgementsResponse>): _104.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _104.QueryPacketAcknowledgementsResponseAmino): _104.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _104.QueryPacketAcknowledgementsResponse): _104.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _104.QueryPacketAcknowledgementsResponseAminoMsg): _104.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _104.QueryPacketAcknowledgementsResponse): _104.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryPacketAcknowledgementsResponseProtoMsg): _104.QueryPacketAcknowledgementsResponse;
                    toProto(message: _104.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryPacketAcknowledgementsResponse): _104.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_104.QueryUnreceivedPacketsRequest>): _104.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _104.QueryUnreceivedPacketsRequestAmino): _104.QueryUnreceivedPacketsRequest;
                    toAmino(message: _104.QueryUnreceivedPacketsRequest): _104.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _104.QueryUnreceivedPacketsRequestAminoMsg): _104.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _104.QueryUnreceivedPacketsRequest): _104.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryUnreceivedPacketsRequestProtoMsg): _104.QueryUnreceivedPacketsRequest;
                    toProto(message: _104.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryUnreceivedPacketsRequest): _104.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_104.QueryUnreceivedPacketsResponse>): _104.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _104.QueryUnreceivedPacketsResponseAmino): _104.QueryUnreceivedPacketsResponse;
                    toAmino(message: _104.QueryUnreceivedPacketsResponse): _104.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _104.QueryUnreceivedPacketsResponseAminoMsg): _104.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _104.QueryUnreceivedPacketsResponse): _104.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryUnreceivedPacketsResponseProtoMsg): _104.QueryUnreceivedPacketsResponse;
                    toProto(message: _104.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryUnreceivedPacketsResponse): _104.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_104.QueryUnreceivedAcksRequest>): _104.QueryUnreceivedAcksRequest;
                    fromAmino(object: _104.QueryUnreceivedAcksRequestAmino): _104.QueryUnreceivedAcksRequest;
                    toAmino(message: _104.QueryUnreceivedAcksRequest): _104.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _104.QueryUnreceivedAcksRequestAminoMsg): _104.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _104.QueryUnreceivedAcksRequest): _104.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryUnreceivedAcksRequestProtoMsg): _104.QueryUnreceivedAcksRequest;
                    toProto(message: _104.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryUnreceivedAcksRequest): _104.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_104.QueryUnreceivedAcksResponse>): _104.QueryUnreceivedAcksResponse;
                    fromAmino(object: _104.QueryUnreceivedAcksResponseAmino): _104.QueryUnreceivedAcksResponse;
                    toAmino(message: _104.QueryUnreceivedAcksResponse): _104.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _104.QueryUnreceivedAcksResponseAminoMsg): _104.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _104.QueryUnreceivedAcksResponse): _104.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryUnreceivedAcksResponseProtoMsg): _104.QueryUnreceivedAcksResponse;
                    toProto(message: _104.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryUnreceivedAcksResponse): _104.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _104.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_104.QueryNextSequenceReceiveRequest>): _104.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _104.QueryNextSequenceReceiveRequestAmino): _104.QueryNextSequenceReceiveRequest;
                    toAmino(message: _104.QueryNextSequenceReceiveRequest): _104.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _104.QueryNextSequenceReceiveRequestAminoMsg): _104.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _104.QueryNextSequenceReceiveRequest): _104.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _104.QueryNextSequenceReceiveRequestProtoMsg): _104.QueryNextSequenceReceiveRequest;
                    toProto(message: _104.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _104.QueryNextSequenceReceiveRequest): _104.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _104.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_104.QueryNextSequenceReceiveResponse>): _104.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _104.QueryNextSequenceReceiveResponseAmino): _104.QueryNextSequenceReceiveResponse;
                    toAmino(message: _104.QueryNextSequenceReceiveResponse): _104.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _104.QueryNextSequenceReceiveResponseAminoMsg): _104.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _104.QueryNextSequenceReceiveResponse): _104.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _104.QueryNextSequenceReceiveResponseProtoMsg): _104.QueryNextSequenceReceiveResponse;
                    toProto(message: _104.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _104.QueryNextSequenceReceiveResponse): _104.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _103.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.GenesisState;
                    fromPartial(object: Partial<_103.GenesisState>): _103.GenesisState;
                    fromAmino(object: _103.GenesisStateAmino): _103.GenesisState;
                    toAmino(message: _103.GenesisState): _103.GenesisStateAmino;
                    fromAminoMsg(object: _103.GenesisStateAminoMsg): _103.GenesisState;
                    toAminoMsg(message: _103.GenesisState): _103.GenesisStateAminoMsg;
                    fromProtoMsg(message: _103.GenesisStateProtoMsg): _103.GenesisState;
                    toProto(message: _103.GenesisState): Uint8Array;
                    toProtoMsg(message: _103.GenesisState): _103.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _103.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.PacketSequence;
                    fromPartial(object: Partial<_103.PacketSequence>): _103.PacketSequence;
                    fromAmino(object: _103.PacketSequenceAmino): _103.PacketSequence;
                    toAmino(message: _103.PacketSequence): _103.PacketSequenceAmino;
                    fromAminoMsg(object: _103.PacketSequenceAminoMsg): _103.PacketSequence;
                    toAminoMsg(message: _103.PacketSequence): _103.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _103.PacketSequenceProtoMsg): _103.PacketSequence;
                    toProto(message: _103.PacketSequence): Uint8Array;
                    toProtoMsg(message: _103.PacketSequence): _103.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _102.State;
                stateToJSON(object: _102.State): string;
                orderFromJSON(object: any): _102.Order;
                orderToJSON(object: _102.Order): string;
                State: typeof _102.State;
                StateSDKType: typeof _102.State;
                StateAmino: typeof _102.State;
                Order: typeof _102.Order;
                OrderSDKType: typeof _102.Order;
                OrderAmino: typeof _102.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _102.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.Channel;
                    fromPartial(object: Partial<_102.Channel>): _102.Channel;
                    fromAmino(object: _102.ChannelAmino): _102.Channel;
                    toAmino(message: _102.Channel): _102.ChannelAmino;
                    fromAminoMsg(object: _102.ChannelAminoMsg): _102.Channel;
                    toAminoMsg(message: _102.Channel): _102.ChannelAminoMsg;
                    fromProtoMsg(message: _102.ChannelProtoMsg): _102.Channel;
                    toProto(message: _102.Channel): Uint8Array;
                    toProtoMsg(message: _102.Channel): _102.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _102.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.IdentifiedChannel;
                    fromPartial(object: Partial<_102.IdentifiedChannel>): _102.IdentifiedChannel;
                    fromAmino(object: _102.IdentifiedChannelAmino): _102.IdentifiedChannel;
                    toAmino(message: _102.IdentifiedChannel): _102.IdentifiedChannelAmino;
                    fromAminoMsg(object: _102.IdentifiedChannelAminoMsg): _102.IdentifiedChannel;
                    toAminoMsg(message: _102.IdentifiedChannel): _102.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _102.IdentifiedChannelProtoMsg): _102.IdentifiedChannel;
                    toProto(message: _102.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _102.IdentifiedChannel): _102.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _102.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.Counterparty;
                    fromPartial(object: Partial<_102.Counterparty>): _102.Counterparty;
                    fromAmino(object: _102.CounterpartyAmino): _102.Counterparty;
                    toAmino(message: _102.Counterparty): _102.CounterpartyAmino;
                    fromAminoMsg(object: _102.CounterpartyAminoMsg): _102.Counterparty;
                    toAminoMsg(message: _102.Counterparty): _102.CounterpartyAminoMsg;
                    fromProtoMsg(message: _102.CounterpartyProtoMsg): _102.Counterparty;
                    toProto(message: _102.Counterparty): Uint8Array;
                    toProtoMsg(message: _102.Counterparty): _102.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _102.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.Packet;
                    fromPartial(object: Partial<_102.Packet>): _102.Packet;
                    fromAmino(object: _102.PacketAmino): _102.Packet;
                    toAmino(message: _102.Packet): _102.PacketAmino;
                    fromAminoMsg(object: _102.PacketAminoMsg): _102.Packet;
                    toAminoMsg(message: _102.Packet): _102.PacketAminoMsg;
                    fromProtoMsg(message: _102.PacketProtoMsg): _102.Packet;
                    toProto(message: _102.Packet): Uint8Array;
                    toProtoMsg(message: _102.Packet): _102.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _102.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.PacketState;
                    fromPartial(object: Partial<_102.PacketState>): _102.PacketState;
                    fromAmino(object: _102.PacketStateAmino): _102.PacketState;
                    toAmino(message: _102.PacketState): _102.PacketStateAmino;
                    fromAminoMsg(object: _102.PacketStateAminoMsg): _102.PacketState;
                    toAminoMsg(message: _102.PacketState): _102.PacketStateAminoMsg;
                    fromProtoMsg(message: _102.PacketStateProtoMsg): _102.PacketState;
                    toProto(message: _102.PacketState): Uint8Array;
                    toProtoMsg(message: _102.PacketState): _102.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _102.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.PacketId;
                    fromPartial(object: Partial<_102.PacketId>): _102.PacketId;
                    fromAmino(object: _102.PacketIdAmino): _102.PacketId;
                    toAmino(message: _102.PacketId): _102.PacketIdAmino;
                    fromAminoMsg(object: _102.PacketIdAminoMsg): _102.PacketId;
                    toAminoMsg(message: _102.PacketId): _102.PacketIdAminoMsg;
                    fromProtoMsg(message: _102.PacketIdProtoMsg): _102.PacketId;
                    toProto(message: _102.PacketId): Uint8Array;
                    toProtoMsg(message: _102.PacketId): _102.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _102.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.Acknowledgement;
                    fromPartial(object: Partial<_102.Acknowledgement>): _102.Acknowledgement;
                    fromAmino(object: _102.AcknowledgementAmino): _102.Acknowledgement;
                    toAmino(message: _102.Acknowledgement): _102.AcknowledgementAmino;
                    fromAminoMsg(object: _102.AcknowledgementAminoMsg): _102.Acknowledgement;
                    toAminoMsg(message: _102.Acknowledgement): _102.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _102.AcknowledgementProtoMsg): _102.Acknowledgement;
                    toProto(message: _102.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _102.Acknowledgement): _102.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _220.MsgClientImpl;
                QueryClientImpl: typeof _216.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _108.QueryClientStateRequest): Promise<_108.QueryClientStateResponse>;
                    clientStates(request?: _108.QueryClientStatesRequest): Promise<_108.QueryClientStatesResponse>;
                    consensusState(request: _108.QueryConsensusStateRequest): Promise<_108.QueryConsensusStateResponse>;
                    consensusStates(request: _108.QueryConsensusStatesRequest): Promise<_108.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _108.QueryConsensusStateHeightsRequest): Promise<_108.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _108.QueryClientStatusRequest): Promise<_108.QueryClientStatusResponse>;
                    clientParams(request?: _108.QueryClientParamsRequest): Promise<_108.QueryClientParamsResponse>;
                    upgradedClientState(request?: _108.QueryUpgradedClientStateRequest): Promise<_108.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _210.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _109.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _109.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _109.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _109.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _109.MsgCreateClient): {
                            typeUrl: string;
                            value: _109.MsgCreateClient;
                        };
                        updateClient(value: _109.MsgUpdateClient): {
                            typeUrl: string;
                            value: _109.MsgUpdateClient;
                        };
                        upgradeClient(value: _109.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _109.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _109.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _109.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _109.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _109.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _109.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _109.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _109.MsgCreateClient): {
                            typeUrl: string;
                            value: _109.MsgCreateClient;
                        };
                        updateClient(value: _109.MsgUpdateClient): {
                            typeUrl: string;
                            value: _109.MsgUpdateClient;
                        };
                        upgradeClient(value: _109.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _109.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _109.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _109.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _109.MsgCreateClient) => _109.MsgCreateClientAmino;
                        fromAmino: (object: _109.MsgCreateClientAmino) => _109.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _109.MsgUpdateClient) => _109.MsgUpdateClientAmino;
                        fromAmino: (object: _109.MsgUpdateClientAmino) => _109.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _109.MsgUpgradeClient) => _109.MsgUpgradeClientAmino;
                        fromAmino: (object: _109.MsgUpgradeClientAmino) => _109.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _109.MsgSubmitMisbehaviour) => _109.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _109.MsgSubmitMisbehaviourAmino) => _109.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _109.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgCreateClient;
                    fromPartial(object: Partial<_109.MsgCreateClient>): _109.MsgCreateClient;
                    fromAmino(object: _109.MsgCreateClientAmino): _109.MsgCreateClient;
                    toAmino(message: _109.MsgCreateClient): _109.MsgCreateClientAmino;
                    fromAminoMsg(object: _109.MsgCreateClientAminoMsg): _109.MsgCreateClient;
                    toAminoMsg(message: _109.MsgCreateClient): _109.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _109.MsgCreateClientProtoMsg): _109.MsgCreateClient;
                    toProto(message: _109.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _109.MsgCreateClient): _109.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgCreateClientResponse;
                    fromPartial(_: Partial<_109.MsgCreateClientResponse>): _109.MsgCreateClientResponse;
                    fromAmino(_: _109.MsgCreateClientResponseAmino): _109.MsgCreateClientResponse;
                    toAmino(_: _109.MsgCreateClientResponse): _109.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _109.MsgCreateClientResponseAminoMsg): _109.MsgCreateClientResponse;
                    toAminoMsg(message: _109.MsgCreateClientResponse): _109.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgCreateClientResponseProtoMsg): _109.MsgCreateClientResponse;
                    toProto(message: _109.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgCreateClientResponse): _109.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _109.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgUpdateClient;
                    fromPartial(object: Partial<_109.MsgUpdateClient>): _109.MsgUpdateClient;
                    fromAmino(object: _109.MsgUpdateClientAmino): _109.MsgUpdateClient;
                    toAmino(message: _109.MsgUpdateClient): _109.MsgUpdateClientAmino;
                    fromAminoMsg(object: _109.MsgUpdateClientAminoMsg): _109.MsgUpdateClient;
                    toAminoMsg(message: _109.MsgUpdateClient): _109.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _109.MsgUpdateClientProtoMsg): _109.MsgUpdateClient;
                    toProto(message: _109.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _109.MsgUpdateClient): _109.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_109.MsgUpdateClientResponse>): _109.MsgUpdateClientResponse;
                    fromAmino(_: _109.MsgUpdateClientResponseAmino): _109.MsgUpdateClientResponse;
                    toAmino(_: _109.MsgUpdateClientResponse): _109.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _109.MsgUpdateClientResponseAminoMsg): _109.MsgUpdateClientResponse;
                    toAminoMsg(message: _109.MsgUpdateClientResponse): _109.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgUpdateClientResponseProtoMsg): _109.MsgUpdateClientResponse;
                    toProto(message: _109.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgUpdateClientResponse): _109.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _109.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgUpgradeClient;
                    fromPartial(object: Partial<_109.MsgUpgradeClient>): _109.MsgUpgradeClient;
                    fromAmino(object: _109.MsgUpgradeClientAmino): _109.MsgUpgradeClient;
                    toAmino(message: _109.MsgUpgradeClient): _109.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _109.MsgUpgradeClientAminoMsg): _109.MsgUpgradeClient;
                    toAminoMsg(message: _109.MsgUpgradeClient): _109.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _109.MsgUpgradeClientProtoMsg): _109.MsgUpgradeClient;
                    toProto(message: _109.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _109.MsgUpgradeClient): _109.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_109.MsgUpgradeClientResponse>): _109.MsgUpgradeClientResponse;
                    fromAmino(_: _109.MsgUpgradeClientResponseAmino): _109.MsgUpgradeClientResponse;
                    toAmino(_: _109.MsgUpgradeClientResponse): _109.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _109.MsgUpgradeClientResponseAminoMsg): _109.MsgUpgradeClientResponse;
                    toAminoMsg(message: _109.MsgUpgradeClientResponse): _109.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgUpgradeClientResponseProtoMsg): _109.MsgUpgradeClientResponse;
                    toProto(message: _109.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgUpgradeClientResponse): _109.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _109.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_109.MsgSubmitMisbehaviour>): _109.MsgSubmitMisbehaviour;
                    fromAmino(object: _109.MsgSubmitMisbehaviourAmino): _109.MsgSubmitMisbehaviour;
                    toAmino(message: _109.MsgSubmitMisbehaviour): _109.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _109.MsgSubmitMisbehaviourAminoMsg): _109.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _109.MsgSubmitMisbehaviour): _109.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _109.MsgSubmitMisbehaviourProtoMsg): _109.MsgSubmitMisbehaviour;
                    toProto(message: _109.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _109.MsgSubmitMisbehaviour): _109.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_109.MsgSubmitMisbehaviourResponse>): _109.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _109.MsgSubmitMisbehaviourResponseAmino): _109.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _109.MsgSubmitMisbehaviourResponse): _109.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _109.MsgSubmitMisbehaviourResponseAminoMsg): _109.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _109.MsgSubmitMisbehaviourResponse): _109.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgSubmitMisbehaviourResponseProtoMsg): _109.MsgSubmitMisbehaviourResponse;
                    toProto(message: _109.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgSubmitMisbehaviourResponse): _109.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryClientStateRequest;
                    fromPartial(object: Partial<_108.QueryClientStateRequest>): _108.QueryClientStateRequest;
                    fromAmino(object: _108.QueryClientStateRequestAmino): _108.QueryClientStateRequest;
                    toAmino(message: _108.QueryClientStateRequest): _108.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _108.QueryClientStateRequestAminoMsg): _108.QueryClientStateRequest;
                    toAminoMsg(message: _108.QueryClientStateRequest): _108.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryClientStateRequestProtoMsg): _108.QueryClientStateRequest;
                    toProto(message: _108.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryClientStateRequest): _108.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryClientStateResponse;
                    fromPartial(object: Partial<_108.QueryClientStateResponse>): _108.QueryClientStateResponse;
                    fromAmino(object: _108.QueryClientStateResponseAmino): _108.QueryClientStateResponse;
                    toAmino(message: _108.QueryClientStateResponse): _108.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _108.QueryClientStateResponseAminoMsg): _108.QueryClientStateResponse;
                    toAminoMsg(message: _108.QueryClientStateResponse): _108.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryClientStateResponseProtoMsg): _108.QueryClientStateResponse;
                    toProto(message: _108.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryClientStateResponse): _108.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryClientStatesRequest;
                    fromPartial(object: Partial<_108.QueryClientStatesRequest>): _108.QueryClientStatesRequest;
                    fromAmino(object: _108.QueryClientStatesRequestAmino): _108.QueryClientStatesRequest;
                    toAmino(message: _108.QueryClientStatesRequest): _108.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _108.QueryClientStatesRequestAminoMsg): _108.QueryClientStatesRequest;
                    toAminoMsg(message: _108.QueryClientStatesRequest): _108.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryClientStatesRequestProtoMsg): _108.QueryClientStatesRequest;
                    toProto(message: _108.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryClientStatesRequest): _108.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryClientStatesResponse;
                    fromPartial(object: Partial<_108.QueryClientStatesResponse>): _108.QueryClientStatesResponse;
                    fromAmino(object: _108.QueryClientStatesResponseAmino): _108.QueryClientStatesResponse;
                    toAmino(message: _108.QueryClientStatesResponse): _108.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _108.QueryClientStatesResponseAminoMsg): _108.QueryClientStatesResponse;
                    toAminoMsg(message: _108.QueryClientStatesResponse): _108.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryClientStatesResponseProtoMsg): _108.QueryClientStatesResponse;
                    toProto(message: _108.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryClientStatesResponse): _108.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_108.QueryConsensusStateRequest>): _108.QueryConsensusStateRequest;
                    fromAmino(object: _108.QueryConsensusStateRequestAmino): _108.QueryConsensusStateRequest;
                    toAmino(message: _108.QueryConsensusStateRequest): _108.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _108.QueryConsensusStateRequestAminoMsg): _108.QueryConsensusStateRequest;
                    toAminoMsg(message: _108.QueryConsensusStateRequest): _108.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConsensusStateRequestProtoMsg): _108.QueryConsensusStateRequest;
                    toProto(message: _108.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConsensusStateRequest): _108.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_108.QueryConsensusStateResponse>): _108.QueryConsensusStateResponse;
                    fromAmino(object: _108.QueryConsensusStateResponseAmino): _108.QueryConsensusStateResponse;
                    toAmino(message: _108.QueryConsensusStateResponse): _108.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _108.QueryConsensusStateResponseAminoMsg): _108.QueryConsensusStateResponse;
                    toAminoMsg(message: _108.QueryConsensusStateResponse): _108.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConsensusStateResponseProtoMsg): _108.QueryConsensusStateResponse;
                    toProto(message: _108.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConsensusStateResponse): _108.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_108.QueryConsensusStatesRequest>): _108.QueryConsensusStatesRequest;
                    fromAmino(object: _108.QueryConsensusStatesRequestAmino): _108.QueryConsensusStatesRequest;
                    toAmino(message: _108.QueryConsensusStatesRequest): _108.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _108.QueryConsensusStatesRequestAminoMsg): _108.QueryConsensusStatesRequest;
                    toAminoMsg(message: _108.QueryConsensusStatesRequest): _108.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConsensusStatesRequestProtoMsg): _108.QueryConsensusStatesRequest;
                    toProto(message: _108.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConsensusStatesRequest): _108.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_108.QueryConsensusStatesResponse>): _108.QueryConsensusStatesResponse;
                    fromAmino(object: _108.QueryConsensusStatesResponseAmino): _108.QueryConsensusStatesResponse;
                    toAmino(message: _108.QueryConsensusStatesResponse): _108.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _108.QueryConsensusStatesResponseAminoMsg): _108.QueryConsensusStatesResponse;
                    toAminoMsg(message: _108.QueryConsensusStatesResponse): _108.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConsensusStatesResponseProtoMsg): _108.QueryConsensusStatesResponse;
                    toProto(message: _108.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConsensusStatesResponse): _108.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_108.QueryConsensusStateHeightsRequest>): _108.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _108.QueryConsensusStateHeightsRequestAmino): _108.QueryConsensusStateHeightsRequest;
                    toAmino(message: _108.QueryConsensusStateHeightsRequest): _108.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _108.QueryConsensusStateHeightsRequestAminoMsg): _108.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _108.QueryConsensusStateHeightsRequest): _108.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConsensusStateHeightsRequestProtoMsg): _108.QueryConsensusStateHeightsRequest;
                    toProto(message: _108.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConsensusStateHeightsRequest): _108.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_108.QueryConsensusStateHeightsResponse>): _108.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _108.QueryConsensusStateHeightsResponseAmino): _108.QueryConsensusStateHeightsResponse;
                    toAmino(message: _108.QueryConsensusStateHeightsResponse): _108.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _108.QueryConsensusStateHeightsResponseAminoMsg): _108.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _108.QueryConsensusStateHeightsResponse): _108.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConsensusStateHeightsResponseProtoMsg): _108.QueryConsensusStateHeightsResponse;
                    toProto(message: _108.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConsensusStateHeightsResponse): _108.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryClientStatusRequest;
                    fromPartial(object: Partial<_108.QueryClientStatusRequest>): _108.QueryClientStatusRequest;
                    fromAmino(object: _108.QueryClientStatusRequestAmino): _108.QueryClientStatusRequest;
                    toAmino(message: _108.QueryClientStatusRequest): _108.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _108.QueryClientStatusRequestAminoMsg): _108.QueryClientStatusRequest;
                    toAminoMsg(message: _108.QueryClientStatusRequest): _108.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryClientStatusRequestProtoMsg): _108.QueryClientStatusRequest;
                    toProto(message: _108.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryClientStatusRequest): _108.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryClientStatusResponse;
                    fromPartial(object: Partial<_108.QueryClientStatusResponse>): _108.QueryClientStatusResponse;
                    fromAmino(object: _108.QueryClientStatusResponseAmino): _108.QueryClientStatusResponse;
                    toAmino(message: _108.QueryClientStatusResponse): _108.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _108.QueryClientStatusResponseAminoMsg): _108.QueryClientStatusResponse;
                    toAminoMsg(message: _108.QueryClientStatusResponse): _108.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryClientStatusResponseProtoMsg): _108.QueryClientStatusResponse;
                    toProto(message: _108.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryClientStatusResponse): _108.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _108.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _108.QueryClientParamsRequest;
                    fromPartial(_: Partial<_108.QueryClientParamsRequest>): _108.QueryClientParamsRequest;
                    fromAmino(_: _108.QueryClientParamsRequestAmino): _108.QueryClientParamsRequest;
                    toAmino(_: _108.QueryClientParamsRequest): _108.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _108.QueryClientParamsRequestAminoMsg): _108.QueryClientParamsRequest;
                    toAminoMsg(message: _108.QueryClientParamsRequest): _108.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryClientParamsRequestProtoMsg): _108.QueryClientParamsRequest;
                    toProto(message: _108.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryClientParamsRequest): _108.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryClientParamsResponse;
                    fromPartial(object: Partial<_108.QueryClientParamsResponse>): _108.QueryClientParamsResponse;
                    fromAmino(object: _108.QueryClientParamsResponseAmino): _108.QueryClientParamsResponse;
                    toAmino(message: _108.QueryClientParamsResponse): _108.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _108.QueryClientParamsResponseAminoMsg): _108.QueryClientParamsResponse;
                    toAminoMsg(message: _108.QueryClientParamsResponse): _108.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryClientParamsResponseProtoMsg): _108.QueryClientParamsResponse;
                    toProto(message: _108.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryClientParamsResponse): _108.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _108.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _108.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_108.QueryUpgradedClientStateRequest>): _108.QueryUpgradedClientStateRequest;
                    fromAmino(_: _108.QueryUpgradedClientStateRequestAmino): _108.QueryUpgradedClientStateRequest;
                    toAmino(_: _108.QueryUpgradedClientStateRequest): _108.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _108.QueryUpgradedClientStateRequestAminoMsg): _108.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _108.QueryUpgradedClientStateRequest): _108.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryUpgradedClientStateRequestProtoMsg): _108.QueryUpgradedClientStateRequest;
                    toProto(message: _108.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryUpgradedClientStateRequest): _108.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_108.QueryUpgradedClientStateResponse>): _108.QueryUpgradedClientStateResponse;
                    fromAmino(object: _108.QueryUpgradedClientStateResponseAmino): _108.QueryUpgradedClientStateResponse;
                    toAmino(message: _108.QueryUpgradedClientStateResponse): _108.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _108.QueryUpgradedClientStateResponseAminoMsg): _108.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _108.QueryUpgradedClientStateResponse): _108.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryUpgradedClientStateResponseProtoMsg): _108.QueryUpgradedClientStateResponse;
                    toProto(message: _108.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryUpgradedClientStateResponse): _108.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _108.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _108.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_108.QueryUpgradedConsensusStateRequest>): _108.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _108.QueryUpgradedConsensusStateRequestAmino): _108.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _108.QueryUpgradedConsensusStateRequest): _108.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _108.QueryUpgradedConsensusStateRequestAminoMsg): _108.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _108.QueryUpgradedConsensusStateRequest): _108.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryUpgradedConsensusStateRequestProtoMsg): _108.QueryUpgradedConsensusStateRequest;
                    toProto(message: _108.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryUpgradedConsensusStateRequest): _108.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_108.QueryUpgradedConsensusStateResponse>): _108.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _108.QueryUpgradedConsensusStateResponseAmino): _108.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _108.QueryUpgradedConsensusStateResponse): _108.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _108.QueryUpgradedConsensusStateResponseAminoMsg): _108.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _108.QueryUpgradedConsensusStateResponse): _108.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryUpgradedConsensusStateResponseProtoMsg): _108.QueryUpgradedConsensusStateResponse;
                    toProto(message: _108.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryUpgradedConsensusStateResponse): _108.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.GenesisState;
                    fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                    fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
                    toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
                    fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
                    toAminoMsg(message: _107.GenesisState): _107.GenesisStateAminoMsg;
                    fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
                    toProto(message: _107.GenesisState): Uint8Array;
                    toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _107.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.GenesisMetadata;
                    fromPartial(object: Partial<_107.GenesisMetadata>): _107.GenesisMetadata;
                    fromAmino(object: _107.GenesisMetadataAmino): _107.GenesisMetadata;
                    toAmino(message: _107.GenesisMetadata): _107.GenesisMetadataAmino;
                    fromAminoMsg(object: _107.GenesisMetadataAminoMsg): _107.GenesisMetadata;
                    toAminoMsg(message: _107.GenesisMetadata): _107.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _107.GenesisMetadataProtoMsg): _107.GenesisMetadata;
                    toProto(message: _107.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _107.GenesisMetadata): _107.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _107.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_107.IdentifiedGenesisMetadata>): _107.IdentifiedGenesisMetadata;
                    fromAmino(object: _107.IdentifiedGenesisMetadataAmino): _107.IdentifiedGenesisMetadata;
                    toAmino(message: _107.IdentifiedGenesisMetadata): _107.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _107.IdentifiedGenesisMetadataAminoMsg): _107.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _107.IdentifiedGenesisMetadata): _107.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _107.IdentifiedGenesisMetadataProtoMsg): _107.IdentifiedGenesisMetadata;
                    toProto(message: _107.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _107.IdentifiedGenesisMetadata): _107.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _106.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.IdentifiedClientState;
                    fromPartial(object: Partial<_106.IdentifiedClientState>): _106.IdentifiedClientState;
                    fromAmino(object: _106.IdentifiedClientStateAmino): _106.IdentifiedClientState;
                    toAmino(message: _106.IdentifiedClientState): _106.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _106.IdentifiedClientStateAminoMsg): _106.IdentifiedClientState;
                    toAminoMsg(message: _106.IdentifiedClientState): _106.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _106.IdentifiedClientStateProtoMsg): _106.IdentifiedClientState;
                    toProto(message: _106.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _106.IdentifiedClientState): _106.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _106.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_106.ConsensusStateWithHeight>): _106.ConsensusStateWithHeight;
                    fromAmino(object: _106.ConsensusStateWithHeightAmino): _106.ConsensusStateWithHeight;
                    toAmino(message: _106.ConsensusStateWithHeight): _106.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _106.ConsensusStateWithHeightAminoMsg): _106.ConsensusStateWithHeight;
                    toAminoMsg(message: _106.ConsensusStateWithHeight): _106.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _106.ConsensusStateWithHeightProtoMsg): _106.ConsensusStateWithHeight;
                    toProto(message: _106.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _106.ConsensusStateWithHeight): _106.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _106.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ClientConsensusStates;
                    fromPartial(object: Partial<_106.ClientConsensusStates>): _106.ClientConsensusStates;
                    fromAmino(object: _106.ClientConsensusStatesAmino): _106.ClientConsensusStates;
                    toAmino(message: _106.ClientConsensusStates): _106.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _106.ClientConsensusStatesAminoMsg): _106.ClientConsensusStates;
                    toAminoMsg(message: _106.ClientConsensusStates): _106.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _106.ClientConsensusStatesProtoMsg): _106.ClientConsensusStates;
                    toProto(message: _106.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _106.ClientConsensusStates): _106.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _106.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ClientUpdateProposal;
                    fromPartial(object: Partial<_106.ClientUpdateProposal>): _106.ClientUpdateProposal;
                    fromAmino(object: _106.ClientUpdateProposalAmino): _106.ClientUpdateProposal;
                    toAmino(message: _106.ClientUpdateProposal): _106.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _106.ClientUpdateProposalAminoMsg): _106.ClientUpdateProposal;
                    toAminoMsg(message: _106.ClientUpdateProposal): _106.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _106.ClientUpdateProposalProtoMsg): _106.ClientUpdateProposal;
                    toProto(message: _106.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _106.ClientUpdateProposal): _106.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _106.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.UpgradeProposal;
                    fromPartial(object: Partial<_106.UpgradeProposal>): _106.UpgradeProposal;
                    fromAmino(object: _106.UpgradeProposalAmino): _106.UpgradeProposal;
                    toAmino(message: _106.UpgradeProposal): _106.UpgradeProposalAmino;
                    fromAminoMsg(object: _106.UpgradeProposalAminoMsg): _106.UpgradeProposal;
                    toAminoMsg(message: _106.UpgradeProposal): _106.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _106.UpgradeProposalProtoMsg): _106.UpgradeProposal;
                    toProto(message: _106.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _106.UpgradeProposal): _106.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _106.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Height;
                    fromPartial(object: Partial<_106.Height>): _106.Height;
                    fromAmino(object: _106.HeightAmino): _106.Height;
                    toAmino(message: _106.Height): _106.HeightAmino;
                    fromAminoMsg(object: _106.HeightAminoMsg): _106.Height;
                    toAminoMsg(message: _106.Height): _106.HeightAminoMsg;
                    fromProtoMsg(message: _106.HeightProtoMsg): _106.Height;
                    toProto(message: _106.Height): Uint8Array;
                    toProtoMsg(message: _106.Height): _106.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _106.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Params;
                    fromPartial(object: Partial<_106.Params>): _106.Params;
                    fromAmino(object: _106.ParamsAmino): _106.Params;
                    toAmino(message: _106.Params): _106.ParamsAmino;
                    fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                    toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                    fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                    toProto(message: _106.Params): Uint8Array;
                    toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _110.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.MerkleRoot;
                    fromPartial(object: Partial<_110.MerkleRoot>): _110.MerkleRoot;
                    fromAmino(object: _110.MerkleRootAmino): _110.MerkleRoot;
                    toAmino(message: _110.MerkleRoot): _110.MerkleRootAmino;
                    fromAminoMsg(object: _110.MerkleRootAminoMsg): _110.MerkleRoot;
                    toAminoMsg(message: _110.MerkleRoot): _110.MerkleRootAminoMsg;
                    fromProtoMsg(message: _110.MerkleRootProtoMsg): _110.MerkleRoot;
                    toProto(message: _110.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _110.MerkleRoot): _110.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _110.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.MerklePrefix;
                    fromPartial(object: Partial<_110.MerklePrefix>): _110.MerklePrefix;
                    fromAmino(object: _110.MerklePrefixAmino): _110.MerklePrefix;
                    toAmino(message: _110.MerklePrefix): _110.MerklePrefixAmino;
                    fromAminoMsg(object: _110.MerklePrefixAminoMsg): _110.MerklePrefix;
                    toAminoMsg(message: _110.MerklePrefix): _110.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _110.MerklePrefixProtoMsg): _110.MerklePrefix;
                    toProto(message: _110.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _110.MerklePrefix): _110.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _110.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.MerklePath;
                    fromPartial(object: Partial<_110.MerklePath>): _110.MerklePath;
                    fromAmino(object: _110.MerklePathAmino): _110.MerklePath;
                    toAmino(message: _110.MerklePath): _110.MerklePathAmino;
                    fromAminoMsg(object: _110.MerklePathAminoMsg): _110.MerklePath;
                    toAminoMsg(message: _110.MerklePath): _110.MerklePathAminoMsg;
                    fromProtoMsg(message: _110.MerklePathProtoMsg): _110.MerklePath;
                    toProto(message: _110.MerklePath): Uint8Array;
                    toProtoMsg(message: _110.MerklePath): _110.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _110.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.MerkleProof;
                    fromPartial(object: Partial<_110.MerkleProof>): _110.MerkleProof;
                    fromAmino(object: _110.MerkleProofAmino): _110.MerkleProof;
                    toAmino(message: _110.MerkleProof): _110.MerkleProofAmino;
                    fromAminoMsg(object: _110.MerkleProofAminoMsg): _110.MerkleProof;
                    toAminoMsg(message: _110.MerkleProof): _110.MerkleProofAminoMsg;
                    fromProtoMsg(message: _110.MerkleProofProtoMsg): _110.MerkleProof;
                    toProto(message: _110.MerkleProof): Uint8Array;
                    toProtoMsg(message: _110.MerkleProof): _110.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _221.MsgClientImpl;
                QueryClientImpl: typeof _217.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _113.QueryConnectionRequest): Promise<_113.QueryConnectionResponse>;
                    connections(request?: _113.QueryConnectionsRequest): Promise<_113.QueryConnectionsResponse>;
                    clientConnections(request: _113.QueryClientConnectionsRequest): Promise<_113.QueryClientConnectionsResponse>;
                    connectionClientState(request: _113.QueryConnectionClientStateRequest): Promise<_113.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _113.QueryConnectionConsensusStateRequest): Promise<_113.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _211.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _114.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _114.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _114.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _114.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _114.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _114.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _114.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _114.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _114.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _114.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _114.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _114.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _114.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _114.MsgConnectionOpenInit) => _114.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _114.MsgConnectionOpenInitAmino) => _114.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _114.MsgConnectionOpenTry) => _114.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _114.MsgConnectionOpenTryAmino) => _114.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _114.MsgConnectionOpenAck) => _114.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _114.MsgConnectionOpenAckAmino) => _114.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _114.MsgConnectionOpenConfirm) => _114.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _114.MsgConnectionOpenConfirmAmino) => _114.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _114.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_114.MsgConnectionOpenInit>): _114.MsgConnectionOpenInit;
                    fromAmino(object: _114.MsgConnectionOpenInitAmino): _114.MsgConnectionOpenInit;
                    toAmino(message: _114.MsgConnectionOpenInit): _114.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenInitAminoMsg): _114.MsgConnectionOpenInit;
                    toAminoMsg(message: _114.MsgConnectionOpenInit): _114.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenInitProtoMsg): _114.MsgConnectionOpenInit;
                    toProto(message: _114.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenInit): _114.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _114.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _114.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenInitResponse>): _114.MsgConnectionOpenInitResponse;
                    fromAmino(_: _114.MsgConnectionOpenInitResponseAmino): _114.MsgConnectionOpenInitResponse;
                    toAmino(_: _114.MsgConnectionOpenInitResponse): _114.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenInitResponseAminoMsg): _114.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _114.MsgConnectionOpenInitResponse): _114.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenInitResponseProtoMsg): _114.MsgConnectionOpenInitResponse;
                    toProto(message: _114.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenInitResponse): _114.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _114.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_114.MsgConnectionOpenTry>): _114.MsgConnectionOpenTry;
                    fromAmino(object: _114.MsgConnectionOpenTryAmino): _114.MsgConnectionOpenTry;
                    toAmino(message: _114.MsgConnectionOpenTry): _114.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenTryAminoMsg): _114.MsgConnectionOpenTry;
                    toAminoMsg(message: _114.MsgConnectionOpenTry): _114.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenTryProtoMsg): _114.MsgConnectionOpenTry;
                    toProto(message: _114.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenTry): _114.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _114.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _114.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenTryResponse>): _114.MsgConnectionOpenTryResponse;
                    fromAmino(_: _114.MsgConnectionOpenTryResponseAmino): _114.MsgConnectionOpenTryResponse;
                    toAmino(_: _114.MsgConnectionOpenTryResponse): _114.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenTryResponseAminoMsg): _114.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _114.MsgConnectionOpenTryResponse): _114.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenTryResponseProtoMsg): _114.MsgConnectionOpenTryResponse;
                    toProto(message: _114.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenTryResponse): _114.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _114.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_114.MsgConnectionOpenAck>): _114.MsgConnectionOpenAck;
                    fromAmino(object: _114.MsgConnectionOpenAckAmino): _114.MsgConnectionOpenAck;
                    toAmino(message: _114.MsgConnectionOpenAck): _114.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenAckAminoMsg): _114.MsgConnectionOpenAck;
                    toAminoMsg(message: _114.MsgConnectionOpenAck): _114.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenAckProtoMsg): _114.MsgConnectionOpenAck;
                    toProto(message: _114.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenAck): _114.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _114.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _114.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenAckResponse>): _114.MsgConnectionOpenAckResponse;
                    fromAmino(_: _114.MsgConnectionOpenAckResponseAmino): _114.MsgConnectionOpenAckResponse;
                    toAmino(_: _114.MsgConnectionOpenAckResponse): _114.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenAckResponseAminoMsg): _114.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _114.MsgConnectionOpenAckResponse): _114.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenAckResponseProtoMsg): _114.MsgConnectionOpenAckResponse;
                    toProto(message: _114.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenAckResponse): _114.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _114.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_114.MsgConnectionOpenConfirm>): _114.MsgConnectionOpenConfirm;
                    fromAmino(object: _114.MsgConnectionOpenConfirmAmino): _114.MsgConnectionOpenConfirm;
                    toAmino(message: _114.MsgConnectionOpenConfirm): _114.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenConfirmAminoMsg): _114.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _114.MsgConnectionOpenConfirm): _114.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenConfirmProtoMsg): _114.MsgConnectionOpenConfirm;
                    toProto(message: _114.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenConfirm): _114.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _114.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _114.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_114.MsgConnectionOpenConfirmResponse>): _114.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _114.MsgConnectionOpenConfirmResponseAmino): _114.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _114.MsgConnectionOpenConfirmResponse): _114.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _114.MsgConnectionOpenConfirmResponseAminoMsg): _114.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _114.MsgConnectionOpenConfirmResponse): _114.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _114.MsgConnectionOpenConfirmResponseProtoMsg): _114.MsgConnectionOpenConfirmResponse;
                    toProto(message: _114.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _114.MsgConnectionOpenConfirmResponse): _114.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionRequest;
                    fromPartial(object: Partial<_113.QueryConnectionRequest>): _113.QueryConnectionRequest;
                    fromAmino(object: _113.QueryConnectionRequestAmino): _113.QueryConnectionRequest;
                    toAmino(message: _113.QueryConnectionRequest): _113.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _113.QueryConnectionRequestAminoMsg): _113.QueryConnectionRequest;
                    toAminoMsg(message: _113.QueryConnectionRequest): _113.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionRequestProtoMsg): _113.QueryConnectionRequest;
                    toProto(message: _113.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionRequest): _113.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionResponse;
                    fromPartial(object: Partial<_113.QueryConnectionResponse>): _113.QueryConnectionResponse;
                    fromAmino(object: _113.QueryConnectionResponseAmino): _113.QueryConnectionResponse;
                    toAmino(message: _113.QueryConnectionResponse): _113.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _113.QueryConnectionResponseAminoMsg): _113.QueryConnectionResponse;
                    toAminoMsg(message: _113.QueryConnectionResponse): _113.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionResponseProtoMsg): _113.QueryConnectionResponse;
                    toProto(message: _113.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionResponse): _113.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionsRequest;
                    fromPartial(object: Partial<_113.QueryConnectionsRequest>): _113.QueryConnectionsRequest;
                    fromAmino(object: _113.QueryConnectionsRequestAmino): _113.QueryConnectionsRequest;
                    toAmino(message: _113.QueryConnectionsRequest): _113.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _113.QueryConnectionsRequestAminoMsg): _113.QueryConnectionsRequest;
                    toAminoMsg(message: _113.QueryConnectionsRequest): _113.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionsRequestProtoMsg): _113.QueryConnectionsRequest;
                    toProto(message: _113.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionsRequest): _113.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionsResponse;
                    fromPartial(object: Partial<_113.QueryConnectionsResponse>): _113.QueryConnectionsResponse;
                    fromAmino(object: _113.QueryConnectionsResponseAmino): _113.QueryConnectionsResponse;
                    toAmino(message: _113.QueryConnectionsResponse): _113.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _113.QueryConnectionsResponseAminoMsg): _113.QueryConnectionsResponse;
                    toAminoMsg(message: _113.QueryConnectionsResponse): _113.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionsResponseProtoMsg): _113.QueryConnectionsResponse;
                    toProto(message: _113.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionsResponse): _113.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _113.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_113.QueryClientConnectionsRequest>): _113.QueryClientConnectionsRequest;
                    fromAmino(object: _113.QueryClientConnectionsRequestAmino): _113.QueryClientConnectionsRequest;
                    toAmino(message: _113.QueryClientConnectionsRequest): _113.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _113.QueryClientConnectionsRequestAminoMsg): _113.QueryClientConnectionsRequest;
                    toAminoMsg(message: _113.QueryClientConnectionsRequest): _113.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _113.QueryClientConnectionsRequestProtoMsg): _113.QueryClientConnectionsRequest;
                    toProto(message: _113.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _113.QueryClientConnectionsRequest): _113.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _113.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_113.QueryClientConnectionsResponse>): _113.QueryClientConnectionsResponse;
                    fromAmino(object: _113.QueryClientConnectionsResponseAmino): _113.QueryClientConnectionsResponse;
                    toAmino(message: _113.QueryClientConnectionsResponse): _113.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _113.QueryClientConnectionsResponseAminoMsg): _113.QueryClientConnectionsResponse;
                    toAminoMsg(message: _113.QueryClientConnectionsResponse): _113.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _113.QueryClientConnectionsResponseProtoMsg): _113.QueryClientConnectionsResponse;
                    toProto(message: _113.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _113.QueryClientConnectionsResponse): _113.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_113.QueryConnectionClientStateRequest>): _113.QueryConnectionClientStateRequest;
                    fromAmino(object: _113.QueryConnectionClientStateRequestAmino): _113.QueryConnectionClientStateRequest;
                    toAmino(message: _113.QueryConnectionClientStateRequest): _113.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _113.QueryConnectionClientStateRequestAminoMsg): _113.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _113.QueryConnectionClientStateRequest): _113.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionClientStateRequestProtoMsg): _113.QueryConnectionClientStateRequest;
                    toProto(message: _113.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionClientStateRequest): _113.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_113.QueryConnectionClientStateResponse>): _113.QueryConnectionClientStateResponse;
                    fromAmino(object: _113.QueryConnectionClientStateResponseAmino): _113.QueryConnectionClientStateResponse;
                    toAmino(message: _113.QueryConnectionClientStateResponse): _113.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _113.QueryConnectionClientStateResponseAminoMsg): _113.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _113.QueryConnectionClientStateResponse): _113.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionClientStateResponseProtoMsg): _113.QueryConnectionClientStateResponse;
                    toProto(message: _113.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionClientStateResponse): _113.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_113.QueryConnectionConsensusStateRequest>): _113.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _113.QueryConnectionConsensusStateRequestAmino): _113.QueryConnectionConsensusStateRequest;
                    toAmino(message: _113.QueryConnectionConsensusStateRequest): _113.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _113.QueryConnectionConsensusStateRequestAminoMsg): _113.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _113.QueryConnectionConsensusStateRequest): _113.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionConsensusStateRequestProtoMsg): _113.QueryConnectionConsensusStateRequest;
                    toProto(message: _113.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionConsensusStateRequest): _113.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _113.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_113.QueryConnectionConsensusStateResponse>): _113.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _113.QueryConnectionConsensusStateResponseAmino): _113.QueryConnectionConsensusStateResponse;
                    toAmino(message: _113.QueryConnectionConsensusStateResponse): _113.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _113.QueryConnectionConsensusStateResponseAminoMsg): _113.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _113.QueryConnectionConsensusStateResponse): _113.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _113.QueryConnectionConsensusStateResponseProtoMsg): _113.QueryConnectionConsensusStateResponse;
                    toProto(message: _113.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _113.QueryConnectionConsensusStateResponse): _113.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _112.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.GenesisState;
                    fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                    fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                    toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                    fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                    toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                    fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                    toProto(message: _112.GenesisState): Uint8Array;
                    toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _111.State;
                stateToJSON(object: _111.State): string;
                State: typeof _111.State;
                StateSDKType: typeof _111.State;
                StateAmino: typeof _111.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _111.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.ConnectionEnd;
                    fromPartial(object: Partial<_111.ConnectionEnd>): _111.ConnectionEnd;
                    fromAmino(object: _111.ConnectionEndAmino): _111.ConnectionEnd;
                    toAmino(message: _111.ConnectionEnd): _111.ConnectionEndAmino;
                    fromAminoMsg(object: _111.ConnectionEndAminoMsg): _111.ConnectionEnd;
                    toAminoMsg(message: _111.ConnectionEnd): _111.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _111.ConnectionEndProtoMsg): _111.ConnectionEnd;
                    toProto(message: _111.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _111.ConnectionEnd): _111.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _111.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.IdentifiedConnection;
                    fromPartial(object: Partial<_111.IdentifiedConnection>): _111.IdentifiedConnection;
                    fromAmino(object: _111.IdentifiedConnectionAmino): _111.IdentifiedConnection;
                    toAmino(message: _111.IdentifiedConnection): _111.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _111.IdentifiedConnectionAminoMsg): _111.IdentifiedConnection;
                    toAminoMsg(message: _111.IdentifiedConnection): _111.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _111.IdentifiedConnectionProtoMsg): _111.IdentifiedConnection;
                    toProto(message: _111.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _111.IdentifiedConnection): _111.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _111.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.Counterparty;
                    fromPartial(object: Partial<_111.Counterparty>): _111.Counterparty;
                    fromAmino(object: _111.CounterpartyAmino): _111.Counterparty;
                    toAmino(message: _111.Counterparty): _111.CounterpartyAmino;
                    fromAminoMsg(object: _111.CounterpartyAminoMsg): _111.Counterparty;
                    toAminoMsg(message: _111.Counterparty): _111.CounterpartyAminoMsg;
                    fromProtoMsg(message: _111.CounterpartyProtoMsg): _111.Counterparty;
                    toProto(message: _111.Counterparty): Uint8Array;
                    toProtoMsg(message: _111.Counterparty): _111.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _111.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.ClientPaths;
                    fromPartial(object: Partial<_111.ClientPaths>): _111.ClientPaths;
                    fromAmino(object: _111.ClientPathsAmino): _111.ClientPaths;
                    toAmino(message: _111.ClientPaths): _111.ClientPathsAmino;
                    fromAminoMsg(object: _111.ClientPathsAminoMsg): _111.ClientPaths;
                    toAminoMsg(message: _111.ClientPaths): _111.ClientPathsAminoMsg;
                    fromProtoMsg(message: _111.ClientPathsProtoMsg): _111.ClientPaths;
                    toProto(message: _111.ClientPaths): Uint8Array;
                    toProtoMsg(message: _111.ClientPaths): _111.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _111.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.ConnectionPaths;
                    fromPartial(object: Partial<_111.ConnectionPaths>): _111.ConnectionPaths;
                    fromAmino(object: _111.ConnectionPathsAmino): _111.ConnectionPaths;
                    toAmino(message: _111.ConnectionPaths): _111.ConnectionPathsAmino;
                    fromAminoMsg(object: _111.ConnectionPathsAminoMsg): _111.ConnectionPaths;
                    toAminoMsg(message: _111.ConnectionPaths): _111.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _111.ConnectionPathsProtoMsg): _111.ConnectionPaths;
                    toProto(message: _111.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _111.ConnectionPaths): _111.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _111.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.Version;
                    fromPartial(object: Partial<_111.Version>): _111.Version;
                    fromAmino(object: _111.VersionAmino): _111.Version;
                    toAmino(message: _111.Version): _111.VersionAmino;
                    fromAminoMsg(object: _111.VersionAminoMsg): _111.Version;
                    toAminoMsg(message: _111.Version): _111.VersionAminoMsg;
                    fromProtoMsg(message: _111.VersionProtoMsg): _111.Version;
                    toProto(message: _111.Version): Uint8Array;
                    toProtoMsg(message: _111.Version): _111.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _111.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.Params;
                    fromPartial(object: Partial<_111.Params>): _111.Params;
                    fromAmino(object: _111.ParamsAmino): _111.Params;
                    toAmino(message: _111.Params): _111.ParamsAmino;
                    fromAminoMsg(object: _111.ParamsAminoMsg): _111.Params;
                    toAminoMsg(message: _111.Params): _111.ParamsAminoMsg;
                    fromProtoMsg(message: _111.ParamsProtoMsg): _111.Params;
                    toProto(message: _111.Params): Uint8Array;
                    toProtoMsg(message: _111.Params): _111.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _115.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.GenesisState;
                    fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
                    fromAmino(object: _115.GenesisStateAmino): _115.GenesisState;
                    toAmino(message: _115.GenesisState): _115.GenesisStateAmino;
                    fromAminoMsg(object: _115.GenesisStateAminoMsg): _115.GenesisState;
                    toAminoMsg(message: _115.GenesisState): _115.GenesisStateAminoMsg;
                    fromProtoMsg(message: _115.GenesisStateProtoMsg): _115.GenesisState;
                    toProto(message: _115.GenesisState): Uint8Array;
                    toProtoMsg(message: _115.GenesisState): _115.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _116.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.ClientState;
                    fromPartial(object: Partial<_116.ClientState>): _116.ClientState;
                    fromAmino(object: _116.ClientStateAmino): _116.ClientState;
                    toAmino(message: _116.ClientState): _116.ClientStateAmino;
                    fromAminoMsg(object: _116.ClientStateAminoMsg): _116.ClientState;
                    toAminoMsg(message: _116.ClientState): _116.ClientStateAminoMsg;
                    fromProtoMsg(message: _116.ClientStateProtoMsg): _116.ClientState;
                    toProto(message: _116.ClientState): Uint8Array;
                    toProtoMsg(message: _116.ClientState): _116.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _117.DataType;
                dataTypeToJSON(object: _117.DataType): string;
                DataType: typeof _117.DataType;
                DataTypeSDKType: typeof _117.DataType;
                DataTypeAmino: typeof _117.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _117.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ClientState;
                    fromPartial(object: Partial<_117.ClientState>): _117.ClientState;
                    fromAmino(object: _117.ClientStateAmino): _117.ClientState;
                    toAmino(message: _117.ClientState): _117.ClientStateAmino;
                    fromAminoMsg(object: _117.ClientStateAminoMsg): _117.ClientState;
                    toAminoMsg(message: _117.ClientState): _117.ClientStateAminoMsg;
                    fromProtoMsg(message: _117.ClientStateProtoMsg): _117.ClientState;
                    toProto(message: _117.ClientState): Uint8Array;
                    toProtoMsg(message: _117.ClientState): _117.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _117.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ConsensusState;
                    fromPartial(object: Partial<_117.ConsensusState>): _117.ConsensusState;
                    fromAmino(object: _117.ConsensusStateAmino): _117.ConsensusState;
                    toAmino(message: _117.ConsensusState): _117.ConsensusStateAmino;
                    fromAminoMsg(object: _117.ConsensusStateAminoMsg): _117.ConsensusState;
                    toAminoMsg(message: _117.ConsensusState): _117.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _117.ConsensusStateProtoMsg): _117.ConsensusState;
                    toProto(message: _117.ConsensusState): Uint8Array;
                    toProtoMsg(message: _117.ConsensusState): _117.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _117.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.Header;
                    fromPartial(object: Partial<_117.Header>): _117.Header;
                    fromAmino(object: _117.HeaderAmino): _117.Header;
                    toAmino(message: _117.Header): _117.HeaderAmino;
                    fromAminoMsg(object: _117.HeaderAminoMsg): _117.Header;
                    toAminoMsg(message: _117.Header): _117.HeaderAminoMsg;
                    fromProtoMsg(message: _117.HeaderProtoMsg): _117.Header;
                    toProto(message: _117.Header): Uint8Array;
                    toProtoMsg(message: _117.Header): _117.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _117.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.Misbehaviour;
                    fromPartial(object: Partial<_117.Misbehaviour>): _117.Misbehaviour;
                    fromAmino(object: _117.MisbehaviourAmino): _117.Misbehaviour;
                    toAmino(message: _117.Misbehaviour): _117.MisbehaviourAmino;
                    fromAminoMsg(object: _117.MisbehaviourAminoMsg): _117.Misbehaviour;
                    toAminoMsg(message: _117.Misbehaviour): _117.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _117.MisbehaviourProtoMsg): _117.Misbehaviour;
                    toProto(message: _117.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _117.Misbehaviour): _117.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _117.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.SignatureAndData;
                    fromPartial(object: Partial<_117.SignatureAndData>): _117.SignatureAndData;
                    fromAmino(object: _117.SignatureAndDataAmino): _117.SignatureAndData;
                    toAmino(message: _117.SignatureAndData): _117.SignatureAndDataAmino;
                    fromAminoMsg(object: _117.SignatureAndDataAminoMsg): _117.SignatureAndData;
                    toAminoMsg(message: _117.SignatureAndData): _117.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _117.SignatureAndDataProtoMsg): _117.SignatureAndData;
                    toProto(message: _117.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _117.SignatureAndData): _117.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _117.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.TimestampedSignatureData;
                    fromPartial(object: Partial<_117.TimestampedSignatureData>): _117.TimestampedSignatureData;
                    fromAmino(object: _117.TimestampedSignatureDataAmino): _117.TimestampedSignatureData;
                    toAmino(message: _117.TimestampedSignatureData): _117.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _117.TimestampedSignatureDataAminoMsg): _117.TimestampedSignatureData;
                    toAminoMsg(message: _117.TimestampedSignatureData): _117.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _117.TimestampedSignatureDataProtoMsg): _117.TimestampedSignatureData;
                    toProto(message: _117.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _117.TimestampedSignatureData): _117.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _117.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.SignBytes;
                    fromPartial(object: Partial<_117.SignBytes>): _117.SignBytes;
                    fromAmino(object: _117.SignBytesAmino): _117.SignBytes;
                    toAmino(message: _117.SignBytes): _117.SignBytesAmino;
                    fromAminoMsg(object: _117.SignBytesAminoMsg): _117.SignBytes;
                    toAminoMsg(message: _117.SignBytes): _117.SignBytesAminoMsg;
                    fromProtoMsg(message: _117.SignBytesProtoMsg): _117.SignBytes;
                    toProto(message: _117.SignBytes): Uint8Array;
                    toProtoMsg(message: _117.SignBytes): _117.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _117.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.HeaderData;
                    fromPartial(object: Partial<_117.HeaderData>): _117.HeaderData;
                    fromAmino(object: _117.HeaderDataAmino): _117.HeaderData;
                    toAmino(message: _117.HeaderData): _117.HeaderDataAmino;
                    fromAminoMsg(object: _117.HeaderDataAminoMsg): _117.HeaderData;
                    toAminoMsg(message: _117.HeaderData): _117.HeaderDataAminoMsg;
                    fromProtoMsg(message: _117.HeaderDataProtoMsg): _117.HeaderData;
                    toProto(message: _117.HeaderData): Uint8Array;
                    toProtoMsg(message: _117.HeaderData): _117.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _117.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ClientStateData;
                    fromPartial(object: Partial<_117.ClientStateData>): _117.ClientStateData;
                    fromAmino(object: _117.ClientStateDataAmino): _117.ClientStateData;
                    toAmino(message: _117.ClientStateData): _117.ClientStateDataAmino;
                    fromAminoMsg(object: _117.ClientStateDataAminoMsg): _117.ClientStateData;
                    toAminoMsg(message: _117.ClientStateData): _117.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _117.ClientStateDataProtoMsg): _117.ClientStateData;
                    toProto(message: _117.ClientStateData): Uint8Array;
                    toProtoMsg(message: _117.ClientStateData): _117.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _117.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ConsensusStateData;
                    fromPartial(object: Partial<_117.ConsensusStateData>): _117.ConsensusStateData;
                    fromAmino(object: _117.ConsensusStateDataAmino): _117.ConsensusStateData;
                    toAmino(message: _117.ConsensusStateData): _117.ConsensusStateDataAmino;
                    fromAminoMsg(object: _117.ConsensusStateDataAminoMsg): _117.ConsensusStateData;
                    toAminoMsg(message: _117.ConsensusStateData): _117.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _117.ConsensusStateDataProtoMsg): _117.ConsensusStateData;
                    toProto(message: _117.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _117.ConsensusStateData): _117.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _117.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ConnectionStateData;
                    fromPartial(object: Partial<_117.ConnectionStateData>): _117.ConnectionStateData;
                    fromAmino(object: _117.ConnectionStateDataAmino): _117.ConnectionStateData;
                    toAmino(message: _117.ConnectionStateData): _117.ConnectionStateDataAmino;
                    fromAminoMsg(object: _117.ConnectionStateDataAminoMsg): _117.ConnectionStateData;
                    toAminoMsg(message: _117.ConnectionStateData): _117.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _117.ConnectionStateDataProtoMsg): _117.ConnectionStateData;
                    toProto(message: _117.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _117.ConnectionStateData): _117.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _117.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.ChannelStateData;
                    fromPartial(object: Partial<_117.ChannelStateData>): _117.ChannelStateData;
                    fromAmino(object: _117.ChannelStateDataAmino): _117.ChannelStateData;
                    toAmino(message: _117.ChannelStateData): _117.ChannelStateDataAmino;
                    fromAminoMsg(object: _117.ChannelStateDataAminoMsg): _117.ChannelStateData;
                    toAminoMsg(message: _117.ChannelStateData): _117.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _117.ChannelStateDataProtoMsg): _117.ChannelStateData;
                    toProto(message: _117.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _117.ChannelStateData): _117.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _117.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.PacketCommitmentData;
                    fromPartial(object: Partial<_117.PacketCommitmentData>): _117.PacketCommitmentData;
                    fromAmino(object: _117.PacketCommitmentDataAmino): _117.PacketCommitmentData;
                    toAmino(message: _117.PacketCommitmentData): _117.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _117.PacketCommitmentDataAminoMsg): _117.PacketCommitmentData;
                    toAminoMsg(message: _117.PacketCommitmentData): _117.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _117.PacketCommitmentDataProtoMsg): _117.PacketCommitmentData;
                    toProto(message: _117.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _117.PacketCommitmentData): _117.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _117.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.PacketAcknowledgementData;
                    fromPartial(object: Partial<_117.PacketAcknowledgementData>): _117.PacketAcknowledgementData;
                    fromAmino(object: _117.PacketAcknowledgementDataAmino): _117.PacketAcknowledgementData;
                    toAmino(message: _117.PacketAcknowledgementData): _117.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _117.PacketAcknowledgementDataAminoMsg): _117.PacketAcknowledgementData;
                    toAminoMsg(message: _117.PacketAcknowledgementData): _117.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _117.PacketAcknowledgementDataProtoMsg): _117.PacketAcknowledgementData;
                    toProto(message: _117.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _117.PacketAcknowledgementData): _117.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _117.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_117.PacketReceiptAbsenceData>): _117.PacketReceiptAbsenceData;
                    fromAmino(object: _117.PacketReceiptAbsenceDataAmino): _117.PacketReceiptAbsenceData;
                    toAmino(message: _117.PacketReceiptAbsenceData): _117.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _117.PacketReceiptAbsenceDataAminoMsg): _117.PacketReceiptAbsenceData;
                    toAminoMsg(message: _117.PacketReceiptAbsenceData): _117.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _117.PacketReceiptAbsenceDataProtoMsg): _117.PacketReceiptAbsenceData;
                    toProto(message: _117.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _117.PacketReceiptAbsenceData): _117.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _117.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.NextSequenceRecvData;
                    fromPartial(object: Partial<_117.NextSequenceRecvData>): _117.NextSequenceRecvData;
                    fromAmino(object: _117.NextSequenceRecvDataAmino): _117.NextSequenceRecvData;
                    toAmino(message: _117.NextSequenceRecvData): _117.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _117.NextSequenceRecvDataAminoMsg): _117.NextSequenceRecvData;
                    toAminoMsg(message: _117.NextSequenceRecvData): _117.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _117.NextSequenceRecvDataProtoMsg): _117.NextSequenceRecvData;
                    toProto(message: _117.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _117.NextSequenceRecvData): _117.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _118.DataType;
                dataTypeToJSON(object: _118.DataType): string;
                DataType: typeof _118.DataType;
                DataTypeSDKType: typeof _118.DataType;
                DataTypeAmino: typeof _118.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _118.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ClientState;
                    fromPartial(object: Partial<_118.ClientState>): _118.ClientState;
                    fromAmino(object: _118.ClientStateAmino): _118.ClientState;
                    toAmino(message: _118.ClientState): _118.ClientStateAmino;
                    fromAminoMsg(object: _118.ClientStateAminoMsg): _118.ClientState;
                    toAminoMsg(message: _118.ClientState): _118.ClientStateAminoMsg;
                    fromProtoMsg(message: _118.ClientStateProtoMsg): _118.ClientState;
                    toProto(message: _118.ClientState): Uint8Array;
                    toProtoMsg(message: _118.ClientState): _118.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _118.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ConsensusState;
                    fromPartial(object: Partial<_118.ConsensusState>): _118.ConsensusState;
                    fromAmino(object: _118.ConsensusStateAmino): _118.ConsensusState;
                    toAmino(message: _118.ConsensusState): _118.ConsensusStateAmino;
                    fromAminoMsg(object: _118.ConsensusStateAminoMsg): _118.ConsensusState;
                    toAminoMsg(message: _118.ConsensusState): _118.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _118.ConsensusStateProtoMsg): _118.ConsensusState;
                    toProto(message: _118.ConsensusState): Uint8Array;
                    toProtoMsg(message: _118.ConsensusState): _118.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _118.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.Header;
                    fromPartial(object: Partial<_118.Header>): _118.Header;
                    fromAmino(object: _118.HeaderAmino): _118.Header;
                    toAmino(message: _118.Header): _118.HeaderAmino;
                    fromAminoMsg(object: _118.HeaderAminoMsg): _118.Header;
                    toAminoMsg(message: _118.Header): _118.HeaderAminoMsg;
                    fromProtoMsg(message: _118.HeaderProtoMsg): _118.Header;
                    toProto(message: _118.Header): Uint8Array;
                    toProtoMsg(message: _118.Header): _118.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _118.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.Misbehaviour;
                    fromPartial(object: Partial<_118.Misbehaviour>): _118.Misbehaviour;
                    fromAmino(object: _118.MisbehaviourAmino): _118.Misbehaviour;
                    toAmino(message: _118.Misbehaviour): _118.MisbehaviourAmino;
                    fromAminoMsg(object: _118.MisbehaviourAminoMsg): _118.Misbehaviour;
                    toAminoMsg(message: _118.Misbehaviour): _118.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _118.MisbehaviourProtoMsg): _118.Misbehaviour;
                    toProto(message: _118.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _118.Misbehaviour): _118.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _118.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.SignatureAndData;
                    fromPartial(object: Partial<_118.SignatureAndData>): _118.SignatureAndData;
                    fromAmino(object: _118.SignatureAndDataAmino): _118.SignatureAndData;
                    toAmino(message: _118.SignatureAndData): _118.SignatureAndDataAmino;
                    fromAminoMsg(object: _118.SignatureAndDataAminoMsg): _118.SignatureAndData;
                    toAminoMsg(message: _118.SignatureAndData): _118.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _118.SignatureAndDataProtoMsg): _118.SignatureAndData;
                    toProto(message: _118.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _118.SignatureAndData): _118.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _118.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.TimestampedSignatureData;
                    fromPartial(object: Partial<_118.TimestampedSignatureData>): _118.TimestampedSignatureData;
                    fromAmino(object: _118.TimestampedSignatureDataAmino): _118.TimestampedSignatureData;
                    toAmino(message: _118.TimestampedSignatureData): _118.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _118.TimestampedSignatureDataAminoMsg): _118.TimestampedSignatureData;
                    toAminoMsg(message: _118.TimestampedSignatureData): _118.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _118.TimestampedSignatureDataProtoMsg): _118.TimestampedSignatureData;
                    toProto(message: _118.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _118.TimestampedSignatureData): _118.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _118.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.SignBytes;
                    fromPartial(object: Partial<_118.SignBytes>): _118.SignBytes;
                    fromAmino(object: _118.SignBytesAmino): _118.SignBytes;
                    toAmino(message: _118.SignBytes): _118.SignBytesAmino;
                    fromAminoMsg(object: _118.SignBytesAminoMsg): _118.SignBytes;
                    toAminoMsg(message: _118.SignBytes): _118.SignBytesAminoMsg;
                    fromProtoMsg(message: _118.SignBytesProtoMsg): _118.SignBytes;
                    toProto(message: _118.SignBytes): Uint8Array;
                    toProtoMsg(message: _118.SignBytes): _118.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _118.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.HeaderData;
                    fromPartial(object: Partial<_118.HeaderData>): _118.HeaderData;
                    fromAmino(object: _118.HeaderDataAmino): _118.HeaderData;
                    toAmino(message: _118.HeaderData): _118.HeaderDataAmino;
                    fromAminoMsg(object: _118.HeaderDataAminoMsg): _118.HeaderData;
                    toAminoMsg(message: _118.HeaderData): _118.HeaderDataAminoMsg;
                    fromProtoMsg(message: _118.HeaderDataProtoMsg): _118.HeaderData;
                    toProto(message: _118.HeaderData): Uint8Array;
                    toProtoMsg(message: _118.HeaderData): _118.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _118.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ClientStateData;
                    fromPartial(object: Partial<_118.ClientStateData>): _118.ClientStateData;
                    fromAmino(object: _118.ClientStateDataAmino): _118.ClientStateData;
                    toAmino(message: _118.ClientStateData): _118.ClientStateDataAmino;
                    fromAminoMsg(object: _118.ClientStateDataAminoMsg): _118.ClientStateData;
                    toAminoMsg(message: _118.ClientStateData): _118.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _118.ClientStateDataProtoMsg): _118.ClientStateData;
                    toProto(message: _118.ClientStateData): Uint8Array;
                    toProtoMsg(message: _118.ClientStateData): _118.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _118.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ConsensusStateData;
                    fromPartial(object: Partial<_118.ConsensusStateData>): _118.ConsensusStateData;
                    fromAmino(object: _118.ConsensusStateDataAmino): _118.ConsensusStateData;
                    toAmino(message: _118.ConsensusStateData): _118.ConsensusStateDataAmino;
                    fromAminoMsg(object: _118.ConsensusStateDataAminoMsg): _118.ConsensusStateData;
                    toAminoMsg(message: _118.ConsensusStateData): _118.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _118.ConsensusStateDataProtoMsg): _118.ConsensusStateData;
                    toProto(message: _118.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _118.ConsensusStateData): _118.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _118.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ConnectionStateData;
                    fromPartial(object: Partial<_118.ConnectionStateData>): _118.ConnectionStateData;
                    fromAmino(object: _118.ConnectionStateDataAmino): _118.ConnectionStateData;
                    toAmino(message: _118.ConnectionStateData): _118.ConnectionStateDataAmino;
                    fromAminoMsg(object: _118.ConnectionStateDataAminoMsg): _118.ConnectionStateData;
                    toAminoMsg(message: _118.ConnectionStateData): _118.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _118.ConnectionStateDataProtoMsg): _118.ConnectionStateData;
                    toProto(message: _118.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _118.ConnectionStateData): _118.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _118.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.ChannelStateData;
                    fromPartial(object: Partial<_118.ChannelStateData>): _118.ChannelStateData;
                    fromAmino(object: _118.ChannelStateDataAmino): _118.ChannelStateData;
                    toAmino(message: _118.ChannelStateData): _118.ChannelStateDataAmino;
                    fromAminoMsg(object: _118.ChannelStateDataAminoMsg): _118.ChannelStateData;
                    toAminoMsg(message: _118.ChannelStateData): _118.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _118.ChannelStateDataProtoMsg): _118.ChannelStateData;
                    toProto(message: _118.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _118.ChannelStateData): _118.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _118.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.PacketCommitmentData;
                    fromPartial(object: Partial<_118.PacketCommitmentData>): _118.PacketCommitmentData;
                    fromAmino(object: _118.PacketCommitmentDataAmino): _118.PacketCommitmentData;
                    toAmino(message: _118.PacketCommitmentData): _118.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _118.PacketCommitmentDataAminoMsg): _118.PacketCommitmentData;
                    toAminoMsg(message: _118.PacketCommitmentData): _118.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _118.PacketCommitmentDataProtoMsg): _118.PacketCommitmentData;
                    toProto(message: _118.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _118.PacketCommitmentData): _118.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _118.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.PacketAcknowledgementData;
                    fromPartial(object: Partial<_118.PacketAcknowledgementData>): _118.PacketAcknowledgementData;
                    fromAmino(object: _118.PacketAcknowledgementDataAmino): _118.PacketAcknowledgementData;
                    toAmino(message: _118.PacketAcknowledgementData): _118.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _118.PacketAcknowledgementDataAminoMsg): _118.PacketAcknowledgementData;
                    toAminoMsg(message: _118.PacketAcknowledgementData): _118.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _118.PacketAcknowledgementDataProtoMsg): _118.PacketAcknowledgementData;
                    toProto(message: _118.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _118.PacketAcknowledgementData): _118.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _118.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_118.PacketReceiptAbsenceData>): _118.PacketReceiptAbsenceData;
                    fromAmino(object: _118.PacketReceiptAbsenceDataAmino): _118.PacketReceiptAbsenceData;
                    toAmino(message: _118.PacketReceiptAbsenceData): _118.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _118.PacketReceiptAbsenceDataAminoMsg): _118.PacketReceiptAbsenceData;
                    toAminoMsg(message: _118.PacketReceiptAbsenceData): _118.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _118.PacketReceiptAbsenceDataProtoMsg): _118.PacketReceiptAbsenceData;
                    toProto(message: _118.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _118.PacketReceiptAbsenceData): _118.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _118.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.NextSequenceRecvData;
                    fromPartial(object: Partial<_118.NextSequenceRecvData>): _118.NextSequenceRecvData;
                    fromAmino(object: _118.NextSequenceRecvDataAmino): _118.NextSequenceRecvData;
                    toAmino(message: _118.NextSequenceRecvData): _118.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _118.NextSequenceRecvDataAminoMsg): _118.NextSequenceRecvData;
                    toAminoMsg(message: _118.NextSequenceRecvData): _118.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _118.NextSequenceRecvDataProtoMsg): _118.NextSequenceRecvData;
                    toProto(message: _118.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _118.NextSequenceRecvData): _118.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _119.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.ClientState;
                    fromPartial(object: Partial<_119.ClientState>): _119.ClientState;
                    fromAmino(object: _119.ClientStateAmino): _119.ClientState;
                    toAmino(message: _119.ClientState): _119.ClientStateAmino;
                    fromAminoMsg(object: _119.ClientStateAminoMsg): _119.ClientState;
                    toAminoMsg(message: _119.ClientState): _119.ClientStateAminoMsg;
                    fromProtoMsg(message: _119.ClientStateProtoMsg): _119.ClientState;
                    toProto(message: _119.ClientState): Uint8Array;
                    toProtoMsg(message: _119.ClientState): _119.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _119.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.ConsensusState;
                    fromPartial(object: Partial<_119.ConsensusState>): _119.ConsensusState;
                    fromAmino(object: _119.ConsensusStateAmino): _119.ConsensusState;
                    toAmino(message: _119.ConsensusState): _119.ConsensusStateAmino;
                    fromAminoMsg(object: _119.ConsensusStateAminoMsg): _119.ConsensusState;
                    toAminoMsg(message: _119.ConsensusState): _119.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _119.ConsensusStateProtoMsg): _119.ConsensusState;
                    toProto(message: _119.ConsensusState): Uint8Array;
                    toProtoMsg(message: _119.ConsensusState): _119.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _119.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Misbehaviour;
                    fromPartial(object: Partial<_119.Misbehaviour>): _119.Misbehaviour;
                    fromAmino(object: _119.MisbehaviourAmino): _119.Misbehaviour;
                    toAmino(message: _119.Misbehaviour): _119.MisbehaviourAmino;
                    fromAminoMsg(object: _119.MisbehaviourAminoMsg): _119.Misbehaviour;
                    toAminoMsg(message: _119.Misbehaviour): _119.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _119.MisbehaviourProtoMsg): _119.Misbehaviour;
                    toProto(message: _119.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _119.Misbehaviour): _119.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _119.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Header;
                    fromPartial(object: Partial<_119.Header>): _119.Header;
                    fromAmino(object: _119.HeaderAmino): _119.Header;
                    toAmino(message: _119.Header): _119.HeaderAmino;
                    fromAminoMsg(object: _119.HeaderAminoMsg): _119.Header;
                    toAminoMsg(message: _119.Header): _119.HeaderAminoMsg;
                    fromProtoMsg(message: _119.HeaderProtoMsg): _119.Header;
                    toProto(message: _119.Header): Uint8Array;
                    toProtoMsg(message: _119.Header): _119.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _119.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.Fraction;
                    fromPartial(object: Partial<_119.Fraction>): _119.Fraction;
                    fromAmino(object: _119.FractionAmino): _119.Fraction;
                    toAmino(message: _119.Fraction): _119.FractionAmino;
                    fromAminoMsg(object: _119.FractionAminoMsg): _119.Fraction;
                    toAminoMsg(message: _119.Fraction): _119.FractionAminoMsg;
                    fromProtoMsg(message: _119.FractionProtoMsg): _119.Fraction;
                    toProto(message: _119.Fraction): Uint8Array;
                    toProtoMsg(message: _119.Fraction): _119.FractionProtoMsg;
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _218.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _219.MsgClientImpl;
                    };
                    client: {
                        v1: _220.MsgClientImpl;
                    };
                    connection: {
                        v1: _221.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                    };
                };
            };
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _90.QueryInterchainAccountRequest): Promise<_90.QueryInterchainAccountResponse>;
                                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _98.QueryDenomTraceRequest): Promise<_98.QueryDenomTraceResponse>;
                            denomTraces(request?: _98.QueryDenomTracesRequest): Promise<_98.QueryDenomTracesResponse>;
                            params(request?: _98.QueryParamsRequest): Promise<_98.QueryParamsResponse>;
                            denomHash(request: _98.QueryDenomHashRequest): Promise<_98.QueryDenomHashResponse>;
                            escrowAddress(request: _98.QueryEscrowAddressRequest): Promise<_98.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _104.QueryChannelRequest): Promise<_104.QueryChannelResponse>;
                            channels(request?: _104.QueryChannelsRequest): Promise<_104.QueryChannelsResponse>;
                            connectionChannels(request: _104.QueryConnectionChannelsRequest): Promise<_104.QueryConnectionChannelsResponse>;
                            channelClientState(request: _104.QueryChannelClientStateRequest): Promise<_104.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _104.QueryChannelConsensusStateRequest): Promise<_104.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _104.QueryPacketCommitmentRequest): Promise<_104.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _104.QueryPacketCommitmentsRequest): Promise<_104.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _104.QueryPacketReceiptRequest): Promise<_104.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _104.QueryPacketAcknowledgementRequest): Promise<_104.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _104.QueryPacketAcknowledgementsRequest): Promise<_104.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _104.QueryUnreceivedPacketsRequest): Promise<_104.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _104.QueryUnreceivedAcksRequest): Promise<_104.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _104.QueryNextSequenceReceiveRequest): Promise<_104.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _108.QueryClientStateRequest): Promise<_108.QueryClientStateResponse>;
                            clientStates(request?: _108.QueryClientStatesRequest): Promise<_108.QueryClientStatesResponse>;
                            consensusState(request: _108.QueryConsensusStateRequest): Promise<_108.QueryConsensusStateResponse>;
                            consensusStates(request: _108.QueryConsensusStatesRequest): Promise<_108.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _108.QueryConsensusStateHeightsRequest): Promise<_108.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _108.QueryClientStatusRequest): Promise<_108.QueryClientStatusResponse>;
                            clientParams(request?: _108.QueryClientParamsRequest): Promise<_108.QueryClientParamsResponse>;
                            upgradedClientState(request?: _108.QueryUpgradedClientStateRequest): Promise<_108.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _108.QueryUpgradedConsensusStateRequest): Promise<_108.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _113.QueryConnectionRequest): Promise<_113.QueryConnectionResponse>;
                            connections(request?: _113.QueryConnectionsRequest): Promise<_113.QueryConnectionsResponse>;
                            clientConnections(request: _113.QueryClientConnectionsRequest): Promise<_113.QueryClientConnectionsResponse>;
                            connectionClientState(request: _113.QueryConnectionClientStateRequest): Promise<_113.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _113.QueryConnectionConsensusStateRequest): Promise<_113.QueryConnectionConsensusStateResponse>;
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
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
                            v1: _206.LCDQueryClient;
                        };
                        host: {
                            v1: _207.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _208.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _209.LCDQueryClient;
                    };
                    client: {
                        v1: _210.LCDQueryClient;
                    };
                    connection: {
                        v1: _211.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
