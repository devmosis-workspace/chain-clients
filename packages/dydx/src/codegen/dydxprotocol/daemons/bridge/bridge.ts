import { BridgeEvent, BridgeEventAmino, BridgeEventSDKType } from "../../bridge/bridge_event";
import { BinaryWriter } from "../../../binary";
/**
 * AddBridgeEventsRequest is a request message that contains a list of new
 * bridge events. The events should be contiguous and sorted by (unique) id.
 */
export interface AddBridgeEventsRequest {
  bridgeEvents: BridgeEvent[];
}
export interface AddBridgeEventsRequestProtoMsg {
  typeUrl: "/dydxprotocol.daemons.bridge.AddBridgeEventsRequest";
  value: Uint8Array;
}
/**
 * AddBridgeEventsRequest is a request message that contains a list of new
 * bridge events. The events should be contiguous and sorted by (unique) id.
 */
export interface AddBridgeEventsRequestAmino {
  bridge_events: BridgeEventAmino[];
}
export interface AddBridgeEventsRequestAminoMsg {
  type: "/dydxprotocol.daemons.bridge.AddBridgeEventsRequest";
  value: AddBridgeEventsRequestAmino;
}
/**
 * AddBridgeEventsRequest is a request message that contains a list of new
 * bridge events. The events should be contiguous and sorted by (unique) id.
 */
export interface AddBridgeEventsRequestSDKType {
  bridge_events: BridgeEventSDKType[];
}
/** AddBridgeEventsResponse is a response message for BridgeEventRequest. */
export interface AddBridgeEventsResponse {}
export interface AddBridgeEventsResponseProtoMsg {
  typeUrl: "/dydxprotocol.daemons.bridge.AddBridgeEventsResponse";
  value: Uint8Array;
}
/** AddBridgeEventsResponse is a response message for BridgeEventRequest. */
export interface AddBridgeEventsResponseAmino {}
export interface AddBridgeEventsResponseAminoMsg {
  type: "/dydxprotocol.daemons.bridge.AddBridgeEventsResponse";
  value: AddBridgeEventsResponseAmino;
}
/** AddBridgeEventsResponse is a response message for BridgeEventRequest. */
export interface AddBridgeEventsResponseSDKType {}
function createBaseAddBridgeEventsRequest(): AddBridgeEventsRequest {
  return {
    bridgeEvents: []
  };
}
export const AddBridgeEventsRequest = {
  typeUrl: "/dydxprotocol.daemons.bridge.AddBridgeEventsRequest",
  encode(message: AddBridgeEventsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.bridgeEvents) {
      BridgeEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AddBridgeEventsRequest {
    return {
      bridgeEvents: Array.isArray(object?.bridgeEvents) ? object.bridgeEvents.map((e: any) => BridgeEvent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AddBridgeEventsRequest>): AddBridgeEventsRequest {
    const message = createBaseAddBridgeEventsRequest();
    message.bridgeEvents = object.bridgeEvents?.map(e => BridgeEvent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AddBridgeEventsRequestAmino): AddBridgeEventsRequest {
    return {
      bridgeEvents: Array.isArray(object?.bridge_events) ? object.bridge_events.map((e: any) => BridgeEvent.fromAmino(e)) : []
    };
  },
  toAmino(message: AddBridgeEventsRequest): AddBridgeEventsRequestAmino {
    const obj: any = {};
    if (message.bridgeEvents) {
      obj.bridge_events = message.bridgeEvents.map(e => e ? BridgeEvent.toAmino(e) : undefined);
    } else {
      obj.bridge_events = [];
    }
    return obj;
  },
  fromAminoMsg(object: AddBridgeEventsRequestAminoMsg): AddBridgeEventsRequest {
    return AddBridgeEventsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AddBridgeEventsRequestProtoMsg): AddBridgeEventsRequest {
    return AddBridgeEventsRequest.decode(message.value);
  },
  toProto(message: AddBridgeEventsRequest): Uint8Array {
    return AddBridgeEventsRequest.encode(message).finish();
  },
  toProtoMsg(message: AddBridgeEventsRequest): AddBridgeEventsRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.bridge.AddBridgeEventsRequest",
      value: AddBridgeEventsRequest.encode(message).finish()
    };
  }
};
function createBaseAddBridgeEventsResponse(): AddBridgeEventsResponse {
  return {};
}
export const AddBridgeEventsResponse = {
  typeUrl: "/dydxprotocol.daemons.bridge.AddBridgeEventsResponse",
  encode(_: AddBridgeEventsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): AddBridgeEventsResponse {
    return {};
  },
  fromPartial(_: Partial<AddBridgeEventsResponse>): AddBridgeEventsResponse {
    const message = createBaseAddBridgeEventsResponse();
    return message;
  },
  fromAmino(_: AddBridgeEventsResponseAmino): AddBridgeEventsResponse {
    return {};
  },
  toAmino(_: AddBridgeEventsResponse): AddBridgeEventsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AddBridgeEventsResponseAminoMsg): AddBridgeEventsResponse {
    return AddBridgeEventsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AddBridgeEventsResponseProtoMsg): AddBridgeEventsResponse {
    return AddBridgeEventsResponse.decode(message.value);
  },
  toProto(message: AddBridgeEventsResponse): Uint8Array {
    return AddBridgeEventsResponse.encode(message).finish();
  },
  toProtoMsg(message: AddBridgeEventsResponse): AddBridgeEventsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.daemons.bridge.AddBridgeEventsResponse",
      value: AddBridgeEventsResponse.encode(message).finish()
    };
  }
};