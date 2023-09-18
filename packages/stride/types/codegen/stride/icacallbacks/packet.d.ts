import { BinaryWriter } from "../../binary";
export interface IcacallbacksPacketData {
    noData?: NoData;
}
export interface IcacallbacksPacketDataProtoMsg {
    typeUrl: "/stride.icacallbacks.IcacallbacksPacketData";
    value: Uint8Array;
}
export interface IcacallbacksPacketDataAmino {
    no_data?: NoDataAmino;
}
export interface IcacallbacksPacketDataAminoMsg {
    type: "/stride.icacallbacks.IcacallbacksPacketData";
    value: IcacallbacksPacketDataAmino;
}
export interface IcacallbacksPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataProtoMsg {
    typeUrl: "/stride.icacallbacks.NoData";
    value: Uint8Array;
}
export interface NoDataAmino {
}
export interface NoDataAminoMsg {
    type: "/stride.icacallbacks.NoData";
    value: NoDataAmino;
}
export interface NoDataSDKType {
}
export declare const IcacallbacksPacketData: {
    typeUrl: string;
    encode(message: IcacallbacksPacketData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IcacallbacksPacketData;
    fromPartial(object: Partial<IcacallbacksPacketData>): IcacallbacksPacketData;
    fromAmino(object: IcacallbacksPacketDataAmino): IcacallbacksPacketData;
    toAmino(message: IcacallbacksPacketData): IcacallbacksPacketDataAmino;
    fromAminoMsg(object: IcacallbacksPacketDataAminoMsg): IcacallbacksPacketData;
    fromProtoMsg(message: IcacallbacksPacketDataProtoMsg): IcacallbacksPacketData;
    toProto(message: IcacallbacksPacketData): Uint8Array;
    toProtoMsg(message: IcacallbacksPacketData): IcacallbacksPacketDataProtoMsg;
};
export declare const NoData: {
    typeUrl: string;
    encode(_: NoData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): NoData;
    fromPartial(_: Partial<NoData>): NoData;
    fromAmino(_: NoDataAmino): NoData;
    toAmino(_: NoData): NoDataAmino;
    fromAminoMsg(object: NoDataAminoMsg): NoData;
    fromProtoMsg(message: NoDataProtoMsg): NoData;
    toProto(message: NoData): Uint8Array;
    toProtoMsg(message: NoData): NoDataProtoMsg;
};
