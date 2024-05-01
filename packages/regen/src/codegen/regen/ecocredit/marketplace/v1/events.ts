import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
  /** sell_order_id is the unique identifier of the sell order that was created. */
  sellOrderId: bigint;
}
export interface EventSellProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventSell";
  value: Uint8Array;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellAmino {
  /** sell_order_id is the unique identifier of the sell order that was created. */
  sell_order_id?: string;
}
export interface EventSellAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.EventSell";
  value: EventSellAmino;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellSDKType {
  sell_order_id: bigint;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirect {
  /**
   * sell_order_id is the unique identifier of the sell order that credits were
   * purchased from.
   */
  sellOrderId: bigint;
}
export interface EventBuyDirectProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect";
  value: Uint8Array;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirectAmino {
  /**
   * sell_order_id is the unique identifier of the sell order that credits were
   * purchased from.
   */
  sell_order_id?: string;
}
export interface EventBuyDirectAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.EventBuyDirect";
  value: EventBuyDirectAmino;
}
/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirectSDKType {
  sell_order_id: bigint;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
  /** sell_order_id is the unique identifier of the sell order that was updated. */
  sellOrderId: bigint;
}
export interface EventUpdateSellOrderProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
  value: Uint8Array;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderAmino {
  /** sell_order_id is the unique identifier of the sell order that was updated. */
  sell_order_id?: string;
}
export interface EventUpdateSellOrderAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
  value: EventUpdateSellOrderAmino;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderSDKType {
  sell_order_id: bigint;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrder {
  /**
   * sell_order_id is the unique identifier of the sell order that was
   * cancelled.
   */
  sellOrderId: bigint;
}
export interface EventCancelSellOrderProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder";
  value: Uint8Array;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrderAmino {
  /**
   * sell_order_id is the unique identifier of the sell order that was
   * cancelled.
   */
  sell_order_id?: string;
}
export interface EventCancelSellOrderAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder";
  value: EventCancelSellOrderAmino;
}
/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrderSDKType {
  sell_order_id: bigint;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenom {
  /**
   * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
   * allowed denoms for use in the marketplace.
   */
  denom: string;
}
export interface EventAllowDenomProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom";
  value: Uint8Array;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenomAmino {
  /**
   * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
   * allowed denoms for use in the marketplace.
   */
  denom?: string;
}
export interface EventAllowDenomAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.EventAllowDenom";
  value: EventAllowDenomAmino;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenomSDKType {
  denom: string;
}
/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 * 
 * Since Revision 1
 */
export interface EventRemoveAllowedDenom {
  /**
   * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) removed from the list of
   * allowed denoms for use in the marketplace.
   */
  denom: string;
}
export interface EventRemoveAllowedDenomProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom";
  value: Uint8Array;
}
/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 * 
 * Since Revision 1
 */
export interface EventRemoveAllowedDenomAmino {
  /**
   * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) removed from the list of
   * allowed denoms for use in the marketplace.
   */
  denom?: string;
}
export interface EventRemoveAllowedDenomAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom";
  value: EventRemoveAllowedDenomAmino;
}
/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 * 
 * Since Revision 1
 */
export interface EventRemoveAllowedDenomSDKType {
  denom: string;
}
function createBaseEventSell(): EventSell {
  return {
    sellOrderId: BigInt(0)
  };
}
export const EventSell = {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
  encode(message: EventSell, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  fromJSON(object: any): EventSell {
    return {
      sellOrderId: isSet(object.sellOrderId) ? BigInt(object.sellOrderId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventSell>): EventSell {
    const message = createBaseEventSell();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventSellAmino): EventSell {
    const message = createBaseEventSell();
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    return message;
  },
  toAmino(message: EventSell): EventSellAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSellAminoMsg): EventSell {
    return EventSell.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSellProtoMsg): EventSell {
    return EventSell.decode(message.value);
  },
  toProto(message: EventSell): Uint8Array {
    return EventSell.encode(message).finish();
  },
  toProtoMsg(message: EventSell): EventSellProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventSell",
      value: EventSell.encode(message).finish()
    };
  }
};
function createBaseEventBuyDirect(): EventBuyDirect {
  return {
    sellOrderId: BigInt(0)
  };
}
export const EventBuyDirect = {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect",
  encode(message: EventBuyDirect, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  fromJSON(object: any): EventBuyDirect {
    return {
      sellOrderId: isSet(object.sellOrderId) ? BigInt(object.sellOrderId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventBuyDirect>): EventBuyDirect {
    const message = createBaseEventBuyDirect();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBuyDirectAmino): EventBuyDirect {
    const message = createBaseEventBuyDirect();
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    return message;
  },
  toAmino(message: EventBuyDirect): EventBuyDirectAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBuyDirectAminoMsg): EventBuyDirect {
    return EventBuyDirect.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBuyDirectProtoMsg): EventBuyDirect {
    return EventBuyDirect.decode(message.value);
  },
  toProto(message: EventBuyDirect): Uint8Array {
    return EventBuyDirect.encode(message).finish();
  },
  toProtoMsg(message: EventBuyDirect): EventBuyDirectProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventBuyDirect",
      value: EventBuyDirect.encode(message).finish()
    };
  }
};
function createBaseEventUpdateSellOrder(): EventUpdateSellOrder {
  return {
    sellOrderId: BigInt(0)
  };
}
export const EventUpdateSellOrder = {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
  encode(message: EventUpdateSellOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateSellOrder {
    return {
      sellOrderId: isSet(object.sellOrderId) ? BigInt(object.sellOrderId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventUpdateSellOrder>): EventUpdateSellOrder {
    const message = createBaseEventUpdateSellOrder();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventUpdateSellOrderAmino): EventUpdateSellOrder {
    const message = createBaseEventUpdateSellOrder();
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    return message;
  },
  toAmino(message: EventUpdateSellOrder): EventUpdateSellOrderAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateSellOrderAminoMsg): EventUpdateSellOrder {
    return EventUpdateSellOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateSellOrderProtoMsg): EventUpdateSellOrder {
    return EventUpdateSellOrder.decode(message.value);
  },
  toProto(message: EventUpdateSellOrder): Uint8Array {
    return EventUpdateSellOrder.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateSellOrder): EventUpdateSellOrderProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder",
      value: EventUpdateSellOrder.encode(message).finish()
    };
  }
};
function createBaseEventCancelSellOrder(): EventCancelSellOrder {
  return {
    sellOrderId: BigInt(0)
  };
}
export const EventCancelSellOrder = {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder",
  encode(message: EventCancelSellOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sellOrderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  fromJSON(object: any): EventCancelSellOrder {
    return {
      sellOrderId: isSet(object.sellOrderId) ? BigInt(object.sellOrderId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventCancelSellOrder>): EventCancelSellOrder {
    const message = createBaseEventCancelSellOrder();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? BigInt(object.sellOrderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCancelSellOrderAmino): EventCancelSellOrder {
    const message = createBaseEventCancelSellOrder();
    if (object.sell_order_id !== undefined && object.sell_order_id !== null) {
      message.sellOrderId = BigInt(object.sell_order_id);
    }
    return message;
  },
  toAmino(message: EventCancelSellOrder): EventCancelSellOrderAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCancelSellOrderAminoMsg): EventCancelSellOrder {
    return EventCancelSellOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelSellOrderProtoMsg): EventCancelSellOrder {
    return EventCancelSellOrder.decode(message.value);
  },
  toProto(message: EventCancelSellOrder): Uint8Array {
    return EventCancelSellOrder.encode(message).finish();
  },
  toProtoMsg(message: EventCancelSellOrder): EventCancelSellOrderProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventCancelSellOrder",
      value: EventCancelSellOrder.encode(message).finish()
    };
  }
};
function createBaseEventAllowDenom(): EventAllowDenom {
  return {
    denom: ""
  };
}
export const EventAllowDenom = {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
  encode(message: EventAllowDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): EventAllowDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<EventAllowDenom>): EventAllowDenom {
    const message = createBaseEventAllowDenom();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventAllowDenomAmino): EventAllowDenom {
    const message = createBaseEventAllowDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventAllowDenom): EventAllowDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: EventAllowDenomAminoMsg): EventAllowDenom {
    return EventAllowDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAllowDenomProtoMsg): EventAllowDenom {
    return EventAllowDenom.decode(message.value);
  },
  toProto(message: EventAllowDenom): Uint8Array {
    return EventAllowDenom.encode(message).finish();
  },
  toProtoMsg(message: EventAllowDenom): EventAllowDenomProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom",
      value: EventAllowDenom.encode(message).finish()
    };
  }
};
function createBaseEventRemoveAllowedDenom(): EventRemoveAllowedDenom {
  return {
    denom: ""
  };
}
export const EventRemoveAllowedDenom = {
  typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom",
  encode(message: EventRemoveAllowedDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): EventRemoveAllowedDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<EventRemoveAllowedDenom>): EventRemoveAllowedDenom {
    const message = createBaseEventRemoveAllowedDenom();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventRemoveAllowedDenomAmino): EventRemoveAllowedDenom {
    const message = createBaseEventRemoveAllowedDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: EventRemoveAllowedDenomAminoMsg): EventRemoveAllowedDenom {
    return EventRemoveAllowedDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveAllowedDenomProtoMsg): EventRemoveAllowedDenom {
    return EventRemoveAllowedDenom.decode(message.value);
  },
  toProto(message: EventRemoveAllowedDenom): Uint8Array {
    return EventRemoveAllowedDenom.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveAllowedDenom): EventRemoveAllowedDenomProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom",
      value: EventRemoveAllowedDenom.encode(message).finish()
    };
  }
};