import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const agoricAminoConverters: {
    "/agoric.vibc.MsgSendPacket": {
        aminoType: string;
        toAmino: (message: import("./vibc/msgs").MsgSendPacket) => import("./vibc/msgs").MsgSendPacketAmino;
        fromAmino: (object: import("./vibc/msgs").MsgSendPacketAmino) => import("./vibc/msgs").MsgSendPacket;
    };
    "/agoric.swingset.MsgInstallBundle": {
        aminoType: string;
        toAmino: (message: import("./swingset/msgs").MsgInstallBundle) => import("./swingset/msgs").MsgInstallBundleAmino;
        fromAmino: (object: import("./swingset/msgs").MsgInstallBundleAmino) => import("./swingset/msgs").MsgInstallBundle;
    };
    "/agoric.swingset.MsgDeliverInbound": {
        aminoType: string;
        toAmino: (message: import("./swingset/msgs").MsgDeliverInbound) => import("./swingset/msgs").MsgDeliverInboundAmino;
        fromAmino: (object: import("./swingset/msgs").MsgDeliverInboundAmino) => import("./swingset/msgs").MsgDeliverInbound;
    };
    "/agoric.swingset.MsgWalletAction": {
        aminoType: string;
        toAmino: (message: import("./swingset/msgs").MsgWalletAction) => import("./swingset/msgs").MsgWalletActionAmino;
        fromAmino: (object: import("./swingset/msgs").MsgWalletActionAmino) => import("./swingset/msgs").MsgWalletAction;
    };
    "/agoric.swingset.MsgWalletSpendAction": {
        aminoType: string;
        toAmino: (message: import("./swingset/msgs").MsgWalletSpendAction) => import("./swingset/msgs").MsgWalletSpendActionAmino;
        fromAmino: (object: import("./swingset/msgs").MsgWalletSpendActionAmino) => import("./swingset/msgs").MsgWalletSpendAction;
    };
    "/agoric.swingset.MsgProvision": {
        aminoType: string;
        toAmino: (message: import("./swingset/msgs").MsgProvision) => import("./swingset/msgs").MsgProvisionAmino;
        fromAmino: (object: import("./swingset/msgs").MsgProvisionAmino) => import("./swingset/msgs").MsgProvision;
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
