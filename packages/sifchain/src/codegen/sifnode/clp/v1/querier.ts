import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset, AssetSDKType, Pool, PoolSDKType, LiquidityProvider, LiquidityProviderSDKType, LiquidityProviderData, LiquidityProviderDataSDKType, PmtpEpoch, PmtpEpochSDKType } from "./types";
import { Params, ParamsSDKType, RewardParams, RewardParamsSDKType, PmtpParams, PmtpParamsSDKType, PmtpRateParams, PmtpRateParamsSDKType, LiquidityProtectionParams, LiquidityProtectionParamsSDKType, LiquidityProtectionRateParams, LiquidityProtectionRateParamsSDKType, ProviderDistributionParams, ProviderDistributionParamsSDKType, SwapFeeTokenParams, SwapFeeTokenParamsSDKType } from "./params";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum SwapStatus {
  UNSPECIFIED = 0,
  NO_SWAP = 1,
  SELL_NATIVE = 2,
  BUY_NATIVE = 3,
  UNRECOGNIZED = -1,
}
export const SwapStatusSDKType = SwapStatus;
export function swapStatusFromJSON(object: any): SwapStatus {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SwapStatus.UNSPECIFIED;
    case 1:
    case "NO_SWAP":
      return SwapStatus.NO_SWAP;
    case 2:
    case "SELL_NATIVE":
      return SwapStatus.SELL_NATIVE;
    case 3:
    case "BUY_NATIVE":
      return SwapStatus.BUY_NATIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SwapStatus.UNRECOGNIZED;
  }
}
export function swapStatusToJSON(object: SwapStatus): string {
  switch (object) {
    case SwapStatus.UNSPECIFIED:
      return "UNSPECIFIED";
    case SwapStatus.NO_SWAP:
      return "NO_SWAP";
    case SwapStatus.SELL_NATIVE:
      return "SELL_NATIVE";
    case SwapStatus.BUY_NATIVE:
      return "BUY_NATIVE";
    case SwapStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface PoolReq {
  symbol: string;
}
export interface PoolReqSDKType {
  symbol: string;
}
export interface PoolRes {
  pool?: Pool;
  clpModuleAddress: string;
  height: Long;
}
export interface PoolResSDKType {
  pool?: PoolSDKType;
  clp_module_address: string;
  height: Long;
}
export interface PoolsReq {
  pagination?: PageRequest;
}
export interface PoolsReqSDKType {
  pagination?: PageRequestSDKType;
}
export interface PoolsRes {
  pools: Pool[];
  clpModuleAddress: string;
  height: Long;
  pagination?: PageResponse;
}
export interface PoolsResSDKType {
  pools: PoolSDKType[];
  clp_module_address: string;
  height: Long;
  pagination?: PageResponseSDKType;
}
export interface LiquidityProviderReq {
  symbol: string;
  lpAddress: string;
}
export interface LiquidityProviderReqSDKType {
  symbol: string;
  lp_address: string;
}
export interface LiquidityProviderRes {
  liquidityProvider?: LiquidityProvider;
  nativeAssetBalance: string;
  externalAssetBalance: string;
  height: Long;
}
export interface LiquidityProviderResSDKType {
  liquidity_provider?: LiquidityProviderSDKType;
  native_asset_balance: string;
  external_asset_balance: string;
  height: Long;
}
export interface AssetListReq {
  lpAddress: string;
  pagination?: PageRequest;
}
export interface AssetListReqSDKType {
  lp_address: string;
  pagination?: PageRequestSDKType;
}
export interface AssetListRes {
  assets: Asset[];
  height: Long;
  pagination?: PageResponse;
}
export interface AssetListResSDKType {
  assets: AssetSDKType[];
  height: Long;
  pagination?: PageResponseSDKType;
}
export interface LiquidityProviderDataReq {
  lpAddress: string;
  pagination?: PageRequest;
}
export interface LiquidityProviderDataReqSDKType {
  lp_address: string;
  pagination?: PageRequestSDKType;
}
export interface LiquidityProviderDataRes {
  liquidityProviderData: LiquidityProviderData[];
  height: Long;
  pagination?: PageRequest;
}
export interface LiquidityProviderDataResSDKType {
  liquidity_provider_data: LiquidityProviderDataSDKType[];
  height: Long;
  pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListReq {
  symbol: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface LiquidityProviderListReqSDKType {
  symbol: string;
  pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListRes {
  liquidityProviders: LiquidityProvider[];
  height: Long;
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface LiquidityProviderListResSDKType {
  liquidity_providers: LiquidityProviderSDKType[];
  height: Long;
  pagination?: PageResponseSDKType;
}
export interface LiquidityProvidersReq {
  pagination?: PageRequest;
}
export interface LiquidityProvidersReqSDKType {
  pagination?: PageRequestSDKType;
}
export interface LiquidityProvidersRes {
  liquidityProviders: LiquidityProvider[];
  height: Long;
  pagination?: PageResponse;
}
export interface LiquidityProvidersResSDKType {
  liquidity_providers: LiquidityProviderSDKType[];
  height: Long;
  pagination?: PageResponseSDKType;
}
export interface ParamsReq {}
export interface ParamsReqSDKType {}
export interface ParamsRes {
  params?: Params;
  symmetryThreshold: string;
  symmetryRatioThreshold: string;
}
export interface ParamsResSDKType {
  params?: ParamsSDKType;
  symmetry_threshold: string;
  symmetry_ratio_threshold: string;
}
export interface RewardParamsReq {}
export interface RewardParamsReqSDKType {}
export interface RewardParamsRes {
  params?: RewardParams;
}
export interface RewardParamsResSDKType {
  params?: RewardParamsSDKType;
}
export interface PmtpParamsReq {}
export interface PmtpParamsReqSDKType {}
export interface PmtpParamsRes {
  params?: PmtpParams;
  pmtpRateParams?: PmtpRateParams;
  pmtpEpoch?: PmtpEpoch;
  height: Long;
}
export interface PmtpParamsResSDKType {
  params?: PmtpParamsSDKType;
  pmtp_rate_params?: PmtpRateParamsSDKType;
  pmtp_epoch?: PmtpEpochSDKType;
  height: Long;
}
export interface LiquidityProtectionParamsReq {}
export interface LiquidityProtectionParamsReqSDKType {}
export interface LiquidityProtectionParamsRes {
  params?: LiquidityProtectionParams;
  rateParams?: LiquidityProtectionRateParams;
  height: Long;
}
export interface LiquidityProtectionParamsResSDKType {
  params?: LiquidityProtectionParamsSDKType;
  rate_params?: LiquidityProtectionRateParamsSDKType;
  height: Long;
}
export interface ProviderDistributionParamsReq {}
export interface ProviderDistributionParamsReqSDKType {}
export interface ProviderDistributionParamsRes {
  params?: ProviderDistributionParams;
}
export interface ProviderDistributionParamsResSDKType {
  params?: ProviderDistributionParamsSDKType;
}
export interface SwapFeeParamsReq {}
export interface SwapFeeParamsReqSDKType {}
export interface SwapFeeParamsRes {
  defaultSwapFeeRate: string;
  tokenParams: SwapFeeTokenParams[];
}
export interface SwapFeeParamsResSDKType {
  default_swap_fee_rate: string;
  token_params: SwapFeeTokenParamsSDKType[];
}
export interface PoolShareEstimateReq {
  externalAsset?: Asset;
  nativeAssetAmount: string;
  externalAssetAmount: string;
}
export interface PoolShareEstimateReqSDKType {
  external_asset?: AssetSDKType;
  native_asset_amount: string;
  external_asset_amount: string;
}
export interface PoolShareEstimateRes {
  percentage: string;
  nativeAssetAmount: string;
  externalAssetAmount: string;
  swapInfo?: SwapInfo;
}
export interface PoolShareEstimateResSDKType {
  percentage: string;
  native_asset_amount: string;
  external_asset_amount: string;
  swap_info?: SwapInfoSDKType;
}
export interface SwapInfo {
  status: SwapStatus;
  fee: string;
  feeRate: string;
  amount: string;
  result: string;
}
export interface SwapInfoSDKType {
  status: SwapStatus;
  fee: string;
  fee_rate: string;
  amount: string;
  result: string;
}
function createBasePoolReq(): PoolReq {
  return {
    symbol: ""
  };
}
export const PoolReq = {
  encode(message: PoolReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    return writer;
  },
  fromJSON(object: any): PoolReq {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  fromPartial(object: Partial<PoolReq>): PoolReq {
    const message = createBasePoolReq();
    message.symbol = object.symbol ?? "";
    return message;
  }
};
function createBasePoolRes(): PoolRes {
  return {
    pool: undefined,
    clpModuleAddress: "",
    height: Long.ZERO
  };
}
export const PoolRes = {
  encode(message: PoolRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.clpModuleAddress !== "") {
      writer.uint32(18).string(message.clpModuleAddress);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): PoolRes {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      clpModuleAddress: isSet(object.clpModuleAddress) ? String(object.clpModuleAddress) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PoolRes>): PoolRes {
    const message = createBasePoolRes();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.clpModuleAddress = object.clpModuleAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBasePoolsReq(): PoolsReq {
  return {
    pagination: undefined
  };
}
export const PoolsReq = {
  encode(message: PoolsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolsReq {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PoolsReq>): PoolsReq {
    const message = createBasePoolsReq();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePoolsRes(): PoolsRes {
  return {
    pools: [],
    clpModuleAddress: "",
    height: Long.ZERO,
    pagination: undefined
  };
}
export const PoolsRes = {
  encode(message: PoolsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.clpModuleAddress !== "") {
      writer.uint32(18).string(message.clpModuleAddress);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolsRes {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      clpModuleAddress: isSet(object.clpModuleAddress) ? String(object.clpModuleAddress) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PoolsRes>): PoolsRes {
    const message = createBasePoolsRes();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.clpModuleAddress = object.clpModuleAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseLiquidityProviderReq(): LiquidityProviderReq {
  return {
    symbol: "",
    lpAddress: ""
  };
}
export const LiquidityProviderReq = {
  encode(message: LiquidityProviderReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.lpAddress !== "") {
      writer.uint32(18).string(message.lpAddress);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderReq {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      lpAddress: isSet(object.lpAddress) ? String(object.lpAddress) : ""
    };
  },
  fromPartial(object: Partial<LiquidityProviderReq>): LiquidityProviderReq {
    const message = createBaseLiquidityProviderReq();
    message.symbol = object.symbol ?? "";
    message.lpAddress = object.lpAddress ?? "";
    return message;
  }
};
function createBaseLiquidityProviderRes(): LiquidityProviderRes {
  return {
    liquidityProvider: undefined,
    nativeAssetBalance: "",
    externalAssetBalance: "",
    height: Long.ZERO
  };
}
export const LiquidityProviderRes = {
  encode(message: LiquidityProviderRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityProvider !== undefined) {
      LiquidityProvider.encode(message.liquidityProvider, writer.uint32(10).fork()).ldelim();
    }
    if (message.nativeAssetBalance !== "") {
      writer.uint32(18).string(message.nativeAssetBalance);
    }
    if (message.externalAssetBalance !== "") {
      writer.uint32(26).string(message.externalAssetBalance);
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderRes {
    return {
      liquidityProvider: isSet(object.liquidityProvider) ? LiquidityProvider.fromJSON(object.liquidityProvider) : undefined,
      nativeAssetBalance: isSet(object.nativeAssetBalance) ? String(object.nativeAssetBalance) : "",
      externalAssetBalance: isSet(object.externalAssetBalance) ? String(object.externalAssetBalance) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<LiquidityProviderRes>): LiquidityProviderRes {
    const message = createBaseLiquidityProviderRes();
    message.liquidityProvider = object.liquidityProvider !== undefined && object.liquidityProvider !== null ? LiquidityProvider.fromPartial(object.liquidityProvider) : undefined;
    message.nativeAssetBalance = object.nativeAssetBalance ?? "";
    message.externalAssetBalance = object.externalAssetBalance ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseAssetListReq(): AssetListReq {
  return {
    lpAddress: "",
    pagination: undefined
  };
}
export const AssetListReq = {
  encode(message: AssetListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpAddress !== "") {
      writer.uint32(10).string(message.lpAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AssetListReq {
    return {
      lpAddress: isSet(object.lpAddress) ? String(object.lpAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<AssetListReq>): AssetListReq {
    const message = createBaseAssetListReq();
    message.lpAddress = object.lpAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseAssetListRes(): AssetListRes {
  return {
    assets: [],
    height: Long.ZERO,
    pagination: undefined
  };
}
export const AssetListRes = {
  encode(message: AssetListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AssetListRes {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<AssetListRes>): AssetListRes {
    const message = createBaseAssetListRes();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseLiquidityProviderDataReq(): LiquidityProviderDataReq {
  return {
    lpAddress: "",
    pagination: undefined
  };
}
export const LiquidityProviderDataReq = {
  encode(message: LiquidityProviderDataReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpAddress !== "") {
      writer.uint32(10).string(message.lpAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderDataReq {
    return {
      lpAddress: isSet(object.lpAddress) ? String(object.lpAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProviderDataReq>): LiquidityProviderDataReq {
    const message = createBaseLiquidityProviderDataReq();
    message.lpAddress = object.lpAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseLiquidityProviderDataRes(): LiquidityProviderDataRes {
  return {
    liquidityProviderData: [],
    height: Long.ZERO,
    pagination: undefined
  };
}
export const LiquidityProviderDataRes = {
  encode(message: LiquidityProviderDataRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityProviderData) {
      LiquidityProviderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderDataRes {
    return {
      liquidityProviderData: Array.isArray(object?.liquidityProviderData) ? object.liquidityProviderData.map((e: any) => LiquidityProviderData.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProviderDataRes>): LiquidityProviderDataRes {
    const message = createBaseLiquidityProviderDataRes();
    message.liquidityProviderData = object.liquidityProviderData?.map(e => LiquidityProviderData.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseLiquidityProviderListReq(): LiquidityProviderListReq {
  return {
    symbol: "",
    pagination: undefined
  };
}
export const LiquidityProviderListReq = {
  encode(message: LiquidityProviderListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderListReq {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProviderListReq>): LiquidityProviderListReq {
    const message = createBaseLiquidityProviderListReq();
    message.symbol = object.symbol ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseLiquidityProviderListRes(): LiquidityProviderListRes {
  return {
    liquidityProviders: [],
    height: Long.ZERO,
    pagination: undefined
  };
}
export const LiquidityProviderListRes = {
  encode(message: LiquidityProviderListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderListRes {
    return {
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProviderListRes>): LiquidityProviderListRes {
    const message = createBaseLiquidityProviderListRes();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseLiquidityProvidersReq(): LiquidityProvidersReq {
  return {
    pagination: undefined
  };
}
export const LiquidityProvidersReq = {
  encode(message: LiquidityProvidersReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProvidersReq {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProvidersReq>): LiquidityProvidersReq {
    const message = createBaseLiquidityProvidersReq();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseLiquidityProvidersRes(): LiquidityProvidersRes {
  return {
    liquidityProviders: [],
    height: Long.ZERO,
    pagination: undefined
  };
}
export const LiquidityProvidersRes = {
  encode(message: LiquidityProvidersRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProvidersRes {
    return {
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProvidersRes>): LiquidityProvidersRes {
    const message = createBaseLiquidityProvidersRes();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseParamsReq(): ParamsReq {
  return {};
}
export const ParamsReq = {
  encode(_: ParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ParamsReq {
    return {};
  },
  fromPartial(_: Partial<ParamsReq>): ParamsReq {
    const message = createBaseParamsReq();
    return message;
  }
};
function createBaseParamsRes(): ParamsRes {
  return {
    params: undefined,
    symmetryThreshold: "",
    symmetryRatioThreshold: ""
  };
}
export const ParamsRes = {
  encode(message: ParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.symmetryThreshold !== "") {
      writer.uint32(18).string(message.symmetryThreshold);
    }
    if (message.symmetryRatioThreshold !== "") {
      writer.uint32(26).string(message.symmetryRatioThreshold);
    }
    return writer;
  },
  fromJSON(object: any): ParamsRes {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      symmetryThreshold: isSet(object.symmetryThreshold) ? String(object.symmetryThreshold) : "",
      symmetryRatioThreshold: isSet(object.symmetryRatioThreshold) ? String(object.symmetryRatioThreshold) : ""
    };
  },
  fromPartial(object: Partial<ParamsRes>): ParamsRes {
    const message = createBaseParamsRes();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.symmetryThreshold = object.symmetryThreshold ?? "";
    message.symmetryRatioThreshold = object.symmetryRatioThreshold ?? "";
    return message;
  }
};
function createBaseRewardParamsReq(): RewardParamsReq {
  return {};
}
export const RewardParamsReq = {
  encode(_: RewardParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RewardParamsReq {
    return {};
  },
  fromPartial(_: Partial<RewardParamsReq>): RewardParamsReq {
    const message = createBaseRewardParamsReq();
    return message;
  }
};
function createBaseRewardParamsRes(): RewardParamsRes {
  return {
    params: undefined
  };
}
export const RewardParamsRes = {
  encode(message: RewardParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      RewardParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RewardParamsRes {
    return {
      params: isSet(object.params) ? RewardParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<RewardParamsRes>): RewardParamsRes {
    const message = createBaseRewardParamsRes();
    message.params = object.params !== undefined && object.params !== null ? RewardParams.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBasePmtpParamsReq(): PmtpParamsReq {
  return {};
}
export const PmtpParamsReq = {
  encode(_: PmtpParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): PmtpParamsReq {
    return {};
  },
  fromPartial(_: Partial<PmtpParamsReq>): PmtpParamsReq {
    const message = createBasePmtpParamsReq();
    return message;
  }
};
function createBasePmtpParamsRes(): PmtpParamsRes {
  return {
    params: undefined,
    pmtpRateParams: undefined,
    pmtpEpoch: undefined,
    height: Long.ZERO
  };
}
export const PmtpParamsRes = {
  encode(message: PmtpParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      PmtpParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.pmtpRateParams !== undefined) {
      PmtpRateParams.encode(message.pmtpRateParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.pmtpEpoch !== undefined) {
      PmtpEpoch.encode(message.pmtpEpoch, writer.uint32(26).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): PmtpParamsRes {
    return {
      params: isSet(object.params) ? PmtpParams.fromJSON(object.params) : undefined,
      pmtpRateParams: isSet(object.pmtpRateParams) ? PmtpRateParams.fromJSON(object.pmtpRateParams) : undefined,
      pmtpEpoch: isSet(object.pmtpEpoch) ? PmtpEpoch.fromJSON(object.pmtpEpoch) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<PmtpParamsRes>): PmtpParamsRes {
    const message = createBasePmtpParamsRes();
    message.params = object.params !== undefined && object.params !== null ? PmtpParams.fromPartial(object.params) : undefined;
    message.pmtpRateParams = object.pmtpRateParams !== undefined && object.pmtpRateParams !== null ? PmtpRateParams.fromPartial(object.pmtpRateParams) : undefined;
    message.pmtpEpoch = object.pmtpEpoch !== undefined && object.pmtpEpoch !== null ? PmtpEpoch.fromPartial(object.pmtpEpoch) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseLiquidityProtectionParamsReq(): LiquidityProtectionParamsReq {
  return {};
}
export const LiquidityProtectionParamsReq = {
  encode(_: LiquidityProtectionParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): LiquidityProtectionParamsReq {
    return {};
  },
  fromPartial(_: Partial<LiquidityProtectionParamsReq>): LiquidityProtectionParamsReq {
    const message = createBaseLiquidityProtectionParamsReq();
    return message;
  }
};
function createBaseLiquidityProtectionParamsRes(): LiquidityProtectionParamsRes {
  return {
    params: undefined,
    rateParams: undefined,
    height: Long.ZERO
  };
}
export const LiquidityProtectionParamsRes = {
  encode(message: LiquidityProtectionParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      LiquidityProtectionParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.rateParams !== undefined) {
      LiquidityProtectionRateParams.encode(message.rateParams, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProtectionParamsRes {
    return {
      params: isSet(object.params) ? LiquidityProtectionParams.fromJSON(object.params) : undefined,
      rateParams: isSet(object.rateParams) ? LiquidityProtectionRateParams.fromJSON(object.rateParams) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<LiquidityProtectionParamsRes>): LiquidityProtectionParamsRes {
    const message = createBaseLiquidityProtectionParamsRes();
    message.params = object.params !== undefined && object.params !== null ? LiquidityProtectionParams.fromPartial(object.params) : undefined;
    message.rateParams = object.rateParams !== undefined && object.rateParams !== null ? LiquidityProtectionRateParams.fromPartial(object.rateParams) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseProviderDistributionParamsReq(): ProviderDistributionParamsReq {
  return {};
}
export const ProviderDistributionParamsReq = {
  encode(_: ProviderDistributionParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ProviderDistributionParamsReq {
    return {};
  },
  fromPartial(_: Partial<ProviderDistributionParamsReq>): ProviderDistributionParamsReq {
    const message = createBaseProviderDistributionParamsReq();
    return message;
  }
};
function createBaseProviderDistributionParamsRes(): ProviderDistributionParamsRes {
  return {
    params: undefined
  };
}
export const ProviderDistributionParamsRes = {
  encode(message: ProviderDistributionParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      ProviderDistributionParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProviderDistributionParamsRes {
    return {
      params: isSet(object.params) ? ProviderDistributionParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ProviderDistributionParamsRes>): ProviderDistributionParamsRes {
    const message = createBaseProviderDistributionParamsRes();
    message.params = object.params !== undefined && object.params !== null ? ProviderDistributionParams.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseSwapFeeParamsReq(): SwapFeeParamsReq {
  return {};
}
export const SwapFeeParamsReq = {
  encode(_: SwapFeeParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SwapFeeParamsReq {
    return {};
  },
  fromPartial(_: Partial<SwapFeeParamsReq>): SwapFeeParamsReq {
    const message = createBaseSwapFeeParamsReq();
    return message;
  }
};
function createBaseSwapFeeParamsRes(): SwapFeeParamsRes {
  return {
    defaultSwapFeeRate: "",
    tokenParams: []
  };
}
export const SwapFeeParamsRes = {
  encode(message: SwapFeeParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultSwapFeeRate !== "") {
      writer.uint32(10).string(message.defaultSwapFeeRate);
    }
    for (const v of message.tokenParams) {
      SwapFeeTokenParams.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SwapFeeParamsRes {
    return {
      defaultSwapFeeRate: isSet(object.defaultSwapFeeRate) ? String(object.defaultSwapFeeRate) : "",
      tokenParams: Array.isArray(object?.tokenParams) ? object.tokenParams.map((e: any) => SwapFeeTokenParams.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SwapFeeParamsRes>): SwapFeeParamsRes {
    const message = createBaseSwapFeeParamsRes();
    message.defaultSwapFeeRate = object.defaultSwapFeeRate ?? "";
    message.tokenParams = object.tokenParams?.map(e => SwapFeeTokenParams.fromPartial(e)) || [];
    return message;
  }
};
function createBasePoolShareEstimateReq(): PoolShareEstimateReq {
  return {
    externalAsset: undefined,
    nativeAssetAmount: "",
    externalAssetAmount: ""
  };
}
export const PoolShareEstimateReq = {
  encode(message: PoolShareEstimateReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(10).fork()).ldelim();
    }
    if (message.nativeAssetAmount !== "") {
      writer.uint32(18).string(message.nativeAssetAmount);
    }
    if (message.externalAssetAmount !== "") {
      writer.uint32(26).string(message.externalAssetAmount);
    }
    return writer;
  },
  fromJSON(object: any): PoolShareEstimateReq {
    return {
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : ""
    };
  },
  fromPartial(object: Partial<PoolShareEstimateReq>): PoolShareEstimateReq {
    const message = createBasePoolShareEstimateReq();
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    return message;
  }
};
function createBasePoolShareEstimateRes(): PoolShareEstimateRes {
  return {
    percentage: "",
    nativeAssetAmount: "",
    externalAssetAmount: "",
    swapInfo: undefined
  };
}
export const PoolShareEstimateRes = {
  encode(message: PoolShareEstimateRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.percentage !== "") {
      writer.uint32(10).string(message.percentage);
    }
    if (message.nativeAssetAmount !== "") {
      writer.uint32(18).string(message.nativeAssetAmount);
    }
    if (message.externalAssetAmount !== "") {
      writer.uint32(26).string(message.externalAssetAmount);
    }
    if (message.swapInfo !== undefined) {
      SwapInfo.encode(message.swapInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolShareEstimateRes {
    return {
      percentage: isSet(object.percentage) ? String(object.percentage) : "",
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : "",
      swapInfo: isSet(object.swapInfo) ? SwapInfo.fromJSON(object.swapInfo) : undefined
    };
  },
  fromPartial(object: Partial<PoolShareEstimateRes>): PoolShareEstimateRes {
    const message = createBasePoolShareEstimateRes();
    message.percentage = object.percentage ?? "";
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    message.swapInfo = object.swapInfo !== undefined && object.swapInfo !== null ? SwapInfo.fromPartial(object.swapInfo) : undefined;
    return message;
  }
};
function createBaseSwapInfo(): SwapInfo {
  return {
    status: 0,
    fee: "",
    feeRate: "",
    amount: "",
    result: ""
  };
}
export const SwapInfo = {
  encode(message: SwapInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    if (message.feeRate !== "") {
      writer.uint32(26).string(message.feeRate);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.result !== "") {
      writer.uint32(42).string(message.result);
    }
    return writer;
  },
  fromJSON(object: any): SwapInfo {
    return {
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : 0,
      fee: isSet(object.fee) ? String(object.fee) : "",
      feeRate: isSet(object.feeRate) ? String(object.feeRate) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      result: isSet(object.result) ? String(object.result) : ""
    };
  },
  fromPartial(object: Partial<SwapInfo>): SwapInfo {
    const message = createBaseSwapInfo();
    message.status = object.status ?? 0;
    message.fee = object.fee ?? "";
    message.feeRate = object.feeRate ?? "";
    message.amount = object.amount ?? "";
    message.result = object.result ?? "";
    return message;
  }
};