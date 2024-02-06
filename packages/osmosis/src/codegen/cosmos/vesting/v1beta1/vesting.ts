import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  baseAccount?: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  /** Vesting end time, as unix timestamp (in seconds). */
  endTime: bigint;
}
export interface BaseVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount";
  value: Uint8Array;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountAmino {
  base_account?: BaseAccountAmino;
  original_vesting: CoinAmino[];
  delegated_free: CoinAmino[];
  delegated_vesting: CoinAmino[];
  /** Vesting end time, as unix timestamp (in seconds). */
  end_time?: string;
}
export interface BaseVestingAccountAminoMsg {
  type: "cosmos-sdk/BaseVestingAccount";
  value: BaseVestingAccountAmino;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
  base_account?: BaseAccountSDKType;
  original_vesting: CoinSDKType[];
  delegated_free: CoinSDKType[];
  delegated_vesting: CoinSDKType[];
  end_time: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  /** Vesting start time, as unix timestamp (in seconds). */
  startTime: bigint;
}
export interface ContinuousVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount";
  value: Uint8Array;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  /** Vesting start time, as unix timestamp (in seconds). */
  start_time?: string;
}
export interface ContinuousVestingAccountAminoMsg {
  type: "cosmos-sdk/ContinuousVestingAccount";
  value: ContinuousVestingAccountAmino;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
}
export interface DelayedVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount";
  value: Uint8Array;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
}
export interface DelayedVestingAccountAminoMsg {
  type: "cosmos-sdk/DelayedVestingAccount";
  value: DelayedVestingAccountAmino;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  /** Period duration in seconds. */
  length: bigint;
  amount: Coin[];
}
export interface PeriodProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.Period";
  value: Uint8Array;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodAmino {
  /** Period duration in seconds. */
  length?: string;
  amount: CoinAmino[];
}
export interface PeriodAminoMsg {
  type: "cosmos-sdk/Period";
  value: PeriodAmino;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
  length: bigint;
  amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  startTime: bigint;
  vestingPeriods: Period[];
}
export interface PeriodicVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount";
  value: Uint8Array;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  start_time?: string;
  vesting_periods: PeriodAmino[];
}
export interface PeriodicVestingAccountAminoMsg {
  type: "cosmos-sdk/PeriodicVestingAccount";
  value: PeriodicVestingAccountAmino;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  start_time: bigint;
  vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
  baseVestingAccount?: BaseVestingAccount;
}
export interface PermanentLockedAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount";
  value: Uint8Array;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
}
export interface PermanentLockedAccountAminoMsg {
  type: "cosmos-sdk/PermanentLockedAccount";
  value: PermanentLockedAccountAmino;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  /** funder_address specifies the account which can perform clawback. */
  funderAddress: string;
  startTime: bigint;
  /** unlocking schedule relative to the BaseVestingAccount start_time. */
  lockupPeriods: Period[];
  /** vesting (i.e. immunity from clawback) schedule relative to the BaseVestingAccount start_time. */
  vestingPeriods: Period[];
}
export interface ClawbackVestingAccountProtoMsg {
  typeUrl: "/cosmos.vesting.v1beta1.ClawbackVestingAccount";
  value: Uint8Array;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  /** funder_address specifies the account which can perform clawback. */
  funder_address?: string;
  start_time?: string;
  /** unlocking schedule relative to the BaseVestingAccount start_time. */
  lockup_periods?: PeriodAmino[];
  /** vesting (i.e. immunity from clawback) schedule relative to the BaseVestingAccount start_time. */
  vesting_periods?: PeriodAmino[];
}
export interface ClawbackVestingAccountAminoMsg {
  type: "cosmos-sdk/ClawbackVestingAccount";
  value: ClawbackVestingAccountAmino;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  funder_address: string;
  start_time: bigint;
  lockup_periods: PeriodSDKType[];
  vesting_periods: PeriodSDKType[];
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    baseAccount: undefined,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: BigInt(0)
  };
}
export const BaseVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
  encode(message: BaseVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },
  fromJSON(object: any): BaseVestingAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      originalVesting: Array.isArray(object?.originalVesting) ? object.originalVesting.map((e: any) => Coin.fromJSON(e)) : [],
      delegatedFree: Array.isArray(object?.delegatedFree) ? object.delegatedFree.map((e: any) => Coin.fromJSON(e)) : [],
      delegatedVesting: Array.isArray(object?.delegatedVesting) ? object.delegatedVesting.map((e: any) => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? BigInt(object.endTime.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<BaseVestingAccount>): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.originalVesting = object.originalVesting?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map(e => Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BaseVestingAccountAmino): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    message.originalVesting = object.original_vesting?.map(e => Coin.fromAmino(e)) || [];
    message.delegatedFree = object.delegated_free?.map(e => Coin.fromAmino(e)) || [];
    message.delegatedVesting = object.delegated_vesting?.map(e => Coin.fromAmino(e)) || [];
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    return message;
  },
  toAmino(message: BaseVestingAccount): BaseVestingAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    if (message.originalVesting) {
      obj.original_vesting = message.originalVesting.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.original_vesting = [];
    }
    if (message.delegatedFree) {
      obj.delegated_free = message.delegatedFree.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.delegated_free = [];
    }
    if (message.delegatedVesting) {
      obj.delegated_vesting = message.delegatedVesting.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.delegated_vesting = [];
    }
    obj.end_time = message.endTime ? message.endTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseVestingAccountAminoMsg): BaseVestingAccount {
    return BaseVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: BaseVestingAccount): BaseVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/BaseVestingAccount",
      value: BaseVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: BaseVestingAccountProtoMsg): BaseVestingAccount {
    return BaseVestingAccount.decode(message.value);
  },
  toProto(message: BaseVestingAccount): Uint8Array {
    return BaseVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: BaseVestingAccount): BaseVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
      value: BaseVestingAccount.encode(message).finish()
    };
  }
};
function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: BigInt(0)
  };
}
export const ContinuousVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
  encode(message: ContinuousVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    return writer;
  },
  fromJSON(object: any): ContinuousVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ContinuousVestingAccount>): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContinuousVestingAccountAmino): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    return message;
  },
  toAmino(message: ContinuousVestingAccount): ContinuousVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContinuousVestingAccountAminoMsg): ContinuousVestingAccount {
    return ContinuousVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/ContinuousVestingAccount",
      value: ContinuousVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: ContinuousVestingAccountProtoMsg): ContinuousVestingAccount {
    return ContinuousVestingAccount.decode(message.value);
  },
  toProto(message: ContinuousVestingAccount): Uint8Array {
    return ContinuousVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
      value: ContinuousVestingAccount.encode(message).finish()
    };
  }
};
function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    baseVestingAccount: undefined
  };
}
export const DelayedVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
  encode(message: DelayedVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelayedVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
    };
  },
  fromPartial(object: Partial<DelayedVestingAccount>): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    return message;
  },
  fromAmino(object: DelayedVestingAccountAmino): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message: DelayedVestingAccount): DelayedVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelayedVestingAccountAminoMsg): DelayedVestingAccount {
    return DelayedVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: DelayedVestingAccount): DelayedVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/DelayedVestingAccount",
      value: DelayedVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: DelayedVestingAccountProtoMsg): DelayedVestingAccount {
    return DelayedVestingAccount.decode(message.value);
  },
  toProto(message: DelayedVestingAccount): Uint8Array {
    return DelayedVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: DelayedVestingAccount): DelayedVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
      value: DelayedVestingAccount.encode(message).finish()
    };
  }
};
function createBasePeriod(): Period {
  return {
    length: BigInt(0),
    amount: []
  };
}
export const Period = {
  typeUrl: "/cosmos.vesting.v1beta1.Period",
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.length !== BigInt(0)) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Period {
    return {
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt(0),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Period>): Period {
    const message = createBasePeriod();
    message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PeriodAmino): Period {
    const message = createBasePeriod();
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Period): PeriodAmino {
    const obj: any = {};
    obj.length = message.length ? message.length.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: PeriodAminoMsg): Period {
    return Period.fromAmino(object.value);
  },
  toAminoMsg(message: Period): PeriodAminoMsg {
    return {
      type: "cosmos-sdk/Period",
      value: Period.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodProtoMsg): Period {
    return Period.decode(message.value);
  },
  toProto(message: Period): Uint8Array {
    return Period.encode(message).finish();
  },
  toProtoMsg(message: Period): PeriodProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.Period",
      value: Period.encode(message).finish()
    };
  }
};
function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: BigInt(0),
    vestingPeriods: []
  };
}
export const PeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
  encode(message: PeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(16).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PeriodicVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PeriodicVestingAccount>): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PeriodicVestingAccountAmino): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    message.vestingPeriods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PeriodicVestingAccount): PeriodicVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAminoMsg(object: PeriodicVestingAccountAminoMsg): PeriodicVestingAccount {
    return PeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/PeriodicVestingAccount",
      value: PeriodicVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodicVestingAccountProtoMsg): PeriodicVestingAccount {
    return PeriodicVestingAccount.decode(message.value);
  },
  toProto(message: PeriodicVestingAccount): Uint8Array {
    return PeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
      value: PeriodicVestingAccount.encode(message).finish()
    };
  }
};
function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    baseVestingAccount: undefined
  };
}
export const PermanentLockedAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
  encode(message: PermanentLockedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PermanentLockedAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined
    };
  },
  fromPartial(object: Partial<PermanentLockedAccount>): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    return message;
  },
  fromAmino(object: PermanentLockedAccountAmino): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    return message;
  },
  toAmino(message: PermanentLockedAccount): PermanentLockedAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: PermanentLockedAccountAminoMsg): PermanentLockedAccount {
    return PermanentLockedAccount.fromAmino(object.value);
  },
  toAminoMsg(message: PermanentLockedAccount): PermanentLockedAccountAminoMsg {
    return {
      type: "cosmos-sdk/PermanentLockedAccount",
      value: PermanentLockedAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: PermanentLockedAccountProtoMsg): PermanentLockedAccount {
    return PermanentLockedAccount.decode(message.value);
  },
  toProto(message: PermanentLockedAccount): Uint8Array {
    return PermanentLockedAccount.encode(message).finish();
  },
  toProtoMsg(message: PermanentLockedAccount): PermanentLockedAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
      value: PermanentLockedAccount.encode(message).finish()
    };
  }
};
function createBaseClawbackVestingAccount(): ClawbackVestingAccount {
  return {
    baseVestingAccount: undefined,
    funderAddress: "",
    startTime: BigInt(0),
    lockupPeriods: [],
    vestingPeriods: []
  };
}
export const ClawbackVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.ClawbackVestingAccount",
  encode(message: ClawbackVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.funderAddress !== "") {
      writer.uint32(18).string(message.funderAddress);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.lockupPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClawbackVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e: any) => Period.fromJSON(e)) : [],
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ClawbackVestingAccount>): ClawbackVestingAccount {
    const message = createBaseClawbackVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.funderAddress = object.funderAddress ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClawbackVestingAccountAmino): ClawbackVestingAccount {
    const message = createBaseClawbackVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    if (object.funder_address !== undefined && object.funder_address !== null) {
      message.funderAddress = object.funder_address;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    message.lockupPeriods = object.lockup_periods?.map(e => Period.fromAmino(e)) || [];
    message.vestingPeriods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClawbackVestingAccount): ClawbackVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    obj.funder_address = message.funderAddress;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    if (message.lockupPeriods) {
      obj.lockup_periods = message.lockupPeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.lockup_periods = [];
    }
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClawbackVestingAccountAminoMsg): ClawbackVestingAccount {
    return ClawbackVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ClawbackVestingAccount): ClawbackVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/ClawbackVestingAccount",
      value: ClawbackVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: ClawbackVestingAccountProtoMsg): ClawbackVestingAccount {
    return ClawbackVestingAccount.decode(message.value);
  },
  toProto(message: ClawbackVestingAccount): Uint8Array {
    return ClawbackVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: ClawbackVestingAccount): ClawbackVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.ClawbackVestingAccount",
      value: ClawbackVestingAccount.encode(message).finish()
    };
  }
};