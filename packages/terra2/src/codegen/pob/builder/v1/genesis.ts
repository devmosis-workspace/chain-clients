import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisState {
  /** GenesisState defines the genesis state of the x/builder module. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pob.builder.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisStateAmino {
  /** GenesisState defines the genesis state of the x/builder module. */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/pob.builder.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params defines the parameters of the x/builder module. */
export interface Params {
  /**
   * max_bundle_size is the maximum number of transactions that can be bundled
   * in a single bundle.
   */
  maxBundleSize: number;
  /**
   * escrow_account_address is the address of the account that will receive a
   * portion of the bid proceeds.
   */
  escrowAccountAddress: Uint8Array;
  /** reserve_fee specifies the bid floor for the auction. */
  reserveFee: Coin;
  /**
   * min_bid_increment specifies the minimum amount that the next bid must be
   * greater than the previous bid.
   */
  minBidIncrement: Coin;
  /**
   * front_running_protection specifies whether front running and sandwich
   * attack protection is enabled.
   */
  frontRunningProtection: boolean;
  /**
   * proposer_fee defines the portion of the winning bid that goes to the block
   * proposer that proposed the block.
   */
  proposerFee: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/pob.builder.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters of the x/builder module. */
export interface ParamsAmino {
  /**
   * max_bundle_size is the maximum number of transactions that can be bundled
   * in a single bundle.
   */
  max_bundle_size?: number;
  /**
   * escrow_account_address is the address of the account that will receive a
   * portion of the bid proceeds.
   */
  escrow_account_address?: string;
  /** reserve_fee specifies the bid floor for the auction. */
  reserve_fee: CoinAmino;
  /**
   * min_bid_increment specifies the minimum amount that the next bid must be
   * greater than the previous bid.
   */
  min_bid_increment: CoinAmino;
  /**
   * front_running_protection specifies whether front running and sandwich
   * attack protection is enabled.
   */
  front_running_protection?: boolean;
  /**
   * proposer_fee defines the portion of the winning bid that goes to the block
   * proposer that proposed the block.
   */
  proposer_fee?: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/builder/Params";
  value: ParamsAmino;
}
/** Params defines the parameters of the x/builder module. */
export interface ParamsSDKType {
  max_bundle_size: number;
  escrow_account_address: Uint8Array;
  reserve_fee: CoinSDKType;
  min_bid_increment: CoinSDKType;
  front_running_protection: boolean;
  proposer_fee: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/pob.builder.v1.GenesisState",
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
      typeUrl: "/pob.builder.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    maxBundleSize: 0,
    escrowAccountAddress: new Uint8Array(),
    reserveFee: Coin.fromPartial({}),
    minBidIncrement: Coin.fromPartial({}),
    frontRunningProtection: false,
    proposerFee: ""
  };
}
export const Params = {
  typeUrl: "/pob.builder.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxBundleSize !== 0) {
      writer.uint32(8).uint32(message.maxBundleSize);
    }
    if (message.escrowAccountAddress.length !== 0) {
      writer.uint32(18).bytes(message.escrowAccountAddress);
    }
    if (message.reserveFee !== undefined) {
      Coin.encode(message.reserveFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.minBidIncrement !== undefined) {
      Coin.encode(message.minBidIncrement, writer.uint32(34).fork()).ldelim();
    }
    if (message.frontRunningProtection === true) {
      writer.uint32(40).bool(message.frontRunningProtection);
    }
    if (message.proposerFee !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.proposerFee, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      maxBundleSize: isSet(object.maxBundleSize) ? Number(object.maxBundleSize) : 0,
      escrowAccountAddress: isSet(object.escrowAccountAddress) ? bytesFromBase64(object.escrowAccountAddress) : new Uint8Array(),
      reserveFee: isSet(object.reserveFee) ? Coin.fromJSON(object.reserveFee) : undefined,
      minBidIncrement: isSet(object.minBidIncrement) ? Coin.fromJSON(object.minBidIncrement) : undefined,
      frontRunningProtection: isSet(object.frontRunningProtection) ? Boolean(object.frontRunningProtection) : false,
      proposerFee: isSet(object.proposerFee) ? String(object.proposerFee) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxBundleSize = object.maxBundleSize ?? 0;
    message.escrowAccountAddress = object.escrowAccountAddress ?? new Uint8Array();
    message.reserveFee = object.reserveFee !== undefined && object.reserveFee !== null ? Coin.fromPartial(object.reserveFee) : undefined;
    message.minBidIncrement = object.minBidIncrement !== undefined && object.minBidIncrement !== null ? Coin.fromPartial(object.minBidIncrement) : undefined;
    message.frontRunningProtection = object.frontRunningProtection ?? false;
    message.proposerFee = object.proposerFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_bundle_size !== undefined && object.max_bundle_size !== null) {
      message.maxBundleSize = object.max_bundle_size;
    }
    if (object.escrow_account_address !== undefined && object.escrow_account_address !== null) {
      message.escrowAccountAddress = bytesFromBase64(object.escrow_account_address);
    }
    if (object.reserve_fee !== undefined && object.reserve_fee !== null) {
      message.reserveFee = Coin.fromAmino(object.reserve_fee);
    }
    if (object.min_bid_increment !== undefined && object.min_bid_increment !== null) {
      message.minBidIncrement = Coin.fromAmino(object.min_bid_increment);
    }
    if (object.front_running_protection !== undefined && object.front_running_protection !== null) {
      message.frontRunningProtection = object.front_running_protection;
    }
    if (object.proposer_fee !== undefined && object.proposer_fee !== null) {
      message.proposerFee = object.proposer_fee;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_bundle_size = message.maxBundleSize === 0 ? undefined : message.maxBundleSize;
    obj.escrow_account_address = message.escrowAccountAddress ? base64FromBytes(message.escrowAccountAddress) : undefined;
    obj.reserve_fee = message.reserveFee ? Coin.toAmino(message.reserveFee) : Coin.toAmino(Coin.fromPartial({}));
    obj.min_bid_increment = message.minBidIncrement ? Coin.toAmino(message.minBidIncrement) : Coin.toAmino(Coin.fromPartial({}));
    obj.front_running_protection = message.frontRunningProtection === false ? undefined : message.frontRunningProtection;
    obj.proposer_fee = message.proposerFee === "" ? undefined : message.proposerFee;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/builder/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pob.builder.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};