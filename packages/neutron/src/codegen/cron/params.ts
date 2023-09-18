import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /** Security address that can remove schedules */
  securityAddress: string;
  /** Limit of schedules executed in one block */
  limit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/neutron.cron.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** Security address that can remove schedules */
  security_address: string;
  /** Limit of schedules executed in one block */
  limit: string;
}
export interface ParamsAminoMsg {
  type: "/neutron.cron.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  security_address: string;
  limit: bigint;
}
function createBaseParams(): Params {
  return {
    securityAddress: "",
    limit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/neutron.cron.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.securityAddress !== "") {
      writer.uint32(10).string(message.securityAddress);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      securityAddress: isSet(object.securityAddress) ? String(object.securityAddress) : "",
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.securityAddress = object.securityAddress ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      securityAddress: object.security_address,
      limit: BigInt(object.limit)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.security_address = message.securityAddress;
    obj.limit = message.limit ? message.limit.toString() : undefined;
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
      typeUrl: "/neutron.cron.Params",
      value: Params.encode(message).finish()
    };
  }
};