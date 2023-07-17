import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrow {
  seller: string;
  feePayer: string;
  object?: Any;
  price: Coin[];
  deadline: Long;
}
/** MsgCreateEscrow defines a message to create an escrow */
export interface MsgCreateEscrowSDKType {
  seller: string;
  fee_payer: string;
  object?: AnySDKType;
  price: CoinSDKType[];
  deadline: Long;
}
/** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
export interface MsgCreateEscrowResponse {
  /** MsgCreateEscrowResponse defines the Msg/CreateEscrow response type */
  id: string;
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
  deadline: Long;
}
/** MsgUpdateEscrow defines a message to update an escrow */
export interface MsgUpdateEscrowSDKType {
  id: string;
  updater: string;
  fee_payer: string;
  seller: string;
  price: CoinSDKType[];
  deadline: Long;
}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponse {}
/** MsgUpdateEscrowResponse defines the Msg/UpdateEscrow response type */
export interface MsgUpdateEscrowResponseSDKType {}
/** MsgTransferToEscrow defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrow {
  id: string;
  sender: string;
  feePayer: string;
  amount: Coin[];
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
/** MsgTransferToEscrowResponse defines the Msg/Escrow response type ::TODO */
export interface MsgTransferToEscrowResponseSDKType {}
/** MsgRefundEscrow defines the Msg/RefundEscrow response type ::TODO */
export interface MsgRefundEscrow {
  id: string;
  sender: string;
  feePayer: string;
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
/**
 * MsgRefundEscrowResponse defines the Msg/RefundEscrowResponse response type
 * ::TODO
 */
export interface MsgRefundEscrowResponseSDKType {}
function createBaseMsgCreateEscrow(): MsgCreateEscrow {
  return {
    seller: "",
    feePayer: "",
    object: undefined,
    price: [],
    deadline: Long.UZERO
  };
}
export const MsgCreateEscrow = {
  encode(message: MsgCreateEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.feePayer !== "") {
      writer.uint32(18).string(message.feePayer);
    }
    if (message.object !== undefined) {
      Any.encode(message.object, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.deadline.isZero()) {
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
      deadline: isSet(object.deadline) ? Long.fromValue(object.deadline) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateEscrow>): MsgCreateEscrow {
    const message = createBaseMsgCreateEscrow();
    message.seller = object.seller ?? "";
    message.feePayer = object.feePayer ?? "";
    message.object = object.object !== undefined && object.object !== null ? Any.fromPartial(object.object) : undefined;
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCreateEscrowResponse(): MsgCreateEscrowResponse {
  return {
    id: ""
  };
}
export const MsgCreateEscrowResponse = {
  encode(message: MsgCreateEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgUpdateEscrow(): MsgUpdateEscrow {
  return {
    id: "",
    updater: "",
    feePayer: "",
    seller: "",
    price: [],
    deadline: Long.UZERO
  };
}
export const MsgUpdateEscrow = {
  encode(message: MsgUpdateEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.deadline.isZero()) {
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
      deadline: isSet(object.deadline) ? Long.fromValue(object.deadline) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgUpdateEscrow>): MsgUpdateEscrow {
    const message = createBaseMsgUpdateEscrow();
    message.id = object.id ?? "";
    message.updater = object.updater ?? "";
    message.feePayer = object.feePayer ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Long.fromValue(object.deadline) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUpdateEscrowResponse(): MsgUpdateEscrowResponse {
  return {};
}
export const MsgUpdateEscrowResponse = {
  encode(_: MsgUpdateEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateEscrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateEscrowResponse>): MsgUpdateEscrowResponse {
    const message = createBaseMsgUpdateEscrowResponse();
    return message;
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
  encode(message: MsgTransferToEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgTransferToEscrowResponse(): MsgTransferToEscrowResponse {
  return {};
}
export const MsgTransferToEscrowResponse = {
  encode(_: MsgTransferToEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgTransferToEscrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferToEscrowResponse>): MsgTransferToEscrowResponse {
    const message = createBaseMsgTransferToEscrowResponse();
    return message;
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
  encode(message: MsgRefundEscrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRefundEscrowResponse(): MsgRefundEscrowResponse {
  return {};
}
export const MsgRefundEscrowResponse = {
  encode(_: MsgRefundEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRefundEscrowResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRefundEscrowResponse>): MsgRefundEscrowResponse {
    const message = createBaseMsgRefundEscrowResponse();
    return message;
  }
};