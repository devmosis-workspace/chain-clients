import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgRegisterAccount {
  signer: string;
  recipient: string;
  channel: string;
}
export interface MsgRegisterAccountProtoMsg {
  typeUrl: "/noble.forwarding.v1.MsgRegisterAccount";
  value: Uint8Array;
}
export interface MsgRegisterAccountAmino {
  signer?: string;
  recipient?: string;
  channel?: string;
}
export interface MsgRegisterAccountAminoMsg {
  type: "/noble.forwarding.v1.MsgRegisterAccount";
  value: MsgRegisterAccountAmino;
}
export interface MsgRegisterAccountSDKType {
  signer: string;
  recipient: string;
  channel: string;
}
export interface MsgRegisterAccountResponse {
  address: string;
}
export interface MsgRegisterAccountResponseProtoMsg {
  typeUrl: "/noble.forwarding.v1.MsgRegisterAccountResponse";
  value: Uint8Array;
}
export interface MsgRegisterAccountResponseAmino {
  address?: string;
}
export interface MsgRegisterAccountResponseAminoMsg {
  type: "/noble.forwarding.v1.MsgRegisterAccountResponse";
  value: MsgRegisterAccountResponseAmino;
}
export interface MsgRegisterAccountResponseSDKType {
  address: string;
}
export interface MsgClearAccount {
  signer: string;
  address: string;
}
export interface MsgClearAccountProtoMsg {
  typeUrl: "/noble.forwarding.v1.MsgClearAccount";
  value: Uint8Array;
}
export interface MsgClearAccountAmino {
  signer?: string;
  address?: string;
}
export interface MsgClearAccountAminoMsg {
  type: "/noble.forwarding.v1.MsgClearAccount";
  value: MsgClearAccountAmino;
}
export interface MsgClearAccountSDKType {
  signer: string;
  address: string;
}
export interface MsgClearAccountResponse {}
export interface MsgClearAccountResponseProtoMsg {
  typeUrl: "/noble.forwarding.v1.MsgClearAccountResponse";
  value: Uint8Array;
}
export interface MsgClearAccountResponseAmino {}
export interface MsgClearAccountResponseAminoMsg {
  type: "/noble.forwarding.v1.MsgClearAccountResponse";
  value: MsgClearAccountResponseAmino;
}
export interface MsgClearAccountResponseSDKType {}
function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    signer: "",
    recipient: "",
    channel: ""
  };
}
export const MsgRegisterAccount = {
  typeUrl: "/noble.forwarding.v1.MsgRegisterAccount",
  encode(message: MsgRegisterAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterAccount {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.signer = object.signer ?? "";
    message.recipient = object.recipient ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.recipient = message.recipient;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.decode(message.value);
  },
  toProto(message: MsgRegisterAccount): Uint8Array {
    return MsgRegisterAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.MsgRegisterAccount",
      value: MsgRegisterAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {
    address: ""
  };
}
export const MsgRegisterAccountResponse = {
  typeUrl: "/noble.forwarding.v1.MsgRegisterAccountResponse",
  encode(message: MsgRegisterAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterAccountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAccountResponse): Uint8Array {
    return MsgRegisterAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.MsgRegisterAccountResponse",
      value: MsgRegisterAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClearAccount(): MsgClearAccount {
  return {
    signer: "",
    address: ""
  };
}
export const MsgClearAccount = {
  typeUrl: "/noble.forwarding.v1.MsgClearAccount",
  encode(message: MsgClearAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): MsgClearAccount {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<MsgClearAccount>): MsgClearAccount {
    const message = createBaseMsgClearAccount();
    message.signer = object.signer ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgClearAccountAmino): MsgClearAccount {
    const message = createBaseMsgClearAccount();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgClearAccount): MsgClearAccountAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgClearAccountAminoMsg): MsgClearAccount {
    return MsgClearAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearAccountProtoMsg): MsgClearAccount {
    return MsgClearAccount.decode(message.value);
  },
  toProto(message: MsgClearAccount): Uint8Array {
    return MsgClearAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAccount): MsgClearAccountProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.MsgClearAccount",
      value: MsgClearAccount.encode(message).finish()
    };
  }
};
function createBaseMsgClearAccountResponse(): MsgClearAccountResponse {
  return {};
}
export const MsgClearAccountResponse = {
  typeUrl: "/noble.forwarding.v1.MsgClearAccountResponse",
  encode(_: MsgClearAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClearAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClearAccountResponse>): MsgClearAccountResponse {
    const message = createBaseMsgClearAccountResponse();
    return message;
  },
  fromAmino(_: MsgClearAccountResponseAmino): MsgClearAccountResponse {
    const message = createBaseMsgClearAccountResponse();
    return message;
  },
  toAmino(_: MsgClearAccountResponse): MsgClearAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClearAccountResponseAminoMsg): MsgClearAccountResponse {
    return MsgClearAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClearAccountResponseProtoMsg): MsgClearAccountResponse {
    return MsgClearAccountResponse.decode(message.value);
  },
  toProto(message: MsgClearAccountResponse): Uint8Array {
    return MsgClearAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClearAccountResponse): MsgClearAccountResponseProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.MsgClearAccountResponse",
      value: MsgClearAccountResponse.encode(message).finish()
    };
  }
};