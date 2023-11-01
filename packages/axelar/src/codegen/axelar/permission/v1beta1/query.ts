import { LegacyAminoPubKey, LegacyAminoPubKeyAmino, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequest {}
export interface QueryGovernanceKeyRequestProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest";
  value: Uint8Array;
}
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequestAmino {}
export interface QueryGovernanceKeyRequestAminoMsg {
  type: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest";
  value: QueryGovernanceKeyRequestAmino;
}
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequestSDKType {}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponse {
  governanceKey: LegacyAminoPubKey;
}
export interface QueryGovernanceKeyResponseProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse";
  value: Uint8Array;
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponseAmino {
  governance_key?: LegacyAminoPubKeyAmino;
}
export interface QueryGovernanceKeyResponseAminoMsg {
  type: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse";
  value: QueryGovernanceKeyResponseAmino;
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponseSDKType {
  governance_key: LegacyAminoPubKeySDKType;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/axelar.permission.v1beta1.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/axelar.permission.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/axelar.permission.v1beta1.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryGovernanceKeyRequest(): QueryGovernanceKeyRequest {
  return {};
}
export const QueryGovernanceKeyRequest = {
  typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest",
  encode(_: QueryGovernanceKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGovernanceKeyRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGovernanceKeyRequest>): QueryGovernanceKeyRequest {
    const message = createBaseQueryGovernanceKeyRequest();
    return message;
  },
  fromAmino(_: QueryGovernanceKeyRequestAmino): QueryGovernanceKeyRequest {
    return {};
  },
  toAmino(_: QueryGovernanceKeyRequest): QueryGovernanceKeyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceKeyRequestAminoMsg): QueryGovernanceKeyRequest {
    return QueryGovernanceKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceKeyRequestProtoMsg): QueryGovernanceKeyRequest {
    return QueryGovernanceKeyRequest.decode(message.value);
  },
  toProto(message: QueryGovernanceKeyRequest): Uint8Array {
    return QueryGovernanceKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceKeyRequest): QueryGovernanceKeyRequestProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest",
      value: QueryGovernanceKeyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGovernanceKeyResponse(): QueryGovernanceKeyResponse {
  return {
    governanceKey: LegacyAminoPubKey.fromPartial({})
  };
}
export const QueryGovernanceKeyResponse = {
  typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse",
  encode(message: QueryGovernanceKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governanceKey !== undefined) {
      LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGovernanceKeyResponse {
    return {
      governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined
    };
  },
  fromPartial(object: Partial<QueryGovernanceKeyResponse>): QueryGovernanceKeyResponse {
    const message = createBaseQueryGovernanceKeyResponse();
    message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
    return message;
  },
  fromAmino(object: QueryGovernanceKeyResponseAmino): QueryGovernanceKeyResponse {
    return {
      governanceKey: object?.governance_key ? LegacyAminoPubKey.fromAmino(object.governance_key) : undefined
    };
  },
  toAmino(message: QueryGovernanceKeyResponse): QueryGovernanceKeyResponseAmino {
    const obj: any = {};
    obj.governance_key = message.governanceKey ? LegacyAminoPubKey.toAmino(message.governanceKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceKeyResponseAminoMsg): QueryGovernanceKeyResponse {
    return QueryGovernanceKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceKeyResponseProtoMsg): QueryGovernanceKeyResponse {
    return QueryGovernanceKeyResponse.decode(message.value);
  },
  toProto(message: QueryGovernanceKeyResponse): Uint8Array {
    return QueryGovernanceKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceKeyResponse): QueryGovernanceKeyResponseProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse",
      value: QueryGovernanceKeyResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/axelar.permission.v1beta1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/axelar.permission.v1beta1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/axelar.permission.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};