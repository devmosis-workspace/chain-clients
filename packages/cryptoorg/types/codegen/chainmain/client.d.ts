import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const chainmainAminoConverters: {
    "/chainmain.nft.v1.MsgIssueDenom": {
        aminoType: string;
        toAmino: ({ id, name, schema, sender, uri }: import("../nft/v1/tx").MsgIssueDenom) => {
            id: string;
            name: string;
            schema: string;
            sender: string;
            uri: string;
        };
        fromAmino: ({ id, name, schema, sender, uri }: {
            id: string;
            name: string;
            schema: string;
            sender: string;
            uri: string;
        }) => import("../nft/v1/tx").MsgIssueDenom;
    };
    "/chainmain.nft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, recipient }: import("../nft/v1/tx").MsgMintNFT) => {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            recipient: string;
        };
        fromAmino: ({ id, denom_id, name, uri, data, sender, recipient }: {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
            recipient: string;
        }) => import("../nft/v1/tx").MsgMintNFT;
    };
    "/chainmain.nft.v1.MsgEditNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender }: import("../nft/v1/tx").MsgEditNFT) => {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
        };
        fromAmino: ({ id, denom_id, name, uri, data, sender }: {
            id: string;
            denom_id: string;
            name: string;
            uri: string;
            data: string;
            sender: string;
        }) => import("../nft/v1/tx").MsgEditNFT;
    };
    "/chainmain.nft.v1.MsgTransferNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, sender, recipient }: import("../nft/v1/tx").MsgTransferNFT) => {
            id: string;
            denom_id: string;
            sender: string;
            recipient: string;
        };
        fromAmino: ({ id, denom_id, sender, recipient }: {
            id: string;
            denom_id: string;
            sender: string;
            recipient: string;
        }) => import("../nft/v1/tx").MsgTransferNFT;
    };
    "/chainmain.nft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, sender }: import("../nft/v1/tx").MsgBurnNFT) => {
            id: string;
            denom_id: string;
            sender: string;
        };
        fromAmino: ({ id, denom_id, sender }: {
            id: string;
            denom_id: string;
            sender: string;
        }) => import("../nft/v1/tx").MsgBurnNFT;
    };
    "/chainmain.nft_transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, classId, tokenIds, sender, receiver, timeoutHeight, timeoutTimestamp }: import("../nft_transfer/v1/tx").MsgTransfer) => {
            source_port: string;
            source_channel: string;
            class_id: string;
            token_ids: string[];
            sender: string;
            receiver: string;
            timeout_height: import("../helpers").AminoHeight;
            timeout_timestamp: string;
        };
        fromAmino: ({ source_port, source_channel, class_id, token_ids, sender, receiver, timeout_height, timeout_timestamp }: {
            source_port: string;
            source_channel: string;
            class_id: string;
            token_ids: string[];
            sender: string;
            receiver: string;
            timeout_height: import("../helpers").AminoHeight;
            timeout_timestamp: string;
        }) => import("../nft_transfer/v1/tx").MsgTransfer;
    };
    "/chainmain.icaauth.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version }: import("../icaauth/v1/tx").MsgRegisterAccount) => {
            owner: string;
            connectionId: string;
            version: string;
        };
        fromAmino: ({ owner, connectionId, version }: {
            owner: string;
            connectionId: string;
            version: string;
        }) => import("../icaauth/v1/tx").MsgRegisterAccount;
    };
    "/chainmain.icaauth.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, msgs, timeoutDuration }: import("../icaauth/v1/tx").MsgSubmitTx) => {
            owner: string;
            connectionId: string;
            msgs: {
                type_url: string;
                value: Uint8Array;
            }[];
            timeoutDuration: {
                seconds: string;
                nanos: number;
            };
        };
        fromAmino: ({ owner, connectionId, msgs, timeoutDuration }: {
            owner: string;
            connectionId: string;
            msgs: {
                type_url: string;
                value: Uint8Array;
            }[];
            timeoutDuration: {
                seconds: string;
                nanos: number;
            };
        }) => import("../icaauth/v1/tx").MsgSubmitTx;
    };
};
export declare const chainmainProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningChainmainClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningChainmainClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
