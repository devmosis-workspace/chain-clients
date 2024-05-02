import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Bandwidth {
  upload: string;
  download: string;
}
export interface BandwidthProtoMsg {
  typeUrl: "/sentinel.types.v1.Bandwidth";
  value: Uint8Array;
}
export interface BandwidthAmino {
  upload?: string;
  download?: string;
}
export interface BandwidthAminoMsg {
  type: "/sentinel.types.v1.Bandwidth";
  value: BandwidthAmino;
}
export interface BandwidthSDKType {
  upload: string;
  download: string;
}
function createBaseBandwidth(): Bandwidth {
  return {
    upload: "",
    download: ""
  };
}
export const Bandwidth = {
  typeUrl: "/sentinel.types.v1.Bandwidth",
  encode(message: Bandwidth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upload !== "") {
      writer.uint32(10).string(message.upload);
    }
    if (message.download !== "") {
      writer.uint32(18).string(message.download);
    }
    return writer;
  },
  fromJSON(object: any): Bandwidth {
    return {
      upload: isSet(object.upload) ? String(object.upload) : "",
      download: isSet(object.download) ? String(object.download) : ""
    };
  },
  fromPartial(object: Partial<Bandwidth>): Bandwidth {
    const message = createBaseBandwidth();
    message.upload = object.upload ?? "";
    message.download = object.download ?? "";
    return message;
  },
  fromAmino(object: BandwidthAmino): Bandwidth {
    const message = createBaseBandwidth();
    if (object.upload !== undefined && object.upload !== null) {
      message.upload = object.upload;
    }
    if (object.download !== undefined && object.download !== null) {
      message.download = object.download;
    }
    return message;
  },
  toAmino(message: Bandwidth): BandwidthAmino {
    const obj: any = {};
    obj.upload = message.upload === "" ? undefined : message.upload;
    obj.download = message.download === "" ? undefined : message.download;
    return obj;
  },
  fromAminoMsg(object: BandwidthAminoMsg): Bandwidth {
    return Bandwidth.fromAmino(object.value);
  },
  fromProtoMsg(message: BandwidthProtoMsg): Bandwidth {
    return Bandwidth.decode(message.value);
  },
  toProto(message: Bandwidth): Uint8Array {
    return Bandwidth.encode(message).finish();
  },
  toProtoMsg(message: Bandwidth): BandwidthProtoMsg {
    return {
      typeUrl: "/sentinel.types.v1.Bandwidth",
      value: Bandwidth.encode(message).finish()
    };
  }
};