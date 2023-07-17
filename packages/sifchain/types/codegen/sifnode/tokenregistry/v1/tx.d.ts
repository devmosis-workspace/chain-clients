import { RegistryEntry, RegistryEntrySDKType, Registry, RegistrySDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
export interface MsgRegister {
    from: string;
    entry?: RegistryEntry;
}
export interface MsgRegisterSDKType {
    from: string;
    entry?: RegistryEntrySDKType;
}
export interface MsgRegisterResponse {
}
export interface MsgRegisterResponseSDKType {
}
export interface MsgSetRegistry {
    from: string;
    registry?: Registry;
}
export interface MsgSetRegistrySDKType {
    from: string;
    registry?: RegistrySDKType;
}
export interface MsgSetRegistryResponse {
}
export interface MsgSetRegistryResponseSDKType {
}
export interface MsgDeregister {
    from: string;
    denom: string;
}
export interface MsgDeregisterSDKType {
    from: string;
    denom: string;
}
export interface MsgDeregisterResponse {
}
export interface MsgDeregisterResponseSDKType {
}
export declare const MsgRegister: {
    encode(message: MsgRegister, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegister;
    fromPartial(object: Partial<MsgRegister>): MsgRegister;
};
export declare const MsgRegisterResponse: {
    encode(_: MsgRegisterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterResponse;
    fromPartial(_: Partial<MsgRegisterResponse>): MsgRegisterResponse;
};
export declare const MsgSetRegistry: {
    encode(message: MsgSetRegistry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetRegistry;
    fromPartial(object: Partial<MsgSetRegistry>): MsgSetRegistry;
};
export declare const MsgSetRegistryResponse: {
    encode(_: MsgSetRegistryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetRegistryResponse;
    fromPartial(_: Partial<MsgSetRegistryResponse>): MsgSetRegistryResponse;
};
export declare const MsgDeregister: {
    encode(message: MsgDeregister, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeregister;
    fromPartial(object: Partial<MsgDeregister>): MsgDeregister;
};
export declare const MsgDeregisterResponse: {
    encode(_: MsgDeregisterResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeregisterResponse;
    fromPartial(_: Partial<MsgDeregisterResponse>): MsgDeregisterResponse;
};
