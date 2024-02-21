import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface AddRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: bigint;
  deposit: string;
}
export interface AddRateLimitProposalProtoMsg {
  typeUrl: "/stride.ratelimit.AddRateLimitProposal";
  value: Uint8Array;
}
export interface AddRateLimitProposalAmino {
  title?: string;
  description?: string;
  denom?: string;
  channel_id?: string;
  max_percent_send?: string;
  max_percent_recv?: string;
  duration_hours?: string;
  deposit?: string;
}
export interface AddRateLimitProposalAminoMsg {
  type: "/stride.ratelimit.AddRateLimitProposal";
  value: AddRateLimitProposalAmino;
}
export interface AddRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
  deposit: string;
}
export interface UpdateRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: bigint;
  deposit: string;
}
export interface UpdateRateLimitProposalProtoMsg {
  typeUrl: "/stride.ratelimit.UpdateRateLimitProposal";
  value: Uint8Array;
}
export interface UpdateRateLimitProposalAmino {
  title?: string;
  description?: string;
  denom?: string;
  channel_id?: string;
  max_percent_send?: string;
  max_percent_recv?: string;
  duration_hours?: string;
  deposit?: string;
}
export interface UpdateRateLimitProposalAminoMsg {
  type: "/stride.ratelimit.UpdateRateLimitProposal";
  value: UpdateRateLimitProposalAmino;
}
export interface UpdateRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
  deposit: string;
}
export interface RemoveRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}
export interface RemoveRateLimitProposalProtoMsg {
  typeUrl: "/stride.ratelimit.RemoveRateLimitProposal";
  value: Uint8Array;
}
export interface RemoveRateLimitProposalAmino {
  title?: string;
  description?: string;
  denom?: string;
  channel_id?: string;
  deposit?: string;
}
export interface RemoveRateLimitProposalAminoMsg {
  type: "/stride.ratelimit.RemoveRateLimitProposal";
  value: RemoveRateLimitProposalAmino;
}
export interface RemoveRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  deposit: string;
}
export interface ResetRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}
export interface ResetRateLimitProposalProtoMsg {
  typeUrl: "/stride.ratelimit.ResetRateLimitProposal";
  value: Uint8Array;
}
export interface ResetRateLimitProposalAmino {
  title?: string;
  description?: string;
  denom?: string;
  channel_id?: string;
  deposit?: string;
}
export interface ResetRateLimitProposalAminoMsg {
  type: "/stride.ratelimit.ResetRateLimitProposal";
  value: ResetRateLimitProposalAmino;
}
export interface ResetRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  deposit: string;
}
function createBaseAddRateLimitProposal(): AddRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: BigInt(0),
    deposit: ""
  };
}
export const AddRateLimitProposal = {
  typeUrl: "/stride.ratelimit.AddRateLimitProposal",
  encode(message: AddRateLimitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(56).uint64(message.durationHours);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      maxPercentSend: isSet(object.maxPercentSend) ? String(object.maxPercentSend) : "",
      maxPercentRecv: isSet(object.maxPercentRecv) ? String(object.maxPercentRecv) : "",
      durationHours: isSet(object.durationHours) ? BigInt(object.durationHours.toString()) : BigInt(0),
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddRateLimitProposal>): AddRateLimitProposal {
    const message = createBaseAddRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? BigInt(object.durationHours.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddRateLimitProposalAmino): AddRateLimitProposal {
    const message = createBaseAddRateLimitProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.max_percent_send !== undefined && object.max_percent_send !== null) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (object.max_percent_recv !== undefined && object.max_percent_recv !== null) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: AddRateLimitProposal): AddRateLimitProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    obj.channel_id = message.channelId;
    obj.max_percent_send = message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv;
    obj.duration_hours = message.durationHours ? message.durationHours.toString() : undefined;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddRateLimitProposalAminoMsg): AddRateLimitProposal {
    return AddRateLimitProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddRateLimitProposalProtoMsg): AddRateLimitProposal {
    return AddRateLimitProposal.decode(message.value);
  },
  toProto(message: AddRateLimitProposal): Uint8Array {
    return AddRateLimitProposal.encode(message).finish();
  },
  toProtoMsg(message: AddRateLimitProposal): AddRateLimitProposalProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.AddRateLimitProposal",
      value: AddRateLimitProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateRateLimitProposal(): UpdateRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: BigInt(0),
    deposit: ""
  };
}
export const UpdateRateLimitProposal = {
  typeUrl: "/stride.ratelimit.UpdateRateLimitProposal",
  encode(message: UpdateRateLimitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(56).uint64(message.durationHours);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): UpdateRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      maxPercentSend: isSet(object.maxPercentSend) ? String(object.maxPercentSend) : "",
      maxPercentRecv: isSet(object.maxPercentRecv) ? String(object.maxPercentRecv) : "",
      durationHours: isSet(object.durationHours) ? BigInt(object.durationHours.toString()) : BigInt(0),
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<UpdateRateLimitProposal>): UpdateRateLimitProposal {
    const message = createBaseUpdateRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? BigInt(object.durationHours.toString()) : BigInt(0);
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: UpdateRateLimitProposalAmino): UpdateRateLimitProposal {
    const message = createBaseUpdateRateLimitProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.max_percent_send !== undefined && object.max_percent_send !== null) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (object.max_percent_recv !== undefined && object.max_percent_recv !== null) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: UpdateRateLimitProposal): UpdateRateLimitProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    obj.channel_id = message.channelId;
    obj.max_percent_send = message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv;
    obj.duration_hours = message.durationHours ? message.durationHours.toString() : undefined;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: UpdateRateLimitProposalAminoMsg): UpdateRateLimitProposal {
    return UpdateRateLimitProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateRateLimitProposalProtoMsg): UpdateRateLimitProposal {
    return UpdateRateLimitProposal.decode(message.value);
  },
  toProto(message: UpdateRateLimitProposal): Uint8Array {
    return UpdateRateLimitProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateRateLimitProposal): UpdateRateLimitProposalProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.UpdateRateLimitProposal",
      value: UpdateRateLimitProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveRateLimitProposal(): RemoveRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    deposit: ""
  };
}
export const RemoveRateLimitProposal = {
  typeUrl: "/stride.ratelimit.RemoveRateLimitProposal",
  encode(message: RemoveRateLimitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): RemoveRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<RemoveRateLimitProposal>): RemoveRateLimitProposal {
    const message = createBaseRemoveRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: RemoveRateLimitProposalAmino): RemoveRateLimitProposal {
    const message = createBaseRemoveRateLimitProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: RemoveRateLimitProposal): RemoveRateLimitProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    obj.channel_id = message.channelId;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: RemoveRateLimitProposalAminoMsg): RemoveRateLimitProposal {
    return RemoveRateLimitProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveRateLimitProposalProtoMsg): RemoveRateLimitProposal {
    return RemoveRateLimitProposal.decode(message.value);
  },
  toProto(message: RemoveRateLimitProposal): Uint8Array {
    return RemoveRateLimitProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveRateLimitProposal): RemoveRateLimitProposalProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.RemoveRateLimitProposal",
      value: RemoveRateLimitProposal.encode(message).finish()
    };
  }
};
function createBaseResetRateLimitProposal(): ResetRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    deposit: ""
  };
}
export const ResetRateLimitProposal = {
  typeUrl: "/stride.ratelimit.ResetRateLimitProposal",
  encode(message: ResetRateLimitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): ResetRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<ResetRateLimitProposal>): ResetRateLimitProposal {
    const message = createBaseResetRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: ResetRateLimitProposalAmino): ResetRateLimitProposal {
    const message = createBaseResetRateLimitProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: ResetRateLimitProposal): ResetRateLimitProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.denom = message.denom;
    obj.channel_id = message.channelId;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: ResetRateLimitProposalAminoMsg): ResetRateLimitProposal {
    return ResetRateLimitProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ResetRateLimitProposalProtoMsg): ResetRateLimitProposal {
    return ResetRateLimitProposal.decode(message.value);
  },
  toProto(message: ResetRateLimitProposal): Uint8Array {
    return ResetRateLimitProposal.encode(message).finish();
  },
  toProtoMsg(message: ResetRateLimitProposal): ResetRateLimitProposalProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.ResetRateLimitProposal",
      value: ResetRateLimitProposal.encode(message).finish()
    };
  }
};