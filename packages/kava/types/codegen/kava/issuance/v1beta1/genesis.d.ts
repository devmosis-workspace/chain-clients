import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    supplies: AssetSupply[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.issuance.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the issuance module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    supplies?: AssetSupplyAmino[];
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
    assets?: AssetAmino[];
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
    owner?: string;
    denom?: string;
    blocked_addresses?: string[];
    paused?: boolean;
    blockable?: boolean;
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
    active?: boolean;
    limit?: string;
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Asset: {
    typeUrl: string;
    encode(message: Asset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Asset;
    fromPartial(object: Partial<Asset>): Asset;
    fromAmino(object: AssetAmino): Asset;
    toAmino(message: Asset): AssetAmino;
    fromAminoMsg(object: AssetAminoMsg): Asset;
    fromProtoMsg(message: AssetProtoMsg): Asset;
    toProto(message: Asset): Uint8Array;
    toProtoMsg(message: Asset): AssetProtoMsg;
};
export declare const RateLimit: {
    typeUrl: string;
    encode(message: RateLimit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RateLimit;
    fromPartial(object: Partial<RateLimit>): RateLimit;
    fromAmino(object: RateLimitAmino): RateLimit;
    toAmino(message: RateLimit): RateLimitAmino;
    fromAminoMsg(object: RateLimitAminoMsg): RateLimit;
    fromProtoMsg(message: RateLimitProtoMsg): RateLimit;
    toProto(message: RateLimit): Uint8Array;
    toProtoMsg(message: RateLimit): RateLimitProtoMsg;
};
export declare const AssetSupply: {
    typeUrl: string;
    encode(message: AssetSupply, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetSupply;
    fromPartial(object: Partial<AssetSupply>): AssetSupply;
    fromAmino(object: AssetSupplyAmino): AssetSupply;
    toAmino(message: AssetSupply): AssetSupplyAmino;
    fromAminoMsg(object: AssetSupplyAminoMsg): AssetSupply;
    fromProtoMsg(message: AssetSupplyProtoMsg): AssetSupply;
    toProto(message: AssetSupply): Uint8Array;
    toProtoMsg(message: AssetSupply): AssetSupplyProtoMsg;
};
