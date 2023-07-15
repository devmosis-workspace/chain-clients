import * as _m0 from "protobufjs/minimal";
export interface ProxiedValidator {
    validator: Uint8Array;
    proxy: Uint8Array;
    active: boolean;
}
export interface ProxiedValidatorSDKType {
    validator: Uint8Array;
    proxy: Uint8Array;
    active: boolean;
}
export declare const ProxiedValidator: {
    encode(message: ProxiedValidator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ProxiedValidator;
    fromPartial(object: Partial<ProxiedValidator>): ProxiedValidator;
};
