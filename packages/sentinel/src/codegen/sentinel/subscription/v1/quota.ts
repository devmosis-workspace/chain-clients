import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Quota {
  address: string;
  allocated: string;
  consumed: string;
}
export interface QuotaProtoMsg {
  typeUrl: "/sentinel.subscription.v1.Quota";
  value: Uint8Array;
}
export interface QuotaAmino {
  address?: string;
  allocated?: string;
  consumed?: string;
}
export interface QuotaAminoMsg {
  type: "/sentinel.subscription.v1.Quota";
  value: QuotaAmino;
}
export interface QuotaSDKType {
  address: string;
  allocated: string;
  consumed: string;
}
function createBaseQuota(): Quota {
  return {
    address: "",
    allocated: "",
    consumed: ""
  };
}
export const Quota = {
  typeUrl: "/sentinel.subscription.v1.Quota",
  encode(message: Quota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.allocated !== "") {
      writer.uint32(18).string(message.allocated);
    }
    if (message.consumed !== "") {
      writer.uint32(26).string(message.consumed);
    }
    return writer;
  },
  fromJSON(object: any): Quota {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      allocated: isSet(object.allocated) ? String(object.allocated) : "",
      consumed: isSet(object.consumed) ? String(object.consumed) : ""
    };
  },
  fromPartial(object: Partial<Quota>): Quota {
    const message = createBaseQuota();
    message.address = object.address ?? "";
    message.allocated = object.allocated ?? "";
    message.consumed = object.consumed ?? "";
    return message;
  },
  fromAmino(object: QuotaAmino): Quota {
    const message = createBaseQuota();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.allocated !== undefined && object.allocated !== null) {
      message.allocated = object.allocated;
    }
    if (object.consumed !== undefined && object.consumed !== null) {
      message.consumed = object.consumed;
    }
    return message;
  },
  toAmino(message: Quota): QuotaAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.allocated = message.allocated === "" ? undefined : message.allocated;
    obj.consumed = message.consumed === "" ? undefined : message.consumed;
    return obj;
  },
  fromAminoMsg(object: QuotaAminoMsg): Quota {
    return Quota.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaProtoMsg): Quota {
    return Quota.decode(message.value);
  },
  toProto(message: Quota): Uint8Array {
    return Quota.encode(message).finish();
  },
  toProtoMsg(message: Quota): QuotaProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v1.Quota",
      value: Quota.encode(message).finish()
    };
  }
};