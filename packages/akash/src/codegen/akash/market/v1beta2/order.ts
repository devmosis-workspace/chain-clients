import { GroupSpec, GroupSpecAmino, GroupSpecSDKType } from "../../deployment/v1beta2/groupspec";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** State is an enum which refers to state of order */
export enum Order_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - OrderOpen denotes state for order open */
  open = 1,
  /** active - OrderMatched denotes state for order matched */
  active = 2,
  /** closed - OrderClosed denotes state for order lost */
  closed = 3,
  UNRECOGNIZED = -1,
}
export const Order_StateSDKType = Order_State;
export const Order_StateAmino = Order_State;
export function order_StateFromJSON(object: any): Order_State {
  switch (object) {
    case 0:
    case "invalid":
      return Order_State.invalid;
    case 1:
    case "open":
      return Order_State.open;
    case 2:
    case "active":
      return Order_State.active;
    case 3:
    case "closed":
      return Order_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_State.UNRECOGNIZED;
  }
}
export function order_StateToJSON(object: Order_State): string {
  switch (object) {
    case Order_State.invalid:
      return "invalid";
    case Order_State.open:
      return "open";
    case Order_State.active:
      return "active";
    case Order_State.closed:
      return "closed";
    case Order_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** OrderID stores owner and all other seq numbers */
export interface OrderID {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
}
export interface OrderIDProtoMsg {
  typeUrl: "/akash.market.v1beta2.OrderID";
  value: Uint8Array;
}
/** OrderID stores owner and all other seq numbers */
export interface OrderIDAmino {
  owner?: string;
  dseq?: string;
  gseq?: number;
  oseq?: number;
}
export interface OrderIDAminoMsg {
  type: "/akash.market.v1beta2.OrderID";
  value: OrderIDAmino;
}
/** OrderID stores owner and all other seq numbers */
export interface OrderIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
}
/** Order stores orderID, state of order and other details */
export interface Order {
  orderId: OrderID;
  state: Order_State;
  spec: GroupSpec;
  createdAt: bigint;
}
export interface OrderProtoMsg {
  typeUrl: "/akash.market.v1beta2.Order";
  value: Uint8Array;
}
/** Order stores orderID, state of order and other details */
export interface OrderAmino {
  order_id?: OrderIDAmino;
  state?: Order_State;
  spec?: GroupSpecAmino;
  created_at?: string;
}
export interface OrderAminoMsg {
  type: "/akash.market.v1beta2.Order";
  value: OrderAmino;
}
/** Order stores orderID, state of order and other details */
export interface OrderSDKType {
  order_id: OrderIDSDKType;
  state: Order_State;
  spec: GroupSpecSDKType;
  created_at: bigint;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  state: string;
}
export interface OrderFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta2.OrderFilters";
  value: Uint8Array;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFiltersAmino {
  owner?: string;
  dseq?: string;
  gseq?: number;
  oseq?: number;
  state?: string;
}
export interface OrderFiltersAminoMsg {
  type: "/akash.market.v1beta2.OrderFilters";
  value: OrderFiltersAmino;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFiltersSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  state: string;
}
function createBaseOrderID(): OrderID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0
  };
}
export const OrderID = {
  typeUrl: "/akash.market.v1beta2.OrderID",
  encode(message: OrderID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    return writer;
  },
  fromJSON(object: any): OrderID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0
    };
  },
  fromPartial(object: Partial<OrderID>): OrderID {
    const message = createBaseOrderID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    return message;
  },
  fromAmino(object: OrderIDAmino): OrderID {
    const message = createBaseOrderID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    }
    return message;
  },
  toAmino(message: OrderID): OrderIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    return obj;
  },
  fromAminoMsg(object: OrderIDAminoMsg): OrderID {
    return OrderID.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderIDProtoMsg): OrderID {
    return OrderID.decode(message.value);
  },
  toProto(message: OrderID): Uint8Array {
    return OrderID.encode(message).finish();
  },
  toProtoMsg(message: OrderID): OrderIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.OrderID",
      value: OrderID.encode(message).finish()
    };
  }
};
function createBaseOrder(): Order {
  return {
    orderId: OrderID.fromPartial({}),
    state: 0,
    spec: GroupSpec.fromPartial({}),
    createdAt: BigInt(0)
  };
}
export const Order = {
  typeUrl: "/akash.market.v1beta2.Order",
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== undefined) {
      OrderID.encode(message.orderId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.spec !== undefined) {
      GroupSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  fromJSON(object: any): Order {
    return {
      orderId: isSet(object.orderId) ? OrderID.fromJSON(object.orderId) : undefined,
      state: isSet(object.state) ? order_StateFromJSON(object.state) : -1,
      spec: isSet(object.spec) ? GroupSpec.fromJSON(object.spec) : undefined,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? OrderID.fromPartial(object.orderId) : undefined;
    message.state = object.state ?? 0;
    message.spec = object.spec !== undefined && object.spec !== null ? GroupSpec.fromPartial(object.spec) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OrderAmino): Order {
    const message = createBaseOrder();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = OrderID.fromAmino(object.order_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = order_StateFromJSON(object.state);
    }
    if (object.spec !== undefined && object.spec !== null) {
      message.spec = GroupSpec.fromAmino(object.spec);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Order): OrderAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? OrderID.toAmino(message.orderId) : undefined;
    obj.state = message.state;
    obj.spec = message.spec ? GroupSpec.toAmino(message.spec) : undefined;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg): Order {
    return Order.decode(message.value);
  },
  toProto(message: Order): Uint8Array {
    return Order.encode(message).finish();
  },
  toProtoMsg(message: Order): OrderProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Order",
      value: Order.encode(message).finish()
    };
  }
};
function createBaseOrderFilters(): OrderFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    state: ""
  };
}
export const OrderFilters = {
  typeUrl: "/akash.market.v1beta2.OrderFilters",
  encode(message: OrderFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    return writer;
  },
  fromJSON(object: any): OrderFilters {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  fromPartial(object: Partial<OrderFilters>): OrderFilters {
    const message = createBaseOrderFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: OrderFiltersAmino): OrderFilters {
    const message = createBaseOrderFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: OrderFilters): OrderFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: OrderFiltersAminoMsg): OrderFilters {
    return OrderFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderFiltersProtoMsg): OrderFilters {
    return OrderFilters.decode(message.value);
  },
  toProto(message: OrderFilters): Uint8Array {
    return OrderFilters.encode(message).finish();
  },
  toProtoMsg(message: OrderFilters): OrderFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.OrderFilters",
      value: OrderFilters.encode(message).finish()
    };
  }
};