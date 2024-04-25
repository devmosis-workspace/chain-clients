import { CDP, CDPAmino, CDPSDKType, Deposit, DepositAmino, DepositSDKType } from "./cdp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  cdps: CDP[];
  deposits: Deposit[];
  startingCdpId: bigint;
  debtDenom: string;
  govDenom: string;
  previousAccumulationTimes: GenesisAccumulationTime[];
  totalPrincipals: GenesisTotalPrincipal[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  cdps?: CDPAmino[];
  deposits?: DepositAmino[];
  starting_cdp_id?: string;
  debt_denom?: string;
  gov_denom?: string;
  previous_accumulation_times?: GenesisAccumulationTimeAmino[];
  total_principals?: GenesisTotalPrincipalAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.cdp.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  cdps: CDPSDKType[];
  deposits: DepositSDKType[];
  starting_cdp_id: bigint;
  debt_denom: string;
  gov_denom: string;
  previous_accumulation_times: GenesisAccumulationTimeSDKType[];
  total_principals: GenesisTotalPrincipalSDKType[];
}
/** Params defines the parameters for the cdp module. */
export interface Params {
  collateralParams: CollateralParam[];
  debtParam: DebtParam;
  globalDebtLimit: Coin;
  surplusAuctionThreshold: string;
  surplusAuctionLot: string;
  debtAuctionThreshold: string;
  debtAuctionLot: string;
  circuitBreaker: boolean;
  liquidationBlockInterval: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the cdp module. */
export interface ParamsAmino {
  collateral_params?: CollateralParamAmino[];
  debt_param?: DebtParamAmino;
  global_debt_limit?: CoinAmino;
  surplus_auction_threshold?: string;
  surplus_auction_lot?: string;
  debt_auction_threshold?: string;
  debt_auction_lot?: string;
  circuit_breaker?: boolean;
  liquidation_block_interval?: string;
}
export interface ParamsAminoMsg {
  type: "/kava.cdp.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the cdp module. */
export interface ParamsSDKType {
  collateral_params: CollateralParamSDKType[];
  debt_param: DebtParamSDKType;
  global_debt_limit: CoinSDKType;
  surplus_auction_threshold: string;
  surplus_auction_lot: string;
  debt_auction_threshold: string;
  debt_auction_lot: string;
  circuit_breaker: boolean;
  liquidation_block_interval: bigint;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParam {
  denom: string;
  referenceAsset: string;
  conversionFactor: string;
  debtFloor: string;
}
export interface DebtParamProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.DebtParam";
  value: Uint8Array;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParamAmino {
  denom?: string;
  reference_asset?: string;
  conversion_factor?: string;
  debt_floor?: string;
}
export interface DebtParamAminoMsg {
  type: "/kava.cdp.v1beta1.DebtParam";
  value: DebtParamAmino;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParamSDKType {
  denom: string;
  reference_asset: string;
  conversion_factor: string;
  debt_floor: string;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParam {
  denom: string;
  type: string;
  liquidationRatio: string;
  debtLimit: Coin;
  stabilityFee: string;
  auctionSize: string;
  liquidationPenalty: string;
  spotMarketId: string;
  liquidationMarketId: string;
  keeperRewardPercentage: string;
  checkCollateralizationIndexCount: string;
  conversionFactor: string;
}
export interface CollateralParamProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.CollateralParam";
  value: Uint8Array;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParamAmino {
  denom?: string;
  type?: string;
  liquidation_ratio?: string;
  debt_limit?: CoinAmino;
  stability_fee?: string;
  auction_size?: string;
  liquidation_penalty?: string;
  spot_market_id?: string;
  liquidation_market_id?: string;
  keeper_reward_percentage?: string;
  check_collateralization_index_count?: string;
  conversion_factor?: string;
}
export interface CollateralParamAminoMsg {
  type: "/kava.cdp.v1beta1.CollateralParam";
  value: CollateralParamAmino;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParamSDKType {
  denom: string;
  type: string;
  liquidation_ratio: string;
  debt_limit: CoinSDKType;
  stability_fee: string;
  auction_size: string;
  liquidation_penalty: string;
  spot_market_id: string;
  liquidation_market_id: string;
  keeper_reward_percentage: string;
  check_collateralization_index_count: string;
  conversion_factor: string;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTime {
  collateralType: string;
  previousAccumulationTime: Timestamp;
  interestFactor: string;
}
export interface GenesisAccumulationTimeProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.GenesisAccumulationTime";
  value: Uint8Array;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTimeAmino {
  collateral_type?: string;
  previous_accumulation_time?: string;
  interest_factor?: string;
}
export interface GenesisAccumulationTimeAminoMsg {
  type: "/kava.cdp.v1beta1.GenesisAccumulationTime";
  value: GenesisAccumulationTimeAmino;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTimeSDKType {
  collateral_type: string;
  previous_accumulation_time: TimestampSDKType;
  interest_factor: string;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipal {
  collateralType: string;
  totalPrincipal: string;
}
export interface GenesisTotalPrincipalProtoMsg {
  typeUrl: "/kava.cdp.v1beta1.GenesisTotalPrincipal";
  value: Uint8Array;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipalAmino {
  collateral_type?: string;
  total_principal?: string;
}
export interface GenesisTotalPrincipalAminoMsg {
  type: "/kava.cdp.v1beta1.GenesisTotalPrincipal";
  value: GenesisTotalPrincipalAmino;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipalSDKType {
  collateral_type: string;
  total_principal: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    cdps: [],
    deposits: [],
    startingCdpId: BigInt(0),
    debtDenom: "",
    govDenom: "",
    previousAccumulationTimes: [],
    totalPrincipals: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.cdp.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cdps) {
      CDP.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startingCdpId !== BigInt(0)) {
      writer.uint32(32).uint64(message.startingCdpId);
    }
    if (message.debtDenom !== "") {
      writer.uint32(42).string(message.debtDenom);
    }
    if (message.govDenom !== "") {
      writer.uint32(50).string(message.govDenom);
    }
    for (const v of message.previousAccumulationTimes) {
      GenesisAccumulationTime.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.totalPrincipals) {
      GenesisTotalPrincipal.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      cdps: Array.isArray(object?.cdps) ? object.cdps.map((e: any) => CDP.fromJSON(e)) : [],
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      startingCdpId: isSet(object.startingCdpId) ? BigInt(object.startingCdpId.toString()) : BigInt(0),
      debtDenom: isSet(object.debtDenom) ? String(object.debtDenom) : "",
      govDenom: isSet(object.govDenom) ? String(object.govDenom) : "",
      previousAccumulationTimes: Array.isArray(object?.previousAccumulationTimes) ? object.previousAccumulationTimes.map((e: any) => GenesisAccumulationTime.fromJSON(e)) : [],
      totalPrincipals: Array.isArray(object?.totalPrincipals) ? object.totalPrincipals.map((e: any) => GenesisTotalPrincipal.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.cdps = object.cdps?.map(e => CDP.fromPartial(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.startingCdpId = object.startingCdpId !== undefined && object.startingCdpId !== null ? BigInt(object.startingCdpId.toString()) : BigInt(0);
    message.debtDenom = object.debtDenom ?? "";
    message.govDenom = object.govDenom ?? "";
    message.previousAccumulationTimes = object.previousAccumulationTimes?.map(e => GenesisAccumulationTime.fromPartial(e)) || [];
    message.totalPrincipals = object.totalPrincipals?.map(e => GenesisTotalPrincipal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.cdps = object.cdps?.map(e => CDP.fromAmino(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.starting_cdp_id !== undefined && object.starting_cdp_id !== null) {
      message.startingCdpId = BigInt(object.starting_cdp_id);
    }
    if (object.debt_denom !== undefined && object.debt_denom !== null) {
      message.debtDenom = object.debt_denom;
    }
    if (object.gov_denom !== undefined && object.gov_denom !== null) {
      message.govDenom = object.gov_denom;
    }
    message.previousAccumulationTimes = object.previous_accumulation_times?.map(e => GenesisAccumulationTime.fromAmino(e)) || [];
    message.totalPrincipals = object.total_principals?.map(e => GenesisTotalPrincipal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.cdps) {
      obj.cdps = message.cdps.map(e => e ? CDP.toAmino(e) : undefined);
    } else {
      obj.cdps = [];
    }
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.starting_cdp_id = message.startingCdpId ? message.startingCdpId.toString() : undefined;
    obj.debt_denom = message.debtDenom;
    obj.gov_denom = message.govDenom;
    if (message.previousAccumulationTimes) {
      obj.previous_accumulation_times = message.previousAccumulationTimes.map(e => e ? GenesisAccumulationTime.toAmino(e) : undefined);
    } else {
      obj.previous_accumulation_times = [];
    }
    if (message.totalPrincipals) {
      obj.total_principals = message.totalPrincipals.map(e => e ? GenesisTotalPrincipal.toAmino(e) : undefined);
    } else {
      obj.total_principals = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    collateralParams: [],
    debtParam: DebtParam.fromPartial({}),
    globalDebtLimit: Coin.fromPartial({}),
    surplusAuctionThreshold: "",
    surplusAuctionLot: "",
    debtAuctionThreshold: "",
    debtAuctionLot: "",
    circuitBreaker: false,
    liquidationBlockInterval: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/kava.cdp.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.collateralParams) {
      CollateralParam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.debtParam !== undefined) {
      DebtParam.encode(message.debtParam, writer.uint32(18).fork()).ldelim();
    }
    if (message.globalDebtLimit !== undefined) {
      Coin.encode(message.globalDebtLimit, writer.uint32(26).fork()).ldelim();
    }
    if (message.surplusAuctionThreshold !== "") {
      writer.uint32(34).string(message.surplusAuctionThreshold);
    }
    if (message.surplusAuctionLot !== "") {
      writer.uint32(42).string(message.surplusAuctionLot);
    }
    if (message.debtAuctionThreshold !== "") {
      writer.uint32(50).string(message.debtAuctionThreshold);
    }
    if (message.debtAuctionLot !== "") {
      writer.uint32(58).string(message.debtAuctionLot);
    }
    if (message.circuitBreaker === true) {
      writer.uint32(64).bool(message.circuitBreaker);
    }
    if (message.liquidationBlockInterval !== BigInt(0)) {
      writer.uint32(72).int64(message.liquidationBlockInterval);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      collateralParams: Array.isArray(object?.collateralParams) ? object.collateralParams.map((e: any) => CollateralParam.fromJSON(e)) : [],
      debtParam: isSet(object.debtParam) ? DebtParam.fromJSON(object.debtParam) : undefined,
      globalDebtLimit: isSet(object.globalDebtLimit) ? Coin.fromJSON(object.globalDebtLimit) : undefined,
      surplusAuctionThreshold: isSet(object.surplusAuctionThreshold) ? String(object.surplusAuctionThreshold) : "",
      surplusAuctionLot: isSet(object.surplusAuctionLot) ? String(object.surplusAuctionLot) : "",
      debtAuctionThreshold: isSet(object.debtAuctionThreshold) ? String(object.debtAuctionThreshold) : "",
      debtAuctionLot: isSet(object.debtAuctionLot) ? String(object.debtAuctionLot) : "",
      circuitBreaker: isSet(object.circuitBreaker) ? Boolean(object.circuitBreaker) : false,
      liquidationBlockInterval: isSet(object.liquidationBlockInterval) ? BigInt(object.liquidationBlockInterval.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.collateralParams = object.collateralParams?.map(e => CollateralParam.fromPartial(e)) || [];
    message.debtParam = object.debtParam !== undefined && object.debtParam !== null ? DebtParam.fromPartial(object.debtParam) : undefined;
    message.globalDebtLimit = object.globalDebtLimit !== undefined && object.globalDebtLimit !== null ? Coin.fromPartial(object.globalDebtLimit) : undefined;
    message.surplusAuctionThreshold = object.surplusAuctionThreshold ?? "";
    message.surplusAuctionLot = object.surplusAuctionLot ?? "";
    message.debtAuctionThreshold = object.debtAuctionThreshold ?? "";
    message.debtAuctionLot = object.debtAuctionLot ?? "";
    message.circuitBreaker = object.circuitBreaker ?? false;
    message.liquidationBlockInterval = object.liquidationBlockInterval !== undefined && object.liquidationBlockInterval !== null ? BigInt(object.liquidationBlockInterval.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.collateralParams = object.collateral_params?.map(e => CollateralParam.fromAmino(e)) || [];
    if (object.debt_param !== undefined && object.debt_param !== null) {
      message.debtParam = DebtParam.fromAmino(object.debt_param);
    }
    if (object.global_debt_limit !== undefined && object.global_debt_limit !== null) {
      message.globalDebtLimit = Coin.fromAmino(object.global_debt_limit);
    }
    if (object.surplus_auction_threshold !== undefined && object.surplus_auction_threshold !== null) {
      message.surplusAuctionThreshold = object.surplus_auction_threshold;
    }
    if (object.surplus_auction_lot !== undefined && object.surplus_auction_lot !== null) {
      message.surplusAuctionLot = object.surplus_auction_lot;
    }
    if (object.debt_auction_threshold !== undefined && object.debt_auction_threshold !== null) {
      message.debtAuctionThreshold = object.debt_auction_threshold;
    }
    if (object.debt_auction_lot !== undefined && object.debt_auction_lot !== null) {
      message.debtAuctionLot = object.debt_auction_lot;
    }
    if (object.circuit_breaker !== undefined && object.circuit_breaker !== null) {
      message.circuitBreaker = object.circuit_breaker;
    }
    if (object.liquidation_block_interval !== undefined && object.liquidation_block_interval !== null) {
      message.liquidationBlockInterval = BigInt(object.liquidation_block_interval);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.collateralParams) {
      obj.collateral_params = message.collateralParams.map(e => e ? CollateralParam.toAmino(e) : undefined);
    } else {
      obj.collateral_params = [];
    }
    obj.debt_param = message.debtParam ? DebtParam.toAmino(message.debtParam) : undefined;
    obj.global_debt_limit = message.globalDebtLimit ? Coin.toAmino(message.globalDebtLimit) : undefined;
    obj.surplus_auction_threshold = message.surplusAuctionThreshold;
    obj.surplus_auction_lot = message.surplusAuctionLot;
    obj.debt_auction_threshold = message.debtAuctionThreshold;
    obj.debt_auction_lot = message.debtAuctionLot;
    obj.circuit_breaker = message.circuitBreaker;
    obj.liquidation_block_interval = message.liquidationBlockInterval ? message.liquidationBlockInterval.toString() : undefined;
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
      typeUrl: "/kava.cdp.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseDebtParam(): DebtParam {
  return {
    denom: "",
    referenceAsset: "",
    conversionFactor: "",
    debtFloor: ""
  };
}
export const DebtParam = {
  typeUrl: "/kava.cdp.v1beta1.DebtParam",
  encode(message: DebtParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.referenceAsset !== "") {
      writer.uint32(18).string(message.referenceAsset);
    }
    if (message.conversionFactor !== "") {
      writer.uint32(26).string(message.conversionFactor);
    }
    if (message.debtFloor !== "") {
      writer.uint32(34).string(message.debtFloor);
    }
    return writer;
  },
  fromJSON(object: any): DebtParam {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      referenceAsset: isSet(object.referenceAsset) ? String(object.referenceAsset) : "",
      conversionFactor: isSet(object.conversionFactor) ? String(object.conversionFactor) : "",
      debtFloor: isSet(object.debtFloor) ? String(object.debtFloor) : ""
    };
  },
  fromPartial(object: Partial<DebtParam>): DebtParam {
    const message = createBaseDebtParam();
    message.denom = object.denom ?? "";
    message.referenceAsset = object.referenceAsset ?? "";
    message.conversionFactor = object.conversionFactor ?? "";
    message.debtFloor = object.debtFloor ?? "";
    return message;
  },
  fromAmino(object: DebtParamAmino): DebtParam {
    const message = createBaseDebtParam();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.reference_asset !== undefined && object.reference_asset !== null) {
      message.referenceAsset = object.reference_asset;
    }
    if (object.conversion_factor !== undefined && object.conversion_factor !== null) {
      message.conversionFactor = object.conversion_factor;
    }
    if (object.debt_floor !== undefined && object.debt_floor !== null) {
      message.debtFloor = object.debt_floor;
    }
    return message;
  },
  toAmino(message: DebtParam): DebtParamAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.reference_asset = message.referenceAsset;
    obj.conversion_factor = message.conversionFactor;
    obj.debt_floor = message.debtFloor;
    return obj;
  },
  fromAminoMsg(object: DebtParamAminoMsg): DebtParam {
    return DebtParam.fromAmino(object.value);
  },
  fromProtoMsg(message: DebtParamProtoMsg): DebtParam {
    return DebtParam.decode(message.value);
  },
  toProto(message: DebtParam): Uint8Array {
    return DebtParam.encode(message).finish();
  },
  toProtoMsg(message: DebtParam): DebtParamProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.DebtParam",
      value: DebtParam.encode(message).finish()
    };
  }
};
function createBaseCollateralParam(): CollateralParam {
  return {
    denom: "",
    type: "",
    liquidationRatio: "",
    debtLimit: Coin.fromPartial({}),
    stabilityFee: "",
    auctionSize: "",
    liquidationPenalty: "",
    spotMarketId: "",
    liquidationMarketId: "",
    keeperRewardPercentage: "",
    checkCollateralizationIndexCount: "",
    conversionFactor: ""
  };
}
export const CollateralParam = {
  typeUrl: "/kava.cdp.v1beta1.CollateralParam",
  encode(message: CollateralParam, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.liquidationRatio, 18).atomics);
    }
    if (message.debtLimit !== undefined) {
      Coin.encode(message.debtLimit, writer.uint32(34).fork()).ldelim();
    }
    if (message.stabilityFee !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.stabilityFee, 18).atomics);
    }
    if (message.auctionSize !== "") {
      writer.uint32(50).string(message.auctionSize);
    }
    if (message.liquidationPenalty !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.liquidationPenalty, 18).atomics);
    }
    if (message.spotMarketId !== "") {
      writer.uint32(66).string(message.spotMarketId);
    }
    if (message.liquidationMarketId !== "") {
      writer.uint32(74).string(message.liquidationMarketId);
    }
    if (message.keeperRewardPercentage !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.keeperRewardPercentage, 18).atomics);
    }
    if (message.checkCollateralizationIndexCount !== "") {
      writer.uint32(90).string(message.checkCollateralizationIndexCount);
    }
    if (message.conversionFactor !== "") {
      writer.uint32(98).string(message.conversionFactor);
    }
    return writer;
  },
  fromJSON(object: any): CollateralParam {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      type: isSet(object.type) ? String(object.type) : "",
      liquidationRatio: isSet(object.liquidationRatio) ? String(object.liquidationRatio) : "",
      debtLimit: isSet(object.debtLimit) ? Coin.fromJSON(object.debtLimit) : undefined,
      stabilityFee: isSet(object.stabilityFee) ? String(object.stabilityFee) : "",
      auctionSize: isSet(object.auctionSize) ? String(object.auctionSize) : "",
      liquidationPenalty: isSet(object.liquidationPenalty) ? String(object.liquidationPenalty) : "",
      spotMarketId: isSet(object.spotMarketId) ? String(object.spotMarketId) : "",
      liquidationMarketId: isSet(object.liquidationMarketId) ? String(object.liquidationMarketId) : "",
      keeperRewardPercentage: isSet(object.keeperRewardPercentage) ? String(object.keeperRewardPercentage) : "",
      checkCollateralizationIndexCount: isSet(object.checkCollateralizationIndexCount) ? String(object.checkCollateralizationIndexCount) : "",
      conversionFactor: isSet(object.conversionFactor) ? String(object.conversionFactor) : ""
    };
  },
  fromPartial(object: Partial<CollateralParam>): CollateralParam {
    const message = createBaseCollateralParam();
    message.denom = object.denom ?? "";
    message.type = object.type ?? "";
    message.liquidationRatio = object.liquidationRatio ?? "";
    message.debtLimit = object.debtLimit !== undefined && object.debtLimit !== null ? Coin.fromPartial(object.debtLimit) : undefined;
    message.stabilityFee = object.stabilityFee ?? "";
    message.auctionSize = object.auctionSize ?? "";
    message.liquidationPenalty = object.liquidationPenalty ?? "";
    message.spotMarketId = object.spotMarketId ?? "";
    message.liquidationMarketId = object.liquidationMarketId ?? "";
    message.keeperRewardPercentage = object.keeperRewardPercentage ?? "";
    message.checkCollateralizationIndexCount = object.checkCollateralizationIndexCount ?? "";
    message.conversionFactor = object.conversionFactor ?? "";
    return message;
  },
  fromAmino(object: CollateralParamAmino): CollateralParam {
    const message = createBaseCollateralParam();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.liquidation_ratio !== undefined && object.liquidation_ratio !== null) {
      message.liquidationRatio = object.liquidation_ratio;
    }
    if (object.debt_limit !== undefined && object.debt_limit !== null) {
      message.debtLimit = Coin.fromAmino(object.debt_limit);
    }
    if (object.stability_fee !== undefined && object.stability_fee !== null) {
      message.stabilityFee = object.stability_fee;
    }
    if (object.auction_size !== undefined && object.auction_size !== null) {
      message.auctionSize = object.auction_size;
    }
    if (object.liquidation_penalty !== undefined && object.liquidation_penalty !== null) {
      message.liquidationPenalty = object.liquidation_penalty;
    }
    if (object.spot_market_id !== undefined && object.spot_market_id !== null) {
      message.spotMarketId = object.spot_market_id;
    }
    if (object.liquidation_market_id !== undefined && object.liquidation_market_id !== null) {
      message.liquidationMarketId = object.liquidation_market_id;
    }
    if (object.keeper_reward_percentage !== undefined && object.keeper_reward_percentage !== null) {
      message.keeperRewardPercentage = object.keeper_reward_percentage;
    }
    if (object.check_collateralization_index_count !== undefined && object.check_collateralization_index_count !== null) {
      message.checkCollateralizationIndexCount = object.check_collateralization_index_count;
    }
    if (object.conversion_factor !== undefined && object.conversion_factor !== null) {
      message.conversionFactor = object.conversion_factor;
    }
    return message;
  },
  toAmino(message: CollateralParam): CollateralParamAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.type = message.type;
    obj.liquidation_ratio = message.liquidationRatio;
    obj.debt_limit = message.debtLimit ? Coin.toAmino(message.debtLimit) : undefined;
    obj.stability_fee = message.stabilityFee;
    obj.auction_size = message.auctionSize;
    obj.liquidation_penalty = message.liquidationPenalty;
    obj.spot_market_id = message.spotMarketId;
    obj.liquidation_market_id = message.liquidationMarketId;
    obj.keeper_reward_percentage = message.keeperRewardPercentage;
    obj.check_collateralization_index_count = message.checkCollateralizationIndexCount;
    obj.conversion_factor = message.conversionFactor;
    return obj;
  },
  fromAminoMsg(object: CollateralParamAminoMsg): CollateralParam {
    return CollateralParam.fromAmino(object.value);
  },
  fromProtoMsg(message: CollateralParamProtoMsg): CollateralParam {
    return CollateralParam.decode(message.value);
  },
  toProto(message: CollateralParam): Uint8Array {
    return CollateralParam.encode(message).finish();
  },
  toProtoMsg(message: CollateralParam): CollateralParamProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.CollateralParam",
      value: CollateralParam.encode(message).finish()
    };
  }
};
function createBaseGenesisAccumulationTime(): GenesisAccumulationTime {
  return {
    collateralType: "",
    previousAccumulationTime: Timestamp.fromPartial({}),
    interestFactor: ""
  };
}
export const GenesisAccumulationTime = {
  typeUrl: "/kava.cdp.v1beta1.GenesisAccumulationTime",
  encode(message: GenesisAccumulationTime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.previousAccumulationTime !== undefined) {
      Timestamp.encode(message.previousAccumulationTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.interestFactor !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.interestFactor, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): GenesisAccumulationTime {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      previousAccumulationTime: isSet(object.previousAccumulationTime) ? fromJsonTimestamp(object.previousAccumulationTime) : undefined,
      interestFactor: isSet(object.interestFactor) ? String(object.interestFactor) : ""
    };
  },
  fromPartial(object: Partial<GenesisAccumulationTime>): GenesisAccumulationTime {
    const message = createBaseGenesisAccumulationTime();
    message.collateralType = object.collateralType ?? "";
    message.previousAccumulationTime = object.previousAccumulationTime !== undefined && object.previousAccumulationTime !== null ? Timestamp.fromPartial(object.previousAccumulationTime) : undefined;
    message.interestFactor = object.interestFactor ?? "";
    return message;
  },
  fromAmino(object: GenesisAccumulationTimeAmino): GenesisAccumulationTime {
    const message = createBaseGenesisAccumulationTime();
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.previous_accumulation_time !== undefined && object.previous_accumulation_time !== null) {
      message.previousAccumulationTime = Timestamp.fromAmino(object.previous_accumulation_time);
    }
    if (object.interest_factor !== undefined && object.interest_factor !== null) {
      message.interestFactor = object.interest_factor;
    }
    return message;
  },
  toAmino(message: GenesisAccumulationTime): GenesisAccumulationTimeAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.previous_accumulation_time = message.previousAccumulationTime ? Timestamp.toAmino(message.previousAccumulationTime) : undefined;
    obj.interest_factor = message.interestFactor;
    return obj;
  },
  fromAminoMsg(object: GenesisAccumulationTimeAminoMsg): GenesisAccumulationTime {
    return GenesisAccumulationTime.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisAccumulationTimeProtoMsg): GenesisAccumulationTime {
    return GenesisAccumulationTime.decode(message.value);
  },
  toProto(message: GenesisAccumulationTime): Uint8Array {
    return GenesisAccumulationTime.encode(message).finish();
  },
  toProtoMsg(message: GenesisAccumulationTime): GenesisAccumulationTimeProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.GenesisAccumulationTime",
      value: GenesisAccumulationTime.encode(message).finish()
    };
  }
};
function createBaseGenesisTotalPrincipal(): GenesisTotalPrincipal {
  return {
    collateralType: "",
    totalPrincipal: ""
  };
}
export const GenesisTotalPrincipal = {
  typeUrl: "/kava.cdp.v1beta1.GenesisTotalPrincipal",
  encode(message: GenesisTotalPrincipal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.totalPrincipal !== "") {
      writer.uint32(18).string(message.totalPrincipal);
    }
    return writer;
  },
  fromJSON(object: any): GenesisTotalPrincipal {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      totalPrincipal: isSet(object.totalPrincipal) ? String(object.totalPrincipal) : ""
    };
  },
  fromPartial(object: Partial<GenesisTotalPrincipal>): GenesisTotalPrincipal {
    const message = createBaseGenesisTotalPrincipal();
    message.collateralType = object.collateralType ?? "";
    message.totalPrincipal = object.totalPrincipal ?? "";
    return message;
  },
  fromAmino(object: GenesisTotalPrincipalAmino): GenesisTotalPrincipal {
    const message = createBaseGenesisTotalPrincipal();
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.total_principal !== undefined && object.total_principal !== null) {
      message.totalPrincipal = object.total_principal;
    }
    return message;
  },
  toAmino(message: GenesisTotalPrincipal): GenesisTotalPrincipalAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.total_principal = message.totalPrincipal;
    return obj;
  },
  fromAminoMsg(object: GenesisTotalPrincipalAminoMsg): GenesisTotalPrincipal {
    return GenesisTotalPrincipal.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisTotalPrincipalProtoMsg): GenesisTotalPrincipal {
    return GenesisTotalPrincipal.decode(message.value);
  },
  toProto(message: GenesisTotalPrincipal): Uint8Array {
    return GenesisTotalPrincipal.encode(message).finish();
  },
  toProtoMsg(message: GenesisTotalPrincipal): GenesisTotalPrincipalProtoMsg {
    return {
      typeUrl: "/kava.cdp.v1beta1.GenesisTotalPrincipal",
      value: GenesisTotalPrincipal.encode(message).finish()
    };
  }
};