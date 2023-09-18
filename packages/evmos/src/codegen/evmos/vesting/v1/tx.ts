import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodAmino, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { BinaryWriter } from "../../../binary";
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
  startTime: Timestamp;
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
export interface MsgCreateClawbackVestingAccountProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount";
  value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountAmino {
  /**
   * from_address specifies the account to provide the funds and sign the
   * clawback request
   */
  from_address: string;
  /** to_address specifies the account to receive the funds */
  to_address: string;
  /** start_time defines the time at which the vesting period begins */
  start_time?: TimestampAmino;
  /** lockup_periods defines the unlocking schedule relative to the start_time */
  lockup_periods: PeriodAmino[];
  /** vesting_periods defines the vesting schedule relative to the start_time */
  vesting_periods: PeriodAmino[];
  /**
   * merge specifies a the creation mechanism for existing
   * ClawbackVestingAccounts. If true, merge this new grant into an existing
   * ClawbackVestingAccount, or create it if it does not exist. If false,
   * creates a new account. New grants to an existing account must be from the
   * same from_address.
   */
  merge: boolean;
}
export interface MsgCreateClawbackVestingAccountAminoMsg {
  type: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount";
  value: MsgCreateClawbackVestingAccountAmino;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time: TimestampSDKType;
  lockup_periods: PeriodSDKType[];
  vesting_periods: PeriodSDKType[];
  merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {}
export interface MsgCreateClawbackVestingAccountResponseProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse";
  value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseAmino {}
export interface MsgCreateClawbackVestingAccountResponseAminoMsg {
  type: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse";
  value: MsgCreateClawbackVestingAccountResponseAmino;
}
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
export interface MsgClawbackProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgClawback";
  value: Uint8Array;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackAmino {
  /** funder_address is the address which funded the account */
  funder_address: string;
  /**
   * account_address is the address of the ClawbackVestingAccount to claw back
   * from.
   */
  account_address: string;
  /**
   * dest_address specifies where the clawed-back tokens should be transferred
   * to. If empty, the tokens will be transferred back to the original funder of
   * the account.
   */
  dest_address: string;
}
export interface MsgClawbackAminoMsg {
  type: "/evmos.vesting.v1.MsgClawback";
  value: MsgClawbackAmino;
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
export interface MsgClawbackResponseProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgClawbackResponse";
  value: Uint8Array;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseAmino {}
export interface MsgClawbackResponseAminoMsg {
  type: "/evmos.vesting.v1.MsgClawbackResponse";
  value: MsgClawbackResponseAmino;
}
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
export interface MsgUpdateVestingFunderProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder";
  value: Uint8Array;
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunderAmino {
  /** funder_address is the current funder address of the ClawbackVestingAccount */
  funder_address: string;
  /** new_funder_address is the new address to replace the existing funder_address */
  new_funder_address: string;
  /** vesting_address is the address of the ClawbackVestingAccount being updated */
  vesting_address: string;
}
export interface MsgUpdateVestingFunderAminoMsg {
  type: "/evmos.vesting.v1.MsgUpdateVestingFunder";
  value: MsgUpdateVestingFunderAmino;
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
export interface MsgUpdateVestingFunderResponseProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunderResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponseAmino {}
export interface MsgUpdateVestingFunderResponseAminoMsg {
  type: "/evmos.vesting.v1.MsgUpdateVestingFunderResponse";
  value: MsgUpdateVestingFunderResponseAmino;
}
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
export interface MsgConvertVestingAccountProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount";
  value: Uint8Array;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccountAmino {
  /** vesting_address is the address of the vesting account to convert */
  vesting_address: string;
}
export interface MsgConvertVestingAccountAminoMsg {
  type: "/evmos.vesting.v1.MsgConvertVestingAccount";
  value: MsgConvertVestingAccountAmino;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account */
export interface MsgConvertVestingAccountSDKType {
  vesting_address: string;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponse {}
export interface MsgConvertVestingAccountResponseProtoMsg {
  typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccountResponse";
  value: Uint8Array;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseAmino {}
export interface MsgConvertVestingAccountResponseAminoMsg {
  type: "/evmos.vesting.v1.MsgConvertVestingAccountResponse";
  value: MsgConvertVestingAccountResponseAmino;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseSDKType {}
function createBaseMsgCreateClawbackVestingAccount(): MsgCreateClawbackVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: Timestamp.fromPartial({}),
    lockupPeriods: [],
    vestingPeriods: [],
    merge: false
  };
}
export const MsgCreateClawbackVestingAccount = {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
  encode(message: MsgCreateClawbackVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateClawbackVestingAccountAmino): MsgCreateClawbackVestingAccount {
    return {
      fromAddress: object.from_address,
      toAddress: object.to_address,
      startTime: object.start_time,
      lockupPeriods: Array.isArray(object?.lockup_periods) ? object.lockup_periods.map((e: any) => Period.fromAmino(e)) : [],
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromAmino(e)) : [],
      merge: object.merge
    };
  },
  toAmino(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.to_address = message.toAddress;
    obj.start_time = message.startTime;
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
    obj.merge = message.merge;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClawbackVestingAccountAminoMsg): MsgCreateClawbackVestingAccount {
    return MsgCreateClawbackVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClawbackVestingAccountProtoMsg): MsgCreateClawbackVestingAccount {
    return MsgCreateClawbackVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreateClawbackVestingAccount): Uint8Array {
    return MsgCreateClawbackVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
      value: MsgCreateClawbackVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClawbackVestingAccountResponse(): MsgCreateClawbackVestingAccountResponse {
  return {};
}
export const MsgCreateClawbackVestingAccountResponse = {
  typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse",
  encode(_: MsgCreateClawbackVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateClawbackVestingAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse {
    const message = createBaseMsgCreateClawbackVestingAccountResponse();
    return message;
  },
  fromAmino(_: MsgCreateClawbackVestingAccountResponseAmino): MsgCreateClawbackVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateClawbackVestingAccountResponseAminoMsg): MsgCreateClawbackVestingAccountResponse {
    return MsgCreateClawbackVestingAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateClawbackVestingAccountResponseProtoMsg): MsgCreateClawbackVestingAccountResponse {
    return MsgCreateClawbackVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateClawbackVestingAccountResponse): Uint8Array {
    return MsgCreateClawbackVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse",
      value: MsgCreateClawbackVestingAccountResponse.encode(message).finish()
    };
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
  typeUrl: "/evmos.vesting.v1.MsgClawback",
  encode(message: MsgClawback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgClawbackAmino): MsgClawback {
    return {
      funderAddress: object.funder_address,
      accountAddress: object.account_address,
      destAddress: object.dest_address
    };
  },
  toAmino(message: MsgClawback): MsgClawbackAmino {
    const obj: any = {};
    obj.funder_address = message.funderAddress;
    obj.account_address = message.accountAddress;
    obj.dest_address = message.destAddress;
    return obj;
  },
  fromAminoMsg(object: MsgClawbackAminoMsg): MsgClawback {
    return MsgClawback.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClawbackProtoMsg): MsgClawback {
    return MsgClawback.decode(message.value);
  },
  toProto(message: MsgClawback): Uint8Array {
    return MsgClawback.encode(message).finish();
  },
  toProtoMsg(message: MsgClawback): MsgClawbackProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgClawback",
      value: MsgClawback.encode(message).finish()
    };
  }
};
function createBaseMsgClawbackResponse(): MsgClawbackResponse {
  return {};
}
export const MsgClawbackResponse = {
  typeUrl: "/evmos.vesting.v1.MsgClawbackResponse",
  encode(_: MsgClawbackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClawbackResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  },
  fromAmino(_: MsgClawbackResponseAmino): MsgClawbackResponse {
    return {};
  },
  toAmino(_: MsgClawbackResponse): MsgClawbackResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClawbackResponseAminoMsg): MsgClawbackResponse {
    return MsgClawbackResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse {
    return MsgClawbackResponse.decode(message.value);
  },
  toProto(message: MsgClawbackResponse): Uint8Array {
    return MsgClawbackResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgClawbackResponse",
      value: MsgClawbackResponse.encode(message).finish()
    };
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
  typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder",
  encode(message: MsgUpdateVestingFunder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgUpdateVestingFunderAmino): MsgUpdateVestingFunder {
    return {
      funderAddress: object.funder_address,
      newFunderAddress: object.new_funder_address,
      vestingAddress: object.vesting_address
    };
  },
  toAmino(message: MsgUpdateVestingFunder): MsgUpdateVestingFunderAmino {
    const obj: any = {};
    obj.funder_address = message.funderAddress;
    obj.new_funder_address = message.newFunderAddress;
    obj.vesting_address = message.vestingAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVestingFunderAminoMsg): MsgUpdateVestingFunder {
    return MsgUpdateVestingFunder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVestingFunderProtoMsg): MsgUpdateVestingFunder {
    return MsgUpdateVestingFunder.decode(message.value);
  },
  toProto(message: MsgUpdateVestingFunder): Uint8Array {
    return MsgUpdateVestingFunder.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVestingFunder): MsgUpdateVestingFunderProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder",
      value: MsgUpdateVestingFunder.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVestingFunderResponse(): MsgUpdateVestingFunderResponse {
  return {};
}
export const MsgUpdateVestingFunderResponse = {
  typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunderResponse",
  encode(_: MsgUpdateVestingFunderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateVestingFunderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateVestingFunderResponse>): MsgUpdateVestingFunderResponse {
    const message = createBaseMsgUpdateVestingFunderResponse();
    return message;
  },
  fromAmino(_: MsgUpdateVestingFunderResponseAmino): MsgUpdateVestingFunderResponse {
    return {};
  },
  toAmino(_: MsgUpdateVestingFunderResponse): MsgUpdateVestingFunderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVestingFunderResponseAminoMsg): MsgUpdateVestingFunderResponse {
    return MsgUpdateVestingFunderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVestingFunderResponseProtoMsg): MsgUpdateVestingFunderResponse {
    return MsgUpdateVestingFunderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateVestingFunderResponse): Uint8Array {
    return MsgUpdateVestingFunderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVestingFunderResponse): MsgUpdateVestingFunderResponseProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunderResponse",
      value: MsgUpdateVestingFunderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConvertVestingAccount(): MsgConvertVestingAccount {
  return {
    vestingAddress: ""
  };
}
export const MsgConvertVestingAccount = {
  typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount",
  encode(message: MsgConvertVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgConvertVestingAccountAmino): MsgConvertVestingAccount {
    return {
      vestingAddress: object.vesting_address
    };
  },
  toAmino(message: MsgConvertVestingAccount): MsgConvertVestingAccountAmino {
    const obj: any = {};
    obj.vesting_address = message.vestingAddress;
    return obj;
  },
  fromAminoMsg(object: MsgConvertVestingAccountAminoMsg): MsgConvertVestingAccount {
    return MsgConvertVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertVestingAccountProtoMsg): MsgConvertVestingAccount {
    return MsgConvertVestingAccount.decode(message.value);
  },
  toProto(message: MsgConvertVestingAccount): Uint8Array {
    return MsgConvertVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertVestingAccount): MsgConvertVestingAccountProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount",
      value: MsgConvertVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgConvertVestingAccountResponse(): MsgConvertVestingAccountResponse {
  return {};
}
export const MsgConvertVestingAccountResponse = {
  typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccountResponse",
  encode(_: MsgConvertVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgConvertVestingAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgConvertVestingAccountResponse>): MsgConvertVestingAccountResponse {
    const message = createBaseMsgConvertVestingAccountResponse();
    return message;
  },
  fromAmino(_: MsgConvertVestingAccountResponseAmino): MsgConvertVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgConvertVestingAccountResponse): MsgConvertVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertVestingAccountResponseAminoMsg): MsgConvertVestingAccountResponse {
    return MsgConvertVestingAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertVestingAccountResponseProtoMsg): MsgConvertVestingAccountResponse {
    return MsgConvertVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgConvertVestingAccountResponse): Uint8Array {
    return MsgConvertVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertVestingAccountResponse): MsgConvertVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccountResponse",
      value: MsgConvertVestingAccountResponse.encode(message).finish()
    };
  }
};