import { BaseVestingAccount, BaseVestingAccountSDKType, Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccount {
  /**
   * base_vesting_account implements the VestingAccount interface. It contains
   * all the necessary fields needed for any vesting account implementation
   */
  baseVestingAccount?: BaseVestingAccount;
  /** funder_address specifies the account which can perform clawback */
  funderAddress: string;
  /** start_time defines the time at which the vesting period begins */
  startTime?: Timestamp;
  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockupPeriods: Period[];
  /** vesting_periods defines the vesting schedule relative to the start_time */
  vestingPeriods: Period[];
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
  start_time?: TimestampSDKType;
  lockup_periods: PeriodSDKType[];
  vesting_periods: PeriodSDKType[];
}
function createBaseClawbackVestingAccount(): ClawbackVestingAccount {
  return {
    baseVestingAccount: undefined,
    funderAddress: "",
    startTime: undefined,
    lockupPeriods: [],
    vestingPeriods: []
  };
}
export const ClawbackVestingAccount = {
  encode(message: ClawbackVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.funderAddress !== "") {
      writer.uint32(18).string(message.funderAddress);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
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
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e: any) => Period.fromJSON(e)) : [],
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ClawbackVestingAccount>): ClawbackVestingAccount {
    const message = createBaseClawbackVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.funderAddress = object.funderAddress ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }
};