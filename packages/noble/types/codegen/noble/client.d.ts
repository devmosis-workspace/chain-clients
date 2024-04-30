import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const nobleAminoConverters: {
    "/noble.tokenfactory.MsgUpdateMasterMinter": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgUpdateMasterMinter) => import("../tokenfactory/tx").MsgUpdateMasterMinterAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgUpdateMasterMinterAmino) => import("../tokenfactory/tx").MsgUpdateMasterMinter;
    };
    "/noble.tokenfactory.MsgUpdatePauser": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgUpdatePauser) => import("../tokenfactory/tx").MsgUpdatePauserAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgUpdatePauserAmino) => import("../tokenfactory/tx").MsgUpdatePauser;
    };
    "/noble.tokenfactory.MsgUpdateBlacklister": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgUpdateBlacklister) => import("../tokenfactory/tx").MsgUpdateBlacklisterAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgUpdateBlacklisterAmino) => import("../tokenfactory/tx").MsgUpdateBlacklister;
    };
    "/noble.tokenfactory.MsgUpdateOwner": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgUpdateOwner) => import("../tokenfactory/tx").MsgUpdateOwnerAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgUpdateOwnerAmino) => import("../tokenfactory/tx").MsgUpdateOwner;
    };
    "/noble.tokenfactory.MsgAcceptOwner": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgAcceptOwner) => import("../tokenfactory/tx").MsgAcceptOwnerAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgAcceptOwnerAmino) => import("../tokenfactory/tx").MsgAcceptOwner;
    };
    "/noble.tokenfactory.MsgConfigureMinter": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgConfigureMinter) => import("../tokenfactory/tx").MsgConfigureMinterAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgConfigureMinterAmino) => import("../tokenfactory/tx").MsgConfigureMinter;
    };
    "/noble.tokenfactory.MsgRemoveMinter": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgRemoveMinter) => import("../tokenfactory/tx").MsgRemoveMinterAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgRemoveMinterAmino) => import("../tokenfactory/tx").MsgRemoveMinter;
    };
    "/noble.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgMint) => import("../tokenfactory/tx").MsgMintAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgMintAmino) => import("../tokenfactory/tx").MsgMint;
    };
    "/noble.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgBurn) => import("../tokenfactory/tx").MsgBurnAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgBurnAmino) => import("../tokenfactory/tx").MsgBurn;
    };
    "/noble.tokenfactory.MsgBlacklist": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgBlacklist) => import("../tokenfactory/tx").MsgBlacklistAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgBlacklistAmino) => import("../tokenfactory/tx").MsgBlacklist;
    };
    "/noble.tokenfactory.MsgUnblacklist": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgUnblacklist) => import("../tokenfactory/tx").MsgUnblacklistAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgUnblacklistAmino) => import("../tokenfactory/tx").MsgUnblacklist;
    };
    "/noble.tokenfactory.MsgPause": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgPause) => import("../tokenfactory/tx").MsgPauseAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgPauseAmino) => import("../tokenfactory/tx").MsgPause;
    };
    "/noble.tokenfactory.MsgUnpause": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgUnpause) => import("../tokenfactory/tx").MsgUnpauseAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgUnpauseAmino) => import("../tokenfactory/tx").MsgUnpause;
    };
    "/noble.tokenfactory.MsgConfigureMinterController": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgConfigureMinterController) => import("../tokenfactory/tx").MsgConfigureMinterControllerAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgConfigureMinterControllerAmino) => import("../tokenfactory/tx").MsgConfigureMinterController;
    };
    "/noble.tokenfactory.MsgRemoveMinterController": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/tx").MsgRemoveMinterController) => import("../tokenfactory/tx").MsgRemoveMinterControllerAmino;
        fromAmino: (object: import("../tokenfactory/tx").MsgRemoveMinterControllerAmino) => import("../tokenfactory/tx").MsgRemoveMinterController;
    };
    "/noble.forwarding.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: import("./forwarding/v1/tx").MsgRegisterAccount) => import("./forwarding/v1/tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("./forwarding/v1/tx").MsgRegisterAccountAmino) => import("./forwarding/v1/tx").MsgRegisterAccount;
    };
    "/noble.forwarding.v1.MsgClearAccount": {
        aminoType: string;
        toAmino: (message: import("./forwarding/v1/tx").MsgClearAccount) => import("./forwarding/v1/tx").MsgClearAccountAmino;
        fromAmino: (object: import("./forwarding/v1/tx").MsgClearAccountAmino) => import("./forwarding/v1/tx").MsgClearAccount;
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
