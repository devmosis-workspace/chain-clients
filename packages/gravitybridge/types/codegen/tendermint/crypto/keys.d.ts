import { BinaryWriter } from "../../binary";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
    ed25519?: Uint8Array;
}
export interface PublicKeyProtoMsg {
    typeUrl: "/tendermint.crypto.PublicKey";
    value: Uint8Array;
}
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKeyAmino {
    ed25519?: Uint8Array;
}
export interface PublicKeyAminoMsg {
    type: "/tendermint.crypto.PublicKey";
    value: PublicKeyAmino;
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
export interface PrivateKeyProtoMsg {
    typeUrl: "/tendermint.crypto.PrivateKey";
    value: Uint8Array;
}
/**
 * PrivateKey defines the keys available for use with Tendermint Validators
 * WARNING PrivateKey is used for internal purposes only
 */
export interface PrivateKeyAmino {
    ed25519?: Uint8Array;
}
export interface PrivateKeyAminoMsg {
    type: "/tendermint.crypto.PrivateKey";
    value: PrivateKeyAmino;
}
/**
 * PrivateKey defines the keys available for use with Tendermint Validators
 * WARNING PrivateKey is used for internal purposes only
 */
export interface PrivateKeySDKType {
    ed25519?: Uint8Array;
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
export declare const PrivateKey: {
    typeUrl: string;
    encode(message: PrivateKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PrivateKey;
    fromPartial(object: Partial<PrivateKey>): PrivateKey;
    fromAmino(object: PrivateKeyAmino): PrivateKey;
    toAmino(message: PrivateKey): PrivateKeyAmino;
    fromAminoMsg(object: PrivateKeyAminoMsg): PrivateKey;
    fromProtoMsg(message: PrivateKeyProtoMsg): PrivateKey;
    toProto(message: PrivateKey): Uint8Array;
    toProtoMsg(message: PrivateKey): PrivateKeyProtoMsg;
};
