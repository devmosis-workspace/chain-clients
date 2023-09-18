import { BinaryWriter } from "../../../binary";
export interface SeedConfig {
    masterKey: string;
    encryptedKey: string;
    version: number;
}
export interface SeedConfigProtoMsg {
    typeUrl: "/secret.registration.v1beta1.SeedConfig";
    value: Uint8Array;
}
export interface SeedConfigAmino {
    master_key: string;
    encrypted_key: string;
    version: number;
}
export interface SeedConfigAminoMsg {
    type: "/secret.registration.v1beta1.SeedConfig";
    value: SeedConfigAmino;
}
export interface SeedConfigSDKType {
    master_key: string;
    encrypted_key: string;
    version: number;
}
export interface LegacySeedConfig {
    masterCert: string;
    encryptedKey: string;
}
export interface LegacySeedConfigProtoMsg {
    typeUrl: "/secret.registration.v1beta1.LegacySeedConfig";
    value: Uint8Array;
}
export interface LegacySeedConfigAmino {
    master_cert: string;
    encrypted_key: string;
}
export interface LegacySeedConfigAminoMsg {
    type: "/secret.registration.v1beta1.LegacySeedConfig";
    value: LegacySeedConfigAmino;
}
export interface LegacySeedConfigSDKType {
    master_cert: string;
    encrypted_key: string;
}
export interface RegistrationNodeInfo {
    certificate: Uint8Array;
    encryptedSeed: Uint8Array;
}
export interface RegistrationNodeInfoProtoMsg {
    typeUrl: "/secret.registration.v1beta1.RegistrationNodeInfo";
    value: Uint8Array;
}
export interface RegistrationNodeInfoAmino {
    certificate: Uint8Array;
    encrypted_seed: Uint8Array;
}
export interface RegistrationNodeInfoAminoMsg {
    type: "/secret.registration.v1beta1.RegistrationNodeInfo";
    value: RegistrationNodeInfoAmino;
}
export interface RegistrationNodeInfoSDKType {
    certificate: Uint8Array;
    encrypted_seed: Uint8Array;
}
export declare const SeedConfig: {
    typeUrl: string;
    encode(message: SeedConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SeedConfig;
    fromPartial(object: Partial<SeedConfig>): SeedConfig;
    fromAmino(object: SeedConfigAmino): SeedConfig;
    toAmino(message: SeedConfig): SeedConfigAmino;
    fromAminoMsg(object: SeedConfigAminoMsg): SeedConfig;
    fromProtoMsg(message: SeedConfigProtoMsg): SeedConfig;
    toProto(message: SeedConfig): Uint8Array;
    toProtoMsg(message: SeedConfig): SeedConfigProtoMsg;
};
export declare const LegacySeedConfig: {
    typeUrl: string;
    encode(message: LegacySeedConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LegacySeedConfig;
    fromPartial(object: Partial<LegacySeedConfig>): LegacySeedConfig;
    fromAmino(object: LegacySeedConfigAmino): LegacySeedConfig;
    toAmino(message: LegacySeedConfig): LegacySeedConfigAmino;
    fromAminoMsg(object: LegacySeedConfigAminoMsg): LegacySeedConfig;
    fromProtoMsg(message: LegacySeedConfigProtoMsg): LegacySeedConfig;
    toProto(message: LegacySeedConfig): Uint8Array;
    toProtoMsg(message: LegacySeedConfig): LegacySeedConfigProtoMsg;
};
export declare const RegistrationNodeInfo: {
    typeUrl: string;
    encode(message: RegistrationNodeInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegistrationNodeInfo;
    fromPartial(object: Partial<RegistrationNodeInfo>): RegistrationNodeInfo;
    fromAmino(object: RegistrationNodeInfoAmino): RegistrationNodeInfo;
    toAmino(message: RegistrationNodeInfo): RegistrationNodeInfoAmino;
    fromAminoMsg(object: RegistrationNodeInfoAminoMsg): RegistrationNodeInfo;
    fromProtoMsg(message: RegistrationNodeInfoProtoMsg): RegistrationNodeInfo;
    toProto(message: RegistrationNodeInfo): Uint8Array;
    toProtoMsg(message: RegistrationNodeInfo): RegistrationNodeInfoProtoMsg;
};
