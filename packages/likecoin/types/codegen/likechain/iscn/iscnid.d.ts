import { BinaryWriter } from "../../binary";
export interface IscnIdPrefix {
    registryName: string;
    contentId: string;
}
export interface IscnIdPrefixProtoMsg {
    typeUrl: "/likechain.iscn.IscnIdPrefix";
    value: Uint8Array;
}
export interface IscnIdPrefixAmino {
    registry_name: string;
    content_id: string;
}
export interface IscnIdPrefixAminoMsg {
    type: "/likechain.iscn.IscnIdPrefix";
    value: IscnIdPrefixAmino;
}
export interface IscnIdPrefixSDKType {
    registry_name: string;
    content_id: string;
}
export interface IscnId {
    prefix: IscnIdPrefix;
    version: bigint;
}
export interface IscnIdProtoMsg {
    typeUrl: "/likechain.iscn.IscnId";
    value: Uint8Array;
}
export interface IscnIdAmino {
    prefix?: IscnIdPrefixAmino;
    version: string;
}
export interface IscnIdAminoMsg {
    type: "/likechain.iscn.IscnId";
    value: IscnIdAmino;
}
export interface IscnIdSDKType {
    prefix: IscnIdPrefixSDKType;
    version: bigint;
}
export declare const IscnIdPrefix: {
    typeUrl: string;
    encode(message: IscnIdPrefix, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IscnIdPrefix;
    fromPartial(object: Partial<IscnIdPrefix>): IscnIdPrefix;
    fromAmino(object: IscnIdPrefixAmino): IscnIdPrefix;
    toAmino(message: IscnIdPrefix): IscnIdPrefixAmino;
    fromAminoMsg(object: IscnIdPrefixAminoMsg): IscnIdPrefix;
    fromProtoMsg(message: IscnIdPrefixProtoMsg): IscnIdPrefix;
    toProto(message: IscnIdPrefix): Uint8Array;
    toProtoMsg(message: IscnIdPrefix): IscnIdPrefixProtoMsg;
};
export declare const IscnId: {
    typeUrl: string;
    encode(message: IscnId, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IscnId;
    fromPartial(object: Partial<IscnId>): IscnId;
    fromAmino(object: IscnIdAmino): IscnId;
    toAmino(message: IscnId): IscnIdAmino;
    fromAminoMsg(object: IscnIdAminoMsg): IscnId;
    fromProtoMsg(message: IscnIdProtoMsg): IscnId;
    toProto(message: IscnId): Uint8Array;
    toProtoMsg(message: IscnId): IscnIdProtoMsg;
};
