import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the metoken module. */
export interface Params {
    /**
     * Reserves Re-balancing Frequency in seconds, determines how often the re-balancing of the module reserves will be
     * triggered
     */
    rebalancingFrequency: bigint;
    /**
     * Interest claiming frequency in seconds, determines how often metoken module will claim accrued interest from
     * leverage module
     */
    claimingFrequency: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/umee.metoken.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the metoken module. */
export interface ParamsAmino {
    /**
     * Reserves Re-balancing Frequency in seconds, determines how often the re-balancing of the module reserves will be
     * triggered
     */
    rebalancing_frequency?: string;
    /**
     * Interest claiming frequency in seconds, determines how often metoken module will claim accrued interest from
     * leverage module
     */
    claiming_frequency?: string;
}
export interface ParamsAminoMsg {
    type: "/umee.metoken.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the metoken module. */
export interface ParamsSDKType {
    rebalancing_frequency: bigint;
    claiming_frequency: bigint;
}
/**
 * Index defines an index of assets that are allowed to swap and redeem for the Index's meToken,
 * along with its metadata and parameters.
 */
export interface Index {
    /**
     * Denom is the denomination of the Index's meToken denom that will be given to user in exchange of accepted
     * assets.
     */
    denom: string;
    /**
     * MaxSupply is the maximum amount of Index's meTokens can be minted.
     * A swap that requires to mint more Index's meToken than this value will result in an error.
     * Must be a non negative value. 0 means that there is no limit.
     */
    maxSupply: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the meToken for the exchange operations.
     * Valid value: must be the same as the oracle.Denom.exponent.
     */
    exponent: number;
    /**
     * Fee contains fee parameters used for swap and redemption fee calculations for all underlying
     * assets in this index.
     */
    fee: Fee;
    /**
     * Accepted Assets is the list of underlying Tokens that can be swapped and redeemed for the Index's meToken,
     * along with their token-specific parameters.
     */
    acceptedAssets: AcceptedAsset[];
}
export interface IndexProtoMsg {
    typeUrl: "/umee.metoken.v1.Index";
    value: Uint8Array;
}
/**
 * Index defines an index of assets that are allowed to swap and redeem for the Index's meToken,
 * along with its metadata and parameters.
 */
export interface IndexAmino {
    /**
     * Denom is the denomination of the Index's meToken denom that will be given to user in exchange of accepted
     * assets.
     */
    denom?: string;
    /**
     * MaxSupply is the maximum amount of Index's meTokens can be minted.
     * A swap that requires to mint more Index's meToken than this value will result in an error.
     * Must be a non negative value. 0 means that there is no limit.
     */
    max_supply?: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the meToken for the exchange operations.
     * Valid value: must be the same as the oracle.Denom.exponent.
     */
    exponent?: number;
    /**
     * Fee contains fee parameters used for swap and redemption fee calculations for all underlying
     * assets in this index.
     */
    fee?: FeeAmino;
    /**
     * Accepted Assets is the list of underlying Tokens that can be swapped and redeemed for the Index's meToken,
     * along with their token-specific parameters.
     */
    accepted_assets?: AcceptedAssetAmino[];
}
export interface IndexAminoMsg {
    type: "/umee.metoken.v1.Index";
    value: IndexAmino;
}
/**
 * Index defines an index of assets that are allowed to swap and redeem for the Index's meToken,
 * along with its metadata and parameters.
 */
export interface IndexSDKType {
    denom: string;
    max_supply: string;
    exponent: number;
    fee: FeeSDKType;
    accepted_assets: AcceptedAssetSDKType[];
}
/**
 * Fee are the parameters used for the calculation of the fee to be applied for swaps and redemptions and charged to
 * the user. The usage of these parameters is explained here:
 * https://github.com/umee-network/umee/tree/main/x/metoken#dynamic-fee
 */
export interface Fee {
    /**
     * Min fee is the minimum fee to be charged to the user. The applied fee will tend to decrease down to this value,
     * when the accepted asset is undersupplied in the index. It must be less than Balanced and Max fees.
     * Valid values: 0-1.
     */
    minFee: string;
    /**
     * Balanced fee is the fee to be charged to the user when the index is balanced. It must be greater than min_fee and
     * lower than max_fee
     * Valid values: 0-1.
     */
    balancedFee: string;
    /**
     * Max fee is the maximum fee to be charged to the user. The applied fee will tend to increase up to this value,
     * when the accepted asset is oversupplied in the index. It must be greater than Min and Balanced fee.
     * Valid values: 0-1.
     */
    maxFee: string;
}
export interface FeeProtoMsg {
    typeUrl: "/umee.metoken.v1.Fee";
    value: Uint8Array;
}
/**
 * Fee are the parameters used for the calculation of the fee to be applied for swaps and redemptions and charged to
 * the user. The usage of these parameters is explained here:
 * https://github.com/umee-network/umee/tree/main/x/metoken#dynamic-fee
 */
export interface FeeAmino {
    /**
     * Min fee is the minimum fee to be charged to the user. The applied fee will tend to decrease down to this value,
     * when the accepted asset is undersupplied in the index. It must be less than Balanced and Max fees.
     * Valid values: 0-1.
     */
    min_fee?: string;
    /**
     * Balanced fee is the fee to be charged to the user when the index is balanced. It must be greater than min_fee and
     * lower than max_fee
     * Valid values: 0-1.
     */
    balanced_fee?: string;
    /**
     * Max fee is the maximum fee to be charged to the user. The applied fee will tend to increase up to this value,
     * when the accepted asset is oversupplied in the index. It must be greater than Min and Balanced fee.
     * Valid values: 0-1.
     */
    max_fee?: string;
}
export interface FeeAminoMsg {
    type: "/umee.metoken.v1.Fee";
    value: FeeAmino;
}
/**
 * Fee are the parameters used for the calculation of the fee to be applied for swaps and redemptions and charged to
 * the user. The usage of these parameters is explained here:
 * https://github.com/umee-network/umee/tree/main/x/metoken#dynamic-fee
 */
export interface FeeSDKType {
    min_fee: string;
    balanced_fee: string;
    max_fee: string;
}
/**
 * AcceptedAsset is an asset that is accepted to participate in the Index's swaps and redemptions, along with its
 * metadata and parameters
 */
export interface AcceptedAsset {
    /**
     * Denom is the denomination of the underlying asset. Must be the base
     * denom as registered in the Bank module (so IBC denom for IBC tokens).
     */
    denom: string;
    /**
     * Reserve portion is the portion of swapped assets that will be kept in the metoken module as reserves,
     * instead of supplied to the leverage module. It is also the
     * portion that will be taken from metoken module reserves when a redemption occurs.
     * Valid values: 0-1.
     */
    reservePortion: string;
    /**
     * Target allocation is the portion of an accepted asset the Index is targeting to have. The sum of
     * target allocations of every accepted asset in the Index should be equal to 1.
     * Valid values: 0-1.
     */
    targetAllocation: string;
}
export interface AcceptedAssetProtoMsg {
    typeUrl: "/umee.metoken.v1.AcceptedAsset";
    value: Uint8Array;
}
/**
 * AcceptedAsset is an asset that is accepted to participate in the Index's swaps and redemptions, along with its
 * metadata and parameters
 */
export interface AcceptedAssetAmino {
    /**
     * Denom is the denomination of the underlying asset. Must be the base
     * denom as registered in the Bank module (so IBC denom for IBC tokens).
     */
    denom?: string;
    /**
     * Reserve portion is the portion of swapped assets that will be kept in the metoken module as reserves,
     * instead of supplied to the leverage module. It is also the
     * portion that will be taken from metoken module reserves when a redemption occurs.
     * Valid values: 0-1.
     */
    reserve_portion?: string;
    /**
     * Target allocation is the portion of an accepted asset the Index is targeting to have. The sum of
     * target allocations of every accepted asset in the Index should be equal to 1.
     * Valid values: 0-1.
     */
    target_allocation?: string;
}
export interface AcceptedAssetAminoMsg {
    type: "/umee.metoken.v1.AcceptedAsset";
    value: AcceptedAssetAmino;
}
/**
 * AcceptedAsset is an asset that is accepted to participate in the Index's swaps and redemptions, along with its
 * metadata and parameters
 */
export interface AcceptedAssetSDKType {
    denom: string;
    reserve_portion: string;
    target_allocation: string;
}
/** IndexPrices provides meToken price related index information. */
export interface IndexPrices {
    /** meToken denom. */
    denom: string;
    /** Price in USD of one unit of meToken, expressed in decimals. */
    price: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the meToken for the exchange operations.
     */
    exponent: number;
    assets: AssetPrice[];
}
export interface IndexPricesProtoMsg {
    typeUrl: "/umee.metoken.v1.IndexPrices";
    value: Uint8Array;
}
/** IndexPrices provides meToken price related index information. */
export interface IndexPricesAmino {
    /** meToken denom. */
    denom?: string;
    /** Price in USD of one unit of meToken, expressed in decimals. */
    price?: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the meToken for the exchange operations.
     */
    exponent?: number;
    assets?: AssetPriceAmino[];
}
export interface IndexPricesAminoMsg {
    type: "/umee.metoken.v1.IndexPrices";
    value: IndexPricesAmino;
}
/** IndexPrices provides meToken price related index information. */
export interface IndexPricesSDKType {
    denom: string;
    price: string;
    exponent: number;
    assets: AssetPriceSDKType[];
}
/** AssetPrice information related to the index operations. */
export interface AssetPrice {
    baseDenom: string;
    symbolDenom: string;
    /** Price in USD of one unit of asset, expressed in decimals. */
    price: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the asset for the exchange operations.
     */
    exponent: number;
    /** SwapRate used for exchange calculations asset -> meToken. */
    swapRate: string;
    /** RedeemRate used for exchange calculations meToken -> asset. */
    redeemRate: string;
    /**
     * SwapFee charged to the user on a swap, expressed in fraction.
     * Valid values: 0-1.
     */
    swapFee: string;
    /**
     * RedeemFee charged to the user on a redemption, expressed in fraction.
     * Valid values: 0-1.
     */
    redeemFee: string;
}
export interface AssetPriceProtoMsg {
    typeUrl: "/umee.metoken.v1.AssetPrice";
    value: Uint8Array;
}
/** AssetPrice information related to the index operations. */
export interface AssetPriceAmino {
    base_denom?: string;
    symbol_denom?: string;
    /** Price in USD of one unit of asset, expressed in decimals. */
    price?: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the asset for the exchange operations.
     */
    exponent?: number;
    /** SwapRate used for exchange calculations asset -> meToken. */
    swap_rate?: string;
    /** RedeemRate used for exchange calculations meToken -> asset. */
    redeem_rate?: string;
    /**
     * SwapFee charged to the user on a swap, expressed in fraction.
     * Valid values: 0-1.
     */
    swap_fee?: string;
    /**
     * RedeemFee charged to the user on a redemption, expressed in fraction.
     * Valid values: 0-1.
     */
    redeem_fee?: string;
}
export interface AssetPriceAminoMsg {
    type: "/umee.metoken.v1.AssetPrice";
    value: AssetPriceAmino;
}
/** AssetPrice information related to the index operations. */
export interface AssetPriceSDKType {
    base_denom: string;
    symbol_denom: string;
    price: string;
    exponent: number;
    swap_rate: string;
    redeem_rate: string;
    swap_fee: string;
    redeem_fee: string;
}
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
export declare const Index: {
    typeUrl: string;
    encode(message: Index, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Index;
    fromPartial(object: Partial<Index>): Index;
    fromAmino(object: IndexAmino): Index;
    toAmino(message: Index): IndexAmino;
    fromAminoMsg(object: IndexAminoMsg): Index;
    fromProtoMsg(message: IndexProtoMsg): Index;
    toProto(message: Index): Uint8Array;
    toProtoMsg(message: Index): IndexProtoMsg;
};
export declare const Fee: {
    typeUrl: string;
    encode(message: Fee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Fee;
    fromPartial(object: Partial<Fee>): Fee;
    fromAmino(object: FeeAmino): Fee;
    toAmino(message: Fee): FeeAmino;
    fromAminoMsg(object: FeeAminoMsg): Fee;
    fromProtoMsg(message: FeeProtoMsg): Fee;
    toProto(message: Fee): Uint8Array;
    toProtoMsg(message: Fee): FeeProtoMsg;
};
export declare const AcceptedAsset: {
    typeUrl: string;
    encode(message: AcceptedAsset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AcceptedAsset;
    fromPartial(object: Partial<AcceptedAsset>): AcceptedAsset;
    fromAmino(object: AcceptedAssetAmino): AcceptedAsset;
    toAmino(message: AcceptedAsset): AcceptedAssetAmino;
    fromAminoMsg(object: AcceptedAssetAminoMsg): AcceptedAsset;
    fromProtoMsg(message: AcceptedAssetProtoMsg): AcceptedAsset;
    toProto(message: AcceptedAsset): Uint8Array;
    toProtoMsg(message: AcceptedAsset): AcceptedAssetProtoMsg;
};
export declare const IndexPrices: {
    typeUrl: string;
    encode(message: IndexPrices, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IndexPrices;
    fromPartial(object: Partial<IndexPrices>): IndexPrices;
    fromAmino(object: IndexPricesAmino): IndexPrices;
    toAmino(message: IndexPrices): IndexPricesAmino;
    fromAminoMsg(object: IndexPricesAminoMsg): IndexPrices;
    fromProtoMsg(message: IndexPricesProtoMsg): IndexPrices;
    toProto(message: IndexPrices): Uint8Array;
    toProtoMsg(message: IndexPrices): IndexPricesProtoMsg;
};
export declare const AssetPrice: {
    typeUrl: string;
    encode(message: AssetPrice, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetPrice;
    fromPartial(object: Partial<AssetPrice>): AssetPrice;
    fromAmino(object: AssetPriceAmino): AssetPrice;
    toAmino(message: AssetPrice): AssetPriceAmino;
    fromAminoMsg(object: AssetPriceAminoMsg): AssetPrice;
    fromProtoMsg(message: AssetPriceProtoMsg): AssetPrice;
    toProto(message: AssetPrice): Uint8Array;
    toProtoMsg(message: AssetPrice): AssetPriceProtoMsg;
};
