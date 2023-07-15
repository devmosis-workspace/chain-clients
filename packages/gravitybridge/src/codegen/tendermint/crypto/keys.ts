import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
  ed25519?: Uint8Array;
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
  encode(message: PublicKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBasePrivateKey(): PrivateKey {
  return {
    ed25519: undefined
  };
}
export const PrivateKey = {
  encode(message: PrivateKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};