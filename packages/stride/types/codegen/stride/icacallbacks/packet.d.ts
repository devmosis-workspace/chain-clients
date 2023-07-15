import * as _m0 from "protobufjs/minimal";
export interface IcacallbacksPacketData {
    noData?: NoData;
}
export interface IcacallbacksPacketDataSDKType {
    no_data?: NoDataSDKType;
}
export interface NoData {
}
export interface NoDataSDKType {
}
export declare const IcacallbacksPacketData: {
    encode(message: IcacallbacksPacketData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IcacallbacksPacketData;
    fromPartial(object: Partial<IcacallbacksPacketData>): IcacallbacksPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): NoData;
    fromPartial(_: Partial<NoData>): NoData;
};
