import { BinaryWriter } from "../../../binary";
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
export declare const Certificate_StateAmino: typeof Certificate_State;
export declare function certificate_StateFromJSON(object: any): Certificate_State;
export declare function certificate_StateToJSON(object: Certificate_State): string;
/** CertificateID stores owner and sequence number */
export interface CertificateID {
    owner: string;
    serial: string;
}
export interface CertificateIDProtoMsg {
    typeUrl: "/akash.cert.v1beta2.CertificateID";
    value: Uint8Array;
}
/** CertificateID stores owner and sequence number */
export interface CertificateIDAmino {
    owner: string;
    serial: string;
}
export interface CertificateIDAminoMsg {
    type: "/akash.cert.v1beta2.CertificateID";
    value: CertificateIDAmino;
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
export interface CertificateProtoMsg {
    typeUrl: "/akash.cert.v1beta2.Certificate";
    value: Uint8Array;
}
/** Certificate stores state, certificate and it's public key */
export interface CertificateAmino {
    state: Certificate_State;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
export interface CertificateAminoMsg {
    type: "/akash.cert.v1beta2.Certificate";
    value: CertificateAmino;
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
export interface CertificateFilterProtoMsg {
    typeUrl: "/akash.cert.v1beta2.CertificateFilter";
    value: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilterAmino {
    owner: string;
    serial: string;
    state: string;
}
export interface CertificateFilterAminoMsg {
    type: "/akash.cert.v1beta2.CertificateFilter";
    value: CertificateFilterAmino;
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
export interface MsgCreateCertificateProtoMsg {
    typeUrl: "/akash.cert.v1beta2.MsgCreateCertificate";
    value: Uint8Array;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificateAmino {
    owner: string;
    cert: Uint8Array;
    pubkey: Uint8Array;
}
export interface MsgCreateCertificateAminoMsg {
    type: "/akash.cert.v1beta2.MsgCreateCertificate";
    value: MsgCreateCertificateAmino;
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
export interface MsgCreateCertificateResponseProtoMsg {
    typeUrl: "/akash.cert.v1beta2.MsgCreateCertificateResponse";
    value: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseAmino {
}
export interface MsgCreateCertificateResponseAminoMsg {
    type: "/akash.cert.v1beta2.MsgCreateCertificateResponse";
    value: MsgCreateCertificateResponseAmino;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseSDKType {
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
    id: CertificateID;
}
export interface MsgRevokeCertificateProtoMsg {
    typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificate";
    value: Uint8Array;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateAmino {
    id?: CertificateIDAmino;
}
export interface MsgRevokeCertificateAminoMsg {
    type: "/akash.cert.v1beta2.MsgRevokeCertificate";
    value: MsgRevokeCertificateAmino;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateSDKType {
    id: CertificateIDSDKType;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {
}
export interface MsgRevokeCertificateResponseProtoMsg {
    typeUrl: "/akash.cert.v1beta2.MsgRevokeCertificateResponse";
    value: Uint8Array;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseAmino {
}
export interface MsgRevokeCertificateResponseAminoMsg {
    type: "/akash.cert.v1beta2.MsgRevokeCertificateResponse";
    value: MsgRevokeCertificateResponseAmino;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseSDKType {
}
export declare const CertificateID: {
    typeUrl: string;
    encode(message: CertificateID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CertificateID;
    fromPartial(object: Partial<CertificateID>): CertificateID;
    fromAmino(object: CertificateIDAmino): CertificateID;
    toAmino(message: CertificateID): CertificateIDAmino;
    fromAminoMsg(object: CertificateIDAminoMsg): CertificateID;
    fromProtoMsg(message: CertificateIDProtoMsg): CertificateID;
    toProto(message: CertificateID): Uint8Array;
    toProtoMsg(message: CertificateID): CertificateIDProtoMsg;
};
export declare const Certificate: {
    typeUrl: string;
    encode(message: Certificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Certificate;
    fromPartial(object: Partial<Certificate>): Certificate;
    fromAmino(object: CertificateAmino): Certificate;
    toAmino(message: Certificate): CertificateAmino;
    fromAminoMsg(object: CertificateAminoMsg): Certificate;
    fromProtoMsg(message: CertificateProtoMsg): Certificate;
    toProto(message: Certificate): Uint8Array;
    toProtoMsg(message: Certificate): CertificateProtoMsg;
};
export declare const CertificateFilter: {
    typeUrl: string;
    encode(message: CertificateFilter, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CertificateFilter;
    fromPartial(object: Partial<CertificateFilter>): CertificateFilter;
    fromAmino(object: CertificateFilterAmino): CertificateFilter;
    toAmino(message: CertificateFilter): CertificateFilterAmino;
    fromAminoMsg(object: CertificateFilterAminoMsg): CertificateFilter;
    fromProtoMsg(message: CertificateFilterProtoMsg): CertificateFilter;
    toProto(message: CertificateFilter): Uint8Array;
    toProtoMsg(message: CertificateFilter): CertificateFilterProtoMsg;
};
export declare const MsgCreateCertificate: {
    typeUrl: string;
    encode(message: MsgCreateCertificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateCertificate;
    fromPartial(object: Partial<MsgCreateCertificate>): MsgCreateCertificate;
    fromAmino(object: MsgCreateCertificateAmino): MsgCreateCertificate;
    toAmino(message: MsgCreateCertificate): MsgCreateCertificateAmino;
    fromAminoMsg(object: MsgCreateCertificateAminoMsg): MsgCreateCertificate;
    fromProtoMsg(message: MsgCreateCertificateProtoMsg): MsgCreateCertificate;
    toProto(message: MsgCreateCertificate): Uint8Array;
    toProtoMsg(message: MsgCreateCertificate): MsgCreateCertificateProtoMsg;
};
export declare const MsgCreateCertificateResponse: {
    typeUrl: string;
    encode(_: MsgCreateCertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateCertificateResponse;
    fromPartial(_: Partial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse;
    fromAmino(_: MsgCreateCertificateResponseAmino): MsgCreateCertificateResponse;
    toAmino(_: MsgCreateCertificateResponse): MsgCreateCertificateResponseAmino;
    fromAminoMsg(object: MsgCreateCertificateResponseAminoMsg): MsgCreateCertificateResponse;
    fromProtoMsg(message: MsgCreateCertificateResponseProtoMsg): MsgCreateCertificateResponse;
    toProto(message: MsgCreateCertificateResponse): Uint8Array;
    toProtoMsg(message: MsgCreateCertificateResponse): MsgCreateCertificateResponseProtoMsg;
};
export declare const MsgRevokeCertificate: {
    typeUrl: string;
    encode(message: MsgRevokeCertificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRevokeCertificate;
    fromPartial(object: Partial<MsgRevokeCertificate>): MsgRevokeCertificate;
    fromAmino(object: MsgRevokeCertificateAmino): MsgRevokeCertificate;
    toAmino(message: MsgRevokeCertificate): MsgRevokeCertificateAmino;
    fromAminoMsg(object: MsgRevokeCertificateAminoMsg): MsgRevokeCertificate;
    fromProtoMsg(message: MsgRevokeCertificateProtoMsg): MsgRevokeCertificate;
    toProto(message: MsgRevokeCertificate): Uint8Array;
    toProtoMsg(message: MsgRevokeCertificate): MsgRevokeCertificateProtoMsg;
};
export declare const MsgRevokeCertificateResponse: {
    typeUrl: string;
    encode(_: MsgRevokeCertificateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRevokeCertificateResponse;
    fromPartial(_: Partial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse;
    fromAmino(_: MsgRevokeCertificateResponseAmino): MsgRevokeCertificateResponse;
    toAmino(_: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseAmino;
    fromAminoMsg(object: MsgRevokeCertificateResponseAminoMsg): MsgRevokeCertificateResponse;
    fromProtoMsg(message: MsgRevokeCertificateResponseProtoMsg): MsgRevokeCertificateResponse;
    toProto(message: MsgRevokeCertificateResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseProtoMsg;
};
