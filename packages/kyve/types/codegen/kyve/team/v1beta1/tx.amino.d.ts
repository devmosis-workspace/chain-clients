import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimUnlocked, MsgClawback, MsgCreateTeamVestingAccount, MsgClaimAuthorityRewards, MsgClaimAccountRewards } from "./tx";
export interface MsgClaimUnlockedAminoType extends AminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimUnlocked";
    value: {
        authority: string;
        id: string;
        amount: string;
        recipient: string;
    };
}
export interface MsgClawbackAminoType extends AminoMsg {
    type: "/kyve.team.v1beta1.MsgClawback";
    value: {
        authority: string;
        id: string;
        clawback: string;
    };
}
export interface MsgCreateTeamVestingAccountAminoType extends AminoMsg {
    type: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount";
    value: {
        authority: string;
        total_allocation: string;
        commencement: string;
    };
}
export interface MsgClaimAuthorityRewardsAminoType extends AminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimAuthorityRewards";
    value: {
        authority: string;
        amount: string;
        recipient: string;
    };
}
export interface MsgClaimAccountRewardsAminoType extends AminoMsg {
    type: "/kyve.team.v1beta1.MsgClaimAccountRewards";
    value: {
        authority: string;
        id: string;
        amount: string;
        recipient: string;
    };
}
export declare const AminoConverter: {
    "/kyve.team.v1beta1.MsgClaimUnlocked": {
        aminoType: string;
        toAmino: ({ authority, id, amount, recipient }: MsgClaimUnlocked) => MsgClaimUnlockedAminoType["value"];
        fromAmino: ({ authority, id, amount, recipient }: MsgClaimUnlockedAminoType["value"]) => MsgClaimUnlocked;
    };
    "/kyve.team.v1beta1.MsgClawback": {
        aminoType: string;
        toAmino: ({ authority, id, clawback }: MsgClawback) => MsgClawbackAminoType["value"];
        fromAmino: ({ authority, id, clawback }: MsgClawbackAminoType["value"]) => MsgClawback;
    };
    "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
        aminoType: string;
        toAmino: ({ authority, totalAllocation, commencement }: MsgCreateTeamVestingAccount) => MsgCreateTeamVestingAccountAminoType["value"];
        fromAmino: ({ authority, total_allocation, commencement }: MsgCreateTeamVestingAccountAminoType["value"]) => MsgCreateTeamVestingAccount;
    };
    "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
        aminoType: string;
        toAmino: ({ authority, amount, recipient }: MsgClaimAuthorityRewards) => MsgClaimAuthorityRewardsAminoType["value"];
        fromAmino: ({ authority, amount, recipient }: MsgClaimAuthorityRewardsAminoType["value"]) => MsgClaimAuthorityRewards;
    };
    "/kyve.team.v1beta1.MsgClaimAccountRewards": {
        aminoType: string;
        toAmino: ({ authority, id, amount, recipient }: MsgClaimAccountRewards) => MsgClaimAccountRewardsAminoType["value"];
        fromAmino: ({ authority, id, amount, recipient }: MsgClaimAccountRewardsAminoType["value"]) => MsgClaimAccountRewards;
    };
};
