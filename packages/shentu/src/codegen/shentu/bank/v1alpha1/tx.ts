import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgLockedSend represents a message to send and lock coins from one account to
 * another.
 */
export interface MsgLockedSend {
  fromAddress: string;
  toAddress: string;
  unlockerAddress: string;
  amount: Coin[];
}
export interface MsgLockedSendProtoMsg {
  typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend";
  value: Uint8Array;
}
/**
 * MsgLockedSend represents a message to send and lock coins from one account to
 * another.
 */
export interface MsgLockedSendAmino {
  from_address?: string;
  to_address?: string;
  unlocker_address?: string;
  amount?: CoinAmino[];
}
export interface MsgLockedSendAminoMsg {
  type: "/shentu.bank.v1alpha1.MsgLockedSend";
  value: MsgLockedSendAmino;
}
/**
 * MsgLockedSend represents a message to send and lock coins from one account to
 * another.
 */
export interface MsgLockedSendSDKType {
  from_address: string;
  to_address: string;
  unlocker_address: string;
  amount: CoinSDKType[];
}
/** MsgLockedSendResponse defines the Msg/LockedSend response type. */
export interface MsgLockedSendResponse {}
export interface MsgLockedSendResponseProtoMsg {
  typeUrl: "/shentu.bank.v1alpha1.MsgLockedSendResponse";
  value: Uint8Array;
}
/** MsgLockedSendResponse defines the Msg/LockedSend response type. */
export interface MsgLockedSendResponseAmino {}
export interface MsgLockedSendResponseAminoMsg {
  type: "/shentu.bank.v1alpha1.MsgLockedSendResponse";
  value: MsgLockedSendResponseAmino;
}
/** MsgLockedSendResponse defines the Msg/LockedSend response type. */
export interface MsgLockedSendResponseSDKType {}
function createBaseMsgLockedSend(): MsgLockedSend {
  return {
    fromAddress: "",
    toAddress: "",
    unlockerAddress: "",
    amount: []
  };
}
export const MsgLockedSend = {
  typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend",
  encode(message: MsgLockedSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.unlockerAddress !== "") {
      writer.uint32(26).string(message.unlockerAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgLockedSend {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      unlockerAddress: isSet(object.unlockerAddress) ? String(object.unlockerAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgLockedSend>): MsgLockedSend {
    const message = createBaseMsgLockedSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.unlockerAddress = object.unlockerAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgLockedSendAmino): MsgLockedSend {
    const message = createBaseMsgLockedSend();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.unlocker_address !== undefined && object.unlocker_address !== null) {
      message.unlockerAddress = object.unlocker_address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgLockedSend): MsgLockedSendAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    obj.unlocker_address = message.unlockerAddress === "" ? undefined : message.unlockerAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgLockedSendAminoMsg): MsgLockedSend {
    return MsgLockedSend.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLockedSendProtoMsg): MsgLockedSend {
    return MsgLockedSend.decode(message.value);
  },
  toProto(message: MsgLockedSend): Uint8Array {
    return MsgLockedSend.encode(message).finish();
  },
  toProtoMsg(message: MsgLockedSend): MsgLockedSendProtoMsg {
    return {
      typeUrl: "/shentu.bank.v1alpha1.MsgLockedSend",
      value: MsgLockedSend.encode(message).finish()
    };
  }
};
function createBaseMsgLockedSendResponse(): MsgLockedSendResponse {
  return {};
}
export const MsgLockedSendResponse = {
  typeUrl: "/shentu.bank.v1alpha1.MsgLockedSendResponse",
  encode(_: MsgLockedSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLockedSendResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLockedSendResponse>): MsgLockedSendResponse {
    const message = createBaseMsgLockedSendResponse();
    return message;
  },
  fromAmino(_: MsgLockedSendResponseAmino): MsgLockedSendResponse {
    const message = createBaseMsgLockedSendResponse();
    return message;
  },
  toAmino(_: MsgLockedSendResponse): MsgLockedSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLockedSendResponseAminoMsg): MsgLockedSendResponse {
    return MsgLockedSendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLockedSendResponseProtoMsg): MsgLockedSendResponse {
    return MsgLockedSendResponse.decode(message.value);
  },
  toProto(message: MsgLockedSendResponse): Uint8Array {
    return MsgLockedSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockedSendResponse): MsgLockedSendResponseProtoMsg {
    return {
      typeUrl: "/shentu.bank.v1alpha1.MsgLockedSendResponse",
      value: MsgLockedSendResponse.encode(message).finish()
    };
  }
};