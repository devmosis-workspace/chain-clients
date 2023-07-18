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
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo }: _150.MsgTransfer) => {
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
                            memo: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo }: {
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
                            memo: string;
                        }) => _150.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _150.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.MsgTransfer;
                    fromPartial(object: Partial<_150.MsgTransfer>): _150.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _150.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _150.MsgTransferResponse;
                    fromPartial(object: Partial<_150.MsgTransferResponse>): _150.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _149.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _149.DenomTrace;
                    fromPartial(object: Partial<_149.DenomTrace>): _149.DenomTrace;
                };
                Params: {
                    encode(message: _149.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _149.Params;
                    fromPartial(object: Partial<_149.Params>): _149.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _148.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_148.QueryDenomTraceRequest>): _148.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _148.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_148.QueryDenomTraceResponse>): _148.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _148.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_148.QueryDenomTracesRequest>): _148.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _148.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_148.QueryDenomTracesResponse>): _148.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _148.QueryParamsRequest;
                    fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryParamsResponse;
                    fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _148.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryDenomHashRequest;
                    fromPartial(object: Partial<_148.QueryDenomHashRequest>): _148.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _148.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryDenomHashResponse;
                    fromPartial(object: Partial<_148.QueryDenomHashResponse>): _148.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _148.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_148.QueryEscrowAddressRequest>): _148.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _148.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _148.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_148.QueryEscrowAddressResponse>): _148.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _147.GenesisState;
                    fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _151.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _151.FungibleTokenPacketData;
                    fromPartial(object: Partial<_151.FungibleTokenPacketData>): _151.FungibleTokenPacketData;
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
                        toAmino: ({ portId, channel, signer }: _155.MsgChannelOpenInit) => {
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
                        }) => _155.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _155.MsgChannelOpenTry) => {
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
                        }) => _155.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _155.MsgChannelOpenAck) => {
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
                        }) => _155.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _155.MsgChannelOpenConfirm) => {
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
                        }) => _155.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _155.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _155.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _155.MsgChannelCloseConfirm) => {
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
                        }) => _155.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _155.MsgRecvPacket) => {
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
                        }) => _155.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _155.MsgTimeout) => {
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
                        }) => _155.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _155.MsgTimeoutOnClose) => {
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
                        }) => _155.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _155.MsgAcknowledgement) => {
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
                        }) => _155.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _155.ResponseResultType;
                responseResultTypeToJSON(object: _155.ResponseResultType): string;
                ResponseResultType: typeof _155.ResponseResultType;
                ResponseResultTypeSDKType: typeof _155.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _155.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelOpenInit;
                    fromPartial(object: Partial<_155.MsgChannelOpenInit>): _155.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _155.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_155.MsgChannelOpenInitResponse>): _155.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _155.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelOpenTry;
                    fromPartial(object: Partial<_155.MsgChannelOpenTry>): _155.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _155.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_155.MsgChannelOpenTryResponse>): _155.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _155.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelOpenAck;
                    fromPartial(object: Partial<_155.MsgChannelOpenAck>): _155.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _155.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _155.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_155.MsgChannelOpenAckResponse>): _155.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _155.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_155.MsgChannelOpenConfirm>): _155.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _155.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _155.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_155.MsgChannelOpenConfirmResponse>): _155.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _155.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelCloseInit;
                    fromPartial(object: Partial<_155.MsgChannelCloseInit>): _155.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _155.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _155.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_155.MsgChannelCloseInitResponse>): _155.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _155.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_155.MsgChannelCloseConfirm>): _155.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _155.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _155.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_155.MsgChannelCloseConfirmResponse>): _155.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _155.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgRecvPacket;
                    fromPartial(object: Partial<_155.MsgRecvPacket>): _155.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _155.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_155.MsgRecvPacketResponse>): _155.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _155.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgTimeout;
                    fromPartial(object: Partial<_155.MsgTimeout>): _155.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _155.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgTimeoutResponse;
                    fromPartial(object: Partial<_155.MsgTimeoutResponse>): _155.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _155.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_155.MsgTimeoutOnClose>): _155.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _155.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_155.MsgTimeoutOnCloseResponse>): _155.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _155.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgAcknowledgement;
                    fromPartial(object: Partial<_155.MsgAcknowledgement>): _155.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _155.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _155.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_155.MsgAcknowledgementResponse>): _155.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _154.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelRequest;
                    fromPartial(object: Partial<_154.QueryChannelRequest>): _154.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _154.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelResponse;
                    fromPartial(object: Partial<_154.QueryChannelResponse>): _154.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _154.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelsRequest;
                    fromPartial(object: Partial<_154.QueryChannelsRequest>): _154.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _154.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelsResponse;
                    fromPartial(object: Partial<_154.QueryChannelsResponse>): _154.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _154.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_154.QueryConnectionChannelsRequest>): _154.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _154.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_154.QueryConnectionChannelsResponse>): _154.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _154.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_154.QueryChannelClientStateRequest>): _154.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _154.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_154.QueryChannelClientStateResponse>): _154.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _154.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_154.QueryChannelConsensusStateRequest>): _154.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _154.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_154.QueryChannelConsensusStateResponse>): _154.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _154.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentRequest>): _154.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _154.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentResponse>): _154.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _154.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentsRequest>): _154.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _154.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_154.QueryPacketCommitmentsResponse>): _154.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _154.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_154.QueryPacketReceiptRequest>): _154.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _154.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_154.QueryPacketReceiptResponse>): _154.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _154.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementRequest>): _154.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _154.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementResponse>): _154.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _154.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementsRequest>): _154.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _154.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_154.QueryPacketAcknowledgementsResponse>): _154.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _154.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_154.QueryUnreceivedPacketsRequest>): _154.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _154.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_154.QueryUnreceivedPacketsResponse>): _154.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _154.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_154.QueryUnreceivedAcksRequest>): _154.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _154.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_154.QueryUnreceivedAcksResponse>): _154.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _154.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_154.QueryNextSequenceReceiveRequest>): _154.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _154.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _154.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_154.QueryNextSequenceReceiveResponse>): _154.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _153.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.GenesisState;
                    fromPartial(object: Partial<_153.GenesisState>): _153.GenesisState;
                };
                PacketSequence: {
                    encode(message: _153.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _153.PacketSequence;
                    fromPartial(object: Partial<_153.PacketSequence>): _153.PacketSequence;
                };
                stateFromJSON(object: any): _152.State;
                stateToJSON(object: _152.State): string;
                orderFromJSON(object: any): _152.Order;
                orderToJSON(object: _152.Order): string;
                State: typeof _152.State;
                StateSDKType: typeof _152.State;
                Order: typeof _152.Order;
                OrderSDKType: typeof _152.Order;
                Channel: {
                    encode(message: _152.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.Channel;
                    fromPartial(object: Partial<_152.Channel>): _152.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _152.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.IdentifiedChannel;
                    fromPartial(object: Partial<_152.IdentifiedChannel>): _152.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _152.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.Counterparty;
                    fromPartial(object: Partial<_152.Counterparty>): _152.Counterparty;
                };
                Packet: {
                    encode(message: _152.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.Packet;
                    fromPartial(object: Partial<_152.Packet>): _152.Packet;
                };
                PacketState: {
                    encode(message: _152.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.PacketState;
                    fromPartial(object: Partial<_152.PacketState>): _152.PacketState;
                };
                PacketId: {
                    encode(message: _152.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.PacketId;
                    fromPartial(object: Partial<_152.PacketId>): _152.PacketId;
                };
                Acknowledgement: {
                    encode(message: _152.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _152.Acknowledgement;
                    fromPartial(object: Partial<_152.Acknowledgement>): _152.Acknowledgement;
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
                        toAmino: ({ clientState, consensusState, signer }: _159.MsgCreateClient) => {
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
                        }) => _159.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _159.MsgUpdateClient) => {
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
                        }) => _159.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _159.MsgUpgradeClient) => {
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
                        }) => _159.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _159.MsgSubmitMisbehaviour) => {
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
                        }) => _159.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _159.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.MsgCreateClient;
                    fromPartial(object: Partial<_159.MsgCreateClient>): _159.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _159.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _159.MsgCreateClientResponse;
                    fromPartial(_: Partial<_159.MsgCreateClientResponse>): _159.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _159.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.MsgUpdateClient;
                    fromPartial(object: Partial<_159.MsgUpdateClient>): _159.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _159.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _159.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_159.MsgUpdateClientResponse>): _159.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _159.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.MsgUpgradeClient;
                    fromPartial(object: Partial<_159.MsgUpgradeClient>): _159.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _159.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _159.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_159.MsgUpgradeClientResponse>): _159.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _159.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _159.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_159.MsgSubmitMisbehaviour>): _159.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _159.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _159.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_159.MsgSubmitMisbehaviourResponse>): _159.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _158.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryClientStateRequest;
                    fromPartial(object: Partial<_158.QueryClientStateRequest>): _158.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _158.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryClientStateResponse;
                    fromPartial(object: Partial<_158.QueryClientStateResponse>): _158.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _158.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryClientStatesRequest;
                    fromPartial(object: Partial<_158.QueryClientStatesRequest>): _158.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _158.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryClientStatesResponse;
                    fromPartial(object: Partial<_158.QueryClientStatesResponse>): _158.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _158.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_158.QueryConsensusStateRequest>): _158.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _158.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_158.QueryConsensusStateResponse>): _158.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _158.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_158.QueryConsensusStatesRequest>): _158.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _158.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_158.QueryConsensusStatesResponse>): _158.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _158.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_158.QueryConsensusStateHeightsRequest>): _158.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _158.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_158.QueryConsensusStateHeightsResponse>): _158.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _158.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryClientStatusRequest;
                    fromPartial(object: Partial<_158.QueryClientStatusRequest>): _158.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _158.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryClientStatusResponse;
                    fromPartial(object: Partial<_158.QueryClientStatusResponse>): _158.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _158.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _158.QueryClientParamsRequest;
                    fromPartial(_: Partial<_158.QueryClientParamsRequest>): _158.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _158.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryClientParamsResponse;
                    fromPartial(object: Partial<_158.QueryClientParamsResponse>): _158.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _158.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _158.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_158.QueryUpgradedClientStateRequest>): _158.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _158.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_158.QueryUpgradedClientStateResponse>): _158.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _158.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _158.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_158.QueryUpgradedConsensusStateRequest>): _158.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _158.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _158.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_158.QueryUpgradedConsensusStateResponse>): _158.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _157.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _157.GenesisState;
                    fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _157.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _157.GenesisMetadata;
                    fromPartial(object: Partial<_157.GenesisMetadata>): _157.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _157.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _157.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_157.IdentifiedGenesisMetadata>): _157.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _156.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.IdentifiedClientState;
                    fromPartial(object: Partial<_156.IdentifiedClientState>): _156.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _156.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_156.ConsensusStateWithHeight>): _156.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _156.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.ClientConsensusStates;
                    fromPartial(object: Partial<_156.ClientConsensusStates>): _156.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _156.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.ClientUpdateProposal;
                    fromPartial(object: Partial<_156.ClientUpdateProposal>): _156.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _156.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.UpgradeProposal;
                    fromPartial(object: Partial<_156.UpgradeProposal>): _156.UpgradeProposal;
                };
                Height: {
                    encode(message: _156.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.Height;
                    fromPartial(object: Partial<_156.Height>): _156.Height;
                };
                Params: {
                    encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _156.Params;
                    fromPartial(object: Partial<_156.Params>): _156.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _160.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.MerkleRoot;
                    fromPartial(object: Partial<_160.MerkleRoot>): _160.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _160.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.MerklePrefix;
                    fromPartial(object: Partial<_160.MerklePrefix>): _160.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _160.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.MerklePath;
                    fromPartial(object: Partial<_160.MerklePath>): _160.MerklePath;
                };
                MerkleProof: {
                    encode(message: _160.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _160.MerkleProof;
                    fromPartial(object: Partial<_160.MerkleProof>): _160.MerkleProof;
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
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _164.MsgConnectionOpenInit) => {
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
                        }) => _164.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _164.MsgConnectionOpenTry) => {
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
                        }) => _164.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _164.MsgConnectionOpenAck) => {
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
                        }) => _164.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _164.MsgConnectionOpenConfirm) => {
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
                        }) => _164.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _164.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _164.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_164.MsgConnectionOpenInit>): _164.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _164.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _164.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenInitResponse>): _164.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _164.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _164.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_164.MsgConnectionOpenTry>): _164.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _164.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _164.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenTryResponse>): _164.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _164.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _164.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_164.MsgConnectionOpenAck>): _164.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _164.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _164.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenAckResponse>): _164.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _164.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _164.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_164.MsgConnectionOpenConfirm>): _164.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _164.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _164.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_164.MsgConnectionOpenConfirmResponse>): _164.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _163.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionRequest;
                    fromPartial(object: Partial<_163.QueryConnectionRequest>): _163.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _163.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionResponse;
                    fromPartial(object: Partial<_163.QueryConnectionResponse>): _163.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _163.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionsRequest;
                    fromPartial(object: Partial<_163.QueryConnectionsRequest>): _163.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _163.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionsResponse;
                    fromPartial(object: Partial<_163.QueryConnectionsResponse>): _163.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _163.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_163.QueryClientConnectionsRequest>): _163.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _163.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_163.QueryClientConnectionsResponse>): _163.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _163.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_163.QueryConnectionClientStateRequest>): _163.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _163.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_163.QueryConnectionClientStateResponse>): _163.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _163.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_163.QueryConnectionConsensusStateRequest>): _163.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _163.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _163.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_163.QueryConnectionConsensusStateResponse>): _163.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _162.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _162.GenesisState;
                    fromPartial(object: Partial<_162.GenesisState>): _162.GenesisState;
                };
                stateFromJSON(object: any): _161.State;
                stateToJSON(object: _161.State): string;
                State: typeof _161.State;
                StateSDKType: typeof _161.State;
                ConnectionEnd: {
                    encode(message: _161.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.ConnectionEnd;
                    fromPartial(object: Partial<_161.ConnectionEnd>): _161.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _161.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.IdentifiedConnection;
                    fromPartial(object: Partial<_161.IdentifiedConnection>): _161.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _161.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.Counterparty;
                    fromPartial(object: Partial<_161.Counterparty>): _161.Counterparty;
                };
                ClientPaths: {
                    encode(message: _161.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.ClientPaths;
                    fromPartial(object: Partial<_161.ClientPaths>): _161.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _161.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.ConnectionPaths;
                    fromPartial(object: Partial<_161.ConnectionPaths>): _161.ConnectionPaths;
                };
                Version: {
                    encode(message: _161.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.Version;
                    fromPartial(object: Partial<_161.Version>): _161.Version;
                };
                Params: {
                    encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _161.Params;
                    fromPartial(object: Partial<_161.Params>): _161.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _165.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _165.GenesisState;
                    fromPartial(object: Partial<_165.GenesisState>): _165.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _166.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _166.ClientState;
                    fromPartial(object: Partial<_166.ClientState>): _166.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _167.DataType;
                dataTypeToJSON(object: _167.DataType): string;
                DataType: typeof _167.DataType;
                DataTypeSDKType: typeof _167.DataType;
                ClientState: {
                    encode(message: _167.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.ClientState;
                    fromPartial(object: Partial<_167.ClientState>): _167.ClientState;
                };
                ConsensusState: {
                    encode(message: _167.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.ConsensusState;
                    fromPartial(object: Partial<_167.ConsensusState>): _167.ConsensusState;
                };
                Header: {
                    encode(message: _167.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.Header;
                    fromPartial(object: Partial<_167.Header>): _167.Header;
                };
                Misbehaviour: {
                    encode(message: _167.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.Misbehaviour;
                    fromPartial(object: Partial<_167.Misbehaviour>): _167.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _167.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.SignatureAndData;
                    fromPartial(object: Partial<_167.SignatureAndData>): _167.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _167.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.TimestampedSignatureData;
                    fromPartial(object: Partial<_167.TimestampedSignatureData>): _167.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _167.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.SignBytes;
                    fromPartial(object: Partial<_167.SignBytes>): _167.SignBytes;
                };
                HeaderData: {
                    encode(message: _167.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.HeaderData;
                    fromPartial(object: Partial<_167.HeaderData>): _167.HeaderData;
                };
                ClientStateData: {
                    encode(message: _167.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.ClientStateData;
                    fromPartial(object: Partial<_167.ClientStateData>): _167.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _167.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.ConsensusStateData;
                    fromPartial(object: Partial<_167.ConsensusStateData>): _167.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _167.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.ConnectionStateData;
                    fromPartial(object: Partial<_167.ConnectionStateData>): _167.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _167.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.ChannelStateData;
                    fromPartial(object: Partial<_167.ChannelStateData>): _167.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _167.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.PacketCommitmentData;
                    fromPartial(object: Partial<_167.PacketCommitmentData>): _167.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _167.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.PacketAcknowledgementData;
                    fromPartial(object: Partial<_167.PacketAcknowledgementData>): _167.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _167.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_167.PacketReceiptAbsenceData>): _167.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _167.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _167.NextSequenceRecvData;
                    fromPartial(object: Partial<_167.NextSequenceRecvData>): _167.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _168.DataType;
                dataTypeToJSON(object: _168.DataType): string;
                DataType: typeof _168.DataType;
                DataTypeSDKType: typeof _168.DataType;
                ClientState: {
                    encode(message: _168.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.ClientState;
                    fromPartial(object: Partial<_168.ClientState>): _168.ClientState;
                };
                ConsensusState: {
                    encode(message: _168.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.ConsensusState;
                    fromPartial(object: Partial<_168.ConsensusState>): _168.ConsensusState;
                };
                Header: {
                    encode(message: _168.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.Header;
                    fromPartial(object: Partial<_168.Header>): _168.Header;
                };
                Misbehaviour: {
                    encode(message: _168.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.Misbehaviour;
                    fromPartial(object: Partial<_168.Misbehaviour>): _168.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _168.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.SignatureAndData;
                    fromPartial(object: Partial<_168.SignatureAndData>): _168.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _168.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.TimestampedSignatureData;
                    fromPartial(object: Partial<_168.TimestampedSignatureData>): _168.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _168.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.SignBytes;
                    fromPartial(object: Partial<_168.SignBytes>): _168.SignBytes;
                };
                HeaderData: {
                    encode(message: _168.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.HeaderData;
                    fromPartial(object: Partial<_168.HeaderData>): _168.HeaderData;
                };
                ClientStateData: {
                    encode(message: _168.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.ClientStateData;
                    fromPartial(object: Partial<_168.ClientStateData>): _168.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _168.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.ConsensusStateData;
                    fromPartial(object: Partial<_168.ConsensusStateData>): _168.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _168.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.ConnectionStateData;
                    fromPartial(object: Partial<_168.ConnectionStateData>): _168.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _168.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.ChannelStateData;
                    fromPartial(object: Partial<_168.ChannelStateData>): _168.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _168.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.PacketCommitmentData;
                    fromPartial(object: Partial<_168.PacketCommitmentData>): _168.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _168.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.PacketAcknowledgementData;
                    fromPartial(object: Partial<_168.PacketAcknowledgementData>): _168.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _168.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_168.PacketReceiptAbsenceData>): _168.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _168.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _168.NextSequenceRecvData;
                    fromPartial(object: Partial<_168.NextSequenceRecvData>): _168.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _169.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _169.ClientState;
                    fromPartial(object: Partial<_169.ClientState>): _169.ClientState;
                };
                ConsensusState: {
                    encode(message: _169.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _169.ConsensusState;
                    fromPartial(object: Partial<_169.ConsensusState>): _169.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _169.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _169.Misbehaviour;
                    fromPartial(object: Partial<_169.Misbehaviour>): _169.Misbehaviour;
                };
                Header: {
                    encode(message: _169.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _169.Header;
                    fromPartial(object: Partial<_169.Header>): _169.Header;
                };
                Fraction: {
                    encode(message: _169.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _169.Fraction;
                    fromPartial(object: Partial<_169.Fraction>): _169.Fraction;
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
