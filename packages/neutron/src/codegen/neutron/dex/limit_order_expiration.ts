import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface LimitOrderExpiration {
  /** see limitOrderTranche.proto for details on goodTilDate */
  expirationTime: Timestamp;
  trancheRef: Uint8Array;
}
export interface LimitOrderExpirationProtoMsg {
  typeUrl: "/neutron.dex.LimitOrderExpiration";
  value: Uint8Array;
}
export interface LimitOrderExpirationAmino {
  /** see limitOrderTranche.proto for details on goodTilDate */
  expiration_time?: string;
  tranche_ref?: string;
}
export interface LimitOrderExpirationAminoMsg {
  type: "/neutron.dex.LimitOrderExpiration";
  value: LimitOrderExpirationAmino;
}
export interface LimitOrderExpirationSDKType {
  expiration_time: TimestampSDKType;
  tranche_ref: Uint8Array;
}
function createBaseLimitOrderExpiration(): LimitOrderExpiration {
  return {
    expirationTime: Timestamp.fromPartial({}),
    trancheRef: new Uint8Array()
  };
}
export const LimitOrderExpiration = {
  typeUrl: "/neutron.dex.LimitOrderExpiration",
  encode(message: LimitOrderExpiration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.trancheRef.length !== 0) {
      writer.uint32(18).bytes(message.trancheRef);
    }
    return writer;
  },
  fromJSON(object: any): LimitOrderExpiration {
    return {
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      trancheRef: isSet(object.trancheRef) ? bytesFromBase64(object.trancheRef) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<LimitOrderExpiration>): LimitOrderExpiration {
    const message = createBaseLimitOrderExpiration();
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.trancheRef = object.trancheRef ?? new Uint8Array();
    return message;
  },
  fromAmino(object: LimitOrderExpirationAmino): LimitOrderExpiration {
    const message = createBaseLimitOrderExpiration();
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.tranche_ref !== undefined && object.tranche_ref !== null) {
      message.trancheRef = bytesFromBase64(object.tranche_ref);
    }
    return message;
  },
  toAmino(message: LimitOrderExpiration): LimitOrderExpirationAmino {
    const obj: any = {};
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime) : undefined;
    obj.tranche_ref = message.trancheRef ? base64FromBytes(message.trancheRef) : undefined;
    return obj;
  },
  fromAminoMsg(object: LimitOrderExpirationAminoMsg): LimitOrderExpiration {
    return LimitOrderExpiration.fromAmino(object.value);
  },
  fromProtoMsg(message: LimitOrderExpirationProtoMsg): LimitOrderExpiration {
    return LimitOrderExpiration.decode(message.value);
  },
  toProto(message: LimitOrderExpiration): Uint8Array {
    return LimitOrderExpiration.encode(message).finish();
  },
  toProtoMsg(message: LimitOrderExpiration): LimitOrderExpirationProtoMsg {
    return {
      typeUrl: "/neutron.dex.LimitOrderExpiration",
      value: LimitOrderExpiration.encode(message).finish()
    };
  }
};