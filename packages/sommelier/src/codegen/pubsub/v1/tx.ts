import { Subscriber, SubscriberAmino, SubscriberSDKType, PublisherIntent, PublisherIntentAmino, PublisherIntentSDKType, SubscriberIntent, SubscriberIntentAmino, SubscriberIntentSDKType } from "./pubsub";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface MsgRemovePublisherRequest {
  publisherDomain: string;
  signer: string;
}
export interface MsgRemovePublisherRequestProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemovePublisherRequest";
  value: Uint8Array;
}
export interface MsgRemovePublisherRequestAmino {
  publisher_domain?: string;
  signer?: string;
}
export interface MsgRemovePublisherRequestAminoMsg {
  type: "/pubsub.v1.MsgRemovePublisherRequest";
  value: MsgRemovePublisherRequestAmino;
}
export interface MsgRemovePublisherRequestSDKType {
  publisher_domain: string;
  signer: string;
}
export interface MsgRemovePublisherResponse {}
export interface MsgRemovePublisherResponseProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemovePublisherResponse";
  value: Uint8Array;
}
export interface MsgRemovePublisherResponseAmino {}
export interface MsgRemovePublisherResponseAminoMsg {
  type: "/pubsub.v1.MsgRemovePublisherResponse";
  value: MsgRemovePublisherResponseAmino;
}
export interface MsgRemovePublisherResponseSDKType {}
export interface MsgAddSubscriberRequest {
  subscriber?: Subscriber;
  signer: string;
}
export interface MsgAddSubscriberRequestProtoMsg {
  typeUrl: "/pubsub.v1.MsgAddSubscriberRequest";
  value: Uint8Array;
}
export interface MsgAddSubscriberRequestAmino {
  subscriber?: SubscriberAmino;
  signer?: string;
}
export interface MsgAddSubscriberRequestAminoMsg {
  type: "/pubsub.v1.MsgAddSubscriberRequest";
  value: MsgAddSubscriberRequestAmino;
}
export interface MsgAddSubscriberRequestSDKType {
  subscriber?: SubscriberSDKType;
  signer: string;
}
export interface MsgAddSubscriberResponse {}
export interface MsgAddSubscriberResponseProtoMsg {
  typeUrl: "/pubsub.v1.MsgAddSubscriberResponse";
  value: Uint8Array;
}
export interface MsgAddSubscriberResponseAmino {}
export interface MsgAddSubscriberResponseAminoMsg {
  type: "/pubsub.v1.MsgAddSubscriberResponse";
  value: MsgAddSubscriberResponseAmino;
}
export interface MsgAddSubscriberResponseSDKType {}
export interface MsgRemoveSubscriberRequest {
  subscriberAddress: string;
  signer: string;
}
export interface MsgRemoveSubscriberRequestProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest";
  value: Uint8Array;
}
export interface MsgRemoveSubscriberRequestAmino {
  subscriber_address?: string;
  signer?: string;
}
export interface MsgRemoveSubscriberRequestAminoMsg {
  type: "/pubsub.v1.MsgRemoveSubscriberRequest";
  value: MsgRemoveSubscriberRequestAmino;
}
export interface MsgRemoveSubscriberRequestSDKType {
  subscriber_address: string;
  signer: string;
}
export interface MsgRemoveSubscriberResponse {}
export interface MsgRemoveSubscriberResponseProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberResponse";
  value: Uint8Array;
}
export interface MsgRemoveSubscriberResponseAmino {}
export interface MsgRemoveSubscriberResponseAminoMsg {
  type: "/pubsub.v1.MsgRemoveSubscriberResponse";
  value: MsgRemoveSubscriberResponseAmino;
}
export interface MsgRemoveSubscriberResponseSDKType {}
export interface MsgAddPublisherIntentRequest {
  publisherIntent?: PublisherIntent;
  signer: string;
}
export interface MsgAddPublisherIntentRequestProtoMsg {
  typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest";
  value: Uint8Array;
}
export interface MsgAddPublisherIntentRequestAmino {
  publisher_intent?: PublisherIntentAmino;
  signer?: string;
}
export interface MsgAddPublisherIntentRequestAminoMsg {
  type: "/pubsub.v1.MsgAddPublisherIntentRequest";
  value: MsgAddPublisherIntentRequestAmino;
}
export interface MsgAddPublisherIntentRequestSDKType {
  publisher_intent?: PublisherIntentSDKType;
  signer: string;
}
export interface MsgAddPublisherIntentResponse {}
export interface MsgAddPublisherIntentResponseProtoMsg {
  typeUrl: "/pubsub.v1.MsgAddPublisherIntentResponse";
  value: Uint8Array;
}
export interface MsgAddPublisherIntentResponseAmino {}
export interface MsgAddPublisherIntentResponseAminoMsg {
  type: "/pubsub.v1.MsgAddPublisherIntentResponse";
  value: MsgAddPublisherIntentResponseAmino;
}
export interface MsgAddPublisherIntentResponseSDKType {}
export interface MsgRemovePublisherIntentRequest {
  subscriptionId: string;
  publisherDomain: string;
  signer: string;
}
export interface MsgRemovePublisherIntentRequestProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest";
  value: Uint8Array;
}
export interface MsgRemovePublisherIntentRequestAmino {
  subscription_id?: string;
  publisher_domain?: string;
  signer?: string;
}
export interface MsgRemovePublisherIntentRequestAminoMsg {
  type: "/pubsub.v1.MsgRemovePublisherIntentRequest";
  value: MsgRemovePublisherIntentRequestAmino;
}
export interface MsgRemovePublisherIntentRequestSDKType {
  subscription_id: string;
  publisher_domain: string;
  signer: string;
}
export interface MsgRemovePublisherIntentResponse {}
export interface MsgRemovePublisherIntentResponseProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemovePublisherIntentResponse";
  value: Uint8Array;
}
export interface MsgRemovePublisherIntentResponseAmino {}
export interface MsgRemovePublisherIntentResponseAminoMsg {
  type: "/pubsub.v1.MsgRemovePublisherIntentResponse";
  value: MsgRemovePublisherIntentResponseAmino;
}
export interface MsgRemovePublisherIntentResponseSDKType {}
export interface MsgAddSubscriberIntentRequest {
  subscriberIntent?: SubscriberIntent;
  signer: string;
}
export interface MsgAddSubscriberIntentRequestProtoMsg {
  typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest";
  value: Uint8Array;
}
export interface MsgAddSubscriberIntentRequestAmino {
  subscriber_intent?: SubscriberIntentAmino;
  signer?: string;
}
export interface MsgAddSubscriberIntentRequestAminoMsg {
  type: "/pubsub.v1.MsgAddSubscriberIntentRequest";
  value: MsgAddSubscriberIntentRequestAmino;
}
export interface MsgAddSubscriberIntentRequestSDKType {
  subscriber_intent?: SubscriberIntentSDKType;
  signer: string;
}
export interface MsgAddSubscriberIntentResponse {}
export interface MsgAddSubscriberIntentResponseProtoMsg {
  typeUrl: "/pubsub.v1.MsgAddSubscriberIntentResponse";
  value: Uint8Array;
}
export interface MsgAddSubscriberIntentResponseAmino {}
export interface MsgAddSubscriberIntentResponseAminoMsg {
  type: "/pubsub.v1.MsgAddSubscriberIntentResponse";
  value: MsgAddSubscriberIntentResponseAmino;
}
export interface MsgAddSubscriberIntentResponseSDKType {}
export interface MsgRemoveSubscriberIntentRequest {
  subscriptionId: string;
  subscriberAddress: string;
  signer: string;
}
export interface MsgRemoveSubscriberIntentRequestProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest";
  value: Uint8Array;
}
export interface MsgRemoveSubscriberIntentRequestAmino {
  subscription_id?: string;
  subscriber_address?: string;
  signer?: string;
}
export interface MsgRemoveSubscriberIntentRequestAminoMsg {
  type: "/pubsub.v1.MsgRemoveSubscriberIntentRequest";
  value: MsgRemoveSubscriberIntentRequestAmino;
}
export interface MsgRemoveSubscriberIntentRequestSDKType {
  subscription_id: string;
  subscriber_address: string;
  signer: string;
}
export interface MsgRemoveSubscriberIntentResponse {}
export interface MsgRemoveSubscriberIntentResponseProtoMsg {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentResponse";
  value: Uint8Array;
}
export interface MsgRemoveSubscriberIntentResponseAmino {}
export interface MsgRemoveSubscriberIntentResponseAminoMsg {
  type: "/pubsub.v1.MsgRemoveSubscriberIntentResponse";
  value: MsgRemoveSubscriberIntentResponseAmino;
}
export interface MsgRemoveSubscriberIntentResponseSDKType {}
function createBaseMsgRemovePublisherRequest(): MsgRemovePublisherRequest {
  return {
    publisherDomain: "",
    signer: ""
  };
}
export const MsgRemovePublisherRequest = {
  typeUrl: "/pubsub.v1.MsgRemovePublisherRequest",
  encode(message: MsgRemovePublisherRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisherDomain !== "") {
      writer.uint32(10).string(message.publisherDomain);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemovePublisherRequest {
    return {
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgRemovePublisherRequest>): MsgRemovePublisherRequest {
    const message = createBaseMsgRemovePublisherRequest();
    message.publisherDomain = object.publisherDomain ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRemovePublisherRequestAmino): MsgRemovePublisherRequest {
    const message = createBaseMsgRemovePublisherRequest();
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRemovePublisherRequest): MsgRemovePublisherRequestAmino {
    const obj: any = {};
    obj.publisher_domain = message.publisherDomain;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRemovePublisherRequestAminoMsg): MsgRemovePublisherRequest {
    return MsgRemovePublisherRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePublisherRequestProtoMsg): MsgRemovePublisherRequest {
    return MsgRemovePublisherRequest.decode(message.value);
  },
  toProto(message: MsgRemovePublisherRequest): Uint8Array {
    return MsgRemovePublisherRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePublisherRequest): MsgRemovePublisherRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemovePublisherRequest",
      value: MsgRemovePublisherRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePublisherResponse(): MsgRemovePublisherResponse {
  return {};
}
export const MsgRemovePublisherResponse = {
  typeUrl: "/pubsub.v1.MsgRemovePublisherResponse",
  encode(_: MsgRemovePublisherResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemovePublisherResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemovePublisherResponse>): MsgRemovePublisherResponse {
    const message = createBaseMsgRemovePublisherResponse();
    return message;
  },
  fromAmino(_: MsgRemovePublisherResponseAmino): MsgRemovePublisherResponse {
    const message = createBaseMsgRemovePublisherResponse();
    return message;
  },
  toAmino(_: MsgRemovePublisherResponse): MsgRemovePublisherResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePublisherResponseAminoMsg): MsgRemovePublisherResponse {
    return MsgRemovePublisherResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePublisherResponseProtoMsg): MsgRemovePublisherResponse {
    return MsgRemovePublisherResponse.decode(message.value);
  },
  toProto(message: MsgRemovePublisherResponse): Uint8Array {
    return MsgRemovePublisherResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePublisherResponse): MsgRemovePublisherResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemovePublisherResponse",
      value: MsgRemovePublisherResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddSubscriberRequest(): MsgAddSubscriberRequest {
  return {
    subscriber: undefined,
    signer: ""
  };
}
export const MsgAddSubscriberRequest = {
  typeUrl: "/pubsub.v1.MsgAddSubscriberRequest",
  encode(message: MsgAddSubscriberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriber !== undefined) {
      Subscriber.encode(message.subscriber, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddSubscriberRequest {
    return {
      subscriber: isSet(object.subscriber) ? Subscriber.fromJSON(object.subscriber) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgAddSubscriberRequest>): MsgAddSubscriberRequest {
    const message = createBaseMsgAddSubscriberRequest();
    message.subscriber = object.subscriber !== undefined && object.subscriber !== null ? Subscriber.fromPartial(object.subscriber) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgAddSubscriberRequestAmino): MsgAddSubscriberRequest {
    const message = createBaseMsgAddSubscriberRequest();
    if (object.subscriber !== undefined && object.subscriber !== null) {
      message.subscriber = Subscriber.fromAmino(object.subscriber);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgAddSubscriberRequest): MsgAddSubscriberRequestAmino {
    const obj: any = {};
    obj.subscriber = message.subscriber ? Subscriber.toAmino(message.subscriber) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAddSubscriberRequestAminoMsg): MsgAddSubscriberRequest {
    return MsgAddSubscriberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSubscriberRequestProtoMsg): MsgAddSubscriberRequest {
    return MsgAddSubscriberRequest.decode(message.value);
  },
  toProto(message: MsgAddSubscriberRequest): Uint8Array {
    return MsgAddSubscriberRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSubscriberRequest): MsgAddSubscriberRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgAddSubscriberRequest",
      value: MsgAddSubscriberRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddSubscriberResponse(): MsgAddSubscriberResponse {
  return {};
}
export const MsgAddSubscriberResponse = {
  typeUrl: "/pubsub.v1.MsgAddSubscriberResponse",
  encode(_: MsgAddSubscriberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddSubscriberResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddSubscriberResponse>): MsgAddSubscriberResponse {
    const message = createBaseMsgAddSubscriberResponse();
    return message;
  },
  fromAmino(_: MsgAddSubscriberResponseAmino): MsgAddSubscriberResponse {
    const message = createBaseMsgAddSubscriberResponse();
    return message;
  },
  toAmino(_: MsgAddSubscriberResponse): MsgAddSubscriberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddSubscriberResponseAminoMsg): MsgAddSubscriberResponse {
    return MsgAddSubscriberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSubscriberResponseProtoMsg): MsgAddSubscriberResponse {
    return MsgAddSubscriberResponse.decode(message.value);
  },
  toProto(message: MsgAddSubscriberResponse): Uint8Array {
    return MsgAddSubscriberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSubscriberResponse): MsgAddSubscriberResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgAddSubscriberResponse",
      value: MsgAddSubscriberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveSubscriberRequest(): MsgRemoveSubscriberRequest {
  return {
    subscriberAddress: "",
    signer: ""
  };
}
export const MsgRemoveSubscriberRequest = {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest",
  encode(message: MsgRemoveSubscriberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberAddress !== "") {
      writer.uint32(10).string(message.subscriberAddress);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveSubscriberRequest {
    return {
      subscriberAddress: isSet(object.subscriberAddress) ? String(object.subscriberAddress) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveSubscriberRequest>): MsgRemoveSubscriberRequest {
    const message = createBaseMsgRemoveSubscriberRequest();
    message.subscriberAddress = object.subscriberAddress ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveSubscriberRequestAmino): MsgRemoveSubscriberRequest {
    const message = createBaseMsgRemoveSubscriberRequest();
    if (object.subscriber_address !== undefined && object.subscriber_address !== null) {
      message.subscriberAddress = object.subscriber_address;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRemoveSubscriberRequest): MsgRemoveSubscriberRequestAmino {
    const obj: any = {};
    obj.subscriber_address = message.subscriberAddress;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveSubscriberRequestAminoMsg): MsgRemoveSubscriberRequest {
    return MsgRemoveSubscriberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveSubscriberRequestProtoMsg): MsgRemoveSubscriberRequest {
    return MsgRemoveSubscriberRequest.decode(message.value);
  },
  toProto(message: MsgRemoveSubscriberRequest): Uint8Array {
    return MsgRemoveSubscriberRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveSubscriberRequest): MsgRemoveSubscriberRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest",
      value: MsgRemoveSubscriberRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveSubscriberResponse(): MsgRemoveSubscriberResponse {
  return {};
}
export const MsgRemoveSubscriberResponse = {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberResponse",
  encode(_: MsgRemoveSubscriberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveSubscriberResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveSubscriberResponse>): MsgRemoveSubscriberResponse {
    const message = createBaseMsgRemoveSubscriberResponse();
    return message;
  },
  fromAmino(_: MsgRemoveSubscriberResponseAmino): MsgRemoveSubscriberResponse {
    const message = createBaseMsgRemoveSubscriberResponse();
    return message;
  },
  toAmino(_: MsgRemoveSubscriberResponse): MsgRemoveSubscriberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveSubscriberResponseAminoMsg): MsgRemoveSubscriberResponse {
    return MsgRemoveSubscriberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveSubscriberResponseProtoMsg): MsgRemoveSubscriberResponse {
    return MsgRemoveSubscriberResponse.decode(message.value);
  },
  toProto(message: MsgRemoveSubscriberResponse): Uint8Array {
    return MsgRemoveSubscriberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveSubscriberResponse): MsgRemoveSubscriberResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemoveSubscriberResponse",
      value: MsgRemoveSubscriberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddPublisherIntentRequest(): MsgAddPublisherIntentRequest {
  return {
    publisherIntent: undefined,
    signer: ""
  };
}
export const MsgAddPublisherIntentRequest = {
  typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest",
  encode(message: MsgAddPublisherIntentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisherIntent !== undefined) {
      PublisherIntent.encode(message.publisherIntent, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddPublisherIntentRequest {
    return {
      publisherIntent: isSet(object.publisherIntent) ? PublisherIntent.fromJSON(object.publisherIntent) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgAddPublisherIntentRequest>): MsgAddPublisherIntentRequest {
    const message = createBaseMsgAddPublisherIntentRequest();
    message.publisherIntent = object.publisherIntent !== undefined && object.publisherIntent !== null ? PublisherIntent.fromPartial(object.publisherIntent) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgAddPublisherIntentRequestAmino): MsgAddPublisherIntentRequest {
    const message = createBaseMsgAddPublisherIntentRequest();
    if (object.publisher_intent !== undefined && object.publisher_intent !== null) {
      message.publisherIntent = PublisherIntent.fromAmino(object.publisher_intent);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgAddPublisherIntentRequest): MsgAddPublisherIntentRequestAmino {
    const obj: any = {};
    obj.publisher_intent = message.publisherIntent ? PublisherIntent.toAmino(message.publisherIntent) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAddPublisherIntentRequestAminoMsg): MsgAddPublisherIntentRequest {
    return MsgAddPublisherIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPublisherIntentRequestProtoMsg): MsgAddPublisherIntentRequest {
    return MsgAddPublisherIntentRequest.decode(message.value);
  },
  toProto(message: MsgAddPublisherIntentRequest): Uint8Array {
    return MsgAddPublisherIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPublisherIntentRequest): MsgAddPublisherIntentRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest",
      value: MsgAddPublisherIntentRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddPublisherIntentResponse(): MsgAddPublisherIntentResponse {
  return {};
}
export const MsgAddPublisherIntentResponse = {
  typeUrl: "/pubsub.v1.MsgAddPublisherIntentResponse",
  encode(_: MsgAddPublisherIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddPublisherIntentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddPublisherIntentResponse>): MsgAddPublisherIntentResponse {
    const message = createBaseMsgAddPublisherIntentResponse();
    return message;
  },
  fromAmino(_: MsgAddPublisherIntentResponseAmino): MsgAddPublisherIntentResponse {
    const message = createBaseMsgAddPublisherIntentResponse();
    return message;
  },
  toAmino(_: MsgAddPublisherIntentResponse): MsgAddPublisherIntentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPublisherIntentResponseAminoMsg): MsgAddPublisherIntentResponse {
    return MsgAddPublisherIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPublisherIntentResponseProtoMsg): MsgAddPublisherIntentResponse {
    return MsgAddPublisherIntentResponse.decode(message.value);
  },
  toProto(message: MsgAddPublisherIntentResponse): Uint8Array {
    return MsgAddPublisherIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPublisherIntentResponse): MsgAddPublisherIntentResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgAddPublisherIntentResponse",
      value: MsgAddPublisherIntentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePublisherIntentRequest(): MsgRemovePublisherIntentRequest {
  return {
    subscriptionId: "",
    publisherDomain: "",
    signer: ""
  };
}
export const MsgRemovePublisherIntentRequest = {
  typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest",
  encode(message: MsgRemovePublisherIntentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    if (message.publisherDomain !== "") {
      writer.uint32(18).string(message.publisherDomain);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemovePublisherIntentRequest {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgRemovePublisherIntentRequest>): MsgRemovePublisherIntentRequest {
    const message = createBaseMsgRemovePublisherIntentRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    message.publisherDomain = object.publisherDomain ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRemovePublisherIntentRequestAmino): MsgRemovePublisherIntentRequest {
    const message = createBaseMsgRemovePublisherIntentRequest();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRemovePublisherIntentRequest): MsgRemovePublisherIntentRequestAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    obj.publisher_domain = message.publisherDomain;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRemovePublisherIntentRequestAminoMsg): MsgRemovePublisherIntentRequest {
    return MsgRemovePublisherIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePublisherIntentRequestProtoMsg): MsgRemovePublisherIntentRequest {
    return MsgRemovePublisherIntentRequest.decode(message.value);
  },
  toProto(message: MsgRemovePublisherIntentRequest): Uint8Array {
    return MsgRemovePublisherIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePublisherIntentRequest): MsgRemovePublisherIntentRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest",
      value: MsgRemovePublisherIntentRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePublisherIntentResponse(): MsgRemovePublisherIntentResponse {
  return {};
}
export const MsgRemovePublisherIntentResponse = {
  typeUrl: "/pubsub.v1.MsgRemovePublisherIntentResponse",
  encode(_: MsgRemovePublisherIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemovePublisherIntentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemovePublisherIntentResponse>): MsgRemovePublisherIntentResponse {
    const message = createBaseMsgRemovePublisherIntentResponse();
    return message;
  },
  fromAmino(_: MsgRemovePublisherIntentResponseAmino): MsgRemovePublisherIntentResponse {
    const message = createBaseMsgRemovePublisherIntentResponse();
    return message;
  },
  toAmino(_: MsgRemovePublisherIntentResponse): MsgRemovePublisherIntentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePublisherIntentResponseAminoMsg): MsgRemovePublisherIntentResponse {
    return MsgRemovePublisherIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePublisherIntentResponseProtoMsg): MsgRemovePublisherIntentResponse {
    return MsgRemovePublisherIntentResponse.decode(message.value);
  },
  toProto(message: MsgRemovePublisherIntentResponse): Uint8Array {
    return MsgRemovePublisherIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePublisherIntentResponse): MsgRemovePublisherIntentResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemovePublisherIntentResponse",
      value: MsgRemovePublisherIntentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddSubscriberIntentRequest(): MsgAddSubscriberIntentRequest {
  return {
    subscriberIntent: undefined,
    signer: ""
  };
}
export const MsgAddSubscriberIntentRequest = {
  typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest",
  encode(message: MsgAddSubscriberIntentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberIntent !== undefined) {
      SubscriberIntent.encode(message.subscriberIntent, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddSubscriberIntentRequest {
    return {
      subscriberIntent: isSet(object.subscriberIntent) ? SubscriberIntent.fromJSON(object.subscriberIntent) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgAddSubscriberIntentRequest>): MsgAddSubscriberIntentRequest {
    const message = createBaseMsgAddSubscriberIntentRequest();
    message.subscriberIntent = object.subscriberIntent !== undefined && object.subscriberIntent !== null ? SubscriberIntent.fromPartial(object.subscriberIntent) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgAddSubscriberIntentRequestAmino): MsgAddSubscriberIntentRequest {
    const message = createBaseMsgAddSubscriberIntentRequest();
    if (object.subscriber_intent !== undefined && object.subscriber_intent !== null) {
      message.subscriberIntent = SubscriberIntent.fromAmino(object.subscriber_intent);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgAddSubscriberIntentRequest): MsgAddSubscriberIntentRequestAmino {
    const obj: any = {};
    obj.subscriber_intent = message.subscriberIntent ? SubscriberIntent.toAmino(message.subscriberIntent) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAddSubscriberIntentRequestAminoMsg): MsgAddSubscriberIntentRequest {
    return MsgAddSubscriberIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSubscriberIntentRequestProtoMsg): MsgAddSubscriberIntentRequest {
    return MsgAddSubscriberIntentRequest.decode(message.value);
  },
  toProto(message: MsgAddSubscriberIntentRequest): Uint8Array {
    return MsgAddSubscriberIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSubscriberIntentRequest): MsgAddSubscriberIntentRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest",
      value: MsgAddSubscriberIntentRequest.encode(message).finish()
    };
  }
};
function createBaseMsgAddSubscriberIntentResponse(): MsgAddSubscriberIntentResponse {
  return {};
}
export const MsgAddSubscriberIntentResponse = {
  typeUrl: "/pubsub.v1.MsgAddSubscriberIntentResponse",
  encode(_: MsgAddSubscriberIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddSubscriberIntentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddSubscriberIntentResponse>): MsgAddSubscriberIntentResponse {
    const message = createBaseMsgAddSubscriberIntentResponse();
    return message;
  },
  fromAmino(_: MsgAddSubscriberIntentResponseAmino): MsgAddSubscriberIntentResponse {
    const message = createBaseMsgAddSubscriberIntentResponse();
    return message;
  },
  toAmino(_: MsgAddSubscriberIntentResponse): MsgAddSubscriberIntentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddSubscriberIntentResponseAminoMsg): MsgAddSubscriberIntentResponse {
    return MsgAddSubscriberIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSubscriberIntentResponseProtoMsg): MsgAddSubscriberIntentResponse {
    return MsgAddSubscriberIntentResponse.decode(message.value);
  },
  toProto(message: MsgAddSubscriberIntentResponse): Uint8Array {
    return MsgAddSubscriberIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSubscriberIntentResponse): MsgAddSubscriberIntentResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgAddSubscriberIntentResponse",
      value: MsgAddSubscriberIntentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveSubscriberIntentRequest(): MsgRemoveSubscriberIntentRequest {
  return {
    subscriptionId: "",
    subscriberAddress: "",
    signer: ""
  };
}
export const MsgRemoveSubscriberIntentRequest = {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest",
  encode(message: MsgRemoveSubscriberIntentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    if (message.subscriberAddress !== "") {
      writer.uint32(18).string(message.subscriberAddress);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveSubscriberIntentRequest {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      subscriberAddress: isSet(object.subscriberAddress) ? String(object.subscriberAddress) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveSubscriberIntentRequest>): MsgRemoveSubscriberIntentRequest {
    const message = createBaseMsgRemoveSubscriberIntentRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    message.subscriberAddress = object.subscriberAddress ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveSubscriberIntentRequestAmino): MsgRemoveSubscriberIntentRequest {
    const message = createBaseMsgRemoveSubscriberIntentRequest();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    if (object.subscriber_address !== undefined && object.subscriber_address !== null) {
      message.subscriberAddress = object.subscriber_address;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRemoveSubscriberIntentRequest): MsgRemoveSubscriberIntentRequestAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    obj.subscriber_address = message.subscriberAddress;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveSubscriberIntentRequestAminoMsg): MsgRemoveSubscriberIntentRequest {
    return MsgRemoveSubscriberIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveSubscriberIntentRequestProtoMsg): MsgRemoveSubscriberIntentRequest {
    return MsgRemoveSubscriberIntentRequest.decode(message.value);
  },
  toProto(message: MsgRemoveSubscriberIntentRequest): Uint8Array {
    return MsgRemoveSubscriberIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveSubscriberIntentRequest): MsgRemoveSubscriberIntentRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest",
      value: MsgRemoveSubscriberIntentRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveSubscriberIntentResponse(): MsgRemoveSubscriberIntentResponse {
  return {};
}
export const MsgRemoveSubscriberIntentResponse = {
  typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentResponse",
  encode(_: MsgRemoveSubscriberIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveSubscriberIntentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveSubscriberIntentResponse>): MsgRemoveSubscriberIntentResponse {
    const message = createBaseMsgRemoveSubscriberIntentResponse();
    return message;
  },
  fromAmino(_: MsgRemoveSubscriberIntentResponseAmino): MsgRemoveSubscriberIntentResponse {
    const message = createBaseMsgRemoveSubscriberIntentResponse();
    return message;
  },
  toAmino(_: MsgRemoveSubscriberIntentResponse): MsgRemoveSubscriberIntentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveSubscriberIntentResponseAminoMsg): MsgRemoveSubscriberIntentResponse {
    return MsgRemoveSubscriberIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveSubscriberIntentResponseProtoMsg): MsgRemoveSubscriberIntentResponse {
    return MsgRemoveSubscriberIntentResponse.decode(message.value);
  },
  toProto(message: MsgRemoveSubscriberIntentResponse): Uint8Array {
    return MsgRemoveSubscriberIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveSubscriberIntentResponse): MsgRemoveSubscriberIntentResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentResponse",
      value: MsgRemoveSubscriberIntentResponse.encode(message).finish()
    };
  }
};