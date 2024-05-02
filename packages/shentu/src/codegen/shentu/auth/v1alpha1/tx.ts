import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgUnlock defines a message for unlocking coins from a manual vesting
 * account.
 */
export interface MsgUnlock {
  issuer: string;
  account: string;
  unlockAmount: Coin[];
}
export interface MsgUnlockProtoMsg {
  typeUrl: "/shentu.auth.v1alpha1.MsgUnlock";
  value: Uint8Array;
}
/**
 * MsgUnlock defines a message for unlocking coins from a manual vesting
 * account.
 */
export interface MsgUnlockAmino {
  issuer?: string;
  account?: string;
  unlock_amount?: CoinAmino[];
}
export interface MsgUnlockAminoMsg {
  type: "/shentu.auth.v1alpha1.MsgUnlock";
  value: MsgUnlockAmino;
}
/**
 * MsgUnlock defines a message for unlocking coins from a manual vesting
 * account.
 */
export interface MsgUnlockSDKType {
  issuer: string;
  account: string;
  unlock_amount: CoinSDKType[];
}
/** MsgUnlockResponse defines the Msg/Unlock response type. */
export interface MsgUnlockResponse {}
export interface MsgUnlockResponseProtoMsg {
  typeUrl: "/shentu.auth.v1alpha1.MsgUnlockResponse";
  value: Uint8Array;
}
/** MsgUnlockResponse defines the Msg/Unlock response type. */
export interface MsgUnlockResponseAmino {}
export interface MsgUnlockResponseAminoMsg {
  type: "/shentu.auth.v1alpha1.MsgUnlockResponse";
  value: MsgUnlockResponseAmino;
}
/** MsgUnlockResponse defines the Msg/Unlock response type. */
export interface MsgUnlockResponseSDKType {}
function createBaseMsgUnlock(): MsgUnlock {
  return {
    issuer: "",
    account: "",
    unlockAmount: []
  };
}
export const MsgUnlock = {
  typeUrl: "/shentu.auth.v1alpha1.MsgUnlock",
  encode(message: MsgUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    for (const v of message.unlockAmount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUnlock {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      account: isSet(object.account) ? String(object.account) : "",
      unlockAmount: Array.isArray(object?.unlockAmount) ? object.unlockAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUnlock>): MsgUnlock {
    const message = createBaseMsgUnlock();
    message.issuer = object.issuer ?? "";
    message.account = object.account ?? "";
    message.unlockAmount = object.unlockAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUnlockAmino): MsgUnlock {
    const message = createBaseMsgUnlock();
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.unlockAmount = object.unlock_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUnlock): MsgUnlockAmino {
    const obj: any = {};
    obj.issuer = message.issuer === "" ? undefined : message.issuer;
    obj.account = message.account === "" ? undefined : message.account;
    if (message.unlockAmount) {
      obj.unlock_amount = message.unlockAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.unlock_amount = message.unlockAmount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUnlockAminoMsg): MsgUnlock {
    return MsgUnlock.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockProtoMsg): MsgUnlock {
    return MsgUnlock.decode(message.value);
  },
  toProto(message: MsgUnlock): Uint8Array {
    return MsgUnlock.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlock): MsgUnlockProtoMsg {
    return {
      typeUrl: "/shentu.auth.v1alpha1.MsgUnlock",
      value: MsgUnlock.encode(message).finish()
    };
  }
};
function createBaseMsgUnlockResponse(): MsgUnlockResponse {
  return {};
}
export const MsgUnlockResponse = {
  typeUrl: "/shentu.auth.v1alpha1.MsgUnlockResponse",
  encode(_: MsgUnlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnlockResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnlockResponse>): MsgUnlockResponse {
    const message = createBaseMsgUnlockResponse();
    return message;
  },
  fromAmino(_: MsgUnlockResponseAmino): MsgUnlockResponse {
    const message = createBaseMsgUnlockResponse();
    return message;
  },
  toAmino(_: MsgUnlockResponse): MsgUnlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnlockResponseAminoMsg): MsgUnlockResponse {
    return MsgUnlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlockResponseProtoMsg): MsgUnlockResponse {
    return MsgUnlockResponse.decode(message.value);
  },
  toProto(message: MsgUnlockResponse): Uint8Array {
    return MsgUnlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlockResponse): MsgUnlockResponseProtoMsg {
    return {
      typeUrl: "/shentu.auth.v1alpha1.MsgUnlockResponse",
      value: MsgUnlockResponse.encode(message).finish()
    };
  }
};