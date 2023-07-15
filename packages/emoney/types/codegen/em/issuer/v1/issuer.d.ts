import * as _m0 from "protobufjs/minimal";
export interface Issuer {
    address: string;
    denoms: string[];
}
export interface IssuerSDKType {
    address: string;
    denoms: string[];
}
export interface Issuers {
    issuers: Issuer[];
}
export interface IssuersSDKType {
    issuers: IssuerSDKType[];
}
export declare const Issuer: {
    encode(message: Issuer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Issuer;
    fromPartial(object: Partial<Issuer>): Issuer;
};
export declare const Issuers: {
    encode(message: Issuers, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Issuers;
    fromPartial(object: Partial<Issuers>): Issuers;
};
