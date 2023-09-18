import { BinaryWriter } from "../../../binary";
export interface RaAuthenticate {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface RaAuthenticateProtoMsg {
    typeUrl: "/secret.registration.v1beta1.RaAuthenticate";
    value: Uint8Array;
}
export interface RaAuthenticateAmino {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface RaAuthenticateAminoMsg {
    type: "/secret.registration.v1beta1.RaAuthenticate";
    value: RaAuthenticateAmino;
}
export interface RaAuthenticateSDKType {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface MasterKey {
    bytes: Uint8Array;
}
export interface MasterKeyProtoMsg {
    typeUrl: "/secret.registration.v1beta1.MasterKey";
    value: Uint8Array;
}
export interface MasterKeyAmino {
    bytes: Uint8Array;
}
export interface MasterKeyAminoMsg {
    type: "/secret.registration.v1beta1.MasterKey";
    value: MasterKeyAmino;
}
export interface MasterKeySDKType {
    bytes: Uint8Array;
}
export interface Key {
    key: Uint8Array;
}
export interface KeyProtoMsg {
    typeUrl: "/secret.registration.v1beta1.Key";
    value: Uint8Array;
}
export interface KeyAmino {
    key: Uint8Array;
}
export interface KeyAminoMsg {
    type: "/secret.registration.v1beta1.Key";
    value: KeyAmino;
}
export interface KeySDKType {
    key: Uint8Array;
}
export declare const RaAuthenticate: {
    typeUrl: string;
    encode(message: RaAuthenticate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RaAuthenticate;
    fromPartial(object: Partial<RaAuthenticate>): RaAuthenticate;
    fromAmino(object: RaAuthenticateAmino): RaAuthenticate;
    toAmino(message: RaAuthenticate): RaAuthenticateAmino;
    fromAminoMsg(object: RaAuthenticateAminoMsg): RaAuthenticate;
    fromProtoMsg(message: RaAuthenticateProtoMsg): RaAuthenticate;
    toProto(message: RaAuthenticate): Uint8Array;
    toProtoMsg(message: RaAuthenticate): RaAuthenticateProtoMsg;
};
export declare const MasterKey: {
    typeUrl: string;
    encode(message: MasterKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MasterKey;
    fromPartial(object: Partial<MasterKey>): MasterKey;
    fromAmino(object: MasterKeyAmino): MasterKey;
    toAmino(message: MasterKey): MasterKeyAmino;
    fromAminoMsg(object: MasterKeyAminoMsg): MasterKey;
    fromProtoMsg(message: MasterKeyProtoMsg): MasterKey;
    toProto(message: MasterKey): Uint8Array;
    toProtoMsg(message: MasterKey): MasterKeyProtoMsg;
};
export declare const Key: {
    typeUrl: string;
    encode(message: Key, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Key;
    fromPartial(object: Partial<Key>): Key;
    fromAmino(object: KeyAmino): Key;
    toAmino(message: Key): KeyAmino;
    fromAminoMsg(object: KeyAminoMsg): Key;
    fromProtoMsg(message: KeyProtoMsg): Key;
    toProto(message: Key): Uint8Array;
    toProtoMsg(message: Key): KeyProtoMsg;
};
