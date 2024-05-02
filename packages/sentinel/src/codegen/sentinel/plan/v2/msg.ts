import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreateRequest defines the SDK message for creating a subscription plan */
export interface MsgCreateRequest {
  from: string;
  duration: Duration;
  gigabytes: bigint;
  prices: Coin[];
}
export interface MsgCreateRequestProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgCreateRequest";
  value: Uint8Array;
}
/** MsgCreateRequest defines the SDK message for creating a subscription plan */
export interface MsgCreateRequestAmino {
  from?: string;
  duration?: DurationAmino;
  gigabytes?: string;
  prices?: CoinAmino[];
}
export interface MsgCreateRequestAminoMsg {
  type: "/sentinel.plan.v2.MsgCreateRequest";
  value: MsgCreateRequestAmino;
}
/** MsgCreateRequest defines the SDK message for creating a subscription plan */
export interface MsgCreateRequestSDKType {
  from: string;
  duration: DurationSDKType;
  gigabytes: bigint;
  prices: CoinSDKType[];
}
/**
 * MsgUpdateStatusRequest defines the SDK message for modifying the status of a
 * subscription plan
 */
export interface MsgUpdateStatusRequest {
  from: string;
  id: bigint;
  status: Status;
}
export interface MsgUpdateStatusRequestProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgUpdateStatusRequest";
  value: Uint8Array;
}
/**
 * MsgUpdateStatusRequest defines the SDK message for modifying the status of a
 * subscription plan
 */
export interface MsgUpdateStatusRequestAmino {
  from?: string;
  id?: string;
  status?: Status;
}
export interface MsgUpdateStatusRequestAminoMsg {
  type: "/sentinel.plan.v2.MsgUpdateStatusRequest";
  value: MsgUpdateStatusRequestAmino;
}
/**
 * MsgUpdateStatusRequest defines the SDK message for modifying the status of a
 * subscription plan
 */
export interface MsgUpdateStatusRequestSDKType {
  from: string;
  id: bigint;
  status: Status;
}
/**
 * MsgLinkNodeRequest defines the SDK message for adding a node to a
 * subscription plan
 */
export interface MsgLinkNodeRequest {
  from: string;
  id: bigint;
  nodeAddress: string;
}
export interface MsgLinkNodeRequestProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgLinkNodeRequest";
  value: Uint8Array;
}
/**
 * MsgLinkNodeRequest defines the SDK message for adding a node to a
 * subscription plan
 */
export interface MsgLinkNodeRequestAmino {
  from?: string;
  id?: string;
  node_address?: string;
}
export interface MsgLinkNodeRequestAminoMsg {
  type: "/sentinel.plan.v2.MsgLinkNodeRequest";
  value: MsgLinkNodeRequestAmino;
}
/**
 * MsgLinkNodeRequest defines the SDK message for adding a node to a
 * subscription plan
 */
export interface MsgLinkNodeRequestSDKType {
  from: string;
  id: bigint;
  node_address: string;
}
/**
 * MsgUnlinkNodeRequest defines the SDK message for removing a node from a
 * subscription plan
 */
export interface MsgUnlinkNodeRequest {
  from: string;
  id: bigint;
  nodeAddress: string;
}
export interface MsgUnlinkNodeRequestProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeRequest";
  value: Uint8Array;
}
/**
 * MsgUnlinkNodeRequest defines the SDK message for removing a node from a
 * subscription plan
 */
export interface MsgUnlinkNodeRequestAmino {
  from?: string;
  id?: string;
  node_address?: string;
}
export interface MsgUnlinkNodeRequestAminoMsg {
  type: "/sentinel.plan.v2.MsgUnlinkNodeRequest";
  value: MsgUnlinkNodeRequestAmino;
}
/**
 * MsgUnlinkNodeRequest defines the SDK message for removing a node from a
 * subscription plan
 */
export interface MsgUnlinkNodeRequestSDKType {
  from: string;
  id: bigint;
  node_address: string;
}
/**
 * MsgSubscribeRequest defines the SDK message for subscribing to a subscription
 * plan
 */
export interface MsgSubscribeRequest {
  from: string;
  id: bigint;
  denom: string;
}
export interface MsgSubscribeRequestProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgSubscribeRequest";
  value: Uint8Array;
}
/**
 * MsgSubscribeRequest defines the SDK message for subscribing to a subscription
 * plan
 */
export interface MsgSubscribeRequestAmino {
  from?: string;
  id?: string;
  denom?: string;
}
export interface MsgSubscribeRequestAminoMsg {
  type: "/sentinel.plan.v2.MsgSubscribeRequest";
  value: MsgSubscribeRequestAmino;
}
/**
 * MsgSubscribeRequest defines the SDK message for subscribing to a subscription
 * plan
 */
export interface MsgSubscribeRequestSDKType {
  from: string;
  id: bigint;
  denom: string;
}
/** MsgCreateResponse defines the response of message MsgCreateRequest */
export interface MsgCreateResponse {}
export interface MsgCreateResponseProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgCreateResponse";
  value: Uint8Array;
}
/** MsgCreateResponse defines the response of message MsgCreateRequest */
export interface MsgCreateResponseAmino {}
export interface MsgCreateResponseAminoMsg {
  type: "/sentinel.plan.v2.MsgCreateResponse";
  value: MsgCreateResponseAmino;
}
/** MsgCreateResponse defines the response of message MsgCreateRequest */
export interface MsgCreateResponseSDKType {}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponse {}
export interface MsgUpdateStatusResponseProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgUpdateStatusResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseAmino {}
export interface MsgUpdateStatusResponseAminoMsg {
  type: "/sentinel.plan.v2.MsgUpdateStatusResponse";
  value: MsgUpdateStatusResponseAmino;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseSDKType {}
/** MsgLinkNodeResponse defines the response of message MsgLinkNodeRequest */
export interface MsgLinkNodeResponse {}
export interface MsgLinkNodeResponseProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgLinkNodeResponse";
  value: Uint8Array;
}
/** MsgLinkNodeResponse defines the response of message MsgLinkNodeRequest */
export interface MsgLinkNodeResponseAmino {}
export interface MsgLinkNodeResponseAminoMsg {
  type: "/sentinel.plan.v2.MsgLinkNodeResponse";
  value: MsgLinkNodeResponseAmino;
}
/** MsgLinkNodeResponse defines the response of message MsgLinkNodeRequest */
export interface MsgLinkNodeResponseSDKType {}
/** MsgUnlinkNodeResponse defines the response of message MsgUnlinkNodeRequest */
export interface MsgUnlinkNodeResponse {}
export interface MsgUnlinkNodeResponseProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeResponse";
  value: Uint8Array;
}
/** MsgUnlinkNodeResponse defines the response of message MsgUnlinkNodeRequest */
export interface MsgUnlinkNodeResponseAmino {}
export interface MsgUnlinkNodeResponseAminoMsg {
  type: "/sentinel.plan.v2.MsgUnlinkNodeResponse";
  value: MsgUnlinkNodeResponseAmino;
}
/** MsgUnlinkNodeResponse defines the response of message MsgUnlinkNodeRequest */
export interface MsgUnlinkNodeResponseSDKType {}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponse {}
export interface MsgSubscribeResponseProtoMsg {
  typeUrl: "/sentinel.plan.v2.MsgSubscribeResponse";
  value: Uint8Array;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseAmino {}
export interface MsgSubscribeResponseAminoMsg {
  type: "/sentinel.plan.v2.MsgSubscribeResponse";
  value: MsgSubscribeResponseAmino;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseSDKType {}
function createBaseMsgCreateRequest(): MsgCreateRequest {
  return {
    from: "",
    duration: Duration.fromPartial({}),
    gigabytes: BigInt(0),
    prices: []
  };
}
export const MsgCreateRequest = {
  typeUrl: "/sentinel.plan.v2.MsgCreateRequest",
  encode(message: MsgCreateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.gigabytes !== BigInt(0)) {
      writer.uint32(24).int64(message.gigabytes);
    }
    for (const v of message.prices) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      gigabytes: isSet(object.gigabytes) ? BigInt(object.gigabytes.toString()) : BigInt(0),
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCreateRequest>): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    message.from = object.from ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.gigabytes = object.gigabytes !== undefined && object.gigabytes !== null ? BigInt(object.gigabytes.toString()) : BigInt(0);
    message.prices = object.prices?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateRequestAmino): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.gigabytes !== undefined && object.gigabytes !== null) {
      message.gigabytes = BigInt(object.gigabytes);
    }
    message.prices = object.prices?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateRequest): MsgCreateRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.gigabytes = message.gigabytes !== BigInt(0) ? message.gigabytes.toString() : undefined;
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateRequestAminoMsg): MsgCreateRequest {
    return MsgCreateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRequestProtoMsg): MsgCreateRequest {
    return MsgCreateRequest.decode(message.value);
  },
  toProto(message: MsgCreateRequest): Uint8Array {
    return MsgCreateRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRequest): MsgCreateRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgCreateRequest",
      value: MsgCreateRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStatusRequest(): MsgUpdateStatusRequest {
  return {
    from: "",
    id: BigInt(0),
    status: 0
  };
}
export const MsgUpdateStatusRequest = {
  typeUrl: "/sentinel.plan.v2.MsgUpdateStatusRequest",
  encode(message: MsgUpdateStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateStatusRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      status: isSet(object.status) ? statusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<MsgUpdateStatusRequest>): MsgUpdateStatusRequest {
    const message = createBaseMsgUpdateStatusRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateStatusRequestAmino): MsgUpdateStatusRequest {
    const message = createBaseMsgUpdateStatusRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgUpdateStatusRequest): MsgUpdateStatusRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStatusRequestAminoMsg): MsgUpdateStatusRequest {
    return MsgUpdateStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStatusRequestProtoMsg): MsgUpdateStatusRequest {
    return MsgUpdateStatusRequest.decode(message.value);
  },
  toProto(message: MsgUpdateStatusRequest): Uint8Array {
    return MsgUpdateStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStatusRequest): MsgUpdateStatusRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgUpdateStatusRequest",
      value: MsgUpdateStatusRequest.encode(message).finish()
    };
  }
};
function createBaseMsgLinkNodeRequest(): MsgLinkNodeRequest {
  return {
    from: "",
    id: BigInt(0),
    nodeAddress: ""
  };
}
export const MsgLinkNodeRequest = {
  typeUrl: "/sentinel.plan.v2.MsgLinkNodeRequest",
  encode(message: MsgLinkNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgLinkNodeRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgLinkNodeRequest>): MsgLinkNodeRequest {
    const message = createBaseMsgLinkNodeRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.nodeAddress = object.nodeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgLinkNodeRequestAmino): MsgLinkNodeRequest {
    const message = createBaseMsgLinkNodeRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    return message;
  },
  toAmino(message: MsgLinkNodeRequest): MsgLinkNodeRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgLinkNodeRequestAminoMsg): MsgLinkNodeRequest {
    return MsgLinkNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkNodeRequestProtoMsg): MsgLinkNodeRequest {
    return MsgLinkNodeRequest.decode(message.value);
  },
  toProto(message: MsgLinkNodeRequest): Uint8Array {
    return MsgLinkNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkNodeRequest): MsgLinkNodeRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgLinkNodeRequest",
      value: MsgLinkNodeRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUnlinkNodeRequest(): MsgUnlinkNodeRequest {
  return {
    from: "",
    id: BigInt(0),
    nodeAddress: ""
  };
}
export const MsgUnlinkNodeRequest = {
  typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeRequest",
  encode(message: MsgUnlinkNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(26).string(message.nodeAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnlinkNodeRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgUnlinkNodeRequest>): MsgUnlinkNodeRequest {
    const message = createBaseMsgUnlinkNodeRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.nodeAddress = object.nodeAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnlinkNodeRequestAmino): MsgUnlinkNodeRequest {
    const message = createBaseMsgUnlinkNodeRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    return message;
  },
  toAmino(message: MsgUnlinkNodeRequest): MsgUnlinkNodeRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkNodeRequestAminoMsg): MsgUnlinkNodeRequest {
    return MsgUnlinkNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlinkNodeRequestProtoMsg): MsgUnlinkNodeRequest {
    return MsgUnlinkNodeRequest.decode(message.value);
  },
  toProto(message: MsgUnlinkNodeRequest): Uint8Array {
    return MsgUnlinkNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkNodeRequest): MsgUnlinkNodeRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeRequest",
      value: MsgUnlinkNodeRequest.encode(message).finish()
    };
  }
};
function createBaseMsgSubscribeRequest(): MsgSubscribeRequest {
  return {
    from: "",
    id: BigInt(0),
    denom: ""
  };
}
export const MsgSubscribeRequest = {
  typeUrl: "/sentinel.plan.v2.MsgSubscribeRequest",
  encode(message: MsgSubscribeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubscribeRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgSubscribeRequest>): MsgSubscribeRequest {
    const message = createBaseMsgSubscribeRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgSubscribeRequestAmino): MsgSubscribeRequest {
    const message = createBaseMsgSubscribeRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgSubscribeRequest): MsgSubscribeRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgSubscribeRequestAminoMsg): MsgSubscribeRequest {
    return MsgSubscribeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubscribeRequestProtoMsg): MsgSubscribeRequest {
    return MsgSubscribeRequest.decode(message.value);
  },
  toProto(message: MsgSubscribeRequest): Uint8Array {
    return MsgSubscribeRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgSubscribeRequest): MsgSubscribeRequestProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgSubscribeRequest",
      value: MsgSubscribeRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}
export const MsgCreateResponse = {
  typeUrl: "/sentinel.plan.v2.MsgCreateResponse",
  encode(_: MsgCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
  fromAmino(_: MsgCreateResponseAmino): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
  toAmino(_: MsgCreateResponse): MsgCreateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse {
    return MsgCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse {
    return MsgCreateResponse.decode(message.value);
  },
  toProto(message: MsgCreateResponse): Uint8Array {
    return MsgCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgCreateResponse",
      value: MsgCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStatusResponse(): MsgUpdateStatusResponse {
  return {};
}
export const MsgUpdateStatusResponse = {
  typeUrl: "/sentinel.plan.v2.MsgUpdateStatusResponse",
  encode(_: MsgUpdateStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateStatusResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateStatusResponse>): MsgUpdateStatusResponse {
    const message = createBaseMsgUpdateStatusResponse();
    return message;
  },
  fromAmino(_: MsgUpdateStatusResponseAmino): MsgUpdateStatusResponse {
    const message = createBaseMsgUpdateStatusResponse();
    return message;
  },
  toAmino(_: MsgUpdateStatusResponse): MsgUpdateStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateStatusResponseAminoMsg): MsgUpdateStatusResponse {
    return MsgUpdateStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateStatusResponseProtoMsg): MsgUpdateStatusResponse {
    return MsgUpdateStatusResponse.decode(message.value);
  },
  toProto(message: MsgUpdateStatusResponse): Uint8Array {
    return MsgUpdateStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateStatusResponse): MsgUpdateStatusResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgUpdateStatusResponse",
      value: MsgUpdateStatusResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLinkNodeResponse(): MsgLinkNodeResponse {
  return {};
}
export const MsgLinkNodeResponse = {
  typeUrl: "/sentinel.plan.v2.MsgLinkNodeResponse",
  encode(_: MsgLinkNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLinkNodeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLinkNodeResponse>): MsgLinkNodeResponse {
    const message = createBaseMsgLinkNodeResponse();
    return message;
  },
  fromAmino(_: MsgLinkNodeResponseAmino): MsgLinkNodeResponse {
    const message = createBaseMsgLinkNodeResponse();
    return message;
  },
  toAmino(_: MsgLinkNodeResponse): MsgLinkNodeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLinkNodeResponseAminoMsg): MsgLinkNodeResponse {
    return MsgLinkNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkNodeResponseProtoMsg): MsgLinkNodeResponse {
    return MsgLinkNodeResponse.decode(message.value);
  },
  toProto(message: MsgLinkNodeResponse): Uint8Array {
    return MsgLinkNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkNodeResponse): MsgLinkNodeResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgLinkNodeResponse",
      value: MsgLinkNodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnlinkNodeResponse(): MsgUnlinkNodeResponse {
  return {};
}
export const MsgUnlinkNodeResponse = {
  typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeResponse",
  encode(_: MsgUnlinkNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnlinkNodeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnlinkNodeResponse>): MsgUnlinkNodeResponse {
    const message = createBaseMsgUnlinkNodeResponse();
    return message;
  },
  fromAmino(_: MsgUnlinkNodeResponseAmino): MsgUnlinkNodeResponse {
    const message = createBaseMsgUnlinkNodeResponse();
    return message;
  },
  toAmino(_: MsgUnlinkNodeResponse): MsgUnlinkNodeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkNodeResponseAminoMsg): MsgUnlinkNodeResponse {
    return MsgUnlinkNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlinkNodeResponseProtoMsg): MsgUnlinkNodeResponse {
    return MsgUnlinkNodeResponse.decode(message.value);
  },
  toProto(message: MsgUnlinkNodeResponse): Uint8Array {
    return MsgUnlinkNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkNodeResponse): MsgUnlinkNodeResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgUnlinkNodeResponse",
      value: MsgUnlinkNodeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubscribeResponse(): MsgSubscribeResponse {
  return {};
}
export const MsgSubscribeResponse = {
  typeUrl: "/sentinel.plan.v2.MsgSubscribeResponse",
  encode(_: MsgSubscribeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubscribeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubscribeResponse>): MsgSubscribeResponse {
    const message = createBaseMsgSubscribeResponse();
    return message;
  },
  fromAmino(_: MsgSubscribeResponseAmino): MsgSubscribeResponse {
    const message = createBaseMsgSubscribeResponse();
    return message;
  },
  toAmino(_: MsgSubscribeResponse): MsgSubscribeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubscribeResponseAminoMsg): MsgSubscribeResponse {
    return MsgSubscribeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubscribeResponseProtoMsg): MsgSubscribeResponse {
    return MsgSubscribeResponse.decode(message.value);
  },
  toProto(message: MsgSubscribeResponse): Uint8Array {
    return MsgSubscribeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubscribeResponse): MsgSubscribeResponseProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.MsgSubscribeResponse",
      value: MsgSubscribeResponse.encode(message).finish()
    };
  }
};