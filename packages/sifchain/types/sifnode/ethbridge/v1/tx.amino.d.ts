import { MsgLock, MsgBurn, MsgCreateEthBridgeClaim, MsgUpdateWhiteListValidator, MsgUpdateCethReceiverAccount, MsgRescueCeth, MsgSetBlacklist, MsgPause } from "./tx";
export declare const AminoConverter: {
    "/sifnode.ethbridge.v1.MsgLock": {
        aminoType: string;
        toAmino: (message: MsgLock) => import("./tx").MsgLockAmino;
        fromAmino: (object: import("./tx").MsgLockAmino) => MsgLock;
    };
    "/sifnode.ethbridge.v1.MsgBurn": {
        aminoType: string;
        toAmino: (message: MsgBurn) => import("./tx").MsgBurnAmino;
        fromAmino: (object: import("./tx").MsgBurnAmino) => MsgBurn;
    };
    "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
        aminoType: string;
        toAmino: (message: MsgCreateEthBridgeClaim) => import("./tx").MsgCreateEthBridgeClaimAmino;
        fromAmino: (object: import("./tx").MsgCreateEthBridgeClaimAmino) => MsgCreateEthBridgeClaim;
    };
    "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
        aminoType: string;
        toAmino: (message: MsgUpdateWhiteListValidator) => import("./tx").MsgUpdateWhiteListValidatorAmino;
        fromAmino: (object: import("./tx").MsgUpdateWhiteListValidatorAmino) => MsgUpdateWhiteListValidator;
    };
    "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
        aminoType: string;
        toAmino: (message: MsgUpdateCethReceiverAccount) => import("./tx").MsgUpdateCethReceiverAccountAmino;
        fromAmino: (object: import("./tx").MsgUpdateCethReceiverAccountAmino) => MsgUpdateCethReceiverAccount;
    };
    "/sifnode.ethbridge.v1.MsgRescueCeth": {
        aminoType: string;
        toAmino: (message: MsgRescueCeth) => import("./tx").MsgRescueCethAmino;
        fromAmino: (object: import("./tx").MsgRescueCethAmino) => MsgRescueCeth;
    };
    "/sifnode.ethbridge.v1.MsgSetBlacklist": {
        aminoType: string;
        toAmino: (message: MsgSetBlacklist) => import("./tx").MsgSetBlacklistAmino;
        fromAmino: (object: import("./tx").MsgSetBlacklistAmino) => MsgSetBlacklist;
    };
    "/sifnode.ethbridge.v1.MsgPause": {
        aminoType: string;
        toAmino: (message: MsgPause) => import("./tx").MsgPauseAmino;
        fromAmino: (object: import("./tx").MsgPauseAmino) => MsgPause;
    };
};
