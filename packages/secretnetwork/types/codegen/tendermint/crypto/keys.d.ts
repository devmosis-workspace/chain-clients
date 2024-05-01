import { BinaryWriter } from "../../binary";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
export interface PublicKeyProtoMsg {
    typeUrl: "/tendermint.crypto.PublicKey";
    value: Uint8Array;
}
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKeyAmino {
    ed25519?: string;
    secp256k1?: string;
}
export interface PublicKeyAminoMsg {
    type: "/tendermint.crypto.PublicKey";
    value: PublicKeyAmino;
}
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKeySDKType {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
export declare const PublicKey: {
    typeUrl: string;
    encode(message: PublicKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PublicKey;
    fromPartial(object: Partial<PublicKey>): PublicKey;
    fromAmino(object: PublicKeyAmino): PublicKey;
    toAmino(message: PublicKey): PublicKeyAmino;
    fromAminoMsg(object: PublicKeyAminoMsg): PublicKey;
    fromProtoMsg(message: PublicKeyProtoMsg): PublicKey;
    toProto(message: PublicKey): Uint8Array;
    toProtoMsg(message: PublicKey): PublicKeyProtoMsg;
};
