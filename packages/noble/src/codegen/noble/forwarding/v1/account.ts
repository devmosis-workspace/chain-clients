import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface ForwardingAccount {
  baseAccount?: BaseAccount;
  channel: string;
  recipient: string;
  createdAt: bigint;
}
export interface ForwardingAccountProtoMsg {
  typeUrl: "/noble.forwarding.v1.ForwardingAccount";
  value: Uint8Array;
}
export interface ForwardingAccountAmino {
  base_account?: BaseAccountAmino;
  channel?: string;
  recipient?: string;
  created_at?: string;
}
export interface ForwardingAccountAminoMsg {
  type: "/noble.forwarding.v1.ForwardingAccount";
  value: ForwardingAccountAmino;
}
export interface ForwardingAccountSDKType {
  base_account?: BaseAccountSDKType;
  channel: string;
  recipient: string;
  created_at: bigint;
}
function createBaseForwardingAccount(): ForwardingAccount {
  return {
    baseAccount: undefined,
    channel: "",
    recipient: "",
    createdAt: BigInt(0)
  };
}
export const ForwardingAccount = {
  typeUrl: "/noble.forwarding.v1.ForwardingAccount",
  encode(message: ForwardingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  fromJSON(object: any): ForwardingAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      channel: isSet(object.channel) ? String(object.channel) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<ForwardingAccount>): ForwardingAccount {
    const message = createBaseForwardingAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.channel = object.channel ?? "";
    message.recipient = object.recipient ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ForwardingAccountAmino): ForwardingAccount {
    const message = createBaseForwardingAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: ForwardingAccount): ForwardingAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.channel = message.channel;
    obj.recipient = message.recipient;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ForwardingAccountAminoMsg): ForwardingAccount {
    return ForwardingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ForwardingAccountProtoMsg): ForwardingAccount {
    return ForwardingAccount.decode(message.value);
  },
  toProto(message: ForwardingAccount): Uint8Array {
    return ForwardingAccount.encode(message).finish();
  },
  toProtoMsg(message: ForwardingAccount): ForwardingAccountProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.ForwardingAccount",
      value: ForwardingAccount.encode(message).finish()
    };
  }
};