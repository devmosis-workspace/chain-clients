import { BaseAccount, BaseAccountSDKType } from "../../cosmos/auth/v1beta1/auth";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  baseAccount?: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  endTime: Long;
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
  end_time: Long;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  startTime: Long;
  length: Long;
  amount: Coin[];
  actionType: number;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
  start_time: Long;
  length: Long;
  amount: CoinSDKType[];
  action_type: number;
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  vestingPeriods: Period[];
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  vesting_periods: PeriodSDKType[];
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    baseAccount: undefined,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: Long.ZERO
  };
}
export const BaseVestingAccount = {
  encode(message: BaseVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.endTime.isZero()) {
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
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO
    };
  },
  fromPartial(object: Partial<BaseVestingAccount>): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.originalVesting = object.originalVesting?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map(e => Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map(e => Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    return message;
  }
};
function createBasePeriod(): Period {
  return {
    startTime: Long.ZERO,
    length: Long.ZERO,
    amount: [],
    actionType: 0
  };
}
export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startTime.isZero()) {
      writer.uint32(8).int64(message.startTime);
    }
    if (!message.length.isZero()) {
      writer.uint32(16).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.actionType !== 0) {
      writer.uint32(32).int32(message.actionType);
    }
    return writer;
  },
  fromJSON(object: any): Period {
    return {
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.ZERO,
      length: isSet(object.length) ? Long.fromValue(object.length) : Long.ZERO,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      actionType: isSet(object.actionType) ? Number(object.actionType) : 0
    };
  },
  fromPartial(object: Partial<Period>): Period {
    const message = createBasePeriod();
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.ZERO;
    message.length = object.length !== undefined && object.length !== null ? Long.fromValue(object.length) : Long.ZERO;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.actionType = object.actionType ?? 0;
    return message;
  }
};
function createBaseStridePeriodicVestingAccount(): StridePeriodicVestingAccount {
  return {
    baseVestingAccount: undefined,
    vestingPeriods: []
  };
}
export const StridePeriodicVestingAccount = {
  encode(message: StridePeriodicVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StridePeriodicVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<StridePeriodicVestingAccount>): StridePeriodicVestingAccount {
    const message = createBaseStridePeriodicVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }
};