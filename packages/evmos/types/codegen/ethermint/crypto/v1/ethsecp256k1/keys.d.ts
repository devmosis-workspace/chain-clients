import * as _m0 from "protobufjs/minimal";
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKey {
    /** key is the public key in byte form */
    key: Uint8Array;
}
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKeySDKType {
    key: Uint8Array;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKey {
    /** key is the private key in byte form */
    key: Uint8Array;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKeySDKType {
    key: Uint8Array;
}
export declare const PubKey: {
    encode(message: PubKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PubKey;
    fromPartial(object: Partial<PubKey>): PubKey;
};
export declare const PrivKey: {
    encode(message: PrivKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PrivKey;
    fromPartial(object: Partial<PrivKey>): PrivKey;
};
