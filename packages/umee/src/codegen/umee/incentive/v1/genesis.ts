import { Params, ParamsSDKType, IncentiveProgram, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisState {
  params?: Params;
  nextProgramId: number;
  lastRewardsTime: Long;
  rewardTrackers: RewardTracker[];
  rewardAccumulators: RewardAccumulator[];
  upcomingPrograms: IncentiveProgram[];
  ongoingPrograms: IncentiveProgram[];
  completedPrograms: IncentiveProgram[];
  bonds: Bond[];
  accountUnbondings: AccountUnbondings[];
}
/** GenesisState defines the x/incentive module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  next_program_id: number;
  last_rewards_time: Long;
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
  uToken?: Coin;
}
/**
 * Bond tracks the amount of coins of one uToken denomination bonded
 * by a single account.
 */
export interface BondSDKType {
  account: string;
  uToken?: CoinSDKType;
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
  start: Long;
  end: Long;
  uToken?: Coin;
}
/**
 * Unbonding is a structure that tracks an in-progress token unbonding.
 * It tracks both its start time and end time, so that if the module's
 * unbonding time changes, the unbonding can complete at the earlier of
 * its original end time or its new one based on the new parameter.
 */
export interface UnbondingSDKType {
  start: Long;
  end: Long;
  uToken?: CoinSDKType;
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
    params: undefined,
    nextProgramId: 0,
    lastRewardsTime: Long.ZERO,
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextProgramId !== 0) {
      writer.uint32(16).uint32(message.nextProgramId);
    }
    if (!message.lastRewardsTime.isZero()) {
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
      lastRewardsTime: isSet(object.lastRewardsTime) ? Long.fromValue(object.lastRewardsTime) : Long.ZERO,
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
    message.lastRewardsTime = object.lastRewardsTime !== undefined && object.lastRewardsTime !== null ? Long.fromValue(object.lastRewardsTime) : Long.ZERO;
    message.rewardTrackers = object.rewardTrackers?.map(e => RewardTracker.fromPartial(e)) || [];
    message.rewardAccumulators = object.rewardAccumulators?.map(e => RewardAccumulator.fromPartial(e)) || [];
    message.upcomingPrograms = object.upcomingPrograms?.map(e => IncentiveProgram.fromPartial(e)) || [];
    message.ongoingPrograms = object.ongoingPrograms?.map(e => IncentiveProgram.fromPartial(e)) || [];
    message.completedPrograms = object.completedPrograms?.map(e => IncentiveProgram.fromPartial(e)) || [];
    message.bonds = object.bonds?.map(e => Bond.fromPartial(e)) || [];
    message.accountUnbondings = object.accountUnbondings?.map(e => AccountUnbondings.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBond(): Bond {
  return {
    account: "",
    uToken: undefined
  };
}
export const Bond = {
  encode(message: Bond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: RewardTracker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: RewardAccumulator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseUnbonding(): Unbonding {
  return {
    start: Long.ZERO,
    end: Long.ZERO,
    uToken: undefined
  };
}
export const Unbonding = {
  encode(message: Unbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.start.isZero()) {
      writer.uint32(8).int64(message.start);
    }
    if (!message.end.isZero()) {
      writer.uint32(16).int64(message.end);
    }
    if (message.uToken !== undefined) {
      Coin.encode(message.uToken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Unbonding {
    return {
      start: isSet(object.start) ? Long.fromValue(object.start) : Long.ZERO,
      end: isSet(object.end) ? Long.fromValue(object.end) : Long.ZERO,
      uToken: isSet(object.uToken) ? Coin.fromJSON(object.uToken) : undefined
    };
  },
  fromPartial(object: Partial<Unbonding>): Unbonding {
    const message = createBaseUnbonding();
    message.start = object.start !== undefined && object.start !== null ? Long.fromValue(object.start) : Long.ZERO;
    message.end = object.end !== undefined && object.end !== null ? Long.fromValue(object.end) : Long.ZERO;
    message.uToken = object.uToken !== undefined && object.uToken !== null ? Coin.fromPartial(object.uToken) : undefined;
    return message;
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
  encode(message: AccountUnbondings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};