import { LegacyAminoPubKey, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequest {
}
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequestSDKType {
}
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
export declare const QueryGovernanceKeyRequest: {
    encode(_: QueryGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGovernanceKeyRequest;
    fromPartial(_: Partial<QueryGovernanceKeyRequest>): QueryGovernanceKeyRequest;
};
export declare const QueryGovernanceKeyResponse: {
    encode(message: QueryGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGovernanceKeyResponse;
    fromPartial(object: Partial<QueryGovernanceKeyResponse>): QueryGovernanceKeyResponse;
};
