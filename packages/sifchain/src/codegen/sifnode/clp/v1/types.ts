import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Asset {
  symbol: string;
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
  lastHeightInterestRateComputed: Long;
  unsettledExternalLiabilities: string;
  unsettledNativeLiabilities: string;
  blockInterestNative: string;
  blockInterestExternal: string;
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
  last_height_interest_rate_computed: Long;
  unsettled_external_liabilities: string;
  unsettled_native_liabilities: string;
  block_interest_native: string;
  block_interest_external: string;
}
export interface LiquidityProvider {
  asset?: Asset;
  liquidityProviderUnits: string;
  liquidityProviderAddress: string;
  unlocks: LiquidityUnlock[];
}
export interface LiquidityProviderSDKType {
  asset?: AssetSDKType;
  liquidity_provider_units: string;
  liquidity_provider_address: string;
  unlocks: LiquidityUnlockSDKType[];
}
export interface LiquidityUnlock {
  requestHeight: Long;
  units: string;
}
export interface LiquidityUnlockSDKType {
  request_height: Long;
  units: string;
}
export interface PmtpEpoch {
  epochCounter: Long;
  blockCounter: Long;
}
export interface PmtpEpochSDKType {
  epoch_counter: Long;
  block_counter: Long;
}
export interface WhiteList {
  validatorList: string[];
}
export interface WhiteListSDKType {
  validator_list: string[];
}
export interface LiquidityProviderData {
  liquidityProvider?: LiquidityProvider;
  nativeAssetBalance: string;
  externalAssetBalance: string;
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
export interface EventPolicySDKType {
  event_type: string;
  pmtp_period_start_block: string;
  pmtp_period_end_block: string;
}
export interface RemovalQueue {
  count: Long;
  id: Long;
  startHeight: Long;
  totalValue: string;
}
export interface RemovalQueueSDKType {
  count: Long;
  id: Long;
  start_height: Long;
  total_value: string;
}
function createBaseAsset(): Asset {
  return {
    symbol: ""
  };
}
export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    lastHeightInterestRateComputed: Long.ZERO,
    unsettledExternalLiabilities: "",
    unsettledNativeLiabilities: "",
    blockInterestNative: "",
    blockInterestExternal: ""
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(42).string(message.swapPriceNative);
    }
    if (message.swapPriceExternal !== "") {
      writer.uint32(50).string(message.swapPriceExternal);
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
      writer.uint32(98).string(message.health);
    }
    if (message.interestRate !== "") {
      writer.uint32(106).string(message.interestRate);
    }
    if (!message.lastHeightInterestRateComputed.isZero()) {
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
      lastHeightInterestRateComputed: isSet(object.lastHeightInterestRateComputed) ? Long.fromValue(object.lastHeightInterestRateComputed) : Long.ZERO,
      unsettledExternalLiabilities: isSet(object.unsettledExternalLiabilities) ? String(object.unsettledExternalLiabilities) : "",
      unsettledNativeLiabilities: isSet(object.unsettledNativeLiabilities) ? String(object.unsettledNativeLiabilities) : "",
      blockInterestNative: isSet(object.blockInterestNative) ? String(object.blockInterestNative) : "",
      blockInterestExternal: isSet(object.blockInterestExternal) ? String(object.blockInterestExternal) : ""
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
    message.lastHeightInterestRateComputed = object.lastHeightInterestRateComputed !== undefined && object.lastHeightInterestRateComputed !== null ? Long.fromValue(object.lastHeightInterestRateComputed) : Long.ZERO;
    message.unsettledExternalLiabilities = object.unsettledExternalLiabilities ?? "";
    message.unsettledNativeLiabilities = object.unsettledNativeLiabilities ?? "";
    message.blockInterestNative = object.blockInterestNative ?? "";
    message.blockInterestExternal = object.blockInterestExternal ?? "";
    return message;
  }
};
function createBaseLiquidityProvider(): LiquidityProvider {
  return {
    asset: undefined,
    liquidityProviderUnits: "",
    liquidityProviderAddress: "",
    unlocks: []
  };
}
export const LiquidityProvider = {
  encode(message: LiquidityProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },
  fromJSON(object: any): LiquidityProvider {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      liquidityProviderUnits: isSet(object.liquidityProviderUnits) ? String(object.liquidityProviderUnits) : "",
      liquidityProviderAddress: isSet(object.liquidityProviderAddress) ? String(object.liquidityProviderAddress) : "",
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => LiquidityUnlock.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LiquidityProvider>): LiquidityProvider {
    const message = createBaseLiquidityProvider();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.liquidityProviderUnits = object.liquidityProviderUnits ?? "";
    message.liquidityProviderAddress = object.liquidityProviderAddress ?? "";
    message.unlocks = object.unlocks?.map(e => LiquidityUnlock.fromPartial(e)) || [];
    return message;
  }
};
function createBaseLiquidityUnlock(): LiquidityUnlock {
  return {
    requestHeight: Long.ZERO,
    units: ""
  };
}
export const LiquidityUnlock = {
  encode(message: LiquidityUnlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestHeight.isZero()) {
      writer.uint32(8).int64(message.requestHeight);
    }
    if (message.units !== "") {
      writer.uint32(18).string(message.units);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityUnlock {
    return {
      requestHeight: isSet(object.requestHeight) ? Long.fromValue(object.requestHeight) : Long.ZERO,
      units: isSet(object.units) ? String(object.units) : ""
    };
  },
  fromPartial(object: Partial<LiquidityUnlock>): LiquidityUnlock {
    const message = createBaseLiquidityUnlock();
    message.requestHeight = object.requestHeight !== undefined && object.requestHeight !== null ? Long.fromValue(object.requestHeight) : Long.ZERO;
    message.units = object.units ?? "";
    return message;
  }
};
function createBasePmtpEpoch(): PmtpEpoch {
  return {
    epochCounter: Long.ZERO,
    blockCounter: Long.ZERO
  };
}
export const PmtpEpoch = {
  encode(message: PmtpEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epochCounter.isZero()) {
      writer.uint32(8).int64(message.epochCounter);
    }
    if (!message.blockCounter.isZero()) {
      writer.uint32(16).int64(message.blockCounter);
    }
    return writer;
  },
  fromJSON(object: any): PmtpEpoch {
    return {
      epochCounter: isSet(object.epochCounter) ? Long.fromValue(object.epochCounter) : Long.ZERO,
      blockCounter: isSet(object.blockCounter) ? Long.fromValue(object.blockCounter) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PmtpEpoch>): PmtpEpoch {
    const message = createBasePmtpEpoch();
    message.epochCounter = object.epochCounter !== undefined && object.epochCounter !== null ? Long.fromValue(object.epochCounter) : Long.ZERO;
    message.blockCounter = object.blockCounter !== undefined && object.blockCounter !== null ? Long.fromValue(object.blockCounter) : Long.ZERO;
    return message;
  }
};
function createBaseWhiteList(): WhiteList {
  return {
    validatorList: []
  };
}
export const WhiteList = {
  encode(message: WhiteList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: LiquidityProviderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRemovalQueue(): RemovalQueue {
  return {
    count: Long.ZERO,
    id: Long.ZERO,
    startHeight: Long.ZERO,
    totalValue: ""
  };
}
export const RemovalQueue = {
  encode(message: RemovalQueue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.count.isZero()) {
      writer.uint32(8).int64(message.count);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).int64(message.id);
    }
    if (!message.startHeight.isZero()) {
      writer.uint32(24).int64(message.startHeight);
    }
    if (message.totalValue !== "") {
      writer.uint32(34).string(message.totalValue);
    }
    return writer;
  },
  fromJSON(object: any): RemovalQueue {
    return {
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.ZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      startHeight: isSet(object.startHeight) ? Long.fromValue(object.startHeight) : Long.ZERO,
      totalValue: isSet(object.totalValue) ? String(object.totalValue) : ""
    };
  },
  fromPartial(object: Partial<RemovalQueue>): RemovalQueue {
    const message = createBaseRemovalQueue();
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.ZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
    message.totalValue = object.totalValue ?? "";
    return message;
  }
};