import * as _103 from "./applications/interchain_accounts/controller/v1/controller";
import * as _104 from "./applications/interchain_accounts/controller/v1/query";
import * as _105 from "./applications/interchain_accounts/host/v1/host";
import * as _106 from "./applications/interchain_accounts/host/v1/query";
import * as _107 from "./applications/interchain_accounts/v1/account";
import * as _108 from "./applications/interchain_accounts/v1/genesis";
import * as _109 from "./applications/interchain_accounts/v1/metadata";
import * as _110 from "./applications/interchain_accounts/v1/packet";
import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _120 from "./core/client/v1/client";
import * as _121 from "./core/client/v1/genesis";
import * as _122 from "./core/client/v1/query";
import * as _123 from "./core/client/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _125 from "./core/connection/v1/connection";
import * as _126 from "./core/connection/v1/genesis";
import * as _127 from "./core/connection/v1/query";
import * as _128 from "./core/connection/v1/tx";
import * as _129 from "./core/types/v1/genesis";
import * as _130 from "./lightclients/localhost/v1/localhost";
import * as _131 from "./lightclients/solomachine/v1/solomachine";
import * as _132 from "./lightclients/solomachine/v2/solomachine";
import * as _133 from "./lightclients/tendermint/v1/tendermint";
import * as _266 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _267 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _268 from "./applications/transfer/v1/query.lcd";
import * as _269 from "./core/channel/v1/query.lcd";
import * as _270 from "./core/client/v1/query.lcd";
import * as _271 from "./core/connection/v1/query.lcd";
import * as _272 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _273 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _274 from "./applications/transfer/v1/query.rpc.Query";
import * as _275 from "./core/channel/v1/query.rpc.Query";
import * as _276 from "./core/client/v1/query.rpc.Query";
import * as _277 from "./core/connection/v1/query.rpc.Query";
import * as _278 from "./applications/transfer/v1/tx.rpc.msg";
import * as _279 from "./core/channel/v1/tx.rpc.msg";
import * as _280 from "./core/client/v1/tx.rpc.msg";
import * as _281 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _272.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _104.QueryInterchainAccountRequest): Promise<_104.QueryInterchainAccountResponse>;
                        params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _266.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _104.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _104.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_104.QueryInterchainAccountRequest>): _104.QueryInterchainAccountRequest;
                        fromAmino(object: _104.QueryInterchainAccountRequestAmino): _104.QueryInterchainAccountRequest;
                        toAmino(message: _104.QueryInterchainAccountRequest): _104.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _104.QueryInterchainAccountRequestAminoMsg): _104.QueryInterchainAccountRequest;
                        toAminoMsg(message: _104.QueryInterchainAccountRequest): _104.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _104.QueryInterchainAccountRequestProtoMsg): _104.QueryInterchainAccountRequest;
                        toProto(message: _104.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _104.QueryInterchainAccountRequest): _104.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _104.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _104.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_104.QueryInterchainAccountResponse>): _104.QueryInterchainAccountResponse;
                        fromAmino(object: _104.QueryInterchainAccountResponseAmino): _104.QueryInterchainAccountResponse;
                        toAmino(message: _104.QueryInterchainAccountResponse): _104.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _104.QueryInterchainAccountResponseAminoMsg): _104.QueryInterchainAccountResponse;
                        toAminoMsg(message: _104.QueryInterchainAccountResponse): _104.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _104.QueryInterchainAccountResponseProtoMsg): _104.QueryInterchainAccountResponse;
                        toProto(message: _104.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _104.QueryInterchainAccountResponse): _104.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _104.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _104.QueryParamsRequest;
                        fromPartial(_: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
                        fromAmino(_: _104.QueryParamsRequestAmino): _104.QueryParamsRequest;
                        toAmino(_: _104.QueryParamsRequest): _104.QueryParamsRequestAmino;
                        fromAminoMsg(object: _104.QueryParamsRequestAminoMsg): _104.QueryParamsRequest;
                        toAminoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _104.QueryParamsRequestProtoMsg): _104.QueryParamsRequest;
                        toProto(message: _104.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _104.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _104.QueryParamsResponse;
                        fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
                        fromAmino(object: _104.QueryParamsResponseAmino): _104.QueryParamsResponse;
                        toAmino(message: _104.QueryParamsResponse): _104.QueryParamsResponseAmino;
                        fromAminoMsg(object: _104.QueryParamsResponseAminoMsg): _104.QueryParamsResponse;
                        toAminoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _104.QueryParamsResponseProtoMsg): _104.QueryParamsResponse;
                        toProto(message: _104.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _103.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _103.Params;
                        fromPartial(object: Partial<_103.Params>): _103.Params;
                        fromAmino(object: _103.ParamsAmino): _103.Params;
                        toAmino(message: _103.Params): _103.ParamsAmino;
                        fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
                        toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
                        fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
                        toProto(message: _103.Params): Uint8Array;
                        toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _273.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _267.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _106.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(_: any): _106.QueryParamsRequest;
                        fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
                        fromAmino(_: _106.QueryParamsRequestAmino): _106.QueryParamsRequest;
                        toAmino(_: _106.QueryParamsRequest): _106.QueryParamsRequestAmino;
                        fromAminoMsg(object: _106.QueryParamsRequestAminoMsg): _106.QueryParamsRequest;
                        toAminoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _106.QueryParamsRequestProtoMsg): _106.QueryParamsRequest;
                        toProto(message: _106.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _106.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _106.QueryParamsResponse;
                        fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
                        fromAmino(object: _106.QueryParamsResponseAmino): _106.QueryParamsResponse;
                        toAmino(message: _106.QueryParamsResponse): _106.QueryParamsResponseAmino;
                        fromAminoMsg(object: _106.QueryParamsResponseAminoMsg): _106.QueryParamsResponse;
                        toAminoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _106.QueryParamsResponseProtoMsg): _106.QueryParamsResponse;
                        toProto(message: _106.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _105.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        fromJSON(object: any): _105.Params;
                        fromPartial(object: Partial<_105.Params>): _105.Params;
                        fromAmino(object: _105.ParamsAmino): _105.Params;
                        toAmino(message: _105.Params): _105.ParamsAmino;
                        fromAminoMsg(object: _105.ParamsAminoMsg): _105.Params;
                        toAminoMsg(message: _105.Params): _105.ParamsAminoMsg;
                        fromProtoMsg(message: _105.ParamsProtoMsg): _105.Params;
                        toProto(message: _105.Params): Uint8Array;
                        toProtoMsg(message: _105.Params): _105.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _110.Type;
                typeToJSON(object: _110.Type): string;
                Type: typeof _110.Type;
                TypeSDKType: typeof _110.Type;
                TypeAmino: typeof _110.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _110.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.InterchainAccountPacketData;
                    fromPartial(object: Partial<_110.InterchainAccountPacketData>): _110.InterchainAccountPacketData;
                    fromAmino(object: _110.InterchainAccountPacketDataAmino): _110.InterchainAccountPacketData;
                    toAmino(message: _110.InterchainAccountPacketData): _110.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _110.InterchainAccountPacketDataAminoMsg): _110.InterchainAccountPacketData;
                    toAminoMsg(message: _110.InterchainAccountPacketData): _110.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _110.InterchainAccountPacketDataProtoMsg): _110.InterchainAccountPacketData;
                    toProto(message: _110.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _110.InterchainAccountPacketData): _110.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _110.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.CosmosTx;
                    fromPartial(object: Partial<_110.CosmosTx>): _110.CosmosTx;
                    fromAmino(object: _110.CosmosTxAmino): _110.CosmosTx;
                    toAmino(message: _110.CosmosTx): _110.CosmosTxAmino;
                    fromAminoMsg(object: _110.CosmosTxAminoMsg): _110.CosmosTx;
                    toAminoMsg(message: _110.CosmosTx): _110.CosmosTxAminoMsg;
                    fromProtoMsg(message: _110.CosmosTxProtoMsg): _110.CosmosTx;
                    toProto(message: _110.CosmosTx): Uint8Array;
                    toProtoMsg(message: _110.CosmosTx): _110.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _109.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.Metadata;
                    fromPartial(object: Partial<_109.Metadata>): _109.Metadata;
                    fromAmino(object: _109.MetadataAmino): _109.Metadata;
                    toAmino(message: _109.Metadata): _109.MetadataAmino;
                    fromAminoMsg(object: _109.MetadataAminoMsg): _109.Metadata;
                    toAminoMsg(message: _109.Metadata): _109.MetadataAminoMsg;
                    fromProtoMsg(message: _109.MetadataProtoMsg): _109.Metadata;
                    toProto(message: _109.Metadata): Uint8Array;
                    toProtoMsg(message: _109.Metadata): _109.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _108.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.GenesisState;
                    fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
                    fromAmino(object: _108.GenesisStateAmino): _108.GenesisState;
                    toAmino(message: _108.GenesisState): _108.GenesisStateAmino;
                    fromAminoMsg(object: _108.GenesisStateAminoMsg): _108.GenesisState;
                    toAminoMsg(message: _108.GenesisState): _108.GenesisStateAminoMsg;
                    fromProtoMsg(message: _108.GenesisStateProtoMsg): _108.GenesisState;
                    toProto(message: _108.GenesisState): Uint8Array;
                    toProtoMsg(message: _108.GenesisState): _108.GenesisStateProtoMsg;
                };
                ControllerGenesisState: {
                    typeUrl: string;
                    encode(message: _108.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.ControllerGenesisState;
                    fromPartial(object: Partial<_108.ControllerGenesisState>): _108.ControllerGenesisState;
                    fromAmino(object: _108.ControllerGenesisStateAmino): _108.ControllerGenesisState;
                    toAmino(message: _108.ControllerGenesisState): _108.ControllerGenesisStateAmino;
                    fromAminoMsg(object: _108.ControllerGenesisStateAminoMsg): _108.ControllerGenesisState;
                    toAminoMsg(message: _108.ControllerGenesisState): _108.ControllerGenesisStateAminoMsg;
                    fromProtoMsg(message: _108.ControllerGenesisStateProtoMsg): _108.ControllerGenesisState;
                    toProto(message: _108.ControllerGenesisState): Uint8Array;
                    toProtoMsg(message: _108.ControllerGenesisState): _108.ControllerGenesisStateProtoMsg;
                };
                HostGenesisState: {
                    typeUrl: string;
                    encode(message: _108.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.HostGenesisState;
                    fromPartial(object: Partial<_108.HostGenesisState>): _108.HostGenesisState;
                    fromAmino(object: _108.HostGenesisStateAmino): _108.HostGenesisState;
                    toAmino(message: _108.HostGenesisState): _108.HostGenesisStateAmino;
                    fromAminoMsg(object: _108.HostGenesisStateAminoMsg): _108.HostGenesisState;
                    toAminoMsg(message: _108.HostGenesisState): _108.HostGenesisStateAminoMsg;
                    fromProtoMsg(message: _108.HostGenesisStateProtoMsg): _108.HostGenesisState;
                    toProto(message: _108.HostGenesisState): Uint8Array;
                    toProtoMsg(message: _108.HostGenesisState): _108.HostGenesisStateProtoMsg;
                };
                ActiveChannel: {
                    typeUrl: string;
                    encode(message: _108.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.ActiveChannel;
                    fromPartial(object: Partial<_108.ActiveChannel>): _108.ActiveChannel;
                    fromAmino(object: _108.ActiveChannelAmino): _108.ActiveChannel;
                    toAmino(message: _108.ActiveChannel): _108.ActiveChannelAmino;
                    fromAminoMsg(object: _108.ActiveChannelAminoMsg): _108.ActiveChannel;
                    toAminoMsg(message: _108.ActiveChannel): _108.ActiveChannelAminoMsg;
                    fromProtoMsg(message: _108.ActiveChannelProtoMsg): _108.ActiveChannel;
                    toProto(message: _108.ActiveChannel): Uint8Array;
                    toProtoMsg(message: _108.ActiveChannel): _108.ActiveChannelProtoMsg;
                };
                RegisteredInterchainAccount: {
                    typeUrl: string;
                    encode(message: _108.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.RegisteredInterchainAccount;
                    fromPartial(object: Partial<_108.RegisteredInterchainAccount>): _108.RegisteredInterchainAccount;
                    fromAmino(object: _108.RegisteredInterchainAccountAmino): _108.RegisteredInterchainAccount;
                    toAmino(message: _108.RegisteredInterchainAccount): _108.RegisteredInterchainAccountAmino;
                    fromAminoMsg(object: _108.RegisteredInterchainAccountAminoMsg): _108.RegisteredInterchainAccount;
                    toAminoMsg(message: _108.RegisteredInterchainAccount): _108.RegisteredInterchainAccountAminoMsg;
                    fromProtoMsg(message: _108.RegisteredInterchainAccountProtoMsg): _108.RegisteredInterchainAccount;
                    toProto(message: _108.RegisteredInterchainAccount): Uint8Array;
                    toProtoMsg(message: _108.RegisteredInterchainAccount): _108.RegisteredInterchainAccountProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _107.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.InterchainAccount;
                    fromPartial(object: Partial<_107.InterchainAccount>): _107.InterchainAccount;
                    fromAmino(object: _107.InterchainAccountAmino): _107.InterchainAccount;
                    toAmino(message: _107.InterchainAccount): _107.InterchainAccountAmino;
                    fromAminoMsg(object: _107.InterchainAccountAminoMsg): _107.InterchainAccount;
                    toAminoMsg(message: _107.InterchainAccount): _107.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _107.InterchainAccountProtoMsg): _107.InterchainAccount;
                    toProto(message: _107.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _107.InterchainAccount): _107.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _278.MsgClientImpl;
                QueryClientImpl: typeof _274.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _112.QueryDenomTraceRequest): Promise<_112.QueryDenomTraceResponse>;
                    denomTraces(request?: _112.QueryDenomTracesRequest): Promise<_112.QueryDenomTracesResponse>;
                    params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                    denomHash(request: _112.QueryDenomHashRequest): Promise<_112.QueryDenomHashResponse>;
                    escrowAddress(request: _112.QueryEscrowAddressRequest): Promise<_112.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _268.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _114.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _114.MsgTransfer): {
                            typeUrl: string;
                            value: _114.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _114.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _114.MsgTransfer): {
                            typeUrl: string;
                            value: _114.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _114.MsgTransfer) => _114.MsgTransferAmino;
                        fromAmino: (object: _114.MsgTransferAmino) => _114.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _114.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MsgTransfer;
                    fromPartial(object: Partial<_114.MsgTransfer>): _114.MsgTransfer;
                    fromAmino(object: _114.MsgTransferAmino): _114.MsgTransfer;
                    toAmino(message: _114.MsgTransfer): _114.MsgTransferAmino;
                    fromAminoMsg(object: _114.MsgTransferAminoMsg): _114.MsgTransfer;
                    toAminoMsg(message: _114.MsgTransfer): _114.MsgTransferAminoMsg;
                    fromProtoMsg(message: _114.MsgTransferProtoMsg): _114.MsgTransfer;
                    toProto(message: _114.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _114.MsgTransfer): _114.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _114.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _114.MsgTransferResponse;
                    fromPartial(_: Partial<_114.MsgTransferResponse>): _114.MsgTransferResponse;
                    fromAmino(_: _114.MsgTransferResponseAmino): _114.MsgTransferResponse;
                    toAmino(_: _114.MsgTransferResponse): _114.MsgTransferResponseAmino;
                    fromAminoMsg(object: _114.MsgTransferResponseAminoMsg): _114.MsgTransferResponse;
                    toAminoMsg(message: _114.MsgTransferResponse): _114.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _114.MsgTransferResponseProtoMsg): _114.MsgTransferResponse;
                    toProto(message: _114.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _114.MsgTransferResponse): _114.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _113.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.DenomTrace;
                    fromPartial(object: Partial<_113.DenomTrace>): _113.DenomTrace;
                    fromAmino(object: _113.DenomTraceAmino): _113.DenomTrace;
                    toAmino(message: _113.DenomTrace): _113.DenomTraceAmino;
                    fromAminoMsg(object: _113.DenomTraceAminoMsg): _113.DenomTrace;
                    toAminoMsg(message: _113.DenomTrace): _113.DenomTraceAminoMsg;
                    fromProtoMsg(message: _113.DenomTraceProtoMsg): _113.DenomTrace;
                    toProto(message: _113.DenomTrace): Uint8Array;
                    toProtoMsg(message: _113.DenomTrace): _113.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _113.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.Params;
                    fromPartial(object: Partial<_113.Params>): _113.Params;
                    fromAmino(object: _113.ParamsAmino): _113.Params;
                    toAmino(message: _113.Params): _113.ParamsAmino;
                    fromAminoMsg(object: _113.ParamsAminoMsg): _113.Params;
                    toAminoMsg(message: _113.Params): _113.ParamsAminoMsg;
                    fromProtoMsg(message: _113.ParamsProtoMsg): _113.Params;
                    toProto(message: _113.Params): Uint8Array;
                    toProtoMsg(message: _113.Params): _113.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_112.QueryDenomTraceRequest>): _112.QueryDenomTraceRequest;
                    fromAmino(object: _112.QueryDenomTraceRequestAmino): _112.QueryDenomTraceRequest;
                    toAmino(message: _112.QueryDenomTraceRequest): _112.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _112.QueryDenomTraceRequestAminoMsg): _112.QueryDenomTraceRequest;
                    toAminoMsg(message: _112.QueryDenomTraceRequest): _112.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryDenomTraceRequestProtoMsg): _112.QueryDenomTraceRequest;
                    toProto(message: _112.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryDenomTraceRequest): _112.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_112.QueryDenomTraceResponse>): _112.QueryDenomTraceResponse;
                    fromAmino(object: _112.QueryDenomTraceResponseAmino): _112.QueryDenomTraceResponse;
                    toAmino(message: _112.QueryDenomTraceResponse): _112.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _112.QueryDenomTraceResponseAminoMsg): _112.QueryDenomTraceResponse;
                    toAminoMsg(message: _112.QueryDenomTraceResponse): _112.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryDenomTraceResponseProtoMsg): _112.QueryDenomTraceResponse;
                    toProto(message: _112.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryDenomTraceResponse): _112.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_112.QueryDenomTracesRequest>): _112.QueryDenomTracesRequest;
                    fromAmino(object: _112.QueryDenomTracesRequestAmino): _112.QueryDenomTracesRequest;
                    toAmino(message: _112.QueryDenomTracesRequest): _112.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _112.QueryDenomTracesRequestAminoMsg): _112.QueryDenomTracesRequest;
                    toAminoMsg(message: _112.QueryDenomTracesRequest): _112.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryDenomTracesRequestProtoMsg): _112.QueryDenomTracesRequest;
                    toProto(message: _112.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryDenomTracesRequest): _112.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_112.QueryDenomTracesResponse>): _112.QueryDenomTracesResponse;
                    fromAmino(object: _112.QueryDenomTracesResponseAmino): _112.QueryDenomTracesResponse;
                    toAmino(message: _112.QueryDenomTracesResponse): _112.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _112.QueryDenomTracesResponseAminoMsg): _112.QueryDenomTracesResponse;
                    toAminoMsg(message: _112.QueryDenomTracesResponse): _112.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryDenomTracesResponseProtoMsg): _112.QueryDenomTracesResponse;
                    toProto(message: _112.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryDenomTracesResponse): _112.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _112.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _112.QueryParamsRequest;
                    fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                    fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                    toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                    fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                    toAminoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                    toProto(message: _112.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryParamsResponse;
                    fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                    fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                    toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                    fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                    toAminoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                    toProto(message: _112.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryDenomHashRequest;
                    fromPartial(object: Partial<_112.QueryDenomHashRequest>): _112.QueryDenomHashRequest;
                    fromAmino(object: _112.QueryDenomHashRequestAmino): _112.QueryDenomHashRequest;
                    toAmino(message: _112.QueryDenomHashRequest): _112.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _112.QueryDenomHashRequestAminoMsg): _112.QueryDenomHashRequest;
                    toAminoMsg(message: _112.QueryDenomHashRequest): _112.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryDenomHashRequestProtoMsg): _112.QueryDenomHashRequest;
                    toProto(message: _112.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryDenomHashRequest): _112.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryDenomHashResponse;
                    fromPartial(object: Partial<_112.QueryDenomHashResponse>): _112.QueryDenomHashResponse;
                    fromAmino(object: _112.QueryDenomHashResponseAmino): _112.QueryDenomHashResponse;
                    toAmino(message: _112.QueryDenomHashResponse): _112.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _112.QueryDenomHashResponseAminoMsg): _112.QueryDenomHashResponse;
                    toAminoMsg(message: _112.QueryDenomHashResponse): _112.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryDenomHashResponseProtoMsg): _112.QueryDenomHashResponse;
                    toProto(message: _112.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryDenomHashResponse): _112.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_112.QueryEscrowAddressRequest>): _112.QueryEscrowAddressRequest;
                    fromAmino(object: _112.QueryEscrowAddressRequestAmino): _112.QueryEscrowAddressRequest;
                    toAmino(message: _112.QueryEscrowAddressRequest): _112.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _112.QueryEscrowAddressRequestAminoMsg): _112.QueryEscrowAddressRequest;
                    toAminoMsg(message: _112.QueryEscrowAddressRequest): _112.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryEscrowAddressRequestProtoMsg): _112.QueryEscrowAddressRequest;
                    toProto(message: _112.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryEscrowAddressRequest): _112.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_112.QueryEscrowAddressResponse>): _112.QueryEscrowAddressResponse;
                    fromAmino(object: _112.QueryEscrowAddressResponseAmino): _112.QueryEscrowAddressResponse;
                    toAmino(message: _112.QueryEscrowAddressResponse): _112.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _112.QueryEscrowAddressResponseAminoMsg): _112.QueryEscrowAddressResponse;
                    toAminoMsg(message: _112.QueryEscrowAddressResponse): _112.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryEscrowAddressResponseProtoMsg): _112.QueryEscrowAddressResponse;
                    toProto(message: _112.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryEscrowAddressResponse): _112.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.GenesisState;
                    fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                    fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                    toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                    fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                    toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                    fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                    toProto(message: _111.GenesisState): Uint8Array;
                    toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _115.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.FungibleTokenPacketData;
                    fromPartial(object: Partial<_115.FungibleTokenPacketData>): _115.FungibleTokenPacketData;
                    fromAmino(object: _115.FungibleTokenPacketDataAmino): _115.FungibleTokenPacketData;
                    toAmino(message: _115.FungibleTokenPacketData): _115.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _115.FungibleTokenPacketDataAminoMsg): _115.FungibleTokenPacketData;
                    toAminoMsg(message: _115.FungibleTokenPacketData): _115.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _115.FungibleTokenPacketDataProtoMsg): _115.FungibleTokenPacketData;
                    toProto(message: _115.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _115.FungibleTokenPacketData): _115.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _279.MsgClientImpl;
                QueryClientImpl: typeof _275.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _118.QueryChannelRequest): Promise<_118.QueryChannelResponse>;
                    channels(request?: _118.QueryChannelsRequest): Promise<_118.QueryChannelsResponse>;
                    connectionChannels(request: _118.QueryConnectionChannelsRequest): Promise<_118.QueryConnectionChannelsResponse>;
                    channelClientState(request: _118.QueryChannelClientStateRequest): Promise<_118.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _118.QueryChannelConsensusStateRequest): Promise<_118.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _118.QueryPacketCommitmentRequest): Promise<_118.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _118.QueryPacketCommitmentsRequest): Promise<_118.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _118.QueryPacketReceiptRequest): Promise<_118.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _118.QueryPacketAcknowledgementRequest): Promise<_118.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _118.QueryPacketAcknowledgementsRequest): Promise<_118.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _118.QueryUnreceivedPacketsRequest): Promise<_118.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _118.QueryUnreceivedAcksRequest): Promise<_118.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _118.QueryNextSequenceReceiveRequest): Promise<_118.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _269.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _119.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _119.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _119.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _119.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _119.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _119.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _119.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _119.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _119.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _119.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _119.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _119.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _119.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _119.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _119.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _119.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _119.MsgRecvPacket): {
                            typeUrl: string;
                            value: _119.MsgRecvPacket;
                        };
                        timeout(value: _119.MsgTimeout): {
                            typeUrl: string;
                            value: _119.MsgTimeout;
                        };
                        timeoutOnClose(value: _119.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _119.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _119.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _119.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _119.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _119.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _119.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _119.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _119.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _119.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _119.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _119.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _119.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _119.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _119.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _119.MsgRecvPacket): {
                            typeUrl: string;
                            value: _119.MsgRecvPacket;
                        };
                        timeout(value: _119.MsgTimeout): {
                            typeUrl: string;
                            value: _119.MsgTimeout;
                        };
                        timeoutOnClose(value: _119.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _119.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _119.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _119.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _119.MsgChannelOpenInit) => _119.MsgChannelOpenInitAmino;
                        fromAmino: (object: _119.MsgChannelOpenInitAmino) => _119.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _119.MsgChannelOpenTry) => _119.MsgChannelOpenTryAmino;
                        fromAmino: (object: _119.MsgChannelOpenTryAmino) => _119.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _119.MsgChannelOpenAck) => _119.MsgChannelOpenAckAmino;
                        fromAmino: (object: _119.MsgChannelOpenAckAmino) => _119.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _119.MsgChannelOpenConfirm) => _119.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _119.MsgChannelOpenConfirmAmino) => _119.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _119.MsgChannelCloseInit) => _119.MsgChannelCloseInitAmino;
                        fromAmino: (object: _119.MsgChannelCloseInitAmino) => _119.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _119.MsgChannelCloseConfirm) => _119.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _119.MsgChannelCloseConfirmAmino) => _119.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _119.MsgRecvPacket) => _119.MsgRecvPacketAmino;
                        fromAmino: (object: _119.MsgRecvPacketAmino) => _119.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _119.MsgTimeout) => _119.MsgTimeoutAmino;
                        fromAmino: (object: _119.MsgTimeoutAmino) => _119.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _119.MsgTimeoutOnClose) => _119.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _119.MsgTimeoutOnCloseAmino) => _119.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _119.MsgAcknowledgement) => _119.MsgAcknowledgementAmino;
                        fromAmino: (object: _119.MsgAcknowledgementAmino) => _119.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _119.ResponseResultType;
                responseResultTypeToJSON(object: _119.ResponseResultType): string;
                ResponseResultType: typeof _119.ResponseResultType;
                ResponseResultTypeSDKType: typeof _119.ResponseResultType;
                ResponseResultTypeAmino: typeof _119.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelOpenInit;
                    fromPartial(object: Partial<_119.MsgChannelOpenInit>): _119.MsgChannelOpenInit;
                    fromAmino(object: _119.MsgChannelOpenInitAmino): _119.MsgChannelOpenInit;
                    toAmino(message: _119.MsgChannelOpenInit): _119.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenInitAminoMsg): _119.MsgChannelOpenInit;
                    toAminoMsg(message: _119.MsgChannelOpenInit): _119.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenInitProtoMsg): _119.MsgChannelOpenInit;
                    toProto(message: _119.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenInit): _119.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_119.MsgChannelOpenInitResponse>): _119.MsgChannelOpenInitResponse;
                    fromAmino(object: _119.MsgChannelOpenInitResponseAmino): _119.MsgChannelOpenInitResponse;
                    toAmino(message: _119.MsgChannelOpenInitResponse): _119.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenInitResponseAminoMsg): _119.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _119.MsgChannelOpenInitResponse): _119.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenInitResponseProtoMsg): _119.MsgChannelOpenInitResponse;
                    toProto(message: _119.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenInitResponse): _119.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelOpenTry;
                    fromPartial(object: Partial<_119.MsgChannelOpenTry>): _119.MsgChannelOpenTry;
                    fromAmino(object: _119.MsgChannelOpenTryAmino): _119.MsgChannelOpenTry;
                    toAmino(message: _119.MsgChannelOpenTry): _119.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenTryAminoMsg): _119.MsgChannelOpenTry;
                    toAminoMsg(message: _119.MsgChannelOpenTry): _119.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenTryProtoMsg): _119.MsgChannelOpenTry;
                    toProto(message: _119.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenTry): _119.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_119.MsgChannelOpenTryResponse>): _119.MsgChannelOpenTryResponse;
                    fromAmino(object: _119.MsgChannelOpenTryResponseAmino): _119.MsgChannelOpenTryResponse;
                    toAmino(message: _119.MsgChannelOpenTryResponse): _119.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenTryResponseAminoMsg): _119.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _119.MsgChannelOpenTryResponse): _119.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenTryResponseProtoMsg): _119.MsgChannelOpenTryResponse;
                    toProto(message: _119.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenTryResponse): _119.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelOpenAck;
                    fromPartial(object: Partial<_119.MsgChannelOpenAck>): _119.MsgChannelOpenAck;
                    fromAmino(object: _119.MsgChannelOpenAckAmino): _119.MsgChannelOpenAck;
                    toAmino(message: _119.MsgChannelOpenAck): _119.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenAckAminoMsg): _119.MsgChannelOpenAck;
                    toAminoMsg(message: _119.MsgChannelOpenAck): _119.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenAckProtoMsg): _119.MsgChannelOpenAck;
                    toProto(message: _119.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenAck): _119.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _119.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_119.MsgChannelOpenAckResponse>): _119.MsgChannelOpenAckResponse;
                    fromAmino(_: _119.MsgChannelOpenAckResponseAmino): _119.MsgChannelOpenAckResponse;
                    toAmino(_: _119.MsgChannelOpenAckResponse): _119.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenAckResponseAminoMsg): _119.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _119.MsgChannelOpenAckResponse): _119.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenAckResponseProtoMsg): _119.MsgChannelOpenAckResponse;
                    toProto(message: _119.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenAckResponse): _119.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_119.MsgChannelOpenConfirm>): _119.MsgChannelOpenConfirm;
                    fromAmino(object: _119.MsgChannelOpenConfirmAmino): _119.MsgChannelOpenConfirm;
                    toAmino(message: _119.MsgChannelOpenConfirm): _119.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenConfirmAminoMsg): _119.MsgChannelOpenConfirm;
                    toAminoMsg(message: _119.MsgChannelOpenConfirm): _119.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenConfirmProtoMsg): _119.MsgChannelOpenConfirm;
                    toProto(message: _119.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenConfirm): _119.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _119.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_119.MsgChannelOpenConfirmResponse>): _119.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _119.MsgChannelOpenConfirmResponseAmino): _119.MsgChannelOpenConfirmResponse;
                    toAmino(_: _119.MsgChannelOpenConfirmResponse): _119.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _119.MsgChannelOpenConfirmResponseAminoMsg): _119.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _119.MsgChannelOpenConfirmResponse): _119.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelOpenConfirmResponseProtoMsg): _119.MsgChannelOpenConfirmResponse;
                    toProto(message: _119.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelOpenConfirmResponse): _119.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelCloseInit;
                    fromPartial(object: Partial<_119.MsgChannelCloseInit>): _119.MsgChannelCloseInit;
                    fromAmino(object: _119.MsgChannelCloseInitAmino): _119.MsgChannelCloseInit;
                    toAmino(message: _119.MsgChannelCloseInit): _119.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _119.MsgChannelCloseInitAminoMsg): _119.MsgChannelCloseInit;
                    toAminoMsg(message: _119.MsgChannelCloseInit): _119.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelCloseInitProtoMsg): _119.MsgChannelCloseInit;
                    toProto(message: _119.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelCloseInit): _119.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _119.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_119.MsgChannelCloseInitResponse>): _119.MsgChannelCloseInitResponse;
                    fromAmino(_: _119.MsgChannelCloseInitResponseAmino): _119.MsgChannelCloseInitResponse;
                    toAmino(_: _119.MsgChannelCloseInitResponse): _119.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _119.MsgChannelCloseInitResponseAminoMsg): _119.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _119.MsgChannelCloseInitResponse): _119.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelCloseInitResponseProtoMsg): _119.MsgChannelCloseInitResponse;
                    toProto(message: _119.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelCloseInitResponse): _119.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _119.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_119.MsgChannelCloseConfirm>): _119.MsgChannelCloseConfirm;
                    fromAmino(object: _119.MsgChannelCloseConfirmAmino): _119.MsgChannelCloseConfirm;
                    toAmino(message: _119.MsgChannelCloseConfirm): _119.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _119.MsgChannelCloseConfirmAminoMsg): _119.MsgChannelCloseConfirm;
                    toAminoMsg(message: _119.MsgChannelCloseConfirm): _119.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelCloseConfirmProtoMsg): _119.MsgChannelCloseConfirm;
                    toProto(message: _119.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelCloseConfirm): _119.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _119.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _119.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_119.MsgChannelCloseConfirmResponse>): _119.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _119.MsgChannelCloseConfirmResponseAmino): _119.MsgChannelCloseConfirmResponse;
                    toAmino(_: _119.MsgChannelCloseConfirmResponse): _119.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _119.MsgChannelCloseConfirmResponseAminoMsg): _119.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _119.MsgChannelCloseConfirmResponse): _119.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgChannelCloseConfirmResponseProtoMsg): _119.MsgChannelCloseConfirmResponse;
                    toProto(message: _119.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgChannelCloseConfirmResponse): _119.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _119.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgRecvPacket;
                    fromPartial(object: Partial<_119.MsgRecvPacket>): _119.MsgRecvPacket;
                    fromAmino(object: _119.MsgRecvPacketAmino): _119.MsgRecvPacket;
                    toAmino(message: _119.MsgRecvPacket): _119.MsgRecvPacketAmino;
                    fromAminoMsg(object: _119.MsgRecvPacketAminoMsg): _119.MsgRecvPacket;
                    toAminoMsg(message: _119.MsgRecvPacket): _119.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _119.MsgRecvPacketProtoMsg): _119.MsgRecvPacket;
                    toProto(message: _119.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _119.MsgRecvPacket): _119.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _119.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_119.MsgRecvPacketResponse>): _119.MsgRecvPacketResponse;
                    fromAmino(object: _119.MsgRecvPacketResponseAmino): _119.MsgRecvPacketResponse;
                    toAmino(message: _119.MsgRecvPacketResponse): _119.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _119.MsgRecvPacketResponseAminoMsg): _119.MsgRecvPacketResponse;
                    toAminoMsg(message: _119.MsgRecvPacketResponse): _119.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgRecvPacketResponseProtoMsg): _119.MsgRecvPacketResponse;
                    toProto(message: _119.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgRecvPacketResponse): _119.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _119.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgTimeout;
                    fromPartial(object: Partial<_119.MsgTimeout>): _119.MsgTimeout;
                    fromAmino(object: _119.MsgTimeoutAmino): _119.MsgTimeout;
                    toAmino(message: _119.MsgTimeout): _119.MsgTimeoutAmino;
                    fromAminoMsg(object: _119.MsgTimeoutAminoMsg): _119.MsgTimeout;
                    toAminoMsg(message: _119.MsgTimeout): _119.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _119.MsgTimeoutProtoMsg): _119.MsgTimeout;
                    toProto(message: _119.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _119.MsgTimeout): _119.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _119.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgTimeoutResponse;
                    fromPartial(object: Partial<_119.MsgTimeoutResponse>): _119.MsgTimeoutResponse;
                    fromAmino(object: _119.MsgTimeoutResponseAmino): _119.MsgTimeoutResponse;
                    toAmino(message: _119.MsgTimeoutResponse): _119.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _119.MsgTimeoutResponseAminoMsg): _119.MsgTimeoutResponse;
                    toAminoMsg(message: _119.MsgTimeoutResponse): _119.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgTimeoutResponseProtoMsg): _119.MsgTimeoutResponse;
                    toProto(message: _119.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgTimeoutResponse): _119.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _119.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_119.MsgTimeoutOnClose>): _119.MsgTimeoutOnClose;
                    fromAmino(object: _119.MsgTimeoutOnCloseAmino): _119.MsgTimeoutOnClose;
                    toAmino(message: _119.MsgTimeoutOnClose): _119.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _119.MsgTimeoutOnCloseAminoMsg): _119.MsgTimeoutOnClose;
                    toAminoMsg(message: _119.MsgTimeoutOnClose): _119.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _119.MsgTimeoutOnCloseProtoMsg): _119.MsgTimeoutOnClose;
                    toProto(message: _119.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _119.MsgTimeoutOnClose): _119.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _119.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_119.MsgTimeoutOnCloseResponse>): _119.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _119.MsgTimeoutOnCloseResponseAmino): _119.MsgTimeoutOnCloseResponse;
                    toAmino(message: _119.MsgTimeoutOnCloseResponse): _119.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _119.MsgTimeoutOnCloseResponseAminoMsg): _119.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _119.MsgTimeoutOnCloseResponse): _119.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgTimeoutOnCloseResponseProtoMsg): _119.MsgTimeoutOnCloseResponse;
                    toProto(message: _119.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgTimeoutOnCloseResponse): _119.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _119.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgAcknowledgement;
                    fromPartial(object: Partial<_119.MsgAcknowledgement>): _119.MsgAcknowledgement;
                    fromAmino(object: _119.MsgAcknowledgementAmino): _119.MsgAcknowledgement;
                    toAmino(message: _119.MsgAcknowledgement): _119.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _119.MsgAcknowledgementAminoMsg): _119.MsgAcknowledgement;
                    toAminoMsg(message: _119.MsgAcknowledgement): _119.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _119.MsgAcknowledgementProtoMsg): _119.MsgAcknowledgement;
                    toProto(message: _119.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _119.MsgAcknowledgement): _119.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _119.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_119.MsgAcknowledgementResponse>): _119.MsgAcknowledgementResponse;
                    fromAmino(object: _119.MsgAcknowledgementResponseAmino): _119.MsgAcknowledgementResponse;
                    toAmino(message: _119.MsgAcknowledgementResponse): _119.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _119.MsgAcknowledgementResponseAminoMsg): _119.MsgAcknowledgementResponse;
                    toAminoMsg(message: _119.MsgAcknowledgementResponse): _119.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _119.MsgAcknowledgementResponseProtoMsg): _119.MsgAcknowledgementResponse;
                    toProto(message: _119.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _119.MsgAcknowledgementResponse): _119.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelRequest;
                    fromPartial(object: Partial<_118.QueryChannelRequest>): _118.QueryChannelRequest;
                    fromAmino(object: _118.QueryChannelRequestAmino): _118.QueryChannelRequest;
                    toAmino(message: _118.QueryChannelRequest): _118.QueryChannelRequestAmino;
                    fromAminoMsg(object: _118.QueryChannelRequestAminoMsg): _118.QueryChannelRequest;
                    toAminoMsg(message: _118.QueryChannelRequest): _118.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelRequestProtoMsg): _118.QueryChannelRequest;
                    toProto(message: _118.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelRequest): _118.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelResponse;
                    fromPartial(object: Partial<_118.QueryChannelResponse>): _118.QueryChannelResponse;
                    fromAmino(object: _118.QueryChannelResponseAmino): _118.QueryChannelResponse;
                    toAmino(message: _118.QueryChannelResponse): _118.QueryChannelResponseAmino;
                    fromAminoMsg(object: _118.QueryChannelResponseAminoMsg): _118.QueryChannelResponse;
                    toAminoMsg(message: _118.QueryChannelResponse): _118.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelResponseProtoMsg): _118.QueryChannelResponse;
                    toProto(message: _118.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelResponse): _118.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelsRequest;
                    fromPartial(object: Partial<_118.QueryChannelsRequest>): _118.QueryChannelsRequest;
                    fromAmino(object: _118.QueryChannelsRequestAmino): _118.QueryChannelsRequest;
                    toAmino(message: _118.QueryChannelsRequest): _118.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _118.QueryChannelsRequestAminoMsg): _118.QueryChannelsRequest;
                    toAminoMsg(message: _118.QueryChannelsRequest): _118.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelsRequestProtoMsg): _118.QueryChannelsRequest;
                    toProto(message: _118.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelsRequest): _118.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelsResponse;
                    fromPartial(object: Partial<_118.QueryChannelsResponse>): _118.QueryChannelsResponse;
                    fromAmino(object: _118.QueryChannelsResponseAmino): _118.QueryChannelsResponse;
                    toAmino(message: _118.QueryChannelsResponse): _118.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _118.QueryChannelsResponseAminoMsg): _118.QueryChannelsResponse;
                    toAminoMsg(message: _118.QueryChannelsResponse): _118.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelsResponseProtoMsg): _118.QueryChannelsResponse;
                    toProto(message: _118.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelsResponse): _118.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_118.QueryConnectionChannelsRequest>): _118.QueryConnectionChannelsRequest;
                    fromAmino(object: _118.QueryConnectionChannelsRequestAmino): _118.QueryConnectionChannelsRequest;
                    toAmino(message: _118.QueryConnectionChannelsRequest): _118.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _118.QueryConnectionChannelsRequestAminoMsg): _118.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _118.QueryConnectionChannelsRequest): _118.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryConnectionChannelsRequestProtoMsg): _118.QueryConnectionChannelsRequest;
                    toProto(message: _118.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryConnectionChannelsRequest): _118.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_118.QueryConnectionChannelsResponse>): _118.QueryConnectionChannelsResponse;
                    fromAmino(object: _118.QueryConnectionChannelsResponseAmino): _118.QueryConnectionChannelsResponse;
                    toAmino(message: _118.QueryConnectionChannelsResponse): _118.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _118.QueryConnectionChannelsResponseAminoMsg): _118.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _118.QueryConnectionChannelsResponse): _118.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryConnectionChannelsResponseProtoMsg): _118.QueryConnectionChannelsResponse;
                    toProto(message: _118.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryConnectionChannelsResponse): _118.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_118.QueryChannelClientStateRequest>): _118.QueryChannelClientStateRequest;
                    fromAmino(object: _118.QueryChannelClientStateRequestAmino): _118.QueryChannelClientStateRequest;
                    toAmino(message: _118.QueryChannelClientStateRequest): _118.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _118.QueryChannelClientStateRequestAminoMsg): _118.QueryChannelClientStateRequest;
                    toAminoMsg(message: _118.QueryChannelClientStateRequest): _118.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelClientStateRequestProtoMsg): _118.QueryChannelClientStateRequest;
                    toProto(message: _118.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelClientStateRequest): _118.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_118.QueryChannelClientStateResponse>): _118.QueryChannelClientStateResponse;
                    fromAmino(object: _118.QueryChannelClientStateResponseAmino): _118.QueryChannelClientStateResponse;
                    toAmino(message: _118.QueryChannelClientStateResponse): _118.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _118.QueryChannelClientStateResponseAminoMsg): _118.QueryChannelClientStateResponse;
                    toAminoMsg(message: _118.QueryChannelClientStateResponse): _118.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelClientStateResponseProtoMsg): _118.QueryChannelClientStateResponse;
                    toProto(message: _118.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelClientStateResponse): _118.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_118.QueryChannelConsensusStateRequest>): _118.QueryChannelConsensusStateRequest;
                    fromAmino(object: _118.QueryChannelConsensusStateRequestAmino): _118.QueryChannelConsensusStateRequest;
                    toAmino(message: _118.QueryChannelConsensusStateRequest): _118.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _118.QueryChannelConsensusStateRequestAminoMsg): _118.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _118.QueryChannelConsensusStateRequest): _118.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelConsensusStateRequestProtoMsg): _118.QueryChannelConsensusStateRequest;
                    toProto(message: _118.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelConsensusStateRequest): _118.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_118.QueryChannelConsensusStateResponse>): _118.QueryChannelConsensusStateResponse;
                    fromAmino(object: _118.QueryChannelConsensusStateResponseAmino): _118.QueryChannelConsensusStateResponse;
                    toAmino(message: _118.QueryChannelConsensusStateResponse): _118.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _118.QueryChannelConsensusStateResponseAminoMsg): _118.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _118.QueryChannelConsensusStateResponse): _118.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryChannelConsensusStateResponseProtoMsg): _118.QueryChannelConsensusStateResponse;
                    toProto(message: _118.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryChannelConsensusStateResponse): _118.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentRequest>): _118.QueryPacketCommitmentRequest;
                    fromAmino(object: _118.QueryPacketCommitmentRequestAmino): _118.QueryPacketCommitmentRequest;
                    toAmino(message: _118.QueryPacketCommitmentRequest): _118.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _118.QueryPacketCommitmentRequestAminoMsg): _118.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _118.QueryPacketCommitmentRequest): _118.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketCommitmentRequestProtoMsg): _118.QueryPacketCommitmentRequest;
                    toProto(message: _118.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketCommitmentRequest): _118.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentResponse>): _118.QueryPacketCommitmentResponse;
                    fromAmino(object: _118.QueryPacketCommitmentResponseAmino): _118.QueryPacketCommitmentResponse;
                    toAmino(message: _118.QueryPacketCommitmentResponse): _118.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _118.QueryPacketCommitmentResponseAminoMsg): _118.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _118.QueryPacketCommitmentResponse): _118.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketCommitmentResponseProtoMsg): _118.QueryPacketCommitmentResponse;
                    toProto(message: _118.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketCommitmentResponse): _118.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentsRequest>): _118.QueryPacketCommitmentsRequest;
                    fromAmino(object: _118.QueryPacketCommitmentsRequestAmino): _118.QueryPacketCommitmentsRequest;
                    toAmino(message: _118.QueryPacketCommitmentsRequest): _118.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _118.QueryPacketCommitmentsRequestAminoMsg): _118.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _118.QueryPacketCommitmentsRequest): _118.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketCommitmentsRequestProtoMsg): _118.QueryPacketCommitmentsRequest;
                    toProto(message: _118.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketCommitmentsRequest): _118.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentsResponse>): _118.QueryPacketCommitmentsResponse;
                    fromAmino(object: _118.QueryPacketCommitmentsResponseAmino): _118.QueryPacketCommitmentsResponse;
                    toAmino(message: _118.QueryPacketCommitmentsResponse): _118.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _118.QueryPacketCommitmentsResponseAminoMsg): _118.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _118.QueryPacketCommitmentsResponse): _118.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketCommitmentsResponseProtoMsg): _118.QueryPacketCommitmentsResponse;
                    toProto(message: _118.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketCommitmentsResponse): _118.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_118.QueryPacketReceiptRequest>): _118.QueryPacketReceiptRequest;
                    fromAmino(object: _118.QueryPacketReceiptRequestAmino): _118.QueryPacketReceiptRequest;
                    toAmino(message: _118.QueryPacketReceiptRequest): _118.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _118.QueryPacketReceiptRequestAminoMsg): _118.QueryPacketReceiptRequest;
                    toAminoMsg(message: _118.QueryPacketReceiptRequest): _118.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketReceiptRequestProtoMsg): _118.QueryPacketReceiptRequest;
                    toProto(message: _118.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketReceiptRequest): _118.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_118.QueryPacketReceiptResponse>): _118.QueryPacketReceiptResponse;
                    fromAmino(object: _118.QueryPacketReceiptResponseAmino): _118.QueryPacketReceiptResponse;
                    toAmino(message: _118.QueryPacketReceiptResponse): _118.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _118.QueryPacketReceiptResponseAminoMsg): _118.QueryPacketReceiptResponse;
                    toAminoMsg(message: _118.QueryPacketReceiptResponse): _118.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketReceiptResponseProtoMsg): _118.QueryPacketReceiptResponse;
                    toProto(message: _118.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketReceiptResponse): _118.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementRequest>): _118.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _118.QueryPacketAcknowledgementRequestAmino): _118.QueryPacketAcknowledgementRequest;
                    toAmino(message: _118.QueryPacketAcknowledgementRequest): _118.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _118.QueryPacketAcknowledgementRequestAminoMsg): _118.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _118.QueryPacketAcknowledgementRequest): _118.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketAcknowledgementRequestProtoMsg): _118.QueryPacketAcknowledgementRequest;
                    toProto(message: _118.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketAcknowledgementRequest): _118.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementResponse>): _118.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _118.QueryPacketAcknowledgementResponseAmino): _118.QueryPacketAcknowledgementResponse;
                    toAmino(message: _118.QueryPacketAcknowledgementResponse): _118.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _118.QueryPacketAcknowledgementResponseAminoMsg): _118.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _118.QueryPacketAcknowledgementResponse): _118.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketAcknowledgementResponseProtoMsg): _118.QueryPacketAcknowledgementResponse;
                    toProto(message: _118.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketAcknowledgementResponse): _118.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementsRequest>): _118.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _118.QueryPacketAcknowledgementsRequestAmino): _118.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _118.QueryPacketAcknowledgementsRequest): _118.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _118.QueryPacketAcknowledgementsRequestAminoMsg): _118.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _118.QueryPacketAcknowledgementsRequest): _118.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketAcknowledgementsRequestProtoMsg): _118.QueryPacketAcknowledgementsRequest;
                    toProto(message: _118.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketAcknowledgementsRequest): _118.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementsResponse>): _118.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _118.QueryPacketAcknowledgementsResponseAmino): _118.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _118.QueryPacketAcknowledgementsResponse): _118.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _118.QueryPacketAcknowledgementsResponseAminoMsg): _118.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _118.QueryPacketAcknowledgementsResponse): _118.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryPacketAcknowledgementsResponseProtoMsg): _118.QueryPacketAcknowledgementsResponse;
                    toProto(message: _118.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryPacketAcknowledgementsResponse): _118.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_118.QueryUnreceivedPacketsRequest>): _118.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _118.QueryUnreceivedPacketsRequestAmino): _118.QueryUnreceivedPacketsRequest;
                    toAmino(message: _118.QueryUnreceivedPacketsRequest): _118.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _118.QueryUnreceivedPacketsRequestAminoMsg): _118.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _118.QueryUnreceivedPacketsRequest): _118.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryUnreceivedPacketsRequestProtoMsg): _118.QueryUnreceivedPacketsRequest;
                    toProto(message: _118.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryUnreceivedPacketsRequest): _118.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_118.QueryUnreceivedPacketsResponse>): _118.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _118.QueryUnreceivedPacketsResponseAmino): _118.QueryUnreceivedPacketsResponse;
                    toAmino(message: _118.QueryUnreceivedPacketsResponse): _118.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _118.QueryUnreceivedPacketsResponseAminoMsg): _118.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _118.QueryUnreceivedPacketsResponse): _118.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryUnreceivedPacketsResponseProtoMsg): _118.QueryUnreceivedPacketsResponse;
                    toProto(message: _118.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryUnreceivedPacketsResponse): _118.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_118.QueryUnreceivedAcksRequest>): _118.QueryUnreceivedAcksRequest;
                    fromAmino(object: _118.QueryUnreceivedAcksRequestAmino): _118.QueryUnreceivedAcksRequest;
                    toAmino(message: _118.QueryUnreceivedAcksRequest): _118.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _118.QueryUnreceivedAcksRequestAminoMsg): _118.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _118.QueryUnreceivedAcksRequest): _118.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryUnreceivedAcksRequestProtoMsg): _118.QueryUnreceivedAcksRequest;
                    toProto(message: _118.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryUnreceivedAcksRequest): _118.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_118.QueryUnreceivedAcksResponse>): _118.QueryUnreceivedAcksResponse;
                    fromAmino(object: _118.QueryUnreceivedAcksResponseAmino): _118.QueryUnreceivedAcksResponse;
                    toAmino(message: _118.QueryUnreceivedAcksResponse): _118.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _118.QueryUnreceivedAcksResponseAminoMsg): _118.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _118.QueryUnreceivedAcksResponse): _118.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryUnreceivedAcksResponseProtoMsg): _118.QueryUnreceivedAcksResponse;
                    toProto(message: _118.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryUnreceivedAcksResponse): _118.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _118.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_118.QueryNextSequenceReceiveRequest>): _118.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _118.QueryNextSequenceReceiveRequestAmino): _118.QueryNextSequenceReceiveRequest;
                    toAmino(message: _118.QueryNextSequenceReceiveRequest): _118.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _118.QueryNextSequenceReceiveRequestAminoMsg): _118.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _118.QueryNextSequenceReceiveRequest): _118.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _118.QueryNextSequenceReceiveRequestProtoMsg): _118.QueryNextSequenceReceiveRequest;
                    toProto(message: _118.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _118.QueryNextSequenceReceiveRequest): _118.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _118.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_118.QueryNextSequenceReceiveResponse>): _118.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _118.QueryNextSequenceReceiveResponseAmino): _118.QueryNextSequenceReceiveResponse;
                    toAmino(message: _118.QueryNextSequenceReceiveResponse): _118.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _118.QueryNextSequenceReceiveResponseAminoMsg): _118.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _118.QueryNextSequenceReceiveResponse): _118.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _118.QueryNextSequenceReceiveResponseProtoMsg): _118.QueryNextSequenceReceiveResponse;
                    toProto(message: _118.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _118.QueryNextSequenceReceiveResponse): _118.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _117.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.GenesisState;
                    fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                    fromAmino(object: _117.GenesisStateAmino): _117.GenesisState;
                    toAmino(message: _117.GenesisState): _117.GenesisStateAmino;
                    fromAminoMsg(object: _117.GenesisStateAminoMsg): _117.GenesisState;
                    toAminoMsg(message: _117.GenesisState): _117.GenesisStateAminoMsg;
                    fromProtoMsg(message: _117.GenesisStateProtoMsg): _117.GenesisState;
                    toProto(message: _117.GenesisState): Uint8Array;
                    toProtoMsg(message: _117.GenesisState): _117.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _117.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.PacketSequence;
                    fromPartial(object: Partial<_117.PacketSequence>): _117.PacketSequence;
                    fromAmino(object: _117.PacketSequenceAmino): _117.PacketSequence;
                    toAmino(message: _117.PacketSequence): _117.PacketSequenceAmino;
                    fromAminoMsg(object: _117.PacketSequenceAminoMsg): _117.PacketSequence;
                    toAminoMsg(message: _117.PacketSequence): _117.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _117.PacketSequenceProtoMsg): _117.PacketSequence;
                    toProto(message: _117.PacketSequence): Uint8Array;
                    toProtoMsg(message: _117.PacketSequence): _117.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                orderFromJSON(object: any): _116.Order;
                orderToJSON(object: _116.Order): string;
                State: typeof _116.State;
                StateSDKType: typeof _116.State;
                StateAmino: typeof _116.State;
                Order: typeof _116.Order;
                OrderSDKType: typeof _116.Order;
                OrderAmino: typeof _116.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _116.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Channel;
                    fromPartial(object: Partial<_116.Channel>): _116.Channel;
                    fromAmino(object: _116.ChannelAmino): _116.Channel;
                    toAmino(message: _116.Channel): _116.ChannelAmino;
                    fromAminoMsg(object: _116.ChannelAminoMsg): _116.Channel;
                    toAminoMsg(message: _116.Channel): _116.ChannelAminoMsg;
                    fromProtoMsg(message: _116.ChannelProtoMsg): _116.Channel;
                    toProto(message: _116.Channel): Uint8Array;
                    toProtoMsg(message: _116.Channel): _116.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _116.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.IdentifiedChannel;
                    fromPartial(object: Partial<_116.IdentifiedChannel>): _116.IdentifiedChannel;
                    fromAmino(object: _116.IdentifiedChannelAmino): _116.IdentifiedChannel;
                    toAmino(message: _116.IdentifiedChannel): _116.IdentifiedChannelAmino;
                    fromAminoMsg(object: _116.IdentifiedChannelAminoMsg): _116.IdentifiedChannel;
                    toAminoMsg(message: _116.IdentifiedChannel): _116.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _116.IdentifiedChannelProtoMsg): _116.IdentifiedChannel;
                    toProto(message: _116.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _116.IdentifiedChannel): _116.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _116.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Counterparty;
                    fromPartial(object: Partial<_116.Counterparty>): _116.Counterparty;
                    fromAmino(object: _116.CounterpartyAmino): _116.Counterparty;
                    toAmino(message: _116.Counterparty): _116.CounterpartyAmino;
                    fromAminoMsg(object: _116.CounterpartyAminoMsg): _116.Counterparty;
                    toAminoMsg(message: _116.Counterparty): _116.CounterpartyAminoMsg;
                    fromProtoMsg(message: _116.CounterpartyProtoMsg): _116.Counterparty;
                    toProto(message: _116.Counterparty): Uint8Array;
                    toProtoMsg(message: _116.Counterparty): _116.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _116.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Packet;
                    fromPartial(object: Partial<_116.Packet>): _116.Packet;
                    fromAmino(object: _116.PacketAmino): _116.Packet;
                    toAmino(message: _116.Packet): _116.PacketAmino;
                    fromAminoMsg(object: _116.PacketAminoMsg): _116.Packet;
                    toAminoMsg(message: _116.Packet): _116.PacketAminoMsg;
                    fromProtoMsg(message: _116.PacketProtoMsg): _116.Packet;
                    toProto(message: _116.Packet): Uint8Array;
                    toProtoMsg(message: _116.Packet): _116.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _116.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.PacketState;
                    fromPartial(object: Partial<_116.PacketState>): _116.PacketState;
                    fromAmino(object: _116.PacketStateAmino): _116.PacketState;
                    toAmino(message: _116.PacketState): _116.PacketStateAmino;
                    fromAminoMsg(object: _116.PacketStateAminoMsg): _116.PacketState;
                    toAminoMsg(message: _116.PacketState): _116.PacketStateAminoMsg;
                    fromProtoMsg(message: _116.PacketStateProtoMsg): _116.PacketState;
                    toProto(message: _116.PacketState): Uint8Array;
                    toProtoMsg(message: _116.PacketState): _116.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _116.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.Acknowledgement;
                    fromPartial(object: Partial<_116.Acknowledgement>): _116.Acknowledgement;
                    fromAmino(object: _116.AcknowledgementAmino): _116.Acknowledgement;
                    toAmino(message: _116.Acknowledgement): _116.AcknowledgementAmino;
                    fromAminoMsg(object: _116.AcknowledgementAminoMsg): _116.Acknowledgement;
                    toAminoMsg(message: _116.Acknowledgement): _116.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _116.AcknowledgementProtoMsg): _116.Acknowledgement;
                    toProto(message: _116.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _116.Acknowledgement): _116.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _280.MsgClientImpl;
                QueryClientImpl: typeof _276.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _122.QueryClientStateRequest): Promise<_122.QueryClientStateResponse>;
                    clientStates(request?: _122.QueryClientStatesRequest): Promise<_122.QueryClientStatesResponse>;
                    consensusState(request: _122.QueryConsensusStateRequest): Promise<_122.QueryConsensusStateResponse>;
                    consensusStates(request: _122.QueryConsensusStatesRequest): Promise<_122.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _122.QueryConsensusStateHeightsRequest): Promise<_122.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _122.QueryClientStatusRequest): Promise<_122.QueryClientStatusResponse>;
                    clientParams(request?: _122.QueryClientParamsRequest): Promise<_122.QueryClientParamsResponse>;
                    upgradedClientState(request?: _122.QueryUpgradedClientStateRequest): Promise<_122.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _270.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _123.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _123.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _123.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _123.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _123.MsgCreateClient): {
                            typeUrl: string;
                            value: _123.MsgCreateClient;
                        };
                        updateClient(value: _123.MsgUpdateClient): {
                            typeUrl: string;
                            value: _123.MsgUpdateClient;
                        };
                        upgradeClient(value: _123.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _123.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _123.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _123.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _123.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _123.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _123.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _123.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _123.MsgCreateClient): {
                            typeUrl: string;
                            value: _123.MsgCreateClient;
                        };
                        updateClient(value: _123.MsgUpdateClient): {
                            typeUrl: string;
                            value: _123.MsgUpdateClient;
                        };
                        upgradeClient(value: _123.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _123.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _123.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _123.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _123.MsgCreateClient) => _123.MsgCreateClientAmino;
                        fromAmino: (object: _123.MsgCreateClientAmino) => _123.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _123.MsgUpdateClient) => _123.MsgUpdateClientAmino;
                        fromAmino: (object: _123.MsgUpdateClientAmino) => _123.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _123.MsgUpgradeClient) => _123.MsgUpgradeClientAmino;
                        fromAmino: (object: _123.MsgUpgradeClientAmino) => _123.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _123.MsgSubmitMisbehaviour) => _123.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _123.MsgSubmitMisbehaviourAmino) => _123.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _123.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MsgCreateClient;
                    fromPartial(object: Partial<_123.MsgCreateClient>): _123.MsgCreateClient;
                    fromAmino(object: _123.MsgCreateClientAmino): _123.MsgCreateClient;
                    toAmino(message: _123.MsgCreateClient): _123.MsgCreateClientAmino;
                    fromAminoMsg(object: _123.MsgCreateClientAminoMsg): _123.MsgCreateClient;
                    toAminoMsg(message: _123.MsgCreateClient): _123.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _123.MsgCreateClientProtoMsg): _123.MsgCreateClient;
                    toProto(message: _123.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _123.MsgCreateClient): _123.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _123.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.MsgCreateClientResponse;
                    fromPartial(_: Partial<_123.MsgCreateClientResponse>): _123.MsgCreateClientResponse;
                    fromAmino(_: _123.MsgCreateClientResponseAmino): _123.MsgCreateClientResponse;
                    toAmino(_: _123.MsgCreateClientResponse): _123.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _123.MsgCreateClientResponseAminoMsg): _123.MsgCreateClientResponse;
                    toAminoMsg(message: _123.MsgCreateClientResponse): _123.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _123.MsgCreateClientResponseProtoMsg): _123.MsgCreateClientResponse;
                    toProto(message: _123.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _123.MsgCreateClientResponse): _123.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _123.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MsgUpdateClient;
                    fromPartial(object: Partial<_123.MsgUpdateClient>): _123.MsgUpdateClient;
                    fromAmino(object: _123.MsgUpdateClientAmino): _123.MsgUpdateClient;
                    toAmino(message: _123.MsgUpdateClient): _123.MsgUpdateClientAmino;
                    fromAminoMsg(object: _123.MsgUpdateClientAminoMsg): _123.MsgUpdateClient;
                    toAminoMsg(message: _123.MsgUpdateClient): _123.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _123.MsgUpdateClientProtoMsg): _123.MsgUpdateClient;
                    toProto(message: _123.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _123.MsgUpdateClient): _123.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _123.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_123.MsgUpdateClientResponse>): _123.MsgUpdateClientResponse;
                    fromAmino(_: _123.MsgUpdateClientResponseAmino): _123.MsgUpdateClientResponse;
                    toAmino(_: _123.MsgUpdateClientResponse): _123.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _123.MsgUpdateClientResponseAminoMsg): _123.MsgUpdateClientResponse;
                    toAminoMsg(message: _123.MsgUpdateClientResponse): _123.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _123.MsgUpdateClientResponseProtoMsg): _123.MsgUpdateClientResponse;
                    toProto(message: _123.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _123.MsgUpdateClientResponse): _123.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _123.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MsgUpgradeClient;
                    fromPartial(object: Partial<_123.MsgUpgradeClient>): _123.MsgUpgradeClient;
                    fromAmino(object: _123.MsgUpgradeClientAmino): _123.MsgUpgradeClient;
                    toAmino(message: _123.MsgUpgradeClient): _123.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _123.MsgUpgradeClientAminoMsg): _123.MsgUpgradeClient;
                    toAminoMsg(message: _123.MsgUpgradeClient): _123.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _123.MsgUpgradeClientProtoMsg): _123.MsgUpgradeClient;
                    toProto(message: _123.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _123.MsgUpgradeClient): _123.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _123.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_123.MsgUpgradeClientResponse>): _123.MsgUpgradeClientResponse;
                    fromAmino(_: _123.MsgUpgradeClientResponseAmino): _123.MsgUpgradeClientResponse;
                    toAmino(_: _123.MsgUpgradeClientResponse): _123.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _123.MsgUpgradeClientResponseAminoMsg): _123.MsgUpgradeClientResponse;
                    toAminoMsg(message: _123.MsgUpgradeClientResponse): _123.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _123.MsgUpgradeClientResponseProtoMsg): _123.MsgUpgradeClientResponse;
                    toProto(message: _123.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _123.MsgUpgradeClientResponse): _123.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _123.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _123.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_123.MsgSubmitMisbehaviour>): _123.MsgSubmitMisbehaviour;
                    fromAmino(object: _123.MsgSubmitMisbehaviourAmino): _123.MsgSubmitMisbehaviour;
                    toAmino(message: _123.MsgSubmitMisbehaviour): _123.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _123.MsgSubmitMisbehaviourAminoMsg): _123.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _123.MsgSubmitMisbehaviour): _123.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _123.MsgSubmitMisbehaviourProtoMsg): _123.MsgSubmitMisbehaviour;
                    toProto(message: _123.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _123.MsgSubmitMisbehaviour): _123.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _123.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _123.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_123.MsgSubmitMisbehaviourResponse>): _123.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _123.MsgSubmitMisbehaviourResponseAmino): _123.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _123.MsgSubmitMisbehaviourResponse): _123.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _123.MsgSubmitMisbehaviourResponseAminoMsg): _123.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _123.MsgSubmitMisbehaviourResponse): _123.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _123.MsgSubmitMisbehaviourResponseProtoMsg): _123.MsgSubmitMisbehaviourResponse;
                    toProto(message: _123.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _123.MsgSubmitMisbehaviourResponse): _123.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _122.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryClientStateRequest;
                    fromPartial(object: Partial<_122.QueryClientStateRequest>): _122.QueryClientStateRequest;
                    fromAmino(object: _122.QueryClientStateRequestAmino): _122.QueryClientStateRequest;
                    toAmino(message: _122.QueryClientStateRequest): _122.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _122.QueryClientStateRequestAminoMsg): _122.QueryClientStateRequest;
                    toAminoMsg(message: _122.QueryClientStateRequest): _122.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryClientStateRequestProtoMsg): _122.QueryClientStateRequest;
                    toProto(message: _122.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryClientStateRequest): _122.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryClientStateResponse;
                    fromPartial(object: Partial<_122.QueryClientStateResponse>): _122.QueryClientStateResponse;
                    fromAmino(object: _122.QueryClientStateResponseAmino): _122.QueryClientStateResponse;
                    toAmino(message: _122.QueryClientStateResponse): _122.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _122.QueryClientStateResponseAminoMsg): _122.QueryClientStateResponse;
                    toAminoMsg(message: _122.QueryClientStateResponse): _122.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryClientStateResponseProtoMsg): _122.QueryClientStateResponse;
                    toProto(message: _122.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryClientStateResponse): _122.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _122.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryClientStatesRequest;
                    fromPartial(object: Partial<_122.QueryClientStatesRequest>): _122.QueryClientStatesRequest;
                    fromAmino(object: _122.QueryClientStatesRequestAmino): _122.QueryClientStatesRequest;
                    toAmino(message: _122.QueryClientStatesRequest): _122.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _122.QueryClientStatesRequestAminoMsg): _122.QueryClientStatesRequest;
                    toAminoMsg(message: _122.QueryClientStatesRequest): _122.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryClientStatesRequestProtoMsg): _122.QueryClientStatesRequest;
                    toProto(message: _122.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryClientStatesRequest): _122.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryClientStatesResponse;
                    fromPartial(object: Partial<_122.QueryClientStatesResponse>): _122.QueryClientStatesResponse;
                    fromAmino(object: _122.QueryClientStatesResponseAmino): _122.QueryClientStatesResponse;
                    toAmino(message: _122.QueryClientStatesResponse): _122.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _122.QueryClientStatesResponseAminoMsg): _122.QueryClientStatesResponse;
                    toAminoMsg(message: _122.QueryClientStatesResponse): _122.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryClientStatesResponseProtoMsg): _122.QueryClientStatesResponse;
                    toProto(message: _122.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryClientStatesResponse): _122.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _122.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_122.QueryConsensusStateRequest>): _122.QueryConsensusStateRequest;
                    fromAmino(object: _122.QueryConsensusStateRequestAmino): _122.QueryConsensusStateRequest;
                    toAmino(message: _122.QueryConsensusStateRequest): _122.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _122.QueryConsensusStateRequestAminoMsg): _122.QueryConsensusStateRequest;
                    toAminoMsg(message: _122.QueryConsensusStateRequest): _122.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryConsensusStateRequestProtoMsg): _122.QueryConsensusStateRequest;
                    toProto(message: _122.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryConsensusStateRequest): _122.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_122.QueryConsensusStateResponse>): _122.QueryConsensusStateResponse;
                    fromAmino(object: _122.QueryConsensusStateResponseAmino): _122.QueryConsensusStateResponse;
                    toAmino(message: _122.QueryConsensusStateResponse): _122.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _122.QueryConsensusStateResponseAminoMsg): _122.QueryConsensusStateResponse;
                    toAminoMsg(message: _122.QueryConsensusStateResponse): _122.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryConsensusStateResponseProtoMsg): _122.QueryConsensusStateResponse;
                    toProto(message: _122.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryConsensusStateResponse): _122.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _122.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_122.QueryConsensusStatesRequest>): _122.QueryConsensusStatesRequest;
                    fromAmino(object: _122.QueryConsensusStatesRequestAmino): _122.QueryConsensusStatesRequest;
                    toAmino(message: _122.QueryConsensusStatesRequest): _122.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _122.QueryConsensusStatesRequestAminoMsg): _122.QueryConsensusStatesRequest;
                    toAminoMsg(message: _122.QueryConsensusStatesRequest): _122.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryConsensusStatesRequestProtoMsg): _122.QueryConsensusStatesRequest;
                    toProto(message: _122.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryConsensusStatesRequest): _122.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_122.QueryConsensusStatesResponse>): _122.QueryConsensusStatesResponse;
                    fromAmino(object: _122.QueryConsensusStatesResponseAmino): _122.QueryConsensusStatesResponse;
                    toAmino(message: _122.QueryConsensusStatesResponse): _122.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _122.QueryConsensusStatesResponseAminoMsg): _122.QueryConsensusStatesResponse;
                    toAminoMsg(message: _122.QueryConsensusStatesResponse): _122.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryConsensusStatesResponseProtoMsg): _122.QueryConsensusStatesResponse;
                    toProto(message: _122.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryConsensusStatesResponse): _122.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _122.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_122.QueryConsensusStateHeightsRequest>): _122.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _122.QueryConsensusStateHeightsRequestAmino): _122.QueryConsensusStateHeightsRequest;
                    toAmino(message: _122.QueryConsensusStateHeightsRequest): _122.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _122.QueryConsensusStateHeightsRequestAminoMsg): _122.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _122.QueryConsensusStateHeightsRequest): _122.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryConsensusStateHeightsRequestProtoMsg): _122.QueryConsensusStateHeightsRequest;
                    toProto(message: _122.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryConsensusStateHeightsRequest): _122.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_122.QueryConsensusStateHeightsResponse>): _122.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _122.QueryConsensusStateHeightsResponseAmino): _122.QueryConsensusStateHeightsResponse;
                    toAmino(message: _122.QueryConsensusStateHeightsResponse): _122.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _122.QueryConsensusStateHeightsResponseAminoMsg): _122.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _122.QueryConsensusStateHeightsResponse): _122.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryConsensusStateHeightsResponseProtoMsg): _122.QueryConsensusStateHeightsResponse;
                    toProto(message: _122.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryConsensusStateHeightsResponse): _122.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _122.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryClientStatusRequest;
                    fromPartial(object: Partial<_122.QueryClientStatusRequest>): _122.QueryClientStatusRequest;
                    fromAmino(object: _122.QueryClientStatusRequestAmino): _122.QueryClientStatusRequest;
                    toAmino(message: _122.QueryClientStatusRequest): _122.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _122.QueryClientStatusRequestAminoMsg): _122.QueryClientStatusRequest;
                    toAminoMsg(message: _122.QueryClientStatusRequest): _122.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryClientStatusRequestProtoMsg): _122.QueryClientStatusRequest;
                    toProto(message: _122.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryClientStatusRequest): _122.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryClientStatusResponse;
                    fromPartial(object: Partial<_122.QueryClientStatusResponse>): _122.QueryClientStatusResponse;
                    fromAmino(object: _122.QueryClientStatusResponseAmino): _122.QueryClientStatusResponse;
                    toAmino(message: _122.QueryClientStatusResponse): _122.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _122.QueryClientStatusResponseAminoMsg): _122.QueryClientStatusResponse;
                    toAminoMsg(message: _122.QueryClientStatusResponse): _122.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryClientStatusResponseProtoMsg): _122.QueryClientStatusResponse;
                    toProto(message: _122.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryClientStatusResponse): _122.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _122.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.QueryClientParamsRequest;
                    fromPartial(_: Partial<_122.QueryClientParamsRequest>): _122.QueryClientParamsRequest;
                    fromAmino(_: _122.QueryClientParamsRequestAmino): _122.QueryClientParamsRequest;
                    toAmino(_: _122.QueryClientParamsRequest): _122.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _122.QueryClientParamsRequestAminoMsg): _122.QueryClientParamsRequest;
                    toAminoMsg(message: _122.QueryClientParamsRequest): _122.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryClientParamsRequestProtoMsg): _122.QueryClientParamsRequest;
                    toProto(message: _122.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryClientParamsRequest): _122.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryClientParamsResponse;
                    fromPartial(object: Partial<_122.QueryClientParamsResponse>): _122.QueryClientParamsResponse;
                    fromAmino(object: _122.QueryClientParamsResponseAmino): _122.QueryClientParamsResponse;
                    toAmino(message: _122.QueryClientParamsResponse): _122.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _122.QueryClientParamsResponseAminoMsg): _122.QueryClientParamsResponse;
                    toAminoMsg(message: _122.QueryClientParamsResponse): _122.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryClientParamsResponseProtoMsg): _122.QueryClientParamsResponse;
                    toProto(message: _122.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryClientParamsResponse): _122.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _122.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_122.QueryUpgradedClientStateRequest>): _122.QueryUpgradedClientStateRequest;
                    fromAmino(_: _122.QueryUpgradedClientStateRequestAmino): _122.QueryUpgradedClientStateRequest;
                    toAmino(_: _122.QueryUpgradedClientStateRequest): _122.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _122.QueryUpgradedClientStateRequestAminoMsg): _122.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _122.QueryUpgradedClientStateRequest): _122.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryUpgradedClientStateRequestProtoMsg): _122.QueryUpgradedClientStateRequest;
                    toProto(message: _122.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryUpgradedClientStateRequest): _122.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_122.QueryUpgradedClientStateResponse>): _122.QueryUpgradedClientStateResponse;
                    fromAmino(object: _122.QueryUpgradedClientStateResponseAmino): _122.QueryUpgradedClientStateResponse;
                    toAmino(message: _122.QueryUpgradedClientStateResponse): _122.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _122.QueryUpgradedClientStateResponseAminoMsg): _122.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _122.QueryUpgradedClientStateResponse): _122.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryUpgradedClientStateResponseProtoMsg): _122.QueryUpgradedClientStateResponse;
                    toProto(message: _122.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryUpgradedClientStateResponse): _122.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _122.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _122.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_122.QueryUpgradedConsensusStateRequest>): _122.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _122.QueryUpgradedConsensusStateRequestAmino): _122.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _122.QueryUpgradedConsensusStateRequest): _122.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _122.QueryUpgradedConsensusStateRequestAminoMsg): _122.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _122.QueryUpgradedConsensusStateRequest): _122.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _122.QueryUpgradedConsensusStateRequestProtoMsg): _122.QueryUpgradedConsensusStateRequest;
                    toProto(message: _122.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _122.QueryUpgradedConsensusStateRequest): _122.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _122.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_122.QueryUpgradedConsensusStateResponse>): _122.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _122.QueryUpgradedConsensusStateResponseAmino): _122.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _122.QueryUpgradedConsensusStateResponse): _122.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _122.QueryUpgradedConsensusStateResponseAminoMsg): _122.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _122.QueryUpgradedConsensusStateResponse): _122.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _122.QueryUpgradedConsensusStateResponseProtoMsg): _122.QueryUpgradedConsensusStateResponse;
                    toProto(message: _122.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _122.QueryUpgradedConsensusStateResponse): _122.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _121.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.GenesisState;
                    fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                    fromAmino(object: _121.GenesisStateAmino): _121.GenesisState;
                    toAmino(message: _121.GenesisState): _121.GenesisStateAmino;
                    fromAminoMsg(object: _121.GenesisStateAminoMsg): _121.GenesisState;
                    toAminoMsg(message: _121.GenesisState): _121.GenesisStateAminoMsg;
                    fromProtoMsg(message: _121.GenesisStateProtoMsg): _121.GenesisState;
                    toProto(message: _121.GenesisState): Uint8Array;
                    toProtoMsg(message: _121.GenesisState): _121.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _121.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.GenesisMetadata;
                    fromPartial(object: Partial<_121.GenesisMetadata>): _121.GenesisMetadata;
                    fromAmino(object: _121.GenesisMetadataAmino): _121.GenesisMetadata;
                    toAmino(message: _121.GenesisMetadata): _121.GenesisMetadataAmino;
                    fromAminoMsg(object: _121.GenesisMetadataAminoMsg): _121.GenesisMetadata;
                    toAminoMsg(message: _121.GenesisMetadata): _121.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _121.GenesisMetadataProtoMsg): _121.GenesisMetadata;
                    toProto(message: _121.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _121.GenesisMetadata): _121.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _121.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_121.IdentifiedGenesisMetadata>): _121.IdentifiedGenesisMetadata;
                    fromAmino(object: _121.IdentifiedGenesisMetadataAmino): _121.IdentifiedGenesisMetadata;
                    toAmino(message: _121.IdentifiedGenesisMetadata): _121.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _121.IdentifiedGenesisMetadataAminoMsg): _121.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _121.IdentifiedGenesisMetadata): _121.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _121.IdentifiedGenesisMetadataProtoMsg): _121.IdentifiedGenesisMetadata;
                    toProto(message: _121.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _121.IdentifiedGenesisMetadata): _121.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _120.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.IdentifiedClientState;
                    fromPartial(object: Partial<_120.IdentifiedClientState>): _120.IdentifiedClientState;
                    fromAmino(object: _120.IdentifiedClientStateAmino): _120.IdentifiedClientState;
                    toAmino(message: _120.IdentifiedClientState): _120.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _120.IdentifiedClientStateAminoMsg): _120.IdentifiedClientState;
                    toAminoMsg(message: _120.IdentifiedClientState): _120.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _120.IdentifiedClientStateProtoMsg): _120.IdentifiedClientState;
                    toProto(message: _120.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _120.IdentifiedClientState): _120.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _120.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_120.ConsensusStateWithHeight>): _120.ConsensusStateWithHeight;
                    fromAmino(object: _120.ConsensusStateWithHeightAmino): _120.ConsensusStateWithHeight;
                    toAmino(message: _120.ConsensusStateWithHeight): _120.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _120.ConsensusStateWithHeightAminoMsg): _120.ConsensusStateWithHeight;
                    toAminoMsg(message: _120.ConsensusStateWithHeight): _120.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _120.ConsensusStateWithHeightProtoMsg): _120.ConsensusStateWithHeight;
                    toProto(message: _120.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _120.ConsensusStateWithHeight): _120.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _120.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.ClientConsensusStates;
                    fromPartial(object: Partial<_120.ClientConsensusStates>): _120.ClientConsensusStates;
                    fromAmino(object: _120.ClientConsensusStatesAmino): _120.ClientConsensusStates;
                    toAmino(message: _120.ClientConsensusStates): _120.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _120.ClientConsensusStatesAminoMsg): _120.ClientConsensusStates;
                    toAminoMsg(message: _120.ClientConsensusStates): _120.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _120.ClientConsensusStatesProtoMsg): _120.ClientConsensusStates;
                    toProto(message: _120.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _120.ClientConsensusStates): _120.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _120.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.ClientUpdateProposal;
                    fromPartial(object: Partial<_120.ClientUpdateProposal>): _120.ClientUpdateProposal;
                    fromAmino(object: _120.ClientUpdateProposalAmino): _120.ClientUpdateProposal;
                    toAmino(message: _120.ClientUpdateProposal): _120.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _120.ClientUpdateProposalAminoMsg): _120.ClientUpdateProposal;
                    toAminoMsg(message: _120.ClientUpdateProposal): _120.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _120.ClientUpdateProposalProtoMsg): _120.ClientUpdateProposal;
                    toProto(message: _120.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _120.ClientUpdateProposal): _120.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _120.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.UpgradeProposal;
                    fromPartial(object: Partial<_120.UpgradeProposal>): _120.UpgradeProposal;
                    fromAmino(object: _120.UpgradeProposalAmino): _120.UpgradeProposal;
                    toAmino(message: _120.UpgradeProposal): _120.UpgradeProposalAmino;
                    fromAminoMsg(object: _120.UpgradeProposalAminoMsg): _120.UpgradeProposal;
                    toAminoMsg(message: _120.UpgradeProposal): _120.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _120.UpgradeProposalProtoMsg): _120.UpgradeProposal;
                    toProto(message: _120.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _120.UpgradeProposal): _120.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _120.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.Height;
                    fromPartial(object: Partial<_120.Height>): _120.Height;
                    fromAmino(object: _120.HeightAmino): _120.Height;
                    toAmino(message: _120.Height): _120.HeightAmino;
                    fromAminoMsg(object: _120.HeightAminoMsg): _120.Height;
                    toAminoMsg(message: _120.Height): _120.HeightAminoMsg;
                    fromProtoMsg(message: _120.HeightProtoMsg): _120.Height;
                    toProto(message: _120.Height): Uint8Array;
                    toProtoMsg(message: _120.Height): _120.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _120.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.Params;
                    fromPartial(object: Partial<_120.Params>): _120.Params;
                    fromAmino(object: _120.ParamsAmino): _120.Params;
                    toAmino(message: _120.Params): _120.ParamsAmino;
                    fromAminoMsg(object: _120.ParamsAminoMsg): _120.Params;
                    toAminoMsg(message: _120.Params): _120.ParamsAminoMsg;
                    fromProtoMsg(message: _120.ParamsProtoMsg): _120.Params;
                    toProto(message: _120.Params): Uint8Array;
                    toProtoMsg(message: _120.Params): _120.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _124.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.MerkleRoot;
                    fromPartial(object: Partial<_124.MerkleRoot>): _124.MerkleRoot;
                    fromAmino(object: _124.MerkleRootAmino): _124.MerkleRoot;
                    toAmino(message: _124.MerkleRoot): _124.MerkleRootAmino;
                    fromAminoMsg(object: _124.MerkleRootAminoMsg): _124.MerkleRoot;
                    toAminoMsg(message: _124.MerkleRoot): _124.MerkleRootAminoMsg;
                    fromProtoMsg(message: _124.MerkleRootProtoMsg): _124.MerkleRoot;
                    toProto(message: _124.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _124.MerkleRoot): _124.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _124.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.MerklePrefix;
                    fromPartial(object: Partial<_124.MerklePrefix>): _124.MerklePrefix;
                    fromAmino(object: _124.MerklePrefixAmino): _124.MerklePrefix;
                    toAmino(message: _124.MerklePrefix): _124.MerklePrefixAmino;
                    fromAminoMsg(object: _124.MerklePrefixAminoMsg): _124.MerklePrefix;
                    toAminoMsg(message: _124.MerklePrefix): _124.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _124.MerklePrefixProtoMsg): _124.MerklePrefix;
                    toProto(message: _124.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _124.MerklePrefix): _124.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _124.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.MerklePath;
                    fromPartial(object: Partial<_124.MerklePath>): _124.MerklePath;
                    fromAmino(object: _124.MerklePathAmino): _124.MerklePath;
                    toAmino(message: _124.MerklePath): _124.MerklePathAmino;
                    fromAminoMsg(object: _124.MerklePathAminoMsg): _124.MerklePath;
                    toAminoMsg(message: _124.MerklePath): _124.MerklePathAminoMsg;
                    fromProtoMsg(message: _124.MerklePathProtoMsg): _124.MerklePath;
                    toProto(message: _124.MerklePath): Uint8Array;
                    toProtoMsg(message: _124.MerklePath): _124.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _124.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _124.MerkleProof;
                    fromPartial(object: Partial<_124.MerkleProof>): _124.MerkleProof;
                    fromAmino(object: _124.MerkleProofAmino): _124.MerkleProof;
                    toAmino(message: _124.MerkleProof): _124.MerkleProofAmino;
                    fromAminoMsg(object: _124.MerkleProofAminoMsg): _124.MerkleProof;
                    toAminoMsg(message: _124.MerkleProof): _124.MerkleProofAminoMsg;
                    fromProtoMsg(message: _124.MerkleProofProtoMsg): _124.MerkleProof;
                    toProto(message: _124.MerkleProof): Uint8Array;
                    toProtoMsg(message: _124.MerkleProof): _124.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _281.MsgClientImpl;
                QueryClientImpl: typeof _277.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _127.QueryConnectionRequest): Promise<_127.QueryConnectionResponse>;
                    connections(request?: _127.QueryConnectionsRequest): Promise<_127.QueryConnectionsResponse>;
                    clientConnections(request: _127.QueryClientConnectionsRequest): Promise<_127.QueryClientConnectionsResponse>;
                    connectionClientState(request: _127.QueryConnectionClientStateRequest): Promise<_127.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _127.QueryConnectionConsensusStateRequest): Promise<_127.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _271.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _128.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _128.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _128.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _128.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _128.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _128.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _128.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _128.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _128.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _128.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _128.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _128.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _128.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _128.MsgConnectionOpenInit) => _128.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _128.MsgConnectionOpenInitAmino) => _128.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _128.MsgConnectionOpenTry) => _128.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _128.MsgConnectionOpenTryAmino) => _128.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _128.MsgConnectionOpenAck) => _128.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _128.MsgConnectionOpenAckAmino) => _128.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _128.MsgConnectionOpenConfirm) => _128.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _128.MsgConnectionOpenConfirmAmino) => _128.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _128.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_128.MsgConnectionOpenInit>): _128.MsgConnectionOpenInit;
                    fromAmino(object: _128.MsgConnectionOpenInitAmino): _128.MsgConnectionOpenInit;
                    toAmino(message: _128.MsgConnectionOpenInit): _128.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenInitAminoMsg): _128.MsgConnectionOpenInit;
                    toAminoMsg(message: _128.MsgConnectionOpenInit): _128.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenInitProtoMsg): _128.MsgConnectionOpenInit;
                    toProto(message: _128.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenInit): _128.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _128.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_128.MsgConnectionOpenInitResponse>): _128.MsgConnectionOpenInitResponse;
                    fromAmino(_: _128.MsgConnectionOpenInitResponseAmino): _128.MsgConnectionOpenInitResponse;
                    toAmino(_: _128.MsgConnectionOpenInitResponse): _128.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenInitResponseAminoMsg): _128.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _128.MsgConnectionOpenInitResponse): _128.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenInitResponseProtoMsg): _128.MsgConnectionOpenInitResponse;
                    toProto(message: _128.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenInitResponse): _128.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _128.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_128.MsgConnectionOpenTry>): _128.MsgConnectionOpenTry;
                    fromAmino(object: _128.MsgConnectionOpenTryAmino): _128.MsgConnectionOpenTry;
                    toAmino(message: _128.MsgConnectionOpenTry): _128.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenTryAminoMsg): _128.MsgConnectionOpenTry;
                    toAminoMsg(message: _128.MsgConnectionOpenTry): _128.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenTryProtoMsg): _128.MsgConnectionOpenTry;
                    toProto(message: _128.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenTry): _128.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _128.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_128.MsgConnectionOpenTryResponse>): _128.MsgConnectionOpenTryResponse;
                    fromAmino(_: _128.MsgConnectionOpenTryResponseAmino): _128.MsgConnectionOpenTryResponse;
                    toAmino(_: _128.MsgConnectionOpenTryResponse): _128.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenTryResponseAminoMsg): _128.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _128.MsgConnectionOpenTryResponse): _128.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenTryResponseProtoMsg): _128.MsgConnectionOpenTryResponse;
                    toProto(message: _128.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenTryResponse): _128.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _128.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_128.MsgConnectionOpenAck>): _128.MsgConnectionOpenAck;
                    fromAmino(object: _128.MsgConnectionOpenAckAmino): _128.MsgConnectionOpenAck;
                    toAmino(message: _128.MsgConnectionOpenAck): _128.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenAckAminoMsg): _128.MsgConnectionOpenAck;
                    toAminoMsg(message: _128.MsgConnectionOpenAck): _128.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenAckProtoMsg): _128.MsgConnectionOpenAck;
                    toProto(message: _128.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenAck): _128.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _128.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_128.MsgConnectionOpenAckResponse>): _128.MsgConnectionOpenAckResponse;
                    fromAmino(_: _128.MsgConnectionOpenAckResponseAmino): _128.MsgConnectionOpenAckResponse;
                    toAmino(_: _128.MsgConnectionOpenAckResponse): _128.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenAckResponseAminoMsg): _128.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _128.MsgConnectionOpenAckResponse): _128.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenAckResponseProtoMsg): _128.MsgConnectionOpenAckResponse;
                    toProto(message: _128.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenAckResponse): _128.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _128.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _128.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_128.MsgConnectionOpenConfirm>): _128.MsgConnectionOpenConfirm;
                    fromAmino(object: _128.MsgConnectionOpenConfirmAmino): _128.MsgConnectionOpenConfirm;
                    toAmino(message: _128.MsgConnectionOpenConfirm): _128.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenConfirmAminoMsg): _128.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _128.MsgConnectionOpenConfirm): _128.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenConfirmProtoMsg): _128.MsgConnectionOpenConfirm;
                    toProto(message: _128.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenConfirm): _128.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _128.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _128.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_128.MsgConnectionOpenConfirmResponse>): _128.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _128.MsgConnectionOpenConfirmResponseAmino): _128.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _128.MsgConnectionOpenConfirmResponse): _128.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _128.MsgConnectionOpenConfirmResponseAminoMsg): _128.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _128.MsgConnectionOpenConfirmResponse): _128.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _128.MsgConnectionOpenConfirmResponseProtoMsg): _128.MsgConnectionOpenConfirmResponse;
                    toProto(message: _128.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _128.MsgConnectionOpenConfirmResponse): _128.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionRequest;
                    fromPartial(object: Partial<_127.QueryConnectionRequest>): _127.QueryConnectionRequest;
                    fromAmino(object: _127.QueryConnectionRequestAmino): _127.QueryConnectionRequest;
                    toAmino(message: _127.QueryConnectionRequest): _127.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _127.QueryConnectionRequestAminoMsg): _127.QueryConnectionRequest;
                    toAminoMsg(message: _127.QueryConnectionRequest): _127.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionRequestProtoMsg): _127.QueryConnectionRequest;
                    toProto(message: _127.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionRequest): _127.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionResponse;
                    fromPartial(object: Partial<_127.QueryConnectionResponse>): _127.QueryConnectionResponse;
                    fromAmino(object: _127.QueryConnectionResponseAmino): _127.QueryConnectionResponse;
                    toAmino(message: _127.QueryConnectionResponse): _127.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _127.QueryConnectionResponseAminoMsg): _127.QueryConnectionResponse;
                    toAminoMsg(message: _127.QueryConnectionResponse): _127.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionResponseProtoMsg): _127.QueryConnectionResponse;
                    toProto(message: _127.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionResponse): _127.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionsRequest;
                    fromPartial(object: Partial<_127.QueryConnectionsRequest>): _127.QueryConnectionsRequest;
                    fromAmino(object: _127.QueryConnectionsRequestAmino): _127.QueryConnectionsRequest;
                    toAmino(message: _127.QueryConnectionsRequest): _127.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _127.QueryConnectionsRequestAminoMsg): _127.QueryConnectionsRequest;
                    toAminoMsg(message: _127.QueryConnectionsRequest): _127.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionsRequestProtoMsg): _127.QueryConnectionsRequest;
                    toProto(message: _127.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionsRequest): _127.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionsResponse;
                    fromPartial(object: Partial<_127.QueryConnectionsResponse>): _127.QueryConnectionsResponse;
                    fromAmino(object: _127.QueryConnectionsResponseAmino): _127.QueryConnectionsResponse;
                    toAmino(message: _127.QueryConnectionsResponse): _127.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _127.QueryConnectionsResponseAminoMsg): _127.QueryConnectionsResponse;
                    toAminoMsg(message: _127.QueryConnectionsResponse): _127.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionsResponseProtoMsg): _127.QueryConnectionsResponse;
                    toProto(message: _127.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionsResponse): _127.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _127.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_127.QueryClientConnectionsRequest>): _127.QueryClientConnectionsRequest;
                    fromAmino(object: _127.QueryClientConnectionsRequestAmino): _127.QueryClientConnectionsRequest;
                    toAmino(message: _127.QueryClientConnectionsRequest): _127.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _127.QueryClientConnectionsRequestAminoMsg): _127.QueryClientConnectionsRequest;
                    toAminoMsg(message: _127.QueryClientConnectionsRequest): _127.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _127.QueryClientConnectionsRequestProtoMsg): _127.QueryClientConnectionsRequest;
                    toProto(message: _127.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _127.QueryClientConnectionsRequest): _127.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _127.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_127.QueryClientConnectionsResponse>): _127.QueryClientConnectionsResponse;
                    fromAmino(object: _127.QueryClientConnectionsResponseAmino): _127.QueryClientConnectionsResponse;
                    toAmino(message: _127.QueryClientConnectionsResponse): _127.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _127.QueryClientConnectionsResponseAminoMsg): _127.QueryClientConnectionsResponse;
                    toAminoMsg(message: _127.QueryClientConnectionsResponse): _127.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _127.QueryClientConnectionsResponseProtoMsg): _127.QueryClientConnectionsResponse;
                    toProto(message: _127.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _127.QueryClientConnectionsResponse): _127.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_127.QueryConnectionClientStateRequest>): _127.QueryConnectionClientStateRequest;
                    fromAmino(object: _127.QueryConnectionClientStateRequestAmino): _127.QueryConnectionClientStateRequest;
                    toAmino(message: _127.QueryConnectionClientStateRequest): _127.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _127.QueryConnectionClientStateRequestAminoMsg): _127.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _127.QueryConnectionClientStateRequest): _127.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionClientStateRequestProtoMsg): _127.QueryConnectionClientStateRequest;
                    toProto(message: _127.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionClientStateRequest): _127.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_127.QueryConnectionClientStateResponse>): _127.QueryConnectionClientStateResponse;
                    fromAmino(object: _127.QueryConnectionClientStateResponseAmino): _127.QueryConnectionClientStateResponse;
                    toAmino(message: _127.QueryConnectionClientStateResponse): _127.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _127.QueryConnectionClientStateResponseAminoMsg): _127.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _127.QueryConnectionClientStateResponse): _127.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionClientStateResponseProtoMsg): _127.QueryConnectionClientStateResponse;
                    toProto(message: _127.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionClientStateResponse): _127.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_127.QueryConnectionConsensusStateRequest>): _127.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _127.QueryConnectionConsensusStateRequestAmino): _127.QueryConnectionConsensusStateRequest;
                    toAmino(message: _127.QueryConnectionConsensusStateRequest): _127.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _127.QueryConnectionConsensusStateRequestAminoMsg): _127.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _127.QueryConnectionConsensusStateRequest): _127.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionConsensusStateRequestProtoMsg): _127.QueryConnectionConsensusStateRequest;
                    toProto(message: _127.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionConsensusStateRequest): _127.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _127.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _127.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_127.QueryConnectionConsensusStateResponse>): _127.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _127.QueryConnectionConsensusStateResponseAmino): _127.QueryConnectionConsensusStateResponse;
                    toAmino(message: _127.QueryConnectionConsensusStateResponse): _127.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _127.QueryConnectionConsensusStateResponseAminoMsg): _127.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _127.QueryConnectionConsensusStateResponse): _127.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _127.QueryConnectionConsensusStateResponseProtoMsg): _127.QueryConnectionConsensusStateResponse;
                    toProto(message: _127.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _127.QueryConnectionConsensusStateResponse): _127.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _126.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _126.GenesisState;
                    fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
                    fromAmino(object: _126.GenesisStateAmino): _126.GenesisState;
                    toAmino(message: _126.GenesisState): _126.GenesisStateAmino;
                    fromAminoMsg(object: _126.GenesisStateAminoMsg): _126.GenesisState;
                    toAminoMsg(message: _126.GenesisState): _126.GenesisStateAminoMsg;
                    fromProtoMsg(message: _126.GenesisStateProtoMsg): _126.GenesisState;
                    toProto(message: _126.GenesisState): Uint8Array;
                    toProtoMsg(message: _126.GenesisState): _126.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _125.State;
                stateToJSON(object: _125.State): string;
                State: typeof _125.State;
                StateSDKType: typeof _125.State;
                StateAmino: typeof _125.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _125.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ConnectionEnd;
                    fromPartial(object: Partial<_125.ConnectionEnd>): _125.ConnectionEnd;
                    fromAmino(object: _125.ConnectionEndAmino): _125.ConnectionEnd;
                    toAmino(message: _125.ConnectionEnd): _125.ConnectionEndAmino;
                    fromAminoMsg(object: _125.ConnectionEndAminoMsg): _125.ConnectionEnd;
                    toAminoMsg(message: _125.ConnectionEnd): _125.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _125.ConnectionEndProtoMsg): _125.ConnectionEnd;
                    toProto(message: _125.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _125.ConnectionEnd): _125.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _125.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.IdentifiedConnection;
                    fromPartial(object: Partial<_125.IdentifiedConnection>): _125.IdentifiedConnection;
                    fromAmino(object: _125.IdentifiedConnectionAmino): _125.IdentifiedConnection;
                    toAmino(message: _125.IdentifiedConnection): _125.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _125.IdentifiedConnectionAminoMsg): _125.IdentifiedConnection;
                    toAminoMsg(message: _125.IdentifiedConnection): _125.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _125.IdentifiedConnectionProtoMsg): _125.IdentifiedConnection;
                    toProto(message: _125.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _125.IdentifiedConnection): _125.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _125.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.Counterparty;
                    fromPartial(object: Partial<_125.Counterparty>): _125.Counterparty;
                    fromAmino(object: _125.CounterpartyAmino): _125.Counterparty;
                    toAmino(message: _125.Counterparty): _125.CounterpartyAmino;
                    fromAminoMsg(object: _125.CounterpartyAminoMsg): _125.Counterparty;
                    toAminoMsg(message: _125.Counterparty): _125.CounterpartyAminoMsg;
                    fromProtoMsg(message: _125.CounterpartyProtoMsg): _125.Counterparty;
                    toProto(message: _125.Counterparty): Uint8Array;
                    toProtoMsg(message: _125.Counterparty): _125.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _125.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ClientPaths;
                    fromPartial(object: Partial<_125.ClientPaths>): _125.ClientPaths;
                    fromAmino(object: _125.ClientPathsAmino): _125.ClientPaths;
                    toAmino(message: _125.ClientPaths): _125.ClientPathsAmino;
                    fromAminoMsg(object: _125.ClientPathsAminoMsg): _125.ClientPaths;
                    toAminoMsg(message: _125.ClientPaths): _125.ClientPathsAminoMsg;
                    fromProtoMsg(message: _125.ClientPathsProtoMsg): _125.ClientPaths;
                    toProto(message: _125.ClientPaths): Uint8Array;
                    toProtoMsg(message: _125.ClientPaths): _125.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _125.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.ConnectionPaths;
                    fromPartial(object: Partial<_125.ConnectionPaths>): _125.ConnectionPaths;
                    fromAmino(object: _125.ConnectionPathsAmino): _125.ConnectionPaths;
                    toAmino(message: _125.ConnectionPaths): _125.ConnectionPathsAmino;
                    fromAminoMsg(object: _125.ConnectionPathsAminoMsg): _125.ConnectionPaths;
                    toAminoMsg(message: _125.ConnectionPaths): _125.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _125.ConnectionPathsProtoMsg): _125.ConnectionPaths;
                    toProto(message: _125.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _125.ConnectionPaths): _125.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _125.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.Version;
                    fromPartial(object: Partial<_125.Version>): _125.Version;
                    fromAmino(object: _125.VersionAmino): _125.Version;
                    toAmino(message: _125.Version): _125.VersionAmino;
                    fromAminoMsg(object: _125.VersionAminoMsg): _125.Version;
                    toAminoMsg(message: _125.Version): _125.VersionAminoMsg;
                    fromProtoMsg(message: _125.VersionProtoMsg): _125.Version;
                    toProto(message: _125.Version): Uint8Array;
                    toProtoMsg(message: _125.Version): _125.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _125.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _125.Params;
                    fromPartial(object: Partial<_125.Params>): _125.Params;
                    fromAmino(object: _125.ParamsAmino): _125.Params;
                    toAmino(message: _125.Params): _125.ParamsAmino;
                    fromAminoMsg(object: _125.ParamsAminoMsg): _125.Params;
                    toAminoMsg(message: _125.Params): _125.ParamsAminoMsg;
                    fromProtoMsg(message: _125.ParamsProtoMsg): _125.Params;
                    toProto(message: _125.Params): Uint8Array;
                    toProtoMsg(message: _125.Params): _125.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _129.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _129.GenesisState;
                    fromPartial(object: Partial<_129.GenesisState>): _129.GenesisState;
                    fromAmino(object: _129.GenesisStateAmino): _129.GenesisState;
                    toAmino(message: _129.GenesisState): _129.GenesisStateAmino;
                    fromAminoMsg(object: _129.GenesisStateAminoMsg): _129.GenesisState;
                    toAminoMsg(message: _129.GenesisState): _129.GenesisStateAminoMsg;
                    fromProtoMsg(message: _129.GenesisStateProtoMsg): _129.GenesisState;
                    toProto(message: _129.GenesisState): Uint8Array;
                    toProtoMsg(message: _129.GenesisState): _129.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _130.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _130.ClientState;
                    fromPartial(object: Partial<_130.ClientState>): _130.ClientState;
                    fromAmino(object: _130.ClientStateAmino): _130.ClientState;
                    toAmino(message: _130.ClientState): _130.ClientStateAmino;
                    fromAminoMsg(object: _130.ClientStateAminoMsg): _130.ClientState;
                    toAminoMsg(message: _130.ClientState): _130.ClientStateAminoMsg;
                    fromProtoMsg(message: _130.ClientStateProtoMsg): _130.ClientState;
                    toProto(message: _130.ClientState): Uint8Array;
                    toProtoMsg(message: _130.ClientState): _130.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _131.DataType;
                dataTypeToJSON(object: _131.DataType): string;
                DataType: typeof _131.DataType;
                DataTypeSDKType: typeof _131.DataType;
                DataTypeAmino: typeof _131.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _131.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ClientState;
                    fromPartial(object: Partial<_131.ClientState>): _131.ClientState;
                    fromAmino(object: _131.ClientStateAmino): _131.ClientState;
                    toAmino(message: _131.ClientState): _131.ClientStateAmino;
                    fromAminoMsg(object: _131.ClientStateAminoMsg): _131.ClientState;
                    toAminoMsg(message: _131.ClientState): _131.ClientStateAminoMsg;
                    fromProtoMsg(message: _131.ClientStateProtoMsg): _131.ClientState;
                    toProto(message: _131.ClientState): Uint8Array;
                    toProtoMsg(message: _131.ClientState): _131.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _131.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ConsensusState;
                    fromPartial(object: Partial<_131.ConsensusState>): _131.ConsensusState;
                    fromAmino(object: _131.ConsensusStateAmino): _131.ConsensusState;
                    toAmino(message: _131.ConsensusState): _131.ConsensusStateAmino;
                    fromAminoMsg(object: _131.ConsensusStateAminoMsg): _131.ConsensusState;
                    toAminoMsg(message: _131.ConsensusState): _131.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _131.ConsensusStateProtoMsg): _131.ConsensusState;
                    toProto(message: _131.ConsensusState): Uint8Array;
                    toProtoMsg(message: _131.ConsensusState): _131.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _131.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.Header;
                    fromPartial(object: Partial<_131.Header>): _131.Header;
                    fromAmino(object: _131.HeaderAmino): _131.Header;
                    toAmino(message: _131.Header): _131.HeaderAmino;
                    fromAminoMsg(object: _131.HeaderAminoMsg): _131.Header;
                    toAminoMsg(message: _131.Header): _131.HeaderAminoMsg;
                    fromProtoMsg(message: _131.HeaderProtoMsg): _131.Header;
                    toProto(message: _131.Header): Uint8Array;
                    toProtoMsg(message: _131.Header): _131.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _131.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.Misbehaviour;
                    fromPartial(object: Partial<_131.Misbehaviour>): _131.Misbehaviour;
                    fromAmino(object: _131.MisbehaviourAmino): _131.Misbehaviour;
                    toAmino(message: _131.Misbehaviour): _131.MisbehaviourAmino;
                    fromAminoMsg(object: _131.MisbehaviourAminoMsg): _131.Misbehaviour;
                    toAminoMsg(message: _131.Misbehaviour): _131.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _131.MisbehaviourProtoMsg): _131.Misbehaviour;
                    toProto(message: _131.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _131.Misbehaviour): _131.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _131.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.SignatureAndData;
                    fromPartial(object: Partial<_131.SignatureAndData>): _131.SignatureAndData;
                    fromAmino(object: _131.SignatureAndDataAmino): _131.SignatureAndData;
                    toAmino(message: _131.SignatureAndData): _131.SignatureAndDataAmino;
                    fromAminoMsg(object: _131.SignatureAndDataAminoMsg): _131.SignatureAndData;
                    toAminoMsg(message: _131.SignatureAndData): _131.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _131.SignatureAndDataProtoMsg): _131.SignatureAndData;
                    toProto(message: _131.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _131.SignatureAndData): _131.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _131.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.TimestampedSignatureData;
                    fromPartial(object: Partial<_131.TimestampedSignatureData>): _131.TimestampedSignatureData;
                    fromAmino(object: _131.TimestampedSignatureDataAmino): _131.TimestampedSignatureData;
                    toAmino(message: _131.TimestampedSignatureData): _131.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _131.TimestampedSignatureDataAminoMsg): _131.TimestampedSignatureData;
                    toAminoMsg(message: _131.TimestampedSignatureData): _131.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _131.TimestampedSignatureDataProtoMsg): _131.TimestampedSignatureData;
                    toProto(message: _131.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _131.TimestampedSignatureData): _131.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _131.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.SignBytes;
                    fromPartial(object: Partial<_131.SignBytes>): _131.SignBytes;
                    fromAmino(object: _131.SignBytesAmino): _131.SignBytes;
                    toAmino(message: _131.SignBytes): _131.SignBytesAmino;
                    fromAminoMsg(object: _131.SignBytesAminoMsg): _131.SignBytes;
                    toAminoMsg(message: _131.SignBytes): _131.SignBytesAminoMsg;
                    fromProtoMsg(message: _131.SignBytesProtoMsg): _131.SignBytes;
                    toProto(message: _131.SignBytes): Uint8Array;
                    toProtoMsg(message: _131.SignBytes): _131.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _131.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.HeaderData;
                    fromPartial(object: Partial<_131.HeaderData>): _131.HeaderData;
                    fromAmino(object: _131.HeaderDataAmino): _131.HeaderData;
                    toAmino(message: _131.HeaderData): _131.HeaderDataAmino;
                    fromAminoMsg(object: _131.HeaderDataAminoMsg): _131.HeaderData;
                    toAminoMsg(message: _131.HeaderData): _131.HeaderDataAminoMsg;
                    fromProtoMsg(message: _131.HeaderDataProtoMsg): _131.HeaderData;
                    toProto(message: _131.HeaderData): Uint8Array;
                    toProtoMsg(message: _131.HeaderData): _131.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _131.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ClientStateData;
                    fromPartial(object: Partial<_131.ClientStateData>): _131.ClientStateData;
                    fromAmino(object: _131.ClientStateDataAmino): _131.ClientStateData;
                    toAmino(message: _131.ClientStateData): _131.ClientStateDataAmino;
                    fromAminoMsg(object: _131.ClientStateDataAminoMsg): _131.ClientStateData;
                    toAminoMsg(message: _131.ClientStateData): _131.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _131.ClientStateDataProtoMsg): _131.ClientStateData;
                    toProto(message: _131.ClientStateData): Uint8Array;
                    toProtoMsg(message: _131.ClientStateData): _131.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _131.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ConsensusStateData;
                    fromPartial(object: Partial<_131.ConsensusStateData>): _131.ConsensusStateData;
                    fromAmino(object: _131.ConsensusStateDataAmino): _131.ConsensusStateData;
                    toAmino(message: _131.ConsensusStateData): _131.ConsensusStateDataAmino;
                    fromAminoMsg(object: _131.ConsensusStateDataAminoMsg): _131.ConsensusStateData;
                    toAminoMsg(message: _131.ConsensusStateData): _131.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _131.ConsensusStateDataProtoMsg): _131.ConsensusStateData;
                    toProto(message: _131.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _131.ConsensusStateData): _131.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _131.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ConnectionStateData;
                    fromPartial(object: Partial<_131.ConnectionStateData>): _131.ConnectionStateData;
                    fromAmino(object: _131.ConnectionStateDataAmino): _131.ConnectionStateData;
                    toAmino(message: _131.ConnectionStateData): _131.ConnectionStateDataAmino;
                    fromAminoMsg(object: _131.ConnectionStateDataAminoMsg): _131.ConnectionStateData;
                    toAminoMsg(message: _131.ConnectionStateData): _131.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _131.ConnectionStateDataProtoMsg): _131.ConnectionStateData;
                    toProto(message: _131.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _131.ConnectionStateData): _131.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _131.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.ChannelStateData;
                    fromPartial(object: Partial<_131.ChannelStateData>): _131.ChannelStateData;
                    fromAmino(object: _131.ChannelStateDataAmino): _131.ChannelStateData;
                    toAmino(message: _131.ChannelStateData): _131.ChannelStateDataAmino;
                    fromAminoMsg(object: _131.ChannelStateDataAminoMsg): _131.ChannelStateData;
                    toAminoMsg(message: _131.ChannelStateData): _131.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _131.ChannelStateDataProtoMsg): _131.ChannelStateData;
                    toProto(message: _131.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _131.ChannelStateData): _131.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _131.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.PacketCommitmentData;
                    fromPartial(object: Partial<_131.PacketCommitmentData>): _131.PacketCommitmentData;
                    fromAmino(object: _131.PacketCommitmentDataAmino): _131.PacketCommitmentData;
                    toAmino(message: _131.PacketCommitmentData): _131.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _131.PacketCommitmentDataAminoMsg): _131.PacketCommitmentData;
                    toAminoMsg(message: _131.PacketCommitmentData): _131.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _131.PacketCommitmentDataProtoMsg): _131.PacketCommitmentData;
                    toProto(message: _131.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _131.PacketCommitmentData): _131.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _131.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.PacketAcknowledgementData;
                    fromPartial(object: Partial<_131.PacketAcknowledgementData>): _131.PacketAcknowledgementData;
                    fromAmino(object: _131.PacketAcknowledgementDataAmino): _131.PacketAcknowledgementData;
                    toAmino(message: _131.PacketAcknowledgementData): _131.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _131.PacketAcknowledgementDataAminoMsg): _131.PacketAcknowledgementData;
                    toAminoMsg(message: _131.PacketAcknowledgementData): _131.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _131.PacketAcknowledgementDataProtoMsg): _131.PacketAcknowledgementData;
                    toProto(message: _131.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _131.PacketAcknowledgementData): _131.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _131.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_131.PacketReceiptAbsenceData>): _131.PacketReceiptAbsenceData;
                    fromAmino(object: _131.PacketReceiptAbsenceDataAmino): _131.PacketReceiptAbsenceData;
                    toAmino(message: _131.PacketReceiptAbsenceData): _131.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _131.PacketReceiptAbsenceDataAminoMsg): _131.PacketReceiptAbsenceData;
                    toAminoMsg(message: _131.PacketReceiptAbsenceData): _131.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _131.PacketReceiptAbsenceDataProtoMsg): _131.PacketReceiptAbsenceData;
                    toProto(message: _131.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _131.PacketReceiptAbsenceData): _131.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _131.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _131.NextSequenceRecvData;
                    fromPartial(object: Partial<_131.NextSequenceRecvData>): _131.NextSequenceRecvData;
                    fromAmino(object: _131.NextSequenceRecvDataAmino): _131.NextSequenceRecvData;
                    toAmino(message: _131.NextSequenceRecvData): _131.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _131.NextSequenceRecvDataAminoMsg): _131.NextSequenceRecvData;
                    toAminoMsg(message: _131.NextSequenceRecvData): _131.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _131.NextSequenceRecvDataProtoMsg): _131.NextSequenceRecvData;
                    toProto(message: _131.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _131.NextSequenceRecvData): _131.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _132.DataType;
                dataTypeToJSON(object: _132.DataType): string;
                DataType: typeof _132.DataType;
                DataTypeSDKType: typeof _132.DataType;
                DataTypeAmino: typeof _132.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _132.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ClientState;
                    fromPartial(object: Partial<_132.ClientState>): _132.ClientState;
                    fromAmino(object: _132.ClientStateAmino): _132.ClientState;
                    toAmino(message: _132.ClientState): _132.ClientStateAmino;
                    fromAminoMsg(object: _132.ClientStateAminoMsg): _132.ClientState;
                    toAminoMsg(message: _132.ClientState): _132.ClientStateAminoMsg;
                    fromProtoMsg(message: _132.ClientStateProtoMsg): _132.ClientState;
                    toProto(message: _132.ClientState): Uint8Array;
                    toProtoMsg(message: _132.ClientState): _132.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _132.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ConsensusState;
                    fromPartial(object: Partial<_132.ConsensusState>): _132.ConsensusState;
                    fromAmino(object: _132.ConsensusStateAmino): _132.ConsensusState;
                    toAmino(message: _132.ConsensusState): _132.ConsensusStateAmino;
                    fromAminoMsg(object: _132.ConsensusStateAminoMsg): _132.ConsensusState;
                    toAminoMsg(message: _132.ConsensusState): _132.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _132.ConsensusStateProtoMsg): _132.ConsensusState;
                    toProto(message: _132.ConsensusState): Uint8Array;
                    toProtoMsg(message: _132.ConsensusState): _132.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _132.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Header;
                    fromPartial(object: Partial<_132.Header>): _132.Header;
                    fromAmino(object: _132.HeaderAmino): _132.Header;
                    toAmino(message: _132.Header): _132.HeaderAmino;
                    fromAminoMsg(object: _132.HeaderAminoMsg): _132.Header;
                    toAminoMsg(message: _132.Header): _132.HeaderAminoMsg;
                    fromProtoMsg(message: _132.HeaderProtoMsg): _132.Header;
                    toProto(message: _132.Header): Uint8Array;
                    toProtoMsg(message: _132.Header): _132.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _132.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.Misbehaviour;
                    fromPartial(object: Partial<_132.Misbehaviour>): _132.Misbehaviour;
                    fromAmino(object: _132.MisbehaviourAmino): _132.Misbehaviour;
                    toAmino(message: _132.Misbehaviour): _132.MisbehaviourAmino;
                    fromAminoMsg(object: _132.MisbehaviourAminoMsg): _132.Misbehaviour;
                    toAminoMsg(message: _132.Misbehaviour): _132.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _132.MisbehaviourProtoMsg): _132.Misbehaviour;
                    toProto(message: _132.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _132.Misbehaviour): _132.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _132.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.SignatureAndData;
                    fromPartial(object: Partial<_132.SignatureAndData>): _132.SignatureAndData;
                    fromAmino(object: _132.SignatureAndDataAmino): _132.SignatureAndData;
                    toAmino(message: _132.SignatureAndData): _132.SignatureAndDataAmino;
                    fromAminoMsg(object: _132.SignatureAndDataAminoMsg): _132.SignatureAndData;
                    toAminoMsg(message: _132.SignatureAndData): _132.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _132.SignatureAndDataProtoMsg): _132.SignatureAndData;
                    toProto(message: _132.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _132.SignatureAndData): _132.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _132.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.TimestampedSignatureData;
                    fromPartial(object: Partial<_132.TimestampedSignatureData>): _132.TimestampedSignatureData;
                    fromAmino(object: _132.TimestampedSignatureDataAmino): _132.TimestampedSignatureData;
                    toAmino(message: _132.TimestampedSignatureData): _132.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _132.TimestampedSignatureDataAminoMsg): _132.TimestampedSignatureData;
                    toAminoMsg(message: _132.TimestampedSignatureData): _132.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _132.TimestampedSignatureDataProtoMsg): _132.TimestampedSignatureData;
                    toProto(message: _132.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _132.TimestampedSignatureData): _132.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _132.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.SignBytes;
                    fromPartial(object: Partial<_132.SignBytes>): _132.SignBytes;
                    fromAmino(object: _132.SignBytesAmino): _132.SignBytes;
                    toAmino(message: _132.SignBytes): _132.SignBytesAmino;
                    fromAminoMsg(object: _132.SignBytesAminoMsg): _132.SignBytes;
                    toAminoMsg(message: _132.SignBytes): _132.SignBytesAminoMsg;
                    fromProtoMsg(message: _132.SignBytesProtoMsg): _132.SignBytes;
                    toProto(message: _132.SignBytes): Uint8Array;
                    toProtoMsg(message: _132.SignBytes): _132.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _132.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.HeaderData;
                    fromPartial(object: Partial<_132.HeaderData>): _132.HeaderData;
                    fromAmino(object: _132.HeaderDataAmino): _132.HeaderData;
                    toAmino(message: _132.HeaderData): _132.HeaderDataAmino;
                    fromAminoMsg(object: _132.HeaderDataAminoMsg): _132.HeaderData;
                    toAminoMsg(message: _132.HeaderData): _132.HeaderDataAminoMsg;
                    fromProtoMsg(message: _132.HeaderDataProtoMsg): _132.HeaderData;
                    toProto(message: _132.HeaderData): Uint8Array;
                    toProtoMsg(message: _132.HeaderData): _132.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _132.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ClientStateData;
                    fromPartial(object: Partial<_132.ClientStateData>): _132.ClientStateData;
                    fromAmino(object: _132.ClientStateDataAmino): _132.ClientStateData;
                    toAmino(message: _132.ClientStateData): _132.ClientStateDataAmino;
                    fromAminoMsg(object: _132.ClientStateDataAminoMsg): _132.ClientStateData;
                    toAminoMsg(message: _132.ClientStateData): _132.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _132.ClientStateDataProtoMsg): _132.ClientStateData;
                    toProto(message: _132.ClientStateData): Uint8Array;
                    toProtoMsg(message: _132.ClientStateData): _132.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _132.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ConsensusStateData;
                    fromPartial(object: Partial<_132.ConsensusStateData>): _132.ConsensusStateData;
                    fromAmino(object: _132.ConsensusStateDataAmino): _132.ConsensusStateData;
                    toAmino(message: _132.ConsensusStateData): _132.ConsensusStateDataAmino;
                    fromAminoMsg(object: _132.ConsensusStateDataAminoMsg): _132.ConsensusStateData;
                    toAminoMsg(message: _132.ConsensusStateData): _132.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _132.ConsensusStateDataProtoMsg): _132.ConsensusStateData;
                    toProto(message: _132.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _132.ConsensusStateData): _132.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _132.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ConnectionStateData;
                    fromPartial(object: Partial<_132.ConnectionStateData>): _132.ConnectionStateData;
                    fromAmino(object: _132.ConnectionStateDataAmino): _132.ConnectionStateData;
                    toAmino(message: _132.ConnectionStateData): _132.ConnectionStateDataAmino;
                    fromAminoMsg(object: _132.ConnectionStateDataAminoMsg): _132.ConnectionStateData;
                    toAminoMsg(message: _132.ConnectionStateData): _132.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _132.ConnectionStateDataProtoMsg): _132.ConnectionStateData;
                    toProto(message: _132.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _132.ConnectionStateData): _132.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _132.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.ChannelStateData;
                    fromPartial(object: Partial<_132.ChannelStateData>): _132.ChannelStateData;
                    fromAmino(object: _132.ChannelStateDataAmino): _132.ChannelStateData;
                    toAmino(message: _132.ChannelStateData): _132.ChannelStateDataAmino;
                    fromAminoMsg(object: _132.ChannelStateDataAminoMsg): _132.ChannelStateData;
                    toAminoMsg(message: _132.ChannelStateData): _132.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _132.ChannelStateDataProtoMsg): _132.ChannelStateData;
                    toProto(message: _132.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _132.ChannelStateData): _132.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _132.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.PacketCommitmentData;
                    fromPartial(object: Partial<_132.PacketCommitmentData>): _132.PacketCommitmentData;
                    fromAmino(object: _132.PacketCommitmentDataAmino): _132.PacketCommitmentData;
                    toAmino(message: _132.PacketCommitmentData): _132.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _132.PacketCommitmentDataAminoMsg): _132.PacketCommitmentData;
                    toAminoMsg(message: _132.PacketCommitmentData): _132.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _132.PacketCommitmentDataProtoMsg): _132.PacketCommitmentData;
                    toProto(message: _132.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _132.PacketCommitmentData): _132.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _132.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.PacketAcknowledgementData;
                    fromPartial(object: Partial<_132.PacketAcknowledgementData>): _132.PacketAcknowledgementData;
                    fromAmino(object: _132.PacketAcknowledgementDataAmino): _132.PacketAcknowledgementData;
                    toAmino(message: _132.PacketAcknowledgementData): _132.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _132.PacketAcknowledgementDataAminoMsg): _132.PacketAcknowledgementData;
                    toAminoMsg(message: _132.PacketAcknowledgementData): _132.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _132.PacketAcknowledgementDataProtoMsg): _132.PacketAcknowledgementData;
                    toProto(message: _132.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _132.PacketAcknowledgementData): _132.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _132.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_132.PacketReceiptAbsenceData>): _132.PacketReceiptAbsenceData;
                    fromAmino(object: _132.PacketReceiptAbsenceDataAmino): _132.PacketReceiptAbsenceData;
                    toAmino(message: _132.PacketReceiptAbsenceData): _132.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _132.PacketReceiptAbsenceDataAminoMsg): _132.PacketReceiptAbsenceData;
                    toAminoMsg(message: _132.PacketReceiptAbsenceData): _132.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _132.PacketReceiptAbsenceDataProtoMsg): _132.PacketReceiptAbsenceData;
                    toProto(message: _132.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _132.PacketReceiptAbsenceData): _132.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _132.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _132.NextSequenceRecvData;
                    fromPartial(object: Partial<_132.NextSequenceRecvData>): _132.NextSequenceRecvData;
                    fromAmino(object: _132.NextSequenceRecvDataAmino): _132.NextSequenceRecvData;
                    toAmino(message: _132.NextSequenceRecvData): _132.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _132.NextSequenceRecvDataAminoMsg): _132.NextSequenceRecvData;
                    toAminoMsg(message: _132.NextSequenceRecvData): _132.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _132.NextSequenceRecvDataProtoMsg): _132.NextSequenceRecvData;
                    toProto(message: _132.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _132.NextSequenceRecvData): _132.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _133.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _133.ClientState;
                    fromPartial(object: Partial<_133.ClientState>): _133.ClientState;
                    fromAmino(object: _133.ClientStateAmino): _133.ClientState;
                    toAmino(message: _133.ClientState): _133.ClientStateAmino;
                    fromAminoMsg(object: _133.ClientStateAminoMsg): _133.ClientState;
                    toAminoMsg(message: _133.ClientState): _133.ClientStateAminoMsg;
                    fromProtoMsg(message: _133.ClientStateProtoMsg): _133.ClientState;
                    toProto(message: _133.ClientState): Uint8Array;
                    toProtoMsg(message: _133.ClientState): _133.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _133.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _133.ConsensusState;
                    fromPartial(object: Partial<_133.ConsensusState>): _133.ConsensusState;
                    fromAmino(object: _133.ConsensusStateAmino): _133.ConsensusState;
                    toAmino(message: _133.ConsensusState): _133.ConsensusStateAmino;
                    fromAminoMsg(object: _133.ConsensusStateAminoMsg): _133.ConsensusState;
                    toAminoMsg(message: _133.ConsensusState): _133.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _133.ConsensusStateProtoMsg): _133.ConsensusState;
                    toProto(message: _133.ConsensusState): Uint8Array;
                    toProtoMsg(message: _133.ConsensusState): _133.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _133.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _133.Misbehaviour;
                    fromPartial(object: Partial<_133.Misbehaviour>): _133.Misbehaviour;
                    fromAmino(object: _133.MisbehaviourAmino): _133.Misbehaviour;
                    toAmino(message: _133.Misbehaviour): _133.MisbehaviourAmino;
                    fromAminoMsg(object: _133.MisbehaviourAminoMsg): _133.Misbehaviour;
                    toAminoMsg(message: _133.Misbehaviour): _133.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _133.MisbehaviourProtoMsg): _133.Misbehaviour;
                    toProto(message: _133.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _133.Misbehaviour): _133.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _133.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _133.Header;
                    fromPartial(object: Partial<_133.Header>): _133.Header;
                    fromAmino(object: _133.HeaderAmino): _133.Header;
                    toAmino(message: _133.Header): _133.HeaderAmino;
                    fromAminoMsg(object: _133.HeaderAminoMsg): _133.Header;
                    toAminoMsg(message: _133.Header): _133.HeaderAminoMsg;
                    fromProtoMsg(message: _133.HeaderProtoMsg): _133.Header;
                    toProto(message: _133.Header): Uint8Array;
                    toProtoMsg(message: _133.Header): _133.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _133.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _133.Fraction;
                    fromPartial(object: Partial<_133.Fraction>): _133.Fraction;
                    fromAmino(object: _133.FractionAmino): _133.Fraction;
                    toAmino(message: _133.Fraction): _133.FractionAmino;
                    fromAminoMsg(object: _133.FractionAminoMsg): _133.Fraction;
                    toAminoMsg(message: _133.Fraction): _133.FractionAminoMsg;
                    fromProtoMsg(message: _133.FractionProtoMsg): _133.Fraction;
                    toProto(message: _133.Fraction): Uint8Array;
                    toProtoMsg(message: _133.Fraction): _133.FractionProtoMsg;
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
                        v1: _278.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _279.MsgClientImpl;
                    };
                    client: {
                        v1: _280.MsgClientImpl;
                    };
                    connection: {
                        v1: _281.MsgClientImpl;
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
                                interchainAccount(request: _104.QueryInterchainAccountRequest): Promise<_104.QueryInterchainAccountResponse>;
                                params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _112.QueryDenomTraceRequest): Promise<_112.QueryDenomTraceResponse>;
                            denomTraces(request?: _112.QueryDenomTracesRequest): Promise<_112.QueryDenomTracesResponse>;
                            params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                            denomHash(request: _112.QueryDenomHashRequest): Promise<_112.QueryDenomHashResponse>;
                            escrowAddress(request: _112.QueryEscrowAddressRequest): Promise<_112.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _118.QueryChannelRequest): Promise<_118.QueryChannelResponse>;
                            channels(request?: _118.QueryChannelsRequest): Promise<_118.QueryChannelsResponse>;
                            connectionChannels(request: _118.QueryConnectionChannelsRequest): Promise<_118.QueryConnectionChannelsResponse>;
                            channelClientState(request: _118.QueryChannelClientStateRequest): Promise<_118.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _118.QueryChannelConsensusStateRequest): Promise<_118.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _118.QueryPacketCommitmentRequest): Promise<_118.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _118.QueryPacketCommitmentsRequest): Promise<_118.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _118.QueryPacketReceiptRequest): Promise<_118.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _118.QueryPacketAcknowledgementRequest): Promise<_118.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _118.QueryPacketAcknowledgementsRequest): Promise<_118.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _118.QueryUnreceivedPacketsRequest): Promise<_118.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _118.QueryUnreceivedAcksRequest): Promise<_118.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _118.QueryNextSequenceReceiveRequest): Promise<_118.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _122.QueryClientStateRequest): Promise<_122.QueryClientStateResponse>;
                            clientStates(request?: _122.QueryClientStatesRequest): Promise<_122.QueryClientStatesResponse>;
                            consensusState(request: _122.QueryConsensusStateRequest): Promise<_122.QueryConsensusStateResponse>;
                            consensusStates(request: _122.QueryConsensusStatesRequest): Promise<_122.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _122.QueryConsensusStateHeightsRequest): Promise<_122.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _122.QueryClientStatusRequest): Promise<_122.QueryClientStatusResponse>;
                            clientParams(request?: _122.QueryClientParamsRequest): Promise<_122.QueryClientParamsResponse>;
                            upgradedClientState(request?: _122.QueryUpgradedClientStateRequest): Promise<_122.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _122.QueryUpgradedConsensusStateRequest): Promise<_122.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _127.QueryConnectionRequest): Promise<_127.QueryConnectionResponse>;
                            connections(request?: _127.QueryConnectionsRequest): Promise<_127.QueryConnectionsResponse>;
                            clientConnections(request: _127.QueryClientConnectionsRequest): Promise<_127.QueryClientConnectionsResponse>;
                            connectionClientState(request: _127.QueryConnectionClientStateRequest): Promise<_127.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _127.QueryConnectionConsensusStateRequest): Promise<_127.QueryConnectionConsensusStateResponse>;
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
                            v1: _266.LCDQueryClient;
                        };
                        host: {
                            v1: _267.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _268.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _269.LCDQueryClient;
                    };
                    client: {
                        v1: _270.LCDQueryClient;
                    };
                    connection: {
                        v1: _271.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
