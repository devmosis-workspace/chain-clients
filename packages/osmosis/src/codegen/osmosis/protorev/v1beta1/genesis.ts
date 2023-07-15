import { Params, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, BaseDenom, BaseDenomSDKType, PoolWeights, PoolWeightsSDKType } from "./protorev";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
  /** Parameters for the protorev module. */
  params?: Params;
  /** Token pair arb routes for the protorev module (hot routes). */
  tokenPairArbRoutes: TokenPairArbRoutes[];
  /**
   * The base denominations being used to create cyclic arbitrage routes via the
   * highest liquidity method.
   */
  baseDenoms: BaseDenom[];
  /**
   * The pool weights that are being used to calculate the weight (compute cost)
   * of each route.
   */
  poolWeights?: PoolWeights;
  /** The number of days since module genesis. */
  daysSinceModuleGenesis: Long;
  /** The fees the developer account has accumulated over time. */
  developerFees: Coin[];
  /** The latest block height that the module has processed. */
  latestBlockHeight: Long;
  /** The developer account address of the module. */
  developerAddress: string;
  /**
   * Max pool points per block i.e. the maximum compute time (in ms)
   * that protorev can use per block.
   */
  maxPoolPointsPerBlock: Long;
  /**
   * Max pool points per tx i.e. the maximum compute time (in ms) that
   * protorev can use per tx.
   */
  maxPoolPointsPerTx: Long;
  /** The number of pool points that have been consumed in the current block. */
  pointCountForBlock: Long;
  /** All of the profits that have been accumulated by the module. */
  profits: Coin[];
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  token_pair_arb_routes: TokenPairArbRoutesSDKType[];
  base_denoms: BaseDenomSDKType[];
  pool_weights?: PoolWeightsSDKType;
  days_since_module_genesis: Long;
  developer_fees: CoinSDKType[];
  latest_block_height: Long;
  developer_address: string;
  max_pool_points_per_block: Long;
  max_pool_points_per_tx: Long;
  point_count_for_block: Long;
  profits: CoinSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    tokenPairArbRoutes: [],
    baseDenoms: [],
    poolWeights: undefined,
    daysSinceModuleGenesis: Long.UZERO,
    developerFees: [],
    latestBlockHeight: Long.UZERO,
    developerAddress: "",
    maxPoolPointsPerBlock: Long.UZERO,
    maxPoolPointsPerTx: Long.UZERO,
    pointCountForBlock: Long.UZERO,
    profits: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairArbRoutes) {
      TokenPairArbRoutes.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.baseDenoms) {
      BaseDenom.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolWeights !== undefined) {
      PoolWeights.encode(message.poolWeights, writer.uint32(34).fork()).ldelim();
    }
    if (!message.daysSinceModuleGenesis.isZero()) {
      writer.uint32(40).uint64(message.daysSinceModuleGenesis);
    }
    for (const v of message.developerFees) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (!message.latestBlockHeight.isZero()) {
      writer.uint32(56).uint64(message.latestBlockHeight);
    }
    if (message.developerAddress !== "") {
      writer.uint32(66).string(message.developerAddress);
    }
    if (!message.maxPoolPointsPerBlock.isZero()) {
      writer.uint32(72).uint64(message.maxPoolPointsPerBlock);
    }
    if (!message.maxPoolPointsPerTx.isZero()) {
      writer.uint32(80).uint64(message.maxPoolPointsPerTx);
    }
    if (!message.pointCountForBlock.isZero()) {
      writer.uint32(88).uint64(message.pointCountForBlock);
    }
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tokenPairArbRoutes: Array.isArray(object?.tokenPairArbRoutes) ? object.tokenPairArbRoutes.map((e: any) => TokenPairArbRoutes.fromJSON(e)) : [],
      baseDenoms: Array.isArray(object?.baseDenoms) ? object.baseDenoms.map((e: any) => BaseDenom.fromJSON(e)) : [],
      poolWeights: isSet(object.poolWeights) ? PoolWeights.fromJSON(object.poolWeights) : undefined,
      daysSinceModuleGenesis: isSet(object.daysSinceModuleGenesis) ? Long.fromValue(object.daysSinceModuleGenesis) : Long.UZERO,
      developerFees: Array.isArray(object?.developerFees) ? object.developerFees.map((e: any) => Coin.fromJSON(e)) : [],
      latestBlockHeight: isSet(object.latestBlockHeight) ? Long.fromValue(object.latestBlockHeight) : Long.UZERO,
      developerAddress: isSet(object.developerAddress) ? String(object.developerAddress) : "",
      maxPoolPointsPerBlock: isSet(object.maxPoolPointsPerBlock) ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO,
      maxPoolPointsPerTx: isSet(object.maxPoolPointsPerTx) ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO,
      pointCountForBlock: isSet(object.pointCountForBlock) ? Long.fromValue(object.pointCountForBlock) : Long.UZERO,
      profits: Array.isArray(object?.profits) ? object.profits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tokenPairArbRoutes = object.tokenPairArbRoutes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
    message.baseDenoms = object.baseDenoms?.map(e => BaseDenom.fromPartial(e)) || [];
    message.poolWeights = object.poolWeights !== undefined && object.poolWeights !== null ? PoolWeights.fromPartial(object.poolWeights) : undefined;
    message.daysSinceModuleGenesis = object.daysSinceModuleGenesis !== undefined && object.daysSinceModuleGenesis !== null ? Long.fromValue(object.daysSinceModuleGenesis) : Long.UZERO;
    message.developerFees = object.developerFees?.map(e => Coin.fromPartial(e)) || [];
    message.latestBlockHeight = object.latestBlockHeight !== undefined && object.latestBlockHeight !== null ? Long.fromValue(object.latestBlockHeight) : Long.UZERO;
    message.developerAddress = object.developerAddress ?? "";
    message.maxPoolPointsPerBlock = object.maxPoolPointsPerBlock !== undefined && object.maxPoolPointsPerBlock !== null ? Long.fromValue(object.maxPoolPointsPerBlock) : Long.UZERO;
    message.maxPoolPointsPerTx = object.maxPoolPointsPerTx !== undefined && object.maxPoolPointsPerTx !== null ? Long.fromValue(object.maxPoolPointsPerTx) : Long.UZERO;
    message.pointCountForBlock = object.pointCountForBlock !== undefined && object.pointCountForBlock !== null ? Long.fromValue(object.pointCountForBlock) : Long.UZERO;
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};