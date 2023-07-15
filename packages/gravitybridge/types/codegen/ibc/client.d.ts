import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ibcAminoConverters: {
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: string;
        toAmino: ({ portId, channel, signer }: import("./core/channel/v1/tx").MsgChannelOpenInit) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenInit;
    };
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: string;
        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelOpenTry) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenTry;
    };
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: string;
        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelOpenAck) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenAck;
    };
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: string;
        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelOpenConfirm) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelOpenConfirm;
    };
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: string;
        toAmino: ({ portId, channelId, signer }: import("./core/channel/v1/tx").MsgChannelCloseInit) => {
            port_id: string;
            channel_id: string;
            signer: string;
        };
        fromAmino: ({ port_id, channel_id, signer }: {
            port_id: string;
            channel_id: string;
            signer: string;
        }) => import("./core/channel/v1/tx").MsgChannelCloseInit;
    };
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: string;
        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: import("./core/channel/v1/tx").MsgChannelCloseConfirm) => {
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
        }) => import("./core/channel/v1/tx").MsgChannelCloseConfirm;
    };
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: string;
        toAmino: ({ packet, proofCommitment, proofHeight, signer }: import("./core/channel/v1/tx").MsgRecvPacket) => {
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
        }) => import("./core/channel/v1/tx").MsgRecvPacket;
    };
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: import("./core/channel/v1/tx").MsgTimeout) => {
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
        }) => import("./core/channel/v1/tx").MsgTimeout;
    };
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: string;
        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: import("./core/channel/v1/tx").MsgTimeoutOnClose) => {
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
        }) => import("./core/channel/v1/tx").MsgTimeoutOnClose;
    };
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: string;
        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: import("./core/channel/v1/tx").MsgAcknowledgement) => {
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
        }) => import("./core/channel/v1/tx").MsgAcknowledgement;
    };
};
export declare const ibcProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIbcClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIbcClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
