import * as _87 from "./applications/transfer/v1/query";
import * as _88 from "./applications/transfer/v1/transfer";
import * as _89 from "./core/channel/v1/channel";
import * as _90 from "./core/channel/v1/tx";
import * as _91 from "./core/client/v1/client";
import * as _92 from "./core/client/v1/query";
import * as _93 from "./core/commitment/v1/commitment";
import * as _94 from "./lightclients/tendermint/v1/tendermint";
import * as _171 from "./applications/transfer/v1/query.rpc.Query";
import * as _172 from "./core/client/v1/query.rpc.Query";
import * as _173 from "./core/channel/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                QueryClientImpl: typeof _171.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _87.QueryDenomTraceRequest): Promise<_87.QueryDenomTraceResponse>;
                    denomTraces(request?: _87.QueryDenomTracesRequest): Promise<_87.QueryDenomTracesResponse>;
                    params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                    denomHash(request: _87.QueryDenomHashRequest): Promise<_87.QueryDenomHashResponse>;
                    escrowAddress(request: _87.QueryEscrowAddressRequest): Promise<_87.QueryEscrowAddressResponse>;
                };
                DenomTrace: {
                    encode(message: _88.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.DenomTrace;
                    fromPartial(object: Partial<_88.DenomTrace>): _88.DenomTrace;
                };
                Params: {
                    encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _88.Params;
                    fromPartial(object: Partial<_88.Params>): _88.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _87.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_87.QueryDenomTraceRequest>): _87.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _87.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_87.QueryDenomTraceResponse>): _87.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _87.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_87.QueryDenomTracesRequest>): _87.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _87.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_87.QueryDenomTracesResponse>): _87.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _87.QueryParamsRequest;
                    fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryParamsResponse;
                    fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _87.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryDenomHashRequest;
                    fromPartial(object: Partial<_87.QueryDenomHashRequest>): _87.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _87.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryDenomHashResponse;
                    fromPartial(object: Partial<_87.QueryDenomHashResponse>): _87.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _87.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_87.QueryEscrowAddressRequest>): _87.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _87.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _87.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_87.QueryEscrowAddressResponse>): _87.QueryEscrowAddressResponse;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _173.MsgClientImpl;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _90.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _90.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _90.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _90.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _90.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _90.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _90.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _90.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _90.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _90.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _90.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _90.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _90.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _90.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _90.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _90.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _90.MsgRecvPacket): {
                            typeUrl: string;
                            value: _90.MsgRecvPacket;
                        };
                        timeout(value: _90.MsgTimeout): {
                            typeUrl: string;
                            value: _90.MsgTimeout;
                        };
                        timeoutOnClose(value: _90.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _90.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _90.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _90.MsgAcknowledgement;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _90.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _90.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _90.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _90.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _90.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _90.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _90.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _90.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _90.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _90.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _90.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _90.MsgRecvPacket): {
                            typeUrl: string;
                            value: _90.MsgRecvPacket;
                        };
                        timeout(value: _90.MsgTimeout): {
                            typeUrl: string;
                            value: _90.MsgTimeout;
                        };
                        timeoutOnClose(value: _90.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _90.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _90.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _90.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _90.MsgChannelOpenInit) => {
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
                        }) => _90.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _90.MsgChannelOpenTry) => {
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
                        }) => _90.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _90.MsgChannelOpenAck) => {
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
                        }) => _90.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _90.MsgChannelOpenConfirm) => {
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
                        }) => _90.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _90.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _90.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _90.MsgChannelCloseConfirm) => {
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
                        }) => _90.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _90.MsgRecvPacket) => {
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
                        }) => _90.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _90.MsgTimeout) => {
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
                        }) => _90.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _90.MsgTimeoutOnClose) => {
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
                        }) => _90.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _90.MsgAcknowledgement) => {
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
                        }) => _90.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _90.ResponseResultType;
                responseResultTypeToJSON(object: _90.ResponseResultType): string;
                ResponseResultType: typeof _90.ResponseResultType;
                ResponseResultTypeSDKType: typeof _90.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _90.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelOpenInit;
                    fromPartial(object: Partial<_90.MsgChannelOpenInit>): _90.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _90.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_90.MsgChannelOpenInitResponse>): _90.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _90.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelOpenTry;
                    fromPartial(object: Partial<_90.MsgChannelOpenTry>): _90.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _90.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_90.MsgChannelOpenTryResponse>): _90.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _90.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelOpenAck;
                    fromPartial(object: Partial<_90.MsgChannelOpenAck>): _90.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _90.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_90.MsgChannelOpenAckResponse>): _90.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _90.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_90.MsgChannelOpenConfirm>): _90.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _90.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_90.MsgChannelOpenConfirmResponse>): _90.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _90.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelCloseInit;
                    fromPartial(object: Partial<_90.MsgChannelCloseInit>): _90.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _90.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_90.MsgChannelCloseInitResponse>): _90.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _90.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_90.MsgChannelCloseConfirm>): _90.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _90.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _90.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_90.MsgChannelCloseConfirmResponse>): _90.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _90.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgRecvPacket;
                    fromPartial(object: Partial<_90.MsgRecvPacket>): _90.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _90.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_90.MsgRecvPacketResponse>): _90.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _90.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgTimeout;
                    fromPartial(object: Partial<_90.MsgTimeout>): _90.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _90.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgTimeoutResponse;
                    fromPartial(object: Partial<_90.MsgTimeoutResponse>): _90.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _90.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_90.MsgTimeoutOnClose>): _90.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _90.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_90.MsgTimeoutOnCloseResponse>): _90.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _90.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgAcknowledgement;
                    fromPartial(object: Partial<_90.MsgAcknowledgement>): _90.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _90.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _90.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_90.MsgAcknowledgementResponse>): _90.MsgAcknowledgementResponse;
                };
                stateFromJSON(object: any): _89.State;
                stateToJSON(object: _89.State): string;
                orderFromJSON(object: any): _89.Order;
                orderToJSON(object: _89.Order): string;
                State: typeof _89.State;
                StateSDKType: typeof _89.State;
                Order: typeof _89.Order;
                OrderSDKType: typeof _89.Order;
                Channel: {
                    encode(message: _89.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.Channel;
                    fromPartial(object: Partial<_89.Channel>): _89.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _89.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.IdentifiedChannel;
                    fromPartial(object: Partial<_89.IdentifiedChannel>): _89.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _89.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.Counterparty;
                    fromPartial(object: Partial<_89.Counterparty>): _89.Counterparty;
                };
                Packet: {
                    encode(message: _89.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.Packet;
                    fromPartial(object: Partial<_89.Packet>): _89.Packet;
                };
                PacketState: {
                    encode(message: _89.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.PacketState;
                    fromPartial(object: Partial<_89.PacketState>): _89.PacketState;
                };
                Acknowledgement: {
                    encode(message: _89.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _89.Acknowledgement;
                    fromPartial(object: Partial<_89.Acknowledgement>): _89.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                QueryClientImpl: typeof _172.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _92.QueryClientStateRequest): Promise<_92.QueryClientStateResponse>;
                    clientStates(request?: _92.QueryClientStatesRequest): Promise<_92.QueryClientStatesResponse>;
                    consensusState(request: _92.QueryConsensusStateRequest): Promise<_92.QueryConsensusStateResponse>;
                    consensusStates(request: _92.QueryConsensusStatesRequest): Promise<_92.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _92.QueryConsensusStateHeightsRequest): Promise<_92.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _92.QueryClientStatusRequest): Promise<_92.QueryClientStatusResponse>;
                    clientParams(request?: _92.QueryClientParamsRequest): Promise<_92.QueryClientParamsResponse>;
                    upgradedClientState(request?: _92.QueryUpgradedClientStateRequest): Promise<_92.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _92.QueryUpgradedConsensusStateRequest): Promise<_92.QueryUpgradedConsensusStateResponse>;
                };
                QueryClientStateRequest: {
                    encode(message: _92.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryClientStateRequest;
                    fromPartial(object: Partial<_92.QueryClientStateRequest>): _92.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _92.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryClientStateResponse;
                    fromPartial(object: Partial<_92.QueryClientStateResponse>): _92.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _92.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryClientStatesRequest;
                    fromPartial(object: Partial<_92.QueryClientStatesRequest>): _92.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _92.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryClientStatesResponse;
                    fromPartial(object: Partial<_92.QueryClientStatesResponse>): _92.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _92.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_92.QueryConsensusStateRequest>): _92.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _92.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_92.QueryConsensusStateResponse>): _92.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _92.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_92.QueryConsensusStatesRequest>): _92.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _92.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_92.QueryConsensusStatesResponse>): _92.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _92.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_92.QueryConsensusStateHeightsRequest>): _92.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _92.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_92.QueryConsensusStateHeightsResponse>): _92.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _92.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryClientStatusRequest;
                    fromPartial(object: Partial<_92.QueryClientStatusRequest>): _92.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _92.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryClientStatusResponse;
                    fromPartial(object: Partial<_92.QueryClientStatusResponse>): _92.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _92.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _92.QueryClientParamsRequest;
                    fromPartial(_: Partial<_92.QueryClientParamsRequest>): _92.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _92.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryClientParamsResponse;
                    fromPartial(object: Partial<_92.QueryClientParamsResponse>): _92.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _92.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _92.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_92.QueryUpgradedClientStateRequest>): _92.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _92.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_92.QueryUpgradedClientStateResponse>): _92.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _92.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(_: any): _92.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_92.QueryUpgradedConsensusStateRequest>): _92.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _92.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _92.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_92.QueryUpgradedConsensusStateResponse>): _92.QueryUpgradedConsensusStateResponse;
                };
                IdentifiedClientState: {
                    encode(message: _91.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.IdentifiedClientState;
                    fromPartial(object: Partial<_91.IdentifiedClientState>): _91.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _91.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_91.ConsensusStateWithHeight>): _91.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _91.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.ClientConsensusStates;
                    fromPartial(object: Partial<_91.ClientConsensusStates>): _91.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _91.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.ClientUpdateProposal;
                    fromPartial(object: Partial<_91.ClientUpdateProposal>): _91.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _91.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.UpgradeProposal;
                    fromPartial(object: Partial<_91.UpgradeProposal>): _91.UpgradeProposal;
                };
                Height: {
                    encode(message: _91.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Height;
                    fromPartial(object: Partial<_91.Height>): _91.Height;
                };
                Params: {
                    encode(message: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _91.Params;
                    fromPartial(object: Partial<_91.Params>): _91.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _93.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.MerkleRoot;
                    fromPartial(object: Partial<_93.MerkleRoot>): _93.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _93.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.MerklePrefix;
                    fromPartial(object: Partial<_93.MerklePrefix>): _93.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _93.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.MerklePath;
                    fromPartial(object: Partial<_93.MerklePath>): _93.MerklePath;
                };
                MerkleProof: {
                    encode(message: _93.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _93.MerkleProof;
                    fromPartial(object: Partial<_93.MerkleProof>): _93.MerkleProof;
                };
            };
        }
    }
    namespace lightclients {
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _94.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.ClientState;
                    fromPartial(object: Partial<_94.ClientState>): _94.ClientState;
                };
                ConsensusState: {
                    encode(message: _94.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.ConsensusState;
                    fromPartial(object: Partial<_94.ConsensusState>): _94.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _94.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.Misbehaviour;
                    fromPartial(object: Partial<_94.Misbehaviour>): _94.Misbehaviour;
                };
                Header: {
                    encode(message: _94.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.Header;
                    fromPartial(object: Partial<_94.Header>): _94.Header;
                };
                Fraction: {
                    encode(message: _94.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    fromJSON(object: any): _94.Fraction;
                    fromPartial(object: Partial<_94.Fraction>): _94.Fraction;
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
                core: {
                    channel: {
                        v1: _173.MsgClientImpl;
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
                            denomTrace(request: _87.QueryDenomTraceRequest): Promise<_87.QueryDenomTraceResponse>;
                            denomTraces(request?: _87.QueryDenomTracesRequest): Promise<_87.QueryDenomTracesResponse>;
                            params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                            denomHash(request: _87.QueryDenomHashRequest): Promise<_87.QueryDenomHashResponse>;
                            escrowAddress(request: _87.QueryEscrowAddressRequest): Promise<_87.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    client: {
                        v1: {
                            clientState(request: _92.QueryClientStateRequest): Promise<_92.QueryClientStateResponse>;
                            clientStates(request?: _92.QueryClientStatesRequest): Promise<_92.QueryClientStatesResponse>;
                            consensusState(request: _92.QueryConsensusStateRequest): Promise<_92.QueryConsensusStateResponse>;
                            consensusStates(request: _92.QueryConsensusStatesRequest): Promise<_92.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _92.QueryConsensusStateHeightsRequest): Promise<_92.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _92.QueryClientStatusRequest): Promise<_92.QueryClientStatusResponse>;
                            clientParams(request?: _92.QueryClientParamsRequest): Promise<_92.QueryClientParamsResponse>;
                            upgradedClientState(request?: _92.QueryUpgradedClientStateRequest): Promise<_92.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _92.QueryUpgradedConsensusStateRequest): Promise<_92.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
