import { Certificate, CertificateAmino, CertificateSDKType } from "./cert";
import { BinaryWriter } from "../../../binary";
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
    owner: string;
    certificate: Certificate;
}
export interface GenesisCertificateProtoMsg {
    typeUrl: "/akash.cert.v1beta2.GenesisCertificate";
    value: Uint8Array;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateAmino {
    owner: string;
    certificate?: CertificateAmino;
}
export interface GenesisCertificateAminoMsg {
    type: "/akash.cert.v1beta2.GenesisCertificate";
    value: GenesisCertificateAmino;
}
/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificateSDKType {
    owner: string;
    certificate: CertificateSDKType;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisState {
    certificates: GenesisCertificate[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/akash.cert.v1beta2.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateAmino {
    certificates: GenesisCertificateAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/akash.cert.v1beta2.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by cert module */
export interface GenesisStateSDKType {
    certificates: GenesisCertificateSDKType[];
}
export declare const GenesisCertificate: {
    typeUrl: string;
    encode(message: GenesisCertificate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisCertificate;
    fromPartial(object: Partial<GenesisCertificate>): GenesisCertificate;
    fromAmino(object: GenesisCertificateAmino): GenesisCertificate;
    toAmino(message: GenesisCertificate): GenesisCertificateAmino;
    fromAminoMsg(object: GenesisCertificateAminoMsg): GenesisCertificate;
    fromProtoMsg(message: GenesisCertificateProtoMsg): GenesisCertificate;
    toProto(message: GenesisCertificate): Uint8Array;
    toProtoMsg(message: GenesisCertificate): GenesisCertificateProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
