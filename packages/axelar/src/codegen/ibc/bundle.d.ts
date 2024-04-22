import * as _157 from "./applications/transfer/v1/genesis";
import * as _158 from "./applications/transfer/v1/query";
import * as _159 from "./applications/transfer/v1/transfer";
import * as _160 from "./applications/transfer/v1/tx";
import * as _161 from "./applications/transfer/v2/packet";
import * as _162 from "./core/channel/v1/channel";
import * as _163 from "./core/channel/v1/genesis";
import * as _164 from "./core/channel/v1/query";
import * as _165 from "./core/channel/v1/tx";
import * as _166 from "./core/client/v1/client";
import * as _167 from "./core/client/v1/genesis";
import * as _168 from "./core/client/v1/query";
import * as _169 from "./core/client/v1/tx";
import * as _170 from "./core/commitment/v1/commitment";
import * as _171 from "./core/connection/v1/connection";
import * as _172 from "./core/connection/v1/genesis";
import * as _173 from "./core/connection/v1/query";
import * as _174 from "./core/connection/v1/tx";
import * as _175 from "./core/types/v1/genesis";
import * as _176 from "./lightclients/localhost/v1/localhost";
import * as _177 from "./lightclients/solomachine/v1/solomachine";
import * as _178 from "./lightclients/solomachine/v2/solomachine";
import * as _179 from "./lightclients/tendermint/v1/tendermint";
import * as _270 from "./applications/transfer/v1/query.lcd";
import * as _271 from "./core/channel/v1/query.lcd";
import * as _272 from "./core/client/v1/query.lcd";
import * as _273 from "./core/connection/v1/query.lcd";
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
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _278.MsgClientImpl;
                QueryClientImpl: typeof _274.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _158.QueryDenomTraceRequest): Promise<_158.QueryDenomTraceResponse>;
                    denomTraces(request?: _158.QueryDenomTracesRequest): Promise<_158.QueryDenomTracesResponse>;
                    params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                    denomHash(request: _158.QueryDenomHashRequest): Promise<_158.QueryDenomHashResponse>;
                    escrowAddress(request: _158.QueryEscrowAddressRequest): Promise<_158.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _270.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _160.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _160.MsgTransfer): {
                            typeUrl: string;
                            value: _160.MsgTransfer;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _160.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _160.MsgTransfer): {
                            typeUrl: string;
                            value: _160.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _160.MsgTransfer) => _160.MsgTransferAmino;
                        fromAmino: (object: _160.MsgTransferAmino) => _160.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _160.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.MsgTransfer;
                    fromPartial(object: Partial<_160.MsgTransfer>): _160.MsgTransfer;
                    fromAmino(object: _160.MsgTransferAmino): _160.MsgTransfer;
                    toAmino(message: _160.MsgTransfer): _160.MsgTransferAmino;
                    fromAminoMsg(object: _160.MsgTransferAminoMsg): _160.MsgTransfer;
                    toAminoMsg(message: _160.MsgTransfer): _160.MsgTransferAminoMsg;
                    fromProtoMsg(message: _160.MsgTransferProtoMsg): _160.MsgTransfer;
                    toProto(message: _160.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _160.MsgTransfer): _160.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _160.MsgTransferResponse;
                    fromPartial(object: Partial<_160.MsgTransferResponse>): _160.MsgTransferResponse;
                    fromAmino(object: _160.MsgTransferResponseAmino): _160.MsgTransferResponse;
                    toAmino(message: _160.MsgTransferResponse): _160.MsgTransferResponseAmino;
                    fromAminoMsg(object: _160.MsgTransferResponseAminoMsg): _160.MsgTransferResponse;
                    toAminoMsg(message: _160.MsgTransferResponse): _160.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgTransferResponseProtoMsg): _160.MsgTransferResponse;
                    toProto(message: _160.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgTransferResponse): _160.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _159.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.DenomTrace;
                    fromPartial(object: Partial<_159.DenomTrace>): _159.DenomTrace;
                    fromAmino(object: _159.DenomTraceAmino): _159.DenomTrace;
                    toAmino(message: _159.DenomTrace): _159.DenomTraceAmino;
                    fromAminoMsg(object: _159.DenomTraceAminoMsg): _159.DenomTrace;
                    toAminoMsg(message: _159.DenomTrace): _159.DenomTraceAminoMsg;
                    fromProtoMsg(message: _159.DenomTraceProtoMsg): _159.DenomTrace;
                    toProto(message: _159.DenomTrace): Uint8Array;
                    toProtoMsg(message: _159.DenomTrace): _159.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _159.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _159.Params;
                    fromPartial(object: Partial<_159.Params>): _159.Params;
                    fromAmino(object: _159.ParamsAmino): _159.Params;
                    toAmino(message: _159.Params): _159.ParamsAmino;
                    fromAminoMsg(object: _159.ParamsAminoMsg): _159.Params;
                    toAminoMsg(message: _159.Params): _159.ParamsAminoMsg;
                    fromProtoMsg(message: _159.ParamsProtoMsg): _159.Params;
                    toProto(message: _159.Params): Uint8Array;
                    toProtoMsg(message: _159.Params): _159.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_158.QueryDenomTraceRequest>): _158.QueryDenomTraceRequest;
                    fromAmino(object: _158.QueryDenomTraceRequestAmino): _158.QueryDenomTraceRequest;
                    toAmino(message: _158.QueryDenomTraceRequest): _158.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _158.QueryDenomTraceRequestAminoMsg): _158.QueryDenomTraceRequest;
                    toAminoMsg(message: _158.QueryDenomTraceRequest): _158.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTraceRequestProtoMsg): _158.QueryDenomTraceRequest;
                    toProto(message: _158.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTraceRequest): _158.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_158.QueryDenomTraceResponse>): _158.QueryDenomTraceResponse;
                    fromAmino(object: _158.QueryDenomTraceResponseAmino): _158.QueryDenomTraceResponse;
                    toAmino(message: _158.QueryDenomTraceResponse): _158.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _158.QueryDenomTraceResponseAminoMsg): _158.QueryDenomTraceResponse;
                    toAminoMsg(message: _158.QueryDenomTraceResponse): _158.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTraceResponseProtoMsg): _158.QueryDenomTraceResponse;
                    toProto(message: _158.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTraceResponse): _158.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_158.QueryDenomTracesRequest>): _158.QueryDenomTracesRequest;
                    fromAmino(object: _158.QueryDenomTracesRequestAmino): _158.QueryDenomTracesRequest;
                    toAmino(message: _158.QueryDenomTracesRequest): _158.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _158.QueryDenomTracesRequestAminoMsg): _158.QueryDenomTracesRequest;
                    toAminoMsg(message: _158.QueryDenomTracesRequest): _158.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTracesRequestProtoMsg): _158.QueryDenomTracesRequest;
                    toProto(message: _158.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTracesRequest): _158.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_158.QueryDenomTracesResponse>): _158.QueryDenomTracesResponse;
                    fromAmino(object: _158.QueryDenomTracesResponseAmino): _158.QueryDenomTracesResponse;
                    toAmino(message: _158.QueryDenomTracesResponse): _158.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _158.QueryDenomTracesResponseAminoMsg): _158.QueryDenomTracesResponse;
                    toAminoMsg(message: _158.QueryDenomTracesResponse): _158.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomTracesResponseProtoMsg): _158.QueryDenomTracesResponse;
                    toProto(message: _158.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomTracesResponse): _158.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _158.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _158.QueryParamsRequest;
                    fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
                    fromAmino(_: _158.QueryParamsRequestAmino): _158.QueryParamsRequest;
                    toAmino(_: _158.QueryParamsRequest): _158.QueryParamsRequestAmino;
                    fromAminoMsg(object: _158.QueryParamsRequestAminoMsg): _158.QueryParamsRequest;
                    toAminoMsg(message: _158.QueryParamsRequest): _158.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryParamsRequestProtoMsg): _158.QueryParamsRequest;
                    toProto(message: _158.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryParamsRequest): _158.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryParamsResponse;
                    fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
                    fromAmino(object: _158.QueryParamsResponseAmino): _158.QueryParamsResponse;
                    toAmino(message: _158.QueryParamsResponse): _158.QueryParamsResponseAmino;
                    fromAminoMsg(object: _158.QueryParamsResponseAminoMsg): _158.QueryParamsResponse;
                    toAminoMsg(message: _158.QueryParamsResponse): _158.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryParamsResponseProtoMsg): _158.QueryParamsResponse;
                    toProto(message: _158.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryParamsResponse): _158.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryDenomHashRequest;
                    fromPartial(object: Partial<_158.QueryDenomHashRequest>): _158.QueryDenomHashRequest;
                    fromAmino(object: _158.QueryDenomHashRequestAmino): _158.QueryDenomHashRequest;
                    toAmino(message: _158.QueryDenomHashRequest): _158.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _158.QueryDenomHashRequestAminoMsg): _158.QueryDenomHashRequest;
                    toAminoMsg(message: _158.QueryDenomHashRequest): _158.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomHashRequestProtoMsg): _158.QueryDenomHashRequest;
                    toProto(message: _158.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomHashRequest): _158.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryDenomHashResponse;
                    fromPartial(object: Partial<_158.QueryDenomHashResponse>): _158.QueryDenomHashResponse;
                    fromAmino(object: _158.QueryDenomHashResponseAmino): _158.QueryDenomHashResponse;
                    toAmino(message: _158.QueryDenomHashResponse): _158.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _158.QueryDenomHashResponseAminoMsg): _158.QueryDenomHashResponse;
                    toAminoMsg(message: _158.QueryDenomHashResponse): _158.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryDenomHashResponseProtoMsg): _158.QueryDenomHashResponse;
                    toProto(message: _158.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryDenomHashResponse): _158.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_158.QueryEscrowAddressRequest>): _158.QueryEscrowAddressRequest;
                    fromAmino(object: _158.QueryEscrowAddressRequestAmino): _158.QueryEscrowAddressRequest;
                    toAmino(message: _158.QueryEscrowAddressRequest): _158.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _158.QueryEscrowAddressRequestAminoMsg): _158.QueryEscrowAddressRequest;
                    toAminoMsg(message: _158.QueryEscrowAddressRequest): _158.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryEscrowAddressRequestProtoMsg): _158.QueryEscrowAddressRequest;
                    toProto(message: _158.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryEscrowAddressRequest): _158.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _158.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_158.QueryEscrowAddressResponse>): _158.QueryEscrowAddressResponse;
                    fromAmino(object: _158.QueryEscrowAddressResponseAmino): _158.QueryEscrowAddressResponse;
                    toAmino(message: _158.QueryEscrowAddressResponse): _158.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _158.QueryEscrowAddressResponseAminoMsg): _158.QueryEscrowAddressResponse;
                    toAminoMsg(message: _158.QueryEscrowAddressResponse): _158.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryEscrowAddressResponseProtoMsg): _158.QueryEscrowAddressResponse;
                    toProto(message: _158.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryEscrowAddressResponse): _158.QueryEscrowAddressResponseProtoMsg;
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
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _161.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _161.FungibleTokenPacketData;
                    fromPartial(object: Partial<_161.FungibleTokenPacketData>): _161.FungibleTokenPacketData;
                    fromAmino(object: _161.FungibleTokenPacketDataAmino): _161.FungibleTokenPacketData;
                    toAmino(message: _161.FungibleTokenPacketData): _161.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _161.FungibleTokenPacketDataAminoMsg): _161.FungibleTokenPacketData;
                    toAminoMsg(message: _161.FungibleTokenPacketData): _161.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _161.FungibleTokenPacketDataProtoMsg): _161.FungibleTokenPacketData;
                    toProto(message: _161.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _161.FungibleTokenPacketData): _161.FungibleTokenPacketDataProtoMsg;
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
                    channel(request: _164.QueryChannelRequest): Promise<_164.QueryChannelResponse>;
                    channels(request?: _164.QueryChannelsRequest): Promise<_164.QueryChannelsResponse>;
                    connectionChannels(request: _164.QueryConnectionChannelsRequest): Promise<_164.QueryConnectionChannelsResponse>;
                    channelClientState(request: _164.QueryChannelClientStateRequest): Promise<_164.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _164.QueryChannelConsensusStateRequest): Promise<_164.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _164.QueryPacketCommitmentRequest): Promise<_164.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _164.QueryPacketCommitmentsRequest): Promise<_164.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _164.QueryPacketReceiptRequest): Promise<_164.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _164.QueryPacketAcknowledgementRequest): Promise<_164.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _164.QueryPacketAcknowledgementsRequest): Promise<_164.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _164.QueryUnreceivedPacketsRequest): Promise<_164.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _164.QueryUnreceivedAcksRequest): Promise<_164.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _164.QueryNextSequenceReceiveRequest): Promise<_164.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _271.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _165.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _165.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _165.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _165.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _165.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _165.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _165.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _165.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _165.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _165.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _165.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _165.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _165.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _165.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _165.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _165.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _165.MsgRecvPacket): {
                            typeUrl: string;
                            value: _165.MsgRecvPacket;
                        };
                        timeout(value: _165.MsgTimeout): {
                            typeUrl: string;
                            value: _165.MsgTimeout;
                        };
                        timeoutOnClose(value: _165.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _165.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _165.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _165.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _165.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _165.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _165.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _165.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _165.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _165.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _165.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _165.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _165.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _165.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _165.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _165.MsgRecvPacket): {
                            typeUrl: string;
                            value: _165.MsgRecvPacket;
                        };
                        timeout(value: _165.MsgTimeout): {
                            typeUrl: string;
                            value: _165.MsgTimeout;
                        };
                        timeoutOnClose(value: _165.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _165.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _165.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _165.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenInit) => _165.MsgChannelOpenInitAmino;
                        fromAmino: (object: _165.MsgChannelOpenInitAmino) => _165.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenTry) => _165.MsgChannelOpenTryAmino;
                        fromAmino: (object: _165.MsgChannelOpenTryAmino) => _165.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenAck) => _165.MsgChannelOpenAckAmino;
                        fromAmino: (object: _165.MsgChannelOpenAckAmino) => _165.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelOpenConfirm) => _165.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _165.MsgChannelOpenConfirmAmino) => _165.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelCloseInit) => _165.MsgChannelCloseInitAmino;
                        fromAmino: (object: _165.MsgChannelCloseInitAmino) => _165.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _165.MsgChannelCloseConfirm) => _165.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _165.MsgChannelCloseConfirmAmino) => _165.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _165.MsgRecvPacket) => _165.MsgRecvPacketAmino;
                        fromAmino: (object: _165.MsgRecvPacketAmino) => _165.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _165.MsgTimeout) => _165.MsgTimeoutAmino;
                        fromAmino: (object: _165.MsgTimeoutAmino) => _165.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _165.MsgTimeoutOnClose) => _165.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _165.MsgTimeoutOnCloseAmino) => _165.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _165.MsgAcknowledgement) => _165.MsgAcknowledgementAmino;
                        fromAmino: (object: _165.MsgAcknowledgementAmino) => _165.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _165.ResponseResultType;
                responseResultTypeToJSON(object: _165.ResponseResultType): string;
                ResponseResultType: typeof _165.ResponseResultType;
                ResponseResultTypeSDKType: typeof _165.ResponseResultType;
                ResponseResultTypeAmino: typeof _165.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelOpenInit;
                    fromPartial(object: Partial<_165.MsgChannelOpenInit>): _165.MsgChannelOpenInit;
                    fromAmino(object: _165.MsgChannelOpenInitAmino): _165.MsgChannelOpenInit;
                    toAmino(message: _165.MsgChannelOpenInit): _165.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenInitAminoMsg): _165.MsgChannelOpenInit;
                    toAminoMsg(message: _165.MsgChannelOpenInit): _165.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenInitProtoMsg): _165.MsgChannelOpenInit;
                    toProto(message: _165.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenInit): _165.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_165.MsgChannelOpenInitResponse>): _165.MsgChannelOpenInitResponse;
                    fromAmino(object: _165.MsgChannelOpenInitResponseAmino): _165.MsgChannelOpenInitResponse;
                    toAmino(message: _165.MsgChannelOpenInitResponse): _165.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenInitResponseAminoMsg): _165.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _165.MsgChannelOpenInitResponse): _165.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenInitResponseProtoMsg): _165.MsgChannelOpenInitResponse;
                    toProto(message: _165.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenInitResponse): _165.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelOpenTry;
                    fromPartial(object: Partial<_165.MsgChannelOpenTry>): _165.MsgChannelOpenTry;
                    fromAmino(object: _165.MsgChannelOpenTryAmino): _165.MsgChannelOpenTry;
                    toAmino(message: _165.MsgChannelOpenTry): _165.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenTryAminoMsg): _165.MsgChannelOpenTry;
                    toAminoMsg(message: _165.MsgChannelOpenTry): _165.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenTryProtoMsg): _165.MsgChannelOpenTry;
                    toProto(message: _165.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenTry): _165.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_165.MsgChannelOpenTryResponse>): _165.MsgChannelOpenTryResponse;
                    fromAmino(object: _165.MsgChannelOpenTryResponseAmino): _165.MsgChannelOpenTryResponse;
                    toAmino(message: _165.MsgChannelOpenTryResponse): _165.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenTryResponseAminoMsg): _165.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _165.MsgChannelOpenTryResponse): _165.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenTryResponseProtoMsg): _165.MsgChannelOpenTryResponse;
                    toProto(message: _165.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenTryResponse): _165.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelOpenAck;
                    fromPartial(object: Partial<_165.MsgChannelOpenAck>): _165.MsgChannelOpenAck;
                    fromAmino(object: _165.MsgChannelOpenAckAmino): _165.MsgChannelOpenAck;
                    toAmino(message: _165.MsgChannelOpenAck): _165.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenAckAminoMsg): _165.MsgChannelOpenAck;
                    toAminoMsg(message: _165.MsgChannelOpenAck): _165.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenAckProtoMsg): _165.MsgChannelOpenAck;
                    toProto(message: _165.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenAck): _165.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _165.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_165.MsgChannelOpenAckResponse>): _165.MsgChannelOpenAckResponse;
                    fromAmino(_: _165.MsgChannelOpenAckResponseAmino): _165.MsgChannelOpenAckResponse;
                    toAmino(_: _165.MsgChannelOpenAckResponse): _165.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenAckResponseAminoMsg): _165.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _165.MsgChannelOpenAckResponse): _165.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenAckResponseProtoMsg): _165.MsgChannelOpenAckResponse;
                    toProto(message: _165.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenAckResponse): _165.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_165.MsgChannelOpenConfirm>): _165.MsgChannelOpenConfirm;
                    fromAmino(object: _165.MsgChannelOpenConfirmAmino): _165.MsgChannelOpenConfirm;
                    toAmino(message: _165.MsgChannelOpenConfirm): _165.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenConfirmAminoMsg): _165.MsgChannelOpenConfirm;
                    toAminoMsg(message: _165.MsgChannelOpenConfirm): _165.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenConfirmProtoMsg): _165.MsgChannelOpenConfirm;
                    toProto(message: _165.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenConfirm): _165.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _165.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_165.MsgChannelOpenConfirmResponse>): _165.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _165.MsgChannelOpenConfirmResponseAmino): _165.MsgChannelOpenConfirmResponse;
                    toAmino(_: _165.MsgChannelOpenConfirmResponse): _165.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelOpenConfirmResponseAminoMsg): _165.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _165.MsgChannelOpenConfirmResponse): _165.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelOpenConfirmResponseProtoMsg): _165.MsgChannelOpenConfirmResponse;
                    toProto(message: _165.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelOpenConfirmResponse): _165.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelCloseInit;
                    fromPartial(object: Partial<_165.MsgChannelCloseInit>): _165.MsgChannelCloseInit;
                    fromAmino(object: _165.MsgChannelCloseInitAmino): _165.MsgChannelCloseInit;
                    toAmino(message: _165.MsgChannelCloseInit): _165.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseInitAminoMsg): _165.MsgChannelCloseInit;
                    toAminoMsg(message: _165.MsgChannelCloseInit): _165.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseInitProtoMsg): _165.MsgChannelCloseInit;
                    toProto(message: _165.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseInit): _165.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _165.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_165.MsgChannelCloseInitResponse>): _165.MsgChannelCloseInitResponse;
                    fromAmino(_: _165.MsgChannelCloseInitResponseAmino): _165.MsgChannelCloseInitResponse;
                    toAmino(_: _165.MsgChannelCloseInitResponse): _165.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseInitResponseAminoMsg): _165.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _165.MsgChannelCloseInitResponse): _165.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseInitResponseProtoMsg): _165.MsgChannelCloseInitResponse;
                    toProto(message: _165.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseInitResponse): _165.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _165.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_165.MsgChannelCloseConfirm>): _165.MsgChannelCloseConfirm;
                    fromAmino(object: _165.MsgChannelCloseConfirmAmino): _165.MsgChannelCloseConfirm;
                    toAmino(message: _165.MsgChannelCloseConfirm): _165.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseConfirmAminoMsg): _165.MsgChannelCloseConfirm;
                    toAminoMsg(message: _165.MsgChannelCloseConfirm): _165.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseConfirmProtoMsg): _165.MsgChannelCloseConfirm;
                    toProto(message: _165.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseConfirm): _165.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _165.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_165.MsgChannelCloseConfirmResponse>): _165.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _165.MsgChannelCloseConfirmResponseAmino): _165.MsgChannelCloseConfirmResponse;
                    toAmino(_: _165.MsgChannelCloseConfirmResponse): _165.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _165.MsgChannelCloseConfirmResponseAminoMsg): _165.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _165.MsgChannelCloseConfirmResponse): _165.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgChannelCloseConfirmResponseProtoMsg): _165.MsgChannelCloseConfirmResponse;
                    toProto(message: _165.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgChannelCloseConfirmResponse): _165.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _165.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgRecvPacket;
                    fromPartial(object: Partial<_165.MsgRecvPacket>): _165.MsgRecvPacket;
                    fromAmino(object: _165.MsgRecvPacketAmino): _165.MsgRecvPacket;
                    toAmino(message: _165.MsgRecvPacket): _165.MsgRecvPacketAmino;
                    fromAminoMsg(object: _165.MsgRecvPacketAminoMsg): _165.MsgRecvPacket;
                    toAminoMsg(message: _165.MsgRecvPacket): _165.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _165.MsgRecvPacketProtoMsg): _165.MsgRecvPacket;
                    toProto(message: _165.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _165.MsgRecvPacket): _165.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_165.MsgRecvPacketResponse>): _165.MsgRecvPacketResponse;
                    fromAmino(object: _165.MsgRecvPacketResponseAmino): _165.MsgRecvPacketResponse;
                    toAmino(message: _165.MsgRecvPacketResponse): _165.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _165.MsgRecvPacketResponseAminoMsg): _165.MsgRecvPacketResponse;
                    toAminoMsg(message: _165.MsgRecvPacketResponse): _165.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgRecvPacketResponseProtoMsg): _165.MsgRecvPacketResponse;
                    toProto(message: _165.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgRecvPacketResponse): _165.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgTimeout;
                    fromPartial(object: Partial<_165.MsgTimeout>): _165.MsgTimeout;
                    fromAmino(object: _165.MsgTimeoutAmino): _165.MsgTimeout;
                    toAmino(message: _165.MsgTimeout): _165.MsgTimeoutAmino;
                    fromAminoMsg(object: _165.MsgTimeoutAminoMsg): _165.MsgTimeout;
                    toAminoMsg(message: _165.MsgTimeout): _165.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutProtoMsg): _165.MsgTimeout;
                    toProto(message: _165.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeout): _165.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgTimeoutResponse;
                    fromPartial(object: Partial<_165.MsgTimeoutResponse>): _165.MsgTimeoutResponse;
                    fromAmino(object: _165.MsgTimeoutResponseAmino): _165.MsgTimeoutResponse;
                    toAmino(message: _165.MsgTimeoutResponse): _165.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _165.MsgTimeoutResponseAminoMsg): _165.MsgTimeoutResponse;
                    toAminoMsg(message: _165.MsgTimeoutResponse): _165.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutResponseProtoMsg): _165.MsgTimeoutResponse;
                    toProto(message: _165.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeoutResponse): _165.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_165.MsgTimeoutOnClose>): _165.MsgTimeoutOnClose;
                    fromAmino(object: _165.MsgTimeoutOnCloseAmino): _165.MsgTimeoutOnClose;
                    toAmino(message: _165.MsgTimeoutOnClose): _165.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _165.MsgTimeoutOnCloseAminoMsg): _165.MsgTimeoutOnClose;
                    toAminoMsg(message: _165.MsgTimeoutOnClose): _165.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutOnCloseProtoMsg): _165.MsgTimeoutOnClose;
                    toProto(message: _165.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeoutOnClose): _165.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_165.MsgTimeoutOnCloseResponse>): _165.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _165.MsgTimeoutOnCloseResponseAmino): _165.MsgTimeoutOnCloseResponse;
                    toAmino(message: _165.MsgTimeoutOnCloseResponse): _165.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _165.MsgTimeoutOnCloseResponseAminoMsg): _165.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _165.MsgTimeoutOnCloseResponse): _165.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgTimeoutOnCloseResponseProtoMsg): _165.MsgTimeoutOnCloseResponse;
                    toProto(message: _165.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgTimeoutOnCloseResponse): _165.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _165.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgAcknowledgement;
                    fromPartial(object: Partial<_165.MsgAcknowledgement>): _165.MsgAcknowledgement;
                    fromAmino(object: _165.MsgAcknowledgementAmino): _165.MsgAcknowledgement;
                    toAmino(message: _165.MsgAcknowledgement): _165.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _165.MsgAcknowledgementAminoMsg): _165.MsgAcknowledgement;
                    toAminoMsg(message: _165.MsgAcknowledgement): _165.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _165.MsgAcknowledgementProtoMsg): _165.MsgAcknowledgement;
                    toProto(message: _165.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _165.MsgAcknowledgement): _165.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _165.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _165.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_165.MsgAcknowledgementResponse>): _165.MsgAcknowledgementResponse;
                    fromAmino(object: _165.MsgAcknowledgementResponseAmino): _165.MsgAcknowledgementResponse;
                    toAmino(message: _165.MsgAcknowledgementResponse): _165.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _165.MsgAcknowledgementResponseAminoMsg): _165.MsgAcknowledgementResponse;
                    toAminoMsg(message: _165.MsgAcknowledgementResponse): _165.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgAcknowledgementResponseProtoMsg): _165.MsgAcknowledgementResponse;
                    toProto(message: _165.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgAcknowledgementResponse): _165.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelRequest;
                    fromPartial(object: Partial<_164.QueryChannelRequest>): _164.QueryChannelRequest;
                    fromAmino(object: _164.QueryChannelRequestAmino): _164.QueryChannelRequest;
                    toAmino(message: _164.QueryChannelRequest): _164.QueryChannelRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelRequestAminoMsg): _164.QueryChannelRequest;
                    toAminoMsg(message: _164.QueryChannelRequest): _164.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelRequestProtoMsg): _164.QueryChannelRequest;
                    toProto(message: _164.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelRequest): _164.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelResponse;
                    fromPartial(object: Partial<_164.QueryChannelResponse>): _164.QueryChannelResponse;
                    fromAmino(object: _164.QueryChannelResponseAmino): _164.QueryChannelResponse;
                    toAmino(message: _164.QueryChannelResponse): _164.QueryChannelResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelResponseAminoMsg): _164.QueryChannelResponse;
                    toAminoMsg(message: _164.QueryChannelResponse): _164.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelResponseProtoMsg): _164.QueryChannelResponse;
                    toProto(message: _164.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelResponse): _164.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelsRequest;
                    fromPartial(object: Partial<_164.QueryChannelsRequest>): _164.QueryChannelsRequest;
                    fromAmino(object: _164.QueryChannelsRequestAmino): _164.QueryChannelsRequest;
                    toAmino(message: _164.QueryChannelsRequest): _164.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelsRequestAminoMsg): _164.QueryChannelsRequest;
                    toAminoMsg(message: _164.QueryChannelsRequest): _164.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelsRequestProtoMsg): _164.QueryChannelsRequest;
                    toProto(message: _164.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelsRequest): _164.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelsResponse;
                    fromPartial(object: Partial<_164.QueryChannelsResponse>): _164.QueryChannelsResponse;
                    fromAmino(object: _164.QueryChannelsResponseAmino): _164.QueryChannelsResponse;
                    toAmino(message: _164.QueryChannelsResponse): _164.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelsResponseAminoMsg): _164.QueryChannelsResponse;
                    toAminoMsg(message: _164.QueryChannelsResponse): _164.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelsResponseProtoMsg): _164.QueryChannelsResponse;
                    toProto(message: _164.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelsResponse): _164.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_164.QueryConnectionChannelsRequest>): _164.QueryConnectionChannelsRequest;
                    fromAmino(object: _164.QueryConnectionChannelsRequestAmino): _164.QueryConnectionChannelsRequest;
                    toAmino(message: _164.QueryConnectionChannelsRequest): _164.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _164.QueryConnectionChannelsRequestAminoMsg): _164.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _164.QueryConnectionChannelsRequest): _164.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionChannelsRequestProtoMsg): _164.QueryConnectionChannelsRequest;
                    toProto(message: _164.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionChannelsRequest): _164.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_164.QueryConnectionChannelsResponse>): _164.QueryConnectionChannelsResponse;
                    fromAmino(object: _164.QueryConnectionChannelsResponseAmino): _164.QueryConnectionChannelsResponse;
                    toAmino(message: _164.QueryConnectionChannelsResponse): _164.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _164.QueryConnectionChannelsResponseAminoMsg): _164.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _164.QueryConnectionChannelsResponse): _164.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryConnectionChannelsResponseProtoMsg): _164.QueryConnectionChannelsResponse;
                    toProto(message: _164.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryConnectionChannelsResponse): _164.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_164.QueryChannelClientStateRequest>): _164.QueryChannelClientStateRequest;
                    fromAmino(object: _164.QueryChannelClientStateRequestAmino): _164.QueryChannelClientStateRequest;
                    toAmino(message: _164.QueryChannelClientStateRequest): _164.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelClientStateRequestAminoMsg): _164.QueryChannelClientStateRequest;
                    toAminoMsg(message: _164.QueryChannelClientStateRequest): _164.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelClientStateRequestProtoMsg): _164.QueryChannelClientStateRequest;
                    toProto(message: _164.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelClientStateRequest): _164.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_164.QueryChannelClientStateResponse>): _164.QueryChannelClientStateResponse;
                    fromAmino(object: _164.QueryChannelClientStateResponseAmino): _164.QueryChannelClientStateResponse;
                    toAmino(message: _164.QueryChannelClientStateResponse): _164.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelClientStateResponseAminoMsg): _164.QueryChannelClientStateResponse;
                    toAminoMsg(message: _164.QueryChannelClientStateResponse): _164.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelClientStateResponseProtoMsg): _164.QueryChannelClientStateResponse;
                    toProto(message: _164.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelClientStateResponse): _164.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_164.QueryChannelConsensusStateRequest>): _164.QueryChannelConsensusStateRequest;
                    fromAmino(object: _164.QueryChannelConsensusStateRequestAmino): _164.QueryChannelConsensusStateRequest;
                    toAmino(message: _164.QueryChannelConsensusStateRequest): _164.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _164.QueryChannelConsensusStateRequestAminoMsg): _164.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _164.QueryChannelConsensusStateRequest): _164.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelConsensusStateRequestProtoMsg): _164.QueryChannelConsensusStateRequest;
                    toProto(message: _164.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelConsensusStateRequest): _164.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_164.QueryChannelConsensusStateResponse>): _164.QueryChannelConsensusStateResponse;
                    fromAmino(object: _164.QueryChannelConsensusStateResponseAmino): _164.QueryChannelConsensusStateResponse;
                    toAmino(message: _164.QueryChannelConsensusStateResponse): _164.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _164.QueryChannelConsensusStateResponseAminoMsg): _164.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _164.QueryChannelConsensusStateResponse): _164.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryChannelConsensusStateResponseProtoMsg): _164.QueryChannelConsensusStateResponse;
                    toProto(message: _164.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryChannelConsensusStateResponse): _164.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentRequest>): _164.QueryPacketCommitmentRequest;
                    fromAmino(object: _164.QueryPacketCommitmentRequestAmino): _164.QueryPacketCommitmentRequest;
                    toAmino(message: _164.QueryPacketCommitmentRequest): _164.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentRequestAminoMsg): _164.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _164.QueryPacketCommitmentRequest): _164.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentRequestProtoMsg): _164.QueryPacketCommitmentRequest;
                    toProto(message: _164.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentRequest): _164.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentResponse>): _164.QueryPacketCommitmentResponse;
                    fromAmino(object: _164.QueryPacketCommitmentResponseAmino): _164.QueryPacketCommitmentResponse;
                    toAmino(message: _164.QueryPacketCommitmentResponse): _164.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentResponseAminoMsg): _164.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _164.QueryPacketCommitmentResponse): _164.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentResponseProtoMsg): _164.QueryPacketCommitmentResponse;
                    toProto(message: _164.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentResponse): _164.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentsRequest>): _164.QueryPacketCommitmentsRequest;
                    fromAmino(object: _164.QueryPacketCommitmentsRequestAmino): _164.QueryPacketCommitmentsRequest;
                    toAmino(message: _164.QueryPacketCommitmentsRequest): _164.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentsRequestAminoMsg): _164.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _164.QueryPacketCommitmentsRequest): _164.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentsRequestProtoMsg): _164.QueryPacketCommitmentsRequest;
                    toProto(message: _164.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentsRequest): _164.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_164.QueryPacketCommitmentsResponse>): _164.QueryPacketCommitmentsResponse;
                    fromAmino(object: _164.QueryPacketCommitmentsResponseAmino): _164.QueryPacketCommitmentsResponse;
                    toAmino(message: _164.QueryPacketCommitmentsResponse): _164.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketCommitmentsResponseAminoMsg): _164.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _164.QueryPacketCommitmentsResponse): _164.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketCommitmentsResponseProtoMsg): _164.QueryPacketCommitmentsResponse;
                    toProto(message: _164.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketCommitmentsResponse): _164.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_164.QueryPacketReceiptRequest>): _164.QueryPacketReceiptRequest;
                    fromAmino(object: _164.QueryPacketReceiptRequestAmino): _164.QueryPacketReceiptRequest;
                    toAmino(message: _164.QueryPacketReceiptRequest): _164.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketReceiptRequestAminoMsg): _164.QueryPacketReceiptRequest;
                    toAminoMsg(message: _164.QueryPacketReceiptRequest): _164.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketReceiptRequestProtoMsg): _164.QueryPacketReceiptRequest;
                    toProto(message: _164.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketReceiptRequest): _164.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_164.QueryPacketReceiptResponse>): _164.QueryPacketReceiptResponse;
                    fromAmino(object: _164.QueryPacketReceiptResponseAmino): _164.QueryPacketReceiptResponse;
                    toAmino(message: _164.QueryPacketReceiptResponse): _164.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketReceiptResponseAminoMsg): _164.QueryPacketReceiptResponse;
                    toAminoMsg(message: _164.QueryPacketReceiptResponse): _164.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketReceiptResponseProtoMsg): _164.QueryPacketReceiptResponse;
                    toProto(message: _164.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketReceiptResponse): _164.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementRequest>): _164.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _164.QueryPacketAcknowledgementRequestAmino): _164.QueryPacketAcknowledgementRequest;
                    toAmino(message: _164.QueryPacketAcknowledgementRequest): _164.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementRequestAminoMsg): _164.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementRequest): _164.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementRequestProtoMsg): _164.QueryPacketAcknowledgementRequest;
                    toProto(message: _164.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementRequest): _164.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementResponse>): _164.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _164.QueryPacketAcknowledgementResponseAmino): _164.QueryPacketAcknowledgementResponse;
                    toAmino(message: _164.QueryPacketAcknowledgementResponse): _164.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementResponseAminoMsg): _164.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementResponse): _164.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementResponseProtoMsg): _164.QueryPacketAcknowledgementResponse;
                    toProto(message: _164.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementResponse): _164.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementsRequest>): _164.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _164.QueryPacketAcknowledgementsRequestAmino): _164.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _164.QueryPacketAcknowledgementsRequest): _164.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementsRequestAminoMsg): _164.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementsRequest): _164.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementsRequestProtoMsg): _164.QueryPacketAcknowledgementsRequest;
                    toProto(message: _164.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementsRequest): _164.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_164.QueryPacketAcknowledgementsResponse>): _164.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _164.QueryPacketAcknowledgementsResponseAmino): _164.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _164.QueryPacketAcknowledgementsResponse): _164.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _164.QueryPacketAcknowledgementsResponseAminoMsg): _164.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _164.QueryPacketAcknowledgementsResponse): _164.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPacketAcknowledgementsResponseProtoMsg): _164.QueryPacketAcknowledgementsResponse;
                    toProto(message: _164.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPacketAcknowledgementsResponse): _164.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_164.QueryUnreceivedPacketsRequest>): _164.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _164.QueryUnreceivedPacketsRequestAmino): _164.QueryUnreceivedPacketsRequest;
                    toAmino(message: _164.QueryUnreceivedPacketsRequest): _164.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedPacketsRequestAminoMsg): _164.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _164.QueryUnreceivedPacketsRequest): _164.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedPacketsRequestProtoMsg): _164.QueryUnreceivedPacketsRequest;
                    toProto(message: _164.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedPacketsRequest): _164.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_164.QueryUnreceivedPacketsResponse>): _164.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _164.QueryUnreceivedPacketsResponseAmino): _164.QueryUnreceivedPacketsResponse;
                    toAmino(message: _164.QueryUnreceivedPacketsResponse): _164.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedPacketsResponseAminoMsg): _164.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _164.QueryUnreceivedPacketsResponse): _164.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedPacketsResponseProtoMsg): _164.QueryUnreceivedPacketsResponse;
                    toProto(message: _164.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedPacketsResponse): _164.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_164.QueryUnreceivedAcksRequest>): _164.QueryUnreceivedAcksRequest;
                    fromAmino(object: _164.QueryUnreceivedAcksRequestAmino): _164.QueryUnreceivedAcksRequest;
                    toAmino(message: _164.QueryUnreceivedAcksRequest): _164.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedAcksRequestAminoMsg): _164.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _164.QueryUnreceivedAcksRequest): _164.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedAcksRequestProtoMsg): _164.QueryUnreceivedAcksRequest;
                    toProto(message: _164.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedAcksRequest): _164.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_164.QueryUnreceivedAcksResponse>): _164.QueryUnreceivedAcksResponse;
                    fromAmino(object: _164.QueryUnreceivedAcksResponseAmino): _164.QueryUnreceivedAcksResponse;
                    toAmino(message: _164.QueryUnreceivedAcksResponse): _164.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _164.QueryUnreceivedAcksResponseAminoMsg): _164.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _164.QueryUnreceivedAcksResponse): _164.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryUnreceivedAcksResponseProtoMsg): _164.QueryUnreceivedAcksResponse;
                    toProto(message: _164.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryUnreceivedAcksResponse): _164.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_164.QueryNextSequenceReceiveRequest>): _164.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _164.QueryNextSequenceReceiveRequestAmino): _164.QueryNextSequenceReceiveRequest;
                    toAmino(message: _164.QueryNextSequenceReceiveRequest): _164.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _164.QueryNextSequenceReceiveRequestAminoMsg): _164.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _164.QueryNextSequenceReceiveRequest): _164.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryNextSequenceReceiveRequestProtoMsg): _164.QueryNextSequenceReceiveRequest;
                    toProto(message: _164.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryNextSequenceReceiveRequest): _164.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _164.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_164.QueryNextSequenceReceiveResponse>): _164.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _164.QueryNextSequenceReceiveResponseAmino): _164.QueryNextSequenceReceiveResponse;
                    toAmino(message: _164.QueryNextSequenceReceiveResponse): _164.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _164.QueryNextSequenceReceiveResponseAminoMsg): _164.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _164.QueryNextSequenceReceiveResponse): _164.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryNextSequenceReceiveResponseProtoMsg): _164.QueryNextSequenceReceiveResponse;
                    toProto(message: _164.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryNextSequenceReceiveResponse): _164.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _163.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.GenesisState;
                    fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
                    fromAmino(object: _163.GenesisStateAmino): _163.GenesisState;
                    toAmino(message: _163.GenesisState): _163.GenesisStateAmino;
                    fromAminoMsg(object: _163.GenesisStateAminoMsg): _163.GenesisState;
                    toAminoMsg(message: _163.GenesisState): _163.GenesisStateAminoMsg;
                    fromProtoMsg(message: _163.GenesisStateProtoMsg): _163.GenesisState;
                    toProto(message: _163.GenesisState): Uint8Array;
                    toProtoMsg(message: _163.GenesisState): _163.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _163.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _163.PacketSequence;
                    fromPartial(object: Partial<_163.PacketSequence>): _163.PacketSequence;
                    fromAmino(object: _163.PacketSequenceAmino): _163.PacketSequence;
                    toAmino(message: _163.PacketSequence): _163.PacketSequenceAmino;
                    fromAminoMsg(object: _163.PacketSequenceAminoMsg): _163.PacketSequence;
                    toAminoMsg(message: _163.PacketSequence): _163.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _163.PacketSequenceProtoMsg): _163.PacketSequence;
                    toProto(message: _163.PacketSequence): Uint8Array;
                    toProtoMsg(message: _163.PacketSequence): _163.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _162.State;
                stateToJSON(object: _162.State): string;
                orderFromJSON(object: any): _162.Order;
                orderToJSON(object: _162.Order): string;
                State: typeof _162.State;
                StateSDKType: typeof _162.State;
                StateAmino: typeof _162.State;
                Order: typeof _162.Order;
                OrderSDKType: typeof _162.Order;
                OrderAmino: typeof _162.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _162.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.Channel;
                    fromPartial(object: Partial<_162.Channel>): _162.Channel;
                    fromAmino(object: _162.ChannelAmino): _162.Channel;
                    toAmino(message: _162.Channel): _162.ChannelAmino;
                    fromAminoMsg(object: _162.ChannelAminoMsg): _162.Channel;
                    toAminoMsg(message: _162.Channel): _162.ChannelAminoMsg;
                    fromProtoMsg(message: _162.ChannelProtoMsg): _162.Channel;
                    toProto(message: _162.Channel): Uint8Array;
                    toProtoMsg(message: _162.Channel): _162.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _162.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.IdentifiedChannel;
                    fromPartial(object: Partial<_162.IdentifiedChannel>): _162.IdentifiedChannel;
                    fromAmino(object: _162.IdentifiedChannelAmino): _162.IdentifiedChannel;
                    toAmino(message: _162.IdentifiedChannel): _162.IdentifiedChannelAmino;
                    fromAminoMsg(object: _162.IdentifiedChannelAminoMsg): _162.IdentifiedChannel;
                    toAminoMsg(message: _162.IdentifiedChannel): _162.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _162.IdentifiedChannelProtoMsg): _162.IdentifiedChannel;
                    toProto(message: _162.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _162.IdentifiedChannel): _162.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _162.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.Counterparty;
                    fromPartial(object: Partial<_162.Counterparty>): _162.Counterparty;
                    fromAmino(object: _162.CounterpartyAmino): _162.Counterparty;
                    toAmino(message: _162.Counterparty): _162.CounterpartyAmino;
                    fromAminoMsg(object: _162.CounterpartyAminoMsg): _162.Counterparty;
                    toAminoMsg(message: _162.Counterparty): _162.CounterpartyAminoMsg;
                    fromProtoMsg(message: _162.CounterpartyProtoMsg): _162.Counterparty;
                    toProto(message: _162.Counterparty): Uint8Array;
                    toProtoMsg(message: _162.Counterparty): _162.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _162.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.Packet;
                    fromPartial(object: Partial<_162.Packet>): _162.Packet;
                    fromAmino(object: _162.PacketAmino): _162.Packet;
                    toAmino(message: _162.Packet): _162.PacketAmino;
                    fromAminoMsg(object: _162.PacketAminoMsg): _162.Packet;
                    toAminoMsg(message: _162.Packet): _162.PacketAminoMsg;
                    fromProtoMsg(message: _162.PacketProtoMsg): _162.Packet;
                    toProto(message: _162.Packet): Uint8Array;
                    toProtoMsg(message: _162.Packet): _162.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _162.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.PacketState;
                    fromPartial(object: Partial<_162.PacketState>): _162.PacketState;
                    fromAmino(object: _162.PacketStateAmino): _162.PacketState;
                    toAmino(message: _162.PacketState): _162.PacketStateAmino;
                    fromAminoMsg(object: _162.PacketStateAminoMsg): _162.PacketState;
                    toAminoMsg(message: _162.PacketState): _162.PacketStateAminoMsg;
                    fromProtoMsg(message: _162.PacketStateProtoMsg): _162.PacketState;
                    toProto(message: _162.PacketState): Uint8Array;
                    toProtoMsg(message: _162.PacketState): _162.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _162.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.PacketId;
                    fromPartial(object: Partial<_162.PacketId>): _162.PacketId;
                    fromAmino(object: _162.PacketIdAmino): _162.PacketId;
                    toAmino(message: _162.PacketId): _162.PacketIdAmino;
                    fromAminoMsg(object: _162.PacketIdAminoMsg): _162.PacketId;
                    toAminoMsg(message: _162.PacketId): _162.PacketIdAminoMsg;
                    fromProtoMsg(message: _162.PacketIdProtoMsg): _162.PacketId;
                    toProto(message: _162.PacketId): Uint8Array;
                    toProtoMsg(message: _162.PacketId): _162.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _162.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _162.Acknowledgement;
                    fromPartial(object: Partial<_162.Acknowledgement>): _162.Acknowledgement;
                    fromAmino(object: _162.AcknowledgementAmino): _162.Acknowledgement;
                    toAmino(message: _162.Acknowledgement): _162.AcknowledgementAmino;
                    fromAminoMsg(object: _162.AcknowledgementAminoMsg): _162.Acknowledgement;
                    toAminoMsg(message: _162.Acknowledgement): _162.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _162.AcknowledgementProtoMsg): _162.Acknowledgement;
                    toProto(message: _162.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _162.Acknowledgement): _162.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _280.MsgClientImpl;
                QueryClientImpl: typeof _276.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _168.QueryClientStateRequest): Promise<_168.QueryClientStateResponse>;
                    clientStates(request?: _168.QueryClientStatesRequest): Promise<_168.QueryClientStatesResponse>;
                    consensusState(request: _168.QueryConsensusStateRequest): Promise<_168.QueryConsensusStateResponse>;
                    consensusStates(request: _168.QueryConsensusStatesRequest): Promise<_168.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _168.QueryConsensusStateHeightsRequest): Promise<_168.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _168.QueryClientStatusRequest): Promise<_168.QueryClientStatusResponse>;
                    clientParams(request?: _168.QueryClientParamsRequest): Promise<_168.QueryClientParamsResponse>;
                    upgradedClientState(request?: _168.QueryUpgradedClientStateRequest): Promise<_168.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _168.QueryUpgradedConsensusStateRequest): Promise<_168.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _272.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _169.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _169.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _169.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _169.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _169.MsgCreateClient): {
                            typeUrl: string;
                            value: _169.MsgCreateClient;
                        };
                        updateClient(value: _169.MsgUpdateClient): {
                            typeUrl: string;
                            value: _169.MsgUpdateClient;
                        };
                        upgradeClient(value: _169.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _169.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _169.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _169.MsgSubmitMisbehaviour;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _169.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _169.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _169.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _169.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _169.MsgCreateClient): {
                            typeUrl: string;
                            value: _169.MsgCreateClient;
                        };
                        updateClient(value: _169.MsgUpdateClient): {
                            typeUrl: string;
                            value: _169.MsgUpdateClient;
                        };
                        upgradeClient(value: _169.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _169.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _169.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _169.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _169.MsgCreateClient) => _169.MsgCreateClientAmino;
                        fromAmino: (object: _169.MsgCreateClientAmino) => _169.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _169.MsgUpdateClient) => _169.MsgUpdateClientAmino;
                        fromAmino: (object: _169.MsgUpdateClientAmino) => _169.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _169.MsgUpgradeClient) => _169.MsgUpgradeClientAmino;
                        fromAmino: (object: _169.MsgUpgradeClientAmino) => _169.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _169.MsgSubmitMisbehaviour) => _169.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _169.MsgSubmitMisbehaviourAmino) => _169.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _169.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.MsgCreateClient;
                    fromPartial(object: Partial<_169.MsgCreateClient>): _169.MsgCreateClient;
                    fromAmino(object: _169.MsgCreateClientAmino): _169.MsgCreateClient;
                    toAmino(message: _169.MsgCreateClient): _169.MsgCreateClientAmino;
                    fromAminoMsg(object: _169.MsgCreateClientAminoMsg): _169.MsgCreateClient;
                    toAminoMsg(message: _169.MsgCreateClient): _169.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _169.MsgCreateClientProtoMsg): _169.MsgCreateClient;
                    toProto(message: _169.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _169.MsgCreateClient): _169.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _169.MsgCreateClientResponse;
                    fromPartial(_: Partial<_169.MsgCreateClientResponse>): _169.MsgCreateClientResponse;
                    fromAmino(_: _169.MsgCreateClientResponseAmino): _169.MsgCreateClientResponse;
                    toAmino(_: _169.MsgCreateClientResponse): _169.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _169.MsgCreateClientResponseAminoMsg): _169.MsgCreateClientResponse;
                    toAminoMsg(message: _169.MsgCreateClientResponse): _169.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgCreateClientResponseProtoMsg): _169.MsgCreateClientResponse;
                    toProto(message: _169.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgCreateClientResponse): _169.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _169.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.MsgUpdateClient;
                    fromPartial(object: Partial<_169.MsgUpdateClient>): _169.MsgUpdateClient;
                    fromAmino(object: _169.MsgUpdateClientAmino): _169.MsgUpdateClient;
                    toAmino(message: _169.MsgUpdateClient): _169.MsgUpdateClientAmino;
                    fromAminoMsg(object: _169.MsgUpdateClientAminoMsg): _169.MsgUpdateClient;
                    toAminoMsg(message: _169.MsgUpdateClient): _169.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _169.MsgUpdateClientProtoMsg): _169.MsgUpdateClient;
                    toProto(message: _169.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _169.MsgUpdateClient): _169.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _169.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_169.MsgUpdateClientResponse>): _169.MsgUpdateClientResponse;
                    fromAmino(_: _169.MsgUpdateClientResponseAmino): _169.MsgUpdateClientResponse;
                    toAmino(_: _169.MsgUpdateClientResponse): _169.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _169.MsgUpdateClientResponseAminoMsg): _169.MsgUpdateClientResponse;
                    toAminoMsg(message: _169.MsgUpdateClientResponse): _169.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgUpdateClientResponseProtoMsg): _169.MsgUpdateClientResponse;
                    toProto(message: _169.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgUpdateClientResponse): _169.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _169.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.MsgUpgradeClient;
                    fromPartial(object: Partial<_169.MsgUpgradeClient>): _169.MsgUpgradeClient;
                    fromAmino(object: _169.MsgUpgradeClientAmino): _169.MsgUpgradeClient;
                    toAmino(message: _169.MsgUpgradeClient): _169.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _169.MsgUpgradeClientAminoMsg): _169.MsgUpgradeClient;
                    toAminoMsg(message: _169.MsgUpgradeClient): _169.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _169.MsgUpgradeClientProtoMsg): _169.MsgUpgradeClient;
                    toProto(message: _169.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _169.MsgUpgradeClient): _169.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _169.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_169.MsgUpgradeClientResponse>): _169.MsgUpgradeClientResponse;
                    fromAmino(_: _169.MsgUpgradeClientResponseAmino): _169.MsgUpgradeClientResponse;
                    toAmino(_: _169.MsgUpgradeClientResponse): _169.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _169.MsgUpgradeClientResponseAminoMsg): _169.MsgUpgradeClientResponse;
                    toAminoMsg(message: _169.MsgUpgradeClientResponse): _169.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgUpgradeClientResponseProtoMsg): _169.MsgUpgradeClientResponse;
                    toProto(message: _169.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgUpgradeClientResponse): _169.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _169.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _169.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_169.MsgSubmitMisbehaviour>): _169.MsgSubmitMisbehaviour;
                    fromAmino(object: _169.MsgSubmitMisbehaviourAmino): _169.MsgSubmitMisbehaviour;
                    toAmino(message: _169.MsgSubmitMisbehaviour): _169.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _169.MsgSubmitMisbehaviourAminoMsg): _169.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _169.MsgSubmitMisbehaviour): _169.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _169.MsgSubmitMisbehaviourProtoMsg): _169.MsgSubmitMisbehaviour;
                    toProto(message: _169.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _169.MsgSubmitMisbehaviour): _169.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _169.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_169.MsgSubmitMisbehaviourResponse>): _169.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _169.MsgSubmitMisbehaviourResponseAmino): _169.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _169.MsgSubmitMisbehaviourResponse): _169.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _169.MsgSubmitMisbehaviourResponseAminoMsg): _169.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _169.MsgSubmitMisbehaviourResponse): _169.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgSubmitMisbehaviourResponseProtoMsg): _169.MsgSubmitMisbehaviourResponse;
                    toProto(message: _169.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgSubmitMisbehaviourResponse): _169.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryClientStateRequest;
                    fromPartial(object: Partial<_168.QueryClientStateRequest>): _168.QueryClientStateRequest;
                    fromAmino(object: _168.QueryClientStateRequestAmino): _168.QueryClientStateRequest;
                    toAmino(message: _168.QueryClientStateRequest): _168.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _168.QueryClientStateRequestAminoMsg): _168.QueryClientStateRequest;
                    toAminoMsg(message: _168.QueryClientStateRequest): _168.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryClientStateRequestProtoMsg): _168.QueryClientStateRequest;
                    toProto(message: _168.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryClientStateRequest): _168.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryClientStateResponse;
                    fromPartial(object: Partial<_168.QueryClientStateResponse>): _168.QueryClientStateResponse;
                    fromAmino(object: _168.QueryClientStateResponseAmino): _168.QueryClientStateResponse;
                    toAmino(message: _168.QueryClientStateResponse): _168.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _168.QueryClientStateResponseAminoMsg): _168.QueryClientStateResponse;
                    toAminoMsg(message: _168.QueryClientStateResponse): _168.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryClientStateResponseProtoMsg): _168.QueryClientStateResponse;
                    toProto(message: _168.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryClientStateResponse): _168.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryClientStatesRequest;
                    fromPartial(object: Partial<_168.QueryClientStatesRequest>): _168.QueryClientStatesRequest;
                    fromAmino(object: _168.QueryClientStatesRequestAmino): _168.QueryClientStatesRequest;
                    toAmino(message: _168.QueryClientStatesRequest): _168.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _168.QueryClientStatesRequestAminoMsg): _168.QueryClientStatesRequest;
                    toAminoMsg(message: _168.QueryClientStatesRequest): _168.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryClientStatesRequestProtoMsg): _168.QueryClientStatesRequest;
                    toProto(message: _168.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryClientStatesRequest): _168.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryClientStatesResponse;
                    fromPartial(object: Partial<_168.QueryClientStatesResponse>): _168.QueryClientStatesResponse;
                    fromAmino(object: _168.QueryClientStatesResponseAmino): _168.QueryClientStatesResponse;
                    toAmino(message: _168.QueryClientStatesResponse): _168.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _168.QueryClientStatesResponseAminoMsg): _168.QueryClientStatesResponse;
                    toAminoMsg(message: _168.QueryClientStatesResponse): _168.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryClientStatesResponseProtoMsg): _168.QueryClientStatesResponse;
                    toProto(message: _168.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryClientStatesResponse): _168.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_168.QueryConsensusStateRequest>): _168.QueryConsensusStateRequest;
                    fromAmino(object: _168.QueryConsensusStateRequestAmino): _168.QueryConsensusStateRequest;
                    toAmino(message: _168.QueryConsensusStateRequest): _168.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _168.QueryConsensusStateRequestAminoMsg): _168.QueryConsensusStateRequest;
                    toAminoMsg(message: _168.QueryConsensusStateRequest): _168.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConsensusStateRequestProtoMsg): _168.QueryConsensusStateRequest;
                    toProto(message: _168.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConsensusStateRequest): _168.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_168.QueryConsensusStateResponse>): _168.QueryConsensusStateResponse;
                    fromAmino(object: _168.QueryConsensusStateResponseAmino): _168.QueryConsensusStateResponse;
                    toAmino(message: _168.QueryConsensusStateResponse): _168.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _168.QueryConsensusStateResponseAminoMsg): _168.QueryConsensusStateResponse;
                    toAminoMsg(message: _168.QueryConsensusStateResponse): _168.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConsensusStateResponseProtoMsg): _168.QueryConsensusStateResponse;
                    toProto(message: _168.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConsensusStateResponse): _168.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_168.QueryConsensusStatesRequest>): _168.QueryConsensusStatesRequest;
                    fromAmino(object: _168.QueryConsensusStatesRequestAmino): _168.QueryConsensusStatesRequest;
                    toAmino(message: _168.QueryConsensusStatesRequest): _168.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _168.QueryConsensusStatesRequestAminoMsg): _168.QueryConsensusStatesRequest;
                    toAminoMsg(message: _168.QueryConsensusStatesRequest): _168.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConsensusStatesRequestProtoMsg): _168.QueryConsensusStatesRequest;
                    toProto(message: _168.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConsensusStatesRequest): _168.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_168.QueryConsensusStatesResponse>): _168.QueryConsensusStatesResponse;
                    fromAmino(object: _168.QueryConsensusStatesResponseAmino): _168.QueryConsensusStatesResponse;
                    toAmino(message: _168.QueryConsensusStatesResponse): _168.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _168.QueryConsensusStatesResponseAminoMsg): _168.QueryConsensusStatesResponse;
                    toAminoMsg(message: _168.QueryConsensusStatesResponse): _168.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConsensusStatesResponseProtoMsg): _168.QueryConsensusStatesResponse;
                    toProto(message: _168.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConsensusStatesResponse): _168.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_168.QueryConsensusStateHeightsRequest>): _168.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _168.QueryConsensusStateHeightsRequestAmino): _168.QueryConsensusStateHeightsRequest;
                    toAmino(message: _168.QueryConsensusStateHeightsRequest): _168.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _168.QueryConsensusStateHeightsRequestAminoMsg): _168.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _168.QueryConsensusStateHeightsRequest): _168.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConsensusStateHeightsRequestProtoMsg): _168.QueryConsensusStateHeightsRequest;
                    toProto(message: _168.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConsensusStateHeightsRequest): _168.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_168.QueryConsensusStateHeightsResponse>): _168.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _168.QueryConsensusStateHeightsResponseAmino): _168.QueryConsensusStateHeightsResponse;
                    toAmino(message: _168.QueryConsensusStateHeightsResponse): _168.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _168.QueryConsensusStateHeightsResponseAminoMsg): _168.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _168.QueryConsensusStateHeightsResponse): _168.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConsensusStateHeightsResponseProtoMsg): _168.QueryConsensusStateHeightsResponse;
                    toProto(message: _168.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConsensusStateHeightsResponse): _168.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryClientStatusRequest;
                    fromPartial(object: Partial<_168.QueryClientStatusRequest>): _168.QueryClientStatusRequest;
                    fromAmino(object: _168.QueryClientStatusRequestAmino): _168.QueryClientStatusRequest;
                    toAmino(message: _168.QueryClientStatusRequest): _168.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _168.QueryClientStatusRequestAminoMsg): _168.QueryClientStatusRequest;
                    toAminoMsg(message: _168.QueryClientStatusRequest): _168.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryClientStatusRequestProtoMsg): _168.QueryClientStatusRequest;
                    toProto(message: _168.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryClientStatusRequest): _168.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryClientStatusResponse;
                    fromPartial(object: Partial<_168.QueryClientStatusResponse>): _168.QueryClientStatusResponse;
                    fromAmino(object: _168.QueryClientStatusResponseAmino): _168.QueryClientStatusResponse;
                    toAmino(message: _168.QueryClientStatusResponse): _168.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _168.QueryClientStatusResponseAminoMsg): _168.QueryClientStatusResponse;
                    toAminoMsg(message: _168.QueryClientStatusResponse): _168.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryClientStatusResponseProtoMsg): _168.QueryClientStatusResponse;
                    toProto(message: _168.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryClientStatusResponse): _168.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _168.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _168.QueryClientParamsRequest;
                    fromPartial(_: Partial<_168.QueryClientParamsRequest>): _168.QueryClientParamsRequest;
                    fromAmino(_: _168.QueryClientParamsRequestAmino): _168.QueryClientParamsRequest;
                    toAmino(_: _168.QueryClientParamsRequest): _168.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _168.QueryClientParamsRequestAminoMsg): _168.QueryClientParamsRequest;
                    toAminoMsg(message: _168.QueryClientParamsRequest): _168.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryClientParamsRequestProtoMsg): _168.QueryClientParamsRequest;
                    toProto(message: _168.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryClientParamsRequest): _168.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryClientParamsResponse;
                    fromPartial(object: Partial<_168.QueryClientParamsResponse>): _168.QueryClientParamsResponse;
                    fromAmino(object: _168.QueryClientParamsResponseAmino): _168.QueryClientParamsResponse;
                    toAmino(message: _168.QueryClientParamsResponse): _168.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _168.QueryClientParamsResponseAminoMsg): _168.QueryClientParamsResponse;
                    toAminoMsg(message: _168.QueryClientParamsResponse): _168.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryClientParamsResponseProtoMsg): _168.QueryClientParamsResponse;
                    toProto(message: _168.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryClientParamsResponse): _168.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _168.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _168.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_168.QueryUpgradedClientStateRequest>): _168.QueryUpgradedClientStateRequest;
                    fromAmino(_: _168.QueryUpgradedClientStateRequestAmino): _168.QueryUpgradedClientStateRequest;
                    toAmino(_: _168.QueryUpgradedClientStateRequest): _168.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _168.QueryUpgradedClientStateRequestAminoMsg): _168.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _168.QueryUpgradedClientStateRequest): _168.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryUpgradedClientStateRequestProtoMsg): _168.QueryUpgradedClientStateRequest;
                    toProto(message: _168.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryUpgradedClientStateRequest): _168.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_168.QueryUpgradedClientStateResponse>): _168.QueryUpgradedClientStateResponse;
                    fromAmino(object: _168.QueryUpgradedClientStateResponseAmino): _168.QueryUpgradedClientStateResponse;
                    toAmino(message: _168.QueryUpgradedClientStateResponse): _168.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _168.QueryUpgradedClientStateResponseAminoMsg): _168.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _168.QueryUpgradedClientStateResponse): _168.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryUpgradedClientStateResponseProtoMsg): _168.QueryUpgradedClientStateResponse;
                    toProto(message: _168.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryUpgradedClientStateResponse): _168.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _168.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _168.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_168.QueryUpgradedConsensusStateRequest>): _168.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _168.QueryUpgradedConsensusStateRequestAmino): _168.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _168.QueryUpgradedConsensusStateRequest): _168.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _168.QueryUpgradedConsensusStateRequestAminoMsg): _168.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _168.QueryUpgradedConsensusStateRequest): _168.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryUpgradedConsensusStateRequestProtoMsg): _168.QueryUpgradedConsensusStateRequest;
                    toProto(message: _168.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryUpgradedConsensusStateRequest): _168.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _168.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_168.QueryUpgradedConsensusStateResponse>): _168.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _168.QueryUpgradedConsensusStateResponseAmino): _168.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _168.QueryUpgradedConsensusStateResponse): _168.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _168.QueryUpgradedConsensusStateResponseAminoMsg): _168.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _168.QueryUpgradedConsensusStateResponse): _168.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryUpgradedConsensusStateResponseProtoMsg): _168.QueryUpgradedConsensusStateResponse;
                    toProto(message: _168.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryUpgradedConsensusStateResponse): _168.QueryUpgradedConsensusStateResponseProtoMsg;
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
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _167.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.GenesisMetadata;
                    fromPartial(object: Partial<_167.GenesisMetadata>): _167.GenesisMetadata;
                    fromAmino(object: _167.GenesisMetadataAmino): _167.GenesisMetadata;
                    toAmino(message: _167.GenesisMetadata): _167.GenesisMetadataAmino;
                    fromAminoMsg(object: _167.GenesisMetadataAminoMsg): _167.GenesisMetadata;
                    toAminoMsg(message: _167.GenesisMetadata): _167.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _167.GenesisMetadataProtoMsg): _167.GenesisMetadata;
                    toProto(message: _167.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _167.GenesisMetadata): _167.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _167.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _167.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_167.IdentifiedGenesisMetadata>): _167.IdentifiedGenesisMetadata;
                    fromAmino(object: _167.IdentifiedGenesisMetadataAmino): _167.IdentifiedGenesisMetadata;
                    toAmino(message: _167.IdentifiedGenesisMetadata): _167.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _167.IdentifiedGenesisMetadataAminoMsg): _167.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _167.IdentifiedGenesisMetadata): _167.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _167.IdentifiedGenesisMetadataProtoMsg): _167.IdentifiedGenesisMetadata;
                    toProto(message: _167.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _167.IdentifiedGenesisMetadata): _167.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _166.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.IdentifiedClientState;
                    fromPartial(object: Partial<_166.IdentifiedClientState>): _166.IdentifiedClientState;
                    fromAmino(object: _166.IdentifiedClientStateAmino): _166.IdentifiedClientState;
                    toAmino(message: _166.IdentifiedClientState): _166.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _166.IdentifiedClientStateAminoMsg): _166.IdentifiedClientState;
                    toAminoMsg(message: _166.IdentifiedClientState): _166.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _166.IdentifiedClientStateProtoMsg): _166.IdentifiedClientState;
                    toProto(message: _166.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _166.IdentifiedClientState): _166.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _166.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_166.ConsensusStateWithHeight>): _166.ConsensusStateWithHeight;
                    fromAmino(object: _166.ConsensusStateWithHeightAmino): _166.ConsensusStateWithHeight;
                    toAmino(message: _166.ConsensusStateWithHeight): _166.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _166.ConsensusStateWithHeightAminoMsg): _166.ConsensusStateWithHeight;
                    toAminoMsg(message: _166.ConsensusStateWithHeight): _166.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _166.ConsensusStateWithHeightProtoMsg): _166.ConsensusStateWithHeight;
                    toProto(message: _166.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _166.ConsensusStateWithHeight): _166.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _166.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.ClientConsensusStates;
                    fromPartial(object: Partial<_166.ClientConsensusStates>): _166.ClientConsensusStates;
                    fromAmino(object: _166.ClientConsensusStatesAmino): _166.ClientConsensusStates;
                    toAmino(message: _166.ClientConsensusStates): _166.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _166.ClientConsensusStatesAminoMsg): _166.ClientConsensusStates;
                    toAminoMsg(message: _166.ClientConsensusStates): _166.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _166.ClientConsensusStatesProtoMsg): _166.ClientConsensusStates;
                    toProto(message: _166.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _166.ClientConsensusStates): _166.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _166.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.ClientUpdateProposal;
                    fromPartial(object: Partial<_166.ClientUpdateProposal>): _166.ClientUpdateProposal;
                    fromAmino(object: _166.ClientUpdateProposalAmino): _166.ClientUpdateProposal;
                    toAmino(message: _166.ClientUpdateProposal): _166.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _166.ClientUpdateProposalAminoMsg): _166.ClientUpdateProposal;
                    toAminoMsg(message: _166.ClientUpdateProposal): _166.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _166.ClientUpdateProposalProtoMsg): _166.ClientUpdateProposal;
                    toProto(message: _166.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _166.ClientUpdateProposal): _166.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _166.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.UpgradeProposal;
                    fromPartial(object: Partial<_166.UpgradeProposal>): _166.UpgradeProposal;
                    fromAmino(object: _166.UpgradeProposalAmino): _166.UpgradeProposal;
                    toAmino(message: _166.UpgradeProposal): _166.UpgradeProposalAmino;
                    fromAminoMsg(object: _166.UpgradeProposalAminoMsg): _166.UpgradeProposal;
                    toAminoMsg(message: _166.UpgradeProposal): _166.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _166.UpgradeProposalProtoMsg): _166.UpgradeProposal;
                    toProto(message: _166.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _166.UpgradeProposal): _166.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _166.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.Height;
                    fromPartial(object: Partial<_166.Height>): _166.Height;
                    fromAmino(object: _166.HeightAmino): _166.Height;
                    toAmino(message: _166.Height): _166.HeightAmino;
                    fromAminoMsg(object: _166.HeightAminoMsg): _166.Height;
                    toAminoMsg(message: _166.Height): _166.HeightAminoMsg;
                    fromProtoMsg(message: _166.HeightProtoMsg): _166.Height;
                    toProto(message: _166.Height): Uint8Array;
                    toProtoMsg(message: _166.Height): _166.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _166.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _166.Params;
                    fromPartial(object: Partial<_166.Params>): _166.Params;
                    fromAmino(object: _166.ParamsAmino): _166.Params;
                    toAmino(message: _166.Params): _166.ParamsAmino;
                    fromAminoMsg(object: _166.ParamsAminoMsg): _166.Params;
                    toAminoMsg(message: _166.Params): _166.ParamsAminoMsg;
                    fromProtoMsg(message: _166.ParamsProtoMsg): _166.Params;
                    toProto(message: _166.Params): Uint8Array;
                    toProtoMsg(message: _166.Params): _166.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _170.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _170.MerkleRoot;
                    fromPartial(object: Partial<_170.MerkleRoot>): _170.MerkleRoot;
                    fromAmino(object: _170.MerkleRootAmino): _170.MerkleRoot;
                    toAmino(message: _170.MerkleRoot): _170.MerkleRootAmino;
                    fromAminoMsg(object: _170.MerkleRootAminoMsg): _170.MerkleRoot;
                    toAminoMsg(message: _170.MerkleRoot): _170.MerkleRootAminoMsg;
                    fromProtoMsg(message: _170.MerkleRootProtoMsg): _170.MerkleRoot;
                    toProto(message: _170.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _170.MerkleRoot): _170.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _170.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _170.MerklePrefix;
                    fromPartial(object: Partial<_170.MerklePrefix>): _170.MerklePrefix;
                    fromAmino(object: _170.MerklePrefixAmino): _170.MerklePrefix;
                    toAmino(message: _170.MerklePrefix): _170.MerklePrefixAmino;
                    fromAminoMsg(object: _170.MerklePrefixAminoMsg): _170.MerklePrefix;
                    toAminoMsg(message: _170.MerklePrefix): _170.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _170.MerklePrefixProtoMsg): _170.MerklePrefix;
                    toProto(message: _170.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _170.MerklePrefix): _170.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _170.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _170.MerklePath;
                    fromPartial(object: Partial<_170.MerklePath>): _170.MerklePath;
                    fromAmino(object: _170.MerklePathAmino): _170.MerklePath;
                    toAmino(message: _170.MerklePath): _170.MerklePathAmino;
                    fromAminoMsg(object: _170.MerklePathAminoMsg): _170.MerklePath;
                    toAminoMsg(message: _170.MerklePath): _170.MerklePathAminoMsg;
                    fromProtoMsg(message: _170.MerklePathProtoMsg): _170.MerklePath;
                    toProto(message: _170.MerklePath): Uint8Array;
                    toProtoMsg(message: _170.MerklePath): _170.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _170.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _170.MerkleProof;
                    fromPartial(object: Partial<_170.MerkleProof>): _170.MerkleProof;
                    fromAmino(object: _170.MerkleProofAmino): _170.MerkleProof;
                    toAmino(message: _170.MerkleProof): _170.MerkleProofAmino;
                    fromAminoMsg(object: _170.MerkleProofAminoMsg): _170.MerkleProof;
                    toAminoMsg(message: _170.MerkleProof): _170.MerkleProofAminoMsg;
                    fromProtoMsg(message: _170.MerkleProofProtoMsg): _170.MerkleProof;
                    toProto(message: _170.MerkleProof): Uint8Array;
                    toProtoMsg(message: _170.MerkleProof): _170.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _281.MsgClientImpl;
                QueryClientImpl: typeof _277.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _173.QueryConnectionRequest): Promise<_173.QueryConnectionResponse>;
                    connections(request?: _173.QueryConnectionsRequest): Promise<_173.QueryConnectionsResponse>;
                    clientConnections(request: _173.QueryClientConnectionsRequest): Promise<_173.QueryClientConnectionsResponse>;
                    connectionClientState(request: _173.QueryConnectionClientStateRequest): Promise<_173.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _173.QueryConnectionConsensusStateRequest): Promise<_173.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _273.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _174.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _174.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _174.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _174.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _174.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _174.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _174.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _174.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenConfirm;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _174.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _174.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _174.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _174.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _174.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _174.MsgConnectionOpenInit) => _174.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _174.MsgConnectionOpenInitAmino) => _174.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _174.MsgConnectionOpenTry) => _174.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _174.MsgConnectionOpenTryAmino) => _174.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _174.MsgConnectionOpenAck) => _174.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _174.MsgConnectionOpenAckAmino) => _174.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _174.MsgConnectionOpenConfirm) => _174.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _174.MsgConnectionOpenConfirmAmino) => _174.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _174.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _174.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_174.MsgConnectionOpenInit>): _174.MsgConnectionOpenInit;
                    fromAmino(object: _174.MsgConnectionOpenInitAmino): _174.MsgConnectionOpenInit;
                    toAmino(message: _174.MsgConnectionOpenInit): _174.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenInitAminoMsg): _174.MsgConnectionOpenInit;
                    toAminoMsg(message: _174.MsgConnectionOpenInit): _174.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenInitProtoMsg): _174.MsgConnectionOpenInit;
                    toProto(message: _174.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenInit): _174.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _174.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_174.MsgConnectionOpenInitResponse>): _174.MsgConnectionOpenInitResponse;
                    fromAmino(_: _174.MsgConnectionOpenInitResponseAmino): _174.MsgConnectionOpenInitResponse;
                    toAmino(_: _174.MsgConnectionOpenInitResponse): _174.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenInitResponseAminoMsg): _174.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _174.MsgConnectionOpenInitResponse): _174.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenInitResponseProtoMsg): _174.MsgConnectionOpenInitResponse;
                    toProto(message: _174.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenInitResponse): _174.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _174.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _174.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_174.MsgConnectionOpenTry>): _174.MsgConnectionOpenTry;
                    fromAmino(object: _174.MsgConnectionOpenTryAmino): _174.MsgConnectionOpenTry;
                    toAmino(message: _174.MsgConnectionOpenTry): _174.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenTryAminoMsg): _174.MsgConnectionOpenTry;
                    toAminoMsg(message: _174.MsgConnectionOpenTry): _174.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenTryProtoMsg): _174.MsgConnectionOpenTry;
                    toProto(message: _174.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenTry): _174.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _174.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_174.MsgConnectionOpenTryResponse>): _174.MsgConnectionOpenTryResponse;
                    fromAmino(_: _174.MsgConnectionOpenTryResponseAmino): _174.MsgConnectionOpenTryResponse;
                    toAmino(_: _174.MsgConnectionOpenTryResponse): _174.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenTryResponseAminoMsg): _174.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _174.MsgConnectionOpenTryResponse): _174.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenTryResponseProtoMsg): _174.MsgConnectionOpenTryResponse;
                    toProto(message: _174.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenTryResponse): _174.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _174.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _174.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_174.MsgConnectionOpenAck>): _174.MsgConnectionOpenAck;
                    fromAmino(object: _174.MsgConnectionOpenAckAmino): _174.MsgConnectionOpenAck;
                    toAmino(message: _174.MsgConnectionOpenAck): _174.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenAckAminoMsg): _174.MsgConnectionOpenAck;
                    toAminoMsg(message: _174.MsgConnectionOpenAck): _174.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenAckProtoMsg): _174.MsgConnectionOpenAck;
                    toProto(message: _174.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenAck): _174.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _174.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_174.MsgConnectionOpenAckResponse>): _174.MsgConnectionOpenAckResponse;
                    fromAmino(_: _174.MsgConnectionOpenAckResponseAmino): _174.MsgConnectionOpenAckResponse;
                    toAmino(_: _174.MsgConnectionOpenAckResponse): _174.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenAckResponseAminoMsg): _174.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _174.MsgConnectionOpenAckResponse): _174.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenAckResponseProtoMsg): _174.MsgConnectionOpenAckResponse;
                    toProto(message: _174.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenAckResponse): _174.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _174.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _174.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_174.MsgConnectionOpenConfirm>): _174.MsgConnectionOpenConfirm;
                    fromAmino(object: _174.MsgConnectionOpenConfirmAmino): _174.MsgConnectionOpenConfirm;
                    toAmino(message: _174.MsgConnectionOpenConfirm): _174.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenConfirmAminoMsg): _174.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _174.MsgConnectionOpenConfirm): _174.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenConfirmProtoMsg): _174.MsgConnectionOpenConfirm;
                    toProto(message: _174.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenConfirm): _174.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(_: any): _174.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_174.MsgConnectionOpenConfirmResponse>): _174.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _174.MsgConnectionOpenConfirmResponseAmino): _174.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _174.MsgConnectionOpenConfirmResponse): _174.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _174.MsgConnectionOpenConfirmResponseAminoMsg): _174.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _174.MsgConnectionOpenConfirmResponse): _174.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgConnectionOpenConfirmResponseProtoMsg): _174.MsgConnectionOpenConfirmResponse;
                    toProto(message: _174.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgConnectionOpenConfirmResponse): _174.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionRequest;
                    fromPartial(object: Partial<_173.QueryConnectionRequest>): _173.QueryConnectionRequest;
                    fromAmino(object: _173.QueryConnectionRequestAmino): _173.QueryConnectionRequest;
                    toAmino(message: _173.QueryConnectionRequest): _173.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _173.QueryConnectionRequestAminoMsg): _173.QueryConnectionRequest;
                    toAminoMsg(message: _173.QueryConnectionRequest): _173.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionRequestProtoMsg): _173.QueryConnectionRequest;
                    toProto(message: _173.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionRequest): _173.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionResponse;
                    fromPartial(object: Partial<_173.QueryConnectionResponse>): _173.QueryConnectionResponse;
                    fromAmino(object: _173.QueryConnectionResponseAmino): _173.QueryConnectionResponse;
                    toAmino(message: _173.QueryConnectionResponse): _173.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _173.QueryConnectionResponseAminoMsg): _173.QueryConnectionResponse;
                    toAminoMsg(message: _173.QueryConnectionResponse): _173.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionResponseProtoMsg): _173.QueryConnectionResponse;
                    toProto(message: _173.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionResponse): _173.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionsRequest;
                    fromPartial(object: Partial<_173.QueryConnectionsRequest>): _173.QueryConnectionsRequest;
                    fromAmino(object: _173.QueryConnectionsRequestAmino): _173.QueryConnectionsRequest;
                    toAmino(message: _173.QueryConnectionsRequest): _173.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _173.QueryConnectionsRequestAminoMsg): _173.QueryConnectionsRequest;
                    toAminoMsg(message: _173.QueryConnectionsRequest): _173.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionsRequestProtoMsg): _173.QueryConnectionsRequest;
                    toProto(message: _173.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionsRequest): _173.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionsResponse;
                    fromPartial(object: Partial<_173.QueryConnectionsResponse>): _173.QueryConnectionsResponse;
                    fromAmino(object: _173.QueryConnectionsResponseAmino): _173.QueryConnectionsResponse;
                    toAmino(message: _173.QueryConnectionsResponse): _173.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _173.QueryConnectionsResponseAminoMsg): _173.QueryConnectionsResponse;
                    toAminoMsg(message: _173.QueryConnectionsResponse): _173.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionsResponseProtoMsg): _173.QueryConnectionsResponse;
                    toProto(message: _173.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionsResponse): _173.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_173.QueryClientConnectionsRequest>): _173.QueryClientConnectionsRequest;
                    fromAmino(object: _173.QueryClientConnectionsRequestAmino): _173.QueryClientConnectionsRequest;
                    toAmino(message: _173.QueryClientConnectionsRequest): _173.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _173.QueryClientConnectionsRequestAminoMsg): _173.QueryClientConnectionsRequest;
                    toAminoMsg(message: _173.QueryClientConnectionsRequest): _173.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryClientConnectionsRequestProtoMsg): _173.QueryClientConnectionsRequest;
                    toProto(message: _173.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryClientConnectionsRequest): _173.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_173.QueryClientConnectionsResponse>): _173.QueryClientConnectionsResponse;
                    fromAmino(object: _173.QueryClientConnectionsResponseAmino): _173.QueryClientConnectionsResponse;
                    toAmino(message: _173.QueryClientConnectionsResponse): _173.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _173.QueryClientConnectionsResponseAminoMsg): _173.QueryClientConnectionsResponse;
                    toAminoMsg(message: _173.QueryClientConnectionsResponse): _173.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryClientConnectionsResponseProtoMsg): _173.QueryClientConnectionsResponse;
                    toProto(message: _173.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryClientConnectionsResponse): _173.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_173.QueryConnectionClientStateRequest>): _173.QueryConnectionClientStateRequest;
                    fromAmino(object: _173.QueryConnectionClientStateRequestAmino): _173.QueryConnectionClientStateRequest;
                    toAmino(message: _173.QueryConnectionClientStateRequest): _173.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _173.QueryConnectionClientStateRequestAminoMsg): _173.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _173.QueryConnectionClientStateRequest): _173.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionClientStateRequestProtoMsg): _173.QueryConnectionClientStateRequest;
                    toProto(message: _173.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionClientStateRequest): _173.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_173.QueryConnectionClientStateResponse>): _173.QueryConnectionClientStateResponse;
                    fromAmino(object: _173.QueryConnectionClientStateResponseAmino): _173.QueryConnectionClientStateResponse;
                    toAmino(message: _173.QueryConnectionClientStateResponse): _173.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _173.QueryConnectionClientStateResponseAminoMsg): _173.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _173.QueryConnectionClientStateResponse): _173.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionClientStateResponseProtoMsg): _173.QueryConnectionClientStateResponse;
                    toProto(message: _173.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionClientStateResponse): _173.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_173.QueryConnectionConsensusStateRequest>): _173.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _173.QueryConnectionConsensusStateRequestAmino): _173.QueryConnectionConsensusStateRequest;
                    toAmino(message: _173.QueryConnectionConsensusStateRequest): _173.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _173.QueryConnectionConsensusStateRequestAminoMsg): _173.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _173.QueryConnectionConsensusStateRequest): _173.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionConsensusStateRequestProtoMsg): _173.QueryConnectionConsensusStateRequest;
                    toProto(message: _173.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionConsensusStateRequest): _173.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _173.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_173.QueryConnectionConsensusStateResponse>): _173.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _173.QueryConnectionConsensusStateResponseAmino): _173.QueryConnectionConsensusStateResponse;
                    toAmino(message: _173.QueryConnectionConsensusStateResponse): _173.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _173.QueryConnectionConsensusStateResponseAminoMsg): _173.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _173.QueryConnectionConsensusStateResponse): _173.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionConsensusStateResponseProtoMsg): _173.QueryConnectionConsensusStateResponse;
                    toProto(message: _173.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionConsensusStateResponse): _173.QueryConnectionConsensusStateResponseProtoMsg;
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
                stateFromJSON(object: any): _171.State;
                stateToJSON(object: _171.State): string;
                State: typeof _171.State;
                StateSDKType: typeof _171.State;
                StateAmino: typeof _171.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _171.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.ConnectionEnd;
                    fromPartial(object: Partial<_171.ConnectionEnd>): _171.ConnectionEnd;
                    fromAmino(object: _171.ConnectionEndAmino): _171.ConnectionEnd;
                    toAmino(message: _171.ConnectionEnd): _171.ConnectionEndAmino;
                    fromAminoMsg(object: _171.ConnectionEndAminoMsg): _171.ConnectionEnd;
                    toAminoMsg(message: _171.ConnectionEnd): _171.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _171.ConnectionEndProtoMsg): _171.ConnectionEnd;
                    toProto(message: _171.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _171.ConnectionEnd): _171.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _171.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.IdentifiedConnection;
                    fromPartial(object: Partial<_171.IdentifiedConnection>): _171.IdentifiedConnection;
                    fromAmino(object: _171.IdentifiedConnectionAmino): _171.IdentifiedConnection;
                    toAmino(message: _171.IdentifiedConnection): _171.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _171.IdentifiedConnectionAminoMsg): _171.IdentifiedConnection;
                    toAminoMsg(message: _171.IdentifiedConnection): _171.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _171.IdentifiedConnectionProtoMsg): _171.IdentifiedConnection;
                    toProto(message: _171.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _171.IdentifiedConnection): _171.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _171.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.Counterparty;
                    fromPartial(object: Partial<_171.Counterparty>): _171.Counterparty;
                    fromAmino(object: _171.CounterpartyAmino): _171.Counterparty;
                    toAmino(message: _171.Counterparty): _171.CounterpartyAmino;
                    fromAminoMsg(object: _171.CounterpartyAminoMsg): _171.Counterparty;
                    toAminoMsg(message: _171.Counterparty): _171.CounterpartyAminoMsg;
                    fromProtoMsg(message: _171.CounterpartyProtoMsg): _171.Counterparty;
                    toProto(message: _171.Counterparty): Uint8Array;
                    toProtoMsg(message: _171.Counterparty): _171.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _171.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.ClientPaths;
                    fromPartial(object: Partial<_171.ClientPaths>): _171.ClientPaths;
                    fromAmino(object: _171.ClientPathsAmino): _171.ClientPaths;
                    toAmino(message: _171.ClientPaths): _171.ClientPathsAmino;
                    fromAminoMsg(object: _171.ClientPathsAminoMsg): _171.ClientPaths;
                    toAminoMsg(message: _171.ClientPaths): _171.ClientPathsAminoMsg;
                    fromProtoMsg(message: _171.ClientPathsProtoMsg): _171.ClientPaths;
                    toProto(message: _171.ClientPaths): Uint8Array;
                    toProtoMsg(message: _171.ClientPaths): _171.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _171.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.ConnectionPaths;
                    fromPartial(object: Partial<_171.ConnectionPaths>): _171.ConnectionPaths;
                    fromAmino(object: _171.ConnectionPathsAmino): _171.ConnectionPaths;
                    toAmino(message: _171.ConnectionPaths): _171.ConnectionPathsAmino;
                    fromAminoMsg(object: _171.ConnectionPathsAminoMsg): _171.ConnectionPaths;
                    toAminoMsg(message: _171.ConnectionPaths): _171.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _171.ConnectionPathsProtoMsg): _171.ConnectionPaths;
                    toProto(message: _171.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _171.ConnectionPaths): _171.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _171.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.Version;
                    fromPartial(object: Partial<_171.Version>): _171.Version;
                    fromAmino(object: _171.VersionAmino): _171.Version;
                    toAmino(message: _171.Version): _171.VersionAmino;
                    fromAminoMsg(object: _171.VersionAminoMsg): _171.Version;
                    toAminoMsg(message: _171.Version): _171.VersionAminoMsg;
                    fromProtoMsg(message: _171.VersionProtoMsg): _171.Version;
                    toProto(message: _171.Version): Uint8Array;
                    toProtoMsg(message: _171.Version): _171.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _171.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _171.Params;
                    fromPartial(object: Partial<_171.Params>): _171.Params;
                    fromAmino(object: _171.ParamsAmino): _171.Params;
                    toAmino(message: _171.Params): _171.ParamsAmino;
                    fromAminoMsg(object: _171.ParamsAminoMsg): _171.Params;
                    toAminoMsg(message: _171.Params): _171.ParamsAminoMsg;
                    fromProtoMsg(message: _171.ParamsProtoMsg): _171.Params;
                    toProto(message: _171.Params): Uint8Array;
                    toProtoMsg(message: _171.Params): _171.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
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
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _176.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _176.ClientState;
                    fromPartial(object: Partial<_176.ClientState>): _176.ClientState;
                    fromAmino(object: _176.ClientStateAmino): _176.ClientState;
                    toAmino(message: _176.ClientState): _176.ClientStateAmino;
                    fromAminoMsg(object: _176.ClientStateAminoMsg): _176.ClientState;
                    toAminoMsg(message: _176.ClientState): _176.ClientStateAminoMsg;
                    fromProtoMsg(message: _176.ClientStateProtoMsg): _176.ClientState;
                    toProto(message: _176.ClientState): Uint8Array;
                    toProtoMsg(message: _176.ClientState): _176.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _177.DataType;
                dataTypeToJSON(object: _177.DataType): string;
                DataType: typeof _177.DataType;
                DataTypeSDKType: typeof _177.DataType;
                DataTypeAmino: typeof _177.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _177.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.ClientState;
                    fromPartial(object: Partial<_177.ClientState>): _177.ClientState;
                    fromAmino(object: _177.ClientStateAmino): _177.ClientState;
                    toAmino(message: _177.ClientState): _177.ClientStateAmino;
                    fromAminoMsg(object: _177.ClientStateAminoMsg): _177.ClientState;
                    toAminoMsg(message: _177.ClientState): _177.ClientStateAminoMsg;
                    fromProtoMsg(message: _177.ClientStateProtoMsg): _177.ClientState;
                    toProto(message: _177.ClientState): Uint8Array;
                    toProtoMsg(message: _177.ClientState): _177.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _177.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.ConsensusState;
                    fromPartial(object: Partial<_177.ConsensusState>): _177.ConsensusState;
                    fromAmino(object: _177.ConsensusStateAmino): _177.ConsensusState;
                    toAmino(message: _177.ConsensusState): _177.ConsensusStateAmino;
                    fromAminoMsg(object: _177.ConsensusStateAminoMsg): _177.ConsensusState;
                    toAminoMsg(message: _177.ConsensusState): _177.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _177.ConsensusStateProtoMsg): _177.ConsensusState;
                    toProto(message: _177.ConsensusState): Uint8Array;
                    toProtoMsg(message: _177.ConsensusState): _177.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _177.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.Header;
                    fromPartial(object: Partial<_177.Header>): _177.Header;
                    fromAmino(object: _177.HeaderAmino): _177.Header;
                    toAmino(message: _177.Header): _177.HeaderAmino;
                    fromAminoMsg(object: _177.HeaderAminoMsg): _177.Header;
                    toAminoMsg(message: _177.Header): _177.HeaderAminoMsg;
                    fromProtoMsg(message: _177.HeaderProtoMsg): _177.Header;
                    toProto(message: _177.Header): Uint8Array;
                    toProtoMsg(message: _177.Header): _177.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _177.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.Misbehaviour;
                    fromPartial(object: Partial<_177.Misbehaviour>): _177.Misbehaviour;
                    fromAmino(object: _177.MisbehaviourAmino): _177.Misbehaviour;
                    toAmino(message: _177.Misbehaviour): _177.MisbehaviourAmino;
                    fromAminoMsg(object: _177.MisbehaviourAminoMsg): _177.Misbehaviour;
                    toAminoMsg(message: _177.Misbehaviour): _177.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _177.MisbehaviourProtoMsg): _177.Misbehaviour;
                    toProto(message: _177.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _177.Misbehaviour): _177.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _177.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.SignatureAndData;
                    fromPartial(object: Partial<_177.SignatureAndData>): _177.SignatureAndData;
                    fromAmino(object: _177.SignatureAndDataAmino): _177.SignatureAndData;
                    toAmino(message: _177.SignatureAndData): _177.SignatureAndDataAmino;
                    fromAminoMsg(object: _177.SignatureAndDataAminoMsg): _177.SignatureAndData;
                    toAminoMsg(message: _177.SignatureAndData): _177.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _177.SignatureAndDataProtoMsg): _177.SignatureAndData;
                    toProto(message: _177.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _177.SignatureAndData): _177.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _177.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.TimestampedSignatureData;
                    fromPartial(object: Partial<_177.TimestampedSignatureData>): _177.TimestampedSignatureData;
                    fromAmino(object: _177.TimestampedSignatureDataAmino): _177.TimestampedSignatureData;
                    toAmino(message: _177.TimestampedSignatureData): _177.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _177.TimestampedSignatureDataAminoMsg): _177.TimestampedSignatureData;
                    toAminoMsg(message: _177.TimestampedSignatureData): _177.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _177.TimestampedSignatureDataProtoMsg): _177.TimestampedSignatureData;
                    toProto(message: _177.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _177.TimestampedSignatureData): _177.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _177.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.SignBytes;
                    fromPartial(object: Partial<_177.SignBytes>): _177.SignBytes;
                    fromAmino(object: _177.SignBytesAmino): _177.SignBytes;
                    toAmino(message: _177.SignBytes): _177.SignBytesAmino;
                    fromAminoMsg(object: _177.SignBytesAminoMsg): _177.SignBytes;
                    toAminoMsg(message: _177.SignBytes): _177.SignBytesAminoMsg;
                    fromProtoMsg(message: _177.SignBytesProtoMsg): _177.SignBytes;
                    toProto(message: _177.SignBytes): Uint8Array;
                    toProtoMsg(message: _177.SignBytes): _177.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _177.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.HeaderData;
                    fromPartial(object: Partial<_177.HeaderData>): _177.HeaderData;
                    fromAmino(object: _177.HeaderDataAmino): _177.HeaderData;
                    toAmino(message: _177.HeaderData): _177.HeaderDataAmino;
                    fromAminoMsg(object: _177.HeaderDataAminoMsg): _177.HeaderData;
                    toAminoMsg(message: _177.HeaderData): _177.HeaderDataAminoMsg;
                    fromProtoMsg(message: _177.HeaderDataProtoMsg): _177.HeaderData;
                    toProto(message: _177.HeaderData): Uint8Array;
                    toProtoMsg(message: _177.HeaderData): _177.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _177.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.ClientStateData;
                    fromPartial(object: Partial<_177.ClientStateData>): _177.ClientStateData;
                    fromAmino(object: _177.ClientStateDataAmino): _177.ClientStateData;
                    toAmino(message: _177.ClientStateData): _177.ClientStateDataAmino;
                    fromAminoMsg(object: _177.ClientStateDataAminoMsg): _177.ClientStateData;
                    toAminoMsg(message: _177.ClientStateData): _177.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _177.ClientStateDataProtoMsg): _177.ClientStateData;
                    toProto(message: _177.ClientStateData): Uint8Array;
                    toProtoMsg(message: _177.ClientStateData): _177.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _177.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.ConsensusStateData;
                    fromPartial(object: Partial<_177.ConsensusStateData>): _177.ConsensusStateData;
                    fromAmino(object: _177.ConsensusStateDataAmino): _177.ConsensusStateData;
                    toAmino(message: _177.ConsensusStateData): _177.ConsensusStateDataAmino;
                    fromAminoMsg(object: _177.ConsensusStateDataAminoMsg): _177.ConsensusStateData;
                    toAminoMsg(message: _177.ConsensusStateData): _177.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _177.ConsensusStateDataProtoMsg): _177.ConsensusStateData;
                    toProto(message: _177.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _177.ConsensusStateData): _177.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _177.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.ConnectionStateData;
                    fromPartial(object: Partial<_177.ConnectionStateData>): _177.ConnectionStateData;
                    fromAmino(object: _177.ConnectionStateDataAmino): _177.ConnectionStateData;
                    toAmino(message: _177.ConnectionStateData): _177.ConnectionStateDataAmino;
                    fromAminoMsg(object: _177.ConnectionStateDataAminoMsg): _177.ConnectionStateData;
                    toAminoMsg(message: _177.ConnectionStateData): _177.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _177.ConnectionStateDataProtoMsg): _177.ConnectionStateData;
                    toProto(message: _177.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _177.ConnectionStateData): _177.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _177.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.ChannelStateData;
                    fromPartial(object: Partial<_177.ChannelStateData>): _177.ChannelStateData;
                    fromAmino(object: _177.ChannelStateDataAmino): _177.ChannelStateData;
                    toAmino(message: _177.ChannelStateData): _177.ChannelStateDataAmino;
                    fromAminoMsg(object: _177.ChannelStateDataAminoMsg): _177.ChannelStateData;
                    toAminoMsg(message: _177.ChannelStateData): _177.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _177.ChannelStateDataProtoMsg): _177.ChannelStateData;
                    toProto(message: _177.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _177.ChannelStateData): _177.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _177.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.PacketCommitmentData;
                    fromPartial(object: Partial<_177.PacketCommitmentData>): _177.PacketCommitmentData;
                    fromAmino(object: _177.PacketCommitmentDataAmino): _177.PacketCommitmentData;
                    toAmino(message: _177.PacketCommitmentData): _177.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _177.PacketCommitmentDataAminoMsg): _177.PacketCommitmentData;
                    toAminoMsg(message: _177.PacketCommitmentData): _177.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _177.PacketCommitmentDataProtoMsg): _177.PacketCommitmentData;
                    toProto(message: _177.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _177.PacketCommitmentData): _177.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _177.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.PacketAcknowledgementData;
                    fromPartial(object: Partial<_177.PacketAcknowledgementData>): _177.PacketAcknowledgementData;
                    fromAmino(object: _177.PacketAcknowledgementDataAmino): _177.PacketAcknowledgementData;
                    toAmino(message: _177.PacketAcknowledgementData): _177.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _177.PacketAcknowledgementDataAminoMsg): _177.PacketAcknowledgementData;
                    toAminoMsg(message: _177.PacketAcknowledgementData): _177.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _177.PacketAcknowledgementDataProtoMsg): _177.PacketAcknowledgementData;
                    toProto(message: _177.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _177.PacketAcknowledgementData): _177.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _177.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_177.PacketReceiptAbsenceData>): _177.PacketReceiptAbsenceData;
                    fromAmino(object: _177.PacketReceiptAbsenceDataAmino): _177.PacketReceiptAbsenceData;
                    toAmino(message: _177.PacketReceiptAbsenceData): _177.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _177.PacketReceiptAbsenceDataAminoMsg): _177.PacketReceiptAbsenceData;
                    toAminoMsg(message: _177.PacketReceiptAbsenceData): _177.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _177.PacketReceiptAbsenceDataProtoMsg): _177.PacketReceiptAbsenceData;
                    toProto(message: _177.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _177.PacketReceiptAbsenceData): _177.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _177.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _177.NextSequenceRecvData;
                    fromPartial(object: Partial<_177.NextSequenceRecvData>): _177.NextSequenceRecvData;
                    fromAmino(object: _177.NextSequenceRecvDataAmino): _177.NextSequenceRecvData;
                    toAmino(message: _177.NextSequenceRecvData): _177.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _177.NextSequenceRecvDataAminoMsg): _177.NextSequenceRecvData;
                    toAminoMsg(message: _177.NextSequenceRecvData): _177.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _177.NextSequenceRecvDataProtoMsg): _177.NextSequenceRecvData;
                    toProto(message: _177.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _177.NextSequenceRecvData): _177.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _178.DataType;
                dataTypeToJSON(object: _178.DataType): string;
                DataType: typeof _178.DataType;
                DataTypeSDKType: typeof _178.DataType;
                DataTypeAmino: typeof _178.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _178.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.ClientState;
                    fromPartial(object: Partial<_178.ClientState>): _178.ClientState;
                    fromAmino(object: _178.ClientStateAmino): _178.ClientState;
                    toAmino(message: _178.ClientState): _178.ClientStateAmino;
                    fromAminoMsg(object: _178.ClientStateAminoMsg): _178.ClientState;
                    toAminoMsg(message: _178.ClientState): _178.ClientStateAminoMsg;
                    fromProtoMsg(message: _178.ClientStateProtoMsg): _178.ClientState;
                    toProto(message: _178.ClientState): Uint8Array;
                    toProtoMsg(message: _178.ClientState): _178.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _178.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.ConsensusState;
                    fromPartial(object: Partial<_178.ConsensusState>): _178.ConsensusState;
                    fromAmino(object: _178.ConsensusStateAmino): _178.ConsensusState;
                    toAmino(message: _178.ConsensusState): _178.ConsensusStateAmino;
                    fromAminoMsg(object: _178.ConsensusStateAminoMsg): _178.ConsensusState;
                    toAminoMsg(message: _178.ConsensusState): _178.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _178.ConsensusStateProtoMsg): _178.ConsensusState;
                    toProto(message: _178.ConsensusState): Uint8Array;
                    toProtoMsg(message: _178.ConsensusState): _178.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _178.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.Header;
                    fromPartial(object: Partial<_178.Header>): _178.Header;
                    fromAmino(object: _178.HeaderAmino): _178.Header;
                    toAmino(message: _178.Header): _178.HeaderAmino;
                    fromAminoMsg(object: _178.HeaderAminoMsg): _178.Header;
                    toAminoMsg(message: _178.Header): _178.HeaderAminoMsg;
                    fromProtoMsg(message: _178.HeaderProtoMsg): _178.Header;
                    toProto(message: _178.Header): Uint8Array;
                    toProtoMsg(message: _178.Header): _178.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _178.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.Misbehaviour;
                    fromPartial(object: Partial<_178.Misbehaviour>): _178.Misbehaviour;
                    fromAmino(object: _178.MisbehaviourAmino): _178.Misbehaviour;
                    toAmino(message: _178.Misbehaviour): _178.MisbehaviourAmino;
                    fromAminoMsg(object: _178.MisbehaviourAminoMsg): _178.Misbehaviour;
                    toAminoMsg(message: _178.Misbehaviour): _178.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _178.MisbehaviourProtoMsg): _178.Misbehaviour;
                    toProto(message: _178.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _178.Misbehaviour): _178.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _178.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.SignatureAndData;
                    fromPartial(object: Partial<_178.SignatureAndData>): _178.SignatureAndData;
                    fromAmino(object: _178.SignatureAndDataAmino): _178.SignatureAndData;
                    toAmino(message: _178.SignatureAndData): _178.SignatureAndDataAmino;
                    fromAminoMsg(object: _178.SignatureAndDataAminoMsg): _178.SignatureAndData;
                    toAminoMsg(message: _178.SignatureAndData): _178.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _178.SignatureAndDataProtoMsg): _178.SignatureAndData;
                    toProto(message: _178.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _178.SignatureAndData): _178.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _178.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.TimestampedSignatureData;
                    fromPartial(object: Partial<_178.TimestampedSignatureData>): _178.TimestampedSignatureData;
                    fromAmino(object: _178.TimestampedSignatureDataAmino): _178.TimestampedSignatureData;
                    toAmino(message: _178.TimestampedSignatureData): _178.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _178.TimestampedSignatureDataAminoMsg): _178.TimestampedSignatureData;
                    toAminoMsg(message: _178.TimestampedSignatureData): _178.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _178.TimestampedSignatureDataProtoMsg): _178.TimestampedSignatureData;
                    toProto(message: _178.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _178.TimestampedSignatureData): _178.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _178.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.SignBytes;
                    fromPartial(object: Partial<_178.SignBytes>): _178.SignBytes;
                    fromAmino(object: _178.SignBytesAmino): _178.SignBytes;
                    toAmino(message: _178.SignBytes): _178.SignBytesAmino;
                    fromAminoMsg(object: _178.SignBytesAminoMsg): _178.SignBytes;
                    toAminoMsg(message: _178.SignBytes): _178.SignBytesAminoMsg;
                    fromProtoMsg(message: _178.SignBytesProtoMsg): _178.SignBytes;
                    toProto(message: _178.SignBytes): Uint8Array;
                    toProtoMsg(message: _178.SignBytes): _178.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _178.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.HeaderData;
                    fromPartial(object: Partial<_178.HeaderData>): _178.HeaderData;
                    fromAmino(object: _178.HeaderDataAmino): _178.HeaderData;
                    toAmino(message: _178.HeaderData): _178.HeaderDataAmino;
                    fromAminoMsg(object: _178.HeaderDataAminoMsg): _178.HeaderData;
                    toAminoMsg(message: _178.HeaderData): _178.HeaderDataAminoMsg;
                    fromProtoMsg(message: _178.HeaderDataProtoMsg): _178.HeaderData;
                    toProto(message: _178.HeaderData): Uint8Array;
                    toProtoMsg(message: _178.HeaderData): _178.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _178.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.ClientStateData;
                    fromPartial(object: Partial<_178.ClientStateData>): _178.ClientStateData;
                    fromAmino(object: _178.ClientStateDataAmino): _178.ClientStateData;
                    toAmino(message: _178.ClientStateData): _178.ClientStateDataAmino;
                    fromAminoMsg(object: _178.ClientStateDataAminoMsg): _178.ClientStateData;
                    toAminoMsg(message: _178.ClientStateData): _178.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _178.ClientStateDataProtoMsg): _178.ClientStateData;
                    toProto(message: _178.ClientStateData): Uint8Array;
                    toProtoMsg(message: _178.ClientStateData): _178.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _178.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.ConsensusStateData;
                    fromPartial(object: Partial<_178.ConsensusStateData>): _178.ConsensusStateData;
                    fromAmino(object: _178.ConsensusStateDataAmino): _178.ConsensusStateData;
                    toAmino(message: _178.ConsensusStateData): _178.ConsensusStateDataAmino;
                    fromAminoMsg(object: _178.ConsensusStateDataAminoMsg): _178.ConsensusStateData;
                    toAminoMsg(message: _178.ConsensusStateData): _178.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _178.ConsensusStateDataProtoMsg): _178.ConsensusStateData;
                    toProto(message: _178.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _178.ConsensusStateData): _178.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _178.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.ConnectionStateData;
                    fromPartial(object: Partial<_178.ConnectionStateData>): _178.ConnectionStateData;
                    fromAmino(object: _178.ConnectionStateDataAmino): _178.ConnectionStateData;
                    toAmino(message: _178.ConnectionStateData): _178.ConnectionStateDataAmino;
                    fromAminoMsg(object: _178.ConnectionStateDataAminoMsg): _178.ConnectionStateData;
                    toAminoMsg(message: _178.ConnectionStateData): _178.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _178.ConnectionStateDataProtoMsg): _178.ConnectionStateData;
                    toProto(message: _178.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _178.ConnectionStateData): _178.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _178.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.ChannelStateData;
                    fromPartial(object: Partial<_178.ChannelStateData>): _178.ChannelStateData;
                    fromAmino(object: _178.ChannelStateDataAmino): _178.ChannelStateData;
                    toAmino(message: _178.ChannelStateData): _178.ChannelStateDataAmino;
                    fromAminoMsg(object: _178.ChannelStateDataAminoMsg): _178.ChannelStateData;
                    toAminoMsg(message: _178.ChannelStateData): _178.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _178.ChannelStateDataProtoMsg): _178.ChannelStateData;
                    toProto(message: _178.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _178.ChannelStateData): _178.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _178.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.PacketCommitmentData;
                    fromPartial(object: Partial<_178.PacketCommitmentData>): _178.PacketCommitmentData;
                    fromAmino(object: _178.PacketCommitmentDataAmino): _178.PacketCommitmentData;
                    toAmino(message: _178.PacketCommitmentData): _178.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _178.PacketCommitmentDataAminoMsg): _178.PacketCommitmentData;
                    toAminoMsg(message: _178.PacketCommitmentData): _178.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _178.PacketCommitmentDataProtoMsg): _178.PacketCommitmentData;
                    toProto(message: _178.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _178.PacketCommitmentData): _178.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _178.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.PacketAcknowledgementData;
                    fromPartial(object: Partial<_178.PacketAcknowledgementData>): _178.PacketAcknowledgementData;
                    fromAmino(object: _178.PacketAcknowledgementDataAmino): _178.PacketAcknowledgementData;
                    toAmino(message: _178.PacketAcknowledgementData): _178.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _178.PacketAcknowledgementDataAminoMsg): _178.PacketAcknowledgementData;
                    toAminoMsg(message: _178.PacketAcknowledgementData): _178.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _178.PacketAcknowledgementDataProtoMsg): _178.PacketAcknowledgementData;
                    toProto(message: _178.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _178.PacketAcknowledgementData): _178.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _178.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_178.PacketReceiptAbsenceData>): _178.PacketReceiptAbsenceData;
                    fromAmino(object: _178.PacketReceiptAbsenceDataAmino): _178.PacketReceiptAbsenceData;
                    toAmino(message: _178.PacketReceiptAbsenceData): _178.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _178.PacketReceiptAbsenceDataAminoMsg): _178.PacketReceiptAbsenceData;
                    toAminoMsg(message: _178.PacketReceiptAbsenceData): _178.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _178.PacketReceiptAbsenceDataProtoMsg): _178.PacketReceiptAbsenceData;
                    toProto(message: _178.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _178.PacketReceiptAbsenceData): _178.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _178.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _178.NextSequenceRecvData;
                    fromPartial(object: Partial<_178.NextSequenceRecvData>): _178.NextSequenceRecvData;
                    fromAmino(object: _178.NextSequenceRecvDataAmino): _178.NextSequenceRecvData;
                    toAmino(message: _178.NextSequenceRecvData): _178.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _178.NextSequenceRecvDataAminoMsg): _178.NextSequenceRecvData;
                    toAminoMsg(message: _178.NextSequenceRecvData): _178.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _178.NextSequenceRecvDataProtoMsg): _178.NextSequenceRecvData;
                    toProto(message: _178.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _178.NextSequenceRecvData): _178.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _179.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.ClientState;
                    fromPartial(object: Partial<_179.ClientState>): _179.ClientState;
                    fromAmino(object: _179.ClientStateAmino): _179.ClientState;
                    toAmino(message: _179.ClientState): _179.ClientStateAmino;
                    fromAminoMsg(object: _179.ClientStateAminoMsg): _179.ClientState;
                    toAminoMsg(message: _179.ClientState): _179.ClientStateAminoMsg;
                    fromProtoMsg(message: _179.ClientStateProtoMsg): _179.ClientState;
                    toProto(message: _179.ClientState): Uint8Array;
                    toProtoMsg(message: _179.ClientState): _179.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _179.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.ConsensusState;
                    fromPartial(object: Partial<_179.ConsensusState>): _179.ConsensusState;
                    fromAmino(object: _179.ConsensusStateAmino): _179.ConsensusState;
                    toAmino(message: _179.ConsensusState): _179.ConsensusStateAmino;
                    fromAminoMsg(object: _179.ConsensusStateAminoMsg): _179.ConsensusState;
                    toAminoMsg(message: _179.ConsensusState): _179.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _179.ConsensusStateProtoMsg): _179.ConsensusState;
                    toProto(message: _179.ConsensusState): Uint8Array;
                    toProtoMsg(message: _179.ConsensusState): _179.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _179.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.Misbehaviour;
                    fromPartial(object: Partial<_179.Misbehaviour>): _179.Misbehaviour;
                    fromAmino(object: _179.MisbehaviourAmino): _179.Misbehaviour;
                    toAmino(message: _179.Misbehaviour): _179.MisbehaviourAmino;
                    fromAminoMsg(object: _179.MisbehaviourAminoMsg): _179.Misbehaviour;
                    toAminoMsg(message: _179.Misbehaviour): _179.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _179.MisbehaviourProtoMsg): _179.Misbehaviour;
                    toProto(message: _179.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _179.Misbehaviour): _179.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _179.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.Header;
                    fromPartial(object: Partial<_179.Header>): _179.Header;
                    fromAmino(object: _179.HeaderAmino): _179.Header;
                    toAmino(message: _179.Header): _179.HeaderAmino;
                    fromAminoMsg(object: _179.HeaderAminoMsg): _179.Header;
                    toAminoMsg(message: _179.Header): _179.HeaderAminoMsg;
                    fromProtoMsg(message: _179.HeaderProtoMsg): _179.Header;
                    toProto(message: _179.Header): Uint8Array;
                    toProtoMsg(message: _179.Header): _179.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _179.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    fromJSON(object: any): _179.Fraction;
                    fromPartial(object: Partial<_179.Fraction>): _179.Fraction;
                    fromAmino(object: _179.FractionAmino): _179.Fraction;
                    toAmino(message: _179.Fraction): _179.FractionAmino;
                    fromAminoMsg(object: _179.FractionAminoMsg): _179.Fraction;
                    toAminoMsg(message: _179.Fraction): _179.FractionAminoMsg;
                    fromProtoMsg(message: _179.FractionProtoMsg): _179.Fraction;
                    toProto(message: _179.Fraction): Uint8Array;
                    toProtoMsg(message: _179.Fraction): _179.FractionProtoMsg;
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
                    transfer: {
                        v1: {
                            denomTrace(request: _158.QueryDenomTraceRequest): Promise<_158.QueryDenomTraceResponse>;
                            denomTraces(request?: _158.QueryDenomTracesRequest): Promise<_158.QueryDenomTracesResponse>;
                            params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                            denomHash(request: _158.QueryDenomHashRequest): Promise<_158.QueryDenomHashResponse>;
                            escrowAddress(request: _158.QueryEscrowAddressRequest): Promise<_158.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _164.QueryChannelRequest): Promise<_164.QueryChannelResponse>;
                            channels(request?: _164.QueryChannelsRequest): Promise<_164.QueryChannelsResponse>;
                            connectionChannels(request: _164.QueryConnectionChannelsRequest): Promise<_164.QueryConnectionChannelsResponse>;
                            channelClientState(request: _164.QueryChannelClientStateRequest): Promise<_164.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _164.QueryChannelConsensusStateRequest): Promise<_164.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _164.QueryPacketCommitmentRequest): Promise<_164.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _164.QueryPacketCommitmentsRequest): Promise<_164.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _164.QueryPacketReceiptRequest): Promise<_164.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _164.QueryPacketAcknowledgementRequest): Promise<_164.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _164.QueryPacketAcknowledgementsRequest): Promise<_164.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _164.QueryUnreceivedPacketsRequest): Promise<_164.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _164.QueryUnreceivedAcksRequest): Promise<_164.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _164.QueryNextSequenceReceiveRequest): Promise<_164.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _168.QueryClientStateRequest): Promise<_168.QueryClientStateResponse>;
                            clientStates(request?: _168.QueryClientStatesRequest): Promise<_168.QueryClientStatesResponse>;
                            consensusState(request: _168.QueryConsensusStateRequest): Promise<_168.QueryConsensusStateResponse>;
                            consensusStates(request: _168.QueryConsensusStatesRequest): Promise<_168.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _168.QueryConsensusStateHeightsRequest): Promise<_168.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _168.QueryClientStatusRequest): Promise<_168.QueryClientStatusResponse>;
                            clientParams(request?: _168.QueryClientParamsRequest): Promise<_168.QueryClientParamsResponse>;
                            upgradedClientState(request?: _168.QueryUpgradedClientStateRequest): Promise<_168.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _168.QueryUpgradedConsensusStateRequest): Promise<_168.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _173.QueryConnectionRequest): Promise<_173.QueryConnectionResponse>;
                            connections(request?: _173.QueryConnectionsRequest): Promise<_173.QueryConnectionsResponse>;
                            clientConnections(request: _173.QueryClientConnectionsRequest): Promise<_173.QueryClientConnectionsResponse>;
                            connectionClientState(request: _173.QueryConnectionClientStateRequest): Promise<_173.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _173.QueryConnectionConsensusStateRequest): Promise<_173.QueryConnectionConsensusStateResponse>;
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
                        v1: _270.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _271.LCDQueryClient;
                    };
                    client: {
                        v1: _272.LCDQueryClient;
                    };
                    connection: {
                        v1: _273.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
