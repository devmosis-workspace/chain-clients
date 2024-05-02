import { MsgPromoteToPrivilegedContract, MsgDemoteFromPrivilegedContract, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract": {
        aminoType: string;
        toAmino: (message: MsgPromoteToPrivilegedContract) => import("./tx").MsgPromoteToPrivilegedContractAmino;
        fromAmino: (object: import("./tx").MsgPromoteToPrivilegedContractAmino) => MsgPromoteToPrivilegedContract;
    };
    "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract": {
        aminoType: string;
        toAmino: (message: MsgDemoteFromPrivilegedContract) => import("./tx").MsgDemoteFromPrivilegedContractAmino;
        fromAmino: (object: import("./tx").MsgDemoteFromPrivilegedContractAmino) => MsgDemoteFromPrivilegedContract;
    };
    "/publicawesome.stargaze.cron.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
