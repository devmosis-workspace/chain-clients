import { MsgClaimUnlocked, MsgClawback, MsgCreateTeamVestingAccount, MsgClaimAuthorityRewards, MsgClaimAccountRewards } from "./tx";
export declare const AminoConverter: {
    "/kyve.team.v1beta1.MsgClaimUnlocked": {
        aminoType: string;
        toAmino: (message: MsgClaimUnlocked) => import("./tx").MsgClaimUnlockedAmino;
        fromAmino: (object: import("./tx").MsgClaimUnlockedAmino) => MsgClaimUnlocked;
    };
    "/kyve.team.v1beta1.MsgClawback": {
        aminoType: string;
        toAmino: (message: MsgClawback) => import("./tx").MsgClawbackAmino;
        fromAmino: (object: import("./tx").MsgClawbackAmino) => MsgClawback;
    };
    "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateTeamVestingAccount) => import("./tx").MsgCreateTeamVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateTeamVestingAccountAmino) => MsgCreateTeamVestingAccount;
    };
    "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
        aminoType: string;
        toAmino: (message: MsgClaimAuthorityRewards) => import("./tx").MsgClaimAuthorityRewardsAmino;
        fromAmino: (object: import("./tx").MsgClaimAuthorityRewardsAmino) => MsgClaimAuthorityRewards;
    };
    "/kyve.team.v1beta1.MsgClaimAccountRewards": {
        aminoType: string;
        toAmino: (message: MsgClaimAccountRewards) => import("./tx").MsgClaimAccountRewardsAmino;
        fromAmino: (object: import("./tx").MsgClaimAccountRewardsAmino) => MsgClaimAccountRewards;
    };
};
