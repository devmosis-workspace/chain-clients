import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** EventSupply is emitted on Msg/Supply */
export interface EventSupply {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** Liquidity provided to the module. */
  asset: Coin;
  /** uToken received by the supplier in exchange for the provided liquidity. */
  utoken: Coin;
}
export interface EventSupplyProtoMsg {
  typeUrl: "/umee.leverage.v1.EventSupply";
  value: Uint8Array;
}
/** EventSupply is emitted on Msg/Supply */
export interface EventSupplyAmino {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** Liquidity provided to the module. */
  asset?: CoinAmino;
  /** uToken received by the supplier in exchange for the provided liquidity. */
  utoken?: CoinAmino;
}
export interface EventSupplyAminoMsg {
  type: "/umee.leverage.v1.EventSupply";
  value: EventSupplyAmino;
}
/** EventSupply is emitted on Msg/Supply */
export interface EventSupplySDKType {
  supplier: string;
  asset: CoinSDKType;
  utoken: CoinSDKType;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdraw {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** uToken sent to the module in exchange for the underlying asset. */
  utoken: Coin;
  /** Liquidity received by the supplier. */
  asset: Coin;
}
export interface EventWithdrawProtoMsg {
  typeUrl: "/umee.leverage.v1.EventWithdraw";
  value: Uint8Array;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdrawAmino {
  /** Liquidity supplier bech32 address. */
  supplier: string;
  /** uToken sent to the module in exchange for the underlying asset. */
  utoken?: CoinAmino;
  /** Liquidity received by the supplier. */
  asset?: CoinAmino;
}
export interface EventWithdrawAminoMsg {
  type: "/umee.leverage.v1.EventWithdraw";
  value: EventWithdrawAmino;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdrawSDKType {
  supplier: string;
  utoken: CoinSDKType;
  asset: CoinSDKType;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterize {
  /** Borrower bech32 address. */
  borrower: string;
  /** uToken provided as a collateral. */
  utoken: Coin;
}
export interface EventCollaterizeProtoMsg {
  typeUrl: "/umee.leverage.v1.EventCollaterize";
  value: Uint8Array;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterizeAmino {
  /** Borrower bech32 address. */
  borrower: string;
  /** uToken provided as a collateral. */
  utoken?: CoinAmino;
}
export interface EventCollaterizeAminoMsg {
  type: "/umee.leverage.v1.EventCollaterize";
  value: EventCollaterizeAmino;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterizeSDKType {
  borrower: string;
  utoken: CoinSDKType;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterize {
  /** Borrower bech32 address. */
  borrower: string;
  /** utoken removed from collateral. */
  utoken: Coin;
}
export interface EventDecollaterizeProtoMsg {
  typeUrl: "/umee.leverage.v1.EventDecollaterize";
  value: Uint8Array;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterizeAmino {
  /** Borrower bech32 address. */
  borrower: string;
  /** utoken removed from collateral. */
  utoken?: CoinAmino;
}
export interface EventDecollaterizeAminoMsg {
  type: "/umee.leverage.v1.EventDecollaterize";
  value: EventDecollaterizeAmino;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterizeSDKType {
  borrower: string;
  utoken: CoinSDKType;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrow {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset borrowed. */
  asset: Coin;
}
export interface EventBorrowProtoMsg {
  typeUrl: "/umee.leverage.v1.EventBorrow";
  value: Uint8Array;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrowAmino {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset borrowed. */
  asset?: CoinAmino;
}
export interface EventBorrowAminoMsg {
  type: "/umee.leverage.v1.EventBorrow";
  value: EventBorrowAmino;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrowSDKType {
  borrower: string;
  asset: CoinSDKType;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepay {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */
  repaid: Coin;
}
export interface EventRepayProtoMsg {
  typeUrl: "/umee.leverage.v1.EventRepay";
  value: Uint8Array;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepayAmino {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */
  repaid?: CoinAmino;
}
export interface EventRepayAminoMsg {
  type: "/umee.leverage.v1.EventRepay";
  value: EventRepayAmino;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepaySDKType {
  borrower: string;
  repaid: CoinSDKType;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidate {
  /** Liquidator bech32 address. */
  liquidator: string;
  /** Borrower bech32 address. */
  borrower: string;
  /** Assets liquidated from the borrower */
  liquidated: Coin;
}
export interface EventLiquidateProtoMsg {
  typeUrl: "/umee.leverage.v1.EventLiquidate";
  value: Uint8Array;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidateAmino {
  /** Liquidator bech32 address. */
  liquidator: string;
  /** Borrower bech32 address. */
  borrower: string;
  /** Assets liquidated from the borrower */
  liquidated?: CoinAmino;
}
export interface EventLiquidateAminoMsg {
  type: "/umee.leverage.v1.EventLiquidate";
  value: EventLiquidateAmino;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidateSDKType {
  liquidator: string;
  borrower: string;
  liquidated: CoinSDKType;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrual {
  blockHeight: bigint;
  /** Unix timestamp (in seconds) */
  timestamp: bigint;
  totalInterest: Coin[];
  reserved: Coin[];
}
export interface EventInterestAccrualProtoMsg {
  typeUrl: "/umee.leverage.v1.EventInterestAccrual";
  value: Uint8Array;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrualAmino {
  block_height: string;
  /** Unix timestamp (in seconds) */
  timestamp: string;
  total_interest: CoinAmino[];
  reserved: CoinAmino[];
}
export interface EventInterestAccrualAminoMsg {
  type: "/umee.leverage.v1.EventInterestAccrual";
  value: EventInterestAccrualAmino;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrualSDKType {
  block_height: bigint;
  timestamp: bigint;
  total_interest: CoinSDKType[];
  reserved: CoinSDKType[];
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */
export interface EventRepayBadDebt {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */
  asset: Coin;
}
export interface EventRepayBadDebtProtoMsg {
  typeUrl: "/umee.leverage.v1.EventRepayBadDebt";
  value: Uint8Array;
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */
export interface EventRepayBadDebtAmino {
  /** Borrower bech32 address. */
  borrower: string;
  /** Asset repaid */
  asset?: CoinAmino;
}
export interface EventRepayBadDebtAminoMsg {
  type: "/umee.leverage.v1.EventRepayBadDebt";
  value: EventRepayBadDebtAmino;
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */
export interface EventRepayBadDebtSDKType {
  borrower: string;
  asset: CoinSDKType;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhausted {
  /** Borrower bech32 address. */
  borrower: string;
  /** Outstanding bad debt */
  outstandingDebt: Coin;
  /** Module balance remaining */
  moduleBalance: Coin;
  /** Reserves remaining */
  reserves: Coin;
}
export interface EventReservesExhaustedProtoMsg {
  typeUrl: "/umee.leverage.v1.EventReservesExhausted";
  value: Uint8Array;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhaustedAmino {
  /** Borrower bech32 address. */
  borrower: string;
  /** Outstanding bad debt */
  outstanding_debt?: CoinAmino;
  /** Module balance remaining */
  module_balance?: CoinAmino;
  /** Reserves remaining */
  reserves?: CoinAmino;
}
export interface EventReservesExhaustedAminoMsg {
  type: "/umee.leverage.v1.EventReservesExhausted";
  value: EventReservesExhaustedAmino;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhaustedSDKType {
  borrower: string;
  outstanding_debt: CoinSDKType;
  module_balance: CoinSDKType;
  reserves: CoinSDKType;
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracle {
  /** Assets sent to oracle module */
  assets: Coin[];
}
export interface EventFundOracleProtoMsg {
  typeUrl: "/umee.leverage.v1.EventFundOracle";
  value: Uint8Array;
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracleAmino {
  /** Assets sent to oracle module */
  assets: CoinAmino[];
}
export interface EventFundOracleAminoMsg {
  type: "/umee.leverage.v1.EventFundOracle";
  value: EventFundOracleAmino;
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracleSDKType {
  assets: CoinSDKType[];
}
function createBaseEventSupply(): EventSupply {
  return {
    supplier: "",
    asset: Coin.fromPartial({}),
    utoken: Coin.fromPartial({})
  };
}
export const EventSupply = {
  typeUrl: "/umee.leverage.v1.EventSupply",
  encode(message: EventSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventSupply {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      utoken: isSet(object.utoken) ? Coin.fromJSON(object.utoken) : undefined
    };
  },
  fromPartial(object: Partial<EventSupply>): EventSupply {
    const message = createBaseEventSupply();
    message.supplier = object.supplier ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    return message;
  },
  fromAmino(object: EventSupplyAmino): EventSupply {
    return {
      supplier: object.supplier,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined,
      utoken: object?.utoken ? Coin.fromAmino(object.utoken) : undefined
    };
  },
  toAmino(message: EventSupply): EventSupplyAmino {
    const obj: any = {};
    obj.supplier = message.supplier;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSupplyAminoMsg): EventSupply {
    return EventSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSupplyProtoMsg): EventSupply {
    return EventSupply.decode(message.value);
  },
  toProto(message: EventSupply): Uint8Array {
    return EventSupply.encode(message).finish();
  },
  toProtoMsg(message: EventSupply): EventSupplyProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventSupply",
      value: EventSupply.encode(message).finish()
    };
  }
};
function createBaseEventWithdraw(): EventWithdraw {
  return {
    supplier: "",
    utoken: Coin.fromPartial({}),
    asset: Coin.fromPartial({})
  };
}
export const EventWithdraw = {
  typeUrl: "/umee.leverage.v1.EventWithdraw",
  encode(message: EventWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supplier !== "") {
      writer.uint32(10).string(message.supplier);
    }
    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventWithdraw {
    return {
      supplier: isSet(object.supplier) ? String(object.supplier) : "",
      utoken: isSet(object.utoken) ? Coin.fromJSON(object.utoken) : undefined,
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<EventWithdraw>): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.supplier = object.supplier ?? "";
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: EventWithdrawAmino): EventWithdraw {
    return {
      supplier: object.supplier,
      utoken: object?.utoken ? Coin.fromAmino(object.utoken) : undefined,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: EventWithdraw): EventWithdrawAmino {
    const obj: any = {};
    obj.supplier = message.supplier;
    obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawAminoMsg): EventWithdraw {
    return EventWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawProtoMsg): EventWithdraw {
    return EventWithdraw.decode(message.value);
  },
  toProto(message: EventWithdraw): Uint8Array {
    return EventWithdraw.encode(message).finish();
  },
  toProtoMsg(message: EventWithdraw): EventWithdrawProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventWithdraw",
      value: EventWithdraw.encode(message).finish()
    };
  }
};
function createBaseEventCollaterize(): EventCollaterize {
  return {
    borrower: "",
    utoken: Coin.fromPartial({})
  };
}
export const EventCollaterize = {
  typeUrl: "/umee.leverage.v1.EventCollaterize",
  encode(message: EventCollaterize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventCollaterize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      utoken: isSet(object.utoken) ? Coin.fromJSON(object.utoken) : undefined
    };
  },
  fromPartial(object: Partial<EventCollaterize>): EventCollaterize {
    const message = createBaseEventCollaterize();
    message.borrower = object.borrower ?? "";
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    return message;
  },
  fromAmino(object: EventCollaterizeAmino): EventCollaterize {
    return {
      borrower: object.borrower,
      utoken: object?.utoken ? Coin.fromAmino(object.utoken) : undefined
    };
  },
  toAmino(message: EventCollaterize): EventCollaterizeAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCollaterizeAminoMsg): EventCollaterize {
    return EventCollaterize.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCollaterizeProtoMsg): EventCollaterize {
    return EventCollaterize.decode(message.value);
  },
  toProto(message: EventCollaterize): Uint8Array {
    return EventCollaterize.encode(message).finish();
  },
  toProtoMsg(message: EventCollaterize): EventCollaterizeProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventCollaterize",
      value: EventCollaterize.encode(message).finish()
    };
  }
};
function createBaseEventDecollaterize(): EventDecollaterize {
  return {
    borrower: "",
    utoken: Coin.fromPartial({})
  };
}
export const EventDecollaterize = {
  typeUrl: "/umee.leverage.v1.EventDecollaterize",
  encode(message: EventDecollaterize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.utoken !== undefined) {
      Coin.encode(message.utoken, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventDecollaterize {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      utoken: isSet(object.utoken) ? Coin.fromJSON(object.utoken) : undefined
    };
  },
  fromPartial(object: Partial<EventDecollaterize>): EventDecollaterize {
    const message = createBaseEventDecollaterize();
    message.borrower = object.borrower ?? "";
    message.utoken = object.utoken !== undefined && object.utoken !== null ? Coin.fromPartial(object.utoken) : undefined;
    return message;
  },
  fromAmino(object: EventDecollaterizeAmino): EventDecollaterize {
    return {
      borrower: object.borrower,
      utoken: object?.utoken ? Coin.fromAmino(object.utoken) : undefined
    };
  },
  toAmino(message: EventDecollaterize): EventDecollaterizeAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.utoken = message.utoken ? Coin.toAmino(message.utoken) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDecollaterizeAminoMsg): EventDecollaterize {
    return EventDecollaterize.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDecollaterizeProtoMsg): EventDecollaterize {
    return EventDecollaterize.decode(message.value);
  },
  toProto(message: EventDecollaterize): Uint8Array {
    return EventDecollaterize.encode(message).finish();
  },
  toProtoMsg(message: EventDecollaterize): EventDecollaterizeProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventDecollaterize",
      value: EventDecollaterize.encode(message).finish()
    };
  }
};
function createBaseEventBorrow(): EventBorrow {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const EventBorrow = {
  typeUrl: "/umee.leverage.v1.EventBorrow",
  encode(message: EventBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<EventBorrow>): EventBorrow {
    const message = createBaseEventBorrow();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: EventBorrowAmino): EventBorrow {
    return {
      borrower: object.borrower,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: EventBorrow): EventBorrowAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBorrowAminoMsg): EventBorrow {
    return EventBorrow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBorrowProtoMsg): EventBorrow {
    return EventBorrow.decode(message.value);
  },
  toProto(message: EventBorrow): Uint8Array {
    return EventBorrow.encode(message).finish();
  },
  toProtoMsg(message: EventBorrow): EventBorrowProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventBorrow",
      value: EventBorrow.encode(message).finish()
    };
  }
};
function createBaseEventRepay(): EventRepay {
  return {
    borrower: "",
    repaid: Coin.fromPartial({})
  };
}
export const EventRepay = {
  typeUrl: "/umee.leverage.v1.EventRepay",
  encode(message: EventRepay, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.repaid !== undefined) {
      Coin.encode(message.repaid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventRepay {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      repaid: isSet(object.repaid) ? Coin.fromJSON(object.repaid) : undefined
    };
  },
  fromPartial(object: Partial<EventRepay>): EventRepay {
    const message = createBaseEventRepay();
    message.borrower = object.borrower ?? "";
    message.repaid = object.repaid !== undefined && object.repaid !== null ? Coin.fromPartial(object.repaid) : undefined;
    return message;
  },
  fromAmino(object: EventRepayAmino): EventRepay {
    return {
      borrower: object.borrower,
      repaid: object?.repaid ? Coin.fromAmino(object.repaid) : undefined
    };
  },
  toAmino(message: EventRepay): EventRepayAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.repaid = message.repaid ? Coin.toAmino(message.repaid) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRepayAminoMsg): EventRepay {
    return EventRepay.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRepayProtoMsg): EventRepay {
    return EventRepay.decode(message.value);
  },
  toProto(message: EventRepay): Uint8Array {
    return EventRepay.encode(message).finish();
  },
  toProtoMsg(message: EventRepay): EventRepayProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventRepay",
      value: EventRepay.encode(message).finish()
    };
  }
};
function createBaseEventLiquidate(): EventLiquidate {
  return {
    liquidator: "",
    borrower: "",
    liquidated: Coin.fromPartial({})
  };
}
export const EventLiquidate = {
  typeUrl: "/umee.leverage.v1.EventLiquidate",
  encode(message: EventLiquidate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidator !== "") {
      writer.uint32(10).string(message.liquidator);
    }
    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }
    if (message.liquidated !== undefined) {
      Coin.encode(message.liquidated, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventLiquidate {
    return {
      liquidator: isSet(object.liquidator) ? String(object.liquidator) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      liquidated: isSet(object.liquidated) ? Coin.fromJSON(object.liquidated) : undefined
    };
  },
  fromPartial(object: Partial<EventLiquidate>): EventLiquidate {
    const message = createBaseEventLiquidate();
    message.liquidator = object.liquidator ?? "";
    message.borrower = object.borrower ?? "";
    message.liquidated = object.liquidated !== undefined && object.liquidated !== null ? Coin.fromPartial(object.liquidated) : undefined;
    return message;
  },
  fromAmino(object: EventLiquidateAmino): EventLiquidate {
    return {
      liquidator: object.liquidator,
      borrower: object.borrower,
      liquidated: object?.liquidated ? Coin.fromAmino(object.liquidated) : undefined
    };
  },
  toAmino(message: EventLiquidate): EventLiquidateAmino {
    const obj: any = {};
    obj.liquidator = message.liquidator;
    obj.borrower = message.borrower;
    obj.liquidated = message.liquidated ? Coin.toAmino(message.liquidated) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventLiquidateAminoMsg): EventLiquidate {
    return EventLiquidate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventLiquidateProtoMsg): EventLiquidate {
    return EventLiquidate.decode(message.value);
  },
  toProto(message: EventLiquidate): Uint8Array {
    return EventLiquidate.encode(message).finish();
  },
  toProtoMsg(message: EventLiquidate): EventLiquidateProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventLiquidate",
      value: EventLiquidate.encode(message).finish()
    };
  }
};
function createBaseEventInterestAccrual(): EventInterestAccrual {
  return {
    blockHeight: BigInt(0),
    timestamp: BigInt(0),
    totalInterest: [],
    reserved: []
  };
}
export const EventInterestAccrual = {
  typeUrl: "/umee.leverage.v1.EventInterestAccrual",
  encode(message: EventInterestAccrual, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    for (const v of message.totalInterest) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reserved) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventInterestAccrual {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      totalInterest: Array.isArray(object?.totalInterest) ? object.totalInterest.map((e: any) => Coin.fromJSON(e)) : [],
      reserved: Array.isArray(object?.reserved) ? object.reserved.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventInterestAccrual>): EventInterestAccrual {
    const message = createBaseEventInterestAccrual();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.totalInterest = object.totalInterest?.map(e => Coin.fromPartial(e)) || [];
    message.reserved = object.reserved?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventInterestAccrualAmino): EventInterestAccrual {
    return {
      blockHeight: BigInt(object.block_height),
      timestamp: BigInt(object.timestamp),
      totalInterest: Array.isArray(object?.total_interest) ? object.total_interest.map((e: any) => Coin.fromAmino(e)) : [],
      reserved: Array.isArray(object?.reserved) ? object.reserved.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventInterestAccrual): EventInterestAccrualAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    if (message.totalInterest) {
      obj.total_interest = message.totalInterest.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_interest = [];
    }
    if (message.reserved) {
      obj.reserved = message.reserved.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reserved = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventInterestAccrualAminoMsg): EventInterestAccrual {
    return EventInterestAccrual.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInterestAccrualProtoMsg): EventInterestAccrual {
    return EventInterestAccrual.decode(message.value);
  },
  toProto(message: EventInterestAccrual): Uint8Array {
    return EventInterestAccrual.encode(message).finish();
  },
  toProtoMsg(message: EventInterestAccrual): EventInterestAccrualProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventInterestAccrual",
      value: EventInterestAccrual.encode(message).finish()
    };
  }
};
function createBaseEventRepayBadDebt(): EventRepayBadDebt {
  return {
    borrower: "",
    asset: Coin.fromPartial({})
  };
}
export const EventRepayBadDebt = {
  typeUrl: "/umee.leverage.v1.EventRepayBadDebt",
  encode(message: EventRepayBadDebt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventRepayBadDebt {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<EventRepayBadDebt>): EventRepayBadDebt {
    const message = createBaseEventRepayBadDebt();
    message.borrower = object.borrower ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: EventRepayBadDebtAmino): EventRepayBadDebt {
    return {
      borrower: object.borrower,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: EventRepayBadDebt): EventRepayBadDebtAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRepayBadDebtAminoMsg): EventRepayBadDebt {
    return EventRepayBadDebt.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRepayBadDebtProtoMsg): EventRepayBadDebt {
    return EventRepayBadDebt.decode(message.value);
  },
  toProto(message: EventRepayBadDebt): Uint8Array {
    return EventRepayBadDebt.encode(message).finish();
  },
  toProtoMsg(message: EventRepayBadDebt): EventRepayBadDebtProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventRepayBadDebt",
      value: EventRepayBadDebt.encode(message).finish()
    };
  }
};
function createBaseEventReservesExhausted(): EventReservesExhausted {
  return {
    borrower: "",
    outstandingDebt: Coin.fromPartial({}),
    moduleBalance: Coin.fromPartial({}),
    reserves: Coin.fromPartial({})
  };
}
export const EventReservesExhausted = {
  typeUrl: "/umee.leverage.v1.EventReservesExhausted",
  encode(message: EventReservesExhausted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (message.outstandingDebt !== undefined) {
      Coin.encode(message.outstandingDebt, writer.uint32(18).fork()).ldelim();
    }
    if (message.moduleBalance !== undefined) {
      Coin.encode(message.moduleBalance, writer.uint32(26).fork()).ldelim();
    }
    if (message.reserves !== undefined) {
      Coin.encode(message.reserves, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventReservesExhausted {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      outstandingDebt: isSet(object.outstandingDebt) ? Coin.fromJSON(object.outstandingDebt) : undefined,
      moduleBalance: isSet(object.moduleBalance) ? Coin.fromJSON(object.moduleBalance) : undefined,
      reserves: isSet(object.reserves) ? Coin.fromJSON(object.reserves) : undefined
    };
  },
  fromPartial(object: Partial<EventReservesExhausted>): EventReservesExhausted {
    const message = createBaseEventReservesExhausted();
    message.borrower = object.borrower ?? "";
    message.outstandingDebt = object.outstandingDebt !== undefined && object.outstandingDebt !== null ? Coin.fromPartial(object.outstandingDebt) : undefined;
    message.moduleBalance = object.moduleBalance !== undefined && object.moduleBalance !== null ? Coin.fromPartial(object.moduleBalance) : undefined;
    message.reserves = object.reserves !== undefined && object.reserves !== null ? Coin.fromPartial(object.reserves) : undefined;
    return message;
  },
  fromAmino(object: EventReservesExhaustedAmino): EventReservesExhausted {
    return {
      borrower: object.borrower,
      outstandingDebt: object?.outstanding_debt ? Coin.fromAmino(object.outstanding_debt) : undefined,
      moduleBalance: object?.module_balance ? Coin.fromAmino(object.module_balance) : undefined,
      reserves: object?.reserves ? Coin.fromAmino(object.reserves) : undefined
    };
  },
  toAmino(message: EventReservesExhausted): EventReservesExhaustedAmino {
    const obj: any = {};
    obj.borrower = message.borrower;
    obj.outstanding_debt = message.outstandingDebt ? Coin.toAmino(message.outstandingDebt) : undefined;
    obj.module_balance = message.moduleBalance ? Coin.toAmino(message.moduleBalance) : undefined;
    obj.reserves = message.reserves ? Coin.toAmino(message.reserves) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventReservesExhaustedAminoMsg): EventReservesExhausted {
    return EventReservesExhausted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventReservesExhaustedProtoMsg): EventReservesExhausted {
    return EventReservesExhausted.decode(message.value);
  },
  toProto(message: EventReservesExhausted): Uint8Array {
    return EventReservesExhausted.encode(message).finish();
  },
  toProtoMsg(message: EventReservesExhausted): EventReservesExhaustedProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventReservesExhausted",
      value: EventReservesExhausted.encode(message).finish()
    };
  }
};
function createBaseEventFundOracle(): EventFundOracle {
  return {
    assets: []
  };
}
export const EventFundOracle = {
  typeUrl: "/umee.leverage.v1.EventFundOracle",
  encode(message: EventFundOracle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventFundOracle {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventFundOracle>): EventFundOracle {
    const message = createBaseEventFundOracle();
    message.assets = object.assets?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventFundOracleAmino): EventFundOracle {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventFundOracle): EventFundOracleAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventFundOracleAminoMsg): EventFundOracle {
    return EventFundOracle.fromAmino(object.value);
  },
  fromProtoMsg(message: EventFundOracleProtoMsg): EventFundOracle {
    return EventFundOracle.decode(message.value);
  },
  toProto(message: EventFundOracle): Uint8Array {
    return EventFundOracle.encode(message).finish();
  },
  toProtoMsg(message: EventFundOracle): EventFundOracleProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.EventFundOracle",
      value: EventFundOracle.encode(message).finish()
    };
  }
};