import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimUSDXMintingReward, MsgClaimHardReward, MsgClaimDelegatorReward, MsgClaimSwapReward, MsgClaimSavingsReward, MsgClaimEarnReward } from "./tx";
export interface MsgClaimUSDXMintingRewardAminoType extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward";
    value: {
        sender: string;
        multiplier_name: string;
    };
}
export interface MsgClaimHardRewardAminoType extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimHardReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface MsgClaimDelegatorRewardAminoType extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimDelegatorReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface MsgClaimSwapRewardAminoType extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSwapReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface MsgClaimSavingsRewardAminoType extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSavingsReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface MsgClaimEarnRewardAminoType extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimEarnReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
        aminoType: string;
        toAmino: ({ sender, multiplierName }: MsgClaimUSDXMintingReward) => MsgClaimUSDXMintingRewardAminoType["value"];
        fromAmino: ({ sender, multiplier_name }: MsgClaimUSDXMintingRewardAminoType["value"]) => MsgClaimUSDXMintingReward;
    };
    "/kava.incentive.v1beta1.MsgClaimHardReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimHardReward) => MsgClaimHardRewardAminoType["value"];
        fromAmino: ({ sender, denoms_to_claim }: MsgClaimHardRewardAminoType["value"]) => MsgClaimHardReward;
    };
    "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimDelegatorReward) => MsgClaimDelegatorRewardAminoType["value"];
        fromAmino: ({ sender, denoms_to_claim }: MsgClaimDelegatorRewardAminoType["value"]) => MsgClaimDelegatorReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSwapReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimSwapReward) => MsgClaimSwapRewardAminoType["value"];
        fromAmino: ({ sender, denoms_to_claim }: MsgClaimSwapRewardAminoType["value"]) => MsgClaimSwapReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimSavingsReward) => MsgClaimSavingsRewardAminoType["value"];
        fromAmino: ({ sender, denoms_to_claim }: MsgClaimSavingsRewardAminoType["value"]) => MsgClaimSavingsReward;
    };
    "/kava.incentive.v1beta1.MsgClaimEarnReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimEarnReward) => MsgClaimEarnRewardAminoType["value"];
        fromAmino: ({ sender, denoms_to_claim }: MsgClaimEarnRewardAminoType["value"]) => MsgClaimEarnReward;
    };
};
