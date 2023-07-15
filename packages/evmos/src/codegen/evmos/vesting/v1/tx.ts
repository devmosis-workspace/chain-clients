import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccount {
  /**
   * from_address specifies the account to provide the funds and sign the
   * clawback request
   */
  fromAddress: string;
  /** to_address specifies the account to receive the funds */
  toAddress: string;
  /** start_time defines the time at which the vesting period begins */
  startTime?: Timestamp;
  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockupPeriods: Period[];
  /** vesting_periods defines the vesting schedule relative to the start_time */
  vestingPeriods: Period[];
  /**
   * merge specifies a the creation mechanism for existing
   * ClawbackVestingAccounts. If true, merge this new grant into an existing
   * ClawbackVestingAccount, or create it if it does not exist. If false,
   * creates a new account. New grants to an existing account must be from the
   * same from_address.
   */
  merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time?: TimestampSDKType;
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
  /**
   * account_address is the address of the ClawbackVestingAccount to claw back
   * from.
   */
  accountAddress: string;
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
  account_address: string;
  dest_address: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunder {
  /** funder_address is the current funder address of the ClawbackVestingAccount */
  funderAddress: string;
  /** new_funder_address is the new address to replace the existing funder_address */
  newFunderAddress: string;
  /** vesting_address is the address of the ClawbackVestingAccount being updated */
  vestingAddress: string;
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunderSDKType {
  funder_address: string;
  new_funder_address: string;
  vesting_address: string;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponse {}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponseSDKType {}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccount {
  /** vesting_address is the address of the vesting account to convert */
  vestingAddress: string;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccountSDKType {
  vesting_address: string;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponse {}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseSDKType {}
function createBaseMsgCreateClawbackVestingAccount(): MsgCreateClawbackVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: undefined,
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
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
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
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e: any) => Period.fromJSON(e)) : [],
      vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e: any) => Period.fromJSON(e)) : [],
      merge: isSet(object.merge) ? Boolean(object.merge) : false
    };
  },
  fromPartial(object: Partial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount {
    const message = createBaseMsgCreateClawbackVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
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
    accountAddress: "",
    destAddress: ""
  };
}
export const MsgClawback = {
  encode(message: MsgClawback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funderAddress !== "") {
      writer.uint32(10).string(message.funderAddress);
    }
    if (message.accountAddress !== "") {
      writer.uint32(18).string(message.accountAddress);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgClawback {
    return {
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgClawback>): MsgClawback {
    const message = createBaseMsgClawback();
    message.funderAddress = object.funderAddress ?? "";
    message.accountAddress = object.accountAddress ?? "";
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
function createBaseMsgUpdateVestingFunder(): MsgUpdateVestingFunder {
  return {
    funderAddress: "",
    newFunderAddress: "",
    vestingAddress: ""
  };
}
export const MsgUpdateVestingFunder = {
  encode(message: MsgUpdateVestingFunder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.funderAddress !== "") {
      writer.uint32(10).string(message.funderAddress);
    }
    if (message.newFunderAddress !== "") {
      writer.uint32(18).string(message.newFunderAddress);
    }
    if (message.vestingAddress !== "") {
      writer.uint32(26).string(message.vestingAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateVestingFunder {
    return {
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      newFunderAddress: isSet(object.newFunderAddress) ? String(object.newFunderAddress) : "",
      vestingAddress: isSet(object.vestingAddress) ? String(object.vestingAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateVestingFunder>): MsgUpdateVestingFunder {
    const message = createBaseMsgUpdateVestingFunder();
    message.funderAddress = object.funderAddress ?? "";
    message.newFunderAddress = object.newFunderAddress ?? "";
    message.vestingAddress = object.vestingAddress ?? "";
    return message;
  }
};
function createBaseMsgUpdateVestingFunderResponse(): MsgUpdateVestingFunderResponse {
  return {};
}
export const MsgUpdateVestingFunderResponse = {
  encode(_: MsgUpdateVestingFunderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateVestingFunderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateVestingFunderResponse>): MsgUpdateVestingFunderResponse {
    const message = createBaseMsgUpdateVestingFunderResponse();
    return message;
  }
};
function createBaseMsgConvertVestingAccount(): MsgConvertVestingAccount {
  return {
    vestingAddress: ""
  };
}
export const MsgConvertVestingAccount = {
  encode(message: MsgConvertVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vestingAddress !== "") {
      writer.uint32(10).string(message.vestingAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgConvertVestingAccount {
    return {
      vestingAddress: isSet(object.vestingAddress) ? String(object.vestingAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgConvertVestingAccount>): MsgConvertVestingAccount {
    const message = createBaseMsgConvertVestingAccount();
    message.vestingAddress = object.vestingAddress ?? "";
    return message;
  }
};
function createBaseMsgConvertVestingAccountResponse(): MsgConvertVestingAccountResponse {
  return {};
}
export const MsgConvertVestingAccountResponse = {
  encode(_: MsgConvertVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgConvertVestingAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConvertVestingAccountResponse>): MsgConvertVestingAccountResponse {
    const message = createBaseMsgConvertVestingAccountResponse();
    return message;
  }
};