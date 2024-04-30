import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface RegisterAccountData {
  recipient: string;
  channel: string;
}
export interface RegisterAccountDataProtoMsg {
  typeUrl: "/noble.forwarding.v1.RegisterAccountData";
  value: Uint8Array;
}
export interface RegisterAccountDataAmino {
  recipient?: string;
  channel?: string;
}
export interface RegisterAccountDataAminoMsg {
  type: "/noble.forwarding.v1.RegisterAccountData";
  value: RegisterAccountDataAmino;
}
export interface RegisterAccountDataSDKType {
  recipient: string;
  channel: string;
}
export interface RegisterAccountMemo {
  noble?: RegisterAccountMemo_RegisterAccountDataWrapper;
}
export interface RegisterAccountMemoProtoMsg {
  typeUrl: "/noble.forwarding.v1.RegisterAccountMemo";
  value: Uint8Array;
}
export interface RegisterAccountMemoAmino {
  noble?: RegisterAccountMemo_RegisterAccountDataWrapperAmino;
}
export interface RegisterAccountMemoAminoMsg {
  type: "/noble.forwarding.v1.RegisterAccountMemo";
  value: RegisterAccountMemoAmino;
}
export interface RegisterAccountMemoSDKType {
  noble?: RegisterAccountMemo_RegisterAccountDataWrapperSDKType;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapper {
  forwarding?: RegisterAccountData;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg {
  typeUrl: "/noble.forwarding.v1.RegisterAccountDataWrapper";
  value: Uint8Array;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperAmino {
  forwarding?: RegisterAccountDataAmino;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperAminoMsg {
  type: "/noble.forwarding.v1.RegisterAccountDataWrapper";
  value: RegisterAccountMemo_RegisterAccountDataWrapperAmino;
}
export interface RegisterAccountMemo_RegisterAccountDataWrapperSDKType {
  forwarding?: RegisterAccountDataSDKType;
}
function createBaseRegisterAccountData(): RegisterAccountData {
  return {
    recipient: "",
    channel: ""
  };
}
export const RegisterAccountData = {
  typeUrl: "/noble.forwarding.v1.RegisterAccountData",
  encode(message: RegisterAccountData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): RegisterAccountData {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<RegisterAccountData>): RegisterAccountData {
    const message = createBaseRegisterAccountData();
    message.recipient = object.recipient ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: RegisterAccountDataAmino): RegisterAccountData {
    const message = createBaseRegisterAccountData();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message: RegisterAccountData): RegisterAccountDataAmino {
    const obj: any = {};
    obj.recipient = message.recipient;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: RegisterAccountDataAminoMsg): RegisterAccountData {
    return RegisterAccountData.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAccountDataProtoMsg): RegisterAccountData {
    return RegisterAccountData.decode(message.value);
  },
  toProto(message: RegisterAccountData): Uint8Array {
    return RegisterAccountData.encode(message).finish();
  },
  toProtoMsg(message: RegisterAccountData): RegisterAccountDataProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.RegisterAccountData",
      value: RegisterAccountData.encode(message).finish()
    };
  }
};
function createBaseRegisterAccountMemo(): RegisterAccountMemo {
  return {
    noble: undefined
  };
}
export const RegisterAccountMemo = {
  typeUrl: "/noble.forwarding.v1.RegisterAccountMemo",
  encode(message: RegisterAccountMemo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noble !== undefined) {
      RegisterAccountMemo_RegisterAccountDataWrapper.encode(message.noble, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RegisterAccountMemo {
    return {
      noble: isSet(object.noble) ? RegisterAccountMemo_RegisterAccountDataWrapper.fromJSON(object.noble) : undefined
    };
  },
  fromPartial(object: Partial<RegisterAccountMemo>): RegisterAccountMemo {
    const message = createBaseRegisterAccountMemo();
    message.noble = object.noble !== undefined && object.noble !== null ? RegisterAccountMemo_RegisterAccountDataWrapper.fromPartial(object.noble) : undefined;
    return message;
  },
  fromAmino(object: RegisterAccountMemoAmino): RegisterAccountMemo {
    const message = createBaseRegisterAccountMemo();
    if (object.noble !== undefined && object.noble !== null) {
      message.noble = RegisterAccountMemo_RegisterAccountDataWrapper.fromAmino(object.noble);
    }
    return message;
  },
  toAmino(message: RegisterAccountMemo): RegisterAccountMemoAmino {
    const obj: any = {};
    obj.noble = message.noble ? RegisterAccountMemo_RegisterAccountDataWrapper.toAmino(message.noble) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterAccountMemoAminoMsg): RegisterAccountMemo {
    return RegisterAccountMemo.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAccountMemoProtoMsg): RegisterAccountMemo {
    return RegisterAccountMemo.decode(message.value);
  },
  toProto(message: RegisterAccountMemo): Uint8Array {
    return RegisterAccountMemo.encode(message).finish();
  },
  toProtoMsg(message: RegisterAccountMemo): RegisterAccountMemoProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.RegisterAccountMemo",
      value: RegisterAccountMemo.encode(message).finish()
    };
  }
};
function createBaseRegisterAccountMemo_RegisterAccountDataWrapper(): RegisterAccountMemo_RegisterAccountDataWrapper {
  return {
    forwarding: undefined
  };
}
export const RegisterAccountMemo_RegisterAccountDataWrapper = {
  typeUrl: "/noble.forwarding.v1.RegisterAccountDataWrapper",
  encode(message: RegisterAccountMemo_RegisterAccountDataWrapper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forwarding !== undefined) {
      RegisterAccountData.encode(message.forwarding, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RegisterAccountMemo_RegisterAccountDataWrapper {
    return {
      forwarding: isSet(object.forwarding) ? RegisterAccountData.fromJSON(object.forwarding) : undefined
    };
  },
  fromPartial(object: Partial<RegisterAccountMemo_RegisterAccountDataWrapper>): RegisterAccountMemo_RegisterAccountDataWrapper {
    const message = createBaseRegisterAccountMemo_RegisterAccountDataWrapper();
    message.forwarding = object.forwarding !== undefined && object.forwarding !== null ? RegisterAccountData.fromPartial(object.forwarding) : undefined;
    return message;
  },
  fromAmino(object: RegisterAccountMemo_RegisterAccountDataWrapperAmino): RegisterAccountMemo_RegisterAccountDataWrapper {
    const message = createBaseRegisterAccountMemo_RegisterAccountDataWrapper();
    if (object.forwarding !== undefined && object.forwarding !== null) {
      message.forwarding = RegisterAccountData.fromAmino(object.forwarding);
    }
    return message;
  },
  toAmino(message: RegisterAccountMemo_RegisterAccountDataWrapper): RegisterAccountMemo_RegisterAccountDataWrapperAmino {
    const obj: any = {};
    obj.forwarding = message.forwarding ? RegisterAccountData.toAmino(message.forwarding) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterAccountMemo_RegisterAccountDataWrapperAminoMsg): RegisterAccountMemo_RegisterAccountDataWrapper {
    return RegisterAccountMemo_RegisterAccountDataWrapper.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg): RegisterAccountMemo_RegisterAccountDataWrapper {
    return RegisterAccountMemo_RegisterAccountDataWrapper.decode(message.value);
  },
  toProto(message: RegisterAccountMemo_RegisterAccountDataWrapper): Uint8Array {
    return RegisterAccountMemo_RegisterAccountDataWrapper.encode(message).finish();
  },
  toProtoMsg(message: RegisterAccountMemo_RegisterAccountDataWrapper): RegisterAccountMemo_RegisterAccountDataWrapperProtoMsg {
    return {
      typeUrl: "/noble.forwarding.v1.RegisterAccountDataWrapper",
      value: RegisterAccountMemo_RegisterAccountDataWrapper.encode(message).finish()
    };
  }
};