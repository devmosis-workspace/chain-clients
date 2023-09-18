import { BinaryWriter } from "../../binary";
export interface StakeibcPacketData {
    noData?: NoData;
}
export interface StakeibcPacketDataProtoMsg {
    typeUrl: "/stride.stakeibc.StakeibcPacketData";
    value: Uint8Array;
}
export interface StakeibcPacketDataAmino {
    no_data?: NoDataAmino;
}
export interface StakeibcPacketDataAminoMsg {
    type: "/stride.stakeibc.StakeibcPacketData";
    value: StakeibcPacketDataAmino;
}
export interface StakeibcPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataProtoMsg {
    typeUrl: "/stride.stakeibc.NoData";
    value: Uint8Array;
}
export interface NoDataAmino {
}
export interface NoDataAminoMsg {
    type: "/stride.stakeibc.NoData";
    value: NoDataAmino;
}
export interface NoDataSDKType {
}
export declare const StakeibcPacketData: {
    typeUrl: string;
    encode(message: StakeibcPacketData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StakeibcPacketData;
    fromPartial(object: Partial<StakeibcPacketData>): StakeibcPacketData;
    fromAmino(object: StakeibcPacketDataAmino): StakeibcPacketData;
    toAmino(message: StakeibcPacketData): StakeibcPacketDataAmino;
    fromAminoMsg(object: StakeibcPacketDataAminoMsg): StakeibcPacketData;
    fromProtoMsg(message: StakeibcPacketDataProtoMsg): StakeibcPacketData;
    toProto(message: StakeibcPacketData): Uint8Array;
    toProtoMsg(message: StakeibcPacketData): StakeibcPacketDataProtoMsg;
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
