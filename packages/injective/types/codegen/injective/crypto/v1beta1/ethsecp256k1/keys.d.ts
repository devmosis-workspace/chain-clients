import { BinaryWriter } from "../../../../binary";
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKey {
    key: Uint8Array;
}
export interface PubKeyProtoMsg {
    typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PubKey";
    value: Uint8Array;
}
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKeyAmino {
    key: Uint8Array;
}
export interface PubKeyAminoMsg {
    type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey";
    value: PubKeyAmino;
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
    /**
     * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
     * Tendermint's PrivateKey interface.
     */
    key: Uint8Array;
}
export interface PrivKeyProtoMsg {
    typeUrl: "/injective.crypto.v1beta1.ethsecp256k1.PrivKey";
    value: Uint8Array;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKeyAmino {
    /**
     * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
     * Tendermint's PrivateKey interface.
     */
    key: Uint8Array;
}
export interface PrivKeyAminoMsg {
    type: "/injective.crypto.v1beta1.ethsecp256k1.PrivKey";
    value: PrivKeyAmino;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKeySDKType {
    key: Uint8Array;
}
export declare const PubKey: {
    typeUrl: string;
    encode(message: PubKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PubKey;
    fromPartial(object: Partial<PubKey>): PubKey;
    fromAmino(object: PubKeyAmino): PubKey;
    toAmino(message: PubKey): PubKeyAmino;
    fromAminoMsg(object: PubKeyAminoMsg): PubKey;
    fromProtoMsg(message: PubKeyProtoMsg): PubKey;
    toProto(message: PubKey): Uint8Array;
    toProtoMsg(message: PubKey): PubKeyProtoMsg;
};
export declare const PrivKey: {
    typeUrl: string;
    encode(message: PrivKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PrivKey;
    fromPartial(object: Partial<PrivKey>): PrivKey;
    fromAmino(object: PrivKeyAmino): PrivKey;
    toAmino(message: PrivKey): PrivKeyAmino;
    fromAminoMsg(object: PrivKeyAminoMsg): PrivKey;
    fromProtoMsg(message: PrivKeyProtoMsg): PrivKey;
    toProto(message: PrivKey): Uint8Array;
    toProtoMsg(message: PrivKey): PrivKeyProtoMsg;
};
