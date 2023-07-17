import * as _m0 from "protobufjs/minimal";
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
export declare const QueryEncryptedSeedRequest: {
    encode(message: QueryEncryptedSeedRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEncryptedSeedRequest;
    fromPartial(object: Partial<QueryEncryptedSeedRequest>): QueryEncryptedSeedRequest;
};
export declare const QueryEncryptedSeedResponse: {
    encode(message: QueryEncryptedSeedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryEncryptedSeedResponse;
    fromPartial(object: Partial<QueryEncryptedSeedResponse>): QueryEncryptedSeedResponse;
};
