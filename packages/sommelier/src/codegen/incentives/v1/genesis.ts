import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface GenesisState {
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/incentives.v1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/incentives.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params incentives parameters */
export interface Params {
  /** DistributionPerBlock defines the coin to be sent to the distribution module from the community pool every block */
  distributionPerBlock: Coin;
  /**
   * IncentivesCutoffHeight defines the block height after which the incentives module will stop sending coins to the distribution module from
   * the community pool
   */
  incentivesCutoffHeight: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/incentives.v1.Params";
  value: Uint8Array;
}
/** Params incentives parameters */
export interface ParamsAmino {
  /** DistributionPerBlock defines the coin to be sent to the distribution module from the community pool every block */
  distribution_per_block?: CoinAmino;
  /**
   * IncentivesCutoffHeight defines the block height after which the incentives module will stop sending coins to the distribution module from
   * the community pool
   */
  incentives_cutoff_height?: string;
}
export interface ParamsAminoMsg {
  type: "/incentives.v1.Params";
  value: ParamsAmino;
}
/** Params incentives parameters */
export interface ParamsSDKType {
  distribution_per_block: CoinSDKType;
  incentives_cutoff_height: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/incentives.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/incentives.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    distributionPerBlock: Coin.fromPartial({}),
    incentivesCutoffHeight: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/incentives.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionPerBlock !== undefined) {
      Coin.encode(message.distributionPerBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.incentivesCutoffHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.incentivesCutoffHeight);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      distributionPerBlock: isSet(object.distributionPerBlock) ? Coin.fromJSON(object.distributionPerBlock) : undefined,
      incentivesCutoffHeight: isSet(object.incentivesCutoffHeight) ? BigInt(object.incentivesCutoffHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionPerBlock = object.distributionPerBlock !== undefined && object.distributionPerBlock !== null ? Coin.fromPartial(object.distributionPerBlock) : undefined;
    message.incentivesCutoffHeight = object.incentivesCutoffHeight !== undefined && object.incentivesCutoffHeight !== null ? BigInt(object.incentivesCutoffHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.distribution_per_block !== undefined && object.distribution_per_block !== null) {
      message.distributionPerBlock = Coin.fromAmino(object.distribution_per_block);
    }
    if (object.incentives_cutoff_height !== undefined && object.incentives_cutoff_height !== null) {
      message.incentivesCutoffHeight = BigInt(object.incentives_cutoff_height);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_per_block = message.distributionPerBlock ? Coin.toAmino(message.distributionPerBlock) : undefined;
    obj.incentives_cutoff_height = message.incentivesCutoffHeight ? message.incentivesCutoffHeight.toString() : undefined;
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
      typeUrl: "/incentives.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};