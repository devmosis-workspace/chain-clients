import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./core/channel/v1/channel";
import * as _107 from "./core/channel/v1/genesis";
import * as _108 from "./core/channel/v1/query";
import * as _109 from "./core/channel/v1/tx";
import * as _110 from "./core/client/v1/client";
import * as _111 from "./core/client/v1/genesis";
import * as _112 from "./core/client/v1/query";
import * as _113 from "./core/client/v1/tx";
import * as _114 from "./core/commitment/v1/commitment";
import * as _115 from "./core/connection/v1/connection";
import * as _116 from "./core/connection/v1/genesis";
import * as _117 from "./core/connection/v1/query";
import * as _118 from "./core/connection/v1/tx";
import * as _119 from "./core/types/v1/genesis";
import * as _120 from "./lightclients/localhost/v1/localhost";
import * as _121 from "./lightclients/solomachine/v1/solomachine";
import * as _122 from "./lightclients/tendermint/v1/tendermint";
import * as _217 from "./applications/transfer/v1/query.lcd";
import * as _218 from "./core/channel/v1/query.lcd";
import * as _219 from "./core/client/v1/query.lcd";
import * as _220 from "./core/connection/v1/query.lcd";
import * as _221 from "./applications/transfer/v1/query.rpc.Query";
import * as _222 from "./core/channel/v1/query.rpc.Query";
import * as _223 from "./core/client/v1/query.rpc.Query";
import * as _224 from "./core/connection/v1/query.rpc.Query";
import * as _225 from "./applications/transfer/v1/tx.rpc.msg";
import * as _226 from "./core/channel/v1/tx.rpc.msg";
import * as _227 from "./core/client/v1/tx.rpc.msg";
import * as _228 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _225.MsgClientImpl;
                QueryClientImpl: typeof _221.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponse>;
                    denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponse>;
                    params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _217.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _105.MsgTransfer) => _105.MsgTransferAmino;
                        fromAmino: (object: _105.MsgTransferAmino) => _105.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _105.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.MsgTransfer;
                    fromPartial(object: Partial<_105.MsgTransfer>): _105.MsgTransfer;
                    fromAmino(object: _105.MsgTransferAmino): _105.MsgTransfer;
                    toAmino(message: _105.MsgTransfer): _105.MsgTransferAmino;
                    fromAminoMsg(object: _105.MsgTransferAminoMsg): _105.MsgTransfer;
                    toAminoMsg(message: _105.MsgTransfer): _105.MsgTransferAminoMsg;
                    fromProtoMsg(message: _105.MsgTransferProtoMsg): _105.MsgTransfer;
                    toProto(message: _105.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _105.MsgTransfer): _105.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _105.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _105.MsgTransferResponse;
                    fromPartial(_: Partial<_105.MsgTransferResponse>): _105.MsgTransferResponse;
                    fromAmino(_: _105.MsgTransferResponseAmino): _105.MsgTransferResponse;
                    toAmino(_: _105.MsgTransferResponse): _105.MsgTransferResponseAmino;
                    fromAminoMsg(object: _105.MsgTransferResponseAminoMsg): _105.MsgTransferResponse;
                    toAminoMsg(message: _105.MsgTransferResponse): _105.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _105.MsgTransferResponseProtoMsg): _105.MsgTransferResponse;
                    toProto(message: _105.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _105.MsgTransferResponse): _105.MsgTransferResponseProtoMsg;
                };
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _104.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.FungibleTokenPacketData;
                    fromPartial(object: Partial<_104.FungibleTokenPacketData>): _104.FungibleTokenPacketData;
                    fromAmino(object: _104.FungibleTokenPacketDataAmino): _104.FungibleTokenPacketData;
                    toAmino(message: _104.FungibleTokenPacketData): _104.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _104.FungibleTokenPacketDataAminoMsg): _104.FungibleTokenPacketData;
                    toAminoMsg(message: _104.FungibleTokenPacketData): _104.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _104.FungibleTokenPacketDataProtoMsg): _104.FungibleTokenPacketData;
                    toProto(message: _104.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _104.FungibleTokenPacketData): _104.FungibleTokenPacketDataProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _104.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.DenomTrace;
                    fromPartial(object: Partial<_104.DenomTrace>): _104.DenomTrace;
                    fromAmino(object: _104.DenomTraceAmino): _104.DenomTrace;
                    toAmino(message: _104.DenomTrace): _104.DenomTraceAmino;
                    fromAminoMsg(object: _104.DenomTraceAminoMsg): _104.DenomTrace;
                    toAminoMsg(message: _104.DenomTrace): _104.DenomTraceAminoMsg;
                    fromProtoMsg(message: _104.DenomTraceProtoMsg): _104.DenomTrace;
                    toProto(message: _104.DenomTrace): Uint8Array;
                    toProtoMsg(message: _104.DenomTrace): _104.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _104.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.Params;
                    fromPartial(object: Partial<_104.Params>): _104.Params;
                    fromAmino(object: _104.ParamsAmino): _104.Params;
                    toAmino(message: _104.Params): _104.ParamsAmino;
                    fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                    toAminoMsg(message: _104.Params): _104.ParamsAminoMsg;
                    fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                    toProto(message: _104.Params): Uint8Array;
                    toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _103.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_103.QueryDenomTraceRequest>): _103.QueryDenomTraceRequest;
                    fromAmino(object: _103.QueryDenomTraceRequestAmino): _103.QueryDenomTraceRequest;
                    toAmino(message: _103.QueryDenomTraceRequest): _103.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _103.QueryDenomTraceRequestAminoMsg): _103.QueryDenomTraceRequest;
                    toAminoMsg(message: _103.QueryDenomTraceRequest): _103.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryDenomTraceRequestProtoMsg): _103.QueryDenomTraceRequest;
                    toProto(message: _103.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryDenomTraceRequest): _103.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _103.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_103.QueryDenomTraceResponse>): _103.QueryDenomTraceResponse;
                    fromAmino(object: _103.QueryDenomTraceResponseAmino): _103.QueryDenomTraceResponse;
                    toAmino(message: _103.QueryDenomTraceResponse): _103.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _103.QueryDenomTraceResponseAminoMsg): _103.QueryDenomTraceResponse;
                    toAminoMsg(message: _103.QueryDenomTraceResponse): _103.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryDenomTraceResponseProtoMsg): _103.QueryDenomTraceResponse;
                    toProto(message: _103.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryDenomTraceResponse): _103.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _103.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_103.QueryDenomTracesRequest>): _103.QueryDenomTracesRequest;
                    fromAmino(object: _103.QueryDenomTracesRequestAmino): _103.QueryDenomTracesRequest;
                    toAmino(message: _103.QueryDenomTracesRequest): _103.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _103.QueryDenomTracesRequestAminoMsg): _103.QueryDenomTracesRequest;
                    toAminoMsg(message: _103.QueryDenomTracesRequest): _103.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryDenomTracesRequestProtoMsg): _103.QueryDenomTracesRequest;
                    toProto(message: _103.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryDenomTracesRequest): _103.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _103.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_103.QueryDenomTracesResponse>): _103.QueryDenomTracesResponse;
                    fromAmino(object: _103.QueryDenomTracesResponseAmino): _103.QueryDenomTracesResponse;
                    toAmino(message: _103.QueryDenomTracesResponse): _103.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _103.QueryDenomTracesResponseAminoMsg): _103.QueryDenomTracesResponse;
                    toAminoMsg(message: _103.QueryDenomTracesResponse): _103.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryDenomTracesResponseProtoMsg): _103.QueryDenomTracesResponse;
                    toProto(message: _103.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryDenomTracesResponse): _103.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _103.QueryParamsRequest;
                    fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                    fromAmino(_: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                    toAmino(_: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                    fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                    toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                    toProto(message: _103.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.QueryParamsResponse;
                    fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                    fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                    toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                    fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                    toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                    toProto(message: _103.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.GenesisState;
                    fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                    fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
                    toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
                    fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
                    toAminoMsg(message: _102.GenesisState): _102.GenesisStateAminoMsg;
                    fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
                    toProto(message: _102.GenesisState): Uint8Array;
                    toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _226.MsgClientImpl;
                QueryClientImpl: typeof _222.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _108.QueryChannelRequest): Promise<_108.QueryChannelResponse>;
                    channels(request?: _108.QueryChannelsRequest): Promise<_108.QueryChannelsResponse>;
                    connectionChannels(request: _108.QueryConnectionChannelsRequest): Promise<_108.QueryConnectionChannelsResponse>;
                    channelClientState(request: _108.QueryChannelClientStateRequest): Promise<_108.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _108.QueryChannelConsensusStateRequest): Promise<_108.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _108.QueryPacketCommitmentRequest): Promise<_108.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _108.QueryPacketCommitmentsRequest): Promise<_108.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _108.QueryPacketReceiptRequest): Promise<_108.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _108.QueryPacketAcknowledgementRequest): Promise<_108.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _108.QueryPacketAcknowledgementsRequest): Promise<_108.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _108.QueryUnreceivedPacketsRequest): Promise<_108.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _108.QueryUnreceivedAcksRequest): Promise<_108.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _108.QueryNextSequenceReceiveRequest): Promise<_108.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _218.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _109.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _109.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _109.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _109.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _109.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _109.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _109.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _109.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _109.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _109.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _109.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _109.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _109.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _109.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _109.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _109.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _109.MsgRecvPacket): {
                            typeUrl: string;
                            value: _109.MsgRecvPacket;
                        };
                        timeout(value: _109.MsgTimeout): {
                            typeUrl: string;
                            value: _109.MsgTimeout;
                        };
                        timeoutOnClose(value: _109.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _109.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _109.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _109.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _109.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _109.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _109.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _109.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _109.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _109.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _109.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _109.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _109.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _109.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _109.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _109.MsgRecvPacket): {
                            typeUrl: string;
                            value: _109.MsgRecvPacket;
                        };
                        timeout(value: _109.MsgTimeout): {
                            typeUrl: string;
                            value: _109.MsgTimeout;
                        };
                        timeoutOnClose(value: _109.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _109.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _109.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _109.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _109.MsgChannelOpenInit) => _109.MsgChannelOpenInitAmino;
                        fromAmino: (object: _109.MsgChannelOpenInitAmino) => _109.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _109.MsgChannelOpenTry) => _109.MsgChannelOpenTryAmino;
                        fromAmino: (object: _109.MsgChannelOpenTryAmino) => _109.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _109.MsgChannelOpenAck) => _109.MsgChannelOpenAckAmino;
                        fromAmino: (object: _109.MsgChannelOpenAckAmino) => _109.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _109.MsgChannelOpenConfirm) => _109.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _109.MsgChannelOpenConfirmAmino) => _109.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _109.MsgChannelCloseInit) => _109.MsgChannelCloseInitAmino;
                        fromAmino: (object: _109.MsgChannelCloseInitAmino) => _109.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _109.MsgChannelCloseConfirm) => _109.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _109.MsgChannelCloseConfirmAmino) => _109.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _109.MsgRecvPacket) => _109.MsgRecvPacketAmino;
                        fromAmino: (object: _109.MsgRecvPacketAmino) => _109.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _109.MsgTimeout) => _109.MsgTimeoutAmino;
                        fromAmino: (object: _109.MsgTimeoutAmino) => _109.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _109.MsgTimeoutOnClose) => _109.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _109.MsgTimeoutOnCloseAmino) => _109.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _109.MsgAcknowledgement) => _109.MsgAcknowledgementAmino;
                        fromAmino: (object: _109.MsgAcknowledgementAmino) => _109.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _109.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgChannelOpenInit;
                    fromPartial(object: Partial<_109.MsgChannelOpenInit>): _109.MsgChannelOpenInit;
                    fromAmino(object: _109.MsgChannelOpenInitAmino): _109.MsgChannelOpenInit;
                    toAmino(message: _109.MsgChannelOpenInit): _109.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenInitAminoMsg): _109.MsgChannelOpenInit;
                    toAminoMsg(message: _109.MsgChannelOpenInit): _109.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenInitProtoMsg): _109.MsgChannelOpenInit;
                    toProto(message: _109.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenInit): _109.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenInitResponse>): _109.MsgChannelOpenInitResponse;
                    fromAmino(_: _109.MsgChannelOpenInitResponseAmino): _109.MsgChannelOpenInitResponse;
                    toAmino(_: _109.MsgChannelOpenInitResponse): _109.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenInitResponseAminoMsg): _109.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _109.MsgChannelOpenInitResponse): _109.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenInitResponseProtoMsg): _109.MsgChannelOpenInitResponse;
                    toProto(message: _109.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenInitResponse): _109.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _109.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgChannelOpenTry;
                    fromPartial(object: Partial<_109.MsgChannelOpenTry>): _109.MsgChannelOpenTry;
                    fromAmino(object: _109.MsgChannelOpenTryAmino): _109.MsgChannelOpenTry;
                    toAmino(message: _109.MsgChannelOpenTry): _109.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenTryAminoMsg): _109.MsgChannelOpenTry;
                    toAminoMsg(message: _109.MsgChannelOpenTry): _109.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenTryProtoMsg): _109.MsgChannelOpenTry;
                    toProto(message: _109.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenTry): _109.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenTryResponse>): _109.MsgChannelOpenTryResponse;
                    fromAmino(_: _109.MsgChannelOpenTryResponseAmino): _109.MsgChannelOpenTryResponse;
                    toAmino(_: _109.MsgChannelOpenTryResponse): _109.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenTryResponseAminoMsg): _109.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _109.MsgChannelOpenTryResponse): _109.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenTryResponseProtoMsg): _109.MsgChannelOpenTryResponse;
                    toProto(message: _109.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenTryResponse): _109.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _109.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgChannelOpenAck;
                    fromPartial(object: Partial<_109.MsgChannelOpenAck>): _109.MsgChannelOpenAck;
                    fromAmino(object: _109.MsgChannelOpenAckAmino): _109.MsgChannelOpenAck;
                    toAmino(message: _109.MsgChannelOpenAck): _109.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenAckAminoMsg): _109.MsgChannelOpenAck;
                    toAminoMsg(message: _109.MsgChannelOpenAck): _109.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenAckProtoMsg): _109.MsgChannelOpenAck;
                    toProto(message: _109.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenAck): _109.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenAckResponse>): _109.MsgChannelOpenAckResponse;
                    fromAmino(_: _109.MsgChannelOpenAckResponseAmino): _109.MsgChannelOpenAckResponse;
                    toAmino(_: _109.MsgChannelOpenAckResponse): _109.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenAckResponseAminoMsg): _109.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _109.MsgChannelOpenAckResponse): _109.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenAckResponseProtoMsg): _109.MsgChannelOpenAckResponse;
                    toProto(message: _109.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenAckResponse): _109.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _109.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_109.MsgChannelOpenConfirm>): _109.MsgChannelOpenConfirm;
                    fromAmino(object: _109.MsgChannelOpenConfirmAmino): _109.MsgChannelOpenConfirm;
                    toAmino(message: _109.MsgChannelOpenConfirm): _109.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenConfirmAminoMsg): _109.MsgChannelOpenConfirm;
                    toAminoMsg(message: _109.MsgChannelOpenConfirm): _109.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenConfirmProtoMsg): _109.MsgChannelOpenConfirm;
                    toProto(message: _109.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenConfirm): _109.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenConfirmResponse>): _109.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _109.MsgChannelOpenConfirmResponseAmino): _109.MsgChannelOpenConfirmResponse;
                    toAmino(_: _109.MsgChannelOpenConfirmResponse): _109.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _109.MsgChannelOpenConfirmResponseAminoMsg): _109.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _109.MsgChannelOpenConfirmResponse): _109.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelOpenConfirmResponseProtoMsg): _109.MsgChannelOpenConfirmResponse;
                    toProto(message: _109.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelOpenConfirmResponse): _109.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _109.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgChannelCloseInit;
                    fromPartial(object: Partial<_109.MsgChannelCloseInit>): _109.MsgChannelCloseInit;
                    fromAmino(object: _109.MsgChannelCloseInitAmino): _109.MsgChannelCloseInit;
                    toAmino(message: _109.MsgChannelCloseInit): _109.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _109.MsgChannelCloseInitAminoMsg): _109.MsgChannelCloseInit;
                    toAminoMsg(message: _109.MsgChannelCloseInit): _109.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelCloseInitProtoMsg): _109.MsgChannelCloseInit;
                    toProto(message: _109.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelCloseInit): _109.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_109.MsgChannelCloseInitResponse>): _109.MsgChannelCloseInitResponse;
                    fromAmino(_: _109.MsgChannelCloseInitResponseAmino): _109.MsgChannelCloseInitResponse;
                    toAmino(_: _109.MsgChannelCloseInitResponse): _109.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _109.MsgChannelCloseInitResponseAminoMsg): _109.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _109.MsgChannelCloseInitResponse): _109.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelCloseInitResponseProtoMsg): _109.MsgChannelCloseInitResponse;
                    toProto(message: _109.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelCloseInitResponse): _109.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _109.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_109.MsgChannelCloseConfirm>): _109.MsgChannelCloseConfirm;
                    fromAmino(object: _109.MsgChannelCloseConfirmAmino): _109.MsgChannelCloseConfirm;
                    toAmino(message: _109.MsgChannelCloseConfirm): _109.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _109.MsgChannelCloseConfirmAminoMsg): _109.MsgChannelCloseConfirm;
                    toAminoMsg(message: _109.MsgChannelCloseConfirm): _109.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelCloseConfirmProtoMsg): _109.MsgChannelCloseConfirm;
                    toProto(message: _109.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelCloseConfirm): _109.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_109.MsgChannelCloseConfirmResponse>): _109.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _109.MsgChannelCloseConfirmResponseAmino): _109.MsgChannelCloseConfirmResponse;
                    toAmino(_: _109.MsgChannelCloseConfirmResponse): _109.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _109.MsgChannelCloseConfirmResponseAminoMsg): _109.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _109.MsgChannelCloseConfirmResponse): _109.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgChannelCloseConfirmResponseProtoMsg): _109.MsgChannelCloseConfirmResponse;
                    toProto(message: _109.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgChannelCloseConfirmResponse): _109.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _109.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgRecvPacket;
                    fromPartial(object: Partial<_109.MsgRecvPacket>): _109.MsgRecvPacket;
                    fromAmino(object: _109.MsgRecvPacketAmino): _109.MsgRecvPacket;
                    toAmino(message: _109.MsgRecvPacket): _109.MsgRecvPacketAmino;
                    fromAminoMsg(object: _109.MsgRecvPacketAminoMsg): _109.MsgRecvPacket;
                    toAminoMsg(message: _109.MsgRecvPacket): _109.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _109.MsgRecvPacketProtoMsg): _109.MsgRecvPacket;
                    toProto(message: _109.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _109.MsgRecvPacket): _109.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_109.MsgRecvPacketResponse>): _109.MsgRecvPacketResponse;
                    fromAmino(_: _109.MsgRecvPacketResponseAmino): _109.MsgRecvPacketResponse;
                    toAmino(_: _109.MsgRecvPacketResponse): _109.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _109.MsgRecvPacketResponseAminoMsg): _109.MsgRecvPacketResponse;
                    toAminoMsg(message: _109.MsgRecvPacketResponse): _109.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgRecvPacketResponseProtoMsg): _109.MsgRecvPacketResponse;
                    toProto(message: _109.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgRecvPacketResponse): _109.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _109.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgTimeout;
                    fromPartial(object: Partial<_109.MsgTimeout>): _109.MsgTimeout;
                    fromAmino(object: _109.MsgTimeoutAmino): _109.MsgTimeout;
                    toAmino(message: _109.MsgTimeout): _109.MsgTimeoutAmino;
                    fromAminoMsg(object: _109.MsgTimeoutAminoMsg): _109.MsgTimeout;
                    toAminoMsg(message: _109.MsgTimeout): _109.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _109.MsgTimeoutProtoMsg): _109.MsgTimeout;
                    toProto(message: _109.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _109.MsgTimeout): _109.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgTimeoutResponse;
                    fromPartial(_: Partial<_109.MsgTimeoutResponse>): _109.MsgTimeoutResponse;
                    fromAmino(_: _109.MsgTimeoutResponseAmino): _109.MsgTimeoutResponse;
                    toAmino(_: _109.MsgTimeoutResponse): _109.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _109.MsgTimeoutResponseAminoMsg): _109.MsgTimeoutResponse;
                    toAminoMsg(message: _109.MsgTimeoutResponse): _109.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgTimeoutResponseProtoMsg): _109.MsgTimeoutResponse;
                    toProto(message: _109.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgTimeoutResponse): _109.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _109.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_109.MsgTimeoutOnClose>): _109.MsgTimeoutOnClose;
                    fromAmino(object: _109.MsgTimeoutOnCloseAmino): _109.MsgTimeoutOnClose;
                    toAmino(message: _109.MsgTimeoutOnClose): _109.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _109.MsgTimeoutOnCloseAminoMsg): _109.MsgTimeoutOnClose;
                    toAminoMsg(message: _109.MsgTimeoutOnClose): _109.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _109.MsgTimeoutOnCloseProtoMsg): _109.MsgTimeoutOnClose;
                    toProto(message: _109.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _109.MsgTimeoutOnClose): _109.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_109.MsgTimeoutOnCloseResponse>): _109.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _109.MsgTimeoutOnCloseResponseAmino): _109.MsgTimeoutOnCloseResponse;
                    toAmino(_: _109.MsgTimeoutOnCloseResponse): _109.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _109.MsgTimeoutOnCloseResponseAminoMsg): _109.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _109.MsgTimeoutOnCloseResponse): _109.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgTimeoutOnCloseResponseProtoMsg): _109.MsgTimeoutOnCloseResponse;
                    toProto(message: _109.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgTimeoutOnCloseResponse): _109.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _109.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _109.MsgAcknowledgement;
                    fromPartial(object: Partial<_109.MsgAcknowledgement>): _109.MsgAcknowledgement;
                    fromAmino(object: _109.MsgAcknowledgementAmino): _109.MsgAcknowledgement;
                    toAmino(message: _109.MsgAcknowledgement): _109.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _109.MsgAcknowledgementAminoMsg): _109.MsgAcknowledgement;
                    toAminoMsg(message: _109.MsgAcknowledgement): _109.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _109.MsgAcknowledgementProtoMsg): _109.MsgAcknowledgement;
                    toProto(message: _109.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _109.MsgAcknowledgement): _109.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _109.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _109.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_109.MsgAcknowledgementResponse>): _109.MsgAcknowledgementResponse;
                    fromAmino(_: _109.MsgAcknowledgementResponseAmino): _109.MsgAcknowledgementResponse;
                    toAmino(_: _109.MsgAcknowledgementResponse): _109.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _109.MsgAcknowledgementResponseAminoMsg): _109.MsgAcknowledgementResponse;
                    toAminoMsg(message: _109.MsgAcknowledgementResponse): _109.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _109.MsgAcknowledgementResponseProtoMsg): _109.MsgAcknowledgementResponse;
                    toProto(message: _109.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _109.MsgAcknowledgementResponse): _109.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelRequest;
                    fromPartial(object: Partial<_108.QueryChannelRequest>): _108.QueryChannelRequest;
                    fromAmino(object: _108.QueryChannelRequestAmino): _108.QueryChannelRequest;
                    toAmino(message: _108.QueryChannelRequest): _108.QueryChannelRequestAmino;
                    fromAminoMsg(object: _108.QueryChannelRequestAminoMsg): _108.QueryChannelRequest;
                    toAminoMsg(message: _108.QueryChannelRequest): _108.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelRequestProtoMsg): _108.QueryChannelRequest;
                    toProto(message: _108.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelRequest): _108.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelResponse;
                    fromPartial(object: Partial<_108.QueryChannelResponse>): _108.QueryChannelResponse;
                    fromAmino(object: _108.QueryChannelResponseAmino): _108.QueryChannelResponse;
                    toAmino(message: _108.QueryChannelResponse): _108.QueryChannelResponseAmino;
                    fromAminoMsg(object: _108.QueryChannelResponseAminoMsg): _108.QueryChannelResponse;
                    toAminoMsg(message: _108.QueryChannelResponse): _108.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelResponseProtoMsg): _108.QueryChannelResponse;
                    toProto(message: _108.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelResponse): _108.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelsRequest;
                    fromPartial(object: Partial<_108.QueryChannelsRequest>): _108.QueryChannelsRequest;
                    fromAmino(object: _108.QueryChannelsRequestAmino): _108.QueryChannelsRequest;
                    toAmino(message: _108.QueryChannelsRequest): _108.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _108.QueryChannelsRequestAminoMsg): _108.QueryChannelsRequest;
                    toAminoMsg(message: _108.QueryChannelsRequest): _108.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelsRequestProtoMsg): _108.QueryChannelsRequest;
                    toProto(message: _108.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelsRequest): _108.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelsResponse;
                    fromPartial(object: Partial<_108.QueryChannelsResponse>): _108.QueryChannelsResponse;
                    fromAmino(object: _108.QueryChannelsResponseAmino): _108.QueryChannelsResponse;
                    toAmino(message: _108.QueryChannelsResponse): _108.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _108.QueryChannelsResponseAminoMsg): _108.QueryChannelsResponse;
                    toAminoMsg(message: _108.QueryChannelsResponse): _108.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelsResponseProtoMsg): _108.QueryChannelsResponse;
                    toProto(message: _108.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelsResponse): _108.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_108.QueryConnectionChannelsRequest>): _108.QueryConnectionChannelsRequest;
                    fromAmino(object: _108.QueryConnectionChannelsRequestAmino): _108.QueryConnectionChannelsRequest;
                    toAmino(message: _108.QueryConnectionChannelsRequest): _108.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _108.QueryConnectionChannelsRequestAminoMsg): _108.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _108.QueryConnectionChannelsRequest): _108.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionChannelsRequestProtoMsg): _108.QueryConnectionChannelsRequest;
                    toProto(message: _108.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionChannelsRequest): _108.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_108.QueryConnectionChannelsResponse>): _108.QueryConnectionChannelsResponse;
                    fromAmino(object: _108.QueryConnectionChannelsResponseAmino): _108.QueryConnectionChannelsResponse;
                    toAmino(message: _108.QueryConnectionChannelsResponse): _108.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _108.QueryConnectionChannelsResponseAminoMsg): _108.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _108.QueryConnectionChannelsResponse): _108.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryConnectionChannelsResponseProtoMsg): _108.QueryConnectionChannelsResponse;
                    toProto(message: _108.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryConnectionChannelsResponse): _108.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_108.QueryChannelClientStateRequest>): _108.QueryChannelClientStateRequest;
                    fromAmino(object: _108.QueryChannelClientStateRequestAmino): _108.QueryChannelClientStateRequest;
                    toAmino(message: _108.QueryChannelClientStateRequest): _108.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _108.QueryChannelClientStateRequestAminoMsg): _108.QueryChannelClientStateRequest;
                    toAminoMsg(message: _108.QueryChannelClientStateRequest): _108.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelClientStateRequestProtoMsg): _108.QueryChannelClientStateRequest;
                    toProto(message: _108.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelClientStateRequest): _108.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_108.QueryChannelClientStateResponse>): _108.QueryChannelClientStateResponse;
                    fromAmino(object: _108.QueryChannelClientStateResponseAmino): _108.QueryChannelClientStateResponse;
                    toAmino(message: _108.QueryChannelClientStateResponse): _108.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _108.QueryChannelClientStateResponseAminoMsg): _108.QueryChannelClientStateResponse;
                    toAminoMsg(message: _108.QueryChannelClientStateResponse): _108.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelClientStateResponseProtoMsg): _108.QueryChannelClientStateResponse;
                    toProto(message: _108.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelClientStateResponse): _108.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_108.QueryChannelConsensusStateRequest>): _108.QueryChannelConsensusStateRequest;
                    fromAmino(object: _108.QueryChannelConsensusStateRequestAmino): _108.QueryChannelConsensusStateRequest;
                    toAmino(message: _108.QueryChannelConsensusStateRequest): _108.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _108.QueryChannelConsensusStateRequestAminoMsg): _108.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _108.QueryChannelConsensusStateRequest): _108.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelConsensusStateRequestProtoMsg): _108.QueryChannelConsensusStateRequest;
                    toProto(message: _108.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelConsensusStateRequest): _108.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_108.QueryChannelConsensusStateResponse>): _108.QueryChannelConsensusStateResponse;
                    fromAmino(object: _108.QueryChannelConsensusStateResponseAmino): _108.QueryChannelConsensusStateResponse;
                    toAmino(message: _108.QueryChannelConsensusStateResponse): _108.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _108.QueryChannelConsensusStateResponseAminoMsg): _108.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _108.QueryChannelConsensusStateResponse): _108.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryChannelConsensusStateResponseProtoMsg): _108.QueryChannelConsensusStateResponse;
                    toProto(message: _108.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryChannelConsensusStateResponse): _108.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentRequest>): _108.QueryPacketCommitmentRequest;
                    fromAmino(object: _108.QueryPacketCommitmentRequestAmino): _108.QueryPacketCommitmentRequest;
                    toAmino(message: _108.QueryPacketCommitmentRequest): _108.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _108.QueryPacketCommitmentRequestAminoMsg): _108.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _108.QueryPacketCommitmentRequest): _108.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketCommitmentRequestProtoMsg): _108.QueryPacketCommitmentRequest;
                    toProto(message: _108.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketCommitmentRequest): _108.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentResponse>): _108.QueryPacketCommitmentResponse;
                    fromAmino(object: _108.QueryPacketCommitmentResponseAmino): _108.QueryPacketCommitmentResponse;
                    toAmino(message: _108.QueryPacketCommitmentResponse): _108.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _108.QueryPacketCommitmentResponseAminoMsg): _108.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _108.QueryPacketCommitmentResponse): _108.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketCommitmentResponseProtoMsg): _108.QueryPacketCommitmentResponse;
                    toProto(message: _108.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketCommitmentResponse): _108.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentsRequest>): _108.QueryPacketCommitmentsRequest;
                    fromAmino(object: _108.QueryPacketCommitmentsRequestAmino): _108.QueryPacketCommitmentsRequest;
                    toAmino(message: _108.QueryPacketCommitmentsRequest): _108.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _108.QueryPacketCommitmentsRequestAminoMsg): _108.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _108.QueryPacketCommitmentsRequest): _108.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketCommitmentsRequestProtoMsg): _108.QueryPacketCommitmentsRequest;
                    toProto(message: _108.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketCommitmentsRequest): _108.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentsResponse>): _108.QueryPacketCommitmentsResponse;
                    fromAmino(object: _108.QueryPacketCommitmentsResponseAmino): _108.QueryPacketCommitmentsResponse;
                    toAmino(message: _108.QueryPacketCommitmentsResponse): _108.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _108.QueryPacketCommitmentsResponseAminoMsg): _108.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _108.QueryPacketCommitmentsResponse): _108.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketCommitmentsResponseProtoMsg): _108.QueryPacketCommitmentsResponse;
                    toProto(message: _108.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketCommitmentsResponse): _108.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_108.QueryPacketReceiptRequest>): _108.QueryPacketReceiptRequest;
                    fromAmino(object: _108.QueryPacketReceiptRequestAmino): _108.QueryPacketReceiptRequest;
                    toAmino(message: _108.QueryPacketReceiptRequest): _108.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _108.QueryPacketReceiptRequestAminoMsg): _108.QueryPacketReceiptRequest;
                    toAminoMsg(message: _108.QueryPacketReceiptRequest): _108.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketReceiptRequestProtoMsg): _108.QueryPacketReceiptRequest;
                    toProto(message: _108.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketReceiptRequest): _108.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_108.QueryPacketReceiptResponse>): _108.QueryPacketReceiptResponse;
                    fromAmino(object: _108.QueryPacketReceiptResponseAmino): _108.QueryPacketReceiptResponse;
                    toAmino(message: _108.QueryPacketReceiptResponse): _108.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _108.QueryPacketReceiptResponseAminoMsg): _108.QueryPacketReceiptResponse;
                    toAminoMsg(message: _108.QueryPacketReceiptResponse): _108.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketReceiptResponseProtoMsg): _108.QueryPacketReceiptResponse;
                    toProto(message: _108.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketReceiptResponse): _108.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementRequest>): _108.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _108.QueryPacketAcknowledgementRequestAmino): _108.QueryPacketAcknowledgementRequest;
                    toAmino(message: _108.QueryPacketAcknowledgementRequest): _108.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _108.QueryPacketAcknowledgementRequestAminoMsg): _108.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _108.QueryPacketAcknowledgementRequest): _108.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketAcknowledgementRequestProtoMsg): _108.QueryPacketAcknowledgementRequest;
                    toProto(message: _108.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketAcknowledgementRequest): _108.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementResponse>): _108.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _108.QueryPacketAcknowledgementResponseAmino): _108.QueryPacketAcknowledgementResponse;
                    toAmino(message: _108.QueryPacketAcknowledgementResponse): _108.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _108.QueryPacketAcknowledgementResponseAminoMsg): _108.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _108.QueryPacketAcknowledgementResponse): _108.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketAcknowledgementResponseProtoMsg): _108.QueryPacketAcknowledgementResponse;
                    toProto(message: _108.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketAcknowledgementResponse): _108.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementsRequest>): _108.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _108.QueryPacketAcknowledgementsRequestAmino): _108.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _108.QueryPacketAcknowledgementsRequest): _108.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _108.QueryPacketAcknowledgementsRequestAminoMsg): _108.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _108.QueryPacketAcknowledgementsRequest): _108.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketAcknowledgementsRequestProtoMsg): _108.QueryPacketAcknowledgementsRequest;
                    toProto(message: _108.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketAcknowledgementsRequest): _108.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementsResponse>): _108.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _108.QueryPacketAcknowledgementsResponseAmino): _108.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _108.QueryPacketAcknowledgementsResponse): _108.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _108.QueryPacketAcknowledgementsResponseAminoMsg): _108.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _108.QueryPacketAcknowledgementsResponse): _108.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryPacketAcknowledgementsResponseProtoMsg): _108.QueryPacketAcknowledgementsResponse;
                    toProto(message: _108.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryPacketAcknowledgementsResponse): _108.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_108.QueryUnreceivedPacketsRequest>): _108.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _108.QueryUnreceivedPacketsRequestAmino): _108.QueryUnreceivedPacketsRequest;
                    toAmino(message: _108.QueryUnreceivedPacketsRequest): _108.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _108.QueryUnreceivedPacketsRequestAminoMsg): _108.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _108.QueryUnreceivedPacketsRequest): _108.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryUnreceivedPacketsRequestProtoMsg): _108.QueryUnreceivedPacketsRequest;
                    toProto(message: _108.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryUnreceivedPacketsRequest): _108.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_108.QueryUnreceivedPacketsResponse>): _108.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _108.QueryUnreceivedPacketsResponseAmino): _108.QueryUnreceivedPacketsResponse;
                    toAmino(message: _108.QueryUnreceivedPacketsResponse): _108.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _108.QueryUnreceivedPacketsResponseAminoMsg): _108.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _108.QueryUnreceivedPacketsResponse): _108.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryUnreceivedPacketsResponseProtoMsg): _108.QueryUnreceivedPacketsResponse;
                    toProto(message: _108.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryUnreceivedPacketsResponse): _108.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_108.QueryUnreceivedAcksRequest>): _108.QueryUnreceivedAcksRequest;
                    fromAmino(object: _108.QueryUnreceivedAcksRequestAmino): _108.QueryUnreceivedAcksRequest;
                    toAmino(message: _108.QueryUnreceivedAcksRequest): _108.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _108.QueryUnreceivedAcksRequestAminoMsg): _108.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _108.QueryUnreceivedAcksRequest): _108.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryUnreceivedAcksRequestProtoMsg): _108.QueryUnreceivedAcksRequest;
                    toProto(message: _108.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryUnreceivedAcksRequest): _108.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_108.QueryUnreceivedAcksResponse>): _108.QueryUnreceivedAcksResponse;
                    fromAmino(object: _108.QueryUnreceivedAcksResponseAmino): _108.QueryUnreceivedAcksResponse;
                    toAmino(message: _108.QueryUnreceivedAcksResponse): _108.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _108.QueryUnreceivedAcksResponseAminoMsg): _108.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _108.QueryUnreceivedAcksResponse): _108.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryUnreceivedAcksResponseProtoMsg): _108.QueryUnreceivedAcksResponse;
                    toProto(message: _108.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryUnreceivedAcksResponse): _108.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _108.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_108.QueryNextSequenceReceiveRequest>): _108.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _108.QueryNextSequenceReceiveRequestAmino): _108.QueryNextSequenceReceiveRequest;
                    toAmino(message: _108.QueryNextSequenceReceiveRequest): _108.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _108.QueryNextSequenceReceiveRequestAminoMsg): _108.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _108.QueryNextSequenceReceiveRequest): _108.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _108.QueryNextSequenceReceiveRequestProtoMsg): _108.QueryNextSequenceReceiveRequest;
                    toProto(message: _108.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _108.QueryNextSequenceReceiveRequest): _108.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _108.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _108.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_108.QueryNextSequenceReceiveResponse>): _108.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _108.QueryNextSequenceReceiveResponseAmino): _108.QueryNextSequenceReceiveResponse;
                    toAmino(message: _108.QueryNextSequenceReceiveResponse): _108.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _108.QueryNextSequenceReceiveResponseAminoMsg): _108.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _108.QueryNextSequenceReceiveResponse): _108.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _108.QueryNextSequenceReceiveResponseProtoMsg): _108.QueryNextSequenceReceiveResponse;
                    toProto(message: _108.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _108.QueryNextSequenceReceiveResponse): _108.QueryNextSequenceReceiveResponseProtoMsg;
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
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _107.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.PacketSequence;
                    fromPartial(object: Partial<_107.PacketSequence>): _107.PacketSequence;
                    fromAmino(object: _107.PacketSequenceAmino): _107.PacketSequence;
                    toAmino(message: _107.PacketSequence): _107.PacketSequenceAmino;
                    fromAminoMsg(object: _107.PacketSequenceAminoMsg): _107.PacketSequence;
                    toAminoMsg(message: _107.PacketSequence): _107.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _107.PacketSequenceProtoMsg): _107.PacketSequence;
                    toProto(message: _107.PacketSequence): Uint8Array;
                    toProtoMsg(message: _107.PacketSequence): _107.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _106.State;
                stateToJSON(object: _106.State): string;
                orderFromJSON(object: any): _106.Order;
                orderToJSON(object: _106.Order): string;
                State: typeof _106.State;
                StateSDKType: typeof _106.State;
                StateAmino: typeof _106.State;
                Order: typeof _106.Order;
                OrderSDKType: typeof _106.Order;
                OrderAmino: typeof _106.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _106.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Channel;
                    fromPartial(object: Partial<_106.Channel>): _106.Channel;
                    fromAmino(object: _106.ChannelAmino): _106.Channel;
                    toAmino(message: _106.Channel): _106.ChannelAmino;
                    fromAminoMsg(object: _106.ChannelAminoMsg): _106.Channel;
                    toAminoMsg(message: _106.Channel): _106.ChannelAminoMsg;
                    fromProtoMsg(message: _106.ChannelProtoMsg): _106.Channel;
                    toProto(message: _106.Channel): Uint8Array;
                    toProtoMsg(message: _106.Channel): _106.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _106.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.IdentifiedChannel;
                    fromPartial(object: Partial<_106.IdentifiedChannel>): _106.IdentifiedChannel;
                    fromAmino(object: _106.IdentifiedChannelAmino): _106.IdentifiedChannel;
                    toAmino(message: _106.IdentifiedChannel): _106.IdentifiedChannelAmino;
                    fromAminoMsg(object: _106.IdentifiedChannelAminoMsg): _106.IdentifiedChannel;
                    toAminoMsg(message: _106.IdentifiedChannel): _106.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _106.IdentifiedChannelProtoMsg): _106.IdentifiedChannel;
                    toProto(message: _106.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _106.IdentifiedChannel): _106.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _106.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Counterparty;
                    fromPartial(object: Partial<_106.Counterparty>): _106.Counterparty;
                    fromAmino(object: _106.CounterpartyAmino): _106.Counterparty;
                    toAmino(message: _106.Counterparty): _106.CounterpartyAmino;
                    fromAminoMsg(object: _106.CounterpartyAminoMsg): _106.Counterparty;
                    toAminoMsg(message: _106.Counterparty): _106.CounterpartyAminoMsg;
                    fromProtoMsg(message: _106.CounterpartyProtoMsg): _106.Counterparty;
                    toProto(message: _106.Counterparty): Uint8Array;
                    toProtoMsg(message: _106.Counterparty): _106.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _106.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Packet;
                    fromPartial(object: Partial<_106.Packet>): _106.Packet;
                    fromAmino(object: _106.PacketAmino): _106.Packet;
                    toAmino(message: _106.Packet): _106.PacketAmino;
                    fromAminoMsg(object: _106.PacketAminoMsg): _106.Packet;
                    toAminoMsg(message: _106.Packet): _106.PacketAminoMsg;
                    fromProtoMsg(message: _106.PacketProtoMsg): _106.Packet;
                    toProto(message: _106.Packet): Uint8Array;
                    toProtoMsg(message: _106.Packet): _106.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _106.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.PacketState;
                    fromPartial(object: Partial<_106.PacketState>): _106.PacketState;
                    fromAmino(object: _106.PacketStateAmino): _106.PacketState;
                    toAmino(message: _106.PacketState): _106.PacketStateAmino;
                    fromAminoMsg(object: _106.PacketStateAminoMsg): _106.PacketState;
                    toAminoMsg(message: _106.PacketState): _106.PacketStateAminoMsg;
                    fromProtoMsg(message: _106.PacketStateProtoMsg): _106.PacketState;
                    toProto(message: _106.PacketState): Uint8Array;
                    toProtoMsg(message: _106.PacketState): _106.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _106.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Acknowledgement;
                    fromPartial(object: Partial<_106.Acknowledgement>): _106.Acknowledgement;
                    fromAmino(object: _106.AcknowledgementAmino): _106.Acknowledgement;
                    toAmino(message: _106.Acknowledgement): _106.AcknowledgementAmino;
                    fromAminoMsg(object: _106.AcknowledgementAminoMsg): _106.Acknowledgement;
                    toAminoMsg(message: _106.Acknowledgement): _106.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _106.AcknowledgementProtoMsg): _106.Acknowledgement;
                    toProto(message: _106.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _106.Acknowledgement): _106.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _227.MsgClientImpl;
                QueryClientImpl: typeof _223.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _112.QueryClientStateRequest): Promise<_112.QueryClientStateResponse>;
                    clientStates(request?: _112.QueryClientStatesRequest): Promise<_112.QueryClientStatesResponse>;
                    consensusState(request: _112.QueryConsensusStateRequest): Promise<_112.QueryConsensusStateResponse>;
                    consensusStates(request: _112.QueryConsensusStatesRequest): Promise<_112.QueryConsensusStatesResponse>;
                    clientParams(request?: _112.QueryClientParamsRequest): Promise<_112.QueryClientParamsResponse>;
                };
                LCDQueryClient: typeof _219.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _113.MsgCreateClient): {
                            typeUrl: string;
                            value: _113.MsgCreateClient;
                        };
                        updateClient(value: _113.MsgUpdateClient): {
                            typeUrl: string;
                            value: _113.MsgUpdateClient;
                        };
                        upgradeClient(value: _113.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _113.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _113.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _113.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _113.MsgCreateClient) => _113.MsgCreateClientAmino;
                        fromAmino: (object: _113.MsgCreateClientAmino) => _113.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _113.MsgUpdateClient) => _113.MsgUpdateClientAmino;
                        fromAmino: (object: _113.MsgUpdateClientAmino) => _113.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _113.MsgUpgradeClient) => _113.MsgUpgradeClientAmino;
                        fromAmino: (object: _113.MsgUpgradeClientAmino) => _113.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _113.MsgSubmitMisbehaviour) => _113.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _113.MsgSubmitMisbehaviourAmino) => _113.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _113.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.MsgCreateClient;
                    fromPartial(object: Partial<_113.MsgCreateClient>): _113.MsgCreateClient;
                    fromAmino(object: _113.MsgCreateClientAmino): _113.MsgCreateClient;
                    toAmino(message: _113.MsgCreateClient): _113.MsgCreateClientAmino;
                    fromAminoMsg(object: _113.MsgCreateClientAminoMsg): _113.MsgCreateClient;
                    toAminoMsg(message: _113.MsgCreateClient): _113.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _113.MsgCreateClientProtoMsg): _113.MsgCreateClient;
                    toProto(message: _113.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _113.MsgCreateClient): _113.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _113.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _113.MsgCreateClientResponse;
                    fromPartial(_: Partial<_113.MsgCreateClientResponse>): _113.MsgCreateClientResponse;
                    fromAmino(_: _113.MsgCreateClientResponseAmino): _113.MsgCreateClientResponse;
                    toAmino(_: _113.MsgCreateClientResponse): _113.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _113.MsgCreateClientResponseAminoMsg): _113.MsgCreateClientResponse;
                    toAminoMsg(message: _113.MsgCreateClientResponse): _113.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgCreateClientResponseProtoMsg): _113.MsgCreateClientResponse;
                    toProto(message: _113.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgCreateClientResponse): _113.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _113.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.MsgUpdateClient;
                    fromPartial(object: Partial<_113.MsgUpdateClient>): _113.MsgUpdateClient;
                    fromAmino(object: _113.MsgUpdateClientAmino): _113.MsgUpdateClient;
                    toAmino(message: _113.MsgUpdateClient): _113.MsgUpdateClientAmino;
                    fromAminoMsg(object: _113.MsgUpdateClientAminoMsg): _113.MsgUpdateClient;
                    toAminoMsg(message: _113.MsgUpdateClient): _113.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _113.MsgUpdateClientProtoMsg): _113.MsgUpdateClient;
                    toProto(message: _113.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _113.MsgUpdateClient): _113.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _113.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _113.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_113.MsgUpdateClientResponse>): _113.MsgUpdateClientResponse;
                    fromAmino(_: _113.MsgUpdateClientResponseAmino): _113.MsgUpdateClientResponse;
                    toAmino(_: _113.MsgUpdateClientResponse): _113.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _113.MsgUpdateClientResponseAminoMsg): _113.MsgUpdateClientResponse;
                    toAminoMsg(message: _113.MsgUpdateClientResponse): _113.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgUpdateClientResponseProtoMsg): _113.MsgUpdateClientResponse;
                    toProto(message: _113.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgUpdateClientResponse): _113.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _113.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.MsgUpgradeClient;
                    fromPartial(object: Partial<_113.MsgUpgradeClient>): _113.MsgUpgradeClient;
                    fromAmino(object: _113.MsgUpgradeClientAmino): _113.MsgUpgradeClient;
                    toAmino(message: _113.MsgUpgradeClient): _113.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _113.MsgUpgradeClientAminoMsg): _113.MsgUpgradeClient;
                    toAminoMsg(message: _113.MsgUpgradeClient): _113.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _113.MsgUpgradeClientProtoMsg): _113.MsgUpgradeClient;
                    toProto(message: _113.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _113.MsgUpgradeClient): _113.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _113.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _113.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_113.MsgUpgradeClientResponse>): _113.MsgUpgradeClientResponse;
                    fromAmino(_: _113.MsgUpgradeClientResponseAmino): _113.MsgUpgradeClientResponse;
                    toAmino(_: _113.MsgUpgradeClientResponse): _113.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _113.MsgUpgradeClientResponseAminoMsg): _113.MsgUpgradeClientResponse;
                    toAminoMsg(message: _113.MsgUpgradeClientResponse): _113.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgUpgradeClientResponseProtoMsg): _113.MsgUpgradeClientResponse;
                    toProto(message: _113.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgUpgradeClientResponse): _113.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _113.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _113.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_113.MsgSubmitMisbehaviour>): _113.MsgSubmitMisbehaviour;
                    fromAmino(object: _113.MsgSubmitMisbehaviourAmino): _113.MsgSubmitMisbehaviour;
                    toAmino(message: _113.MsgSubmitMisbehaviour): _113.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _113.MsgSubmitMisbehaviourAminoMsg): _113.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _113.MsgSubmitMisbehaviour): _113.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _113.MsgSubmitMisbehaviourProtoMsg): _113.MsgSubmitMisbehaviour;
                    toProto(message: _113.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _113.MsgSubmitMisbehaviour): _113.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _113.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _113.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_113.MsgSubmitMisbehaviourResponse>): _113.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _113.MsgSubmitMisbehaviourResponseAmino): _113.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _113.MsgSubmitMisbehaviourResponse): _113.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _113.MsgSubmitMisbehaviourResponseAminoMsg): _113.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _113.MsgSubmitMisbehaviourResponse): _113.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgSubmitMisbehaviourResponseProtoMsg): _113.MsgSubmitMisbehaviourResponse;
                    toProto(message: _113.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgSubmitMisbehaviourResponse): _113.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryClientStateRequest;
                    fromPartial(object: Partial<_112.QueryClientStateRequest>): _112.QueryClientStateRequest;
                    fromAmino(object: _112.QueryClientStateRequestAmino): _112.QueryClientStateRequest;
                    toAmino(message: _112.QueryClientStateRequest): _112.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _112.QueryClientStateRequestAminoMsg): _112.QueryClientStateRequest;
                    toAminoMsg(message: _112.QueryClientStateRequest): _112.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStateRequestProtoMsg): _112.QueryClientStateRequest;
                    toProto(message: _112.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStateRequest): _112.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryClientStateResponse;
                    fromPartial(object: Partial<_112.QueryClientStateResponse>): _112.QueryClientStateResponse;
                    fromAmino(object: _112.QueryClientStateResponseAmino): _112.QueryClientStateResponse;
                    toAmino(message: _112.QueryClientStateResponse): _112.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _112.QueryClientStateResponseAminoMsg): _112.QueryClientStateResponse;
                    toAminoMsg(message: _112.QueryClientStateResponse): _112.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStateResponseProtoMsg): _112.QueryClientStateResponse;
                    toProto(message: _112.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStateResponse): _112.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryClientStatesRequest;
                    fromPartial(object: Partial<_112.QueryClientStatesRequest>): _112.QueryClientStatesRequest;
                    fromAmino(object: _112.QueryClientStatesRequestAmino): _112.QueryClientStatesRequest;
                    toAmino(message: _112.QueryClientStatesRequest): _112.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _112.QueryClientStatesRequestAminoMsg): _112.QueryClientStatesRequest;
                    toAminoMsg(message: _112.QueryClientStatesRequest): _112.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStatesRequestProtoMsg): _112.QueryClientStatesRequest;
                    toProto(message: _112.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStatesRequest): _112.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryClientStatesResponse;
                    fromPartial(object: Partial<_112.QueryClientStatesResponse>): _112.QueryClientStatesResponse;
                    fromAmino(object: _112.QueryClientStatesResponseAmino): _112.QueryClientStatesResponse;
                    toAmino(message: _112.QueryClientStatesResponse): _112.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _112.QueryClientStatesResponseAminoMsg): _112.QueryClientStatesResponse;
                    toAminoMsg(message: _112.QueryClientStatesResponse): _112.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryClientStatesResponseProtoMsg): _112.QueryClientStatesResponse;
                    toProto(message: _112.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryClientStatesResponse): _112.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_112.QueryConsensusStateRequest>): _112.QueryConsensusStateRequest;
                    fromAmino(object: _112.QueryConsensusStateRequestAmino): _112.QueryConsensusStateRequest;
                    toAmino(message: _112.QueryConsensusStateRequest): _112.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _112.QueryConsensusStateRequestAminoMsg): _112.QueryConsensusStateRequest;
                    toAminoMsg(message: _112.QueryConsensusStateRequest): _112.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStateRequestProtoMsg): _112.QueryConsensusStateRequest;
                    toProto(message: _112.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStateRequest): _112.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_112.QueryConsensusStateResponse>): _112.QueryConsensusStateResponse;
                    fromAmino(object: _112.QueryConsensusStateResponseAmino): _112.QueryConsensusStateResponse;
                    toAmino(message: _112.QueryConsensusStateResponse): _112.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _112.QueryConsensusStateResponseAminoMsg): _112.QueryConsensusStateResponse;
                    toAminoMsg(message: _112.QueryConsensusStateResponse): _112.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStateResponseProtoMsg): _112.QueryConsensusStateResponse;
                    toProto(message: _112.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStateResponse): _112.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _112.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_112.QueryConsensusStatesRequest>): _112.QueryConsensusStatesRequest;
                    fromAmino(object: _112.QueryConsensusStatesRequestAmino): _112.QueryConsensusStatesRequest;
                    toAmino(message: _112.QueryConsensusStatesRequest): _112.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _112.QueryConsensusStatesRequestAminoMsg): _112.QueryConsensusStatesRequest;
                    toAminoMsg(message: _112.QueryConsensusStatesRequest): _112.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStatesRequestProtoMsg): _112.QueryConsensusStatesRequest;
                    toProto(message: _112.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStatesRequest): _112.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_112.QueryConsensusStatesResponse>): _112.QueryConsensusStatesResponse;
                    fromAmino(object: _112.QueryConsensusStatesResponseAmino): _112.QueryConsensusStatesResponse;
                    toAmino(message: _112.QueryConsensusStatesResponse): _112.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _112.QueryConsensusStatesResponseAminoMsg): _112.QueryConsensusStatesResponse;
                    toAminoMsg(message: _112.QueryConsensusStatesResponse): _112.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryConsensusStatesResponseProtoMsg): _112.QueryConsensusStatesResponse;
                    toProto(message: _112.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryConsensusStatesResponse): _112.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _112.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _112.QueryClientParamsRequest;
                    fromPartial(_: Partial<_112.QueryClientParamsRequest>): _112.QueryClientParamsRequest;
                    fromAmino(_: _112.QueryClientParamsRequestAmino): _112.QueryClientParamsRequest;
                    toAmino(_: _112.QueryClientParamsRequest): _112.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _112.QueryClientParamsRequestAminoMsg): _112.QueryClientParamsRequest;
                    toAminoMsg(message: _112.QueryClientParamsRequest): _112.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryClientParamsRequestProtoMsg): _112.QueryClientParamsRequest;
                    toProto(message: _112.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryClientParamsRequest): _112.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _112.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _112.QueryClientParamsResponse;
                    fromPartial(object: Partial<_112.QueryClientParamsResponse>): _112.QueryClientParamsResponse;
                    fromAmino(object: _112.QueryClientParamsResponseAmino): _112.QueryClientParamsResponse;
                    toAmino(message: _112.QueryClientParamsResponse): _112.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _112.QueryClientParamsResponseAminoMsg): _112.QueryClientParamsResponse;
                    toAminoMsg(message: _112.QueryClientParamsResponse): _112.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryClientParamsResponseProtoMsg): _112.QueryClientParamsResponse;
                    toProto(message: _112.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryClientParamsResponse): _112.QueryClientParamsResponseProtoMsg;
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
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _111.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.GenesisMetadata;
                    fromPartial(object: Partial<_111.GenesisMetadata>): _111.GenesisMetadata;
                    fromAmino(object: _111.GenesisMetadataAmino): _111.GenesisMetadata;
                    toAmino(message: _111.GenesisMetadata): _111.GenesisMetadataAmino;
                    fromAminoMsg(object: _111.GenesisMetadataAminoMsg): _111.GenesisMetadata;
                    toAminoMsg(message: _111.GenesisMetadata): _111.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _111.GenesisMetadataProtoMsg): _111.GenesisMetadata;
                    toProto(message: _111.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _111.GenesisMetadata): _111.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _111.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _111.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_111.IdentifiedGenesisMetadata>): _111.IdentifiedGenesisMetadata;
                    fromAmino(object: _111.IdentifiedGenesisMetadataAmino): _111.IdentifiedGenesisMetadata;
                    toAmino(message: _111.IdentifiedGenesisMetadata): _111.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _111.IdentifiedGenesisMetadataAminoMsg): _111.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _111.IdentifiedGenesisMetadata): _111.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _111.IdentifiedGenesisMetadataProtoMsg): _111.IdentifiedGenesisMetadata;
                    toProto(message: _111.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _111.IdentifiedGenesisMetadata): _111.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _110.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.IdentifiedClientState;
                    fromPartial(object: Partial<_110.IdentifiedClientState>): _110.IdentifiedClientState;
                    fromAmino(object: _110.IdentifiedClientStateAmino): _110.IdentifiedClientState;
                    toAmino(message: _110.IdentifiedClientState): _110.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _110.IdentifiedClientStateAminoMsg): _110.IdentifiedClientState;
                    toAminoMsg(message: _110.IdentifiedClientState): _110.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _110.IdentifiedClientStateProtoMsg): _110.IdentifiedClientState;
                    toProto(message: _110.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _110.IdentifiedClientState): _110.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _110.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_110.ConsensusStateWithHeight>): _110.ConsensusStateWithHeight;
                    fromAmino(object: _110.ConsensusStateWithHeightAmino): _110.ConsensusStateWithHeight;
                    toAmino(message: _110.ConsensusStateWithHeight): _110.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _110.ConsensusStateWithHeightAminoMsg): _110.ConsensusStateWithHeight;
                    toAminoMsg(message: _110.ConsensusStateWithHeight): _110.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _110.ConsensusStateWithHeightProtoMsg): _110.ConsensusStateWithHeight;
                    toProto(message: _110.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _110.ConsensusStateWithHeight): _110.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _110.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.ClientConsensusStates;
                    fromPartial(object: Partial<_110.ClientConsensusStates>): _110.ClientConsensusStates;
                    fromAmino(object: _110.ClientConsensusStatesAmino): _110.ClientConsensusStates;
                    toAmino(message: _110.ClientConsensusStates): _110.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _110.ClientConsensusStatesAminoMsg): _110.ClientConsensusStates;
                    toAminoMsg(message: _110.ClientConsensusStates): _110.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _110.ClientConsensusStatesProtoMsg): _110.ClientConsensusStates;
                    toProto(message: _110.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _110.ClientConsensusStates): _110.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _110.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.ClientUpdateProposal;
                    fromPartial(object: Partial<_110.ClientUpdateProposal>): _110.ClientUpdateProposal;
                    fromAmino(object: _110.ClientUpdateProposalAmino): _110.ClientUpdateProposal;
                    toAmino(message: _110.ClientUpdateProposal): _110.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _110.ClientUpdateProposalAminoMsg): _110.ClientUpdateProposal;
                    toAminoMsg(message: _110.ClientUpdateProposal): _110.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _110.ClientUpdateProposalProtoMsg): _110.ClientUpdateProposal;
                    toProto(message: _110.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _110.ClientUpdateProposal): _110.ClientUpdateProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _110.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.Height;
                    fromPartial(object: Partial<_110.Height>): _110.Height;
                    fromAmino(object: _110.HeightAmino): _110.Height;
                    toAmino(message: _110.Height): _110.HeightAmino;
                    fromAminoMsg(object: _110.HeightAminoMsg): _110.Height;
                    toAminoMsg(message: _110.Height): _110.HeightAminoMsg;
                    fromProtoMsg(message: _110.HeightProtoMsg): _110.Height;
                    toProto(message: _110.Height): Uint8Array;
                    toProtoMsg(message: _110.Height): _110.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _110.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _110.Params;
                    fromPartial(object: Partial<_110.Params>): _110.Params;
                    fromAmino(object: _110.ParamsAmino): _110.Params;
                    toAmino(message: _110.Params): _110.ParamsAmino;
                    fromAminoMsg(object: _110.ParamsAminoMsg): _110.Params;
                    toAminoMsg(message: _110.Params): _110.ParamsAminoMsg;
                    fromProtoMsg(message: _110.ParamsProtoMsg): _110.Params;
                    toProto(message: _110.Params): Uint8Array;
                    toProtoMsg(message: _110.Params): _110.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _114.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MerkleRoot;
                    fromPartial(object: Partial<_114.MerkleRoot>): _114.MerkleRoot;
                    fromAmino(object: _114.MerkleRootAmino): _114.MerkleRoot;
                    toAmino(message: _114.MerkleRoot): _114.MerkleRootAmino;
                    fromAminoMsg(object: _114.MerkleRootAminoMsg): _114.MerkleRoot;
                    toAminoMsg(message: _114.MerkleRoot): _114.MerkleRootAminoMsg;
                    fromProtoMsg(message: _114.MerkleRootProtoMsg): _114.MerkleRoot;
                    toProto(message: _114.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _114.MerkleRoot): _114.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _114.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MerklePrefix;
                    fromPartial(object: Partial<_114.MerklePrefix>): _114.MerklePrefix;
                    fromAmino(object: _114.MerklePrefixAmino): _114.MerklePrefix;
                    toAmino(message: _114.MerklePrefix): _114.MerklePrefixAmino;
                    fromAminoMsg(object: _114.MerklePrefixAminoMsg): _114.MerklePrefix;
                    toAminoMsg(message: _114.MerklePrefix): _114.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _114.MerklePrefixProtoMsg): _114.MerklePrefix;
                    toProto(message: _114.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _114.MerklePrefix): _114.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _114.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MerklePath;
                    fromPartial(object: Partial<_114.MerklePath>): _114.MerklePath;
                    fromAmino(object: _114.MerklePathAmino): _114.MerklePath;
                    toAmino(message: _114.MerklePath): _114.MerklePathAmino;
                    fromAminoMsg(object: _114.MerklePathAminoMsg): _114.MerklePath;
                    toAminoMsg(message: _114.MerklePath): _114.MerklePathAminoMsg;
                    fromProtoMsg(message: _114.MerklePathProtoMsg): _114.MerklePath;
                    toProto(message: _114.MerklePath): Uint8Array;
                    toProtoMsg(message: _114.MerklePath): _114.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _114.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _114.MerkleProof;
                    fromPartial(object: Partial<_114.MerkleProof>): _114.MerkleProof;
                    fromAmino(object: _114.MerkleProofAmino): _114.MerkleProof;
                    toAmino(message: _114.MerkleProof): _114.MerkleProofAmino;
                    fromAminoMsg(object: _114.MerkleProofAminoMsg): _114.MerkleProof;
                    toAminoMsg(message: _114.MerkleProof): _114.MerkleProofAminoMsg;
                    fromProtoMsg(message: _114.MerkleProofProtoMsg): _114.MerkleProof;
                    toProto(message: _114.MerkleProof): Uint8Array;
                    toProtoMsg(message: _114.MerkleProof): _114.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _228.MsgClientImpl;
                QueryClientImpl: typeof _224.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _117.QueryConnectionRequest): Promise<_117.QueryConnectionResponse>;
                    connections(request?: _117.QueryConnectionsRequest): Promise<_117.QueryConnectionsResponse>;
                    clientConnections(request: _117.QueryClientConnectionsRequest): Promise<_117.QueryClientConnectionsResponse>;
                    connectionClientState(request: _117.QueryConnectionClientStateRequest): Promise<_117.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _117.QueryConnectionConsensusStateRequest): Promise<_117.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _220.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _118.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _118.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _118.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _118.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _118.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _118.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _118.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _118.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _118.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _118.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _118.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _118.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _118.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _118.MsgConnectionOpenInit) => _118.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _118.MsgConnectionOpenInitAmino) => _118.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _118.MsgConnectionOpenTry) => _118.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _118.MsgConnectionOpenTryAmino) => _118.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _118.MsgConnectionOpenAck) => _118.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _118.MsgConnectionOpenAckAmino) => _118.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _118.MsgConnectionOpenConfirm) => _118.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _118.MsgConnectionOpenConfirmAmino) => _118.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _118.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_118.MsgConnectionOpenInit>): _118.MsgConnectionOpenInit;
                    fromAmino(object: _118.MsgConnectionOpenInitAmino): _118.MsgConnectionOpenInit;
                    toAmino(message: _118.MsgConnectionOpenInit): _118.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenInitAminoMsg): _118.MsgConnectionOpenInit;
                    toAminoMsg(message: _118.MsgConnectionOpenInit): _118.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenInitProtoMsg): _118.MsgConnectionOpenInit;
                    toProto(message: _118.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenInit): _118.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenInitResponse>): _118.MsgConnectionOpenInitResponse;
                    fromAmino(_: _118.MsgConnectionOpenInitResponseAmino): _118.MsgConnectionOpenInitResponse;
                    toAmino(_: _118.MsgConnectionOpenInitResponse): _118.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenInitResponseAminoMsg): _118.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _118.MsgConnectionOpenInitResponse): _118.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenInitResponseProtoMsg): _118.MsgConnectionOpenInitResponse;
                    toProto(message: _118.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenInitResponse): _118.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _118.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_118.MsgConnectionOpenTry>): _118.MsgConnectionOpenTry;
                    fromAmino(object: _118.MsgConnectionOpenTryAmino): _118.MsgConnectionOpenTry;
                    toAmino(message: _118.MsgConnectionOpenTry): _118.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenTryAminoMsg): _118.MsgConnectionOpenTry;
                    toAminoMsg(message: _118.MsgConnectionOpenTry): _118.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenTryProtoMsg): _118.MsgConnectionOpenTry;
                    toProto(message: _118.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenTry): _118.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenTryResponse>): _118.MsgConnectionOpenTryResponse;
                    fromAmino(_: _118.MsgConnectionOpenTryResponseAmino): _118.MsgConnectionOpenTryResponse;
                    toAmino(_: _118.MsgConnectionOpenTryResponse): _118.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenTryResponseAminoMsg): _118.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _118.MsgConnectionOpenTryResponse): _118.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenTryResponseProtoMsg): _118.MsgConnectionOpenTryResponse;
                    toProto(message: _118.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenTryResponse): _118.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _118.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_118.MsgConnectionOpenAck>): _118.MsgConnectionOpenAck;
                    fromAmino(object: _118.MsgConnectionOpenAckAmino): _118.MsgConnectionOpenAck;
                    toAmino(message: _118.MsgConnectionOpenAck): _118.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenAckAminoMsg): _118.MsgConnectionOpenAck;
                    toAminoMsg(message: _118.MsgConnectionOpenAck): _118.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenAckProtoMsg): _118.MsgConnectionOpenAck;
                    toProto(message: _118.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenAck): _118.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenAckResponse>): _118.MsgConnectionOpenAckResponse;
                    fromAmino(_: _118.MsgConnectionOpenAckResponseAmino): _118.MsgConnectionOpenAckResponse;
                    toAmino(_: _118.MsgConnectionOpenAckResponse): _118.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenAckResponseAminoMsg): _118.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _118.MsgConnectionOpenAckResponse): _118.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenAckResponseProtoMsg): _118.MsgConnectionOpenAckResponse;
                    toProto(message: _118.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenAckResponse): _118.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _118.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _118.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_118.MsgConnectionOpenConfirm>): _118.MsgConnectionOpenConfirm;
                    fromAmino(object: _118.MsgConnectionOpenConfirmAmino): _118.MsgConnectionOpenConfirm;
                    toAmino(message: _118.MsgConnectionOpenConfirm): _118.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenConfirmAminoMsg): _118.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _118.MsgConnectionOpenConfirm): _118.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenConfirmProtoMsg): _118.MsgConnectionOpenConfirm;
                    toProto(message: _118.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenConfirm): _118.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _118.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _118.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenConfirmResponse>): _118.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _118.MsgConnectionOpenConfirmResponseAmino): _118.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _118.MsgConnectionOpenConfirmResponse): _118.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _118.MsgConnectionOpenConfirmResponseAminoMsg): _118.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _118.MsgConnectionOpenConfirmResponse): _118.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _118.MsgConnectionOpenConfirmResponseProtoMsg): _118.MsgConnectionOpenConfirmResponse;
                    toProto(message: _118.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _118.MsgConnectionOpenConfirmResponse): _118.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionRequest;
                    fromPartial(object: Partial<_117.QueryConnectionRequest>): _117.QueryConnectionRequest;
                    fromAmino(object: _117.QueryConnectionRequestAmino): _117.QueryConnectionRequest;
                    toAmino(message: _117.QueryConnectionRequest): _117.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _117.QueryConnectionRequestAminoMsg): _117.QueryConnectionRequest;
                    toAminoMsg(message: _117.QueryConnectionRequest): _117.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionRequestProtoMsg): _117.QueryConnectionRequest;
                    toProto(message: _117.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionRequest): _117.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionResponse;
                    fromPartial(object: Partial<_117.QueryConnectionResponse>): _117.QueryConnectionResponse;
                    fromAmino(object: _117.QueryConnectionResponseAmino): _117.QueryConnectionResponse;
                    toAmino(message: _117.QueryConnectionResponse): _117.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _117.QueryConnectionResponseAminoMsg): _117.QueryConnectionResponse;
                    toAminoMsg(message: _117.QueryConnectionResponse): _117.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionResponseProtoMsg): _117.QueryConnectionResponse;
                    toProto(message: _117.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionResponse): _117.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionsRequest;
                    fromPartial(object: Partial<_117.QueryConnectionsRequest>): _117.QueryConnectionsRequest;
                    fromAmino(object: _117.QueryConnectionsRequestAmino): _117.QueryConnectionsRequest;
                    toAmino(message: _117.QueryConnectionsRequest): _117.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _117.QueryConnectionsRequestAminoMsg): _117.QueryConnectionsRequest;
                    toAminoMsg(message: _117.QueryConnectionsRequest): _117.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionsRequestProtoMsg): _117.QueryConnectionsRequest;
                    toProto(message: _117.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionsRequest): _117.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionsResponse;
                    fromPartial(object: Partial<_117.QueryConnectionsResponse>): _117.QueryConnectionsResponse;
                    fromAmino(object: _117.QueryConnectionsResponseAmino): _117.QueryConnectionsResponse;
                    toAmino(message: _117.QueryConnectionsResponse): _117.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _117.QueryConnectionsResponseAminoMsg): _117.QueryConnectionsResponse;
                    toAminoMsg(message: _117.QueryConnectionsResponse): _117.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionsResponseProtoMsg): _117.QueryConnectionsResponse;
                    toProto(message: _117.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionsResponse): _117.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_117.QueryClientConnectionsRequest>): _117.QueryClientConnectionsRequest;
                    fromAmino(object: _117.QueryClientConnectionsRequestAmino): _117.QueryClientConnectionsRequest;
                    toAmino(message: _117.QueryClientConnectionsRequest): _117.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _117.QueryClientConnectionsRequestAminoMsg): _117.QueryClientConnectionsRequest;
                    toAminoMsg(message: _117.QueryClientConnectionsRequest): _117.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryClientConnectionsRequestProtoMsg): _117.QueryClientConnectionsRequest;
                    toProto(message: _117.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryClientConnectionsRequest): _117.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_117.QueryClientConnectionsResponse>): _117.QueryClientConnectionsResponse;
                    fromAmino(object: _117.QueryClientConnectionsResponseAmino): _117.QueryClientConnectionsResponse;
                    toAmino(message: _117.QueryClientConnectionsResponse): _117.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _117.QueryClientConnectionsResponseAminoMsg): _117.QueryClientConnectionsResponse;
                    toAminoMsg(message: _117.QueryClientConnectionsResponse): _117.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryClientConnectionsResponseProtoMsg): _117.QueryClientConnectionsResponse;
                    toProto(message: _117.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryClientConnectionsResponse): _117.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_117.QueryConnectionClientStateRequest>): _117.QueryConnectionClientStateRequest;
                    fromAmino(object: _117.QueryConnectionClientStateRequestAmino): _117.QueryConnectionClientStateRequest;
                    toAmino(message: _117.QueryConnectionClientStateRequest): _117.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _117.QueryConnectionClientStateRequestAminoMsg): _117.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _117.QueryConnectionClientStateRequest): _117.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionClientStateRequestProtoMsg): _117.QueryConnectionClientStateRequest;
                    toProto(message: _117.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionClientStateRequest): _117.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_117.QueryConnectionClientStateResponse>): _117.QueryConnectionClientStateResponse;
                    fromAmino(object: _117.QueryConnectionClientStateResponseAmino): _117.QueryConnectionClientStateResponse;
                    toAmino(message: _117.QueryConnectionClientStateResponse): _117.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _117.QueryConnectionClientStateResponseAminoMsg): _117.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _117.QueryConnectionClientStateResponse): _117.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionClientStateResponseProtoMsg): _117.QueryConnectionClientStateResponse;
                    toProto(message: _117.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionClientStateResponse): _117.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_117.QueryConnectionConsensusStateRequest>): _117.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _117.QueryConnectionConsensusStateRequestAmino): _117.QueryConnectionConsensusStateRequest;
                    toAmino(message: _117.QueryConnectionConsensusStateRequest): _117.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _117.QueryConnectionConsensusStateRequestAminoMsg): _117.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _117.QueryConnectionConsensusStateRequest): _117.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionConsensusStateRequestProtoMsg): _117.QueryConnectionConsensusStateRequest;
                    toProto(message: _117.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionConsensusStateRequest): _117.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _117.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _117.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_117.QueryConnectionConsensusStateResponse>): _117.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _117.QueryConnectionConsensusStateResponseAmino): _117.QueryConnectionConsensusStateResponse;
                    toAmino(message: _117.QueryConnectionConsensusStateResponse): _117.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _117.QueryConnectionConsensusStateResponseAminoMsg): _117.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _117.QueryConnectionConsensusStateResponse): _117.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _117.QueryConnectionConsensusStateResponseProtoMsg): _117.QueryConnectionConsensusStateResponse;
                    toProto(message: _117.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _117.QueryConnectionConsensusStateResponse): _117.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _116.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _116.GenesisState;
                    fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                    fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                    toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                    fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                    toAminoMsg(message: _116.GenesisState): _116.GenesisStateAminoMsg;
                    fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                    toProto(message: _116.GenesisState): Uint8Array;
                    toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _115.State;
                stateToJSON(object: _115.State): string;
                State: typeof _115.State;
                StateSDKType: typeof _115.State;
                StateAmino: typeof _115.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _115.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.ConnectionEnd;
                    fromPartial(object: Partial<_115.ConnectionEnd>): _115.ConnectionEnd;
                    fromAmino(object: _115.ConnectionEndAmino): _115.ConnectionEnd;
                    toAmino(message: _115.ConnectionEnd): _115.ConnectionEndAmino;
                    fromAminoMsg(object: _115.ConnectionEndAminoMsg): _115.ConnectionEnd;
                    toAminoMsg(message: _115.ConnectionEnd): _115.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _115.ConnectionEndProtoMsg): _115.ConnectionEnd;
                    toProto(message: _115.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _115.ConnectionEnd): _115.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _115.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.IdentifiedConnection;
                    fromPartial(object: Partial<_115.IdentifiedConnection>): _115.IdentifiedConnection;
                    fromAmino(object: _115.IdentifiedConnectionAmino): _115.IdentifiedConnection;
                    toAmino(message: _115.IdentifiedConnection): _115.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _115.IdentifiedConnectionAminoMsg): _115.IdentifiedConnection;
                    toAminoMsg(message: _115.IdentifiedConnection): _115.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _115.IdentifiedConnectionProtoMsg): _115.IdentifiedConnection;
                    toProto(message: _115.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _115.IdentifiedConnection): _115.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _115.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Counterparty;
                    fromPartial(object: Partial<_115.Counterparty>): _115.Counterparty;
                    fromAmino(object: _115.CounterpartyAmino): _115.Counterparty;
                    toAmino(message: _115.Counterparty): _115.CounterpartyAmino;
                    fromAminoMsg(object: _115.CounterpartyAminoMsg): _115.Counterparty;
                    toAminoMsg(message: _115.Counterparty): _115.CounterpartyAminoMsg;
                    fromProtoMsg(message: _115.CounterpartyProtoMsg): _115.Counterparty;
                    toProto(message: _115.Counterparty): Uint8Array;
                    toProtoMsg(message: _115.Counterparty): _115.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _115.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.ClientPaths;
                    fromPartial(object: Partial<_115.ClientPaths>): _115.ClientPaths;
                    fromAmino(object: _115.ClientPathsAmino): _115.ClientPaths;
                    toAmino(message: _115.ClientPaths): _115.ClientPathsAmino;
                    fromAminoMsg(object: _115.ClientPathsAminoMsg): _115.ClientPaths;
                    toAminoMsg(message: _115.ClientPaths): _115.ClientPathsAminoMsg;
                    fromProtoMsg(message: _115.ClientPathsProtoMsg): _115.ClientPaths;
                    toProto(message: _115.ClientPaths): Uint8Array;
                    toProtoMsg(message: _115.ClientPaths): _115.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _115.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.ConnectionPaths;
                    fromPartial(object: Partial<_115.ConnectionPaths>): _115.ConnectionPaths;
                    fromAmino(object: _115.ConnectionPathsAmino): _115.ConnectionPaths;
                    toAmino(message: _115.ConnectionPaths): _115.ConnectionPathsAmino;
                    fromAminoMsg(object: _115.ConnectionPathsAminoMsg): _115.ConnectionPaths;
                    toAminoMsg(message: _115.ConnectionPaths): _115.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _115.ConnectionPathsProtoMsg): _115.ConnectionPaths;
                    toProto(message: _115.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _115.ConnectionPaths): _115.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _115.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _115.Version;
                    fromPartial(object: Partial<_115.Version>): _115.Version;
                    fromAmino(object: _115.VersionAmino): _115.Version;
                    toAmino(message: _115.Version): _115.VersionAmino;
                    fromAminoMsg(object: _115.VersionAminoMsg): _115.Version;
                    toAminoMsg(message: _115.Version): _115.VersionAminoMsg;
                    fromProtoMsg(message: _115.VersionProtoMsg): _115.Version;
                    toProto(message: _115.Version): Uint8Array;
                    toProtoMsg(message: _115.Version): _115.VersionProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _119.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _119.GenesisState;
                    fromPartial(object: Partial<_119.GenesisState>): _119.GenesisState;
                    fromAmino(object: _119.GenesisStateAmino): _119.GenesisState;
                    toAmino(message: _119.GenesisState): _119.GenesisStateAmino;
                    fromAminoMsg(object: _119.GenesisStateAminoMsg): _119.GenesisState;
                    toAminoMsg(message: _119.GenesisState): _119.GenesisStateAminoMsg;
                    fromProtoMsg(message: _119.GenesisStateProtoMsg): _119.GenesisState;
                    toProto(message: _119.GenesisState): Uint8Array;
                    toProtoMsg(message: _119.GenesisState): _119.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _120.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _120.ClientState;
                    fromPartial(object: Partial<_120.ClientState>): _120.ClientState;
                    fromAmino(object: _120.ClientStateAmino): _120.ClientState;
                    toAmino(message: _120.ClientState): _120.ClientStateAmino;
                    fromAminoMsg(object: _120.ClientStateAminoMsg): _120.ClientState;
                    toAminoMsg(message: _120.ClientState): _120.ClientStateAminoMsg;
                    fromProtoMsg(message: _120.ClientStateProtoMsg): _120.ClientState;
                    toProto(message: _120.ClientState): Uint8Array;
                    toProtoMsg(message: _120.ClientState): _120.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _121.DataType;
                dataTypeToJSON(object: _121.DataType): string;
                DataType: typeof _121.DataType;
                DataTypeSDKType: typeof _121.DataType;
                DataTypeAmino: typeof _121.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _121.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.ClientState;
                    fromPartial(object: Partial<_121.ClientState>): _121.ClientState;
                    fromAmino(object: _121.ClientStateAmino): _121.ClientState;
                    toAmino(message: _121.ClientState): _121.ClientStateAmino;
                    fromAminoMsg(object: _121.ClientStateAminoMsg): _121.ClientState;
                    toAminoMsg(message: _121.ClientState): _121.ClientStateAminoMsg;
                    fromProtoMsg(message: _121.ClientStateProtoMsg): _121.ClientState;
                    toProto(message: _121.ClientState): Uint8Array;
                    toProtoMsg(message: _121.ClientState): _121.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _121.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.ConsensusState;
                    fromPartial(object: Partial<_121.ConsensusState>): _121.ConsensusState;
                    fromAmino(object: _121.ConsensusStateAmino): _121.ConsensusState;
                    toAmino(message: _121.ConsensusState): _121.ConsensusStateAmino;
                    fromAminoMsg(object: _121.ConsensusStateAminoMsg): _121.ConsensusState;
                    toAminoMsg(message: _121.ConsensusState): _121.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _121.ConsensusStateProtoMsg): _121.ConsensusState;
                    toProto(message: _121.ConsensusState): Uint8Array;
                    toProtoMsg(message: _121.ConsensusState): _121.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _121.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.Header;
                    fromPartial(object: Partial<_121.Header>): _121.Header;
                    fromAmino(object: _121.HeaderAmino): _121.Header;
                    toAmino(message: _121.Header): _121.HeaderAmino;
                    fromAminoMsg(object: _121.HeaderAminoMsg): _121.Header;
                    toAminoMsg(message: _121.Header): _121.HeaderAminoMsg;
                    fromProtoMsg(message: _121.HeaderProtoMsg): _121.Header;
                    toProto(message: _121.Header): Uint8Array;
                    toProtoMsg(message: _121.Header): _121.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _121.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.Misbehaviour;
                    fromPartial(object: Partial<_121.Misbehaviour>): _121.Misbehaviour;
                    fromAmino(object: _121.MisbehaviourAmino): _121.Misbehaviour;
                    toAmino(message: _121.Misbehaviour): _121.MisbehaviourAmino;
                    fromAminoMsg(object: _121.MisbehaviourAminoMsg): _121.Misbehaviour;
                    toAminoMsg(message: _121.Misbehaviour): _121.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _121.MisbehaviourProtoMsg): _121.Misbehaviour;
                    toProto(message: _121.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _121.Misbehaviour): _121.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _121.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.SignatureAndData;
                    fromPartial(object: Partial<_121.SignatureAndData>): _121.SignatureAndData;
                    fromAmino(object: _121.SignatureAndDataAmino): _121.SignatureAndData;
                    toAmino(message: _121.SignatureAndData): _121.SignatureAndDataAmino;
                    fromAminoMsg(object: _121.SignatureAndDataAminoMsg): _121.SignatureAndData;
                    toAminoMsg(message: _121.SignatureAndData): _121.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _121.SignatureAndDataProtoMsg): _121.SignatureAndData;
                    toProto(message: _121.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _121.SignatureAndData): _121.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _121.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.TimestampedSignatureData;
                    fromPartial(object: Partial<_121.TimestampedSignatureData>): _121.TimestampedSignatureData;
                    fromAmino(object: _121.TimestampedSignatureDataAmino): _121.TimestampedSignatureData;
                    toAmino(message: _121.TimestampedSignatureData): _121.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _121.TimestampedSignatureDataAminoMsg): _121.TimestampedSignatureData;
                    toAminoMsg(message: _121.TimestampedSignatureData): _121.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _121.TimestampedSignatureDataProtoMsg): _121.TimestampedSignatureData;
                    toProto(message: _121.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _121.TimestampedSignatureData): _121.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _121.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.SignBytes;
                    fromPartial(object: Partial<_121.SignBytes>): _121.SignBytes;
                    fromAmino(object: _121.SignBytesAmino): _121.SignBytes;
                    toAmino(message: _121.SignBytes): _121.SignBytesAmino;
                    fromAminoMsg(object: _121.SignBytesAminoMsg): _121.SignBytes;
                    toAminoMsg(message: _121.SignBytes): _121.SignBytesAminoMsg;
                    fromProtoMsg(message: _121.SignBytesProtoMsg): _121.SignBytes;
                    toProto(message: _121.SignBytes): Uint8Array;
                    toProtoMsg(message: _121.SignBytes): _121.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _121.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.HeaderData;
                    fromPartial(object: Partial<_121.HeaderData>): _121.HeaderData;
                    fromAmino(object: _121.HeaderDataAmino): _121.HeaderData;
                    toAmino(message: _121.HeaderData): _121.HeaderDataAmino;
                    fromAminoMsg(object: _121.HeaderDataAminoMsg): _121.HeaderData;
                    toAminoMsg(message: _121.HeaderData): _121.HeaderDataAminoMsg;
                    fromProtoMsg(message: _121.HeaderDataProtoMsg): _121.HeaderData;
                    toProto(message: _121.HeaderData): Uint8Array;
                    toProtoMsg(message: _121.HeaderData): _121.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _121.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.ClientStateData;
                    fromPartial(object: Partial<_121.ClientStateData>): _121.ClientStateData;
                    fromAmino(object: _121.ClientStateDataAmino): _121.ClientStateData;
                    toAmino(message: _121.ClientStateData): _121.ClientStateDataAmino;
                    fromAminoMsg(object: _121.ClientStateDataAminoMsg): _121.ClientStateData;
                    toAminoMsg(message: _121.ClientStateData): _121.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _121.ClientStateDataProtoMsg): _121.ClientStateData;
                    toProto(message: _121.ClientStateData): Uint8Array;
                    toProtoMsg(message: _121.ClientStateData): _121.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _121.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.ConsensusStateData;
                    fromPartial(object: Partial<_121.ConsensusStateData>): _121.ConsensusStateData;
                    fromAmino(object: _121.ConsensusStateDataAmino): _121.ConsensusStateData;
                    toAmino(message: _121.ConsensusStateData): _121.ConsensusStateDataAmino;
                    fromAminoMsg(object: _121.ConsensusStateDataAminoMsg): _121.ConsensusStateData;
                    toAminoMsg(message: _121.ConsensusStateData): _121.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _121.ConsensusStateDataProtoMsg): _121.ConsensusStateData;
                    toProto(message: _121.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _121.ConsensusStateData): _121.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _121.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.ConnectionStateData;
                    fromPartial(object: Partial<_121.ConnectionStateData>): _121.ConnectionStateData;
                    fromAmino(object: _121.ConnectionStateDataAmino): _121.ConnectionStateData;
                    toAmino(message: _121.ConnectionStateData): _121.ConnectionStateDataAmino;
                    fromAminoMsg(object: _121.ConnectionStateDataAminoMsg): _121.ConnectionStateData;
                    toAminoMsg(message: _121.ConnectionStateData): _121.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _121.ConnectionStateDataProtoMsg): _121.ConnectionStateData;
                    toProto(message: _121.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _121.ConnectionStateData): _121.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _121.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.ChannelStateData;
                    fromPartial(object: Partial<_121.ChannelStateData>): _121.ChannelStateData;
                    fromAmino(object: _121.ChannelStateDataAmino): _121.ChannelStateData;
                    toAmino(message: _121.ChannelStateData): _121.ChannelStateDataAmino;
                    fromAminoMsg(object: _121.ChannelStateDataAminoMsg): _121.ChannelStateData;
                    toAminoMsg(message: _121.ChannelStateData): _121.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _121.ChannelStateDataProtoMsg): _121.ChannelStateData;
                    toProto(message: _121.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _121.ChannelStateData): _121.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _121.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.PacketCommitmentData;
                    fromPartial(object: Partial<_121.PacketCommitmentData>): _121.PacketCommitmentData;
                    fromAmino(object: _121.PacketCommitmentDataAmino): _121.PacketCommitmentData;
                    toAmino(message: _121.PacketCommitmentData): _121.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _121.PacketCommitmentDataAminoMsg): _121.PacketCommitmentData;
                    toAminoMsg(message: _121.PacketCommitmentData): _121.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _121.PacketCommitmentDataProtoMsg): _121.PacketCommitmentData;
                    toProto(message: _121.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _121.PacketCommitmentData): _121.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _121.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.PacketAcknowledgementData;
                    fromPartial(object: Partial<_121.PacketAcknowledgementData>): _121.PacketAcknowledgementData;
                    fromAmino(object: _121.PacketAcknowledgementDataAmino): _121.PacketAcknowledgementData;
                    toAmino(message: _121.PacketAcknowledgementData): _121.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _121.PacketAcknowledgementDataAminoMsg): _121.PacketAcknowledgementData;
                    toAminoMsg(message: _121.PacketAcknowledgementData): _121.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _121.PacketAcknowledgementDataProtoMsg): _121.PacketAcknowledgementData;
                    toProto(message: _121.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _121.PacketAcknowledgementData): _121.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _121.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_121.PacketReceiptAbsenceData>): _121.PacketReceiptAbsenceData;
                    fromAmino(object: _121.PacketReceiptAbsenceDataAmino): _121.PacketReceiptAbsenceData;
                    toAmino(message: _121.PacketReceiptAbsenceData): _121.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _121.PacketReceiptAbsenceDataAminoMsg): _121.PacketReceiptAbsenceData;
                    toAminoMsg(message: _121.PacketReceiptAbsenceData): _121.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _121.PacketReceiptAbsenceDataProtoMsg): _121.PacketReceiptAbsenceData;
                    toProto(message: _121.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _121.PacketReceiptAbsenceData): _121.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _121.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _121.NextSequenceRecvData;
                    fromPartial(object: Partial<_121.NextSequenceRecvData>): _121.NextSequenceRecvData;
                    fromAmino(object: _121.NextSequenceRecvDataAmino): _121.NextSequenceRecvData;
                    toAmino(message: _121.NextSequenceRecvData): _121.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _121.NextSequenceRecvDataAminoMsg): _121.NextSequenceRecvData;
                    toAminoMsg(message: _121.NextSequenceRecvData): _121.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _121.NextSequenceRecvDataProtoMsg): _121.NextSequenceRecvData;
                    toProto(message: _121.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _121.NextSequenceRecvData): _121.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _122.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.ClientState;
                    fromPartial(object: Partial<_122.ClientState>): _122.ClientState;
                    fromAmino(object: _122.ClientStateAmino): _122.ClientState;
                    toAmino(message: _122.ClientState): _122.ClientStateAmino;
                    fromAminoMsg(object: _122.ClientStateAminoMsg): _122.ClientState;
                    toAminoMsg(message: _122.ClientState): _122.ClientStateAminoMsg;
                    fromProtoMsg(message: _122.ClientStateProtoMsg): _122.ClientState;
                    toProto(message: _122.ClientState): Uint8Array;
                    toProtoMsg(message: _122.ClientState): _122.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _122.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.ConsensusState;
                    fromPartial(object: Partial<_122.ConsensusState>): _122.ConsensusState;
                    fromAmino(object: _122.ConsensusStateAmino): _122.ConsensusState;
                    toAmino(message: _122.ConsensusState): _122.ConsensusStateAmino;
                    fromAminoMsg(object: _122.ConsensusStateAminoMsg): _122.ConsensusState;
                    toAminoMsg(message: _122.ConsensusState): _122.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _122.ConsensusStateProtoMsg): _122.ConsensusState;
                    toProto(message: _122.ConsensusState): Uint8Array;
                    toProtoMsg(message: _122.ConsensusState): _122.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _122.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.Misbehaviour;
                    fromPartial(object: Partial<_122.Misbehaviour>): _122.Misbehaviour;
                    fromAmino(object: _122.MisbehaviourAmino): _122.Misbehaviour;
                    toAmino(message: _122.Misbehaviour): _122.MisbehaviourAmino;
                    fromAminoMsg(object: _122.MisbehaviourAminoMsg): _122.Misbehaviour;
                    toAminoMsg(message: _122.Misbehaviour): _122.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _122.MisbehaviourProtoMsg): _122.Misbehaviour;
                    toProto(message: _122.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _122.Misbehaviour): _122.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _122.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.Header;
                    fromPartial(object: Partial<_122.Header>): _122.Header;
                    fromAmino(object: _122.HeaderAmino): _122.Header;
                    toAmino(message: _122.Header): _122.HeaderAmino;
                    fromAminoMsg(object: _122.HeaderAminoMsg): _122.Header;
                    toAminoMsg(message: _122.Header): _122.HeaderAminoMsg;
                    fromProtoMsg(message: _122.HeaderProtoMsg): _122.Header;
                    toProto(message: _122.Header): Uint8Array;
                    toProtoMsg(message: _122.Header): _122.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _122.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _122.Fraction;
                    fromPartial(object: Partial<_122.Fraction>): _122.Fraction;
                    fromAmino(object: _122.FractionAmino): _122.Fraction;
                    toAmino(message: _122.Fraction): _122.FractionAmino;
                    fromAminoMsg(object: _122.FractionAminoMsg): _122.Fraction;
                    toAminoMsg(message: _122.Fraction): _122.FractionAminoMsg;
                    fromProtoMsg(message: _122.FractionProtoMsg): _122.Fraction;
                    toProto(message: _122.Fraction): Uint8Array;
                    toProtoMsg(message: _122.Fraction): _122.FractionProtoMsg;
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
                        v1: _225.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _226.MsgClientImpl;
                    };
                    client: {
                        v1: _227.MsgClientImpl;
                    };
                    connection: {
                        v1: _228.MsgClientImpl;
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
                    transfer: {
                        v1: {
                            denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponse>;
                            denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponse>;
                            params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _108.QueryChannelRequest): Promise<_108.QueryChannelResponse>;
                            channels(request?: _108.QueryChannelsRequest): Promise<_108.QueryChannelsResponse>;
                            connectionChannels(request: _108.QueryConnectionChannelsRequest): Promise<_108.QueryConnectionChannelsResponse>;
                            channelClientState(request: _108.QueryChannelClientStateRequest): Promise<_108.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _108.QueryChannelConsensusStateRequest): Promise<_108.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _108.QueryPacketCommitmentRequest): Promise<_108.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _108.QueryPacketCommitmentsRequest): Promise<_108.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _108.QueryPacketReceiptRequest): Promise<_108.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _108.QueryPacketAcknowledgementRequest): Promise<_108.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _108.QueryPacketAcknowledgementsRequest): Promise<_108.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _108.QueryUnreceivedPacketsRequest): Promise<_108.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _108.QueryUnreceivedAcksRequest): Promise<_108.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _108.QueryNextSequenceReceiveRequest): Promise<_108.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _112.QueryClientStateRequest): Promise<_112.QueryClientStateResponse>;
                            clientStates(request?: _112.QueryClientStatesRequest): Promise<_112.QueryClientStatesResponse>;
                            consensusState(request: _112.QueryConsensusStateRequest): Promise<_112.QueryConsensusStateResponse>;
                            consensusStates(request: _112.QueryConsensusStatesRequest): Promise<_112.QueryConsensusStatesResponse>;
                            clientParams(request?: _112.QueryClientParamsRequest): Promise<_112.QueryClientParamsResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _117.QueryConnectionRequest): Promise<_117.QueryConnectionResponse>;
                            connections(request?: _117.QueryConnectionsRequest): Promise<_117.QueryConnectionsResponse>;
                            clientConnections(request: _117.QueryClientConnectionsRequest): Promise<_117.QueryClientConnectionsResponse>;
                            connectionClientState(request: _117.QueryConnectionClientStateRequest): Promise<_117.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _117.QueryConnectionConsensusStateRequest): Promise<_117.QueryConnectionConsensusStateResponse>;
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
                    transfer: {
                        v1: _217.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _218.LCDQueryClient;
                    };
                    client: {
                        v1: _219.LCDQueryClient;
                    };
                    connection: {
                        v1: _220.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
