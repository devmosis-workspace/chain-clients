import { BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../helpers";
export interface PublicKey {
  CurveType: number;
  PublicKey: Uint8Array;
}
export interface PublicKeyProtoMsg {
  typeUrl: "/crypto.PublicKey";
  value: Uint8Array;
}
export interface PublicKeyAmino {
  CurveType?: number;
  PublicKey?: string;
}
export interface PublicKeyAminoMsg {
  type: "/crypto.PublicKey";
  value: PublicKeyAmino;
}
export interface PublicKeySDKType {
  CurveType: number;
  PublicKey: Uint8Array;
}
export interface PrivateKey {
  CurveType: number;
  /** Note may need initialisation */
  PublicKey: Uint8Array;
  PrivateKey: Uint8Array;
}
export interface PrivateKeyProtoMsg {
  typeUrl: "/crypto.PrivateKey";
  value: Uint8Array;
}
export interface PrivateKeyAmino {
  CurveType?: number;
  /** Note may need initialisation */
  PublicKey?: string;
  PrivateKey?: string;
}
export interface PrivateKeyAminoMsg {
  type: "/crypto.PrivateKey";
  value: PrivateKeyAmino;
}
export interface PrivateKeySDKType {
  CurveType: number;
  PublicKey: Uint8Array;
  PrivateKey: Uint8Array;
}
export interface Signature {
  CurveType: number;
  Signature: Uint8Array;
}
export interface SignatureProtoMsg {
  typeUrl: "/crypto.Signature";
  value: Uint8Array;
}
export interface SignatureAmino {
  CurveType?: number;
  Signature?: string;
}
export interface SignatureAminoMsg {
  type: "/crypto.Signature";
  value: SignatureAmino;
}
export interface SignatureSDKType {
  CurveType: number;
  Signature: Uint8Array;
}
function createBasePublicKey(): PublicKey {
  return {
    CurveType: 0,
    PublicKey: new Uint8Array()
  };
}
export const PublicKey = {
  typeUrl: "/crypto.PublicKey",
  encode(message: PublicKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.CurveType !== 0) {
      writer.uint32(8).uint32(message.CurveType);
    }
    if (message.PublicKey.length !== 0) {
      writer.uint32(18).bytes(message.PublicKey);
    }
    return writer;
  },
  fromJSON(object: any): PublicKey {
    return {
      CurveType: isSet(object.CurveType) ? Number(object.CurveType) : 0,
      PublicKey: isSet(object.PublicKey) ? bytesFromBase64(object.PublicKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PublicKey>): PublicKey {
    const message = createBasePublicKey();
    message.CurveType = object.CurveType ?? 0;
    message.PublicKey = object.PublicKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PublicKeyAmino): PublicKey {
    const message = createBasePublicKey();
    if (object.CurveType !== undefined && object.CurveType !== null) {
      message.CurveType = object.CurveType;
    }
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = bytesFromBase64(object.PublicKey);
    }
    return message;
  },
  toAmino(message: PublicKey): PublicKeyAmino {
    const obj: any = {};
    obj.CurveType = message.CurveType === 0 ? undefined : message.CurveType;
    obj.PublicKey = message.PublicKey ? base64FromBytes(message.PublicKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: PublicKeyAminoMsg): PublicKey {
    return PublicKey.fromAmino(object.value);
  },
  fromProtoMsg(message: PublicKeyProtoMsg): PublicKey {
    return PublicKey.decode(message.value);
  },
  toProto(message: PublicKey): Uint8Array {
    return PublicKey.encode(message).finish();
  },
  toProtoMsg(message: PublicKey): PublicKeyProtoMsg {
    return {
      typeUrl: "/crypto.PublicKey",
      value: PublicKey.encode(message).finish()
    };
  }
};
function createBasePrivateKey(): PrivateKey {
  return {
    CurveType: 0,
    PublicKey: new Uint8Array(),
    PrivateKey: new Uint8Array()
  };
}
export const PrivateKey = {
  typeUrl: "/crypto.PrivateKey",
  encode(message: PrivateKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.CurveType !== 0) {
      writer.uint32(8).uint32(message.CurveType);
    }
    if (message.PublicKey.length !== 0) {
      writer.uint32(18).bytes(message.PublicKey);
    }
    if (message.PrivateKey.length !== 0) {
      writer.uint32(26).bytes(message.PrivateKey);
    }
    return writer;
  },
  fromJSON(object: any): PrivateKey {
    return {
      CurveType: isSet(object.CurveType) ? Number(object.CurveType) : 0,
      PublicKey: isSet(object.PublicKey) ? bytesFromBase64(object.PublicKey) : new Uint8Array(),
      PrivateKey: isSet(object.PrivateKey) ? bytesFromBase64(object.PrivateKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PrivateKey>): PrivateKey {
    const message = createBasePrivateKey();
    message.CurveType = object.CurveType ?? 0;
    message.PublicKey = object.PublicKey ?? new Uint8Array();
    message.PrivateKey = object.PrivateKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PrivateKeyAmino): PrivateKey {
    const message = createBasePrivateKey();
    if (object.CurveType !== undefined && object.CurveType !== null) {
      message.CurveType = object.CurveType;
    }
    if (object.PublicKey !== undefined && object.PublicKey !== null) {
      message.PublicKey = bytesFromBase64(object.PublicKey);
    }
    if (object.PrivateKey !== undefined && object.PrivateKey !== null) {
      message.PrivateKey = bytesFromBase64(object.PrivateKey);
    }
    return message;
  },
  toAmino(message: PrivateKey): PrivateKeyAmino {
    const obj: any = {};
    obj.CurveType = message.CurveType === 0 ? undefined : message.CurveType;
    obj.PublicKey = message.PublicKey ? base64FromBytes(message.PublicKey) : undefined;
    obj.PrivateKey = message.PrivateKey ? base64FromBytes(message.PrivateKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrivateKeyAminoMsg): PrivateKey {
    return PrivateKey.fromAmino(object.value);
  },
  fromProtoMsg(message: PrivateKeyProtoMsg): PrivateKey {
    return PrivateKey.decode(message.value);
  },
  toProto(message: PrivateKey): Uint8Array {
    return PrivateKey.encode(message).finish();
  },
  toProtoMsg(message: PrivateKey): PrivateKeyProtoMsg {
    return {
      typeUrl: "/crypto.PrivateKey",
      value: PrivateKey.encode(message).finish()
    };
  }
};
function createBaseSignature(): Signature {
  return {
    CurveType: 0,
    Signature: new Uint8Array()
  };
}
export const Signature = {
  typeUrl: "/crypto.Signature",
  encode(message: Signature, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.CurveType !== 0) {
      writer.uint32(8).uint32(message.CurveType);
    }
    if (message.Signature.length !== 0) {
      writer.uint32(18).bytes(message.Signature);
    }
    return writer;
  },
  fromJSON(object: any): Signature {
    return {
      CurveType: isSet(object.CurveType) ? Number(object.CurveType) : 0,
      Signature: isSet(object.Signature) ? bytesFromBase64(object.Signature) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Signature>): Signature {
    const message = createBaseSignature();
    message.CurveType = object.CurveType ?? 0;
    message.Signature = object.Signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SignatureAmino): Signature {
    const message = createBaseSignature();
    if (object.CurveType !== undefined && object.CurveType !== null) {
      message.CurveType = object.CurveType;
    }
    if (object.Signature !== undefined && object.Signature !== null) {
      message.Signature = bytesFromBase64(object.Signature);
    }
    return message;
  },
  toAmino(message: Signature): SignatureAmino {
    const obj: any = {};
    obj.CurveType = message.CurveType === 0 ? undefined : message.CurveType;
    obj.Signature = message.Signature ? base64FromBytes(message.Signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignatureAminoMsg): Signature {
    return Signature.fromAmino(object.value);
  },
  fromProtoMsg(message: SignatureProtoMsg): Signature {
    return Signature.decode(message.value);
  },
  toProto(message: Signature): Uint8Array {
    return Signature.encode(message).finish();
  },
  toProtoMsg(message: Signature): SignatureProtoMsg {
    return {
      typeUrl: "/crypto.Signature",
      value: Signature.encode(message).finish()
    };
  }
};