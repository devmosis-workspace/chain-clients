import * as _m0 from "protobufjs/minimal";
export interface StakeibcPacketData {
    noData?: NoData;
}
export interface StakeibcPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const StakeibcPacketData: {
    encode(message: StakeibcPacketData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StakeibcPacketData;
    fromPartial(object: Partial<StakeibcPacketData>): StakeibcPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): NoData;
    fromPartial(_: Partial<NoData>): NoData;
};
