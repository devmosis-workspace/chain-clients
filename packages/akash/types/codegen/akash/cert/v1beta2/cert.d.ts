import * as _m0 from "protobufjs/minimal";
/** State is an enum which refers to state of deployment */
export declare enum Certificate_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** valid - CertificateValid denotes state for deployment active */
    valid = 1,
    /** revoked - CertificateRevoked denotes state for deployment closed */
    revoked = 2,
    UNRECOGNIZED = -1
}
export declare const Certificate_StateSDKType: typeof Certificate_State;
export declare function certificate_StateFromJSON(object: any): Certificate_State;
export declare function certificate_StateToJSON(object: Certificate_State): string;
/** CertificateID stores owner and sequence number */
export interface CertificateID {
    owner: string;
    serial: string;
}
/** CertificateID stores owner and sequence number */
export interface CertificateIDSDKType {
    owner: string;
    serial: string;
}
/** Certificate stores state, certificate and it's public key */
export interface Certificate {
    state: Certificate_State;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
/** Certificate stores state, certificate and it's public key */
export interface CertificateSDKType {
    state: Certificate_State;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
    owner: string;
    serial: string;
    state: string;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilterSDKType {
    owner: string;
    serial: string;
    state: string;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificateSDKType {
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseSDKType {
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
    id?: CertificateID;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateSDKType {
    id?: CertificateIDSDKType;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseSDKType {
}
export declare const CertificateID: {
    encode(message: CertificateID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CertificateID;
    fromPartial(object: Partial<CertificateID>): CertificateID;
};
export declare const Certificate: {
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Certificate;
    fromPartial(object: Partial<Certificate>): Certificate;
};
export declare const CertificateFilter: {
    encode(message: CertificateFilter, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CertificateFilter;
    fromPartial(object: Partial<CertificateFilter>): CertificateFilter;
};
export declare const MsgCreateCertificate: {
    encode(message: MsgCreateCertificate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateCertificate;
    fromPartial(object: Partial<MsgCreateCertificate>): MsgCreateCertificate;
};
export declare const MsgCreateCertificateResponse: {
    encode(_: MsgCreateCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateCertificateResponse;
    fromPartial(_: Partial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse;
};
export declare const MsgRevokeCertificate: {
    encode(message: MsgRevokeCertificate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRevokeCertificate;
    fromPartial(object: Partial<MsgRevokeCertificate>): MsgRevokeCertificate;
};
export declare const MsgRevokeCertificateResponse: {
    encode(_: MsgRevokeCertificateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRevokeCertificateResponse;
    fromPartial(_: Partial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse;
};
