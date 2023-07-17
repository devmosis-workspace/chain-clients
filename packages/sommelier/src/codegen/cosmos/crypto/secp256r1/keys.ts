import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key: Uint8Array;
}
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKeySDKType {
  key: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
  /** secret number serialized using big-endian encoding */
  secret: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKeySDKType {
  secret: Uint8Array;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
export const PubKey = {
  encode(message: PubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  fromJSON(object: any): PubKey {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  }
};
function createBasePrivKey(): PrivKey {
  return {
    secret: new Uint8Array()
  };
}
export const PrivKey = {
  encode(message: PrivKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
    }
    return writer;
  },
  fromJSON(object: any): PrivKey {
    return {
      secret: isSet(object.secret) ? bytesFromBase64(object.secret) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.secret = object.secret ?? new Uint8Array();
    return message;
  }
};