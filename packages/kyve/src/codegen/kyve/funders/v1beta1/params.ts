import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the funders module parameters. */
export interface Params {
  /** Minimum amount of tokens that can be funded. */
  minFundingAmount: bigint;
  /** Minimum amount of tokens that can be funded per bundle. */
  minFundingAmountPerBundle: bigint;
  /**
   * Minimum ratio between the funded amount and the amount_per_bundle.
   * In other words this param ensures, that a funder provides at least funding for
   * `min_funding_multiple` bundles.
   */
  minFundingMultiple: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the funders module parameters. */
export interface ParamsAmino {
  /** Minimum amount of tokens that can be funded. */
  min_funding_amount?: string;
  /** Minimum amount of tokens that can be funded per bundle. */
  min_funding_amount_per_bundle?: string;
  /**
   * Minimum ratio between the funded amount and the amount_per_bundle.
   * In other words this param ensures, that a funder provides at least funding for
   * `min_funding_multiple` bundles.
   */
  min_funding_multiple?: string;
}
export interface ParamsAminoMsg {
  type: "/kyve.funders.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the funders module parameters. */
export interface ParamsSDKType {
  min_funding_amount: bigint;
  min_funding_amount_per_bundle: bigint;
  min_funding_multiple: bigint;
}
function createBaseParams(): Params {
  return {
    minFundingAmount: BigInt(0),
    minFundingAmountPerBundle: BigInt(0),
    minFundingMultiple: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/kyve.funders.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minFundingAmount !== BigInt(0)) {
      writer.uint32(8).uint64(message.minFundingAmount);
    }
    if (message.minFundingAmountPerBundle !== BigInt(0)) {
      writer.uint32(16).uint64(message.minFundingAmountPerBundle);
    }
    if (message.minFundingMultiple !== BigInt(0)) {
      writer.uint32(24).uint64(message.minFundingMultiple);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minFundingAmount: isSet(object.minFundingAmount) ? BigInt(object.minFundingAmount.toString()) : BigInt(0),
      minFundingAmountPerBundle: isSet(object.minFundingAmountPerBundle) ? BigInt(object.minFundingAmountPerBundle.toString()) : BigInt(0),
      minFundingMultiple: isSet(object.minFundingMultiple) ? BigInt(object.minFundingMultiple.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minFundingAmount = object.minFundingAmount !== undefined && object.minFundingAmount !== null ? BigInt(object.minFundingAmount.toString()) : BigInt(0);
    message.minFundingAmountPerBundle = object.minFundingAmountPerBundle !== undefined && object.minFundingAmountPerBundle !== null ? BigInt(object.minFundingAmountPerBundle.toString()) : BigInt(0);
    message.minFundingMultiple = object.minFundingMultiple !== undefined && object.minFundingMultiple !== null ? BigInt(object.minFundingMultiple.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_funding_amount !== undefined && object.min_funding_amount !== null) {
      message.minFundingAmount = BigInt(object.min_funding_amount);
    }
    if (object.min_funding_amount_per_bundle !== undefined && object.min_funding_amount_per_bundle !== null) {
      message.minFundingAmountPerBundle = BigInt(object.min_funding_amount_per_bundle);
    }
    if (object.min_funding_multiple !== undefined && object.min_funding_multiple !== null) {
      message.minFundingMultiple = BigInt(object.min_funding_multiple);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_funding_amount = message.minFundingAmount ? message.minFundingAmount.toString() : undefined;
    obj.min_funding_amount_per_bundle = message.minFundingAmountPerBundle ? message.minFundingAmountPerBundle.toString() : undefined;
    obj.min_funding_multiple = message.minFundingMultiple ? message.minFundingMultiple.toString() : undefined;
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
      typeUrl: "/kyve.funders.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};