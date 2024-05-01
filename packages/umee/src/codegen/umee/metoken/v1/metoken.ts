import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** Params defines the parameters for the metoken module. */
export interface Params {
  /**
   * Reserves Re-balancing Frequency in seconds, determines how often the re-balancing of the module reserves will be
   * triggered
   */
  rebalancingFrequency: bigint;
  /**
   * Interest claiming frequency in seconds, determines how often metoken module will claim accrued interest from
   * leverage module
   */
  claimingFrequency: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/umee.metoken.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the metoken module. */
export interface ParamsAmino {
  /**
   * Reserves Re-balancing Frequency in seconds, determines how often the re-balancing of the module reserves will be
   * triggered
   */
  rebalancing_frequency?: string;
  /**
   * Interest claiming frequency in seconds, determines how often metoken module will claim accrued interest from
   * leverage module
   */
  claiming_frequency?: string;
}
export interface ParamsAminoMsg {
  type: "/umee.metoken.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the metoken module. */
export interface ParamsSDKType {
  rebalancing_frequency: bigint;
  claiming_frequency: bigint;
}
/**
 * Index defines an index of assets that are allowed to swap and redeem for the Index's meToken,
 * along with its metadata and parameters.
 */
export interface Index {
  /**
   * Denom is the denomination of the Index's meToken denom that will be given to user in exchange of accepted
   * assets.
   */
  denom: string;
  /**
   * MaxSupply is the maximum amount of Index's meTokens can be minted.
   * A swap that requires to mint more Index's meToken than this value will result in an error.
   * Must be a non negative value. 0 means that there is no limit.
   */
  maxSupply: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the meToken for the exchange operations.
   * Valid value: must be the same as the oracle.Denom.exponent.
   */
  exponent: number;
  /**
   * Fee contains fee parameters used for swap and redemption fee calculations for all underlying
   * assets in this index.
   */
  fee: Fee;
  /**
   * Accepted Assets is the list of underlying Tokens that can be swapped and redeemed for the Index's meToken,
   * along with their token-specific parameters.
   */
  acceptedAssets: AcceptedAsset[];
}
export interface IndexProtoMsg {
  typeUrl: "/umee.metoken.v1.Index";
  value: Uint8Array;
}
/**
 * Index defines an index of assets that are allowed to swap and redeem for the Index's meToken,
 * along with its metadata and parameters.
 */
export interface IndexAmino {
  /**
   * Denom is the denomination of the Index's meToken denom that will be given to user in exchange of accepted
   * assets.
   */
  denom?: string;
  /**
   * MaxSupply is the maximum amount of Index's meTokens can be minted.
   * A swap that requires to mint more Index's meToken than this value will result in an error.
   * Must be a non negative value. 0 means that there is no limit.
   */
  max_supply?: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the meToken for the exchange operations.
   * Valid value: must be the same as the oracle.Denom.exponent.
   */
  exponent?: number;
  /**
   * Fee contains fee parameters used for swap and redemption fee calculations for all underlying
   * assets in this index.
   */
  fee?: FeeAmino;
  /**
   * Accepted Assets is the list of underlying Tokens that can be swapped and redeemed for the Index's meToken,
   * along with their token-specific parameters.
   */
  accepted_assets?: AcceptedAssetAmino[];
}
export interface IndexAminoMsg {
  type: "/umee.metoken.v1.Index";
  value: IndexAmino;
}
/**
 * Index defines an index of assets that are allowed to swap and redeem for the Index's meToken,
 * along with its metadata and parameters.
 */
export interface IndexSDKType {
  denom: string;
  max_supply: string;
  exponent: number;
  fee: FeeSDKType;
  accepted_assets: AcceptedAssetSDKType[];
}
/**
 * Fee are the parameters used for the calculation of the fee to be applied for swaps and redemptions and charged to
 * the user. The usage of these parameters is explained here:
 * https://github.com/umee-network/umee/tree/main/x/metoken#dynamic-fee
 */
export interface Fee {
  /**
   * Min fee is the minimum fee to be charged to the user. The applied fee will tend to decrease down to this value,
   * when the accepted asset is undersupplied in the index. It must be less than Balanced and Max fees.
   * Valid values: 0-1.
   */
  minFee: string;
  /**
   * Balanced fee is the fee to be charged to the user when the index is balanced. It must be greater than min_fee and
   * lower than max_fee
   * Valid values: 0-1.
   */
  balancedFee: string;
  /**
   * Max fee is the maximum fee to be charged to the user. The applied fee will tend to increase up to this value,
   * when the accepted asset is oversupplied in the index. It must be greater than Min and Balanced fee.
   * Valid values: 0-1.
   */
  maxFee: string;
}
export interface FeeProtoMsg {
  typeUrl: "/umee.metoken.v1.Fee";
  value: Uint8Array;
}
/**
 * Fee are the parameters used for the calculation of the fee to be applied for swaps and redemptions and charged to
 * the user. The usage of these parameters is explained here:
 * https://github.com/umee-network/umee/tree/main/x/metoken#dynamic-fee
 */
export interface FeeAmino {
  /**
   * Min fee is the minimum fee to be charged to the user. The applied fee will tend to decrease down to this value,
   * when the accepted asset is undersupplied in the index. It must be less than Balanced and Max fees.
   * Valid values: 0-1.
   */
  min_fee?: string;
  /**
   * Balanced fee is the fee to be charged to the user when the index is balanced. It must be greater than min_fee and
   * lower than max_fee
   * Valid values: 0-1.
   */
  balanced_fee?: string;
  /**
   * Max fee is the maximum fee to be charged to the user. The applied fee will tend to increase up to this value,
   * when the accepted asset is oversupplied in the index. It must be greater than Min and Balanced fee.
   * Valid values: 0-1.
   */
  max_fee?: string;
}
export interface FeeAminoMsg {
  type: "/umee.metoken.v1.Fee";
  value: FeeAmino;
}
/**
 * Fee are the parameters used for the calculation of the fee to be applied for swaps and redemptions and charged to
 * the user. The usage of these parameters is explained here:
 * https://github.com/umee-network/umee/tree/main/x/metoken#dynamic-fee
 */
export interface FeeSDKType {
  min_fee: string;
  balanced_fee: string;
  max_fee: string;
}
/**
 * AcceptedAsset is an asset that is accepted to participate in the Index's swaps and redemptions, along with its
 * metadata and parameters
 */
export interface AcceptedAsset {
  /**
   * Denom is the denomination of the underlying asset. Must be the base
   * denom as registered in the Bank module (so IBC denom for IBC tokens).
   */
  denom: string;
  /**
   * Reserve portion is the portion of swapped assets that will be kept in the metoken module as reserves,
   * instead of supplied to the leverage module. It is also the
   * portion that will be taken from metoken module reserves when a redemption occurs.
   * Valid values: 0-1.
   */
  reservePortion: string;
  /**
   * Target allocation is the portion of an accepted asset the Index is targeting to have. The sum of
   * target allocations of every accepted asset in the Index should be equal to 1.
   * Valid values: 0-1.
   */
  targetAllocation: string;
}
export interface AcceptedAssetProtoMsg {
  typeUrl: "/umee.metoken.v1.AcceptedAsset";
  value: Uint8Array;
}
/**
 * AcceptedAsset is an asset that is accepted to participate in the Index's swaps and redemptions, along with its
 * metadata and parameters
 */
export interface AcceptedAssetAmino {
  /**
   * Denom is the denomination of the underlying asset. Must be the base
   * denom as registered in the Bank module (so IBC denom for IBC tokens).
   */
  denom?: string;
  /**
   * Reserve portion is the portion of swapped assets that will be kept in the metoken module as reserves,
   * instead of supplied to the leverage module. It is also the
   * portion that will be taken from metoken module reserves when a redemption occurs.
   * Valid values: 0-1.
   */
  reserve_portion?: string;
  /**
   * Target allocation is the portion of an accepted asset the Index is targeting to have. The sum of
   * target allocations of every accepted asset in the Index should be equal to 1.
   * Valid values: 0-1.
   */
  target_allocation?: string;
}
export interface AcceptedAssetAminoMsg {
  type: "/umee.metoken.v1.AcceptedAsset";
  value: AcceptedAssetAmino;
}
/**
 * AcceptedAsset is an asset that is accepted to participate in the Index's swaps and redemptions, along with its
 * metadata and parameters
 */
export interface AcceptedAssetSDKType {
  denom: string;
  reserve_portion: string;
  target_allocation: string;
}
/** IndexPrices provides meToken price related index information. */
export interface IndexPrices {
  /** meToken denom. */
  denom: string;
  /** Price in USD of one unit of meToken, expressed in decimals. */
  price: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the meToken for the exchange operations.
   */
  exponent: number;
  assets: AssetPrice[];
}
export interface IndexPricesProtoMsg {
  typeUrl: "/umee.metoken.v1.IndexPrices";
  value: Uint8Array;
}
/** IndexPrices provides meToken price related index information. */
export interface IndexPricesAmino {
  /** meToken denom. */
  denom?: string;
  /** Price in USD of one unit of meToken, expressed in decimals. */
  price?: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the meToken for the exchange operations.
   */
  exponent?: number;
  assets?: AssetPriceAmino[];
}
export interface IndexPricesAminoMsg {
  type: "/umee.metoken.v1.IndexPrices";
  value: IndexPricesAmino;
}
/** IndexPrices provides meToken price related index information. */
export interface IndexPricesSDKType {
  denom: string;
  price: string;
  exponent: number;
  assets: AssetPriceSDKType[];
}
/** AssetPrice information related to the index operations. */
export interface AssetPrice {
  baseDenom: string;
  symbolDenom: string;
  /** Price in USD of one unit of asset, expressed in decimals. */
  price: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the asset for the exchange operations.
   */
  exponent: number;
  /** SwapRate used for exchange calculations asset -> meToken. */
  swapRate: string;
  /** RedeemRate used for exchange calculations meToken -> asset. */
  redeemRate: string;
  /**
   * SwapFee charged to the user on a swap, expressed in fraction.
   * Valid values: 0-1.
   */
  swapFee: string;
  /**
   * RedeemFee charged to the user on a redemption, expressed in fraction.
   * Valid values: 0-1.
   */
  redeemFee: string;
}
export interface AssetPriceProtoMsg {
  typeUrl: "/umee.metoken.v1.AssetPrice";
  value: Uint8Array;
}
/** AssetPrice information related to the index operations. */
export interface AssetPriceAmino {
  base_denom?: string;
  symbol_denom?: string;
  /** Price in USD of one unit of asset, expressed in decimals. */
  price?: string;
  /**
   * Exponent is the power of ten by which to multiply, in order to convert
   * an amount of the asset for the exchange operations.
   */
  exponent?: number;
  /** SwapRate used for exchange calculations asset -> meToken. */
  swap_rate?: string;
  /** RedeemRate used for exchange calculations meToken -> asset. */
  redeem_rate?: string;
  /**
   * SwapFee charged to the user on a swap, expressed in fraction.
   * Valid values: 0-1.
   */
  swap_fee?: string;
  /**
   * RedeemFee charged to the user on a redemption, expressed in fraction.
   * Valid values: 0-1.
   */
  redeem_fee?: string;
}
export interface AssetPriceAminoMsg {
  type: "/umee.metoken.v1.AssetPrice";
  value: AssetPriceAmino;
}
/** AssetPrice information related to the index operations. */
export interface AssetPriceSDKType {
  base_denom: string;
  symbol_denom: string;
  price: string;
  exponent: number;
  swap_rate: string;
  redeem_rate: string;
  swap_fee: string;
  redeem_fee: string;
}
function createBaseParams(): Params {
  return {
    rebalancingFrequency: BigInt(0),
    claimingFrequency: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/umee.metoken.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rebalancingFrequency !== BigInt(0)) {
      writer.uint32(8).int64(message.rebalancingFrequency);
    }
    if (message.claimingFrequency !== BigInt(0)) {
      writer.uint32(16).int64(message.claimingFrequency);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      rebalancingFrequency: isSet(object.rebalancingFrequency) ? BigInt(object.rebalancingFrequency.toString()) : BigInt(0),
      claimingFrequency: isSet(object.claimingFrequency) ? BigInt(object.claimingFrequency.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.rebalancingFrequency = object.rebalancingFrequency !== undefined && object.rebalancingFrequency !== null ? BigInt(object.rebalancingFrequency.toString()) : BigInt(0);
    message.claimingFrequency = object.claimingFrequency !== undefined && object.claimingFrequency !== null ? BigInt(object.claimingFrequency.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.rebalancing_frequency !== undefined && object.rebalancing_frequency !== null) {
      message.rebalancingFrequency = BigInt(object.rebalancing_frequency);
    }
    if (object.claiming_frequency !== undefined && object.claiming_frequency !== null) {
      message.claimingFrequency = BigInt(object.claiming_frequency);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.rebalancing_frequency = message.rebalancingFrequency !== BigInt(0) ? message.rebalancingFrequency.toString() : undefined;
    obj.claiming_frequency = message.claimingFrequency !== BigInt(0) ? message.claimingFrequency.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseIndex(): Index {
  return {
    denom: "",
    maxSupply: "",
    exponent: 0,
    fee: Fee.fromPartial({}),
    acceptedAssets: []
  };
}
export const Index = {
  typeUrl: "/umee.metoken.v1.Index",
  encode(message: Index, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.maxSupply !== "") {
      writer.uint32(18).string(message.maxSupply);
    }
    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.acceptedAssets) {
      AcceptedAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Index {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      acceptedAssets: Array.isArray(object?.acceptedAssets) ? object.acceptedAssets.map((e: any) => AcceptedAsset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Index>): Index {
    const message = createBaseIndex();
    message.denom = object.denom ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.exponent = object.exponent ?? 0;
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.acceptedAssets = object.acceptedAssets?.map(e => AcceptedAsset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IndexAmino): Index {
    const message = createBaseIndex();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = object.max_supply;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    message.acceptedAssets = object.accepted_assets?.map(e => AcceptedAsset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Index): IndexAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.max_supply = message.maxSupply === "" ? undefined : message.maxSupply;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    if (message.acceptedAssets) {
      obj.accepted_assets = message.acceptedAssets.map(e => e ? AcceptedAsset.toAmino(e) : undefined);
    } else {
      obj.accepted_assets = message.acceptedAssets;
    }
    return obj;
  },
  fromAminoMsg(object: IndexAminoMsg): Index {
    return Index.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexProtoMsg): Index {
    return Index.decode(message.value);
  },
  toProto(message: Index): Uint8Array {
    return Index.encode(message).finish();
  },
  toProtoMsg(message: Index): IndexProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.Index",
      value: Index.encode(message).finish()
    };
  }
};
function createBaseFee(): Fee {
  return {
    minFee: "",
    balancedFee: "",
    maxFee: ""
  };
}
export const Fee = {
  typeUrl: "/umee.metoken.v1.Fee",
  encode(message: Fee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minFee, 18).atomics);
    }
    if (message.balancedFee !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.balancedFee, 18).atomics);
    }
    if (message.maxFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxFee, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Fee {
    return {
      minFee: isSet(object.minFee) ? String(object.minFee) : "",
      balancedFee: isSet(object.balancedFee) ? String(object.balancedFee) : "",
      maxFee: isSet(object.maxFee) ? String(object.maxFee) : ""
    };
  },
  fromPartial(object: Partial<Fee>): Fee {
    const message = createBaseFee();
    message.minFee = object.minFee ?? "";
    message.balancedFee = object.balancedFee ?? "";
    message.maxFee = object.maxFee ?? "";
    return message;
  },
  fromAmino(object: FeeAmino): Fee {
    const message = createBaseFee();
    if (object.min_fee !== undefined && object.min_fee !== null) {
      message.minFee = object.min_fee;
    }
    if (object.balanced_fee !== undefined && object.balanced_fee !== null) {
      message.balancedFee = object.balanced_fee;
    }
    if (object.max_fee !== undefined && object.max_fee !== null) {
      message.maxFee = object.max_fee;
    }
    return message;
  },
  toAmino(message: Fee): FeeAmino {
    const obj: any = {};
    obj.min_fee = message.minFee === "" ? undefined : message.minFee;
    obj.balanced_fee = message.balancedFee === "" ? undefined : message.balancedFee;
    obj.max_fee = message.maxFee === "" ? undefined : message.maxFee;
    return obj;
  },
  fromAminoMsg(object: FeeAminoMsg): Fee {
    return Fee.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeProtoMsg): Fee {
    return Fee.decode(message.value);
  },
  toProto(message: Fee): Uint8Array {
    return Fee.encode(message).finish();
  },
  toProtoMsg(message: Fee): FeeProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.Fee",
      value: Fee.encode(message).finish()
    };
  }
};
function createBaseAcceptedAsset(): AcceptedAsset {
  return {
    denom: "",
    reservePortion: "",
    targetAllocation: ""
  };
}
export const AcceptedAsset = {
  typeUrl: "/umee.metoken.v1.AcceptedAsset",
  encode(message: AcceptedAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.reservePortion !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.reservePortion, 18).atomics);
    }
    if (message.targetAllocation !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.targetAllocation, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): AcceptedAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      reservePortion: isSet(object.reservePortion) ? String(object.reservePortion) : "",
      targetAllocation: isSet(object.targetAllocation) ? String(object.targetAllocation) : ""
    };
  },
  fromPartial(object: Partial<AcceptedAsset>): AcceptedAsset {
    const message = createBaseAcceptedAsset();
    message.denom = object.denom ?? "";
    message.reservePortion = object.reservePortion ?? "";
    message.targetAllocation = object.targetAllocation ?? "";
    return message;
  },
  fromAmino(object: AcceptedAssetAmino): AcceptedAsset {
    const message = createBaseAcceptedAsset();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.reserve_portion !== undefined && object.reserve_portion !== null) {
      message.reservePortion = object.reserve_portion;
    }
    if (object.target_allocation !== undefined && object.target_allocation !== null) {
      message.targetAllocation = object.target_allocation;
    }
    return message;
  },
  toAmino(message: AcceptedAsset): AcceptedAssetAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.reserve_portion = message.reservePortion === "" ? undefined : message.reservePortion;
    obj.target_allocation = message.targetAllocation === "" ? undefined : message.targetAllocation;
    return obj;
  },
  fromAminoMsg(object: AcceptedAssetAminoMsg): AcceptedAsset {
    return AcceptedAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: AcceptedAssetProtoMsg): AcceptedAsset {
    return AcceptedAsset.decode(message.value);
  },
  toProto(message: AcceptedAsset): Uint8Array {
    return AcceptedAsset.encode(message).finish();
  },
  toProtoMsg(message: AcceptedAsset): AcceptedAssetProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.AcceptedAsset",
      value: AcceptedAsset.encode(message).finish()
    };
  }
};
function createBaseIndexPrices(): IndexPrices {
  return {
    denom: "",
    price: "",
    exponent: 0,
    assets: []
  };
}
export const IndexPrices = {
  typeUrl: "/umee.metoken.v1.IndexPrices",
  encode(message: IndexPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }
    for (const v of message.assets) {
      AssetPrice.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IndexPrices {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      price: isSet(object.price) ? String(object.price) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => AssetPrice.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<IndexPrices>): IndexPrices {
    const message = createBaseIndexPrices();
    message.denom = object.denom ?? "";
    message.price = object.price ?? "";
    message.exponent = object.exponent ?? 0;
    message.assets = object.assets?.map(e => AssetPrice.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IndexPricesAmino): IndexPrices {
    const message = createBaseIndexPrices();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    message.assets = object.assets?.map(e => AssetPrice.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: IndexPrices): IndexPricesAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.price = message.price === "" ? undefined : message.price;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? AssetPrice.toAmino(e) : undefined);
    } else {
      obj.assets = message.assets;
    }
    return obj;
  },
  fromAminoMsg(object: IndexPricesAminoMsg): IndexPrices {
    return IndexPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexPricesProtoMsg): IndexPrices {
    return IndexPrices.decode(message.value);
  },
  toProto(message: IndexPrices): Uint8Array {
    return IndexPrices.encode(message).finish();
  },
  toProtoMsg(message: IndexPrices): IndexPricesProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.IndexPrices",
      value: IndexPrices.encode(message).finish()
    };
  }
};
function createBaseAssetPrice(): AssetPrice {
  return {
    baseDenom: "",
    symbolDenom: "",
    price: "",
    exponent: 0,
    swapRate: "",
    redeemRate: "",
    swapFee: "",
    redeemFee: ""
  };
}
export const AssetPrice = {
  typeUrl: "/umee.metoken.v1.AssetPrice",
  encode(message: AssetPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.symbolDenom !== "") {
      writer.uint32(18).string(message.symbolDenom);
    }
    if (message.price !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.exponent !== 0) {
      writer.uint32(32).uint32(message.exponent);
    }
    if (message.swapRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapRate, 18).atomics);
    }
    if (message.redeemRate !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.redeemRate, 18).atomics);
    }
    if (message.swapFee !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.redeemFee !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.redeemFee, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): AssetPrice {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      symbolDenom: isSet(object.symbolDenom) ? String(object.symbolDenom) : "",
      price: isSet(object.price) ? String(object.price) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      swapRate: isSet(object.swapRate) ? String(object.swapRate) : "",
      redeemRate: isSet(object.redeemRate) ? String(object.redeemRate) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      redeemFee: isSet(object.redeemFee) ? String(object.redeemFee) : ""
    };
  },
  fromPartial(object: Partial<AssetPrice>): AssetPrice {
    const message = createBaseAssetPrice();
    message.baseDenom = object.baseDenom ?? "";
    message.symbolDenom = object.symbolDenom ?? "";
    message.price = object.price ?? "";
    message.exponent = object.exponent ?? 0;
    message.swapRate = object.swapRate ?? "";
    message.redeemRate = object.redeemRate ?? "";
    message.swapFee = object.swapFee ?? "";
    message.redeemFee = object.redeemFee ?? "";
    return message;
  },
  fromAmino(object: AssetPriceAmino): AssetPrice {
    const message = createBaseAssetPrice();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.symbol_denom !== undefined && object.symbol_denom !== null) {
      message.symbolDenom = object.symbol_denom;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    if (object.swap_rate !== undefined && object.swap_rate !== null) {
      message.swapRate = object.swap_rate;
    }
    if (object.redeem_rate !== undefined && object.redeem_rate !== null) {
      message.redeemRate = object.redeem_rate;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.redeem_fee !== undefined && object.redeem_fee !== null) {
      message.redeemFee = object.redeem_fee;
    }
    return message;
  },
  toAmino(message: AssetPrice): AssetPriceAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.symbol_denom = message.symbolDenom === "" ? undefined : message.symbolDenom;
    obj.price = message.price === "" ? undefined : message.price;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    obj.swap_rate = message.swapRate === "" ? undefined : message.swapRate;
    obj.redeem_rate = message.redeemRate === "" ? undefined : message.redeemRate;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.redeem_fee = message.redeemFee === "" ? undefined : message.redeemFee;
    return obj;
  },
  fromAminoMsg(object: AssetPriceAminoMsg): AssetPrice {
    return AssetPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetPriceProtoMsg): AssetPrice {
    return AssetPrice.decode(message.value);
  },
  toProto(message: AssetPrice): Uint8Array {
    return AssetPrice.encode(message).finish();
  },
  toProtoMsg(message: AssetPrice): AssetPriceProtoMsg {
    return {
      typeUrl: "/umee.metoken.v1.AssetPrice",
      value: AssetPrice.encode(message).finish()
    };
  }
};