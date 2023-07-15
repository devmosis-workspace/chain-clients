import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  endTime: Long;
  delayed: boolean;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
  end_time: Long;
  delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccount {
  /**
   * from_address specifies the account to provide the funds and sign the
   * clawback request
   */
  fromAddress: string;
  /** to_address specifies the account to receive the funds */
  toAddress: string;
  /** start_time defines the time at which the vesting period begins */
  startTime: Long;
  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockupPeriods: Period[];
  /** vesting_periods defines the vesting schedule relative to the start_time */
  vestingPeriods: Period[];
  /**
   * merge specifies a creation mechanism for existing
   * ClawbackVestingAccounts. If true, merge this new grant into an existing
   * ClawbackVestingAccount, or create it if it does not exist. If false,
   * creates a new account. New grants to an existing account must be from the
   * same from_address.
   */
  merge: boolean;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time: Long;
  lockup_periods: PeriodSDKType[];
  vesting_periods: PeriodSDKType[];
  merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseSDKType {}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawback {
  /** funder_address is the address which funded the account */
  funderAddress: string;
  /** address is the address of the ClawbackVestingAccount to claw back from. */
  address: string;
  /**
   * dest_address specifies where the clawed-back tokens should be transferred
   * to. If empty, the tokens will be transferred back to the original funder of
   * the account.
   */
  destAddress: string;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackSDKType {
  funder_address: string;
  address: string;
  dest_address: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {}
function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: Long.ZERO,
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  encode(message: MsgCreateVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateVestingAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    message.delayed = object.delayed ?? false;
    return message;
  }
};
function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  encode(_: MsgCreateVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateVestingAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  }
};
function createBaseMsgCreateClawbackVestingAccount(): MsgCreateClawbackVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: Long.ZERO,
    lockupPeriods: [],
    vestingPeriods: [],
    merge: false
  };
}
export const MsgCreateClawbackVestingAccount = {
  encode(message: MsgCreateClawbackVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (!message.startTime.isZero()) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.lockupPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.merge === true) {
      writer.uint32(48).bool(message.merge);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateClawbackVestingAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.ZERO,
      lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e: any) => Period.fromJSON(e)) : [],
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : [],
      merge: isSet(object.merge) ? Boolean(object.merge) : false
    };
  },
  fromPartial(object: Partial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount {
    const message = createBaseMsgCreateClawbackVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Long.fromValue(object.startTime) : Long.ZERO;
    message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
    message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
    message.merge = object.merge ?? false;
    return message;
  }
};
function createBaseMsgCreateClawbackVestingAccountResponse(): MsgCreateClawbackVestingAccountResponse {
  return {};
}
export const MsgCreateClawbackVestingAccountResponse = {
  encode(_: MsgCreateClawbackVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateClawbackVestingAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse {
    const message = createBaseMsgCreateClawbackVestingAccountResponse();
    return message;
  }
};
function createBaseMsgClawback(): MsgClawback {
  return {
    funderAddress: "",
    address: "",
    destAddress: ""
  };
}
export const MsgClawback = {
  encode(message: MsgClawback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funderAddress !== "") {
      writer.uint32(10).string(message.funderAddress);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgClawback {
    return {
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      address: isSet(object.address) ? String(object.address) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgClawback>): MsgClawback {
    const message = createBaseMsgClawback();
    message.funderAddress = object.funderAddress ?? "";
    message.address = object.address ?? "";
    message.destAddress = object.destAddress ?? "";
    return message;
  }
};
function createBaseMsgClawbackResponse(): MsgClawbackResponse {
  return {};
}
export const MsgClawbackResponse = {
  encode(_: MsgClawbackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClawbackResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  }
};