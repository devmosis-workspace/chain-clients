import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrow {
  id: string;
  seller: string;
  feePayer: string;
  brokerAddress: string;
  brokerCommission: string;
  price: Coin[];
  object: (Any) | undefined;
  deadline: bigint;
  fees: Coin[];
}
export interface EventCreatedEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.EventCreatedEscrow";
  value: Uint8Array;
}
export type EventCreatedEscrowEncoded = Omit<EventCreatedEscrow, "object"> & {
  object?: AnyProtoMsg | undefined;
};
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrowAmino {
  id: string;
  seller: string;
  fee_payer: string;
  broker_address: string;
  broker_commission: string;
  price: CoinAmino[];
  object?: AnyAmino;
  deadline: string;
  fees: CoinAmino[];
}
export interface EventCreatedEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.EventCreatedEscrow";
  value: EventCreatedEscrowAmino;
}
/** EventCreatedEscrow is emitted when an escrow is created */
export interface EventCreatedEscrowSDKType {
  id: string;
  seller: string;
  fee_payer: string;
  broker_address: string;
  broker_commission: string;
  price: CoinSDKType[];
  object: AnySDKType | undefined;
  deadline: bigint;
  fees: CoinSDKType[];
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrow {
  id: string;
  updater: string;
  feePayer: string;
  newSeller: string;
  newPrice: Coin[];
  newDeadline: bigint;
  fees: Coin[];
}
export interface EventUpdatedEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.EventUpdatedEscrow";
  value: Uint8Array;
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrowAmino {
  id: string;
  updater: string;
  fee_payer: string;
  new_seller: string;
  new_price: CoinAmino[];
  new_deadline: string;
  fees: CoinAmino[];
}
export interface EventUpdatedEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.EventUpdatedEscrow";
  value: EventUpdatedEscrowAmino;
}
/** EventUpdatedEscrow is emitted when an escrow is updated */
export interface EventUpdatedEscrowSDKType {
  id: string;
  updater: string;
  fee_payer: string;
  new_seller: string;
  new_price: CoinSDKType[];
  new_deadline: bigint;
  fees: CoinSDKType[];
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrow {
  id: string;
  feePayer: string;
  buyer: string;
  fees: Coin[];
}
export interface EventCompletedEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.EventCompletedEscrow";
  value: Uint8Array;
}
/** EventCompletedEscrow is emitted when an escrow is completed */
export interface EventCompletedEscrowAmino {
  id: string;
  fee_payer: string;
  buyer: string;
  fees: CoinAmino[];
}
export interface EventCompletedEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.EventCompletedEscrow";
  value: EventCompletedEscrowAmino;
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
export interface EventRefundedEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.EventRefundedEscrow";
  value: Uint8Array;
}
/** EventRefundedEscrow is emitted when an escrow is refunded */
export interface EventRefundedEscrowAmino {
  id: string;
  fee_payer: string;
  sender: string;
  fees: CoinAmino[];
}
export interface EventRefundedEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.EventRefundedEscrow";
  value: EventRefundedEscrowAmino;
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
    object: Any.fromPartial({}),
    deadline: BigInt(0),
    fees: []
  };
}
export const EventCreatedEscrow = {
  typeUrl: "/starnamed.x.escrow.v1beta1.EventCreatedEscrow",
  encode(message: EventCreatedEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(42).string(Decimal.fromUserInput(message.brokerCommission, 18).atomics);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.object !== undefined) {
      Any.encode((message.object as Any), writer.uint32(58).fork()).ldelim();
    }
    if (message.deadline !== BigInt(0)) {
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
      deadline: isSet(object.deadline) ? BigInt(object.deadline.toString()) : BigInt(0),
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
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventCreatedEscrowAmino): EventCreatedEscrow {
    return {
      id: object.id,
      seller: object.seller,
      feePayer: object.fee_payer,
      brokerAddress: object.broker_address,
      brokerCommission: object.broker_commission,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromAmino(e)) : [],
      object: object?.object ? TransferableObject_FromAmino(object.object) : undefined,
      deadline: BigInt(object.deadline),
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventCreatedEscrow): EventCreatedEscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.seller = message.seller;
    obj.fee_payer = message.feePayer;
    obj.broker_address = message.brokerAddress;
    obj.broker_commission = message.brokerCommission;
    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.price = [];
    }
    obj.object = message.object ? TransferableObject_ToAmino((message.object as Any)) : undefined;
    obj.deadline = message.deadline ? message.deadline.toString() : undefined;
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventCreatedEscrowAminoMsg): EventCreatedEscrow {
    return EventCreatedEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreatedEscrowProtoMsg): EventCreatedEscrow {
    return EventCreatedEscrow.decode(message.value);
  },
  toProto(message: EventCreatedEscrow): Uint8Array {
    return EventCreatedEscrow.encode(message).finish();
  },
  toProtoMsg(message: EventCreatedEscrow): EventCreatedEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.EventCreatedEscrow",
      value: EventCreatedEscrow.encode(message).finish()
    };
  }
};
function createBaseEventUpdatedEscrow(): EventUpdatedEscrow {
  return {
    id: "",
    updater: "",
    feePayer: "",
    newSeller: "",
    newPrice: [],
    newDeadline: BigInt(0),
    fees: []
  };
}
export const EventUpdatedEscrow = {
  typeUrl: "/starnamed.x.escrow.v1beta1.EventUpdatedEscrow",
  encode(message: EventUpdatedEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.newDeadline !== BigInt(0)) {
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
      newDeadline: isSet(object.newDeadline) ? BigInt(object.newDeadline.toString()) : BigInt(0),
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
    message.newDeadline = object.newDeadline !== undefined && object.newDeadline !== null ? BigInt(object.newDeadline.toString()) : BigInt(0);
    message.fees = object.fees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventUpdatedEscrowAmino): EventUpdatedEscrow {
    return {
      id: object.id,
      updater: object.updater,
      feePayer: object.fee_payer,
      newSeller: object.new_seller,
      newPrice: Array.isArray(object?.new_price) ? object.new_price.map((e: any) => Coin.fromAmino(e)) : [],
      newDeadline: BigInt(object.new_deadline),
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventUpdatedEscrow): EventUpdatedEscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.updater = message.updater;
    obj.fee_payer = message.feePayer;
    obj.new_seller = message.newSeller;
    if (message.newPrice) {
      obj.new_price = message.newPrice.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.new_price = [];
    }
    obj.new_deadline = message.newDeadline ? message.newDeadline.toString() : undefined;
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventUpdatedEscrowAminoMsg): EventUpdatedEscrow {
    return EventUpdatedEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdatedEscrowProtoMsg): EventUpdatedEscrow {
    return EventUpdatedEscrow.decode(message.value);
  },
  toProto(message: EventUpdatedEscrow): Uint8Array {
    return EventUpdatedEscrow.encode(message).finish();
  },
  toProtoMsg(message: EventUpdatedEscrow): EventUpdatedEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.EventUpdatedEscrow",
      value: EventUpdatedEscrow.encode(message).finish()
    };
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
  typeUrl: "/starnamed.x.escrow.v1beta1.EventCompletedEscrow",
  encode(message: EventCompletedEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventCompletedEscrowAmino): EventCompletedEscrow {
    return {
      id: object.id,
      feePayer: object.fee_payer,
      buyer: object.buyer,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventCompletedEscrow): EventCompletedEscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.fee_payer = message.feePayer;
    obj.buyer = message.buyer;
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventCompletedEscrowAminoMsg): EventCompletedEscrow {
    return EventCompletedEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCompletedEscrowProtoMsg): EventCompletedEscrow {
    return EventCompletedEscrow.decode(message.value);
  },
  toProto(message: EventCompletedEscrow): Uint8Array {
    return EventCompletedEscrow.encode(message).finish();
  },
  toProtoMsg(message: EventCompletedEscrow): EventCompletedEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.EventCompletedEscrow",
      value: EventCompletedEscrow.encode(message).finish()
    };
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
  typeUrl: "/starnamed.x.escrow.v1beta1.EventRefundedEscrow",
  encode(message: EventRefundedEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventRefundedEscrowAmino): EventRefundedEscrow {
    return {
      id: object.id,
      feePayer: object.fee_payer,
      sender: object.sender,
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventRefundedEscrow): EventRefundedEscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.fee_payer = message.feePayer;
    obj.sender = message.sender;
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventRefundedEscrowAminoMsg): EventRefundedEscrow {
    return EventRefundedEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRefundedEscrowProtoMsg): EventRefundedEscrow {
    return EventRefundedEscrow.decode(message.value);
  },
  toProto(message: EventRefundedEscrow): Uint8Array {
    return EventRefundedEscrow.encode(message).finish();
  },
  toProtoMsg(message: EventRefundedEscrow): EventRefundedEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.EventRefundedEscrow",
      value: EventRefundedEscrow.encode(message).finish()
    };
  }
};
export const TransferableObject_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const TransferableObject_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const TransferableObject_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};