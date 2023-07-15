import * as _m0 from "protobufjs/minimal";
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
export declare const PublicKey: {
    encode(message: PublicKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PublicKey;
    fromPartial(object: Partial<PublicKey>): PublicKey;
};
export declare const PrivateKey: {
    encode(message: PrivateKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PrivateKey;
    fromPartial(object: Partial<PrivateKey>): PrivateKey;
};
