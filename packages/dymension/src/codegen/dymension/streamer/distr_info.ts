import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.DistrInfo";
  value: Uint8Array;
}
export interface DistrInfoAmino {
  total_weight?: string;
  records?: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
  type: "/dymensionxyz.dymension.streamer.DistrInfo";
  value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
  total_weight: string;
  records: DistrRecordSDKType[];
}
export interface DistrRecord {
  gaugeId: bigint;
  weight: string;
}
export interface DistrRecordProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.DistrRecord";
  value: Uint8Array;
}
export interface DistrRecordAmino {
  gauge_id?: string;
  weight?: string;
}
export interface DistrRecordAminoMsg {
  type: "/dymensionxyz.dymension.streamer.DistrRecord";
  value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
  gauge_id: bigint;
  weight: string;
}
function createBaseDistrInfo(): DistrInfo {
  return {
    totalWeight: "",
    records: []
  };
}
export const DistrInfo = {
  typeUrl: "/dymensionxyz.dymension.streamer.DistrInfo",
  encode(message: DistrInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DistrInfo {
    return {
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DistrInfo>): DistrInfo {
    const message = createBaseDistrInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DistrInfoAmino): DistrInfo {
    const message = createBaseDistrInfo();
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DistrInfo): DistrInfoAmino {
    const obj: any = {};
    obj.total_weight = message.totalWeight;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: DistrInfoAminoMsg): DistrInfo {
    return DistrInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DistrInfoProtoMsg): DistrInfo {
    return DistrInfo.decode(message.value);
  },
  toProto(message: DistrInfo): Uint8Array {
    return DistrInfo.encode(message).finish();
  },
  toProtoMsg(message: DistrInfo): DistrInfoProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.DistrInfo",
      value: DistrInfo.encode(message).finish()
    };
  }
};
function createBaseDistrRecord(): DistrRecord {
  return {
    gaugeId: BigInt(0),
    weight: ""
  };
}
export const DistrRecord = {
  typeUrl: "/dymensionxyz.dymension.streamer.DistrRecord",
  encode(message: DistrRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): DistrRecord {
    return {
      gaugeId: isSet(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0),
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<DistrRecord>): DistrRecord {
    const message = createBaseDistrRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: DistrRecordAmino): DistrRecord {
    const message = createBaseDistrRecord();
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: DistrRecord): DistrRecordAmino {
    const obj: any = {};
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: DistrRecordAminoMsg): DistrRecord {
    return DistrRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: DistrRecordProtoMsg): DistrRecord {
    return DistrRecord.decode(message.value);
  },
  toProto(message: DistrRecord): Uint8Array {
    return DistrRecord.encode(message).finish();
  },
  toProtoMsg(message: DistrRecord): DistrRecordProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.DistrRecord",
      value: DistrRecord.encode(message).finish()
    };
  }
};