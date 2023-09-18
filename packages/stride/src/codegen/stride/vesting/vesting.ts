import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../cosmos/auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  baseAccount: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  endTime: bigint;
}
export interface BaseVestingAccountProtoMsg {
  typeUrl: "/stride.vesting.BaseVestingAccount";
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
  end_time: string;
}
export interface BaseVestingAccountAminoMsg {
  type: "/stride.vesting.BaseVestingAccount";
  value: BaseVestingAccountAmino;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
  base_account: BaseAccountSDKType;
  original_vesting: CoinSDKType[];
  delegated_free: CoinSDKType[];
  delegated_vesting: CoinSDKType[];
  end_time: bigint;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  startTime: bigint;
  length: bigint;
  amount: Coin[];
  actionType: number;
}
export interface PeriodProtoMsg {
  typeUrl: "/stride.vesting.Period";
  value: Uint8Array;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodAmino {
  start_time: string;
  length: string;
  amount: CoinAmino[];
  action_type: number;
}
export interface PeriodAminoMsg {
  type: "/stride.vesting.Period";
  value: PeriodAmino;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
  start_time: bigint;
  length: bigint;
  amount: CoinSDKType[];
  action_type: number;
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccount {
  baseVestingAccount: BaseVestingAccount;
  vestingPeriods: Period[];
}
export interface StridePeriodicVestingAccountProtoMsg {
  typeUrl: "/stride.vesting.StridePeriodicVestingAccount";
  value: Uint8Array;
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  vesting_periods: PeriodAmino[];
}
export interface StridePeriodicVestingAccountAminoMsg {
  type: "/stride.vesting.StridePeriodicVestingAccount";
  value: StridePeriodicVestingAccountAmino;
}
/**
 * StridePeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface StridePeriodicVestingAccountSDKType {
  base_vesting_account: BaseVestingAccountSDKType;
  vesting_periods: PeriodSDKType[];
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    baseAccount: BaseAccount.fromPartial({}),
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: BigInt(0)
  };
}
export const BaseVestingAccount = {
  typeUrl: "/stride.vesting.BaseVestingAccount",
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
    return {
      baseAccount: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      originalVesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e: any) => Coin.fromAmino(e)) : [],
      delegatedFree: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e: any) => Coin.fromAmino(e)) : [],
      delegatedVesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e: any) => Coin.fromAmino(e)) : [],
      endTime: BigInt(object.end_time)
    };
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
  fromProtoMsg(message: BaseVestingAccountProtoMsg): BaseVestingAccount {
    return BaseVestingAccount.decode(message.value);
  },
  toProto(message: BaseVestingAccount): Uint8Array {
    return BaseVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: BaseVestingAccount): BaseVestingAccountProtoMsg {
    return {
      typeUrl: "/stride.vesting.BaseVestingAccount",
      value: BaseVestingAccount.encode(message).finish()
    };
  }
};
function createBasePeriod(): Period {
  return {
    startTime: BigInt(0),
    length: BigInt(0),
    amount: [],
    actionType: 0
  };
}
export const Period = {
  typeUrl: "/stride.vesting.Period",
  encode(message: Period, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTime !== BigInt(0)) {
      writer.uint32(8).int64(message.startTime);
    }
    if (message.length !== BigInt(0)) {
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
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt(0),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      actionType: isSet(object.actionType) ? Number(object.actionType) : 0
    };
  },
  fromPartial(object: Partial<Period>): Period {
    const message = createBasePeriod();
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.actionType = object.actionType ?? 0;
    return message;
  },
  fromAmino(object: PeriodAmino): Period {
    return {
      startTime: BigInt(object.start_time),
      length: BigInt(object.length),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      actionType: object.action_type
    };
  },
  toAmino(message: Period): PeriodAmino {
    const obj: any = {};
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    obj.length = message.length ? message.length.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.action_type = message.actionType;
    return obj;
  },
  fromAminoMsg(object: PeriodAminoMsg): Period {
    return Period.fromAmino(object.value);
  },
  fromProtoMsg(message: PeriodProtoMsg): Period {
    return Period.decode(message.value);
  },
  toProto(message: Period): Uint8Array {
    return Period.encode(message).finish();
  },
  toProtoMsg(message: Period): PeriodProtoMsg {
    return {
      typeUrl: "/stride.vesting.Period",
      value: Period.encode(message).finish()
    };
  }
};
function createBaseStridePeriodicVestingAccount(): StridePeriodicVestingAccount {
  return {
    baseVestingAccount: BaseVestingAccount.fromPartial({}),
    vestingPeriods: []
  };
}
export const StridePeriodicVestingAccount = {
  typeUrl: "/stride.vesting.StridePeriodicVestingAccount",
  encode(message: StridePeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: StridePeriodicVestingAccountAmino): StridePeriodicVestingAccount {
    return {
      baseVestingAccount: object?.base_vesting_account ? BaseVestingAccount.fromAmino(object.base_vesting_account) : undefined,
      vestingPeriods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromAmino(e)) : []
    };
  },
  toAmino(message: StridePeriodicVestingAccount): StridePeriodicVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAminoMsg(object: StridePeriodicVestingAccountAminoMsg): StridePeriodicVestingAccount {
    return StridePeriodicVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: StridePeriodicVestingAccountProtoMsg): StridePeriodicVestingAccount {
    return StridePeriodicVestingAccount.decode(message.value);
  },
  toProto(message: StridePeriodicVestingAccount): Uint8Array {
    return StridePeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: StridePeriodicVestingAccount): StridePeriodicVestingAccountProtoMsg {
    return {
      typeUrl: "/stride.vesting.StridePeriodicVestingAccount",
      value: StridePeriodicVestingAccount.encode(message).finish()
    };
  }
};