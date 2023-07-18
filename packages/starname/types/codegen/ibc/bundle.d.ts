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
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _105.MsgTransfer) => {
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
                        }) => _105.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _105.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _105.MsgTransfer;
                    fromPartial(object: Partial<_105.MsgTransfer>): _105.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _105.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _105.MsgTransferResponse;
                    fromPartial(_: Partial<_105.MsgTransferResponse>): _105.MsgTransferResponse;
                };
                FungibleTokenPacketData: {
                    encode(message: _104.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.FungibleTokenPacketData;
                    fromPartial(object: Partial<_104.FungibleTokenPacketData>): _104.FungibleTokenPacketData;
                };
                DenomTrace: {
                    encode(message: _104.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.DenomTrace;
                    fromPartial(object: Partial<_104.DenomTrace>): _104.DenomTrace;
                };
                Params: {
                    encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _104.Params;
                    fromPartial(object: Partial<_104.Params>): _104.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _103.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_103.QueryDenomTraceRequest>): _103.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _103.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_103.QueryDenomTraceResponse>): _103.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _103.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_103.QueryDenomTracesRequest>): _103.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _103.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_103.QueryDenomTracesResponse>): _103.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _103.QueryParamsRequest;
                    fromPartial(_: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _103.QueryParamsResponse;
                    fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _102.GenesisState;
                    fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
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
                        toAmino: ({ portId, channel, signer }: _109.MsgChannelOpenInit) => {
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
                        }) => _109.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _109.MsgChannelOpenTry) => {
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
                        }) => _109.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _109.MsgChannelOpenAck) => {
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
                        }) => _109.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _109.MsgChannelOpenConfirm) => {
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
                        }) => _109.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _109.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _109.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _109.MsgChannelCloseConfirm) => {
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
                        }) => _109.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _109.MsgRecvPacket) => {
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
                        }) => _109.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _109.MsgTimeout) => {
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
                        }) => _109.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _109.MsgTimeoutOnClose) => {
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
                        }) => _109.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _109.MsgAcknowledgement) => {
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
                        }) => _109.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _109.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgChannelOpenInit;
                    fromPartial(object: Partial<_109.MsgChannelOpenInit>): _109.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _109.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenInitResponse>): _109.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _109.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgChannelOpenTry;
                    fromPartial(object: Partial<_109.MsgChannelOpenTry>): _109.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _109.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenTryResponse>): _109.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _109.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgChannelOpenAck;
                    fromPartial(object: Partial<_109.MsgChannelOpenAck>): _109.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _109.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenAckResponse>): _109.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _109.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_109.MsgChannelOpenConfirm>): _109.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _109.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_109.MsgChannelOpenConfirmResponse>): _109.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _109.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgChannelCloseInit;
                    fromPartial(object: Partial<_109.MsgChannelCloseInit>): _109.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _109.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_109.MsgChannelCloseInitResponse>): _109.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _109.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_109.MsgChannelCloseConfirm>): _109.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _109.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_109.MsgChannelCloseConfirmResponse>): _109.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _109.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgRecvPacket;
                    fromPartial(object: Partial<_109.MsgRecvPacket>): _109.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _109.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_109.MsgRecvPacketResponse>): _109.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _109.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgTimeout;
                    fromPartial(object: Partial<_109.MsgTimeout>): _109.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _109.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgTimeoutResponse;
                    fromPartial(_: Partial<_109.MsgTimeoutResponse>): _109.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _109.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_109.MsgTimeoutOnClose>): _109.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _109.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_109.MsgTimeoutOnCloseResponse>): _109.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _109.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _109.MsgAcknowledgement;
                    fromPartial(object: Partial<_109.MsgAcknowledgement>): _109.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _109.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _109.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_109.MsgAcknowledgementResponse>): _109.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _108.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelRequest;
                    fromPartial(object: Partial<_108.QueryChannelRequest>): _108.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _108.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelResponse;
                    fromPartial(object: Partial<_108.QueryChannelResponse>): _108.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _108.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelsRequest;
                    fromPartial(object: Partial<_108.QueryChannelsRequest>): _108.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _108.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelsResponse;
                    fromPartial(object: Partial<_108.QueryChannelsResponse>): _108.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _108.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_108.QueryConnectionChannelsRequest>): _108.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _108.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_108.QueryConnectionChannelsResponse>): _108.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _108.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_108.QueryChannelClientStateRequest>): _108.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _108.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_108.QueryChannelClientStateResponse>): _108.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _108.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_108.QueryChannelConsensusStateRequest>): _108.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _108.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_108.QueryChannelConsensusStateResponse>): _108.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _108.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentRequest>): _108.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _108.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentResponse>): _108.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _108.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentsRequest>): _108.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _108.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_108.QueryPacketCommitmentsResponse>): _108.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _108.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_108.QueryPacketReceiptRequest>): _108.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _108.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_108.QueryPacketReceiptResponse>): _108.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _108.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementRequest>): _108.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _108.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementResponse>): _108.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _108.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementsRequest>): _108.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _108.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_108.QueryPacketAcknowledgementsResponse>): _108.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _108.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_108.QueryUnreceivedPacketsRequest>): _108.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _108.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_108.QueryUnreceivedPacketsResponse>): _108.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _108.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_108.QueryUnreceivedAcksRequest>): _108.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _108.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_108.QueryUnreceivedAcksResponse>): _108.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _108.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_108.QueryNextSequenceReceiveRequest>): _108.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _108.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _108.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_108.QueryNextSequenceReceiveResponse>): _108.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.GenesisState;
                    fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
                };
                PacketSequence: {
                    encode(message: _107.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _107.PacketSequence;
                    fromPartial(object: Partial<_107.PacketSequence>): _107.PacketSequence;
                };
                stateFromJSON(object: any): _106.State;
                stateToJSON(object: _106.State): string;
                orderFromJSON(object: any): _106.Order;
                orderToJSON(object: _106.Order): string;
                State: typeof _106.State;
                StateSDKType: typeof _106.State;
                Order: typeof _106.Order;
                OrderSDKType: typeof _106.Order;
                Channel: {
                    encode(message: _106.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Channel;
                    fromPartial(object: Partial<_106.Channel>): _106.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _106.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.IdentifiedChannel;
                    fromPartial(object: Partial<_106.IdentifiedChannel>): _106.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _106.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Counterparty;
                    fromPartial(object: Partial<_106.Counterparty>): _106.Counterparty;
                };
                Packet: {
                    encode(message: _106.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Packet;
                    fromPartial(object: Partial<_106.Packet>): _106.Packet;
                };
                PacketState: {
                    encode(message: _106.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.PacketState;
                    fromPartial(object: Partial<_106.PacketState>): _106.PacketState;
                };
                Acknowledgement: {
                    encode(message: _106.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _106.Acknowledgement;
                    fromPartial(object: Partial<_106.Acknowledgement>): _106.Acknowledgement;
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
                        toAmino: ({ clientState, consensusState, signer }: _113.MsgCreateClient) => {
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
                        }) => _113.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _113.MsgUpdateClient) => {
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
                        }) => _113.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _113.MsgUpgradeClient) => {
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
                        }) => _113.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _113.MsgSubmitMisbehaviour) => {
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
                        }) => _113.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _113.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.MsgCreateClient;
                    fromPartial(object: Partial<_113.MsgCreateClient>): _113.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _113.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _113.MsgCreateClientResponse;
                    fromPartial(_: Partial<_113.MsgCreateClientResponse>): _113.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _113.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.MsgUpdateClient;
                    fromPartial(object: Partial<_113.MsgUpdateClient>): _113.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _113.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _113.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_113.MsgUpdateClientResponse>): _113.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _113.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.MsgUpgradeClient;
                    fromPartial(object: Partial<_113.MsgUpgradeClient>): _113.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _113.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _113.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_113.MsgUpgradeClientResponse>): _113.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _113.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _113.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_113.MsgSubmitMisbehaviour>): _113.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _113.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _113.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_113.MsgSubmitMisbehaviourResponse>): _113.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _112.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryClientStateRequest;
                    fromPartial(object: Partial<_112.QueryClientStateRequest>): _112.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _112.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryClientStateResponse;
                    fromPartial(object: Partial<_112.QueryClientStateResponse>): _112.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _112.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryClientStatesRequest;
                    fromPartial(object: Partial<_112.QueryClientStatesRequest>): _112.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _112.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryClientStatesResponse;
                    fromPartial(object: Partial<_112.QueryClientStatesResponse>): _112.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _112.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_112.QueryConsensusStateRequest>): _112.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _112.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_112.QueryConsensusStateResponse>): _112.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _112.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_112.QueryConsensusStatesRequest>): _112.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _112.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_112.QueryConsensusStatesResponse>): _112.QueryConsensusStatesResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _112.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _112.QueryClientParamsRequest;
                    fromPartial(_: Partial<_112.QueryClientParamsRequest>): _112.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _112.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _112.QueryClientParamsResponse;
                    fromPartial(object: Partial<_112.QueryClientParamsResponse>): _112.QueryClientParamsResponse;
                };
                GenesisState: {
                    encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GenesisState;
                    fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _111.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.GenesisMetadata;
                    fromPartial(object: Partial<_111.GenesisMetadata>): _111.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _111.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _111.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_111.IdentifiedGenesisMetadata>): _111.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _110.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.IdentifiedClientState;
                    fromPartial(object: Partial<_110.IdentifiedClientState>): _110.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _110.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_110.ConsensusStateWithHeight>): _110.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _110.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.ClientConsensusStates;
                    fromPartial(object: Partial<_110.ClientConsensusStates>): _110.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _110.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.ClientUpdateProposal;
                    fromPartial(object: Partial<_110.ClientUpdateProposal>): _110.ClientUpdateProposal;
                };
                Height: {
                    encode(message: _110.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.Height;
                    fromPartial(object: Partial<_110.Height>): _110.Height;
                };
                Params: {
                    encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _110.Params;
                    fromPartial(object: Partial<_110.Params>): _110.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _114.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MerkleRoot;
                    fromPartial(object: Partial<_114.MerkleRoot>): _114.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _114.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MerklePrefix;
                    fromPartial(object: Partial<_114.MerklePrefix>): _114.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _114.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MerklePath;
                    fromPartial(object: Partial<_114.MerklePath>): _114.MerklePath;
                };
                MerkleProof: {
                    encode(message: _114.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _114.MerkleProof;
                    fromPartial(object: Partial<_114.MerkleProof>): _114.MerkleProof;
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
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _118.MsgConnectionOpenInit) => {
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
                        }) => _118.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _118.MsgConnectionOpenTry) => {
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
                        }) => _118.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _118.MsgConnectionOpenAck) => {
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
                        }) => _118.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _118.MsgConnectionOpenConfirm) => {
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
                        }) => _118.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _118.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_118.MsgConnectionOpenInit>): _118.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _118.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenInitResponse>): _118.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _118.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_118.MsgConnectionOpenTry>): _118.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _118.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenTryResponse>): _118.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _118.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_118.MsgConnectionOpenAck>): _118.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _118.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenAckResponse>): _118.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _118.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _118.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_118.MsgConnectionOpenConfirm>): _118.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _118.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _118.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_118.MsgConnectionOpenConfirmResponse>): _118.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _117.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionRequest;
                    fromPartial(object: Partial<_117.QueryConnectionRequest>): _117.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _117.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionResponse;
                    fromPartial(object: Partial<_117.QueryConnectionResponse>): _117.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _117.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionsRequest;
                    fromPartial(object: Partial<_117.QueryConnectionsRequest>): _117.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _117.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionsResponse;
                    fromPartial(object: Partial<_117.QueryConnectionsResponse>): _117.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _117.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_117.QueryClientConnectionsRequest>): _117.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _117.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_117.QueryClientConnectionsResponse>): _117.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _117.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_117.QueryConnectionClientStateRequest>): _117.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _117.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_117.QueryConnectionClientStateResponse>): _117.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _117.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_117.QueryConnectionConsensusStateRequest>): _117.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _117.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _117.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_117.QueryConnectionConsensusStateResponse>): _117.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _116.GenesisState;
                    fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                };
                stateFromJSON(object: any): _115.State;
                stateToJSON(object: _115.State): string;
                State: typeof _115.State;
                StateSDKType: typeof _115.State;
                ConnectionEnd: {
                    encode(message: _115.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.ConnectionEnd;
                    fromPartial(object: Partial<_115.ConnectionEnd>): _115.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _115.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.IdentifiedConnection;
                    fromPartial(object: Partial<_115.IdentifiedConnection>): _115.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _115.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Counterparty;
                    fromPartial(object: Partial<_115.Counterparty>): _115.Counterparty;
                };
                ClientPaths: {
                    encode(message: _115.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.ClientPaths;
                    fromPartial(object: Partial<_115.ClientPaths>): _115.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _115.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.ConnectionPaths;
                    fromPartial(object: Partial<_115.ConnectionPaths>): _115.ConnectionPaths;
                };
                Version: {
                    encode(message: _115.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _115.Version;
                    fromPartial(object: Partial<_115.Version>): _115.Version;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _119.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _119.GenesisState;
                    fromPartial(object: Partial<_119.GenesisState>): _119.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _120.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _120.ClientState;
                    fromPartial(object: Partial<_120.ClientState>): _120.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _121.DataType;
                dataTypeToJSON(object: _121.DataType): string;
                DataType: typeof _121.DataType;
                DataTypeSDKType: typeof _121.DataType;
                ClientState: {
                    encode(message: _121.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.ClientState;
                    fromPartial(object: Partial<_121.ClientState>): _121.ClientState;
                };
                ConsensusState: {
                    encode(message: _121.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.ConsensusState;
                    fromPartial(object: Partial<_121.ConsensusState>): _121.ConsensusState;
                };
                Header: {
                    encode(message: _121.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.Header;
                    fromPartial(object: Partial<_121.Header>): _121.Header;
                };
                Misbehaviour: {
                    encode(message: _121.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.Misbehaviour;
                    fromPartial(object: Partial<_121.Misbehaviour>): _121.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _121.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.SignatureAndData;
                    fromPartial(object: Partial<_121.SignatureAndData>): _121.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _121.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.TimestampedSignatureData;
                    fromPartial(object: Partial<_121.TimestampedSignatureData>): _121.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _121.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.SignBytes;
                    fromPartial(object: Partial<_121.SignBytes>): _121.SignBytes;
                };
                HeaderData: {
                    encode(message: _121.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.HeaderData;
                    fromPartial(object: Partial<_121.HeaderData>): _121.HeaderData;
                };
                ClientStateData: {
                    encode(message: _121.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.ClientStateData;
                    fromPartial(object: Partial<_121.ClientStateData>): _121.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _121.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.ConsensusStateData;
                    fromPartial(object: Partial<_121.ConsensusStateData>): _121.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _121.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.ConnectionStateData;
                    fromPartial(object: Partial<_121.ConnectionStateData>): _121.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _121.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.ChannelStateData;
                    fromPartial(object: Partial<_121.ChannelStateData>): _121.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _121.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.PacketCommitmentData;
                    fromPartial(object: Partial<_121.PacketCommitmentData>): _121.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _121.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.PacketAcknowledgementData;
                    fromPartial(object: Partial<_121.PacketAcknowledgementData>): _121.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _121.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_121.PacketReceiptAbsenceData>): _121.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _121.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _121.NextSequenceRecvData;
                    fromPartial(object: Partial<_121.NextSequenceRecvData>): _121.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.ClientState;
                    fromPartial(object: Partial<_122.ClientState>): _122.ClientState;
                };
                ConsensusState: {
                    encode(message: _122.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.ConsensusState;
                    fromPartial(object: Partial<_122.ConsensusState>): _122.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _122.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.Misbehaviour;
                    fromPartial(object: Partial<_122.Misbehaviour>): _122.Misbehaviour;
                };
                Header: {
                    encode(message: _122.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.Header;
                    fromPartial(object: Partial<_122.Header>): _122.Header;
                };
                Fraction: {
                    encode(message: _122.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _122.Fraction;
                    fromPartial(object: Partial<_122.Fraction>): _122.Fraction;
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
