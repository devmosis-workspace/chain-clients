import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
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
function createBaseAuthority(): Authority {
  return {
    address: "",
    formerAddress: "",
    lastModified: Timestamp.fromPartial({})
  };
}
export const Authority = {
  typeUrl: "/em.authority.v1.Authority",
  encode(message: Authority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: AuthorityAmino): Authority {
    return {
      address: object.address,
      formerAddress: object.former_address,
      lastModified: object.last_modified
    };
  },
  toAmino(message: Authority): AuthorityAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.former_address = message.formerAddress;
    obj.last_modified = message.lastModified;
    return obj;
  },
  fromAminoMsg(object: AuthorityAminoMsg): Authority {
    return Authority.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthorityProtoMsg): Authority {
    return Authority.decode(message.value);
  },
  toProto(message: Authority): Uint8Array {
    return Authority.encode(message).finish();
  },
  toProtoMsg(message: Authority): AuthorityProtoMsg {
    return {
      typeUrl: "/em.authority.v1.Authority",
      value: Authority.encode(message).finish()
    };
  }
};
function createBaseGasPrices(): GasPrices {
  return {
    minimum: []
  };
}
export const GasPrices = {
  typeUrl: "/em.authority.v1.GasPrices",
  encode(message: GasPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GasPricesAmino): GasPrices {
    return {
      minimum: Array.isArray(object?.minimum) ? object.minimum.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: GasPrices): GasPricesAmino {
    const obj: any = {};
    if (message.minimum) {
      obj.minimum = message.minimum.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.minimum = [];
    }
    return obj;
  },
  fromAminoMsg(object: GasPricesAminoMsg): GasPrices {
    return GasPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: GasPricesProtoMsg): GasPrices {
    return GasPrices.decode(message.value);
  },
  toProto(message: GasPrices): Uint8Array {
    return GasPrices.encode(message).finish();
  },
  toProtoMsg(message: GasPrices): GasPricesProtoMsg {
    return {
      typeUrl: "/em.authority.v1.GasPrices",
      value: GasPrices.encode(message).finish()
    };
  }
};