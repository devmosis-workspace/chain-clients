import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset, AssetAmino, AssetSDKType, Pool, PoolAmino, PoolSDKType, LiquidityProvider, LiquidityProviderAmino, LiquidityProviderSDKType, LiquidityProviderData, LiquidityProviderDataAmino, LiquidityProviderDataSDKType, PmtpEpoch, PmtpEpochAmino, PmtpEpochSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType, RewardParams, RewardParamsAmino, RewardParamsSDKType, PmtpParams, PmtpParamsAmino, PmtpParamsSDKType, PmtpRateParams, PmtpRateParamsAmino, PmtpRateParamsSDKType, LiquidityProtectionParams, LiquidityProtectionParamsAmino, LiquidityProtectionParamsSDKType, LiquidityProtectionRateParams, LiquidityProtectionRateParamsAmino, LiquidityProtectionRateParamsSDKType, ProviderDistributionParams, ProviderDistributionParamsAmino, ProviderDistributionParamsSDKType, SwapFeeTokenParams, SwapFeeTokenParamsAmino, SwapFeeTokenParamsSDKType } from "./params";
import { RewardsBucket, RewardsBucketAmino, RewardsBucketSDKType } from "./rewards_bucket";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export enum SwapStatus {
  UNSPECIFIED = 0,
  NO_SWAP = 1,
  SELL_NATIVE = 2,
  BUY_NATIVE = 3,
  UNRECOGNIZED = -1,
}
export const SwapStatusSDKType = SwapStatus;
export const SwapStatusAmino = SwapStatus;
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
export interface PoolReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.PoolReq";
  value: Uint8Array;
}
export interface PoolReqAmino {
  symbol?: string;
}
export interface PoolReqAminoMsg {
  type: "/sifnode.clp.v1.PoolReq";
  value: PoolReqAmino;
}
export interface PoolReqSDKType {
  symbol: string;
}
export interface PoolRes {
  pool?: Pool;
  clpModuleAddress: string;
  height: bigint;
}
export interface PoolResProtoMsg {
  typeUrl: "/sifnode.clp.v1.PoolRes";
  value: Uint8Array;
}
export interface PoolResAmino {
  pool?: PoolAmino;
  clp_module_address?: string;
  height?: string;
}
export interface PoolResAminoMsg {
  type: "/sifnode.clp.v1.PoolRes";
  value: PoolResAmino;
}
export interface PoolResSDKType {
  pool?: PoolSDKType;
  clp_module_address: string;
  height: bigint;
}
export interface PoolsReq {
  pagination?: PageRequest;
}
export interface PoolsReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.PoolsReq";
  value: Uint8Array;
}
export interface PoolsReqAmino {
  pagination?: PageRequestAmino;
}
export interface PoolsReqAminoMsg {
  type: "/sifnode.clp.v1.PoolsReq";
  value: PoolsReqAmino;
}
export interface PoolsReqSDKType {
  pagination?: PageRequestSDKType;
}
export interface PoolsRes {
  pools: Pool[];
  clpModuleAddress: string;
  height: bigint;
  pagination?: PageResponse;
}
export interface PoolsResProtoMsg {
  typeUrl: "/sifnode.clp.v1.PoolsRes";
  value: Uint8Array;
}
export interface PoolsResAmino {
  pools?: PoolAmino[];
  clp_module_address?: string;
  height?: string;
  pagination?: PageResponseAmino;
}
export interface PoolsResAminoMsg {
  type: "/sifnode.clp.v1.PoolsRes";
  value: PoolsResAmino;
}
export interface PoolsResSDKType {
  pools: PoolSDKType[];
  clp_module_address: string;
  height: bigint;
  pagination?: PageResponseSDKType;
}
export interface LiquidityProviderReq {
  symbol: string;
  lpAddress: string;
}
export interface LiquidityProviderReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderReq";
  value: Uint8Array;
}
export interface LiquidityProviderReqAmino {
  symbol?: string;
  lp_address?: string;
}
export interface LiquidityProviderReqAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProviderReq";
  value: LiquidityProviderReqAmino;
}
export interface LiquidityProviderReqSDKType {
  symbol: string;
  lp_address: string;
}
export interface LiquidityProviderRes {
  liquidityProvider?: LiquidityProvider;
  nativeAssetBalance: string;
  externalAssetBalance: string;
  height: bigint;
}
export interface LiquidityProviderResProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderRes";
  value: Uint8Array;
}
export interface LiquidityProviderResAmino {
  liquidity_provider?: LiquidityProviderAmino;
  native_asset_balance?: string;
  external_asset_balance?: string;
  height?: string;
}
export interface LiquidityProviderResAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProviderRes";
  value: LiquidityProviderResAmino;
}
export interface LiquidityProviderResSDKType {
  liquidity_provider?: LiquidityProviderSDKType;
  native_asset_balance: string;
  external_asset_balance: string;
  height: bigint;
}
export interface AssetListReq {
  lpAddress: string;
  pagination?: PageRequest;
}
export interface AssetListReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.AssetListReq";
  value: Uint8Array;
}
export interface AssetListReqAmino {
  lp_address?: string;
  pagination?: PageRequestAmino;
}
export interface AssetListReqAminoMsg {
  type: "/sifnode.clp.v1.AssetListReq";
  value: AssetListReqAmino;
}
export interface AssetListReqSDKType {
  lp_address: string;
  pagination?: PageRequestSDKType;
}
export interface AssetListRes {
  assets: Asset[];
  height: bigint;
  pagination?: PageResponse;
}
export interface AssetListResProtoMsg {
  typeUrl: "/sifnode.clp.v1.AssetListRes";
  value: Uint8Array;
}
export interface AssetListResAmino {
  assets?: AssetAmino[];
  height?: string;
  pagination?: PageResponseAmino;
}
export interface AssetListResAminoMsg {
  type: "/sifnode.clp.v1.AssetListRes";
  value: AssetListResAmino;
}
export interface AssetListResSDKType {
  assets: AssetSDKType[];
  height: bigint;
  pagination?: PageResponseSDKType;
}
export interface LiquidityProviderDataReq {
  lpAddress: string;
  pagination?: PageRequest;
}
export interface LiquidityProviderDataReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderDataReq";
  value: Uint8Array;
}
export interface LiquidityProviderDataReqAmino {
  lp_address?: string;
  pagination?: PageRequestAmino;
}
export interface LiquidityProviderDataReqAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProviderDataReq";
  value: LiquidityProviderDataReqAmino;
}
export interface LiquidityProviderDataReqSDKType {
  lp_address: string;
  pagination?: PageRequestSDKType;
}
export interface LiquidityProviderDataRes {
  liquidityProviderData: LiquidityProviderData[];
  height: bigint;
  pagination?: PageRequest;
}
export interface LiquidityProviderDataResProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderDataRes";
  value: Uint8Array;
}
export interface LiquidityProviderDataResAmino {
  liquidity_provider_data?: LiquidityProviderDataAmino[];
  height?: string;
  pagination?: PageRequestAmino;
}
export interface LiquidityProviderDataResAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProviderDataRes";
  value: LiquidityProviderDataResAmino;
}
export interface LiquidityProviderDataResSDKType {
  liquidity_provider_data: LiquidityProviderDataSDKType[];
  height: bigint;
  pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListReq {
  symbol: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface LiquidityProviderListReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderListReq";
  value: Uint8Array;
}
export interface LiquidityProviderListReqAmino {
  symbol?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface LiquidityProviderListReqAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProviderListReq";
  value: LiquidityProviderListReqAmino;
}
export interface LiquidityProviderListReqSDKType {
  symbol: string;
  pagination?: PageRequestSDKType;
}
export interface LiquidityProviderListRes {
  liquidityProviders: LiquidityProvider[];
  height: bigint;
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface LiquidityProviderListResProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderListRes";
  value: Uint8Array;
}
export interface LiquidityProviderListResAmino {
  liquidity_providers?: LiquidityProviderAmino[];
  height?: string;
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface LiquidityProviderListResAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProviderListRes";
  value: LiquidityProviderListResAmino;
}
export interface LiquidityProviderListResSDKType {
  liquidity_providers: LiquidityProviderSDKType[];
  height: bigint;
  pagination?: PageResponseSDKType;
}
export interface LiquidityProvidersReq {
  pagination?: PageRequest;
}
export interface LiquidityProvidersReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProvidersReq";
  value: Uint8Array;
}
export interface LiquidityProvidersReqAmino {
  pagination?: PageRequestAmino;
}
export interface LiquidityProvidersReqAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProvidersReq";
  value: LiquidityProvidersReqAmino;
}
export interface LiquidityProvidersReqSDKType {
  pagination?: PageRequestSDKType;
}
export interface LiquidityProvidersRes {
  liquidityProviders: LiquidityProvider[];
  height: bigint;
  pagination?: PageResponse;
}
export interface LiquidityProvidersResProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProvidersRes";
  value: Uint8Array;
}
export interface LiquidityProvidersResAmino {
  liquidity_providers?: LiquidityProviderAmino[];
  height?: string;
  pagination?: PageResponseAmino;
}
export interface LiquidityProvidersResAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProvidersRes";
  value: LiquidityProvidersResAmino;
}
export interface LiquidityProvidersResSDKType {
  liquidity_providers: LiquidityProviderSDKType[];
  height: bigint;
  pagination?: PageResponseSDKType;
}
export interface ParamsReq {}
export interface ParamsReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.ParamsReq";
  value: Uint8Array;
}
export interface ParamsReqAmino {}
export interface ParamsReqAminoMsg {
  type: "/sifnode.clp.v1.ParamsReq";
  value: ParamsReqAmino;
}
export interface ParamsReqSDKType {}
export interface ParamsRes {
  params?: Params;
  symmetryThreshold: string;
  symmetryRatioThreshold: string;
}
export interface ParamsResProtoMsg {
  typeUrl: "/sifnode.clp.v1.ParamsRes";
  value: Uint8Array;
}
export interface ParamsResAmino {
  params?: ParamsAmino;
  symmetry_threshold?: string;
  symmetry_ratio_threshold?: string;
}
export interface ParamsResAminoMsg {
  type: "/sifnode.clp.v1.ParamsRes";
  value: ParamsResAmino;
}
export interface ParamsResSDKType {
  params?: ParamsSDKType;
  symmetry_threshold: string;
  symmetry_ratio_threshold: string;
}
export interface RewardParamsReq {}
export interface RewardParamsReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.RewardParamsReq";
  value: Uint8Array;
}
export interface RewardParamsReqAmino {}
export interface RewardParamsReqAminoMsg {
  type: "/sifnode.clp.v1.RewardParamsReq";
  value: RewardParamsReqAmino;
}
export interface RewardParamsReqSDKType {}
export interface RewardParamsRes {
  params?: RewardParams;
}
export interface RewardParamsResProtoMsg {
  typeUrl: "/sifnode.clp.v1.RewardParamsRes";
  value: Uint8Array;
}
export interface RewardParamsResAmino {
  params?: RewardParamsAmino;
}
export interface RewardParamsResAminoMsg {
  type: "/sifnode.clp.v1.RewardParamsRes";
  value: RewardParamsResAmino;
}
export interface RewardParamsResSDKType {
  params?: RewardParamsSDKType;
}
export interface PmtpParamsReq {}
export interface PmtpParamsReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.PmtpParamsReq";
  value: Uint8Array;
}
export interface PmtpParamsReqAmino {}
export interface PmtpParamsReqAminoMsg {
  type: "/sifnode.clp.v1.PmtpParamsReq";
  value: PmtpParamsReqAmino;
}
export interface PmtpParamsReqSDKType {}
export interface PmtpParamsRes {
  params?: PmtpParams;
  pmtpRateParams?: PmtpRateParams;
  pmtpEpoch?: PmtpEpoch;
  height: bigint;
}
export interface PmtpParamsResProtoMsg {
  typeUrl: "/sifnode.clp.v1.PmtpParamsRes";
  value: Uint8Array;
}
export interface PmtpParamsResAmino {
  params?: PmtpParamsAmino;
  pmtp_rate_params?: PmtpRateParamsAmino;
  pmtp_epoch?: PmtpEpochAmino;
  height?: string;
}
export interface PmtpParamsResAminoMsg {
  type: "/sifnode.clp.v1.PmtpParamsRes";
  value: PmtpParamsResAmino;
}
export interface PmtpParamsResSDKType {
  params?: PmtpParamsSDKType;
  pmtp_rate_params?: PmtpRateParamsSDKType;
  pmtp_epoch?: PmtpEpochSDKType;
  height: bigint;
}
export interface LiquidityProtectionParamsReq {}
export interface LiquidityProtectionParamsReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsReq";
  value: Uint8Array;
}
export interface LiquidityProtectionParamsReqAmino {}
export interface LiquidityProtectionParamsReqAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProtectionParamsReq";
  value: LiquidityProtectionParamsReqAmino;
}
export interface LiquidityProtectionParamsReqSDKType {}
export interface LiquidityProtectionParamsRes {
  params?: LiquidityProtectionParams;
  rateParams?: LiquidityProtectionRateParams;
  height: bigint;
}
export interface LiquidityProtectionParamsResProtoMsg {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsRes";
  value: Uint8Array;
}
export interface LiquidityProtectionParamsResAmino {
  params?: LiquidityProtectionParamsAmino;
  rate_params?: LiquidityProtectionRateParamsAmino;
  height?: string;
}
export interface LiquidityProtectionParamsResAminoMsg {
  type: "/sifnode.clp.v1.LiquidityProtectionParamsRes";
  value: LiquidityProtectionParamsResAmino;
}
export interface LiquidityProtectionParamsResSDKType {
  params?: LiquidityProtectionParamsSDKType;
  rate_params?: LiquidityProtectionRateParamsSDKType;
  height: bigint;
}
export interface ProviderDistributionParamsReq {}
export interface ProviderDistributionParamsReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsReq";
  value: Uint8Array;
}
export interface ProviderDistributionParamsReqAmino {}
export interface ProviderDistributionParamsReqAminoMsg {
  type: "/sifnode.clp.v1.ProviderDistributionParamsReq";
  value: ProviderDistributionParamsReqAmino;
}
export interface ProviderDistributionParamsReqSDKType {}
export interface ProviderDistributionParamsRes {
  params?: ProviderDistributionParams;
}
export interface ProviderDistributionParamsResProtoMsg {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsRes";
  value: Uint8Array;
}
export interface ProviderDistributionParamsResAmino {
  params?: ProviderDistributionParamsAmino;
}
export interface ProviderDistributionParamsResAminoMsg {
  type: "/sifnode.clp.v1.ProviderDistributionParamsRes";
  value: ProviderDistributionParamsResAmino;
}
export interface ProviderDistributionParamsResSDKType {
  params?: ProviderDistributionParamsSDKType;
}
export interface SwapFeeParamsReq {}
export interface SwapFeeParamsReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.SwapFeeParamsReq";
  value: Uint8Array;
}
export interface SwapFeeParamsReqAmino {}
export interface SwapFeeParamsReqAminoMsg {
  type: "/sifnode.clp.v1.SwapFeeParamsReq";
  value: SwapFeeParamsReqAmino;
}
export interface SwapFeeParamsReqSDKType {}
export interface SwapFeeParamsRes {
  defaultSwapFeeRate: string;
  tokenParams: SwapFeeTokenParams[];
}
export interface SwapFeeParamsResProtoMsg {
  typeUrl: "/sifnode.clp.v1.SwapFeeParamsRes";
  value: Uint8Array;
}
export interface SwapFeeParamsResAmino {
  default_swap_fee_rate?: string;
  token_params?: SwapFeeTokenParamsAmino[];
}
export interface SwapFeeParamsResAminoMsg {
  type: "/sifnode.clp.v1.SwapFeeParamsRes";
  value: SwapFeeParamsResAmino;
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
export interface PoolShareEstimateReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.PoolShareEstimateReq";
  value: Uint8Array;
}
export interface PoolShareEstimateReqAmino {
  external_asset?: AssetAmino;
  native_asset_amount?: string;
  external_asset_amount?: string;
}
export interface PoolShareEstimateReqAminoMsg {
  type: "/sifnode.clp.v1.PoolShareEstimateReq";
  value: PoolShareEstimateReqAmino;
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
  swapInfo: SwapInfo;
}
export interface PoolShareEstimateResProtoMsg {
  typeUrl: "/sifnode.clp.v1.PoolShareEstimateRes";
  value: Uint8Array;
}
export interface PoolShareEstimateResAmino {
  percentage?: string;
  native_asset_amount?: string;
  external_asset_amount?: string;
  swap_info?: SwapInfoAmino;
}
export interface PoolShareEstimateResAminoMsg {
  type: "/sifnode.clp.v1.PoolShareEstimateRes";
  value: PoolShareEstimateResAmino;
}
export interface PoolShareEstimateResSDKType {
  percentage: string;
  native_asset_amount: string;
  external_asset_amount: string;
  swap_info: SwapInfoSDKType;
}
export interface SwapInfo {
  status: SwapStatus;
  fee: string;
  feeRate: string;
  amount: string;
  result: string;
}
export interface SwapInfoProtoMsg {
  typeUrl: "/sifnode.clp.v1.SwapInfo";
  value: Uint8Array;
}
export interface SwapInfoAmino {
  status?: SwapStatus;
  fee?: string;
  fee_rate?: string;
  amount?: string;
  result?: string;
}
export interface SwapInfoAminoMsg {
  type: "/sifnode.clp.v1.SwapInfo";
  value: SwapInfoAmino;
}
export interface SwapInfoSDKType {
  status: SwapStatus;
  fee: string;
  fee_rate: string;
  amount: string;
  result: string;
}
export interface RewardsBucketReq {
  denom: string;
}
export interface RewardsBucketReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.RewardsBucketReq";
  value: Uint8Array;
}
export interface RewardsBucketReqAmino {
  denom?: string;
}
export interface RewardsBucketReqAminoMsg {
  type: "/sifnode.clp.v1.RewardsBucketReq";
  value: RewardsBucketReqAmino;
}
export interface RewardsBucketReqSDKType {
  denom: string;
}
export interface RewardsBucketRes {
  rewardsBucket: RewardsBucket;
}
export interface RewardsBucketResProtoMsg {
  typeUrl: "/sifnode.clp.v1.RewardsBucketRes";
  value: Uint8Array;
}
export interface RewardsBucketResAmino {
  rewards_bucket?: RewardsBucketAmino;
}
export interface RewardsBucketResAminoMsg {
  type: "/sifnode.clp.v1.RewardsBucketRes";
  value: RewardsBucketResAmino;
}
export interface RewardsBucketResSDKType {
  rewards_bucket: RewardsBucketSDKType;
}
export interface AllRewardsBucketReq {
  pagination?: PageRequest;
}
export interface AllRewardsBucketReqProtoMsg {
  typeUrl: "/sifnode.clp.v1.AllRewardsBucketReq";
  value: Uint8Array;
}
export interface AllRewardsBucketReqAmino {
  pagination?: PageRequestAmino;
}
export interface AllRewardsBucketReqAminoMsg {
  type: "/sifnode.clp.v1.AllRewardsBucketReq";
  value: AllRewardsBucketReqAmino;
}
export interface AllRewardsBucketReqSDKType {
  pagination?: PageRequestSDKType;
}
export interface AllRewardsBucketRes {
  rewardsBucket: RewardsBucket[];
  pagination?: PageResponse;
}
export interface AllRewardsBucketResProtoMsg {
  typeUrl: "/sifnode.clp.v1.AllRewardsBucketRes";
  value: Uint8Array;
}
export interface AllRewardsBucketResAmino {
  rewards_bucket?: RewardsBucketAmino[];
  pagination?: PageResponseAmino;
}
export interface AllRewardsBucketResAminoMsg {
  type: "/sifnode.clp.v1.AllRewardsBucketRes";
  value: AllRewardsBucketResAmino;
}
export interface AllRewardsBucketResSDKType {
  rewards_bucket: RewardsBucketSDKType[];
  pagination?: PageResponseSDKType;
}
function createBasePoolReq(): PoolReq {
  return {
    symbol: ""
  };
}
export const PoolReq = {
  typeUrl: "/sifnode.clp.v1.PoolReq",
  encode(message: PoolReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PoolReqAmino): PoolReq {
    const message = createBasePoolReq();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: PoolReq): PoolReqAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: PoolReqAminoMsg): PoolReq {
    return PoolReq.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolReqProtoMsg): PoolReq {
    return PoolReq.decode(message.value);
  },
  toProto(message: PoolReq): Uint8Array {
    return PoolReq.encode(message).finish();
  },
  toProtoMsg(message: PoolReq): PoolReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PoolReq",
      value: PoolReq.encode(message).finish()
    };
  }
};
function createBasePoolRes(): PoolRes {
  return {
    pool: undefined,
    clpModuleAddress: "",
    height: BigInt(0)
  };
}
export const PoolRes = {
  typeUrl: "/sifnode.clp.v1.PoolRes",
  encode(message: PoolRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.clpModuleAddress !== "") {
      writer.uint32(18).string(message.clpModuleAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): PoolRes {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      clpModuleAddress: isSet(object.clpModuleAddress) ? String(object.clpModuleAddress) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PoolRes>): PoolRes {
    const message = createBasePoolRes();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.clpModuleAddress = object.clpModuleAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolResAmino): PoolRes {
    const message = createBasePoolRes();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    if (object.clp_module_address !== undefined && object.clp_module_address !== null) {
      message.clpModuleAddress = object.clp_module_address;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: PoolRes): PoolResAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    obj.clp_module_address = message.clpModuleAddress === "" ? undefined : message.clpModuleAddress;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolResAminoMsg): PoolRes {
    return PoolRes.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolResProtoMsg): PoolRes {
    return PoolRes.decode(message.value);
  },
  toProto(message: PoolRes): Uint8Array {
    return PoolRes.encode(message).finish();
  },
  toProtoMsg(message: PoolRes): PoolResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PoolRes",
      value: PoolRes.encode(message).finish()
    };
  }
};
function createBasePoolsReq(): PoolsReq {
  return {
    pagination: undefined
  };
}
export const PoolsReq = {
  typeUrl: "/sifnode.clp.v1.PoolsReq",
  encode(message: PoolsReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PoolsReqAmino): PoolsReq {
    const message = createBasePoolsReq();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsReq): PoolsReqAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsReqAminoMsg): PoolsReq {
    return PoolsReq.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolsReqProtoMsg): PoolsReq {
    return PoolsReq.decode(message.value);
  },
  toProto(message: PoolsReq): Uint8Array {
    return PoolsReq.encode(message).finish();
  },
  toProtoMsg(message: PoolsReq): PoolsReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PoolsReq",
      value: PoolsReq.encode(message).finish()
    };
  }
};
function createBasePoolsRes(): PoolsRes {
  return {
    pools: [],
    clpModuleAddress: "",
    height: BigInt(0),
    pagination: undefined
  };
}
export const PoolsRes = {
  typeUrl: "/sifnode.clp.v1.PoolsRes",
  encode(message: PoolsRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.clpModuleAddress !== "") {
      writer.uint32(18).string(message.clpModuleAddress);
    }
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PoolsRes>): PoolsRes {
    const message = createBasePoolsRes();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.clpModuleAddress = object.clpModuleAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: PoolsResAmino): PoolsRes {
    const message = createBasePoolsRes();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    if (object.clp_module_address !== undefined && object.clp_module_address !== null) {
      message.clpModuleAddress = object.clp_module_address;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PoolsRes): PoolsResAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.clp_module_address = message.clpModuleAddress === "" ? undefined : message.clpModuleAddress;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolsResAminoMsg): PoolsRes {
    return PoolsRes.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolsResProtoMsg): PoolsRes {
    return PoolsRes.decode(message.value);
  },
  toProto(message: PoolsRes): Uint8Array {
    return PoolsRes.encode(message).finish();
  },
  toProtoMsg(message: PoolsRes): PoolsResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PoolsRes",
      value: PoolsRes.encode(message).finish()
    };
  }
};
function createBaseLiquidityProviderReq(): LiquidityProviderReq {
  return {
    symbol: "",
    lpAddress: ""
  };
}
export const LiquidityProviderReq = {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderReq",
  encode(message: LiquidityProviderReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LiquidityProviderReqAmino): LiquidityProviderReq {
    const message = createBaseLiquidityProviderReq();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.lp_address !== undefined && object.lp_address !== null) {
      message.lpAddress = object.lp_address;
    }
    return message;
  },
  toAmino(message: LiquidityProviderReq): LiquidityProviderReqAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.lp_address = message.lpAddress === "" ? undefined : message.lpAddress;
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderReqAminoMsg): LiquidityProviderReq {
    return LiquidityProviderReq.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderReqProtoMsg): LiquidityProviderReq {
    return LiquidityProviderReq.decode(message.value);
  },
  toProto(message: LiquidityProviderReq): Uint8Array {
    return LiquidityProviderReq.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderReq): LiquidityProviderReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProviderReq",
      value: LiquidityProviderReq.encode(message).finish()
    };
  }
};
function createBaseLiquidityProviderRes(): LiquidityProviderRes {
  return {
    liquidityProvider: undefined,
    nativeAssetBalance: "",
    externalAssetBalance: "",
    height: BigInt(0)
  };
}
export const LiquidityProviderRes = {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderRes",
  encode(message: LiquidityProviderRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityProvider !== undefined) {
      LiquidityProvider.encode(message.liquidityProvider, writer.uint32(10).fork()).ldelim();
    }
    if (message.nativeAssetBalance !== "") {
      writer.uint32(18).string(message.nativeAssetBalance);
    }
    if (message.externalAssetBalance !== "") {
      writer.uint32(26).string(message.externalAssetBalance);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProviderRes {
    return {
      liquidityProvider: isSet(object.liquidityProvider) ? LiquidityProvider.fromJSON(object.liquidityProvider) : undefined,
      nativeAssetBalance: isSet(object.nativeAssetBalance) ? String(object.nativeAssetBalance) : "",
      externalAssetBalance: isSet(object.externalAssetBalance) ? String(object.externalAssetBalance) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<LiquidityProviderRes>): LiquidityProviderRes {
    const message = createBaseLiquidityProviderRes();
    message.liquidityProvider = object.liquidityProvider !== undefined && object.liquidityProvider !== null ? LiquidityProvider.fromPartial(object.liquidityProvider) : undefined;
    message.nativeAssetBalance = object.nativeAssetBalance ?? "";
    message.externalAssetBalance = object.externalAssetBalance ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityProviderResAmino): LiquidityProviderRes {
    const message = createBaseLiquidityProviderRes();
    if (object.liquidity_provider !== undefined && object.liquidity_provider !== null) {
      message.liquidityProvider = LiquidityProvider.fromAmino(object.liquidity_provider);
    }
    if (object.native_asset_balance !== undefined && object.native_asset_balance !== null) {
      message.nativeAssetBalance = object.native_asset_balance;
    }
    if (object.external_asset_balance !== undefined && object.external_asset_balance !== null) {
      message.externalAssetBalance = object.external_asset_balance;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: LiquidityProviderRes): LiquidityProviderResAmino {
    const obj: any = {};
    obj.liquidity_provider = message.liquidityProvider ? LiquidityProvider.toAmino(message.liquidityProvider) : undefined;
    obj.native_asset_balance = message.nativeAssetBalance === "" ? undefined : message.nativeAssetBalance;
    obj.external_asset_balance = message.externalAssetBalance === "" ? undefined : message.externalAssetBalance;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderResAminoMsg): LiquidityProviderRes {
    return LiquidityProviderRes.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderResProtoMsg): LiquidityProviderRes {
    return LiquidityProviderRes.decode(message.value);
  },
  toProto(message: LiquidityProviderRes): Uint8Array {
    return LiquidityProviderRes.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderRes): LiquidityProviderResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProviderRes",
      value: LiquidityProviderRes.encode(message).finish()
    };
  }
};
function createBaseAssetListReq(): AssetListReq {
  return {
    lpAddress: "",
    pagination: undefined
  };
}
export const AssetListReq = {
  typeUrl: "/sifnode.clp.v1.AssetListReq",
  encode(message: AssetListReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AssetListReqAmino): AssetListReq {
    const message = createBaseAssetListReq();
    if (object.lp_address !== undefined && object.lp_address !== null) {
      message.lpAddress = object.lp_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: AssetListReq): AssetListReqAmino {
    const obj: any = {};
    obj.lp_address = message.lpAddress === "" ? undefined : message.lpAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetListReqAminoMsg): AssetListReq {
    return AssetListReq.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetListReqProtoMsg): AssetListReq {
    return AssetListReq.decode(message.value);
  },
  toProto(message: AssetListReq): Uint8Array {
    return AssetListReq.encode(message).finish();
  },
  toProtoMsg(message: AssetListReq): AssetListReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.AssetListReq",
      value: AssetListReq.encode(message).finish()
    };
  }
};
function createBaseAssetListRes(): AssetListRes {
  return {
    assets: [],
    height: BigInt(0),
    pagination: undefined
  };
}
export const AssetListRes = {
  typeUrl: "/sifnode.clp.v1.AssetListRes",
  encode(message: AssetListRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<AssetListRes>): AssetListRes {
    const message = createBaseAssetListRes();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: AssetListResAmino): AssetListRes {
    const message = createBaseAssetListRes();
    message.assets = object.assets?.map(e => Asset.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: AssetListRes): AssetListResAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = message.assets;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetListResAminoMsg): AssetListRes {
    return AssetListRes.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetListResProtoMsg): AssetListRes {
    return AssetListRes.decode(message.value);
  },
  toProto(message: AssetListRes): Uint8Array {
    return AssetListRes.encode(message).finish();
  },
  toProtoMsg(message: AssetListRes): AssetListResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.AssetListRes",
      value: AssetListRes.encode(message).finish()
    };
  }
};
function createBaseLiquidityProviderDataReq(): LiquidityProviderDataReq {
  return {
    lpAddress: "",
    pagination: undefined
  };
}
export const LiquidityProviderDataReq = {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderDataReq",
  encode(message: LiquidityProviderDataReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LiquidityProviderDataReqAmino): LiquidityProviderDataReq {
    const message = createBaseLiquidityProviderDataReq();
    if (object.lp_address !== undefined && object.lp_address !== null) {
      message.lpAddress = object.lp_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: LiquidityProviderDataReq): LiquidityProviderDataReqAmino {
    const obj: any = {};
    obj.lp_address = message.lpAddress === "" ? undefined : message.lpAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderDataReqAminoMsg): LiquidityProviderDataReq {
    return LiquidityProviderDataReq.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderDataReqProtoMsg): LiquidityProviderDataReq {
    return LiquidityProviderDataReq.decode(message.value);
  },
  toProto(message: LiquidityProviderDataReq): Uint8Array {
    return LiquidityProviderDataReq.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderDataReq): LiquidityProviderDataReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProviderDataReq",
      value: LiquidityProviderDataReq.encode(message).finish()
    };
  }
};
function createBaseLiquidityProviderDataRes(): LiquidityProviderDataRes {
  return {
    liquidityProviderData: [],
    height: BigInt(0),
    pagination: undefined
  };
}
export const LiquidityProviderDataRes = {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderDataRes",
  encode(message: LiquidityProviderDataRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidityProviderData) {
      LiquidityProviderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProviderDataRes>): LiquidityProviderDataRes {
    const message = createBaseLiquidityProviderDataRes();
    message.liquidityProviderData = object.liquidityProviderData?.map(e => LiquidityProviderData.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: LiquidityProviderDataResAmino): LiquidityProviderDataRes {
    const message = createBaseLiquidityProviderDataRes();
    message.liquidityProviderData = object.liquidity_provider_data?.map(e => LiquidityProviderData.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: LiquidityProviderDataRes): LiquidityProviderDataResAmino {
    const obj: any = {};
    if (message.liquidityProviderData) {
      obj.liquidity_provider_data = message.liquidityProviderData.map(e => e ? LiquidityProviderData.toAmino(e) : undefined);
    } else {
      obj.liquidity_provider_data = message.liquidityProviderData;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderDataResAminoMsg): LiquidityProviderDataRes {
    return LiquidityProviderDataRes.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderDataResProtoMsg): LiquidityProviderDataRes {
    return LiquidityProviderDataRes.decode(message.value);
  },
  toProto(message: LiquidityProviderDataRes): Uint8Array {
    return LiquidityProviderDataRes.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderDataRes): LiquidityProviderDataResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProviderDataRes",
      value: LiquidityProviderDataRes.encode(message).finish()
    };
  }
};
function createBaseLiquidityProviderListReq(): LiquidityProviderListReq {
  return {
    symbol: "",
    pagination: undefined
  };
}
export const LiquidityProviderListReq = {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderListReq",
  encode(message: LiquidityProviderListReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LiquidityProviderListReqAmino): LiquidityProviderListReq {
    const message = createBaseLiquidityProviderListReq();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: LiquidityProviderListReq): LiquidityProviderListReqAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderListReqAminoMsg): LiquidityProviderListReq {
    return LiquidityProviderListReq.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderListReqProtoMsg): LiquidityProviderListReq {
    return LiquidityProviderListReq.decode(message.value);
  },
  toProto(message: LiquidityProviderListReq): Uint8Array {
    return LiquidityProviderListReq.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderListReq): LiquidityProviderListReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProviderListReq",
      value: LiquidityProviderListReq.encode(message).finish()
    };
  }
};
function createBaseLiquidityProviderListRes(): LiquidityProviderListRes {
  return {
    liquidityProviders: [],
    height: BigInt(0),
    pagination: undefined
  };
}
export const LiquidityProviderListRes = {
  typeUrl: "/sifnode.clp.v1.LiquidityProviderListRes",
  encode(message: LiquidityProviderListRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProviderListRes>): LiquidityProviderListRes {
    const message = createBaseLiquidityProviderListRes();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: LiquidityProviderListResAmino): LiquidityProviderListRes {
    const message = createBaseLiquidityProviderListRes();
    message.liquidityProviders = object.liquidity_providers?.map(e => LiquidityProvider.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: LiquidityProviderListRes): LiquidityProviderListResAmino {
    const obj: any = {};
    if (message.liquidityProviders) {
      obj.liquidity_providers = message.liquidityProviders.map(e => e ? LiquidityProvider.toAmino(e) : undefined);
    } else {
      obj.liquidity_providers = message.liquidityProviders;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProviderListResAminoMsg): LiquidityProviderListRes {
    return LiquidityProviderListRes.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProviderListResProtoMsg): LiquidityProviderListRes {
    return LiquidityProviderListRes.decode(message.value);
  },
  toProto(message: LiquidityProviderListRes): Uint8Array {
    return LiquidityProviderListRes.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProviderListRes): LiquidityProviderListResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProviderListRes",
      value: LiquidityProviderListRes.encode(message).finish()
    };
  }
};
function createBaseLiquidityProvidersReq(): LiquidityProvidersReq {
  return {
    pagination: undefined
  };
}
export const LiquidityProvidersReq = {
  typeUrl: "/sifnode.clp.v1.LiquidityProvidersReq",
  encode(message: LiquidityProvidersReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LiquidityProvidersReqAmino): LiquidityProvidersReq {
    const message = createBaseLiquidityProvidersReq();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: LiquidityProvidersReq): LiquidityProvidersReqAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProvidersReqAminoMsg): LiquidityProvidersReq {
    return LiquidityProvidersReq.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProvidersReqProtoMsg): LiquidityProvidersReq {
    return LiquidityProvidersReq.decode(message.value);
  },
  toProto(message: LiquidityProvidersReq): Uint8Array {
    return LiquidityProvidersReq.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProvidersReq): LiquidityProvidersReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProvidersReq",
      value: LiquidityProvidersReq.encode(message).finish()
    };
  }
};
function createBaseLiquidityProvidersRes(): LiquidityProvidersRes {
  return {
    liquidityProviders: [],
    height: BigInt(0),
    pagination: undefined
  };
}
export const LiquidityProvidersRes = {
  typeUrl: "/sifnode.clp.v1.LiquidityProvidersRes",
  encode(message: LiquidityProvidersRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<LiquidityProvidersRes>): LiquidityProvidersRes {
    const message = createBaseLiquidityProvidersRes();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: LiquidityProvidersResAmino): LiquidityProvidersRes {
    const message = createBaseLiquidityProvidersRes();
    message.liquidityProviders = object.liquidity_providers?.map(e => LiquidityProvider.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: LiquidityProvidersRes): LiquidityProvidersResAmino {
    const obj: any = {};
    if (message.liquidityProviders) {
      obj.liquidity_providers = message.liquidityProviders.map(e => e ? LiquidityProvider.toAmino(e) : undefined);
    } else {
      obj.liquidity_providers = message.liquidityProviders;
    }
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProvidersResAminoMsg): LiquidityProvidersRes {
    return LiquidityProvidersRes.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProvidersResProtoMsg): LiquidityProvidersRes {
    return LiquidityProvidersRes.decode(message.value);
  },
  toProto(message: LiquidityProvidersRes): Uint8Array {
    return LiquidityProvidersRes.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProvidersRes): LiquidityProvidersResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProvidersRes",
      value: LiquidityProvidersRes.encode(message).finish()
    };
  }
};
function createBaseParamsReq(): ParamsReq {
  return {};
}
export const ParamsReq = {
  typeUrl: "/sifnode.clp.v1.ParamsReq",
  encode(_: ParamsReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ParamsReq {
    return {};
  },
  fromPartial(_: Partial<ParamsReq>): ParamsReq {
    const message = createBaseParamsReq();
    return message;
  },
  fromAmino(_: ParamsReqAmino): ParamsReq {
    const message = createBaseParamsReq();
    return message;
  },
  toAmino(_: ParamsReq): ParamsReqAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsReqAminoMsg): ParamsReq {
    return ParamsReq.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsReqProtoMsg): ParamsReq {
    return ParamsReq.decode(message.value);
  },
  toProto(message: ParamsReq): Uint8Array {
    return ParamsReq.encode(message).finish();
  },
  toProtoMsg(message: ParamsReq): ParamsReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.ParamsReq",
      value: ParamsReq.encode(message).finish()
    };
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
  typeUrl: "/sifnode.clp.v1.ParamsRes",
  encode(message: ParamsRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.symmetryThreshold !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.symmetryThreshold, 18).atomics);
    }
    if (message.symmetryRatioThreshold !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.symmetryRatioThreshold, 18).atomics);
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
  },
  fromAmino(object: ParamsResAmino): ParamsRes {
    const message = createBaseParamsRes();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.symmetry_threshold !== undefined && object.symmetry_threshold !== null) {
      message.symmetryThreshold = object.symmetry_threshold;
    }
    if (object.symmetry_ratio_threshold !== undefined && object.symmetry_ratio_threshold !== null) {
      message.symmetryRatioThreshold = object.symmetry_ratio_threshold;
    }
    return message;
  },
  toAmino(message: ParamsRes): ParamsResAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.symmetry_threshold = message.symmetryThreshold === "" ? undefined : message.symmetryThreshold;
    obj.symmetry_ratio_threshold = message.symmetryRatioThreshold === "" ? undefined : message.symmetryRatioThreshold;
    return obj;
  },
  fromAminoMsg(object: ParamsResAminoMsg): ParamsRes {
    return ParamsRes.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResProtoMsg): ParamsRes {
    return ParamsRes.decode(message.value);
  },
  toProto(message: ParamsRes): Uint8Array {
    return ParamsRes.encode(message).finish();
  },
  toProtoMsg(message: ParamsRes): ParamsResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.ParamsRes",
      value: ParamsRes.encode(message).finish()
    };
  }
};
function createBaseRewardParamsReq(): RewardParamsReq {
  return {};
}
export const RewardParamsReq = {
  typeUrl: "/sifnode.clp.v1.RewardParamsReq",
  encode(_: RewardParamsReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RewardParamsReq {
    return {};
  },
  fromPartial(_: Partial<RewardParamsReq>): RewardParamsReq {
    const message = createBaseRewardParamsReq();
    return message;
  },
  fromAmino(_: RewardParamsReqAmino): RewardParamsReq {
    const message = createBaseRewardParamsReq();
    return message;
  },
  toAmino(_: RewardParamsReq): RewardParamsReqAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RewardParamsReqAminoMsg): RewardParamsReq {
    return RewardParamsReq.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardParamsReqProtoMsg): RewardParamsReq {
    return RewardParamsReq.decode(message.value);
  },
  toProto(message: RewardParamsReq): Uint8Array {
    return RewardParamsReq.encode(message).finish();
  },
  toProtoMsg(message: RewardParamsReq): RewardParamsReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RewardParamsReq",
      value: RewardParamsReq.encode(message).finish()
    };
  }
};
function createBaseRewardParamsRes(): RewardParamsRes {
  return {
    params: undefined
  };
}
export const RewardParamsRes = {
  typeUrl: "/sifnode.clp.v1.RewardParamsRes",
  encode(message: RewardParamsRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RewardParamsResAmino): RewardParamsRes {
    const message = createBaseRewardParamsRes();
    if (object.params !== undefined && object.params !== null) {
      message.params = RewardParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: RewardParamsRes): RewardParamsResAmino {
    const obj: any = {};
    obj.params = message.params ? RewardParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardParamsResAminoMsg): RewardParamsRes {
    return RewardParamsRes.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardParamsResProtoMsg): RewardParamsRes {
    return RewardParamsRes.decode(message.value);
  },
  toProto(message: RewardParamsRes): Uint8Array {
    return RewardParamsRes.encode(message).finish();
  },
  toProtoMsg(message: RewardParamsRes): RewardParamsResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RewardParamsRes",
      value: RewardParamsRes.encode(message).finish()
    };
  }
};
function createBasePmtpParamsReq(): PmtpParamsReq {
  return {};
}
export const PmtpParamsReq = {
  typeUrl: "/sifnode.clp.v1.PmtpParamsReq",
  encode(_: PmtpParamsReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): PmtpParamsReq {
    return {};
  },
  fromPartial(_: Partial<PmtpParamsReq>): PmtpParamsReq {
    const message = createBasePmtpParamsReq();
    return message;
  },
  fromAmino(_: PmtpParamsReqAmino): PmtpParamsReq {
    const message = createBasePmtpParamsReq();
    return message;
  },
  toAmino(_: PmtpParamsReq): PmtpParamsReqAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: PmtpParamsReqAminoMsg): PmtpParamsReq {
    return PmtpParamsReq.fromAmino(object.value);
  },
  fromProtoMsg(message: PmtpParamsReqProtoMsg): PmtpParamsReq {
    return PmtpParamsReq.decode(message.value);
  },
  toProto(message: PmtpParamsReq): Uint8Array {
    return PmtpParamsReq.encode(message).finish();
  },
  toProtoMsg(message: PmtpParamsReq): PmtpParamsReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PmtpParamsReq",
      value: PmtpParamsReq.encode(message).finish()
    };
  }
};
function createBasePmtpParamsRes(): PmtpParamsRes {
  return {
    params: undefined,
    pmtpRateParams: undefined,
    pmtpEpoch: undefined,
    height: BigInt(0)
  };
}
export const PmtpParamsRes = {
  typeUrl: "/sifnode.clp.v1.PmtpParamsRes",
  encode(message: PmtpParamsRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      PmtpParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.pmtpRateParams !== undefined) {
      PmtpRateParams.encode(message.pmtpRateParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.pmtpEpoch !== undefined) {
      PmtpEpoch.encode(message.pmtpEpoch, writer.uint32(26).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): PmtpParamsRes {
    return {
      params: isSet(object.params) ? PmtpParams.fromJSON(object.params) : undefined,
      pmtpRateParams: isSet(object.pmtpRateParams) ? PmtpRateParams.fromJSON(object.pmtpRateParams) : undefined,
      pmtpEpoch: isSet(object.pmtpEpoch) ? PmtpEpoch.fromJSON(object.pmtpEpoch) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PmtpParamsRes>): PmtpParamsRes {
    const message = createBasePmtpParamsRes();
    message.params = object.params !== undefined && object.params !== null ? PmtpParams.fromPartial(object.params) : undefined;
    message.pmtpRateParams = object.pmtpRateParams !== undefined && object.pmtpRateParams !== null ? PmtpRateParams.fromPartial(object.pmtpRateParams) : undefined;
    message.pmtpEpoch = object.pmtpEpoch !== undefined && object.pmtpEpoch !== null ? PmtpEpoch.fromPartial(object.pmtpEpoch) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PmtpParamsResAmino): PmtpParamsRes {
    const message = createBasePmtpParamsRes();
    if (object.params !== undefined && object.params !== null) {
      message.params = PmtpParams.fromAmino(object.params);
    }
    if (object.pmtp_rate_params !== undefined && object.pmtp_rate_params !== null) {
      message.pmtpRateParams = PmtpRateParams.fromAmino(object.pmtp_rate_params);
    }
    if (object.pmtp_epoch !== undefined && object.pmtp_epoch !== null) {
      message.pmtpEpoch = PmtpEpoch.fromAmino(object.pmtp_epoch);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: PmtpParamsRes): PmtpParamsResAmino {
    const obj: any = {};
    obj.params = message.params ? PmtpParams.toAmino(message.params) : undefined;
    obj.pmtp_rate_params = message.pmtpRateParams ? PmtpRateParams.toAmino(message.pmtpRateParams) : undefined;
    obj.pmtp_epoch = message.pmtpEpoch ? PmtpEpoch.toAmino(message.pmtpEpoch) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PmtpParamsResAminoMsg): PmtpParamsRes {
    return PmtpParamsRes.fromAmino(object.value);
  },
  fromProtoMsg(message: PmtpParamsResProtoMsg): PmtpParamsRes {
    return PmtpParamsRes.decode(message.value);
  },
  toProto(message: PmtpParamsRes): Uint8Array {
    return PmtpParamsRes.encode(message).finish();
  },
  toProtoMsg(message: PmtpParamsRes): PmtpParamsResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PmtpParamsRes",
      value: PmtpParamsRes.encode(message).finish()
    };
  }
};
function createBaseLiquidityProtectionParamsReq(): LiquidityProtectionParamsReq {
  return {};
}
export const LiquidityProtectionParamsReq = {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsReq",
  encode(_: LiquidityProtectionParamsReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): LiquidityProtectionParamsReq {
    return {};
  },
  fromPartial(_: Partial<LiquidityProtectionParamsReq>): LiquidityProtectionParamsReq {
    const message = createBaseLiquidityProtectionParamsReq();
    return message;
  },
  fromAmino(_: LiquidityProtectionParamsReqAmino): LiquidityProtectionParamsReq {
    const message = createBaseLiquidityProtectionParamsReq();
    return message;
  },
  toAmino(_: LiquidityProtectionParamsReq): LiquidityProtectionParamsReqAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: LiquidityProtectionParamsReqAminoMsg): LiquidityProtectionParamsReq {
    return LiquidityProtectionParamsReq.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProtectionParamsReqProtoMsg): LiquidityProtectionParamsReq {
    return LiquidityProtectionParamsReq.decode(message.value);
  },
  toProto(message: LiquidityProtectionParamsReq): Uint8Array {
    return LiquidityProtectionParamsReq.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProtectionParamsReq): LiquidityProtectionParamsReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsReq",
      value: LiquidityProtectionParamsReq.encode(message).finish()
    };
  }
};
function createBaseLiquidityProtectionParamsRes(): LiquidityProtectionParamsRes {
  return {
    params: undefined,
    rateParams: undefined,
    height: BigInt(0)
  };
}
export const LiquidityProtectionParamsRes = {
  typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsRes",
  encode(message: LiquidityProtectionParamsRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      LiquidityProtectionParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.rateParams !== undefined) {
      LiquidityProtectionRateParams.encode(message.rateParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): LiquidityProtectionParamsRes {
    return {
      params: isSet(object.params) ? LiquidityProtectionParams.fromJSON(object.params) : undefined,
      rateParams: isSet(object.rateParams) ? LiquidityProtectionRateParams.fromJSON(object.rateParams) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<LiquidityProtectionParamsRes>): LiquidityProtectionParamsRes {
    const message = createBaseLiquidityProtectionParamsRes();
    message.params = object.params !== undefined && object.params !== null ? LiquidityProtectionParams.fromPartial(object.params) : undefined;
    message.rateParams = object.rateParams !== undefined && object.rateParams !== null ? LiquidityProtectionRateParams.fromPartial(object.rateParams) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LiquidityProtectionParamsResAmino): LiquidityProtectionParamsRes {
    const message = createBaseLiquidityProtectionParamsRes();
    if (object.params !== undefined && object.params !== null) {
      message.params = LiquidityProtectionParams.fromAmino(object.params);
    }
    if (object.rate_params !== undefined && object.rate_params !== null) {
      message.rateParams = LiquidityProtectionRateParams.fromAmino(object.rate_params);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: LiquidityProtectionParamsRes): LiquidityProtectionParamsResAmino {
    const obj: any = {};
    obj.params = message.params ? LiquidityProtectionParams.toAmino(message.params) : undefined;
    obj.rate_params = message.rateParams ? LiquidityProtectionRateParams.toAmino(message.rateParams) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LiquidityProtectionParamsResAminoMsg): LiquidityProtectionParamsRes {
    return LiquidityProtectionParamsRes.fromAmino(object.value);
  },
  fromProtoMsg(message: LiquidityProtectionParamsResProtoMsg): LiquidityProtectionParamsRes {
    return LiquidityProtectionParamsRes.decode(message.value);
  },
  toProto(message: LiquidityProtectionParamsRes): Uint8Array {
    return LiquidityProtectionParamsRes.encode(message).finish();
  },
  toProtoMsg(message: LiquidityProtectionParamsRes): LiquidityProtectionParamsResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.LiquidityProtectionParamsRes",
      value: LiquidityProtectionParamsRes.encode(message).finish()
    };
  }
};
function createBaseProviderDistributionParamsReq(): ProviderDistributionParamsReq {
  return {};
}
export const ProviderDistributionParamsReq = {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsReq",
  encode(_: ProviderDistributionParamsReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ProviderDistributionParamsReq {
    return {};
  },
  fromPartial(_: Partial<ProviderDistributionParamsReq>): ProviderDistributionParamsReq {
    const message = createBaseProviderDistributionParamsReq();
    return message;
  },
  fromAmino(_: ProviderDistributionParamsReqAmino): ProviderDistributionParamsReq {
    const message = createBaseProviderDistributionParamsReq();
    return message;
  },
  toAmino(_: ProviderDistributionParamsReq): ProviderDistributionParamsReqAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ProviderDistributionParamsReqAminoMsg): ProviderDistributionParamsReq {
    return ProviderDistributionParamsReq.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderDistributionParamsReqProtoMsg): ProviderDistributionParamsReq {
    return ProviderDistributionParamsReq.decode(message.value);
  },
  toProto(message: ProviderDistributionParamsReq): Uint8Array {
    return ProviderDistributionParamsReq.encode(message).finish();
  },
  toProtoMsg(message: ProviderDistributionParamsReq): ProviderDistributionParamsReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsReq",
      value: ProviderDistributionParamsReq.encode(message).finish()
    };
  }
};
function createBaseProviderDistributionParamsRes(): ProviderDistributionParamsRes {
  return {
    params: undefined
  };
}
export const ProviderDistributionParamsRes = {
  typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsRes",
  encode(message: ProviderDistributionParamsRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ProviderDistributionParamsResAmino): ProviderDistributionParamsRes {
    const message = createBaseProviderDistributionParamsRes();
    if (object.params !== undefined && object.params !== null) {
      message.params = ProviderDistributionParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ProviderDistributionParamsRes): ProviderDistributionParamsResAmino {
    const obj: any = {};
    obj.params = message.params ? ProviderDistributionParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProviderDistributionParamsResAminoMsg): ProviderDistributionParamsRes {
    return ProviderDistributionParamsRes.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderDistributionParamsResProtoMsg): ProviderDistributionParamsRes {
    return ProviderDistributionParamsRes.decode(message.value);
  },
  toProto(message: ProviderDistributionParamsRes): Uint8Array {
    return ProviderDistributionParamsRes.encode(message).finish();
  },
  toProtoMsg(message: ProviderDistributionParamsRes): ProviderDistributionParamsResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.ProviderDistributionParamsRes",
      value: ProviderDistributionParamsRes.encode(message).finish()
    };
  }
};
function createBaseSwapFeeParamsReq(): SwapFeeParamsReq {
  return {};
}
export const SwapFeeParamsReq = {
  typeUrl: "/sifnode.clp.v1.SwapFeeParamsReq",
  encode(_: SwapFeeParamsReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SwapFeeParamsReq {
    return {};
  },
  fromPartial(_: Partial<SwapFeeParamsReq>): SwapFeeParamsReq {
    const message = createBaseSwapFeeParamsReq();
    return message;
  },
  fromAmino(_: SwapFeeParamsReqAmino): SwapFeeParamsReq {
    const message = createBaseSwapFeeParamsReq();
    return message;
  },
  toAmino(_: SwapFeeParamsReq): SwapFeeParamsReqAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SwapFeeParamsReqAminoMsg): SwapFeeParamsReq {
    return SwapFeeParamsReq.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapFeeParamsReqProtoMsg): SwapFeeParamsReq {
    return SwapFeeParamsReq.decode(message.value);
  },
  toProto(message: SwapFeeParamsReq): Uint8Array {
    return SwapFeeParamsReq.encode(message).finish();
  },
  toProtoMsg(message: SwapFeeParamsReq): SwapFeeParamsReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.SwapFeeParamsReq",
      value: SwapFeeParamsReq.encode(message).finish()
    };
  }
};
function createBaseSwapFeeParamsRes(): SwapFeeParamsRes {
  return {
    defaultSwapFeeRate: "",
    tokenParams: []
  };
}
export const SwapFeeParamsRes = {
  typeUrl: "/sifnode.clp.v1.SwapFeeParamsRes",
  encode(message: SwapFeeParamsRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultSwapFeeRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.defaultSwapFeeRate, 18).atomics);
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
  },
  fromAmino(object: SwapFeeParamsResAmino): SwapFeeParamsRes {
    const message = createBaseSwapFeeParamsRes();
    if (object.default_swap_fee_rate !== undefined && object.default_swap_fee_rate !== null) {
      message.defaultSwapFeeRate = object.default_swap_fee_rate;
    }
    message.tokenParams = object.token_params?.map(e => SwapFeeTokenParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SwapFeeParamsRes): SwapFeeParamsResAmino {
    const obj: any = {};
    obj.default_swap_fee_rate = message.defaultSwapFeeRate === "" ? undefined : message.defaultSwapFeeRate;
    if (message.tokenParams) {
      obj.token_params = message.tokenParams.map(e => e ? SwapFeeTokenParams.toAmino(e) : undefined);
    } else {
      obj.token_params = message.tokenParams;
    }
    return obj;
  },
  fromAminoMsg(object: SwapFeeParamsResAminoMsg): SwapFeeParamsRes {
    return SwapFeeParamsRes.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapFeeParamsResProtoMsg): SwapFeeParamsRes {
    return SwapFeeParamsRes.decode(message.value);
  },
  toProto(message: SwapFeeParamsRes): Uint8Array {
    return SwapFeeParamsRes.encode(message).finish();
  },
  toProtoMsg(message: SwapFeeParamsRes): SwapFeeParamsResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.SwapFeeParamsRes",
      value: SwapFeeParamsRes.encode(message).finish()
    };
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
  typeUrl: "/sifnode.clp.v1.PoolShareEstimateReq",
  encode(message: PoolShareEstimateReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PoolShareEstimateReqAmino): PoolShareEstimateReq {
    const message = createBasePoolShareEstimateReq();
    if (object.external_asset !== undefined && object.external_asset !== null) {
      message.externalAsset = Asset.fromAmino(object.external_asset);
    }
    if (object.native_asset_amount !== undefined && object.native_asset_amount !== null) {
      message.nativeAssetAmount = object.native_asset_amount;
    }
    if (object.external_asset_amount !== undefined && object.external_asset_amount !== null) {
      message.externalAssetAmount = object.external_asset_amount;
    }
    return message;
  },
  toAmino(message: PoolShareEstimateReq): PoolShareEstimateReqAmino {
    const obj: any = {};
    obj.external_asset = message.externalAsset ? Asset.toAmino(message.externalAsset) : undefined;
    obj.native_asset_amount = message.nativeAssetAmount === "" ? undefined : message.nativeAssetAmount;
    obj.external_asset_amount = message.externalAssetAmount === "" ? undefined : message.externalAssetAmount;
    return obj;
  },
  fromAminoMsg(object: PoolShareEstimateReqAminoMsg): PoolShareEstimateReq {
    return PoolShareEstimateReq.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolShareEstimateReqProtoMsg): PoolShareEstimateReq {
    return PoolShareEstimateReq.decode(message.value);
  },
  toProto(message: PoolShareEstimateReq): Uint8Array {
    return PoolShareEstimateReq.encode(message).finish();
  },
  toProtoMsg(message: PoolShareEstimateReq): PoolShareEstimateReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PoolShareEstimateReq",
      value: PoolShareEstimateReq.encode(message).finish()
    };
  }
};
function createBasePoolShareEstimateRes(): PoolShareEstimateRes {
  return {
    percentage: "",
    nativeAssetAmount: "",
    externalAssetAmount: "",
    swapInfo: SwapInfo.fromPartial({})
  };
}
export const PoolShareEstimateRes = {
  typeUrl: "/sifnode.clp.v1.PoolShareEstimateRes",
  encode(message: PoolShareEstimateRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.percentage !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.percentage, 18).atomics);
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
  },
  fromAmino(object: PoolShareEstimateResAmino): PoolShareEstimateRes {
    const message = createBasePoolShareEstimateRes();
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = object.percentage;
    }
    if (object.native_asset_amount !== undefined && object.native_asset_amount !== null) {
      message.nativeAssetAmount = object.native_asset_amount;
    }
    if (object.external_asset_amount !== undefined && object.external_asset_amount !== null) {
      message.externalAssetAmount = object.external_asset_amount;
    }
    if (object.swap_info !== undefined && object.swap_info !== null) {
      message.swapInfo = SwapInfo.fromAmino(object.swap_info);
    }
    return message;
  },
  toAmino(message: PoolShareEstimateRes): PoolShareEstimateResAmino {
    const obj: any = {};
    obj.percentage = message.percentage === "" ? undefined : message.percentage;
    obj.native_asset_amount = message.nativeAssetAmount === "" ? undefined : message.nativeAssetAmount;
    obj.external_asset_amount = message.externalAssetAmount === "" ? undefined : message.externalAssetAmount;
    obj.swap_info = message.swapInfo ? SwapInfo.toAmino(message.swapInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolShareEstimateResAminoMsg): PoolShareEstimateRes {
    return PoolShareEstimateRes.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolShareEstimateResProtoMsg): PoolShareEstimateRes {
    return PoolShareEstimateRes.decode(message.value);
  },
  toProto(message: PoolShareEstimateRes): Uint8Array {
    return PoolShareEstimateRes.encode(message).finish();
  },
  toProtoMsg(message: PoolShareEstimateRes): PoolShareEstimateResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.PoolShareEstimateRes",
      value: PoolShareEstimateRes.encode(message).finish()
    };
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
  typeUrl: "/sifnode.clp.v1.SwapInfo",
  encode(message: SwapInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    if (message.feeRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.feeRate, 18).atomics);
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
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : -1,
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
  },
  fromAmino(object: SwapInfoAmino): SwapInfo {
    const message = createBaseSwapInfo();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    }
    if (object.fee_rate !== undefined && object.fee_rate !== null) {
      message.feeRate = object.fee_rate;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: SwapInfo): SwapInfoAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.fee = message.fee === "" ? undefined : message.fee;
    obj.fee_rate = message.feeRate === "" ? undefined : message.feeRate;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: SwapInfoAminoMsg): SwapInfo {
    return SwapInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SwapInfoProtoMsg): SwapInfo {
    return SwapInfo.decode(message.value);
  },
  toProto(message: SwapInfo): Uint8Array {
    return SwapInfo.encode(message).finish();
  },
  toProtoMsg(message: SwapInfo): SwapInfoProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.SwapInfo",
      value: SwapInfo.encode(message).finish()
    };
  }
};
function createBaseRewardsBucketReq(): RewardsBucketReq {
  return {
    denom: ""
  };
}
export const RewardsBucketReq = {
  typeUrl: "/sifnode.clp.v1.RewardsBucketReq",
  encode(message: RewardsBucketReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): RewardsBucketReq {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<RewardsBucketReq>): RewardsBucketReq {
    const message = createBaseRewardsBucketReq();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: RewardsBucketReqAmino): RewardsBucketReq {
    const message = createBaseRewardsBucketReq();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: RewardsBucketReq): RewardsBucketReqAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: RewardsBucketReqAminoMsg): RewardsBucketReq {
    return RewardsBucketReq.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsBucketReqProtoMsg): RewardsBucketReq {
    return RewardsBucketReq.decode(message.value);
  },
  toProto(message: RewardsBucketReq): Uint8Array {
    return RewardsBucketReq.encode(message).finish();
  },
  toProtoMsg(message: RewardsBucketReq): RewardsBucketReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RewardsBucketReq",
      value: RewardsBucketReq.encode(message).finish()
    };
  }
};
function createBaseRewardsBucketRes(): RewardsBucketRes {
  return {
    rewardsBucket: RewardsBucket.fromPartial({})
  };
}
export const RewardsBucketRes = {
  typeUrl: "/sifnode.clp.v1.RewardsBucketRes",
  encode(message: RewardsBucketRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardsBucket !== undefined) {
      RewardsBucket.encode(message.rewardsBucket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RewardsBucketRes {
    return {
      rewardsBucket: isSet(object.rewardsBucket) ? RewardsBucket.fromJSON(object.rewardsBucket) : undefined
    };
  },
  fromPartial(object: Partial<RewardsBucketRes>): RewardsBucketRes {
    const message = createBaseRewardsBucketRes();
    message.rewardsBucket = object.rewardsBucket !== undefined && object.rewardsBucket !== null ? RewardsBucket.fromPartial(object.rewardsBucket) : undefined;
    return message;
  },
  fromAmino(object: RewardsBucketResAmino): RewardsBucketRes {
    const message = createBaseRewardsBucketRes();
    if (object.rewards_bucket !== undefined && object.rewards_bucket !== null) {
      message.rewardsBucket = RewardsBucket.fromAmino(object.rewards_bucket);
    }
    return message;
  },
  toAmino(message: RewardsBucketRes): RewardsBucketResAmino {
    const obj: any = {};
    obj.rewards_bucket = message.rewardsBucket ? RewardsBucket.toAmino(message.rewardsBucket) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardsBucketResAminoMsg): RewardsBucketRes {
    return RewardsBucketRes.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsBucketResProtoMsg): RewardsBucketRes {
    return RewardsBucketRes.decode(message.value);
  },
  toProto(message: RewardsBucketRes): Uint8Array {
    return RewardsBucketRes.encode(message).finish();
  },
  toProtoMsg(message: RewardsBucketRes): RewardsBucketResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RewardsBucketRes",
      value: RewardsBucketRes.encode(message).finish()
    };
  }
};
function createBaseAllRewardsBucketReq(): AllRewardsBucketReq {
  return {
    pagination: undefined
  };
}
export const AllRewardsBucketReq = {
  typeUrl: "/sifnode.clp.v1.AllRewardsBucketReq",
  encode(message: AllRewardsBucketReq, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AllRewardsBucketReq {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<AllRewardsBucketReq>): AllRewardsBucketReq {
    const message = createBaseAllRewardsBucketReq();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: AllRewardsBucketReqAmino): AllRewardsBucketReq {
    const message = createBaseAllRewardsBucketReq();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: AllRewardsBucketReq): AllRewardsBucketReqAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: AllRewardsBucketReqAminoMsg): AllRewardsBucketReq {
    return AllRewardsBucketReq.fromAmino(object.value);
  },
  fromProtoMsg(message: AllRewardsBucketReqProtoMsg): AllRewardsBucketReq {
    return AllRewardsBucketReq.decode(message.value);
  },
  toProto(message: AllRewardsBucketReq): Uint8Array {
    return AllRewardsBucketReq.encode(message).finish();
  },
  toProtoMsg(message: AllRewardsBucketReq): AllRewardsBucketReqProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.AllRewardsBucketReq",
      value: AllRewardsBucketReq.encode(message).finish()
    };
  }
};
function createBaseAllRewardsBucketRes(): AllRewardsBucketRes {
  return {
    rewardsBucket: [],
    pagination: undefined
  };
}
export const AllRewardsBucketRes = {
  typeUrl: "/sifnode.clp.v1.AllRewardsBucketRes",
  encode(message: AllRewardsBucketRes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewardsBucket) {
      RewardsBucket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AllRewardsBucketRes {
    return {
      rewardsBucket: Array.isArray(object?.rewardsBucket) ? object.rewardsBucket.map((e: any) => RewardsBucket.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<AllRewardsBucketRes>): AllRewardsBucketRes {
    const message = createBaseAllRewardsBucketRes();
    message.rewardsBucket = object.rewardsBucket?.map(e => RewardsBucket.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: AllRewardsBucketResAmino): AllRewardsBucketRes {
    const message = createBaseAllRewardsBucketRes();
    message.rewardsBucket = object.rewards_bucket?.map(e => RewardsBucket.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: AllRewardsBucketRes): AllRewardsBucketResAmino {
    const obj: any = {};
    if (message.rewardsBucket) {
      obj.rewards_bucket = message.rewardsBucket.map(e => e ? RewardsBucket.toAmino(e) : undefined);
    } else {
      obj.rewards_bucket = message.rewardsBucket;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: AllRewardsBucketResAminoMsg): AllRewardsBucketRes {
    return AllRewardsBucketRes.fromAmino(object.value);
  },
  fromProtoMsg(message: AllRewardsBucketResProtoMsg): AllRewardsBucketRes {
    return AllRewardsBucketRes.decode(message.value);
  },
  toProto(message: AllRewardsBucketRes): Uint8Array {
    return AllRewardsBucketRes.encode(message).finish();
  },
  toProtoMsg(message: AllRewardsBucketRes): AllRewardsBucketResProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.AllRewardsBucketRes",
      value: AllRewardsBucketRes.encode(message).finish()
    };
  }
};