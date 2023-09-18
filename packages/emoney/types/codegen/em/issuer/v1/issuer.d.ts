import { BinaryWriter } from "../../../binary";
export interface Issuer {
    address: string;
    denoms: string[];
}
export interface IssuerProtoMsg {
    typeUrl: "/em.issuer.v1.Issuer";
    value: Uint8Array;
}
export interface IssuerAmino {
    address: string;
    denoms: string[];
}
export interface IssuerAminoMsg {
    type: "/em.issuer.v1.Issuer";
    value: IssuerAmino;
}
export interface IssuerSDKType {
    address: string;
    denoms: string[];
}
export interface Issuers {
    issuers: Issuer[];
}
export interface IssuersProtoMsg {
    typeUrl: "/em.issuer.v1.Issuers";
    value: Uint8Array;
}
export interface IssuersAmino {
    issuers: IssuerAmino[];
}
export interface IssuersAminoMsg {
    type: "/em.issuer.v1.Issuers";
    value: IssuersAmino;
}
export interface IssuersSDKType {
    issuers: IssuerSDKType[];
}
export declare const Issuer: {
    typeUrl: string;
    encode(message: Issuer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Issuer;
    fromPartial(object: Partial<Issuer>): Issuer;
    fromAmino(object: IssuerAmino): Issuer;
    toAmino(message: Issuer): IssuerAmino;
    fromAminoMsg(object: IssuerAminoMsg): Issuer;
    fromProtoMsg(message: IssuerProtoMsg): Issuer;
    toProto(message: Issuer): Uint8Array;
    toProtoMsg(message: Issuer): IssuerProtoMsg;
};
export declare const Issuers: {
    typeUrl: string;
    encode(message: Issuers, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Issuers;
    fromPartial(object: Partial<Issuers>): Issuers;
    fromAmino(object: IssuersAmino): Issuers;
    toAmino(message: Issuers): IssuersAmino;
    fromAminoMsg(object: IssuersAminoMsg): Issuers;
    fromProtoMsg(message: IssuersProtoMsg): Issuers;
    toProto(message: Issuers): Uint8Array;
    toProtoMsg(message: Issuers): IssuersProtoMsg;
};
