import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
};
export declare const RateLimit: {
    encode(message: RateLimit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RateLimit;
    fromPartial(object: Partial<RateLimit>): RateLimit;
};
export declare const AssetSupply: {
    encode(message: AssetSupply, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetSupply;
    fromPartial(object: Partial<AssetSupply>): AssetSupply;
};
