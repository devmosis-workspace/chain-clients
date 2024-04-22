import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback, MsgReturnGrants } from "./tx";
export declare const AminoConverter: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateVestingAccount) => import("./tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateVestingAccountAmino) => MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
        aminoType: string;
        toAmino: (message: MsgCreatePermanentLockedAccount) => import("./tx").MsgCreatePermanentLockedAccountAmino;
        fromAmino: (object: import("./tx").MsgCreatePermanentLockedAccountAmino) => MsgCreatePermanentLockedAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreatePeriodicVestingAccount) => import("./tx").MsgCreatePeriodicVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreatePeriodicVestingAccountAmino) => MsgCreatePeriodicVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateClawbackVestingAccount) => import("./tx").MsgCreateClawbackVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateClawbackVestingAccountAmino) => MsgCreateClawbackVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgClawback": {
        aminoType: string;
        toAmino: (message: MsgClawback) => import("./tx").MsgClawbackAmino;
        fromAmino: (object: import("./tx").MsgClawbackAmino) => MsgClawback;
    };
    "/cosmos.vesting.v1beta1.MsgReturnGrants": {
        aminoType: string;
        toAmino: (message: MsgReturnGrants) => import("./tx").MsgReturnGrantsAmino;
        fromAmino: (object: import("./tx").MsgReturnGrantsAmino) => MsgReturnGrants;
    };
};
