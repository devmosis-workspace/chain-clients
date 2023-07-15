import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../helpers";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
  ed25519?: Uint8Array;
  secp256k1?: Uint8Array;
}
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKeySDKType {
  ed25519?: Uint8Array;
  secp256k1?: Uint8Array;
}
function createBasePublicKey(): PublicKey {
  return {
    ed25519: undefined,
    secp256k1: undefined
  };
}
export const PublicKey = {
  encode(message: PublicKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  fromJSON(object: any): PublicKey {
    return {
      ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : undefined,
      secp256k1: isSet(object.secp256k1) ? bytesFromBase64(object.secp256k1) : undefined
    };
  },
  fromPartial(object: Partial<PublicKey>): PublicKey {
    const message = createBasePublicKey();
    message.ed25519 = object.ed25519 ?? undefined;
    message.secp256k1 = object.secp256k1 ?? undefined;
    return message;
  }
};