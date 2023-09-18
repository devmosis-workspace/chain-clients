import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the stakers module parameters. */
export interface Params {
  /** commission_change_time ... */
  commissionChangeTime: bigint;
  /** commission_change_time ... */
  leavePoolTime: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/kyve.stakers.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the stakers module parameters. */
export interface ParamsAmino {
  /** commission_change_time ... */
  commission_change_time: string;
  /** commission_change_time ... */
  leave_pool_time: string;
}
export interface ParamsAminoMsg {
  type: "/kyve.stakers.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the stakers module parameters. */
export interface ParamsSDKType {
  commission_change_time: bigint;
  leave_pool_time: bigint;
}
function createBaseParams(): Params {
  return {
    commissionChangeTime: BigInt(0),
    leavePoolTime: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/kyve.stakers.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commissionChangeTime !== BigInt(0)) {
      writer.uint32(8).uint64(message.commissionChangeTime);
    }
    if (message.leavePoolTime !== BigInt(0)) {
      writer.uint32(16).uint64(message.leavePoolTime);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      commissionChangeTime: isSet(object.commissionChangeTime) ? BigInt(object.commissionChangeTime.toString()) : BigInt(0),
      leavePoolTime: isSet(object.leavePoolTime) ? BigInt(object.leavePoolTime.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.commissionChangeTime = object.commissionChangeTime !== undefined && object.commissionChangeTime !== null ? BigInt(object.commissionChangeTime.toString()) : BigInt(0);
    message.leavePoolTime = object.leavePoolTime !== undefined && object.leavePoolTime !== null ? BigInt(object.leavePoolTime.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      commissionChangeTime: BigInt(object.commission_change_time),
      leavePoolTime: BigInt(object.leave_pool_time)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.commission_change_time = message.commissionChangeTime ? message.commissionChangeTime.toString() : undefined;
    obj.leave_pool_time = message.leavePoolTime ? message.leavePoolTime.toString() : undefined;
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
      typeUrl: "/kyve.stakers.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};