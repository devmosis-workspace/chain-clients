import { SubaccountId, SubaccountIdSDKType } from "../subaccounts/subaccount";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * PerpetualLiquidationInfo holds information about a liquidation that occurred
 * for a position held by a subaccount.
 * Note this proto is defined to make it easier to hash
 * the metadata of a liquidation, and is never written to state.
 */
export interface PerpetualLiquidationInfo {
  /**
   * The id of the subaccount that got liquidated/deleveraged or was deleveraged
   * onto.
   */
  subaccountId: SubaccountId;
  /** The id of the perpetual involved. */
  perpetualId: number;
}
export interface PerpetualLiquidationInfoProtoMsg {
  typeUrl: "/dydxprotocol.clob.PerpetualLiquidationInfo";
  value: Uint8Array;
}
/**
 * PerpetualLiquidationInfo holds information about a liquidation that occurred
 * for a position held by a subaccount.
 * Note this proto is defined to make it easier to hash
 * the metadata of a liquidation, and is never written to state.
 */
export interface PerpetualLiquidationInfoSDKType {
  subaccount_id: SubaccountIdSDKType;
  perpetual_id: number;
}
/**
 * SubaccountLiquidationInfo holds liquidation information per-subaccount in the
 * current block.
 */
export interface SubaccountLiquidationInfo {
  /**
   * An unsorted list of unique perpetual IDs that the subaccount has previously
   * liquidated.
   */
  perpetualsLiquidated: number[];
  /**
   * The notional value (in quote quantums, determined by the oracle price) of
   * all positions liquidated for this subaccount.
   */
  notionalLiquidated: bigint;
  /**
   * The amount of funds that the insurance fund has lost
   * covering this subaccount.
   */
  quantumsInsuranceLost: bigint;
}
export interface SubaccountLiquidationInfoProtoMsg {
  typeUrl: "/dydxprotocol.clob.SubaccountLiquidationInfo";
  value: Uint8Array;
}
/**
 * SubaccountLiquidationInfo holds liquidation information per-subaccount in the
 * current block.
 */
export interface SubaccountLiquidationInfoSDKType {
  perpetuals_liquidated: number[];
  notional_liquidated: bigint;
  quantums_insurance_lost: bigint;
}
/**
 * SubaccountOpenPositionInfo holds information about open positions for a
 * perpetual.
 */
export interface SubaccountOpenPositionInfo {
  /** The id of the perpetual. */
  perpetualId: number;
  subaccountsWithLongPosition: SubaccountId[];
  subaccountsWithShortPosition: SubaccountId[];
}
export interface SubaccountOpenPositionInfoProtoMsg {
  typeUrl: "/dydxprotocol.clob.SubaccountOpenPositionInfo";
  value: Uint8Array;
}
/**
 * SubaccountOpenPositionInfo holds information about open positions for a
 * perpetual.
 */
export interface SubaccountOpenPositionInfoSDKType {
  perpetual_id: number;
  subaccounts_with_long_position: SubaccountIdSDKType[];
  subaccounts_with_short_position: SubaccountIdSDKType[];
}
function createBasePerpetualLiquidationInfo(): PerpetualLiquidationInfo {
  return {
    subaccountId: SubaccountId.fromPartial({}),
    perpetualId: 0
  };
}
export const PerpetualLiquidationInfo = {
  typeUrl: "/dydxprotocol.clob.PerpetualLiquidationInfo",
  encode(message: PerpetualLiquidationInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== undefined) {
      SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.perpetualId !== 0) {
      writer.uint32(16).uint32(message.perpetualId);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualLiquidationInfo {
    return {
      subaccountId: isSet(object.subaccountId) ? SubaccountId.fromJSON(object.subaccountId) : undefined,
      perpetualId: isSet(object.perpetualId) ? Number(object.perpetualId) : 0
    };
  },
  fromPartial(object: Partial<PerpetualLiquidationInfo>): PerpetualLiquidationInfo {
    const message = createBasePerpetualLiquidationInfo();
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? SubaccountId.fromPartial(object.subaccountId) : undefined;
    message.perpetualId = object.perpetualId ?? 0;
    return message;
  },
  fromAmino(object: PerpetualLiquidationInfoAmino): PerpetualLiquidationInfo {
    const message = createBasePerpetualLiquidationInfo();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = SubaccountId.fromAmino(object.subaccount_id);
    }
    if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
      message.perpetualId = object.perpetual_id;
    }
    return message;
  },
  toAmino(message: PerpetualLiquidationInfo): PerpetualLiquidationInfoAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? SubaccountId.toAmino(message.subaccountId) : undefined;
    obj.perpetual_id = message.perpetualId;
    return obj;
  },
  fromAminoMsg(object: PerpetualLiquidationInfoAminoMsg): PerpetualLiquidationInfo {
    return PerpetualLiquidationInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualLiquidationInfoProtoMsg): PerpetualLiquidationInfo {
    return PerpetualLiquidationInfo.decode(message.value);
  },
  toProto(message: PerpetualLiquidationInfo): Uint8Array {
    return PerpetualLiquidationInfo.encode(message).finish();
  },
  toProtoMsg(message: PerpetualLiquidationInfo): PerpetualLiquidationInfoProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.PerpetualLiquidationInfo",
      value: PerpetualLiquidationInfo.encode(message).finish()
    };
  }
};
function createBaseSubaccountLiquidationInfo(): SubaccountLiquidationInfo {
  return {
    perpetualsLiquidated: [],
    notionalLiquidated: BigInt(0),
    quantumsInsuranceLost: BigInt(0)
  };
}
export const SubaccountLiquidationInfo = {
  typeUrl: "/dydxprotocol.clob.SubaccountLiquidationInfo",
  encode(message: SubaccountLiquidationInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.perpetualsLiquidated) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.notionalLiquidated !== BigInt(0)) {
      writer.uint32(16).uint64(message.notionalLiquidated);
    }
    if (message.quantumsInsuranceLost !== BigInt(0)) {
      writer.uint32(24).uint64(message.quantumsInsuranceLost);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountLiquidationInfo {
    return {
      perpetualsLiquidated: Array.isArray(object?.perpetualsLiquidated) ? object.perpetualsLiquidated.map((e: any) => Number(e)) : [],
      notionalLiquidated: isSet(object.notionalLiquidated) ? BigInt(object.notionalLiquidated.toString()) : BigInt(0),
      quantumsInsuranceLost: isSet(object.quantumsInsuranceLost) ? BigInt(object.quantumsInsuranceLost.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<SubaccountLiquidationInfo>): SubaccountLiquidationInfo {
    const message = createBaseSubaccountLiquidationInfo();
    message.perpetualsLiquidated = object.perpetualsLiquidated?.map(e => e) || [];
    message.notionalLiquidated = object.notionalLiquidated !== undefined && object.notionalLiquidated !== null ? BigInt(object.notionalLiquidated.toString()) : BigInt(0);
    message.quantumsInsuranceLost = object.quantumsInsuranceLost !== undefined && object.quantumsInsuranceLost !== null ? BigInt(object.quantumsInsuranceLost.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SubaccountLiquidationInfoAmino): SubaccountLiquidationInfo {
    const message = createBaseSubaccountLiquidationInfo();
    message.perpetualsLiquidated = object.perpetuals_liquidated?.map(e => e) || [];
    if (object.notional_liquidated !== undefined && object.notional_liquidated !== null) {
      message.notionalLiquidated = BigInt(object.notional_liquidated);
    }
    if (object.quantums_insurance_lost !== undefined && object.quantums_insurance_lost !== null) {
      message.quantumsInsuranceLost = BigInt(object.quantums_insurance_lost);
    }
    return message;
  },
  toAmino(message: SubaccountLiquidationInfo): SubaccountLiquidationInfoAmino {
    const obj: any = {};
    if (message.perpetualsLiquidated) {
      obj.perpetuals_liquidated = message.perpetualsLiquidated.map(e => e);
    } else {
      obj.perpetuals_liquidated = [];
    }
    obj.notional_liquidated = message.notionalLiquidated ? message.notionalLiquidated.toString() : undefined;
    obj.quantums_insurance_lost = message.quantumsInsuranceLost ? message.quantumsInsuranceLost.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountLiquidationInfoAminoMsg): SubaccountLiquidationInfo {
    return SubaccountLiquidationInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountLiquidationInfoProtoMsg): SubaccountLiquidationInfo {
    return SubaccountLiquidationInfo.decode(message.value);
  },
  toProto(message: SubaccountLiquidationInfo): Uint8Array {
    return SubaccountLiquidationInfo.encode(message).finish();
  },
  toProtoMsg(message: SubaccountLiquidationInfo): SubaccountLiquidationInfoProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.SubaccountLiquidationInfo",
      value: SubaccountLiquidationInfo.encode(message).finish()
    };
  }
};
function createBaseSubaccountOpenPositionInfo(): SubaccountOpenPositionInfo {
  return {
    perpetualId: 0,
    subaccountsWithLongPosition: [],
    subaccountsWithShortPosition: []
  };
}
export const SubaccountOpenPositionInfo = {
  typeUrl: "/dydxprotocol.clob.SubaccountOpenPositionInfo",
  encode(message: SubaccountOpenPositionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetualId !== 0) {
      writer.uint32(8).uint32(message.perpetualId);
    }
    for (const v of message.subaccountsWithLongPosition) {
      SubaccountId.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subaccountsWithShortPosition) {
      SubaccountId.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SubaccountOpenPositionInfo {
    return {
      perpetualId: isSet(object.perpetualId) ? Number(object.perpetualId) : 0,
      subaccountsWithLongPosition: Array.isArray(object?.subaccountsWithLongPosition) ? object.subaccountsWithLongPosition.map((e: any) => SubaccountId.fromJSON(e)) : [],
      subaccountsWithShortPosition: Array.isArray(object?.subaccountsWithShortPosition) ? object.subaccountsWithShortPosition.map((e: any) => SubaccountId.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SubaccountOpenPositionInfo>): SubaccountOpenPositionInfo {
    const message = createBaseSubaccountOpenPositionInfo();
    message.perpetualId = object.perpetualId ?? 0;
    message.subaccountsWithLongPosition = object.subaccountsWithLongPosition?.map(e => SubaccountId.fromPartial(e)) || [];
    message.subaccountsWithShortPosition = object.subaccountsWithShortPosition?.map(e => SubaccountId.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SubaccountOpenPositionInfoAmino): SubaccountOpenPositionInfo {
    const message = createBaseSubaccountOpenPositionInfo();
    if (object.perpetual_id !== undefined && object.perpetual_id !== null) {
      message.perpetualId = object.perpetual_id;
    }
    message.subaccountsWithLongPosition = object.subaccounts_with_long_position?.map(e => SubaccountId.fromAmino(e)) || [];
    message.subaccountsWithShortPosition = object.subaccounts_with_short_position?.map(e => SubaccountId.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SubaccountOpenPositionInfo): SubaccountOpenPositionInfoAmino {
    const obj: any = {};
    obj.perpetual_id = message.perpetualId;
    if (message.subaccountsWithLongPosition) {
      obj.subaccounts_with_long_position = message.subaccountsWithLongPosition.map(e => e ? SubaccountId.toAmino(e) : undefined);
    } else {
      obj.subaccounts_with_long_position = [];
    }
    if (message.subaccountsWithShortPosition) {
      obj.subaccounts_with_short_position = message.subaccountsWithShortPosition.map(e => e ? SubaccountId.toAmino(e) : undefined);
    } else {
      obj.subaccounts_with_short_position = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubaccountOpenPositionInfoAminoMsg): SubaccountOpenPositionInfo {
    return SubaccountOpenPositionInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountOpenPositionInfoProtoMsg): SubaccountOpenPositionInfo {
    return SubaccountOpenPositionInfo.decode(message.value);
  },
  toProto(message: SubaccountOpenPositionInfo): Uint8Array {
    return SubaccountOpenPositionInfo.encode(message).finish();
  },
  toProtoMsg(message: SubaccountOpenPositionInfo): SubaccountOpenPositionInfoProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.SubaccountOpenPositionInfo",
      value: SubaccountOpenPositionInfo.encode(message).finish()
    };
  }
};