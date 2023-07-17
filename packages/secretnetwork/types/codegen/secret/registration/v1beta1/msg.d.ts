import * as _m0 from "protobufjs/minimal";
export interface RaAuthenticate {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface RaAuthenticateSDKType {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface MasterKey {
    bytes: Uint8Array;
}
export interface MasterKeySDKType {
    bytes: Uint8Array;
}
export interface Key {
    key: Uint8Array;
}
export interface KeySDKType {
    key: Uint8Array;
}
export declare const RaAuthenticate: {
    encode(message: RaAuthenticate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RaAuthenticate;
    fromPartial(object: Partial<RaAuthenticate>): RaAuthenticate;
};
export declare const MasterKey: {
    encode(message: MasterKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MasterKey;
    fromPartial(object: Partial<MasterKey>): MasterKey;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Key;
    fromPartial(object: Partial<Key>): Key;
};
