import { OrderID, OrderIDAmino, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** State is an enum which refers to state of bid */
export enum Bid_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - BidOpen denotes state for bid open */
  open = 1,
  /** active - BidMatched denotes state for bid open */
  active = 2,
  /** lost - BidLost denotes state for bid lost */
  lost = 3,
  /** closed - BidClosed denotes state for bid closed */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Bid_StateSDKType = Bid_State;
export const Bid_StateAmino = Bid_State;
export function bid_StateFromJSON(object: any): Bid_State {
  switch (object) {
    case 0:
    case "invalid":
      return Bid_State.invalid;
    case 1:
    case "open":
      return Bid_State.open;
    case 2:
    case "active":
      return Bid_State.active;
    case 3:
    case "lost":
      return Bid_State.lost;
    case 4:
    case "closed":
      return Bid_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Bid_State.UNRECOGNIZED;
  }
}
export function bid_StateToJSON(object: Bid_State): string {
  switch (object) {
    case Bid_State.invalid:
      return "invalid";
    case Bid_State.open:
      return "open";
    case Bid_State.active:
      return "active";
    case Bid_State.lost:
      return "lost";
    case Bid_State.closed:
      return "closed";
    case Bid_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
  order: OrderID;
  provider: string;
  price: DecCoin;
  deposit: Coin;
}
export interface MsgCreateBidProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateBid";
  value: Uint8Array;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidAmino {
  order?: OrderIDAmino;
  provider: string;
  price?: DecCoinAmino;
  deposit?: CoinAmino;
}
export interface MsgCreateBidAminoMsg {
  type: "/akash.market.v1beta2.MsgCreateBid";
  value: MsgCreateBidAmino;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidSDKType {
  order: OrderIDSDKType;
  provider: string;
  price: DecCoinSDKType;
  deposit: CoinSDKType;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {}
export interface MsgCreateBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse";
  value: Uint8Array;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseAmino {}
export interface MsgCreateBidResponseAminoMsg {
  type: "/akash.market.v1beta2.MsgCreateBidResponse";
  value: MsgCreateBidResponseAmino;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseSDKType {}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
  bidId: BidID;
}
export interface MsgCloseBidProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseBid";
  value: Uint8Array;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidAmino {
  bid_id?: BidIDAmino;
}
export interface MsgCloseBidAminoMsg {
  type: "/akash.market.v1beta2.MsgCloseBid";
  value: MsgCloseBidAmino;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidSDKType {
  bid_id: BidIDSDKType;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {}
export interface MsgCloseBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse";
  value: Uint8Array;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseAmino {}
export interface MsgCloseBidResponseAminoMsg {
  type: "/akash.market.v1beta2.MsgCloseBidResponse";
  value: MsgCloseBidResponseAmino;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseSDKType {}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface BidIDProtoMsg {
  typeUrl: "/akash.market.v1beta2.BidID";
  value: Uint8Array;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface BidIDAminoMsg {
  type: "/akash.market.v1beta2.BidID";
  value: BidIDAmino;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
  bidId: BidID;
  state: Bid_State;
  price: DecCoin;
  createdAt: bigint;
}
export interface BidProtoMsg {
  typeUrl: "/akash.market.v1beta2.Bid";
  value: Uint8Array;
}
/** Bid stores BidID, state of bid and price */
export interface BidAmino {
  bid_id?: BidIDAmino;
  state: Bid_State;
  price?: DecCoinAmino;
  created_at: string;
}
export interface BidAminoMsg {
  type: "/akash.market.v1beta2.Bid";
  value: BidAmino;
}
/** Bid stores BidID, state of bid and price */
export interface BidSDKType {
  bid_id: BidIDSDKType;
  state: Bid_State;
  price: DecCoinSDKType;
  created_at: bigint;
}
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface BidFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta2.BidFilters";
  value: Uint8Array;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface BidFiltersAminoMsg {
  type: "/akash.market.v1beta2.BidFilters";
  value: BidFiltersAmino;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
function createBaseMsgCreateBid(): MsgCreateBid {
  return {
    order: OrderID.fromPartial({}),
    provider: "",
    price: DecCoin.fromPartial({}),
    deposit: Coin.fromPartial({})
  };
}
export const MsgCreateBid = {
  typeUrl: "/akash.market.v1beta2.MsgCreateBid",
  encode(message: MsgCreateBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBid {
    return {
      order: isSet(object.order) ? OrderID.fromJSON(object.order) : undefined,
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateBid>): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    message.order = object.order !== undefined && object.order !== null ? OrderID.fromPartial(object.order) : undefined;
    message.provider = object.provider ?? "";
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateBidAmino): MsgCreateBid {
    return {
      order: object?.order ? OrderID.fromAmino(object.order) : undefined,
      provider: object.provider,
      price: object?.price ? DecCoin.fromAmino(object.price) : undefined,
      deposit: object?.deposit ? Coin.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: MsgCreateBid): MsgCreateBidAmino {
    const obj: any = {};
    obj.order = message.order ? OrderID.toAmino(message.order) : undefined;
    obj.provider = message.provider;
    obj.price = message.price ? DecCoin.toAmino(message.price) : undefined;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidAminoMsg): MsgCreateBid {
    return MsgCreateBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBidProtoMsg): MsgCreateBid {
    return MsgCreateBid.decode(message.value);
  },
  toProto(message: MsgCreateBid): Uint8Array {
    return MsgCreateBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBid): MsgCreateBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateBid",
      value: MsgCreateBid.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
  return {};
}
export const MsgCreateBidResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse",
  encode(_: MsgCreateBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateBidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateBidResponse>): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  fromAmino(_: MsgCreateBidResponseAmino): MsgCreateBidResponse {
    return {};
  },
  toAmino(_: MsgCreateBidResponse): MsgCreateBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidResponseAminoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBidResponseProtoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.decode(message.value);
  },
  toProto(message: MsgCreateBidResponse): Uint8Array {
    return MsgCreateBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBidResponse): MsgCreateBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse",
      value: MsgCreateBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBid(): MsgCloseBid {
  return {
    bidId: BidID.fromPartial({})
  };
}
export const MsgCloseBid = {
  typeUrl: "/akash.market.v1beta2.MsgCloseBid",
  encode(message: MsgCloseBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCloseBid {
    return {
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined
    };
  },
  fromPartial(object: Partial<MsgCloseBid>): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  },
  fromAmino(object: MsgCloseBidAmino): MsgCloseBid {
    return {
      bidId: object?.bid_id ? BidID.fromAmino(object.bid_id) : undefined
    };
  },
  toAmino(message: MsgCloseBid): MsgCloseBidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidAminoMsg): MsgCloseBid {
    return MsgCloseBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBidProtoMsg): MsgCloseBid {
    return MsgCloseBid.decode(message.value);
  },
  toProto(message: MsgCloseBid): Uint8Array {
    return MsgCloseBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBid): MsgCloseBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseBid",
      value: MsgCloseBid.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBidResponse(): MsgCloseBidResponse {
  return {};
}
export const MsgCloseBidResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse",
  encode(_: MsgCloseBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCloseBidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseBidResponse>): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  fromAmino(_: MsgCloseBidResponseAmino): MsgCloseBidResponse {
    return {};
  },
  toAmino(_: MsgCloseBidResponse): MsgCloseBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidResponseAminoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBidResponseProtoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.decode(message.value);
  },
  toProto(message: MsgCloseBidResponse): Uint8Array {
    return MsgCloseBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBidResponse): MsgCloseBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse",
      value: MsgCloseBidResponse.encode(message).finish()
    };
  }
};
function createBaseBidID(): BidID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
export const BidID = {
  typeUrl: "/akash.market.v1beta2.BidID",
  encode(message: BidID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    return writer;
  },
  fromJSON(object: any): BidID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  fromPartial(object: Partial<BidID>): BidID {
    const message = createBaseBidID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: BidIDAmino): BidID {
    return {
      owner: object.owner,
      dseq: BigInt(object.dseq),
      gseq: object.gseq,
      oseq: object.oseq,
      provider: object.provider
    };
  },
  toAmino(message: BidID): BidIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    return obj;
  },
  fromAminoMsg(object: BidIDAminoMsg): BidID {
    return BidID.fromAmino(object.value);
  },
  fromProtoMsg(message: BidIDProtoMsg): BidID {
    return BidID.decode(message.value);
  },
  toProto(message: BidID): Uint8Array {
    return BidID.encode(message).finish();
  },
  toProtoMsg(message: BidID): BidIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.BidID",
      value: BidID.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    bidId: BidID.fromPartial({}),
    state: 0,
    price: DecCoin.fromPartial({}),
    createdAt: BigInt(0)
  };
}
export const Bid = {
  typeUrl: "/akash.market.v1beta2.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  fromJSON(object: any): Bid {
    return {
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : -1,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Bid>): Bid {
    const message = createBaseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BidAmino): Bid {
    return {
      bidId: object?.bid_id ? BidID.fromAmino(object.bid_id) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : -1,
      price: object?.price ? DecCoin.fromAmino(object.price) : undefined,
      createdAt: BigInt(object.created_at)
    };
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : undefined;
    obj.state = message.state;
    obj.price = message.price ? DecCoin.toAmino(message.price) : undefined;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
function createBaseBidFilters(): BidFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}
export const BidFilters = {
  typeUrl: "/akash.market.v1beta2.BidFilters",
  encode(message: BidFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },
  fromJSON(object: any): BidFilters {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  fromPartial(object: Partial<BidFilters>): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: BidFiltersAmino): BidFilters {
    return {
      owner: object.owner,
      dseq: BigInt(object.dseq),
      gseq: object.gseq,
      oseq: object.oseq,
      provider: object.provider,
      state: object.state
    };
  },
  toAmino(message: BidFilters): BidFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: BidFiltersAminoMsg): BidFilters {
    return BidFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: BidFiltersProtoMsg): BidFilters {
    return BidFilters.decode(message.value);
  },
  toProto(message: BidFilters): Uint8Array {
    return BidFilters.encode(message).finish();
  },
  toProtoMsg(message: BidFilters): BidFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.BidFilters",
      value: BidFilters.encode(message).finish()
    };
  }
};