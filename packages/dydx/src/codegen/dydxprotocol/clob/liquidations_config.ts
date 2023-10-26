import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** LiquidationsConfig stores all configurable fields related to liquidations. */
export interface LiquidationsConfig {
  /**
   * The maximum liquidation fee (in parts-per-million). This fee goes
   * 100% to the insurance fund.
   */
  maxLiquidationFeePpm: number;
  /**
   * Limits around how much of a single position can be liquidated
   * within a single block.
   */
  positionBlockLimits: PositionBlockLimits;
  /**
   * Limits around how many quote quantums from a single subaccount can
   * be liquidated within a single block.
   */
  subaccountBlockLimits: SubaccountBlockLimits;
  /**
   * Config about how the fillable-price spread from the oracle price
   * increases based on the adjusted bankruptcy rating of the subaccount.
   */
  fillablePriceConfig: FillablePriceConfig;
}
export interface LiquidationsConfigProtoMsg {
  typeUrl: "/dydxprotocol.clob.LiquidationsConfig";
  value: Uint8Array;
}
/** LiquidationsConfig stores all configurable fields related to liquidations. */
export interface LiquidationsConfigAmino {
  /**
   * The maximum liquidation fee (in parts-per-million). This fee goes
   * 100% to the insurance fund.
   */
  max_liquidation_fee_ppm: number;
  /**
   * Limits around how much of a single position can be liquidated
   * within a single block.
   */
  position_block_limits?: PositionBlockLimitsAmino;
  /**
   * Limits around how many quote quantums from a single subaccount can
   * be liquidated within a single block.
   */
  subaccount_block_limits?: SubaccountBlockLimitsAmino;
  /**
   * Config about how the fillable-price spread from the oracle price
   * increases based on the adjusted bankruptcy rating of the subaccount.
   */
  fillable_price_config?: FillablePriceConfigAmino;
}
export interface LiquidationsConfigAminoMsg {
  type: "/dydxprotocol.clob.LiquidationsConfig";
  value: LiquidationsConfigAmino;
}
/** LiquidationsConfig stores all configurable fields related to liquidations. */
export interface LiquidationsConfigSDKType {
  max_liquidation_fee_ppm: number;
  position_block_limits: PositionBlockLimitsSDKType;
  subaccount_block_limits: SubaccountBlockLimitsSDKType;
  fillable_price_config: FillablePriceConfigSDKType;
}
/**
 * PositionBlockLimits stores all configurable fields related to limits
 * around how much of a single position can be liquidated within a single block.
 */
export interface PositionBlockLimits {
  /**
   * The minimum amount of quantums to liquidate for each message (in
   * quote quantums).
   * Overridden by the maximum size of the position.
   */
  minPositionNotionalLiquidated: bigint;
  /**
   * The maximum portion of the position liquidated (in parts-per-
   * million). Overridden by min_position_notional_liquidated.
   */
  maxPositionPortionLiquidatedPpm: number;
}
export interface PositionBlockLimitsProtoMsg {
  typeUrl: "/dydxprotocol.clob.PositionBlockLimits";
  value: Uint8Array;
}
/**
 * PositionBlockLimits stores all configurable fields related to limits
 * around how much of a single position can be liquidated within a single block.
 */
export interface PositionBlockLimitsAmino {
  /**
   * The minimum amount of quantums to liquidate for each message (in
   * quote quantums).
   * Overridden by the maximum size of the position.
   */
  min_position_notional_liquidated: string;
  /**
   * The maximum portion of the position liquidated (in parts-per-
   * million). Overridden by min_position_notional_liquidated.
   */
  max_position_portion_liquidated_ppm: number;
}
export interface PositionBlockLimitsAminoMsg {
  type: "/dydxprotocol.clob.PositionBlockLimits";
  value: PositionBlockLimitsAmino;
}
/**
 * PositionBlockLimits stores all configurable fields related to limits
 * around how much of a single position can be liquidated within a single block.
 */
export interface PositionBlockLimitsSDKType {
  min_position_notional_liquidated: bigint;
  max_position_portion_liquidated_ppm: number;
}
/**
 * SubaccountBlockLimits stores all configurable fields related to limits
 * around how many quote quantums from a single subaccount can
 * be liquidated within a single block.
 */
export interface SubaccountBlockLimits {
  /**
   * The maximum notional amount that a single subaccount can have
   * liquidated (in quote quantums) per block.
   */
  maxNotionalLiquidated: bigint;
  /**
   * The maximum insurance-fund payout amount for a given subaccount
   * per block. I.e. how much it can cover for that subaccount.
   */
  maxQuantumsInsuranceLost: bigint;
}
export interface SubaccountBlockLimitsProtoMsg {
  typeUrl: "/dydxprotocol.clob.SubaccountBlockLimits";
  value: Uint8Array;
}
/**
 * SubaccountBlockLimits stores all configurable fields related to limits
 * around how many quote quantums from a single subaccount can
 * be liquidated within a single block.
 */
export interface SubaccountBlockLimitsAmino {
  /**
   * The maximum notional amount that a single subaccount can have
   * liquidated (in quote quantums) per block.
   */
  max_notional_liquidated: string;
  /**
   * The maximum insurance-fund payout amount for a given subaccount
   * per block. I.e. how much it can cover for that subaccount.
   */
  max_quantums_insurance_lost: string;
}
export interface SubaccountBlockLimitsAminoMsg {
  type: "/dydxprotocol.clob.SubaccountBlockLimits";
  value: SubaccountBlockLimitsAmino;
}
/**
 * SubaccountBlockLimits stores all configurable fields related to limits
 * around how many quote quantums from a single subaccount can
 * be liquidated within a single block.
 */
export interface SubaccountBlockLimitsSDKType {
  max_notional_liquidated: bigint;
  max_quantums_insurance_lost: bigint;
}
/**
 * FillablePriceConfig stores all configurable fields related to calculating
 * the fillable price for liquidating a position.
 */
export interface FillablePriceConfig {
  /** The rate at which the Adjusted Bankruptcy Rating increases. */
  bankruptcyAdjustmentPpm: number;
  /**
   * The maximum value that the liquidation spread can take, as
   * a ratio against the position's maintenance margin.
   */
  spreadToMaintenanceMarginRatioPpm: number;
}
export interface FillablePriceConfigProtoMsg {
  typeUrl: "/dydxprotocol.clob.FillablePriceConfig";
  value: Uint8Array;
}
/**
 * FillablePriceConfig stores all configurable fields related to calculating
 * the fillable price for liquidating a position.
 */
export interface FillablePriceConfigAmino {
  /** The rate at which the Adjusted Bankruptcy Rating increases. */
  bankruptcy_adjustment_ppm: number;
  /**
   * The maximum value that the liquidation spread can take, as
   * a ratio against the position's maintenance margin.
   */
  spread_to_maintenance_margin_ratio_ppm: number;
}
export interface FillablePriceConfigAminoMsg {
  type: "/dydxprotocol.clob.FillablePriceConfig";
  value: FillablePriceConfigAmino;
}
/**
 * FillablePriceConfig stores all configurable fields related to calculating
 * the fillable price for liquidating a position.
 */
export interface FillablePriceConfigSDKType {
  bankruptcy_adjustment_ppm: number;
  spread_to_maintenance_margin_ratio_ppm: number;
}
function createBaseLiquidationsConfig(): LiquidationsConfig {
  return {
    maxLiquidationFeePpm: 0,
    positionBlockLimits: PositionBlockLimits.fromPartial({}),
    subaccountBlockLimits: SubaccountBlockLimits.fromPartial({}),
    fillablePriceConfig: FillablePriceConfig.fromPartial({})
  };
}
export const LiquidationsConfig = {
  typeUrl: "/dydxprotocol.clob.LiquidationsConfig",
  encode(message: LiquidationsConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxLiquidationFeePpm !== 0) {
      writer.uint32(8).uint32(message.maxLiquidationFeePpm);
    }
    if (message.positionBlockLimits !== undefined) {
      PositionBlockLimits.encode(message.positionBlockLimits, writer.uint32(18).fork()).ldelim();
    }
    if (message.subaccountBlockLimits !== undefined) {
      SubaccountBlockLimits.encode(message.subaccountBlockLimits, writer.uint32(26).fork()).ldelim();
    }
    if (message.fillablePriceConfig !== undefined) {
      FillablePriceConfig.encode(message.fillablePriceConfig, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidationsConfig {
    return {
      maxLiquidationFeePpm: isSet(object.maxLiquidationFeePpm) ? Number(object.maxLiquidationFeePpm) : 0,
      positionBlockLimits: isSet(object.positionBlockLimits) ? PositionBlockLimits.fromJSON(object.positionBlockLimits) : undefined,
      subaccountBlockLimits: isSet(object.subaccountBlockLimits) ? SubaccountBlockLimits.fromJSON(object.subaccountBlockLimits) : undefined,
      fillablePriceConfig: isSet(object.fillablePriceConfig) ? FillablePriceConfig.fromJSON(object.fillablePriceConfig) : undefined
    };
  },
  fromPartial(object: Partial<LiquidationsConfig>): LiquidationsConfig {
    const message = createBaseLiquidationsConfig();
    message.maxLiquidationFeePpm = object.maxLiquidationFeePpm ?? 0;
    message.positionBlockLimits = object.positionBlockLimits !== undefined && object.positionBlockLimits !== null ? PositionBlockLimits.fromPartial(object.positionBlockLimits) : undefined;
    message.subaccountBlockLimits = object.subaccountBlockLimits !== undefined && object.subaccountBlockLimits !== null ? SubaccountBlockLimits.fromPartial(object.subaccountBlockLimits) : undefined;
    message.fillablePriceConfig = object.fillablePriceConfig !== undefined && object.fillablePriceConfig !== null ? FillablePriceConfig.fromPartial(object.fillablePriceConfig) : undefined;
    return message;
  },
  fromAmino(object: LiquidationsConfigAmino): LiquidationsConfig {
    return {
      maxLiquidationFeePpm: object.max_liquidation_fee_ppm,
      positionBlockLimits: object?.position_block_limits ? PositionBlockLimits.fromAmino(object.position_block_limits) : undefined,
      subaccountBlockLimits: object?.subaccount_block_limits ? SubaccountBlockLimits.fromAmino(object.subaccount_block_limits) : undefined,
      fillablePriceConfig: object?.fillable_price_config ? FillablePriceConfig.fromAmino(object.fillable_price_config) : undefined
    };
  },
  toAmino(message: LiquidationsConfig): LiquidationsConfigAmino {
    const obj: any = {};
    obj.max_liquidation_fee_ppm = message.maxLiquidationFeePpm;
    obj.position_block_limits = message.positionBlockLimits ? PositionBlockLimits.toAmino(message.positionBlockLimits) : undefined;
    obj.subaccount_block_limits = message.subaccountBlockLimits ? SubaccountBlockLimits.toAmino(message.subaccountBlockLimits) : undefined;
    obj.fillable_price_config = message.fillablePriceConfig ? FillablePriceConfig.toAmino(message.fillablePriceConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidationsConfigAminoMsg): LiquidationsConfig {
    return LiquidationsConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidationsConfigProtoMsg): LiquidationsConfig {
    return LiquidationsConfig.decode(message.value);
  },
  toProto(message: LiquidationsConfig): Uint8Array {
    return LiquidationsConfig.encode(message).finish();
  },
  toProtoMsg(message: LiquidationsConfig): LiquidationsConfigProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.LiquidationsConfig",
      value: LiquidationsConfig.encode(message).finish()
    };
  }
};
function createBasePositionBlockLimits(): PositionBlockLimits {
  return {
    minPositionNotionalLiquidated: BigInt(0),
    maxPositionPortionLiquidatedPpm: 0
  };
}
export const PositionBlockLimits = {
  typeUrl: "/dydxprotocol.clob.PositionBlockLimits",
  encode(message: PositionBlockLimits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minPositionNotionalLiquidated !== BigInt(0)) {
      writer.uint32(8).uint64(message.minPositionNotionalLiquidated);
    }
    if (message.maxPositionPortionLiquidatedPpm !== 0) {
      writer.uint32(16).uint32(message.maxPositionPortionLiquidatedPpm);
    }
    return writer;
  },
  fromJSON(object: any): PositionBlockLimits {
    return {
      minPositionNotionalLiquidated: isSet(object.minPositionNotionalLiquidated) ? BigInt(object.minPositionNotionalLiquidated.toString()) : BigInt(0),
      maxPositionPortionLiquidatedPpm: isSet(object.maxPositionPortionLiquidatedPpm) ? Number(object.maxPositionPortionLiquidatedPpm) : 0
    };
  },
  fromPartial(object: Partial<PositionBlockLimits>): PositionBlockLimits {
    const message = createBasePositionBlockLimits();
    message.minPositionNotionalLiquidated = object.minPositionNotionalLiquidated !== undefined && object.minPositionNotionalLiquidated !== null ? BigInt(object.minPositionNotionalLiquidated.toString()) : BigInt(0);
    message.maxPositionPortionLiquidatedPpm = object.maxPositionPortionLiquidatedPpm ?? 0;
    return message;
  },
  fromAmino(object: PositionBlockLimitsAmino): PositionBlockLimits {
    return {
      minPositionNotionalLiquidated: BigInt(object.min_position_notional_liquidated),
      maxPositionPortionLiquidatedPpm: object.max_position_portion_liquidated_ppm
    };
  },
  toAmino(message: PositionBlockLimits): PositionBlockLimitsAmino {
    const obj: any = {};
    obj.min_position_notional_liquidated = message.minPositionNotionalLiquidated ? message.minPositionNotionalLiquidated.toString() : undefined;
    obj.max_position_portion_liquidated_ppm = message.maxPositionPortionLiquidatedPpm;
    return obj;
  },
  fromAminoMsg(object: PositionBlockLimitsAminoMsg): PositionBlockLimits {
    return PositionBlockLimits.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionBlockLimitsProtoMsg): PositionBlockLimits {
    return PositionBlockLimits.decode(message.value);
  },
  toProto(message: PositionBlockLimits): Uint8Array {
    return PositionBlockLimits.encode(message).finish();
  },
  toProtoMsg(message: PositionBlockLimits): PositionBlockLimitsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.PositionBlockLimits",
      value: PositionBlockLimits.encode(message).finish()
    };
  }
};
function createBaseSubaccountBlockLimits(): SubaccountBlockLimits {
  return {
    maxNotionalLiquidated: BigInt(0),
    maxQuantumsInsuranceLost: BigInt(0)
  };
}
export const SubaccountBlockLimits = {
  typeUrl: "/dydxprotocol.clob.SubaccountBlockLimits",
  encode(message: SubaccountBlockLimits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxNotionalLiquidated !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxNotionalLiquidated);
    }
    if (message.maxQuantumsInsuranceLost !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxQuantumsInsuranceLost);
    }
    return writer;
  },
  fromJSON(object: any): SubaccountBlockLimits {
    return {
      maxNotionalLiquidated: isSet(object.maxNotionalLiquidated) ? BigInt(object.maxNotionalLiquidated.toString()) : BigInt(0),
      maxQuantumsInsuranceLost: isSet(object.maxQuantumsInsuranceLost) ? BigInt(object.maxQuantumsInsuranceLost.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<SubaccountBlockLimits>): SubaccountBlockLimits {
    const message = createBaseSubaccountBlockLimits();
    message.maxNotionalLiquidated = object.maxNotionalLiquidated !== undefined && object.maxNotionalLiquidated !== null ? BigInt(object.maxNotionalLiquidated.toString()) : BigInt(0);
    message.maxQuantumsInsuranceLost = object.maxQuantumsInsuranceLost !== undefined && object.maxQuantumsInsuranceLost !== null ? BigInt(object.maxQuantumsInsuranceLost.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SubaccountBlockLimitsAmino): SubaccountBlockLimits {
    return {
      maxNotionalLiquidated: BigInt(object.max_notional_liquidated),
      maxQuantumsInsuranceLost: BigInt(object.max_quantums_insurance_lost)
    };
  },
  toAmino(message: SubaccountBlockLimits): SubaccountBlockLimitsAmino {
    const obj: any = {};
    obj.max_notional_liquidated = message.maxNotionalLiquidated ? message.maxNotionalLiquidated.toString() : undefined;
    obj.max_quantums_insurance_lost = message.maxQuantumsInsuranceLost ? message.maxQuantumsInsuranceLost.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SubaccountBlockLimitsAminoMsg): SubaccountBlockLimits {
    return SubaccountBlockLimits.fromAmino(object.value);
  },
  fromProtoMsg(message: SubaccountBlockLimitsProtoMsg): SubaccountBlockLimits {
    return SubaccountBlockLimits.decode(message.value);
  },
  toProto(message: SubaccountBlockLimits): Uint8Array {
    return SubaccountBlockLimits.encode(message).finish();
  },
  toProtoMsg(message: SubaccountBlockLimits): SubaccountBlockLimitsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.SubaccountBlockLimits",
      value: SubaccountBlockLimits.encode(message).finish()
    };
  }
};
function createBaseFillablePriceConfig(): FillablePriceConfig {
  return {
    bankruptcyAdjustmentPpm: 0,
    spreadToMaintenanceMarginRatioPpm: 0
  };
}
export const FillablePriceConfig = {
  typeUrl: "/dydxprotocol.clob.FillablePriceConfig",
  encode(message: FillablePriceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bankruptcyAdjustmentPpm !== 0) {
      writer.uint32(8).uint32(message.bankruptcyAdjustmentPpm);
    }
    if (message.spreadToMaintenanceMarginRatioPpm !== 0) {
      writer.uint32(16).uint32(message.spreadToMaintenanceMarginRatioPpm);
    }
    return writer;
  },
  fromJSON(object: any): FillablePriceConfig {
    return {
      bankruptcyAdjustmentPpm: isSet(object.bankruptcyAdjustmentPpm) ? Number(object.bankruptcyAdjustmentPpm) : 0,
      spreadToMaintenanceMarginRatioPpm: isSet(object.spreadToMaintenanceMarginRatioPpm) ? Number(object.spreadToMaintenanceMarginRatioPpm) : 0
    };
  },
  fromPartial(object: Partial<FillablePriceConfig>): FillablePriceConfig {
    const message = createBaseFillablePriceConfig();
    message.bankruptcyAdjustmentPpm = object.bankruptcyAdjustmentPpm ?? 0;
    message.spreadToMaintenanceMarginRatioPpm = object.spreadToMaintenanceMarginRatioPpm ?? 0;
    return message;
  },
  fromAmino(object: FillablePriceConfigAmino): FillablePriceConfig {
    return {
      bankruptcyAdjustmentPpm: object.bankruptcy_adjustment_ppm,
      spreadToMaintenanceMarginRatioPpm: object.spread_to_maintenance_margin_ratio_ppm
    };
  },
  toAmino(message: FillablePriceConfig): FillablePriceConfigAmino {
    const obj: any = {};
    obj.bankruptcy_adjustment_ppm = message.bankruptcyAdjustmentPpm;
    obj.spread_to_maintenance_margin_ratio_ppm = message.spreadToMaintenanceMarginRatioPpm;
    return obj;
  },
  fromAminoMsg(object: FillablePriceConfigAminoMsg): FillablePriceConfig {
    return FillablePriceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: FillablePriceConfigProtoMsg): FillablePriceConfig {
    return FillablePriceConfig.decode(message.value);
  },
  toProto(message: FillablePriceConfig): Uint8Array {
    return FillablePriceConfig.encode(message).finish();
  },
  toProtoMsg(message: FillablePriceConfig): FillablePriceConfigProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.FillablePriceConfig",
      value: FillablePriceConfig.encode(message).finish()
    };
  }
};