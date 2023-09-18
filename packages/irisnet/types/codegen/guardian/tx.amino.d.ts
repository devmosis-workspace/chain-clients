import { MsgAddSuper, MsgDeleteSuper } from "./tx";
export declare const AminoConverter: {
    "/irishub.guardian.MsgAddSuper": {
        aminoType: string;
        toAmino: (message: MsgAddSuper) => import("./tx").MsgAddSuperAmino;
        fromAmino: (object: import("./tx").MsgAddSuperAmino) => MsgAddSuper;
    };
    "/irishub.guardian.MsgDeleteSuper": {
        aminoType: string;
        toAmino: (message: MsgDeleteSuper) => import("./tx").MsgDeleteSuperAmino;
        fromAmino: (object: import("./tx").MsgDeleteSuperAmino) => MsgDeleteSuper;
    };
};
