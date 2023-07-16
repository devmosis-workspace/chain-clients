import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    priceDenom: string;
    feePerByte?: DecCoin;
    maxOfferDurationDays: Long;
    maxListingDurationDays: Long;
    maxRoyaltyBasisPoints: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    price_denom: string;
    fee_per_byte?: DecCoinSDKType;
    max_offer_duration_days: Long;
    max_listing_duration_days: Long;
    max_royalty_basis_points: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
