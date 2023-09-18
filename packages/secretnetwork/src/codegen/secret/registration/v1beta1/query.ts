import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface QueryEncryptedSeedRequest {
  pubKey: Uint8Array;
}
export interface QueryEncryptedSeedRequestProtoMsg {
  typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedRequest";
  value: Uint8Array;
}
export interface QueryEncryptedSeedRequestAmino {
  pub_key: Uint8Array;
}
export interface QueryEncryptedSeedRequestAminoMsg {
  type: "/secret.registration.v1beta1.QueryEncryptedSeedRequest";
  value: QueryEncryptedSeedRequestAmino;
}
export interface QueryEncryptedSeedRequestSDKType {
  pub_key: Uint8Array;
}
export interface QueryEncryptedSeedResponse {
  /** [(gogoproto.nullable) = false]; */
  encryptedSeed: Uint8Array;
}
export interface QueryEncryptedSeedResponseProtoMsg {
  typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedResponse";
  value: Uint8Array;
}
export interface QueryEncryptedSeedResponseAmino {
  /** [(gogoproto.nullable) = false]; */
  encrypted_seed: Uint8Array;
}
export interface QueryEncryptedSeedResponseAminoMsg {
  type: "/secret.registration.v1beta1.QueryEncryptedSeedResponse";
  value: QueryEncryptedSeedResponseAmino;
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
  typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedRequest",
  encode(message: QueryEncryptedSeedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryEncryptedSeedRequestAmino): QueryEncryptedSeedRequest {
    return {
      pubKey: object.pub_key
    };
  },
  toAmino(message: QueryEncryptedSeedRequest): QueryEncryptedSeedRequestAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey;
    return obj;
  },
  fromAminoMsg(object: QueryEncryptedSeedRequestAminoMsg): QueryEncryptedSeedRequest {
    return QueryEncryptedSeedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncryptedSeedRequestProtoMsg): QueryEncryptedSeedRequest {
    return QueryEncryptedSeedRequest.decode(message.value);
  },
  toProto(message: QueryEncryptedSeedRequest): Uint8Array {
    return QueryEncryptedSeedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEncryptedSeedRequest): QueryEncryptedSeedRequestProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedRequest",
      value: QueryEncryptedSeedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEncryptedSeedResponse(): QueryEncryptedSeedResponse {
  return {
    encryptedSeed: new Uint8Array()
  };
}
export const QueryEncryptedSeedResponse = {
  typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedResponse",
  encode(message: QueryEncryptedSeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryEncryptedSeedResponseAmino): QueryEncryptedSeedResponse {
    return {
      encryptedSeed: object.encrypted_seed
    };
  },
  toAmino(message: QueryEncryptedSeedResponse): QueryEncryptedSeedResponseAmino {
    const obj: any = {};
    obj.encrypted_seed = message.encryptedSeed;
    return obj;
  },
  fromAminoMsg(object: QueryEncryptedSeedResponseAminoMsg): QueryEncryptedSeedResponse {
    return QueryEncryptedSeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEncryptedSeedResponseProtoMsg): QueryEncryptedSeedResponse {
    return QueryEncryptedSeedResponse.decode(message.value);
  },
  toProto(message: QueryEncryptedSeedResponse): Uint8Array {
    return QueryEncryptedSeedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEncryptedSeedResponse): QueryEncryptedSeedResponseProtoMsg {
    return {
      typeUrl: "/secret.registration.v1beta1.QueryEncryptedSeedResponse",
      value: QueryEncryptedSeedResponse.encode(message).finish()
    };
  }
};