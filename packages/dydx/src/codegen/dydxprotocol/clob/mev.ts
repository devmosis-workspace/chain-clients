import { SubaccountId, SubaccountIdAmino, SubaccountIdSDKType } from "../subaccounts/subaccount";
import { ClobPair, ClobPairAmino, ClobPairSDKType } from "./clob_pair";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MEVMatch represents all necessary data to calculate MEV for a regular match. */
export interface MEVMatch {
  takerOrderSubaccountId: SubaccountId;
  takerFeePpm: number;
  makerOrderSubaccountId: SubaccountId;
  makerOrderSubticks: bigint;
  makerOrderIsBuy: boolean;
  makerFeePpm: number;
  clobPairId: number;
  fillAmount: bigint;
}
export interface MEVMatchProtoMsg {
  typeUrl: "/dydxprotocol.clob.MEVMatch";
  value: Uint8Array;
}
/** MEVMatch represents all necessary data to calculate MEV for a regular match. */
export interface MEVMatchAmino {
  taker_order_subaccount_id?: SubaccountIdAmino;
  taker_fee_ppm: number;
  maker_order_subaccount_id?: SubaccountIdAmino;
  maker_order_subticks: string;
  maker_order_is_buy: boolean;
  maker_fee_ppm: number;
  clob_pair_id: number;
  fill_amount: string;
}
export interface MEVMatchAminoMsg {
  type: "/dydxprotocol.clob.MEVMatch";
  value: MEVMatchAmino;
}
/** MEVMatch represents all necessary data to calculate MEV for a regular match. */
export interface MEVMatchSDKType {
  taker_order_subaccount_id: SubaccountIdSDKType;
  taker_fee_ppm: number;
  maker_order_subaccount_id: SubaccountIdSDKType;
  maker_order_subticks: bigint;
  maker_order_is_buy: boolean;
  maker_fee_ppm: number;
  clob_pair_id: number;
  fill_amount: bigint;
}
/**
 * MEVLiquidationMatch represents all necessary data to calculate MEV for a
 * liquidation.
 */
export interface MEVLiquidationMatch {
  liquidatedSubaccountId: SubaccountId;
  insuranceFundDeltaQuoteQuantums: bigint;
  makerOrderSubaccountId: SubaccountId;
  makerOrderSubticks: bigint;
  makerOrderIsBuy: boolean;
  makerFeePpm: number;
  clobPairId: number;
  fillAmount: bigint;
}
export interface MEVLiquidationMatchProtoMsg {
  typeUrl: "/dydxprotocol.clob.MEVLiquidationMatch";
  value: Uint8Array;
}
/**
 * MEVLiquidationMatch represents all necessary data to calculate MEV for a
 * liquidation.
 */
export interface MEVLiquidationMatchAmino {
  liquidated_subaccount_id?: SubaccountIdAmino;
  insurance_fund_delta_quote_quantums: string;
  maker_order_subaccount_id?: SubaccountIdAmino;
  maker_order_subticks: string;
  maker_order_is_buy: boolean;
  maker_fee_ppm: number;
  clob_pair_id: number;
  fill_amount: string;
}
export interface MEVLiquidationMatchAminoMsg {
  type: "/dydxprotocol.clob.MEVLiquidationMatch";
  value: MEVLiquidationMatchAmino;
}
/**
 * MEVLiquidationMatch represents all necessary data to calculate MEV for a
 * liquidation.
 */
export interface MEVLiquidationMatchSDKType {
  liquidated_subaccount_id: SubaccountIdSDKType;
  insurance_fund_delta_quote_quantums: bigint;
  maker_order_subaccount_id: SubaccountIdSDKType;
  maker_order_subticks: bigint;
  maker_order_is_buy: boolean;
  maker_fee_ppm: number;
  clob_pair_id: number;
  fill_amount: bigint;
}
/** ClobMidPrice contains the mid price of a CLOB pair, represented by it's ID. */
export interface ClobMidPrice {
  clobPair: ClobPair;
  subticks: bigint;
}
export interface ClobMidPriceProtoMsg {
  typeUrl: "/dydxprotocol.clob.ClobMidPrice";
  value: Uint8Array;
}
/** ClobMidPrice contains the mid price of a CLOB pair, represented by it's ID. */
export interface ClobMidPriceAmino {
  clob_pair?: ClobPairAmino;
  subticks: string;
}
export interface ClobMidPriceAminoMsg {
  type: "/dydxprotocol.clob.ClobMidPrice";
  value: ClobMidPriceAmino;
}
/** ClobMidPrice contains the mid price of a CLOB pair, represented by it's ID. */
export interface ClobMidPriceSDKType {
  clob_pair: ClobPairSDKType;
  subticks: bigint;
}
/**
 * ValidatorMevMatches contains all matches from the validator's local
 * operations queue.
 */
export interface ValidatorMevMatches {
  matches: MEVMatch[];
  liquidationMatches: MEVLiquidationMatch[];
}
export interface ValidatorMevMatchesProtoMsg {
  typeUrl: "/dydxprotocol.clob.ValidatorMevMatches";
  value: Uint8Array;
}
/**
 * ValidatorMevMatches contains all matches from the validator's local
 * operations queue.
 */
export interface ValidatorMevMatchesAmino {
  matches: MEVMatchAmino[];
  liquidation_matches: MEVLiquidationMatchAmino[];
}
export interface ValidatorMevMatchesAminoMsg {
  type: "/dydxprotocol.clob.ValidatorMevMatches";
  value: ValidatorMevMatchesAmino;
}
/**
 * ValidatorMevMatches contains all matches from the validator's local
 * operations queue.
 */
export interface ValidatorMevMatchesSDKType {
  matches: MEVMatchSDKType[];
  liquidation_matches: MEVLiquidationMatchSDKType[];
}
/**
 * MevNodeToNodeMetrics is a data structure for encapsulating all MEV node <>
 * node metrics.
 */
export interface MevNodeToNodeMetrics {
  validatorMevMatches: ValidatorMevMatches;
  clobMidPrices: ClobMidPrice[];
}
export interface MevNodeToNodeMetricsProtoMsg {
  typeUrl: "/dydxprotocol.clob.MevNodeToNodeMetrics";
  value: Uint8Array;
}
/**
 * MevNodeToNodeMetrics is a data structure for encapsulating all MEV node <>
 * node metrics.
 */
export interface MevNodeToNodeMetricsAmino {
  validator_mev_matches?: ValidatorMevMatchesAmino;
  clob_mid_prices: ClobMidPriceAmino[];
}
export interface MevNodeToNodeMetricsAminoMsg {
  type: "/dydxprotocol.clob.MevNodeToNodeMetrics";
  value: MevNodeToNodeMetricsAmino;
}
/**
 * MevNodeToNodeMetrics is a data structure for encapsulating all MEV node <>
 * node metrics.
 */
export interface MevNodeToNodeMetricsSDKType {
  validator_mev_matches: ValidatorMevMatchesSDKType;
  clob_mid_prices: ClobMidPriceSDKType[];
}
function createBaseMEVMatch(): MEVMatch {
  return {
    takerOrderSubaccountId: SubaccountId.fromPartial({}),
    takerFeePpm: 0,
    makerOrderSubaccountId: SubaccountId.fromPartial({}),
    makerOrderSubticks: BigInt(0),
    makerOrderIsBuy: false,
    makerFeePpm: 0,
    clobPairId: 0,
    fillAmount: BigInt(0)
  };
}
export const MEVMatch = {
  typeUrl: "/dydxprotocol.clob.MEVMatch",
  encode(message: MEVMatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.takerOrderSubaccountId !== undefined) {
      SubaccountId.encode(message.takerOrderSubaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.takerFeePpm !== 0) {
      writer.uint32(16).int32(message.takerFeePpm);
    }
    if (message.makerOrderSubaccountId !== undefined) {
      SubaccountId.encode(message.makerOrderSubaccountId, writer.uint32(26).fork()).ldelim();
    }
    if (message.makerOrderSubticks !== BigInt(0)) {
      writer.uint32(32).uint64(message.makerOrderSubticks);
    }
    if (message.makerOrderIsBuy === true) {
      writer.uint32(40).bool(message.makerOrderIsBuy);
    }
    if (message.makerFeePpm !== 0) {
      writer.uint32(48).int32(message.makerFeePpm);
    }
    if (message.clobPairId !== 0) {
      writer.uint32(56).uint32(message.clobPairId);
    }
    if (message.fillAmount !== BigInt(0)) {
      writer.uint32(64).uint64(message.fillAmount);
    }
    return writer;
  },
  fromJSON(object: any): MEVMatch {
    return {
      takerOrderSubaccountId: isSet(object.takerOrderSubaccountId) ? SubaccountId.fromJSON(object.takerOrderSubaccountId) : undefined,
      takerFeePpm: isSet(object.takerFeePpm) ? Number(object.takerFeePpm) : 0,
      makerOrderSubaccountId: isSet(object.makerOrderSubaccountId) ? SubaccountId.fromJSON(object.makerOrderSubaccountId) : undefined,
      makerOrderSubticks: isSet(object.makerOrderSubticks) ? BigInt(object.makerOrderSubticks.toString()) : BigInt(0),
      makerOrderIsBuy: isSet(object.makerOrderIsBuy) ? Boolean(object.makerOrderIsBuy) : false,
      makerFeePpm: isSet(object.makerFeePpm) ? Number(object.makerFeePpm) : 0,
      clobPairId: isSet(object.clobPairId) ? Number(object.clobPairId) : 0,
      fillAmount: isSet(object.fillAmount) ? BigInt(object.fillAmount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MEVMatch>): MEVMatch {
    const message = createBaseMEVMatch();
    message.takerOrderSubaccountId = object.takerOrderSubaccountId !== undefined && object.takerOrderSubaccountId !== null ? SubaccountId.fromPartial(object.takerOrderSubaccountId) : undefined;
    message.takerFeePpm = object.takerFeePpm ?? 0;
    message.makerOrderSubaccountId = object.makerOrderSubaccountId !== undefined && object.makerOrderSubaccountId !== null ? SubaccountId.fromPartial(object.makerOrderSubaccountId) : undefined;
    message.makerOrderSubticks = object.makerOrderSubticks !== undefined && object.makerOrderSubticks !== null ? BigInt(object.makerOrderSubticks.toString()) : BigInt(0);
    message.makerOrderIsBuy = object.makerOrderIsBuy ?? false;
    message.makerFeePpm = object.makerFeePpm ?? 0;
    message.clobPairId = object.clobPairId ?? 0;
    message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MEVMatchAmino): MEVMatch {
    return {
      takerOrderSubaccountId: object?.taker_order_subaccount_id ? SubaccountId.fromAmino(object.taker_order_subaccount_id) : undefined,
      takerFeePpm: object.taker_fee_ppm,
      makerOrderSubaccountId: object?.maker_order_subaccount_id ? SubaccountId.fromAmino(object.maker_order_subaccount_id) : undefined,
      makerOrderSubticks: BigInt(object.maker_order_subticks),
      makerOrderIsBuy: object.maker_order_is_buy,
      makerFeePpm: object.maker_fee_ppm,
      clobPairId: object.clob_pair_id,
      fillAmount: BigInt(object.fill_amount)
    };
  },
  toAmino(message: MEVMatch): MEVMatchAmino {
    const obj: any = {};
    obj.taker_order_subaccount_id = message.takerOrderSubaccountId ? SubaccountId.toAmino(message.takerOrderSubaccountId) : undefined;
    obj.taker_fee_ppm = message.takerFeePpm;
    obj.maker_order_subaccount_id = message.makerOrderSubaccountId ? SubaccountId.toAmino(message.makerOrderSubaccountId) : undefined;
    obj.maker_order_subticks = message.makerOrderSubticks ? message.makerOrderSubticks.toString() : undefined;
    obj.maker_order_is_buy = message.makerOrderIsBuy;
    obj.maker_fee_ppm = message.makerFeePpm;
    obj.clob_pair_id = message.clobPairId;
    obj.fill_amount = message.fillAmount ? message.fillAmount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MEVMatchAminoMsg): MEVMatch {
    return MEVMatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MEVMatchProtoMsg): MEVMatch {
    return MEVMatch.decode(message.value);
  },
  toProto(message: MEVMatch): Uint8Array {
    return MEVMatch.encode(message).finish();
  },
  toProtoMsg(message: MEVMatch): MEVMatchProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.MEVMatch",
      value: MEVMatch.encode(message).finish()
    };
  }
};
function createBaseMEVLiquidationMatch(): MEVLiquidationMatch {
  return {
    liquidatedSubaccountId: SubaccountId.fromPartial({}),
    insuranceFundDeltaQuoteQuantums: BigInt(0),
    makerOrderSubaccountId: SubaccountId.fromPartial({}),
    makerOrderSubticks: BigInt(0),
    makerOrderIsBuy: false,
    makerFeePpm: 0,
    clobPairId: 0,
    fillAmount: BigInt(0)
  };
}
export const MEVLiquidationMatch = {
  typeUrl: "/dydxprotocol.clob.MEVLiquidationMatch",
  encode(message: MEVLiquidationMatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidatedSubaccountId !== undefined) {
      SubaccountId.encode(message.liquidatedSubaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.insuranceFundDeltaQuoteQuantums !== BigInt(0)) {
      writer.uint32(16).int64(message.insuranceFundDeltaQuoteQuantums);
    }
    if (message.makerOrderSubaccountId !== undefined) {
      SubaccountId.encode(message.makerOrderSubaccountId, writer.uint32(26).fork()).ldelim();
    }
    if (message.makerOrderSubticks !== BigInt(0)) {
      writer.uint32(32).uint64(message.makerOrderSubticks);
    }
    if (message.makerOrderIsBuy === true) {
      writer.uint32(40).bool(message.makerOrderIsBuy);
    }
    if (message.makerFeePpm !== 0) {
      writer.uint32(48).int32(message.makerFeePpm);
    }
    if (message.clobPairId !== 0) {
      writer.uint32(56).uint32(message.clobPairId);
    }
    if (message.fillAmount !== BigInt(0)) {
      writer.uint32(64).uint64(message.fillAmount);
    }
    return writer;
  },
  fromJSON(object: any): MEVLiquidationMatch {
    return {
      liquidatedSubaccountId: isSet(object.liquidatedSubaccountId) ? SubaccountId.fromJSON(object.liquidatedSubaccountId) : undefined,
      insuranceFundDeltaQuoteQuantums: isSet(object.insuranceFundDeltaQuoteQuantums) ? BigInt(object.insuranceFundDeltaQuoteQuantums.toString()) : BigInt(0),
      makerOrderSubaccountId: isSet(object.makerOrderSubaccountId) ? SubaccountId.fromJSON(object.makerOrderSubaccountId) : undefined,
      makerOrderSubticks: isSet(object.makerOrderSubticks) ? BigInt(object.makerOrderSubticks.toString()) : BigInt(0),
      makerOrderIsBuy: isSet(object.makerOrderIsBuy) ? Boolean(object.makerOrderIsBuy) : false,
      makerFeePpm: isSet(object.makerFeePpm) ? Number(object.makerFeePpm) : 0,
      clobPairId: isSet(object.clobPairId) ? Number(object.clobPairId) : 0,
      fillAmount: isSet(object.fillAmount) ? BigInt(object.fillAmount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MEVLiquidationMatch>): MEVLiquidationMatch {
    const message = createBaseMEVLiquidationMatch();
    message.liquidatedSubaccountId = object.liquidatedSubaccountId !== undefined && object.liquidatedSubaccountId !== null ? SubaccountId.fromPartial(object.liquidatedSubaccountId) : undefined;
    message.insuranceFundDeltaQuoteQuantums = object.insuranceFundDeltaQuoteQuantums !== undefined && object.insuranceFundDeltaQuoteQuantums !== null ? BigInt(object.insuranceFundDeltaQuoteQuantums.toString()) : BigInt(0);
    message.makerOrderSubaccountId = object.makerOrderSubaccountId !== undefined && object.makerOrderSubaccountId !== null ? SubaccountId.fromPartial(object.makerOrderSubaccountId) : undefined;
    message.makerOrderSubticks = object.makerOrderSubticks !== undefined && object.makerOrderSubticks !== null ? BigInt(object.makerOrderSubticks.toString()) : BigInt(0);
    message.makerOrderIsBuy = object.makerOrderIsBuy ?? false;
    message.makerFeePpm = object.makerFeePpm ?? 0;
    message.clobPairId = object.clobPairId ?? 0;
    message.fillAmount = object.fillAmount !== undefined && object.fillAmount !== null ? BigInt(object.fillAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MEVLiquidationMatchAmino): MEVLiquidationMatch {
    return {
      liquidatedSubaccountId: object?.liquidated_subaccount_id ? SubaccountId.fromAmino(object.liquidated_subaccount_id) : undefined,
      insuranceFundDeltaQuoteQuantums: BigInt(object.insurance_fund_delta_quote_quantums),
      makerOrderSubaccountId: object?.maker_order_subaccount_id ? SubaccountId.fromAmino(object.maker_order_subaccount_id) : undefined,
      makerOrderSubticks: BigInt(object.maker_order_subticks),
      makerOrderIsBuy: object.maker_order_is_buy,
      makerFeePpm: object.maker_fee_ppm,
      clobPairId: object.clob_pair_id,
      fillAmount: BigInt(object.fill_amount)
    };
  },
  toAmino(message: MEVLiquidationMatch): MEVLiquidationMatchAmino {
    const obj: any = {};
    obj.liquidated_subaccount_id = message.liquidatedSubaccountId ? SubaccountId.toAmino(message.liquidatedSubaccountId) : undefined;
    obj.insurance_fund_delta_quote_quantums = message.insuranceFundDeltaQuoteQuantums ? message.insuranceFundDeltaQuoteQuantums.toString() : undefined;
    obj.maker_order_subaccount_id = message.makerOrderSubaccountId ? SubaccountId.toAmino(message.makerOrderSubaccountId) : undefined;
    obj.maker_order_subticks = message.makerOrderSubticks ? message.makerOrderSubticks.toString() : undefined;
    obj.maker_order_is_buy = message.makerOrderIsBuy;
    obj.maker_fee_ppm = message.makerFeePpm;
    obj.clob_pair_id = message.clobPairId;
    obj.fill_amount = message.fillAmount ? message.fillAmount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MEVLiquidationMatchAminoMsg): MEVLiquidationMatch {
    return MEVLiquidationMatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MEVLiquidationMatchProtoMsg): MEVLiquidationMatch {
    return MEVLiquidationMatch.decode(message.value);
  },
  toProto(message: MEVLiquidationMatch): Uint8Array {
    return MEVLiquidationMatch.encode(message).finish();
  },
  toProtoMsg(message: MEVLiquidationMatch): MEVLiquidationMatchProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.MEVLiquidationMatch",
      value: MEVLiquidationMatch.encode(message).finish()
    };
  }
};
function createBaseClobMidPrice(): ClobMidPrice {
  return {
    clobPair: ClobPair.fromPartial({}),
    subticks: BigInt(0)
  };
}
export const ClobMidPrice = {
  typeUrl: "/dydxprotocol.clob.ClobMidPrice",
  encode(message: ClobMidPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clobPair !== undefined) {
      ClobPair.encode(message.clobPair, writer.uint32(10).fork()).ldelim();
    }
    if (message.subticks !== BigInt(0)) {
      writer.uint32(16).uint64(message.subticks);
    }
    return writer;
  },
  fromJSON(object: any): ClobMidPrice {
    return {
      clobPair: isSet(object.clobPair) ? ClobPair.fromJSON(object.clobPair) : undefined,
      subticks: isSet(object.subticks) ? BigInt(object.subticks.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ClobMidPrice>): ClobMidPrice {
    const message = createBaseClobMidPrice();
    message.clobPair = object.clobPair !== undefined && object.clobPair !== null ? ClobPair.fromPartial(object.clobPair) : undefined;
    message.subticks = object.subticks !== undefined && object.subticks !== null ? BigInt(object.subticks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ClobMidPriceAmino): ClobMidPrice {
    return {
      clobPair: object?.clob_pair ? ClobPair.fromAmino(object.clob_pair) : undefined,
      subticks: BigInt(object.subticks)
    };
  },
  toAmino(message: ClobMidPrice): ClobMidPriceAmino {
    const obj: any = {};
    obj.clob_pair = message.clobPair ? ClobPair.toAmino(message.clobPair) : undefined;
    obj.subticks = message.subticks ? message.subticks.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClobMidPriceAminoMsg): ClobMidPrice {
    return ClobMidPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: ClobMidPriceProtoMsg): ClobMidPrice {
    return ClobMidPrice.decode(message.value);
  },
  toProto(message: ClobMidPrice): Uint8Array {
    return ClobMidPrice.encode(message).finish();
  },
  toProtoMsg(message: ClobMidPrice): ClobMidPriceProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.ClobMidPrice",
      value: ClobMidPrice.encode(message).finish()
    };
  }
};
function createBaseValidatorMevMatches(): ValidatorMevMatches {
  return {
    matches: [],
    liquidationMatches: []
  };
}
export const ValidatorMevMatches = {
  typeUrl: "/dydxprotocol.clob.ValidatorMevMatches",
  encode(message: ValidatorMevMatches, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.matches) {
      MEVMatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.liquidationMatches) {
      MEVLiquidationMatch.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ValidatorMevMatches {
    return {
      matches: Array.isArray(object?.matches) ? object.matches.map((e: any) => MEVMatch.fromJSON(e)) : [],
      liquidationMatches: Array.isArray(object?.liquidationMatches) ? object.liquidationMatches.map((e: any) => MEVLiquidationMatch.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ValidatorMevMatches>): ValidatorMevMatches {
    const message = createBaseValidatorMevMatches();
    message.matches = object.matches?.map(e => MEVMatch.fromPartial(e)) || [];
    message.liquidationMatches = object.liquidationMatches?.map(e => MEVLiquidationMatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorMevMatchesAmino): ValidatorMevMatches {
    return {
      matches: Array.isArray(object?.matches) ? object.matches.map((e: any) => MEVMatch.fromAmino(e)) : [],
      liquidationMatches: Array.isArray(object?.liquidation_matches) ? object.liquidation_matches.map((e: any) => MEVLiquidationMatch.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorMevMatches): ValidatorMevMatchesAmino {
    const obj: any = {};
    if (message.matches) {
      obj.matches = message.matches.map(e => e ? MEVMatch.toAmino(e) : undefined);
    } else {
      obj.matches = [];
    }
    if (message.liquidationMatches) {
      obj.liquidation_matches = message.liquidationMatches.map(e => e ? MEVLiquidationMatch.toAmino(e) : undefined);
    } else {
      obj.liquidation_matches = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorMevMatchesAminoMsg): ValidatorMevMatches {
    return ValidatorMevMatches.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorMevMatchesProtoMsg): ValidatorMevMatches {
    return ValidatorMevMatches.decode(message.value);
  },
  toProto(message: ValidatorMevMatches): Uint8Array {
    return ValidatorMevMatches.encode(message).finish();
  },
  toProtoMsg(message: ValidatorMevMatches): ValidatorMevMatchesProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.ValidatorMevMatches",
      value: ValidatorMevMatches.encode(message).finish()
    };
  }
};
function createBaseMevNodeToNodeMetrics(): MevNodeToNodeMetrics {
  return {
    validatorMevMatches: ValidatorMevMatches.fromPartial({}),
    clobMidPrices: []
  };
}
export const MevNodeToNodeMetrics = {
  typeUrl: "/dydxprotocol.clob.MevNodeToNodeMetrics",
  encode(message: MevNodeToNodeMetrics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorMevMatches !== undefined) {
      ValidatorMevMatches.encode(message.validatorMevMatches, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clobMidPrices) {
      ClobMidPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MevNodeToNodeMetrics {
    return {
      validatorMevMatches: isSet(object.validatorMevMatches) ? ValidatorMevMatches.fromJSON(object.validatorMevMatches) : undefined,
      clobMidPrices: Array.isArray(object?.clobMidPrices) ? object.clobMidPrices.map((e: any) => ClobMidPrice.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MevNodeToNodeMetrics>): MevNodeToNodeMetrics {
    const message = createBaseMevNodeToNodeMetrics();
    message.validatorMevMatches = object.validatorMevMatches !== undefined && object.validatorMevMatches !== null ? ValidatorMevMatches.fromPartial(object.validatorMevMatches) : undefined;
    message.clobMidPrices = object.clobMidPrices?.map(e => ClobMidPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MevNodeToNodeMetricsAmino): MevNodeToNodeMetrics {
    return {
      validatorMevMatches: object?.validator_mev_matches ? ValidatorMevMatches.fromAmino(object.validator_mev_matches) : undefined,
      clobMidPrices: Array.isArray(object?.clob_mid_prices) ? object.clob_mid_prices.map((e: any) => ClobMidPrice.fromAmino(e)) : []
    };
  },
  toAmino(message: MevNodeToNodeMetrics): MevNodeToNodeMetricsAmino {
    const obj: any = {};
    obj.validator_mev_matches = message.validatorMevMatches ? ValidatorMevMatches.toAmino(message.validatorMevMatches) : undefined;
    if (message.clobMidPrices) {
      obj.clob_mid_prices = message.clobMidPrices.map(e => e ? ClobMidPrice.toAmino(e) : undefined);
    } else {
      obj.clob_mid_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: MevNodeToNodeMetricsAminoMsg): MevNodeToNodeMetrics {
    return MevNodeToNodeMetrics.fromAmino(object.value);
  },
  fromProtoMsg(message: MevNodeToNodeMetricsProtoMsg): MevNodeToNodeMetrics {
    return MevNodeToNodeMetrics.decode(message.value);
  },
  toProto(message: MevNodeToNodeMetrics): Uint8Array {
    return MevNodeToNodeMetrics.encode(message).finish();
  },
  toProtoMsg(message: MevNodeToNodeMetrics): MevNodeToNodeMetricsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.MevNodeToNodeMetrics",
      value: MevNodeToNodeMetrics.encode(message).finish()
    };
  }
};