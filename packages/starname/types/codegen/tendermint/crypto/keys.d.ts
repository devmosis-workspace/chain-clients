import * as _m0 from "protobufjs/minimal";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKeySDKType {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
export declare const PublicKey: {
    encode(message: PublicKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PublicKey;
    fromPartial(object: Partial<PublicKey>): PublicKey;
};
