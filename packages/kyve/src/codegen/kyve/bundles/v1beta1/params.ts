import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the bundles module parameters. */
export interface Params {
  /** upload_timeout ... */
  uploadTimeout: bigint;
  /** storage_cost ... */
  storageCost: string;
  /** network_fee ... */
  networkFee: string;
  /** max_points ... */
  maxPoints: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/kyve.bundles.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the bundles module parameters. */
export interface ParamsAmino {
  /** upload_timeout ... */
  upload_timeout: string;
  /** storage_cost ... */
  storage_cost: string;
  /** network_fee ... */
  network_fee: string;
  /** max_points ... */
  max_points: string;
}
export interface ParamsAminoMsg {
  type: "/kyve.bundles.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the bundles module parameters. */
export interface ParamsSDKType {
  upload_timeout: bigint;
  storage_cost: string;
  network_fee: string;
  max_points: bigint;
}
function createBaseParams(): Params {
  return {
    uploadTimeout: BigInt(0),
    storageCost: "",
    networkFee: "",
    maxPoints: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/kyve.bundles.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uploadTimeout !== BigInt(0)) {
      writer.uint32(8).uint64(message.uploadTimeout);
    }
    if (message.storageCost !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.storageCost, 18).atomics);
    }
    if (message.networkFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.networkFee, 18).atomics);
    }
    if (message.maxPoints !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxPoints);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      uploadTimeout: isSet(object.uploadTimeout) ? BigInt(object.uploadTimeout.toString()) : BigInt(0),
      storageCost: isSet(object.storageCost) ? String(object.storageCost) : "",
      networkFee: isSet(object.networkFee) ? String(object.networkFee) : "",
      maxPoints: isSet(object.maxPoints) ? BigInt(object.maxPoints.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.uploadTimeout = object.uploadTimeout !== undefined && object.uploadTimeout !== null ? BigInt(object.uploadTimeout.toString()) : BigInt(0);
    message.storageCost = object.storageCost ?? "";
    message.networkFee = object.networkFee ?? "";
    message.maxPoints = object.maxPoints !== undefined && object.maxPoints !== null ? BigInt(object.maxPoints.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      uploadTimeout: BigInt(object.upload_timeout),
      storageCost: object.storage_cost,
      networkFee: object.network_fee,
      maxPoints: BigInt(object.max_points)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.upload_timeout = message.uploadTimeout ? message.uploadTimeout.toString() : undefined;
    obj.storage_cost = message.storageCost;
    obj.network_fee = message.networkFee;
    obj.max_points = message.maxPoints ? message.maxPoints.toString() : undefined;
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
      typeUrl: "/kyve.bundles.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};