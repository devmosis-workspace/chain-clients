import * as _m0 from "protobufjs/minimal";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
    key: Uint8Array;
}
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKeySDKType {
    key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
    key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
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
