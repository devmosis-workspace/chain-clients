import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface IcacallbacksPacketData {
  noData?: NoData;
}
export interface IcacallbacksPacketDataSDKType {
  no_data?: NoDataSDKType;
}
export interface NoData {}
export interface NoDataSDKType {}
function createBaseIcacallbacksPacketData(): IcacallbacksPacketData {
  return {
    noData: undefined
  };
}
export const IcacallbacksPacketData = {
  encode(message: IcacallbacksPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IcacallbacksPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined
    };
  },
  fromPartial(object: Partial<IcacallbacksPacketData>): IcacallbacksPacketData {
    const message = createBaseIcacallbacksPacketData();
    message.noData = object.noData !== undefined && object.noData !== null ? NoData.fromPartial(object.noData) : undefined;
    return message;
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): NoData {
    return {};
  },
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  }
};