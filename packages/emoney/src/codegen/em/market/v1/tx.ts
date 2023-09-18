import { TimeInForce, timeInForceFromJSON } from "./market";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface MsgAddLimitOrder {
  owner: string;
  clientOrderId: string;
  timeInForce: TimeInForce;
  source: Coin;
  destination: Coin;
}
export interface MsgAddLimitOrderProtoMsg {
  typeUrl: "/em.market.v1.MsgAddLimitOrder";
  value: Uint8Array;
}
export interface MsgAddLimitOrderAmino {
  owner: string;
  client_order_id: string;
  time_in_force: TimeInForce;
  source?: CoinAmino;
  destination?: CoinAmino;
}
export interface MsgAddLimitOrderAminoMsg {
  type: "/em.market.v1.MsgAddLimitOrder";
  value: MsgAddLimitOrderAmino;
}
export interface MsgAddLimitOrderSDKType {
  owner: string;
  client_order_id: string;
  time_in_force: TimeInForce;
  source: CoinSDKType;
  destination: CoinSDKType;
}
export interface MsgAddLimitOrderResponse {}
export interface MsgAddLimitOrderResponseProtoMsg {
  typeUrl: "/em.market.v1.MsgAddLimitOrderResponse";
  value: Uint8Array;
}
export interface MsgAddLimitOrderResponseAmino {}
export interface MsgAddLimitOrderResponseAminoMsg {
  type: "/em.market.v1.MsgAddLimitOrderResponse";
  value: MsgAddLimitOrderResponseAmino;
}
export interface MsgAddLimitOrderResponseSDKType {}
export interface MsgAddMarketOrder {
  owner: string;
  clientOrderId: string;
  timeInForce: TimeInForce;
  source: string;
  destination: Coin;
  maximumSlippage: string;
}
export interface MsgAddMarketOrderProtoMsg {
  typeUrl: "/em.market.v1.MsgAddMarketOrder";
  value: Uint8Array;
}
export interface MsgAddMarketOrderAmino {
  owner: string;
  client_order_id: string;
  time_in_force: TimeInForce;
  source: string;
  destination?: CoinAmino;
  maximum_slippage: string;
}
export interface MsgAddMarketOrderAminoMsg {
  type: "/em.market.v1.MsgAddMarketOrder";
  value: MsgAddMarketOrderAmino;
}
export interface MsgAddMarketOrderSDKType {
  owner: string;
  client_order_id: string;
  time_in_force: TimeInForce;
  source: string;
  destination: CoinSDKType;
  maximum_slippage: string;
}
export interface MsgAddMarketOrderResponse {}
export interface MsgAddMarketOrderResponseProtoMsg {
  typeUrl: "/em.market.v1.MsgAddMarketOrderResponse";
  value: Uint8Array;
}
export interface MsgAddMarketOrderResponseAmino {}
export interface MsgAddMarketOrderResponseAminoMsg {
  type: "/em.market.v1.MsgAddMarketOrderResponse";
  value: MsgAddMarketOrderResponseAmino;
}
export interface MsgAddMarketOrderResponseSDKType {}
export interface MsgCancelOrder {
  owner: string;
  clientOrderId: string;
}
export interface MsgCancelOrderProtoMsg {
  typeUrl: "/em.market.v1.MsgCancelOrder";
  value: Uint8Array;
}
export interface MsgCancelOrderAmino {
  owner: string;
  client_order_id: string;
}
export interface MsgCancelOrderAminoMsg {
  type: "/em.market.v1.MsgCancelOrder";
  value: MsgCancelOrderAmino;
}
export interface MsgCancelOrderSDKType {
  owner: string;
  client_order_id: string;
}
export interface MsgCancelOrderResponse {}
export interface MsgCancelOrderResponseProtoMsg {
  typeUrl: "/em.market.v1.MsgCancelOrderResponse";
  value: Uint8Array;
}
export interface MsgCancelOrderResponseAmino {}
export interface MsgCancelOrderResponseAminoMsg {
  type: "/em.market.v1.MsgCancelOrderResponse";
  value: MsgCancelOrderResponseAmino;
}
export interface MsgCancelOrderResponseSDKType {}
export interface MsgCancelReplaceLimitOrder {
  owner: string;
  originalClientOrderId: string;
  newClientOrderId: string;
  timeInForce: TimeInForce;
  source: Coin;
  destination: Coin;
}
export interface MsgCancelReplaceLimitOrderProtoMsg {
  typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder";
  value: Uint8Array;
}
export interface MsgCancelReplaceLimitOrderAmino {
  owner: string;
  original_client_order_id: string;
  new_client_order_id: string;
  time_in_force: TimeInForce;
  source?: CoinAmino;
  destination?: CoinAmino;
}
export interface MsgCancelReplaceLimitOrderAminoMsg {
  type: "/em.market.v1.MsgCancelReplaceLimitOrder";
  value: MsgCancelReplaceLimitOrderAmino;
}
export interface MsgCancelReplaceLimitOrderSDKType {
  owner: string;
  original_client_order_id: string;
  new_client_order_id: string;
  time_in_force: TimeInForce;
  source: CoinSDKType;
  destination: CoinSDKType;
}
export interface MsgCancelReplaceLimitOrderResponse {}
export interface MsgCancelReplaceLimitOrderResponseProtoMsg {
  typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrderResponse";
  value: Uint8Array;
}
export interface MsgCancelReplaceLimitOrderResponseAmino {}
export interface MsgCancelReplaceLimitOrderResponseAminoMsg {
  type: "/em.market.v1.MsgCancelReplaceLimitOrderResponse";
  value: MsgCancelReplaceLimitOrderResponseAmino;
}
export interface MsgCancelReplaceLimitOrderResponseSDKType {}
export interface MsgCancelReplaceMarketOrder {
  owner: string;
  originalClientOrderId: string;
  newClientOrderId: string;
  timeInForce: TimeInForce;
  source: string;
  destination: Coin;
  maximumSlippage: string;
}
export interface MsgCancelReplaceMarketOrderProtoMsg {
  typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder";
  value: Uint8Array;
}
export interface MsgCancelReplaceMarketOrderAmino {
  owner: string;
  original_client_order_id: string;
  new_client_order_id: string;
  time_in_force: TimeInForce;
  source: string;
  destination?: CoinAmino;
  maximum_slippage: string;
}
export interface MsgCancelReplaceMarketOrderAminoMsg {
  type: "/em.market.v1.MsgCancelReplaceMarketOrder";
  value: MsgCancelReplaceMarketOrderAmino;
}
export interface MsgCancelReplaceMarketOrderSDKType {
  owner: string;
  original_client_order_id: string;
  new_client_order_id: string;
  time_in_force: TimeInForce;
  source: string;
  destination: CoinSDKType;
  maximum_slippage: string;
}
export interface MsgCancelReplaceMarketOrderResponse {}
export interface MsgCancelReplaceMarketOrderResponseProtoMsg {
  typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrderResponse";
  value: Uint8Array;
}
export interface MsgCancelReplaceMarketOrderResponseAmino {}
export interface MsgCancelReplaceMarketOrderResponseAminoMsg {
  type: "/em.market.v1.MsgCancelReplaceMarketOrderResponse";
  value: MsgCancelReplaceMarketOrderResponseAmino;
}
export interface MsgCancelReplaceMarketOrderResponseSDKType {}
function createBaseMsgAddLimitOrder(): MsgAddLimitOrder {
  return {
    owner: "",
    clientOrderId: "",
    timeInForce: 0,
    source: Coin.fromPartial({}),
    destination: Coin.fromPartial({})
  };
}
export const MsgAddLimitOrder = {
  typeUrl: "/em.market.v1.MsgAddLimitOrder",
  encode(message: MsgAddLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(18).string(message.clientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(24).int32(message.timeInForce);
    }
    if (message.source !== undefined) {
      Coin.encode(message.source, writer.uint32(34).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddLimitOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      clientOrderId: isSet(object.clientOrderId) ? String(object.clientOrderId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : -1,
      source: isSet(object.source) ? Coin.fromJSON(object.source) : undefined,
      destination: isSet(object.destination) ? Coin.fromJSON(object.destination) : undefined
    };
  },
  fromPartial(object: Partial<MsgAddLimitOrder>): MsgAddLimitOrder {
    const message = createBaseMsgAddLimitOrder();
    message.owner = object.owner ?? "";
    message.clientOrderId = object.clientOrderId ?? "";
    message.timeInForce = object.timeInForce ?? 0;
    message.source = object.source !== undefined && object.source !== null ? Coin.fromPartial(object.source) : undefined;
    message.destination = object.destination !== undefined && object.destination !== null ? Coin.fromPartial(object.destination) : undefined;
    return message;
  },
  fromAmino(object: MsgAddLimitOrderAmino): MsgAddLimitOrder {
    return {
      owner: object.owner,
      clientOrderId: object.client_order_id,
      timeInForce: isSet(object.time_in_force) ? timeInForceFromJSON(object.time_in_force) : -1,
      source: object?.source ? Coin.fromAmino(object.source) : undefined,
      destination: object?.destination ? Coin.fromAmino(object.destination) : undefined
    };
  },
  toAmino(message: MsgAddLimitOrder): MsgAddLimitOrderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.client_order_id = message.clientOrderId;
    obj.time_in_force = message.timeInForce;
    obj.source = message.source ? Coin.toAmino(message.source) : undefined;
    obj.destination = message.destination ? Coin.toAmino(message.destination) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddLimitOrderAminoMsg): MsgAddLimitOrder {
    return MsgAddLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLimitOrderProtoMsg): MsgAddLimitOrder {
    return MsgAddLimitOrder.decode(message.value);
  },
  toProto(message: MsgAddLimitOrder): Uint8Array {
    return MsgAddLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLimitOrder): MsgAddLimitOrderProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgAddLimitOrder",
      value: MsgAddLimitOrder.encode(message).finish()
    };
  }
};
function createBaseMsgAddLimitOrderResponse(): MsgAddLimitOrderResponse {
  return {};
}
export const MsgAddLimitOrderResponse = {
  typeUrl: "/em.market.v1.MsgAddLimitOrderResponse",
  encode(_: MsgAddLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddLimitOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddLimitOrderResponse>): MsgAddLimitOrderResponse {
    const message = createBaseMsgAddLimitOrderResponse();
    return message;
  },
  fromAmino(_: MsgAddLimitOrderResponseAmino): MsgAddLimitOrderResponse {
    return {};
  },
  toAmino(_: MsgAddLimitOrderResponse): MsgAddLimitOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddLimitOrderResponseAminoMsg): MsgAddLimitOrderResponse {
    return MsgAddLimitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddLimitOrderResponseProtoMsg): MsgAddLimitOrderResponse {
    return MsgAddLimitOrderResponse.decode(message.value);
  },
  toProto(message: MsgAddLimitOrderResponse): Uint8Array {
    return MsgAddLimitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddLimitOrderResponse): MsgAddLimitOrderResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgAddLimitOrderResponse",
      value: MsgAddLimitOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddMarketOrder(): MsgAddMarketOrder {
  return {
    owner: "",
    clientOrderId: "",
    timeInForce: 0,
    source: "",
    destination: Coin.fromPartial({}),
    maximumSlippage: ""
  };
}
export const MsgAddMarketOrder = {
  typeUrl: "/em.market.v1.MsgAddMarketOrder",
  encode(message: MsgAddMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(18).string(message.clientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(24).int32(message.timeInForce);
    }
    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(42).fork()).ldelim();
    }
    if (message.maximumSlippage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.maximumSlippage, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddMarketOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      clientOrderId: isSet(object.clientOrderId) ? String(object.clientOrderId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : -1,
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? Coin.fromJSON(object.destination) : undefined,
      maximumSlippage: isSet(object.maximumSlippage) ? String(object.maximumSlippage) : ""
    };
  },
  fromPartial(object: Partial<MsgAddMarketOrder>): MsgAddMarketOrder {
    const message = createBaseMsgAddMarketOrder();
    message.owner = object.owner ?? "";
    message.clientOrderId = object.clientOrderId ?? "";
    message.timeInForce = object.timeInForce ?? 0;
    message.source = object.source ?? "";
    message.destination = object.destination !== undefined && object.destination !== null ? Coin.fromPartial(object.destination) : undefined;
    message.maximumSlippage = object.maximumSlippage ?? "";
    return message;
  },
  fromAmino(object: MsgAddMarketOrderAmino): MsgAddMarketOrder {
    return {
      owner: object.owner,
      clientOrderId: object.client_order_id,
      timeInForce: isSet(object.time_in_force) ? timeInForceFromJSON(object.time_in_force) : -1,
      source: object.source,
      destination: object?.destination ? Coin.fromAmino(object.destination) : undefined,
      maximumSlippage: object.maximum_slippage
    };
  },
  toAmino(message: MsgAddMarketOrder): MsgAddMarketOrderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.client_order_id = message.clientOrderId;
    obj.time_in_force = message.timeInForce;
    obj.source = message.source;
    obj.destination = message.destination ? Coin.toAmino(message.destination) : undefined;
    obj.maximum_slippage = message.maximumSlippage;
    return obj;
  },
  fromAminoMsg(object: MsgAddMarketOrderAminoMsg): MsgAddMarketOrder {
    return MsgAddMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddMarketOrderProtoMsg): MsgAddMarketOrder {
    return MsgAddMarketOrder.decode(message.value);
  },
  toProto(message: MsgAddMarketOrder): Uint8Array {
    return MsgAddMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMarketOrder): MsgAddMarketOrderProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgAddMarketOrder",
      value: MsgAddMarketOrder.encode(message).finish()
    };
  }
};
function createBaseMsgAddMarketOrderResponse(): MsgAddMarketOrderResponse {
  return {};
}
export const MsgAddMarketOrderResponse = {
  typeUrl: "/em.market.v1.MsgAddMarketOrderResponse",
  encode(_: MsgAddMarketOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddMarketOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddMarketOrderResponse>): MsgAddMarketOrderResponse {
    const message = createBaseMsgAddMarketOrderResponse();
    return message;
  },
  fromAmino(_: MsgAddMarketOrderResponseAmino): MsgAddMarketOrderResponse {
    return {};
  },
  toAmino(_: MsgAddMarketOrderResponse): MsgAddMarketOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddMarketOrderResponseAminoMsg): MsgAddMarketOrderResponse {
    return MsgAddMarketOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddMarketOrderResponseProtoMsg): MsgAddMarketOrderResponse {
    return MsgAddMarketOrderResponse.decode(message.value);
  },
  toProto(message: MsgAddMarketOrderResponse): Uint8Array {
    return MsgAddMarketOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMarketOrderResponse): MsgAddMarketOrderResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgAddMarketOrderResponse",
      value: MsgAddMarketOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    owner: "",
    clientOrderId: ""
  };
}
export const MsgCancelOrder = {
  typeUrl: "/em.market.v1.MsgCancelOrder",
  encode(message: MsgCancelOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(18).string(message.clientOrderId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      clientOrderId: isSet(object.clientOrderId) ? String(object.clientOrderId) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.owner = object.owner ?? "";
    message.clientOrderId = object.clientOrderId ?? "";
    return message;
  },
  fromAmino(object: MsgCancelOrderAmino): MsgCancelOrder {
    return {
      owner: object.owner,
      clientOrderId: object.client_order_id
    };
  },
  toAmino(message: MsgCancelOrder): MsgCancelOrderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.client_order_id = message.clientOrderId;
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderAminoMsg): MsgCancelOrder {
    return MsgCancelOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOrderProtoMsg): MsgCancelOrder {
    return MsgCancelOrder.decode(message.value);
  },
  toProto(message: MsgCancelOrder): Uint8Array {
    return MsgCancelOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrder): MsgCancelOrderProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgCancelOrder",
      value: MsgCancelOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}
export const MsgCancelOrderResponse = {
  typeUrl: "/em.market.v1.MsgCancelOrderResponse",
  encode(_: MsgCancelOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelOrderResponseAmino): MsgCancelOrderResponse {
    return {};
  },
  toAmino(_: MsgCancelOrderResponse): MsgCancelOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderResponseAminoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOrderResponseProtoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelOrderResponse): Uint8Array {
    return MsgCancelOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrderResponse): MsgCancelOrderResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgCancelOrderResponse",
      value: MsgCancelOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelReplaceLimitOrder(): MsgCancelReplaceLimitOrder {
  return {
    owner: "",
    originalClientOrderId: "",
    newClientOrderId: "",
    timeInForce: 0,
    source: Coin.fromPartial({}),
    destination: Coin.fromPartial({})
  };
}
export const MsgCancelReplaceLimitOrder = {
  typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder",
  encode(message: MsgCancelReplaceLimitOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.originalClientOrderId !== "") {
      writer.uint32(18).string(message.originalClientOrderId);
    }
    if (message.newClientOrderId !== "") {
      writer.uint32(26).string(message.newClientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(32).int32(message.timeInForce);
    }
    if (message.source !== undefined) {
      Coin.encode(message.source, writer.uint32(42).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelReplaceLimitOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      originalClientOrderId: isSet(object.originalClientOrderId) ? String(object.originalClientOrderId) : "",
      newClientOrderId: isSet(object.newClientOrderId) ? String(object.newClientOrderId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : -1,
      source: isSet(object.source) ? Coin.fromJSON(object.source) : undefined,
      destination: isSet(object.destination) ? Coin.fromJSON(object.destination) : undefined
    };
  },
  fromPartial(object: Partial<MsgCancelReplaceLimitOrder>): MsgCancelReplaceLimitOrder {
    const message = createBaseMsgCancelReplaceLimitOrder();
    message.owner = object.owner ?? "";
    message.originalClientOrderId = object.originalClientOrderId ?? "";
    message.newClientOrderId = object.newClientOrderId ?? "";
    message.timeInForce = object.timeInForce ?? 0;
    message.source = object.source !== undefined && object.source !== null ? Coin.fromPartial(object.source) : undefined;
    message.destination = object.destination !== undefined && object.destination !== null ? Coin.fromPartial(object.destination) : undefined;
    return message;
  },
  fromAmino(object: MsgCancelReplaceLimitOrderAmino): MsgCancelReplaceLimitOrder {
    return {
      owner: object.owner,
      originalClientOrderId: object.original_client_order_id,
      newClientOrderId: object.new_client_order_id,
      timeInForce: isSet(object.time_in_force) ? timeInForceFromJSON(object.time_in_force) : -1,
      source: object?.source ? Coin.fromAmino(object.source) : undefined,
      destination: object?.destination ? Coin.fromAmino(object.destination) : undefined
    };
  },
  toAmino(message: MsgCancelReplaceLimitOrder): MsgCancelReplaceLimitOrderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.original_client_order_id = message.originalClientOrderId;
    obj.new_client_order_id = message.newClientOrderId;
    obj.time_in_force = message.timeInForce;
    obj.source = message.source ? Coin.toAmino(message.source) : undefined;
    obj.destination = message.destination ? Coin.toAmino(message.destination) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelReplaceLimitOrderAminoMsg): MsgCancelReplaceLimitOrder {
    return MsgCancelReplaceLimitOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelReplaceLimitOrderProtoMsg): MsgCancelReplaceLimitOrder {
    return MsgCancelReplaceLimitOrder.decode(message.value);
  },
  toProto(message: MsgCancelReplaceLimitOrder): Uint8Array {
    return MsgCancelReplaceLimitOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelReplaceLimitOrder): MsgCancelReplaceLimitOrderProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder",
      value: MsgCancelReplaceLimitOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelReplaceLimitOrderResponse(): MsgCancelReplaceLimitOrderResponse {
  return {};
}
export const MsgCancelReplaceLimitOrderResponse = {
  typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrderResponse",
  encode(_: MsgCancelReplaceLimitOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelReplaceLimitOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelReplaceLimitOrderResponse>): MsgCancelReplaceLimitOrderResponse {
    const message = createBaseMsgCancelReplaceLimitOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelReplaceLimitOrderResponseAmino): MsgCancelReplaceLimitOrderResponse {
    return {};
  },
  toAmino(_: MsgCancelReplaceLimitOrderResponse): MsgCancelReplaceLimitOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelReplaceLimitOrderResponseAminoMsg): MsgCancelReplaceLimitOrderResponse {
    return MsgCancelReplaceLimitOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelReplaceLimitOrderResponseProtoMsg): MsgCancelReplaceLimitOrderResponse {
    return MsgCancelReplaceLimitOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelReplaceLimitOrderResponse): Uint8Array {
    return MsgCancelReplaceLimitOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelReplaceLimitOrderResponse): MsgCancelReplaceLimitOrderResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrderResponse",
      value: MsgCancelReplaceLimitOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelReplaceMarketOrder(): MsgCancelReplaceMarketOrder {
  return {
    owner: "",
    originalClientOrderId: "",
    newClientOrderId: "",
    timeInForce: 0,
    source: "",
    destination: Coin.fromPartial({}),
    maximumSlippage: ""
  };
}
export const MsgCancelReplaceMarketOrder = {
  typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder",
  encode(message: MsgCancelReplaceMarketOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.originalClientOrderId !== "") {
      writer.uint32(18).string(message.originalClientOrderId);
    }
    if (message.newClientOrderId !== "") {
      writer.uint32(26).string(message.newClientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(32).int32(message.timeInForce);
    }
    if (message.source !== "") {
      writer.uint32(42).string(message.source);
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(50).fork()).ldelim();
    }
    if (message.maximumSlippage !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maximumSlippage, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelReplaceMarketOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      originalClientOrderId: isSet(object.originalClientOrderId) ? String(object.originalClientOrderId) : "",
      newClientOrderId: isSet(object.newClientOrderId) ? String(object.newClientOrderId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : -1,
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? Coin.fromJSON(object.destination) : undefined,
      maximumSlippage: isSet(object.maximumSlippage) ? String(object.maximumSlippage) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelReplaceMarketOrder>): MsgCancelReplaceMarketOrder {
    const message = createBaseMsgCancelReplaceMarketOrder();
    message.owner = object.owner ?? "";
    message.originalClientOrderId = object.originalClientOrderId ?? "";
    message.newClientOrderId = object.newClientOrderId ?? "";
    message.timeInForce = object.timeInForce ?? 0;
    message.source = object.source ?? "";
    message.destination = object.destination !== undefined && object.destination !== null ? Coin.fromPartial(object.destination) : undefined;
    message.maximumSlippage = object.maximumSlippage ?? "";
    return message;
  },
  fromAmino(object: MsgCancelReplaceMarketOrderAmino): MsgCancelReplaceMarketOrder {
    return {
      owner: object.owner,
      originalClientOrderId: object.original_client_order_id,
      newClientOrderId: object.new_client_order_id,
      timeInForce: isSet(object.time_in_force) ? timeInForceFromJSON(object.time_in_force) : -1,
      source: object.source,
      destination: object?.destination ? Coin.fromAmino(object.destination) : undefined,
      maximumSlippage: object.maximum_slippage
    };
  },
  toAmino(message: MsgCancelReplaceMarketOrder): MsgCancelReplaceMarketOrderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.original_client_order_id = message.originalClientOrderId;
    obj.new_client_order_id = message.newClientOrderId;
    obj.time_in_force = message.timeInForce;
    obj.source = message.source;
    obj.destination = message.destination ? Coin.toAmino(message.destination) : undefined;
    obj.maximum_slippage = message.maximumSlippage;
    return obj;
  },
  fromAminoMsg(object: MsgCancelReplaceMarketOrderAminoMsg): MsgCancelReplaceMarketOrder {
    return MsgCancelReplaceMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelReplaceMarketOrderProtoMsg): MsgCancelReplaceMarketOrder {
    return MsgCancelReplaceMarketOrder.decode(message.value);
  },
  toProto(message: MsgCancelReplaceMarketOrder): Uint8Array {
    return MsgCancelReplaceMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelReplaceMarketOrder): MsgCancelReplaceMarketOrderProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder",
      value: MsgCancelReplaceMarketOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelReplaceMarketOrderResponse(): MsgCancelReplaceMarketOrderResponse {
  return {};
}
export const MsgCancelReplaceMarketOrderResponse = {
  typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrderResponse",
  encode(_: MsgCancelReplaceMarketOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelReplaceMarketOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelReplaceMarketOrderResponse>): MsgCancelReplaceMarketOrderResponse {
    const message = createBaseMsgCancelReplaceMarketOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelReplaceMarketOrderResponseAmino): MsgCancelReplaceMarketOrderResponse {
    return {};
  },
  toAmino(_: MsgCancelReplaceMarketOrderResponse): MsgCancelReplaceMarketOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelReplaceMarketOrderResponseAminoMsg): MsgCancelReplaceMarketOrderResponse {
    return MsgCancelReplaceMarketOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelReplaceMarketOrderResponseProtoMsg): MsgCancelReplaceMarketOrderResponse {
    return MsgCancelReplaceMarketOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelReplaceMarketOrderResponse): Uint8Array {
    return MsgCancelReplaceMarketOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelReplaceMarketOrderResponse): MsgCancelReplaceMarketOrderResponseProtoMsg {
    return {
      typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrderResponse",
      value: MsgCancelReplaceMarketOrderResponse.encode(message).finish()
    };
  }
};