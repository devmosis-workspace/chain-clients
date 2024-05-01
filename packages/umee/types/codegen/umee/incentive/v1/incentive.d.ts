import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the incentive module. */
export interface Params {
    /**
     * max_unbondings is the maximum amount of concurrent unbondings an address can have
     * of each bonded uToken denom. Zero is interpreted as no limit.
     */
    maxUnbondings: number;
    /** unbonding_duration is the unbonding duration (in seconds). */
    unbondingDuration: bigint;
    /**
     * emergency_unbond_fee is the portion of a bond that is paid when it is instantly
     * released using MsgEmergencyUnbond. For example, 0.01 is a 1% fee. Ranges 0-1.
     */
    emergencyUnbondFee: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/umee.incentive.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the incentive module. */
export interface ParamsAmino {
    /**
     * max_unbondings is the maximum amount of concurrent unbondings an address can have
     * of each bonded uToken denom. Zero is interpreted as no limit.
     */
    max_unbondings?: number;
    /** unbonding_duration is the unbonding duration (in seconds). */
    unbonding_duration?: string;
    /**
     * emergency_unbond_fee is the portion of a bond that is paid when it is instantly
     * released using MsgEmergencyUnbond. For example, 0.01 is a 1% fee. Ranges 0-1.
     */
    emergency_unbond_fee?: string;
}
export interface ParamsAminoMsg {
    type: "/umee.incentive.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the incentive module. */
export interface ParamsSDKType {
    max_unbondings: number;
    unbonding_duration: bigint;
    emergency_unbond_fee: string;
}
/**
 * IncentiveProgram defines a liquidity mining incentive program on a single
 * locked uToken denom that will run for a set amount of time.
 */
export interface IncentiveProgram {
    /**
     * ID uniquely identifies the incentive program after it has been created.
     * It is zero when the program is being proposed by governance, and is set
     * to its final value when the proposal passes.
     */
    ID: number;
    /**
     * start_time is the unix time (in seconds) at which the incentives begin.
     * If a program is passed after its intended start time, its start time
     * will be increased to the current time, with program duration unchanged.
     */
    startTime: bigint;
    /**
     * duration is the length of the incentive program from start time to
     * completion in seconds.
     */
    duration: bigint;
    /**
     * uToken is the incentivized uToken collateral denom. Suppliers who collateralize
     * this asset then bond it to the incentive module are eligible for this program's
     * rewards.
     */
    uToken: string;
    /**
     * funded indicates whether a program bas been funded. This can happen when
     * a program passes if funding from community fund, or any time before the
     * program's start time if funding with MsgSponsor. A program that reaches
     * its start time without being funded is cancelled.
     */
    funded: boolean;
    /**
     * total_rewards are total amount of rewards which can be distributed to
     * suppliers by this program. This is set to its final value when the program
     * is proposed by governance.
     */
    totalRewards: Coin;
    /**
     * remaining_rewards are total amount of this program's funded rewards
     * which have not yet been allocated to suppliers. This is zero until the
     * program is both passed by governance and funded, at which point it
     * starts at the same value as total_rewards then begins decreasing
     * to zero as the program runs to completion.
     */
    remainingRewards: Coin;
}
export interface IncentiveProgramProtoMsg {
    typeUrl: "/umee.incentive.v1.IncentiveProgram";
    value: Uint8Array;
}
/**
 * IncentiveProgram defines a liquidity mining incentive program on a single
 * locked uToken denom that will run for a set amount of time.
 */
export interface IncentiveProgramAmino {
    /**
     * ID uniquely identifies the incentive program after it has been created.
     * It is zero when the program is being proposed by governance, and is set
     * to its final value when the proposal passes.
     */
    ID?: number;
    /**
     * start_time is the unix time (in seconds) at which the incentives begin.
     * If a program is passed after its intended start time, its start time
     * will be increased to the current time, with program duration unchanged.
     */
    start_time?: string;
    /**
     * duration is the length of the incentive program from start time to
     * completion in seconds.
     */
    duration?: string;
    /**
     * uToken is the incentivized uToken collateral denom. Suppliers who collateralize
     * this asset then bond it to the incentive module are eligible for this program's
     * rewards.
     */
    uToken?: string;
    /**
     * funded indicates whether a program bas been funded. This can happen when
     * a program passes if funding from community fund, or any time before the
     * program's start time if funding with MsgSponsor. A program that reaches
     * its start time without being funded is cancelled.
     */
    funded?: boolean;
    /**
     * total_rewards are total amount of rewards which can be distributed to
     * suppliers by this program. This is set to its final value when the program
     * is proposed by governance.
     */
    total_rewards?: CoinAmino;
    /**
     * remaining_rewards are total amount of this program's funded rewards
     * which have not yet been allocated to suppliers. This is zero until the
     * program is both passed by governance and funded, at which point it
     * starts at the same value as total_rewards then begins decreasing
     * to zero as the program runs to completion.
     */
    remaining_rewards?: CoinAmino;
}
export interface IncentiveProgramAminoMsg {
    type: "/umee.incentive.v1.IncentiveProgram";
    value: IncentiveProgramAmino;
}
/**
 * IncentiveProgram defines a liquidity mining incentive program on a single
 * locked uToken denom that will run for a set amount of time.
 */
export interface IncentiveProgramSDKType {
    ID: number;
    start_time: bigint;
    duration: bigint;
    uToken: string;
    funded: boolean;
    total_rewards: CoinSDKType;
    remaining_rewards: CoinSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const IncentiveProgram: {
    typeUrl: string;
    encode(message: IncentiveProgram, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IncentiveProgram;
    fromPartial(object: Partial<IncentiveProgram>): IncentiveProgram;
    fromAmino(object: IncentiveProgramAmino): IncentiveProgram;
    toAmino(message: IncentiveProgram): IncentiveProgramAmino;
    fromAminoMsg(object: IncentiveProgramAminoMsg): IncentiveProgram;
    fromProtoMsg(message: IncentiveProgramProtoMsg): IncentiveProgram;
    toProto(message: IncentiveProgram): Uint8Array;
    toProtoMsg(message: IncentiveProgram): IncentiveProgramProtoMsg;
};
