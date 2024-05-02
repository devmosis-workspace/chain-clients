import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface Asset {
  symbol: string;
}
export interface AssetProtoMsg {
  typeUrl: "/sifnode.clp.v1.Asset";
  value: Uint8Array;
}
export interface AssetAmino {
  symbol?: string;
}
export interface AssetAminoMsg {
  type: "/sifnode.clp.v1.Asset";
  value: AssetAmino;
}
export interface AssetSDKType {
  symbol: string;
}
export interface Pool {
  externalAsset?: Asset;
  nativeAssetBalance: string;
  externalAssetBalance: string;
  poolUnits: string;
  swapPriceNative: string;
  swapPriceExternal: string;
  rewardPeriodNativeDistributed: string;
  externalLiabilities: string;
  externalCustody: string;
  nativeLiabilities: string;
  nativeCustody: string;
  health: string;
  interestRate: string;
  lastHeightInterestRateComputed: bigint;
  unsettledExternalLiabilities: string;
  unsettledNativeLiabilities: string;
  blockInterestNative: string;
  blockInterestExternal: string;
  /** the amount of external asset rewards distributed to liquidity providers from reward buckets */
  rewardAmountExternal: string;
}
export interface PoolProtoMsg {
  typeUrl: "/sifnode.clp.v1.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  external_asset?: AssetAmino;
  native_asset_balance?: string;
  external_asset_balance?: string;
  pool_units?: string;
  swap_price_native?: string;
  swap_price_external?: string;
  reward_period_native_distributed?: string;
  external_liabilities?: string;
  external_custody?: string;
  native_liabilities?: string;
  native_custody?: string;
  health?: string;
  interest_rate?: string;
  last_height_interest_rate_computed?: string;
  unsettled_external_liabilities?: string;
  unsettled_native_liabilities?: string;
  block_interest_native?: string;
  block_interest_external?: string;
  /** the amount of external asset rewards distributed to liquidity providers from reward buckets */
  reward_amount_external?: string;
}
export interface PoolAminoMsg {
  type: "/sifnode.clp.v1.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  external_asset?: AssetSDKType;
  native_asset_balance: string;
  external_asset_balance: string;
  pool_units: string;
  swap_price_native: string;
  swap_price_external: string;
  reward_period_native_distributed: string;
  external_liabilities: string;
  external_custody: string;
  native_liabilities: string;
  native_custody: string;
  health: string;
  interest_rate: string;
  last_height_interest_rate_computed: bigint;
  unsettled_external_liabilities: string;
  unsettled_native_liabilities: string;
  block_interest_native: string;
  block_interest_external: string;
  reward_amount_external: string;
}
export interface LiquidityProvider {
  asset?: Asset;
  liquidityProviderUnits: string;
  liquidityProviderAddress: string;
  unlocks: LiquidityUnlock[];
  /**
   * contains the block height of the last update
   * distributed or added to liquidity provider shares rewards
   */
  lastUpdatedBlock: bigint;
  rewardAmount: Coin[];
}
export interface LiquidityProviderProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProvider";
  value: Uint8Array;
}
export interface LiquidityProviderAmino {
  asset?: AssetAmino;
  liquidity_provider_units?: string;
  liquidity_provider_address?: string;
  unlocks?: LiquidityUnlockAmino[];
  /**
   * contains the block height of the last update
   * distributed or added to liquidity provider shares rewards
   */
  last_updated_block?: string;
  reward_amount?: CoinAmino[];
}
export interface LiquidityProviderAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProvider";
  value: LiquidityProviderAmino;
}
export interface LiquidityProviderSDKType {
  asset?: AssetSDKType;
  liquidity_provider_units: string;
  liquidity_provider_address: string;
  unlocks: LiquidityUnlockSDKType[];
  last_updated_block: bigint;
  reward_amount: CoinSDKType[];
}
export interface LiquidityUnlock {
  requestHeight: bigint;
  units: string;
}
export interface LiquidityUnlockProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityUnlock";
  value: Uint8Array;
}
export interface LiquidityUnlockAmino {
  request_height?: string;
  units?: string;
}
export interface LiquidityUnlockAminoMsg {
  type: "/sifnode.clp.v1.LiquidityUnlock";
  value: LiquidityUnlockAmino;
}
export interface LiquidityUnlockSDKType {
  request_height: bigint;
  units: string;
}
export interface PmtpEpoch {
  epochCounter: bigint;
  blockCounter: bigint;
}
export interface PmtpEpochProtoMsg {
  typeUrl: "/sifnode.clp.v1.PmtpEpoch";
  value: Uint8Array;
}
export interface PmtpEpochAmino {
  epoch_counter?: string;
  block_counter?: string;
}
export interface PmtpEpochAminoMsg {
  type: "/sifnode.clp.v1.PmtpEpoch";
  value: PmtpEpochAmino;
}
export interface PmtpEpochSDKType {
  epoch_counter: bigint;
  block_counter: bigint;
}
export interface WhiteList {
  validatorList: string[];
}
export interface WhiteListProtoMsg {
  typeUrl: "/sifnode.clp.v1.WhiteList";
  value: Uint8Array;
}
export interface WhiteListAmino {
  validator_list?: string[];
}
export interface WhiteListAminoMsg {
  type: "/sifnode.clp.v1.WhiteList";
  value: WhiteListAmino;
}
export interface WhiteListSDKType {
  validator_list: string[];
}
export interface LiquidityProviderData {
  liquidityProvider?: LiquidityProvider;
  nativeAssetBalance: string;
  externalAssetBalance: string;
}
export interface LiquidityProviderDataProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderData";
  value: Uint8Array;
}
export interface LiquidityProviderDataAmino {
  liquidity_provider?: LiquidityProviderAmino;
  native_asset_balance?: string;
  external_asset_balance?: string;
}
export interface LiquidityProviderDataAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProviderData";
  value: LiquidityProviderDataAmino;
}
export interface LiquidityProviderDataSDKType {
  liquidity_provider?: LiquidityProviderSDKType;
  native_asset_balance: string;
  external_asset_balance: string;
}
export interface EventPolicy {
  eventType: string;
  pmtpPeriodStartBlock: string;
  pmtpPeriodEndBlock: string;
}
export interface EventPolicyProtoMsg {
  typeUrl: "/sifnode.clp.v1.EventPolicy";
  value: Uint8Array;
}
export interface EventPolicyAmino {
  event_type?: string;
  pmtp_period_start_block?: string;
  pmtp_period_end_block?: string;
}
export interface EventPolicyAminoMsg {
  type: "/sifnode.clp.v1.EventPolicy";
  value: EventPolicyAmino;
}
export interface EventPolicySDKType {
  event_type: string;
  pmtp_period_start_block: string;
  pmtp_period_end_block: string;
}
export interface RemovalQueue {
  count: bigint;
  id: bigint;
  startHeight: bigint;
  totalValue: string;
}
export interface RemovalQueueProtoMsg {
  typeUrl: "/sifnode.clp.v1.RemovalQueue";
  value: Uint8Array;
}
export interface RemovalQueueAmino {
  count?: string;
  id?: string;
  start_height?: string;
  total_value?: string;
}
export interface RemovalQueueAminoMsg {
  type: "/sifnode.clp.v1.RemovalQueue";
  value: RemovalQueueAmino;
}
export interface RemovalQueueSDKType {
  count: bigint;
  id: bigint;
  start_height: bigint;
  total_value: string;
}
function createBaseAsset(): Asset {
  return {
    symbol: ""
  };
}
export const Asset = {
  typeUrl: "/sifnode.clp.v1.Asset",
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    return writer;
  },
  fromJSON(object: any): Asset {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    const message = createBaseAsset();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProtoMsg): Asset {
    return Asset.decode(message.value);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
function createBasePool(): Pool {
  return {
    externalAsset: undefined,
    nativeAssetBalance: "",
    externalAssetBalance: "",
    poolUnits: "",
    swapPriceNative: "",
    swapPriceExternal: "",
    rewardPeriodNativeDistributed: "",
    externalLiabilities: "",
    externalCustody: "",
    nativeLiabilities: "",
    nativeCustody: "",
    health: "",
    interestRate: "",
    lastHeightInterestRateComputed: BigInt(0),
    unsettledExternalLiabilities: "",
    unsettledNativeLiabilities: "",
    blockInterestNative: "",
    blockInterestExternal: "",
    rewardAmountExternal: ""
  };
}
export const Pool = {
  typeUrl: "/sifnode.clp.v1.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(10).fork()).ldelim();
    }
    if (message.nativeAssetBalance !== "") {
      writer.uint32(18).string(message.nativeAssetBalance);
    }
    if (message.externalAssetBalance !== "") {
      writer.uint32(26).string(message.externalAssetBalance);
    }
    if (message.poolUnits !== "") {
      writer.uint32(34).string(message.poolUnits);
    }
    if (message.swapPriceNative !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapPriceNative, 18).atomics);
    }
    if (message.swapPriceExternal !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.swapPriceExternal, 18).atomics);
    }
    if (message.rewardPeriodNativeDistributed !== "") {
      writer.uint32(58).string(message.rewardPeriodNativeDistributed);
    }
    if (message.externalLiabilities !== "") {
      writer.uint32(66).string(message.externalLiabilities);
    }
    if (message.externalCustody !== "") {
      writer.uint32(74).string(message.externalCustody);
    }
    if (message.nativeLiabilities !== "") {
      writer.uint32(82).string(message.nativeLiabilities);
    }
    if (message.nativeCustody !== "") {
      writer.uint32(90).string(message.nativeCustody);
    }
    if (message.health !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.interestRate !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.lastHeightInterestRateComputed !== BigInt(0)) {
      writer.uint32(112).int64(message.lastHeightInterestRateComputed);
    }
    if (message.unsettledExternalLiabilities !== "") {
      writer.uint32(122).string(message.unsettledExternalLiabilities);
    }
    if (message.unsettledNativeLiabilities !== "") {
      writer.uint32(130).string(message.unsettledNativeLiabilities);
    }
    if (message.blockInterestNative !== "") {
      writer.uint32(138).string(message.blockInterestNative);
    }
    if (message.blockInterestExternal !== "") {
      writer.uint32(146).string(message.blockInterestExternal);
    }
    if (message.rewardAmountExternal !== "") {
      writer.uint32(154).string(message.rewardAmountExternal);
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetBalance: isSet(object.nativeAssetBalance) ? String(object.nativeAssetBalance) : "",
      externalAssetBalance: isSet(object.externalAssetBalance) ? String(object.externalAssetBalance) : "",
      poolUnits: isSet(object.poolUnits) ? String(object.poolUnits) : "",
      swapPriceNative: isSet(object.swapPriceNative) ? String(object.swapPriceNative) : "",
      swapPriceExternal: isSet(object.swapPriceExternal) ? String(object.swapPriceExternal) : "",
      rewardPeriodNativeDistributed: isSet(object.rewardPeriodNativeDistributed) ? String(object.rewardPeriodNativeDistributed) : "",
      externalLiabilities: isSet(object.externalLiabilities) ? String(object.externalLiabilities) : "",
      externalCustody: isSet(object.externalCustody) ? String(object.externalCustody) : "",
      nativeLiabilities: isSet(object.nativeLiabilities) ? String(object.nativeLiabilities) : "",
      nativeCustody: isSet(object.nativeCustody) ? String(object.nativeCustody) : "",
      health: isSet(object.health) ? String(object.health) : "",
      interestRate: isSet(object.interestRate) ? String(object.interestRate) : "",
      lastHeightInterestRateComputed: isSet(object.lastHeightInterestRateComputed) ? BigInt(object.lastHeightInterestRateComputed.toString()) : BigInt(0),
      unsettledExternalLiabilities: isSet(object.unsettledExternalLiabilities) ? String(object.unsettledExternalLiabilities) : "",
      unsettledNativeLiabilities: isSet(object.unsettledNativeLiabilities) ? String(object.unsettledNativeLiabilities) : "",
      blockInterestNative: isSet(object.blockInterestNative) ? String(object.blockInterestNative) : "",
      blockInterestExternal: isSet(object.blockInterestExternal) ? String(object.blockInterestExternal) : "",
      rewardAmountExternal: isSet(object.rewardAmountExternal) ? String(object.rewardAmountExternal) : ""
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetBalance = object.nativeAssetBalance ?? "";
    message.externalAssetBalance = object.externalAssetBalance ?? "";
    message.poolUnits = object.poolUnits ?? "";
    message.swapPriceNative = object.swapPriceNative ?? "";
    message.swapPriceExternal = object.swapPriceExternal ?? "";
    message.rewardPeriodNativeDistributed = object.rewardPeriodNativeDistributed ?? "";
    message.externalLiabilities = object.externalLiabilities ?? "";
    message.externalCustody = object.externalCustody ?? "";
    message.nativeLiabilities = object.nativeLiabilities ?? "";
    message.nativeCustody = object.nativeCustody ?? "";
    message.health = object.health ?? "";
    message.interestRate = object.interestRate ?? "";
    message.lastHeightInterestRateComputed = object.lastHeightInterestRateComputed !== undefined && object.lastHeightInterestRateComputed !== null ? BigInt(object.lastHeightInterestRateComputed.toString()) : BigInt(0);
    message.unsettledExternalLiabilities = object.unsettledExternalLiabilities ?? "";
    message.unsettledNativeLiabilities = object.unsettledNativeLiabilities ?? "";
    message.blockInterestNative = object.blockInterestNative ?? "";
    message.blockInterestExternal = object.blockInterestExternal ?? "";
    message.rewardAmountExternal = object.rewardAmountExternal ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.native_asset_balance !== undefined && object.native_asset_balance !== null) {
      message.nativeAssetBalance = object.native_asset_balance;
    }
    if (object.external_asset_balance !== undefined && object.external_asset_balance !== null) {
      message.externalAssetBalance = object.external_asset_balance;
    }
    if (object.pool_units !== undefined && object.pool_units !== null) {
      message.poolUnits = object.pool_units;
    }
    if (object.swap_price_native !== undefined && object.swap_price_native !== null) {
      message.swapPriceNative = object.swap_price_native;
    }
    if (object.swap_price_external !== undefined && object.swap_price_external !== null) {
      message.swapPriceExternal = object.swap_price_external;
    }
    if (object.reward_period_native_distributed !== undefined && object.reward_period_native_distributed !== null) {
      message.rewardPeriodNativeDistributed = object.reward_period_native_distributed;
    }
    if (object.external_liabilities !== undefined && object.external_liabilities !== null) {
      message.externalLiabilities = object.external_liabilities;
    }
    if (object.external_custody !== undefined && object.external_custody !== null) {
      message.externalCustody = object.external_custody;
    }
    if (object.native_liabilities !== undefined && object.native_liabilities !== null) {
      message.nativeLiabilities = object.native_liabilities;
    }
    if (object.native_custody !== undefined && object.native_custody !== null) {
      message.nativeCustody = object.native_custody;
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    }
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.last_height_interest_rate_computed !== undefined && object.last_height_interest_rate_computed !== null) {
      message.lastHeightInterestRateComputed = BigInt(object.last_height_interest_rate_computed);
    }
    if (object.unsettled_external_liabilities !== undefined && object.unsettled_external_liabilities !== null) {
      message.unsettledExternalLiabilities = object.unsettled_external_liabilities;
    }
    if (object.unsettled_native_liabilities !== undefined && object.unsettled_native_liabilities !== null) {
      message.unsettledNativeLiabilities = object.unsettled_native_liabilities;
    }
    if (object.block_interest_native !== undefined && object.block_interest_native !== null) {
      message.blockInterestNative = object.block_interest_native;
    }
    if (object.block_interest_external !== undefined && object.block_interest_external !== null) {
      message.blockInterestExternal = object.block_interest_external;
    }
    if (object.reward_amount_external !== undefined && object.reward_amount_external !== null) {
      message.rewardAmountExternal = object.reward_amount_external;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.native_asset_balance = message.nativeAssetBalance === "" ? undefined : message.nativeAssetBalance;
    obj.external_asset_balance = message.externalAssetBalance === "" ? undefined : message.externalAssetBalance;
    obj.pool_units = message.poolUnits === "" ? undefined : message.poolUnits;
    obj.swap_price_native = message.swapPriceNative === "" ? undefined : message.swapPriceNative;
    obj.swap_price_external = message.swapPriceExternal === "" ? undefined : message.swapPriceExternal;
    obj.reward_period_native_distributed = message.rewardPeriodNativeDistributed === "" ? undefined : message.rewardPeriodNativeDistributed;
    obj.external_liabilities = message.externalLiabilities === "" ? undefined : message.externalLiabilities;
    obj.external_custody = message.externalCustody === "" ? undefined : message.externalCustody;
    obj.native_liabilities = message.nativeLiabilities === "" ? undefined : message.nativeLiabilities;
    obj.native_custody = message.nativeCustody === "" ? undefined : message.nativeCustody;
    obj.health = message.health === "" ? undefined : message.health;
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.last_height_interest_rate_computed = message.lastHeightInterestRateComputed !== BigInt(0) ? message.lastHeightInterestRateComputed.toString() : undefined;
    obj.unsettled_external_liabilities = message.unsettledExternalLiabilities === "" ? undefined : message.unsettledExternalLiabilities;
    obj.unsettled_native_liabilities = message.unsettledNativeLiabilities === "" ? undefined : message.unsettledNativeLiabilities;
    obj.block_interest_native = message.blockInterestNative === "" ? undefined : message.blockInterestNative;
    obj.block_interest_external = message.blockInterestExternal === "" ? undefined : message.blockInterestExternal;
    obj.reward_amount_external = message.rewardAmountExternal === "" ? undefined : message.rewardAmountExternal;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBaseLiquidityProvider(): LiquidityProvider {
  return {
    asset: undefined,
    liquidityProviderUnits: "",
    liquidityProviderAddress: "",
    unlocks: [],
    lastUpdatedBlock: BigInt(0),
    rewardAmount: []
  };
}
export const LiquidityProvider = {
  typeUrl: "/sifnode.clp.v1.LiquidityProvider",
  encode(message: LiquidityProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    if (message.liquidityProviderUnits !== "") {
      writer.uint32(18).string(message.liquidityProviderUnits);
    }
    if (message.liquidityProviderAddress !== "") {
      writer.uint32(26).string(message.liquidityProviderAddress);
    }
    for (const v of message.unlocks) {
      LiquidityUnlock.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastUpdatedBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.lastUpdatedBlock);
    }
    for (const v of message.rewardAmount) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProvider {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      liquidityProviderUnits: isSet(object.liquidityProviderUnits) ? String(object.liquidityProviderUnits) : "",
      liquidityProviderAddress: isSet(object.liquidityProviderAddress) ? String(object.liquidityProviderAddress) : "",
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => LiquidityUnlock.fromJSON(e)) : [],
      lastUpdatedBlock: isSet(object.lastUpdatedBlock) ? BigInt(object.lastUpdatedBlock.toString()) : BigInt(0),
      rewardAmount: Array.isArray(object?.rewardAmount) ? object.rewardAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LiquidityProvider>): LiquidityProvider {
    const message = createBaseLiquidityProvider();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.liquidityProviderUnits = object.liquidityProviderUnits ?? "";
    message.liquidityProviderAddress = object.liquidityProviderAddress ?? "";
    message.unlocks = object.unlocks?.map(e => LiquidityUnlock.fromPartial(e)) || [];
    message.lastUpdatedBlock = object.lastUpdatedBlock !== undefined && object.lastUpdatedBlock !== null ? BigInt(object.lastUpdatedBlock.toString()) : BigInt(0);
    message.rewardAmount = object.rewardAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LiquidityProviderAmino): LiquidityProvider {
    const message = createBaseLiquidityProvider();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Asset.fromAmino(object.asset);
    }
    if (object.liquidity_provider_units !== undefined && object.liquidity_provider_units !== null) {
      message.liquidityProviderUnits = object.liquidity_provider_units;
    }
    if (object.liquidity_provider_address !== undefined && object.liquidity_provider_address !== null) {
      message.liquidityProviderAddress = object.liquidity_provider_address;
    }
    message.unlocks = object.unlocks?.map(e => LiquidityUnlock.fromAmino(e)) || [];
    if (object.last_updated_block !== undefined && object.last_updated_block !== null) {
      message.lastUpdatedBlock = BigInt(object.last_updated_block);
    }
    message.rewardAmount = object.reward_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LiquidityProvider): LiquidityProviderAmino {
    const obj: any = {};
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.liquidity_provider_units = message.liquidityProviderUnits === "" ? undefined : message.liquidityProviderUnits;
    obj.liquidity_provider_address = message.liquidityProviderAddress === "" ? undefined : message.liquidityProviderAddress;
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? LiquidityUnlock.toAmino(e) : undefined);
    } else {
      obj.unlocks = message.unlocks;
    }
    obj.last_updated_block = message.lastUpdatedBlock !== BigInt(0) ? message.lastUpdatedBlock.toString() : undefined;
    if (message.rewardAmount) {
      obj.reward_amount = message.rewardAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward_amount = message.rewardAmount;
    }
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderAminoMsg): LiquidityProvider {
    return LiquidityProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderProtoMsg): LiquidityProvider {
    return LiquidityProvider.decode(message.value);
  },
  toProto(message: LiquidityProvider): Uint8Array {
    return LiquidityProvider.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProvider): LiquidityProviderProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProvider",
      value: LiquidityProvider.encode(message).finish()
    };
  }
};
function createBaseLiquidityUnlock(): LiquidityUnlock {
  return {
    requestHeight: BigInt(0),
    units: ""
  };
}
export const LiquidityUnlock = {
  typeUrl: "/sifnode.clp.v1.LiquidityUnlock",
  encode(message: LiquidityUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.requestHeight);
    }
    if (message.units !== "") {
      writer.uint32(18).string(message.units);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityUnlock {
    return {
      requestHeight: isSet(object.requestHeight) ? BigInt(object.requestHeight.toString()) : BigInt(0),
      units: isSet(object.units) ? String(object.units) : ""
    };
  },
  fromPartial(object: Partial<LiquidityUnlock>): LiquidityUnlock {
    const message = createBaseLiquidityUnlock();
    message.requestHeight = object.requestHeight !== undefined && object.requestHeight !== null ? BigInt(object.requestHeight.toString()) : BigInt(0);
    message.units = object.units ?? "";
    return message;
  },
  fromAmino(object: LiquidityUnlockAmino): LiquidityUnlock {
    const message = createBaseLiquidityUnlock();
    if (object.request_height !== undefined && object.request_height !== null) {
      message.requestHeight = BigInt(object.request_height);
    }
    if (object.units !== undefined && object.units !== null) {
      message.units = object.units;
    }
    return message;
  },
  toAmino(message: LiquidityUnlock): LiquidityUnlockAmino {
    const obj: any = {};
    obj.request_height = message.requestHeight !== BigInt(0) ? message.requestHeight.toString() : undefined;
    obj.units = message.units === "" ? undefined : message.units;
    return obj;
  },
  fromAminoMsg(object: LiquidityUnlockAminoMsg): LiquidityUnlock {
    return LiquidityUnlock.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityUnlockProtoMsg): LiquidityUnlock {
    return LiquidityUnlock.decode(message.value);
  },
  toProto(message: LiquidityUnlock): Uint8Array {
    return LiquidityUnlock.encode(message).finish();
  },
  toProtoMsg(message: LiquidityUnlock): LiquidityUnlockProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityUnlock",
      value: LiquidityUnlock.encode(message).finish()
    };
  }
};
function createBasePmtpEpoch(): PmtpEpoch {
  return {
    epochCounter: BigInt(0),
    blockCounter: BigInt(0)
  };
}
export const PmtpEpoch = {
  typeUrl: "/sifnode.clp.v1.PmtpEpoch",
  encode(message: PmtpEpoch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochCounter !== BigInt(0)) {
      writer.uint32(8).int64(message.epochCounter);
    }
    if (message.blockCounter !== BigInt(0)) {
      writer.uint32(16).int64(message.blockCounter);
    }
    return writer;
  },
  fromJSON(object: any): PmtpEpoch {
    return {
      epochCounter: isSet(object.epochCounter) ? BigInt(object.epochCounter.toString()) : BigInt(0),
      blockCounter: isSet(object.blockCounter) ? BigInt(object.blockCounter.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PmtpEpoch>): PmtpEpoch {
    const message = createBasePmtpEpoch();
    message.epochCounter = object.epochCounter !== undefined && object.epochCounter !== null ? BigInt(object.epochCounter.toString()) : BigInt(0);
    message.blockCounter = object.blockCounter !== undefined && object.blockCounter !== null ? BigInt(object.blockCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PmtpEpochAmino): PmtpEpoch {
    const message = createBasePmtpEpoch();
    if (object.epoch_counter !== undefined && object.epoch_counter !== null) {
      message.epochCounter = BigInt(object.epoch_counter);
    }
    if (object.block_counter !== undefined && object.block_counter !== null) {
      message.blockCounter = BigInt(object.block_counter);
    }
    return message;
  },
  toAmino(message: PmtpEpoch): PmtpEpochAmino {
    const obj: any = {};
    obj.epoch_counter = message.epochCounter !== BigInt(0) ? message.epochCounter.toString() : undefined;
    obj.block_counter = message.blockCounter !== BigInt(0) ? message.blockCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PmtpEpochAminoMsg): PmtpEpoch {
    return PmtpEpoch.fromAmino(object.value);
  },
  fromProtoMsg(message: PmtpEpochProtoMsg): PmtpEpoch {
    return PmtpEpoch.decode(message.value);
  },
  toProto(message: PmtpEpoch): Uint8Array {
    return PmtpEpoch.encode(message).finish();
  },
  toProtoMsg(message: PmtpEpoch): PmtpEpochProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PmtpEpoch",
      value: PmtpEpoch.encode(message).finish()
    };
  }
};
function createBaseWhiteList(): WhiteList {
  return {
    validatorList: []
  };
}
export const WhiteList = {
  typeUrl: "/sifnode.clp.v1.WhiteList",
  encode(message: WhiteList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): WhiteList {
    return {
      validatorList: Array.isArray(object?.validatorList) ? object.validatorList.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<WhiteList>): WhiteList {
    const message = createBaseWhiteList();
    message.validatorList = object.validatorList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: WhiteListAmino): WhiteList {
    const message = createBaseWhiteList();
    message.validatorList = object.validator_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: WhiteList): WhiteListAmino {
    const obj: any = {};
    if (message.validatorList) {
      obj.validator_list = message.validatorList.map(e => e);
    } else {
      obj.validator_list = message.validatorList;
    }
    return obj;
  },
  fromAminoMsg(object: WhiteListAminoMsg): WhiteList {
    return WhiteList.fromAmino(object.value);
  },
  fromProtoMsg(message: WhiteListProtoMsg): WhiteList {
    return WhiteList.decode(message.value);
  },
  toProto(message: WhiteList): Uint8Array {
    return WhiteList.encode(message).finish();
  },
  toProtoMsg(message: WhiteList): WhiteListProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.WhiteList",
      value: WhiteList.encode(message).finish()
    };
  }
};
function createBaseLiquidityProviderData(): LiquidityProviderData {
  return {
    liquidityProvider: undefined,
    nativeAssetBalance: "",
    externalAssetBalance: ""
  };
}
export const LiquidityProviderData = {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderData",
  encode(message: LiquidityProviderData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityProvider !== undefined) {
      LiquidityProvider.encode(message.liquidityProvider, writer.uint32(10).fork()).ldelim();
    }
    if (message.nativeAssetBalance !== "") {
      writer.uint32(18).string(message.nativeAssetBalance);
    }
    if (message.externalAssetBalance !== "") {
      writer.uint32(26).string(message.externalAssetBalance);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderData {
    return {
      liquidityProvider: isSet(object.liquidityProvider) ? LiquidityProvider.fromJSON(object.liquidityProvider) : undefined,
      nativeAssetBalance: isSet(object.nativeAssetBalance) ? String(object.nativeAssetBalance) : "",
      externalAssetBalance: isSet(object.externalAssetBalance) ? String(object.externalAssetBalance) : ""
    };
  },
  fromPartial(object: Partial<LiquidityProviderData>): LiquidityProviderData {
    const message = createBaseLiquidityProviderData();
    message.liquidityProvider = object.liquidityProvider !== undefined && object.liquidityProvider !== null ? LiquidityProvider.fromPartial(object.liquidityProvider) : undefined;
    message.nativeAssetBalance = object.nativeAssetBalance ?? "";
    message.externalAssetBalance = object.externalAssetBalance ?? "";
    return message;
  },
  fromAmino(object: LiquidityProviderDataAmino): LiquidityProviderData {
    const message = createBaseLiquidityProviderData();
    if (object.liquidity_provider !== undefined && object.liquidity_provider !== null) {
      message.liquidityProvider = LiquidityProvider.fromAmino(object.liquidity_provider);
    }
    if (object.native_asset_balance !== undefined && object.native_asset_balance !== null) {
      message.nativeAssetBalance = object.native_asset_balance;
    }
    if (object.external_asset_balance !== undefined && object.external_asset_balance !== null) {
      message.externalAssetBalance = object.external_asset_balance;
    }
    return message;
  },
  toAmino(message: LiquidityProviderData): LiquidityProviderDataAmino {
    const obj: any = {};
    obj.liquidity_provider = message.liquidityProvider ? LiquidityProvider.toAmino(message.liquidityProvider) : undefined;
    obj.native_asset_balance = message.nativeAssetBalance === "" ? undefined : message.nativeAssetBalance;
    obj.external_asset_balance = message.externalAssetBalance === "" ? undefined : message.externalAssetBalance;
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderDataAminoMsg): LiquidityProviderData {
    return LiquidityProviderData.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderDataProtoMsg): LiquidityProviderData {
    return LiquidityProviderData.decode(message.value);
  },
  toProto(message: LiquidityProviderData): Uint8Array {
    return LiquidityProviderData.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderData): LiquidityProviderDataProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProviderData",
      value: LiquidityProviderData.encode(message).finish()
    };
  }
};
function createBaseEventPolicy(): EventPolicy {
  return {
    eventType: "",
    pmtpPeriodStartBlock: "",
    pmtpPeriodEndBlock: ""
  };
}
export const EventPolicy = {
  typeUrl: "/sifnode.clp.v1.EventPolicy",
  encode(message: EventPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eventType !== "") {
      writer.uint32(10).string(message.eventType);
    }
    if (message.pmtpPeriodStartBlock !== "") {
      writer.uint32(18).string(message.pmtpPeriodStartBlock);
    }
    if (message.pmtpPeriodEndBlock !== "") {
      writer.uint32(26).string(message.pmtpPeriodEndBlock);
    }
    return writer;
  },
  fromJSON(object: any): EventPolicy {
    return {
      eventType: isSet(object.eventType) ? String(object.eventType) : "",
      pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock) ? String(object.pmtpPeriodStartBlock) : "",
      pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock) ? String(object.pmtpPeriodEndBlock) : ""
    };
  },
  fromPartial(object: Partial<EventPolicy>): EventPolicy {
    const message = createBaseEventPolicy();
    message.eventType = object.eventType ?? "";
    message.pmtpPeriodStartBlock = object.pmtpPeriodStartBlock ?? "";
    message.pmtpPeriodEndBlock = object.pmtpPeriodEndBlock ?? "";
    return message;
  },
  fromAmino(object: EventPolicyAmino): EventPolicy {
    const message = createBaseEventPolicy();
    if (object.event_type !== undefined && object.event_type !== null) {
      message.eventType = object.event_type;
    }
    if (object.pmtp_period_start_block !== undefined && object.pmtp_period_start_block !== null) {
      message.pmtpPeriodStartBlock = object.pmtp_period_start_block;
    }
    if (object.pmtp_period_end_block !== undefined && object.pmtp_period_end_block !== null) {
      message.pmtpPeriodEndBlock = object.pmtp_period_end_block;
    }
    return message;
  },
  toAmino(message: EventPolicy): EventPolicyAmino {
    const obj: any = {};
    obj.event_type = message.eventType === "" ? undefined : message.eventType;
    obj.pmtp_period_start_block = message.pmtpPeriodStartBlock === "" ? undefined : message.pmtpPeriodStartBlock;
    obj.pmtp_period_end_block = message.pmtpPeriodEndBlock === "" ? undefined : message.pmtpPeriodEndBlock;
    return obj;
  },
  fromAminoMsg(object: EventPolicyAminoMsg): EventPolicy {
    return EventPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: EventPolicyProtoMsg): EventPolicy {
    return EventPolicy.decode(message.value);
  },
  toProto(message: EventPolicy): Uint8Array {
    return EventPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventPolicy): EventPolicyProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.EventPolicy",
      value: EventPolicy.encode(message).finish()
    };
  }
};
function createBaseRemovalQueue(): RemovalQueue {
  return {
    count: BigInt(0),
    id: BigInt(0),
    startHeight: BigInt(0),
    totalValue: ""
  };
}
export const RemovalQueue = {
  typeUrl: "/sifnode.clp.v1.RemovalQueue",
  encode(message: RemovalQueue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== BigInt(0)) {
      writer.uint32(8).int64(message.count);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).int64(message.id);
    }
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.startHeight);
    }
    if (message.totalValue !== "") {
      writer.uint32(34).string(message.totalValue);
    }
    return writer;
  },
  fromJSON(object: any): RemovalQueue {
    return {
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      startHeight: isSet(object.startHeight) ? BigInt(object.startHeight.toString()) : BigInt(0),
      totalValue: isSet(object.totalValue) ? String(object.totalValue) : ""
    };
  },
  fromPartial(object: Partial<RemovalQueue>): RemovalQueue {
    const message = createBaseRemovalQueue();
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.totalValue = object.totalValue ?? "";
    return message;
  },
  fromAmino(object: RemovalQueueAmino): RemovalQueue {
    const message = createBaseRemovalQueue();
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.start_height !== undefined && object.start_height !== null) {
      message.startHeight = BigInt(object.start_height);
    }
    if (object.total_value !== undefined && object.total_value !== null) {
      message.totalValue = object.total_value;
    }
    return message;
  },
  toAmino(message: RemovalQueue): RemovalQueueAmino {
    const obj: any = {};
    obj.count = message.count !== BigInt(0) ? message.count.toString() : undefined;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.start_height = message.startHeight !== BigInt(0) ? message.startHeight.toString() : undefined;
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
    return obj;
  },
  fromAminoMsg(object: RemovalQueueAminoMsg): RemovalQueue {
    return RemovalQueue.fromAmino(object.value);
  },
  fromProtoMsg(message: RemovalQueueProtoMsg): RemovalQueue {
    return RemovalQueue.decode(message.value);
  },
  toProto(message: RemovalQueue): Uint8Array {
    return RemovalQueue.encode(message).finish();
  },
  toProtoMsg(message: RemovalQueue): RemovalQueueProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RemovalQueue",
      value: RemovalQueue.encode(message).finish()
    };
  }
};