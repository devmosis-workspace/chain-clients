import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgDonateAllVestingTokens } from "./tx";
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
    "/cosmos.vesting.v1beta1.MsgDonateAllVestingTokens": {
        aminoType: string;
        toAmino: (message: MsgDonateAllVestingTokens) => import("./tx").MsgDonateAllVestingTokensAmino;
        fromAmino: (object: import("./tx").MsgDonateAllVestingTokensAmino) => MsgDonateAllVestingTokens;
    };
};
