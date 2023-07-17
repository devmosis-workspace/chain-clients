import * as _m0 from "protobufjs/minimal";
export interface SeedConfig {
    masterKey: string;
    encryptedKey: string;
    version: number;
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
export interface LegacySeedConfigSDKType {
    master_cert: string;
    encrypted_key: string;
}
export interface RegistrationNodeInfo {
    certificate: Uint8Array;
    encryptedSeed: Uint8Array;
}
export interface RegistrationNodeInfoSDKType {
    certificate: Uint8Array;
    encrypted_seed: Uint8Array;
}
export declare const SeedConfig: {
    encode(message: SeedConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SeedConfig;
    fromPartial(object: Partial<SeedConfig>): SeedConfig;
};
export declare const LegacySeedConfig: {
    encode(message: LegacySeedConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LegacySeedConfig;
    fromPartial(object: Partial<LegacySeedConfig>): LegacySeedConfig;
};
export declare const RegistrationNodeInfo: {
    encode(message: RegistrationNodeInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegistrationNodeInfo;
    fromPartial(object: Partial<RegistrationNodeInfo>): RegistrationNodeInfo;
};
