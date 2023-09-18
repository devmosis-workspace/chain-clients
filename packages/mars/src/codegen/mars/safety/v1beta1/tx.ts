import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpend {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority: string;
  /** Recipient is the account to receive the funds */
  recipient: string;
  /** Amount is the coins that are to be released from the safety funds */
  amount: Coin[];
}
export interface MsgSafetyFundSpendProtoMsg {
  typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend";
  value: Uint8Array;
}
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpendAmino {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority: string;
  /** Recipient is the account to receive the funds */
  recipient: string;
  /** Amount is the coins that are to be released from the safety funds */
  amount: CoinAmino[];
}
export interface MsgSafetyFundSpendAminoMsg {
  type: "/mars.safety.v1beta1.MsgSafetyFundSpend";
  value: MsgSafetyFundSpendAmino;
}
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpendSDKType {
  authority: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponse {}
export interface MsgSafetyFundSpendResponseProtoMsg {
  typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpendResponse";
  value: Uint8Array;
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponseAmino {}
export interface MsgSafetyFundSpendResponseAminoMsg {
  type: "/mars.safety.v1beta1.MsgSafetyFundSpendResponse";
  value: MsgSafetyFundSpendResponseAmino;
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponseSDKType {}
function createBaseMsgSafetyFundSpend(): MsgSafetyFundSpend {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}
export const MsgSafetyFundSpend = {
  typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend",
  encode(message: MsgSafetyFundSpend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSafetyFundSpend {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSafetyFundSpend>): MsgSafetyFundSpend {
    const message = createBaseMsgSafetyFundSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSafetyFundSpendAmino): MsgSafetyFundSpend {
    return {
      authority: object.authority,
      recipient: object.recipient,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgSafetyFundSpend): MsgSafetyFundSpendAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSafetyFundSpendAminoMsg): MsgSafetyFundSpend {
    return MsgSafetyFundSpend.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSafetyFundSpendProtoMsg): MsgSafetyFundSpend {
    return MsgSafetyFundSpend.decode(message.value);
  },
  toProto(message: MsgSafetyFundSpend): Uint8Array {
    return MsgSafetyFundSpend.encode(message).finish();
  },
  toProtoMsg(message: MsgSafetyFundSpend): MsgSafetyFundSpendProtoMsg {
    return {
      typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend",
      value: MsgSafetyFundSpend.encode(message).finish()
    };
  }
};
function createBaseMsgSafetyFundSpendResponse(): MsgSafetyFundSpendResponse {
  return {};
}
export const MsgSafetyFundSpendResponse = {
  typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpendResponse",
  encode(_: MsgSafetyFundSpendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSafetyFundSpendResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSafetyFundSpendResponse>): MsgSafetyFundSpendResponse {
    const message = createBaseMsgSafetyFundSpendResponse();
    return message;
  },
  fromAmino(_: MsgSafetyFundSpendResponseAmino): MsgSafetyFundSpendResponse {
    return {};
  },
  toAmino(_: MsgSafetyFundSpendResponse): MsgSafetyFundSpendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSafetyFundSpendResponseAminoMsg): MsgSafetyFundSpendResponse {
    return MsgSafetyFundSpendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSafetyFundSpendResponseProtoMsg): MsgSafetyFundSpendResponse {
    return MsgSafetyFundSpendResponse.decode(message.value);
  },
  toProto(message: MsgSafetyFundSpendResponse): Uint8Array {
    return MsgSafetyFundSpendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSafetyFundSpendResponse): MsgSafetyFundSpendResponseProtoMsg {
    return {
      typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpendResponse",
      value: MsgSafetyFundSpendResponse.encode(message).finish()
    };
  }
};