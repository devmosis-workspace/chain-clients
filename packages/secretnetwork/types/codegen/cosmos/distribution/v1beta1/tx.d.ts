import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressSDKType {
    delegator_address: string;
    withdraw_address: string;
}
/**
 * MsgEnableAutoRestake enables auto-restaking for a
 * a delegator-validator pair.
 */
export interface MsgSetAutoRestake {
    delegatorAddress: string;
    validatorAddress: string;
    enabled: boolean;
}
/**
 * MsgEnableAutoRestake enables auto-restaking for a
 * a delegator-validator pair.
 */
export interface MsgSetAutoRestakeSDKType {
    delegator_address: string;
    validator_address: string;
    enabled: boolean;
}
/** MsgAutoRestakeResponse defines the Msg/AutoRestakeResponse response type. */
export interface MsgSetAutoRestakeResponse {
}
/** MsgAutoRestakeResponse defines the Msg/AutoRestakeResponse response type. */
export interface MsgSetAutoRestakeResponseSDKType {
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseSDKType {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
    delegator_address: string;
    validator_address: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
    validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseSDKType {
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolSDKType {
    amount: CoinSDKType[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {
}
export declare const MsgSetWithdrawAddress: {
    encode(message: MsgSetWithdrawAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetWithdrawAddress;
    fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
};
export declare const MsgSetAutoRestake: {
    encode(message: MsgSetAutoRestake, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetAutoRestake;
    fromPartial(object: Partial<MsgSetAutoRestake>): MsgSetAutoRestake;
};
export declare const MsgSetAutoRestakeResponse: {
    encode(_: MsgSetAutoRestakeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetAutoRestakeResponse;
    fromPartial(_: Partial<MsgSetAutoRestakeResponse>): MsgSetAutoRestakeResponse;
};
export declare const MsgSetWithdrawAddressResponse: {
    encode(_: MsgSetWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetWithdrawAddressResponse;
    fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
};
export declare const MsgWithdrawDelegatorReward: {
    encode(message: MsgWithdrawDelegatorReward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawDelegatorReward;
    fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    encode(_: MsgWithdrawDelegatorRewardResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawDelegatorRewardResponse;
    fromPartial(_: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
};
export declare const MsgWithdrawValidatorCommission: {
    encode(message: MsgWithdrawValidatorCommission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgWithdrawValidatorCommission;
    fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    encode(_: MsgWithdrawValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgWithdrawValidatorCommissionResponse;
    fromPartial(_: Partial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse;
};
export declare const MsgFundCommunityPool: {
    encode(message: MsgFundCommunityPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgFundCommunityPool;
    fromPartial(object: Partial<MsgFundCommunityPool>): MsgFundCommunityPool;
};
export declare const MsgFundCommunityPoolResponse: {
    encode(_: MsgFundCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgFundCommunityPoolResponse;
    fromPartial(_: Partial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
};
