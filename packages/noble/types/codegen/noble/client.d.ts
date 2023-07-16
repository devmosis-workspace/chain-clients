import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const nobleAminoConverters: {
    "/noble.tokenfactory.MsgUpdateMasterMinter": {
        aminoType: string;
        toAmino: ({ from, address }: import("../tokenfactory/tx").MsgUpdateMasterMinter) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../tokenfactory/tx").MsgUpdateMasterMinter;
    };
    "/noble.tokenfactory.MsgUpdatePauser": {
        aminoType: string;
        toAmino: ({ from, address }: import("../tokenfactory/tx").MsgUpdatePauser) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../tokenfactory/tx").MsgUpdatePauser;
    };
    "/noble.tokenfactory.MsgUpdateBlacklister": {
        aminoType: string;
        toAmino: ({ from, address }: import("../tokenfactory/tx").MsgUpdateBlacklister) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../tokenfactory/tx").MsgUpdateBlacklister;
    };
    "/noble.tokenfactory.MsgUpdateOwner": {
        aminoType: string;
        toAmino: ({ from, address }: import("../tokenfactory/tx").MsgUpdateOwner) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../tokenfactory/tx").MsgUpdateOwner;
    };
    "/noble.tokenfactory.MsgAcceptOwner": {
        aminoType: string;
        toAmino: ({ from }: import("../tokenfactory/tx").MsgAcceptOwner) => {
            from: string;
        };
        fromAmino: ({ from }: {
            from: string;
        }) => import("../tokenfactory/tx").MsgAcceptOwner;
    };
    "/noble.tokenfactory.MsgConfigureMinter": {
        aminoType: string;
        toAmino: ({ from, address, allowance }: import("../tokenfactory/tx").MsgConfigureMinter) => {
            from: string;
            address: string;
            allowance: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, address, allowance }: {
            from: string;
            address: string;
            allowance: {
                denom: string;
                amount: string;
            };
        }) => import("../tokenfactory/tx").MsgConfigureMinter;
    };
    "/noble.tokenfactory.MsgRemoveMinter": {
        aminoType: string;
        toAmino: ({ from, address }: import("../tokenfactory/tx").MsgRemoveMinter) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../tokenfactory/tx").MsgRemoveMinter;
    };
    "/noble.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: ({ from, address, amount }: import("../tokenfactory/tx").MsgMint) => {
            from: string;
            address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, address, amount }: {
            from: string;
            address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("../tokenfactory/tx").MsgMint;
    };
    "/noble.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: ({ from, amount }: import("../tokenfactory/tx").MsgBurn) => {
            from: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, amount }: {
            from: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("../tokenfactory/tx").MsgBurn;
    };
    "/noble.tokenfactory.MsgBlacklist": {
        aminoType: string;
        toAmino: ({ from, address }: import("../tokenfactory/tx").MsgBlacklist) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../tokenfactory/tx").MsgBlacklist;
    };
    "/noble.tokenfactory.MsgUnblacklist": {
        aminoType: string;
        toAmino: ({ from, address }: import("../tokenfactory/tx").MsgUnblacklist) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../tokenfactory/tx").MsgUnblacklist;
    };
    "/noble.tokenfactory.MsgPause": {
        aminoType: string;
        toAmino: ({ from }: import("../tokenfactory/tx").MsgPause) => {
            from: string;
        };
        fromAmino: ({ from }: {
            from: string;
        }) => import("../tokenfactory/tx").MsgPause;
    };
    "/noble.tokenfactory.MsgUnpause": {
        aminoType: string;
        toAmino: ({ from }: import("../tokenfactory/tx").MsgUnpause) => {
            from: string;
        };
        fromAmino: ({ from }: {
            from: string;
        }) => import("../tokenfactory/tx").MsgUnpause;
    };
    "/noble.tokenfactory.MsgConfigureMinterController": {
        aminoType: string;
        toAmino: ({ from, controller, minter }: import("../tokenfactory/tx").MsgConfigureMinterController) => {
            from: string;
            controller: string;
            minter: string;
        };
        fromAmino: ({ from, controller, minter }: {
            from: string;
            controller: string;
            minter: string;
        }) => import("../tokenfactory/tx").MsgConfigureMinterController;
    };
    "/noble.tokenfactory.MsgRemoveMinterController": {
        aminoType: string;
        toAmino: ({ from, controller }: import("../tokenfactory/tx").MsgRemoveMinterController) => {
            from: string;
            controller: string;
        };
        fromAmino: ({ from, controller }: {
            from: string;
            controller: string;
        }) => import("../tokenfactory/tx").MsgRemoveMinterController;
    };
    "/noble.fiattokenfactory.MsgUpdateMasterMinter": {
        aminoType: string;
        toAmino: ({ from, address }: import("../fiattokenfactory/tx").MsgUpdateMasterMinter) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../fiattokenfactory/tx").MsgUpdateMasterMinter;
    };
    "/noble.fiattokenfactory.MsgUpdatePauser": {
        aminoType: string;
        toAmino: ({ from, address }: import("../fiattokenfactory/tx").MsgUpdatePauser) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../fiattokenfactory/tx").MsgUpdatePauser;
    };
    "/noble.fiattokenfactory.MsgUpdateBlacklister": {
        aminoType: string;
        toAmino: ({ from, address }: import("../fiattokenfactory/tx").MsgUpdateBlacklister) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../fiattokenfactory/tx").MsgUpdateBlacklister;
    };
    "/noble.fiattokenfactory.MsgUpdateOwner": {
        aminoType: string;
        toAmino: ({ from, address }: import("../fiattokenfactory/tx").MsgUpdateOwner) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../fiattokenfactory/tx").MsgUpdateOwner;
    };
    "/noble.fiattokenfactory.MsgAcceptOwner": {
        aminoType: string;
        toAmino: ({ from }: import("../fiattokenfactory/tx").MsgAcceptOwner) => {
            from: string;
        };
        fromAmino: ({ from }: {
            from: string;
        }) => import("../fiattokenfactory/tx").MsgAcceptOwner;
    };
    "/noble.fiattokenfactory.MsgConfigureMinter": {
        aminoType: string;
        toAmino: ({ from, address, allowance }: import("../fiattokenfactory/tx").MsgConfigureMinter) => {
            from: string;
            address: string;
            allowance: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, address, allowance }: {
            from: string;
            address: string;
            allowance: {
                denom: string;
                amount: string;
            };
        }) => import("../fiattokenfactory/tx").MsgConfigureMinter;
    };
    "/noble.fiattokenfactory.MsgRemoveMinter": {
        aminoType: string;
        toAmino: ({ from, address }: import("../fiattokenfactory/tx").MsgRemoveMinter) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../fiattokenfactory/tx").MsgRemoveMinter;
    };
    "/noble.fiattokenfactory.MsgMint": {
        aminoType: string;
        toAmino: ({ from, address, amount }: import("../fiattokenfactory/tx").MsgMint) => {
            from: string;
            address: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, address, amount }: {
            from: string;
            address: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("../fiattokenfactory/tx").MsgMint;
    };
    "/noble.fiattokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: ({ from, amount }: import("../fiattokenfactory/tx").MsgBurn) => {
            from: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ from, amount }: {
            from: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("../fiattokenfactory/tx").MsgBurn;
    };
    "/noble.fiattokenfactory.MsgBlacklist": {
        aminoType: string;
        toAmino: ({ from, address }: import("../fiattokenfactory/tx").MsgBlacklist) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../fiattokenfactory/tx").MsgBlacklist;
    };
    "/noble.fiattokenfactory.MsgUnblacklist": {
        aminoType: string;
        toAmino: ({ from, address }: import("../fiattokenfactory/tx").MsgUnblacklist) => {
            from: string;
            address: string;
        };
        fromAmino: ({ from, address }: {
            from: string;
            address: string;
        }) => import("../fiattokenfactory/tx").MsgUnblacklist;
    };
    "/noble.fiattokenfactory.MsgPause": {
        aminoType: string;
        toAmino: ({ from }: import("../fiattokenfactory/tx").MsgPause) => {
            from: string;
        };
        fromAmino: ({ from }: {
            from: string;
        }) => import("../fiattokenfactory/tx").MsgPause;
    };
    "/noble.fiattokenfactory.MsgUnpause": {
        aminoType: string;
        toAmino: ({ from }: import("../fiattokenfactory/tx").MsgUnpause) => {
            from: string;
        };
        fromAmino: ({ from }: {
            from: string;
        }) => import("../fiattokenfactory/tx").MsgUnpause;
    };
    "/noble.fiattokenfactory.MsgConfigureMinterController": {
        aminoType: string;
        toAmino: ({ from, controller, minter }: import("../fiattokenfactory/tx").MsgConfigureMinterController) => {
            from: string;
            controller: string;
            minter: string;
        };
        fromAmino: ({ from, controller, minter }: {
            from: string;
            controller: string;
            minter: string;
        }) => import("../fiattokenfactory/tx").MsgConfigureMinterController;
    };
    "/noble.fiattokenfactory.MsgRemoveMinterController": {
        aminoType: string;
        toAmino: ({ from, controller }: import("../fiattokenfactory/tx").MsgRemoveMinterController) => {
            from: string;
            controller: string;
        };
        fromAmino: ({ from, controller }: {
            from: string;
            controller: string;
        }) => import("../fiattokenfactory/tx").MsgRemoveMinterController;
    };
};
export declare const nobleProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningNobleClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningNobleClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
