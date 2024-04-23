import { MsgCreateRollapp, MsgUpdateState } from "./tx";
export declare const AminoConverter: {
    "/dymensionxyz.dymension.rollapp.MsgCreateRollapp": {
        aminoType: string;
        toAmino: (message: MsgCreateRollapp) => import("./tx").MsgCreateRollappAmino;
        fromAmino: (object: import("./tx").MsgCreateRollappAmino) => MsgCreateRollapp;
    };
    "/dymensionxyz.dymension.rollapp.MsgUpdateState": {
        aminoType: string;
        toAmino: (message: MsgUpdateState) => import("./tx").MsgUpdateStateAmino;
        fromAmino: (object: import("./tx").MsgUpdateStateAmino) => MsgUpdateState;
    };
};
