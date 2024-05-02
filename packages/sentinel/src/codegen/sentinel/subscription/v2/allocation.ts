import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Allocation {
  id: bigint;
  address: string;
  grantedBytes: string;
  utilisedBytes: string;
}
export interface AllocationProtoMsg {
  typeUrl: "/sentinel.subscription.v2.Allocation";
  value: Uint8Array;
}
export interface AllocationAmino {
  id?: string;
  address?: string;
  granted_bytes?: string;
  utilised_bytes?: string;
}
export interface AllocationAminoMsg {
  type: "/sentinel.subscription.v2.Allocation";
  value: AllocationAmino;
}
export interface AllocationSDKType {
  id: bigint;
  address: string;
  granted_bytes: string;
  utilised_bytes: string;
}
function createBaseAllocation(): Allocation {
  return {
    id: BigInt(0),
    address: "",
    grantedBytes: "",
    utilisedBytes: ""
  };
}
export const Allocation = {
  typeUrl: "/sentinel.subscription.v2.Allocation",
  encode(message: Allocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.grantedBytes !== "") {
      writer.uint32(26).string(message.grantedBytes);
    }
    if (message.utilisedBytes !== "") {
      writer.uint32(34).string(message.utilisedBytes);
    }
    return writer;
  },
  fromJSON(object: any): Allocation {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      grantedBytes: isSet(object.grantedBytes) ? String(object.grantedBytes) : "",
      utilisedBytes: isSet(object.utilisedBytes) ? String(object.utilisedBytes) : ""
    };
  },
  fromPartial(object: Partial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.grantedBytes = object.grantedBytes ?? "";
    message.utilisedBytes = object.utilisedBytes ?? "";
    return message;
  },
  fromAmino(object: AllocationAmino): Allocation {
    const message = createBaseAllocation();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.granted_bytes !== undefined && object.granted_bytes !== null) {
      message.grantedBytes = object.granted_bytes;
    }
    if (object.utilised_bytes !== undefined && object.utilised_bytes !== null) {
      message.utilisedBytes = object.utilised_bytes;
    }
    return message;
  },
  toAmino(message: Allocation): AllocationAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.granted_bytes = message.grantedBytes === "" ? undefined : message.grantedBytes;
    obj.utilised_bytes = message.utilisedBytes === "" ? undefined : message.utilisedBytes;
    return obj;
  },
  fromAminoMsg(object: AllocationAminoMsg): Allocation {
    return Allocation.fromAmino(object.value);
  },
  fromProtoMsg(message: AllocationProtoMsg): Allocation {
    return Allocation.decode(message.value);
  },
  toProto(message: Allocation): Uint8Array {
    return Allocation.encode(message).finish();
  },
  toProtoMsg(message: Allocation): AllocationProtoMsg {
    return {
      typeUrl: "/sentinel.subscription.v2.Allocation",
      value: Allocation.encode(message).finish()
    };
  }
};