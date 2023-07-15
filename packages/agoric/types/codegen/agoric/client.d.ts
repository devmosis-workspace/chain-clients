import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const agoricAminoConverters: {
    "/agoric.vibc.MsgSendPacket": {
        aminoType: string;
        toAmino: ({ packet, sender }: import("./vibc/msgs").MsgSendPacket) => {
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
            sender: Uint8Array;
        };
        fromAmino: ({ packet, sender }: {
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
            sender: Uint8Array;
        }) => import("./vibc/msgs").MsgSendPacket;
    };
    "/agoric.swingset.MsgInstallBundle": {
        aminoType: string;
        toAmino: ({ bundle, submitter, compressedBundle, uncompressedSize }: import("./swingset/msgs").MsgInstallBundle) => {
            bundle: string;
            submitter: Uint8Array;
            compressed_bundle: Uint8Array;
            uncompressed_size: string;
        };
        fromAmino: ({ bundle, submitter, compressed_bundle, uncompressed_size }: {
            bundle: string;
            submitter: Uint8Array;
            compressed_bundle: Uint8Array;
            uncompressed_size: string;
        }) => import("./swingset/msgs").MsgInstallBundle;
    };
    "/agoric.swingset.MsgDeliverInbound": {
        aminoType: string;
        toAmino: ({ messages, nums, ack, submitter }: import("./swingset/msgs").MsgDeliverInbound) => {
            messages: string[];
            nums: string[];
            ack: string;
            submitter: Uint8Array;
        };
        fromAmino: ({ messages, nums, ack, submitter }: {
            messages: string[];
            nums: string[];
            ack: string;
            submitter: Uint8Array;
        }) => import("./swingset/msgs").MsgDeliverInbound;
    };
    "/agoric.swingset.MsgWalletAction": {
        aminoType: string;
        toAmino: ({ owner, action }: import("./swingset/msgs").MsgWalletAction) => {
            owner: Uint8Array;
            action: string;
        };
        fromAmino: ({ owner, action }: {
            owner: Uint8Array;
            action: string;
        }) => import("./swingset/msgs").MsgWalletAction;
    };
    "/agoric.swingset.MsgWalletSpendAction": {
        aminoType: string;
        toAmino: ({ owner, spendAction }: import("./swingset/msgs").MsgWalletSpendAction) => {
            owner: Uint8Array;
            spend_action: string;
        };
        fromAmino: ({ owner, spend_action }: {
            owner: Uint8Array;
            spend_action: string;
        }) => import("./swingset/msgs").MsgWalletSpendAction;
    };
    "/agoric.swingset.MsgProvision": {
        aminoType: string;
        toAmino: ({ nickname, address, powerFlags, submitter }: import("./swingset/msgs").MsgProvision) => {
            nickname: string;
            address: Uint8Array;
            power_flags: string[];
            submitter: Uint8Array;
        };
        fromAmino: ({ nickname, address, power_flags, submitter }: {
            nickname: string;
            address: Uint8Array;
            power_flags: string[];
            submitter: Uint8Array;
        }) => import("./swingset/msgs").MsgProvision;
    };
};
export declare const agoricProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAgoricClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAgoricClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
