import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccount {
  /** owner represents the owner of the interchain account */
  owner: string;
  /** connectionId represents the IBC `connectionId` of the host chain */
  connectionId: string;
  /** version represents the version of the ICA channel */
  version: string;
}
export interface MsgRegisterAccountProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount";
  value: Uint8Array;
}
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccountAmino {
  /** owner represents the owner of the interchain account */
  owner: string;
  /** connectionId represents the IBC `connectionId` of the host chain */
  connectionId: string;
  /** version represents the version of the ICA channel */
  version: string;
}
export interface MsgRegisterAccountAminoMsg {
  type: "/chainmain.icaauth.v1.MsgRegisterAccount";
  value: MsgRegisterAccountAmino;
}
/** MsgRegisterAccount defines the request message for MsgRegisterAccount */
export interface MsgRegisterAccountSDKType {
  owner: string;
  connectionId: string;
  version: string;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponse {}
export interface MsgRegisterAccountResponseProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccountResponse";
  value: Uint8Array;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponseAmino {}
export interface MsgRegisterAccountResponseAminoMsg {
  type: "/chainmain.icaauth.v1.MsgRegisterAccountResponse";
  value: MsgRegisterAccountResponseAmino;
}
/** MsgRegisterAccountResponse defines the response message for MsgRegisterAccount */
export interface MsgRegisterAccountResponseSDKType {}
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTx {
  /** owner represents the owner of the interchain account */
  owner: string;
  /** connectionId represents the IBC `connectionId` of the host chain */
  connectionId: string;
  /** msgs represents the transactions to be submitted to the host chain */
  msgs: (Any)[] | Any[];
  /** timeoutDuration represents the timeout duration for the IBC packet from last block */
  timeoutDuration: Duration;
}
export interface MsgSubmitTxProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx";
  value: Uint8Array;
}
export type MsgSubmitTxEncoded = Omit<MsgSubmitTx, "msgs"> & {
  /** msgs represents the transactions to be submitted to the host chain */msgs: (AnyProtoMsg)[];
};
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTxAmino {
  /** owner represents the owner of the interchain account */
  owner: string;
  /** connectionId represents the IBC `connectionId` of the host chain */
  connectionId: string;
  /** msgs represents the transactions to be submitted to the host chain */
  msgs: AnyAmino[];
  /** timeoutDuration represents the timeout duration for the IBC packet from last block */
  timeoutDuration?: DurationAmino;
}
export interface MsgSubmitTxAminoMsg {
  type: "/chainmain.icaauth.v1.MsgSubmitTx";
  value: MsgSubmitTxAmino;
}
/** MsgSubmitTx defines the request message for MsgSubmitTx */
export interface MsgSubmitTxSDKType {
  owner: string;
  connectionId: string;
  msgs: (AnySDKType)[];
  timeoutDuration: DurationSDKType;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponse {}
export interface MsgSubmitTxResponseProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.MsgSubmitTxResponse";
  value: Uint8Array;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponseAmino {}
export interface MsgSubmitTxResponseAminoMsg {
  type: "/chainmain.icaauth.v1.MsgSubmitTxResponse";
  value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the response message for MsgSubmitTx */
export interface MsgSubmitTxResponseSDKType {}
function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    owner: "",
    connectionId: "",
    version: ""
  };
}
export const MsgRegisterAccount = {
  typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount",
  encode(message: MsgRegisterAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterAccount {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount {
    return {
      owner: object.owner,
      connectionId: object.connectionId,
      version: object.version
    };
  },
  toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connectionId = message.connectionId;
    obj.version = message.version;
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
      typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccount",
      value: MsgRegisterAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}
export const MsgRegisterAccountResponse = {
  typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccountResponse",
  encode(_: MsgRegisterAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse {
    return {};
  },
  toAmino(_: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino {
    const obj: any = {};
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
      typeUrl: "/chainmain.icaauth.v1.MsgRegisterAccountResponse",
      value: MsgRegisterAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    owner: "",
    connectionId: "",
    msgs: [],
    timeoutDuration: Duration.fromPartial({})
  };
}
export const MsgSubmitTx = {
  typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx",
  encode(message: MsgSubmitTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    for (const v of message.msgs) {
      Any.encode((v! as Any), writer.uint32(26).fork()).ldelim();
    }
    if (message.timeoutDuration !== undefined) {
      Duration.encode(message.timeoutDuration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitTx {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : [],
      timeoutDuration: isSet(object.timeoutDuration) ? Duration.fromJSON(object.timeoutDuration) : undefined
    };
  },
  fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.timeoutDuration = object.timeoutDuration !== undefined && object.timeoutDuration !== null ? Duration.fromPartial(object.timeoutDuration) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitTxAmino): MsgSubmitTx {
    return {
      owner: object.owner,
      connectionId: object.connectionId,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Sdk_Msg_FromAmino(e)) : [],
      timeoutDuration: object?.timeoutDuration ? Duration.fromAmino(object.timeoutDuration) : undefined
    };
  },
  toAmino(message: MsgSubmitTx): MsgSubmitTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connectionId = message.connectionId;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Sdk_Msg_ToAmino((e as Any)) : undefined);
    } else {
      obj.msgs = [];
    }
    obj.timeoutDuration = message.timeoutDuration ? Duration.toAmino(message.timeoutDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitTxAminoMsg): MsgSubmitTx {
    return MsgSubmitTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitTxProtoMsg): MsgSubmitTx {
    return MsgSubmitTx.decode(message.value);
  },
  toProto(message: MsgSubmitTx): Uint8Array {
    return MsgSubmitTx.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitTx): MsgSubmitTxProtoMsg {
    return {
      typeUrl: "/chainmain.icaauth.v1.MsgSubmitTx",
      value: MsgSubmitTx.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {};
}
export const MsgSubmitTxResponse = {
  typeUrl: "/chainmain.icaauth.v1.MsgSubmitTxResponse",
  encode(_: MsgSubmitTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitTxResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    return message;
  },
  fromAmino(_: MsgSubmitTxResponseAmino): MsgSubmitTxResponse {
    return {};
  },
  toAmino(_: MsgSubmitTxResponse): MsgSubmitTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitTxResponseAminoMsg): MsgSubmitTxResponse {
    return MsgSubmitTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitTxResponseProtoMsg): MsgSubmitTxResponse {
    return MsgSubmitTxResponse.decode(message.value);
  },
  toProto(message: MsgSubmitTxResponse): Uint8Array {
    return MsgSubmitTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitTxResponse): MsgSubmitTxResponseProtoMsg {
    return {
      typeUrl: "/chainmain.icaauth.v1.MsgSubmitTxResponse",
      value: MsgSubmitTxResponse.encode(message).finish()
    };
  }
};
export const Sdk_Msg_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Sdk_Msg_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Sdk_Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};