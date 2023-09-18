import * as _147 from "./applications/transfer/v1/genesis";
import * as _148 from "./applications/transfer/v1/query";
import * as _149 from "./applications/transfer/v1/transfer";
import * as _150 from "./applications/transfer/v1/tx";
import * as _151 from "./applications/transfer/v2/packet";
import * as _152 from "./core/channel/v1/channel";
import * as _153 from "./core/channel/v1/genesis";
import * as _154 from "./core/channel/v1/query";
import * as _155 from "./core/channel/v1/tx";
import * as _156 from "./core/client/v1/client";
import * as _157 from "./core/client/v1/genesis";
import * as _158 from "./core/client/v1/query";
import * as _159 from "./core/client/v1/tx";
import * as _160 from "./core/commitment/v1/commitment";
import * as _161 from "./core/connection/v1/connection";
import * as _162 from "./core/connection/v1/genesis";
import * as _163 from "./core/connection/v1/query";
import * as _164 from "./core/connection/v1/tx";
import * as _165 from "./core/types/v1/genesis";
import * as _166 from "./lightclients/localhost/v1/localhost";
import * as _167 from "./lightclients/solomachine/v1/solomachine";
import * as _168 from "./lightclients/solomachine/v2/solomachine";
import * as _169 from "./lightclients/tendermint/v1/tendermint";
import * as _255 from "./applications/transfer/v1/query.lcd";
import * as _256 from "./core/channel/v1/query.lcd";
import * as _257 from "./core/client/v1/query.lcd";
import * as _258 from "./core/connection/v1/query.lcd";
import * as _259 from "./applications/transfer/v1/query.rpc.Query";
import * as _260 from "./core/channel/v1/query.rpc.Query";
import * as _261 from "./core/client/v1/query.rpc.Query";
import * as _262 from "./core/connection/v1/query.rpc.Query";
import * as _263 from "./applications/transfer/v1/tx.rpc.msg";
import * as _264 from "./core/channel/v1/tx.rpc.msg";
import * as _265 from "./core/client/v1/tx.rpc.msg";
import * as _266 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _263.MsgClientImpl;
                QueryClientImpl: typeof _259.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _148.QueryDenomTraceRequest): Promise<_148.QueryDenomTraceResponse>;
                    denomTraces(request?: _148.QueryDenomTracesRequest): Promise<_148.QueryDenomTracesResponse>;
                    params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                    denomHash(request: _148.QueryDenomHashRequest): Promise<_148.QueryDenomHashResponse>;
                    escrowAddress(request: _148.QueryEscrowAddressRequest): Promise<_148.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _255.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _150.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _150.MsgTransfer): {
                            typeUrl: string;
                            value: _150.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _150.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _150.MsgTransfer): {
                            typeUrl: string;
                            value: _150.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _150.MsgTransfer) => _150.MsgTransferAmino;
                        fromAmino: (object: _150.MsgTransferAmino) => _150.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _150.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.MsgTransfer;
                    fromPartial(object: Partial<_150.MsgTransfer>): _150.MsgTransfer;
                    fromAmino(object: _150.MsgTransferAmino): _150.MsgTransfer;
                    toAmino(message: _150.MsgTransfer): _150.MsgTransferAmino;
                    fromAminoMsg(object: _150.MsgTransferAminoMsg): _150.MsgTransfer;
                    toAminoMsg(message: _150.MsgTransfer): _150.MsgTransferAminoMsg;
                    fromProtoMsg(message: _150.MsgTransferProtoMsg): _150.MsgTransfer;
                    toProto(message: _150.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _150.MsgTransfer): _150.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _150.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _150.MsgTransferResponse;
                    fromPartial(object: Partial<_150.MsgTransferResponse>): _150.MsgTransferResponse;
                    fromAmino(object: _150.MsgTransferResponseAmino): _150.MsgTransferResponse;
                    toAmino(message: _150.MsgTransferResponse): _150.MsgTransferResponseAmino;
                    fromAminoMsg(object: _150.MsgTransferResponseAminoMsg): _150.MsgTransferResponse;
                    toAminoMsg(message: _150.MsgTransferResponse): _150.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _150.MsgTransferResponseProtoMsg): _150.MsgTransferResponse;
                    toProto(message: _150.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _150.MsgTransferResponse): _150.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _149.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _149.DenomTrace;
                    fromPartial(object: Partial<_149.DenomTrace>): _149.DenomTrace;
                    fromAmino(object: _149.DenomTraceAmino): _149.DenomTrace;
                    toAmino(message: _149.DenomTrace): _149.DenomTraceAmino;
                    fromAminoMsg(object: _149.DenomTraceAminoMsg): _149.DenomTrace;
                    toAminoMsg(message: _149.DenomTrace): _149.DenomTraceAminoMsg;
                    fromProtoMsg(message: _149.DenomTraceProtoMsg): _149.DenomTrace;
                    toProto(message: _149.DenomTrace): Uint8Array;
                    toProtoMsg(message: _149.DenomTrace): _149.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _149.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _149.Params;
                    fromPartial(object: Partial<_149.Params>): _149.Params;
                    fromAmino(object: _149.ParamsAmino): _149.Params;
                    toAmino(message: _149.Params): _149.ParamsAmino;
                    fromAminoMsg(object: _149.ParamsAminoMsg): _149.Params;
                    toAminoMsg(message: _149.Params): _149.ParamsAminoMsg;
                    fromProtoMsg(message: _149.ParamsProtoMsg): _149.Params;
                    toProto(message: _149.Params): Uint8Array;
                    toProtoMsg(message: _149.Params): _149.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _148.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_148.QueryDenomTraceRequest>): _148.QueryDenomTraceRequest;
                    fromAmino(object: _148.QueryDenomTraceRequestAmino): _148.QueryDenomTraceRequest;
                    toAmino(message: _148.QueryDenomTraceRequest): _148.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _148.QueryDenomTraceRequestAminoMsg): _148.QueryDenomTraceRequest;
                    toAminoMsg(message: _148.QueryDenomTraceRequest): _148.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _148.QueryDenomTraceRequestProtoMsg): _148.QueryDenomTraceRequest;
                    toProto(message: _148.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _148.QueryDenomTraceRequest): _148.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _148.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_148.QueryDenomTraceResponse>): _148.QueryDenomTraceResponse;
                    fromAmino(object: _148.QueryDenomTraceResponseAmino): _148.QueryDenomTraceResponse;
                    toAmino(message: _148.QueryDenomTraceResponse): _148.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _148.QueryDenomTraceResponseAminoMsg): _148.QueryDenomTraceResponse;
                    toAminoMsg(message: _148.QueryDenomTraceResponse): _148.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _148.QueryDenomTraceResponseProtoMsg): _148.QueryDenomTraceResponse;
                    toProto(message: _148.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _148.QueryDenomTraceResponse): _148.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _148.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_148.QueryDenomTracesRequest>): _148.QueryDenomTracesRequest;
                    fromAmino(object: _148.QueryDenomTracesRequestAmino): _148.QueryDenomTracesRequest;
                    toAmino(message: _148.QueryDenomTracesRequest): _148.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _148.QueryDenomTracesRequestAminoMsg): _148.QueryDenomTracesRequest;
                    toAminoMsg(message: _148.QueryDenomTracesRequest): _148.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _148.QueryDenomTracesRequestProtoMsg): _148.QueryDenomTracesRequest;
                    toProto(message: _148.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _148.QueryDenomTracesRequest): _148.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _148.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_148.QueryDenomTracesResponse>): _148.QueryDenomTracesResponse;
                    fromAmino(object: _148.QueryDenomTracesResponseAmino): _148.QueryDenomTracesResponse;
                    toAmino(message: _148.QueryDenomTracesResponse): _148.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _148.QueryDenomTracesResponseAminoMsg): _148.QueryDenomTracesResponse;
                    toAminoMsg(message: _148.QueryDenomTracesResponse): _148.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _148.QueryDenomTracesResponseProtoMsg): _148.QueryDenomTracesResponse;
                    toProto(message: _148.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _148.QueryDenomTracesResponse): _148.QueryDenomTracesResponseProtoMsg;
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
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _148.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryDenomHashRequest;
                    fromPartial(object: Partial<_148.QueryDenomHashRequest>): _148.QueryDenomHashRequest;
                    fromAmino(object: _148.QueryDenomHashRequestAmino): _148.QueryDenomHashRequest;
                    toAmino(message: _148.QueryDenomHashRequest): _148.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _148.QueryDenomHashRequestAminoMsg): _148.QueryDenomHashRequest;
                    toAminoMsg(message: _148.QueryDenomHashRequest): _148.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _148.QueryDenomHashRequestProtoMsg): _148.QueryDenomHashRequest;
                    toProto(message: _148.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _148.QueryDenomHashRequest): _148.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _148.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryDenomHashResponse;
                    fromPartial(object: Partial<_148.QueryDenomHashResponse>): _148.QueryDenomHashResponse;
                    fromAmino(object: _148.QueryDenomHashResponseAmino): _148.QueryDenomHashResponse;
                    toAmino(message: _148.QueryDenomHashResponse): _148.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _148.QueryDenomHashResponseAminoMsg): _148.QueryDenomHashResponse;
                    toAminoMsg(message: _148.QueryDenomHashResponse): _148.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _148.QueryDenomHashResponseProtoMsg): _148.QueryDenomHashResponse;
                    toProto(message: _148.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _148.QueryDenomHashResponse): _148.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _148.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_148.QueryEscrowAddressRequest>): _148.QueryEscrowAddressRequest;
                    fromAmino(object: _148.QueryEscrowAddressRequestAmino): _148.QueryEscrowAddressRequest;
                    toAmino(message: _148.QueryEscrowAddressRequest): _148.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _148.QueryEscrowAddressRequestAminoMsg): _148.QueryEscrowAddressRequest;
                    toAminoMsg(message: _148.QueryEscrowAddressRequest): _148.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _148.QueryEscrowAddressRequestProtoMsg): _148.QueryEscrowAddressRequest;
                    toProto(message: _148.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _148.QueryEscrowAddressRequest): _148.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _148.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _148.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_148.QueryEscrowAddressResponse>): _148.QueryEscrowAddressResponse;
                    fromAmino(object: _148.QueryEscrowAddressResponseAmino): _148.QueryEscrowAddressResponse;
                    toAmino(message: _148.QueryEscrowAddressResponse): _148.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _148.QueryEscrowAddressResponseAminoMsg): _148.QueryEscrowAddressResponse;
                    toAminoMsg(message: _148.QueryEscrowAddressResponse): _148.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _148.QueryEscrowAddressResponseProtoMsg): _148.QueryEscrowAddressResponse;
                    toProto(message: _148.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _148.QueryEscrowAddressResponse): _148.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _147.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _147.GenesisState;
                    fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
                    fromAmino(object: _147.GenesisStateAmino): _147.GenesisState;
                    toAmino(message: _147.GenesisState): _147.GenesisStateAmino;
                    fromAminoMsg(object: _147.GenesisStateAminoMsg): _147.GenesisState;
                    toAminoMsg(message: _147.GenesisState): _147.GenesisStateAminoMsg;
                    fromProtoMsg(message: _147.GenesisStateProtoMsg): _147.GenesisState;
                    toProto(message: _147.GenesisState): Uint8Array;
                    toProtoMsg(message: _147.GenesisState): _147.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _151.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _151.FungibleTokenPacketData;
                    fromPartial(object: Partial<_151.FungibleTokenPacketData>): _151.FungibleTokenPacketData;
                    fromAmino(object: _151.FungibleTokenPacketDataAmino): _151.FungibleTokenPacketData;
                    toAmino(message: _151.FungibleTokenPacketData): _151.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _151.FungibleTokenPacketDataAminoMsg): _151.FungibleTokenPacketData;
                    toAminoMsg(message: _151.FungibleTokenPacketData): _151.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _151.FungibleTokenPacketDataProtoMsg): _151.FungibleTokenPacketData;
                    toProto(message: _151.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _151.FungibleTokenPacketData): _151.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _264.MsgClientImpl;
                QueryClientImpl: typeof _260.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _154.QueryChannelRequest): Promise<_154.QueryChannelResponse>;
                    channels(request?: _154.QueryChannelsRequest): Promise<_154.QueryChannelsResponse>;
                    connectionChannels(request: _154.QueryConnectionChannelsRequest): Promise<_154.QueryConnectionChannelsResponse>;
                    channelClientState(request: _154.QueryChannelClientStateRequest): Promise<_154.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _154.QueryChannelConsensusStateRequest): Promise<_154.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _154.QueryPacketCommitmentRequest): Promise<_154.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _154.QueryPacketCommitmentsRequest): Promise<_154.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _154.QueryPacketReceiptRequest): Promise<_154.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _154.QueryPacketAcknowledgementRequest): Promise<_154.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _154.QueryPacketAcknowledgementsRequest): Promise<_154.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _154.QueryUnreceivedPacketsRequest): Promise<_154.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _154.QueryUnreceivedAcksRequest): Promise<_154.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _154.QueryNextSequenceReceiveRequest): Promise<_154.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _256.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _155.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _155.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _155.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _155.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _155.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _155.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _155.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _155.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _155.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _155.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _155.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _155.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _155.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _155.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _155.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _155.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _155.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _155.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _155.MsgRecvPacket): {
                            typeUrl: string;
                            value: _155.MsgRecvPacket;
                        };
                        timeout(value: _155.MsgTimeout): {
                            typeUrl: string;
                            value: _155.MsgTimeout;
                        };
                        timeoutOnClose(value: _155.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _155.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _155.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _155.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _155.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _155.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _155.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _155.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _155.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _155.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _155.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _155.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _155.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _155.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _155.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _155.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _155.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _155.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _155.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _155.MsgRecvPacket): {
                            typeUrl: string;
                            value: _155.MsgRecvPacket;
                        };
                        timeout(value: _155.MsgTimeout): {
                            typeUrl: string;
                            value: _155.MsgTimeout;
                        };
                        timeoutOnClose(value: _155.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _155.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _155.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _155.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _155.MsgChannelOpenInit) => _155.MsgChannelOpenInitAmino;
                        fromAmino: (object: _155.MsgChannelOpenInitAmino) => _155.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _155.MsgChannelOpenTry) => _155.MsgChannelOpenTryAmino;
                        fromAmino: (object: _155.MsgChannelOpenTryAmino) => _155.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _155.MsgChannelOpenAck) => _155.MsgChannelOpenAckAmino;
                        fromAmino: (object: _155.MsgChannelOpenAckAmino) => _155.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _155.MsgChannelOpenConfirm) => _155.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _155.MsgChannelOpenConfirmAmino) => _155.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _155.MsgChannelCloseInit) => _155.MsgChannelCloseInitAmino;
                        fromAmino: (object: _155.MsgChannelCloseInitAmino) => _155.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _155.MsgChannelCloseConfirm) => _155.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _155.MsgChannelCloseConfirmAmino) => _155.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _155.MsgRecvPacket) => _155.MsgRecvPacketAmino;
                        fromAmino: (object: _155.MsgRecvPacketAmino) => _155.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _155.MsgTimeout) => _155.MsgTimeoutAmino;
                        fromAmino: (object: _155.MsgTimeoutAmino) => _155.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _155.MsgTimeoutOnClose) => _155.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _155.MsgTimeoutOnCloseAmino) => _155.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _155.MsgAcknowledgement) => _155.MsgAcknowledgementAmino;
                        fromAmino: (object: _155.MsgAcknowledgementAmino) => _155.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _155.ResponseResultType;
                responseResultTypeToJSON(object: _155.ResponseResultType): string;
                ResponseResultType: typeof _155.ResponseResultType;
                ResponseResultTypeSDKType: typeof _155.ResponseResultType;
                ResponseResultTypeAmino: typeof _155.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelOpenInit;
                    fromPartial(object: Partial<_155.MsgChannelOpenInit>): _155.MsgChannelOpenInit;
                    fromAmino(object: _155.MsgChannelOpenInitAmino): _155.MsgChannelOpenInit;
                    toAmino(message: _155.MsgChannelOpenInit): _155.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenInitAminoMsg): _155.MsgChannelOpenInit;
                    toAminoMsg(message: _155.MsgChannelOpenInit): _155.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenInitProtoMsg): _155.MsgChannelOpenInit;
                    toProto(message: _155.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenInit): _155.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_155.MsgChannelOpenInitResponse>): _155.MsgChannelOpenInitResponse;
                    fromAmino(object: _155.MsgChannelOpenInitResponseAmino): _155.MsgChannelOpenInitResponse;
                    toAmino(message: _155.MsgChannelOpenInitResponse): _155.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenInitResponseAminoMsg): _155.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _155.MsgChannelOpenInitResponse): _155.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenInitResponseProtoMsg): _155.MsgChannelOpenInitResponse;
                    toProto(message: _155.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenInitResponse): _155.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelOpenTry;
                    fromPartial(object: Partial<_155.MsgChannelOpenTry>): _155.MsgChannelOpenTry;
                    fromAmino(object: _155.MsgChannelOpenTryAmino): _155.MsgChannelOpenTry;
                    toAmino(message: _155.MsgChannelOpenTry): _155.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenTryAminoMsg): _155.MsgChannelOpenTry;
                    toAminoMsg(message: _155.MsgChannelOpenTry): _155.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenTryProtoMsg): _155.MsgChannelOpenTry;
                    toProto(message: _155.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenTry): _155.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_155.MsgChannelOpenTryResponse>): _155.MsgChannelOpenTryResponse;
                    fromAmino(object: _155.MsgChannelOpenTryResponseAmino): _155.MsgChannelOpenTryResponse;
                    toAmino(message: _155.MsgChannelOpenTryResponse): _155.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenTryResponseAminoMsg): _155.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _155.MsgChannelOpenTryResponse): _155.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenTryResponseProtoMsg): _155.MsgChannelOpenTryResponse;
                    toProto(message: _155.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenTryResponse): _155.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelOpenAck;
                    fromPartial(object: Partial<_155.MsgChannelOpenAck>): _155.MsgChannelOpenAck;
                    fromAmino(object: _155.MsgChannelOpenAckAmino): _155.MsgChannelOpenAck;
                    toAmino(message: _155.MsgChannelOpenAck): _155.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenAckAminoMsg): _155.MsgChannelOpenAck;
                    toAminoMsg(message: _155.MsgChannelOpenAck): _155.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenAckProtoMsg): _155.MsgChannelOpenAck;
                    toProto(message: _155.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenAck): _155.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _155.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _155.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_155.MsgChannelOpenAckResponse>): _155.MsgChannelOpenAckResponse;
                    fromAmino(_: _155.MsgChannelOpenAckResponseAmino): _155.MsgChannelOpenAckResponse;
                    toAmino(_: _155.MsgChannelOpenAckResponse): _155.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenAckResponseAminoMsg): _155.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _155.MsgChannelOpenAckResponse): _155.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenAckResponseProtoMsg): _155.MsgChannelOpenAckResponse;
                    toProto(message: _155.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenAckResponse): _155.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_155.MsgChannelOpenConfirm>): _155.MsgChannelOpenConfirm;
                    fromAmino(object: _155.MsgChannelOpenConfirmAmino): _155.MsgChannelOpenConfirm;
                    toAmino(message: _155.MsgChannelOpenConfirm): _155.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenConfirmAminoMsg): _155.MsgChannelOpenConfirm;
                    toAminoMsg(message: _155.MsgChannelOpenConfirm): _155.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenConfirmProtoMsg): _155.MsgChannelOpenConfirm;
                    toProto(message: _155.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenConfirm): _155.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _155.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _155.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_155.MsgChannelOpenConfirmResponse>): _155.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _155.MsgChannelOpenConfirmResponseAmino): _155.MsgChannelOpenConfirmResponse;
                    toAmino(_: _155.MsgChannelOpenConfirmResponse): _155.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _155.MsgChannelOpenConfirmResponseAminoMsg): _155.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _155.MsgChannelOpenConfirmResponse): _155.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelOpenConfirmResponseProtoMsg): _155.MsgChannelOpenConfirmResponse;
                    toProto(message: _155.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelOpenConfirmResponse): _155.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelCloseInit;
                    fromPartial(object: Partial<_155.MsgChannelCloseInit>): _155.MsgChannelCloseInit;
                    fromAmino(object: _155.MsgChannelCloseInitAmino): _155.MsgChannelCloseInit;
                    toAmino(message: _155.MsgChannelCloseInit): _155.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _155.MsgChannelCloseInitAminoMsg): _155.MsgChannelCloseInit;
                    toAminoMsg(message: _155.MsgChannelCloseInit): _155.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelCloseInitProtoMsg): _155.MsgChannelCloseInit;
                    toProto(message: _155.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelCloseInit): _155.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _155.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _155.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_155.MsgChannelCloseInitResponse>): _155.MsgChannelCloseInitResponse;
                    fromAmino(_: _155.MsgChannelCloseInitResponseAmino): _155.MsgChannelCloseInitResponse;
                    toAmino(_: _155.MsgChannelCloseInitResponse): _155.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _155.MsgChannelCloseInitResponseAminoMsg): _155.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _155.MsgChannelCloseInitResponse): _155.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelCloseInitResponseProtoMsg): _155.MsgChannelCloseInitResponse;
                    toProto(message: _155.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelCloseInitResponse): _155.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _155.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_155.MsgChannelCloseConfirm>): _155.MsgChannelCloseConfirm;
                    fromAmino(object: _155.MsgChannelCloseConfirmAmino): _155.MsgChannelCloseConfirm;
                    toAmino(message: _155.MsgChannelCloseConfirm): _155.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _155.MsgChannelCloseConfirmAminoMsg): _155.MsgChannelCloseConfirm;
                    toAminoMsg(message: _155.MsgChannelCloseConfirm): _155.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelCloseConfirmProtoMsg): _155.MsgChannelCloseConfirm;
                    toProto(message: _155.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelCloseConfirm): _155.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _155.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _155.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_155.MsgChannelCloseConfirmResponse>): _155.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _155.MsgChannelCloseConfirmResponseAmino): _155.MsgChannelCloseConfirmResponse;
                    toAmino(_: _155.MsgChannelCloseConfirmResponse): _155.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _155.MsgChannelCloseConfirmResponseAminoMsg): _155.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _155.MsgChannelCloseConfirmResponse): _155.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgChannelCloseConfirmResponseProtoMsg): _155.MsgChannelCloseConfirmResponse;
                    toProto(message: _155.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgChannelCloseConfirmResponse): _155.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _155.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgRecvPacket;
                    fromPartial(object: Partial<_155.MsgRecvPacket>): _155.MsgRecvPacket;
                    fromAmino(object: _155.MsgRecvPacketAmino): _155.MsgRecvPacket;
                    toAmino(message: _155.MsgRecvPacket): _155.MsgRecvPacketAmino;
                    fromAminoMsg(object: _155.MsgRecvPacketAminoMsg): _155.MsgRecvPacket;
                    toAminoMsg(message: _155.MsgRecvPacket): _155.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _155.MsgRecvPacketProtoMsg): _155.MsgRecvPacket;
                    toProto(message: _155.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _155.MsgRecvPacket): _155.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _155.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_155.MsgRecvPacketResponse>): _155.MsgRecvPacketResponse;
                    fromAmino(object: _155.MsgRecvPacketResponseAmino): _155.MsgRecvPacketResponse;
                    toAmino(message: _155.MsgRecvPacketResponse): _155.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _155.MsgRecvPacketResponseAminoMsg): _155.MsgRecvPacketResponse;
                    toAminoMsg(message: _155.MsgRecvPacketResponse): _155.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgRecvPacketResponseProtoMsg): _155.MsgRecvPacketResponse;
                    toProto(message: _155.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgRecvPacketResponse): _155.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _155.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgTimeout;
                    fromPartial(object: Partial<_155.MsgTimeout>): _155.MsgTimeout;
                    fromAmino(object: _155.MsgTimeoutAmino): _155.MsgTimeout;
                    toAmino(message: _155.MsgTimeout): _155.MsgTimeoutAmino;
                    fromAminoMsg(object: _155.MsgTimeoutAminoMsg): _155.MsgTimeout;
                    toAminoMsg(message: _155.MsgTimeout): _155.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _155.MsgTimeoutProtoMsg): _155.MsgTimeout;
                    toProto(message: _155.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _155.MsgTimeout): _155.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _155.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgTimeoutResponse;
                    fromPartial(object: Partial<_155.MsgTimeoutResponse>): _155.MsgTimeoutResponse;
                    fromAmino(object: _155.MsgTimeoutResponseAmino): _155.MsgTimeoutResponse;
                    toAmino(message: _155.MsgTimeoutResponse): _155.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _155.MsgTimeoutResponseAminoMsg): _155.MsgTimeoutResponse;
                    toAminoMsg(message: _155.MsgTimeoutResponse): _155.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgTimeoutResponseProtoMsg): _155.MsgTimeoutResponse;
                    toProto(message: _155.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgTimeoutResponse): _155.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _155.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_155.MsgTimeoutOnClose>): _155.MsgTimeoutOnClose;
                    fromAmino(object: _155.MsgTimeoutOnCloseAmino): _155.MsgTimeoutOnClose;
                    toAmino(message: _155.MsgTimeoutOnClose): _155.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _155.MsgTimeoutOnCloseAminoMsg): _155.MsgTimeoutOnClose;
                    toAminoMsg(message: _155.MsgTimeoutOnClose): _155.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _155.MsgTimeoutOnCloseProtoMsg): _155.MsgTimeoutOnClose;
                    toProto(message: _155.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _155.MsgTimeoutOnClose): _155.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _155.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_155.MsgTimeoutOnCloseResponse>): _155.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _155.MsgTimeoutOnCloseResponseAmino): _155.MsgTimeoutOnCloseResponse;
                    toAmino(message: _155.MsgTimeoutOnCloseResponse): _155.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _155.MsgTimeoutOnCloseResponseAminoMsg): _155.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _155.MsgTimeoutOnCloseResponse): _155.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgTimeoutOnCloseResponseProtoMsg): _155.MsgTimeoutOnCloseResponse;
                    toProto(message: _155.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgTimeoutOnCloseResponse): _155.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _155.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgAcknowledgement;
                    fromPartial(object: Partial<_155.MsgAcknowledgement>): _155.MsgAcknowledgement;
                    fromAmino(object: _155.MsgAcknowledgementAmino): _155.MsgAcknowledgement;
                    toAmino(message: _155.MsgAcknowledgement): _155.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _155.MsgAcknowledgementAminoMsg): _155.MsgAcknowledgement;
                    toAminoMsg(message: _155.MsgAcknowledgement): _155.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _155.MsgAcknowledgementProtoMsg): _155.MsgAcknowledgement;
                    toProto(message: _155.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _155.MsgAcknowledgement): _155.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _155.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _155.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_155.MsgAcknowledgementResponse>): _155.MsgAcknowledgementResponse;
                    fromAmino(object: _155.MsgAcknowledgementResponseAmino): _155.MsgAcknowledgementResponse;
                    toAmino(message: _155.MsgAcknowledgementResponse): _155.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _155.MsgAcknowledgementResponseAminoMsg): _155.MsgAcknowledgementResponse;
                    toAminoMsg(message: _155.MsgAcknowledgementResponse): _155.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgAcknowledgementResponseProtoMsg): _155.MsgAcknowledgementResponse;
                    toProto(message: _155.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgAcknowledgementResponse): _155.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelRequest;
                    fromPartial(object: Partial<_154.QueryChannelRequest>): _154.QueryChannelRequest;
                    fromAmino(object: _154.QueryChannelRequestAmino): _154.QueryChannelRequest;
                    toAmino(message: _154.QueryChannelRequest): _154.QueryChannelRequestAmino;
                    fromAminoMsg(object: _154.QueryChannelRequestAminoMsg): _154.QueryChannelRequest;
                    toAminoMsg(message: _154.QueryChannelRequest): _154.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelRequestProtoMsg): _154.QueryChannelRequest;
                    toProto(message: _154.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelRequest): _154.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelResponse;
                    fromPartial(object: Partial<_154.QueryChannelResponse>): _154.QueryChannelResponse;
                    fromAmino(object: _154.QueryChannelResponseAmino): _154.QueryChannelResponse;
                    toAmino(message: _154.QueryChannelResponse): _154.QueryChannelResponseAmino;
                    fromAminoMsg(object: _154.QueryChannelResponseAminoMsg): _154.QueryChannelResponse;
                    toAminoMsg(message: _154.QueryChannelResponse): _154.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelResponseProtoMsg): _154.QueryChannelResponse;
                    toProto(message: _154.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelResponse): _154.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelsRequest;
                    fromPartial(object: Partial<_154.QueryChannelsRequest>): _154.QueryChannelsRequest;
                    fromAmino(object: _154.QueryChannelsRequestAmino): _154.QueryChannelsRequest;
                    toAmino(message: _154.QueryChannelsRequest): _154.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _154.QueryChannelsRequestAminoMsg): _154.QueryChannelsRequest;
                    toAminoMsg(message: _154.QueryChannelsRequest): _154.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelsRequestProtoMsg): _154.QueryChannelsRequest;
                    toProto(message: _154.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelsRequest): _154.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelsResponse;
                    fromPartial(object: Partial<_154.QueryChannelsResponse>): _154.QueryChannelsResponse;
                    fromAmino(object: _154.QueryChannelsResponseAmino): _154.QueryChannelsResponse;
                    toAmino(message: _154.QueryChannelsResponse): _154.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _154.QueryChannelsResponseAminoMsg): _154.QueryChannelsResponse;
                    toAminoMsg(message: _154.QueryChannelsResponse): _154.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelsResponseProtoMsg): _154.QueryChannelsResponse;
                    toProto(message: _154.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelsResponse): _154.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_154.QueryConnectionChannelsRequest>): _154.QueryConnectionChannelsRequest;
                    fromAmino(object: _154.QueryConnectionChannelsRequestAmino): _154.QueryConnectionChannelsRequest;
                    toAmino(message: _154.QueryConnectionChannelsRequest): _154.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _154.QueryConnectionChannelsRequestAminoMsg): _154.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _154.QueryConnectionChannelsRequest): _154.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryConnectionChannelsRequestProtoMsg): _154.QueryConnectionChannelsRequest;
                    toProto(message: _154.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryConnectionChannelsRequest): _154.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_154.QueryConnectionChannelsResponse>): _154.QueryConnectionChannelsResponse;
                    fromAmino(object: _154.QueryConnectionChannelsResponseAmino): _154.QueryConnectionChannelsResponse;
                    toAmino(message: _154.QueryConnectionChannelsResponse): _154.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _154.QueryConnectionChannelsResponseAminoMsg): _154.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _154.QueryConnectionChannelsResponse): _154.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryConnectionChannelsResponseProtoMsg): _154.QueryConnectionChannelsResponse;
                    toProto(message: _154.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryConnectionChannelsResponse): _154.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_154.QueryChannelClientStateRequest>): _154.QueryChannelClientStateRequest;
                    fromAmino(object: _154.QueryChannelClientStateRequestAmino): _154.QueryChannelClientStateRequest;
                    toAmino(message: _154.QueryChannelClientStateRequest): _154.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _154.QueryChannelClientStateRequestAminoMsg): _154.QueryChannelClientStateRequest;
                    toAminoMsg(message: _154.QueryChannelClientStateRequest): _154.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelClientStateRequestProtoMsg): _154.QueryChannelClientStateRequest;
                    toProto(message: _154.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelClientStateRequest): _154.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_154.QueryChannelClientStateResponse>): _154.QueryChannelClientStateResponse;
                    fromAmino(object: _154.QueryChannelClientStateResponseAmino): _154.QueryChannelClientStateResponse;
                    toAmino(message: _154.QueryChannelClientStateResponse): _154.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _154.QueryChannelClientStateResponseAminoMsg): _154.QueryChannelClientStateResponse;
                    toAminoMsg(message: _154.QueryChannelClientStateResponse): _154.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelClientStateResponseProtoMsg): _154.QueryChannelClientStateResponse;
                    toProto(message: _154.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelClientStateResponse): _154.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_154.QueryChannelConsensusStateRequest>): _154.QueryChannelConsensusStateRequest;
                    fromAmino(object: _154.QueryChannelConsensusStateRequestAmino): _154.QueryChannelConsensusStateRequest;
                    toAmino(message: _154.QueryChannelConsensusStateRequest): _154.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _154.QueryChannelConsensusStateRequestAminoMsg): _154.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _154.QueryChannelConsensusStateRequest): _154.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelConsensusStateRequestProtoMsg): _154.QueryChannelConsensusStateRequest;
                    toProto(message: _154.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelConsensusStateRequest): _154.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_154.QueryChannelConsensusStateResponse>): _154.QueryChannelConsensusStateResponse;
                    fromAmino(object: _154.QueryChannelConsensusStateResponseAmino): _154.QueryChannelConsensusStateResponse;
                    toAmino(message: _154.QueryChannelConsensusStateResponse): _154.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _154.QueryChannelConsensusStateResponseAminoMsg): _154.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _154.QueryChannelConsensusStateResponse): _154.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryChannelConsensusStateResponseProtoMsg): _154.QueryChannelConsensusStateResponse;
                    toProto(message: _154.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryChannelConsensusStateResponse): _154.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentRequest>): _154.QueryPacketCommitmentRequest;
                    fromAmino(object: _154.QueryPacketCommitmentRequestAmino): _154.QueryPacketCommitmentRequest;
                    toAmino(message: _154.QueryPacketCommitmentRequest): _154.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _154.QueryPacketCommitmentRequestAminoMsg): _154.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _154.QueryPacketCommitmentRequest): _154.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketCommitmentRequestProtoMsg): _154.QueryPacketCommitmentRequest;
                    toProto(message: _154.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketCommitmentRequest): _154.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentResponse>): _154.QueryPacketCommitmentResponse;
                    fromAmino(object: _154.QueryPacketCommitmentResponseAmino): _154.QueryPacketCommitmentResponse;
                    toAmino(message: _154.QueryPacketCommitmentResponse): _154.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _154.QueryPacketCommitmentResponseAminoMsg): _154.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _154.QueryPacketCommitmentResponse): _154.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketCommitmentResponseProtoMsg): _154.QueryPacketCommitmentResponse;
                    toProto(message: _154.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketCommitmentResponse): _154.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentsRequest>): _154.QueryPacketCommitmentsRequest;
                    fromAmino(object: _154.QueryPacketCommitmentsRequestAmino): _154.QueryPacketCommitmentsRequest;
                    toAmino(message: _154.QueryPacketCommitmentsRequest): _154.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _154.QueryPacketCommitmentsRequestAminoMsg): _154.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _154.QueryPacketCommitmentsRequest): _154.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketCommitmentsRequestProtoMsg): _154.QueryPacketCommitmentsRequest;
                    toProto(message: _154.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketCommitmentsRequest): _154.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentsResponse>): _154.QueryPacketCommitmentsResponse;
                    fromAmino(object: _154.QueryPacketCommitmentsResponseAmino): _154.QueryPacketCommitmentsResponse;
                    toAmino(message: _154.QueryPacketCommitmentsResponse): _154.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _154.QueryPacketCommitmentsResponseAminoMsg): _154.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _154.QueryPacketCommitmentsResponse): _154.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketCommitmentsResponseProtoMsg): _154.QueryPacketCommitmentsResponse;
                    toProto(message: _154.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketCommitmentsResponse): _154.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_154.QueryPacketReceiptRequest>): _154.QueryPacketReceiptRequest;
                    fromAmino(object: _154.QueryPacketReceiptRequestAmino): _154.QueryPacketReceiptRequest;
                    toAmino(message: _154.QueryPacketReceiptRequest): _154.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _154.QueryPacketReceiptRequestAminoMsg): _154.QueryPacketReceiptRequest;
                    toAminoMsg(message: _154.QueryPacketReceiptRequest): _154.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketReceiptRequestProtoMsg): _154.QueryPacketReceiptRequest;
                    toProto(message: _154.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketReceiptRequest): _154.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_154.QueryPacketReceiptResponse>): _154.QueryPacketReceiptResponse;
                    fromAmino(object: _154.QueryPacketReceiptResponseAmino): _154.QueryPacketReceiptResponse;
                    toAmino(message: _154.QueryPacketReceiptResponse): _154.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _154.QueryPacketReceiptResponseAminoMsg): _154.QueryPacketReceiptResponse;
                    toAminoMsg(message: _154.QueryPacketReceiptResponse): _154.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketReceiptResponseProtoMsg): _154.QueryPacketReceiptResponse;
                    toProto(message: _154.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketReceiptResponse): _154.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementRequest>): _154.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _154.QueryPacketAcknowledgementRequestAmino): _154.QueryPacketAcknowledgementRequest;
                    toAmino(message: _154.QueryPacketAcknowledgementRequest): _154.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _154.QueryPacketAcknowledgementRequestAminoMsg): _154.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _154.QueryPacketAcknowledgementRequest): _154.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketAcknowledgementRequestProtoMsg): _154.QueryPacketAcknowledgementRequest;
                    toProto(message: _154.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketAcknowledgementRequest): _154.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementResponse>): _154.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _154.QueryPacketAcknowledgementResponseAmino): _154.QueryPacketAcknowledgementResponse;
                    toAmino(message: _154.QueryPacketAcknowledgementResponse): _154.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _154.QueryPacketAcknowledgementResponseAminoMsg): _154.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _154.QueryPacketAcknowledgementResponse): _154.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketAcknowledgementResponseProtoMsg): _154.QueryPacketAcknowledgementResponse;
                    toProto(message: _154.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketAcknowledgementResponse): _154.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementsRequest>): _154.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _154.QueryPacketAcknowledgementsRequestAmino): _154.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _154.QueryPacketAcknowledgementsRequest): _154.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _154.QueryPacketAcknowledgementsRequestAminoMsg): _154.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _154.QueryPacketAcknowledgementsRequest): _154.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketAcknowledgementsRequestProtoMsg): _154.QueryPacketAcknowledgementsRequest;
                    toProto(message: _154.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketAcknowledgementsRequest): _154.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementsResponse>): _154.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _154.QueryPacketAcknowledgementsResponseAmino): _154.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _154.QueryPacketAcknowledgementsResponse): _154.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _154.QueryPacketAcknowledgementsResponseAminoMsg): _154.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _154.QueryPacketAcknowledgementsResponse): _154.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryPacketAcknowledgementsResponseProtoMsg): _154.QueryPacketAcknowledgementsResponse;
                    toProto(message: _154.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryPacketAcknowledgementsResponse): _154.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_154.QueryUnreceivedPacketsRequest>): _154.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _154.QueryUnreceivedPacketsRequestAmino): _154.QueryUnreceivedPacketsRequest;
                    toAmino(message: _154.QueryUnreceivedPacketsRequest): _154.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _154.QueryUnreceivedPacketsRequestAminoMsg): _154.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _154.QueryUnreceivedPacketsRequest): _154.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryUnreceivedPacketsRequestProtoMsg): _154.QueryUnreceivedPacketsRequest;
                    toProto(message: _154.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryUnreceivedPacketsRequest): _154.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_154.QueryUnreceivedPacketsResponse>): _154.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _154.QueryUnreceivedPacketsResponseAmino): _154.QueryUnreceivedPacketsResponse;
                    toAmino(message: _154.QueryUnreceivedPacketsResponse): _154.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _154.QueryUnreceivedPacketsResponseAminoMsg): _154.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _154.QueryUnreceivedPacketsResponse): _154.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryUnreceivedPacketsResponseProtoMsg): _154.QueryUnreceivedPacketsResponse;
                    toProto(message: _154.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryUnreceivedPacketsResponse): _154.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_154.QueryUnreceivedAcksRequest>): _154.QueryUnreceivedAcksRequest;
                    fromAmino(object: _154.QueryUnreceivedAcksRequestAmino): _154.QueryUnreceivedAcksRequest;
                    toAmino(message: _154.QueryUnreceivedAcksRequest): _154.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _154.QueryUnreceivedAcksRequestAminoMsg): _154.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _154.QueryUnreceivedAcksRequest): _154.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryUnreceivedAcksRequestProtoMsg): _154.QueryUnreceivedAcksRequest;
                    toProto(message: _154.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryUnreceivedAcksRequest): _154.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_154.QueryUnreceivedAcksResponse>): _154.QueryUnreceivedAcksResponse;
                    fromAmino(object: _154.QueryUnreceivedAcksResponseAmino): _154.QueryUnreceivedAcksResponse;
                    toAmino(message: _154.QueryUnreceivedAcksResponse): _154.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _154.QueryUnreceivedAcksResponseAminoMsg): _154.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _154.QueryUnreceivedAcksResponse): _154.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryUnreceivedAcksResponseProtoMsg): _154.QueryUnreceivedAcksResponse;
                    toProto(message: _154.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryUnreceivedAcksResponse): _154.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _154.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_154.QueryNextSequenceReceiveRequest>): _154.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _154.QueryNextSequenceReceiveRequestAmino): _154.QueryNextSequenceReceiveRequest;
                    toAmino(message: _154.QueryNextSequenceReceiveRequest): _154.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _154.QueryNextSequenceReceiveRequestAminoMsg): _154.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _154.QueryNextSequenceReceiveRequest): _154.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _154.QueryNextSequenceReceiveRequestProtoMsg): _154.QueryNextSequenceReceiveRequest;
                    toProto(message: _154.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _154.QueryNextSequenceReceiveRequest): _154.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _154.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _154.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_154.QueryNextSequenceReceiveResponse>): _154.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _154.QueryNextSequenceReceiveResponseAmino): _154.QueryNextSequenceReceiveResponse;
                    toAmino(message: _154.QueryNextSequenceReceiveResponse): _154.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _154.QueryNextSequenceReceiveResponseAminoMsg): _154.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _154.QueryNextSequenceReceiveResponse): _154.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _154.QueryNextSequenceReceiveResponseProtoMsg): _154.QueryNextSequenceReceiveResponse;
                    toProto(message: _154.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _154.QueryNextSequenceReceiveResponse): _154.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _153.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.GenesisState;
                    fromPartial(object: Partial<_153.GenesisState>): _153.GenesisState;
                    fromAmino(object: _153.GenesisStateAmino): _153.GenesisState;
                    toAmino(message: _153.GenesisState): _153.GenesisStateAmino;
                    fromAminoMsg(object: _153.GenesisStateAminoMsg): _153.GenesisState;
                    toAminoMsg(message: _153.GenesisState): _153.GenesisStateAminoMsg;
                    fromProtoMsg(message: _153.GenesisStateProtoMsg): _153.GenesisState;
                    toProto(message: _153.GenesisState): Uint8Array;
                    toProtoMsg(message: _153.GenesisState): _153.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _153.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _153.PacketSequence;
                    fromPartial(object: Partial<_153.PacketSequence>): _153.PacketSequence;
                    fromAmino(object: _153.PacketSequenceAmino): _153.PacketSequence;
                    toAmino(message: _153.PacketSequence): _153.PacketSequenceAmino;
                    fromAminoMsg(object: _153.PacketSequenceAminoMsg): _153.PacketSequence;
                    toAminoMsg(message: _153.PacketSequence): _153.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _153.PacketSequenceProtoMsg): _153.PacketSequence;
                    toProto(message: _153.PacketSequence): Uint8Array;
                    toProtoMsg(message: _153.PacketSequence): _153.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _152.State;
                stateToJSON(object: _152.State): string;
                orderFromJSON(object: any): _152.Order;
                orderToJSON(object: _152.Order): string;
                State: typeof _152.State;
                StateSDKType: typeof _152.State;
                StateAmino: typeof _152.State;
                Order: typeof _152.Order;
                OrderSDKType: typeof _152.Order;
                OrderAmino: typeof _152.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _152.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.Channel;
                    fromPartial(object: Partial<_152.Channel>): _152.Channel;
                    fromAmino(object: _152.ChannelAmino): _152.Channel;
                    toAmino(message: _152.Channel): _152.ChannelAmino;
                    fromAminoMsg(object: _152.ChannelAminoMsg): _152.Channel;
                    toAminoMsg(message: _152.Channel): _152.ChannelAminoMsg;
                    fromProtoMsg(message: _152.ChannelProtoMsg): _152.Channel;
                    toProto(message: _152.Channel): Uint8Array;
                    toProtoMsg(message: _152.Channel): _152.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _152.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.IdentifiedChannel;
                    fromPartial(object: Partial<_152.IdentifiedChannel>): _152.IdentifiedChannel;
                    fromAmino(object: _152.IdentifiedChannelAmino): _152.IdentifiedChannel;
                    toAmino(message: _152.IdentifiedChannel): _152.IdentifiedChannelAmino;
                    fromAminoMsg(object: _152.IdentifiedChannelAminoMsg): _152.IdentifiedChannel;
                    toAminoMsg(message: _152.IdentifiedChannel): _152.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _152.IdentifiedChannelProtoMsg): _152.IdentifiedChannel;
                    toProto(message: _152.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _152.IdentifiedChannel): _152.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _152.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.Counterparty;
                    fromPartial(object: Partial<_152.Counterparty>): _152.Counterparty;
                    fromAmino(object: _152.CounterpartyAmino): _152.Counterparty;
                    toAmino(message: _152.Counterparty): _152.CounterpartyAmino;
                    fromAminoMsg(object: _152.CounterpartyAminoMsg): _152.Counterparty;
                    toAminoMsg(message: _152.Counterparty): _152.CounterpartyAminoMsg;
                    fromProtoMsg(message: _152.CounterpartyProtoMsg): _152.Counterparty;
                    toProto(message: _152.Counterparty): Uint8Array;
                    toProtoMsg(message: _152.Counterparty): _152.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _152.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.Packet;
                    fromPartial(object: Partial<_152.Packet>): _152.Packet;
                    fromAmino(object: _152.PacketAmino): _152.Packet;
                    toAmino(message: _152.Packet): _152.PacketAmino;
                    fromAminoMsg(object: _152.PacketAminoMsg): _152.Packet;
                    toAminoMsg(message: _152.Packet): _152.PacketAminoMsg;
                    fromProtoMsg(message: _152.PacketProtoMsg): _152.Packet;
                    toProto(message: _152.Packet): Uint8Array;
                    toProtoMsg(message: _152.Packet): _152.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _152.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.PacketState;
                    fromPartial(object: Partial<_152.PacketState>): _152.PacketState;
                    fromAmino(object: _152.PacketStateAmino): _152.PacketState;
                    toAmino(message: _152.PacketState): _152.PacketStateAmino;
                    fromAminoMsg(object: _152.PacketStateAminoMsg): _152.PacketState;
                    toAminoMsg(message: _152.PacketState): _152.PacketStateAminoMsg;
                    fromProtoMsg(message: _152.PacketStateProtoMsg): _152.PacketState;
                    toProto(message: _152.PacketState): Uint8Array;
                    toProtoMsg(message: _152.PacketState): _152.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _152.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.PacketId;
                    fromPartial(object: Partial<_152.PacketId>): _152.PacketId;
                    fromAmino(object: _152.PacketIdAmino): _152.PacketId;
                    toAmino(message: _152.PacketId): _152.PacketIdAmino;
                    fromAminoMsg(object: _152.PacketIdAminoMsg): _152.PacketId;
                    toAminoMsg(message: _152.PacketId): _152.PacketIdAminoMsg;
                    fromProtoMsg(message: _152.PacketIdProtoMsg): _152.PacketId;
                    toProto(message: _152.PacketId): Uint8Array;
                    toProtoMsg(message: _152.PacketId): _152.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _152.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _152.Acknowledgement;
                    fromPartial(object: Partial<_152.Acknowledgement>): _152.Acknowledgement;
                    fromAmino(object: _152.AcknowledgementAmino): _152.Acknowledgement;
                    toAmino(message: _152.Acknowledgement): _152.AcknowledgementAmino;
                    fromAminoMsg(object: _152.AcknowledgementAminoMsg): _152.Acknowledgement;
                    toAminoMsg(message: _152.Acknowledgement): _152.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _152.AcknowledgementProtoMsg): _152.Acknowledgement;
                    toProto(message: _152.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _152.Acknowledgement): _152.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _265.MsgClientImpl;
                QueryClientImpl: typeof _261.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _158.QueryClientStateRequest): Promise<_158.QueryClientStateResponse>;
                    clientStates(request?: _158.QueryClientStatesRequest): Promise<_158.QueryClientStatesResponse>;
                    consensusState(request: _158.QueryConsensusStateRequest): Promise<_158.QueryConsensusStateResponse>;
                    consensusStates(request: _158.QueryConsensusStatesRequest): Promise<_158.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _158.QueryConsensusStateHeightsRequest): Promise<_158.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _158.QueryClientStatusRequest): Promise<_158.QueryClientStatusResponse>;
                    clientParams(request?: _158.QueryClientParamsRequest): Promise<_158.QueryClientParamsResponse>;
                    upgradedClientState(request?: _158.QueryUpgradedClientStateRequest): Promise<_158.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _158.QueryUpgradedConsensusStateRequest): Promise<_158.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _257.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _159.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _159.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _159.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _159.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _159.MsgCreateClient): {
                            typeUrl: string;
                            value: _159.MsgCreateClient;
                        };
                        updateClient(value: _159.MsgUpdateClient): {
                            typeUrl: string;
                            value: _159.MsgUpdateClient;
                        };
                        upgradeClient(value: _159.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _159.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _159.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _159.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _159.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _159.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _159.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _159.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _159.MsgCreateClient): {
                            typeUrl: string;
                            value: _159.MsgCreateClient;
                        };
                        updateClient(value: _159.MsgUpdateClient): {
                            typeUrl: string;
                            value: _159.MsgUpdateClient;
                        };
                        upgradeClient(value: _159.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _159.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _159.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _159.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _159.MsgCreateClient) => _159.MsgCreateClientAmino;
                        fromAmino: (object: _159.MsgCreateClientAmino) => _159.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _159.MsgUpdateClient) => _159.MsgUpdateClientAmino;
                        fromAmino: (object: _159.MsgUpdateClientAmino) => _159.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _159.MsgUpgradeClient) => _159.MsgUpgradeClientAmino;
                        fromAmino: (object: _159.MsgUpgradeClientAmino) => _159.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _159.MsgSubmitMisbehaviour) => _159.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _159.MsgSubmitMisbehaviourAmino) => _159.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _159.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.MsgCreateClient;
                    fromPartial(object: Partial<_159.MsgCreateClient>): _159.MsgCreateClient;
                    fromAmino(object: _159.MsgCreateClientAmino): _159.MsgCreateClient;
                    toAmino(message: _159.MsgCreateClient): _159.MsgCreateClientAmino;
                    fromAminoMsg(object: _159.MsgCreateClientAminoMsg): _159.MsgCreateClient;
                    toAminoMsg(message: _159.MsgCreateClient): _159.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _159.MsgCreateClientProtoMsg): _159.MsgCreateClient;
                    toProto(message: _159.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _159.MsgCreateClient): _159.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _159.MsgCreateClientResponse;
                    fromPartial(_: Partial<_159.MsgCreateClientResponse>): _159.MsgCreateClientResponse;
                    fromAmino(_: _159.MsgCreateClientResponseAmino): _159.MsgCreateClientResponse;
                    toAmino(_: _159.MsgCreateClientResponse): _159.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _159.MsgCreateClientResponseAminoMsg): _159.MsgCreateClientResponse;
                    toAminoMsg(message: _159.MsgCreateClientResponse): _159.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgCreateClientResponseProtoMsg): _159.MsgCreateClientResponse;
                    toProto(message: _159.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgCreateClientResponse): _159.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _159.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.MsgUpdateClient;
                    fromPartial(object: Partial<_159.MsgUpdateClient>): _159.MsgUpdateClient;
                    fromAmino(object: _159.MsgUpdateClientAmino): _159.MsgUpdateClient;
                    toAmino(message: _159.MsgUpdateClient): _159.MsgUpdateClientAmino;
                    fromAminoMsg(object: _159.MsgUpdateClientAminoMsg): _159.MsgUpdateClient;
                    toAminoMsg(message: _159.MsgUpdateClient): _159.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _159.MsgUpdateClientProtoMsg): _159.MsgUpdateClient;
                    toProto(message: _159.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _159.MsgUpdateClient): _159.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _159.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_159.MsgUpdateClientResponse>): _159.MsgUpdateClientResponse;
                    fromAmino(_: _159.MsgUpdateClientResponseAmino): _159.MsgUpdateClientResponse;
                    toAmino(_: _159.MsgUpdateClientResponse): _159.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _159.MsgUpdateClientResponseAminoMsg): _159.MsgUpdateClientResponse;
                    toAminoMsg(message: _159.MsgUpdateClientResponse): _159.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgUpdateClientResponseProtoMsg): _159.MsgUpdateClientResponse;
                    toProto(message: _159.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgUpdateClientResponse): _159.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _159.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.MsgUpgradeClient;
                    fromPartial(object: Partial<_159.MsgUpgradeClient>): _159.MsgUpgradeClient;
                    fromAmino(object: _159.MsgUpgradeClientAmino): _159.MsgUpgradeClient;
                    toAmino(message: _159.MsgUpgradeClient): _159.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _159.MsgUpgradeClientAminoMsg): _159.MsgUpgradeClient;
                    toAminoMsg(message: _159.MsgUpgradeClient): _159.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _159.MsgUpgradeClientProtoMsg): _159.MsgUpgradeClient;
                    toProto(message: _159.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _159.MsgUpgradeClient): _159.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _159.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_159.MsgUpgradeClientResponse>): _159.MsgUpgradeClientResponse;
                    fromAmino(_: _159.MsgUpgradeClientResponseAmino): _159.MsgUpgradeClientResponse;
                    toAmino(_: _159.MsgUpgradeClientResponse): _159.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _159.MsgUpgradeClientResponseAminoMsg): _159.MsgUpgradeClientResponse;
                    toAminoMsg(message: _159.MsgUpgradeClientResponse): _159.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgUpgradeClientResponseProtoMsg): _159.MsgUpgradeClientResponse;
                    toProto(message: _159.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgUpgradeClientResponse): _159.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _159.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_159.MsgSubmitMisbehaviour>): _159.MsgSubmitMisbehaviour;
                    fromAmino(object: _159.MsgSubmitMisbehaviourAmino): _159.MsgSubmitMisbehaviour;
                    toAmino(message: _159.MsgSubmitMisbehaviour): _159.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _159.MsgSubmitMisbehaviourAminoMsg): _159.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _159.MsgSubmitMisbehaviour): _159.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _159.MsgSubmitMisbehaviourProtoMsg): _159.MsgSubmitMisbehaviour;
                    toProto(message: _159.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _159.MsgSubmitMisbehaviour): _159.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _159.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_159.MsgSubmitMisbehaviourResponse>): _159.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _159.MsgSubmitMisbehaviourResponseAmino): _159.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _159.MsgSubmitMisbehaviourResponse): _159.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _159.MsgSubmitMisbehaviourResponseAminoMsg): _159.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _159.MsgSubmitMisbehaviourResponse): _159.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgSubmitMisbehaviourResponseProtoMsg): _159.MsgSubmitMisbehaviourResponse;
                    toProto(message: _159.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgSubmitMisbehaviourResponse): _159.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryClientStateRequest;
                    fromPartial(object: Partial<_158.QueryClientStateRequest>): _158.QueryClientStateRequest;
                    fromAmino(object: _158.QueryClientStateRequestAmino): _158.QueryClientStateRequest;
                    toAmino(message: _158.QueryClientStateRequest): _158.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _158.QueryClientStateRequestAminoMsg): _158.QueryClientStateRequest;
                    toAminoMsg(message: _158.QueryClientStateRequest): _158.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryClientStateRequestProtoMsg): _158.QueryClientStateRequest;
                    toProto(message: _158.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryClientStateRequest): _158.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryClientStateResponse;
                    fromPartial(object: Partial<_158.QueryClientStateResponse>): _158.QueryClientStateResponse;
                    fromAmino(object: _158.QueryClientStateResponseAmino): _158.QueryClientStateResponse;
                    toAmino(message: _158.QueryClientStateResponse): _158.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _158.QueryClientStateResponseAminoMsg): _158.QueryClientStateResponse;
                    toAminoMsg(message: _158.QueryClientStateResponse): _158.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryClientStateResponseProtoMsg): _158.QueryClientStateResponse;
                    toProto(message: _158.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryClientStateResponse): _158.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryClientStatesRequest;
                    fromPartial(object: Partial<_158.QueryClientStatesRequest>): _158.QueryClientStatesRequest;
                    fromAmino(object: _158.QueryClientStatesRequestAmino): _158.QueryClientStatesRequest;
                    toAmino(message: _158.QueryClientStatesRequest): _158.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _158.QueryClientStatesRequestAminoMsg): _158.QueryClientStatesRequest;
                    toAminoMsg(message: _158.QueryClientStatesRequest): _158.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryClientStatesRequestProtoMsg): _158.QueryClientStatesRequest;
                    toProto(message: _158.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryClientStatesRequest): _158.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryClientStatesResponse;
                    fromPartial(object: Partial<_158.QueryClientStatesResponse>): _158.QueryClientStatesResponse;
                    fromAmino(object: _158.QueryClientStatesResponseAmino): _158.QueryClientStatesResponse;
                    toAmino(message: _158.QueryClientStatesResponse): _158.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _158.QueryClientStatesResponseAminoMsg): _158.QueryClientStatesResponse;
                    toAminoMsg(message: _158.QueryClientStatesResponse): _158.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryClientStatesResponseProtoMsg): _158.QueryClientStatesResponse;
                    toProto(message: _158.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryClientStatesResponse): _158.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_158.QueryConsensusStateRequest>): _158.QueryConsensusStateRequest;
                    fromAmino(object: _158.QueryConsensusStateRequestAmino): _158.QueryConsensusStateRequest;
                    toAmino(message: _158.QueryConsensusStateRequest): _158.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _158.QueryConsensusStateRequestAminoMsg): _158.QueryConsensusStateRequest;
                    toAminoMsg(message: _158.QueryConsensusStateRequest): _158.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryConsensusStateRequestProtoMsg): _158.QueryConsensusStateRequest;
                    toProto(message: _158.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryConsensusStateRequest): _158.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_158.QueryConsensusStateResponse>): _158.QueryConsensusStateResponse;
                    fromAmino(object: _158.QueryConsensusStateResponseAmino): _158.QueryConsensusStateResponse;
                    toAmino(message: _158.QueryConsensusStateResponse): _158.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _158.QueryConsensusStateResponseAminoMsg): _158.QueryConsensusStateResponse;
                    toAminoMsg(message: _158.QueryConsensusStateResponse): _158.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryConsensusStateResponseProtoMsg): _158.QueryConsensusStateResponse;
                    toProto(message: _158.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryConsensusStateResponse): _158.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_158.QueryConsensusStatesRequest>): _158.QueryConsensusStatesRequest;
                    fromAmino(object: _158.QueryConsensusStatesRequestAmino): _158.QueryConsensusStatesRequest;
                    toAmino(message: _158.QueryConsensusStatesRequest): _158.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _158.QueryConsensusStatesRequestAminoMsg): _158.QueryConsensusStatesRequest;
                    toAminoMsg(message: _158.QueryConsensusStatesRequest): _158.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryConsensusStatesRequestProtoMsg): _158.QueryConsensusStatesRequest;
                    toProto(message: _158.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryConsensusStatesRequest): _158.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_158.QueryConsensusStatesResponse>): _158.QueryConsensusStatesResponse;
                    fromAmino(object: _158.QueryConsensusStatesResponseAmino): _158.QueryConsensusStatesResponse;
                    toAmino(message: _158.QueryConsensusStatesResponse): _158.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _158.QueryConsensusStatesResponseAminoMsg): _158.QueryConsensusStatesResponse;
                    toAminoMsg(message: _158.QueryConsensusStatesResponse): _158.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryConsensusStatesResponseProtoMsg): _158.QueryConsensusStatesResponse;
                    toProto(message: _158.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryConsensusStatesResponse): _158.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_158.QueryConsensusStateHeightsRequest>): _158.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _158.QueryConsensusStateHeightsRequestAmino): _158.QueryConsensusStateHeightsRequest;
                    toAmino(message: _158.QueryConsensusStateHeightsRequest): _158.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _158.QueryConsensusStateHeightsRequestAminoMsg): _158.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _158.QueryConsensusStateHeightsRequest): _158.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryConsensusStateHeightsRequestProtoMsg): _158.QueryConsensusStateHeightsRequest;
                    toProto(message: _158.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryConsensusStateHeightsRequest): _158.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_158.QueryConsensusStateHeightsResponse>): _158.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _158.QueryConsensusStateHeightsResponseAmino): _158.QueryConsensusStateHeightsResponse;
                    toAmino(message: _158.QueryConsensusStateHeightsResponse): _158.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _158.QueryConsensusStateHeightsResponseAminoMsg): _158.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _158.QueryConsensusStateHeightsResponse): _158.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryConsensusStateHeightsResponseProtoMsg): _158.QueryConsensusStateHeightsResponse;
                    toProto(message: _158.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryConsensusStateHeightsResponse): _158.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryClientStatusRequest;
                    fromPartial(object: Partial<_158.QueryClientStatusRequest>): _158.QueryClientStatusRequest;
                    fromAmino(object: _158.QueryClientStatusRequestAmino): _158.QueryClientStatusRequest;
                    toAmino(message: _158.QueryClientStatusRequest): _158.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _158.QueryClientStatusRequestAminoMsg): _158.QueryClientStatusRequest;
                    toAminoMsg(message: _158.QueryClientStatusRequest): _158.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryClientStatusRequestProtoMsg): _158.QueryClientStatusRequest;
                    toProto(message: _158.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryClientStatusRequest): _158.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryClientStatusResponse;
                    fromPartial(object: Partial<_158.QueryClientStatusResponse>): _158.QueryClientStatusResponse;
                    fromAmino(object: _158.QueryClientStatusResponseAmino): _158.QueryClientStatusResponse;
                    toAmino(message: _158.QueryClientStatusResponse): _158.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _158.QueryClientStatusResponseAminoMsg): _158.QueryClientStatusResponse;
                    toAminoMsg(message: _158.QueryClientStatusResponse): _158.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryClientStatusResponseProtoMsg): _158.QueryClientStatusResponse;
                    toProto(message: _158.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryClientStatusResponse): _158.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _158.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _158.QueryClientParamsRequest;
                    fromPartial(_: Partial<_158.QueryClientParamsRequest>): _158.QueryClientParamsRequest;
                    fromAmino(_: _158.QueryClientParamsRequestAmino): _158.QueryClientParamsRequest;
                    toAmino(_: _158.QueryClientParamsRequest): _158.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _158.QueryClientParamsRequestAminoMsg): _158.QueryClientParamsRequest;
                    toAminoMsg(message: _158.QueryClientParamsRequest): _158.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryClientParamsRequestProtoMsg): _158.QueryClientParamsRequest;
                    toProto(message: _158.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryClientParamsRequest): _158.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryClientParamsResponse;
                    fromPartial(object: Partial<_158.QueryClientParamsResponse>): _158.QueryClientParamsResponse;
                    fromAmino(object: _158.QueryClientParamsResponseAmino): _158.QueryClientParamsResponse;
                    toAmino(message: _158.QueryClientParamsResponse): _158.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _158.QueryClientParamsResponseAminoMsg): _158.QueryClientParamsResponse;
                    toAminoMsg(message: _158.QueryClientParamsResponse): _158.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryClientParamsResponseProtoMsg): _158.QueryClientParamsResponse;
                    toProto(message: _158.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryClientParamsResponse): _158.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _158.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _158.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_158.QueryUpgradedClientStateRequest>): _158.QueryUpgradedClientStateRequest;
                    fromAmino(_: _158.QueryUpgradedClientStateRequestAmino): _158.QueryUpgradedClientStateRequest;
                    toAmino(_: _158.QueryUpgradedClientStateRequest): _158.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _158.QueryUpgradedClientStateRequestAminoMsg): _158.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _158.QueryUpgradedClientStateRequest): _158.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryUpgradedClientStateRequestProtoMsg): _158.QueryUpgradedClientStateRequest;
                    toProto(message: _158.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryUpgradedClientStateRequest): _158.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_158.QueryUpgradedClientStateResponse>): _158.QueryUpgradedClientStateResponse;
                    fromAmino(object: _158.QueryUpgradedClientStateResponseAmino): _158.QueryUpgradedClientStateResponse;
                    toAmino(message: _158.QueryUpgradedClientStateResponse): _158.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _158.QueryUpgradedClientStateResponseAminoMsg): _158.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _158.QueryUpgradedClientStateResponse): _158.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryUpgradedClientStateResponseProtoMsg): _158.QueryUpgradedClientStateResponse;
                    toProto(message: _158.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryUpgradedClientStateResponse): _158.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _158.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _158.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_158.QueryUpgradedConsensusStateRequest>): _158.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _158.QueryUpgradedConsensusStateRequestAmino): _158.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _158.QueryUpgradedConsensusStateRequest): _158.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _158.QueryUpgradedConsensusStateRequestAminoMsg): _158.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _158.QueryUpgradedConsensusStateRequest): _158.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryUpgradedConsensusStateRequestProtoMsg): _158.QueryUpgradedConsensusStateRequest;
                    toProto(message: _158.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryUpgradedConsensusStateRequest): _158.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_158.QueryUpgradedConsensusStateResponse>): _158.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _158.QueryUpgradedConsensusStateResponseAmino): _158.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _158.QueryUpgradedConsensusStateResponse): _158.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _158.QueryUpgradedConsensusStateResponseAminoMsg): _158.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _158.QueryUpgradedConsensusStateResponse): _158.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryUpgradedConsensusStateResponseProtoMsg): _158.QueryUpgradedConsensusStateResponse;
                    toProto(message: _158.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryUpgradedConsensusStateResponse): _158.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _157.GenesisState;
                    fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                    fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                    toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                    fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                    toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                    fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                    toProto(message: _157.GenesisState): Uint8Array;
                    toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _157.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _157.GenesisMetadata;
                    fromPartial(object: Partial<_157.GenesisMetadata>): _157.GenesisMetadata;
                    fromAmino(object: _157.GenesisMetadataAmino): _157.GenesisMetadata;
                    toAmino(message: _157.GenesisMetadata): _157.GenesisMetadataAmino;
                    fromAminoMsg(object: _157.GenesisMetadataAminoMsg): _157.GenesisMetadata;
                    toAminoMsg(message: _157.GenesisMetadata): _157.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _157.GenesisMetadataProtoMsg): _157.GenesisMetadata;
                    toProto(message: _157.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _157.GenesisMetadata): _157.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _157.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _157.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_157.IdentifiedGenesisMetadata>): _157.IdentifiedGenesisMetadata;
                    fromAmino(object: _157.IdentifiedGenesisMetadataAmino): _157.IdentifiedGenesisMetadata;
                    toAmino(message: _157.IdentifiedGenesisMetadata): _157.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _157.IdentifiedGenesisMetadataAminoMsg): _157.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _157.IdentifiedGenesisMetadata): _157.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _157.IdentifiedGenesisMetadataProtoMsg): _157.IdentifiedGenesisMetadata;
                    toProto(message: _157.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _157.IdentifiedGenesisMetadata): _157.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _156.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.IdentifiedClientState;
                    fromPartial(object: Partial<_156.IdentifiedClientState>): _156.IdentifiedClientState;
                    fromAmino(object: _156.IdentifiedClientStateAmino): _156.IdentifiedClientState;
                    toAmino(message: _156.IdentifiedClientState): _156.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _156.IdentifiedClientStateAminoMsg): _156.IdentifiedClientState;
                    toAminoMsg(message: _156.IdentifiedClientState): _156.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _156.IdentifiedClientStateProtoMsg): _156.IdentifiedClientState;
                    toProto(message: _156.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _156.IdentifiedClientState): _156.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _156.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_156.ConsensusStateWithHeight>): _156.ConsensusStateWithHeight;
                    fromAmino(object: _156.ConsensusStateWithHeightAmino): _156.ConsensusStateWithHeight;
                    toAmino(message: _156.ConsensusStateWithHeight): _156.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _156.ConsensusStateWithHeightAminoMsg): _156.ConsensusStateWithHeight;
                    toAminoMsg(message: _156.ConsensusStateWithHeight): _156.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _156.ConsensusStateWithHeightProtoMsg): _156.ConsensusStateWithHeight;
                    toProto(message: _156.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _156.ConsensusStateWithHeight): _156.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _156.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.ClientConsensusStates;
                    fromPartial(object: Partial<_156.ClientConsensusStates>): _156.ClientConsensusStates;
                    fromAmino(object: _156.ClientConsensusStatesAmino): _156.ClientConsensusStates;
                    toAmino(message: _156.ClientConsensusStates): _156.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _156.ClientConsensusStatesAminoMsg): _156.ClientConsensusStates;
                    toAminoMsg(message: _156.ClientConsensusStates): _156.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _156.ClientConsensusStatesProtoMsg): _156.ClientConsensusStates;
                    toProto(message: _156.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _156.ClientConsensusStates): _156.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _156.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.ClientUpdateProposal;
                    fromPartial(object: Partial<_156.ClientUpdateProposal>): _156.ClientUpdateProposal;
                    fromAmino(object: _156.ClientUpdateProposalAmino): _156.ClientUpdateProposal;
                    toAmino(message: _156.ClientUpdateProposal): _156.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _156.ClientUpdateProposalAminoMsg): _156.ClientUpdateProposal;
                    toAminoMsg(message: _156.ClientUpdateProposal): _156.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _156.ClientUpdateProposalProtoMsg): _156.ClientUpdateProposal;
                    toProto(message: _156.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _156.ClientUpdateProposal): _156.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _156.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.UpgradeProposal;
                    fromPartial(object: Partial<_156.UpgradeProposal>): _156.UpgradeProposal;
                    fromAmino(object: _156.UpgradeProposalAmino): _156.UpgradeProposal;
                    toAmino(message: _156.UpgradeProposal): _156.UpgradeProposalAmino;
                    fromAminoMsg(object: _156.UpgradeProposalAminoMsg): _156.UpgradeProposal;
                    toAminoMsg(message: _156.UpgradeProposal): _156.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _156.UpgradeProposalProtoMsg): _156.UpgradeProposal;
                    toProto(message: _156.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _156.UpgradeProposal): _156.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _156.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.Height;
                    fromPartial(object: Partial<_156.Height>): _156.Height;
                    fromAmino(object: _156.HeightAmino): _156.Height;
                    toAmino(message: _156.Height): _156.HeightAmino;
                    fromAminoMsg(object: _156.HeightAminoMsg): _156.Height;
                    toAminoMsg(message: _156.Height): _156.HeightAminoMsg;
                    fromProtoMsg(message: _156.HeightProtoMsg): _156.Height;
                    toProto(message: _156.Height): Uint8Array;
                    toProtoMsg(message: _156.Height): _156.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _156.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _156.Params;
                    fromPartial(object: Partial<_156.Params>): _156.Params;
                    fromAmino(object: _156.ParamsAmino): _156.Params;
                    toAmino(message: _156.Params): _156.ParamsAmino;
                    fromAminoMsg(object: _156.ParamsAminoMsg): _156.Params;
                    toAminoMsg(message: _156.Params): _156.ParamsAminoMsg;
                    fromProtoMsg(message: _156.ParamsProtoMsg): _156.Params;
                    toProto(message: _156.Params): Uint8Array;
                    toProtoMsg(message: _156.Params): _156.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _160.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.MerkleRoot;
                    fromPartial(object: Partial<_160.MerkleRoot>): _160.MerkleRoot;
                    fromAmino(object: _160.MerkleRootAmino): _160.MerkleRoot;
                    toAmino(message: _160.MerkleRoot): _160.MerkleRootAmino;
                    fromAminoMsg(object: _160.MerkleRootAminoMsg): _160.MerkleRoot;
                    toAminoMsg(message: _160.MerkleRoot): _160.MerkleRootAminoMsg;
                    fromProtoMsg(message: _160.MerkleRootProtoMsg): _160.MerkleRoot;
                    toProto(message: _160.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _160.MerkleRoot): _160.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _160.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.MerklePrefix;
                    fromPartial(object: Partial<_160.MerklePrefix>): _160.MerklePrefix;
                    fromAmino(object: _160.MerklePrefixAmino): _160.MerklePrefix;
                    toAmino(message: _160.MerklePrefix): _160.MerklePrefixAmino;
                    fromAminoMsg(object: _160.MerklePrefixAminoMsg): _160.MerklePrefix;
                    toAminoMsg(message: _160.MerklePrefix): _160.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _160.MerklePrefixProtoMsg): _160.MerklePrefix;
                    toProto(message: _160.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _160.MerklePrefix): _160.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _160.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.MerklePath;
                    fromPartial(object: Partial<_160.MerklePath>): _160.MerklePath;
                    fromAmino(object: _160.MerklePathAmino): _160.MerklePath;
                    toAmino(message: _160.MerklePath): _160.MerklePathAmino;
                    fromAminoMsg(object: _160.MerklePathAminoMsg): _160.MerklePath;
                    toAminoMsg(message: _160.MerklePath): _160.MerklePathAminoMsg;
                    fromProtoMsg(message: _160.MerklePathProtoMsg): _160.MerklePath;
                    toProto(message: _160.MerklePath): Uint8Array;
                    toProtoMsg(message: _160.MerklePath): _160.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _160.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.MerkleProof;
                    fromPartial(object: Partial<_160.MerkleProof>): _160.MerkleProof;
                    fromAmino(object: _160.MerkleProofAmino): _160.MerkleProof;
                    toAmino(message: _160.MerkleProof): _160.MerkleProofAmino;
                    fromAminoMsg(object: _160.MerkleProofAminoMsg): _160.MerkleProof;
                    toAminoMsg(message: _160.MerkleProof): _160.MerkleProofAminoMsg;
                    fromProtoMsg(message: _160.MerkleProofProtoMsg): _160.MerkleProof;
                    toProto(message: _160.MerkleProof): Uint8Array;
                    toProtoMsg(message: _160.MerkleProof): _160.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _266.MsgClientImpl;
                QueryClientImpl: typeof _262.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _163.QueryConnectionRequest): Promise<_163.QueryConnectionResponse>;
                    connections(request?: _163.QueryConnectionsRequest): Promise<_163.QueryConnectionsResponse>;
                    clientConnections(request: _163.QueryClientConnectionsRequest): Promise<_163.QueryClientConnectionsResponse>;
                    connectionClientState(request: _163.QueryConnectionClientStateRequest): Promise<_163.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _163.QueryConnectionConsensusStateRequest): Promise<_163.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _258.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _164.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _164.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _164.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _164.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _164.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _164.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _164.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _164.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _164.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _164.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _164.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _164.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _164.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _164.MsgConnectionOpenInit) => _164.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _164.MsgConnectionOpenInitAmino) => _164.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _164.MsgConnectionOpenTry) => _164.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _164.MsgConnectionOpenTryAmino) => _164.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _164.MsgConnectionOpenAck) => _164.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _164.MsgConnectionOpenAckAmino) => _164.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _164.MsgConnectionOpenConfirm) => _164.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _164.MsgConnectionOpenConfirmAmino) => _164.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _164.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_164.MsgConnectionOpenInit>): _164.MsgConnectionOpenInit;
                    fromAmino(object: _164.MsgConnectionOpenInitAmino): _164.MsgConnectionOpenInit;
                    toAmino(message: _164.MsgConnectionOpenInit): _164.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenInitAminoMsg): _164.MsgConnectionOpenInit;
                    toAminoMsg(message: _164.MsgConnectionOpenInit): _164.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenInitProtoMsg): _164.MsgConnectionOpenInit;
                    toProto(message: _164.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenInit): _164.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _164.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenInitResponse>): _164.MsgConnectionOpenInitResponse;
                    fromAmino(_: _164.MsgConnectionOpenInitResponseAmino): _164.MsgConnectionOpenInitResponse;
                    toAmino(_: _164.MsgConnectionOpenInitResponse): _164.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenInitResponseAminoMsg): _164.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _164.MsgConnectionOpenInitResponse): _164.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenInitResponseProtoMsg): _164.MsgConnectionOpenInitResponse;
                    toProto(message: _164.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenInitResponse): _164.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _164.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_164.MsgConnectionOpenTry>): _164.MsgConnectionOpenTry;
                    fromAmino(object: _164.MsgConnectionOpenTryAmino): _164.MsgConnectionOpenTry;
                    toAmino(message: _164.MsgConnectionOpenTry): _164.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenTryAminoMsg): _164.MsgConnectionOpenTry;
                    toAminoMsg(message: _164.MsgConnectionOpenTry): _164.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenTryProtoMsg): _164.MsgConnectionOpenTry;
                    toProto(message: _164.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenTry): _164.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _164.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenTryResponse>): _164.MsgConnectionOpenTryResponse;
                    fromAmino(_: _164.MsgConnectionOpenTryResponseAmino): _164.MsgConnectionOpenTryResponse;
                    toAmino(_: _164.MsgConnectionOpenTryResponse): _164.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenTryResponseAminoMsg): _164.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _164.MsgConnectionOpenTryResponse): _164.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenTryResponseProtoMsg): _164.MsgConnectionOpenTryResponse;
                    toProto(message: _164.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenTryResponse): _164.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _164.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_164.MsgConnectionOpenAck>): _164.MsgConnectionOpenAck;
                    fromAmino(object: _164.MsgConnectionOpenAckAmino): _164.MsgConnectionOpenAck;
                    toAmino(message: _164.MsgConnectionOpenAck): _164.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenAckAminoMsg): _164.MsgConnectionOpenAck;
                    toAminoMsg(message: _164.MsgConnectionOpenAck): _164.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenAckProtoMsg): _164.MsgConnectionOpenAck;
                    toProto(message: _164.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenAck): _164.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _164.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenAckResponse>): _164.MsgConnectionOpenAckResponse;
                    fromAmino(_: _164.MsgConnectionOpenAckResponseAmino): _164.MsgConnectionOpenAckResponse;
                    toAmino(_: _164.MsgConnectionOpenAckResponse): _164.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenAckResponseAminoMsg): _164.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _164.MsgConnectionOpenAckResponse): _164.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenAckResponseProtoMsg): _164.MsgConnectionOpenAckResponse;
                    toProto(message: _164.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenAckResponse): _164.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _164.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_164.MsgConnectionOpenConfirm>): _164.MsgConnectionOpenConfirm;
                    fromAmino(object: _164.MsgConnectionOpenConfirmAmino): _164.MsgConnectionOpenConfirm;
                    toAmino(message: _164.MsgConnectionOpenConfirm): _164.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenConfirmAminoMsg): _164.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _164.MsgConnectionOpenConfirm): _164.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenConfirmProtoMsg): _164.MsgConnectionOpenConfirm;
                    toProto(message: _164.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenConfirm): _164.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _164.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenConfirmResponse>): _164.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _164.MsgConnectionOpenConfirmResponseAmino): _164.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _164.MsgConnectionOpenConfirmResponse): _164.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _164.MsgConnectionOpenConfirmResponseAminoMsg): _164.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _164.MsgConnectionOpenConfirmResponse): _164.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgConnectionOpenConfirmResponseProtoMsg): _164.MsgConnectionOpenConfirmResponse;
                    toProto(message: _164.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgConnectionOpenConfirmResponse): _164.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionRequest;
                    fromPartial(object: Partial<_163.QueryConnectionRequest>): _163.QueryConnectionRequest;
                    fromAmino(object: _163.QueryConnectionRequestAmino): _163.QueryConnectionRequest;
                    toAmino(message: _163.QueryConnectionRequest): _163.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _163.QueryConnectionRequestAminoMsg): _163.QueryConnectionRequest;
                    toAminoMsg(message: _163.QueryConnectionRequest): _163.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionRequestProtoMsg): _163.QueryConnectionRequest;
                    toProto(message: _163.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionRequest): _163.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionResponse;
                    fromPartial(object: Partial<_163.QueryConnectionResponse>): _163.QueryConnectionResponse;
                    fromAmino(object: _163.QueryConnectionResponseAmino): _163.QueryConnectionResponse;
                    toAmino(message: _163.QueryConnectionResponse): _163.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _163.QueryConnectionResponseAminoMsg): _163.QueryConnectionResponse;
                    toAminoMsg(message: _163.QueryConnectionResponse): _163.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionResponseProtoMsg): _163.QueryConnectionResponse;
                    toProto(message: _163.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionResponse): _163.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionsRequest;
                    fromPartial(object: Partial<_163.QueryConnectionsRequest>): _163.QueryConnectionsRequest;
                    fromAmino(object: _163.QueryConnectionsRequestAmino): _163.QueryConnectionsRequest;
                    toAmino(message: _163.QueryConnectionsRequest): _163.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _163.QueryConnectionsRequestAminoMsg): _163.QueryConnectionsRequest;
                    toAminoMsg(message: _163.QueryConnectionsRequest): _163.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionsRequestProtoMsg): _163.QueryConnectionsRequest;
                    toProto(message: _163.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionsRequest): _163.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionsResponse;
                    fromPartial(object: Partial<_163.QueryConnectionsResponse>): _163.QueryConnectionsResponse;
                    fromAmino(object: _163.QueryConnectionsResponseAmino): _163.QueryConnectionsResponse;
                    toAmino(message: _163.QueryConnectionsResponse): _163.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _163.QueryConnectionsResponseAminoMsg): _163.QueryConnectionsResponse;
                    toAminoMsg(message: _163.QueryConnectionsResponse): _163.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionsResponseProtoMsg): _163.QueryConnectionsResponse;
                    toProto(message: _163.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionsResponse): _163.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_163.QueryClientConnectionsRequest>): _163.QueryClientConnectionsRequest;
                    fromAmino(object: _163.QueryClientConnectionsRequestAmino): _163.QueryClientConnectionsRequest;
                    toAmino(message: _163.QueryClientConnectionsRequest): _163.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _163.QueryClientConnectionsRequestAminoMsg): _163.QueryClientConnectionsRequest;
                    toAminoMsg(message: _163.QueryClientConnectionsRequest): _163.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryClientConnectionsRequestProtoMsg): _163.QueryClientConnectionsRequest;
                    toProto(message: _163.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryClientConnectionsRequest): _163.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_163.QueryClientConnectionsResponse>): _163.QueryClientConnectionsResponse;
                    fromAmino(object: _163.QueryClientConnectionsResponseAmino): _163.QueryClientConnectionsResponse;
                    toAmino(message: _163.QueryClientConnectionsResponse): _163.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _163.QueryClientConnectionsResponseAminoMsg): _163.QueryClientConnectionsResponse;
                    toAminoMsg(message: _163.QueryClientConnectionsResponse): _163.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryClientConnectionsResponseProtoMsg): _163.QueryClientConnectionsResponse;
                    toProto(message: _163.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryClientConnectionsResponse): _163.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_163.QueryConnectionClientStateRequest>): _163.QueryConnectionClientStateRequest;
                    fromAmino(object: _163.QueryConnectionClientStateRequestAmino): _163.QueryConnectionClientStateRequest;
                    toAmino(message: _163.QueryConnectionClientStateRequest): _163.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _163.QueryConnectionClientStateRequestAminoMsg): _163.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _163.QueryConnectionClientStateRequest): _163.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionClientStateRequestProtoMsg): _163.QueryConnectionClientStateRequest;
                    toProto(message: _163.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionClientStateRequest): _163.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_163.QueryConnectionClientStateResponse>): _163.QueryConnectionClientStateResponse;
                    fromAmino(object: _163.QueryConnectionClientStateResponseAmino): _163.QueryConnectionClientStateResponse;
                    toAmino(message: _163.QueryConnectionClientStateResponse): _163.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _163.QueryConnectionClientStateResponseAminoMsg): _163.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _163.QueryConnectionClientStateResponse): _163.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionClientStateResponseProtoMsg): _163.QueryConnectionClientStateResponse;
                    toProto(message: _163.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionClientStateResponse): _163.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_163.QueryConnectionConsensusStateRequest>): _163.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _163.QueryConnectionConsensusStateRequestAmino): _163.QueryConnectionConsensusStateRequest;
                    toAmino(message: _163.QueryConnectionConsensusStateRequest): _163.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _163.QueryConnectionConsensusStateRequestAminoMsg): _163.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _163.QueryConnectionConsensusStateRequest): _163.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionConsensusStateRequestProtoMsg): _163.QueryConnectionConsensusStateRequest;
                    toProto(message: _163.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionConsensusStateRequest): _163.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_163.QueryConnectionConsensusStateResponse>): _163.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _163.QueryConnectionConsensusStateResponseAmino): _163.QueryConnectionConsensusStateResponse;
                    toAmino(message: _163.QueryConnectionConsensusStateResponse): _163.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _163.QueryConnectionConsensusStateResponseAminoMsg): _163.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _163.QueryConnectionConsensusStateResponse): _163.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionConsensusStateResponseProtoMsg): _163.QueryConnectionConsensusStateResponse;
                    toProto(message: _163.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionConsensusStateResponse): _163.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _162.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.GenesisState;
                    fromPartial(object: Partial<_162.GenesisState>): _162.GenesisState;
                    fromAmino(object: _162.GenesisStateAmino): _162.GenesisState;
                    toAmino(message: _162.GenesisState): _162.GenesisStateAmino;
                    fromAminoMsg(object: _162.GenesisStateAminoMsg): _162.GenesisState;
                    toAminoMsg(message: _162.GenesisState): _162.GenesisStateAminoMsg;
                    fromProtoMsg(message: _162.GenesisStateProtoMsg): _162.GenesisState;
                    toProto(message: _162.GenesisState): Uint8Array;
                    toProtoMsg(message: _162.GenesisState): _162.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _161.State;
                stateToJSON(object: _161.State): string;
                State: typeof _161.State;
                StateSDKType: typeof _161.State;
                StateAmino: typeof _161.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _161.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.ConnectionEnd;
                    fromPartial(object: Partial<_161.ConnectionEnd>): _161.ConnectionEnd;
                    fromAmino(object: _161.ConnectionEndAmino): _161.ConnectionEnd;
                    toAmino(message: _161.ConnectionEnd): _161.ConnectionEndAmino;
                    fromAminoMsg(object: _161.ConnectionEndAminoMsg): _161.ConnectionEnd;
                    toAminoMsg(message: _161.ConnectionEnd): _161.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _161.ConnectionEndProtoMsg): _161.ConnectionEnd;
                    toProto(message: _161.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _161.ConnectionEnd): _161.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _161.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.IdentifiedConnection;
                    fromPartial(object: Partial<_161.IdentifiedConnection>): _161.IdentifiedConnection;
                    fromAmino(object: _161.IdentifiedConnectionAmino): _161.IdentifiedConnection;
                    toAmino(message: _161.IdentifiedConnection): _161.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _161.IdentifiedConnectionAminoMsg): _161.IdentifiedConnection;
                    toAminoMsg(message: _161.IdentifiedConnection): _161.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _161.IdentifiedConnectionProtoMsg): _161.IdentifiedConnection;
                    toProto(message: _161.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _161.IdentifiedConnection): _161.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _161.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.Counterparty;
                    fromPartial(object: Partial<_161.Counterparty>): _161.Counterparty;
                    fromAmino(object: _161.CounterpartyAmino): _161.Counterparty;
                    toAmino(message: _161.Counterparty): _161.CounterpartyAmino;
                    fromAminoMsg(object: _161.CounterpartyAminoMsg): _161.Counterparty;
                    toAminoMsg(message: _161.Counterparty): _161.CounterpartyAminoMsg;
                    fromProtoMsg(message: _161.CounterpartyProtoMsg): _161.Counterparty;
                    toProto(message: _161.Counterparty): Uint8Array;
                    toProtoMsg(message: _161.Counterparty): _161.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _161.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.ClientPaths;
                    fromPartial(object: Partial<_161.ClientPaths>): _161.ClientPaths;
                    fromAmino(object: _161.ClientPathsAmino): _161.ClientPaths;
                    toAmino(message: _161.ClientPaths): _161.ClientPathsAmino;
                    fromAminoMsg(object: _161.ClientPathsAminoMsg): _161.ClientPaths;
                    toAminoMsg(message: _161.ClientPaths): _161.ClientPathsAminoMsg;
                    fromProtoMsg(message: _161.ClientPathsProtoMsg): _161.ClientPaths;
                    toProto(message: _161.ClientPaths): Uint8Array;
                    toProtoMsg(message: _161.ClientPaths): _161.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _161.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.ConnectionPaths;
                    fromPartial(object: Partial<_161.ConnectionPaths>): _161.ConnectionPaths;
                    fromAmino(object: _161.ConnectionPathsAmino): _161.ConnectionPaths;
                    toAmino(message: _161.ConnectionPaths): _161.ConnectionPathsAmino;
                    fromAminoMsg(object: _161.ConnectionPathsAminoMsg): _161.ConnectionPaths;
                    toAminoMsg(message: _161.ConnectionPaths): _161.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _161.ConnectionPathsProtoMsg): _161.ConnectionPaths;
                    toProto(message: _161.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _161.ConnectionPaths): _161.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _161.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.Version;
                    fromPartial(object: Partial<_161.Version>): _161.Version;
                    fromAmino(object: _161.VersionAmino): _161.Version;
                    toAmino(message: _161.Version): _161.VersionAmino;
                    fromAminoMsg(object: _161.VersionAminoMsg): _161.Version;
                    toAminoMsg(message: _161.Version): _161.VersionAminoMsg;
                    fromProtoMsg(message: _161.VersionProtoMsg): _161.Version;
                    toProto(message: _161.Version): Uint8Array;
                    toProtoMsg(message: _161.Version): _161.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _161.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.Params;
                    fromPartial(object: Partial<_161.Params>): _161.Params;
                    fromAmino(object: _161.ParamsAmino): _161.Params;
                    toAmino(message: _161.Params): _161.ParamsAmino;
                    fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
                    toAminoMsg(message: _161.Params): _161.ParamsAminoMsg;
                    fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
                    toProto(message: _161.Params): Uint8Array;
                    toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _165.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.GenesisState;
                    fromPartial(object: Partial<_165.GenesisState>): _165.GenesisState;
                    fromAmino(object: _165.GenesisStateAmino): _165.GenesisState;
                    toAmino(message: _165.GenesisState): _165.GenesisStateAmino;
                    fromAminoMsg(object: _165.GenesisStateAminoMsg): _165.GenesisState;
                    toAminoMsg(message: _165.GenesisState): _165.GenesisStateAminoMsg;
                    fromProtoMsg(message: _165.GenesisStateProtoMsg): _165.GenesisState;
                    toProto(message: _165.GenesisState): Uint8Array;
                    toProtoMsg(message: _165.GenesisState): _165.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _166.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.ClientState;
                    fromPartial(object: Partial<_166.ClientState>): _166.ClientState;
                    fromAmino(object: _166.ClientStateAmino): _166.ClientState;
                    toAmino(message: _166.ClientState): _166.ClientStateAmino;
                    fromAminoMsg(object: _166.ClientStateAminoMsg): _166.ClientState;
                    toAminoMsg(message: _166.ClientState): _166.ClientStateAminoMsg;
                    fromProtoMsg(message: _166.ClientStateProtoMsg): _166.ClientState;
                    toProto(message: _166.ClientState): Uint8Array;
                    toProtoMsg(message: _166.ClientState): _166.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _167.DataType;
                dataTypeToJSON(object: _167.DataType): string;
                DataType: typeof _167.DataType;
                DataTypeSDKType: typeof _167.DataType;
                DataTypeAmino: typeof _167.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _167.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ClientState;
                    fromPartial(object: Partial<_167.ClientState>): _167.ClientState;
                    fromAmino(object: _167.ClientStateAmino): _167.ClientState;
                    toAmino(message: _167.ClientState): _167.ClientStateAmino;
                    fromAminoMsg(object: _167.ClientStateAminoMsg): _167.ClientState;
                    toAminoMsg(message: _167.ClientState): _167.ClientStateAminoMsg;
                    fromProtoMsg(message: _167.ClientStateProtoMsg): _167.ClientState;
                    toProto(message: _167.ClientState): Uint8Array;
                    toProtoMsg(message: _167.ClientState): _167.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _167.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ConsensusState;
                    fromPartial(object: Partial<_167.ConsensusState>): _167.ConsensusState;
                    fromAmino(object: _167.ConsensusStateAmino): _167.ConsensusState;
                    toAmino(message: _167.ConsensusState): _167.ConsensusStateAmino;
                    fromAminoMsg(object: _167.ConsensusStateAminoMsg): _167.ConsensusState;
                    toAminoMsg(message: _167.ConsensusState): _167.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _167.ConsensusStateProtoMsg): _167.ConsensusState;
                    toProto(message: _167.ConsensusState): Uint8Array;
                    toProtoMsg(message: _167.ConsensusState): _167.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _167.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.Header;
                    fromPartial(object: Partial<_167.Header>): _167.Header;
                    fromAmino(object: _167.HeaderAmino): _167.Header;
                    toAmino(message: _167.Header): _167.HeaderAmino;
                    fromAminoMsg(object: _167.HeaderAminoMsg): _167.Header;
                    toAminoMsg(message: _167.Header): _167.HeaderAminoMsg;
                    fromProtoMsg(message: _167.HeaderProtoMsg): _167.Header;
                    toProto(message: _167.Header): Uint8Array;
                    toProtoMsg(message: _167.Header): _167.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _167.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.Misbehaviour;
                    fromPartial(object: Partial<_167.Misbehaviour>): _167.Misbehaviour;
                    fromAmino(object: _167.MisbehaviourAmino): _167.Misbehaviour;
                    toAmino(message: _167.Misbehaviour): _167.MisbehaviourAmino;
                    fromAminoMsg(object: _167.MisbehaviourAminoMsg): _167.Misbehaviour;
                    toAminoMsg(message: _167.Misbehaviour): _167.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _167.MisbehaviourProtoMsg): _167.Misbehaviour;
                    toProto(message: _167.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _167.Misbehaviour): _167.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _167.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.SignatureAndData;
                    fromPartial(object: Partial<_167.SignatureAndData>): _167.SignatureAndData;
                    fromAmino(object: _167.SignatureAndDataAmino): _167.SignatureAndData;
                    toAmino(message: _167.SignatureAndData): _167.SignatureAndDataAmino;
                    fromAminoMsg(object: _167.SignatureAndDataAminoMsg): _167.SignatureAndData;
                    toAminoMsg(message: _167.SignatureAndData): _167.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _167.SignatureAndDataProtoMsg): _167.SignatureAndData;
                    toProto(message: _167.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _167.SignatureAndData): _167.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _167.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.TimestampedSignatureData;
                    fromPartial(object: Partial<_167.TimestampedSignatureData>): _167.TimestampedSignatureData;
                    fromAmino(object: _167.TimestampedSignatureDataAmino): _167.TimestampedSignatureData;
                    toAmino(message: _167.TimestampedSignatureData): _167.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _167.TimestampedSignatureDataAminoMsg): _167.TimestampedSignatureData;
                    toAminoMsg(message: _167.TimestampedSignatureData): _167.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _167.TimestampedSignatureDataProtoMsg): _167.TimestampedSignatureData;
                    toProto(message: _167.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _167.TimestampedSignatureData): _167.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _167.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.SignBytes;
                    fromPartial(object: Partial<_167.SignBytes>): _167.SignBytes;
                    fromAmino(object: _167.SignBytesAmino): _167.SignBytes;
                    toAmino(message: _167.SignBytes): _167.SignBytesAmino;
                    fromAminoMsg(object: _167.SignBytesAminoMsg): _167.SignBytes;
                    toAminoMsg(message: _167.SignBytes): _167.SignBytesAminoMsg;
                    fromProtoMsg(message: _167.SignBytesProtoMsg): _167.SignBytes;
                    toProto(message: _167.SignBytes): Uint8Array;
                    toProtoMsg(message: _167.SignBytes): _167.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _167.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.HeaderData;
                    fromPartial(object: Partial<_167.HeaderData>): _167.HeaderData;
                    fromAmino(object: _167.HeaderDataAmino): _167.HeaderData;
                    toAmino(message: _167.HeaderData): _167.HeaderDataAmino;
                    fromAminoMsg(object: _167.HeaderDataAminoMsg): _167.HeaderData;
                    toAminoMsg(message: _167.HeaderData): _167.HeaderDataAminoMsg;
                    fromProtoMsg(message: _167.HeaderDataProtoMsg): _167.HeaderData;
                    toProto(message: _167.HeaderData): Uint8Array;
                    toProtoMsg(message: _167.HeaderData): _167.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _167.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ClientStateData;
                    fromPartial(object: Partial<_167.ClientStateData>): _167.ClientStateData;
                    fromAmino(object: _167.ClientStateDataAmino): _167.ClientStateData;
                    toAmino(message: _167.ClientStateData): _167.ClientStateDataAmino;
                    fromAminoMsg(object: _167.ClientStateDataAminoMsg): _167.ClientStateData;
                    toAminoMsg(message: _167.ClientStateData): _167.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _167.ClientStateDataProtoMsg): _167.ClientStateData;
                    toProto(message: _167.ClientStateData): Uint8Array;
                    toProtoMsg(message: _167.ClientStateData): _167.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _167.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ConsensusStateData;
                    fromPartial(object: Partial<_167.ConsensusStateData>): _167.ConsensusStateData;
                    fromAmino(object: _167.ConsensusStateDataAmino): _167.ConsensusStateData;
                    toAmino(message: _167.ConsensusStateData): _167.ConsensusStateDataAmino;
                    fromAminoMsg(object: _167.ConsensusStateDataAminoMsg): _167.ConsensusStateData;
                    toAminoMsg(message: _167.ConsensusStateData): _167.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _167.ConsensusStateDataProtoMsg): _167.ConsensusStateData;
                    toProto(message: _167.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _167.ConsensusStateData): _167.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _167.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ConnectionStateData;
                    fromPartial(object: Partial<_167.ConnectionStateData>): _167.ConnectionStateData;
                    fromAmino(object: _167.ConnectionStateDataAmino): _167.ConnectionStateData;
                    toAmino(message: _167.ConnectionStateData): _167.ConnectionStateDataAmino;
                    fromAminoMsg(object: _167.ConnectionStateDataAminoMsg): _167.ConnectionStateData;
                    toAminoMsg(message: _167.ConnectionStateData): _167.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _167.ConnectionStateDataProtoMsg): _167.ConnectionStateData;
                    toProto(message: _167.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _167.ConnectionStateData): _167.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _167.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.ChannelStateData;
                    fromPartial(object: Partial<_167.ChannelStateData>): _167.ChannelStateData;
                    fromAmino(object: _167.ChannelStateDataAmino): _167.ChannelStateData;
                    toAmino(message: _167.ChannelStateData): _167.ChannelStateDataAmino;
                    fromAminoMsg(object: _167.ChannelStateDataAminoMsg): _167.ChannelStateData;
                    toAminoMsg(message: _167.ChannelStateData): _167.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _167.ChannelStateDataProtoMsg): _167.ChannelStateData;
                    toProto(message: _167.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _167.ChannelStateData): _167.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _167.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.PacketCommitmentData;
                    fromPartial(object: Partial<_167.PacketCommitmentData>): _167.PacketCommitmentData;
                    fromAmino(object: _167.PacketCommitmentDataAmino): _167.PacketCommitmentData;
                    toAmino(message: _167.PacketCommitmentData): _167.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _167.PacketCommitmentDataAminoMsg): _167.PacketCommitmentData;
                    toAminoMsg(message: _167.PacketCommitmentData): _167.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _167.PacketCommitmentDataProtoMsg): _167.PacketCommitmentData;
                    toProto(message: _167.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _167.PacketCommitmentData): _167.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _167.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.PacketAcknowledgementData;
                    fromPartial(object: Partial<_167.PacketAcknowledgementData>): _167.PacketAcknowledgementData;
                    fromAmino(object: _167.PacketAcknowledgementDataAmino): _167.PacketAcknowledgementData;
                    toAmino(message: _167.PacketAcknowledgementData): _167.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _167.PacketAcknowledgementDataAminoMsg): _167.PacketAcknowledgementData;
                    toAminoMsg(message: _167.PacketAcknowledgementData): _167.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _167.PacketAcknowledgementDataProtoMsg): _167.PacketAcknowledgementData;
                    toProto(message: _167.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _167.PacketAcknowledgementData): _167.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _167.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_167.PacketReceiptAbsenceData>): _167.PacketReceiptAbsenceData;
                    fromAmino(object: _167.PacketReceiptAbsenceDataAmino): _167.PacketReceiptAbsenceData;
                    toAmino(message: _167.PacketReceiptAbsenceData): _167.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _167.PacketReceiptAbsenceDataAminoMsg): _167.PacketReceiptAbsenceData;
                    toAminoMsg(message: _167.PacketReceiptAbsenceData): _167.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _167.PacketReceiptAbsenceDataProtoMsg): _167.PacketReceiptAbsenceData;
                    toProto(message: _167.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _167.PacketReceiptAbsenceData): _167.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _167.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.NextSequenceRecvData;
                    fromPartial(object: Partial<_167.NextSequenceRecvData>): _167.NextSequenceRecvData;
                    fromAmino(object: _167.NextSequenceRecvDataAmino): _167.NextSequenceRecvData;
                    toAmino(message: _167.NextSequenceRecvData): _167.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _167.NextSequenceRecvDataAminoMsg): _167.NextSequenceRecvData;
                    toAminoMsg(message: _167.NextSequenceRecvData): _167.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _167.NextSequenceRecvDataProtoMsg): _167.NextSequenceRecvData;
                    toProto(message: _167.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _167.NextSequenceRecvData): _167.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _168.DataType;
                dataTypeToJSON(object: _168.DataType): string;
                DataType: typeof _168.DataType;
                DataTypeSDKType: typeof _168.DataType;
                DataTypeAmino: typeof _168.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _168.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.ClientState;
                    fromPartial(object: Partial<_168.ClientState>): _168.ClientState;
                    fromAmino(object: _168.ClientStateAmino): _168.ClientState;
                    toAmino(message: _168.ClientState): _168.ClientStateAmino;
                    fromAminoMsg(object: _168.ClientStateAminoMsg): _168.ClientState;
                    toAminoMsg(message: _168.ClientState): _168.ClientStateAminoMsg;
                    fromProtoMsg(message: _168.ClientStateProtoMsg): _168.ClientState;
                    toProto(message: _168.ClientState): Uint8Array;
                    toProtoMsg(message: _168.ClientState): _168.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _168.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.ConsensusState;
                    fromPartial(object: Partial<_168.ConsensusState>): _168.ConsensusState;
                    fromAmino(object: _168.ConsensusStateAmino): _168.ConsensusState;
                    toAmino(message: _168.ConsensusState): _168.ConsensusStateAmino;
                    fromAminoMsg(object: _168.ConsensusStateAminoMsg): _168.ConsensusState;
                    toAminoMsg(message: _168.ConsensusState): _168.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _168.ConsensusStateProtoMsg): _168.ConsensusState;
                    toProto(message: _168.ConsensusState): Uint8Array;
                    toProtoMsg(message: _168.ConsensusState): _168.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _168.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.Header;
                    fromPartial(object: Partial<_168.Header>): _168.Header;
                    fromAmino(object: _168.HeaderAmino): _168.Header;
                    toAmino(message: _168.Header): _168.HeaderAmino;
                    fromAminoMsg(object: _168.HeaderAminoMsg): _168.Header;
                    toAminoMsg(message: _168.Header): _168.HeaderAminoMsg;
                    fromProtoMsg(message: _168.HeaderProtoMsg): _168.Header;
                    toProto(message: _168.Header): Uint8Array;
                    toProtoMsg(message: _168.Header): _168.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _168.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.Misbehaviour;
                    fromPartial(object: Partial<_168.Misbehaviour>): _168.Misbehaviour;
                    fromAmino(object: _168.MisbehaviourAmino): _168.Misbehaviour;
                    toAmino(message: _168.Misbehaviour): _168.MisbehaviourAmino;
                    fromAminoMsg(object: _168.MisbehaviourAminoMsg): _168.Misbehaviour;
                    toAminoMsg(message: _168.Misbehaviour): _168.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _168.MisbehaviourProtoMsg): _168.Misbehaviour;
                    toProto(message: _168.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _168.Misbehaviour): _168.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _168.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.SignatureAndData;
                    fromPartial(object: Partial<_168.SignatureAndData>): _168.SignatureAndData;
                    fromAmino(object: _168.SignatureAndDataAmino): _168.SignatureAndData;
                    toAmino(message: _168.SignatureAndData): _168.SignatureAndDataAmino;
                    fromAminoMsg(object: _168.SignatureAndDataAminoMsg): _168.SignatureAndData;
                    toAminoMsg(message: _168.SignatureAndData): _168.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _168.SignatureAndDataProtoMsg): _168.SignatureAndData;
                    toProto(message: _168.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _168.SignatureAndData): _168.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _168.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.TimestampedSignatureData;
                    fromPartial(object: Partial<_168.TimestampedSignatureData>): _168.TimestampedSignatureData;
                    fromAmino(object: _168.TimestampedSignatureDataAmino): _168.TimestampedSignatureData;
                    toAmino(message: _168.TimestampedSignatureData): _168.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _168.TimestampedSignatureDataAminoMsg): _168.TimestampedSignatureData;
                    toAminoMsg(message: _168.TimestampedSignatureData): _168.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _168.TimestampedSignatureDataProtoMsg): _168.TimestampedSignatureData;
                    toProto(message: _168.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _168.TimestampedSignatureData): _168.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _168.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.SignBytes;
                    fromPartial(object: Partial<_168.SignBytes>): _168.SignBytes;
                    fromAmino(object: _168.SignBytesAmino): _168.SignBytes;
                    toAmino(message: _168.SignBytes): _168.SignBytesAmino;
                    fromAminoMsg(object: _168.SignBytesAminoMsg): _168.SignBytes;
                    toAminoMsg(message: _168.SignBytes): _168.SignBytesAminoMsg;
                    fromProtoMsg(message: _168.SignBytesProtoMsg): _168.SignBytes;
                    toProto(message: _168.SignBytes): Uint8Array;
                    toProtoMsg(message: _168.SignBytes): _168.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _168.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.HeaderData;
                    fromPartial(object: Partial<_168.HeaderData>): _168.HeaderData;
                    fromAmino(object: _168.HeaderDataAmino): _168.HeaderData;
                    toAmino(message: _168.HeaderData): _168.HeaderDataAmino;
                    fromAminoMsg(object: _168.HeaderDataAminoMsg): _168.HeaderData;
                    toAminoMsg(message: _168.HeaderData): _168.HeaderDataAminoMsg;
                    fromProtoMsg(message: _168.HeaderDataProtoMsg): _168.HeaderData;
                    toProto(message: _168.HeaderData): Uint8Array;
                    toProtoMsg(message: _168.HeaderData): _168.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _168.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.ClientStateData;
                    fromPartial(object: Partial<_168.ClientStateData>): _168.ClientStateData;
                    fromAmino(object: _168.ClientStateDataAmino): _168.ClientStateData;
                    toAmino(message: _168.ClientStateData): _168.ClientStateDataAmino;
                    fromAminoMsg(object: _168.ClientStateDataAminoMsg): _168.ClientStateData;
                    toAminoMsg(message: _168.ClientStateData): _168.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _168.ClientStateDataProtoMsg): _168.ClientStateData;
                    toProto(message: _168.ClientStateData): Uint8Array;
                    toProtoMsg(message: _168.ClientStateData): _168.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _168.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.ConsensusStateData;
                    fromPartial(object: Partial<_168.ConsensusStateData>): _168.ConsensusStateData;
                    fromAmino(object: _168.ConsensusStateDataAmino): _168.ConsensusStateData;
                    toAmino(message: _168.ConsensusStateData): _168.ConsensusStateDataAmino;
                    fromAminoMsg(object: _168.ConsensusStateDataAminoMsg): _168.ConsensusStateData;
                    toAminoMsg(message: _168.ConsensusStateData): _168.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _168.ConsensusStateDataProtoMsg): _168.ConsensusStateData;
                    toProto(message: _168.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _168.ConsensusStateData): _168.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _168.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.ConnectionStateData;
                    fromPartial(object: Partial<_168.ConnectionStateData>): _168.ConnectionStateData;
                    fromAmino(object: _168.ConnectionStateDataAmino): _168.ConnectionStateData;
                    toAmino(message: _168.ConnectionStateData): _168.ConnectionStateDataAmino;
                    fromAminoMsg(object: _168.ConnectionStateDataAminoMsg): _168.ConnectionStateData;
                    toAminoMsg(message: _168.ConnectionStateData): _168.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _168.ConnectionStateDataProtoMsg): _168.ConnectionStateData;
                    toProto(message: _168.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _168.ConnectionStateData): _168.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _168.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.ChannelStateData;
                    fromPartial(object: Partial<_168.ChannelStateData>): _168.ChannelStateData;
                    fromAmino(object: _168.ChannelStateDataAmino): _168.ChannelStateData;
                    toAmino(message: _168.ChannelStateData): _168.ChannelStateDataAmino;
                    fromAminoMsg(object: _168.ChannelStateDataAminoMsg): _168.ChannelStateData;
                    toAminoMsg(message: _168.ChannelStateData): _168.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _168.ChannelStateDataProtoMsg): _168.ChannelStateData;
                    toProto(message: _168.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _168.ChannelStateData): _168.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _168.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.PacketCommitmentData;
                    fromPartial(object: Partial<_168.PacketCommitmentData>): _168.PacketCommitmentData;
                    fromAmino(object: _168.PacketCommitmentDataAmino): _168.PacketCommitmentData;
                    toAmino(message: _168.PacketCommitmentData): _168.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _168.PacketCommitmentDataAminoMsg): _168.PacketCommitmentData;
                    toAminoMsg(message: _168.PacketCommitmentData): _168.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _168.PacketCommitmentDataProtoMsg): _168.PacketCommitmentData;
                    toProto(message: _168.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _168.PacketCommitmentData): _168.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _168.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.PacketAcknowledgementData;
                    fromPartial(object: Partial<_168.PacketAcknowledgementData>): _168.PacketAcknowledgementData;
                    fromAmino(object: _168.PacketAcknowledgementDataAmino): _168.PacketAcknowledgementData;
                    toAmino(message: _168.PacketAcknowledgementData): _168.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _168.PacketAcknowledgementDataAminoMsg): _168.PacketAcknowledgementData;
                    toAminoMsg(message: _168.PacketAcknowledgementData): _168.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _168.PacketAcknowledgementDataProtoMsg): _168.PacketAcknowledgementData;
                    toProto(message: _168.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _168.PacketAcknowledgementData): _168.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _168.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_168.PacketReceiptAbsenceData>): _168.PacketReceiptAbsenceData;
                    fromAmino(object: _168.PacketReceiptAbsenceDataAmino): _168.PacketReceiptAbsenceData;
                    toAmino(message: _168.PacketReceiptAbsenceData): _168.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _168.PacketReceiptAbsenceDataAminoMsg): _168.PacketReceiptAbsenceData;
                    toAminoMsg(message: _168.PacketReceiptAbsenceData): _168.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _168.PacketReceiptAbsenceDataProtoMsg): _168.PacketReceiptAbsenceData;
                    toProto(message: _168.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _168.PacketReceiptAbsenceData): _168.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _168.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.NextSequenceRecvData;
                    fromPartial(object: Partial<_168.NextSequenceRecvData>): _168.NextSequenceRecvData;
                    fromAmino(object: _168.NextSequenceRecvDataAmino): _168.NextSequenceRecvData;
                    toAmino(message: _168.NextSequenceRecvData): _168.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _168.NextSequenceRecvDataAminoMsg): _168.NextSequenceRecvData;
                    toAminoMsg(message: _168.NextSequenceRecvData): _168.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _168.NextSequenceRecvDataProtoMsg): _168.NextSequenceRecvData;
                    toProto(message: _168.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _168.NextSequenceRecvData): _168.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _169.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.ClientState;
                    fromPartial(object: Partial<_169.ClientState>): _169.ClientState;
                    fromAmino(object: _169.ClientStateAmino): _169.ClientState;
                    toAmino(message: _169.ClientState): _169.ClientStateAmino;
                    fromAminoMsg(object: _169.ClientStateAminoMsg): _169.ClientState;
                    toAminoMsg(message: _169.ClientState): _169.ClientStateAminoMsg;
                    fromProtoMsg(message: _169.ClientStateProtoMsg): _169.ClientState;
                    toProto(message: _169.ClientState): Uint8Array;
                    toProtoMsg(message: _169.ClientState): _169.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _169.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.ConsensusState;
                    fromPartial(object: Partial<_169.ConsensusState>): _169.ConsensusState;
                    fromAmino(object: _169.ConsensusStateAmino): _169.ConsensusState;
                    toAmino(message: _169.ConsensusState): _169.ConsensusStateAmino;
                    fromAminoMsg(object: _169.ConsensusStateAminoMsg): _169.ConsensusState;
                    toAminoMsg(message: _169.ConsensusState): _169.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _169.ConsensusStateProtoMsg): _169.ConsensusState;
                    toProto(message: _169.ConsensusState): Uint8Array;
                    toProtoMsg(message: _169.ConsensusState): _169.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _169.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.Misbehaviour;
                    fromPartial(object: Partial<_169.Misbehaviour>): _169.Misbehaviour;
                    fromAmino(object: _169.MisbehaviourAmino): _169.Misbehaviour;
                    toAmino(message: _169.Misbehaviour): _169.MisbehaviourAmino;
                    fromAminoMsg(object: _169.MisbehaviourAminoMsg): _169.Misbehaviour;
                    toAminoMsg(message: _169.Misbehaviour): _169.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _169.MisbehaviourProtoMsg): _169.Misbehaviour;
                    toProto(message: _169.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _169.Misbehaviour): _169.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _169.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.Header;
                    fromPartial(object: Partial<_169.Header>): _169.Header;
                    fromAmino(object: _169.HeaderAmino): _169.Header;
                    toAmino(message: _169.Header): _169.HeaderAmino;
                    fromAminoMsg(object: _169.HeaderAminoMsg): _169.Header;
                    toAminoMsg(message: _169.Header): _169.HeaderAminoMsg;
                    fromProtoMsg(message: _169.HeaderProtoMsg): _169.Header;
                    toProto(message: _169.Header): Uint8Array;
                    toProtoMsg(message: _169.Header): _169.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _169.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.Fraction;
                    fromPartial(object: Partial<_169.Fraction>): _169.Fraction;
                    fromAmino(object: _169.FractionAmino): _169.Fraction;
                    toAmino(message: _169.Fraction): _169.FractionAmino;
                    fromAminoMsg(object: _169.FractionAminoMsg): _169.Fraction;
                    toAminoMsg(message: _169.Fraction): _169.FractionAminoMsg;
                    fromProtoMsg(message: _169.FractionProtoMsg): _169.Fraction;
                    toProto(message: _169.Fraction): Uint8Array;
                    toProtoMsg(message: _169.Fraction): _169.FractionProtoMsg;
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
                        v1: _263.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _264.MsgClientImpl;
                    };
                    client: {
                        v1: _265.MsgClientImpl;
                    };
                    connection: {
                        v1: _266.MsgClientImpl;
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
                    transfer: {
                        v1: {
                            denomTrace(request: _148.QueryDenomTraceRequest): Promise<_148.QueryDenomTraceResponse>;
                            denomTraces(request?: _148.QueryDenomTracesRequest): Promise<_148.QueryDenomTracesResponse>;
                            params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                            denomHash(request: _148.QueryDenomHashRequest): Promise<_148.QueryDenomHashResponse>;
                            escrowAddress(request: _148.QueryEscrowAddressRequest): Promise<_148.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _154.QueryChannelRequest): Promise<_154.QueryChannelResponse>;
                            channels(request?: _154.QueryChannelsRequest): Promise<_154.QueryChannelsResponse>;
                            connectionChannels(request: _154.QueryConnectionChannelsRequest): Promise<_154.QueryConnectionChannelsResponse>;
                            channelClientState(request: _154.QueryChannelClientStateRequest): Promise<_154.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _154.QueryChannelConsensusStateRequest): Promise<_154.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _154.QueryPacketCommitmentRequest): Promise<_154.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _154.QueryPacketCommitmentsRequest): Promise<_154.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _154.QueryPacketReceiptRequest): Promise<_154.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _154.QueryPacketAcknowledgementRequest): Promise<_154.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _154.QueryPacketAcknowledgementsRequest): Promise<_154.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _154.QueryUnreceivedPacketsRequest): Promise<_154.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _154.QueryUnreceivedAcksRequest): Promise<_154.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _154.QueryNextSequenceReceiveRequest): Promise<_154.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _158.QueryClientStateRequest): Promise<_158.QueryClientStateResponse>;
                            clientStates(request?: _158.QueryClientStatesRequest): Promise<_158.QueryClientStatesResponse>;
                            consensusState(request: _158.QueryConsensusStateRequest): Promise<_158.QueryConsensusStateResponse>;
                            consensusStates(request: _158.QueryConsensusStatesRequest): Promise<_158.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _158.QueryConsensusStateHeightsRequest): Promise<_158.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _158.QueryClientStatusRequest): Promise<_158.QueryClientStatusResponse>;
                            clientParams(request?: _158.QueryClientParamsRequest): Promise<_158.QueryClientParamsResponse>;
                            upgradedClientState(request?: _158.QueryUpgradedClientStateRequest): Promise<_158.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _158.QueryUpgradedConsensusStateRequest): Promise<_158.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _163.QueryConnectionRequest): Promise<_163.QueryConnectionResponse>;
                            connections(request?: _163.QueryConnectionsRequest): Promise<_163.QueryConnectionsResponse>;
                            clientConnections(request: _163.QueryClientConnectionsRequest): Promise<_163.QueryClientConnectionsResponse>;
                            connectionClientState(request: _163.QueryConnectionClientStateRequest): Promise<_163.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _163.QueryConnectionConsensusStateRequest): Promise<_163.QueryConnectionConsensusStateResponse>;
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
                    transfer: {
                        v1: _255.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _256.LCDQueryClient;
                    };
                    client: {
                        v1: _257.LCDQueryClient;
                    };
                    connection: {
                        v1: _258.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
