import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState {
  params?: Params;
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
}
/** Params incentives parameters */
export interface Params {
  /** DistributionPerBlock defines the coin to be sent to the distribution module from the community pool every block */
  distributionPerBlock?: Coin;
  /**
   * IncentivesCutoffHeight defines the block height after which the incentives module will stop sending coins to the distribution module from
   * the community pool
   */
  incentivesCutoffHeight: Long;
}
/** Params incentives parameters */
export interface ParamsSDKType {
  distribution_per_block?: CoinSDKType;
  incentives_cutoff_height: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseParams(): Params {
  return {
    distributionPerBlock: undefined,
    incentivesCutoffHeight: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionPerBlock !== undefined) {
      Coin.encode(message.distributionPerBlock, writer.uint32(10).fork()).ldelim();
    }
    if (!message.incentivesCutoffHeight.isZero()) {
      writer.uint32(16).uint64(message.incentivesCutoffHeight);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      distributionPerBlock: isSet(object.distributionPerBlock) ? Coin.fromJSON(object.distributionPerBlock) : undefined,
      incentivesCutoffHeight: isSet(object.incentivesCutoffHeight) ? Long.fromValue(object.incentivesCutoffHeight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionPerBlock = object.distributionPerBlock !== undefined && object.distributionPerBlock !== null ? Coin.fromPartial(object.distributionPerBlock) : undefined;
    message.incentivesCutoffHeight = object.incentivesCutoffHeight !== undefined && object.incentivesCutoffHeight !== null ? Long.fromValue(object.incentivesCutoffHeight) : Long.UZERO;
    return message;
  }
};