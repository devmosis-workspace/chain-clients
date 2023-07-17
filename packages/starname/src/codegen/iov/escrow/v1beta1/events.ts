import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrow {
  id: string;
  seller: string;
  feePayer: string;
  brokerAddress: string;
  brokerCommission: string;
  price: Coin[];
  object?: Any;
  deadline: Long;
  fees: Coin[];
}
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrowSDKType {
  id: string;
  seller: string;
  fee_payer: string;
  broker_address: string;
  broker_commission: string;
  price: CoinSDKType[];
  object?: AnySDKType;
  deadline: Long;
  fees: CoinSDKType[];
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrow {
  id: string;
  updater: string;
  feePayer: string;
  newSeller: string;
  newPrice: Coin[];
  newDeadline: Long;
  fees: Coin[];
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrowSDKType {
  id: string;
  updater: string;
  fee_payer: string;
  new_seller: string;
  new_price: CoinSDKType[];
  new_deadline: Long;
  fees: CoinSDKType[];
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrow {
  id: string;
  feePayer: string;
  buyer: string;
  fees: Coin[];
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrowSDKType {
  id: string;
  fee_payer: string;
  buyer: string;
  fees: CoinSDKType[];
}
/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrow {
  id: string;
  feePayer: string;
  sender: string;
  fees: Coin[];
}
/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrowSDKType {
  id: string;
  fee_payer: string;
  sender: string;
  fees: CoinSDKType[];
}
function createBaseEventCreatedEscrow(): EventCreatedEscrow {
  return {
    id: "",
    seller: "",
    feePayer: "",
    brokerAddress: "",
    brokerCommission: "",
    price: [],
    object: undefined,
    deadline: Long.UZERO,
    fees: []
  };
}
export const EventCreatedEscrow = {
  encode(message: EventCreatedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    if (message.brokerAddress !== "") {
      writer.uint32(34).string(message.brokerAddress);
    }
    if (message.brokerCommission !== "") {
      writer.uint32(42).string(message.brokerCommission);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.object !== undefined) {
      Any.encode(message.object, writer.uint32(58).fork()).ldelim();
    }
    if (!message.deadline.isZero()) {
      writer.uint32(64).uint64(message.deadline);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventCreatedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      brokerAddress: isSet(object.brokerAddress) ? String(object.brokerAddress) : "",
      brokerCommission: isSet(object.brokerCommission) ? String(object.brokerCommission) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      object: isSet(object.object) ? Any.fromJSON(object.object) : undefined,
      deadline: isSet(object.deadline) ? Long.fromValue(object.deadline) : Long.UZERO,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventCreatedEscrow>): EventCreatedEscrow {
    const message = createBaseEventCreatedEscrow();
    message.id = object.id ?? "";
    message.seller = object.seller ?? "";
    message.feePayer = object.feePayer ?? "";
    message.brokerAddress = object.brokerAddress ?? "";
    message.brokerCommission = object.brokerCommission ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.object = object.object !== undefined && object.object !== null ? Any.fromPartial(object.object) : undefined;
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.UZERO;
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventUpdatedEscrow(): EventUpdatedEscrow {
  return {
    id: "",
    updater: "",
    feePayer: "",
    newSeller: "",
    newPrice: [],
    newDeadline: Long.UZERO,
    fees: []
  };
}
export const EventUpdatedEscrow = {
  encode(message: EventUpdatedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    if (message.newSeller !== "") {
      writer.uint32(34).string(message.newSeller);
    }
    for (const v of message.newPrice) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.newDeadline.isZero()) {
      writer.uint32(48).uint64(message.newDeadline);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventUpdatedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      updater: isSet(object.updater) ? String(object.updater) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      newSeller: isSet(object.newSeller) ? String(object.newSeller) : "",
      newPrice: Array.isArray(object?.newPrice) ? object.newPrice.map((e: any) => Coin.fromJSON(e)) : [],
      newDeadline: isSet(object.newDeadline) ? Long.fromValue(object.newDeadline) : Long.UZERO,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventUpdatedEscrow>): EventUpdatedEscrow {
    const message = createBaseEventUpdatedEscrow();
    message.id = object.id ?? "";
    message.updater = object.updater ?? "";
    message.feePayer = object.feePayer ?? "";
    message.newSeller = object.newSeller ?? "";
    message.newPrice = object.newPrice?.map(e => Coin.fromPartial(e)) || [];
    message.newDeadline = object.newDeadline !== undefined && object.newDeadline !== null ? Long.fromValue(object.newDeadline) : Long.UZERO;
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventCompletedEscrow(): EventCompletedEscrow {
  return {
    id: "",
    feePayer: "",
    buyer: "",
    fees: []
  };
}
export const EventCompletedEscrow = {
  encode(message: EventCompletedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventCompletedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventCompletedEscrow>): EventCompletedEscrow {
    const message = createBaseEventCompletedEscrow();
    message.id = object.id ?? "";
    message.feePayer = object.feePayer ?? "";
    message.buyer = object.buyer ?? "";
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseEventRefundedEscrow(): EventRefundedEscrow {
  return {
    id: "",
    feePayer: "",
    sender: "",
    fees: []
  };
}
export const EventRefundedEscrow = {
  encode(message: EventRefundedEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    for (const v of message.fees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventRefundedEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventRefundedEscrow>): EventRefundedEscrow {
    const message = createBaseEventRefundedEscrow();
    message.id = object.id ?? "";
    message.feePayer = object.feePayer ?? "";
    message.sender = object.sender ?? "";
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};