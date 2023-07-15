import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum PacketDirection {
  PACKET_SEND = 0,
  PACKET_RECV = 1,
  UNRECOGNIZED = -1,
}
export const PacketDirectionSDKType = PacketDirection;
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
export interface PathSDKType {
  denom: string;
  channel_id: string;
}
export interface Quota {
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
}
export interface QuotaSDKType {
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: Long;
}
export interface Flow {
  inflow: string;
  outflow: string;
  channelValue: string;
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
export interface RateLimitSDKType {
  path?: PathSDKType;
  quota?: QuotaSDKType;
  flow?: FlowSDKType;
}
export interface WhitelistedAddressPair {
  sender: string;
  receiver: string;
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
  encode(message: Path, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQuota(): Quota {
  return {
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: Long.UZERO
  };
}
export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxPercentSend !== "") {
      writer.uint32(10).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(18).string(message.maxPercentRecv);
    }
    if (!message.durationHours.isZero()) {
      writer.uint32(24).uint64(message.durationHours);
    }
    return writer;
  },
  fromJSON(object: any): Quota {
    return {
      maxPercentSend: isSet(object.maxPercentSend) ? String(object.maxPercentSend) : "",
      maxPercentRecv: isSet(object.maxPercentRecv) ? String(object.maxPercentRecv) : "",
      durationHours: isSet(object.durationHours) ? Long.fromValue(object.durationHours) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Quota>): Quota {
    const message = createBaseQuota();
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? Long.fromValue(object.durationHours) : Long.UZERO;
    return message;
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
  encode(message: Flow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseWhitelistedAddressPair(): WhitelistedAddressPair {
  return {
    sender: "",
    receiver: ""
  };
}
export const WhitelistedAddressPair = {
  encode(message: WhitelistedAddressPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};