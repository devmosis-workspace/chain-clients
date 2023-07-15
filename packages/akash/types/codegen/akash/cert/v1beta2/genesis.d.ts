import { Certificate, CertificateSDKType } from "./cert";
import * as _m0 from "protobufjs/minimal";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
    owner: string;
    certificate?: Certificate;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateSDKType {
    owner: string;
    certificate?: CertificateSDKType;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
    certificates: GenesisCertificate[];
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateSDKType {
    certificates: GenesisCertificateSDKType[];
}
export declare const GenesisCertificate: {
    encode(message: GenesisCertificate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisCertificate;
    fromPartial(object: Partial<GenesisCertificate>): GenesisCertificate;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
