import { DistrRecord, DistrRecordAmino, DistrRecordSDKType } from "./distr_info";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
export interface CreateStreamProposal {
  title: string;
  description: string;
  distributeToRecords: DistrRecord[];
  /** coins are coin(s) to be distributed by the stream */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Timestamp;
  distrEpochIdentifier: string;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  numEpochsPaidOver: bigint;
}
export interface CreateStreamProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.CreateStreamProposal";
  value: Uint8Array;
}
export interface CreateStreamProposalAmino {
  title?: string;
  description?: string;
  distribute_to_records?: DistrRecordAmino[];
  /** coins are coin(s) to be distributed by the stream */
  coins?: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: string;
  distr_epoch_identifier?: string;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  num_epochs_paid_over?: string;
}
export interface CreateStreamProposalAminoMsg {
  type: "/dymensionxyz.dymension.streamer.CreateStreamProposal";
  value: CreateStreamProposalAmino;
}
export interface CreateStreamProposalSDKType {
  title: string;
  description: string;
  distribute_to_records: DistrRecordSDKType[];
  coins: CoinSDKType[];
  start_time: TimestampSDKType;
  distr_epoch_identifier: string;
  num_epochs_paid_over: bigint;
}
export interface TerminateStreamProposal {
  title: string;
  description: string;
  streamId: bigint;
}
export interface TerminateStreamProposalProtoMsg {
  typeUrl: "/dymensionxyz.dymension.streamer.TerminateStreamProposal";
  value: Uint8Array;
}
export interface TerminateStreamProposalAmino {
  title?: string;
  description?: string;
  stream_id?: string;
}
export interface TerminateStreamProposalAminoMsg {
  type: "/dymensionxyz.dymension.streamer.TerminateStreamProposal";
  value: TerminateStreamProposalAmino;
}
export interface TerminateStreamProposalSDKType {
  title: string;
  description: string;
  stream_id: bigint;
}
function createBaseCreateStreamProposal(): CreateStreamProposal {
  return {
    title: "",
    description: "",
    distributeToRecords: [],
    coins: [],
    startTime: Timestamp.fromPartial({}),
    distrEpochIdentifier: "",
    numEpochsPaidOver: BigInt(0)
  };
}
export const CreateStreamProposal = {
  typeUrl: "/dymensionxyz.dymension.streamer.CreateStreamProposal",
  encode(message: CreateStreamProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.distributeToRecords) {
      DistrRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.distrEpochIdentifier !== "") {
      writer.uint32(50).string(message.distrEpochIdentifier);
    }
    if (message.numEpochsPaidOver !== BigInt(0)) {
      writer.uint32(56).uint64(message.numEpochsPaidOver);
    }
    return writer;
  },
  fromJSON(object: any): CreateStreamProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      distributeToRecords: Array.isArray(object?.distributeToRecords) ? object.distributeToRecords.map((e: any) => DistrRecord.fromJSON(e)) : [],
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      distrEpochIdentifier: isSet(object.distrEpochIdentifier) ? String(object.distrEpochIdentifier) : "",
      numEpochsPaidOver: isSet(object.numEpochsPaidOver) ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<CreateStreamProposal>): CreateStreamProposal {
    const message = createBaseCreateStreamProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.distributeToRecords = object.distributeToRecords?.map(e => DistrRecord.fromPartial(e)) || [];
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
    message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? BigInt(object.numEpochsPaidOver.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CreateStreamProposalAmino): CreateStreamProposal {
    const message = createBaseCreateStreamProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.distributeToRecords = object.distribute_to_records?.map(e => DistrRecord.fromAmino(e)) || [];
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.distr_epoch_identifier !== undefined && object.distr_epoch_identifier !== null) {
      message.distrEpochIdentifier = object.distr_epoch_identifier;
    }
    if (object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null) {
      message.numEpochsPaidOver = BigInt(object.num_epochs_paid_over);
    }
    return message;
  },
  toAmino(message: CreateStreamProposal): CreateStreamProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.distributeToRecords) {
      obj.distribute_to_records = message.distributeToRecords.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.distribute_to_records = [];
    }
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.distr_epoch_identifier = message.distrEpochIdentifier;
    obj.num_epochs_paid_over = message.numEpochsPaidOver ? message.numEpochsPaidOver.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CreateStreamProposalAminoMsg): CreateStreamProposal {
    return CreateStreamProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateStreamProposalProtoMsg): CreateStreamProposal {
    return CreateStreamProposal.decode(message.value);
  },
  toProto(message: CreateStreamProposal): Uint8Array {
    return CreateStreamProposal.encode(message).finish();
  },
  toProtoMsg(message: CreateStreamProposal): CreateStreamProposalProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.CreateStreamProposal",
      value: CreateStreamProposal.encode(message).finish()
    };
  }
};
function createBaseTerminateStreamProposal(): TerminateStreamProposal {
  return {
    title: "",
    description: "",
    streamId: BigInt(0)
  };
}
export const TerminateStreamProposal = {
  typeUrl: "/dymensionxyz.dymension.streamer.TerminateStreamProposal",
  encode(message: TerminateStreamProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.streamId !== BigInt(0)) {
      writer.uint32(32).uint64(message.streamId);
    }
    return writer;
  },
  fromJSON(object: any): TerminateStreamProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      streamId: isSet(object.streamId) ? BigInt(object.streamId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TerminateStreamProposal>): TerminateStreamProposal {
    const message = createBaseTerminateStreamProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.streamId = object.streamId !== undefined && object.streamId !== null ? BigInt(object.streamId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TerminateStreamProposalAmino): TerminateStreamProposal {
    const message = createBaseTerminateStreamProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.stream_id !== undefined && object.stream_id !== null) {
      message.streamId = BigInt(object.stream_id);
    }
    return message;
  },
  toAmino(message: TerminateStreamProposal): TerminateStreamProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.stream_id = message.streamId ? message.streamId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TerminateStreamProposalAminoMsg): TerminateStreamProposal {
    return TerminateStreamProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: TerminateStreamProposalProtoMsg): TerminateStreamProposal {
    return TerminateStreamProposal.decode(message.value);
  },
  toProto(message: TerminateStreamProposal): Uint8Array {
    return TerminateStreamProposal.encode(message).finish();
  },
  toProtoMsg(message: TerminateStreamProposal): TerminateStreamProposalProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.streamer.TerminateStreamProposal",
      value: TerminateStreamProposal.encode(message).finish()
    };
  }
};