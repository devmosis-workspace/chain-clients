import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface Authority {
  address: string;
  formerAddress: string;
  lastModified?: Timestamp;
}
export interface AuthoritySDKType {
  address: string;
  former_address: string;
  last_modified?: TimestampSDKType;
}
export interface GasPrices {
  minimum: DecCoin[];
}
export interface GasPricesSDKType {
  minimum: DecCoinSDKType[];
}
function createBaseAuthority(): Authority {
  return {
    address: "",
    formerAddress: "",
    lastModified: undefined
  };
}
export const Authority = {
  encode(message: Authority, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.formerAddress !== "") {
      writer.uint32(18).string(message.formerAddress);
    }
    if (message.lastModified !== undefined) {
      Timestamp.encode(message.lastModified, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Authority {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      formerAddress: isSet(object.formerAddress) ? String(object.formerAddress) : "",
      lastModified: isSet(object.lastModified) ? fromJsonTimestamp(object.lastModified) : undefined
    };
  },
  fromPartial(object: Partial<Authority>): Authority {
    const message = createBaseAuthority();
    message.address = object.address ?? "";
    message.formerAddress = object.formerAddress ?? "";
    message.lastModified = object.lastModified !== undefined && object.lastModified !== null ? Timestamp.fromPartial(object.lastModified) : undefined;
    return message;
  }
};
function createBaseGasPrices(): GasPrices {
  return {
    minimum: []
  };
}
export const GasPrices = {
  encode(message: GasPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minimum) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GasPrices {
    return {
      minimum: Array.isArray(object?.minimum) ? object.minimum.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GasPrices>): GasPrices {
    const message = createBaseGasPrices();
    message.minimum = object.minimum?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};