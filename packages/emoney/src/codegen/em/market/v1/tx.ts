import { TimeInForce, timeInForceFromJSON } from "./market";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgAddLimitOrder {
  owner: string;
  clientOrderId: string;
  timeInForce: TimeInForce;
  source?: Coin;
  destination?: Coin;
}
export interface MsgAddLimitOrderSDKType {
  owner: string;
  client_order_id: string;
  time_in_force: TimeInForce;
  source?: CoinSDKType;
  destination?: CoinSDKType;
}
export interface MsgAddLimitOrderResponse {}
export interface MsgAddLimitOrderResponseSDKType {}
export interface MsgAddMarketOrder {
  owner: string;
  clientOrderId: string;
  timeInForce: TimeInForce;
  source: string;
  destination?: Coin;
  maximumSlippage: string;
}
export interface MsgAddMarketOrderSDKType {
  owner: string;
  client_order_id: string;
  time_in_force: TimeInForce;
  source: string;
  destination?: CoinSDKType;
  maximum_slippage: string;
}
export interface MsgAddMarketOrderResponse {}
export interface MsgAddMarketOrderResponseSDKType {}
export interface MsgCancelOrder {
  owner: string;
  clientOrderId: string;
}
export interface MsgCancelOrderSDKType {
  owner: string;
  client_order_id: string;
}
export interface MsgCancelOrderResponse {}
export interface MsgCancelOrderResponseSDKType {}
export interface MsgCancelReplaceLimitOrder {
  owner: string;
  originalClientOrderId: string;
  newClientOrderId: string;
  timeInForce: TimeInForce;
  source?: Coin;
  destination?: Coin;
}
export interface MsgCancelReplaceLimitOrderSDKType {
  owner: string;
  original_client_order_id: string;
  new_client_order_id: string;
  time_in_force: TimeInForce;
  source?: CoinSDKType;
  destination?: CoinSDKType;
}
export interface MsgCancelReplaceLimitOrderResponse {}
export interface MsgCancelReplaceLimitOrderResponseSDKType {}
export interface MsgCancelReplaceMarketOrder {
  owner: string;
  originalClientOrderId: string;
  newClientOrderId: string;
  timeInForce: TimeInForce;
  source: string;
  destination?: Coin;
  maximumSlippage: string;
}
export interface MsgCancelReplaceMarketOrderSDKType {
  owner: string;
  original_client_order_id: string;
  new_client_order_id: string;
  time_in_force: TimeInForce;
  source: string;
  destination?: CoinSDKType;
  maximum_slippage: string;
}
export interface MsgCancelReplaceMarketOrderResponse {}
export interface MsgCancelReplaceMarketOrderResponseSDKType {}
function createBaseMsgAddLimitOrder(): MsgAddLimitOrder {
  return {
    owner: "",
    clientOrderId: "",
    timeInForce: 0,
    source: undefined,
    destination: undefined
  };
}
export const MsgAddLimitOrder = {
  encode(message: MsgAddLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
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
  }
};
function createBaseMsgAddLimitOrderResponse(): MsgAddLimitOrderResponse {
  return {};
}
export const MsgAddLimitOrderResponse = {
  encode(_: MsgAddLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddLimitOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddLimitOrderResponse>): MsgAddLimitOrderResponse {
    const message = createBaseMsgAddLimitOrderResponse();
    return message;
  }
};
function createBaseMsgAddMarketOrder(): MsgAddMarketOrder {
  return {
    owner: "",
    clientOrderId: "",
    timeInForce: 0,
    source: "",
    destination: undefined,
    maximumSlippage: ""
  };
}
export const MsgAddMarketOrder = {
  encode(message: MsgAddMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(50).string(message.maximumSlippage);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddMarketOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      clientOrderId: isSet(object.clientOrderId) ? String(object.clientOrderId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
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
  }
};
function createBaseMsgAddMarketOrderResponse(): MsgAddMarketOrderResponse {
  return {};
}
export const MsgAddMarketOrderResponse = {
  encode(_: MsgAddMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddMarketOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddMarketOrderResponse>): MsgAddMarketOrderResponse {
    const message = createBaseMsgAddMarketOrderResponse();
    return message;
  }
};
function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    owner: "",
    clientOrderId: ""
  };
}
export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}
export const MsgCancelOrderResponse = {
  encode(_: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  }
};
function createBaseMsgCancelReplaceLimitOrder(): MsgCancelReplaceLimitOrder {
  return {
    owner: "",
    originalClientOrderId: "",
    newClientOrderId: "",
    timeInForce: 0,
    source: undefined,
    destination: undefined
  };
}
export const MsgCancelReplaceLimitOrder = {
  encode(message: MsgCancelReplaceLimitOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
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
  }
};
function createBaseMsgCancelReplaceLimitOrderResponse(): MsgCancelReplaceLimitOrderResponse {
  return {};
}
export const MsgCancelReplaceLimitOrderResponse = {
  encode(_: MsgCancelReplaceLimitOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelReplaceLimitOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelReplaceLimitOrderResponse>): MsgCancelReplaceLimitOrderResponse {
    const message = createBaseMsgCancelReplaceLimitOrderResponse();
    return message;
  }
};
function createBaseMsgCancelReplaceMarketOrder(): MsgCancelReplaceMarketOrder {
  return {
    owner: "",
    originalClientOrderId: "",
    newClientOrderId: "",
    timeInForce: 0,
    source: "",
    destination: undefined,
    maximumSlippage: ""
  };
}
export const MsgCancelReplaceMarketOrder = {
  encode(message: MsgCancelReplaceMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(58).string(message.maximumSlippage);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelReplaceMarketOrder {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      originalClientOrderId: isSet(object.originalClientOrderId) ? String(object.originalClientOrderId) : "",
      newClientOrderId: isSet(object.newClientOrderId) ? String(object.newClientOrderId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceFromJSON(object.timeInForce) : 0,
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
  }
};
function createBaseMsgCancelReplaceMarketOrderResponse(): MsgCancelReplaceMarketOrderResponse {
  return {};
}
export const MsgCancelReplaceMarketOrderResponse = {
  encode(_: MsgCancelReplaceMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelReplaceMarketOrderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelReplaceMarketOrderResponse>): MsgCancelReplaceMarketOrderResponse {
    const message = createBaseMsgCancelReplaceMarketOrderResponse();
    return message;
  }
};