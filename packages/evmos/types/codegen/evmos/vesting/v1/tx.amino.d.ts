import { MsgCreateClawbackVestingAccount, MsgClawback, MsgUpdateVestingFunder, MsgConvertVestingAccount } from "./tx";
export declare const AminoConverter: {
    "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateClawbackVestingAccount) => import("./tx").MsgCreateClawbackVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateClawbackVestingAccountAmino) => MsgCreateClawbackVestingAccount;
    };
    "/evmos.vesting.v1.MsgClawback": {
        aminoType: string;
        toAmino: (message: MsgClawback) => import("./tx").MsgClawbackAmino;
        fromAmino: (object: import("./tx").MsgClawbackAmino) => MsgClawback;
    };
    "/evmos.vesting.v1.MsgUpdateVestingFunder": {
        aminoType: string;
        toAmino: (message: MsgUpdateVestingFunder) => import("./tx").MsgUpdateVestingFunderAmino;
        fromAmino: (object: import("./tx").MsgUpdateVestingFunderAmino) => MsgUpdateVestingFunder;
    };
    "/evmos.vesting.v1.MsgConvertVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgConvertVestingAccount) => import("./tx").MsgConvertVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgConvertVestingAccountAmino) => MsgConvertVestingAccount;
    };
};
