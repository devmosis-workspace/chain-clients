import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequest {
  from: string;
  gigabytePrices: Coin[];
  hourlyPrices: Coin[];
  remoteUrl: string;
}
export interface MsgRegisterRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgRegisterRequest";
  value: Uint8Array;
}
/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequestAmino {
  from?: string;
  gigabyte_prices?: CoinAmino[];
  hourly_prices?: CoinAmino[];
  remote_url?: string;
}
export interface MsgRegisterRequestAminoMsg {
  type: "/sentinel.node.v2.MsgRegisterRequest";
  value: MsgRegisterRequestAmino;
}
/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequestSDKType {
  from: string;
  gigabyte_prices: CoinSDKType[];
  hourly_prices: CoinSDKType[];
  remote_url: string;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating the node details */
export interface MsgUpdateDetailsRequest {
  from: string;
  gigabytePrices: Coin[];
  hourlyPrices: Coin[];
  remoteUrl: string;
}
export interface MsgUpdateDetailsRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgUpdateDetailsRequest";
  value: Uint8Array;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating the node details */
export interface MsgUpdateDetailsRequestAmino {
  from?: string;
  gigabyte_prices?: CoinAmino[];
  hourly_prices?: CoinAmino[];
  remote_url?: string;
}
export interface MsgUpdateDetailsRequestAminoMsg {
  type: "/sentinel.node.v2.MsgUpdateDetailsRequest";
  value: MsgUpdateDetailsRequestAmino;
}
/** MsgUpdateDetailsRequest defines the SDK message for updating the node details */
export interface MsgUpdateDetailsRequestSDKType {
  from: string;
  gigabyte_prices: CoinSDKType[];
  hourly_prices: CoinSDKType[];
  remote_url: string;
}
/** MsgUpdateStatusRequest defines the SDK message for updating the node status */
export interface MsgUpdateStatusRequest {
  from: string;
  status: Status;
}
export interface MsgUpdateStatusRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgUpdateStatusRequest";
  value: Uint8Array;
}
/** MsgUpdateStatusRequest defines the SDK message for updating the node status */
export interface MsgUpdateStatusRequestAmino {
  from?: string;
  status?: Status;
}
export interface MsgUpdateStatusRequestAminoMsg {
  type: "/sentinel.node.v2.MsgUpdateStatusRequest";
  value: MsgUpdateStatusRequestAmino;
}
/** MsgUpdateStatusRequest defines the SDK message for updating the node status */
export interface MsgUpdateStatusRequestSDKType {
  from: string;
  status: Status;
}
/** MsgSubscribeRequest defines the SDK message for subscribe to a node */
export interface MsgSubscribeRequest {
  from: string;
  nodeAddress: string;
  gigabytes: bigint;
  hours: bigint;
  denom: string;
}
export interface MsgSubscribeRequestProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgSubscribeRequest";
  value: Uint8Array;
}
/** MsgSubscribeRequest defines the SDK message for subscribe to a node */
export interface MsgSubscribeRequestAmino {
  from?: string;
  node_address?: string;
  gigabytes?: string;
  hours?: string;
  denom?: string;
}
export interface MsgSubscribeRequestAminoMsg {
  type: "/sentinel.node.v2.MsgSubscribeRequest";
  value: MsgSubscribeRequestAmino;
}
/** MsgSubscribeRequest defines the SDK message for subscribe to a node */
export interface MsgSubscribeRequestSDKType {
  from: string;
  node_address: string;
  gigabytes: bigint;
  hours: bigint;
  denom: string;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {}
export interface MsgRegisterResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgRegisterResponse";
  value: Uint8Array;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseAmino {}
export interface MsgRegisterResponseAminoMsg {
  type: "/sentinel.node.v2.MsgRegisterResponse";
  value: MsgRegisterResponseAmino;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseSDKType {}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponse {}
export interface MsgUpdateDetailsResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgUpdateDetailsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseAmino {}
export interface MsgUpdateDetailsResponseAminoMsg {
  type: "/sentinel.node.v2.MsgUpdateDetailsResponse";
  value: MsgUpdateDetailsResponseAmino;
}
/**
 * MsgUpdateDetailsResponse defines the response of message
 * MsgUpdateDetailsRequest
 */
export interface MsgUpdateDetailsResponseSDKType {}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponse {}
export interface MsgUpdateStatusResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgUpdateStatusResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseAmino {}
export interface MsgUpdateStatusResponseAminoMsg {
  type: "/sentinel.node.v2.MsgUpdateStatusResponse";
  value: MsgUpdateStatusResponseAmino;
}
/**
 * MsgUpdateStatusResponse defines the response of message
 * MsgUpdateStatusRequest
 */
export interface MsgUpdateStatusResponseSDKType {}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponse {}
export interface MsgSubscribeResponseProtoMsg {
  typeUrl: "/sentinel.node.v2.MsgSubscribeResponse";
  value: Uint8Array;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseAmino {}
export interface MsgSubscribeResponseAminoMsg {
  type: "/sentinel.node.v2.MsgSubscribeResponse";
  value: MsgSubscribeResponseAmino;
}
/** MsgSubscribeResponse defines the response of message MsgSubscribeRequest */
export interface MsgSubscribeResponseSDKType {}
function createBaseMsgRegisterRequest(): MsgRegisterRequest {
  return {
    from: "",
    gigabytePrices: [],
    hourlyPrices: [],
    remoteUrl: ""
  };
}
export const MsgRegisterRequest = {
  typeUrl: "/sentinel.node.v2.MsgRegisterRequest",
  encode(message: MsgRegisterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.gigabytePrices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      gigabytePrices: Array.isArray(object?.gigabytePrices) ? object.gigabytePrices.map((e: any) => Coin.fromJSON(e)) : [],
      hourlyPrices: Array.isArray(object?.hourlyPrices) ? object.hourlyPrices.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? String(object.remoteUrl) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterRequest>): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    message.from = object.from ?? "";
    message.gigabytePrices = object.gigabytePrices?.map(e => Coin.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map(e => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterRequestAmino): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    message.gigabytePrices = object.gigabyte_prices?.map(e => Coin.fromAmino(e)) || [];
    message.hourlyPrices = object.hourly_prices?.map(e => Coin.fromAmino(e)) || [];
    if (object.remote_url !== undefined && object.remote_url !== null) {
      message.remoteUrl = object.remote_url;
    }
    return message;
  },
  toAmino(message: MsgRegisterRequest): MsgRegisterRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    if (message.gigabytePrices) {
      obj.gigabyte_prices = message.gigabytePrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gigabyte_prices = message.gigabytePrices;
    }
    if (message.hourlyPrices) {
      obj.hourly_prices = message.hourlyPrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.hourly_prices = message.hourlyPrices;
    }
    obj.remote_url = message.remoteUrl === "" ? undefined : message.remoteUrl;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterRequestAminoMsg): MsgRegisterRequest {
    return MsgRegisterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterRequestProtoMsg): MsgRegisterRequest {
    return MsgRegisterRequest.decode(message.value);
  },
  toProto(message: MsgRegisterRequest): Uint8Array {
    return MsgRegisterRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterRequest): MsgRegisterRequestProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.MsgRegisterRequest",
      value: MsgRegisterRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDetailsRequest(): MsgUpdateDetailsRequest {
  return {
    from: "",
    gigabytePrices: [],
    hourlyPrices: [],
    remoteUrl: ""
  };
}
export const MsgUpdateDetailsRequest = {
  typeUrl: "/sentinel.node.v2.MsgUpdateDetailsRequest",
  encode(message: MsgUpdateDetailsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.gigabytePrices) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.hourlyPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDetailsRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      gigabytePrices: Array.isArray(object?.gigabytePrices) ? object.gigabytePrices.map((e: any) => Coin.fromJSON(e)) : [],
      hourlyPrices: Array.isArray(object?.hourlyPrices) ? object.hourlyPrices.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? String(object.remoteUrl) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateDetailsRequest>): MsgUpdateDetailsRequest {
    const message = createBaseMsgUpdateDetailsRequest();
    message.from = object.from ?? "";
    message.gigabytePrices = object.gigabytePrices?.map(e => Coin.fromPartial(e)) || [];
    message.hourlyPrices = object.hourlyPrices?.map(e => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDetailsRequestAmino): MsgUpdateDetailsRequest {
    const message = createBaseMsgUpdateDetailsRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    message.gigabytePrices = object.gigabyte_prices?.map(e => Coin.fromAmino(e)) || [];
    message.hourlyPrices = object.hourly_prices?.map(e => Coin.fromAmino(e)) || [];
    if (object.remote_url !== undefined && object.remote_url !== null) {
      message.remoteUrl = object.remote_url;
    }
    return message;
  },
  toAmino(message: MsgUpdateDetailsRequest): MsgUpdateDetailsRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    if (message.gigabytePrices) {
      obj.gigabyte_prices = message.gigabytePrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gigabyte_prices = message.gigabytePrices;
    }
    if (message.hourlyPrices) {
      obj.hourly_prices = message.hourlyPrices.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.hourly_prices = message.hourlyPrices;
    }
    obj.remote_url = message.remoteUrl === "" ? undefined : message.remoteUrl;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDetailsRequestAminoMsg): MsgUpdateDetailsRequest {
    return MsgUpdateDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDetailsRequestProtoMsg): MsgUpdateDetailsRequest {
    return MsgUpdateDetailsRequest.decode(message.value);
  },
  toProto(message: MsgUpdateDetailsRequest): Uint8Array {
    return MsgUpdateDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDetailsRequest): MsgUpdateDetailsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.MsgUpdateDetailsRequest",
      value: MsgUpdateDetailsRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStatusRequest(): MsgUpdateStatusRequest {
  return {
    from: "",
    status: 0
  };
}
export const MsgUpdateStatusRequest = {
  typeUrl: "/sentinel.node.v2.MsgUpdateStatusRequest",
  encode(message: MsgUpdateStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateStatusRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<MsgUpdateStatusRequest>): MsgUpdateStatusRequest {
    const message = createBaseMsgUpdateStatusRequest();
    message.from = object.from ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateStatusRequestAmino): MsgUpdateStatusRequest {
    const message = createBaseMsgUpdateStatusRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgUpdateStatusRequest): MsgUpdateStatusRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
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
      typeUrl: "/sentinel.node.v2.MsgUpdateStatusRequest",
      value: MsgUpdateStatusRequest.encode(message).finish()
    };
  }
};
function createBaseMsgSubscribeRequest(): MsgSubscribeRequest {
  return {
    from: "",
    nodeAddress: "",
    gigabytes: BigInt(0),
    hours: BigInt(0),
    denom: ""
  };
}
export const MsgSubscribeRequest = {
  typeUrl: "/sentinel.node.v2.MsgSubscribeRequest",
  encode(message: MsgSubscribeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.gigabytes !== BigInt(0)) {
      writer.uint32(24).int64(message.gigabytes);
    }
    if (message.hours !== BigInt(0)) {
      writer.uint32(32).int64(message.hours);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubscribeRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      gigabytes: isSet(object.gigabytes) ? BigInt(object.gigabytes.toString()) : BigInt(0),
      hours: isSet(object.hours) ? BigInt(object.hours.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgSubscribeRequest>): MsgSubscribeRequest {
    const message = createBaseMsgSubscribeRequest();
    message.from = object.from ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.gigabytes = object.gigabytes !== undefined && object.gigabytes !== null ? BigInt(object.gigabytes.toString()) : BigInt(0);
    message.hours = object.hours !== undefined && object.hours !== null ? BigInt(object.hours.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgSubscribeRequestAmino): MsgSubscribeRequest {
    const message = createBaseMsgSubscribeRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.gigabytes !== undefined && object.gigabytes !== null) {
      message.gigabytes = BigInt(object.gigabytes);
    }
    if (object.hours !== undefined && object.hours !== null) {
      message.hours = BigInt(object.hours);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgSubscribeRequest): MsgSubscribeRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.gigabytes = message.gigabytes !== BigInt(0) ? message.gigabytes.toString() : undefined;
    obj.hours = message.hours !== BigInt(0) ? message.hours.toString() : undefined;
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
      typeUrl: "/sentinel.node.v2.MsgSubscribeRequest",
      value: MsgSubscribeRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterResponse(): MsgRegisterResponse {
  return {};
}
export const MsgRegisterResponse = {
  typeUrl: "/sentinel.node.v2.MsgRegisterResponse",
  encode(_: MsgRegisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  },
  fromAmino(_: MsgRegisterResponseAmino): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  },
  toAmino(_: MsgRegisterResponse): MsgRegisterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterResponseAminoMsg): MsgRegisterResponse {
    return MsgRegisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterResponseProtoMsg): MsgRegisterResponse {
    return MsgRegisterResponse.decode(message.value);
  },
  toProto(message: MsgRegisterResponse): Uint8Array {
    return MsgRegisterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterResponse): MsgRegisterResponseProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.MsgRegisterResponse",
      value: MsgRegisterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDetailsResponse(): MsgUpdateDetailsResponse {
  return {};
}
export const MsgUpdateDetailsResponse = {
  typeUrl: "/sentinel.node.v2.MsgUpdateDetailsResponse",
  encode(_: MsgUpdateDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDetailsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDetailsResponse>): MsgUpdateDetailsResponse {
    const message = createBaseMsgUpdateDetailsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDetailsResponseAmino): MsgUpdateDetailsResponse {
    const message = createBaseMsgUpdateDetailsResponse();
    return message;
  },
  toAmino(_: MsgUpdateDetailsResponse): MsgUpdateDetailsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDetailsResponseAminoMsg): MsgUpdateDetailsResponse {
    return MsgUpdateDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDetailsResponseProtoMsg): MsgUpdateDetailsResponse {
    return MsgUpdateDetailsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDetailsResponse): Uint8Array {
    return MsgUpdateDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDetailsResponse): MsgUpdateDetailsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.MsgUpdateDetailsResponse",
      value: MsgUpdateDetailsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateStatusResponse(): MsgUpdateStatusResponse {
  return {};
}
export const MsgUpdateStatusResponse = {
  typeUrl: "/sentinel.node.v2.MsgUpdateStatusResponse",
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
      typeUrl: "/sentinel.node.v2.MsgUpdateStatusResponse",
      value: MsgUpdateStatusResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubscribeResponse(): MsgSubscribeResponse {
  return {};
}
export const MsgSubscribeResponse = {
  typeUrl: "/sentinel.node.v2.MsgSubscribeResponse",
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
      typeUrl: "/sentinel.node.v2.MsgSubscribeResponse",
      value: MsgSubscribeResponse.encode(message).finish()
    };
  }
};