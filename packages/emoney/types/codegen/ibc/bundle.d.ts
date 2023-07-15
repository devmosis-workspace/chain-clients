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
import * as _182 from "./applications/transfer/v1/query.rpc.Query";
import * as _183 from "./core/channel/v1/query.rpc.Query";
import * as _184 from "./core/client/v1/query.rpc.Query";
import * as _185 from "./core/connection/v1/query.rpc.Query";
import * as _186 from "./applications/transfer/v1/tx.rpc.msg";
import * as _187 from "./core/channel/v1/tx.rpc.msg";
import * as _188 from "./core/client/v1/tx.rpc.msg";
import * as _189 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _186.MsgClientImpl;
                QueryClientImpl: typeof _182.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _88.QueryDenomTraceRequest): Promise<_88.QueryDenomTraceResponse>;
                    denomTraces(request?: _88.QueryDenomTracesRequest): Promise<_88.QueryDenomTracesResponse>;
                    params(request?: _88.QueryParamsRequest): Promise<_88.QueryParamsResponse>;
                };
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
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _90.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _90.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _90.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgTransfer;
                    fromPartial(object: Partial<_90.MsgTransfer>): _90.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _90.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.MsgTransferResponse;
                    fromPartial(_: Partial<_90.MsgTransferResponse>): _90.MsgTransferResponse;
                };
                FungibleTokenPacketData: {
                    encode(message: _89.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.FungibleTokenPacketData;
                    fromPartial(object: Partial<_89.FungibleTokenPacketData>): _89.FungibleTokenPacketData;
                };
                DenomTrace: {
                    encode(message: _89.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.DenomTrace;
                    fromPartial(object: Partial<_89.DenomTrace>): _89.DenomTrace;
                };
                Params: {
                    encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.Params;
                    fromPartial(object: Partial<_89.Params>): _89.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _88.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_88.QueryDenomTraceRequest>): _88.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _88.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_88.QueryDenomTraceResponse>): _88.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _88.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_88.QueryDenomTracesRequest>): _88.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _88.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_88.QueryDenomTracesResponse>): _88.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _88.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _88.QueryParamsRequest;
                    fromPartial(_: Partial<_88.QueryParamsRequest>): _88.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _88.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.QueryParamsResponse;
                    fromPartial(object: Partial<_88.QueryParamsResponse>): _88.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.GenesisState;
                    fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _187.MsgClientImpl;
                QueryClientImpl: typeof _183.QueryClientImpl;
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
                        toAmino: ({ portId, channel, signer }: _94.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _94.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _94.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _94.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _94.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _94.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _94.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _94.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _94.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _94.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _94.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _94.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _94.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _94.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _94.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _94.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _94.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _94.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _94.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _94.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _94.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgChannelOpenInit;
                    fromPartial(object: Partial<_94.MsgChannelOpenInit>): _94.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _94.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenInitResponse>): _94.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _94.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgChannelOpenTry;
                    fromPartial(object: Partial<_94.MsgChannelOpenTry>): _94.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _94.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenTryResponse>): _94.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _94.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgChannelOpenAck;
                    fromPartial(object: Partial<_94.MsgChannelOpenAck>): _94.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _94.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenAckResponse>): _94.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _94.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_94.MsgChannelOpenConfirm>): _94.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _94.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_94.MsgChannelOpenConfirmResponse>): _94.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _94.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgChannelCloseInit;
                    fromPartial(object: Partial<_94.MsgChannelCloseInit>): _94.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _94.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_94.MsgChannelCloseInitResponse>): _94.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _94.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_94.MsgChannelCloseConfirm>): _94.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _94.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_94.MsgChannelCloseConfirmResponse>): _94.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _94.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgRecvPacket;
                    fromPartial(object: Partial<_94.MsgRecvPacket>): _94.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _94.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_94.MsgRecvPacketResponse>): _94.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _94.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgTimeout;
                    fromPartial(object: Partial<_94.MsgTimeout>): _94.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _94.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgTimeoutResponse;
                    fromPartial(_: Partial<_94.MsgTimeoutResponse>): _94.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _94.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_94.MsgTimeoutOnClose>): _94.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _94.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_94.MsgTimeoutOnCloseResponse>): _94.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _94.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.MsgAcknowledgement;
                    fromPartial(object: Partial<_94.MsgAcknowledgement>): _94.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _94.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _94.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_94.MsgAcknowledgementResponse>): _94.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _93.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelRequest;
                    fromPartial(object: Partial<_93.QueryChannelRequest>): _93.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _93.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelResponse;
                    fromPartial(object: Partial<_93.QueryChannelResponse>): _93.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _93.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelsRequest;
                    fromPartial(object: Partial<_93.QueryChannelsRequest>): _93.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _93.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelsResponse;
                    fromPartial(object: Partial<_93.QueryChannelsResponse>): _93.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _93.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_93.QueryConnectionChannelsRequest>): _93.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _93.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_93.QueryConnectionChannelsResponse>): _93.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _93.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_93.QueryChannelClientStateRequest>): _93.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _93.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_93.QueryChannelClientStateResponse>): _93.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _93.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_93.QueryChannelConsensusStateRequest>): _93.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _93.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_93.QueryChannelConsensusStateResponse>): _93.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _93.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentRequest>): _93.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _93.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentResponse>): _93.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _93.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentsRequest>): _93.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _93.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_93.QueryPacketCommitmentsResponse>): _93.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _93.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_93.QueryPacketReceiptRequest>): _93.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _93.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_93.QueryPacketReceiptResponse>): _93.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _93.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementRequest>): _93.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _93.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementResponse>): _93.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _93.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementsRequest>): _93.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _93.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_93.QueryPacketAcknowledgementsResponse>): _93.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _93.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_93.QueryUnreceivedPacketsRequest>): _93.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _93.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_93.QueryUnreceivedPacketsResponse>): _93.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _93.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_93.QueryUnreceivedAcksRequest>): _93.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _93.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_93.QueryUnreceivedAcksResponse>): _93.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _93.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_93.QueryNextSequenceReceiveRequest>): _93.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _93.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_93.QueryNextSequenceReceiveResponse>): _93.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _92.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.GenesisState;
                    fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                };
                PacketSequence: {
                    encode(message: _92.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.PacketSequence;
                    fromPartial(object: Partial<_92.PacketSequence>): _92.PacketSequence;
                };
                stateFromJSON(object: any): _91.State;
                stateToJSON(object: _91.State): string;
                orderFromJSON(object: any): _91.Order;
                orderToJSON(object: _91.Order): string;
                State: typeof _91.State;
                StateSDKType: typeof _91.State;
                Order: typeof _91.Order;
                OrderSDKType: typeof _91.Order;
                Channel: {
                    encode(message: _91.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Channel;
                    fromPartial(object: Partial<_91.Channel>): _91.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _91.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.IdentifiedChannel;
                    fromPartial(object: Partial<_91.IdentifiedChannel>): _91.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _91.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Counterparty;
                    fromPartial(object: Partial<_91.Counterparty>): _91.Counterparty;
                };
                Packet: {
                    encode(message: _91.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Packet;
                    fromPartial(object: Partial<_91.Packet>): _91.Packet;
                };
                PacketState: {
                    encode(message: _91.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.PacketState;
                    fromPartial(object: Partial<_91.PacketState>): _91.PacketState;
                };
                Acknowledgement: {
                    encode(message: _91.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Acknowledgement;
                    fromPartial(object: Partial<_91.Acknowledgement>): _91.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _188.MsgClientImpl;
                QueryClientImpl: typeof _184.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _97.QueryClientStateRequest): Promise<_97.QueryClientStateResponse>;
                    clientStates(request?: _97.QueryClientStatesRequest): Promise<_97.QueryClientStatesResponse>;
                    consensusState(request: _97.QueryConsensusStateRequest): Promise<_97.QueryConsensusStateResponse>;
                    consensusStates(request: _97.QueryConsensusStatesRequest): Promise<_97.QueryConsensusStatesResponse>;
                    clientParams(request?: _97.QueryClientParamsRequest): Promise<_97.QueryClientParamsResponse>;
                };
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
                        toAmino: ({ clientState, consensusState, signer }: _98.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _98.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _98.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _98.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _98.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _98.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _98.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _98.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _98.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.MsgCreateClient;
                    fromPartial(object: Partial<_98.MsgCreateClient>): _98.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _98.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _98.MsgCreateClientResponse;
                    fromPartial(_: Partial<_98.MsgCreateClientResponse>): _98.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _98.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.MsgUpdateClient;
                    fromPartial(object: Partial<_98.MsgUpdateClient>): _98.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _98.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _98.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_98.MsgUpdateClientResponse>): _98.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _98.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.MsgUpgradeClient;
                    fromPartial(object: Partial<_98.MsgUpgradeClient>): _98.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _98.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _98.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_98.MsgUpgradeClientResponse>): _98.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _98.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _98.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_98.MsgSubmitMisbehaviour>): _98.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _98.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _98.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_98.MsgSubmitMisbehaviourResponse>): _98.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _97.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryClientStateRequest;
                    fromPartial(object: Partial<_97.QueryClientStateRequest>): _97.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _97.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryClientStateResponse;
                    fromPartial(object: Partial<_97.QueryClientStateResponse>): _97.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _97.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryClientStatesRequest;
                    fromPartial(object: Partial<_97.QueryClientStatesRequest>): _97.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _97.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryClientStatesResponse;
                    fromPartial(object: Partial<_97.QueryClientStatesResponse>): _97.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _97.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_97.QueryConsensusStateRequest>): _97.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _97.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_97.QueryConsensusStateResponse>): _97.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _97.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_97.QueryConsensusStatesRequest>): _97.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _97.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_97.QueryConsensusStatesResponse>): _97.QueryConsensusStatesResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _97.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _97.QueryClientParamsRequest;
                    fromPartial(_: Partial<_97.QueryClientParamsRequest>): _97.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _97.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _97.QueryClientParamsResponse;
                    fromPartial(object: Partial<_97.QueryClientParamsResponse>): _97.QueryClientParamsResponse;
                };
                GenesisState: {
                    encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.GenesisState;
                    fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _96.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.GenesisMetadata;
                    fromPartial(object: Partial<_96.GenesisMetadata>): _96.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _96.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _96.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_96.IdentifiedGenesisMetadata>): _96.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _95.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.IdentifiedClientState;
                    fromPartial(object: Partial<_95.IdentifiedClientState>): _95.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _95.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_95.ConsensusStateWithHeight>): _95.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _95.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.ClientConsensusStates;
                    fromPartial(object: Partial<_95.ClientConsensusStates>): _95.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _95.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.ClientUpdateProposal;
                    fromPartial(object: Partial<_95.ClientUpdateProposal>): _95.ClientUpdateProposal;
                };
                Height: {
                    encode(message: _95.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.Height;
                    fromPartial(object: Partial<_95.Height>): _95.Height;
                };
                Params: {
                    encode(message: _95.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _95.Params;
                    fromPartial(object: Partial<_95.Params>): _95.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _99.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.MerkleRoot;
                    fromPartial(object: Partial<_99.MerkleRoot>): _99.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _99.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.MerklePrefix;
                    fromPartial(object: Partial<_99.MerklePrefix>): _99.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _99.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.MerklePath;
                    fromPartial(object: Partial<_99.MerklePath>): _99.MerklePath;
                };
                MerkleProof: {
                    encode(message: _99.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _99.MerkleProof;
                    fromPartial(object: Partial<_99.MerkleProof>): _99.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _189.MsgClientImpl;
                QueryClientImpl: typeof _185.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _102.QueryConnectionRequest): Promise<_102.QueryConnectionResponse>;
                    connections(request?: _102.QueryConnectionsRequest): Promise<_102.QueryConnectionsResponse>;
                    clientConnections(request: _102.QueryClientConnectionsRequest): Promise<_102.QueryClientConnectionsResponse>;
                    connectionClientState(request: _102.QueryConnectionClientStateRequest): Promise<_102.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _102.QueryConnectionConsensusStateRequest): Promise<_102.QueryConnectionConsensusStateResponse>;
                };
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
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _103.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _103.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _103.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _103.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _103.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _103.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _103.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _103.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _103.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_103.MsgConnectionOpenInit>): _103.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _103.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _103.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenInitResponse>): _103.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _103.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_103.MsgConnectionOpenTry>): _103.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _103.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _103.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenTryResponse>): _103.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _103.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_103.MsgConnectionOpenAck>): _103.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _103.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _103.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenAckResponse>): _103.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _103.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_103.MsgConnectionOpenConfirm>): _103.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _103.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _103.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_103.MsgConnectionOpenConfirmResponse>): _103.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _102.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionRequest;
                    fromPartial(object: Partial<_102.QueryConnectionRequest>): _102.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _102.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionResponse;
                    fromPartial(object: Partial<_102.QueryConnectionResponse>): _102.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _102.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionsRequest;
                    fromPartial(object: Partial<_102.QueryConnectionsRequest>): _102.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _102.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionsResponse;
                    fromPartial(object: Partial<_102.QueryConnectionsResponse>): _102.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _102.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_102.QueryClientConnectionsRequest>): _102.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _102.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_102.QueryClientConnectionsResponse>): _102.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _102.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_102.QueryConnectionClientStateRequest>): _102.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _102.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_102.QueryConnectionClientStateResponse>): _102.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _102.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_102.QueryConnectionConsensusStateRequest>): _102.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _102.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_102.QueryConnectionConsensusStateResponse>): _102.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _101.GenesisState;
                    fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                };
                stateFromJSON(object: any): _100.State;
                stateToJSON(object: _100.State): string;
                State: typeof _100.State;
                StateSDKType: typeof _100.State;
                ConnectionEnd: {
                    encode(message: _100.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.ConnectionEnd;
                    fromPartial(object: Partial<_100.ConnectionEnd>): _100.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _100.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.IdentifiedConnection;
                    fromPartial(object: Partial<_100.IdentifiedConnection>): _100.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _100.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.Counterparty;
                    fromPartial(object: Partial<_100.Counterparty>): _100.Counterparty;
                };
                ClientPaths: {
                    encode(message: _100.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.ClientPaths;
                    fromPartial(object: Partial<_100.ClientPaths>): _100.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _100.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.ConnectionPaths;
                    fromPartial(object: Partial<_100.ConnectionPaths>): _100.ConnectionPaths;
                };
                Version: {
                    encode(message: _100.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _100.Version;
                    fromPartial(object: Partial<_100.Version>): _100.Version;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.GenesisState;
                    fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _105.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.ClientState;
                    fromPartial(object: Partial<_105.ClientState>): _105.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _106.DataType;
                dataTypeToJSON(object: _106.DataType): string;
                DataType: typeof _106.DataType;
                DataTypeSDKType: typeof _106.DataType;
                ClientState: {
                    encode(message: _106.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ClientState;
                    fromPartial(object: Partial<_106.ClientState>): _106.ClientState;
                };
                ConsensusState: {
                    encode(message: _106.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ConsensusState;
                    fromPartial(object: Partial<_106.ConsensusState>): _106.ConsensusState;
                };
                Header: {
                    encode(message: _106.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Header;
                    fromPartial(object: Partial<_106.Header>): _106.Header;
                };
                Misbehaviour: {
                    encode(message: _106.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Misbehaviour;
                    fromPartial(object: Partial<_106.Misbehaviour>): _106.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _106.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.SignatureAndData;
                    fromPartial(object: Partial<_106.SignatureAndData>): _106.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _106.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.TimestampedSignatureData;
                    fromPartial(object: Partial<_106.TimestampedSignatureData>): _106.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _106.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.SignBytes;
                    fromPartial(object: Partial<_106.SignBytes>): _106.SignBytes;
                };
                HeaderData: {
                    encode(message: _106.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.HeaderData;
                    fromPartial(object: Partial<_106.HeaderData>): _106.HeaderData;
                };
                ClientStateData: {
                    encode(message: _106.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ClientStateData;
                    fromPartial(object: Partial<_106.ClientStateData>): _106.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _106.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ConsensusStateData;
                    fromPartial(object: Partial<_106.ConsensusStateData>): _106.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _106.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ConnectionStateData;
                    fromPartial(object: Partial<_106.ConnectionStateData>): _106.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _106.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.ChannelStateData;
                    fromPartial(object: Partial<_106.ChannelStateData>): _106.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _106.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.PacketCommitmentData;
                    fromPartial(object: Partial<_106.PacketCommitmentData>): _106.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _106.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.PacketAcknowledgementData;
                    fromPartial(object: Partial<_106.PacketAcknowledgementData>): _106.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _106.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_106.PacketReceiptAbsenceData>): _106.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _106.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.NextSequenceRecvData;
                    fromPartial(object: Partial<_106.NextSequenceRecvData>): _106.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _107.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.ClientState;
                    fromPartial(object: Partial<_107.ClientState>): _107.ClientState;
                };
                ConsensusState: {
                    encode(message: _107.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.ConsensusState;
                    fromPartial(object: Partial<_107.ConsensusState>): _107.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _107.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.Misbehaviour;
                    fromPartial(object: Partial<_107.Misbehaviour>): _107.Misbehaviour;
                };
                Header: {
                    encode(message: _107.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.Header;
                    fromPartial(object: Partial<_107.Header>): _107.Header;
                };
                Fraction: {
                    encode(message: _107.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.Fraction;
                    fromPartial(object: Partial<_107.Fraction>): _107.Fraction;
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
                        v1: _186.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _187.MsgClientImpl;
                    };
                    client: {
                        v1: _188.MsgClientImpl;
                    };
                    connection: {
                        v1: _189.MsgClientImpl;
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
    };
}
