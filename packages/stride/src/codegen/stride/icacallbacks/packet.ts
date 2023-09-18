import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
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
export interface NoData {}
export interface NoDataProtoMsg {
  typeUrl: "/stride.icacallbacks.NoData";
  value: Uint8Array;
}
export interface NoDataAmino {}
export interface NoDataAminoMsg {
  type: "/stride.icacallbacks.NoData";
  value: NoDataAmino;
}
export interface NoDataSDKType {}
function createBaseIcacallbacksPacketData(): IcacallbacksPacketData {
  return {
    noData: undefined
  };
}
export const IcacallbacksPacketData = {
  typeUrl: "/stride.icacallbacks.IcacallbacksPacketData",
  encode(message: IcacallbacksPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: IcacallbacksPacketDataAmino): IcacallbacksPacketData {
    return {
      noData: object?.no_data ? NoData.fromAmino(object.no_data) : undefined
    };
  },
  toAmino(message: IcacallbacksPacketData): IcacallbacksPacketDataAmino {
    const obj: any = {};
    obj.no_data = message.noData ? NoData.toAmino(message.noData) : undefined;
    return obj;
  },
  fromAminoMsg(object: IcacallbacksPacketDataAminoMsg): IcacallbacksPacketData {
    return IcacallbacksPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: IcacallbacksPacketDataProtoMsg): IcacallbacksPacketData {
    return IcacallbacksPacketData.decode(message.value);
  },
  toProto(message: IcacallbacksPacketData): Uint8Array {
    return IcacallbacksPacketData.encode(message).finish();
  },
  toProtoMsg(message: IcacallbacksPacketData): IcacallbacksPacketDataProtoMsg {
    return {
      typeUrl: "/stride.icacallbacks.IcacallbacksPacketData",
      value: IcacallbacksPacketData.encode(message).finish()
    };
  }
};
function createBaseNoData(): NoData {
  return {};
}
export const NoData = {
  typeUrl: "/stride.icacallbacks.NoData",
  encode(_: NoData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): NoData {
    return {};
  },
  fromPartial(_: Partial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
  fromAmino(_: NoDataAmino): NoData {
    return {};
  },
  toAmino(_: NoData): NoDataAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: NoDataAminoMsg): NoData {
    return NoData.fromAmino(object.value);
  },
  fromProtoMsg(message: NoDataProtoMsg): NoData {
    return NoData.decode(message.value);
  },
  toProto(message: NoData): Uint8Array {
    return NoData.encode(message).finish();
  },
  toProtoMsg(message: NoData): NoDataProtoMsg {
    return {
      typeUrl: "/stride.icacallbacks.NoData",
      value: NoData.encode(message).finish()
    };
  }
};