import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface StakeibcPacketData {
  noData?: NoData;
}
export interface StakeibcPacketDataSDKType {
  no_data?: NoDataSDKType;
}
export interface NoData {}
export interface NoDataSDKType {}
function createBaseStakeibcPacketData(): StakeibcPacketData {
  return {
    noData: undefined
  };
}
export const StakeibcPacketData = {
  encode(message: StakeibcPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): StakeibcPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined
    };
  },
  fromPartial(object: Partial<StakeibcPacketData>): StakeibcPacketData {
    const message = createBaseStakeibcPacketData();
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