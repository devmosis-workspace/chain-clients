import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
/** Perpetual represents a perpetual on the dYdX exchange. */
export interface Perpetual {
  /** PerpetualParams is the parameters of the perpetual. */
  params: PerpetualParams;
  /**
   * The current index determined by the cumulative all-time
   * history of the funding mechanism. Starts at zero.
   */
  fundingIndex: Uint8Array;
}
export interface PerpetualProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.Perpetual";
  value: Uint8Array;
}
/** Perpetual represents a perpetual on the dYdX exchange. */
export interface PerpetualAmino {
  /** PerpetualParams is the parameters of the perpetual. */
  params?: PerpetualParamsAmino;
  /**
   * The current index determined by the cumulative all-time
   * history of the funding mechanism. Starts at zero.
   */
  funding_index: Uint8Array;
}
export interface PerpetualAminoMsg {
  type: "/dydxprotocol.perpetuals.Perpetual";
  value: PerpetualAmino;
}
/** Perpetual represents a perpetual on the dYdX exchange. */
export interface PerpetualSDKType {
  params: PerpetualParamsSDKType;
  funding_index: Uint8Array;
}
/**
 * PerpetualParams represents the parameters of a perpetual on the dYdX
 * exchange.
 */
export interface PerpetualParams {
  /** Unique, sequentially-generated. */
  id: number;
  /** The name of the `Perpetual` (e.g. `BTC-USD`). */
  ticker: string;
  /**
   * The market associated with this `Perpetual`. It
   * acts as the oracle price for the purposes of calculating
   * collateral, margin requirements, and funding rates.
   */
  marketId: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   */
  atomicResolution: number;
  /**
   * The default funding payment if there is no price premium. In
   * parts-per-million.
   */
  defaultFundingPpm: number;
  /** The liquidity_tier that this perpetual is associated with. */
  liquidityTier: number;
}
export interface PerpetualParamsProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.PerpetualParams";
  value: Uint8Array;
}
/**
 * PerpetualParams represents the parameters of a perpetual on the dYdX
 * exchange.
 */
export interface PerpetualParamsAmino {
  /** Unique, sequentially-generated. */
  id: number;
  /** The name of the `Perpetual` (e.g. `BTC-USD`). */
  ticker: string;
  /**
   * The market associated with this `Perpetual`. It
   * acts as the oracle price for the purposes of calculating
   * collateral, margin requirements, and funding rates.
   */
  market_id: number;
  /**
   * The exponent for converting an atomic amount (`size = 1`)
   * to a full coin. For example, if `AtomicResolution = -8`
   * then a `PerpetualPosition` with `size = 1e8` is equivalent to
   * a position size of one full coin.
   */
  atomic_resolution: number;
  /**
   * The default funding payment if there is no price premium. In
   * parts-per-million.
   */
  default_funding_ppm: number;
  /** The liquidity_tier that this perpetual is associated with. */
  liquidity_tier: number;
}
export interface PerpetualParamsAminoMsg {
  type: "/dydxprotocol.perpetuals.PerpetualParams";
  value: PerpetualParamsAmino;
}
/**
 * PerpetualParams represents the parameters of a perpetual on the dYdX
 * exchange.
 */
export interface PerpetualParamsSDKType {
  id: number;
  ticker: string;
  market_id: number;
  atomic_resolution: number;
  default_funding_ppm: number;
  liquidity_tier: number;
}
/** MarketPremiums stores a list of premiums for a single perpetual market. */
export interface MarketPremiums {
  /** perpetual_id is the Id of the perpetual market. */
  perpetualId: number;
  /**
   * premiums is a list of premium values for a perpetual market. Since most
   * premiums are zeros under "stable" market conditions, only non-zero values
   * are stored in this list.
   */
  premiums: number[];
}
export interface MarketPremiumsProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.MarketPremiums";
  value: Uint8Array;
}
/** MarketPremiums stores a list of premiums for a single perpetual market. */
export interface MarketPremiumsAmino {
  /** perpetual_id is the Id of the perpetual market. */
  perpetual_id: number;
  /**
   * premiums is a list of premium values for a perpetual market. Since most
   * premiums are zeros under "stable" market conditions, only non-zero values
   * are stored in this list.
   */
  premiums: number[];
}
export interface MarketPremiumsAminoMsg {
  type: "/dydxprotocol.perpetuals.MarketPremiums";
  value: MarketPremiumsAmino;
}
/** MarketPremiums stores a list of premiums for a single perpetual market. */
export interface MarketPremiumsSDKType {
  perpetual_id: number;
  premiums: number[];
}
/**
 * PremiumStore is a struct to store a perpetual premiums for all
 * perpetual markets. It stores a list of `MarketPremiums`, each of which
 * corresponds to a perpetual market and stores a list of non-zero premium
 * values for that market.
 * This struct can either be used to store `PremiumVotes` or
 * `PremiumSamples`.
 */
export interface PremiumStore {
  /**
   * all_market_premiums a list of `MarketPremiums`, each corresponding to
   * a perpetual market.
   */
  allMarketPremiums: MarketPremiums[];
  /**
   * number of rounds where premium values were added. This value indicates
   * the total number of premiums (zeros and non-zeros) for each
   * `MarketPremiums` struct. Note that in the edge case a perpetual market was
   * added in the middle of a epoch, we don't keep a seperate count for that
   * market. This means we treat this market as having zero premiums before it
   * was added.
   */
  numPremiums: number;
}
export interface PremiumStoreProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.PremiumStore";
  value: Uint8Array;
}
/**
 * PremiumStore is a struct to store a perpetual premiums for all
 * perpetual markets. It stores a list of `MarketPremiums`, each of which
 * corresponds to a perpetual market and stores a list of non-zero premium
 * values for that market.
 * This struct can either be used to store `PremiumVotes` or
 * `PremiumSamples`.
 */
export interface PremiumStoreAmino {
  /**
   * all_market_premiums a list of `MarketPremiums`, each corresponding to
   * a perpetual market.
   */
  all_market_premiums: MarketPremiumsAmino[];
  /**
   * number of rounds where premium values were added. This value indicates
   * the total number of premiums (zeros and non-zeros) for each
   * `MarketPremiums` struct. Note that in the edge case a perpetual market was
   * added in the middle of a epoch, we don't keep a seperate count for that
   * market. This means we treat this market as having zero premiums before it
   * was added.
   */
  num_premiums: number;
}
export interface PremiumStoreAminoMsg {
  type: "/dydxprotocol.perpetuals.PremiumStore";
  value: PremiumStoreAmino;
}
/**
 * PremiumStore is a struct to store a perpetual premiums for all
 * perpetual markets. It stores a list of `MarketPremiums`, each of which
 * corresponds to a perpetual market and stores a list of non-zero premium
 * values for that market.
 * This struct can either be used to store `PremiumVotes` or
 * `PremiumSamples`.
 */
export interface PremiumStoreSDKType {
  all_market_premiums: MarketPremiumsSDKType[];
  num_premiums: number;
}
/** LiquidityTier stores margin information. */
export interface LiquidityTier {
  /** Unique id. */
  id: number;
  /** The name of the tier purely for mnemonic purposes, e.g. "Gold". */
  name: string;
  /**
   * The margin fraction needed to open a position.
   * In parts-per-million.
   */
  initialMarginPpm: number;
  /**
   * The fraction of the initial-margin that the maintenance-margin is,
   * e.g. 50%. In parts-per-million.
   */
  maintenanceFractionPpm: number;
  /**
   * The maximum position size at which the margin requirements are
   * not increased over the default values. Above this position size,
   * the margin requirements increase at a rate of sqrt(size).
   */
  basePositionNotional: bigint;
  /**
   * The impact notional amount (in quote quantums) is used to determine impact
   * bid/ask prices and its recommended value is 500 USDC / initial margin
   * fraction.
   * - Impact bid price = average execution price for a market sell of the
   * impact notional value.
   * - Impact ask price = average execution price for a market buy of the
   * impact notional value.
   */
  impactNotional: bigint;
}
export interface LiquidityTierProtoMsg {
  typeUrl: "/dydxprotocol.perpetuals.LiquidityTier";
  value: Uint8Array;
}
/** LiquidityTier stores margin information. */
export interface LiquidityTierAmino {
  /** Unique id. */
  id: number;
  /** The name of the tier purely for mnemonic purposes, e.g. "Gold". */
  name: string;
  /**
   * The margin fraction needed to open a position.
   * In parts-per-million.
   */
  initial_margin_ppm: number;
  /**
   * The fraction of the initial-margin that the maintenance-margin is,
   * e.g. 50%. In parts-per-million.
   */
  maintenance_fraction_ppm: number;
  /**
   * The maximum position size at which the margin requirements are
   * not increased over the default values. Above this position size,
   * the margin requirements increase at a rate of sqrt(size).
   */
  base_position_notional: string;
  /**
   * The impact notional amount (in quote quantums) is used to determine impact
   * bid/ask prices and its recommended value is 500 USDC / initial margin
   * fraction.
   * - Impact bid price = average execution price for a market sell of the
   * impact notional value.
   * - Impact ask price = average execution price for a market buy of the
   * impact notional value.
   */
  impact_notional: string;
}
export interface LiquidityTierAminoMsg {
  type: "/dydxprotocol.perpetuals.LiquidityTier";
  value: LiquidityTierAmino;
}
/** LiquidityTier stores margin information. */
export interface LiquidityTierSDKType {
  id: number;
  name: string;
  initial_margin_ppm: number;
  maintenance_fraction_ppm: number;
  base_position_notional: bigint;
  impact_notional: bigint;
}
function createBasePerpetual(): Perpetual {
  return {
    params: PerpetualParams.fromPartial({}),
    fundingIndex: new Uint8Array()
  };
}
export const Perpetual = {
  typeUrl: "/dydxprotocol.perpetuals.Perpetual",
  encode(message: Perpetual, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      PerpetualParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.fundingIndex.length !== 0) {
      writer.uint32(18).bytes(message.fundingIndex);
    }
    return writer;
  },
  fromJSON(object: any): Perpetual {
    return {
      params: isSet(object.params) ? PerpetualParams.fromJSON(object.params) : undefined,
      fundingIndex: isSet(object.fundingIndex) ? bytesFromBase64(object.fundingIndex) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Perpetual>): Perpetual {
    const message = createBasePerpetual();
    message.params = object.params !== undefined && object.params !== null ? PerpetualParams.fromPartial(object.params) : undefined;
    message.fundingIndex = object.fundingIndex ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PerpetualAmino): Perpetual {
    return {
      params: object?.params ? PerpetualParams.fromAmino(object.params) : undefined,
      fundingIndex: object.funding_index
    };
  },
  toAmino(message: Perpetual): PerpetualAmino {
    const obj: any = {};
    obj.params = message.params ? PerpetualParams.toAmino(message.params) : undefined;
    obj.funding_index = message.fundingIndex;
    return obj;
  },
  fromAminoMsg(object: PerpetualAminoMsg): Perpetual {
    return Perpetual.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualProtoMsg): Perpetual {
    return Perpetual.decode(message.value);
  },
  toProto(message: Perpetual): Uint8Array {
    return Perpetual.encode(message).finish();
  },
  toProtoMsg(message: Perpetual): PerpetualProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.Perpetual",
      value: Perpetual.encode(message).finish()
    };
  }
};
function createBasePerpetualParams(): PerpetualParams {
  return {
    id: 0,
    ticker: "",
    marketId: 0,
    atomicResolution: 0,
    defaultFundingPpm: 0,
    liquidityTier: 0
  };
}
export const PerpetualParams = {
  typeUrl: "/dydxprotocol.perpetuals.PerpetualParams",
  encode(message: PerpetualParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.marketId !== 0) {
      writer.uint32(24).uint32(message.marketId);
    }
    if (message.atomicResolution !== 0) {
      writer.uint32(32).sint32(message.atomicResolution);
    }
    if (message.defaultFundingPpm !== 0) {
      writer.uint32(40).sint32(message.defaultFundingPpm);
    }
    if (message.liquidityTier !== 0) {
      writer.uint32(48).uint32(message.liquidityTier);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualParams {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      marketId: isSet(object.marketId) ? Number(object.marketId) : 0,
      atomicResolution: isSet(object.atomicResolution) ? Number(object.atomicResolution) : 0,
      defaultFundingPpm: isSet(object.defaultFundingPpm) ? Number(object.defaultFundingPpm) : 0,
      liquidityTier: isSet(object.liquidityTier) ? Number(object.liquidityTier) : 0
    };
  },
  fromPartial(object: Partial<PerpetualParams>): PerpetualParams {
    const message = createBasePerpetualParams();
    message.id = object.id ?? 0;
    message.ticker = object.ticker ?? "";
    message.marketId = object.marketId ?? 0;
    message.atomicResolution = object.atomicResolution ?? 0;
    message.defaultFundingPpm = object.defaultFundingPpm ?? 0;
    message.liquidityTier = object.liquidityTier ?? 0;
    return message;
  },
  fromAmino(object: PerpetualParamsAmino): PerpetualParams {
    return {
      id: object.id,
      ticker: object.ticker,
      marketId: object.market_id,
      atomicResolution: object.atomic_resolution,
      defaultFundingPpm: object.default_funding_ppm,
      liquidityTier: object.liquidity_tier
    };
  },
  toAmino(message: PerpetualParams): PerpetualParamsAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.ticker = message.ticker;
    obj.market_id = message.marketId;
    obj.atomic_resolution = message.atomicResolution;
    obj.default_funding_ppm = message.defaultFundingPpm;
    obj.liquidity_tier = message.liquidityTier;
    return obj;
  },
  fromAminoMsg(object: PerpetualParamsAminoMsg): PerpetualParams {
    return PerpetualParams.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualParamsProtoMsg): PerpetualParams {
    return PerpetualParams.decode(message.value);
  },
  toProto(message: PerpetualParams): Uint8Array {
    return PerpetualParams.encode(message).finish();
  },
  toProtoMsg(message: PerpetualParams): PerpetualParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.PerpetualParams",
      value: PerpetualParams.encode(message).finish()
    };
  }
};
function createBaseMarketPremiums(): MarketPremiums {
  return {
    perpetualId: 0,
    premiums: []
  };
}
export const MarketPremiums = {
  typeUrl: "/dydxprotocol.perpetuals.MarketPremiums",
  encode(message: MarketPremiums, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.perpetualId !== 0) {
      writer.uint32(8).uint32(message.perpetualId);
    }
    writer.uint32(18).fork();
    for (const v of message.premiums) {
      writer.sint32(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MarketPremiums {
    return {
      perpetualId: isSet(object.perpetualId) ? Number(object.perpetualId) : 0,
      premiums: Array.isArray(object?.premiums) ? object.premiums.map((e: any) => Number(e)) : []
    };
  },
  fromPartial(object: Partial<MarketPremiums>): MarketPremiums {
    const message = createBaseMarketPremiums();
    message.perpetualId = object.perpetualId ?? 0;
    message.premiums = object.premiums?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MarketPremiumsAmino): MarketPremiums {
    return {
      perpetualId: object.perpetual_id,
      premiums: Array.isArray(object?.premiums) ? object.premiums.map((e: any) => e) : []
    };
  },
  toAmino(message: MarketPremiums): MarketPremiumsAmino {
    const obj: any = {};
    obj.perpetual_id = message.perpetualId;
    if (message.premiums) {
      obj.premiums = message.premiums.map(e => e);
    } else {
      obj.premiums = [];
    }
    return obj;
  },
  fromAminoMsg(object: MarketPremiumsAminoMsg): MarketPremiums {
    return MarketPremiums.fromAmino(object.value);
  },
  fromProtoMsg(message: MarketPremiumsProtoMsg): MarketPremiums {
    return MarketPremiums.decode(message.value);
  },
  toProto(message: MarketPremiums): Uint8Array {
    return MarketPremiums.encode(message).finish();
  },
  toProtoMsg(message: MarketPremiums): MarketPremiumsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.MarketPremiums",
      value: MarketPremiums.encode(message).finish()
    };
  }
};
function createBasePremiumStore(): PremiumStore {
  return {
    allMarketPremiums: [],
    numPremiums: 0
  };
}
export const PremiumStore = {
  typeUrl: "/dydxprotocol.perpetuals.PremiumStore",
  encode(message: PremiumStore, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allMarketPremiums) {
      MarketPremiums.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.numPremiums !== 0) {
      writer.uint32(16).uint32(message.numPremiums);
    }
    return writer;
  },
  fromJSON(object: any): PremiumStore {
    return {
      allMarketPremiums: Array.isArray(object?.allMarketPremiums) ? object.allMarketPremiums.map((e: any) => MarketPremiums.fromJSON(e)) : [],
      numPremiums: isSet(object.numPremiums) ? Number(object.numPremiums) : 0
    };
  },
  fromPartial(object: Partial<PremiumStore>): PremiumStore {
    const message = createBasePremiumStore();
    message.allMarketPremiums = object.allMarketPremiums?.map(e => MarketPremiums.fromPartial(e)) || [];
    message.numPremiums = object.numPremiums ?? 0;
    return message;
  },
  fromAmino(object: PremiumStoreAmino): PremiumStore {
    return {
      allMarketPremiums: Array.isArray(object?.all_market_premiums) ? object.all_market_premiums.map((e: any) => MarketPremiums.fromAmino(e)) : [],
      numPremiums: object.num_premiums
    };
  },
  toAmino(message: PremiumStore): PremiumStoreAmino {
    const obj: any = {};
    if (message.allMarketPremiums) {
      obj.all_market_premiums = message.allMarketPremiums.map(e => e ? MarketPremiums.toAmino(e) : undefined);
    } else {
      obj.all_market_premiums = [];
    }
    obj.num_premiums = message.numPremiums;
    return obj;
  },
  fromAminoMsg(object: PremiumStoreAminoMsg): PremiumStore {
    return PremiumStore.fromAmino(object.value);
  },
  fromProtoMsg(message: PremiumStoreProtoMsg): PremiumStore {
    return PremiumStore.decode(message.value);
  },
  toProto(message: PremiumStore): Uint8Array {
    return PremiumStore.encode(message).finish();
  },
  toProtoMsg(message: PremiumStore): PremiumStoreProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.PremiumStore",
      value: PremiumStore.encode(message).finish()
    };
  }
};
function createBaseLiquidityTier(): LiquidityTier {
  return {
    id: 0,
    name: "",
    initialMarginPpm: 0,
    maintenanceFractionPpm: 0,
    basePositionNotional: BigInt(0),
    impactNotional: BigInt(0)
  };
}
export const LiquidityTier = {
  typeUrl: "/dydxprotocol.perpetuals.LiquidityTier",
  encode(message: LiquidityTier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.initialMarginPpm !== 0) {
      writer.uint32(24).uint32(message.initialMarginPpm);
    }
    if (message.maintenanceFractionPpm !== 0) {
      writer.uint32(32).uint32(message.maintenanceFractionPpm);
    }
    if (message.basePositionNotional !== BigInt(0)) {
      writer.uint32(40).uint64(message.basePositionNotional);
    }
    if (message.impactNotional !== BigInt(0)) {
      writer.uint32(48).uint64(message.impactNotional);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityTier {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      initialMarginPpm: isSet(object.initialMarginPpm) ? Number(object.initialMarginPpm) : 0,
      maintenanceFractionPpm: isSet(object.maintenanceFractionPpm) ? Number(object.maintenanceFractionPpm) : 0,
      basePositionNotional: isSet(object.basePositionNotional) ? BigInt(object.basePositionNotional.toString()) : BigInt(0),
      impactNotional: isSet(object.impactNotional) ? BigInt(object.impactNotional.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<LiquidityTier>): LiquidityTier {
    const message = createBaseLiquidityTier();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.initialMarginPpm = object.initialMarginPpm ?? 0;
    message.maintenanceFractionPpm = object.maintenanceFractionPpm ?? 0;
    message.basePositionNotional = object.basePositionNotional !== undefined && object.basePositionNotional !== null ? BigInt(object.basePositionNotional.toString()) : BigInt(0);
    message.impactNotional = object.impactNotional !== undefined && object.impactNotional !== null ? BigInt(object.impactNotional.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityTierAmino): LiquidityTier {
    return {
      id: object.id,
      name: object.name,
      initialMarginPpm: object.initial_margin_ppm,
      maintenanceFractionPpm: object.maintenance_fraction_ppm,
      basePositionNotional: BigInt(object.base_position_notional),
      impactNotional: BigInt(object.impact_notional)
    };
  },
  toAmino(message: LiquidityTier): LiquidityTierAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.initial_margin_ppm = message.initialMarginPpm;
    obj.maintenance_fraction_ppm = message.maintenanceFractionPpm;
    obj.base_position_notional = message.basePositionNotional ? message.basePositionNotional.toString() : undefined;
    obj.impact_notional = message.impactNotional ? message.impactNotional.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityTierAminoMsg): LiquidityTier {
    return LiquidityTier.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityTierProtoMsg): LiquidityTier {
    return LiquidityTier.decode(message.value);
  },
  toProto(message: LiquidityTier): Uint8Array {
    return LiquidityTier.encode(message).finish();
  },
  toProtoMsg(message: LiquidityTier): LiquidityTierProtoMsg {
    return {
      typeUrl: "/dydxprotocol.perpetuals.LiquidityTier",
      value: LiquidityTier.encode(message).finish()
    };
  }
};