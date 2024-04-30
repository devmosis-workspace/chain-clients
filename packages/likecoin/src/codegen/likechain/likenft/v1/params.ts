import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  price_denom?: string;
  fee_per_byte?: DecCoinAmino;
  max_offer_duration_days?: string;
  max_listing_duration_days?: string;
  max_royalty_basis_points?: string;
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
function createBaseParams(): Params {
  return {
    priceDenom: "",
    feePerByte: DecCoin.fromPartial({}),
    maxOfferDurationDays: BigInt(0),
    maxListingDurationDays: BigInt(0),
    maxRoyaltyBasisPoints: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/likechain.likenft.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.feePerByte !== undefined) {
      DecCoin.encode(message.feePerByte, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxOfferDurationDays !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxOfferDurationDays);
    }
    if (message.maxListingDurationDays !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxListingDurationDays);
    }
    if (message.maxRoyaltyBasisPoints !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxRoyaltyBasisPoints);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      priceDenom: isSet(object.priceDenom) ? String(object.priceDenom) : "",
      feePerByte: isSet(object.feePerByte) ? DecCoin.fromJSON(object.feePerByte) : undefined,
      maxOfferDurationDays: isSet(object.maxOfferDurationDays) ? BigInt(object.maxOfferDurationDays.toString()) : BigInt(0),
      maxListingDurationDays: isSet(object.maxListingDurationDays) ? BigInt(object.maxListingDurationDays.toString()) : BigInt(0),
      maxRoyaltyBasisPoints: isSet(object.maxRoyaltyBasisPoints) ? BigInt(object.maxRoyaltyBasisPoints.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.priceDenom = object.priceDenom ?? "";
    message.feePerByte = object.feePerByte !== undefined && object.feePerByte !== null ? DecCoin.fromPartial(object.feePerByte) : undefined;
    message.maxOfferDurationDays = object.maxOfferDurationDays !== undefined && object.maxOfferDurationDays !== null ? BigInt(object.maxOfferDurationDays.toString()) : BigInt(0);
    message.maxListingDurationDays = object.maxListingDurationDays !== undefined && object.maxListingDurationDays !== null ? BigInt(object.maxListingDurationDays.toString()) : BigInt(0);
    message.maxRoyaltyBasisPoints = object.maxRoyaltyBasisPoints !== undefined && object.maxRoyaltyBasisPoints !== null ? BigInt(object.maxRoyaltyBasisPoints.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.price_denom !== undefined && object.price_denom !== null) {
      message.priceDenom = object.price_denom;
    }
    if (object.fee_per_byte !== undefined && object.fee_per_byte !== null) {
      message.feePerByte = DecCoin.fromAmino(object.fee_per_byte);
    }
    if (object.max_offer_duration_days !== undefined && object.max_offer_duration_days !== null) {
      message.maxOfferDurationDays = BigInt(object.max_offer_duration_days);
    }
    if (object.max_listing_duration_days !== undefined && object.max_listing_duration_days !== null) {
      message.maxListingDurationDays = BigInt(object.max_listing_duration_days);
    }
    if (object.max_royalty_basis_points !== undefined && object.max_royalty_basis_points !== null) {
      message.maxRoyaltyBasisPoints = BigInt(object.max_royalty_basis_points);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.price_denom = message.priceDenom;
    obj.fee_per_byte = message.feePerByte ? DecCoin.toAmino(message.feePerByte) : undefined;
    obj.max_offer_duration_days = message.maxOfferDurationDays ? message.maxOfferDurationDays.toString() : undefined;
    obj.max_listing_duration_days = message.maxListingDurationDays ? message.maxListingDurationDays.toString() : undefined;
    obj.max_royalty_basis_points = message.maxRoyaltyBasisPoints ? message.maxRoyaltyBasisPoints.toString() : undefined;
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
      typeUrl: "/likechain.likenft.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};