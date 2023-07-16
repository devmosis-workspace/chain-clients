import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
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
function createBaseParams(): Params {
  return {
    priceDenom: "",
    feePerByte: undefined,
    maxOfferDurationDays: Long.UZERO,
    maxListingDurationDays: Long.UZERO,
    maxRoyaltyBasisPoints: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.feePerByte !== undefined) {
      DecCoin.encode(message.feePerByte, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxOfferDurationDays.isZero()) {
      writer.uint32(24).uint64(message.maxOfferDurationDays);
    }
    if (!message.maxListingDurationDays.isZero()) {
      writer.uint32(32).uint64(message.maxListingDurationDays);
    }
    if (!message.maxRoyaltyBasisPoints.isZero()) {
      writer.uint32(40).uint64(message.maxRoyaltyBasisPoints);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      feePerByte: isSet(object.feePerByte) ? DecCoin.fromJSON(object.feePerByte) : undefined,
      maxOfferDurationDays: isSet(object.maxOfferDurationDays) ? Long.fromValue(object.maxOfferDurationDays) : Long.UZERO,
      maxListingDurationDays: isSet(object.maxListingDurationDays) ? Long.fromValue(object.maxListingDurationDays) : Long.UZERO,
      maxRoyaltyBasisPoints: isSet(object.maxRoyaltyBasisPoints) ? Long.fromValue(object.maxRoyaltyBasisPoints) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.priceDenom = object.priceDenom ?? "";
    message.feePerByte = object.feePerByte !== undefined && object.feePerByte !== null ? DecCoin.fromPartial(object.feePerByte) : undefined;
    message.maxOfferDurationDays = object.maxOfferDurationDays !== undefined && object.maxOfferDurationDays !== null ? Long.fromValue(object.maxOfferDurationDays) : Long.UZERO;
    message.maxListingDurationDays = object.maxListingDurationDays !== undefined && object.maxListingDurationDays !== null ? Long.fromValue(object.maxListingDurationDays) : Long.UZERO;
    message.maxRoyaltyBasisPoints = object.maxRoyaltyBasisPoints !== undefined && object.maxRoyaltyBasisPoints !== null ? Long.fromValue(object.maxRoyaltyBasisPoints) : Long.UZERO;
    return message;
  }
};