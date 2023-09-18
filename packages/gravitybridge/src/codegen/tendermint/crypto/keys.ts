import { BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64 } from "../../helpers";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
  ed25519?: Uint8Array;
}
export interface PublicKeyProtoMsg {
  typeUrl: "/tendermint.crypto.PublicKey";
  value: Uint8Array;
}
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKeyAmino {
  ed25519?: Uint8Array;
}
export interface PublicKeyAminoMsg {
  type: "/tendermint.crypto.PublicKey";
  value: PublicKeyAmino;
}
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKeySDKType {
  ed25519?: Uint8Array;
}
/**
 * PrivateKey defines the keys available for use with Tendermint Validators
 * WARNING PrivateKey is used for internal purposes only
 */
export interface PrivateKey {
  ed25519?: Uint8Array;
}
export interface PrivateKeyProtoMsg {
  typeUrl: "/tendermint.crypto.PrivateKey";
  value: Uint8Array;
}
/**
 * PrivateKey defines the keys available for use with Tendermint Validators
 * WARNING PrivateKey is used for internal purposes only
 */
export interface PrivateKeyAmino {
  ed25519?: Uint8Array;
}
export interface PrivateKeyAminoMsg {
  type: "/tendermint.crypto.PrivateKey";
  value: PrivateKeyAmino;
}
/**
 * PrivateKey defines the keys available for use with Tendermint Validators
 * WARNING PrivateKey is used for internal purposes only
 */
export interface PrivateKeySDKType {
  ed25519?: Uint8Array;
}
function createBasePublicKey(): PublicKey {
  return {
    ed25519: undefined
  };
}
export const PublicKey = {
  typeUrl: "/tendermint.crypto.PublicKey",
  encode(message: PublicKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    return writer;
  },
  fromJSON(object: any): PublicKey {
    return {
      ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : undefined
    };
  },
  fromPartial(object: Partial<PublicKey>): PublicKey {
    const message = createBasePublicKey();
    message.ed25519 = object.ed25519 ?? undefined;
    return message;
  },
  fromAmino(object: PublicKeyAmino): PublicKey {
    return {
      ed25519: object?.ed25519
    };
  },
  toAmino(message: PublicKey): PublicKeyAmino {
    const obj: any = {};
    obj.ed25519 = message.ed25519;
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
      typeUrl: "/tendermint.crypto.PublicKey",
      value: PublicKey.encode(message).finish()
    };
  }
};
function createBasePrivateKey(): PrivateKey {
  return {
    ed25519: undefined
  };
}
export const PrivateKey = {
  typeUrl: "/tendermint.crypto.PrivateKey",
  encode(message: PrivateKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    return writer;
  },
  fromJSON(object: any): PrivateKey {
    return {
      ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : undefined
    };
  },
  fromPartial(object: Partial<PrivateKey>): PrivateKey {
    const message = createBasePrivateKey();
    message.ed25519 = object.ed25519 ?? undefined;
    return message;
  },
  fromAmino(object: PrivateKeyAmino): PrivateKey {
    return {
      ed25519: object?.ed25519
    };
  },
  toAmino(message: PrivateKey): PrivateKeyAmino {
    const obj: any = {};
    obj.ed25519 = message.ed25519;
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
      typeUrl: "/tendermint.crypto.PrivateKey",
      value: PrivateKey.encode(message).finish()
    };
  }
};