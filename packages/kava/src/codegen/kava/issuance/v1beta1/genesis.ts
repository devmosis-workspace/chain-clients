import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  supplies: AssetSupply[];
}
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  supplies: AssetSupplySDKType[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
  assets: Asset[];
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
  rateLimit?: RateLimit;
}
/** Asset type for assets in the issuance module */
export interface AssetSDKType {
  owner: string;
  denom: string;
  blocked_addresses: string[];
  paused: boolean;
  blockable: boolean;
  rate_limit?: RateLimitSDKType;
}
/** RateLimit parameters for rate-limiting the supply of an issued asset */
export interface RateLimit {
  active: boolean;
  limit: Uint8Array;
  timePeriod?: Duration;
}
/** RateLimit parameters for rate-limiting the supply of an issued asset */
export interface RateLimitSDKType {
  active: boolean;
  limit: Uint8Array;
  time_period?: DurationSDKType;
}
/**
 * AssetSupply contains information about an asset's rate-limited supply (the
 * total supply of the asset is tracked in the top-level supply module)
 */
export interface AssetSupply {
  currentSupply?: Coin;
  timeElapsed?: Duration;
}
/**
 * AssetSupply contains information about an asset's rate-limited supply (the
 * total supply of the asset is tracked in the top-level supply module)
 */
export interface AssetSupplySDKType {
  current_supply?: CoinSDKType;
  time_elapsed?: DurationSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    supplies: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseParams(): Params {
  return {
    assets: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseAsset(): Asset {
  return {
    owner: "",
    denom: "",
    blockedAddresses: [],
    paused: false,
    blockable: false,
    rateLimit: undefined
  };
}
export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRateLimit(): RateLimit {
  return {
    active: false,
    limit: new Uint8Array(),
    timePeriod: undefined
  };
}
export const RateLimit = {
  encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseAssetSupply(): AssetSupply {
  return {
    currentSupply: undefined,
    timeElapsed: undefined
  };
}
export const AssetSupply = {
  encode(message: AssetSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};