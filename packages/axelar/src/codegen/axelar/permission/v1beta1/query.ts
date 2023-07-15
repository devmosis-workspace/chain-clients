import { LegacyAminoPubKey, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequest {}
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
  governanceKey?: LegacyAminoPubKey;
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponseSDKType {
  governance_key?: LegacyAminoPubKeySDKType;
}
function createBaseQueryGovernanceKeyRequest(): QueryGovernanceKeyRequest {
  return {};
}
export const QueryGovernanceKeyRequest = {
  encode(_: QueryGovernanceKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGovernanceKeyRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGovernanceKeyRequest>): QueryGovernanceKeyRequest {
    const message = createBaseQueryGovernanceKeyRequest();
    return message;
  }
};
function createBaseQueryGovernanceKeyResponse(): QueryGovernanceKeyResponse {
  return {
    governanceKey: undefined
  };
}
export const QueryGovernanceKeyResponse = {
  encode(message: QueryGovernanceKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};