import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
export interface MsgCreateValidatorAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateValidator";
    value: {
        description: {
            moniker: string;
            identity: string;
            website: string;
            security_contact: string;
            details: string;
        };
        commission: {
            rate: string;
            max_rate: string;
            max_change_rate: string;
        };
        min_self_delegation: string;
        delegator_address: string;
        validator_address: string;
        pubkey: {
            type_url: string;
            value: Uint8Array;
        };
        value: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgEditValidatorAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgEditValidator";
    value: {
        description: {
            moniker: string;
            identity: string;
            website: string;
            security_contact: string;
            details: string;
        };
        validator_address: string;
        commission_rate: string;
        min_self_delegation: string;
    };
}
export interface MsgDelegateAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgDelegate";
    value: {
        delegator_address: string;
        validator_address: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgBeginRedelegateAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgBeginRedelegate";
    value: {
        delegator_address: string;
        validator_src_address: string;
        validator_dst_address: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgUndelegateAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUndelegate";
    value: {
        delegator_address: string;
        validator_address: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgCancelUnbondingDelegationAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCancelUnbondingDelegation";
    value: {
        delegator_address: string;
        validator_address: string;
        amount: {
            denom: string;
            amount: string;
        };
        creation_height: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/x/staking/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            unbonding_time: {
                seconds: string;
                nanos: number;
            };
            max_validators: number;
            max_entries: number;
            historical_entries: number;
            bond_denom: string;
            min_commission_rate: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: MsgCreateValidator) => MsgCreateValidatorAminoType["value"];
        fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: MsgCreateValidatorAminoType["value"]) => MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: string;
        toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: MsgEditValidator) => MsgEditValidatorAminoType["value"];
        fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: MsgEditValidatorAminoType["value"]) => MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount }: MsgDelegate) => MsgDelegateAminoType["value"];
        fromAmino: ({ delegator_address, validator_address, amount }: MsgDelegateAminoType["value"]) => MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: MsgBeginRedelegate) => MsgBeginRedelegateAminoType["value"];
        fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: MsgBeginRedelegateAminoType["value"]) => MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount }: MsgUndelegate) => MsgUndelegateAminoType["value"];
        fromAmino: ({ delegator_address, validator_address, amount }: MsgUndelegateAminoType["value"]) => MsgUndelegate;
    };
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: string;
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: MsgCancelUnbondingDelegation) => MsgCancelUnbondingDelegationAminoType["value"];
        fromAmino: ({ delegator_address, validator_address, amount, creation_height }: MsgCancelUnbondingDelegationAminoType["value"]) => MsgCancelUnbondingDelegation;
    };
    "/cosmos.staking.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
