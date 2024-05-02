import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface RewardsBucket {
  denom: string;
  amount: string;
}
export interface RewardsBucketProtoMsg {
  typeUrl: "/sifnode.clp.v1.RewardsBucket";
  value: Uint8Array;
}
export interface RewardsBucketAmino {
  denom?: string;
  amount?: string;
}
export interface RewardsBucketAminoMsg {
  type: "/sifnode.clp.v1.RewardsBucket";
  value: RewardsBucketAmino;
}
export interface RewardsBucketSDKType {
  denom: string;
  amount: string;
}
function createBaseRewardsBucket(): RewardsBucket {
  return {
    denom: "",
    amount: ""
  };
}
export const RewardsBucket = {
  typeUrl: "/sifnode.clp.v1.RewardsBucket",
  encode(message: RewardsBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): RewardsBucket {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<RewardsBucket>): RewardsBucket {
    const message = createBaseRewardsBucket();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: RewardsBucketAmino): RewardsBucket {
    const message = createBaseRewardsBucket();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: RewardsBucket): RewardsBucketAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: RewardsBucketAminoMsg): RewardsBucket {
    return RewardsBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsBucketProtoMsg): RewardsBucket {
    return RewardsBucket.decode(message.value);
  },
  toProto(message: RewardsBucket): Uint8Array {
    return RewardsBucket.encode(message).finish();
  },
  toProtoMsg(message: RewardsBucket): RewardsBucketProtoMsg {
    return {
      typeUrl: "/sifnode.clp.v1.RewardsBucket",
      value: RewardsBucket.encode(message).finish()
    };
  }
};