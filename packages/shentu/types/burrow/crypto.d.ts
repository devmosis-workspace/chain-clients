import { BinaryWriter } from "../binary";
export interface PublicKey {
    CurveType: number;
    PublicKey: Uint8Array;
}
export interface PublicKeyProtoMsg {
    typeUrl: "/crypto.PublicKey";
    value: Uint8Array;
}
export interface PublicKeyAmino {
    CurveType?: number;
    PublicKey?: string;
}
export interface PublicKeyAminoMsg {
    type: "/crypto.PublicKey";
    value: PublicKeyAmino;
}
export interface PublicKeySDKType {
    CurveType: number;
    PublicKey: Uint8Array;
}
export interface PrivateKey {
    CurveType: number;
    /** Note may need initialisation */
    PublicKey: Uint8Array;
    PrivateKey: Uint8Array;
}
export interface PrivateKeyProtoMsg {
    typeUrl: "/crypto.PrivateKey";
    value: Uint8Array;
}
export interface PrivateKeyAmino {
    CurveType?: number;
    /** Note may need initialisation */
    PublicKey?: string;
    PrivateKey?: string;
}
export interface PrivateKeyAminoMsg {
    type: "/crypto.PrivateKey";
    value: PrivateKeyAmino;
}
export interface PrivateKeySDKType {
    CurveType: number;
    PublicKey: Uint8Array;
    PrivateKey: Uint8Array;
}
export interface Signature {
    CurveType: number;
    Signature: Uint8Array;
}
export interface SignatureProtoMsg {
    typeUrl: "/crypto.Signature";
    value: Uint8Array;
}
export interface SignatureAmino {
    CurveType?: number;
    Signature?: string;
}
export interface SignatureAminoMsg {
    type: "/crypto.Signature";
    value: SignatureAmino;
}
export interface SignatureSDKType {
    CurveType: number;
    Signature: Uint8Array;
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
export declare const Signature: {
    typeUrl: string;
    encode(message: Signature, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Signature;
    fromPartial(object: Partial<Signature>): Signature;
    fromAmino(object: SignatureAmino): Signature;
    toAmino(message: Signature): SignatureAmino;
    fromAminoMsg(object: SignatureAminoMsg): Signature;
    fromProtoMsg(message: SignatureProtoMsg): Signature;
    toProto(message: Signature): Uint8Array;
    toProtoMsg(message: Signature): SignatureProtoMsg;
};
