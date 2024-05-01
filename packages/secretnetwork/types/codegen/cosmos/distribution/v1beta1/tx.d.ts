import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}
export interface MsgSetWithdrawAddressProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressAmino {
    delegator_address?: string;
    withdraw_address?: string;
}
export interface MsgSetWithdrawAddressAminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: MsgSetWithdrawAddressAmino;
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
export interface MsgSetAutoRestakeProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetAutoRestake";
    value: Uint8Array;
}
/**
 * MsgEnableAutoRestake enables auto-restaking for a
 * a delegator-validator pair.
 */
export interface MsgSetAutoRestakeAmino {
    delegator_address?: string;
    validator_address?: string;
    enabled?: boolean;
}
export interface MsgSetAutoRestakeAminoMsg {
    type: "cosmos-sdk/MsgSetAutoRestake";
    value: MsgSetAutoRestakeAmino;
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
export interface MsgSetAutoRestakeResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetAutoRestakeResponse";
    value: Uint8Array;
}
/** MsgAutoRestakeResponse defines the Msg/AutoRestakeResponse response type. */
export interface MsgSetAutoRestakeResponseAmino {
}
export interface MsgSetAutoRestakeResponseAminoMsg {
    type: "cosmos-sdk/MsgSetAutoRestakeResponse";
    value: MsgSetAutoRestakeResponseAmino;
}
/** MsgAutoRestakeResponse defines the Msg/AutoRestakeResponse response type. */
export interface MsgSetAutoRestakeResponseSDKType {
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {
}
export interface MsgSetWithdrawAddressResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
    value: Uint8Array;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseAmino {
}
export interface MsgSetWithdrawAddressResponseAminoMsg {
    type: "cosmos-sdk/MsgSetWithdrawAddressResponse";
    value: MsgSetWithdrawAddressResponseAmino;
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
export interface MsgWithdrawDelegatorRewardProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardAmino {
    delegator_address?: string;
    validator_address?: string;
}
export interface MsgWithdrawDelegatorRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: MsgWithdrawDelegatorRewardAmino;
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
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
    value: Uint8Array;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseAmino {
}
export interface MsgWithdrawDelegatorRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse";
    value: MsgWithdrawDelegatorRewardResponseAmino;
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
export interface MsgWithdrawValidatorCommissionProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionAmino {
    validator_address?: string;
}
export interface MsgWithdrawValidatorCommissionAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: MsgWithdrawValidatorCommissionAmino;
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
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
    value: Uint8Array;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseAmino {
}
export interface MsgWithdrawValidatorCommissionResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse";
    value: MsgWithdrawValidatorCommissionResponseAmino;
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
export interface MsgFundCommunityPoolProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    value: Uint8Array;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolAmino {
    amount?: CoinAmino[];
    depositor?: string;
}
export interface MsgFundCommunityPoolAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: MsgFundCommunityPoolAmino;
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
export interface MsgFundCommunityPoolResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
    value: Uint8Array;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseAmino {
}
export interface MsgFundCommunityPoolResponseAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPoolResponse";
    value: MsgFundCommunityPoolResponseAmino;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {
}
export declare const MsgSetWithdrawAddress: {
    typeUrl: string;
    encode(message: MsgSetWithdrawAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetWithdrawAddress;
    fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
    fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress;
    toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress;
    toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress;
    toProto(message: MsgSetWithdrawAddress): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg;
};
export declare const MsgSetAutoRestake: {
    typeUrl: string;
    encode(message: MsgSetAutoRestake, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetAutoRestake;
    fromPartial(object: Partial<MsgSetAutoRestake>): MsgSetAutoRestake;
    fromAmino(object: MsgSetAutoRestakeAmino): MsgSetAutoRestake;
    toAmino(message: MsgSetAutoRestake): MsgSetAutoRestakeAmino;
    fromAminoMsg(object: MsgSetAutoRestakeAminoMsg): MsgSetAutoRestake;
    toAminoMsg(message: MsgSetAutoRestake): MsgSetAutoRestakeAminoMsg;
    fromProtoMsg(message: MsgSetAutoRestakeProtoMsg): MsgSetAutoRestake;
    toProto(message: MsgSetAutoRestake): Uint8Array;
    toProtoMsg(message: MsgSetAutoRestake): MsgSetAutoRestakeProtoMsg;
};
export declare const MsgSetAutoRestakeResponse: {
    typeUrl: string;
    encode(_: MsgSetAutoRestakeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetAutoRestakeResponse;
    fromPartial(_: Partial<MsgSetAutoRestakeResponse>): MsgSetAutoRestakeResponse;
    fromAmino(_: MsgSetAutoRestakeResponseAmino): MsgSetAutoRestakeResponse;
    toAmino(_: MsgSetAutoRestakeResponse): MsgSetAutoRestakeResponseAmino;
    fromAminoMsg(object: MsgSetAutoRestakeResponseAminoMsg): MsgSetAutoRestakeResponse;
    toAminoMsg(message: MsgSetAutoRestakeResponse): MsgSetAutoRestakeResponseAminoMsg;
    fromProtoMsg(message: MsgSetAutoRestakeResponseProtoMsg): MsgSetAutoRestakeResponse;
    toProto(message: MsgSetAutoRestakeResponse): Uint8Array;
    toProtoMsg(message: MsgSetAutoRestakeResponse): MsgSetAutoRestakeResponseProtoMsg;
};
export declare const MsgSetWithdrawAddressResponse: {
    typeUrl: string;
    encode(_: MsgSetWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetWithdrawAddressResponse;
    fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
    fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse;
    toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse;
    toAminoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse;
    toProto(message: MsgSetWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg;
};
export declare const MsgWithdrawDelegatorReward: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawDelegatorReward;
    fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
    fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward;
    toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward;
    toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward;
    toProto(message: MsgWithdrawDelegatorReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawDelegatorRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawDelegatorRewardResponse;
    fromPartial(_: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
    fromAmino(_: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse;
    toAmino(_: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse;
    toAminoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse;
    toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg;
};
export declare const MsgWithdrawValidatorCommission: {
    typeUrl: string;
    encode(message: MsgWithdrawValidatorCommission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgWithdrawValidatorCommission;
    fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission;
    fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission;
    toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission;
    toAminoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission;
    toProto(message: MsgWithdrawValidatorCommission): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawValidatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgWithdrawValidatorCommissionResponse;
    fromPartial(_: Partial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse;
    fromAmino(_: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse;
    toAmino(_: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse;
    toAminoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse;
    toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg;
};
export declare const MsgFundCommunityPool: {
    typeUrl: string;
    encode(message: MsgFundCommunityPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgFundCommunityPool;
    fromPartial(object: Partial<MsgFundCommunityPool>): MsgFundCommunityPool;
    fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool;
    toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino;
    fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool;
    toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool;
    toProto(message: MsgFundCommunityPool): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg;
};
export declare const MsgFundCommunityPoolResponse: {
    typeUrl: string;
    encode(_: MsgFundCommunityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgFundCommunityPoolResponse;
    fromPartial(_: Partial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
    fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse;
    toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino;
    fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse;
    toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse;
    toProto(message: MsgFundCommunityPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg;
};
