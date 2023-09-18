import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Authority {
    address: string;
    formerAddress: string;
    lastModified: Timestamp;
}
export interface AuthorityProtoMsg {
    typeUrl: "/em.authority.v1.Authority";
    value: Uint8Array;
}
export interface AuthorityAmino {
    address: string;
    former_address: string;
    last_modified?: TimestampAmino;
}
export interface AuthorityAminoMsg {
    type: "/em.authority.v1.Authority";
    value: AuthorityAmino;
}
export interface AuthoritySDKType {
    address: string;
    former_address: string;
    last_modified: TimestampSDKType;
}
export interface GasPrices {
    minimum: DecCoin[];
}
export interface GasPricesProtoMsg {
    typeUrl: "/em.authority.v1.GasPrices";
    value: Uint8Array;
}
export interface GasPricesAmino {
    minimum: DecCoinAmino[];
}
export interface GasPricesAminoMsg {
    type: "/em.authority.v1.GasPrices";
    value: GasPricesAmino;
}
export interface GasPricesSDKType {
    minimum: DecCoinSDKType[];
}
export declare const Authority: {
    typeUrl: string;
    encode(message: Authority, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Authority;
    fromPartial(object: Partial<Authority>): Authority;
    fromAmino(object: AuthorityAmino): Authority;
    toAmino(message: Authority): AuthorityAmino;
    fromAminoMsg(object: AuthorityAminoMsg): Authority;
    fromProtoMsg(message: AuthorityProtoMsg): Authority;
    toProto(message: Authority): Uint8Array;
    toProtoMsg(message: Authority): AuthorityProtoMsg;
};
export declare const GasPrices: {
    typeUrl: string;
    encode(message: GasPrices, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GasPrices;
    fromPartial(object: Partial<GasPrices>): GasPrices;
    fromAmino(object: GasPricesAmino): GasPrices;
    toAmino(message: GasPrices): GasPricesAmino;
    fromAminoMsg(object: GasPricesAminoMsg): GasPrices;
    fromProtoMsg(message: GasPricesProtoMsg): GasPrices;
    toProto(message: GasPrices): Uint8Array;
    toProtoMsg(message: GasPrices): GasPricesProtoMsg;
};
