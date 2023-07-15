import { AminoMsg } from "@cosmjs/amino";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend } from "./tx";
export interface MsgSetWithdrawAddressAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: {
        delegator_address: string;
        withdraw_address: string;
    };
}
export interface MsgWithdrawDelegatorRewardAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: {
        delegator_address: string;
        validator_address: string;
    };
}
export interface MsgWithdrawValidatorCommissionAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgWithdrawValCommission";
    value: {
        validator_address: string;
    };
}
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: {
        amount: {
            denom: string;
            amount: string;
        }[];
        depositor: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/distribution/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            community_tax: string;
            base_proposer_reward: string;
            bonus_proposer_reward: string;
            withdraw_addr_enabled: boolean;
        };
    };
}
export interface MsgCommunityPoolSpendAminoType extends AminoMsg {
    type: "cosmos-sdk/distr/MsgCommunityPoolSpend";
    value: {
        authority: string;
        recipient: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: ({ delegatorAddress, withdrawAddress }: MsgSetWithdrawAddress) => MsgSetWithdrawAddressAminoType["value"];
        fromAmino: ({ delegator_address, withdraw_address }: MsgSetWithdrawAddressAminoType["value"]) => MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress }: MsgWithdrawDelegatorReward) => MsgWithdrawDelegatorRewardAminoType["value"];
        fromAmino: ({ delegator_address, validator_address }: MsgWithdrawDelegatorRewardAminoType["value"]) => MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: ({ validatorAddress }: MsgWithdrawValidatorCommission) => MsgWithdrawValidatorCommissionAminoType["value"];
        fromAmino: ({ validator_address }: MsgWithdrawValidatorCommissionAminoType["value"]) => MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ amount, depositor }: MsgFundCommunityPool) => MsgFundCommunityPoolAminoType["value"];
        fromAmino: ({ amount, depositor }: MsgFundCommunityPoolAminoType["value"]) => MsgFundCommunityPool;
    };
    "/cosmos.distribution.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount }: MsgCommunityPoolSpend) => MsgCommunityPoolSpendAminoType["value"];
        fromAmino: ({ authority, recipient, amount }: MsgCommunityPoolSpendAminoType["value"]) => MsgCommunityPoolSpend;
    };
};
