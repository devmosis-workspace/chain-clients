import * as _98 from "../burrow/crypto";
export declare const crypto: {
    PublicKey: {
        typeUrl: string;
        encode(message: _98.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _98.PublicKey;
        fromPartial(object: Partial<_98.PublicKey>): _98.PublicKey;
        fromAmino(object: _98.PublicKeyAmino): _98.PublicKey;
        toAmino(message: _98.PublicKey): _98.PublicKeyAmino;
        fromAminoMsg(object: _98.PublicKeyAminoMsg): _98.PublicKey;
        fromProtoMsg(message: _98.PublicKeyProtoMsg): _98.PublicKey;
        toProto(message: _98.PublicKey): Uint8Array;
        toProtoMsg(message: _98.PublicKey): _98.PublicKeyProtoMsg;
    };
    PrivateKey: {
        typeUrl: string;
        encode(message: _98.PrivateKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _98.PrivateKey;
        fromPartial(object: Partial<_98.PrivateKey>): _98.PrivateKey;
        fromAmino(object: _98.PrivateKeyAmino): _98.PrivateKey;
        toAmino(message: _98.PrivateKey): _98.PrivateKeyAmino;
        fromAminoMsg(object: _98.PrivateKeyAminoMsg): _98.PrivateKey;
        fromProtoMsg(message: _98.PrivateKeyProtoMsg): _98.PrivateKey;
        toProto(message: _98.PrivateKey): Uint8Array;
        toProtoMsg(message: _98.PrivateKey): _98.PrivateKeyProtoMsg;
    };
    Signature: {
        typeUrl: string;
        encode(message: _98.Signature, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _98.Signature;
        fromPartial(object: Partial<_98.Signature>): _98.Signature;
        fromAmino(object: _98.SignatureAmino): _98.Signature;
        toAmino(message: _98.Signature): _98.SignatureAmino;
        fromAminoMsg(object: _98.SignatureAminoMsg): _98.Signature;
        fromProtoMsg(message: _98.SignatureProtoMsg): _98.Signature;
        toProto(message: _98.Signature): Uint8Array;
        toProtoMsg(message: _98.Signature): _98.SignatureProtoMsg;
    };
};
