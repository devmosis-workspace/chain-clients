import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RaAuthenticate {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface RaAuthenticateSDKType {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface MasterKey {
  bytes: Uint8Array;
}
export interface MasterKeySDKType {
  bytes: Uint8Array;
}
export interface Key {
  key: Uint8Array;
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
  encode(message: RaAuthenticate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMasterKey(): MasterKey {
  return {
    bytes: new Uint8Array()
  };
}
export const MasterKey = {
  encode(message: MasterKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseKey(): Key {
  return {
    key: new Uint8Array()
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};