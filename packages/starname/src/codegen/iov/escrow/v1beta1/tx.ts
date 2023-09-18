import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrow {
  seller: string;
  feePayer: string;
  object: (Any) | undefined;
  price: Coin[];
  deadline: bigint;
}
export interface MsgCreateEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow";
  value: Uint8Array;
}
export type MsgCreateEscrowEncoded = Omit<MsgCreateEscrow, "object"> & {
  object?: AnyProtoMsg | undefined;
};
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrowAmino {
  seller: string;
  fee_payer: string;
  object?: AnyAmino;
  price: CoinAmino[];
  deadline: string;
}
export interface MsgCreateEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow";
  value: MsgCreateEscrowAmino;
}
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrowSDKType {
  seller: string;
  fee_payer: string;
  object: AnySDKType | undefined;
  price: CoinSDKType[];
  deadline: bigint;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponse {
  /** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
  id: string;
}
export interface MsgCreateEscrowResponseProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrowResponse";
  value: Uint8Array;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponseAmino {
  /** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
  id: string;
}
export interface MsgCreateEscrowResponseAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgCreateEscrowResponse";
  value: MsgCreateEscrowResponseAmino;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponseSDKType {
  id: string;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrow {
  id: string;
  updater: string;
  feePayer: string;
  seller: string;
  price: Coin[];
  deadline: bigint;
}
export interface MsgUpdateEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow";
  value: Uint8Array;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrowAmino {
  id: string;
  updater: string;
  fee_payer: string;
  seller: string;
  price: CoinAmino[];
  deadline: string;
}
export interface MsgUpdateEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow";
  value: MsgUpdateEscrowAmino;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrowSDKType {
  id: string;
  updater: string;
  fee_payer: string;
  seller: string;
  price: CoinSDKType[];
  deadline: bigint;
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponse {}
export interface MsgUpdateEscrowResponseProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrowResponse";
  value: Uint8Array;
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponseAmino {}
export interface MsgUpdateEscrowResponseAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrowResponse";
  value: MsgUpdateEscrowResponseAmino;
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponseSDKType {}
/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrow {
  id: string;
  sender: string;
  feePayer: string;
  amount: Coin[];
}
export interface MsgTransferToEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow";
  value: Uint8Array;
}
/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowAmino {
  id: string;
  sender: string;
  fee_payer: string;
  amount: CoinAmino[];
}
export interface MsgTransferToEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow";
  value: MsgTransferToEscrowAmino;
}
/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowSDKType {
  id: string;
  sender: string;
  fee_payer: string;
  amount: CoinSDKType[];
}
/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponse {}
export interface MsgTransferToEscrowResponseProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrowResponse";
  value: Uint8Array;
}
/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponseAmino {}
export interface MsgTransferToEscrowResponseAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrowResponse";
  value: MsgTransferToEscrowResponseAmino;
}
/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponseSDKType {}
/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrow {
  id: string;
  sender: string;
  feePayer: string;
}
export interface MsgRefundEscrowProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow";
  value: Uint8Array;
}
/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrowAmino {
  id: string;
  sender: string;
  fee_payer: string;
}
export interface MsgRefundEscrowAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow";
  value: MsgRefundEscrowAmino;
}
/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrowSDKType {
  id: string;
  sender: string;
  fee_payer: string;
}
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponse {}
export interface MsgRefundEscrowResponseProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrowResponse";
  value: Uint8Array;
}
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponseAmino {}
export interface MsgRefundEscrowResponseAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.MsgRefundEscrowResponse";
  value: MsgRefundEscrowResponseAmino;
}
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponseSDKType {}
function createBaseMsgCreateEscrow(): MsgCreateEscrow {
  return {
    seller: "",
    feePayer: "",
    object: Any.fromPartial({}),
    price: [],
    deadline: BigInt(0)
  };
}
export const MsgCreateEscrow = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
  encode(message: MsgCreateEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.object !== undefined) {
      Any.encode((message.object as Any), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(40).uint64(message.deadline);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateEscrow {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      object: isSet(object.object) ? Any.fromJSON(object.object) : undefined,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      deadline: isSet(object.deadline) ? BigInt(object.deadline.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateEscrow>): MsgCreateEscrow {
    const message = createBaseMsgCreateEscrow();
    message.seller = object.seller ?? "";
    message.feePayer = object.feePayer ?? "";
    message.object = object.object !== undefined && object.object !== null ? Any.fromPartial(object.object) : undefined;
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateEscrowAmino): MsgCreateEscrow {
    return {
      seller: object.seller,
      feePayer: object.fee_payer,
      object: object?.object ? TransferableObject_FromAmino(object.object) : undefined,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromAmino(e)) : [],
      deadline: BigInt(object.deadline)
    };
  },
  toAmino(message: MsgCreateEscrow): MsgCreateEscrowAmino {
    const obj: any = {};
    obj.seller = message.seller;
    obj.fee_payer = message.feePayer;
    obj.object = message.object ? TransferableObject_ToAmino((message.object as Any)) : undefined;
    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.price = [];
    }
    obj.deadline = message.deadline ? message.deadline.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEscrowAminoMsg): MsgCreateEscrow {
    return MsgCreateEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEscrowProtoMsg): MsgCreateEscrow {
    return MsgCreateEscrow.decode(message.value);
  },
  toProto(message: MsgCreateEscrow): Uint8Array {
    return MsgCreateEscrow.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEscrow): MsgCreateEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
      value: MsgCreateEscrow.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEscrowResponse(): MsgCreateEscrowResponse {
  return {
    id: ""
  };
}
export const MsgCreateEscrowResponse = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrowResponse",
  encode(message: MsgCreateEscrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateEscrowResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateEscrowResponse>): MsgCreateEscrowResponse {
    const message = createBaseMsgCreateEscrowResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateEscrowResponseAmino): MsgCreateEscrowResponse {
    return {
      id: object.id
    };
  },
  toAmino(message: MsgCreateEscrowResponse): MsgCreateEscrowResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEscrowResponseAminoMsg): MsgCreateEscrowResponse {
    return MsgCreateEscrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEscrowResponseProtoMsg): MsgCreateEscrowResponse {
    return MsgCreateEscrowResponse.decode(message.value);
  },
  toProto(message: MsgCreateEscrowResponse): Uint8Array {
    return MsgCreateEscrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEscrowResponse): MsgCreateEscrowResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgCreateEscrowResponse",
      value: MsgCreateEscrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEscrow(): MsgUpdateEscrow {
  return {
    id: "",
    updater: "",
    feePayer: "",
    seller: "",
    price: [],
    deadline: BigInt(0)
  };
}
export const MsgUpdateEscrow = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
  encode(message: MsgUpdateEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.updater !== "") {
      writer.uint32(18).string(message.updater);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.deadline !== BigInt(0)) {
      writer.uint32(48).uint64(message.deadline);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      updater: isSet(object.updater) ? String(object.updater) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      deadline: isSet(object.deadline) ? BigInt(object.deadline.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgUpdateEscrow>): MsgUpdateEscrow {
    const message = createBaseMsgUpdateEscrow();
    message.id = object.id ?? "";
    message.updater = object.updater ?? "";
    message.feePayer = object.feePayer ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.deadline = object.deadline !== undefined && object.deadline !== null ? BigInt(object.deadline.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateEscrowAmino): MsgUpdateEscrow {
    return {
      id: object.id,
      updater: object.updater,
      feePayer: object.fee_payer,
      seller: object.seller,
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromAmino(e)) : [],
      deadline: BigInt(object.deadline)
    };
  },
  toAmino(message: MsgUpdateEscrow): MsgUpdateEscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.updater = message.updater;
    obj.fee_payer = message.feePayer;
    obj.seller = message.seller;
    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.price = [];
    }
    obj.deadline = message.deadline ? message.deadline.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEscrowAminoMsg): MsgUpdateEscrow {
    return MsgUpdateEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEscrowProtoMsg): MsgUpdateEscrow {
    return MsgUpdateEscrow.decode(message.value);
  },
  toProto(message: MsgUpdateEscrow): Uint8Array {
    return MsgUpdateEscrow.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEscrow): MsgUpdateEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
      value: MsgUpdateEscrow.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateEscrowResponse(): MsgUpdateEscrowResponse {
  return {};
}
export const MsgUpdateEscrowResponse = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrowResponse",
  encode(_: MsgUpdateEscrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateEscrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateEscrowResponse>): MsgUpdateEscrowResponse {
    const message = createBaseMsgUpdateEscrowResponse();
    return message;
  },
  fromAmino(_: MsgUpdateEscrowResponseAmino): MsgUpdateEscrowResponse {
    return {};
  },
  toAmino(_: MsgUpdateEscrowResponse): MsgUpdateEscrowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEscrowResponseAminoMsg): MsgUpdateEscrowResponse {
    return MsgUpdateEscrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEscrowResponseProtoMsg): MsgUpdateEscrowResponse {
    return MsgUpdateEscrowResponse.decode(message.value);
  },
  toProto(message: MsgUpdateEscrowResponse): Uint8Array {
    return MsgUpdateEscrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEscrowResponse): MsgUpdateEscrowResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrowResponse",
      value: MsgUpdateEscrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferToEscrow(): MsgTransferToEscrow {
  return {
    id: "",
    sender: "",
    feePayer: "",
    amount: []
  };
}
export const MsgTransferToEscrow = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
  encode(message: MsgTransferToEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgTransferToEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgTransferToEscrow>): MsgTransferToEscrow {
    const message = createBaseMsgTransferToEscrow();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.feePayer = object.feePayer ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgTransferToEscrowAmino): MsgTransferToEscrow {
    return {
      id: object.id,
      sender: object.sender,
      feePayer: object.fee_payer,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgTransferToEscrow): MsgTransferToEscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.sender = message.sender;
    obj.fee_payer = message.feePayer;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgTransferToEscrowAminoMsg): MsgTransferToEscrow {
    return MsgTransferToEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferToEscrowProtoMsg): MsgTransferToEscrow {
    return MsgTransferToEscrow.decode(message.value);
  },
  toProto(message: MsgTransferToEscrow): Uint8Array {
    return MsgTransferToEscrow.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferToEscrow): MsgTransferToEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
      value: MsgTransferToEscrow.encode(message).finish()
    };
  }
};
function createBaseMsgTransferToEscrowResponse(): MsgTransferToEscrowResponse {
  return {};
}
export const MsgTransferToEscrowResponse = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrowResponse",
  encode(_: MsgTransferToEscrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransferToEscrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferToEscrowResponse>): MsgTransferToEscrowResponse {
    const message = createBaseMsgTransferToEscrowResponse();
    return message;
  },
  fromAmino(_: MsgTransferToEscrowResponseAmino): MsgTransferToEscrowResponse {
    return {};
  },
  toAmino(_: MsgTransferToEscrowResponse): MsgTransferToEscrowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferToEscrowResponseAminoMsg): MsgTransferToEscrowResponse {
    return MsgTransferToEscrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferToEscrowResponseProtoMsg): MsgTransferToEscrowResponse {
    return MsgTransferToEscrowResponse.decode(message.value);
  },
  toProto(message: MsgTransferToEscrowResponse): Uint8Array {
    return MsgTransferToEscrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferToEscrowResponse): MsgTransferToEscrowResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrowResponse",
      value: MsgTransferToEscrowResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRefundEscrow(): MsgRefundEscrow {
  return {
    id: "",
    sender: "",
    feePayer: ""
  };
}
export const MsgRefundEscrow = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
  encode(message: MsgRefundEscrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.feePayer !== "") {
      writer.uint32(26).string(message.feePayer);
    }
    return writer;
  },
  fromJSON(object: any): MsgRefundEscrow {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      feePayer: isSet(object.feePayer) ? String(object.feePayer) : ""
    };
  },
  fromPartial(object: Partial<MsgRefundEscrow>): MsgRefundEscrow {
    const message = createBaseMsgRefundEscrow();
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.feePayer = object.feePayer ?? "";
    return message;
  },
  fromAmino(object: MsgRefundEscrowAmino): MsgRefundEscrow {
    return {
      id: object.id,
      sender: object.sender,
      feePayer: object.fee_payer
    };
  },
  toAmino(message: MsgRefundEscrow): MsgRefundEscrowAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.sender = message.sender;
    obj.fee_payer = message.feePayer;
    return obj;
  },
  fromAminoMsg(object: MsgRefundEscrowAminoMsg): MsgRefundEscrow {
    return MsgRefundEscrow.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRefundEscrowProtoMsg): MsgRefundEscrow {
    return MsgRefundEscrow.decode(message.value);
  },
  toProto(message: MsgRefundEscrow): Uint8Array {
    return MsgRefundEscrow.encode(message).finish();
  },
  toProtoMsg(message: MsgRefundEscrow): MsgRefundEscrowProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
      value: MsgRefundEscrow.encode(message).finish()
    };
  }
};
function createBaseMsgRefundEscrowResponse(): MsgRefundEscrowResponse {
  return {};
}
export const MsgRefundEscrowResponse = {
  typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrowResponse",
  encode(_: MsgRefundEscrowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRefundEscrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRefundEscrowResponse>): MsgRefundEscrowResponse {
    const message = createBaseMsgRefundEscrowResponse();
    return message;
  },
  fromAmino(_: MsgRefundEscrowResponseAmino): MsgRefundEscrowResponse {
    return {};
  },
  toAmino(_: MsgRefundEscrowResponse): MsgRefundEscrowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRefundEscrowResponseAminoMsg): MsgRefundEscrowResponse {
    return MsgRefundEscrowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRefundEscrowResponseProtoMsg): MsgRefundEscrowResponse {
    return MsgRefundEscrowResponse.decode(message.value);
  },
  toProto(message: MsgRefundEscrowResponse): Uint8Array {
    return MsgRefundEscrowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRefundEscrowResponse): MsgRefundEscrowResponseProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.MsgRefundEscrowResponse",
      value: MsgRefundEscrowResponse.encode(message).finish()
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