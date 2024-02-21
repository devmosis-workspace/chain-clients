import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export enum PacketDirection {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}
export const PacketDirectionSDKType = PacketDirection;
export const PacketDirectionAmino = PacketDirection;
export function packetDirectionFromJSON(object: any): PacketDirection {
  switch (object) {
    case 0:
    case "PACKET_SEND":
      return PacketDirection.PACKET_SEND;
    case 1:
    case "PACKET_RECV":
      return PacketDirection.PACKET_RECV;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketDirection.UNRECOGNIZED;
  }
}
export function packetDirectionToJSON(object: PacketDirection): string {
  switch (object) {
    case PacketDirection.PACKET_SEND:
      return "PACKET_SEND";
    case PacketDirection.PACKET_RECV:
      return "PACKET_RECV";
    case PacketDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Path {
  denom: string;
  channelId: string;
}
export interface PathProtoMsg {
  typeUrl: "/stride.ratelimit.Path";
  value: Uint8Array;
}
export interface PathAmino {
  denom?: string;
  channel_id?: string;
}
export interface PathAminoMsg {
  type: "/stride.ratelimit.Path";
  value: PathAmino;
}
export interface PathSDKType {
  denom: string;
  channel_id: string;
}
export interface Quota {
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: bigint;
}
export interface QuotaProtoMsg {
  typeUrl: "/stride.ratelimit.Quota";
  value: Uint8Array;
}
export interface QuotaAmino {
  max_percent_send?: string;
  max_percent_recv?: string;
  duration_hours?: string;
}
export interface QuotaAminoMsg {
  type: "/stride.ratelimit.Quota";
  value: QuotaAmino;
}
export interface QuotaSDKType {
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: bigint;
}
export interface Flow {
  inflow: string;
  outflow: string;
  channelValue: string;
}
export interface FlowProtoMsg {
  typeUrl: "/stride.ratelimit.Flow";
  value: Uint8Array;
}
export interface FlowAmino {
  inflow?: string;
  outflow?: string;
  channel_value?: string;
}
export interface FlowAminoMsg {
  type: "/stride.ratelimit.Flow";
  value: FlowAmino;
}
export interface FlowSDKType {
  inflow: string;
  outflow: string;
  channel_value: string;
}
export interface RateLimit {
  path?: Path;
  quota?: Quota;
  flow?: Flow;
}
export interface RateLimitProtoMsg {
  typeUrl: "/stride.ratelimit.RateLimit";
  value: Uint8Array;
}
export interface RateLimitAmino {
  path?: PathAmino;
  quota?: QuotaAmino;
  flow?: FlowAmino;
}
export interface RateLimitAminoMsg {
  type: "/stride.ratelimit.RateLimit";
  value: RateLimitAmino;
}
export interface RateLimitSDKType {
  path?: PathSDKType;
  quota?: QuotaSDKType;
  flow?: FlowSDKType;
}
export interface WhitelistedAddressPair {
  sender: string;
  receiver: string;
}
export interface WhitelistedAddressPairProtoMsg {
  typeUrl: "/stride.ratelimit.WhitelistedAddressPair";
  value: Uint8Array;
}
export interface WhitelistedAddressPairAmino {
  sender?: string;
  receiver?: string;
}
export interface WhitelistedAddressPairAminoMsg {
  type: "/stride.ratelimit.WhitelistedAddressPair";
  value: WhitelistedAddressPairAmino;
}
export interface WhitelistedAddressPairSDKType {
  sender: string;
  receiver: string;
}
function createBasePath(): Path {
  return {
    denom: "",
    channelId: ""
  };
}
export const Path = {
  typeUrl: "/stride.ratelimit.Path",
  encode(message: Path, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  fromJSON(object: any): Path {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<Path>): Path {
    const message = createBasePath();
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: PathAmino): Path {
    const message = createBasePath();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: Path): PathAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: PathAminoMsg): Path {
    return Path.fromAmino(object.value);
  },
  fromProtoMsg(message: PathProtoMsg): Path {
    return Path.decode(message.value);
  },
  toProto(message: Path): Uint8Array {
    return Path.encode(message).finish();
  },
  toProtoMsg(message: Path): PathProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.Path",
      value: Path.encode(message).finish()
    };
  }
};
function createBaseQuota(): Quota {
  return {
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: BigInt(0)
  };
}
export const Quota = {
  typeUrl: "/stride.ratelimit.Quota",
  encode(message: Quota, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPercentSend !== "") {
      writer.uint32(10).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(18).string(message.maxPercentRecv);
    }
    if (message.durationHours !== BigInt(0)) {
      writer.uint32(24).uint64(message.durationHours);
    }
    return writer;
  },
  fromJSON(object: any): Quota {
    return {
      maxPercentSend: isSet(object.maxPercentSend) ? String(object.maxPercentSend) : "",
      maxPercentRecv: isSet(object.maxPercentRecv) ? String(object.maxPercentRecv) : "",
      durationHours: isSet(object.durationHours) ? BigInt(object.durationHours.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Quota>): Quota {
    const message = createBaseQuota();
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? BigInt(object.durationHours.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuotaAmino): Quota {
    const message = createBaseQuota();
    if (object.max_percent_send !== undefined && object.max_percent_send !== null) {
      message.maxPercentSend = object.max_percent_send;
    }
    if (object.max_percent_recv !== undefined && object.max_percent_recv !== null) {
      message.maxPercentRecv = object.max_percent_recv;
    }
    if (object.duration_hours !== undefined && object.duration_hours !== null) {
      message.durationHours = BigInt(object.duration_hours);
    }
    return message;
  },
  toAmino(message: Quota): QuotaAmino {
    const obj: any = {};
    obj.max_percent_send = message.maxPercentSend;
    obj.max_percent_recv = message.maxPercentRecv;
    obj.duration_hours = message.durationHours ? message.durationHours.toString() : undefined;
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
      typeUrl: "/stride.ratelimit.Quota",
      value: Quota.encode(message).finish()
    };
  }
};
function createBaseFlow(): Flow {
  return {
    inflow: "",
    outflow: "",
    channelValue: ""
  };
}
export const Flow = {
  typeUrl: "/stride.ratelimit.Flow",
  encode(message: Flow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflow !== "") {
      writer.uint32(10).string(message.inflow);
    }
    if (message.outflow !== "") {
      writer.uint32(18).string(message.outflow);
    }
    if (message.channelValue !== "") {
      writer.uint32(26).string(message.channelValue);
    }
    return writer;
  },
  fromJSON(object: any): Flow {
    return {
      inflow: isSet(object.inflow) ? String(object.inflow) : "",
      outflow: isSet(object.outflow) ? String(object.outflow) : "",
      channelValue: isSet(object.channelValue) ? String(object.channelValue) : ""
    };
  },
  fromPartial(object: Partial<Flow>): Flow {
    const message = createBaseFlow();
    message.inflow = object.inflow ?? "";
    message.outflow = object.outflow ?? "";
    message.channelValue = object.channelValue ?? "";
    return message;
  },
  fromAmino(object: FlowAmino): Flow {
    const message = createBaseFlow();
    if (object.inflow !== undefined && object.inflow !== null) {
      message.inflow = object.inflow;
    }
    if (object.outflow !== undefined && object.outflow !== null) {
      message.outflow = object.outflow;
    }
    if (object.channel_value !== undefined && object.channel_value !== null) {
      message.channelValue = object.channel_value;
    }
    return message;
  },
  toAmino(message: Flow): FlowAmino {
    const obj: any = {};
    obj.inflow = message.inflow;
    obj.outflow = message.outflow;
    obj.channel_value = message.channelValue;
    return obj;
  },
  fromAminoMsg(object: FlowAminoMsg): Flow {
    return Flow.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowProtoMsg): Flow {
    return Flow.decode(message.value);
  },
  toProto(message: Flow): Uint8Array {
    return Flow.encode(message).finish();
  },
  toProtoMsg(message: Flow): FlowProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.Flow",
      value: Flow.encode(message).finish()
    };
  }
};
function createBaseRateLimit(): RateLimit {
  return {
    path: undefined,
    quota: undefined,
    flow: undefined
  };
}
export const RateLimit = {
  typeUrl: "/stride.ratelimit.RateLimit",
  encode(message: RateLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== undefined) {
      Path.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(18).fork()).ldelim();
    }
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RateLimit {
    return {
      path: isSet(object.path) ? Path.fromJSON(object.path) : undefined,
      quota: isSet(object.quota) ? Quota.fromJSON(object.quota) : undefined,
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined
    };
  },
  fromPartial(object: Partial<RateLimit>): RateLimit {
    const message = createBaseRateLimit();
    message.path = object.path !== undefined && object.path !== null ? Path.fromPartial(object.path) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: RateLimitAmino): RateLimit {
    const message = createBaseRateLimit();
    if (object.path !== undefined && object.path !== null) {
      message.path = Path.fromAmino(object.path);
    }
    if (object.quota !== undefined && object.quota !== null) {
      message.quota = Quota.fromAmino(object.quota);
    }
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: RateLimit): RateLimitAmino {
    const obj: any = {};
    obj.path = message.path ? Path.toAmino(message.path) : undefined;
    obj.quota = message.quota ? Quota.toAmino(message.quota) : undefined;
    obj.flow = message.flow ? Flow.toAmino(message.flow) : undefined;
    return obj;
  },
  fromAminoMsg(object: RateLimitAminoMsg): RateLimit {
    return RateLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: RateLimitProtoMsg): RateLimit {
    return RateLimit.decode(message.value);
  },
  toProto(message: RateLimit): Uint8Array {
    return RateLimit.encode(message).finish();
  },
  toProtoMsg(message: RateLimit): RateLimitProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.RateLimit",
      value: RateLimit.encode(message).finish()
    };
  }
};
function createBaseWhitelistedAddressPair(): WhitelistedAddressPair {
  return {
    sender: "",
    receiver: ""
  };
}
export const WhitelistedAddressPair = {
  typeUrl: "/stride.ratelimit.WhitelistedAddressPair",
  encode(message: WhitelistedAddressPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): WhitelistedAddressPair {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<WhitelistedAddressPair>): WhitelistedAddressPair {
    const message = createBaseWhitelistedAddressPair();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: WhitelistedAddressPairAmino): WhitelistedAddressPair {
    const message = createBaseWhitelistedAddressPair();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: WhitelistedAddressPair): WhitelistedAddressPairAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: WhitelistedAddressPairAminoMsg): WhitelistedAddressPair {
    return WhitelistedAddressPair.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistedAddressPairProtoMsg): WhitelistedAddressPair {
    return WhitelistedAddressPair.decode(message.value);
  },
  toProto(message: WhitelistedAddressPair): Uint8Array {
    return WhitelistedAddressPair.encode(message).finish();
  },
  toProtoMsg(message: WhitelistedAddressPair): WhitelistedAddressPairProtoMsg {
    return {
      typeUrl: "/stride.ratelimit.WhitelistedAddressPair",
      value: WhitelistedAddressPair.encode(message).finish()
    };
  }
};