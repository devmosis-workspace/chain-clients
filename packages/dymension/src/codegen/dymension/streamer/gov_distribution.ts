import { DistrRecord, DistrRecordAmino, DistrRecordSDKType } from "./distr_info";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * ReplaceStreamDistributionProposal is a gov Content type for updating a stream
 * If a ReplaceStreamDistributionProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight.
 */
export interface ReplaceStreamDistributionProposal {
  title: string;
  description: string;
  streamId: bigint;
  records: DistrRecord[];
}
export interface ReplaceStreamDistributionProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.ReplaceStreamDistributionProposal";
  value: Uint8Array;
}
/**
 * ReplaceStreamDistributionProposal is a gov Content type for updating a stream
 * If a ReplaceStreamDistributionProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight.
 */
export interface ReplaceStreamDistributionProposalAmino {
  title?: string;
  description?: string;
  stream_id?: string;
  records?: DistrRecordAmino[];
}
export interface ReplaceStreamDistributionProposalAminoMsg {
  type: "/dymensionxyz.dymension.streamer.ReplaceStreamDistributionProposal";
  value: ReplaceStreamDistributionProposalAmino;
}
/**
 * ReplaceStreamDistributionProposal is a gov Content type for updating a stream
 * If a ReplaceStreamDistributionProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight.
 */
export interface ReplaceStreamDistributionProposalSDKType {
  title: string;
  description: string;
  stream_id: bigint;
  records: DistrRecordSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdateStreamDistributionProposal {
  title: string;
  description: string;
  streamId: bigint;
  records: DistrRecord[];
}
export interface UpdateStreamDistributionProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.UpdateStreamDistributionProposal";
  value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdateStreamDistributionProposalAmino {
  title?: string;
  description?: string;
  stream_id?: string;
  records?: DistrRecordAmino[];
}
export interface UpdateStreamDistributionProposalAminoMsg {
  type: "/dymensionxyz.dymension.streamer.UpdateStreamDistributionProposal";
  value: UpdateStreamDistributionProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdateStreamDistributionProposalSDKType {
  title: string;
  description: string;
  stream_id: bigint;
  records: DistrRecordSDKType[];
}
function createBaseReplaceStreamDistributionProposal(): ReplaceStreamDistributionProposal {
  return {
    title: "",
    description: "",
    streamId: BigInt(0),
    records: []
  };
}
export const ReplaceStreamDistributionProposal = {
  typeUrl: "/dymensionxyz.dymension.streamer.ReplaceStreamDistributionProposal",
  encode(message: ReplaceStreamDistributionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.streamId !== BigInt(0)) {
      writer.uint32(24).uint64(message.streamId);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ReplaceStreamDistributionProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      streamId: isSet(object.streamId) ? BigInt(object.streamId.toString()) : BigInt(0),
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ReplaceStreamDistributionProposal>): ReplaceStreamDistributionProposal {
    const message = createBaseReplaceStreamDistributionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.streamId = object.streamId !== undefined && object.streamId !== null ? BigInt(object.streamId.toString()) : BigInt(0);
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ReplaceStreamDistributionProposalAmino): ReplaceStreamDistributionProposal {
    const message = createBaseReplaceStreamDistributionProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.streamId = BigInt(object.stream_id);
    }
    message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ReplaceStreamDistributionProposal): ReplaceStreamDistributionProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.stream_id = message.streamId ? message.streamId.toString() : undefined;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: ReplaceStreamDistributionProposalAminoMsg): ReplaceStreamDistributionProposal {
    return ReplaceStreamDistributionProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ReplaceStreamDistributionProposalProtoMsg): ReplaceStreamDistributionProposal {
    return ReplaceStreamDistributionProposal.decode(message.value);
  },
  toProto(message: ReplaceStreamDistributionProposal): Uint8Array {
    return ReplaceStreamDistributionProposal.encode(message).finish();
  },
  toProtoMsg(message: ReplaceStreamDistributionProposal): ReplaceStreamDistributionProposalProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.ReplaceStreamDistributionProposal",
      value: ReplaceStreamDistributionProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateStreamDistributionProposal(): UpdateStreamDistributionProposal {
  return {
    title: "",
    description: "",
    streamId: BigInt(0),
    records: []
  };
}
export const UpdateStreamDistributionProposal = {
  typeUrl: "/dymensionxyz.dymension.streamer.UpdateStreamDistributionProposal",
  encode(message: UpdateStreamDistributionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.streamId !== BigInt(0)) {
      writer.uint32(24).uint64(message.streamId);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateStreamDistributionProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      streamId: isSet(object.streamId) ? BigInt(object.streamId.toString()) : BigInt(0),
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UpdateStreamDistributionProposal>): UpdateStreamDistributionProposal {
    const message = createBaseUpdateStreamDistributionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.streamId = object.streamId !== undefined && object.streamId !== null ? BigInt(object.streamId.toString()) : BigInt(0);
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateStreamDistributionProposalAmino): UpdateStreamDistributionProposal {
    const message = createBaseUpdateStreamDistributionProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.streamId = BigInt(object.stream_id);
    }
    message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdateStreamDistributionProposal): UpdateStreamDistributionProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.stream_id = message.streamId ? message.streamId.toString() : undefined;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: UpdateStreamDistributionProposalAminoMsg): UpdateStreamDistributionProposal {
    return UpdateStreamDistributionProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateStreamDistributionProposalProtoMsg): UpdateStreamDistributionProposal {
    return UpdateStreamDistributionProposal.decode(message.value);
  },
  toProto(message: UpdateStreamDistributionProposal): Uint8Array {
    return UpdateStreamDistributionProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateStreamDistributionProposal): UpdateStreamDistributionProposalProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.UpdateStreamDistributionProposal",
      value: UpdateStreamDistributionProposal.encode(message).finish()
    };
  }
};