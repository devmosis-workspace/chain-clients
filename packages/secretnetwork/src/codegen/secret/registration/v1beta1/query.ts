import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface QueryEncryptedSeedRequest {
  pubKey: Uint8Array;
}
export interface QueryEncryptedSeedRequestSDKType {
  pub_key: Uint8Array;
}
export interface QueryEncryptedSeedResponse {
  /** [(gogoproto.nullable) = false]; */
  encryptedSeed: Uint8Array;
}
export interface QueryEncryptedSeedResponseSDKType {
  encrypted_seed: Uint8Array;
}
function createBaseQueryEncryptedSeedRequest(): QueryEncryptedSeedRequest {
  return {
    pubKey: new Uint8Array()
  };
}
export const QueryEncryptedSeedRequest = {
  encode(message: QueryEncryptedSeedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    return writer;
  },
  fromJSON(object: any): QueryEncryptedSeedRequest {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryEncryptedSeedRequest>): QueryEncryptedSeedRequest {
    const message = createBaseQueryEncryptedSeedRequest();
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  }
};
function createBaseQueryEncryptedSeedResponse(): QueryEncryptedSeedResponse {
  return {
    encryptedSeed: new Uint8Array()
  };
}
export const QueryEncryptedSeedResponse = {
  encode(message: QueryEncryptedSeedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptedSeed.length !== 0) {
      writer.uint32(10).bytes(message.encryptedSeed);
    }
    return writer;
  },
  fromJSON(object: any): QueryEncryptedSeedResponse {
    return {
      encryptedSeed: isSet(object.encryptedSeed) ? bytesFromBase64(object.encryptedSeed) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<QueryEncryptedSeedResponse>): QueryEncryptedSeedResponse {
    const message = createBaseQueryEncryptedSeedResponse();
    message.encryptedSeed = object.encryptedSeed ?? new Uint8Array();
    return message;
  }
};