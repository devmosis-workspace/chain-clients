import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * RewardShare stores the relative weight of rewards that each address is
 * entitled to.
 */
export interface RewardShare {
  address: string;
  weight: Uint8Array;
}
export interface RewardShareProtoMsg {
  typeUrl: "/dydxprotocol.rewards.RewardShare";
  value: Uint8Array;
}
/**
 * RewardShare stores the relative weight of rewards that each address is
 * entitled to.
 */
export interface RewardShareSDKType {
  address: string;
  weight: Uint8Array;
}
function createBaseRewardShare(): RewardShare {
  return {
    address: "",
    weight: new Uint8Array()
  };
}
export const RewardShare = {
  typeUrl: "/dydxprotocol.rewards.RewardShare",
  encode(message: RewardShare, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight.length !== 0) {
      writer.uint32(18).bytes(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): RewardShare {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RewardShare>): RewardShare {
    const message = createBaseRewardShare();
    message.address = object.address ?? "";
    message.weight = object.weight ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RewardShareAmino): RewardShare {
    const message = createBaseRewardShare();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = bytesFromBase64(object.weight);
    }
    return message;
  },
  toAmino(message: RewardShare): RewardShareAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight ? base64FromBytes(message.weight) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardShareAminoMsg): RewardShare {
    return RewardShare.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardShareProtoMsg): RewardShare {
    return RewardShare.decode(message.value);
  },
  toProto(message: RewardShare): Uint8Array {
    return RewardShare.encode(message).finish();
  },
  toProtoMsg(message: RewardShare): RewardShareProtoMsg {
    return {
      typeUrl: "/dydxprotocol.rewards.RewardShare",
      value: RewardShare.encode(message).finish()
    };
  }
};