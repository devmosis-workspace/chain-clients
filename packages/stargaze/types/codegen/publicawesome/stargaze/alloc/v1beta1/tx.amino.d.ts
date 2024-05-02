import { MsgCreateVestingAccount, MsgFundFairburnPool } from "./tx";
export declare const AminoConverter: {
    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateVestingAccount) => import("./tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateVestingAccountAmino) => MsgCreateVestingAccount;
    };
    "/publicawesome.stargaze.alloc.v1beta1.MsgFundFairburnPool": {
        aminoType: string;
        toAmino: (message: MsgFundFairburnPool) => import("./tx").MsgFundFairburnPoolAmino;
        fromAmino: (object: import("./tx").MsgFundFairburnPoolAmino) => MsgFundFairburnPool;
    };
};
