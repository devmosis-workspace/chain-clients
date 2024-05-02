import { Certifier, CertifierAmino, CertifierSDKType, Platform, PlatformAmino, PlatformSDKType, Certificate, CertificateAmino, CertificateSDKType, Library, LibraryAmino, LibrarySDKType } from "./cert";
import { BinaryWriter } from "../../../binary";
export interface GenesisState {
    certifiers: Certifier[];
    platforms: Platform[];
    certificates: Certificate[];
    libraries: Library[];
    nextCertificateId: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/shentu.cert.v1alpha1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    certifiers?: CertifierAmino[];
    platforms?: PlatformAmino[];
    certificates?: CertificateAmino[];
    libraries?: LibraryAmino[];
    next_certificate_id?: string;
}
export interface GenesisStateAminoMsg {
    type: "/shentu.cert.v1alpha1.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    certifiers: CertifierSDKType[];
    platforms: PlatformSDKType[];
    certificates: CertificateSDKType[];
    libraries: LibrarySDKType[];
    next_certificate_id: bigint;
}
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
