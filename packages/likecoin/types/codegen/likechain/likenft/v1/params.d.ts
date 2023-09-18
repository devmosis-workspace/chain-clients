import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    priceDenom: string;
    feePerByte: DecCoin;
    maxOfferDurationDays: bigint;
    maxListingDurationDays: bigint;
    maxRoyaltyBasisPoints: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/likechain.likenft.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    price_denom: string;
    fee_per_byte?: DecCoinAmino;
    max_offer_duration_days: string;
    max_listing_duration_days: string;
    max_royalty_basis_points: string;
}
export interface ParamsAminoMsg {
    type: "/likechain.likenft.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    price_denom: string;
    fee_per_byte: DecCoinSDKType;
    max_offer_duration_days: bigint;
    max_listing_duration_days: bigint;
    max_royalty_basis_points: bigint;
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
