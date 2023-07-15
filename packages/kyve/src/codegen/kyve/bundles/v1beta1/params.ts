import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the bundles module parameters. */
export interface Params {
  /** upload_timeout ... */
  uploadTimeout: Long;
  /** storage_cost ... */
  storageCost: string;
  /** network_fee ... */
  networkFee: string;
  /** max_points ... */
  maxPoints: Long;
}
/** Params defines the bundles module parameters. */
export interface ParamsSDKType {
  upload_timeout: Long;
  storage_cost: string;
  network_fee: string;
  max_points: Long;
}
function createBaseParams(): Params {
  return {
    uploadTimeout: Long.UZERO,
    storageCost: "",
    networkFee: "",
    maxPoints: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uploadTimeout.isZero()) {
      writer.uint32(8).uint64(message.uploadTimeout);
    }
    if (message.storageCost !== "") {
      writer.uint32(18).string(message.storageCost);
    }
    if (message.networkFee !== "") {
      writer.uint32(26).string(message.networkFee);
    }
    if (!message.maxPoints.isZero()) {
      writer.uint32(32).uint64(message.maxPoints);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      uploadTimeout: isSet(object.uploadTimeout) ? Long.fromValue(object.uploadTimeout) : Long.UZERO,
      storageCost: isSet(object.storageCost) ? String(object.storageCost) : "",
      networkFee: isSet(object.networkFee) ? String(object.networkFee) : "",
      maxPoints: isSet(object.maxPoints) ? Long.fromValue(object.maxPoints) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.uploadTimeout = object.uploadTimeout !== undefined && object.uploadTimeout !== null ? Long.fromValue(object.uploadTimeout) : Long.UZERO;
    message.storageCost = object.storageCost ?? "";
    message.networkFee = object.networkFee ?? "";
    message.maxPoints = object.maxPoints !== undefined && object.maxPoints !== null ? Long.fromValue(object.maxPoints) : Long.UZERO;
    return message;
  }
};