import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export declare const AminoConverter: {
    "/noble.fiattokenfactory.MsgUpdateMasterMinter": {
        aminoType: string;
        toAmino: (message: MsgUpdateMasterMinter) => import("./tx").MsgUpdateMasterMinterAmino;
        fromAmino: (object: import("./tx").MsgUpdateMasterMinterAmino) => MsgUpdateMasterMinter;
    };
    "/noble.fiattokenfactory.MsgUpdatePauser": {
        aminoType: string;
        toAmino: (message: MsgUpdatePauser) => import("./tx").MsgUpdatePauserAmino;
        fromAmino: (object: import("./tx").MsgUpdatePauserAmino) => MsgUpdatePauser;
    };
    "/noble.fiattokenfactory.MsgUpdateBlacklister": {
        aminoType: string;
        toAmino: (message: MsgUpdateBlacklister) => import("./tx").MsgUpdateBlacklisterAmino;
        fromAmino: (object: import("./tx").MsgUpdateBlacklisterAmino) => MsgUpdateBlacklister;
    };
    "/noble.fiattokenfactory.MsgUpdateOwner": {
        aminoType: string;
        toAmino: (message: MsgUpdateOwner) => import("./tx").MsgUpdateOwnerAmino;
        fromAmino: (object: import("./tx").MsgUpdateOwnerAmino) => MsgUpdateOwner;
    };
    "/noble.fiattokenfactory.MsgAcceptOwner": {
        aminoType: string;
        toAmino: (message: MsgAcceptOwner) => import("./tx").MsgAcceptOwnerAmino;
        fromAmino: (object: import("./tx").MsgAcceptOwnerAmino) => MsgAcceptOwner;
    };
    "/noble.fiattokenfactory.MsgConfigureMinter": {
        aminoType: string;
        toAmino: (message: MsgConfigureMinter) => import("./tx").MsgConfigureMinterAmino;
        fromAmino: (object: import("./tx").MsgConfigureMinterAmino) => MsgConfigureMinter;
    };
    "/noble.fiattokenfactory.MsgRemoveMinter": {
        aminoType: string;
        toAmino: (message: MsgRemoveMinter) => import("./tx").MsgRemoveMinterAmino;
        fromAmino: (object: import("./tx").MsgRemoveMinterAmino) => MsgRemoveMinter;
    };
    "/noble.fiattokenfactory.MsgMint": {
        aminoType: string;
        toAmino: (message: MsgMint) => import("./tx").MsgMintAmino;
        fromAmino: (object: import("./tx").MsgMintAmino) => MsgMint;
    };
    "/noble.fiattokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: (message: MsgBurn) => import("./tx").MsgBurnAmino;
        fromAmino: (object: import("./tx").MsgBurnAmino) => MsgBurn;
    };
    "/noble.fiattokenfactory.MsgBlacklist": {
        aminoType: string;
        toAmino: (message: MsgBlacklist) => import("./tx").MsgBlacklistAmino;
        fromAmino: (object: import("./tx").MsgBlacklistAmino) => MsgBlacklist;
    };
    "/noble.fiattokenfactory.MsgUnblacklist": {
        aminoType: string;
        toAmino: (message: MsgUnblacklist) => import("./tx").MsgUnblacklistAmino;
        fromAmino: (object: import("./tx").MsgUnblacklistAmino) => MsgUnblacklist;
    };
    "/noble.fiattokenfactory.MsgPause": {
        aminoType: string;
        toAmino: (message: MsgPause) => import("./tx").MsgPauseAmino;
        fromAmino: (object: import("./tx").MsgPauseAmino) => MsgPause;
    };
    "/noble.fiattokenfactory.MsgUnpause": {
        aminoType: string;
        toAmino: (message: MsgUnpause) => import("./tx").MsgUnpauseAmino;
        fromAmino: (object: import("./tx").MsgUnpauseAmino) => MsgUnpause;
    };
    "/noble.fiattokenfactory.MsgConfigureMinterController": {
        aminoType: string;
        toAmino: (message: MsgConfigureMinterController) => import("./tx").MsgConfigureMinterControllerAmino;
        fromAmino: (object: import("./tx").MsgConfigureMinterControllerAmino) => MsgConfigureMinterController;
    };
    "/noble.fiattokenfactory.MsgRemoveMinterController": {
        aminoType: string;
        toAmino: (message: MsgRemoveMinterController) => import("./tx").MsgRemoveMinterControllerAmino;
        fromAmino: (object: import("./tx").MsgRemoveMinterControllerAmino) => MsgRemoveMinterController;
    };
};
