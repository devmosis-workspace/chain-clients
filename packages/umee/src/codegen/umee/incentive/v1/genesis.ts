import { Params, ParamsAmino, ParamsSDKType, IncentiveProgram, IncentiveProgramAmino, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisState {
  params: Params;
  nextProgramId: number;
  lastRewardsTime: bigint;
  rewardTrackers: RewardTracker[];
  rewardAccumulators: RewardAccumulator[];
  upcomingPrograms: IncentiveProgram[];
  ongoingPrograms: IncentiveProgram[];
  completedPrograms: IncentiveProgram[];
  bonds: Bond[];
  accountUnbondings: AccountUnbondings[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/umee.incentive.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  next_program_id?: number;
  last_rewards_time?: string;
  reward_trackers?: RewardTrackerAmino[];
  reward_accumulators?: RewardAccumulatorAmino[];
  upcoming_programs?: IncentiveProgramAmino[];
  ongoing_programs?: IncentiveProgramAmino[];
  completed_programs?: IncentiveProgramAmino[];
  bonds?: BondAmino[];
  account_unbondings?: AccountUnbondingsAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/umee.incentive.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  next_program_id: number;
  last_rewards_time: bigint;
  reward_trackers: RewardTrackerSDKType[];
  reward_accumulators: RewardAccumulatorSDKType[];
  upcoming_programs: IncentiveProgramSDKType[];
  ongoing_programs: IncentiveProgramSDKType[];
  completed_programs: IncentiveProgramSDKType[];
  bonds: BondSDKType[];
  account_unbondings: AccountUnbondingsSDKType[];
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface Bond {
  account: string;
  uToken: Coin;
}
export interface BondProtoMsg {
  typeUrl: "/umee.incentive.v1.Bond";
  value: Uint8Array;
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface BondAmino {
  account?: string;
  uToken?: CoinAmino;
}
export interface BondAminoMsg {
  type: "/umee.incentive.v1.Bond";
  value: BondAmino;
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface BondSDKType {
  account: string;
  uToken: CoinSDKType;
}
/**
 * RewardTracker tracks the value of a given lock denom's RewardAccumulator at the
 * last time a specific account calculated pending rewards for it. When calculating
 * available rewards, this value is used to determine the difference between the current
 * RewardAccumulator for a uToken and the last value at which the user updated bonds or claimed
 * tokens. Their pending rewards increase by only the rewards accrued in that time period.
 */
export interface RewardTracker {
  account: string;
  uToken: string;
  rewards: DecCoin[];
}
export interface RewardTrackerProtoMsg {
  typeUrl: "/umee.incentive.v1.RewardTracker";
  value: Uint8Array;
}
/**
 * RewardTracker tracks the value of a given lock denom's RewardAccumulator at the
 * last time a specific account calculated pending rewards for it. When calculating
 * available rewards, this value is used to determine the difference between the current
 * RewardAccumulator for a uToken and the last value at which the user updated bonds or claimed
 * tokens. Their pending rewards increase by only the rewards accrued in that time period.
 */
export interface RewardTrackerAmino {
  account?: string;
  uToken?: string;
  rewards?: DecCoinAmino[];
}
export interface RewardTrackerAminoMsg {
  type: "/umee.incentive.v1.RewardTracker";
  value: RewardTrackerAmino;
}
/**
 * RewardTracker tracks the value of a given lock denom's RewardAccumulator at the
 * last time a specific account calculated pending rewards for it. When calculating
 * available rewards, this value is used to determine the difference between the current
 * RewardAccumulator for a uToken and the last value at which the user updated bonds or claimed
 * tokens. Their pending rewards increase by only the rewards accrued in that time period.
 */
export interface RewardTrackerSDKType {
  account: string;
  uToken: string;
  rewards: DecCoinSDKType[];
}
/**
 * RewardAccumulator is a global reward tracking struct that indicates the amount
 * of rewards that a reference amount of a bonded uToken denom would have accumulated
 * if it was bonded since genesis. To prevent rounding issues, the reference amount is
 * 10^exponent of the uToken's smallest possible amount, generally matching the exponent
 * of the associated base token registered with the leverage module.
 */
export interface RewardAccumulator {
  uToken: string;
  rewards: DecCoin[];
  exponent: number;
}
export interface RewardAccumulatorProtoMsg {
  typeUrl: "/umee.incentive.v1.RewardAccumulator";
  value: Uint8Array;
}
/**
 * RewardAccumulator is a global reward tracking struct that indicates the amount
 * of rewards that a reference amount of a bonded uToken denom would have accumulated
 * if it was bonded since genesis. To prevent rounding issues, the reference amount is
 * 10^exponent of the uToken's smallest possible amount, generally matching the exponent
 * of the associated base token registered with the leverage module.
 */
export interface RewardAccumulatorAmino {
  uToken?: string;
  rewards?: DecCoinAmino[];
  exponent?: number;
}
export interface RewardAccumulatorAminoMsg {
  type: "/umee.incentive.v1.RewardAccumulator";
  value: RewardAccumulatorAmino;
}
/**
 * RewardAccumulator is a global reward tracking struct that indicates the amount
 * of rewards that a reference amount of a bonded uToken denom would have accumulated
 * if it was bonded since genesis. To prevent rounding issues, the reference amount is
 * 10^exponent of the uToken's smallest possible amount, generally matching the exponent
 * of the associated base token registered with the leverage module.
 */
export interface RewardAccumulatorSDKType {
  uToken: string;
  rewards: DecCoinSDKType[];
  exponent: number;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface Unbonding {
  start: bigint;
  end: bigint;
  uToken: Coin;
}
export interface UnbondingProtoMsg {
  typeUrl: "/umee.incentive.v1.Unbonding";
  value: Uint8Array;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface UnbondingAmino {
  start?: string;
  end?: string;
  uToken?: CoinAmino;
}
export interface UnbondingAminoMsg {
  type: "/umee.incentive.v1.Unbonding";
  value: UnbondingAmino;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface UnbondingSDKType {
  start: bigint;
  end: bigint;
  uToken: CoinSDKType;
}
/**
 * AccountUnbondings is a structure that is used to store all of an account's unbondings
 * for a single bonded uToken denom in both KVStore and genesis state.
 */
export interface AccountUnbondings {
  account: string;
  uToken: string;
  unbondings: Unbonding[];
}
export interface AccountUnbondingsProtoMsg {
  typeUrl: "/umee.incentive.v1.AccountUnbondings";
  value: Uint8Array;
}
/**
 * AccountUnbondings is a structure that is used to store all of an account's unbondings
 * for a single bonded uToken denom in both KVStore and genesis state.
 */
export interface AccountUnbondingsAmino {
  account?: string;
  uToken?: string;
  unbondings?: UnbondingAmino[];
}
export interface AccountUnbondingsAminoMsg {
  type: "/umee.incentive.v1.AccountUnbondings";
  value: AccountUnbondingsAmino;
}
/**
 * AccountUnbondings is a structure that is used to store all of an account's unbondings
 * for a single bonded uToken denom in both KVStore and genesis state.
 */
export interface AccountUnbondingsSDKType {
  account: string;
  uToken: string;
  unbondings: UnbondingSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nextProgramId: 0,
    lastRewardsTime: BigInt(0),
    rewardTrackers: [],
    rewardAccumulators: [],
    upcomingPrograms: [],
    ongoingPrograms: [],
    completedPrograms: [],
    bonds: [],
    accountUnbondings: []
  };
}
export const GenesisState = {
  typeUrl: "/umee.incentive.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextProgramId !== 0) {
      writer.uint32(16).uint32(message.nextProgramId);
    }
    if (message.lastRewardsTime !== BigInt(0)) {
      writer.uint32(24).int64(message.lastRewardsTime);
    }
    for (const v of message.rewardTrackers) {
      RewardTracker.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.rewardAccumulators) {
      RewardAccumulator.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.upcomingPrograms) {
      IncentiveProgram.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ongoingPrograms) {
      IncentiveProgram.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.completedPrograms) {
      IncentiveProgram.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.bonds) {
      Bond.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.accountUnbondings) {
      AccountUnbondings.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      nextProgramId: isSet(object.nextProgramId) ? Number(object.nextProgramId) : 0,
      lastRewardsTime: isSet(object.lastRewardsTime) ? BigInt(object.lastRewardsTime.toString()) : BigInt(0),
      rewardTrackers: Array.isArray(object?.rewardTrackers) ? object.rewardTrackers.map((e: any) => RewardTracker.fromJSON(e)) : [],
      rewardAccumulators: Array.isArray(object?.rewardAccumulators) ? object.rewardAccumulators.map((e: any) => RewardAccumulator.fromJSON(e)) : [],
      upcomingPrograms: Array.isArray(object?.upcomingPrograms) ? object.upcomingPrograms.map((e: any) => IncentiveProgram.fromJSON(e)) : [],
      ongoingPrograms: Array.isArray(object?.ongoingPrograms) ? object.ongoingPrograms.map((e: any) => IncentiveProgram.fromJSON(e)) : [],
      completedPrograms: Array.isArray(object?.completedPrograms) ? object.completedPrograms.map((e: any) => IncentiveProgram.fromJSON(e)) : [],
      bonds: Array.isArray(object?.bonds) ? object.bonds.map((e: any) => Bond.fromJSON(e)) : [],
      accountUnbondings: Array.isArray(object?.accountUnbondings) ? object.accountUnbondings.map((e: any) => AccountUnbondings.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nextProgramId = object.nextProgramId ?? 0;
    message.lastRewardsTime = object.lastRewardsTime !== undefined && object.lastRewardsTime !== null ? BigInt(object.lastRewardsTime.toString()) : BigInt(0);
    message.rewardTrackers = object.rewardTrackers?.map(e => RewardTracker.fromPartial(e)) || [];
    message.rewardAccumulators = object.rewardAccumulators?.map(e => RewardAccumulator.fromPartial(e)) || [];
    message.upcomingPrograms = object.upcomingPrograms?.map(e => IncentiveProgram.fromPartial(e)) || [];
    message.ongoingPrograms = object.ongoingPrograms?.map(e => IncentiveProgram.fromPartial(e)) || [];
    message.completedPrograms = object.completedPrograms?.map(e => IncentiveProgram.fromPartial(e)) || [];
    message.bonds = object.bonds?.map(e => Bond.fromPartial(e)) || [];
    message.accountUnbondings = object.accountUnbondings?.map(e => AccountUnbondings.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.next_program_id !== undefined && object.next_program_id !== null) {
      message.nextProgramId = object.next_program_id;
    }
    if (object.last_rewards_time !== undefined && object.last_rewards_time !== null) {
      message.lastRewardsTime = BigInt(object.last_rewards_time);
    }
    message.rewardTrackers = object.reward_trackers?.map(e => RewardTracker.fromAmino(e)) || [];
    message.rewardAccumulators = object.reward_accumulators?.map(e => RewardAccumulator.fromAmino(e)) || [];
    message.upcomingPrograms = object.upcoming_programs?.map(e => IncentiveProgram.fromAmino(e)) || [];
    message.ongoingPrograms = object.ongoing_programs?.map(e => IncentiveProgram.fromAmino(e)) || [];
    message.completedPrograms = object.completed_programs?.map(e => IncentiveProgram.fromAmino(e)) || [];
    message.bonds = object.bonds?.map(e => Bond.fromAmino(e)) || [];
    message.accountUnbondings = object.account_unbondings?.map(e => AccountUnbondings.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_program_id = message.nextProgramId === 0 ? undefined : message.nextProgramId;
    obj.last_rewards_time = message.lastRewardsTime !== BigInt(0) ? message.lastRewardsTime.toString() : undefined;
    if (message.rewardTrackers) {
      obj.reward_trackers = message.rewardTrackers.map(e => e ? RewardTracker.toAmino(e) : undefined);
    } else {
      obj.reward_trackers = message.rewardTrackers;
    }
    if (message.rewardAccumulators) {
      obj.reward_accumulators = message.rewardAccumulators.map(e => e ? RewardAccumulator.toAmino(e) : undefined);
    } else {
      obj.reward_accumulators = message.rewardAccumulators;
    }
    if (message.upcomingPrograms) {
      obj.upcoming_programs = message.upcomingPrograms.map(e => e ? IncentiveProgram.toAmino(e) : undefined);
    } else {
      obj.upcoming_programs = message.upcomingPrograms;
    }
    if (message.ongoingPrograms) {
      obj.ongoing_programs = message.ongoingPrograms.map(e => e ? IncentiveProgram.toAmino(e) : undefined);
    } else {
      obj.ongoing_programs = message.ongoingPrograms;
    }
    if (message.completedPrograms) {
      obj.completed_programs = message.completedPrograms.map(e => e ? IncentiveProgram.toAmino(e) : undefined);
    } else {
      obj.completed_programs = message.completedPrograms;
    }
    if (message.bonds) {
      obj.bonds = message.bonds.map(e => e ? Bond.toAmino(e) : undefined);
    } else {
      obj.bonds = message.bonds;
    }
    if (message.accountUnbondings) {
      obj.account_unbondings = message.accountUnbondings.map(e => e ? AccountUnbondings.toAmino(e) : undefined);
    } else {
      obj.account_unbondings = message.accountUnbondings;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseBond(): Bond {
  return {
    account: "",
    uToken: Coin.fromPartial({})
  };
}
export const Bond = {
  typeUrl: "/umee.incentive.v1.Bond",
  encode(message: Bond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.uToken !== undefined) {
      Coin.encode(message.uToken, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Bond {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      uToken: isSet(object.uToken) ? Coin.fromJSON(object.uToken) : undefined
    };
  },
  fromPartial(object: Partial<Bond>): Bond {
    const message = createBaseBond();
    message.account = object.account ?? "";
    message.uToken = object.uToken !== undefined && object.uToken !== null ? Coin.fromPartial(object.uToken) : undefined;
    return message;
  },
  fromAmino(object: BondAmino): Bond {
    const message = createBaseBond();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.uToken !== undefined && object.uToken !== null) {
      message.uToken = Coin.fromAmino(object.uToken);
    }
    return message;
  },
  toAmino(message: Bond): BondAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.uToken = message.uToken ? Coin.toAmino(message.uToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: BondAminoMsg): Bond {
    return Bond.fromAmino(object.value);
  },
  fromProtoMsg(message: BondProtoMsg): Bond {
    return Bond.decode(message.value);
  },
  toProto(message: Bond): Uint8Array {
    return Bond.encode(message).finish();
  },
  toProtoMsg(message: Bond): BondProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.Bond",
      value: Bond.encode(message).finish()
    };
  }
};
function createBaseRewardTracker(): RewardTracker {
  return {
    account: "",
    uToken: "",
    rewards: []
  };
}
export const RewardTracker = {
  typeUrl: "/umee.incentive.v1.RewardTracker",
  encode(message: RewardTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.uToken !== "") {
      writer.uint32(18).string(message.uToken);
    }
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RewardTracker {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      uToken: isSet(object.uToken) ? String(object.uToken) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<RewardTracker>): RewardTracker {
    const message = createBaseRewardTracker();
    message.account = object.account ?? "";
    message.uToken = object.uToken ?? "";
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RewardTrackerAmino): RewardTracker {
    const message = createBaseRewardTracker();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.uToken !== undefined && object.uToken !== null) {
      message.uToken = object.uToken;
    }
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardTracker): RewardTrackerAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.uToken = message.uToken === "" ? undefined : message.uToken;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: RewardTrackerAminoMsg): RewardTracker {
    return RewardTracker.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardTrackerProtoMsg): RewardTracker {
    return RewardTracker.decode(message.value);
  },
  toProto(message: RewardTracker): Uint8Array {
    return RewardTracker.encode(message).finish();
  },
  toProtoMsg(message: RewardTracker): RewardTrackerProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.RewardTracker",
      value: RewardTracker.encode(message).finish()
    };
  }
};
function createBaseRewardAccumulator(): RewardAccumulator {
  return {
    uToken: "",
    rewards: [],
    exponent: 0
  };
}
export const RewardAccumulator = {
  typeUrl: "/umee.incentive.v1.RewardAccumulator",
  encode(message: RewardAccumulator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uToken !== "") {
      writer.uint32(10).string(message.uToken);
    }
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }
    return writer;
  },
  fromJSON(object: any): RewardAccumulator {
    return {
      uToken: isSet(object.uToken) ? String(object.uToken) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0
    };
  },
  fromPartial(object: Partial<RewardAccumulator>): RewardAccumulator {
    const message = createBaseRewardAccumulator();
    message.uToken = object.uToken ?? "";
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.exponent = object.exponent ?? 0;
    return message;
  },
  fromAmino(object: RewardAccumulatorAmino): RewardAccumulator {
    const message = createBaseRewardAccumulator();
    if (object.uToken !== undefined && object.uToken !== null) {
      message.uToken = object.uToken;
    }
    message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    return message;
  },
  toAmino(message: RewardAccumulator): RewardAccumulatorAmino {
    const obj: any = {};
    obj.uToken = message.uToken === "" ? undefined : message.uToken;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    return obj;
  },
  fromAminoMsg(object: RewardAccumulatorAminoMsg): RewardAccumulator {
    return RewardAccumulator.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardAccumulatorProtoMsg): RewardAccumulator {
    return RewardAccumulator.decode(message.value);
  },
  toProto(message: RewardAccumulator): Uint8Array {
    return RewardAccumulator.encode(message).finish();
  },
  toProtoMsg(message: RewardAccumulator): RewardAccumulatorProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.RewardAccumulator",
      value: RewardAccumulator.encode(message).finish()
    };
  }
};
function createBaseUnbonding(): Unbonding {
  return {
    start: BigInt(0),
    end: BigInt(0),
    uToken: Coin.fromPartial({})
  };
}
export const Unbonding = {
  typeUrl: "/umee.incentive.v1.Unbonding",
  encode(message: Unbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== BigInt(0)) {
      writer.uint32(8).int64(message.start);
    }
    if (message.end !== BigInt(0)) {
      writer.uint32(16).int64(message.end);
    }
    if (message.uToken !== undefined) {
      Coin.encode(message.uToken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Unbonding {
    return {
      start: isSet(object.start) ? BigInt(object.start.toString()) : BigInt(0),
      end: isSet(object.end) ? BigInt(object.end.toString()) : BigInt(0),
      uToken: isSet(object.uToken) ? Coin.fromJSON(object.uToken) : undefined
    };
  },
  fromPartial(object: Partial<Unbonding>): Unbonding {
    const message = createBaseUnbonding();
    message.start = object.start !== undefined && object.start !== null ? BigInt(object.start.toString()) : BigInt(0);
    message.end = object.end !== undefined && object.end !== null ? BigInt(object.end.toString()) : BigInt(0);
    message.uToken = object.uToken !== undefined && object.uToken !== null ? Coin.fromPartial(object.uToken) : undefined;
    return message;
  },
  fromAmino(object: UnbondingAmino): Unbonding {
    const message = createBaseUnbonding();
    if (object.start !== undefined && object.start !== null) {
      message.start = BigInt(object.start);
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = BigInt(object.end);
    }
    if (object.uToken !== undefined && object.uToken !== null) {
      message.uToken = Coin.fromAmino(object.uToken);
    }
    return message;
  },
  toAmino(message: Unbonding): UnbondingAmino {
    const obj: any = {};
    obj.start = message.start !== BigInt(0) ? message.start.toString() : undefined;
    obj.end = message.end !== BigInt(0) ? message.end.toString() : undefined;
    obj.uToken = message.uToken ? Coin.toAmino(message.uToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: UnbondingAminoMsg): Unbonding {
    return Unbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingProtoMsg): Unbonding {
    return Unbonding.decode(message.value);
  },
  toProto(message: Unbonding): Uint8Array {
    return Unbonding.encode(message).finish();
  },
  toProtoMsg(message: Unbonding): UnbondingProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.Unbonding",
      value: Unbonding.encode(message).finish()
    };
  }
};
function createBaseAccountUnbondings(): AccountUnbondings {
  return {
    account: "",
    uToken: "",
    unbondings: []
  };
}
export const AccountUnbondings = {
  typeUrl: "/umee.incentive.v1.AccountUnbondings",
  encode(message: AccountUnbondings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.uToken !== "") {
      writer.uint32(18).string(message.uToken);
    }
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccountUnbondings {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      uToken: isSet(object.uToken) ? String(object.uToken) : "",
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => Unbonding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AccountUnbondings>): AccountUnbondings {
    const message = createBaseAccountUnbondings();
    message.account = object.account ?? "";
    message.uToken = object.uToken ?? "";
    message.unbondings = object.unbondings?.map(e => Unbonding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AccountUnbondingsAmino): AccountUnbondings {
    const message = createBaseAccountUnbondings();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.uToken !== undefined && object.uToken !== null) {
      message.uToken = object.uToken;
    }
    message.unbondings = object.unbondings?.map(e => Unbonding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AccountUnbondings): AccountUnbondingsAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.uToken = message.uToken === "" ? undefined : message.uToken;
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? Unbonding.toAmino(e) : undefined);
    } else {
      obj.unbondings = message.unbondings;
    }
    return obj;
  },
  fromAminoMsg(object: AccountUnbondingsAminoMsg): AccountUnbondings {
    return AccountUnbondings.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountUnbondingsProtoMsg): AccountUnbondings {
    return AccountUnbondings.decode(message.value);
  },
  toProto(message: AccountUnbondings): Uint8Array {
    return AccountUnbondings.encode(message).finish();
  },
  toProtoMsg(message: AccountUnbondings): AccountUnbondingsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.AccountUnbondings",
      value: AccountUnbondings.encode(message).finish()
    };
  }
};