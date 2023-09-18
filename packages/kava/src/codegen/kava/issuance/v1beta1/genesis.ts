import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  supplies: AssetSupply[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  supplies: AssetSupplyAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kava.issuance.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  supplies: AssetSupplySDKType[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
  assets: Asset[];
}
export interface ParamsProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsAmino {
  assets: AssetAmino[];
}
export interface ParamsAminoMsg {
  type: "/kava.issuance.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsSDKType {
  assets: AssetSDKType[];
}
/** Asset type for assets in the issuance module */
export interface Asset {
  owner: string;
  denom: string;
  blockedAddresses: string[];
  paused: boolean;
  blockable: boolean;
  rateLimit: RateLimit;
}
export interface AssetProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.Asset";
  value: Uint8Array;
}
/** Asset type for assets in the issuance module */
export interface AssetAmino {
  owner: string;
  denom: string;
  blocked_addresses: string[];
  paused: boolean;
  blockable: boolean;
  rate_limit?: RateLimitAmino;
}
export interface AssetAminoMsg {
  type: "/kava.issuance.v1beta1.Asset";
  value: AssetAmino;
}
/** Asset type for assets in the issuance module */
export interface AssetSDKType {
  owner: string;
  denom: string;
  blocked_addresses: string[];
  paused: boolean;
  blockable: boolean;
  rate_limit: RateLimitSDKType;
}
/** RateLimit parameters for rate-limiting the supply of an issued asset */
export interface RateLimit {
  active: boolean;
  limit: Uint8Array;
  timePeriod: Duration;
}
export interface RateLimitProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.RateLimit";
  value: Uint8Array;
}
/** RateLimit parameters for rate-limiting the supply of an issued asset */
export interface RateLimitAmino {
  active: boolean;
  limit: Uint8Array;
  time_period?: DurationAmino;
}
export interface RateLimitAminoMsg {
  type: "/kava.issuance.v1beta1.RateLimit";
  value: RateLimitAmino;
}
/** RateLimit parameters for rate-limiting the supply of an issued asset */
export interface RateLimitSDKType {
  active: boolean;
  limit: Uint8Array;
  time_period: DurationSDKType;
}
/**
 * AssetSupply contains information about an asset's rate-limited supply (the
 * total supply of the asset is tracked in the top-level supply module)
 */
export interface AssetSupply {
  currentSupply: Coin;
  timeElapsed: Duration;
}
export interface AssetSupplyProtoMsg {
  typeUrl: "/kava.issuance.v1beta1.AssetSupply";
  value: Uint8Array;
}
/**
 * AssetSupply contains information about an asset's rate-limited supply (the
 * total supply of the asset is tracked in the top-level supply module)
 */
export interface AssetSupplyAmino {
  current_supply?: CoinAmino;
  time_elapsed?: DurationAmino;
}
export interface AssetSupplyAminoMsg {
  type: "/kava.issuance.v1beta1.AssetSupply";
  value: AssetSupplyAmino;
}
/**
 * AssetSupply contains information about an asset's rate-limited supply (the
 * total supply of the asset is tracked in the top-level supply module)
 */
export interface AssetSupplySDKType {
  current_supply: CoinSDKType;
  time_elapsed: DurationSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    supplies: []
  };
}
export const GenesisState = {
  typeUrl: "/kava.issuance.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.supplies) {
      AssetSupply.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => AssetSupply.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.supplies = object.supplies?.map(e => AssetSupply.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => AssetSupply.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.supplies) {
      obj.supplies = message.supplies.map(e => e ? AssetSupply.toAmino(e) : undefined);
    } else {
      obj.supplies = [];
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
      typeUrl: "/kava.issuance.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    assets: []
  };
}
export const Params = {
  typeUrl: "/kava.issuance.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromAmino(e)) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toAmino(e) : undefined);
    } else {
      obj.assets = [];
    }
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
      typeUrl: "/kava.issuance.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseAsset(): Asset {
  return {
    owner: "",
    denom: "",
    blockedAddresses: [],
    paused: false,
    blockable: false,
    rateLimit: RateLimit.fromPartial({})
  };
}
export const Asset = {
  typeUrl: "/kava.issuance.v1beta1.Asset",
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    for (const v of message.blockedAddresses) {
      writer.uint32(26).string(v!);
    }
    if (message.paused === true) {
      writer.uint32(32).bool(message.paused);
    }
    if (message.blockable === true) {
      writer.uint32(40).bool(message.blockable);
    }
    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Asset {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddresses: Array.isArray(object?.blockedAddresses) ? object.blockedAddresses.map((e: any) => String(e)) : [],
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      blockable: isSet(object.blockable) ? Boolean(object.blockable) : false,
      rateLimit: isSet(object.rateLimit) ? RateLimit.fromJSON(object.rateLimit) : undefined
    };
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddresses = object.blockedAddresses?.map(e => e) || [];
    message.paused = object.paused ?? false;
    message.blockable = object.blockable ?? false;
    message.rateLimit = object.rateLimit !== undefined && object.rateLimit !== null ? RateLimit.fromPartial(object.rateLimit) : undefined;
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    return {
      owner: object.owner,
      denom: object.denom,
      blockedAddresses: Array.isArray(object?.blocked_addresses) ? object.blocked_addresses.map((e: any) => e) : [],
      paused: object.paused,
      blockable: object.blockable,
      rateLimit: object?.rate_limit ? RateLimit.fromAmino(object.rate_limit) : undefined
    };
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.denom = message.denom;
    if (message.blockedAddresses) {
      obj.blocked_addresses = message.blockedAddresses.map(e => e);
    } else {
      obj.blocked_addresses = [];
    }
    obj.paused = message.paused;
    obj.blockable = message.blockable;
    obj.rate_limit = message.rateLimit ? RateLimit.toAmino(message.rateLimit) : undefined;
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
      typeUrl: "/kava.issuance.v1beta1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
function createBaseRateLimit(): RateLimit {
  return {
    active: false,
    limit: new Uint8Array(),
    timePeriod: Duration.fromPartial({})
  };
}
export const RateLimit = {
  typeUrl: "/kava.issuance.v1beta1.RateLimit",
  encode(message: RateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.limit.length !== 0) {
      writer.uint32(18).bytes(message.limit);
    }
    if (message.timePeriod !== undefined) {
      Duration.encode(message.timePeriod, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RateLimit {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
      timePeriod: isSet(object.timePeriod) ? Duration.fromJSON(object.timePeriod) : undefined
    };
  },
  fromPartial(object: Partial<RateLimit>): RateLimit {
    const message = createBaseRateLimit();
    message.active = object.active ?? false;
    message.limit = object.limit ?? new Uint8Array();
    message.timePeriod = object.timePeriod !== undefined && object.timePeriod !== null ? Duration.fromPartial(object.timePeriod) : undefined;
    return message;
  },
  fromAmino(object: RateLimitAmino): RateLimit {
    return {
      active: object.active,
      limit: object.limit,
      timePeriod: object?.time_period ? Duration.fromAmino(object.time_period) : undefined
    };
  },
  toAmino(message: RateLimit): RateLimitAmino {
    const obj: any = {};
    obj.active = message.active;
    obj.limit = message.limit;
    obj.time_period = message.timePeriod ? Duration.toAmino(message.timePeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: RateLimitAminoMsg): RateLimit {
    return RateLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: RateLimitProtoMsg): RateLimit {
    return RateLimit.decode(message.value);
  },
  toProto(message: RateLimit): Uint8Array {
    return RateLimit.encode(message).finish();
  },
  toProtoMsg(message: RateLimit): RateLimitProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.RateLimit",
      value: RateLimit.encode(message).finish()
    };
  }
};
function createBaseAssetSupply(): AssetSupply {
  return {
    currentSupply: Coin.fromPartial({}),
    timeElapsed: Duration.fromPartial({})
  };
}
export const AssetSupply = {
  typeUrl: "/kava.issuance.v1beta1.AssetSupply",
  encode(message: AssetSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentSupply !== undefined) {
      Coin.encode(message.currentSupply, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeElapsed !== undefined) {
      Duration.encode(message.timeElapsed, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AssetSupply {
    return {
      currentSupply: isSet(object.currentSupply) ? Coin.fromJSON(object.currentSupply) : undefined,
      timeElapsed: isSet(object.timeElapsed) ? Duration.fromJSON(object.timeElapsed) : undefined
    };
  },
  fromPartial(object: Partial<AssetSupply>): AssetSupply {
    const message = createBaseAssetSupply();
    message.currentSupply = object.currentSupply !== undefined && object.currentSupply !== null ? Coin.fromPartial(object.currentSupply) : undefined;
    message.timeElapsed = object.timeElapsed !== undefined && object.timeElapsed !== null ? Duration.fromPartial(object.timeElapsed) : undefined;
    return message;
  },
  fromAmino(object: AssetSupplyAmino): AssetSupply {
    return {
      currentSupply: object?.current_supply ? Coin.fromAmino(object.current_supply) : undefined,
      timeElapsed: object?.time_elapsed ? Duration.fromAmino(object.time_elapsed) : undefined
    };
  },
  toAmino(message: AssetSupply): AssetSupplyAmino {
    const obj: any = {};
    obj.current_supply = message.currentSupply ? Coin.toAmino(message.currentSupply) : undefined;
    obj.time_elapsed = message.timeElapsed ? Duration.toAmino(message.timeElapsed) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetSupplyAminoMsg): AssetSupply {
    return AssetSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetSupplyProtoMsg): AssetSupply {
    return AssetSupply.decode(message.value);
  },
  toProto(message: AssetSupply): Uint8Array {
    return AssetSupply.encode(message).finish();
  },
  toProtoMsg(message: AssetSupply): AssetSupplyProtoMsg {
    return {
      typeUrl: "/kava.issuance.v1beta1.AssetSupply",
      value: AssetSupply.encode(message).finish()
    };
  }
};