import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface RaAuthenticate {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface RaAuthenticateProtoMsg {
  typeUrl: "/secret.registration.v1beta1.RaAuthenticate";
  value: Uint8Array;
}
export interface RaAuthenticateAmino {
  sender?: string;
  certificate: string;
}
export interface RaAuthenticateAminoMsg {
  type: "/secret.registration.v1beta1.RaAuthenticate";
  value: RaAuthenticateAmino;
}
export interface RaAuthenticateSDKType {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface MasterKey {
  bytes: Uint8Array;
}
export interface MasterKeyProtoMsg {
  typeUrl: "/secret.registration.v1beta1.MasterKey";
  value: Uint8Array;
}
export interface MasterKeyAmino {
  bytes?: string;
}
export interface MasterKeyAminoMsg {
  type: "/secret.registration.v1beta1.MasterKey";
  value: MasterKeyAmino;
}
export interface MasterKeySDKType {
  bytes: Uint8Array;
}
export interface Key {
  key: Uint8Array;
}
export interface KeyProtoMsg {
  typeUrl: "/secret.registration.v1beta1.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  key: string;
}
export interface KeyAminoMsg {
  type: "/secret.registration.v1beta1.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  key: Uint8Array;
}
function createBaseRaAuthenticate(): RaAuthenticate {
  return {
    sender: new Uint8Array(),
    certificate: new Uint8Array()
  };
}
export const RaAuthenticate = {
  typeUrl: "/secret.registration.v1beta1.RaAuthenticate",
  encode(message: RaAuthenticate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.certificate.length !== 0) {
      writer.uint32(18).bytes(message.certificate);
    }
    return writer;
  },
  fromJSON(object: any): RaAuthenticate {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RaAuthenticate>): RaAuthenticate {
    const message = createBaseRaAuthenticate();
    message.sender = object.sender ?? new Uint8Array();
    message.certificate = object.certificate ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RaAuthenticateAmino): RaAuthenticate {
    const message = createBaseRaAuthenticate();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = bytesFromBase64(object.certificate);
    }
    return message;
  },
  toAmino(message: RaAuthenticate): RaAuthenticateAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.certificate = message.certificate ? base64FromBytes(message.certificate) : "";
    return obj;
  },
  fromAminoMsg(object: RaAuthenticateAminoMsg): RaAuthenticate {
    return RaAuthenticate.fromAmino(object.value);
  },
  fromProtoMsg(message: RaAuthenticateProtoMsg): RaAuthenticate {
    return RaAuthenticate.decode(message.value);
  },
  toProto(message: RaAuthenticate): Uint8Array {
    return RaAuthenticate.encode(message).finish();
  },
  toProtoMsg(message: RaAuthenticate): RaAuthenticateProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.RaAuthenticate",
      value: RaAuthenticate.encode(message).finish()
    };
  }
};
function createBaseMasterKey(): MasterKey {
  return {
    bytes: new Uint8Array()
  };
}
export const MasterKey = {
  typeUrl: "/secret.registration.v1beta1.MasterKey",
  encode(message: MasterKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bytes.length !== 0) {
      writer.uint32(10).bytes(message.bytes);
    }
    return writer;
  },
  fromJSON(object: any): MasterKey {
    return {
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MasterKey>): MasterKey {
    const message = createBaseMasterKey();
    message.bytes = object.bytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MasterKeyAmino): MasterKey {
    const message = createBaseMasterKey();
    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = bytesFromBase64(object.bytes);
    }
    return message;
  },
  toAmino(message: MasterKey): MasterKeyAmino {
    const obj: any = {};
    obj.bytes = message.bytes ? base64FromBytes(message.bytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: MasterKeyAminoMsg): MasterKey {
    return MasterKey.fromAmino(object.value);
  },
  fromProtoMsg(message: MasterKeyProtoMsg): MasterKey {
    return MasterKey.decode(message.value);
  },
  toProto(message: MasterKey): Uint8Array {
    return MasterKey.encode(message).finish();
  },
  toProtoMsg(message: MasterKey): MasterKeyProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.MasterKey",
      value: MasterKey.encode(message).finish()
    };
  }
};
function createBaseKey(): Key {
  return {
    key: new Uint8Array()
  };
}
export const Key = {
  typeUrl: "/secret.registration.v1beta1.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  fromJSON(object: any): Key {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : "";
    return obj;
  },
  fromAminoMsg(object: KeyAminoMsg): Key {
    return Key.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyProtoMsg): Key {
    return Key.decode(message.value);
  },
  toProto(message: Key): Uint8Array {
    return Key.encode(message).finish();
  },
  toProtoMsg(message: Key): KeyProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.Key",
      value: Key.encode(message).finish()
    };
  }
};