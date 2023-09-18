import { Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, Borrow, BorrowAmino, BorrowSDKType } from "./hard";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the hard module's genesis state. */
export interface GenesisState {
  params: Params;
  previousAccumulationTimes: GenesisAccumulationTime[];
  deposits: Deposit[];
  borrows: Borrow[];
  totalSupplied: Coin[];
  totalBorrowed: Coin[];
  totalReserves: Coin[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.hard.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the hard module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  previous_accumulation_times: GenesisAccumulationTimeAmino[];
  deposits: DepositAmino[];
  borrows: BorrowAmino[];
  total_supplied: CoinAmino[];
  total_borrowed: CoinAmino[];
  total_reserves: CoinAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.hard.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the hard module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  previous_accumulation_times: GenesisAccumulationTimeSDKType[];
  deposits: DepositSDKType[];
  borrows: BorrowSDKType[];
  total_supplied: CoinSDKType[];
  total_borrowed: CoinSDKType[];
  total_reserves: CoinSDKType[];
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTime {
  collateralType: string;
  previousAccumulationTime: Timestamp;
  supplyInterestFactor: string;
  borrowInterestFactor: string;
}
export interface GenesisAccumulationTimeProtoMsg {
  typeUrl: "/kava.hard.v1beta1.GenesisAccumulationTime";
  value: Uint8Array;
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTimeAmino {
  collateral_type: string;
  previous_accumulation_time?: TimestampAmino;
  supply_interest_factor: string;
  borrow_interest_factor: string;
}
export interface GenesisAccumulationTimeAminoMsg {
  type: "/kava.hard.v1beta1.GenesisAccumulationTime";
  value: GenesisAccumulationTimeAmino;
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTimeSDKType {
  collateral_type: string;
  previous_accumulation_time: TimestampSDKType;
  supply_interest_factor: string;
  borrow_interest_factor: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    previousAccumulationTimes: [],
    deposits: [],
    borrows: [],
    totalSupplied: [],
    totalBorrowed: [],
    totalReserves: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.hard.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.previousAccumulationTimes) {
      GenesisAccumulationTime.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.borrows) {
      Borrow.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.totalSupplied) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.totalBorrowed) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalReserves) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      previousAccumulationTimes: Array.isArray(object?.previousAccumulationTimes) ? object.previousAccumulationTimes.map((e: any) => GenesisAccumulationTime.fromJSON(e)) : [],
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      borrows: Array.isArray(object?.borrows) ? object.borrows.map((e: any) => Borrow.fromJSON(e)) : [],
      totalSupplied: Array.isArray(object?.totalSupplied) ? object.totalSupplied.map((e: any) => Coin.fromJSON(e)) : [],
      totalBorrowed: Array.isArray(object?.totalBorrowed) ? object.totalBorrowed.map((e: any) => Coin.fromJSON(e)) : [],
      totalReserves: Array.isArray(object?.totalReserves) ? object.totalReserves.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.previousAccumulationTimes = object.previousAccumulationTimes?.map(e => GenesisAccumulationTime.fromPartial(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.borrows = object.borrows?.map(e => Borrow.fromPartial(e)) || [];
    message.totalSupplied = object.totalSupplied?.map(e => Coin.fromPartial(e)) || [];
    message.totalBorrowed = object.totalBorrowed?.map(e => Coin.fromPartial(e)) || [];
    message.totalReserves = object.totalReserves?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      previousAccumulationTimes: Array.isArray(object?.previous_accumulation_times) ? object.previous_accumulation_times.map((e: any) => GenesisAccumulationTime.fromAmino(e)) : [],
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : [],
      borrows: Array.isArray(object?.borrows) ? object.borrows.map((e: any) => Borrow.fromAmino(e)) : [],
      totalSupplied: Array.isArray(object?.total_supplied) ? object.total_supplied.map((e: any) => Coin.fromAmino(e)) : [],
      totalBorrowed: Array.isArray(object?.total_borrowed) ? object.total_borrowed.map((e: any) => Coin.fromAmino(e)) : [],
      totalReserves: Array.isArray(object?.total_reserves) ? object.total_reserves.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.previousAccumulationTimes) {
      obj.previous_accumulation_times = message.previousAccumulationTimes.map(e => e ? GenesisAccumulationTime.toAmino(e) : undefined);
    } else {
      obj.previous_accumulation_times = [];
    }
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.borrows) {
      obj.borrows = message.borrows.map(e => e ? Borrow.toAmino(e) : undefined);
    } else {
      obj.borrows = [];
    }
    if (message.totalSupplied) {
      obj.total_supplied = message.totalSupplied.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_supplied = [];
    }
    if (message.totalBorrowed) {
      obj.total_borrowed = message.totalBorrowed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_borrowed = [];
    }
    if (message.totalReserves) {
      obj.total_reserves = message.totalReserves.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_reserves = [];
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
      typeUrl: "/kava.hard.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisAccumulationTime(): GenesisAccumulationTime {
  return {
    collateralType: "",
    previousAccumulationTime: Timestamp.fromPartial({}),
    supplyInterestFactor: "",
    borrowInterestFactor: ""
  };
}
export const GenesisAccumulationTime = {
  typeUrl: "/kava.hard.v1beta1.GenesisAccumulationTime",
  encode(message: GenesisAccumulationTime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.previousAccumulationTime !== undefined) {
      Timestamp.encode(message.previousAccumulationTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.supplyInterestFactor !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.supplyInterestFactor, 18).atomics);
    }
    if (message.borrowInterestFactor !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.borrowInterestFactor, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): GenesisAccumulationTime {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      previousAccumulationTime: isSet(object.previousAccumulationTime) ? fromJsonTimestamp(object.previousAccumulationTime) : undefined,
      supplyInterestFactor: isSet(object.supplyInterestFactor) ? String(object.supplyInterestFactor) : "",
      borrowInterestFactor: isSet(object.borrowInterestFactor) ? String(object.borrowInterestFactor) : ""
    };
  },
  fromPartial(object: Partial<GenesisAccumulationTime>): GenesisAccumulationTime {
    const message = createBaseGenesisAccumulationTime();
    message.collateralType = object.collateralType ?? "";
    message.previousAccumulationTime = object.previousAccumulationTime !== undefined && object.previousAccumulationTime !== null ? Timestamp.fromPartial(object.previousAccumulationTime) : undefined;
    message.supplyInterestFactor = object.supplyInterestFactor ?? "";
    message.borrowInterestFactor = object.borrowInterestFactor ?? "";
    return message;
  },
  fromAmino(object: GenesisAccumulationTimeAmino): GenesisAccumulationTime {
    return {
      collateralType: object.collateral_type,
      previousAccumulationTime: object.previous_accumulation_time,
      supplyInterestFactor: object.supply_interest_factor,
      borrowInterestFactor: object.borrow_interest_factor
    };
  },
  toAmino(message: GenesisAccumulationTime): GenesisAccumulationTimeAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.previous_accumulation_time = message.previousAccumulationTime;
    obj.supply_interest_factor = message.supplyInterestFactor;
    obj.borrow_interest_factor = message.borrowInterestFactor;
    return obj;
  },
  fromAminoMsg(object: GenesisAccumulationTimeAminoMsg): GenesisAccumulationTime {
    return GenesisAccumulationTime.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisAccumulationTimeProtoMsg): GenesisAccumulationTime {
    return GenesisAccumulationTime.decode(message.value);
  },
  toProto(message: GenesisAccumulationTime): Uint8Array {
    return GenesisAccumulationTime.encode(message).finish();
  },
  toProtoMsg(message: GenesisAccumulationTime): GenesisAccumulationTimeProtoMsg {
    return {
      typeUrl: "/kava.hard.v1beta1.GenesisAccumulationTime",
      value: GenesisAccumulationTime.encode(message).finish()
    };
  }
};