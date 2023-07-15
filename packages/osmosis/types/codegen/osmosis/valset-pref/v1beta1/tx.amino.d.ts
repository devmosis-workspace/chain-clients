import { AminoMsg } from "@cosmjs/amino";
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards, MsgDelegateBondedTokens } from "./tx";
export interface MsgSetValidatorSetPreferenceAminoType extends AminoMsg {
    type: "osmosis/valset-pref/MsgSetValidatorSetPreference";
    value: {
        delegator: string;
        preferences: {
            val_oper_address: string;
            weight: string;
        }[];
    };
}
export interface MsgDelegateToValidatorSetAminoType extends AminoMsg {
    type: "osmosis/valset-pref/MsgDelegateToValidatorSet";
    value: {
        delegator: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgUndelegateFromValidatorSetAminoType extends AminoMsg {
    type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet";
    value: {
        delegator: string;
        coin: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgRedelegateValidatorSetAminoType extends AminoMsg {
    type: "osmosis/valsetpref/redelegate-validator-set";
    value: {
        delegator: string;
        preferences: {
            val_oper_address: string;
            weight: string;
        }[];
    };
}
export interface MsgWithdrawDelegationRewardsAminoType extends AminoMsg {
    type: "osmosis/valset-pref/MsgWithdrawDelegationRewards";
    value: {
        delegator: string;
    };
}
export interface MsgDelegateBondedTokensAminoType extends AminoMsg {
    type: "osmosis/valsetpref/delegate-bonded-tokens";
    value: {
        delegator: string;
        lockID: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
        aminoType: string;
        toAmino: ({ delegator, preferences }: MsgSetValidatorSetPreference) => MsgSetValidatorSetPreferenceAminoType["value"];
        fromAmino: ({ delegator, preferences }: MsgSetValidatorSetPreferenceAminoType["value"]) => MsgSetValidatorSetPreference;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, coin }: MsgDelegateToValidatorSet) => MsgDelegateToValidatorSetAminoType["value"];
        fromAmino: ({ delegator, coin }: MsgDelegateToValidatorSetAminoType["value"]) => MsgDelegateToValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, coin }: MsgUndelegateFromValidatorSet) => MsgUndelegateFromValidatorSetAminoType["value"];
        fromAmino: ({ delegator, coin }: MsgUndelegateFromValidatorSetAminoType["value"]) => MsgUndelegateFromValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
        aminoType: string;
        toAmino: ({ delegator, preferences }: MsgRedelegateValidatorSet) => MsgRedelegateValidatorSetAminoType["value"];
        fromAmino: ({ delegator, preferences }: MsgRedelegateValidatorSetAminoType["value"]) => MsgRedelegateValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
        aminoType: string;
        toAmino: ({ delegator }: MsgWithdrawDelegationRewards) => MsgWithdrawDelegationRewardsAminoType["value"];
        fromAmino: ({ delegator }: MsgWithdrawDelegationRewardsAminoType["value"]) => MsgWithdrawDelegationRewards;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
        aminoType: string;
        toAmino: ({ delegator, lockID }: MsgDelegateBondedTokens) => MsgDelegateBondedTokensAminoType["value"];
        fromAmino: ({ delegator, lockID }: MsgDelegateBondedTokensAminoType["value"]) => MsgDelegateBondedTokens;
    };
};
