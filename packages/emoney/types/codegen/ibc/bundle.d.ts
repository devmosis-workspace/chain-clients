import * as _87 from "./applications/transfer/v1/genesis";
import * as _88 from "./applications/transfer/v1/query";
import * as _89 from "./applications/transfer/v1/transfer";
import * as _90 from "./applications/transfer/v1/tx";
import * as _91 from "./core/channel/v1/channel";
import * as _92 from "./core/channel/v1/genesis";
import * as _93 from "./core/channel/v1/query";
import * as _94 from "./core/channel/v1/tx";
import * as _95 from "./core/client/v1/client";
import * as _96 from "./core/client/v1/genesis";
import * as _97 from "./core/client/v1/query";
import * as _98 from "./core/client/v1/tx";
import * as _99 from "./core/commitment/v1/commitment";
import * as _100 from "./core/connection/v1/connection";
import * as _101 from "./core/connection/v1/genesis";
import * as _102 from "./core/connection/v1/query";
import * as _103 from "./core/connection/v1/tx";
import * as _104 from "./core/types/v1/genesis";
import * as _105 from "./lightclients/localhost/v1/localhost";
import * as _106 from "./lightclients/solomachine/v1/solomachine";
import * as _107 from "./lightclients/tendermint/v1/tendermint";
import * as _201 from "./applications/transfer/v1/query.lcd";
import * as _202 from "./core/channel/v1/query.lcd";
import * as _203 from "./core/client/v1/query.lcd";
import * as _204 from "./core/connection/v1/query.lcd";
import * as _205 from "./applications/transfer/v1/query.rpc.Query";
import * as _206 from "./core/channel/v1/query.rpc.Query";
import * as _207 from "./core/client/v1/query.rpc.Query";
import * as _208 from "./core/connection/v1/query.rpc.Query";
import * as _209 from "./applications/transfer/v1/tx.rpc.msg";
import * as _210 from "./core/channel/v1/tx.rpc.msg";
import * as _211 from "./core/client/v1/tx.rpc.msg";
import * as _212 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _209.MsgClientImpl;
                QueryClientImpl: typeof _205.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _88.QueryDenomTraceRequest): Promise<_88.QueryDenomTraceResponse>;
                    denomTraces(request?: _88.QueryDenomTracesRequest): Promise<_88.QueryDenomTracesResponse>;
                    params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _201.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _90.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _90.MsgTransfer): {
                            typeUrl: string;
                            value: _90.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _90.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _90.MsgTransfer): {
                            typeUrl: string;
                            value: _90.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _90.MsgTransfer) => _90.MsgTransferAmino;
                        fromAmino: (object: _90.MsgTransferAmino) => _90.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _90.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _90.MsgTransfer;
                    fromPartial(object: Partial<_90.MsgTransfer>): _90.MsgTransfer;
                    fromAmino(object: _90.MsgTransferAmino): _90.MsgTransfer;
                    toAmino(message: _90.MsgTransfer): _90.MsgTransferAmino;
                    fromAminoMsg(object: _90.MsgTransferAminoMsg): _90.MsgTransfer;
                    toAminoMsg(message: _90.MsgTransfer): _90.MsgTransferAminoMsg;
                    fromProtoMsg(message: _90.MsgTransferProtoMsg): _90.MsgTransfer;
                    toProto(message: _90.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _90.MsgTransfer): _90.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _90.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _90.MsgTransferResponse;
                    fromPartial(_: Partial<_90.MsgTransferResponse>): _90.MsgTransferResponse;
                    fromAmino(_: _90.MsgTransferResponseAmino): _90.MsgTransferResponse;
                    toAmino(_: _90.MsgTransferResponse): _90.MsgTransferResponseAmino;
                    fromAminoMsg(object: _90.MsgTransferResponseAminoMsg): _90.MsgTransferResponse;
                    toAminoMsg(message: _90.MsgTransferResponse): _90.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _90.MsgTransferResponseProtoMsg): _90.MsgTransferResponse;
                    toProto(message: _90.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _90.MsgTransferResponse): _90.MsgTransferResponseProtoMsg;
                };
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _89.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.FungibleTokenPacketData;
                    fromPartial(object: Partial<_89.FungibleTokenPacketData>): _89.FungibleTokenPacketData;
                    fromAmino(object: _89.FungibleTokenPacketDataAmino): _89.FungibleTokenPacketData;
                    toAmino(message: _89.FungibleTokenPacketData): _89.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _89.FungibleTokenPacketDataAminoMsg): _89.FungibleTokenPacketData;
                    toAminoMsg(message: _89.FungibleTokenPacketData): _89.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _89.FungibleTokenPacketDataProtoMsg): _89.FungibleTokenPacketData;
                    toProto(message: _89.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _89.FungibleTokenPacketData): _89.FungibleTokenPacketDataProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _89.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _89.DenomTrace;
                    fromPartial(object: Partial<_89.DenomTrace>): _89.DenomTrace;
                    fromAmino(object: _89.DenomTraceAmino): _89.DenomTrace;
                    toAmino(message: _89.DenomTrace): _89.DenomTraceAmino;
                    fromAminoMsg(object: _89.DenomTraceAminoMsg): _89.DenomTrace;
                    toAminoMsg(message: _89.DenomTrace): _89.DenomTraceAminoMsg;
                    fromProtoMsg(message: _89.DenomTraceProtoMsg): _89.DenomTrace;
                    toProto(message: _89.DenomTrace): Uint8Array;
                    toProtoMsg(message: _89.DenomTrace): _89.DenomTraceProtoMsg;
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
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_88.QueryDenomTraceRequest>): _88.QueryDenomTraceRequest;
                    fromAmino(object: _88.QueryDenomTraceRequestAmino): _88.QueryDenomTraceRequest;
                    toAmino(message: _88.QueryDenomTraceRequest): _88.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _88.QueryDenomTraceRequestAminoMsg): _88.QueryDenomTraceRequest;
                    toAminoMsg(message: _88.QueryDenomTraceRequest): _88.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryDenomTraceRequestProtoMsg): _88.QueryDenomTraceRequest;
                    toProto(message: _88.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryDenomTraceRequest): _88.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_88.QueryDenomTraceResponse>): _88.QueryDenomTraceResponse;
                    fromAmino(object: _88.QueryDenomTraceResponseAmino): _88.QueryDenomTraceResponse;
                    toAmino(message: _88.QueryDenomTraceResponse): _88.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _88.QueryDenomTraceResponseAminoMsg): _88.QueryDenomTraceResponse;
                    toAminoMsg(message: _88.QueryDenomTraceResponse): _88.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryDenomTraceResponseProtoMsg): _88.QueryDenomTraceResponse;
                    toProto(message: _88.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryDenomTraceResponse): _88.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_88.QueryDenomTracesRequest>): _88.QueryDenomTracesRequest;
                    fromAmino(object: _88.QueryDenomTracesRequestAmino): _88.QueryDenomTracesRequest;
                    toAmino(message: _88.QueryDenomTracesRequest): _88.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _88.QueryDenomTracesRequestAminoMsg): _88.QueryDenomTracesRequest;
                    toAminoMsg(message: _88.QueryDenomTracesRequest): _88.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryDenomTracesRequestProtoMsg): _88.QueryDenomTracesRequest;
                    toProto(message: _88.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryDenomTracesRequest): _88.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_88.QueryDenomTracesResponse>): _88.QueryDenomTracesResponse;
                    fromAmino(object: _88.QueryDenomTracesResponseAmino): _88.QueryDenomTracesResponse;
                    toAmino(message: _88.QueryDenomTracesResponse): _88.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _88.QueryDenomTracesResponseAminoMsg): _88.QueryDenomTracesResponse;
                    toAminoMsg(message: _88.QueryDenomTracesResponse): _88.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryDenomTracesResponseProtoMsg): _88.QueryDenomTracesResponse;
                    toProto(message: _88.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryDenomTracesResponse): _88.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _88.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _88.QueryParamsRequest;
                    fromPartial(_: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
                    fromAmino(_: _88.QueryParamsRequestAmino): _88.QueryParamsRequest;
                    toAmino(_: _88.QueryParamsRequest): _88.QueryParamsRequestAmino;
                    fromAminoMsg(object: _88.QueryParamsRequestAminoMsg): _88.QueryParamsRequest;
                    toAminoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryParamsRequestProtoMsg): _88.QueryParamsRequest;
                    toProto(message: _88.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryParamsRequest): _88.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _88.QueryParamsResponse;
                    fromPartial(object: Partial<_88.QueryParamsResponse>): _88.QueryParamsResponse;
                    fromAmino(object: _88.QueryParamsResponseAmino): _88.QueryParamsResponse;
                    toAmino(message: _88.QueryParamsResponse): _88.QueryParamsResponseAmino;
                    fromAminoMsg(object: _88.QueryParamsResponseAminoMsg): _88.QueryParamsResponse;
                    toAminoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryParamsResponseProtoMsg): _88.QueryParamsResponse;
                    toProto(message: _88.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryParamsResponse): _88.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _87.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _87.GenesisState;
                    fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                    fromAmino(object: _87.GenesisStateAmino): _87.GenesisState;
                    toAmino(message: _87.GenesisState): _87.GenesisStateAmino;
                    fromAminoMsg(object: _87.GenesisStateAminoMsg): _87.GenesisState;
                    toAminoMsg(message: _87.GenesisState): _87.GenesisStateAminoMsg;
                    fromProtoMsg(message: _87.GenesisStateProtoMsg): _87.GenesisState;
                    toProto(message: _87.GenesisState): Uint8Array;
                    toProtoMsg(message: _87.GenesisState): _87.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _210.MsgClientImpl;
                QueryClientImpl: typeof _206.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _93.QueryChannelRequest): Promise<_93.QueryChannelResponse>;
                    channels(request?: _93.QueryChannelsRequest): Promise<_93.QueryChannelsResponse>;
                    connectionChannels(request: _93.QueryConnectionChannelsRequest): Promise<_93.QueryConnectionChannelsResponse>;
                    channelClientState(request: _93.QueryChannelClientStateRequest): Promise<_93.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _93.QueryChannelConsensusStateRequest): Promise<_93.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _93.QueryPacketCommitmentRequest): Promise<_93.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _93.QueryPacketCommitmentsRequest): Promise<_93.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _93.QueryPacketReceiptRequest): Promise<_93.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _93.QueryPacketAcknowledgementRequest): Promise<_93.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _93.QueryPacketAcknowledgementsRequest): Promise<_93.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _93.QueryUnreceivedPacketsRequest): Promise<_93.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _93.QueryUnreceivedAcksRequest): Promise<_93.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _93.QueryNextSequenceReceiveRequest): Promise<_93.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _202.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _94.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _94.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _94.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _94.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _94.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _94.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _94.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _94.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _94.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _94.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _94.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _94.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _94.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _94.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _94.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _94.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _94.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _94.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _94.MsgRecvPacket): {
                            typeUrl: string;
                            value: _94.MsgRecvPacket;
                        };
                        timeout(value: _94.MsgTimeout): {
                            typeUrl: string;
                            value: _94.MsgTimeout;
                        };
                        timeoutOnClose(value: _94.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _94.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _94.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _94.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _94.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _94.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _94.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _94.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _94.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _94.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _94.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _94.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _94.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _94.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _94.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _94.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _94.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _94.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _94.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _94.MsgRecvPacket): {
                            typeUrl: string;
                            value: _94.MsgRecvPacket;
                        };
                        timeout(value: _94.MsgTimeout): {
                            typeUrl: string;
                            value: _94.MsgTimeout;
                        };
                        timeoutOnClose(value: _94.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _94.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _94.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _94.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _94.MsgChannelOpenInit) => _94.MsgChannelOpenInitAmino;
                        fromAmino: (object: _94.MsgChannelOpenInitAmino) => _94.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _94.MsgChannelOpenTry) => _94.MsgChannelOpenTryAmino;
                        fromAmino: (object: _94.MsgChannelOpenTryAmino) => _94.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _94.MsgChannelOpenAck) => _94.MsgChannelOpenAckAmino;
                        fromAmino: (object: _94.MsgChannelOpenAckAmino) => _94.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _94.MsgChannelOpenConfirm) => _94.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _94.MsgChannelOpenConfirmAmino) => _94.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _94.MsgChannelCloseInit) => _94.MsgChannelCloseInitAmino;
                        fromAmino: (object: _94.MsgChannelCloseInitAmino) => _94.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _94.MsgChannelCloseConfirm) => _94.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _94.MsgChannelCloseConfirmAmino) => _94.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _94.MsgRecvPacket) => _94.MsgRecvPacketAmino;
                        fromAmino: (object: _94.MsgRecvPacketAmino) => _94.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _94.MsgTimeout) => _94.MsgTimeoutAmino;
                        fromAmino: (object: _94.MsgTimeoutAmino) => _94.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _94.MsgTimeoutOnClose) => _94.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _94.MsgTimeoutOnCloseAmino) => _94.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _94.MsgAcknowledgement) => _94.MsgAcknowledgementAmino;
                        fromAmino: (object: _94.MsgAcknowledgementAmino) => _94.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _94.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgChannelOpenInit;
                    fromPartial(object: Partial<_94.MsgChannelOpenInit>): _94.MsgChannelOpenInit;
                    fromAmino(object: _94.MsgChannelOpenInitAmino): _94.MsgChannelOpenInit;
                    toAmino(message: _94.MsgChannelOpenInit): _94.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenInitAminoMsg): _94.MsgChannelOpenInit;
                    toAminoMsg(message: _94.MsgChannelOpenInit): _94.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenInitProtoMsg): _94.MsgChannelOpenInit;
                    toProto(message: _94.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenInit): _94.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenInitResponse>): _94.MsgChannelOpenInitResponse;
                    fromAmino(_: _94.MsgChannelOpenInitResponseAmino): _94.MsgChannelOpenInitResponse;
                    toAmino(_: _94.MsgChannelOpenInitResponse): _94.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenInitResponseAminoMsg): _94.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _94.MsgChannelOpenInitResponse): _94.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenInitResponseProtoMsg): _94.MsgChannelOpenInitResponse;
                    toProto(message: _94.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenInitResponse): _94.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _94.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgChannelOpenTry;
                    fromPartial(object: Partial<_94.MsgChannelOpenTry>): _94.MsgChannelOpenTry;
                    fromAmino(object: _94.MsgChannelOpenTryAmino): _94.MsgChannelOpenTry;
                    toAmino(message: _94.MsgChannelOpenTry): _94.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenTryAminoMsg): _94.MsgChannelOpenTry;
                    toAminoMsg(message: _94.MsgChannelOpenTry): _94.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenTryProtoMsg): _94.MsgChannelOpenTry;
                    toProto(message: _94.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenTry): _94.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenTryResponse>): _94.MsgChannelOpenTryResponse;
                    fromAmino(_: _94.MsgChannelOpenTryResponseAmino): _94.MsgChannelOpenTryResponse;
                    toAmino(_: _94.MsgChannelOpenTryResponse): _94.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenTryResponseAminoMsg): _94.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _94.MsgChannelOpenTryResponse): _94.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenTryResponseProtoMsg): _94.MsgChannelOpenTryResponse;
                    toProto(message: _94.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenTryResponse): _94.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _94.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgChannelOpenAck;
                    fromPartial(object: Partial<_94.MsgChannelOpenAck>): _94.MsgChannelOpenAck;
                    fromAmino(object: _94.MsgChannelOpenAckAmino): _94.MsgChannelOpenAck;
                    toAmino(message: _94.MsgChannelOpenAck): _94.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenAckAminoMsg): _94.MsgChannelOpenAck;
                    toAminoMsg(message: _94.MsgChannelOpenAck): _94.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenAckProtoMsg): _94.MsgChannelOpenAck;
                    toProto(message: _94.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenAck): _94.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenAckResponse>): _94.MsgChannelOpenAckResponse;
                    fromAmino(_: _94.MsgChannelOpenAckResponseAmino): _94.MsgChannelOpenAckResponse;
                    toAmino(_: _94.MsgChannelOpenAckResponse): _94.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenAckResponseAminoMsg): _94.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _94.MsgChannelOpenAckResponse): _94.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenAckResponseProtoMsg): _94.MsgChannelOpenAckResponse;
                    toProto(message: _94.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenAckResponse): _94.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _94.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_94.MsgChannelOpenConfirm>): _94.MsgChannelOpenConfirm;
                    fromAmino(object: _94.MsgChannelOpenConfirmAmino): _94.MsgChannelOpenConfirm;
                    toAmino(message: _94.MsgChannelOpenConfirm): _94.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenConfirmAminoMsg): _94.MsgChannelOpenConfirm;
                    toAminoMsg(message: _94.MsgChannelOpenConfirm): _94.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenConfirmProtoMsg): _94.MsgChannelOpenConfirm;
                    toProto(message: _94.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenConfirm): _94.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenConfirmResponse>): _94.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _94.MsgChannelOpenConfirmResponseAmino): _94.MsgChannelOpenConfirmResponse;
                    toAmino(_: _94.MsgChannelOpenConfirmResponse): _94.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _94.MsgChannelOpenConfirmResponseAminoMsg): _94.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _94.MsgChannelOpenConfirmResponse): _94.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelOpenConfirmResponseProtoMsg): _94.MsgChannelOpenConfirmResponse;
                    toProto(message: _94.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelOpenConfirmResponse): _94.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _94.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgChannelCloseInit;
                    fromPartial(object: Partial<_94.MsgChannelCloseInit>): _94.MsgChannelCloseInit;
                    fromAmino(object: _94.MsgChannelCloseInitAmino): _94.MsgChannelCloseInit;
                    toAmino(message: _94.MsgChannelCloseInit): _94.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _94.MsgChannelCloseInitAminoMsg): _94.MsgChannelCloseInit;
                    toAminoMsg(message: _94.MsgChannelCloseInit): _94.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelCloseInitProtoMsg): _94.MsgChannelCloseInit;
                    toProto(message: _94.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelCloseInit): _94.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_94.MsgChannelCloseInitResponse>): _94.MsgChannelCloseInitResponse;
                    fromAmino(_: _94.MsgChannelCloseInitResponseAmino): _94.MsgChannelCloseInitResponse;
                    toAmino(_: _94.MsgChannelCloseInitResponse): _94.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _94.MsgChannelCloseInitResponseAminoMsg): _94.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _94.MsgChannelCloseInitResponse): _94.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelCloseInitResponseProtoMsg): _94.MsgChannelCloseInitResponse;
                    toProto(message: _94.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelCloseInitResponse): _94.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _94.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_94.MsgChannelCloseConfirm>): _94.MsgChannelCloseConfirm;
                    fromAmino(object: _94.MsgChannelCloseConfirmAmino): _94.MsgChannelCloseConfirm;
                    toAmino(message: _94.MsgChannelCloseConfirm): _94.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _94.MsgChannelCloseConfirmAminoMsg): _94.MsgChannelCloseConfirm;
                    toAminoMsg(message: _94.MsgChannelCloseConfirm): _94.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelCloseConfirmProtoMsg): _94.MsgChannelCloseConfirm;
                    toProto(message: _94.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelCloseConfirm): _94.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_94.MsgChannelCloseConfirmResponse>): _94.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _94.MsgChannelCloseConfirmResponseAmino): _94.MsgChannelCloseConfirmResponse;
                    toAmino(_: _94.MsgChannelCloseConfirmResponse): _94.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _94.MsgChannelCloseConfirmResponseAminoMsg): _94.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _94.MsgChannelCloseConfirmResponse): _94.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgChannelCloseConfirmResponseProtoMsg): _94.MsgChannelCloseConfirmResponse;
                    toProto(message: _94.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgChannelCloseConfirmResponse): _94.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _94.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgRecvPacket;
                    fromPartial(object: Partial<_94.MsgRecvPacket>): _94.MsgRecvPacket;
                    fromAmino(object: _94.MsgRecvPacketAmino): _94.MsgRecvPacket;
                    toAmino(message: _94.MsgRecvPacket): _94.MsgRecvPacketAmino;
                    fromAminoMsg(object: _94.MsgRecvPacketAminoMsg): _94.MsgRecvPacket;
                    toAminoMsg(message: _94.MsgRecvPacket): _94.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _94.MsgRecvPacketProtoMsg): _94.MsgRecvPacket;
                    toProto(message: _94.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _94.MsgRecvPacket): _94.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_94.MsgRecvPacketResponse>): _94.MsgRecvPacketResponse;
                    fromAmino(_: _94.MsgRecvPacketResponseAmino): _94.MsgRecvPacketResponse;
                    toAmino(_: _94.MsgRecvPacketResponse): _94.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _94.MsgRecvPacketResponseAminoMsg): _94.MsgRecvPacketResponse;
                    toAminoMsg(message: _94.MsgRecvPacketResponse): _94.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgRecvPacketResponseProtoMsg): _94.MsgRecvPacketResponse;
                    toProto(message: _94.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgRecvPacketResponse): _94.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _94.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgTimeout;
                    fromPartial(object: Partial<_94.MsgTimeout>): _94.MsgTimeout;
                    fromAmino(object: _94.MsgTimeoutAmino): _94.MsgTimeout;
                    toAmino(message: _94.MsgTimeout): _94.MsgTimeoutAmino;
                    fromAminoMsg(object: _94.MsgTimeoutAminoMsg): _94.MsgTimeout;
                    toAminoMsg(message: _94.MsgTimeout): _94.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _94.MsgTimeoutProtoMsg): _94.MsgTimeout;
                    toProto(message: _94.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _94.MsgTimeout): _94.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgTimeoutResponse;
                    fromPartial(_: Partial<_94.MsgTimeoutResponse>): _94.MsgTimeoutResponse;
                    fromAmino(_: _94.MsgTimeoutResponseAmino): _94.MsgTimeoutResponse;
                    toAmino(_: _94.MsgTimeoutResponse): _94.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _94.MsgTimeoutResponseAminoMsg): _94.MsgTimeoutResponse;
                    toAminoMsg(message: _94.MsgTimeoutResponse): _94.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgTimeoutResponseProtoMsg): _94.MsgTimeoutResponse;
                    toProto(message: _94.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgTimeoutResponse): _94.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _94.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_94.MsgTimeoutOnClose>): _94.MsgTimeoutOnClose;
                    fromAmino(object: _94.MsgTimeoutOnCloseAmino): _94.MsgTimeoutOnClose;
                    toAmino(message: _94.MsgTimeoutOnClose): _94.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _94.MsgTimeoutOnCloseAminoMsg): _94.MsgTimeoutOnClose;
                    toAminoMsg(message: _94.MsgTimeoutOnClose): _94.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _94.MsgTimeoutOnCloseProtoMsg): _94.MsgTimeoutOnClose;
                    toProto(message: _94.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _94.MsgTimeoutOnClose): _94.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_94.MsgTimeoutOnCloseResponse>): _94.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _94.MsgTimeoutOnCloseResponseAmino): _94.MsgTimeoutOnCloseResponse;
                    toAmino(_: _94.MsgTimeoutOnCloseResponse): _94.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _94.MsgTimeoutOnCloseResponseAminoMsg): _94.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _94.MsgTimeoutOnCloseResponse): _94.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgTimeoutOnCloseResponseProtoMsg): _94.MsgTimeoutOnCloseResponse;
                    toProto(message: _94.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgTimeoutOnCloseResponse): _94.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _94.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _94.MsgAcknowledgement;
                    fromPartial(object: Partial<_94.MsgAcknowledgement>): _94.MsgAcknowledgement;
                    fromAmino(object: _94.MsgAcknowledgementAmino): _94.MsgAcknowledgement;
                    toAmino(message: _94.MsgAcknowledgement): _94.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _94.MsgAcknowledgementAminoMsg): _94.MsgAcknowledgement;
                    toAminoMsg(message: _94.MsgAcknowledgement): _94.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _94.MsgAcknowledgementProtoMsg): _94.MsgAcknowledgement;
                    toProto(message: _94.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _94.MsgAcknowledgement): _94.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _94.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _94.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_94.MsgAcknowledgementResponse>): _94.MsgAcknowledgementResponse;
                    fromAmino(_: _94.MsgAcknowledgementResponseAmino): _94.MsgAcknowledgementResponse;
                    toAmino(_: _94.MsgAcknowledgementResponse): _94.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _94.MsgAcknowledgementResponseAminoMsg): _94.MsgAcknowledgementResponse;
                    toAminoMsg(message: _94.MsgAcknowledgementResponse): _94.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _94.MsgAcknowledgementResponseProtoMsg): _94.MsgAcknowledgementResponse;
                    toProto(message: _94.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _94.MsgAcknowledgementResponse): _94.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelRequest;
                    fromPartial(object: Partial<_93.QueryChannelRequest>): _93.QueryChannelRequest;
                    fromAmino(object: _93.QueryChannelRequestAmino): _93.QueryChannelRequest;
                    toAmino(message: _93.QueryChannelRequest): _93.QueryChannelRequestAmino;
                    fromAminoMsg(object: _93.QueryChannelRequestAminoMsg): _93.QueryChannelRequest;
                    toAminoMsg(message: _93.QueryChannelRequest): _93.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelRequestProtoMsg): _93.QueryChannelRequest;
                    toProto(message: _93.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelRequest): _93.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelResponse;
                    fromPartial(object: Partial<_93.QueryChannelResponse>): _93.QueryChannelResponse;
                    fromAmino(object: _93.QueryChannelResponseAmino): _93.QueryChannelResponse;
                    toAmino(message: _93.QueryChannelResponse): _93.QueryChannelResponseAmino;
                    fromAminoMsg(object: _93.QueryChannelResponseAminoMsg): _93.QueryChannelResponse;
                    toAminoMsg(message: _93.QueryChannelResponse): _93.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelResponseProtoMsg): _93.QueryChannelResponse;
                    toProto(message: _93.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelResponse): _93.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelsRequest;
                    fromPartial(object: Partial<_93.QueryChannelsRequest>): _93.QueryChannelsRequest;
                    fromAmino(object: _93.QueryChannelsRequestAmino): _93.QueryChannelsRequest;
                    toAmino(message: _93.QueryChannelsRequest): _93.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _93.QueryChannelsRequestAminoMsg): _93.QueryChannelsRequest;
                    toAminoMsg(message: _93.QueryChannelsRequest): _93.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelsRequestProtoMsg): _93.QueryChannelsRequest;
                    toProto(message: _93.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelsRequest): _93.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelsResponse;
                    fromPartial(object: Partial<_93.QueryChannelsResponse>): _93.QueryChannelsResponse;
                    fromAmino(object: _93.QueryChannelsResponseAmino): _93.QueryChannelsResponse;
                    toAmino(message: _93.QueryChannelsResponse): _93.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _93.QueryChannelsResponseAminoMsg): _93.QueryChannelsResponse;
                    toAminoMsg(message: _93.QueryChannelsResponse): _93.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelsResponseProtoMsg): _93.QueryChannelsResponse;
                    toProto(message: _93.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelsResponse): _93.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_93.QueryConnectionChannelsRequest>): _93.QueryConnectionChannelsRequest;
                    fromAmino(object: _93.QueryConnectionChannelsRequestAmino): _93.QueryConnectionChannelsRequest;
                    toAmino(message: _93.QueryConnectionChannelsRequest): _93.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _93.QueryConnectionChannelsRequestAminoMsg): _93.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _93.QueryConnectionChannelsRequest): _93.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryConnectionChannelsRequestProtoMsg): _93.QueryConnectionChannelsRequest;
                    toProto(message: _93.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryConnectionChannelsRequest): _93.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_93.QueryConnectionChannelsResponse>): _93.QueryConnectionChannelsResponse;
                    fromAmino(object: _93.QueryConnectionChannelsResponseAmino): _93.QueryConnectionChannelsResponse;
                    toAmino(message: _93.QueryConnectionChannelsResponse): _93.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _93.QueryConnectionChannelsResponseAminoMsg): _93.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _93.QueryConnectionChannelsResponse): _93.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryConnectionChannelsResponseProtoMsg): _93.QueryConnectionChannelsResponse;
                    toProto(message: _93.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryConnectionChannelsResponse): _93.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_93.QueryChannelClientStateRequest>): _93.QueryChannelClientStateRequest;
                    fromAmino(object: _93.QueryChannelClientStateRequestAmino): _93.QueryChannelClientStateRequest;
                    toAmino(message: _93.QueryChannelClientStateRequest): _93.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _93.QueryChannelClientStateRequestAminoMsg): _93.QueryChannelClientStateRequest;
                    toAminoMsg(message: _93.QueryChannelClientStateRequest): _93.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelClientStateRequestProtoMsg): _93.QueryChannelClientStateRequest;
                    toProto(message: _93.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelClientStateRequest): _93.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_93.QueryChannelClientStateResponse>): _93.QueryChannelClientStateResponse;
                    fromAmino(object: _93.QueryChannelClientStateResponseAmino): _93.QueryChannelClientStateResponse;
                    toAmino(message: _93.QueryChannelClientStateResponse): _93.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _93.QueryChannelClientStateResponseAminoMsg): _93.QueryChannelClientStateResponse;
                    toAminoMsg(message: _93.QueryChannelClientStateResponse): _93.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelClientStateResponseProtoMsg): _93.QueryChannelClientStateResponse;
                    toProto(message: _93.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelClientStateResponse): _93.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_93.QueryChannelConsensusStateRequest>): _93.QueryChannelConsensusStateRequest;
                    fromAmino(object: _93.QueryChannelConsensusStateRequestAmino): _93.QueryChannelConsensusStateRequest;
                    toAmino(message: _93.QueryChannelConsensusStateRequest): _93.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _93.QueryChannelConsensusStateRequestAminoMsg): _93.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _93.QueryChannelConsensusStateRequest): _93.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelConsensusStateRequestProtoMsg): _93.QueryChannelConsensusStateRequest;
                    toProto(message: _93.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelConsensusStateRequest): _93.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_93.QueryChannelConsensusStateResponse>): _93.QueryChannelConsensusStateResponse;
                    fromAmino(object: _93.QueryChannelConsensusStateResponseAmino): _93.QueryChannelConsensusStateResponse;
                    toAmino(message: _93.QueryChannelConsensusStateResponse): _93.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _93.QueryChannelConsensusStateResponseAminoMsg): _93.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _93.QueryChannelConsensusStateResponse): _93.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryChannelConsensusStateResponseProtoMsg): _93.QueryChannelConsensusStateResponse;
                    toProto(message: _93.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryChannelConsensusStateResponse): _93.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentRequest>): _93.QueryPacketCommitmentRequest;
                    fromAmino(object: _93.QueryPacketCommitmentRequestAmino): _93.QueryPacketCommitmentRequest;
                    toAmino(message: _93.QueryPacketCommitmentRequest): _93.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _93.QueryPacketCommitmentRequestAminoMsg): _93.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _93.QueryPacketCommitmentRequest): _93.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketCommitmentRequestProtoMsg): _93.QueryPacketCommitmentRequest;
                    toProto(message: _93.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketCommitmentRequest): _93.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentResponse>): _93.QueryPacketCommitmentResponse;
                    fromAmino(object: _93.QueryPacketCommitmentResponseAmino): _93.QueryPacketCommitmentResponse;
                    toAmino(message: _93.QueryPacketCommitmentResponse): _93.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _93.QueryPacketCommitmentResponseAminoMsg): _93.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _93.QueryPacketCommitmentResponse): _93.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketCommitmentResponseProtoMsg): _93.QueryPacketCommitmentResponse;
                    toProto(message: _93.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketCommitmentResponse): _93.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentsRequest>): _93.QueryPacketCommitmentsRequest;
                    fromAmino(object: _93.QueryPacketCommitmentsRequestAmino): _93.QueryPacketCommitmentsRequest;
                    toAmino(message: _93.QueryPacketCommitmentsRequest): _93.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _93.QueryPacketCommitmentsRequestAminoMsg): _93.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _93.QueryPacketCommitmentsRequest): _93.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketCommitmentsRequestProtoMsg): _93.QueryPacketCommitmentsRequest;
                    toProto(message: _93.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketCommitmentsRequest): _93.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentsResponse>): _93.QueryPacketCommitmentsResponse;
                    fromAmino(object: _93.QueryPacketCommitmentsResponseAmino): _93.QueryPacketCommitmentsResponse;
                    toAmino(message: _93.QueryPacketCommitmentsResponse): _93.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _93.QueryPacketCommitmentsResponseAminoMsg): _93.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _93.QueryPacketCommitmentsResponse): _93.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketCommitmentsResponseProtoMsg): _93.QueryPacketCommitmentsResponse;
                    toProto(message: _93.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketCommitmentsResponse): _93.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_93.QueryPacketReceiptRequest>): _93.QueryPacketReceiptRequest;
                    fromAmino(object: _93.QueryPacketReceiptRequestAmino): _93.QueryPacketReceiptRequest;
                    toAmino(message: _93.QueryPacketReceiptRequest): _93.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _93.QueryPacketReceiptRequestAminoMsg): _93.QueryPacketReceiptRequest;
                    toAminoMsg(message: _93.QueryPacketReceiptRequest): _93.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketReceiptRequestProtoMsg): _93.QueryPacketReceiptRequest;
                    toProto(message: _93.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketReceiptRequest): _93.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_93.QueryPacketReceiptResponse>): _93.QueryPacketReceiptResponse;
                    fromAmino(object: _93.QueryPacketReceiptResponseAmino): _93.QueryPacketReceiptResponse;
                    toAmino(message: _93.QueryPacketReceiptResponse): _93.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _93.QueryPacketReceiptResponseAminoMsg): _93.QueryPacketReceiptResponse;
                    toAminoMsg(message: _93.QueryPacketReceiptResponse): _93.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketReceiptResponseProtoMsg): _93.QueryPacketReceiptResponse;
                    toProto(message: _93.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketReceiptResponse): _93.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementRequest>): _93.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _93.QueryPacketAcknowledgementRequestAmino): _93.QueryPacketAcknowledgementRequest;
                    toAmino(message: _93.QueryPacketAcknowledgementRequest): _93.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _93.QueryPacketAcknowledgementRequestAminoMsg): _93.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _93.QueryPacketAcknowledgementRequest): _93.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketAcknowledgementRequestProtoMsg): _93.QueryPacketAcknowledgementRequest;
                    toProto(message: _93.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketAcknowledgementRequest): _93.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementResponse>): _93.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _93.QueryPacketAcknowledgementResponseAmino): _93.QueryPacketAcknowledgementResponse;
                    toAmino(message: _93.QueryPacketAcknowledgementResponse): _93.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _93.QueryPacketAcknowledgementResponseAminoMsg): _93.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _93.QueryPacketAcknowledgementResponse): _93.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketAcknowledgementResponseProtoMsg): _93.QueryPacketAcknowledgementResponse;
                    toProto(message: _93.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketAcknowledgementResponse): _93.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementsRequest>): _93.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _93.QueryPacketAcknowledgementsRequestAmino): _93.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _93.QueryPacketAcknowledgementsRequest): _93.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _93.QueryPacketAcknowledgementsRequestAminoMsg): _93.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _93.QueryPacketAcknowledgementsRequest): _93.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketAcknowledgementsRequestProtoMsg): _93.QueryPacketAcknowledgementsRequest;
                    toProto(message: _93.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketAcknowledgementsRequest): _93.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementsResponse>): _93.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _93.QueryPacketAcknowledgementsResponseAmino): _93.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _93.QueryPacketAcknowledgementsResponse): _93.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _93.QueryPacketAcknowledgementsResponseAminoMsg): _93.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _93.QueryPacketAcknowledgementsResponse): _93.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryPacketAcknowledgementsResponseProtoMsg): _93.QueryPacketAcknowledgementsResponse;
                    toProto(message: _93.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryPacketAcknowledgementsResponse): _93.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_93.QueryUnreceivedPacketsRequest>): _93.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _93.QueryUnreceivedPacketsRequestAmino): _93.QueryUnreceivedPacketsRequest;
                    toAmino(message: _93.QueryUnreceivedPacketsRequest): _93.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _93.QueryUnreceivedPacketsRequestAminoMsg): _93.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _93.QueryUnreceivedPacketsRequest): _93.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryUnreceivedPacketsRequestProtoMsg): _93.QueryUnreceivedPacketsRequest;
                    toProto(message: _93.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryUnreceivedPacketsRequest): _93.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_93.QueryUnreceivedPacketsResponse>): _93.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _93.QueryUnreceivedPacketsResponseAmino): _93.QueryUnreceivedPacketsResponse;
                    toAmino(message: _93.QueryUnreceivedPacketsResponse): _93.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _93.QueryUnreceivedPacketsResponseAminoMsg): _93.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _93.QueryUnreceivedPacketsResponse): _93.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryUnreceivedPacketsResponseProtoMsg): _93.QueryUnreceivedPacketsResponse;
                    toProto(message: _93.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryUnreceivedPacketsResponse): _93.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_93.QueryUnreceivedAcksRequest>): _93.QueryUnreceivedAcksRequest;
                    fromAmino(object: _93.QueryUnreceivedAcksRequestAmino): _93.QueryUnreceivedAcksRequest;
                    toAmino(message: _93.QueryUnreceivedAcksRequest): _93.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _93.QueryUnreceivedAcksRequestAminoMsg): _93.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _93.QueryUnreceivedAcksRequest): _93.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryUnreceivedAcksRequestProtoMsg): _93.QueryUnreceivedAcksRequest;
                    toProto(message: _93.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryUnreceivedAcksRequest): _93.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_93.QueryUnreceivedAcksResponse>): _93.QueryUnreceivedAcksResponse;
                    fromAmino(object: _93.QueryUnreceivedAcksResponseAmino): _93.QueryUnreceivedAcksResponse;
                    toAmino(message: _93.QueryUnreceivedAcksResponse): _93.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _93.QueryUnreceivedAcksResponseAminoMsg): _93.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _93.QueryUnreceivedAcksResponse): _93.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryUnreceivedAcksResponseProtoMsg): _93.QueryUnreceivedAcksResponse;
                    toProto(message: _93.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryUnreceivedAcksResponse): _93.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _93.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_93.QueryNextSequenceReceiveRequest>): _93.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _93.QueryNextSequenceReceiveRequestAmino): _93.QueryNextSequenceReceiveRequest;
                    toAmino(message: _93.QueryNextSequenceReceiveRequest): _93.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _93.QueryNextSequenceReceiveRequestAminoMsg): _93.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _93.QueryNextSequenceReceiveRequest): _93.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _93.QueryNextSequenceReceiveRequestProtoMsg): _93.QueryNextSequenceReceiveRequest;
                    toProto(message: _93.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _93.QueryNextSequenceReceiveRequest): _93.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _93.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _93.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_93.QueryNextSequenceReceiveResponse>): _93.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _93.QueryNextSequenceReceiveResponseAmino): _93.QueryNextSequenceReceiveResponse;
                    toAmino(message: _93.QueryNextSequenceReceiveResponse): _93.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _93.QueryNextSequenceReceiveResponseAminoMsg): _93.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _93.QueryNextSequenceReceiveResponse): _93.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _93.QueryNextSequenceReceiveResponseProtoMsg): _93.QueryNextSequenceReceiveResponse;
                    toProto(message: _93.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _93.QueryNextSequenceReceiveResponse): _93.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.GenesisState;
                    fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                    fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                    toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                    fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                    toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                    fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                    toProto(message: _92.GenesisState): Uint8Array;
                    toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _92.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _92.PacketSequence;
                    fromPartial(object: Partial<_92.PacketSequence>): _92.PacketSequence;
                    fromAmino(object: _92.PacketSequenceAmino): _92.PacketSequence;
                    toAmino(message: _92.PacketSequence): _92.PacketSequenceAmino;
                    fromAminoMsg(object: _92.PacketSequenceAminoMsg): _92.PacketSequence;
                    toAminoMsg(message: _92.PacketSequence): _92.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _92.PacketSequenceProtoMsg): _92.PacketSequence;
                    toProto(message: _92.PacketSequence): Uint8Array;
                    toProtoMsg(message: _92.PacketSequence): _92.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _91.State;
                stateToJSON(object: _91.State): string;
                orderFromJSON(object: any): _91.Order;
                orderToJSON(object: _91.Order): string;
                State: typeof _91.State;
                StateSDKType: typeof _91.State;
                StateAmino: typeof _91.State;
                Order: typeof _91.Order;
                OrderSDKType: typeof _91.Order;
                OrderAmino: typeof _91.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _91.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Channel;
                    fromPartial(object: Partial<_91.Channel>): _91.Channel;
                    fromAmino(object: _91.ChannelAmino): _91.Channel;
                    toAmino(message: _91.Channel): _91.ChannelAmino;
                    fromAminoMsg(object: _91.ChannelAminoMsg): _91.Channel;
                    toAminoMsg(message: _91.Channel): _91.ChannelAminoMsg;
                    fromProtoMsg(message: _91.ChannelProtoMsg): _91.Channel;
                    toProto(message: _91.Channel): Uint8Array;
                    toProtoMsg(message: _91.Channel): _91.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _91.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.IdentifiedChannel;
                    fromPartial(object: Partial<_91.IdentifiedChannel>): _91.IdentifiedChannel;
                    fromAmino(object: _91.IdentifiedChannelAmino): _91.IdentifiedChannel;
                    toAmino(message: _91.IdentifiedChannel): _91.IdentifiedChannelAmino;
                    fromAminoMsg(object: _91.IdentifiedChannelAminoMsg): _91.IdentifiedChannel;
                    toAminoMsg(message: _91.IdentifiedChannel): _91.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _91.IdentifiedChannelProtoMsg): _91.IdentifiedChannel;
                    toProto(message: _91.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _91.IdentifiedChannel): _91.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _91.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Counterparty;
                    fromPartial(object: Partial<_91.Counterparty>): _91.Counterparty;
                    fromAmino(object: _91.CounterpartyAmino): _91.Counterparty;
                    toAmino(message: _91.Counterparty): _91.CounterpartyAmino;
                    fromAminoMsg(object: _91.CounterpartyAminoMsg): _91.Counterparty;
                    toAminoMsg(message: _91.Counterparty): _91.CounterpartyAminoMsg;
                    fromProtoMsg(message: _91.CounterpartyProtoMsg): _91.Counterparty;
                    toProto(message: _91.Counterparty): Uint8Array;
                    toProtoMsg(message: _91.Counterparty): _91.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _91.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Packet;
                    fromPartial(object: Partial<_91.Packet>): _91.Packet;
                    fromAmino(object: _91.PacketAmino): _91.Packet;
                    toAmino(message: _91.Packet): _91.PacketAmino;
                    fromAminoMsg(object: _91.PacketAminoMsg): _91.Packet;
                    toAminoMsg(message: _91.Packet): _91.PacketAminoMsg;
                    fromProtoMsg(message: _91.PacketProtoMsg): _91.Packet;
                    toProto(message: _91.Packet): Uint8Array;
                    toProtoMsg(message: _91.Packet): _91.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _91.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.PacketState;
                    fromPartial(object: Partial<_91.PacketState>): _91.PacketState;
                    fromAmino(object: _91.PacketStateAmino): _91.PacketState;
                    toAmino(message: _91.PacketState): _91.PacketStateAmino;
                    fromAminoMsg(object: _91.PacketStateAminoMsg): _91.PacketState;
                    toAminoMsg(message: _91.PacketState): _91.PacketStateAminoMsg;
                    fromProtoMsg(message: _91.PacketStateProtoMsg): _91.PacketState;
                    toProto(message: _91.PacketState): Uint8Array;
                    toProtoMsg(message: _91.PacketState): _91.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _91.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _91.Acknowledgement;
                    fromPartial(object: Partial<_91.Acknowledgement>): _91.Acknowledgement;
                    fromAmino(object: _91.AcknowledgementAmino): _91.Acknowledgement;
                    toAmino(message: _91.Acknowledgement): _91.AcknowledgementAmino;
                    fromAminoMsg(object: _91.AcknowledgementAminoMsg): _91.Acknowledgement;
                    toAminoMsg(message: _91.Acknowledgement): _91.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _91.AcknowledgementProtoMsg): _91.Acknowledgement;
                    toProto(message: _91.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _91.Acknowledgement): _91.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _211.MsgClientImpl;
                QueryClientImpl: typeof _207.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _97.QueryClientStateRequest): Promise<_97.QueryClientStateResponse>;
                    clientStates(request?: _97.QueryClientStatesRequest): Promise<_97.QueryClientStatesResponse>;
                    consensusState(request: _97.QueryConsensusStateRequest): Promise<_97.QueryConsensusStateResponse>;
                    consensusStates(request: _97.QueryConsensusStatesRequest): Promise<_97.QueryConsensusStatesResponse>;
                    clientParams(request?: _97.QueryClientParamsRequest): Promise<_97.QueryClientParamsResponse>;
                };
                LCDQueryClient: typeof _203.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _98.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _98.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _98.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _98.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _98.MsgCreateClient): {
                            typeUrl: string;
                            value: _98.MsgCreateClient;
                        };
                        updateClient(value: _98.MsgUpdateClient): {
                            typeUrl: string;
                            value: _98.MsgUpdateClient;
                        };
                        upgradeClient(value: _98.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _98.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _98.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _98.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _98.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _98.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _98.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _98.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _98.MsgCreateClient): {
                            typeUrl: string;
                            value: _98.MsgCreateClient;
                        };
                        updateClient(value: _98.MsgUpdateClient): {
                            typeUrl: string;
                            value: _98.MsgUpdateClient;
                        };
                        upgradeClient(value: _98.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _98.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _98.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _98.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _98.MsgCreateClient) => _98.MsgCreateClientAmino;
                        fromAmino: (object: _98.MsgCreateClientAmino) => _98.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _98.MsgUpdateClient) => _98.MsgUpdateClientAmino;
                        fromAmino: (object: _98.MsgUpdateClientAmino) => _98.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _98.MsgUpgradeClient) => _98.MsgUpgradeClientAmino;
                        fromAmino: (object: _98.MsgUpgradeClientAmino) => _98.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _98.MsgSubmitMisbehaviour) => _98.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _98.MsgSubmitMisbehaviourAmino) => _98.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _98.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.MsgCreateClient;
                    fromPartial(object: Partial<_98.MsgCreateClient>): _98.MsgCreateClient;
                    fromAmino(object: _98.MsgCreateClientAmino): _98.MsgCreateClient;
                    toAmino(message: _98.MsgCreateClient): _98.MsgCreateClientAmino;
                    fromAminoMsg(object: _98.MsgCreateClientAminoMsg): _98.MsgCreateClient;
                    toAminoMsg(message: _98.MsgCreateClient): _98.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _98.MsgCreateClientProtoMsg): _98.MsgCreateClient;
                    toProto(message: _98.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _98.MsgCreateClient): _98.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _98.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _98.MsgCreateClientResponse;
                    fromPartial(_: Partial<_98.MsgCreateClientResponse>): _98.MsgCreateClientResponse;
                    fromAmino(_: _98.MsgCreateClientResponseAmino): _98.MsgCreateClientResponse;
                    toAmino(_: _98.MsgCreateClientResponse): _98.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _98.MsgCreateClientResponseAminoMsg): _98.MsgCreateClientResponse;
                    toAminoMsg(message: _98.MsgCreateClientResponse): _98.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgCreateClientResponseProtoMsg): _98.MsgCreateClientResponse;
                    toProto(message: _98.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgCreateClientResponse): _98.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _98.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.MsgUpdateClient;
                    fromPartial(object: Partial<_98.MsgUpdateClient>): _98.MsgUpdateClient;
                    fromAmino(object: _98.MsgUpdateClientAmino): _98.MsgUpdateClient;
                    toAmino(message: _98.MsgUpdateClient): _98.MsgUpdateClientAmino;
                    fromAminoMsg(object: _98.MsgUpdateClientAminoMsg): _98.MsgUpdateClient;
                    toAminoMsg(message: _98.MsgUpdateClient): _98.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _98.MsgUpdateClientProtoMsg): _98.MsgUpdateClient;
                    toProto(message: _98.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _98.MsgUpdateClient): _98.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _98.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _98.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_98.MsgUpdateClientResponse>): _98.MsgUpdateClientResponse;
                    fromAmino(_: _98.MsgUpdateClientResponseAmino): _98.MsgUpdateClientResponse;
                    toAmino(_: _98.MsgUpdateClientResponse): _98.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _98.MsgUpdateClientResponseAminoMsg): _98.MsgUpdateClientResponse;
                    toAminoMsg(message: _98.MsgUpdateClientResponse): _98.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgUpdateClientResponseProtoMsg): _98.MsgUpdateClientResponse;
                    toProto(message: _98.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgUpdateClientResponse): _98.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _98.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.MsgUpgradeClient;
                    fromPartial(object: Partial<_98.MsgUpgradeClient>): _98.MsgUpgradeClient;
                    fromAmino(object: _98.MsgUpgradeClientAmino): _98.MsgUpgradeClient;
                    toAmino(message: _98.MsgUpgradeClient): _98.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _98.MsgUpgradeClientAminoMsg): _98.MsgUpgradeClient;
                    toAminoMsg(message: _98.MsgUpgradeClient): _98.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _98.MsgUpgradeClientProtoMsg): _98.MsgUpgradeClient;
                    toProto(message: _98.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _98.MsgUpgradeClient): _98.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _98.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _98.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_98.MsgUpgradeClientResponse>): _98.MsgUpgradeClientResponse;
                    fromAmino(_: _98.MsgUpgradeClientResponseAmino): _98.MsgUpgradeClientResponse;
                    toAmino(_: _98.MsgUpgradeClientResponse): _98.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _98.MsgUpgradeClientResponseAminoMsg): _98.MsgUpgradeClientResponse;
                    toAminoMsg(message: _98.MsgUpgradeClientResponse): _98.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgUpgradeClientResponseProtoMsg): _98.MsgUpgradeClientResponse;
                    toProto(message: _98.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgUpgradeClientResponse): _98.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _98.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _98.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_98.MsgSubmitMisbehaviour>): _98.MsgSubmitMisbehaviour;
                    fromAmino(object: _98.MsgSubmitMisbehaviourAmino): _98.MsgSubmitMisbehaviour;
                    toAmino(message: _98.MsgSubmitMisbehaviour): _98.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _98.MsgSubmitMisbehaviourAminoMsg): _98.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _98.MsgSubmitMisbehaviour): _98.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _98.MsgSubmitMisbehaviourProtoMsg): _98.MsgSubmitMisbehaviour;
                    toProto(message: _98.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _98.MsgSubmitMisbehaviour): _98.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _98.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _98.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_98.MsgSubmitMisbehaviourResponse>): _98.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _98.MsgSubmitMisbehaviourResponseAmino): _98.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _98.MsgSubmitMisbehaviourResponse): _98.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _98.MsgSubmitMisbehaviourResponseAminoMsg): _98.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _98.MsgSubmitMisbehaviourResponse): _98.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _98.MsgSubmitMisbehaviourResponseProtoMsg): _98.MsgSubmitMisbehaviourResponse;
                    toProto(message: _98.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _98.MsgSubmitMisbehaviourResponse): _98.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _97.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryClientStateRequest;
                    fromPartial(object: Partial<_97.QueryClientStateRequest>): _97.QueryClientStateRequest;
                    fromAmino(object: _97.QueryClientStateRequestAmino): _97.QueryClientStateRequest;
                    toAmino(message: _97.QueryClientStateRequest): _97.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _97.QueryClientStateRequestAminoMsg): _97.QueryClientStateRequest;
                    toAminoMsg(message: _97.QueryClientStateRequest): _97.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryClientStateRequestProtoMsg): _97.QueryClientStateRequest;
                    toProto(message: _97.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryClientStateRequest): _97.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _97.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryClientStateResponse;
                    fromPartial(object: Partial<_97.QueryClientStateResponse>): _97.QueryClientStateResponse;
                    fromAmino(object: _97.QueryClientStateResponseAmino): _97.QueryClientStateResponse;
                    toAmino(message: _97.QueryClientStateResponse): _97.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _97.QueryClientStateResponseAminoMsg): _97.QueryClientStateResponse;
                    toAminoMsg(message: _97.QueryClientStateResponse): _97.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryClientStateResponseProtoMsg): _97.QueryClientStateResponse;
                    toProto(message: _97.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryClientStateResponse): _97.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _97.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryClientStatesRequest;
                    fromPartial(object: Partial<_97.QueryClientStatesRequest>): _97.QueryClientStatesRequest;
                    fromAmino(object: _97.QueryClientStatesRequestAmino): _97.QueryClientStatesRequest;
                    toAmino(message: _97.QueryClientStatesRequest): _97.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _97.QueryClientStatesRequestAminoMsg): _97.QueryClientStatesRequest;
                    toAminoMsg(message: _97.QueryClientStatesRequest): _97.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryClientStatesRequestProtoMsg): _97.QueryClientStatesRequest;
                    toProto(message: _97.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryClientStatesRequest): _97.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _97.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryClientStatesResponse;
                    fromPartial(object: Partial<_97.QueryClientStatesResponse>): _97.QueryClientStatesResponse;
                    fromAmino(object: _97.QueryClientStatesResponseAmino): _97.QueryClientStatesResponse;
                    toAmino(message: _97.QueryClientStatesResponse): _97.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _97.QueryClientStatesResponseAminoMsg): _97.QueryClientStatesResponse;
                    toAminoMsg(message: _97.QueryClientStatesResponse): _97.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryClientStatesResponseProtoMsg): _97.QueryClientStatesResponse;
                    toProto(message: _97.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryClientStatesResponse): _97.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _97.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_97.QueryConsensusStateRequest>): _97.QueryConsensusStateRequest;
                    fromAmino(object: _97.QueryConsensusStateRequestAmino): _97.QueryConsensusStateRequest;
                    toAmino(message: _97.QueryConsensusStateRequest): _97.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _97.QueryConsensusStateRequestAminoMsg): _97.QueryConsensusStateRequest;
                    toAminoMsg(message: _97.QueryConsensusStateRequest): _97.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryConsensusStateRequestProtoMsg): _97.QueryConsensusStateRequest;
                    toProto(message: _97.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryConsensusStateRequest): _97.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _97.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_97.QueryConsensusStateResponse>): _97.QueryConsensusStateResponse;
                    fromAmino(object: _97.QueryConsensusStateResponseAmino): _97.QueryConsensusStateResponse;
                    toAmino(message: _97.QueryConsensusStateResponse): _97.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _97.QueryConsensusStateResponseAminoMsg): _97.QueryConsensusStateResponse;
                    toAminoMsg(message: _97.QueryConsensusStateResponse): _97.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryConsensusStateResponseProtoMsg): _97.QueryConsensusStateResponse;
                    toProto(message: _97.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryConsensusStateResponse): _97.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _97.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_97.QueryConsensusStatesRequest>): _97.QueryConsensusStatesRequest;
                    fromAmino(object: _97.QueryConsensusStatesRequestAmino): _97.QueryConsensusStatesRequest;
                    toAmino(message: _97.QueryConsensusStatesRequest): _97.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _97.QueryConsensusStatesRequestAminoMsg): _97.QueryConsensusStatesRequest;
                    toAminoMsg(message: _97.QueryConsensusStatesRequest): _97.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryConsensusStatesRequestProtoMsg): _97.QueryConsensusStatesRequest;
                    toProto(message: _97.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryConsensusStatesRequest): _97.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _97.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_97.QueryConsensusStatesResponse>): _97.QueryConsensusStatesResponse;
                    fromAmino(object: _97.QueryConsensusStatesResponseAmino): _97.QueryConsensusStatesResponse;
                    toAmino(message: _97.QueryConsensusStatesResponse): _97.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _97.QueryConsensusStatesResponseAminoMsg): _97.QueryConsensusStatesResponse;
                    toAminoMsg(message: _97.QueryConsensusStatesResponse): _97.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryConsensusStatesResponseProtoMsg): _97.QueryConsensusStatesResponse;
                    toProto(message: _97.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryConsensusStatesResponse): _97.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _97.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _97.QueryClientParamsRequest;
                    fromPartial(_: Partial<_97.QueryClientParamsRequest>): _97.QueryClientParamsRequest;
                    fromAmino(_: _97.QueryClientParamsRequestAmino): _97.QueryClientParamsRequest;
                    toAmino(_: _97.QueryClientParamsRequest): _97.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _97.QueryClientParamsRequestAminoMsg): _97.QueryClientParamsRequest;
                    toAminoMsg(message: _97.QueryClientParamsRequest): _97.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _97.QueryClientParamsRequestProtoMsg): _97.QueryClientParamsRequest;
                    toProto(message: _97.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _97.QueryClientParamsRequest): _97.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _97.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _97.QueryClientParamsResponse;
                    fromPartial(object: Partial<_97.QueryClientParamsResponse>): _97.QueryClientParamsResponse;
                    fromAmino(object: _97.QueryClientParamsResponseAmino): _97.QueryClientParamsResponse;
                    toAmino(message: _97.QueryClientParamsResponse): _97.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _97.QueryClientParamsResponseAminoMsg): _97.QueryClientParamsResponse;
                    toAminoMsg(message: _97.QueryClientParamsResponse): _97.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _97.QueryClientParamsResponseProtoMsg): _97.QueryClientParamsResponse;
                    toProto(message: _97.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _97.QueryClientParamsResponse): _97.QueryClientParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _96.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.GenesisState;
                    fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
                    fromAmino(object: _96.GenesisStateAmino): _96.GenesisState;
                    toAmino(message: _96.GenesisState): _96.GenesisStateAmino;
                    fromAminoMsg(object: _96.GenesisStateAminoMsg): _96.GenesisState;
                    toAminoMsg(message: _96.GenesisState): _96.GenesisStateAminoMsg;
                    fromProtoMsg(message: _96.GenesisStateProtoMsg): _96.GenesisState;
                    toProto(message: _96.GenesisState): Uint8Array;
                    toProtoMsg(message: _96.GenesisState): _96.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _96.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.GenesisMetadata;
                    fromPartial(object: Partial<_96.GenesisMetadata>): _96.GenesisMetadata;
                    fromAmino(object: _96.GenesisMetadataAmino): _96.GenesisMetadata;
                    toAmino(message: _96.GenesisMetadata): _96.GenesisMetadataAmino;
                    fromAminoMsg(object: _96.GenesisMetadataAminoMsg): _96.GenesisMetadata;
                    toAminoMsg(message: _96.GenesisMetadata): _96.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _96.GenesisMetadataProtoMsg): _96.GenesisMetadata;
                    toProto(message: _96.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _96.GenesisMetadata): _96.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _96.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _96.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_96.IdentifiedGenesisMetadata>): _96.IdentifiedGenesisMetadata;
                    fromAmino(object: _96.IdentifiedGenesisMetadataAmino): _96.IdentifiedGenesisMetadata;
                    toAmino(message: _96.IdentifiedGenesisMetadata): _96.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _96.IdentifiedGenesisMetadataAminoMsg): _96.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _96.IdentifiedGenesisMetadata): _96.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _96.IdentifiedGenesisMetadataProtoMsg): _96.IdentifiedGenesisMetadata;
                    toProto(message: _96.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _96.IdentifiedGenesisMetadata): _96.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _95.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.IdentifiedClientState;
                    fromPartial(object: Partial<_95.IdentifiedClientState>): _95.IdentifiedClientState;
                    fromAmino(object: _95.IdentifiedClientStateAmino): _95.IdentifiedClientState;
                    toAmino(message: _95.IdentifiedClientState): _95.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _95.IdentifiedClientStateAminoMsg): _95.IdentifiedClientState;
                    toAminoMsg(message: _95.IdentifiedClientState): _95.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _95.IdentifiedClientStateProtoMsg): _95.IdentifiedClientState;
                    toProto(message: _95.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _95.IdentifiedClientState): _95.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _95.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_95.ConsensusStateWithHeight>): _95.ConsensusStateWithHeight;
                    fromAmino(object: _95.ConsensusStateWithHeightAmino): _95.ConsensusStateWithHeight;
                    toAmino(message: _95.ConsensusStateWithHeight): _95.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _95.ConsensusStateWithHeightAminoMsg): _95.ConsensusStateWithHeight;
                    toAminoMsg(message: _95.ConsensusStateWithHeight): _95.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _95.ConsensusStateWithHeightProtoMsg): _95.ConsensusStateWithHeight;
                    toProto(message: _95.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _95.ConsensusStateWithHeight): _95.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _95.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.ClientConsensusStates;
                    fromPartial(object: Partial<_95.ClientConsensusStates>): _95.ClientConsensusStates;
                    fromAmino(object: _95.ClientConsensusStatesAmino): _95.ClientConsensusStates;
                    toAmino(message: _95.ClientConsensusStates): _95.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _95.ClientConsensusStatesAminoMsg): _95.ClientConsensusStates;
                    toAminoMsg(message: _95.ClientConsensusStates): _95.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _95.ClientConsensusStatesProtoMsg): _95.ClientConsensusStates;
                    toProto(message: _95.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _95.ClientConsensusStates): _95.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _95.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.ClientUpdateProposal;
                    fromPartial(object: Partial<_95.ClientUpdateProposal>): _95.ClientUpdateProposal;
                    fromAmino(object: _95.ClientUpdateProposalAmino): _95.ClientUpdateProposal;
                    toAmino(message: _95.ClientUpdateProposal): _95.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _95.ClientUpdateProposalAminoMsg): _95.ClientUpdateProposal;
                    toAminoMsg(message: _95.ClientUpdateProposal): _95.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _95.ClientUpdateProposalProtoMsg): _95.ClientUpdateProposal;
                    toProto(message: _95.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _95.ClientUpdateProposal): _95.ClientUpdateProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _95.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.Height;
                    fromPartial(object: Partial<_95.Height>): _95.Height;
                    fromAmino(object: _95.HeightAmino): _95.Height;
                    toAmino(message: _95.Height): _95.HeightAmino;
                    fromAminoMsg(object: _95.HeightAminoMsg): _95.Height;
                    toAminoMsg(message: _95.Height): _95.HeightAminoMsg;
                    fromProtoMsg(message: _95.HeightProtoMsg): _95.Height;
                    toProto(message: _95.Height): Uint8Array;
                    toProtoMsg(message: _95.Height): _95.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _95.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _95.Params;
                    fromPartial(object: Partial<_95.Params>): _95.Params;
                    fromAmino(object: _95.ParamsAmino): _95.Params;
                    toAmino(message: _95.Params): _95.ParamsAmino;
                    fromAminoMsg(object: _95.ParamsAminoMsg): _95.Params;
                    toAminoMsg(message: _95.Params): _95.ParamsAminoMsg;
                    fromProtoMsg(message: _95.ParamsProtoMsg): _95.Params;
                    toProto(message: _95.Params): Uint8Array;
                    toProtoMsg(message: _95.Params): _95.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _99.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.MerkleRoot;
                    fromPartial(object: Partial<_99.MerkleRoot>): _99.MerkleRoot;
                    fromAmino(object: _99.MerkleRootAmino): _99.MerkleRoot;
                    toAmino(message: _99.MerkleRoot): _99.MerkleRootAmino;
                    fromAminoMsg(object: _99.MerkleRootAminoMsg): _99.MerkleRoot;
                    toAminoMsg(message: _99.MerkleRoot): _99.MerkleRootAminoMsg;
                    fromProtoMsg(message: _99.MerkleRootProtoMsg): _99.MerkleRoot;
                    toProto(message: _99.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _99.MerkleRoot): _99.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _99.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.MerklePrefix;
                    fromPartial(object: Partial<_99.MerklePrefix>): _99.MerklePrefix;
                    fromAmino(object: _99.MerklePrefixAmino): _99.MerklePrefix;
                    toAmino(message: _99.MerklePrefix): _99.MerklePrefixAmino;
                    fromAminoMsg(object: _99.MerklePrefixAminoMsg): _99.MerklePrefix;
                    toAminoMsg(message: _99.MerklePrefix): _99.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _99.MerklePrefixProtoMsg): _99.MerklePrefix;
                    toProto(message: _99.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _99.MerklePrefix): _99.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _99.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.MerklePath;
                    fromPartial(object: Partial<_99.MerklePath>): _99.MerklePath;
                    fromAmino(object: _99.MerklePathAmino): _99.MerklePath;
                    toAmino(message: _99.MerklePath): _99.MerklePathAmino;
                    fromAminoMsg(object: _99.MerklePathAminoMsg): _99.MerklePath;
                    toAminoMsg(message: _99.MerklePath): _99.MerklePathAminoMsg;
                    fromProtoMsg(message: _99.MerklePathProtoMsg): _99.MerklePath;
                    toProto(message: _99.MerklePath): Uint8Array;
                    toProtoMsg(message: _99.MerklePath): _99.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _99.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _99.MerkleProof;
                    fromPartial(object: Partial<_99.MerkleProof>): _99.MerkleProof;
                    fromAmino(object: _99.MerkleProofAmino): _99.MerkleProof;
                    toAmino(message: _99.MerkleProof): _99.MerkleProofAmino;
                    fromAminoMsg(object: _99.MerkleProofAminoMsg): _99.MerkleProof;
                    toAminoMsg(message: _99.MerkleProof): _99.MerkleProofAminoMsg;
                    fromProtoMsg(message: _99.MerkleProofProtoMsg): _99.MerkleProof;
                    toProto(message: _99.MerkleProof): Uint8Array;
                    toProtoMsg(message: _99.MerkleProof): _99.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _212.MsgClientImpl;
                QueryClientImpl: typeof _208.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _102.QueryConnectionRequest): Promise<_102.QueryConnectionResponse>;
                    connections(request?: _102.QueryConnectionsRequest): Promise<_102.QueryConnectionsResponse>;
                    clientConnections(request: _102.QueryClientConnectionsRequest): Promise<_102.QueryClientConnectionsResponse>;
                    connectionClientState(request: _102.QueryConnectionClientStateRequest): Promise<_102.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _102.QueryConnectionConsensusStateRequest): Promise<_102.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _204.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _103.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _103.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _103.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _103.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _103.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _103.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _103.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _103.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _103.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _103.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _103.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _103.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _103.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _103.MsgConnectionOpenInit) => _103.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _103.MsgConnectionOpenInitAmino) => _103.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _103.MsgConnectionOpenTry) => _103.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _103.MsgConnectionOpenTryAmino) => _103.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _103.MsgConnectionOpenAck) => _103.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _103.MsgConnectionOpenAckAmino) => _103.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _103.MsgConnectionOpenConfirm) => _103.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _103.MsgConnectionOpenConfirmAmino) => _103.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _103.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_103.MsgConnectionOpenInit>): _103.MsgConnectionOpenInit;
                    fromAmino(object: _103.MsgConnectionOpenInitAmino): _103.MsgConnectionOpenInit;
                    toAmino(message: _103.MsgConnectionOpenInit): _103.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenInitAminoMsg): _103.MsgConnectionOpenInit;
                    toAminoMsg(message: _103.MsgConnectionOpenInit): _103.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenInitProtoMsg): _103.MsgConnectionOpenInit;
                    toProto(message: _103.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenInit): _103.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _103.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _103.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenInitResponse>): _103.MsgConnectionOpenInitResponse;
                    fromAmino(_: _103.MsgConnectionOpenInitResponseAmino): _103.MsgConnectionOpenInitResponse;
                    toAmino(_: _103.MsgConnectionOpenInitResponse): _103.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenInitResponseAminoMsg): _103.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _103.MsgConnectionOpenInitResponse): _103.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenInitResponseProtoMsg): _103.MsgConnectionOpenInitResponse;
                    toProto(message: _103.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenInitResponse): _103.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _103.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_103.MsgConnectionOpenTry>): _103.MsgConnectionOpenTry;
                    fromAmino(object: _103.MsgConnectionOpenTryAmino): _103.MsgConnectionOpenTry;
                    toAmino(message: _103.MsgConnectionOpenTry): _103.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenTryAminoMsg): _103.MsgConnectionOpenTry;
                    toAminoMsg(message: _103.MsgConnectionOpenTry): _103.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenTryProtoMsg): _103.MsgConnectionOpenTry;
                    toProto(message: _103.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenTry): _103.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _103.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _103.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenTryResponse>): _103.MsgConnectionOpenTryResponse;
                    fromAmino(_: _103.MsgConnectionOpenTryResponseAmino): _103.MsgConnectionOpenTryResponse;
                    toAmino(_: _103.MsgConnectionOpenTryResponse): _103.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenTryResponseAminoMsg): _103.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _103.MsgConnectionOpenTryResponse): _103.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenTryResponseProtoMsg): _103.MsgConnectionOpenTryResponse;
                    toProto(message: _103.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenTryResponse): _103.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _103.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_103.MsgConnectionOpenAck>): _103.MsgConnectionOpenAck;
                    fromAmino(object: _103.MsgConnectionOpenAckAmino): _103.MsgConnectionOpenAck;
                    toAmino(message: _103.MsgConnectionOpenAck): _103.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenAckAminoMsg): _103.MsgConnectionOpenAck;
                    toAminoMsg(message: _103.MsgConnectionOpenAck): _103.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenAckProtoMsg): _103.MsgConnectionOpenAck;
                    toProto(message: _103.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenAck): _103.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _103.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _103.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenAckResponse>): _103.MsgConnectionOpenAckResponse;
                    fromAmino(_: _103.MsgConnectionOpenAckResponseAmino): _103.MsgConnectionOpenAckResponse;
                    toAmino(_: _103.MsgConnectionOpenAckResponse): _103.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenAckResponseAminoMsg): _103.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _103.MsgConnectionOpenAckResponse): _103.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenAckResponseProtoMsg): _103.MsgConnectionOpenAckResponse;
                    toProto(message: _103.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenAckResponse): _103.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _103.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _103.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_103.MsgConnectionOpenConfirm>): _103.MsgConnectionOpenConfirm;
                    fromAmino(object: _103.MsgConnectionOpenConfirmAmino): _103.MsgConnectionOpenConfirm;
                    toAmino(message: _103.MsgConnectionOpenConfirm): _103.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenConfirmAminoMsg): _103.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _103.MsgConnectionOpenConfirm): _103.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenConfirmProtoMsg): _103.MsgConnectionOpenConfirm;
                    toProto(message: _103.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenConfirm): _103.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _103.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _103.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenConfirmResponse>): _103.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _103.MsgConnectionOpenConfirmResponseAmino): _103.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _103.MsgConnectionOpenConfirmResponse): _103.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _103.MsgConnectionOpenConfirmResponseAminoMsg): _103.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _103.MsgConnectionOpenConfirmResponse): _103.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _103.MsgConnectionOpenConfirmResponseProtoMsg): _103.MsgConnectionOpenConfirmResponse;
                    toProto(message: _103.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _103.MsgConnectionOpenConfirmResponse): _103.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionRequest;
                    fromPartial(object: Partial<_102.QueryConnectionRequest>): _102.QueryConnectionRequest;
                    fromAmino(object: _102.QueryConnectionRequestAmino): _102.QueryConnectionRequest;
                    toAmino(message: _102.QueryConnectionRequest): _102.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _102.QueryConnectionRequestAminoMsg): _102.QueryConnectionRequest;
                    toAminoMsg(message: _102.QueryConnectionRequest): _102.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionRequestProtoMsg): _102.QueryConnectionRequest;
                    toProto(message: _102.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionRequest): _102.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionResponse;
                    fromPartial(object: Partial<_102.QueryConnectionResponse>): _102.QueryConnectionResponse;
                    fromAmino(object: _102.QueryConnectionResponseAmino): _102.QueryConnectionResponse;
                    toAmino(message: _102.QueryConnectionResponse): _102.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _102.QueryConnectionResponseAminoMsg): _102.QueryConnectionResponse;
                    toAminoMsg(message: _102.QueryConnectionResponse): _102.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionResponseProtoMsg): _102.QueryConnectionResponse;
                    toProto(message: _102.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionResponse): _102.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionsRequest;
                    fromPartial(object: Partial<_102.QueryConnectionsRequest>): _102.QueryConnectionsRequest;
                    fromAmino(object: _102.QueryConnectionsRequestAmino): _102.QueryConnectionsRequest;
                    toAmino(message: _102.QueryConnectionsRequest): _102.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _102.QueryConnectionsRequestAminoMsg): _102.QueryConnectionsRequest;
                    toAminoMsg(message: _102.QueryConnectionsRequest): _102.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionsRequestProtoMsg): _102.QueryConnectionsRequest;
                    toProto(message: _102.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionsRequest): _102.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionsResponse;
                    fromPartial(object: Partial<_102.QueryConnectionsResponse>): _102.QueryConnectionsResponse;
                    fromAmino(object: _102.QueryConnectionsResponseAmino): _102.QueryConnectionsResponse;
                    toAmino(message: _102.QueryConnectionsResponse): _102.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _102.QueryConnectionsResponseAminoMsg): _102.QueryConnectionsResponse;
                    toAminoMsg(message: _102.QueryConnectionsResponse): _102.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionsResponseProtoMsg): _102.QueryConnectionsResponse;
                    toProto(message: _102.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionsResponse): _102.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _102.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_102.QueryClientConnectionsRequest>): _102.QueryClientConnectionsRequest;
                    fromAmino(object: _102.QueryClientConnectionsRequestAmino): _102.QueryClientConnectionsRequest;
                    toAmino(message: _102.QueryClientConnectionsRequest): _102.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _102.QueryClientConnectionsRequestAminoMsg): _102.QueryClientConnectionsRequest;
                    toAminoMsg(message: _102.QueryClientConnectionsRequest): _102.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _102.QueryClientConnectionsRequestProtoMsg): _102.QueryClientConnectionsRequest;
                    toProto(message: _102.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _102.QueryClientConnectionsRequest): _102.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _102.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_102.QueryClientConnectionsResponse>): _102.QueryClientConnectionsResponse;
                    fromAmino(object: _102.QueryClientConnectionsResponseAmino): _102.QueryClientConnectionsResponse;
                    toAmino(message: _102.QueryClientConnectionsResponse): _102.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _102.QueryClientConnectionsResponseAminoMsg): _102.QueryClientConnectionsResponse;
                    toAminoMsg(message: _102.QueryClientConnectionsResponse): _102.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _102.QueryClientConnectionsResponseProtoMsg): _102.QueryClientConnectionsResponse;
                    toProto(message: _102.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _102.QueryClientConnectionsResponse): _102.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_102.QueryConnectionClientStateRequest>): _102.QueryConnectionClientStateRequest;
                    fromAmino(object: _102.QueryConnectionClientStateRequestAmino): _102.QueryConnectionClientStateRequest;
                    toAmino(message: _102.QueryConnectionClientStateRequest): _102.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _102.QueryConnectionClientStateRequestAminoMsg): _102.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _102.QueryConnectionClientStateRequest): _102.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionClientStateRequestProtoMsg): _102.QueryConnectionClientStateRequest;
                    toProto(message: _102.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionClientStateRequest): _102.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_102.QueryConnectionClientStateResponse>): _102.QueryConnectionClientStateResponse;
                    fromAmino(object: _102.QueryConnectionClientStateResponseAmino): _102.QueryConnectionClientStateResponse;
                    toAmino(message: _102.QueryConnectionClientStateResponse): _102.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _102.QueryConnectionClientStateResponseAminoMsg): _102.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _102.QueryConnectionClientStateResponse): _102.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionClientStateResponseProtoMsg): _102.QueryConnectionClientStateResponse;
                    toProto(message: _102.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionClientStateResponse): _102.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_102.QueryConnectionConsensusStateRequest>): _102.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _102.QueryConnectionConsensusStateRequestAmino): _102.QueryConnectionConsensusStateRequest;
                    toAmino(message: _102.QueryConnectionConsensusStateRequest): _102.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _102.QueryConnectionConsensusStateRequestAminoMsg): _102.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _102.QueryConnectionConsensusStateRequest): _102.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionConsensusStateRequestProtoMsg): _102.QueryConnectionConsensusStateRequest;
                    toProto(message: _102.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionConsensusStateRequest): _102.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _102.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _102.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_102.QueryConnectionConsensusStateResponse>): _102.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _102.QueryConnectionConsensusStateResponseAmino): _102.QueryConnectionConsensusStateResponse;
                    toAmino(message: _102.QueryConnectionConsensusStateResponse): _102.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _102.QueryConnectionConsensusStateResponseAminoMsg): _102.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _102.QueryConnectionConsensusStateResponse): _102.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _102.QueryConnectionConsensusStateResponseProtoMsg): _102.QueryConnectionConsensusStateResponse;
                    toProto(message: _102.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _102.QueryConnectionConsensusStateResponse): _102.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _101.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _101.GenesisState;
                    fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                    fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                    toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                    fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                    toAminoMsg(message: _101.GenesisState): _101.GenesisStateAminoMsg;
                    fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                    toProto(message: _101.GenesisState): Uint8Array;
                    toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _100.State;
                stateToJSON(object: _100.State): string;
                State: typeof _100.State;
                StateSDKType: typeof _100.State;
                StateAmino: typeof _100.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _100.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ConnectionEnd;
                    fromPartial(object: Partial<_100.ConnectionEnd>): _100.ConnectionEnd;
                    fromAmino(object: _100.ConnectionEndAmino): _100.ConnectionEnd;
                    toAmino(message: _100.ConnectionEnd): _100.ConnectionEndAmino;
                    fromAminoMsg(object: _100.ConnectionEndAminoMsg): _100.ConnectionEnd;
                    toAminoMsg(message: _100.ConnectionEnd): _100.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _100.ConnectionEndProtoMsg): _100.ConnectionEnd;
                    toProto(message: _100.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _100.ConnectionEnd): _100.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _100.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.IdentifiedConnection;
                    fromPartial(object: Partial<_100.IdentifiedConnection>): _100.IdentifiedConnection;
                    fromAmino(object: _100.IdentifiedConnectionAmino): _100.IdentifiedConnection;
                    toAmino(message: _100.IdentifiedConnection): _100.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _100.IdentifiedConnectionAminoMsg): _100.IdentifiedConnection;
                    toAminoMsg(message: _100.IdentifiedConnection): _100.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _100.IdentifiedConnectionProtoMsg): _100.IdentifiedConnection;
                    toProto(message: _100.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _100.IdentifiedConnection): _100.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _100.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.Counterparty;
                    fromPartial(object: Partial<_100.Counterparty>): _100.Counterparty;
                    fromAmino(object: _100.CounterpartyAmino): _100.Counterparty;
                    toAmino(message: _100.Counterparty): _100.CounterpartyAmino;
                    fromAminoMsg(object: _100.CounterpartyAminoMsg): _100.Counterparty;
                    toAminoMsg(message: _100.Counterparty): _100.CounterpartyAminoMsg;
                    fromProtoMsg(message: _100.CounterpartyProtoMsg): _100.Counterparty;
                    toProto(message: _100.Counterparty): Uint8Array;
                    toProtoMsg(message: _100.Counterparty): _100.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _100.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ClientPaths;
                    fromPartial(object: Partial<_100.ClientPaths>): _100.ClientPaths;
                    fromAmino(object: _100.ClientPathsAmino): _100.ClientPaths;
                    toAmino(message: _100.ClientPaths): _100.ClientPathsAmino;
                    fromAminoMsg(object: _100.ClientPathsAminoMsg): _100.ClientPaths;
                    toAminoMsg(message: _100.ClientPaths): _100.ClientPathsAminoMsg;
                    fromProtoMsg(message: _100.ClientPathsProtoMsg): _100.ClientPaths;
                    toProto(message: _100.ClientPaths): Uint8Array;
                    toProtoMsg(message: _100.ClientPaths): _100.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _100.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.ConnectionPaths;
                    fromPartial(object: Partial<_100.ConnectionPaths>): _100.ConnectionPaths;
                    fromAmino(object: _100.ConnectionPathsAmino): _100.ConnectionPaths;
                    toAmino(message: _100.ConnectionPaths): _100.ConnectionPathsAmino;
                    fromAminoMsg(object: _100.ConnectionPathsAminoMsg): _100.ConnectionPaths;
                    toAminoMsg(message: _100.ConnectionPaths): _100.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _100.ConnectionPathsProtoMsg): _100.ConnectionPaths;
                    toProto(message: _100.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _100.ConnectionPaths): _100.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _100.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _100.Version;
                    fromPartial(object: Partial<_100.Version>): _100.Version;
                    fromAmino(object: _100.VersionAmino): _100.Version;
                    toAmino(message: _100.Version): _100.VersionAmino;
                    fromAminoMsg(object: _100.VersionAminoMsg): _100.Version;
                    toAminoMsg(message: _100.Version): _100.VersionAminoMsg;
                    fromProtoMsg(message: _100.VersionProtoMsg): _100.Version;
                    toProto(message: _100.Version): Uint8Array;
                    toProtoMsg(message: _100.Version): _100.VersionProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _104.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _104.GenesisState;
                    fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                    fromAmino(object: _104.GenesisStateAmino): _104.GenesisState;
                    toAmino(message: _104.GenesisState): _104.GenesisStateAmino;
                    fromAminoMsg(object: _104.GenesisStateAminoMsg): _104.GenesisState;
                    toAminoMsg(message: _104.GenesisState): _104.GenesisStateAminoMsg;
                    fromProtoMsg(message: _104.GenesisStateProtoMsg): _104.GenesisState;
                    toProto(message: _104.GenesisState): Uint8Array;
                    toProtoMsg(message: _104.GenesisState): _104.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _105.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _105.ClientState;
                    fromPartial(object: Partial<_105.ClientState>): _105.ClientState;
                    fromAmino(object: _105.ClientStateAmino): _105.ClientState;
                    toAmino(message: _105.ClientState): _105.ClientStateAmino;
                    fromAminoMsg(object: _105.ClientStateAminoMsg): _105.ClientState;
                    toAminoMsg(message: _105.ClientState): _105.ClientStateAminoMsg;
                    fromProtoMsg(message: _105.ClientStateProtoMsg): _105.ClientState;
                    toProto(message: _105.ClientState): Uint8Array;
                    toProtoMsg(message: _105.ClientState): _105.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _106.DataType;
                dataTypeToJSON(object: _106.DataType): string;
                DataType: typeof _106.DataType;
                DataTypeSDKType: typeof _106.DataType;
                DataTypeAmino: typeof _106.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _106.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ClientState;
                    fromPartial(object: Partial<_106.ClientState>): _106.ClientState;
                    fromAmino(object: _106.ClientStateAmino): _106.ClientState;
                    toAmino(message: _106.ClientState): _106.ClientStateAmino;
                    fromAminoMsg(object: _106.ClientStateAminoMsg): _106.ClientState;
                    toAminoMsg(message: _106.ClientState): _106.ClientStateAminoMsg;
                    fromProtoMsg(message: _106.ClientStateProtoMsg): _106.ClientState;
                    toProto(message: _106.ClientState): Uint8Array;
                    toProtoMsg(message: _106.ClientState): _106.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _106.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ConsensusState;
                    fromPartial(object: Partial<_106.ConsensusState>): _106.ConsensusState;
                    fromAmino(object: _106.ConsensusStateAmino): _106.ConsensusState;
                    toAmino(message: _106.ConsensusState): _106.ConsensusStateAmino;
                    fromAminoMsg(object: _106.ConsensusStateAminoMsg): _106.ConsensusState;
                    toAminoMsg(message: _106.ConsensusState): _106.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _106.ConsensusStateProtoMsg): _106.ConsensusState;
                    toProto(message: _106.ConsensusState): Uint8Array;
                    toProtoMsg(message: _106.ConsensusState): _106.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _106.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Header;
                    fromPartial(object: Partial<_106.Header>): _106.Header;
                    fromAmino(object: _106.HeaderAmino): _106.Header;
                    toAmino(message: _106.Header): _106.HeaderAmino;
                    fromAminoMsg(object: _106.HeaderAminoMsg): _106.Header;
                    toAminoMsg(message: _106.Header): _106.HeaderAminoMsg;
                    fromProtoMsg(message: _106.HeaderProtoMsg): _106.Header;
                    toProto(message: _106.Header): Uint8Array;
                    toProtoMsg(message: _106.Header): _106.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _106.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.Misbehaviour;
                    fromPartial(object: Partial<_106.Misbehaviour>): _106.Misbehaviour;
                    fromAmino(object: _106.MisbehaviourAmino): _106.Misbehaviour;
                    toAmino(message: _106.Misbehaviour): _106.MisbehaviourAmino;
                    fromAminoMsg(object: _106.MisbehaviourAminoMsg): _106.Misbehaviour;
                    toAminoMsg(message: _106.Misbehaviour): _106.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _106.MisbehaviourProtoMsg): _106.Misbehaviour;
                    toProto(message: _106.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _106.Misbehaviour): _106.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _106.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SignatureAndData;
                    fromPartial(object: Partial<_106.SignatureAndData>): _106.SignatureAndData;
                    fromAmino(object: _106.SignatureAndDataAmino): _106.SignatureAndData;
                    toAmino(message: _106.SignatureAndData): _106.SignatureAndDataAmino;
                    fromAminoMsg(object: _106.SignatureAndDataAminoMsg): _106.SignatureAndData;
                    toAminoMsg(message: _106.SignatureAndData): _106.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _106.SignatureAndDataProtoMsg): _106.SignatureAndData;
                    toProto(message: _106.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _106.SignatureAndData): _106.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _106.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.TimestampedSignatureData;
                    fromPartial(object: Partial<_106.TimestampedSignatureData>): _106.TimestampedSignatureData;
                    fromAmino(object: _106.TimestampedSignatureDataAmino): _106.TimestampedSignatureData;
                    toAmino(message: _106.TimestampedSignatureData): _106.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _106.TimestampedSignatureDataAminoMsg): _106.TimestampedSignatureData;
                    toAminoMsg(message: _106.TimestampedSignatureData): _106.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _106.TimestampedSignatureDataProtoMsg): _106.TimestampedSignatureData;
                    toProto(message: _106.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _106.TimestampedSignatureData): _106.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _106.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.SignBytes;
                    fromPartial(object: Partial<_106.SignBytes>): _106.SignBytes;
                    fromAmino(object: _106.SignBytesAmino): _106.SignBytes;
                    toAmino(message: _106.SignBytes): _106.SignBytesAmino;
                    fromAminoMsg(object: _106.SignBytesAminoMsg): _106.SignBytes;
                    toAminoMsg(message: _106.SignBytes): _106.SignBytesAminoMsg;
                    fromProtoMsg(message: _106.SignBytesProtoMsg): _106.SignBytes;
                    toProto(message: _106.SignBytes): Uint8Array;
                    toProtoMsg(message: _106.SignBytes): _106.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _106.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.HeaderData;
                    fromPartial(object: Partial<_106.HeaderData>): _106.HeaderData;
                    fromAmino(object: _106.HeaderDataAmino): _106.HeaderData;
                    toAmino(message: _106.HeaderData): _106.HeaderDataAmino;
                    fromAminoMsg(object: _106.HeaderDataAminoMsg): _106.HeaderData;
                    toAminoMsg(message: _106.HeaderData): _106.HeaderDataAminoMsg;
                    fromProtoMsg(message: _106.HeaderDataProtoMsg): _106.HeaderData;
                    toProto(message: _106.HeaderData): Uint8Array;
                    toProtoMsg(message: _106.HeaderData): _106.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _106.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ClientStateData;
                    fromPartial(object: Partial<_106.ClientStateData>): _106.ClientStateData;
                    fromAmino(object: _106.ClientStateDataAmino): _106.ClientStateData;
                    toAmino(message: _106.ClientStateData): _106.ClientStateDataAmino;
                    fromAminoMsg(object: _106.ClientStateDataAminoMsg): _106.ClientStateData;
                    toAminoMsg(message: _106.ClientStateData): _106.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _106.ClientStateDataProtoMsg): _106.ClientStateData;
                    toProto(message: _106.ClientStateData): Uint8Array;
                    toProtoMsg(message: _106.ClientStateData): _106.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _106.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ConsensusStateData;
                    fromPartial(object: Partial<_106.ConsensusStateData>): _106.ConsensusStateData;
                    fromAmino(object: _106.ConsensusStateDataAmino): _106.ConsensusStateData;
                    toAmino(message: _106.ConsensusStateData): _106.ConsensusStateDataAmino;
                    fromAminoMsg(object: _106.ConsensusStateDataAminoMsg): _106.ConsensusStateData;
                    toAminoMsg(message: _106.ConsensusStateData): _106.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _106.ConsensusStateDataProtoMsg): _106.ConsensusStateData;
                    toProto(message: _106.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _106.ConsensusStateData): _106.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _106.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ConnectionStateData;
                    fromPartial(object: Partial<_106.ConnectionStateData>): _106.ConnectionStateData;
                    fromAmino(object: _106.ConnectionStateDataAmino): _106.ConnectionStateData;
                    toAmino(message: _106.ConnectionStateData): _106.ConnectionStateDataAmino;
                    fromAminoMsg(object: _106.ConnectionStateDataAminoMsg): _106.ConnectionStateData;
                    toAminoMsg(message: _106.ConnectionStateData): _106.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _106.ConnectionStateDataProtoMsg): _106.ConnectionStateData;
                    toProto(message: _106.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _106.ConnectionStateData): _106.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _106.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.ChannelStateData;
                    fromPartial(object: Partial<_106.ChannelStateData>): _106.ChannelStateData;
                    fromAmino(object: _106.ChannelStateDataAmino): _106.ChannelStateData;
                    toAmino(message: _106.ChannelStateData): _106.ChannelStateDataAmino;
                    fromAminoMsg(object: _106.ChannelStateDataAminoMsg): _106.ChannelStateData;
                    toAminoMsg(message: _106.ChannelStateData): _106.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _106.ChannelStateDataProtoMsg): _106.ChannelStateData;
                    toProto(message: _106.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _106.ChannelStateData): _106.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _106.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.PacketCommitmentData;
                    fromPartial(object: Partial<_106.PacketCommitmentData>): _106.PacketCommitmentData;
                    fromAmino(object: _106.PacketCommitmentDataAmino): _106.PacketCommitmentData;
                    toAmino(message: _106.PacketCommitmentData): _106.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _106.PacketCommitmentDataAminoMsg): _106.PacketCommitmentData;
                    toAminoMsg(message: _106.PacketCommitmentData): _106.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _106.PacketCommitmentDataProtoMsg): _106.PacketCommitmentData;
                    toProto(message: _106.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _106.PacketCommitmentData): _106.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _106.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.PacketAcknowledgementData;
                    fromPartial(object: Partial<_106.PacketAcknowledgementData>): _106.PacketAcknowledgementData;
                    fromAmino(object: _106.PacketAcknowledgementDataAmino): _106.PacketAcknowledgementData;
                    toAmino(message: _106.PacketAcknowledgementData): _106.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _106.PacketAcknowledgementDataAminoMsg): _106.PacketAcknowledgementData;
                    toAminoMsg(message: _106.PacketAcknowledgementData): _106.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _106.PacketAcknowledgementDataProtoMsg): _106.PacketAcknowledgementData;
                    toProto(message: _106.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _106.PacketAcknowledgementData): _106.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _106.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_106.PacketReceiptAbsenceData>): _106.PacketReceiptAbsenceData;
                    fromAmino(object: _106.PacketReceiptAbsenceDataAmino): _106.PacketReceiptAbsenceData;
                    toAmino(message: _106.PacketReceiptAbsenceData): _106.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _106.PacketReceiptAbsenceDataAminoMsg): _106.PacketReceiptAbsenceData;
                    toAminoMsg(message: _106.PacketReceiptAbsenceData): _106.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _106.PacketReceiptAbsenceDataProtoMsg): _106.PacketReceiptAbsenceData;
                    toProto(message: _106.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _106.PacketReceiptAbsenceData): _106.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _106.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _106.NextSequenceRecvData;
                    fromPartial(object: Partial<_106.NextSequenceRecvData>): _106.NextSequenceRecvData;
                    fromAmino(object: _106.NextSequenceRecvDataAmino): _106.NextSequenceRecvData;
                    toAmino(message: _106.NextSequenceRecvData): _106.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _106.NextSequenceRecvDataAminoMsg): _106.NextSequenceRecvData;
                    toAminoMsg(message: _106.NextSequenceRecvData): _106.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _106.NextSequenceRecvDataProtoMsg): _106.NextSequenceRecvData;
                    toProto(message: _106.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _106.NextSequenceRecvData): _106.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _107.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.ClientState;
                    fromPartial(object: Partial<_107.ClientState>): _107.ClientState;
                    fromAmino(object: _107.ClientStateAmino): _107.ClientState;
                    toAmino(message: _107.ClientState): _107.ClientStateAmino;
                    fromAminoMsg(object: _107.ClientStateAminoMsg): _107.ClientState;
                    toAminoMsg(message: _107.ClientState): _107.ClientStateAminoMsg;
                    fromProtoMsg(message: _107.ClientStateProtoMsg): _107.ClientState;
                    toProto(message: _107.ClientState): Uint8Array;
                    toProtoMsg(message: _107.ClientState): _107.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _107.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.ConsensusState;
                    fromPartial(object: Partial<_107.ConsensusState>): _107.ConsensusState;
                    fromAmino(object: _107.ConsensusStateAmino): _107.ConsensusState;
                    toAmino(message: _107.ConsensusState): _107.ConsensusStateAmino;
                    fromAminoMsg(object: _107.ConsensusStateAminoMsg): _107.ConsensusState;
                    toAminoMsg(message: _107.ConsensusState): _107.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _107.ConsensusStateProtoMsg): _107.ConsensusState;
                    toProto(message: _107.ConsensusState): Uint8Array;
                    toProtoMsg(message: _107.ConsensusState): _107.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _107.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.Misbehaviour;
                    fromPartial(object: Partial<_107.Misbehaviour>): _107.Misbehaviour;
                    fromAmino(object: _107.MisbehaviourAmino): _107.Misbehaviour;
                    toAmino(message: _107.Misbehaviour): _107.MisbehaviourAmino;
                    fromAminoMsg(object: _107.MisbehaviourAminoMsg): _107.Misbehaviour;
                    toAminoMsg(message: _107.Misbehaviour): _107.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _107.MisbehaviourProtoMsg): _107.Misbehaviour;
                    toProto(message: _107.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _107.Misbehaviour): _107.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _107.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.Header;
                    fromPartial(object: Partial<_107.Header>): _107.Header;
                    fromAmino(object: _107.HeaderAmino): _107.Header;
                    toAmino(message: _107.Header): _107.HeaderAmino;
                    fromAminoMsg(object: _107.HeaderAminoMsg): _107.Header;
                    toAminoMsg(message: _107.Header): _107.HeaderAminoMsg;
                    fromProtoMsg(message: _107.HeaderProtoMsg): _107.Header;
                    toProto(message: _107.Header): Uint8Array;
                    toProtoMsg(message: _107.Header): _107.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _107.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _107.Fraction;
                    fromPartial(object: Partial<_107.Fraction>): _107.Fraction;
                    fromAmino(object: _107.FractionAmino): _107.Fraction;
                    toAmino(message: _107.Fraction): _107.FractionAmino;
                    fromAminoMsg(object: _107.FractionAminoMsg): _107.Fraction;
                    toAminoMsg(message: _107.Fraction): _107.FractionAminoMsg;
                    fromProtoMsg(message: _107.FractionProtoMsg): _107.Fraction;
                    toProto(message: _107.Fraction): Uint8Array;
                    toProtoMsg(message: _107.Fraction): _107.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
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
                        v1: _209.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _210.MsgClientImpl;
                    };
                    client: {
                        v1: _211.MsgClientImpl;
                    };
                    connection: {
                        v1: _212.MsgClientImpl;
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
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
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
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _88.QueryDenomTraceRequest): Promise<_88.QueryDenomTraceResponse>;
                            denomTraces(request?: _88.QueryDenomTracesRequest): Promise<_88.QueryDenomTracesResponse>;
                            params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _93.QueryChannelRequest): Promise<_93.QueryChannelResponse>;
                            channels(request?: _93.QueryChannelsRequest): Promise<_93.QueryChannelsResponse>;
                            connectionChannels(request: _93.QueryConnectionChannelsRequest): Promise<_93.QueryConnectionChannelsResponse>;
                            channelClientState(request: _93.QueryChannelClientStateRequest): Promise<_93.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _93.QueryChannelConsensusStateRequest): Promise<_93.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _93.QueryPacketCommitmentRequest): Promise<_93.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _93.QueryPacketCommitmentsRequest): Promise<_93.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _93.QueryPacketReceiptRequest): Promise<_93.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _93.QueryPacketAcknowledgementRequest): Promise<_93.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _93.QueryPacketAcknowledgementsRequest): Promise<_93.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _93.QueryUnreceivedPacketsRequest): Promise<_93.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _93.QueryUnreceivedAcksRequest): Promise<_93.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _93.QueryNextSequenceReceiveRequest): Promise<_93.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _97.QueryClientStateRequest): Promise<_97.QueryClientStateResponse>;
                            clientStates(request?: _97.QueryClientStatesRequest): Promise<_97.QueryClientStatesResponse>;
                            consensusState(request: _97.QueryConsensusStateRequest): Promise<_97.QueryConsensusStateResponse>;
                            consensusStates(request: _97.QueryConsensusStatesRequest): Promise<_97.QueryConsensusStatesResponse>;
                            clientParams(request?: _97.QueryClientParamsRequest): Promise<_97.QueryClientParamsResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _102.QueryConnectionRequest): Promise<_102.QueryConnectionResponse>;
                            connections(request?: _102.QueryConnectionsRequest): Promise<_102.QueryConnectionsResponse>;
                            clientConnections(request: _102.QueryClientConnectionsRequest): Promise<_102.QueryClientConnectionsResponse>;
                            connectionClientState(request: _102.QueryConnectionClientStateRequest): Promise<_102.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _102.QueryConnectionConsensusStateRequest): Promise<_102.QueryConnectionConsensusStateResponse>;
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
                        v1: _201.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _202.LCDQueryClient;
                    };
                    client: {
                        v1: _203.LCDQueryClient;
                    };
                    connection: {
                        v1: _204.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
